import { execFileSync } from 'node:child_process';
import { createHmac } from 'node:crypto';
import { appendFileSync, readFileSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { join } from 'node:path';
import { setTimeout as delay } from 'node:timers/promises';
import { fileURLToPath } from 'node:url';
import { isDeepStrictEqual } from 'node:util';

const { validateReport } = createRequire(import.meta.url)('../assets/data-contract.js');
const repositoryRoot = fileURLToPath(new URL('../', import.meta.url));
const reportPath = 'data/weekly-reports.json';
const workflowPath = '.github/workflows/feishu-weekly-report.yml';
const siteUrl = 'https://inesfang.github.io/furniwell-seo-dashboard/';
const dashboardUrl = new URL('ahrefs/weekly-report.html', siteUrl).href;
const siteNames = new Map([
  ['furniwell.de', 'Furniwell'],
  ['songmics.de', 'SONGMICS'],
  ['flexispot.de', 'FlexiSpot'],
  ['desktronic.de', 'Desktronic'],
  ['dpj-workspace.com/de/', 'DPJ /de/'],
  ['yaasa.com', 'Yaasa'],
  ['ergotopia.de', 'Ergotopia'],
]);
const count = new Intl.NumberFormat('en-GB');

function currentReport(bundle) {
  if (bundle.schemaVersion !== 1 || !Array.isArray(bundle.weeklyReports)) {
    throw new Error('周报数据版本无效。');
  }
  return bundle.weeklyReports.find(report => report.id === bundle.weeklyAutomation?.lastReportId);
}

function readPublicReport() {
  const bundle = JSON.parse(readFileSync(join(repositoryRoot, reportPath), 'utf8'));
  const report = currentReport(bundle);
  if (!report || report.classification !== 'public') {
    throw new Error('找不到已授权公开的最新一期自动周报。');
  }
  validateReport(report);
  const targets = new Set(report.rows.map(row => row.target));
  if (targets.size !== siteNames.size || report.rows.length !== siteNames.size || report.rows.some(row =>
    !siteNames.has(row.target) || row.traffic === null || row.keywords === null ||
    row.mode !== (row.target === 'dpj-workspace.com/de/' ? 'prefix' : 'subdomains')
  )) {
    throw new Error('本期公开周报的站点范围或核心指标不完整。');
  }
  return report;
}

function shouldSendOnPush(report) {
  const { before } = JSON.parse(readFileSync(process.env.GITHUB_EVENT_PATH, 'utf8'));
  if (typeof before !== 'string' || !/^[a-f0-9]{40}$/.test(before) || /^0+$/.test(before)) {
    throw new Error('无法确认推送前的周报版本。');
  }
  const previousWorkflow = execFileSync('git', ['ls-tree', '--name-only', before, '--', workflowPath], {
    cwd: repositoryRoot,
    encoding: 'utf8',
  });
  // The first installation also sends the current report as the requested test.
  if (!previousWorkflow.trim()) return true;
  const oldData = execFileSync('git', ['show', `${before}:${reportPath}`], {
    cwd: repositoryRoot,
    encoding: 'utf8',
    maxBuffer: 16 * 1024 * 1024,
  });
  const bundle = JSON.parse(oldData);
  const previousDate = currentReport(bundle)?.date ?? bundle.weeklyReports.map(entry => entry.date).sort().at(-1);
  return !previousDate || report.date > previousDate;
}

function metric(value, previous) {
  if (value == null) return '—';
  const difference = previous > 0 ? (value - previous) / previous * 100 : null;
  if (difference === null) return count.format(value);
  const percent = `${difference > 0 ? '+' : ''}${difference.toFixed(1)}%`;
  return `${count.format(value)}（${percent}）`;
}

function reportMessage(report) {
  const ranked = [...report.rows].sort((a, b) => b.traffic - a.traffic);
  const furniwell = ranked.find(row => row.target === 'furniwell.de');
  const rank = 1 + ranked.filter(row => row.traffic > furniwell.traffic).length;
  const searchTraffic = row => `自然 ${metric(row.traffic, row.previousTraffic)} · 付费 ${metric(row.paidTraffic, row.previousPaidTraffic)}`;
  const title = `德国竞品流量周报｜${report.date}`;
  const sections = [
    `DE · ${report.date} 对比 ${report.comparedDate}`,
    `**Furniwell｜自然流量第 ${rank}/${ranked.length}**\n${searchTraffic(furniwell)}\n关键词 ${metric(furniwell.keywords, furniwell.previousKeywords)} · Top 3 ${metric(furniwell.top3, furniwell.previousTop3)}`,
    `**竞品搜索流量**\n${ranked.filter(row => row !== furniwell).map(row =>
      `**${siteNames.get(row.target)}**　${searchTraffic(row)}`
    ).join('\n')}`,
    '数据为 Ahrefs 估算月搜索流量。括号内为两期快照的周环比。',
  ];
  const link = `[查看 Ahrefs 竞品周监控](${dashboardUrl})`;
  return {
    preview: [`## ${title}`, ...sections, link].join('\n\n') + '\n',
    card: {
      config: { wide_screen_mode: true },
      header: { template: 'blue', title: { tag: 'plain_text', content: title } },
      elements: [...sections, link].map(content => ({ tag: 'div', text: { tag: 'lark_md', content } })),
    },
  };
}

function summarize(message) {
  console.log(message);
  if (process.env.GITHUB_STEP_SUMMARY) appendFileSync(process.env.GITHUB_STEP_SUMMARY, `${message}\n`);
}

async function waitForPublished(report, attempts) {
  for (let attempt = 0; attempt < attempts; attempt += 1) {
    let published;
    try {
      // Read the bundle loaded by the dashboard itself. Parse the assignment as JSON.
      const url = new URL('data/weekly-reports.js', siteUrl);
      url.searchParams.set('check', `${report.id}-${Date.now()}`);
      const response = await fetch(url, { cache: 'no-store', signal: AbortSignal.timeout(8_000) });
      if (response.ok) {
        const assignment = (await response.text()).match(/^\s*window\.FURNIWELL_SEO_DATA\s*=\s*([\s\S]+);\s*$/);
        if (assignment) published = currentReport(JSON.parse(assignment[1]));
      }
    } catch {
      // The site can be unavailable or serve an older asset during deployment.
    }
    if (isDeepStrictEqual(published, report)) return;
    if (published?.date > report.date) throw new Error('看板已发布更新一期，请按最新一期重新执行。');
    if (attempt + 1 < attempts) await delay(30_000);
  }
  throw new Error(`GitHub Pages 尚未返回与仓库一致的 ${report.date} 周报。`);
}

async function hasReceipt(date) {
  const name = `feishu-weekly-${date}`;
  const url = new URL(`/repos/${process.env.GITHUB_REPOSITORY}/actions/artifacts`, process.env.GITHUB_API_URL);
  url.searchParams.set('name', name);
  const response = await fetch(url, {
    headers: { Accept: 'application/vnd.github+json', Authorization: `Bearer ${process.env.GH_TOKEN}` },
    signal: AbortSignal.timeout(12_000),
  });
  if (!response.ok) throw new Error(`无法查询周报投递回执（HTTP ${response.status}）。`);
  const { artifacts } = await response.json();
  return artifacts.some(artifact => artifact.name === name && !artifact.expired);
}

function getWebhookUrl() {
  let url;
  try {
    url = new URL(process.env.FEISHU_WEBHOOK_URL);
  } catch {
    throw new Error('请在仓库的 Actions Secrets 中配置 FEISHU_WEBHOOK_URL。');
  }
  if (url.origin !== 'https://open.feishu.cn' || url.username || url.password || url.search || url.hash ||
    !/^\/open-apis\/bot\/v2\/hook\/[\w-]+$/.test(url.pathname)) {
    throw new Error('FEISHU_WEBHOOK_URL 须为飞书群自定义机器人的 HTTPS Webhook。');
  }
  return url;
}

async function postCard(url, card) {
  const payload = { msg_type: 'interactive', card };
  const secret = process.env.FEISHU_SIGNING_SECRET;
  if (secret) {
    payload.timestamp = String(Math.floor(Date.now() / 1000));
    payload.sign = createHmac('sha256', `${payload.timestamp}\n${secret}`).digest('base64');
  }
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(payload),
      redirect: 'error',
      signal: AbortSignal.timeout(15_000),
    });
    if (response.status >= 400 && response.status < 500) {
      return { status: 'rejected', error: `HTTP ${response.status}` };
    }
    if (response.ok) {
      const body = await response.json();
      const code = body?.code ?? body?.StatusCode;
      if (code === 0) return { status: 'sent' };
      if (Number.isInteger(code)) return { status: 'rejected', error: `错误码 ${code}` };
    }
  } catch {
    // A missing response does not prove the group did not receive the card.
  }
  return { status: 'unconfirmed' };
}

async function main(mode) {
  if (mode === 'deliver') {
    const { date, card } = JSON.parse(readFileSync(join(process.env.RUNNER_TEMP, 'feishu-weekly-card.json'), 'utf8'));
    const result = await postCard(getWebhookUrl(), card);
    if (result.status === 'rejected') throw new Error(`飞书拒绝消息（${result.error}）。`);
    writeFileSync(join(process.env.RUNNER_TEMP, 'feishu-weekly-receipt.json'), JSON.stringify({
      date,
      status: result.status,
      checkedAt: new Date().toISOString(),
    }) + '\n');
    appendFileSync(process.env.GITHUB_OUTPUT, `receipt_date=${date}\n`);
    if (result.status === 'unconfirmed') {
      throw new Error(`飞书 ${date} 周报投递状态未知。请核对群消息，确认未收到后删除当日回执再重试。`);
    }
    summarize(`飞书已接受 ${date} 周报卡片。`);
    return;
  }

  if (!['preview', 'check', 'push', 'send'].includes(mode)) throw new Error('未知运行模式。');
  const report = readPublicReport();
  if (mode === 'push' && !shouldSendOnPush(report)) {
    summarize(`周报日期 ${report.date} 未更新。`);
    return;
  }
  const send = mode === 'push' || mode === 'send';
  if (send && await hasReceipt(report.date)) {
    summarize(`${report.date} 已有投递回执，请在 Actions 中查看状态。`);
    return;
  }
  if (mode !== 'preview') await waitForPublished(report, mode === 'push' ? 21 : 1);
  const message = reportMessage(report);
  summarize(message.preview);
  if (send) {
    writeFileSync(join(process.env.RUNNER_TEMP, 'feishu-weekly-card.json'), JSON.stringify({ date: report.date, card: message.card }));
    appendFileSync(process.env.GITHUB_OUTPUT, `report_date=${report.date}\n`);
  }
}

main(process.argv[2] ?? 'preview').catch(error => {
  console.error(error.message);
  process.exitCode = 1;
});

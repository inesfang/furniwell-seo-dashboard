# Furniwell SEO Dashboard

保留原静态网站与 URL。FlexiSpot、Desktronic、SONGMICS 按页面变化、逐词证据、关键词分工、官网结构、内链和 Roadmap 行动统一拆解；三个竞品页分别新增域级自然/付费搜索拆分；周监控增加两类搜索结构、各自环比、付费占比、变化解读及付费历史。另有 Collection 任务看板与数据驱动周监控。无服务器依赖、第三方脚本、分析追踪或浏览器 API 密钥。

## 数据与访问

- 本源目录包含原公开快照，以及用户批准公开的固定 7 站域级周报。复查 Top Pages、逐词数据与施工单补充正文只在独立私密审阅文件中。
- 周报数值是 Ahrefs 估算月自然流量；快照差值不是一周真实访问量。Traffic Value 存储为 USD，原 API cents 除以 100。
- 未记录的字段存为 null，显示为「—」。新增 previousPaidTraffic / previousPaidKeywords 为兼容字段；旧版本缺失时不回填。同日复查按采集时刻选最新，保留早期版本。原周报上期值由已报告绝对变化回推；不混用复查版本或未注明日期的旧历史表。
- Desktronic / SONGMICS 的公开版本只包含原公开单期选页和官网结构。私密审阅版另有 10-05 vs 09-28 的 Top 20、逐词证据与桌类 URL 精确补查。Top 20 不是完整页面集；无基线的页面不补 0，精确补查不混入 Top 20 合计。
- 两期 Top Keyword 不同时不推断同词排名变化。Organic Keywords 与 Top Pages 的数值和 URL 可能不一致，保留接口与请求参数，不将两接口结果直接相加。官网内容读取不能代替 rendered DOM、canonical 或状态码审计。
- 浏览器导入默认保留在页面内存。任务状态只有点击「保存到本机」才持久保存；可导出/恢复 JSON。所有操作都不修改 Shopify。
- 此 GitHub 仓库为公开库。CSS 隐藏、页面密码、noindex 都不能保护上传的 JSON 或源码。非公开数据需鉴权后的私密托管，或由用户在页面内本地导入。

## 持续更新

用户已于 2026-10-10 同意公开汇总并启用。复用每周一北京时间 09:00 的已有任务，按 [周度自动同步契约](docs/weekly-automation.md) 自动生成 JSON/JS 与独立历史报告，用一次 GitHub 提交同步；网页默认显示最新一期。手动导入收起为备用功能。

`scripts/prepare-weekly-update.mjs` 只生成本地写入计划：拒绝 private、未授权公开、重复快照冲突、缺失站点、缺失核心指标或混用口径；公开输出仅允许固定 7 站域级汇总。Top Pages、逐词和内部经营数据继续私密。该脚本不调用 API、不提交或部署。

网页下载模板，填入两期日期、采集时刻、来源与 rows。在页面导入先校验；将要公开的数据显式标记 `classification: "public"`，再执行：

```sh
node scripts/import-weekly.mjs /absolute/weekly-report.json
```

该命令只更新本地 `data/weekly-reports.json` 及同内容的 `data/weekly-reports.js`；拒绝 private、重复 id、重复网站、混用口径和不合法数值。每周追加独立报告，不能覆盖旧报告；同日期复查用不同 id。

原 `AUTO_WEEKLY_REPORT` 标记保留，旧区块可回看。自动任务改为追加数据文件，每次提交前校验报告及公开范围。

## 提交与发布

用户要求：远端仓库写入和任何部署前先确认。2026-10-10 已取得本次提交、发布和域级周报自动同步许可。后续同步仅限已批准的汇总范围；每次读取最新 main，合并历史，并使用 expected_sha 防止覆盖并发变更。

私密完整版本应使用所有者私密访问的托管，不能直接放到现有 GitHub Pages。已审公开版本部署至原路径。

## 验证

JS 语法、指标重算、导入校验、交互逻辑、相对链接/锚点、页面资源、viewport 与响应式规则均有本地检查。当前无可用的 control-browser，因此尚未做真实浏览器的视觉、键盘和移动端实测，不应把静态检查称为完整视觉验收。

(function(root){'use strict';
const metrics=['traffic','previousTraffic','keywords','previousKeywords','top3','previousTop3','top10','previousTop10','value','previousValue','dr','rd','paidTraffic','paidKeywords'];
const numeric=(v)=>v===null||Number.isFinite(v)&&v>=0;
const validDate=(v)=>typeof v==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(v)&&new Date(v+'T00:00:00Z').toISOString().slice(0,10)===v;
const http=(v)=>{try{const u=new URL(v);return u.protocol==='https:'&&!u.username&&!u.password&&!u.search;}catch{return false;}};
function validateReport(report){
 if(!report||typeof report!=='object')throw Error('报告必须是 JSON 对象。');
 if(typeof report.id!=='string'||!/^[a-zA-Z0-9_-]{3,100}$/.test(report.id))throw Error('报告 id 格式不正确。');
 if(!validDate(report.date)||!validDate(report.comparedDate)||report.comparedDate>=report.date)throw Error('两期日期须有效，且比较日期早于本期。');
 if(!['public','private'].includes(report.classification))throw Error('须声明 public 或 private。');
 if(!report.source||!http(report.source.url)||typeof report.source.note!=='string')throw Error('缺少安全的来源链接或口径说明。');
 if(!Array.isArray(report.rows)||report.rows.length<1||report.rows.length>100)throw Error('每期须包含 1–100 个网站。');
 const keys=new Set();
 for(const row of report.rows){
  if(typeof row.target!=='string'||typeof row.name!=='string'||!row.name||row.name.length>100)throw Error('网站标识或名称不正确。');
  const target=new URL('https://'+row.target);if(target.username||target.password||target.search||target.hash||target.protocol!=='https:')throw Error('网站 target 不允许凭据或参数。');
  if(row.country!=='de'||row.trafficMode!=='adaptive'||row.volumeMode!=='monthly')throw Error('口径必须为 DE / adaptive / monthly。');
  if(row.mode!=='subdomains'&&row.mode!=='prefix')throw Error('mode 仅支持 subdomains 或 prefix。');
  if(row.target==='dpj-workspace.com/de/'&&row.mode!=='prefix')throw Error('DPJ /de/ 必须使用 prefix。');
  const key=[row.target,row.mode,row.country].join('|');if(keys.has(key))throw Error('同一期存在重复网站。');keys.add(key);
  for(const metric of metrics){if(!(metric in row)||!numeric(row[metric]))throw Error('指标 '+metric+' 必须为非负数字或 null。');}
  if(row.top3!==null&&row.keywords!==null&&row.top3>row.keywords)throw Error('Top 3 不得超过关键词总数。');
  if(row.top10!==null&&row.keywords!==null&&row.top10>row.keywords)throw Error('Top 10 不得超过关键词总数。');
 }
 if(report.actions!==undefined&&(!Array.isArray(report.actions)||report.actions.length>30))throw Error('actions 须为至多 30 项数组。');
 for(const a of report.actions||[])if(!a||!['P0','P1','P2'].includes(a.priority)||typeof a.title!=='string'||typeof a.body!=='string'||typeof a.task!=='string'||!/^[a-z0-9-]{1,80}$/.test(a.task))throw Error('行动项字段不正确。');
 return report;
}
function validateBundle(bundle){if(!bundle||bundle.schemaVersion!==1||!Array.isArray(bundle.weeklyReports))throw Error('不支持的数据版本。');const ids=new Set();for(const r of bundle.weeklyReports){validateReport(r);if(ids.has(r.id))throw Error('报告 id 重复。');ids.add(r.id);}return bundle;}
function delta(current,previous){return current===null||previous===null?null:current-previous;}
function percent(current,previous){return current===null||previous===null||previous===0?null:(current-previous)/previous*100;}
function comparable(a,b){return a.country===b.country&&a.mode===b.mode&&a.trafficMode===b.trafficMode&&a.volumeMode===b.volumeMode;}
function mergeReport(bundle,report){validateReport(report);if(bundle.weeklyReports.some(r=>r.id===report.id))throw Error('报告 id 已存在；请用新 id 保存复查版本。');return {...bundle,weeklyReports:[...bundle.weeklyReports,report].sort((a,b)=>a.date.localeCompare(b.date)||a.id.localeCompare(b.id))};}
root.SeoContract={validateReport,validateBundle,delta,percent,comparable,mergeReport};
if(typeof module!=='undefined'&&module.exports)module.exports=root.SeoContract;
})(typeof window==='undefined'?globalThis:window);

import fs from 'node:fs';
import {createRequire} from 'node:module';
const C=createRequire(import.meta.url)('../assets/data-contract.js');
const args=process.argv.slice(2), readFlag=k=>{const i=args.indexOf(k);return i<0?null:args[i+1];};
const fixed={ 'furniwell.de':'Furniwell','songmics.de':'SONGMICS','flexispot.de':'FlexiSpot','desktronic.de':'Desktronic','dpj-workspace.com/de/':'DPJ /de/','yaasa.com':'Yaasa','ergotopia.de':'Ergotopia' };
const metrics=['traffic','previousTraffic','keywords','previousKeywords','top3','previousTop3','top10','previousTop10','value','previousValue','dr','rd','paidTraffic','paidKeywords','previousPaidTraffic','previousPaidKeywords'];
try {
 if(!args.includes('--allow-public'))throw Error('公开写入尚未授权；必须先取得用户对域级周报公开同步的许可。');
 const reportPath=readFlag('--report'),bundlePath=readFlag('--bundle'),outputPath=readFlag('--output');
 if(!reportPath||!bundlePath||!outputPath)throw Error('Usage: node scripts/prepare-weekly-update.mjs --report /report.json --bundle /bundle.json --output /plan.json --allow-public');
 const input=C.validateReport(JSON.parse(fs.readFileSync(reportPath,'utf8')));
 if(input.classification!=='public')throw Error('private 报告不能写入公开仓库。');
 if(!input.retrievedAt||!Number.isFinite(Date.parse(input.retrievedAt)))throw Error('自动周报必须记录有效的采集时刻。');
 if((Date.parse(input.date)-Date.parse(input.comparedDate))/86400000!==7)throw Error('自动周报的两期快照必须相隔 7 天。');
 if(input.rows.length!==7||input.rows.some(r=>!(r.target in fixed))||new Set(input.rows.map(r=>r.target)).size!==7)throw Error('自动周报必须覆盖固定的 7 个网站，不能静默缩减范围。');
 for(const row of input.rows){if(row.traffic===null||row.keywords===null)throw Error('本期核心指标缺失，保留上一成功周报。');if(row.target==='dpj-workspace.com/de/'&&row.mode!=='prefix'||row.target!=='dpj-workspace.com/de/'&&row.mode!=='subdomains')throw Error('网站 scope 不一致。');}
 const report={id:input.id,date:input.date,comparedDate:input.comparedDate,retrievedAt:new Date(input.retrievedAt).toISOString(),label:(input.id.startsWith('channels-')?'自然与付费拆分复查 · ':input.id.startsWith('verified-')?'首次同步验证 · ':'自动周报 · ')+input.date,classification:'public',source:{url:'https://app.ahrefs.com/site-explorer',note:'已获准公开的域级 Ahrefs 周报。DE / adaptive / monthly；DPJ 为 /de/ prefix，其他为 subdomains。Traffic Value 为 USD；Top 10 未返回时保留 null；DR 为全域评分、RD 为实时引用域，DPJ RD 按 www /de/ prefix。自然与付费均为估算月搜索流量，付费不完整覆盖非搜索广告；付费占比仅以自然加付费搜索为分母。不可用值为 null；旧版本付费比较基线缺失时不回填。估算流量不等于真实访问量。',coverage:'固定 7 个网站；仅域级汇总，页面和关键词原始明细保留私密。',requests:input.rows.flatMap(r=>[...[input.date,input.comparedDate].map(date=>({tool:'site-explorer-metrics',params:{target:r.target==='dpj-workspace.com/de/'?'https://www.dpj-workspace.com/de/':r.target,mode:r.mode,country:'de',date,traffic_mode:'adaptive',volume_mode:'monthly',output:'json'}})),{tool:'site-explorer-domain-rating',params:{target:r.target.split('/')[0],date:input.date,output:'json'}},{tool:'site-explorer-backlinks-stats',params:{target:r.target==='dpj-workspace.com/de/'?'https://www.dpj-workspace.com/de/':r.target,mode:r.mode,date:input.date,output:'json'}}])},rows:input.rows.map(r=>({target:r.target,name:fixed[r.target],country:r.country,mode:r.mode,trafficMode:r.trafficMode,volumeMode:r.volumeMode,...Object.fromEntries(metrics.map(k=>[k,r[k]??null]))})),actions:[]};
 const bundle=C.validateBundle(JSON.parse(fs.readFileSync(bundlePath,'utf8')));
 if(bundle.privacy!=='public'||bundle.weeklyReports.some(r=>r.classification!=='public'))throw Error('输入 bundle 必须为纯公开版本。');
 const allowedBundle=['schemaVersion','privacy','updatedAt','weeklyReports','flexispotSnapshots','competitorSnapshots','weeklyAutomation'];
 if(Object.keys(bundle).some(k=>!allowedBundle.includes(k)))throw Error('公开 bundle 含未批准字段。');
 const snapshots=[...(bundle.flexispotSnapshots||[]),...Object.values(bundle.competitorSnapshots||{}).flat()];
 if(snapshots.some(s=>s.classification!=='public'))throw Error('公开 bundle 含非公开竞品快照。');
 const existing=bundle.weeklyReports.find(r=>r.id===report.id);
 if(existing){if(JSON.stringify(existing)!==JSON.stringify(report))throw Error('已有相同 id 且内容不同；不得覆盖旧快照，请创建新的复查 id。');fs.writeFileSync(outputPath,JSON.stringify({status:'noop-existing',id:report.id},null,2));console.log('noop-existing');process.exit(0);}
 const next=C.mergeReport(bundle,report);next.updatedAt=next.weeklyReports.reduce((v,r)=>r.date>v?r.date:v,bundle.updatedAt);
 next.weeklyAutomation={state:'enabled',schedule:'每周一 09:00',timezone:'Asia/Shanghai',lastSuccessAt:report.retrievedAt,lastReportId:report.id};
 const json=JSON.stringify(next,null,2)+'\n',js='window.FURNIWELL_SEO_DATA = '+JSON.stringify(next).replace(/</g,'\\u003c')+';\n';
 const plan={status:'prepared-local-only',reportId:report.id,repository:'inesfang/furniwell-seo-dashboard',branch:'main',commitMessage:'Update weekly Ahrefs competitor report '+report.date,treeElements:[{path:'data/weekly-reports.json',mode:'100644',type:'blob',content:json},{path:'data/weekly-reports.js',mode:'100644',type:'blob',content:js},{path:'data/reports/'+report.id+'.json',mode:'100644',type:'blob',content:JSON.stringify(report,null,2)+'\n'}]};
 fs.writeFileSync(outputPath,JSON.stringify(plan,null,2)+'\n');console.log(JSON.stringify({status:plan.status,reportId:report.id,files:plan.treeElements.map(f=>f.path)}));
}catch(error){console.error(error.message);process.exit(1);}

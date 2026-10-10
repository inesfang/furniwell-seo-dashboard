import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {createRequire} from 'node:module';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const C=createRequire(import.meta.url)('../assets/data-contract.js');
const input=process.argv[2];
if(!input||process.argv.length!==3){console.error('Usage: node scripts/import-weekly.mjs /absolute/report.json');process.exit(1);}
try{
 const report=JSON.parse(fs.readFileSync(input,'utf8'));
 C.validateReport(report);
 if(report.classification!=='public')throw Error('拒绝将 private 报告写入公开源文件。使用本地导入或私密版本。');
 const file=path.join(root,'data/weekly-reports.json');
 const bundle=C.validateBundle(JSON.parse(fs.readFileSync(file,'utf8')));
 const next=C.mergeReport(bundle,report);
 next.updatedAt=next.weeklyReports.reduce((date,r)=>r.date>date?r.date:date,next.updatedAt);
 const jsfile=path.join(root,'data/weekly-reports.js');
 fs.writeFileSync(file+'.tmp',JSON.stringify(next,null,2)+'\n');
 fs.writeFileSync(jsfile+'.tmp','window.FURNIWELL_SEO_DATA = '+JSON.stringify(next).replace(/</g,'\\u003c')+';\n');
 fs.renameSync(file+'.tmp',file);fs.renameSync(jsfile+'.tmp',jsfile);
 console.log(JSON.stringify({status:'updated-local-only',id:report.id,date:report.date,reports:next.weeklyReports.length}));
}catch(err){console.error(err.message);process.exit(1);}

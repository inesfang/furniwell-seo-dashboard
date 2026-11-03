/* Tool-specific output adapters. Original product records and compilers stay intact. */
(() => {
 'use strict';
 const policy={checkedAt:'2026-11-02',defaultLimit:900,minLimit:100,maxLimit:10000,officialWebLimit:null,
  statement:'本次未查到 Grok 官网 Imagine 网页版统一最大字符数的官方说明。本站默认每条最多 900 字符，这是工作上限，可按当前界面实际提示调整。',
  observation:'已检查 grok.com/imagine 公开页面的视频模式，未看到明确最大字数提示；只检查输入行为，没有提交生成，不据此前端行为推定服务端上限。',
  sources:[{name:'Grok 官网 Imagine',url:'https://grok.com/imagine'},{name:'xAI 官方 Imagine 输入约束说明',url:'https://x.ai/api/imagine'},{name:'xAI 官方视频生成说明',url:'https://docs.x.ai/developers/model-capabilities/video/generation'},{name:'xAI 官方视频接口字段',url:'https://docs.x.ai/developers/rest-api-reference/inference/videos'}]};
 const count=s=>String(s??'').length;
 const validLimit=n=>Number.isInteger(Number(n))&&Number(n)>=policy.minLimit&&Number(n)<=policy.maxLimit;
 const valid=(text,tool,limit)=>!!String(text??'').trim()&&(tool==='work'||validLimit(limit)&&count(text)<=Number(limit));
 const visualNotes={
  space:'门口平视全景，完整交代门框、产品与座椅退出区；阴天右侧漫射日光，浅灰墙、木地板、不铺地毯；商品短边朝窗墙，长边不贴窗。',
  frontal:'正面稳定构图，深灰或深木背景，柔和定向侧光突出商品轮廓；只保留必要工作道具，避免奶油暖光与窗边绿植的惯用布置。',
  documentary:'人物右侧平视中景，白色自然光；真实家庭工作角与少量正在使用的工具，人物自然看任务，不看镜头摆拍。',
  detail:'固定近景，目标原装部件、安装边及接触点同时可见；中性柔光，背景简洁；只保留必要的一只连续连接右手，商品静止。',
  evening:'夜间真实工作角，局部工作灯照亮任务，窗外较暗，背景保留层次；不加暖黄色滤镜，商品原色与材质不变。',
  studio:'无人的完整商品棚拍，素色背景、柔和均匀光、清楚地面接触阴影；不复制官网原房间，不添加未售配件。',
  overhead:'高位斜俯拍桌面任务，保留前沿方向、原拼缝及控制器位置；中性白色漫射光，少量任务道具；手部数量与接触关系正常。',
  workplace:'商务办公纵深构图，白色日光，实用工作设备与简洁收纳；保留通道；最多一位自然工作的成年人，不用居家绿植地毯布景。'
 };
 const nightNotes={space:'夜间门口全景，完整桌与过道；灰墙、硬地、无地毯，侧方低亮环境灯。',frontal:'夜间近正面构图，深蓝灰墙与封闭柜，左上中性侧灯勾勒轮廓。',documentary:'夜间人物侧前中景，灰绿家庭工作角，局部任务灯照亮纸笔。',evening:'夜间真实工作角，工作灯照亮桌面任务，窗外暗，产品颜色不变。'};
 function identity(result,source='原图'){
  const p=result.product,S=window.FurniwellPromptEngine.structure(p);
  return [`主商品 SKU ${p.sku||p.variant}，所选变体${p.variantTitle}；只以${source}锁定。`,...S.facts,...(['desk','frame'].includes(p.caps.family)?['如有控制器，在入座者右手边、靠人的前工作长边；人面对镜头时常显示在画面左侧。禁止移到其他边，内嵌款保持内嵌。']:[]),
   result.chair?`若出现搭配椅，只用已选 SKU ${result.chair.sku}（${result.chair.color}），保留该椅原有头枕、扶手、脚托、底座与脚轮，不添加原图没有的部件。`:'主商品本身为椅子，不额外添加另一把椅子。',
   p.caps.family==='frame'?'这是单独售卖桌架，不增加桌板或将道具当作随货。':'数量、尺寸、比例、材质和原色保持，不镜像，不混用其他 SKU。'].join('');
 }
 function cast(step){return {empty:'本镜头0人0手0脚，椅子空置，不残留桌下腿脚。',hand:'只见同一成年人的一只右手，五指、手腕与前臂连续；另一手、脸和躯干在画外，不换手、不穿过桌板或机件。',seated:'恰好一名成年人已坐稳；坐垫承托骨盆，椅背在身后，双手分放左右大腿、双脚着地；不入座、不起身、不转身。',standing:'恰好一名成年人已站稳，双脚着地、双臂下垂，与商品有可见间隙；不触碰家具、不转身。'}[step.cast]||'人数和首帧姿态保持，不新增肢体。';}
 function furnitureShort(result,placement,part,context={}){
  const extra=String(context.extra||'').trim(),idea=context.idea;
  if(result.mode==='image'){
   const b=result.batches.find(b=>b.id===placement)||result.batches[0],i=Number(String(part).replace('image-',''));
   if(!/^image-\d+$/.test(part)||!b.jobs[i])return {text:'请先选择一个单张图片任务。Grok 模式按任务逐张执行。',executable:false};
   const v=result.visuals[i],task=(idea?.layout||'展示当前 SKU 与真实使用空间。').replace(/\d{2,3}\s*[×xX]\s*\d{2,3}(?:\s*cm)?/g,'所选规格').replace(/白色|黑色|白桌|黑桌/g,'所选颜色');
   const text=[result.chair?'实际上传主商品与已选搭配椅原图，分别锁定两件商品。':'实际上传当前主商品原图。',`只生成第${i+1}/${b.count}张完整独立广告图片，${b.ratio}，不拼图；完成后继续其他单张任务。`,identity(result),`本张视觉：${v.name}。${idea?.id==='FW-C20'?(nightNotes[v.id]||[v.camera,v.light,v.placement,v.room].join('')):(visualNotes[v.id]||[v.camera,v.light,v.placement,v.room].join(''))}`,`画面任务：${task}`,extra?'已核实补充事实：'+extra:'',result.promotion?window.FurniwellPromotionComposer.block(result.promotion,true)+'人物与家具接触正常，无多手、穿模。不伪造评价、认证或赠品。':'不复制官网原房间与光线。人物身体、手腕、手指与家具接触正常，无多手、穿模；不得以场景演示冒充性能测试。无叠字、价格、认证标识或虚假赠品；真实广告标题和活动后期加入。'].filter(Boolean).join('\n');
   return {text,executable:true,index:i,label:`第 ${i+1}/${b.count} 张 · ${v.name}`};
  }
  const a=result.assets.find(a=>a.id===placement)||result.assets[0],m=/^(keyframe|clip)-(\d+)$/.exec(part),i=m&&Number(m[2]),s=m&&a.shots[i];
  if(!s)return {text:'请选择独立首帧或单镜头视频任务。完整制作资料请切换 ChatGPT Work。',executable:false};
  const isFrame=m[1]==='keyframe';
  const text=[isFrame?(result.chair?'实际上传主商品与已选搭配椅原图，分别锁定两件商品。':'实际上传当前主商品原图。'):'上传本镜合格关键帧作首帧，保持商品、椅子、人物与房间。',
   isFrame?`只生成镜头${i+1}/5的一张独立静止首帧，${a.ratio}，不拼图、不画动作轨迹。`:`只生成镜头${i+1}/5的一段独立3秒写实视频，${a.ratio}。若界面只可选6秒，生成后剪取稳定连续3秒。`,
   identity(result,isFrame?'对应商品原图':'本镜头已验收首帧'),result.ideaId==='FV-05'?'卧室保留床、门与通道。':'',window.CreativeFieldcraft.findDesk(result.fieldLook).short,cast(s),`起始状态：${s.start}`,s.camera,
   isFrame?'只画上述开始状态，先验收产品、人物结构和接触关系，不表现后续运动。':`唯一动作：${s.action}；结束：${s.end}`,i?`前镜尾态：${a.shots[i-1].end}${a.shots[i-1].cast==='seated'&&s.cast==='hand'?'时间跳切，手在画外就位。':''}同机位且状态连续才接尾帧；否则另验首帧，核对尾态后硬切。`:'',extra?'已核实补充事实：'+extra:'',
   '锁定商品、房间、道具、服装和光线；主体离画或合理时间跳切。遮挡真实，无多手、断肢、穿模和变形。无字幕、价格、口播或音乐。'].filter(Boolean).join('\n');
  return {text,executable:true,index:i,label:`镜头 ${i+1}/5 · ${isFrame?'首帧':'短视频'}`};
 }
 function furnitureWork(result,placement,part){
  if(result.mode==='image')return {...window.FurniwellPromptEngine.imageOutput(result,placement,part||'batch'),executable:true};
  const a=result.assets.find(a=>a.id===placement)||result.assets[0];if(part==='master')return {text:a.master,executable:true};
  if(part==='full')return {text:'请在 ChatGPT Work 按完整资料执行：核对商品与附件，逐张制作并交付5张独立关键帧，再按当前可用工具制作视频或交付对应5条视频指令。没有实际输出视频文件时，不声称视频已完成。\n\n'+a.text,executable:true};
  const m=/^(keyframe|clip|shot)-(\d+)$/.exec(part),s=m&&a.shots[Number(m[2])];return {text:s?(m[1]==='keyframe'?s.keyframe:m[1]==='clip'?s.clip:s.title+'\n\n'+s.keyframe+'\n\n'+s.clip):a.text,executable:true};
 }
 function furnitureOutput(r,placement,part,tool,limit,context){const o=tool==='grok'?furnitureShort(r,placement,part,context):furnitureWork(r,placement,part);return {...o,count:count(o.text),valid:o.executable&&valid(o.text,tool,limit)};}
 function furniturePacket(r,tool,limit,context={}){
  if(tool==='work')return '# ChatGPT Work · 完整制作资料\n\n不套用 Imagine 短指令的工作上限。关键帧逐张交付；仅在有可用视频工具时输出视频。\n\n'+window.FurniwellPromptEngine.bundleText(r);
  const rows=[];if(r.mode==='image')for(const b of r.batches)for(let i=0;i<b.count;i++)rows.push({...furnitureShort(r,b.id,'image-'+i,context),label:b.label+' · 第'+(i+1)+'/'+b.count+'张'});
  else for(const a of r.assets)for(let i=0;i<a.shots.length;i++)for(const kind of ['keyframe','clip'])rows.push({...furnitureShort(r,a.id,kind+'-'+i,context),label:a.label+' · 镜头'+(i+1)+' · '+(kind==='clip'?'短视频':'首帧')});
  if(rows.some(x=>!x.executable||!valid(x.text,tool,limit)))throw Error('制作包中有指令超出本次最大字数。请精简补充事实、按实际界面调整上限，或选择 Work 完整版。未自动截断。');
  return `# Grok Imagine · 逐条短指令包\n\n每条最大 ${limit} 字符，含空格、标点与换行。此值是本站设置，不代表官网统一上限。逐个任务上传参考图并分别执行，不整包粘贴。\n\n`+rows.map(x=>`## ${x.label}（${count(x.text)} 字符）\n\n${x.text}`).join('\n\n');
 }
 function catWork(r,kind,index){
  const p=r.product,R=window.KUZMOTEC_RESEARCH,j=r.jobs[index],facts=`【唯一商品与来源】\nSKU：${p.sku}\n型号：${p.name}；变体：${p.color}\n商品链接：${p.url}\n需要实际上传的原图：${p.image}\n结构：${p.shape}\n${p.facts.join('\n')}\n边界：${p.note}`;
  const instructions='请在 ChatGPT Work 执行下列制作任务。关键帧要实际生成、逐张独立交付，不拼图，不只返回文字说明。原图只锁商品；场景和角色按已验收关键帧保持。链接或文件编号不等于已上传附件。';
  if(kind==='frame')return [instructions,`当前只执行第${j.index}/5张关键帧 image${j.image}。`,facts,j.frame,'【验收】',...R.qa].join('\n\n');
  if(kind==='video')return [`在 ChatGPT Work 准备并执行镜头${j.index}/5：先生成并验收首帧；当前有视频工具时继续输出片段，否则交付实际关键帧与本镜头视频指令，不能把文字当成已经生成的视频。`,facts,j.frame,'【后续视频动作】',j.video,j.edit,'【验收】',...R.qa].join('\n\n');
  return [instructions,'这是完整15秒制作委托：依次制作并验收每镜头首帧及对应片段，检查上一镜尾帧与下一镜首帧的空间和动作衔接。没有视频工具时，实际交付5张关键帧及对应5条视频指令。每镜头成片取3秒，不只完成第1个任务。',facts,`【统一视觉】\n${r.look.scene}\n${r.look.camera}`,r.overview,...r.jobs.map(x=>`【镜头${x.index}｜${x.range}｜关键帧 image${x.image}】\n${x.frame}\n\n【对应视频动作】\n${x.video}\n剪辑：${x.edit}`),'【逐镜验收与后期】',...R.qa,`建议德语标题：${r.idea.headline}。真实 App 截图、KuzmoTec 品牌与 CTA 后期加入，不渲染虚构数据或评价。`].join('\n\n');
 }
 function catOutput(r,kind,index,tool,limit,edits={}){const key=kind+':'+index,raw=kind==='overview'?r.overview:r.jobs[index][kind],text=tool==='work'?(edits[key]??catWork(r,kind,index)):raw;return {text,count:count(text),valid:valid(text,tool,limit)};}
 function catPacket(r,tool,limit,edits={}){
  if(tool==='work')return '# ChatGPT Work · 猫砂盆完整制作资料\n\n'+catOutput(r,'overview',0,tool,limit,edits).text+'\n\n'+r.jobs.map((j,i)=>`## 独立关键帧 ${i+1}/5\n\n${catOutput(r,'frame',i,tool,limit,edits).text}\n\n## 镜头制作资料 ${i+1}/5\n\n${catOutput(r,'video',i,tool,limit,edits).text}`).join('\n\n');
  const texts=[...r.jobs.flatMap(j=>[j.frame,j.video]),r.overview];if(texts.some(s=>!valid(s,tool,limit)))throw Error('制作包中有超限或空白指令，请逐条修正后下载。');return window.KuzmotecPromptEngine.packet({...r,limit});
 }
 window.CreativeProductionTargets={policy,count,validLimit,valid,identity,visualNotes,furnitureShort,furnitureOutput,furniturePacket,catOutput,catPacket};
})();

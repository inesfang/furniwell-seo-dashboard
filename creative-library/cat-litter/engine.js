/* Compact, SKU-aware keyframe and image-to-video instructions; no generation API is called. */
(() => {
 'use strict';
 const R=window.KUZMOTEC_RESEARCH;
 // UTF-16 length is conservative for emoji and includes spaces/newlines.
 const count=text=>String(text).length;
 const compatible=(p,idea)=>!!p&&!!idea&&(idea.need==='any'||p.capabilities.includes(idea.need));
 const findProducts=(catalog,input)=>{
  const value=String(input||'').trim();if(!value)return [];
  let u;try{u=new URL(value);}catch{}
  if(u){if(!['kuzmotec.com','www.kuzmotec.com'].includes(u.hostname))return [];const id=u.searchParams.get('variant'),handle=u.pathname.split('/products/')[1]?.split('/')[0];return catalog.products.filter(p=>id?p.variant===id&&(!handle||p.handle===handle):p.handle===handle);}
  return catalog.products.filter(p=>p.sku.toLowerCase()===value.toLowerCase()||p.variant===value);
 };
 const shotSpecs={
  routine:{title:'家务开场',frame:'产品旁的收纳托盘放一把干净猫砂铲与一张不含可读文字的待办清单；产品完整可辨，无人、无猫。',motion:'机位固定，轻推向干净猫砂铲及背景产品；所有物体保持位置，不生成铲砂或排泄物。',cats:0,hands:0},
  hero:{title:'产品完整展示',frame:'三分之二正面中景，完整产品与原装踏板/底座均在画面内；镜头不遮挡入口，无人、无猫。',motion:'仅做非常缓慢的短距离推近；机身、盖体、入口和部件完全静止，不绕到没有外观依据的背面。',cats:0,hands:0},
  empty:{title:'确认空舱',frame:'从入口可见内部的稳定中近景，内部没有猫、手或其他动物；设备静止，保留该款开口形式。',motion:'固定镜头，保持空舱与全部机构静止；不生成旋转、耙动、自动关盖或清洁循环。',cats:0,hands:0},
  'cat-outside':{title:'猫咪自然观察',frame:'同一只成年棕色虎斑猫完整站在产品前侧方，身体与入口有间隙，四爪着地，尾巴可见；设备静止，画面无人。',motion:'同一只猫原地轻轻转头一次，四爪保持着地；不跨入入口、不跳跃，设备与盖体保持静止。',cats:1,hands:0},
  'cat-rest':{title:'猫咪休息',frame:'同一只成年棕色虎斑猫在房间另一侧的猫垫上休息，产品在背景，猫与设备不接触，入口区域空置；无人。',motion:'猫只做自然呼吸与轻微耳朵动作，位置不变；背景设备始终静止。',cats:1,hands:0},
  entrance:{title:'入口与通行空间',frame:'正面或浅角度展示所选 SKU 的真实入口及前方通行空间，内部空置，无猫、无人，不改变入口大小与盆沿。',motion:'仅轻微推近入口，机构不动；不生成猫穿入、躯体从机身浮现或入口伸缩。',cats:0,hands:0},
  detail:{title:'对应结构近景',frame:'近景只展示原图明确可见的入口边缘、表面材质与连接处，产品结构不变，内部空置，无人无猫。',motion:'保持对焦与机位稳定，仅有轻微相机位移；不打开盖体、不拆卸部件、不改变材料。',cats:0,hands:0},
  control:{title:'原装控制位置',frame:'空舱、设备静止的产品前侧中近景；保留原图明确存在的控制区，不新增按键、显示数值或指示符；无人无猫。',motion:'固定镜头展示原有控制位置，完全不按键、不启动、不新增显示文字，设备保持静止。',cats:0,hands:0},
  'clean-result':{title:'清洁后的静止状态',frame:'展示按说明书完成日常清洁后的干净空舱，使用合理量的猫砂；设备已停止，无人、无猫、不展示排泄物。',motion:'只轻推展示静止的干净空舱；不把前后状态做成瞬时消失或几秒完整清洁，不生成机构运动。',cats:0,hands:0},
  phone:{title:'App 画面载体',frame:'一只成年人的右手自然握住一部手机，屏幕为均匀浅灰占位，没有文字与数据；背景是静止产品，另一只手和身体在画外，无猫。',motion:'保持一只右手与手机姿态不变，只轻微推近；不点击、不换手、不生成 App 页面或数据，真实截图后期叠加。',cats:0,hands:1},
  care:{title:'日常打理',frame:'集砂垫外缘旁放一块干净软布和清洁用品，产品完整静止、空舱；无手、无人、无猫，不拆装。',motion:'镜头轻轻移向整洁集砂垫与软布；所有物体静止，不给整机冲水、不拆部件、不出现手。',cats:0,hands:0},
  lifestyle:{title:'家庭日常收尾',frame:'稳定全景展示完整产品与自然生活空间，入口前方空置，地面整洁，无人无猫；上部留少量后期文字空间。',motion:'机位固定或极慢后拉，保持完整外观、正常尺度和通道；不生成文字、商标动画或促销价格。',cats:0,hands:0},
  room:{title:'真实摆放',frame:'从门口浅角度看完整产品与周边通道，产品没有塞进柜内或挡门；入口空置，无猫、无人。',motion:'以极慢短距离平移展示产品与通道；不大幅环绕、不改房间布局，设备静止。',cats:0,hands:0}
 };
 function compile(options){
  const {product:p,idea,look}=options;if(!compatible(p,idea))throw Error('该思路不适用于所选 SKU，请改选产品或思路。');
  if(!options.referenceConfirmed)throw Error('请先核对并确认该 SKU 对应的官方原图。');
  const limit=Number(options.limit??900);if(!Number.isInteger(limit)||limit<100||limit>10000)throw Error('字符上限请输入 100–10000 的整数。');
  const ratio=options.ratio||'9:16',duration=options.duration===6?6:3;
  const lock=`主商品${p.name}，SKU ${p.sku}，${p.color}。严格复刻原图的${p.shape}；数量、连接、颜色及比例不变，不增加附件，不镜像。`;
  const identities='整条视频同一房间、同一产品与白色自然光；出现猫时仅同一只成年短毛棕色虎斑猫，白下巴、绿眼、环纹尾。';
  const checks='保持真实物理遮挡与接触；猫身体完整、四肢和一条尾巴正常，无穿模、重复猫或额外手。猫在舱内或靠近时机构静止。';
  const manual=p.capabilities.includes('manual')?'这是手动清洁款，不增加电动机构、App、传感器或按键。':'不猜测清洁机构方向和时长；本生成镜头内机构静止。';
  const baseScene=look.scene+' '+look.camera;
  const jobs=idea.shots.map((key,i)=>{
   const spec=shotSpecs[key],image=i+2,range=`${i*3}–${(i+1)*3}s`;
   const frame=`${i===0?'@image1':'@image1 @image2'}\n生成第${i+1}/5张独立广告关键帧，${ratio}。只交付这一张完整单幅，不拼图。image1须实际上传为该SKU官方原图。${i>0?'另上传已经验收的第一张关键帧image2，仅锁定房间布局、光线与已有角色；商品仍只以image1为准，不照搬image2的机位与动作。':''}${lock}\n${baseScene}\n${identities}${spec.frame}${manual}不复制官网原图中的人物、猫、房间、文字与装饰。画面无字幕、无价格；App使用后期真实截图。`;
   const video=`将当前实际上传的第${i+1}镜头关键帧（文件image${image}）作为首帧，生成${duration}秒${ratio}写实广告片段，只做本镜头。${lock.replace('原图','本镜头首帧')}\n${spec.motion}\n本镜头猫${spec.cats}只、可见人手${spec.hands}只，其他人或动物不入画。${identities}${checks}${manual}不生成文字、App数据、配音、音乐或额外转场，仅保留轻微环境声。`;
   return {index:i+1,key,title:spec.title,image,range,cats:spec.cats,hands:spec.hands,frame,video,frameCount:count(frame),videoCount:count(video),frameValid:count(frame)<=limit,videoValid:count(video)<=limit,edit:duration===6?'界面生成 6 秒，后期选取其中稳定连续 3 秒':'成片取连续稳定 3 秒'};
  });
  const overview=`制作15秒${ratio}写实商品广告，共5个镜头，各3秒。若当前模式支持多关键帧，按image2–image6顺序绑定；否则按独立镜头分别生成后剪辑。${lock}\n${identities}${look.scene}\n${jobs.map(j=>`${j.range}：${shotSpecs[j.key].title}，${shotSpecs[j.key].motion}`).join('\n')}\n${checks}${manual}不生成字幕、App数据、价格、配音或音乐；真实界面和广告文字后期加入。`;
  return {product:p,idea,look,limit,ratio,duration,jobs,overview,overviewCount:count(overview),overviewValid:count(overview)<=limit,generatedAt:'2026-11-02'};
 }
 function packet(result){return `# ${result.idea.id} ${result.idea.title}\n\nSKU：${result.product.sku}\n官方变体：${result.product.url}\n核验参考图：${result.product.image}\n每条工作上限：${result.limit} 字符（含换行、标点）\n\n这是分步制作包，不是一次粘贴到 Imagine 的总请求。全部 5 张关键帧必须逐张生成、逐张输出，不要只做第 1 张，不拼图。先验收 image2，再将其作为后续关键帧的房间参考；主商品始终只以官方原图 image1 为准。然后逐镜头上传对应首帧、复制相应短指令。image1 为商品原图，image2–image6 为关键帧文件编号。\n\n${result.jobs.map(j=>`## 镜头 ${j.index}｜${j.range}｜${j.title}\n\n### 关键帧 image${j.image}（${j.frameCount} 字符）\n${j.frame}\n\n### Grok 单镜头（${j.videoCount} 字符）\n${j.video}\n\n剪辑：${j.edit}`).join('\n\n')}\n\n## 15秒总览（${result.overviewCount} 字符）\n${result.overview}\n\n## 后期与验收\n建议德语标题：${result.idea.headline}\n真实 App 界面、KuzmoTec 品牌、标题与 CTA 后期加入，不生成虚构评价、数据或价格。\n${R.qa.map(q=>'- '+q).join('\n')}\n`;}
 window.KuzmotecPromptEngine={count,compatible,findProducts,compile,packet,shotSpecs};
})();

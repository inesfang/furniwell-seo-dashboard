/* Pure product and placement-aware Chinese prompt compiler. No account credentials or model API required. */
(() => {
  'use strict';
  const version='2026-10-29';
  const stores={de:'https://furniwell.de',fr:'https://furniwell.fr'};
  const markets={de:'德国，广告文案使用自然德语',fr:'法国，广告文案使用自然法语',it:'意大利，广告文案使用自然意大利语',es:'西班牙，广告文案使用自然西班牙语',gb:'英国，广告文案使用英式英语'};
  const sources=[
    {name:'Google PMax 图片规格与叠字说明',url:'https://support.google.com/google-ads/answer/14530211?hl=en'},
    {name:'Google PMax 视频规格',url:'https://support.google.com/google-ads/answer/14528532?hl=en'},
    {name:'Google 误导性与不可靠声明',url:'https://support.google.com/adspolicy/answer/15936857?hl=en'},
    {name:'Meta Facebook Feed 图片指南',url:'https://www.facebook.com/business/ads-guide/image/facebook-feed'},
    {name:'Meta Reels 版位指南',url:'https://www.facebook.com/business/ads-guide/update/video/facebook-facebook-reels'},
    {name:'Meta 广告发布标准',url:'https://transparency.meta.com/policies/ad-standards/'}
  ];
  const presets={
    image:[
      {id:'g-wide',group:'google',label:'Google PMax 横图',ratio:'1.91:1',size:'1200 × 628 px',safe:'主体与关键信息放中央 80% 区域，四周留裁切余量。',export:'JPG 或 PNG，导出单图不超过 5 MB。'},
      {id:'g-square',group:'google',label:'Google PMax 方图',ratio:'1:1',size:'1200 × 1200 px',safe:'主体与关键信息放中央 80% 区域；不能用横图直接拉伸。',export:'JPG 或 PNG，导出单图不超过 5 MB。'},
      {id:'m-feed',group:'meta',label:'Facebook Feed 竖图',ratio:'4:5',size:'1440 × 1800 px',safe:'主体和文案留出边距，产品关键结构不被后期文字遮挡；在 Ads Manager 中检查实际裁切。',export:'JPG 或 PNG；本工作流采用不超过 5 MB 的制作目标，低于 Meta Feed 30 MB 上限。'},
      {id:'m-story',group:'meta',label:'Facebook Stories / Reels 竖图',ratio:'9:16',size:'1440 × 2560 px',safe:'商品识别、控制器与后期文案集中在中部；顶部、底部和右侧预留界面遮挡空间，投放前用对应版位预览校对。',export:'JPG 或 PNG；本工作流采用单图不超过 5 MB 的制作目标。'}
    ],
    video:[
      {id:'v-vertical',group:'google',label:'Google PMax / YouTube Shorts',ratio:'9:16',size:'1080 × 1920 px',safe:'主体靠中央；字幕和标识避开顶部、底部及右侧平台按钮；使用实际版位安全区预览校对，不能靠全屏铺满来判断。',export:'剪辑后导出 15 秒 MP4，制作预设 H.264、30 fps；若添加音频，使用获得商业授权的配音与音乐。'},
      {id:'v-meta-vertical',group:'meta',label:'Facebook Reels / Stories',ratio:'9:16',size:'1440 × 2560 px',safe:'关键商品、字幕和标识避开上下边缘与右侧按钮，在 Ads Manager 中检查真实版位安全区。',export:'剪辑后导出 15 秒 MP4，H.264、30 fps；音频如有采用有商业授权的素材，建议 Stereo AAC 不低于 128 kbps。'},
      {id:'v-wide',group:'google',label:'Google PMax / YouTube 横版',ratio:'16:9',size:'1920 × 1080 px',safe:'重新安排横版构图，完整保留商品，禁止拉伸或粗暴裁掉底脚与关键结构。',export:'剪辑后导出 15 秒 MP4，制作预设 H.264、30 fps；Google PMax 视频至少 10 秒。'},
      {id:'v-feed',group:'meta',label:'Facebook Feed 视频',ratio:'4:5',size:'1440 × 1800 px',safe:'重新构图，关键商品、手部和字幕留边；在 Ads Manager 检查对应 Feed 预览。',export:'剪辑后导出 15 秒 MP4，制作预设 H.264、30 fps；配乐和声线需具有商业使用权限。'}
    ]
  };
  const cleanSku=s=>String(s||'').trim().replace(/[‐‑–—]/g,'-').toUpperCase();
  function parseInput(value){const text=String(value||'').trim();if(!text)throw new Error('请输入产品 SKU 或完整商品链接。');if(text.length>1200)throw new Error('输入过长，请使用 SKU 或商品页链接。');if(/^https?:\/\//i.test(text)||/^(?:www\.)?furniwell\.(de|fr)\//i.test(text)){
    let u;try{u=new URL(/^https?:/i.test(text)?text:'https://'+text);}catch{throw new Error('商品链接格式不正确。');}
    const host=u.hostname.toLowerCase().replace(/^www\./,'');if(u.protocol!=='https:'||u.username||u.password||(u.port&&u.port!=='443')||!['furniwell.de','furniwell.fr'].includes(host))throw new Error('请使用 furniwell.de 或 furniwell.fr 的 HTTPS 商品链接。');
    const match=u.pathname.match(/\/products\/([^/]+)\/?$/);if(!match)throw new Error('需要具体商品链接，不能使用分类页或购物车链接。');
    const variant=u.searchParams.get('variant')||'';if(variant&&!/^\d+$/.test(variant))throw new Error('链接中的 variant 编号格式不正确。');
    return {kind:'url',store:host.endsWith('.de')?'de':'fr',handle:decodeURIComponent(match[1]),variant};
  }if(!/^[\p{L}\p{N}_./-]+$/u.test(text))throw new Error('SKU 请完整输入；也可以直接粘贴商品链接。');return {kind:'sku',sku:cleanSku(text)};}
  function familyOf(p){const s=[p.title,p.type,p.handle,...(p.tags||[])].join(' ').toLowerCase();if(/liti[eè]re|litter|katzenklo|katzen.*toilet/.test(s))return 'pet';if(/schminktisch|dressing table|coiffeuse/.test(s))return 'vanity';if(/tischgestell|schreibtischgestell|cadre.*bureau|pi[eè]tement/.test(s))return 'frame';if(/chair|stuhl|chaise|fauteuil/.test(s))return 'chair';if(/schreibtisch|reibtisch|bureau|desk/.test(s))return 'desk';return 'other';}
  function classify(p){const s=[p.title,p.handle,...(p.tags||[])].join(' ').toLowerCase(),family=familyOf(p);return {family,electric:['desk','frame'].includes(family)&&/elektr|[ée]lectri|electric|assis.debout|h[oö]henverstell/.test(s),lshape:/l.form|l-f[oö]rm|eckschreibtisch|angle|en-l/.test(s),glass:/glas|glass|verre/.test(s),frameOnly:family==='frame'};}
  function normalizeProduct(p,store,checkedAt=version){const images=(p.images||[]).map((i,n)=>typeof i==='string'?{id:String(n),url:i.startsWith('//')?'https:'+i:i,variant_ids:[]}:{id:String(i.id),url:i.src||i.url,variant_ids:(i.variant_ids||[]).map(String)});return {store,id:String(p.id),handle:p.handle,title:p.title,type:p.product_type||p.type||'',tags:Array.isArray(p.tags)?p.tags:[],images,variants:(p.variants||[]).map(v=>{const image=v.featured_image||images.find(i=>i.variant_ids.includes(String(v.id)));return {id:String(v.id),sku:v.sku||'',title:v.title,options:v.options||[v.option1,v.option2,v.option3].filter(Boolean),image:typeof v.image==='string'?v.image:image?.src||image?.url||'',available:v.available};}),checkedAt,source:'live'};}
  function variantProduct(p,v,source='snapshot'){const caps=classify(p);return {key:p.store+':'+v.id,store:p.store,handle:p.handle,id:p.id,title:p.title,type:p.type,sku:v.sku,variant:v.id,variantTitle:v.title,options:v.options||[],image:v.image||(p.variants.length===1?p.images[0]?.url:'')||'',images:p.images||[],available:v.available,url:stores[p.store]+'/products/'+encodeURIComponent(p.handle)+'?variant='+v.id,checkedAt:p.checkedAt||version,source,caps};}
  function lookup(catalog,input){const parsed=typeof input==='string'?parseInput(input):input;let list=[];if(parsed.kind==='url'){const p=catalog.products.find(p=>p.store===parsed.store&&p.handle===parsed.handle);if(!p)return [];list=p.variants.filter(v=>!parsed.variant||v.id===parsed.variant).map(v=>variantProduct(p,v));}else{for(const p of catalog.products)for(const v of p.variants)if(cleanSku(v.sku)===parsed.sku)list.push(variantProduct(p,v));const de=list.filter(p=>p.store==='de');if(de.length)list=de;}return list;}
  const imageAdapters={
    'FW-C01':{scene:'真实成人卧室中的独立工作角，门口、床、椅子退出空间和通道都提供尺度参照。',layout:'从门口斜拍，商品完整可见，通道不能靠缩小商品或移除必要家具伪造。'},
    'FW-C02':{scene:'深蓝墙独立书房，用电脑和少量纸质材料说明工作面的宽度与深度。',layout:'使用者一侧的较高斜角，按所选变体真实尺寸安排设备；放不下就减少道具，不扩大桌板。'},
    'FW-C03':{scene:'设计师工作角，用一张纸质草图表现工作任务。',layout:'人物在纸上用铅笔标注，不直接在桌面写画；桌板拼缝或整板状态只按所选变体。'},
    'FW-C04':{scene:'明亮家庭工作间，卷尺与软垫用于表达安装前适配核对。',layout:'商品按裸桌架实际售卖状态展示；配套桌板只可作为明确的另购演示物，不改变售卖范围。',require:'frame'},
    'FW-C05':{scene:'同一成年人在家庭工作角自然使用商品。',layout:'本张只选坐姿或站姿一个已核对状态，不能把两个身体状态拼在一张图里，也不表现治疗前后。',require:'electricDesk'},
    'FW-C06':{scene:'克制的小工作角，展示原装控制器的真实操作位置。',layout:'近景包含工作长边、桌角和原控制器；入座者右手接近已存在按键。按键数量不从旧思路照搬。',require:'electricDesk'},
    'FW-C07':{scene:'有金属书架与少量装饰的城市公寓工作间。',layout:'背景与所选颜色形成清晰对比；不把黑色变体改成原思路中的白色。'},
    'FW-C08':{scene:'小型团队工作室，成年人自然交流，保留现实通道。',layout:'本次所选商品作为唯一主角；其他人员和家具不构成随商品赠送的套装。'},
    'FW-C09':{scene:'干净的实景工作角，以真实可用空间说明尺寸选择。',layout:'单张只展示所选一个变体；不虚构其他尺寸，不把多个尺寸做成拼贴。尺寸标注在后期排版。'},
    'FW-C10':{scene:'客厅靠墙工作角，旁边是阅读椅与书架。',layout:'选择“下班合上电脑”的一个自然瞬间；商品保持原位，不生成家具消失或房间前后拼图。'},
    'FW-C11':{scene:'家庭工作间，电脑、打印件与少量文具构成清晰任务流程。',layout:'道具数量服从所选桌面真实尺寸；人物在已有纸张上做标记。'},
    'FW-C12':{scene:'有格架的多用途手作空间，少量纸片和普通文具整齐放置。',layout:'成年人在静止工作面上整理纸片；手部远离机械关节，不新增桌面结构。'},
    'FW-C13':{scene:'朴素、可信的居家工作角，只留少量必要道具。',layout:'用完整商品外观表达基础配置；不继承原思路中的价格、记忆位数量或赠品。'},
    'FW-C14':{scene:'同一家庭工作间中的休闲或办公任务。',layout:'只选一个时间、一个使用状态。普通游戏手柄作为生活道具，不增加产品灯带或电竞配件。'},
    'FW-C15':{scene:'居家办公角，表现保留合适旧桌板的升级意图。',layout:'商品裸桌架与另购或自有桌板分清，安装方式由真实适配资料决定，不展示无支撑安装。',require:'frame'},
    'FW-C16':{scene:'冷灰书房中的周计划整理任务。',layout:'成年人在纸质计划表上记事，保留真实桌面空白；不照搬旧思路的尺寸和整板假设。'},
    'FW-C17':{scene:'小办公室的采购核对场景，使用卷尺和经确认的规格资料。',layout:'规格文案后期添加，未核实数值不写进画面；不生成假下载按钮。',require:'frame'},
    'FW-C18':{scene:'简单工作角，清晰交代椅子、腿部与起身通道。',layout:'成年人自然准备起身；四肢不穿过商品，不能拉长桌腿或缩小椅子制造宽敞。'},
    'FW-C19':{scene:'创作者工作室，照片选片和少量存储设备构成真实任务。',layout:'设备数量服从所选商品尺寸；屏幕使用无品牌、无可读敏感信息的通用内容。'},
    'FW-C20':{scene:'成人夜间学习角，柔和台灯、书籍与一台电脑。',layout:'成年人在纸质书页与电脑之间记笔记；保持商品原色与真实比例。'},
    'FW-C21':{scene:'家庭书房中的日常视频会议任务。',layout:'选一个已核对的工作高度，人物自然听会议并在纸上记事；不把静态图当成升降性能证据。',require:'electricDesk'},
    'FW-C22':{scene:'有现实通路的公寓工作角，人物短暂离开工作位。',layout:'商品保持原位和完整识别，不拿身体改善或效率提升作前后对比。'},
    'FW-C23':{scene:'日常居家工作角，用干布整理工作面。',layout:'只展示普通干擦整理，不泼水、不放热锅、不声称未经核实的防水耐热或抗污性能。'},
    'FW-C24':{scene:'简洁、真实的商品展示区，说明裸桌架实际售卖内容。',layout:'只展示实际含有的桌架、控制器和线缆；不把演示桌板、显示器或椅子当作随货配件。',require:'frame'}
  };
  function buildIdeas(data,promotion,demand,video){const ideas=[];
    for(const c of data.creatives){const a=imageAdapters[c.Creative_ID]||{};ideas.push({id:c.Creative_ID,title:c.name,source:'原创图片方向',modes:['image'],family:a.require==='frame'?'frame':'desk',require:a.require||'',scene:a.scene,layout:a.layout,purpose:c.user_need,defaultSku:data.products.find(p=>p.id===c.product_ids[0])?.sku||'',original:c});}
    for(const b of promotion.briefs){const chair=b.id==='FW-BF-05',frame=b.id==='FW-BF-04',lshape=b.id==='FW-BF-03';ideas.push({id:b.id,title:b.title,source:'黑五促销简报',modes:b.id==='FW-BF-07'?['video']:['image'],family:chair?'chair':frame?'frame':lshape?'desk':'any',require:lshape?'lshape':'',scene:chair?'成年人在真实居家办公环境自然使用所选椅子。':frame?'真实居家升级场景，单独核对裸桌架的售卖边界。':lshape?'真实墙角办公区，保留所选 L 型产品的原朝向。':'自然明亮的家居空间，以所选商品和一个真实购买理由为主角。',layout:b.id==='FW-BF-02'?'只突出所选主商品。没有另一个已确认 SKU 与套装权益时，不生成虚构桌椅组合优惠。':b.id==='FW-BF-08'?'用一个商品、一个已确认利益收尾；没有已确认截止时间就不出现倒计时。':'主商品清楚，后期文案留白，不把旧简报的颜色、尺寸、价格、优惠码或配件移到新商品。',purpose:b.concept,defaultSku:promotion.products[b.product_keys?.[0]]?.sku||'',original:b});}
    for(const b of video.directions)ideas.push({id:b.id,title:b.title,source:'Shorts 视频方向',modes:['video'],family:'desk',require:b.id==='FV-02'?'lshape':b.id==='FV-04'?'glassDrawer':b.id==='FV-05'?'':'electricDesk',scene:b.id==='FV-05'?'真实成人卧室中的已完成工作区，保留床、门和通道。':'同一真实居家工作区，同一人物、自然光与道具。',layout:'每镜头一个小动作，先校对产品首帧，再生成视频。',purpose:b.title,defaultSku:b.product.match(/SKU\s+([^；]+)/)?.[1]||'',original:b});
    for(const c of demand.cards){const t=[c.type,c.product,c.title].join(' '),frame=/桌架/.test(t),glass=/玻璃|G2/i.test(t),lshape=/L型|L 型|lshape/.test(t);ideas.push({id:c.id,title:c.title,source:'用户需求建议',modes:['image','video'],family:frame?'frame':'desk',require:glass?'glass':lshape?'lshape':'',scene:frame?'明亮的真实家庭工作间，围绕所选裸桌架做适配核对。':'真实成人家庭工作空间，围绕选定商品的实际尺度与使用任务构图。',layout:'迁移需求与任务表达；旧建议中的尺寸、颜色、按键、抽屉、附件与性能数字不继承到新商品。',purpose:c.need+'：'+c.persona,original:c});}
    return ideas;
  }
  function structure(product){const known=Object.values(window.FurniwellGrok?.profiles||{}).find(p=>cleanSku(p.sku)===cleanSku(product.sku));if(known)return {known:true,facts:known.facts,stage:known===window.FurniwellGrok.profiles.lshape?'static':'inverted2',glassDrawer:known===window.FurniwellGrok.profiles.g2,image:known.image,notes:known.columnNote};
    if(cleanSku(product.sku)==='G-HAD25-1282-122WT-D')return {known:true,facts:['所选白色 Economy Solid 120 × 60 cm 为一体桌板，保留单个原装黑色数显控制器。','两根两节倒装立柱：粗外套管在上，细内管在下；两只原装白色圆角长条底脚。','控制器位于入座者右手侧、靠人的前工作长边下方。'],stage:'inverted2',image:'05_Furniwell_Creative_Opportunities/Furniwell_Product_References/P1.webp',notes:'同 SKU 官方图已核对；不能套用四拼 Economy。'};
    const facts=['产品外形、颜色、面板拼缝、结构件数量、脚型、控制器或开关、抽屉与接口必须逐项复制所选变体原图。','未确认的结构和配件不要补画；不从另一个 SKU 继承立柱节数、按键数量或抽屉数量。'];if(['desk','frame'].includes(product.caps.family))facts.push('左右按人正常入座面对工作面定义。原有控制器保持入座者右手侧的前工作长边位置，不镜像、不搬到短边；控制器形式和具体安装点以该变体原图为准。');return {known:false,facts,stage:'reference',image:'',notes:'具体立柱节数、装配方向或部件数量未逐项核实，视频默认不模拟未确认的机械伸缩。'};
  }
  function compatible(product,idea){const c=product.caps,s=structure(product);if(idea.family!=='any'&&idea.family!==c.family)return {ok:false,reason:'该思路适用于'+({desk:'完整桌款',frame:'单独桌架',chair:'椅子'}[idea.family]||idea.family)+'，请更换思路或商品。'};if(idea.require==='electricDesk'&&!c.electric)return {ok:false,reason:'此思路需要已确认的电动升降桌款。'};if(idea.require==='lshape'&&!c.lshape)return {ok:false,reason:'此思路需要 L 型商品，不能把直桌改成 L 型。'};if(idea.require==='glass'&&!c.glass&&!s.glassDrawer)return {ok:false,reason:'此思路需要玻璃桌款。'};if(idea.require==='glassDrawer'&&!s.glassDrawer)return {ok:false,reason:'本轮仅核实 G2 对应 SKU 的可擦写玻璃和原装单抽屉，不能让其他桌款凭空增加这些结构。'};return {ok:true,reason:s.known?'使用已核对结构，仍需比对所选原图。':'可按原图生成；未核实的机械结构只做静止展示。'};}
  const policyRules=[
    '商品与落地页保持同一 SKU、颜色、尺寸和实际售卖范围；不新增原商品没有的抽屉、灯带、控制器、配件或功能。',
    '只表达具体使用任务和已核实功能；不声称治疗腰痛、减肥、纠正疾病、百分之百改善健康或保证提高工作效率。不得暗示观众本人具有疾病、身体缺陷或经济困难等个人属性。',
    '不伪造评价、星级、销量、认证、测试结果、权威背书、稀缺库存、折扣、原价、截止时间或“非广告真人测评”。表演者的演示不能包装成真实用户证言。',
    '不复制竞品 Logo、广告画面或受保护素材；使用自有或获得商业授权的人物、图片、音乐和配音。禁止生成假的播放、关闭、下载按钮或仿平台界面。',
    '禁止模糊、变形、拼贴、夸张滤镜、结构漂移和不真实比例。不同版位分别构图，关键主体与文字避开裁切和界面遮挡。',
    '默认生成无叠字素材底图或无字幕视频；广告标题、优惠、品牌与 CTA 后期排版或使用平台文字字段。Google PMax 可以使用合规叠字，但每个比例至少保留一份无叠字版本。',
    '投放时按平台当前要求使用适用的 AI 内容标识并保留生成或编辑元数据。提示词无法替代实际素材、落地页、价格权益和平台审核检查。'
  ];
  const badClaim=/(治愈|治疗|减肥|瘦身|根治|保证.{0,8}(效果|收益|转化|健康)|100\s*%.{0,8}(有效|改善|保证)|虚构|假评|fake review)/i;
  function checkOptions(o){if(!o.product?.image||o.product.referenceConfirmed===false)throw new Error('先为选定变体指定并确认正确的官网产品原图。');if(!o.idea)throw new Error('请选择素材库中已有的生成思路。');const fit=compatible(o.product,o.idea);if(!fit.ok)throw new Error(fit.reason);if(badClaim.test((o.extra||'')+' '+(o.offer||'')))throw new Error('补充信息中含有治疗、夸张保证或虚假证明等表达，请改为可核实的产品事实。');if((o.extra||'').length>1600||(o.offer||'').length>500)throw new Error('补充信息过长，请精简为已确认的结构或实际优惠。');return fit;}
  function productBlock(p,extra=''){const s=structure(p);return ['【主商品与参考图1】',`官网商品名称：${p.title}`,`SKU：${p.sku||'官网未提供 SKU，以变体编号识别'}；变体编号：${p.variant}`,`官网变体选项：${p.variantTitle}`,`商品链接：${p.url}`,`所选官网原图：${p.image}`,'请先保存并实际上传所选官网原图作为参考图1。链接只用于来源核对，不等于已经上传图片。参考图1只锁定本 SKU 的外形、颜色、拼缝、控制器和支撑结构；原图中的房间、窗户、光线、机位、椅子及摆件不作为复制依据。优先使用清楚展示商品的白底图或实拍产品图，不使用上一张 AI 广告成图继续改图；背景按本次独立视觉方案重新安排。',...s.facts.map(f=>'－'+f),`核验边界：${s.notes}`,extra?'执行者补充并负责核实的结构信息：'+extra:'没有额外确认信息，不补写承重、速度、噪声、记忆键数量或安装耗时。'].join('\n');}
  function adBlock(o,preset){const offer=o.offer&&o.offerConfirmed?'执行者已确认与当前所选变体及落地页一致的活动信息：'+o.offer+'。只可用于后期排版，不得自行补优惠码、条件或截止时间。':'没有确认的优惠信息。生成常青素材，不出现价格、折扣、倒计时、赠品或库存承诺。';return ['【投放要求】',`版位：${preset.label}；比例 ${preset.ratio}；制作尺寸 ${preset.size}。`,preset.safe,preset.export,`投放市场：${markets[o.market]||markets.de}。本提示词的执行说明全部使用中文；所需广告文案按目标市场语言在后期制作。`,offer,...policyRules.map((r,i)=>`${i+1}. ${r}`),'生成模型输出的像素、文件大小、编码和音频授权需要导出后核对；不能仅凭提示词宣称素材已通过平台审核。'].join('\n');}
  function identityLabel(o){const title=o.idea.title.replace(/\d{2,3}\s*[×xX]\s*\d{2,3}(?:\s*[×xX]\s*\d{2,3})?(?:\s*cm)?/g,'所选规格').replace(/\d{2,3}厘米/g,'所选规格').replace(/白色|白桌|黑色/g,'所选颜色');return `采用素材库思路 ${o.idea.id}「${title}」的使用意图。原方向涉及的旧商品、旧尺寸、颜色和优惠仅是历史索引，不作为本商品事实。画面主商品以本次 SKU 与参考图1为准，搭配椅由独立参考图2锁定；主商品本身为椅子时只使用参考图1。`;}
  function imageTask(o){return o.idea.id==='FW-C01'?'按所选商品真实尺寸保留床边、门口、座椅退出空间和通道；不能缩小商品伪造宽敞。':o.idea.id==='FW-C02'?'工作设备数量服从当前所选规格，说明可用宽度与深度；放不下就减少道具，不扩大桌板。':o.idea.layout;}
  function imagePrompt(o,preset,visual){const task=imageTask(o);return [window.FurniwellChairLibrary.attachments(o),'生成一张用于广告投放的写实商品素材。只输出一张完整单幅图片，不输出拼图、九宫格或多个比例拼版。',`本张唯一拍法：${visual.name}。与其他方案分别生成，不能继续套用参考图的原房间与光线。`,productBlock(o.product,o.extra),'【本次创意】',identityLabel(o),`需求与任务：${o.idea.purpose.replace(/\d{2,3}\s*[×xX]\s*\d{2,3}(?:\s*cm)?/g,'所选规格').replace(/白色|黑色|白桌|黑桌/g,'所选颜色')}`,`本张要完成的任务：${task}`,window.FurniwellVisualPlans.block(visual,o),window.FurniwellChairLibrary.block(o),'商品必须可识别，人物、道具和透视服从实际尺寸；光线可以变化，产品原色、材质和结构不能随风格改变。不要把场景图或人物姿态当作真实性能测试。',adBlock(o,preset),'【输出检查】','先检查产品，再检查视觉差异：对照原图核对控制器外形与按键、安装边、桌板拼缝、立柱粗细顺序和脚型；再核对本方案指定的光线、景别、摆放与布置。只换杯子或盆栽不算执行了不同拍法。全景检查全商品；近景检查可见部件和安装关系，不为展示全桌而破坏景别。'].join('\n\n');}
  function imageBatchPrompt(o,preset,visuals){const count=visuals.length;return [
    `【图片生成任务：共 ${count} 张独立图片】`,
    `请直接制作并交付 ${count} 张成品图片，按下方任务 1–${count} 逐张生成、逐张输出为独立图片附件。全部任务都要完成，不要只完成第 1 张，也不要仅返回提示词或文字说明。`,
    '禁止拼图、四宫格、九宫格、联系表，禁止把多个场景放进一张图片。每个任务对应一个独立图像文件。',
    `若生成工具每次只能生成一张，请依次执行 ${count} 次独立生成；完成当前任务后继续下一任务，直到交付全部 ${count} 张。每次都使用同一组主商品与搭配椅原图，不把上一张生成结果当作下一张的产品参考。`,
    window.FurniwellChairLibrary.attachments(o),
    `【本组统一版位】${preset.label}；全部 ${count} 张使用 ${preset.ratio}、${preset.size}。其他比例属于备选版位，不在本组混用。`,
    productBlock(o.product,o.extra),window.FurniwellChairLibrary.block(o),identityLabel(o),
    `共同需求与任务：${o.idea.purpose.replace(/\d{2,3}\s*[×xX]\s*\d{2,3}(?:\s*cm)?/g,'所选规格').replace(/白色|黑色|白桌|黑桌/g,'所选颜色')}。${imageTask(o)}`,
    ...visuals.flatMap((v,i)=>[`【任务 ${i+1}/${count}：第 ${i+1} 张图片｜${v.name}】`,window.FurniwellVisualPlans.block(v,{...o,batchSize:count,batchIndex:i+1}),`本任务的交付文件：图片 ${i+1}/${count}。产品和椅子保持固定，执行本任务指定的光线、镜头、摆放和布置。`]),
    adBlock(o,preset),
    `【整批完成条件】实际输出 ${count} 张独立图片附件，分别对应任务 1–${count}；核对每张的 SKU、椅子、控制器、桌板拼缝及支撑结构，再核对各自的光线和构图。只输出一张图片或一张拼图均不算完成本批任务。`
  ].join('\n\n');}
  function imageOutput(result,placementId,part='batch'){const batch=result.batches?.find(b=>b.id===placementId)||result.batches?.[0];if(!batch)throw new Error('请先生成图片任务。');if(part==='batch')return {text:batch.text,count:batch.count,batch,label:batch.count+' 张独立图片批量生成指令'};const index=Number(String(part).replace('image-',''));if(!/^image-\d+$/.test(part)||!batch.jobs[index])throw new Error('请选择有效的单张图片任务。');const job=batch.jobs[index],asset=result.assets.find(a=>a.id===job.assetId);return {text:`【单张任务：第 ${index+1}/${batch.count} 张｜${job.visualName}】\n这里只执行本张任务；完整 ${batch.count} 张请使用批量总指令，或依次执行全部单张任务。\n\n`+asset.text,count:1,batch,index,label:`第 ${index+1}/${batch.count} 张图片指令`};}
  function videoStages(o){const s=structure(o.product);return window.FurniwellVideoInteraction.plan({direction:o.idea.id,family:o.product.caps.family,lshape:o.product.caps.lshape||o.idea.require==='lshape',hasControl:o.product.caps.electric,canLift:o.product.caps.electric&&s.stage==='inverted2'},'zh');}
  function videoPrompt(o,preset){const C=window.FurniwellChairLibrary,I=window.FurniwellVideoInteraction,steps=videoStages(o),base=productBlock(o.product,o.extra)+'\n\n'+C.block(o).replace('人物自然使用同一把椅子','仅在指定有人镜头中，人物使用同一把椅子'),continuity='人物镜头使用同一成年人、同一服装；房间、光线、商品与道具保持。前＝靠人的工作长边，右＝人入座面对桌面时自己的右手侧；不镜像、不搬移控制器。只按本镜头出镜人数和动作执行，空镜不添加人。'+(structure(o.product).glassDrawer?'G2 保留一片玻璃、一个原装抽屉和前沿内嵌面板，不添加外挂控制器。':'');const master=[C.attachments(o),'【15 秒剪辑计划：5 段独立 3 秒视频】\n这是分镜与剪辑资料，不是让 Grok 单次连续生成的指令。先分别制作并验收 5 张首帧，再逐镜头生成 3 秒片段，最终硬切拼接为 15 秒。每个独立任务只上传本镜头首帧，不混入其他镜头。',base,identityLabel(o),`场景：${o.idea.scene}`,continuity,I.rules('zh'),...steps.map((step,i)=>[`镜头 ${i+1}（${i*3}–${i*3+3} 秒）`,I.block(step,'zh'),`首帧静止状态：${step.start}`,`唯一动作：${step.action}`,`结束状态：${step.end}`].join('\n')),I.inspection('zh'),adBlock(o,preset),'不让模型生成字幕、口播、音乐、Logo 或价格字样；这些内容在剪辑中添加。人物演示不包装成已真实发生的用户评价。'].join('\n\n');
    const shots=steps.map((step,i)=>({...step,title:`镜头 ${i+1} · ${i*3}–${i*3+3} 秒`,keyframe:[C.attachments(o),`【镜头 ${i+1} 首帧：只生成一张静止图片】`,`画面比例 ${preset.ratio}，制作尺寸 ${preset.size}。`,base,identityLabel(o),`场景：${o.idea.scene}`,continuity,I.rules('zh'),I.block(step,'zh'),`只画本镜头起始姿态：${step.start}`,'只画一个瞬间，不画动作轨迹、双重姿态或动作结束状态。不合格的身体连接与接触关系先重做首帧；此处提供提示词，不表示首帧已生成。',I.inspection('zh'),adBlock(o,preset)].join('\n\n'),clip:[C.attachments(o,true),`【镜头 ${i+1}：仅生成这一段独立的 3 秒图生视频】\n先实际上传主商品原图、所需搭配椅原图与本镜头已实际制作并验收的首帧。不要把首帧生成指令或其他镜头一起交给视频模型。`,`从 ${o.chair?'image3':'image2'} 的真实构图和产品位置开始；${o.chair?'参考图1只锁定主商品，参考图2独立锁定搭配椅。':'参考图1锁定主椅，参考图2仅为当前镜头首帧，不添加另一把椅子。'}不能上传另一个镜头的首帧。`,base,continuity,I.rules('zh'),I.block(step,'zh'),`起始状态：${step.start}`,`此镜头唯一允许的动作：${step.action}`,`结束状态：${step.end}`,`画面比例 ${preset.ratio}，制作尺寸 ${preset.size}。`,'镜头内不跳切、不绕拍、不增加部件、不改颜色或拼缝。模型无法维持身体或商品结构时，减少动作或保留已验收静帧；不要在视频中修复错误首帧。',I.inspection('zh'),...policyRules].join('\n\n')}));
    const full=[master,'【逐镜头首帧与图生视频指令：每段分别复制执行，不整包交给 Grok】',...shots.flatMap(s=>[s.title,'首帧提示词：',s.keyframe,'图生视频提示词：',s.clip])].join('\n\n');return {text:full,master,shots};}
  function compile(o){checkOptions(o);o={...o,chair:window.FurniwellChairLibrary.forProduct(o.product,o.chair)};const selected=presets[o.mode].filter(p=>o.channel==='both'||p.group===o.channel||p.group==='both');if(!selected.length)throw new Error('请选择有效投放平台。');const warnings=[];if(o.offer&&!o.offerConfirmed)warnings.push('优惠尚未勾选确认，已生成无优惠的常青版本。');if(!structure(o.product).known)warnings.push('所选 SKU 没有逐项核实的结构档案，已按原图锁定并禁止猜测机械伸缩。');if(o.product.source!=='live')warnings.push('商品来自 '+o.product.checkedAt+' 目录快照，投放前再次核对官网变体和售卖范围。');if(o.chair&&o.chair.source!=='live')warnings.push('搭配椅来自 '+o.chair.checkedAt+' 官网快照，生成前核对颜色、主图与当前可售状态。');const visuals=o.mode==='image'?window.FurniwellVisualPlans.select(o):[];const assets=o.mode==='image'?visuals.flatMap(v=>selected.map(p=>({id:p.id+'--'+v.id,label:v.name+'｜'+p.label,visualId:v.id,visualName:v.name,placementId:p.id,placementLabel:p.label,ratio:p.ratio,size:p.size,text:imagePrompt(o,p,v)}))):selected.map(p=>({id:p.id,label:p.label,ratio:p.ratio,size:p.size,...videoPrompt(o,p)}));const batches=o.mode==='image'?selected.map(p=>({id:p.id,label:p.label,ratio:p.ratio,size:p.size,count:visuals.length,jobs:visuals.map((v,i)=>({number:i+1,visualId:v.id,visualName:v.name,assetId:p.id+'--'+v.id})),text:visuals.length===1?assets.find(a=>a.placementId===p.id).text:imageBatchPrompt(o,p,visuals)})):[];return {version,mode:o.mode,batches,product:o.product,chair:o.chair,ideaId:o.idea.id,ideaTitle:o.idea.title,warnings,visuals:visuals.map(v=>({id:v.id,name:v.name,camera:v.camera,light:v.light,placement:v.placement,room:v.room})),assets};}
  function bundleText(result){return [`# Furniwell 中文${result.mode==='image'?'图片':'视频'}广告 Prompt`, `生成规则版本：${version}`,`SKU：${result.product.sku}；变体 ${result.product.variant}`,`选择思路：${result.ideaId} · ${result.ideaTitle}`,`来源：${result.product.url}`,result.chair?`搭配椅：${result.chair.sku} · ${result.chair.color}；${result.chair.url}`:'搭配椅：主商品为椅子，不额外添加。', ...result.warnings.map(w=>'注意：'+w),...(result.mode==='image'?result.batches:result.assets).flatMap(a=>[`\n## ${a.label} · ${a.ratio} · ${a.size}${a.count?' · '+a.count+' 张独立图片':''}`,a.text]),'\n## 平台规则来源',...sources.map(s=>s.name+'：'+s.url),'本工具生成制作提示词，不替平台审核实际素材。'].join('\n\n');}
  window.FurniwellPromptEngine={version,stores,markets,sources,presets,cleanSku,parseInput,classify,normalizeProduct,variantProduct,lookup,buildIdeas,structure,compatible,compile,bundleText,imageOutput,policyRules};
})();

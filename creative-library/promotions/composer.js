/* Promotional copy stays exact while each image has its own art direction. */
(() => {
 'use strict';
 const layouts={auto:'由各张独立设计方案决定',left:'左侧留文字区，商品放右侧；文字与控制器、桌脚、人物分离',top:'上方独立标题区，商品完整放在下方；竖图文字避开平台遮挡',strip:'侧边或底部窄促销色条，主商品仍占画面主体；9:16色条不得压在底部界面区'};
 const styles={auto:'由各张独立设计方案决定',badge:'黑白底与一枚红色折扣徽章，简洁促销色块',editorial:'米白与深棕的家居杂志排版，细边框及清晰优惠标签',ribbon:'深色标题色带与醒目优惠价签，白色高对比文字',seasonal:'少量节庆线条、纸片或装饰，放在背景边缘；不改商品、不堆满画面'};
 const designs=[
  {id:'editorial',name:'杂志留白',layout:'让场景照片通幅，标题竖向沿画面一侧的真实留白分行，优惠紧邻标题，其他小字成组；不用白底小卡片或大折扣贴纸',style:'炭灰与暖白平面文字，极细线条，克制的杂志排版；保留照片本身的色彩与真实光线'},
  {id:'type',name:'大字分层',layout:'主标题占上部一角，超大字体作为局部平面背景，商品清晰占据中下部，折扣数字与条件合成一组；文字不得盖住商品关键结构',style:'单一深墨绿或石墨色配米白，字重形成对比，平面排版；不使用红色爆炸贴或按钮'},
  {id:'band',name:'通幅照片与窄信息带',layout:'完整照片占主体，在与主商品不重叠的画面边缘设置一条窄促销信息带，主标语、折扣和条件横向或纵向有序排列，不做内嵌图片卡片',style:'低饱和深蓝或深棕与暖白，只有一个细小强调色块；保留场景自然层次'},
  {id:'architecture',name:'几何留白与材质',layout:'通过真实墙面和地面的不同色面构成不对称几何空间，商品位于视觉中心偏侧，信息排入另一块留白；不复制参考广告画面',style:'酒红、砂岩与象牙白的低饱和配色，细线和留白代替渐变、霓虹及堆叠装饰；商品颜色不变'},
  {id:'dark',name:'暗场主视觉',layout:'深色通幅照片中让商品成为视觉焦点，标题在底部留白，优惠沿一侧竖向排列；不遮挡桌腿与控制器',style:'石墨、浅灰和一点铜色点缀，真实局部照明，低反射纸感字体；不加霓虹或发光桌腿'},
  {id:'depth',name:'纵深边栏',layout:'以可辨认的实际工作环境形成画面纵深，将商品保留在前中景；标题与优惠形成窄竖栏，其他信息错落对齐，避免居中小卡片',style:'灰白和深棕的双色信息层级，细线分隔，文字与空间有呼吸感，保持商品原色'}
 ];
 const fields={headline:65,discount:55,subline:100,code:35,validity:65,conditions:120,cta:40};
 function normalize(p){if(!p?.enabled)return null;const v={enabled:true,layout:layouts[p.layout]?p.layout:'auto',style:styles[p.style]?p.style:'auto',cast:['auto','none','standing'].includes(p.cast)?p.cast:'auto',template:p.template||'',market:p.market||'de',requires:p.requires||''};for(const k in fields)v[k]=String(p[k]||'').trim();return v;}
 function validate(p,confirmed,market){if(!p)return;if(!confirmed)throw Error('请确认图内促销文字、优惠及条件与当前 SKU 和落地页一致。');if(!p.headline)throw Error('请填写要出现在图片中的促销主标语。');for(const k in fields){if(p[k].length>fields[k])throw Error('促销文字过长，请精简后生成。');if(/\{[^}]*\}|\[[^\]]*(?:待填|待确认|折扣|日期)[^\]]*\]|XX\s*%|待填|待确认/i.test(p[k]))throw Error('请把促销文字中的占位符替换为已确认的真实内容。');}if(p.market&&p.market!==market)throw Error('文案语言与投放市场不一致，请更换文案或投放市场。');const all=Object.keys(fields).map(k=>p[k]).join(' ');if(/治愈|治疗|100\s*%.{0,8}(有效|改善)|fake review|garantiert.{0,12}(heilen|gesund)/i.test(all))throw Error('请改用可核实的商品与促销表达。');if((p.requires==='validity'||/LETZTE|LAST CHANCE|DERNIERS|NUR HEUTE|AUJOURD.HUI SEULEMENT/i.test(all))&&!p.validity)throw Error('收官或限时文案需要填写真实活动期限。');if((p.requires==='code'||/\bcode\b/i.test(p.headline+' '+p.subline))&&!p.code)throw Error('该文案需要填写实际可用的优惠码。');}
 function lines(p){return [['主标语',p.headline],['优惠力度',p.discount],['副标语',p.subline],['优惠码行',p.code],['有效期',p.validity],['适用条件小字',p.conditions],['行动短语',p.cta]].filter(x=>x[1]);}
 function design(p,index=0,ideaId=''){const n=Number((ideaId.match(/FW-BF-(\d+)/)||[])[1]||9);const offset=Math.max(0,n-9)%designs.length;return designs[(index+offset)%designs.length];}
 function visualBlock(p,index=0,ideaId=''){if(!p)return '';const d=design(p,index,ideaId);return [`【本张独立促销版式：${d.name}】`,`构图：${p.layout==='auto'?d.layout:layouts[p.layout]}。`,`促销图形：${p.style==='auto'?d.style:styles[p.style]}。`,'版式服务本张摄影机位，不给每张图片套同一张白底卡片或同一侧大红徽章；保留产品原色、真实结构和促销文字可读性。'].join('\n');}
 function shortVisual(p,index=0,ideaId=''){const d=design(p,index,ideaId);const auto={editorial:'照片通幅，一侧竖排文字，炭灰暖白细线杂志感',type:'大字分层，墨绿或石墨色配米白，商品清楚',band:'通幅照片，边缘窄信息带，深蓝或棕配暖白',architecture:'真实墙地不对称色面，酒红砂岩留白与细线',dark:'深色通幅场景，底部标题与侧边优惠，石墨灰配少量铜色',depth:'真实办公纵深，标题和优惠用窄竖栏、灰白深棕细线排版'};const l={left:'文字左、商品右',top:'标题上、商品下',strip:'边缘窄促销色条'};const s={badge:'黑白与红色优惠徽章',editorial:'米白深棕杂志排版',ribbon:'深色标题带和价签',seasonal:'克制节庆线条'};return `版式：${p.layout==='auto'&&p.style==='auto'?auto[d.id]:[p.layout==='auto'?auto[d.id]:l[p.layout],p.style==='auto'?'':s[p.style]].filter(Boolean).join('；')}。`;}
 function block(p,short=false){if(!p)return '';const words=lines(p).map(([k,v])=>`${k}：「${v}」`).join(short?'；':'\n');return short?`直接生成带字促销成图，逐字排入且不翻译：${words}。不加其他字、价格或优惠。`:[
 '【带字促销成图：文字必须直接出现在最终图片内】',
 '本次交付包含促销标语、已确认优惠文字与促销元素的完整广告成图。不能只给无字底图、空白文字区或建议后期再加字。',
 '以下引号内内容为唯一允许入画的文案，逐字照排，保留原语言、大小写、重音、数字、百分号和优惠码；引号本身不入画：',words,
 '分别按照每张任务的独立版式排版。保持商品原色，促销色彩只用于平面排版及背景装饰。',
 '层级：主标语、优惠力度最醒目，副标语次之，优惠码/期限/条件清晰可读；空间不足时减道具、重排构图，不能删改文字。行动短语使用普通文字，不画仿平台可点击按钮。',
 '不添加未填写的原价、到手价、赠品、全站范围、倒计时或最低价承诺。条件行与折扣放同一画面，不能把“最高”优惠改成全品统一折扣。',
 '交付前放大逐字校对；错字、乱码、缺字或数字错误须重做该张或后期准确替换文字。各比例独立排版，主体和文字留安全边距。PMax另外可切换无字底图制作；带字版不作为 Merchant Center 商品主图。'
 ].join('\n');}
 window.FurniwellPromotionComposer={normalize,validate,block,lines,layouts,styles,fields,design,designs,visualBlock,shortVisual};
})();

/* Explicit image copy, independent of historical competitor offers. */
(() => {
 'use strict';
 const layouts={left:'左侧留文字区，商品放右侧；文字与控制器、桌脚、人物分离',top:'上方独立标题区，商品完整放在下方；竖图文字避开平台遮挡',strip:'侧边或底部窄促销色条，主商品仍占画面主体；9:16色条不得压在底部界面区'};
 const styles={badge:'黑白底与一枚红色折扣徽章，简洁促销色块',editorial:'米白与深棕的家居杂志排版，细边框及清晰优惠标签',ribbon:'深色标题色带与醒目优惠价签，白色高对比文字',seasonal:'少量节庆线条、纸片或装饰，放在背景边缘；不改商品、不堆满画面'};
 const fields={headline:65,discount:55,subline:100,code:35,validity:65,conditions:120,cta:40};
 function normalize(p){if(!p?.enabled)return null;const v={enabled:true,layout:layouts[p.layout]?p.layout:'left',style:styles[p.style]?p.style:'badge',template:p.template||'',market:p.market||'de',requires:p.requires||''};for(const k in fields)v[k]=String(p[k]||'').trim();return v;}
 function validate(p,confirmed,market){if(!p)return;if(!confirmed)throw Error('请确认图内促销文字、优惠及条件与当前 SKU 和落地页一致。');if(!p.headline)throw Error('请填写要出现在图片中的促销主标语。');for(const k in fields){if(p[k].length>fields[k])throw Error('促销文字过长，请精简后生成。');if(/\{[^}]*\}|\[[^\]]*(?:待填|待确认|折扣|日期)[^\]]*\]|XX\s*%|待填|待确认/i.test(p[k]))throw Error('请把促销文字中的占位符替换为已确认的真实内容。');}if(p.market&&p.market!==market)throw Error('文案语言与投放市场不一致，请更换文案或投放市场。');const all=Object.keys(fields).map(k=>p[k]).join(' ');if(/治愈|治疗|100\s*%.{0,8}(有效|改善)|fake review|garantiert.{0,12}(heilen|gesund)/i.test(all))throw Error('请改用可核实的商品与促销表达。');if((p.requires==='validity'||/LETZTE|LAST CHANCE|DERNIERS|NUR HEUTE|AUJOURD.HUI SEULEMENT/i.test(all))&&!p.validity)throw Error('收官或限时文案需要填写真实活动期限。');if((p.requires==='code'||/\bcode\b/i.test(p.headline+' '+p.subline))&&!p.code)throw Error('该文案需要填写实际可用的优惠码。');}
 function lines(p){return [['主标语',p.headline],['优惠力度',p.discount],['副标语',p.subline],['优惠码行',p.code],['有效期',p.validity],['适用条件小字',p.conditions],['行动短语',p.cta]].filter(x=>x[1]);}
 function block(p,short=false){if(!p)return '';const words=lines(p).map(([k,v])=>`${k}：「${v}」`).join(short?'；':'\n');return short?`直接生成带字促销成图，逐字排入且不翻译：${words}。${layouts[p.layout]}；${styles[p.style]}。字清楚，图层平面排版，不印在商品上；不加其他字、价格或优惠。`:[
 '【带字促销成图：文字必须直接出现在最终图片内】',
 '本次交付包含促销标语、已确认优惠文字与促销元素的完整广告成图。不能只给无字底图、空白文字区或建议后期再加字。',
 '以下引号内内容为唯一允许入画的文案，逐字照排，保留原语言、大小写、重音、数字、百分号和优惠码；引号本身不入画：',words,
 `排版：${layouts[p.layout]}。视觉元素：${styles[p.style]}。保持写实家居环境和商品原色，促销色彩只用于平面排版及背景装饰。`,
 '层级：主标语、优惠力度最醒目，副标语次之，优惠码/期限/条件清晰可读；空间不足时减道具、重排构图，不能删改文字。行动短语使用普通文字，不画仿平台可点击按钮。',
 '不添加未填写的原价、到手价、赠品、全站范围、倒计时或最低价承诺。条件行与折扣放同一画面，不能把“最高”优惠改成全品统一折扣。',
 '交付前放大逐字校对；错字、乱码、缺字或数字错误必须重做该张。各比例独立排版，主体和文字留安全边距。PMax另外可切换无字底图制作；带字版不作为 Merchant Center 商品主图。'
 ].join('\n');}
 window.FurniwellPromotionComposer={normalize,validate,block,lines,layouts,styles,fields};
})();

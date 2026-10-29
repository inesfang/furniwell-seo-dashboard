/* Exact Furniwell companion-chair variants; no generic chair substitutions. */
(() => {
  'use strict';
  const models=[{"id":"office","label":"高背人体工学办公椅","store":"de","handle":"ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken","title":"Furniwell Klassischer Ergonomischer Bürostühl mit Verstellbarer hoher Rücken","checkedAt":"2026-10-29","source":"snapshot","variants":[{"id":"44820467712266","sku":"G-OCNC23-0240-2","title":"Grauer","color":"灰色","available":true,"image":"https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212"},{"id":"44820467613962","sku":"G-OCNC23-0240-0","title":"Schwarz","color":"黑色","available":true,"image":"https://cdn.shopify.com/s/files/1/0580/4615/2882/files/Black.jpg?v=1760496205"},{"id":"44820467646730","sku":"G-OCNC23-0240-02","title":"Schwarz/Weiß","color":"黑白色","available":false,"image":""}]},{"id":"gaming","label":"带按摩腰枕与脚托的电竞椅","store":"de","handle":"burostuhl-mit-massage-lendenkissen-ergonomischer-gaming-stuhl-mit-fussstutze","title":"Bürostuhl mit Massage Lendenkissen, Ergonomischer Gaming Stuhl","checkedAt":"2026-10-29","source":"snapshot","variants":[{"id":"45478280724746","sku":"G-OCRC23-0393-LDGY","title":"Dunkelgrau","color":"深灰色","available":true,"image":"https://cdn.shopify.com/s/files/1/0580/4615/2882/files/52.jpg?v=1716544496"},{"id":"45478280757514","sku":"G-OCRC23-0393-LL4","title":"Hellgrau","color":"浅灰色","available":false,"image":"https://cdn.shopify.com/s/files/1/0580/4615/2882/files/51.jpg?v=1716544497"}]}];
  const defaultModel='office',defaultVariant='44820467712266';
  const colors={'Grauer':'灰色','Schwarz':'黑色','Schwarz/Weiß':'黑白色','Dunkelgrau':'深灰色','Hellgrau':'浅灰色'};
  const pairable=p=>p?.caps?.family!=='chair';
  const usable=v=>!!v&&v.available!==false&&/^https:\/\//.test(v.image||'');
  function model(id){return models.find(m=>m.id===id);}
  function fromProduct(id,p){const config=model(id);if(!config||p.store!=='de'||p.handle!==config.handle)throw new Error('搭配椅商品与指定官网链接不一致。');return {...config,title:p.title,source:'live',checkedAt:p.checkedAt,variants:p.variants.map(v=>({id:String(v.id),sku:v.sku,title:v.title,color:colors[v.title]||v.title,available:v.available,image:v.image||''}))};}
  function choose(m,id){const v=m?.variants.find(v=>v.id===String(id));if(!v)return null;return {...v,model:m.id,label:m.label,handle:m.handle,productTitle:m.title,source:m.source,checkedAt:m.checkedAt,url:'https://furniwell.de/products/'+m.handle+'?variant='+v.id};}
  function defaultChair(){return choose(model(defaultModel),defaultVariant);}
  function forProduct(p,choice){if(!pairable(p))return null;const c=choice===undefined?defaultChair():choice,config=c&&model(c.model);if(!config||c.handle!==config.handle||!/^\d+$/.test(c.id)||!usable(c))throw new Error('请选择可售且有对应官网参考图的搭配椅变体。');return c;}
  function facts(c){return c.model==='office'?[
    '保留独立网布头枕、上部高网背和下部独立腰靠；不能改成无头枕的单片网背椅。',
    '保留两侧原装扶手、软垫坐面、原气压杆、五爪底座与五个脚轮。网布、椅架、坐垫和底座的分色严格按此颜色变体原图，不改成通用白椅。',
    '不新增电竞包围侧翼、外置按摩腰枕、脚托或其他款式的扶手；不凭空演示靠背或扶手调节。'
  ]:[
    '保留厚软垫高背、原有包围侧翼、上部头枕和独立长方形腰枕；不能替换成网布办公椅。',
    '保留原有两只软垫扶手、坐垫分块、脚托与连接臂、五爪底座和五个脚轮；颜色、布面纹理及部件比例严格按所选变体原图。',
    '脚托保持所选官网原图可确认的静态状态，不臆造收折、展开或后仰过程；如需其他状态，先补同 SKU 的对应官方状态图并验收。',
    '官网图中的橙色按摩示意标记属于说明图形，不是发光部件；成图不复制橙色光圈、发光腰枕、能量波或医疗治疗效果。'
  ];}
  function block(o){const c=o.chair;if(!c)return '【椅子规则】\n主商品本身就是椅子，使用参考图1与主 SKU，不额外生成另一款搭配椅。';return [
    '【搭配椅：只使用这一官网变体】',`款式：${c.label}；官网名称：${c.productTitle}`,`椅子 SKU：${c.sku}；变体：${c.id}；颜色：${c.color}（官网选项 ${c.title}）`,
    `椅子商品链接：${c.url}`,`@image2 / 参考图2：${c.image}`,`来源：${c.source==='live'?'本次从官网读取':'官网目录快照'}，核对日期 ${c.checkedAt}。`,
    '先实际上传这张搭配椅原图作为 image2。参考图1只锁定主商品；参考图2独立锁定搭配椅，不能继承桌子原图里的其他椅子。',
    ...facts(c).map(f=>'－'+f),
    '画面如需搭配椅，只能出现这个款式和颜色；纯商品棚拍或功能近景允许椅子不入镜，不能为了露椅子改变本张拍法。',
    '人物自然使用同一把椅子，身体与坐垫接触真实。扶手与桌底冲突时把椅子留在桌外，不缩小椅子、缩短扶手或画穿桌板。椅子与桌子是独立家具，桌子升降时椅架、脚轮不随桌腿上移。',
    '跨镜头固定同一椅子 SKU、颜色、头枕、靠背、扶手、坐垫和底座；不在镜头间变成另一款椅子。',
    '搭配椅单独销售，不因同框而声称桌椅套装、赠送椅子或组合优惠；任何真实套装权益另行核实后再写入后期文案。'
  ].join('\n');}
  function attachments(o,clip=false){const c=o.chair;return c?[
    clip?'@image1 @image2 @image3':'@image1 @image2',
    '附件顺序：image1＝所选主商品官网原图；image2＝所选搭配椅官网原图。'+(clip?'image3＝本镜头已实际制作、验收的首帧。每个独立镜头任务都按此顺序重新上传，image2 不再指首帧。':''),
    '商品链接只用于核对来源，不等于已上传附件；若界面不解析 @image 标签，请手动选择对应图片。'
  ].join('\n'):clip?'@image1 @image2\n附件顺序：image1＝主商品官网原图；image2＝本镜头已实际制作并验收的首帧。':'@image1\n附件顺序：image1＝主商品官网原图。';}
  function legacyEnglish(){const c=defaultChair();return ['COMPANION CHAIR — @image2:',`Use only Furniwell high-back office chair, SKU ${c.sku}, variant ${c.id}, grey mesh with its original light frame, padded seat and five-spoke base. Chair reference: ${c.image}`,`Chair product: ${c.url}`,'Actually upload this chair photograph as @image2. Preserve its separate mesh headrest, upper mesh back, separate lower lumbar support, original arms, seat, five-spoke base and five casters. Never substitute a headrest-free generic white chair or gaming chair. Keep the same chair through every shot. Desk @image1 and chair @image2 are independent shape references. The chair stays grounded when the desk rises. This chair is sold separately; do not imply a free chair or desk-and-chair bundle.'].join('\n');}
  window.FurniwellChairLibrary={models,defaultModel,defaultVariant,model,usable,fromProduct,choose,defaultChair,forProduct,pairable,facts,block,attachments,legacyEnglish};
})();

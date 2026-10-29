/* Explicit product identity and image-to-video instructions. Product photos checked 2026-10-28. */
(() => {
  'use strict';
  const profiles = {
    economy: {
      name: 'Economy 白色四拼桌板 120 × 60 cm',
      sku: 'G-HAD241222B', variant: '44533451587850',
      url: 'https://furniwell.de/products/economy-elektrisch-hohenverstellbarer-schreibtisch?variant=44533451587850',
      image: 'videos/references/economy-official.jpg',
      original: 'https://cdn.shopify.com/s/files/1/0580/4615/2882/files/EconomyElektrischHohenverstellbarerSchreibtisch-sku_1.jpg?v=1764671992',
      facts: ['白色 120 × 60 cm；四片拼接桌板，保留原图拼缝。', '两根白色立柱，每根两节：粗外套管在上，细内管在下并连接底脚。', '两只原装白色长条 T 脚，保留黑色脚垫、横梁与线缆。', '仅一个黑色外挂手控器：入座者右手侧、靠人的前长边下方；不是右侧短边。'],
      identity: 'Furniwell Economy, SKU G-HAD241222B, variant 44533451587850. White 120 x 60 cm FOUR-PANEL desktop, with the exact seam pattern in @image1. Two white lifting columns, TWO telescoping sections per column. Two original white T-shaped floor feet with their original dark leveling pads. Exactly ONE original black hanging digital keypad under the user-facing FRONT LONG EDGE, on the seated user\'s anatomical RIGHT. Copy its actual housing, angle, display and buttons from @image1. No drawer, glass top, third column, wheels, extra keypad or added cable tray.',
      columns: 'INVERTED TWO-STAGE COLUMNS: the WIDER outer sleeve is UPPER, attached to the underside frame; the NARROWER inner section is LOWER, attached to the floor foot. Thick at the top, slim at the bottom. The thick upper sleeve and desktop travel upward together; the thin lower section remains anchored to the foot, so more of the thin section becomes visible below the upper sleeve. On lowering, the upper sleeve covers more of the lower section. The feet stay planted. Do not swap tube widths, turn either column upside down, add a third section, stretch solid metal, or lift only the tabletop.',
      controller: 'One black hanging keypad BELOW the front long edge at the seated worker\'s RIGHT. For a button shot, the worker uses her RIGHT index finger and approaches from her own side of the desk. Keep the real front-right tabletop corner and a portion of the long edge in view; never mount the keypad on the short end.',
      columnNote: '已对照同一变体官方主图确认两节倒装。'
    },
    lshape: {
      name: 'L 型黑色桌 160 × 140 × 60 cm',
      sku: 'G-SDF23-0285-0-B-G-HADT23-0286-BK', variant: '45028720378122',
      url: 'https://furniwell.de/products/l-form-eckschreibtisch-hohenverstellbar-elektrisch-ergonomischer-stehtisch?variant=45028720378122',
      image: 'videos/references/lshape-official.jpg',
      original: 'https://cdn.shopify.com/s/files/1/0580/4615/2882/files/L-Form_Eckschreibtisch_hohenverstellbar_Elektrisch_Ergonomischer_Stehtisch_Schwarz-_Schwarz_abe49266-f00a-463f-b9d4-c0fd761fa9ad.jpg?v=1765536019',
      facts: ['黑色 160 × 140 × 60 cm；保留原图 L 形朝向、两翼长度及拼缝。', '三根立柱、三只原装长条底脚；不改成直桌两柱结构。', '唯一手控器位于主工作面靠人的前长边下方、入座者右手侧。', '倒装要求按本次用户确认；主图为收合状态，不猜两节或三节，本脚本保持桌架静止。'],
      identity: 'Furniwell black L-shaped electric corner desk, SKU G-SDF23-0285-0-B-G-HADT23-0286-BK, variant 45028720378122, 160 x 140 x 60 cm. Preserve the exact L silhouette, return direction, unequal wing proportions, seams, THREE black lifting columns and THREE original floor feet in @image1. The seated worker occupies the inner working corner and faces the main long working edge; the return is on her LEFT as in the reference. Exactly ONE original hanging keypad remains below the main user-facing long edge on her RIGHT. Never mirror the L, swap its wings, replace it with two separate desks or a two-leg straight desk. No added wheels or drawers.',
      columns: 'Preserve the user-confirmed INVERTED column installation: upper outer sleeve above the lower inner section. Keep the exact visible collapsed column geometry in @image1. The collapsed photo does not establish the hidden telescoping stage count: do not invent a two-stage or three-stage mechanism. THIS RECIPE HAS NO HEIGHT-CHANGE SHOT; all three columns and feet remain motionless. A lifting shot requires a separately verified raised-state reference of this exact SKU first.',
      controller: 'The one hanging keypad stays under the MAIN user-facing LONG edge on the seated worker\'s RIGHT, never on either outer short end and never moved to the return. The desk does not move; this recipe shows an empty control detail without hands.',
      columnNote: '三柱与脚型已核对；收合主图不足以确认伸缩节数，因此暂不生成 L 型桌伸缩过程。'
    },
    g2: {
      name: 'G2 白色玻璃桌 140 × 70 cm',
      sku: 'G-HAD24-0430-142WT-2', variant: '45781441347850',
      url: 'https://furniwell.de/products/hohenverstellbarer-schreibtisch-mit-einteilige-glasplatte-ergonomischer-stehschreibtisch-computertisch?variant=45781441347850',
      image: 'videos/references/g2-official.jpg',
      original: 'https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0430-1.4m.jpg?v=1718078234',
      facts: ['白色 140 × 70 cm；一整片玻璃桌面，不生成拼缝。', '仅一个原装中央抽屉，保留原始宽度、抽屉面板和双侧滑轨。', '两根白色两节倒装立柱：粗套管在上，细管在下；两只原装白色长条底脚。', '控制面板内嵌于靠人的前长边右侧饰条；照原图保留按键与接口，不额外挂黑色控制器。'],
      identity: 'Furniwell G2 white glass desk, SKU G-HAD24-0430-142WT-2, variant 45781441347850, 140 x 70 cm. ONE continuous glass desktop, its original white front fascia, exactly ONE original central pull-out drawer with its real runners, two white columns and two original white floor feet. The ORIGINAL control strip and USB ports are INTEGRATED INTO the front fascia on the seated worker\'s RIGHT. Copy the exact visible layout in @image1. Do NOT add a separate hanging black Economy keypad. No desktop seams, wooden replacement top, second drawer, cabinet or wheel.',
      columns: 'INVERTED TWO-STAGE COLUMNS: the wider UPPER outer sleeve meets the under-desk frame; the narrower LOWER inner section meets the floor foot. Thick above, slim below, matching @image1. Keep that orientation in every frame. This writing-and-drawer recipe holds the desk at one height; do not animate leg extension or change the section count.',
      controller: 'The one control strip is BUILT INTO the white FRONT FASCIA on the seated worker\'s RIGHT. It is not a hanging keypad under the desk and it is not mounted on a short end. Preserve its button and port positions; no duplicate controller.',
      columnNote: '已核对玻璃、原装单抽屉、前沿右侧内嵌控制面板与两节倒装立柱。'
    }
  };
  const I=window.FurniwellVideoInteraction;
  const recipes = {
    'FV-01': {profile:'economy',scene:'One modest German home office, soft daylight from a window on the worker\'s LEFT, pale wall, light oak floor, one centered slim laptop. Keep the same laptop, chair and room throughout.',shots:I.plan({direction:'FV-01',family:'desk',hasControl:true,lshape:false,canLift:true},'en')},
    'FV-02': {profile:'lshape',scene:'One German home-office corner, soft window light from the worker\'s LEFT. One laptop on the main wing and an open notebook on the LEFT return. One woman, one chair, one continuous L-shaped desk.',shots:I.plan({direction:'FV-02',family:'desk',hasControl:true,lshape:true,canLift:false},'en')},
    'FV-03': {profile:'economy',scene:'One German home office, same woman and one laptop. Only the real desk power lead and laptop lead are present. The existing power connection stays connected. No cable tray, magnetic cover or hidden power box is included or invented.',shots:I.plan({direction:'FV-03',family:'desk',hasControl:true,lshape:false,canLift:true},'en')},
    'FV-04': {profile:'g2',scene:'One bright German home office. The same woman, one suitable erasable glass marker and one small cloth. Keep the glass clear enough to see its continuous surface. All writing is a simple mark, not AI-generated words.',shots:I.plan({direction:'FV-04',family:'desk',hasControl:true,lshape:false,canLift:false},'en')},
    'FV-05': {profile:'economy',scene:'One real-scale modest German bedroom. The SAME white 120 x 60 cm four-panel Economy is already installed beside a bed. Keep the doorway, bed, chair exit space and walking path fixed. One slim laptop only.',shots:I.plan({direction:'FV-05',family:'desk',hasControl:true,lshape:false,canLift:true},'en')},
    'FV-06': {profile:'economy',scene:'One German home office used for gaming and everyday work. One laptop, one mouse and the same chair. Same soft left-side window light, same woman and same four-panel desk throughout. No added RGB parts on the desk.',shots:I.plan({direction:'FV-06',family:'desk',hasControl:true,lshape:false,canLift:true},'en')},
  };
  recipes['FV-04'].shots[0].de='Deine To-dos direkt auf dem Tisch.';
  recipes['FV-04'].shots[4].de='Entdecke den Furniwell G2.';
  recipes['FV-05'].shots[0].de='Dein Arbeitsplatz auf 120 × 60 cm.';
  recipes['FV-05'].shots[4].de='Finde deine passende Größe.';
  const actor = 'In person shots ONLY: the same adult woman, about 30, brown hair in a low ponytail, cream sweater, charcoal trousers. Empty shots have zero people or body parts. One-hand close-ups show only her right hand and its connected wrist/forearm. Keep the same room, props and light direction across hard cuts.';
  const coordinates = 'ORIENTATION: FRONT means the long working edge nearest the seated woman; BACK means the opposite edge. RIGHT always means her anatomical right when she sits facing the work surface, never the camera\'s right. The keypad stays fixed at that physical right-front working position across cuts. Keep cameras on the worker-facing side of the desk; no camera crossing behind the back edge and no horizontal mirroring. If a reverse view is ever used, her physical right may appear on screen-left; do not relocate the controller to compensate.';
  const constraints = 'HARD FAILURES: wrong SKU, mirrored scene, controller on user-left or a short end, second controller, ordinary columns with wider lower tubes, changed stage count, floating feet, bending/tilting/elastic desktop, extra drawer, extra leg, disappearing cable, unsupported accessory. No generated captions, voice-over, music, promo badge or brand lettering. Add German subtitles and branding in editing. If geometry cannot be kept, reduce the action or retain the approved still; do not redesign the product.';
  const workflow = [
    '先下载主商品原图与灰色高背办公椅原图并实际上传，分别作为 image1、image2。只粘贴商品链接不会绑定图片。',
    '先复制每镜头的“首帧提示词”制作单张 9:16 首帧；先验收人数、手数、肩肘腕连接、椅背在身后及桌沿间隙，再核对产品。错误首帧必须重做，不能交给视频模型修复。',
    '推荐分镜生成：每镜头开独立任务，先上传主商品原图作为 image1、搭配椅原图作为 image2，再上传本镜头已验收首帧作为 image3。image2 不再指首帧，不要上传另一镜头的首帧。',
    '15 秒总提示词现在是剪辑计划，不直接整段交给 Grok 连续生成。每镜头只复制本段 3 秒图生视频指令；image1 主商品、image2 搭配椅、image3 当前首帧。界面不识别标签时手动指定附件。',
    '每段只做一个小动作：人物镜头桌椅固定，手部特写仅一只右手，升降镜头无人且椅子在运动区外。不生成入座、起身或转身过程；用硬切连接已完成状态。字幕、口播、品牌和促销信息后期添加。'
  ];
  const qa = ['产品名称、SKU、尺寸、颜色与三视图一致；四拼、整板、玻璃桌不能混用。','控制器只有一个，位于入座者右侧；外挂与 G2 内嵌形式正确；没有装到短边。','倒装立柱粗管在上、细管在下；节数、立柱数量、脚型正确；底脚贴地。','升降时桌面与上部套管一起移动；桌面水平；没有拉伸变形或全行程瞬移。','G2 只有原装一个抽屉；L 桌保留原朝向及三根立柱；未确认结构不补画。','对比首帧、运动中间帧和尾帧。发现多手、断身、人体消失、穿桌板/椅架、错款或结构变形，整段退回重做；不通过模糊、淡化或裁切掩盖错误，不进入投放。','搭配椅是指定灰色高背款，独立头枕、腰靠、扶手与五爪底座正确；image2 不是首帧，image3 才是当前镜头首帧。'];
  qa.push('人物镜头恰好一个完整成年人，双手分放对应大腿；椅背在身后，骨盆由坐垫承托。不能从椅背后拍正脸，不能只剩椅下裤腿。','手部特写只见一只右手与连续手腕前臂；无人镜头连残留的手、腿、脚与人影也不能有。');
  const get = b => recipes[typeof b==='string'?b:b.id];
  const product = b => profiles[get(b).profile];
  function common(b){const p=product(b),r=get(b);return ['PRODUCT IDENTITY — highest priority:',p.identity,'COLUMN ASSEMBLY:',p.columns,'CONTROLLER LOCATION:',p.controller,coordinates,'CONTINUITY:',actor,r.scene,window.FurniwellChairLibrary.legacyEnglish(),I.rules('en')].join('\n');}
  function keyframeText(b,index){const s=get(b).shots[index];return ['@image1 @image2','Create ONE photorealistic 9:16 still image, not a storyboard or collage. The attached @image1 is the exact official desk photograph and the only desk-shape reference; @image2 independently locks the companion chair. Preserve the furniture; change only the human staging and room described below.',`Production recipe ${typeof b==='string'?b:b.id}, shot ${index+1} START FRAME.`,common(b),I.block(s,'en'),'THIS SHOT START FRAME:',s.start,'Freeze this single start pose; do not include the action or end state. No motion trail, duplicate pose or simultaneous before/after states. Reject a faulty anatomical start frame before video generation.',I.inspection('en'),constraints].join('\n\n');}
  function clipText(b,index){const s=get(b).shots[index];return ['@image1 @image2 @image3','Generate ONE 3-second vertical 9:16 image-to-video clip. In this separate clip task, @image1 is the official product identity reference; @image2 is the approved Furniwell chair photograph; @image3 is THIS SHOT\'S already approved start frame. Begin exactly from @image3. Preserve its framing, pose, geometry, room, props and lighting. Do not create a different opening composition.',common(b),I.block(s,'en'),'ONLY ACTION:',s.action,'END STATE:',s.end,'No internal cut, orbit or unrequested action. Use ONLY the camera or body motion specified for this shot, never both. Preserve everything else.',I.inspection('en'),constraints].join('\n\n');}
  function promptText(b){const r=get(b);return [`Production recipe ${typeof b==='string'?b:b.id}. EDIT PLAN ONLY: five INDEPENDENT 3-second vertical 9:16 clips, joined into a 15-second ad. Do NOT submit this complete plan as a single continuous Grok generation. Make and approve each start still, then copy only that shot's image-to-video prompt. Actually upload @image1 as the official product reference and @image2 as the companion chair reference; each separate clip also uses its own approved @image3.`,common(b),'EDITING: HARD CUTS between already-established poses. Never animate sitting down, rising from the chair, turning across the desk, or a full sit-to-stand lift.',...r.shots.map((s,i)=>[`SHOT ${i+1}, ${i*3}-${i*3+3}s: @image1 @image2`,I.block(s,'en'),`START: ${s.start}`,`ACTION: ${s.action}`,`END: ${s.end}`].join('\n')),I.inspection('en'),constraints].join('\n\n');}
  function packetText(b){const p=product(b),r=get(b);return [`# ${b.id} · ${b.title} · Grok 产品锁定版`,'更新日期：2026-10-29（北京时间）；研究样本日期仍为 2026-10-27。',`固定产品：${p.name}`,`SKU：${p.sku}；variant：${p.variant}`,`商品：${p.url}`,`官网原图 / image1：${p.original}`,`搭配椅 / image2：${window.FurniwellChairLibrary.defaultChair().sku}；${window.FurniwellChairLibrary.defaultChair().url}`,`椅子官网原图：${window.FurniwellChairLibrary.defaultChair().image}`,'每镜头首帧作为 image3；搭配椅单独销售。更换椅子款式或颜色请使用网页的中文 Prompt 生成区。','','## 使用顺序',...workflow.map((s,i)=>`${i+1}. ${s}`),'','## 固定产品结构',...p.facts.map(s=>'- '+s),`核验边界：${p.columnNote}`,'','## 15 秒剪辑计划（纯英文；不要整段连续生成）','```text',promptText(b),'```','',...r.shots.flatMap((s,i)=>[`## 镜头 ${i+1} · ${i*3}–${i*3+3} 秒`,`后期德语字幕：${s.de}`,'### 首帧提示词','```text',keyframeText(b,i),'```','### 单镜头 Grok 图生视频提示词','```text',clipText(b,i),'```','']),'## 验收',...qa.map(s=>'- '+s),'','制作边界：提示词与参考图可降低结构错误，不能保证生成模型每帧正确。首帧与成片都要人工核对；错款画面不进入投放。'].join('\n');}
  window.FurniwellGrok = {version:'20261029-interaction1',profiles,recipes,workflow,qa,get,product,promptText,keyframeText,clipText,packetText};
})();

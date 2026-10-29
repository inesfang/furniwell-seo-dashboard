/* Explicit photographic directions. Product identity and photographic variety are independent. */
(() => {
  'use strict';
  const profiles=[
    {id:'space',name:'门口全景 · 空间尺度',kind:'wide',
      camera:'从使用者一侧的门口拍摄，等效 28 mm，机位约 1.35 m，轻微俯角；门框只占边缘，完整交代主商品与退出通道，禁止超广角拉长家具。',
      placement:'主商品短边朝向窗所在墙面，长边不贴窗；从靠人的工作面方向看见商品正面和一侧，座椅收在使用位置而非占据前景。',
      room:'窄长矩形房间，前景门框、远处封闭储物柜；窗在画面外的右后方。使用哑光浅灰墙与普通木地板，地面不铺地毯。',
      light:'阴天上午的右侧漫射日光，白平衡约 5200 K，低反差、柔软阴影；墙上没有树叶光斑。',
      palette:'中性浅灰与原产品色，通道明暗层次清楚；保留自然纹理，避免奶油黄调色。',
      props:'一台合上的笔记本和一张工作清单，主商品周边保持可走动的真实距离。',
      people:'一位成年人刚准备进入工作位，人物位于画面边缘，动作服务于空间尺度。',
      avoid:'不出现前景大椅背、落地绿植、编织地毯、窗帘墙或山景屏保。'},
    {id:'frontal',name:'正面构图 · 深色背景',kind:'wide',
      camera:'使用者一侧的近正面视角，等效 50 mm，机位约 1.10 m，镜头保持水平；构图端正，避免与门口斜拍相同的透视。',
      placement:'主商品长边正对镜头，离背景墙留出真实空隙；座椅沿使用方向摆正并移出主商品轮廓，前景不放遮挡物。',
      room:'深蓝灰哑光墙、右侧低矮封闭柜、浅灰硬质地面；没有可见大窗、开放书架或成排盆栽。',
      light:'左上方画外窗的定向中性日光，约 5000 K；阴影方向明确，反差高于柔光家居图，同时保留白色部件细节。',
      palette:'深蓝灰与商品原色形成清晰明度对比，轮廓利落，保持真实摄影质感。',
      props:'一份展开的纸质资料与单个笔筒；若任务需要屏幕，使用简洁不可读的工作界面。',
      people:'以商品轮廓为主，任务需要人物时只保留自然坐姿的侧面，不用挡住桌腿的大椅背。',
      avoid:'不出现左侧大窗、暖阳、米白窗帘、绿植包围和地毯。'},
    {id:'documentary',name:'人物纪实 · 使用瞬间',kind:'wide',
      camera:'从使用者右前方拍中景，等效 40 mm，机位约 1.55 m，轻微俯角；人物手部与实际任务处于视觉中心，保留商品识别部位。',
      placement:'主商品与背景墙呈小角度摆放，人物自然入座或站立使用；椅子顺着身体方向摆放，不把椅背对着镜头。',
      room:'真实有人使用的工作角，灰绿色墙面、窄壁架和一块纸质备忘板；布置有生活痕迹但不凌乱，没有大面积装饰植物。',
      light:'阴雨日下午的画外散射天光与微弱室内补光，约 4800 K；曝光自然，明暗不均匀但产品颜色可辨，不添加夕阳滤镜。',
      palette:'低饱和灰绿与中性肤色，保留布料和纸张质感，呈现真实使用照片。',
      props:'根据所选任务只保留正在用的纸张、笔或工作设备；屏幕不默认显示山湖风景。',
      people:'一位成年人正在完成所选思路中的具体动作，目光落在任务上，手部接触正确，不看镜头摆拍。',
      avoid:'不出现空无一人的完美样板房、整齐对称的盆栽和杯子组合，也不把人物当成真实用户证言。'},
    {id:'detail',name:'功能近景 · 手与原装部件',kind:'detail',
      camera:'从使用者右前方拍近景，等效 70 mm，机位接近目标部件高度；部件与所属安装边同框，背景轻度虚化，禁止用大光圈糊掉结构。',
      placement:'主商品保持正常使用朝向；通过镜头靠近形成近景，不能移动、放大或重装控制器来凑构图。',
      room:'背景仅留中灰墙面和模糊的纸质资料；让装修退到次要位置，画面里不出现窗、地毯与书架。',
      light:'右上方大面积中性柔光，约 5500 K，细节有柔和的边缘分离光；无阳光斑、无暖黄反射。',
      palette:'商品原色与中灰背景，突出材质、连接关系和手部接触，清晰度集中于真实部件。',
      props:'只留与这个动作有关的一只手或一件工具，不用咖啡杯、盆栽和笔记本装饰画面。',
      people:'只出现执行动作所需的手部；升降桌使用原安装位置的右手侧控制器，不虚构按键或显示内容。',
      avoid:'不为了塞入全桌而改变近景，不生成独立悬浮控制器，不把近景包装成承重或稳定性实测。'},
    {id:'evening',name:'夜间工作 · 局部照明',kind:'wide',
      camera:'从使用者左前方拍较低的中远景，等效 35 mm，机位约 1.0 m；保留原有右侧部件可辨，产品完整且透视自然。',
      placement:'主商品置于房间侧墙工作区，长边与墙平行；座椅在远侧自然入位，电脑或资料沿任务方向放置。',
      room:'深灰蓝墙、窄抽屉柜和一盏独立工作灯；窗在远处且已经暗下，不出现明亮白窗帘或日间花园。',
      light:'傍晚至夜间，独立工作灯约 4000 K，画外微弱冷色环境光；桌面明亮、远处较暗，白色部件保持中性而非橙黄。',
      palette:'局部明亮的工作面与深背景对比，保留阴影细节；不使用霓虹、彩色灯带或改变产品原色。',
      props:'一本展开的书、纸质笔记和与任务有关的设备；灯具属于场景道具，不暗示随商品附送。',
      people:'成年人专注完成一个真实任务，姿态放松；只展示当前状态，不拼接白天和夜间两个画面。',
      avoid:'不出现日照光斑、明亮窗景、奶油暖阳，也不把场景灯改造成产品自带灯。'},
    {id:'studio',name:'干净棚拍 · 商品轮廓',kind:'wide',
      camera:'使用者一侧的较低正面三分之二视角，等效 60 mm，机位约 0.85 m；全商品保持完整，线条清楚，产品周边留广告排版空间。',
      placement:'主商品独立置于摄影背景前，离墙形成接触阴影；无关家具和椅子移出画面，不改变主商品装配状态。',
      room:'浅灰摄影背景与连续的实拍地面，背景左侧一块克制的色面；这是商品棚拍，不假装成家庭使用现场。',
      light:'左前上方大型柔光箱为主，右侧白板补光，约 5600 K；轮廓亮暗清晰，地面阴影自然，没有窗户或树影。',
      palette:'干净的浅灰与低饱和蓝色色面，准确还原商品原色，无胶片黄调或夸张反射。',
      props:'默认不摆装饰道具；需要解释任务时只加一个相关物件，不拼成桌椅套装。',
      people:'默认无人物；所选思路必须包含动作时只让必要手部进入画面，不增加摆拍人物。',
      avoid:'不出现室内窗景、地毯、绿植、书架、咖啡杯与笔记本的家居套装。'},
    {id:'overhead',name:'高位俯拍 · 桌面任务',kind:'task',
      camera:'从使用者一侧较高位置向下拍约 40 度，等效 45 mm；工作面与靠人的前沿可辨，不能拍成完全正俯视而丢掉产品识别。',
      placement:'主商品工作长边斜穿画面，人物只在下缘出现手与少量躯干；道具沿实际工作流程组织，不对称堆放。',
      room:'冷灰色硬地面、画外收纳柜，画面只露少量墙角；背景不使用整面白窗帘和植物架。',
      light:'来自画外后上方的均匀漫射光，约 5300 K；纸张、手部和商品表面清楚，没有强烈夕阳或树影。',
      palette:'中性灰、商品原色与少量纸张颜色，画面清爽但保留正在工作的痕迹。',
      props:'用当前任务必需的纸张、笔、设备组织一次真实流程；不固定套用居中笔记本、右侧咖啡杯的摆法。',
      people:'以自然操作的双手或单手为主，身体不遮挡关键拼缝，不能直接在未核实可写的商品表面写画。',
      avoid:'不变成纯道具平铺图，不把桌板放大，不增加表面拼缝或未经确认的收纳。'},
    {id:'workplace',name:'办公纵深 · 工作环境',kind:'wide',
      camera:'从使用者一侧沿房间纵深拍中远景，等效 35 mm，机位约 1.45 m；主商品在前中景，背景门框形成纵向层次。',
      placement:'主商品放在工作区中央，长边顺房间纵向；保留真实过道，背景其他家具不能看起来属于同一售卖套装。',
      room:'小型工作室或独立办公室，浅色墙、玻璃隔断和封闭文件柜，灰色耐磨地面；不使用卧室地毯与落地植物。',
      light:'顶面中性照明与画外侧窗共同照明，约 4500 K，亮度均衡，背景逐渐变暗，没有黄金时刻的阳光光斑。',
      palette:'中性灰白与深色办公收纳，突出空间纵深和主商品原色，避免酒店样板间质感。',
      props:'只给主商品配置当前任务需要的设备与文件，背景资料模糊且不可读。',
      people:'一位成年人自然工作，另一位如需出现则远离主商品且不遮挡，不排队面向镜头。',
      avoid:'不出现奶油卧室、前景大椅背、花园窗景或成对的装饰盆栽。'}
  ];
  const preferred={
    'FW-C01':'space','FW-C02':'overhead','FW-C03':'documentary','FW-C04':'studio','FW-C05':'documentary','FW-C06':'detail','FW-C07':'frontal','FW-C08':'workplace','FW-C09':'frontal','FW-C10':'evening','FW-C11':'overhead','FW-C12':'documentary','FW-C13':'studio','FW-C14':'evening','FW-C15':'detail','FW-C16':'overhead','FW-C17':'workplace','FW-C18':'space','FW-C19':'workplace','FW-C20':'evening','FW-C21':'documentary','FW-C22':'space','FW-C23':'detail','FW-C24':'studio',
    'FW-BF-01':'studio','FW-BF-02':'frontal','FW-BF-03':'space','FW-BF-04':'documentary','FW-BF-05':'detail','FW-BF-06':'frontal','FW-BF-08':'studio',
    'ND-R01':'space','ND-R02':'documentary','ND-R03':'frontal','ND-R04':'detail','ND-R05':'overhead','ND-R06':'detail','ND-R07':'documentary','ND-R08':'evening','ND-R09':'detail','ND-R10':'studio','ND-R11':'frontal','ND-L01':'overhead','ND-L02':'space','ND-L03':'evening','ND-L04':'documentary','ND-L05':'detail','ND-L06':'frontal','ND-L07':'studio','ND-L08':'space','ND-X01':'frontal','ND-X02':'documentary'
  };
  const ids=profiles.map(p=>p.id);
  function intent(idea){const id=idea?.id||'',t=idea?.title||'';return {space:/FW-C0[19]|FW-C18|FW-C22|ND-R01|ND-L02|ND-L08/.test(id)||/放得下|空间|通道|墙角|转角|腿部/.test(t),bedroom:['FW-C01','FW-C20'].includes(id),living:['FW-C10','FW-C22'].includes(id),detail:/FW-C06|FW-C23|ND-R04|ND-R06|ND-R09|ND-L05/.test(id)};}
  function fit(profile,idea,product){const i=intent(idea);if(i.space&&['detail','studio','overhead'].includes(profile.id))return {ok:false,reason:'空间思路需要房间全景与真实通道，不能用局部或棚拍代替。'};if((i.bedroom||i.living)&&profile.id==='workplace')return {ok:false,reason:'此思路需要住宅生活场景。'};if((i.bedroom||i.living)&&profile.id==='studio')return {ok:false,reason:'此思路需要真实住宅使用环境。'};if(product?.caps.family==='frame'&&profile.id==='overhead')return {ok:false,reason:'裸桌架没有售卖桌板，不能生成桌面任务俯拍。'};return {ok:true,reason:''};}
  function select(o){const count=Number(o.visualCount||1);if(![1,4].includes(count))throw new Error('请选择一套或四套视觉方案。');const available=profiles.filter(p=>fit(p,o.idea,o.product).ok);const chosen=o.visual||'auto';if(chosen!=='auto'&&!ids.includes(chosen))throw new Error('请选择有效视觉方向。');if(chosen!=='auto'&&!fit(profiles.find(p=>p.id===chosen),o.idea,o.product).ok)throw new Error(fit(profiles.find(p=>p.id===chosen),o.idea,o.product).reason);
    const initial=preferred[o.idea?.id]||'documentary',offset=Math.max(0,ids.indexOf(initial));const ranked=[...profiles.slice(offset),...profiles.slice(0,offset)].filter(p=>available.includes(p));const recent=(o.recentVisuals||[]).filter(id=>ids.includes(id)).slice(-3);let first=chosen==='auto'?(ranked.find(p=>!recent.includes(p.id))||ranked[0]):available.find(p=>p.id===chosen);const rest=ranked.filter(p=>p.id!==first.id);const list=[first,...rest.filter(p=>!recent.includes(p.id)),...rest.filter(p=>recent.includes(p.id))].slice(0,count);if(list.length!==count)throw new Error('当前思路没有足够适用的拍法，请选择一套视觉方案。');return list.map(p=>o.idea?.id==='FW-C20'&&p.id!=='evening'?{...p,light:'夜间使用画外中性工作灯与低亮度环境补光，约 '+(p.id==='frontal'?'4500':p.id==='detail'?'5500':'5000')+' K；通过本方案机位对应的侧向光形成明暗，不出现日光或明亮窗外。'}:p);
  }
  function block(p,o){const i=intent(o.idea),family=o.product.caps.family;let context=i.bedroom?'成人卧室的工作区；空间画面保留床边或衣柜的真实尺度。':i.living?'真实客厅里的工作区；保留生活空间与工作空间的关系。':'按以下室内布置安排，生活与工作任务必须真实可信。';if(p.id==='studio')context='商品摄影棚；不把棚拍描述为真实家庭使用证据。';const crop=p.kind==='detail'?'本张是功能近景，允许画面外裁掉与功能无关的部分，但目标部件、所属安装边和比例必须准确。':p.kind==='task'?'本张是桌面任务中近景，允许局部裁切，必须保留足以识别所选商品的原有结构。':'本张是中远景或全景，主商品全貌、支撑结构及底脚完整，必要的操作空间真实存在。';
    const night=o.idea.id==='FW-C20';const light=night&&p.id!=='evening'?'夜间使用画外中性工作灯与低亮度环境补光，约 '+(p.id==='frontal'?'4500':p.id==='detail'?'5500':'5000')+' K；通过本方案机位对应的侧向光形成明暗，不出现日光或明亮窗外。':p.light;
    const props=family==='frame'?'按裸桌架售卖状态展示，工具或适配资料独立放在地面外侧；不增加桌板，不把另购部件当作标配。':family==='chair'?'相关笔记、资料放在人物手中或画外；不因道具描述新增椅子结构或随货配件。':p.props;
    return ['【独立视觉方案：'+p.name+'】',context,'镜头与景别：'+p.camera,'产品摆放：'+p.placement,'室内布置：'+p.room,'光线：'+light,'视觉效果：'+p.palette,'道具组织：'+props,'人物处理：'+(family==='desk'?p.people:'根据所选商品和任务安排必要人物，不继承桌类特有功能。'+p.people.replace(/升降桌使用原安装位置的右手侧控制器，不虚构按键或显示内容。/,'')),crop,'本方案排除：'+p.avoid,'每次仅生成这一张独立画面。相同 SKU 的其他方案要分别执行；禁止把多个视觉方案合成一张拼图。','产品结构不参与变化：仅改变光线、机位、摆放、房间、道具和人物任务。相机始终从可核对的使用者一侧取景，不能镜像或推测原图看不见的背面。'].join('\n');
  }
  window.FurniwellVisualPlans={profiles,preferred,intent,fit,select,block};
})();

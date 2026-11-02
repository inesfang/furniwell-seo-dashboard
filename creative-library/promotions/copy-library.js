/* Short source excerpts and original localised advertising adaptations. */
(() => {
 'use strict';
 const sources=[
 {id:'flexispot',brand:'FlexiSpot',url:'https://www.flexispot.de/black-friday-2026',quote:'Early-Bird-Angebote',observed:'活动页将预热优惠、单品折扣、优惠码和阶段性活动分层展示。',derive:'借鉴活动阶段和“购买理由＋优惠”的层级，重新写 Furniwell 文案。',boundary:'未验证转化表现；竞品折扣、价格和优惠码不能用于 Furniwell。'},
 {id:'desktronic',brand:'Desktronic',url:'https://desktronic.de/',quote:'Black Friday: bis zu 50% Rabatt',observed:'首页用简短活动名与最高折扣作显眼入口，下方按桌子、椅子及配件区分。',derive:'主标题缩短，折扣独立显示；“最高”与统一折扣明确区分。',boundary:'这条数字是竞品页面记录，不是 Furniwell 可用优惠。'},
 {id:'home24',brand:'home24',url:'https://www.home24.de/black-friday/',quote:'Möbel-Angebote & Deals für dein Zuhause',observed:'把居家空间、家具需求与 Black Week / Cyber Monday 阶段相连接。',derive:'围绕具体房间和使用任务写购买理由，再搭配已确认的优惠。',boundary:'活动区间与会员权益仅属于来源站点。'},
 {id:'songmics',brand:'SONGMICS HOME',url:'https://www.songmics.de/pages/black-friday-angebote',quote:'Nach Preis einkaufen',observed:'活动页按商品类别和价格组织，另有会员优惠入口；搜索摘要与页面显示并不完全一致。',derive:'按办公、电竞及家居任务拆分文案，不继承摘要里的旧折扣。',boundary:'活动页未明确完整有效期，不据此认定所有历史报价仍有效。'},
 {id:'jysk',brand:'JYSK',url:'https://jysk.de/black-friday',quote:'Angebote für alle am Black Friday!',observed:'用预热与办公家具类别引导选择；页面同时出现2025及2026年份。',derive:'借鉴“先选适合的工作位，再找优惠”的表达，不使用混杂年份的报价。',boundary:'只作为表达参考，不能认定页面全部内容属于2026在售活动。'}
 ];
 const rows=[
 ['PC-DE01','de','主促','通用','BLACK FRIDAY','Dein Arbeitsplatz. Dein Angebot.','ANGEBOTE ENTDECKEN','desktronic','活动名与优惠分开，适合主促海报。',''],
 ['PC-DE02','de','主促','通用','BLACK WEEK','Neue Ideen für deinen Arbeitsplatz.','JETZT ENTDECKEN','home24','用阶段名称组织一周的素材。',''],
 ['PC-DE03','de','预热','通用','FRÜH DRAN. GUT EINGERICHTET.','Entdecke unsere Early-Bird-Angebote.','ANGEBOTE ANSEHEN','flexispot','只在实际预热活动期间使用。',''],
 ['PC-DE04','de','主促','升降桌','MEHR PLATZ FÜR DEINE IDEEN.','Schreibtische für dein Homeoffice im Sale.','SCHREIBTISCHE ENTDECKEN','home24','突出工作空间，尺寸以选定SKU为准。',''],
 ['PC-DE05','de','主促','电竞椅','DEIN SETUP. DEIN STIL.','Entdecke ausgewählte Gaming-Angebote.','SETUP ENTDECKEN','songmics','个人电竞空间，避免夸张舞台布景。',''],
 ['PC-DE06','de','主促','升降桌','ARBEITSPLATZ NEU GEDACHT.','Höhenverstellbare Schreibtische entdecken.','JETZT AUSWÄHLEN','flexispot','以商品类别配合促销标签。',''],
 ['PC-DE07','de','主促','办公椅','KOMFORT TRIFFT ANGEBOT.','Bürostühle für deinen Arbeitsalltag.','STÜHLE ENTDECKEN','desktronic','不写治疗、保证健康或效率提升。',''],
 ['PC-DE08','de','主促','家居','NEUE IDEEN FÜR DEIN ZUHAUSE.','Ausgewählte Möbel jetzt im Angebot.','MÖBEL ENTDECKEN','home24','适合家具类促销，不暗示全站统一折扣。',''],
 ['PC-DE09','de','主促','通用','DEIN CODE FÜR NEUE WOHNIDEEN.','Code beim Einkauf einlösen.','ANGEBOTE ENTDECKEN','songmics','需填写实际优惠码和适用条件。','code'],
 ['PC-DE10','de','收官','通用','LETZTE TAGE','Entdecke die Angebote vor Aktionsende.','ANGEBOTE ANSEHEN','flexispot','必须有真实结束日期；不自动生成倒计时。','validity'],
 ['PC-DE11','de','网一','通用','CYBER MONDAY','Dein nächstes Setup wartet.','ANGEBOTE ENTDECKEN','home24','用于实际网一活动，不沿用竞品期限。',''],
 ['PC-DE12','de','主促','升降桌','SALE FÜR DEIN HOMEOFFICE','Platz für deine nächste Idee.','JETZT ENTDECKEN','jysk','用办公类别对应购买任务。',''],
 ['PC-FR01','fr','主促','通用','BLACK FRIDAY','Votre espace de travail, à votre façon.','DÉCOUVRIR LES OFFRES','desktronic','法国市场原创改写；折扣需使用法国站实际权益。',''],
 ['PC-FR02','fr','预热','通用','LES OFFRES COMMENCENT','Préparez votre nouvel espace de travail.','VOIR LES OFFRES','flexispot','实际预热阶段使用。',''],
 ['PC-FR03','fr','主促','升降桌','DE LA PLACE POUR VOS IDÉES','Découvrez nos bureaux en promotion.','DÉCOUVRIR LES BUREAUX','home24','不固定旧尺寸，按SKU配图。',''],
 ['PC-FR04','fr','主促','办公椅','LE CONFORT RENCONTRE LES OFFRES','Une chaise pour votre quotidien.','DÉCOUVRIR LES CHAISES','desktronic','生活任务表达，不作医疗功效保证。',''],
 ['PC-FR05','fr','收官','通用','DERNIERS JOURS','Découvrez les offres avant la fin.','VOIR LES OFFRES','flexispot','填写真实结束日期及限制条件。','validity'],
 ['PC-FR06','fr','网一','通用','CYBER MONDAY','De nouvelles idées pour votre intérieur.','DÉCOUVRIR LES OFFRES','home24','须使用法国站活动信息。','']
 ];
 const templates=rows.map(([id,market,stage,category,headline,subline,cta,source,note,requires])=>({id,market,stage,category,headline,subline,cta,source,note,requires,kind:'Furniwell 原创衍生文案',discount:''}));
 window.FURNIWELL_PROMO_COPY={checkedAt:'2026-11-02',sources,templates,offerExample:{market:'de',discount:'20 % RABATT',code:'Code: HW20',url:'https://furniwell.de/',note:'2026-11-02 官网顶部可见20%及HW20；期限、叠加和当前SKU适用情况未逐项核实，填入后仍需核对。'}};
})();

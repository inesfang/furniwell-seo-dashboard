/* Presentation and navigation only. Original records, prompt compilers and exports are retained. */
(() => {
  'use strict';
  const byId=id=>document.getElementById(id);
  const safe=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const E=window.FurniwellPromptEngine,G=window.FurniwellGrok,B=window.PromptBuilder;
  const originalView=window.view,originalShare=window.shareState,main=document.querySelector('main');
  if(!E||!G||!B||!main)return;
  const version='20261030-clarity2';
  const definitions={
    references:{title:'参考素材库',description:'按图片、视频和表达方式找参考，完整分析与来源在详情中查看。',tabs:[['images','图片参考'],['video-samples','视频样本'],['video-analysis','视频内容拆解']]},
    ideas:{title:'创意方案库',description:'从推荐方向开始，也可以按原创方案、用户需求或视频任务选择。',tabs:[['recommended','优先推荐 · Top 10'],['all-ideas','全部原创方向'],['needs','用户需求建议'],['video-ideas','视频制作方向']]},
    workspace:{title:'制作工作台',description:'选定商品和思路，制作对应的中文图片或视频 Prompt。',tabs:[['image-prompt','图片 Prompt'],['video-prompt','视频 Prompt']]},
    promotions:{title:'促销专题',description:'黑五案例、制作建议和排期集中保留，活动事实按原记录日期核对。',tabs:[]},
    products:{title:'产品与规范',description:'核对原产品事实、结构边界、广告版位与图生视频制作规则。',tabs:[['facts','产品事实'],['rules','制作与投放规范'],['video-production','视频测试与来源']]}
  };
  const routes={images:{section:'references',view:'gallery',image:'browse'},'video-samples':{section:'references',view:'videos',video:'samples'},'video-analysis':{section:'references',view:'videos',video:'analysis'},recommended:{section:'ideas',view:'top10'},'all-ideas':{section:'ideas',view:'plans'},needs:{section:'ideas',view:'needs'},'video-ideas':{section:'ideas',view:'videos',video:'directions'},'image-prompt':{section:'workspace',view:'gallery',image:'prompt'},'video-prompt':{section:'workspace',view:'videos',video:'generator'},promotions:{section:'promotions',view:'promotions'},facts:{section:'products',view:'products'},rules:{section:'products',view:'products'},'video-production':{section:'products',view:'videos',video:'production'}};
  const last={references:'images',ideas:'recommended',workspace:'image-prompt',promotions:'promotions',products:'facts'};
  let productTab=new URLSearchParams(location.hash.slice(1)).get('pr')==='rules'?'rules':'facts',restoring=false;

  function details(title,nodes,parent){const d=document.createElement('details');d.className='org-disclosure';const summary=document.createElement('summary');summary.textContent=title;d.append(summary);for(const n of nodes)if(n)d.append(n);if(parent)parent.append(d);return d;}
  const overview=[...main.children].filter(n=>n.tagName!=='SECTION');
  const header=document.createElement('header');header.className='org-header';header.innerHTML='<div class="org-header-row"><div><div class="org-kicker">FURNIWELL · CREATIVE LIBRARY</div><h1 id="orgTitle" tabindex="-1"></h1><p id="orgDescription"></p></div><span id="orgCount" class="org-count"></span></div>';
  const about=details('资料范围与更新记录',overview,header);about.id='orgAbout';
  const foot=document.querySelector('.sidefoot');if(foot)about.append(foot);
  main.prepend(header);
  const skip=document.createElement('a');skip.href='#orgTitle';skip.className='org-skip';skip.textContent='跳到主要内容';document.body.prepend(skip);skip.addEventListener('click',event=>{event.preventDefault();byId('orgTitle').focus();byId('orgTitle').scrollIntoView({block:'start'});});
  const side=document.createElement('div');side.className='org-side-help';side.innerHTML='<button type="button" data-org-route="rules">制作规范与使用指南 →</button>';document.querySelector('aside').append(side);
  const pages={};
  for(const [key,config]of Object.entries(definitions)){
    const page=document.createElement('section');page.id='org-'+key;page.className='org-page';page.hidden=true;page.setAttribute('aria-label',config.title);
    const nav=document.createElement('nav');nav.className='org-subnav';nav.setAttribute('aria-label',config.title+'分类');
    nav.innerHTML=config.tabs.map(([id,label])=>`<button type="button" data-org-route="${id}" aria-controls="${routes[id].view}View">${safe(label)}</button>`).join('');
    if(config.tabs.length)page.append(nav);main.append(page);pages[key]=page;
  }
  for(const key of ['top10','plans','needs'])pages.ideas.append(byId(key+'View'));
  pages.references.append(byId('galleryView'),byId('videosView'));
  pages.promotions.append(byId('promotionsView'));pages.products.append(byId('productsView'));

  // Keep original explanatory blocks, with their original controls and links, behind disclosures.
  details('视频研究概况与核验说明',[...byId('videosView').children].filter(n=>n.matches('.vl-hero,.vl-stats,.vl-boundary,.vl-footnote')),byId('videosView'));
  details('促销研究概况与资料范围',[...byId('promotionsView').children].filter(n=>n.matches('.pm-hero,.pm-stats,.pm-disclosure')),byId('promotionsView'));
  const needs=byId('needsView');
  const research=details('需求研究、优先级与验证口径',[...needs.children].filter(n=>n.matches('.need-hero,.need-validation,.need-note')));
  for(const node of [...needs.querySelectorAll(':scope > .need-lower')]){
    if(node.querySelector('#needProductChecks'))byId('productsView').append(node);
    else research.append(node);
  }
  needs.append(research);
  const directions=byId('videoDirections');details('制作方向的研究依据',[...directions.children].filter(n=>n.matches('.vl-lead,.vl-insights')),directions);

  // A compact list and a single existing full-detail renderer share the same Creative_ID.
  byId('top10').classList.add('org-idea-grid');
  const productFacts=document.createElement('div');productFacts.id='orgProductFacts';while(byId('productsView').firstChild)productFacts.append(byId('productsView').firstChild);byId('productsView').append(productFacts);
  const rules=document.createElement('div');rules.id='orgRules';rules.hidden=true;
  const sourceLinks=E.sources.map(s=>`<li><a href="${safe(s.url)}" target="_blank" rel="noopener noreferrer">${safe(s.name)} ↗</a></li>`).join('');
  rules.innerHTML=`<div class="org-rules-intro"><h2>制作与投放规范</h2><p>制作前核对商品结构与版位要求，生成后按镜头验收。产品事实按记录日期与所选变体复核。</p></div><details class="org-disclosure" open><summary>产品结构与指定搭配椅</summary><div class="org-rule-grid">${Object.values(G.profiles).map(p=>`<article><h3>${safe(p.name)}</h3><p class="id">${safe(p.sku)}</p><ul>${p.facts.map(f=>`<li>${safe(f)}</li>`).join('')}</ul><p class="quiet">${safe(p.columnNote)}</p><a href="${safe(p.url)}" target="_blank" rel="noopener noreferrer">对应官方变体 ↗</a></article>`).join('')}<article><h3>指定搭配椅</h3><p>${safe(window.FurniwellChairLibrary.defaultChair().label)} · ${safe(window.FurniwellChairLibrary.defaultChair().sku)}</p><ul>${window.FurniwellChairLibrary.facts(window.FurniwellChairLibrary.defaultChair()).map(f=>`<li>${safe(f)}</li>`).join('')}</ul></article></div></details><details class="org-disclosure"><summary>Grok 逐镜头流程与验收</summary><ol>${G.workflow.map(t=>`<li>${safe(t)}</li>`).join('')}</ol><h3>逐项验收</h3><ul>${G.qa.map(t=>`<li>${safe(t)}</li>`).join('')}</ul><a href="videos/grok-product-lock-guide.md" download>下载六个方向的完整使用指南</a></details><details class="org-disclosure"><summary>广告版位、导出与表达要求</summary>${Object.entries(E.presets).map(([kind,items])=>`<h3>${kind==='image'?'图片':'视频'}版位</h3><div class="tablewrap"><table><thead><tr><th>版位</th><th>比例与尺寸</th><th>制作与导出</th></tr></thead><tbody>${items.map(p=>`<tr><td>${safe(p.label)}</td><td>${safe(p.ratio)}<br>${safe(p.size)}</td><td>${safe(p.safe)}<br>${safe(p.export)}</td></tr>`).join('')}</tbody></table></div>`).join('')}<ul>${E.policyRules.map(t=>`<li>${safe(t)}</li>`).join('')}</ul><ul>${sourceLinks}</ul></details><details class="org-disclosure"><summary>使用指南与完整资料</summary><div class="org-resource-links"><a href="organization/README.md">新版导航与使用说明</a><a href="README.html">原版资源库指南与研究说明</a><a href="prompt-builder/README.md">中文 Prompt 工作台说明</a><a href="videos/grok-product-lock-guide.md" download>Grok 完整制作指南</a><a href="videos/research-2026-10-27.md" download>视频研究与样本记录</a><a href="promotions/Furniwell_Black_Friday_2026_Research_and_Briefs.md" download>黑五研究与制作简报</a></div></details>`;
  byId('productsView').append(rules);

  const forms={};
  for(const mode of ['image','video']){
    const w=B.workspaces[mode],root=byId(mode==='image'?'imagePromptBuilder':'videoPromptBuilder');if(!w||!root)continue;
    const help=details(mode==='image'?'图片 Prompt 使用说明':'视频 Prompt 使用说明',[root.querySelector('.pb-hero')]);help.classList.add('org-workspace-help');root.prepend(help);
    const steps=[];
    for(const panel of [...root.querySelectorAll('.pb-inputs > .pb-panel')]){
      const h=panel.querySelector('h3'),d=document.createElement('details');d.className='org-form-step';d.open=!panel.classList.contains('pb-chair-panel');
      const summary=document.createElement('summary');summary.innerHTML=`<strong>${h?.innerHTML||'制作选项'}</strong><span class="org-step-value"></span><span class="org-step-edit">展开 / 修改</span>`;d.append(summary);d.addEventListener('toggle',()=>setText(summary.querySelector('.org-step-edit'),d.open?'收起':'展开 / 修改'));panel.before(d);d.append(panel);steps.push(d);
    }
    forms[mode]={w,root,steps,hadResult:false};
    if(typeof MutationObserver!=='undefined'){
      const observer=new MutationObserver(()=>paintForm(mode));
      for(const name of ['product','chair-product','result','status']){const node=w.get(name);if(node)observer.observe(node,{childList:true,attributes:true,attributeFilter:['hidden']});}
    }
  }
  function setText(node,value){if(node.textContent!==value)node.textContent=value;}
  function paintForm(mode){const f=forms[mode];if(!f)return;const {w,steps}=f,s=w.state,p=s.product,c=s.chair,idea=B.ideas.find(i=>i.id===w.get('idea').value);const values=[p?(p.sku||p.variant)+' · '+p.variantTitle+(s.referenceConfirmed?' · 原图已选':' · 待确认原图'):'输入 SKU 或商品链接',p&&!window.FurniwellChairLibrary.pairable(p)?'主商品为椅子，不额外搭配':c?c.label+' · '+c.color+' · '+c.sku:'请选择对应椅子',idea?idea.id+' · '+idea.title:'选择库内思路'+(mode==='image'?'与视觉拍法':''),w.get('channel').selectedOptions?.[0]?.textContent||'投放平台与市场'];
    steps.forEach((d,i)=>setText(d.querySelector('.org-step-value'),values[i]||''));
    if(p&&!s.referenceConfirmed)steps[0].open=true;
    if(s.result&&!f.hadResult){steps[0].open=false;steps[1].open=false;steps[2].open=false;}
    f.hadResult=!!s.result;
  }
  function currentRoute(){if(currentView==='gallery')return document.body.dataset.imagePanel==='prompt'?'image-prompt':'images';if(currentView==='videos')return {samples:'video-samples',analysis:'video-analysis',directions:'video-ideas',generator:'video-prompt',production:'video-production'}[window.VideoLibrary.getShareState().vt||'samples']||'video-samples';return {top10:'recommended',plans:'all-ideas',needs:'needs',promotions:'promotions',products:productTab}[currentView]||'images';}
  function render(remember=true){const key=currentRoute(),r=routes[key],config=definitions[r.section];if(remember)last[r.section]=key;document.body.dataset.librarySection=r.section;
    if(currentView==='gallery'&&byId('galleryView').parentElement!==pages[r.section])pages[r.section].append(byId('galleryView'));if(currentView==='videos'&&byId('videosView').parentElement!==pages[r.section])pages[r.section].append(byId('videosView'));
    for(const [name,page]of Object.entries(pages))page.hidden=name!==r.section;
    setText(byId('orgTitle'),config.title);setText(byId('orgDescription'),config.description);
    const counts={images:DATA.materials.length+' 张图片参考','video-samples':window.FURNIWELL_VIDEO_DATA.materials.length+' 条视频样本','video-analysis':window.FURNIWELL_VIDEO_DATA.analyses.length+' 条字幕拆解',recommended:'10 条推荐 · 共 '+DATA.creatives.length+' 个原创方向','all-ideas':DATA.creatives.length+' 个原创方向',needs:window.FURNIWELL_DEMAND_DATA.cards.length+' 条独立需求建议','video-ideas':window.FURNIWELL_VIDEO_DATA.directions.length+' 个视频方向',promotions:window.FURNIWELL_PROMOTION_DATA.summary.records+' 条促销案例',facts:DATA.products.length+' 款原研究产品 + 补充核验',rules:'结构 · 版位 · 验收','image-prompt':'中文 · 图片制作','video-prompt':'中文 · 逐镜头制作','video-production':'视频测试与来源'};setText(byId('orgCount'),counts[key]||'');
    for(const button of document.querySelectorAll('.nav [data-section]')){const active=button.dataset.section===r.section;button.classList.toggle('active',active);if(active)button.setAttribute('aria-current','page');else button.removeAttribute('aria-current');}
    for(const button of document.querySelectorAll('.org-subnav [data-org-route]')){const active=button.dataset.orgRoute===key;button.classList.toggle('active',active);if(active)button.setAttribute('aria-current','page');else button.removeAttribute('aria-current');}
    productFacts.hidden=productTab==='rules';rules.hidden=productTab!=='rules';
    for(const mode of Object.keys(forms))paintForm(mode);
  }
  window.view=function(v){originalView(v);render(false);};
  window.shareState=function(extra={}){if(!restoring){originalShare(extra);if(currentView==='products'&&productTab==='rules'){const p=new URLSearchParams(location.hash.slice(1));p.set('pr','rules');history.replaceState(null,'','#'+p.toString());}}render();};
  function navigate(key){const r=routes[key];if(!r)return;if(byId('modal').open)byId('modal').close();if(r.view==='products')productTab=key==='rules'?'rules':'facts';window.view(r.view);if(r.image)B.setImagePanel(r.image,false);if(r.video)window.VideoLibrary.setTab(r.video,false);window.shareState();}
  document.addEventListener('click',e=>{const b=e.target.closest('[data-section],[data-org-route]');if(!b)return;if(b.dataset.orgRoute)navigate(b.dataset.orgRoute);else navigate(last[b.dataset.section]);});
  document.addEventListener('change',e=>{if(e.target.closest('#imagePromptBuilder'))paintForm('image');if(e.target.closest('#videoPromptBuilder'))paintForm('video');});
  function restore(){const p=new URLSearchParams(location.hash.slice(1)),v=p.get('view');restoring=true;try{productTab=p.get('pr')==='rules'?'rules':'facts';if(['gallery','videos','top10','plans','needs','products','promotions'].includes(v))originalView(v);if(v==='gallery'&&p.get('ip')!=='prompt'){for(const id of ['q','brand','platform','benefit','scene'])byId(id).value=p.get(id)||'';byId('coreOnly').checked=p.get('core')==='1';renderGallery();}render();}finally{restoring=false;}}
  window.addEventListener('hashchange',restore);
  window.FurniwellOrganization={version,navigate,render,currentRoute,pages};
  restore();
})();

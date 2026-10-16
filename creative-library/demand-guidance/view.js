/* Additive view for the existing creative library. Uses the existing dialog and router. */
(() => {
  'use strict';
  const data=window.FURNIWELL_DEMAND_DATA;
  const root=document.getElementById('needsView');
  if(!data||!root)return;
  const el=id=>document.getElementById(id);
  const safe=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const sources=Object.fromEntries(data.sources.map(s=>[s.id,s]));
  const cards=Object.fromEntries(data.cards.map(c=>[c.id,c]));
  const filters={needQ:'nq',needType:'nt',needTheme:'nn',needChannel:'nc',needPriority:'np'};
  let selected=null;
  const productKeys=c=>c.type==='两类对比'?[c.product,'l160']:[c.product];
  const productNames=c=>productKeys(c).map(k=>data.products[k].name).join(' / ');
  const links=ids=>`<span class="need-source-links">${ids.map(id=>`<a href="${safe(sources[id].url)}" target="_blank" rel="noopener" title="${safe(sources[id].title)}">${safe(id)} ↗</a>`).join('')}</span>`;
  function options(id,values){el(id).insertAdjacentHTML('beforeend',[...new Set(values)].map(v=>`<option value="${safe(v)}">${safe(v)}</option>`).join(''));}
  options('needType',['常规桌','L型桌','两类对比']);
  options('needTheme',data.cards.map(c=>c.need));
  options('needChannel',data.cards.flatMap(c=>c.channels));
  options('needPriority',['P0','P1']);

  function matched(){
    const q=el('needQ').value.trim().toLowerCase();
    return data.cards.filter(c=>(!el('needType').value||el('needType').value===c.type)
      &&(!el('needTheme').value||el('needTheme').value===c.need)
      &&(!el('needChannel').value||c.channels.includes(el('needChannel').value))
      &&(!el('needPriority').value||el('needPriority').value===c.priority)
      &&(!q||[c.id,c.title,c.persona,c.evidence,c.visual,c.german_headline,productNames(c),...c.related].join(' ').toLowerCase().includes(q)));
  }
  function render(){
    const list=matched();
    el('needCount').textContent=`显示 ${list.length} / ${data.cards.length} 条建议 · 10条常规桌 / 8条L型 / 2条选型与信任 · 全部待投放验证`;
    el('needCards').innerHTML=list.length?list.map(c=>`<article class="need-card" id="card-${safe(c.id)}">
      <div class="row"><span class="id">${safe(c.id)}</span><span class="need-priority ${c.priority==='P1'?'p1':''}">${safe(c.priority)} · ${c.priority==='P0'?'首批测试':'第二批'}</span></div>
      <div class="need-type">${safe(c.type)} / ${safe(c.need)}</div><h3>${safe(c.title)}</h3>
      <p><strong>适用人群：</strong>${safe(c.persona)}</p><p class="quiet">${safe(productNames(c))}</p>
      <div class="need-german" lang="de">${safe(c.german_headline)}</div>
      <p class="need-visual"><strong>画面：</strong>${safe(c.visual)}</p>
      <p class="need-evidence-line"><strong>证据与推断：</strong>${safe(c.evidence)}</p>${links(c.sources)}
      <p class="quiet">${safe(c.channels.join(' / '))}</p>
      <button type="button" class="need-button" data-need-id="${safe(c.id)}" aria-label="查看${safe(c.id)} ${safe(c.title)}完整制作简报">镜头 · 文案 · 提示词 · 测试 →</button></article>`).join(''):'<div class="empty need-empty">没有匹配建议，请减少筛选条件或重置。</div>';
  }
  function prompt(c){
    const ps=productKeys(c).map(k=>data.products[k]);
    return `Photorealistic European home-office advertising still. Suggested composition: 4:5 for feed; recompose independently for other placements.\n\nPRODUCT REFERENCE REQUIRED: Attach the official images for the exact selected SKU before generating.\n${ps.map(p=>`${p.name}; SKU ${p.sku}. ${p.lock}`).join('\n')}\n\nUSER TASK AND COMPOSITION: ${c.visual}\n\nPRODUCT AND ACTION CHECKS: ${c.check} ${c.preflight}\n\nKeep realistic furniture scale, body anatomy, screen positions and cable paths. Show the original single controller at its official location. Do not invent product parts, accessories, buttons, capabilities or performance. No generated text, logos, fake review stars or medical claims. Add approved German copy only in post-production. A generated still is a creative illustration and must never be presented as a real stability, assembly, writing/erasing or performance test.`;
  }
  function textBrief(c){
    return `${c.id} | ${c.title}\n更新：${data.version} | ${c.priority} | ${c.status}\n适用人群：${c.persona}\n需求：${c.need}\n产品：${productNames(c)}\n${productKeys(c).map(k=>`${data.products[k].sku}\n${data.products[k].url}\n产品约束：${data.products[k].lock}`).join('\n')}\n\n证据与推断：${c.evidence}\n${c.sources.map(id=>`${id} ${sources[id].title}: ${sources[id].url}`).join('\n')}\n\n主图构图：${c.visual}\n\n15秒镜头执行稿（实拍后校时）：\n${c.shots.map(s=>`${s.time} ${s.action}`).join('\n')}\n\n德语标题：${c.german_headline}\n德语正文/口播初稿：${c.german_body}\nCTA：${c.cta}\n字幕与口播逐字对应，实际配音后校时。\n\n渠道：${c.channels.join(' / ')}\n测试：${c.test}\n主指标与口径：${data.measurement.primary}\n制作边界：${c.check}\n前置核验：${c.preflight}\n关联原方向：${c.related.join(', ')||'新补充方向'}\n视觉方法参考：${c.reference_ids.join(', ')}（仅作构图与任务参考，不构成竞品效果或L型广告投放证据）\n\n图像提示词：\n${prompt(c)}\n\n完整用户研究：${data.research_url}\n`;
  }
  function legacyReferences(c){
    return c.reference_ids.map(id=>{const m=byid[id];return m?`<button type="button" class="need-reference" data-need-reference="${safe(id)}"><img src="${safe(path(m.image_path))}" alt="${safe(id+' '+m.scene)}" loading="lazy">${safe(id)}<br>${safe(m.brand+' / '+m.scene)}</button>`:'';}).join('');
  }
  function detail(c){
    return `<div class="need-detail"><div class="id">${safe(c.id)} · 更新 ${safe(data.version)}</div><h2>${safe(c.title)}</h2><span class="need-priority ${c.priority==='P1'?'p1':''}">${safe(c.priority)}</span> <span class="quiet">${safe(c.status)} · ${safe(c.type)} / ${safe(c.need)}</span>
      <div class="need-actions"><button type="button" class="need-button primary" data-need-copy="brief" data-need-key="${safe(c.id)}">复制完整制作简报</button><button type="button" class="need-button" data-need-copy="prompt" data-need-key="${safe(c.id)}">复制图像提示词</button><button type="button" class="need-button" data-need-download="${safe(c.id)}">下载此条 Markdown</button></div><p class="need-copy-status" id="needCopyStatus" role="status" aria-live="polite"></p><div id="needCopyFallback"></div>
      <div class="need-detail-grid"><div class="need-block"><h3>人群与要完成的任务</h3><p>${safe(c.persona)}</p><p>${safe(c.need)}。画像允许重叠；出镜人物为制作选择，不代表客群人口分布。</p></div>
      <div class="need-block"><h3>事实 → 推断 → 测试</h3><p>${safe(c.evidence)}</p>${links(c.sources)}<p class="quiet">创意与优先级是基于证据的策划假设，尚无本方向购买效果数据。</p></div>
      <div class="need-block full"><h3>静态主图怎么拍</h3><p>${safe(c.visual)}</p><p class="quiet">交付一张场景主图和一张证据图。尺寸标线和字幕在后期添加；稳定、安装、写擦表现须由真实产品验证。</p></div>
      <div class="need-block full"><h3>15秒视频镜头执行稿</h3><div class="tablewrap"><table class="need-story"><thead><tr><th>时间</th><th>画面与动作</th></tr></thead><tbody>${c.shots.map(s=>`<tr><td>${safe(s.time)}</td><td>${safe(s.action)}</td></tr>`).join('')}</tbody></table></div><p class="quiet">时长为剪辑规划；升降、安装等实际过程不伪装成剪辑时长。需要口播时，下方文案为初稿，实录后校时，字幕逐字对应。</p></div>
      <div class="need-block"><h3>德语文案初稿</h3><p lang="de"><strong>${safe(c.german_headline)}</strong></p><p lang="de">${safe(c.german_body)}</p><p lang="de">CTA: ${safe(c.cta)}</p><p class="quiet">不含未经核验的价格、折扣或健康疗效承诺。</p></div>
      <div class="need-block"><h3>渠道与版本</h3><p>${safe(c.channels.join(' / '))}</p><p>Meta / Demand Gen保留任务表达；PMax另做干净产品与场景版本；竖版重构画面并让产品在开头出现。</p><p class="quiet">画幅为制作建议，发布前按对应平台和版位现行要求核对。</p></div>
      <div class="need-block full"><h3>本条如何测试</h3><p>${safe(c.test)}</p><p>${safe(data.measurement.unit)}</p><p class="quiet">${safe(data.measurement.primary)}</p></div>
      <div class="need-block full"><h3>绑定产品与必须核验的条件</h3>${productKeys(c).map(k=>{const p=data.products[k];return `<p><strong>${safe(p.name)}</strong> · <span class="id">${safe(p.sku)}</span><br>${safe(p.facts)}<br><a href="${safe(p.url)}" target="_blank" rel="noopener">打开对应官方变体 ↗</a></p><p class="quiet">产品锁定：${safe(p.lock)}</p>`;}).join('')}<p class="risk">${safe(c.preflight)}</p><p><strong>边界：</strong>${safe(c.check)}</p></div>
      <div class="need-block full"><h3>关联已有视觉参考</h3><p class="quiet">仅参考机位、空间关系或任务表达。原库参考不作为本方向转化表现证据；矩形桌画面也不能被称作L型竞品投放证据。</p><div class="need-reference-row">${legacyReferences(c)}</div><div class="need-preview-links">${c.related.map(id=>`<button type="button" class="need-button" data-need-legacy="${safe(id)}">查看原方向 ${safe(id)}</button>`).join('')}</div></div>
      <div class="need-block full"><details><summary>可复用图像提示词：附上对应SKU官方参考图后使用</summary><pre class="need-prompt">${safe(prompt(c))}</pre></details></div></div></div>`;
  }
  function open(id){
    const c=cards[id];if(!c)return;
    selected=id;view('needs');
    el('modalTitle').textContent=`${c.id} · 用户需求制作简报`;
    el('modalBody').innerHTML=detail(c);
    if(!el('modal').open)el('modal').showModal();
    el('modal').scrollTop=0;shareState();
  }
  function getShareState(){
    const out={};for(const [id,key] of Object.entries(filters))if(el(id).value)out[key]=el(id).value;
    if(selected&&el('modal').open)out.nd=selected;
    return out;
  }
  function restore(query){
    for(const [id,key] of Object.entries(filters)){
      const value=query.get(key)||'';
      const allowed=id==='needQ'||[...el(id).options].some(o=>o.value===value);
      el(id).value=allowed?value:'';
    }
    render();
  }
  function download(text,filename){
    const blob=new Blob([text],{type:'text/markdown;charset=utf-8'}),url=URL.createObjectURL(blob),a=document.createElement('a');
    a.href=url;a.download=filename;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
  }
  function markdown(list){return `# Furniwell 德国用户需求素材执行包\n\n更新：${data.version}\n完整研究：${data.research_url}\n\n${data.priority_rule}\n${data.evidence_rule}\n\n${list.map(textBrief).join('\n---\n\n')}\n\n## 统一测试口径\n${Object.values(data.measurement).flat().join('\n\n')}\n`;}
  async function copy(id,kind){
    const text=kind==='prompt'?prompt(cards[id]):textBrief(cards[id]);
    try{await navigator.clipboard.writeText(text);el('needCopyStatus').textContent='已复制，可交给设计或视频制作。';}
    catch{el('needCopyStatus').textContent='自动复制不可用，请选中下方文字复制。';el('needCopyFallback').innerHTML=`<textarea readonly class="need-fallback" aria-label="可手动复制的制作文字">${safe(text)}</textarea>`;el('needCopyFallback').querySelector('textarea').select();}
  }
  el('needFirstBatch').innerHTML=data.first_batch.map(id=>`<button type="button" data-need-id="${safe(id)}">${safe(id)} · ${safe(cards[id].title)}</button>`).join('');
  el('needChannels').innerHTML=data.channel_notes.map(n=>`<div class="need-method"><h3>${safe(n.name)}</h3><p>${safe(n.advice)}</p></div>`).join('');
  el('needProductChecks').innerHTML=['l160','g2'].map(k=>{const p=data.products[k];return `<div class="need-method"><h3>${safe(p.name)}</h3><p class="id">${safe(p.sku)}</p><p>${safe(p.facts)}</p><p class="quiet">${safe(p.lock)}</p><a href="${safe(p.url)}" target="_blank" rel="noopener">对应官方变体 ↗</a></div>`;}).join('');
  el('needMeasurement').innerHTML=`<p><strong>比较单位：</strong>${safe(data.measurement.unit)}</p><p><strong>结果指标：</strong>${safe(data.measurement.primary)}</p><p><strong>诊断指标：</strong>${safe(data.measurement.diagnostic)}</p><p><strong>判断节奏：</strong>${safe(data.measurement.cadence)}</p>`;
  el('needImports').innerHTML=data.measurement.imports.map(t=>`<li>${safe(t)}</li>`).join('');
  el('needSources').innerHTML=data.sources.map(s=>`<article class="need-source"><div class="id">${safe(s.id)} · ${safe(s.type)}</div><h3><a href="${safe(s.url)}" target="_blank" rel="noopener">${safe(s.title)} ↗</a></h3><small>${safe(s.period)}</small><p>${safe(s.notes)}</p></article>`).join('');
  Object.keys(filters).forEach(id=>el(id).addEventListener('input',()=>{render();shareState();}));
  el('needReset').addEventListener('click',()=>{Object.keys(filters).forEach(id=>el(id).value='');render();shareState();});
  el('needShowFirst').addEventListener('click',()=>{Object.keys(filters).forEach(id=>el(id).value='');el('needPriority').value='P0';render();shareState();el('needFilters').scrollIntoView({behavior:'smooth',block:'start'});});
  el('needDownloadAll').addEventListener('click',()=>download(markdown(data.cards),'Furniwell_DE_Demand_Creative_Briefs_20261016.md'));
  el('needDownloadFiltered').addEventListener('click',()=>download(markdown(matched()),'Furniwell_DE_Selected_Creative_Briefs_20261016.md'));
  document.addEventListener('click',event=>{
    const target=event.target.closest('[data-need-id],[data-need-copy],[data-need-download],[data-need-reference],[data-need-legacy],[data-open-needs]');
    if(!target)return;
    if(target.hasAttribute('data-open-needs')){view('needs');shareState();}
    else if(target.dataset.needId)open(target.dataset.needId);
    else if(target.dataset.needCopy)copy(target.dataset.needKey,target.dataset.needCopy);
    else if(target.dataset.needDownload)download(markdown([cards[target.dataset.needDownload]]),`${target.dataset.needDownload}_brief.md`);
    else if(target.dataset.needReference){selected=null;openMaterial(target.dataset.needReference);shareState({material:target.dataset.needReference});}
    else if(target.dataset.needLegacy){selected=null;const c=DATA.creatives.find(x=>x.Creative_ID===target.dataset.needLegacy);if(c){el('modalTitle').textContent=c.Creative_ID+' · 制作简报';el('modalBody').innerHTML=brief(c);if(!el('modal').open)el('modal').showModal();shareState({creative:c.Creative_ID});}}
  });
  el('modal').addEventListener('close',()=>{selected=null;shareState();});
  window.DemandLibrary={getShareState,matched,open,textBrief,prompt,render};
  const route=new URLSearchParams(location.hash.slice(1));restore(route);
  if(route.get('view')==='needs'&&cards[route.get('nd')]&&!route.has('material')&&!route.has('creative'))open(route.get('nd'));
  window.addEventListener('hashchange',()=>{
    const r=new URLSearchParams(location.hash.slice(1));
    if(r.get('view')==='needs'){view('needs');restore(r);if(cards[r.get('nd')])open(r.get('nd'));}
  });
})();

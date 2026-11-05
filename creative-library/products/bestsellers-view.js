/* Searchable product-variant records from the user's Sheet1; original research remains below. */
(() => {
  'use strict';
  const data=window.FURNIWELL_BESTSELLERS_DATA,root=document.getElementById('orgProductFacts');
  if(!data||!root)return;
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const panel=document.createElement('section');panel.className='bs-panel';panel.setAttribute('aria-labelledby','bs-title');
  panel.innerHTML=`<div class="bs-head"><div><p class="bs-kicker">FURNIWELL · SKU ARCHIVE</p><h2 id="bs-title">22 个热卖 SKU</h2><p>按提供的 Sheet1 顺序整理，包含具体变体、官网原图及制作核对边界。</p></div><span class="bs-total">${data.items.length} 个变体</span></div><p class="bs-source">导入 ${esc(data.importedAt)} · 与 ${esc(data.catalogCheckedAt)} 官网商品目录快照逐项匹配。表格排序不代表销量排名；制作前复核官网变体、售卖范围与商品图。</p><div class="bs-filter"><label for="bs-search">搜索 SKU、产品名称或规格<input id="bs-search" type="search" placeholder="例如 G-HAD241222B、120x60、办公椅"></label><label for="bs-category">产品类别<select id="bs-category"><option value="">全部类别</option></select></label></div><div class="bs-result"><span id="bs-count" role="status" aria-live="polite"></span><button type="button" id="bs-reset">清除筛选</button></div><div id="bs-grid" class="bs-grid"></div><p class="bs-footnote">桌类和室内办公椅可从卡片进入现有图片制作台；其他类别先用于查阅商品档案。表格中存在冲突的描述已在对应卡片提示，未作为确定事实。</p>`;
  root.prepend(panel);
  const q=panel.querySelector('#bs-search'),category=panel.querySelector('#bs-category'),grid=panel.querySelector('#bs-grid'),count=panel.querySelector('#bs-count');
  for(const name of [...new Set(data.items.map(p=>p.category))])category.insertAdjacentHTML('beforeend',`<option value="${esc(name)}">${esc(name)}</option>`);
  function verifiedFacts(p){
    const exact=Object.values(window.FurniwellGrok?.profiles||{}).find(x=>x.sku===p.sku&&x.variant===p.variantId);
    if(exact)return {source:'已有逐项结构档案',facts:exact.facts,notes:exact.columnNote};
    const C=window.FurniwellChairLibrary;
    for(const m of C?.models||[]){const v=m.variants.find(x=>x.sku===p.sku&&x.id===p.variantId);if(v){const c=C.choose(m,v.id);return {source:'已有搭配椅结构档案 · '+m.checkedAt,facts:C.facts(c),notes:''};}}
    return null;
  }
  function card(p){
    const existing=verifiedFacts(p),workspace=p.workspace?`<button type="button" data-bs-work="${esc(p.sku)}">图片制作台 →</button>`:'';
    const notes=p.notes.map(n=>`<p class="bs-warning">${esc(n)}</p>`).join('');
    return `<article class="bs-card"><a class="bs-image" href="${esc(p.url)}" target="_blank" rel="noopener noreferrer" aria-label="查看${esc(p.title)}官方变体"><img src="${esc(p.image)}" alt="${esc(p.title+' · '+p.options+' 参考图')}" loading="lazy"><span>${esc(p.imageRole)}</span></a><div class="bs-body"><span class="bs-category">${esc(p.category)}</span><h3>${esc(p.title)}</h3><div class="bs-variant">${esc(p.options)}</div><div class="bs-sku"><span>SKU</span> ${esc(p.sku)}</div><p class="bs-variant-id">变体 ${esc(p.variantId)}</p>${notes}<details><summary>查看产品事实与制作边界</summary><p>${esc(p.guard)}</p>${existing?`<p class="bs-fact-source">${esc(existing.source)}</p><ul>${existing.facts.map(f=>`<li>${esc(f)}</li>`).join('')}</ul>${existing.notes?`<p>${esc(existing.notes)}</p>`:''}`:'<p class="bs-fact-source">此 SKU 的机械和部件细节尚未逐项核验，先以所选变体原图确认。</p>'}${p.sheetClaims?.length?`<p class="bs-fact-source">Sheet1 商品描述 · 待逐项核对</p><ul>${p.sheetClaims.map(f=>`<li>${esc(f)}</li>`).join('')}</ul>`:''}</details><div class="bs-actions">${workspace}<a href="${esc(p.url)}" target="_blank" rel="noopener noreferrer">官网变体 ↗</a></div></div></article>`;
  }
  function render(){const text=q.value.trim().toLowerCase(),type=category.value;const list=data.items.filter(p=>(!type||p.category===type)&&(!text||[p.sku,p.title,p.options,p.category,p.variantId].join(' ').toLowerCase().includes(text)));count.textContent=`显示 ${list.length} / ${data.items.length} 个 SKU`;grid.innerHTML=list.length?list.map(card).join(''):'<p class="bs-empty">没有匹配的 SKU，请检查输入或清除筛选。</p>';}
  q.addEventListener('input',render);category.addEventListener('change',render);panel.querySelector('#bs-reset').addEventListener('click',()=>{q.value='';category.value='';render();});
  grid.addEventListener('click',event=>{const button=event.target.closest('[data-bs-work]');if(!button)return;const p=data.items.find(x=>x.sku===button.dataset.bsWork);if(!p)return;const idea=p.workspace==='frame'?'FW-C24':p.workspace==='chair'?'FW-BF-05':'FW-C13';window.PromptBuilder.open('image',idea,p.sku);});
  render();
})();

(function(){
  'use strict';
  const audit=window.FURNIWELL_FR_AUDIT;
  const $=id=>document.getElementById(id);
  const escape=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const number=value=>Number(value).toLocaleString('zh-CN');
  const kinds={confirmed:'已确认问题',opportunity:'改进建议',pending:'待验证'};
  function safeLink(value){try{const u=new URL(value);return u.protocol==='https:'&&!u.username&&!u.password?escape(u.href):'#';}catch{return '#';}}
  function link(url,label){return '<a href="'+safeLink(url)+'" target="_blank" rel="noopener noreferrer">'+escape(label)+' ↗</a>';}
  function list(rows,tag='ul'){return '<'+tag+'>'+rows.map(text=>'<li>'+escape(text)+'</li>').join('')+'</'+tag+'>';}
  function filterIssues(rows,filters){
    const needle=(filters.search||'').trim().toLocaleLowerCase();
    return rows.filter(item=>(filters.priority==='all'||item.priority===filters.priority)&&
      (filters.module==='all'||item.module===filters.module)&&
      (filters.kind==='all'||item.kind===filters.kind)&&
      (!needle||[item.id,item.title,item.problem,item.fix,...item.evidence,...item.steps,...item.acceptance,...item.affected].join(' ').toLocaleLowerCase().includes(needle)));
  }
  function csv(rows){
    const fields=['编号','优先级','类型','模块','问题','优化方法','具体步骤','验收标准','受影响页面','检查日期'];
    const quote=v=>'"'+String(v).replace(/"/g,'""')+'"';
    const values=rows.map(x=>[x.id,x.priority,kinds[x.kind],x.module,x.problem,x.fix,x.steps.join('\n'),x.acceptance.join('\n'),x.affected.join('\n'),audit.auditDate]);
    return '\uFEFF'+[fields,...values].map(row=>row.map(quote).join(',')).join('\r\n');
  }
  let shown=[],opened=new Set();
  function card(item){
    const affected=item.affected.map(url=>'<li>'+link(url,url.replace(/^https:\/\/(www\.)?/,'').replace(/^furniwell\.fr/,''))+'</li>').join('');
    const gtin=item.id==='FR-01'?'<div class="table-scroll audit-gtin"><table><thead><tr><th>SKU（Economy 默认页）</th><th>输出 GTIN</th><th>该 SKU 正确条码</th></tr></thead><tbody>'+audit.gtinExamples.map(x=>'<tr><td>'+escape(x.sku)+'</td><td>'+escape(x.rendered)+'</td><td>'+escape(x.expected)+'</td></tr>').join('')+'</tbody></table></div>':'';
    return '<article class="task audit-issue" id="'+escape(item.id)+'">'+
      '<div class="task-head"><span class="pill priority-'+item.priority.toLowerCase()+'">'+item.priority+'</span><span class="pill audit-kind '+item.kind+'">'+kinds[item.kind]+'</span><span class="audit-id">'+item.id+'</span><h3>'+escape(item.title)+'</h3><a class="audit-issue-link" href="#'+item.id+'" aria-label="'+escape(item.title)+'的直接链接">直达链接</a></div>'+
      '<div class="audit-overview"><div><b>问题 / 现状</b><p>'+escape(item.problem)+'</p></div><div class="audit-fix"><b>优化方法</b><p>'+escape(item.fix)+'</p></div></div>'+
      '<details class="audit-detail" data-issue-detail="'+item.id+'" '+(opened.has(item.id)?'open':'')+'><summary>证据、操作步骤与验收 · <span class="audit-module">'+escape(item.module)+'</span></summary>'+
      '<h4>检查证据</h4>'+list(item.evidence)+gtin+
      '<div class="audit-detail-grid"><div><h4>具体优化步骤</h4>'+list(item.steps,'ol')+'</div><div><h4>验收标准</h4>'+list(item.acceptance)+'</div></div>'+
      (item.caveat?'<p class="notice">'+escape(item.caveat)+'</p>':'')+
      '<h4>受影响 / 需检查页面（'+item.affected.length+'）</h4><ul class="audit-urls">'+affected+'</ul>'+
      (item.sources.length?'<h4>补充来源</h4><div class="link-grid">'+item.sources.map(x=>link(x.url,x.label)).join('')+'</div>':'')+'</details></article>';
  }
  function syncExpansion(){
    const all=shown.length>0&&shown.every(x=>opened.has(x.id));
    $('fr-expand').textContent=all?'收起当前证据与验收':'展开当前证据与验收';
    $('fr-expand').setAttribute('aria-expanded',String(all));
    $('fr-expand').disabled=shown.length===0;
  }
  function renderIssues(){
    shown=filterIssues(audit.issues,{priority:$('fr-priority').value,module:$('fr-module').value,kind:$('fr-kind').value,search:$('fr-search').value});
    const pending=shown.filter(x=>x.kind==='pending').length;
    $('fr-result-count').textContent='当前显示 '+shown.length+' / '+audit.issues.length+' 项'+(pending?' · 含 '+pending+' 项待验证':'');
    $('fr-issue-list').innerHTML=shown.length?shown.map(card).join(''):'<div class="empty audit-zero">没有匹配的检查项。可以清除筛选后重新查看。</div>';
    $('fr-export').disabled=shown.length===0;
    $('fr-issue-list').querySelectorAll('[data-issue-detail]').forEach(el=>el.addEventListener('toggle',()=>{if(el.open)opened.add(el.dataset.issueDetail);else opened.delete(el.dataset.issueDetail);syncExpansion();}));
    syncExpansion();
  }
  function clearFilters(){for(const id of ['fr-priority','fr-module','fr-kind'])$(id).value='all';$('fr-search').value='';renderIssues();}
  function showAnchor(){
    const id=location.hash.slice(1);
    if(!audit.issues.some(x=>x.id===id))return;
    clearFilters();opened.add(id);renderIssues();
    const target=$(id);if(target&&typeof target.scrollIntoView==='function')target.scrollIntoView({block:'start'});
  }
  function renderSupporting(){
    const summaries=[['P0 · 优先纠错',audit.issues.filter(x=>x.priority==='P0').length,'商品标识符、死链及规格'],['P1 · 重点建设',audit.issues.filter(x=>x.priority==='P1').length,'分类、正文、标签及法语'],['P2 · 后续改进',audit.issues.filter(x=>x.priority==='P2'&&x.kind!=='pending').length,'Schema、图片及内容引荐'],['待补验证',audit.issues.filter(x=>x.kind==='pending').length,'GSC 实际表现与移动端性能']];
    $('fr-summary').innerHTML=summaries.map(([label,count,note])=>'<div class="stat"><span>'+label+'</span><b>'+count+' 项</b><small>'+note+'</small></div>').join('');
    $('fr-copy-table').innerHTML='<table class="audit-copy-table"><thead><tr><th>页面</th><th>建议 Title</th><th>建议 H1</th></tr></thead><tbody>'+audit.pageCopy.map(x=>'<tr><td>'+link(x.url,x.page)+'</td><td lang="fr">'+escape(x.title)+'</td><td lang="fr">'+escape(x.h1)+'</td></tr>').join('')+'</tbody></table>';
    const max=Math.max(...audit.keywordDemand.map(x=>x.volume));
    $('fr-demand-bars').innerHTML=audit.keywordDemand.map(x=>'<div class="audit-demand-row"><span class="audit-keyword" lang="fr">'+escape(x.keyword)+'</span><div class="audit-demand-track" aria-hidden="true"><div class="audit-demand-fill" style="width:'+x.volume/max*100+'%"></div></div><span class="audit-demand-value">'+number(x.volume)+'</span></div>').join('');
    $('fr-demand-table').innerHTML='<table><thead><tr><th>关键词</th><th class="numeric">平均月搜索量（估算）</th><th class="numeric">KD</th><th>建议承接</th></tr></thead><tbody>'+audit.keywordDemand.map(x=>'<tr><td lang="fr">'+escape(x.keyword)+'</td><td class="numeric">'+number(x.volume)+'</td><td class="numeric">'+x.kd+'</td><td>'+link(x.destination,x.role)+'</td></tr>').join('')+'</tbody></table>';
    $('fr-phases').innerHTML=audit.phases.map(x=>'<article class="audit-phase"><span class="pill">'+escape(x.when)+'</span><h3>'+escape(x.title)+'</h3>'+list(x.items)+'</article>').join('');
    $('fr-baseline-list').innerHTML=audit.baseline.map(x=>'<div class="audit-baseline-item"><b>'+escape(x.label)+'</b><p>'+escape(x.value)+'</p><small>'+escape(x.note)+'</small></div>').join('');
    $('fr-source-content').innerHTML='<h3>来源入口</h3><div class="link-grid">'+audit.source.links.map(x=>link(x.url,x.label)).join('')+'</div><h3>检查方法</h3>'+list(audit.source.methods,'ol')+'<h3>边界与尚缺数据</h3>'+list(audit.source.limits);
  }
  function init(){
    if(!$('fr-issue-list'))return;
    if(!audit){$('fr-issue-list').innerHTML='<p class="notice warn">检查快照未能加载，请刷新或检查数据文件。</p>';return;}
    $('fr-module').innerHTML='<option value="all">全部模块</option>'+[...new Set(audit.issues.map(x=>x.module))].map(x=>'<option>'+escape(x)+'</option>').join('');
    for(const id of ['fr-priority','fr-module','fr-kind'])$(id).addEventListener('change',renderIssues);
    $('fr-search').addEventListener('input',renderIssues);
    $('fr-reset').addEventListener('click',()=>{clearFilters();$('fr-export-message').textContent='';});
    $('fr-expand').addEventListener('click',()=>{const collapse=shown.every(x=>opened.has(x.id));for(const item of shown){if(collapse)opened.delete(item.id);else opened.add(item.id);}renderIssues();});
    $('fr-export').addEventListener('click',()=>{
      const text=csv(shown),url=URL.createObjectURL(new Blob([text],{type:'text/csv;charset=utf-8'}));
      const a=document.createElement('a');a.href=url;a.download='furniwell-fr-seo-audit-'+audit.auditDate+'-filtered.csv';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
      $('fr-export-message').textContent='已导出当前筛选的 '+shown.length+' 项，包含优化步骤、验收标准和页面 URL。';
    });
    renderSupporting();renderIssues();showAnchor();window.addEventListener('hashchange',showAnchor);
  }
  window.FurniwellFrAuditTools={filterIssues,csv};
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();

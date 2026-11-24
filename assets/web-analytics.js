(function () {
  'use strict';
  function el(id) { return document.getElementById(id); }
  function format(v) { return v == null ? '—' : Number(v).toLocaleString('zh-CN'); }
  function percent(cur, prev) {
    if (cur == null || prev == null || prev === 0) return '上期未提供有效基线';
    var diff = (cur - prev) / prev * 100;
    return (diff > 0 ? '+' : '') + diff.toFixed(1) + '% 环比';
  }
  function validDate(v) {
    return typeof v === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(v) &&
      !isNaN(Date.parse(v + 'T00:00:00Z')) &&
      new Date(v + 'T00:00:00Z').toISOString().slice(0,10) === v;
  }
  function checkNumbers(values) {
    if (!values || typeof values !== 'object') throw Error('缺少 visitors 对象');
    for (var key of ['total','organicSearch','organicShopping']) {
      if (!Number.isSafeInteger(values[key]) || values[key] < 0) throw Error('指标 ' + key + ' 必须是非负整数');
    }
  }
  function validate(v) {
    if (!v || v.schemaVersion !== 1 || v.kind !== 'ahrefs-web-analytics-visitors' ||
        v.target !== 'furniwell.de') throw Error('数据模板或站点不正确');
    if (!v.period || !validDate(v.period.from) || !validDate(v.period.to) ||
        v.period.from > v.period.to || v.period.geography !== 'all') throw Error('日期或地区口径不符合模板');
    if (typeof v.period.timezone !== 'string' || v.period.timezone.length > 80)
      throw Error('缺少正确的时区');
    checkNumbers(v.visitors);
    if (v.previous != null) {
      if (!v.previous.period || !validDate(v.previous.period.from) ||
          !validDate(v.previous.period.to) || v.previous.period.to >= v.period.from)
        throw Error('上期日期不正确');
      checkNumbers(v.previous.visitors);
    }
    return v;
  }
  function draw(v) {
    var fields = [
      ['全站独立访客','total','所有渠道去重'],
      ['Organic Search 独立访客','organicSearch','source_channel = search'],
      ['Organic Shopping 独立访客','organicShopping','source_channel = shopping/organic']
    ];
    el('wa-visitor-stats').innerHTML = fields.map(function(f) {
      var val = v ? v.visitors[f[1]] : null;
      var prev = v && v.previous ? v.previous.visitors[f[1]] : null;
      var delta = val != null && prev != null ? val - prev : null;
      var style = delta == null ? '' : (delta > 0 ? 'up' : (delta < 0 ? 'down' : 'neutral'));
      return '<div class="stat"><span>' + f[0] + '</span><b>' + format(val) + '</b><small class="' + style + '">' +
        (v ? (prev != null ? percent(val,prev) + ' · 上期 ' + format(prev) : '上期未提供') : '尚未导入') +
        '</small><small>' + f[2] + '</small></div>';
    }).join('');
    el('wa-period').textContent = v ?
      '统计周期：' + v.period.from + ' 至 ' + v.period.to +
      '（含两端） · 地区：全球 · 时区：' + v.period.timezone +
      ' · 数据源：Ahrefs Web Analytics · 本地私密展示' :
      '周期与地区：尚未导入。实际访客与下方 DE SEO 估算月流量口径不同。';
  }
  function downloadTemplate() {
    var example = {
      schemaVersion:1, kind:'ahrefs-web-analytics-visitors', target:'furniwell.de',
      period:{from:'YYYY-MM-DD',to:'YYYY-MM-DD',timezone:'Europe/Berlin',geography:'all'},
      visitors:{total:null,organicSearch:null,organicShopping:null},
      previous:{period:{from:'YYYY-MM-DD',to:'YYYY-MM-DD'},visitors:{total:null,organicSearch:null,organicShopping:null}},
      source:{name:'Ahrefs Web Analytics API', privacy:'local-only'}
    };
    var url = URL.createObjectURL(new Blob([JSON.stringify(example,null,2)],{type:'application/json'}));
    var a = document.createElement('a'); a.href=url;a.download='furniwell-web-analytics-private-template.json';
    document.body.appendChild(a);a.click();a.remove();URL.revokeObjectURL(url);
  }
  function init() {
    if (!el('wa-visitor-upload')) return;
    draw(null);
    el('wa-visitor-template').addEventListener('click',downloadTemplate);
    el('wa-visitor-clear').addEventListener('click',function() {
      draw(null);el('wa-visitor-message').textContent='已清除本次私密展示。';
    });
    el('wa-visitor-upload').addEventListener('change',async function(event) {
      var f=event.target.files[0];if(!f)return;
      try {
        if(f.size>50000)throw Error('JSON 文件不能超过 50 KB');
        var v=validate(JSON.parse(await f.text()));
        draw(v);el('wa-visitor-message').textContent='导入成功；数据仅在当前页面展示，未上传或保存。';
      } catch(err) {
        el('wa-visitor-message').textContent='导入失败：'+err.message;
      } finally {event.target.value='';}
    });
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();

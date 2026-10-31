/* Market.Watch site engine: layout, live widgets, forms, consent, lead capture */
(function(){
'use strict';
var B=document.body,R=B.getAttribute('data-root')||'',P=B.getAttribute('data-page')||'';
var H=document.documentElement;
function dec(s){return atob(s.split('').reverse().join(''))}
var K={e:'=02bj5CbpFWbnBUMhN3ay92diV2d',c:'==AdjFGdu92YvM3ay92duIWZ39yL6MHc0RHa'};
function theme(){return H.getAttribute('data-theme')==='light'?'light':'dark'}
function store(k,v){try{if(v===undefined)return localStorage.getItem(k);localStorage.setItem(k,v)}catch(e){return null}}
function $(s,c){return (c||document).querySelector(s)}
function $$(s,c){return Array.prototype.slice.call((c||document).querySelectorAll(s))}

var NAV=[['markets.html','Markets'],['screener.html','Screener'],['calendar.html','Calendar'],['tools.html','Tools'],['watchlist.html','Watchlist'],['learn.html','Learn'],['videos.html','Videos'],['contests.html','Contests'],['support.html','Support']];
function LOGOF(id){return '<svg width="34" height="34" viewBox="0 0 64 64" aria-hidden="true"><defs><linearGradient id="'+id+'" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#22d3ee"/><stop offset="1" stop-color="#10b981"/></linearGradient></defs><rect width="64" height="64" rx="16" fill="url(#'+id+')"/><path d="M12 42l12-12 9 8 17-18" fill="none" stroke="#03151c" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/><circle cx="50" cy="20" r="4" fill="#03151c"/></svg>'}

function header(){
  var items=NAV.map(function(n){var on=location.pathname.split('/').pop()===n[0]||(P==='learn'&&n[0]==='learn.html');return '<li><a href="'+R+n[0]+'"'+(on?' class="on" aria-current="page"':'')+'>'+n[1]+'</a></li>'}).join('');
  return '<a class="skip" href="#main">Skip to content</a>'+
  '<div class="topbar"><button type="button" data-contact>Contact, if you are interested in this website / domain name / Sponsorship / Advertisement / Partnership &rarr;</button></div>'+
  '<header class="site"><div class="wrap nav"><a class="logo" href="'+R+'index.html" aria-label="Market.Watch home">'+LOGOF('lgH')+'<span>Market<b>.Watch</b></span></a>'+
  '<ul class="menu" id="menu">'+items+'</ul><div class="nav-actions"><button class="icon-btn" type="button" data-theme-toggle aria-label="Toggle dark or light theme">'+(theme()==='dark'?'☀':'☾')+'</button>'+
  '<a class="btn btn-pri btn-sm cta" href="'+R+'leads.html">Free Playbook</a><button class="icon-btn burger" type="button" aria-label="Open menu" aria-controls="menu" aria-expanded="false" data-burger>☰</button></div></div></header>'+
  '<div class="tv-ticker"><div class="tv" data-tv="ticker-tape" data-eager></div></div>';
}
function footer(){
  var y=new Date().getFullYear();
  function L(a){return a.map(function(x){return '<li><a href="'+R+x[0]+'">'+x[1]+'</a></li>'}).join('')}
  return '<footer class="site"><div class="wrap"><div class="fgrid"><div><a class="logo" href="'+R+'index.html">'+LOGOF('lgF')+'<span>Market<b>.Watch</b></span></a><p class="muted small mt2">Independent live market dashboards, free investing tools and plain-English education for every investor.</p>'+
  '<form class="mt2" data-mw-form="Footer newsletter" novalidate><label for="fnl" class="small">Weekly Market Brief</label><div style="display:flex;gap:8px"><input id="fnl" type="email" name="email" placeholder="you@email.com" required autocomplete="email"><button class="btn btn-pri btn-sm" type="submit">Join</button></div><input class="hp" type="text" name="_honey" tabindex="-1" autocomplete="off"><div class="form-msg" role="status"></div></form></div>'+
  '<div><h4>Markets</h4><ul>'+L([['markets.html','Live Markets'],['screener.html','Stock Screener'],['calendar.html','Economic Calendar'],['watchlist.html','My Watchlist'],['markets.html#crypto','Crypto'],['markets.html#forex','Forex']])+'</ul></div>'+
  '<div><h4>Learn</h4><ul>'+L([['learn.html','Investing Guides'],['tools.html','Calculators'],['glossary.html','Glossary'],['videos.html','Video Library'],['leads.html','Free Playbook']])+'</ul></div>'+
  '<div><h4>Community</h4><ul>'+L([['contests.html','Contests & Prizes'],['support.html','Support Us'],['careers.html','Careers'],['advertise.html','Advertise'],['contact.html','Contact']])+'</ul></div>'+
  '<div><h4>Company</h4><ul>'+L([['about.html','About'],['privacy.html','Privacy Policy'],['terms.html','Terms of Use'],['disclaimer.html','Disclaimer & Trademarks'],['cookies.html','Cookie Policy']])+'<li><button type="button" class="fbtn" data-contact>Buy this domain</button></li></ul></div></div>'+
  '<div class="disclosure"><p><strong>Trademark & copyright disclosure:</strong> Market.Watch is an independent publication. It is not affiliated with, endorsed by, or sponsored by MarketWatch, Dow Jones & Company, Inc., News Corp, or any exchange or broker. “MarketWatch” is a trademark of its respective owner and is mentioned only to state this non-affiliation. Charts and market data are provided by TradingView and may be delayed. All other trademarks, logos and brand names belong to their respective owners. Original text, design and code &copy; '+y+' Market.Watch. All rights reserved.</p>'+
  '<p><strong>Not financial advice:</strong> everything on this site is for general education and information only. Investing involves risk, including loss of principal. Do your own research and consider a licensed professional before making financial decisions. <a href="'+R+'disclaimer.html">Full disclaimer</a>.</p></div></div></footer>'+
  '<div class="cookie" id="cookie" role="dialog" aria-label="Cookie consent"><p>We use cookies for essential site functions, analytics and to show ads through Google AdSense. Google and its partners may use cookies to serve ads based on your visits. See our <a href="'+R+'cookies.html">Cookie Policy</a> and <a href="'+R+'privacy.html">Privacy Policy</a>.</p><div class="actions"><button class="btn btn-pri btn-sm" data-consent="all">Accept all</button><button class="btn btn-ghost btn-sm" data-consent="essential">Essential only</button></div></div>'+
  '<div class="modal" id="leadModal" role="dialog" aria-modal="true" aria-labelledby="lmT"><div class="box"><button class="icon-btn x" type="button" data-close aria-label="Close">✕</button><span class="tag">Free download</span><h2 id="lmT" class="mt2">Get the 2026 Market Playbook</h2><p class="muted">Six chapters on reading markets, sizing risk and building a portfolio, plus a pre-trade checklist. And our 5-minute Weekly Market Brief.</p>'+
  '<form data-mw-form="Playbook popup" novalidate><div class="field"><input type="text" name="name" placeholder="First name" required autocomplete="given-name" aria-label="First name"></div><div class="field"><input type="email" name="email" placeholder="Email address" required autocomplete="email" aria-label="Email"></div><input class="hp" type="text" name="_honey" tabindex="-1" autocomplete="off"><button class="btn btn-pri btn-block" type="submit">Send me the Playbook</button><p class="fine">No spam. Unsubscribe anytime. By joining you agree to our <a href="'+R+'privacy.html">Privacy Policy</a>.</p><div class="form-msg" role="status"></div></form></div></div>'+
  '<button class="icon-btn totop" type="button" aria-label="Back to top" data-top>↑</button>'+
  '<div class="mobile-cta"><a class="btn btn-ghost btn-sm" href="'+R+'markets.html">Live Markets</a><a class="btn btn-pri btn-sm" href="'+R+'leads.html">Free Playbook</a></div>';
}
var top=$('#mw-top'),foot=$('#mw-foot');
if(top)top.innerHTML=header();
if(foot)foot.innerHTML=footer();

/* contact link (destination assembled at click time, never shown in markup) */
document.addEventListener('click',function(e){
  var c=e.target.closest('[data-contact]');
  if(c){e.preventDefault();window.open(dec(K.c),'_blank','noopener');return}
  if(e.target.closest('[data-burger]')){var m=$('#menu'),b=e.target.closest('[data-burger]');m.classList.toggle('open');b.setAttribute('aria-expanded',m.classList.contains('open'))}
  if(e.target.closest('[data-theme-toggle]')){var t=theme()==='dark'?'light':'dark';H.setAttribute('data-theme',t);store('mw-theme',t);e.target.closest('[data-theme-toggle]').textContent=t==='dark'?'☀':'☾';$$('.tv[data-done]').forEach(tvRender)}
  if(e.target.closest('[data-top]'))window.scrollTo({top:0,behavior:'smooth'});
  var cs=e.target.closest('[data-consent]');if(cs){store('mw-consent',cs.getAttribute('data-consent'));$('#cookie').classList.remove('on')}
  if(e.target.closest('[data-close]')||e.target.id==='leadModal')closeModal();
  var op=e.target.closest('[data-open-lead]');if(op){e.preventDefault();openModal(true)}
  var tb=e.target.closest('[data-tabs] [data-tab]');if(tb){var g=tb.closest('[data-tabs]'),id=tb.getAttribute('data-tab');$$('[data-tab]',g).forEach(function(x){x.classList.toggle('on',x===tb);x.setAttribute('aria-selected',x===tb)});$$('[data-panel]',g).forEach(function(p){p.classList.toggle('on',p.getAttribute('data-panel')===id)})}
  var y=e.target.closest('.yt[data-yt]');if(y&&!y.querySelector('iframe')){y.innerHTML='<iframe src="https://www.youtube-nocookie.com/embed/'+y.getAttribute('data-yt')+'?autoplay=1&rel=0" title="'+(y.getAttribute('data-title')||'Video')+'" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen></iframe>'}
});
document.addEventListener('keydown',function(e){if(e.key==='Escape')closeModal();var y=e.target.closest&&e.target.closest('.yt[data-yt]');if(y&&(e.key==='Enter'||e.key===' ')){e.preventDefault();y.click()}});

/* YouTube facades */
$$('.yt[data-yt]').forEach(function(y){y.setAttribute('role','button');y.setAttribute('tabindex','0');y.setAttribute('aria-label','Play video: '+(y.getAttribute('data-title')||''));y.innerHTML='<img loading="lazy" src="https://i.ytimg.com/vi/'+y.getAttribute('data-yt')+'/hqdefault.jpg" alt="'+(y.getAttribute('data-title')||'Video thumbnail')+'"><div class="play"><i></i></div>'});

/* TradingView widgets */
var TV_DEF={
 'ticker-tape':{symbols:[{proName:'FOREXCOM:SPXUSD',title:'S&P 500'},{proName:'FOREXCOM:NSXUSD',title:'Nasdaq 100'},{proName:'FOREXCOM:DJI',title:'Dow 30'},{proName:'BITSTAMP:BTCUSD',title:'Bitcoin'},{proName:'BITSTAMP:ETHUSD',title:'Ethereum'},{proName:'FX:EURUSD',title:'EUR/USD'},{proName:'FX:USDJPY',title:'USD/JPY'},{proName:'OANDA:XAUUSD',title:'Gold'},{proName:'TVC:USOIL',title:'WTI Oil'},{proName:'TVC:US10Y',title:'US 10Y'},{proName:'NASDAQ:AAPL',title:'Apple'},{proName:'NASDAQ:NVDA',title:'Nvidia'},{proName:'NASDAQ:MSFT',title:'Microsoft'}],showSymbolLogo:true,displayMode:'adaptive'},
 'market-overview':{dateRange:'12M',showChart:true,showSymbolLogo:true,showFloatingTooltip:true,tabs:[{title:'Indices',symbols:[{s:'FOREXCOM:SPXUSD',d:'S&P 500'},{s:'FOREXCOM:NSXUSD',d:'Nasdaq 100'},{s:'FOREXCOM:DJI',d:'Dow 30'},{s:'INDEX:NKY',d:'Nikkei 225'},{s:'INDEX:DEU40',d:'DAX'},{s:'FOREXCOM:UKXGBP',d:'FTSE 100'}]},{title:'Futures',symbols:[{s:'CME_MINI:ES1!',d:'S&P 500 Fut'},{s:'CME:6E1!',d:'Euro Fut'},{s:'COMEX:GC1!',d:'Gold'},{s:'NYMEX:CL1!',d:'WTI Crude'},{s:'NYMEX:NG1!',d:'Natural Gas'},{s:'CBOT:ZC1!',d:'Corn'}]},{title:'Bonds',symbols:[{s:'TVC:US02Y',d:'US 2Y'},{s:'TVC:US10Y',d:'US 10Y'},{s:'TVC:US30Y',d:'US 30Y'},{s:'TVC:DE10Y',d:'Germany 10Y'},{s:'TVC:GB10Y',d:'UK 10Y'},{s:'TVC:JP10Y',d:'Japan 10Y'}]},{title:'Forex',symbols:[{s:'FX:EURUSD',d:'EUR/USD'},{s:'FX:GBPUSD',d:'GBP/USD'},{s:'FX:USDJPY',d:'USD/JPY'},{s:'FX:USDCHF',d:'USD/CHF'},{s:'FX:AUDUSD',d:'AUD/USD'},{s:'FX:USDCAD',d:'USD/CAD'}]},{title:'Crypto',symbols:[{s:'BITSTAMP:BTCUSD',d:'Bitcoin'},{s:'BITSTAMP:ETHUSD',d:'Ethereum'},{s:'BINANCE:SOLUSDT',d:'Solana'},{s:'BINANCE:BNBUSDT',d:'BNB'},{s:'BINANCE:XRPUSDT',d:'XRP'},{s:'BINANCE:DOGEUSDT',d:'Dogecoin'}]}]},
 'hotlists':{exchange:'US',dateRange:'12M',showChart:true,showSymbolLogo:true},
 'stock-heatmap':{exchanges:[],dataSource:'SPX500',grouping:'sector',blockSize:'market_cap_basic',blockColor:'change',hasTopBar:true,isDataSetEnabled:true,isZoomEnabled:true,hasSymbolTooltip:true},
 'crypto-coins-heatmap':{dataSource:'Crypto',blockSize:'market_cap_calc',blockColor:'change',hasTopBar:true,isDataSetEnabled:true,isZoomEnabled:true,hasSymbolTooltip:true},
 'etf-heatmap':{dataSource:'AllUSEtf',blockSize:'aum',blockColor:'change',grouping:'asset_class',hasTopBar:true,isDataSetEnabled:true,isZoomEnabled:true,hasSymbolTooltip:true},
 'events':{importanceFilter:'0,1',countryFilter:'us,eu,gb,jp,cn,ca,in,au,de'},
 'timeline':{feedMode:'all_symbols',displayMode:'regular'},
 'screener':{defaultColumn:'overview',defaultScreen:'most_capitalized',market:'america',showToolbar:true},
 'forex-cross-rates':{currencies:['EUR','USD','JPY','GBP','CHF','AUD','CAD','INR','CNY']},
 'forex-heat-map':{currencies:['EUR','USD','JPY','GBP','CHF','AUD','CAD','NZD','CNY']},
 'advanced-chart':{symbol:'FOREXCOM:SPXUSD',interval:'D',timezone:'Etc/UTC',style:'1',allow_symbol_change:true,withdateranges:true,hide_side_toolbar:false,details:true,calendar:false,support_host:'https://www.tradingview.com'},
 'technical-analysis':{interval:'1D',symbol:'NASDAQ:AAPL',showIntervalTabs:true,displayMode:'single'},
 'symbol-overview':{symbols:[['Apple','NASDAQ:AAPL|1D']],chartOnly:false,chartType:'area'},
 'mini-symbol-overview':{symbol:'FOREXCOM:SPXUSD',dateRange:'12M',chartOnly:false},
 'symbol-info':{symbol:'NASDAQ:AAPL'},
 'financials':{symbol:'NASDAQ:AAPL',displayMode:'regular'}
};
function tvRender(el){
  var name=el.getAttribute('data-tv'),cfg={},extra={};
  var d=TV_DEF[name]||{};for(var k in d)cfg[k]=d[k];
  try{extra=JSON.parse(el.getAttribute('data-config')||'{}')}catch(e){}
  for(var j in extra)cfg[j]=extra[j];
  cfg.colorTheme=theme();cfg.theme=theme();cfg.isTransparent=true;cfg.locale='en';
  if(name!=='ticker-tape'){cfg.width='100%';cfg.height=parseInt(el.getAttribute('data-h')||'460',10)}
  el.innerHTML='';el.classList.add('loading');
  var c=document.createElement('div');c.className='tradingview-widget-container';
  var w=document.createElement('div');w.className='tradingview-widget-container__widget';c.appendChild(w);
  var s=document.createElement('script');s.type='text/javascript';s.async=true;s.src='https://s3.tradingview.com/external-embedding/embed-widget-'+name+'.js';s.text=JSON.stringify(cfg);
  s.onload=function(){setTimeout(function(){el.classList.remove('loading')},900)};
  c.appendChild(s);el.appendChild(c);el.setAttribute('data-done','1');
  if(name!=='ticker-tape')el.style.minHeight=cfg.height+'px';
}
window.MW={tv:tvRender};
var io='IntersectionObserver' in window?new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){io.unobserve(en.target);tvRender(en.target)}})},{rootMargin:'300px'}):null;
$$('.tv[data-tv]').forEach(function(el){if(el.hasAttribute('data-eager')||!io)tvRender(el);else io.observe(el)});

/* symbol search for advanced chart */
$$('[data-symbol-form]').forEach(function(f){f.addEventListener('submit',function(e){e.preventDefault();var v=(f.querySelector('input').value||'').trim().toUpperCase();if(!v)return;var t=$(f.getAttribute('data-symbol-form'));var cfg={};try{cfg=JSON.parse(t.getAttribute('data-config')||'{}')}catch(_){}cfg.symbol=v;t.setAttribute('data-config',JSON.stringify(cfg));tvRender(t)})});
$$('[data-symbol-pick]').forEach(function(b){b.addEventListener('click',function(){var t=$(b.getAttribute('data-target'));var cfg={};try{cfg=JSON.parse(t.getAttribute('data-config')||'{}')}catch(_){}cfg.symbol=b.getAttribute('data-symbol-pick');t.setAttribute('data-config',JSON.stringify(cfg));tvRender(t)})});

/* forms: all submissions go to the owner inbox; address is decoded only at send time */
function send(form){
  var msg=form.querySelector('.form-msg'),btn=form.querySelector('[type=submit]');
  var hp=form.querySelector('[name=_honey]');if(hp&&hp.value)return;
  var fd=new FormData(form),data={};
  fd.forEach(function(v,k){if(k==='_honey')return;if(data[k]!==undefined){data[k]=[].concat(data[k],v).join(', ')}else data[k]=v});
  data._subject='Market.Watch | '+(form.getAttribute('data-mw-form')||'Form')+' submission';
  data._template='table';data._captcha='false';
  var lead=/playbook|lead|newsletter|sidebar/i.test(form.getAttribute('data-mw-form')||'');var PB=location.origin+location.pathname.replace(/(learn\/)?[^\/]*$/,'')+'playbook.html';
  if(lead&&data.email)data._autoresponse='Thanks for joining Market.Watch! Your free 2026 Market Playbook is ready: '+PB+' . Your first Monday Market Brief arrives next week. Not financial advice. Unsubscribe anytime by replying STOP.';data.form=form.getAttribute('data-mw-form');data.page=location.href;data.submitted=new Date().toISOString();
  if(btn){btn.disabled=true;btn.dataset.t=btn.textContent;btn.textContent='Sending…'}
  fetch('https://formsubmit.co/ajax/'+dec(K.e),{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(data)})
  .then(function(r){return r.json().catch(function(){return {}}).then(function(j){if(!r.ok||j.success==='false'||j.success===false)throw new Error(j.message||'fail');return j})})
  .then(function(){if(msg){msg.className='form-msg ok';msg.textContent=form.getAttribute('data-ok')||'Thank you! Your submission was received. Check your inbox shortly.';if(lead){msg.appendChild(document.createTextNode(' '));var a=document.createElement('a');a.href=PB;a.textContent='Open your Playbook now →';msg.appendChild(a)}}form.reset();store('mw-lead','1');resetSteps(form)})
  .catch(function(){if(msg){msg.className='form-msg err';msg.textContent='Something went wrong. Please try again in a moment.'}})
  .then(function(){if(btn){btn.disabled=false;btn.textContent=btn.dataset.t}});
}
function stepFields(st){return $$('input,select,textarea',st).filter(function(i){return i.name!=='_honey'})}
function validStep(st){var ok=true;stepFields(st).forEach(function(i){if(ok&&!i.checkValidity()){i.reportValidity();ok=false}});
  $$('[data-require-one]',st).forEach(function(g){if(ok&&!g.querySelector('input:checked')){ok=false;var m=g.getAttribute('data-require-one');alert(m)}});return ok}
function showStep(form,i){var st=$$('.step',form);st.forEach(function(s,k){s.classList.toggle('on',k===i)});form.dataset.step=i;var bar=form.querySelector('.progress i');if(bar)bar.style.width=((i+1)/st.length*100)+'%';var lbl=form.querySelector('[data-step-label]');if(lbl)lbl.textContent='Step '+(i+1)+' of '+st.length}
function resetSteps(form){if(form.querySelector('.step'))showStep(form,0)}
$$('form[data-mw-form]').forEach(function(form){
  form.setAttribute('novalidate','');
  if(form.querySelector('.step')){showStep(form,0);
    form.addEventListener('click',function(e){var i=+form.dataset.step,st=$$('.step',form);
      if(e.target.closest('[data-next]')){e.preventDefault();if(validStep(st[i]))showStep(form,Math.min(i+1,st.length-1))}
      if(e.target.closest('[data-prev]')){e.preventDefault();showStep(form,Math.max(i-1,0))}})}
  form.addEventListener('submit',function(e){e.preventDefault();var st=form.querySelector('.step.on')||form;if(!validStep(st))return;send(form)});
});

/* consent + lead modal */
if(!store('mw-consent'))setTimeout(function(){var c=$('#cookie');if(c)c.classList.add('on')},1200);
var noPop=['leads','support','contact','careers','advertise','contests','privacy','terms','cookies','disclaimer'].indexOf(P)>-1;
function openModal(force){var m=$('#leadModal');if(!m)return;if(!force){var last=+store('mw-pop')||0;if(store('mw-lead')||Date.now()-last<5*864e5)return}store('mw-pop',String(Date.now()));m.classList.add('on');var f=m.querySelector('input');if(f)setTimeout(function(){f.focus()},50)}
function closeModal(){var m=$('#leadModal');if(m)m.classList.remove('on')}
if(!noPop){setTimeout(function(){openModal(false)},40000);document.addEventListener('mouseout',function(e){if(!e.relatedTarget&&e.clientY<5)openModal(false)})}

/* misc UI */
var tt=$('[data-top]');window.addEventListener('scroll',function(){if(tt)tt.classList.toggle('on',window.scrollY>700)},{passive:true});
if('IntersectionObserver' in window){var ro=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){en.target.classList.add('in');ro.unobserve(en.target)}})},{threshold:.12});$$('.rv').forEach(function(x){ro.observe(x)})}else $$('.rv').forEach(function(x){x.classList.add('in')});
$$('[data-count]').forEach(function(el){var end=+el.getAttribute('data-count'),suf=el.getAttribute('data-suffix')||'',t0=null;function f(t){if(!t0)t0=t;var p=Math.min((t-t0)/1200,1);el.textContent=Math.round(end*p).toLocaleString()+suf;if(p<1)requestAnimationFrame(f)}requestAnimationFrame(f)});
$$('[data-year]').forEach(function(x){x.textContent=new Date().getFullYear()});

/* watchlist */
var wl=$('#wl');
if(wl){var KEY='mw-watchlist';var list;try{list=JSON.parse(store(KEY)||'null')}catch(e){list=null}if(!list)list=['NASDAQ:AAPL','NASDAQ:NVDA','NASDAQ:MSFT','BITSTAMP:BTCUSD','FX:EURUSD','OANDA:XAUUSD'];
  function save(){store(KEY,JSON.stringify(list))}
  function draw(){var chips=$('#wlChips');chips.innerHTML=list.map(function(s,i){return '<span>'+s+'<button type="button" aria-label="Remove '+s+'" data-rm="'+i+'">×</button></span>'}).join('')||'<em class="muted">Your watchlist is empty. Add a symbol above.</em>';
    wl.innerHTML=list.map(function(s){return '<div class="panel"><div class="panel-b"><div class="tv" data-tv="mini-symbol-overview" data-h="220" data-config=\''+JSON.stringify({symbol:s})+'\'></div></div></div>'}).join('');$$('.tv',wl).forEach(function(el){io?io.observe(el):tvRender(el)})}
  $('#wlForm').addEventListener('submit',function(e){e.preventDefault();var i=$('#wlInput'),v=i.value.trim().toUpperCase().replace(/[^A-Z0-9:!._-]/g,'');if(v&&list.indexOf(v)<0&&list.length<24){list.push(v);save();draw()}i.value=''});
  $('#wlChips').addEventListener('click',function(e){var b=e.target.closest('[data-rm]');if(b){list.splice(+b.getAttribute('data-rm'),1);save();draw()}});
  $$('[data-wl-add]').forEach(function(b){b.addEventListener('click',function(){var v=b.getAttribute('data-wl-add');if(list.indexOf(v)<0){list.push(v);save();draw()}})});
  draw();}

/* glossary / article filter */
var gq=$('#glossSearch');
if(gq){gq.addEventListener('input',function(){var q=gq.value.toLowerCase().trim(),n=0;$$('.gl dt').forEach(function(dt){var dd=dt.nextElementSibling,hit=!q||(dt.textContent+' '+dd.textContent).toLowerCase().indexOf(q)>-1;dt.style.display=dd.style.display=hit?'':'none';if(hit)n++});$$('.gl-letter').forEach(function(h){var dl=h.nextElementSibling;h.style.display=dl&&$$('dt',dl).some(function(d){return d.style.display!=='none'})?'':'none'});var c=$('#glossCount');if(c)c.textContent=n+' terms'})}
var aq=$('#postSearch');
if(aq){function af(){var q=aq.value.toLowerCase().trim(),cat=($('[data-cat].on')||{}).getAttribute?$('[data-cat].on').getAttribute('data-cat'):'all';$$('[data-post]').forEach(function(p){var okq=!q||p.textContent.toLowerCase().indexOf(q)>-1,okc=cat==='all'||p.getAttribute('data-post')===cat;p.style.display=okq&&okc?'':'none'})}aq.addEventListener('input',af);$$('[data-cat]').forEach(function(b){b.addEventListener('click',function(){$$('[data-cat]').forEach(function(x){x.classList.toggle('on',x===b)});af()})})}
})();

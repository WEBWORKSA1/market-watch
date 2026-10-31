/* Market.Watch calculators: all math runs locally in the browser */
(function(){
'use strict';
var $=function(s){return document.querySelector(s)};
var USD=new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:2});
var N=new Intl.NumberFormat('en-US',{maximumFractionDigits:2});
function v(id){var e=document.getElementById(id);return e?parseFloat(e.value)||0:0}
function out(id,h){var e=document.getElementById(id);if(e)e.innerHTML=h}
function kv(k,val,cls){return '<div class="kv"><span>'+k+'</span><b'+(cls?' class="'+cls+'"':'')+'>'+val+'</b></div>'}
function bind(form,fn){var f=document.getElementById(form);if(!f)return;f.addEventListener('input',fn);f.addEventListener('submit',function(e){e.preventDefault();fn()});fn()}
function spark(pts,contrib){if(!pts.length)return '';var W=600,Hh=160,max=Math.max.apply(null,pts)||1;function path(a){return a.map(function(y,i){return (i?'L':'M')+(i/(a.length-1||1)*W).toFixed(1)+' '+(Hh-y/max*(Hh-10)).toFixed(1)}).join(' ')}
  return '<svg class="chart-svg" viewBox="0 0 '+W+' '+Hh+'" preserveAspectRatio="none" role="img" aria-label="Growth chart"><defs><linearGradient id="cg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#10b981" stop-opacity=".45"/><stop offset="1" stop-color="#10b981" stop-opacity="0"/></linearGradient></defs><path d="'+path(pts)+' L'+W+' '+Hh+' L0 '+Hh+' Z" fill="url(#cg)"/><path d="'+path(pts)+'" fill="none" stroke="#10b981" stroke-width="3"/><path d="'+path(contrib)+'" fill="none" stroke="#22d3ee" stroke-width="2" stroke-dasharray="6 5"/></svg><p class="small muted">Solid: total balance &middot; Dashed: money you contributed</p>'}

bind('fCompound',function(){var P=v('ciP'),M=v('ciM'),r=v('ciR')/100,y=Math.min(v('ciY'),80),n=v('ciN')||12;var bal=P,contrib=P,pts=[P],cp=[P];
  for(var yr=1;yr<=y;yr++){for(var k=0;k<n;k++){bal=bal*(1+r/n)+M*12/n;contrib+=M*12/n}pts.push(bal);cp.push(contrib)}
  out('ciOut','<div class="muted small">Future balance</div><div class="big up">'+USD.format(bal)+'</div>'+kv('Total contributed',USD.format(contrib))+kv('Interest earned',USD.format(bal-contrib),'up')+kv('Growth multiple',N.format(contrib?bal/contrib:0)+'×')+spark(pts,cp))});

bind('fPos',function(){var A=v('psA'),risk=v('psR')/100,e=v('psE'),s=v('psS');var per=Math.abs(e-s),cash=A*risk,sh=per?Math.floor(cash/per):0,val=sh*e;
  out('psOut','<div class="muted small">Position size</div><div class="big">'+N.format(sh)+' shares</div>'+kv('Dollar risk',USD.format(sh*per),'dn')+kv('Risk per share',USD.format(per))+kv('Position value',USD.format(val))+kv('% of account',N.format(A?val/A*100:0)+'%')+(A&&val>A?'<p class="note mt2">Position exceeds account size: this would require margin. Widen nothing; reduce risk or tighten the stop.</p>':''))});

bind('fRR',function(){var e=v('rrE'),s=v('rrS'),t=v('rrT');var risk=Math.abs(e-s),rew=Math.abs(t-e),rr=risk?rew/risk:0,be=rr?1/(1+rr)*100:0;
  out('rrOut','<div class="muted small">Reward : Risk</div><div class="big '+(rr>=2?'up':rr>=1?'':'dn')+'">'+N.format(rr)+' : 1</div>'+kv('Risk per unit',USD.format(risk),'dn')+kv('Reward per unit',USD.format(rew),'up')+kv('Break-even win rate',N.format(be)+'%')+kv('Verdict',rr>=2?'Favourable':rr>=1?'Marginal':'Unfavourable'))});

bind('fAvg',function(){var s1=v('avS1'),p1=v('avP1'),s2=v('avS2'),p2=v('avP2'),cur=v('avC');var sh=s1+s2,cost=s1*p1+s2*p2,avg=sh?cost/sh:0,pl=cur?(cur-avg)*sh:0;
  out('avOut','<div class="muted small">New average cost</div><div class="big">'+USD.format(avg)+'</div>'+kv('Total shares',N.format(sh))+kv('Total invested',USD.format(cost))+(cur?kv('Unrealised P/L at '+USD.format(cur),USD.format(pl),pl>=0?'up':'dn'):''))});

bind('fFire',function(){var ex=v('fiE'),wr=v('fiW')/100||.04,sav=v('fiS'),mo=v('fiM'),r=v('fiR')/100;var target=ex/wr,bal=sav,m=0;
  if(bal<target&&(mo>0||r>0)){while(bal<target&&m<1200){bal=bal*(1+r/12)+mo;m++}}
  out('fiOut','<div class="muted small">Your financial-independence number</div><div class="big up">'+USD.format(target)+'</div>'+kv('Withdrawal rate',N.format(wr*100)+'%')+kv('Progress today',N.format(target?Math.min(sav/target*100,100):0)+'%')+kv('Time to target',sav>=target?'Already there':m>=1200?'100+ years':Math.floor(m/12)+' yrs '+(m%12)+' mo'))});

bind('fPE',function(){var eps=v('peE'),g=v('peG')/100,y=v('peY')||5,pe=v('peT'),d=v('peD')/100,price=v('peP');var fut=eps*Math.pow(1+g,y)*pe,iv=fut/Math.pow(1+d,y),mos=price?(iv-price)/iv*100:0;
  out('peOut','<div class="muted small">Estimated fair value today</div><div class="big">'+USD.format(iv)+'</div>'+kv('EPS in '+y+' years',USD.format(eps*Math.pow(1+g,y)))+kv('Projected price in '+y+' years',USD.format(fut))+(price?kv('Margin of safety vs '+USD.format(price),N.format(mos)+'%',mos>=0?'up':'dn'):''))});

bind('fInf',function(){var a=v('inA'),r=v('inR')/100,y=v('inY');var fut=a*Math.pow(1+r,y),pp=a/Math.pow(1+r,y);
  out('inOut','<div class="muted small">Cost of the same basket in '+N.format(y)+' years</div><div class="big dn">'+USD.format(fut)+'</div>'+kv('Purchasing power of '+USD.format(a)+' then',USD.format(pp))+kv('Value lost',N.format(a?(1-pp/a)*100:0)+'%','dn'))});

bind('f72',function(){var r=v('r72v');out('o72','<div class="muted small">Years to double</div><div class="big">'+(r>0?N.format(72/r):'–')+'</div>'+kv('Exact (log formula)',r>0?N.format(Math.log(2)/Math.log(1+r/100))+' yrs':'–')+kv('10× your money',r>0?N.format(Math.log(10)/Math.log(1+r/100))+' yrs':'–'))});

bind('fDiv',function(){var p=v('dvP'),d=v('dvD'),s=v('dvS'),g=v('dvG')/100;var y=p?d/p*100:0,inc=d*s,inc10=inc*Math.pow(1+g,10);
  out('dvOut','<div class="muted small">Dividend yield</div><div class="big up">'+N.format(y)+'%</div>'+kv('Annual income',USD.format(inc),'up')+kv('Monthly average',USD.format(inc/12))+kv('Income in 10 yrs at '+N.format(g*100)+'% growth',USD.format(inc10))+kv('Yield on cost in 10 yrs',N.format(p?d*Math.pow(1+g,10)/p*100:0)+'%'))});

bind('fPL',function(){var b=v('plB'),s=v('plS'),q=v('plQ'),f=v('plF');var cost=b*q+f/2,proc=s*q-f/2,pl=proc-cost,pct=cost?pl/cost*100:0;
  out('plOut','<div class="muted small">Net profit / loss</div><div class="big '+(pl>=0?'up':'dn')+'">'+USD.format(pl)+'</div>'+kv('Return',N.format(pct)+'%',pl>=0?'up':'dn')+kv('Cost basis (incl. fees)',USD.format(cost))+kv('Net proceeds',USD.format(proc))+kv('Break-even sell price',q?USD.format((b*q+f)/q):'–'))});

bind('fLoan',function(){var P=v('lnP'),r=v('lnR')/100/12,n=v('lnY')*12;var pm=r?P*r/(1-Math.pow(1+r,-n)):(n?P/n:0);
  out('lnOut','<div class="muted small">Monthly payment</div><div class="big">'+USD.format(pm)+'</div>'+kv('Total paid',USD.format(pm*n))+kv('Total interest',USD.format(pm*n-P),'dn'))});
})();

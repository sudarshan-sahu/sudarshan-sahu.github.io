(function(){
var bar=document.getElementById('bar');
if(bar){var f=function(){var h=document.documentElement,m=h.scrollHeight-h.clientHeight;bar.style.transform='scaleX('+(m>0?h.scrollTop/m:0)+')'};addEventListener('scroll',f,{passive:true});f()}
var toc=[].slice.call(document.querySelectorAll('.toc a'));
if(toc.length&&'IntersectionObserver'in window){var o=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){toc.forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id)})}})},{rootMargin:'-25% 0px -65% 0px'});document.querySelectorAll('.body section[id]').forEach(function(s){o.observe(s)})}
if(!matchMedia('(prefers-reduced-motion: reduce)').matches){document.querySelectorAll('.count').forEach(function(el){var m=el.textContent.match(/^(\D*)(\d+)(\D*)$/);if(!m)return;var n=+m[2],t0=null,done=m[0];(function step(t){if(!t0)t0=t;var k=Math.min((t-t0)/900,1);el.textContent=m[1]+Math.round(n*(1-Math.pow(1-k,3)))+m[3];if(k<1)requestAnimationFrame(step);else el.textContent=done})(performance.now())})}
var d=document.getElementById('lb');
if(d&&d.showModal){var im=d.querySelector('img');document.querySelectorAll('.shot a').forEach(function(a){a.addEventListener('click',function(e){e.preventDefault();im.src=a.href;im.alt=a.querySelector('img').alt;d.showModal()})});d.addEventListener('click',function(){d.close()})}
})();

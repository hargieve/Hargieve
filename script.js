document.querySelectorAll('a,button,.dream-card,.proj-row,.c-card,.info-row,.learn-row').forEach(el=>{
  el.addEventListener('mouseenter',()=>{ document.body.classList.add('hovering'); });
  el.addEventListener('mouseleave',()=>{ document.body.classList.remove('hovering'); });
});

// ── Scroll reveal ──
const ro = new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('show'); ro.unobserve(e.target); }});
},{threshold:0.07});
document.querySelectorAll('.reveal').forEach(el=>ro.observe(el));

// ── Skill bars ──
const so = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.querySelectorAll('.bar-fill').forEach(b=>{ b.style.width=b.dataset.w+'%'; });
      so.unobserve(e.target);
    }
  });
},{threshold:0.25});
const sb = document.getElementById('sb');
if(sb) so.observe(sb);

// ── Dark mode ──
const html=document.documentElement;
const tog=document.getElementById('tog');
const tok=document.getElementById('tok');
function setTheme(dark){
  html.classList.toggle('dark',dark);
  tok.textContent=dark?'🌙':'☀️';
  localStorage.setItem('t',dark?'1':'0');
}
const sv=localStorage.getItem('t');
setTheme(sv!=null ? sv==='1' : window.matchMedia('(prefers-color-scheme:dark)').matches);
tog.addEventListener('click',()=>setTheme(!html.classList.contains('dark')));

// ── Contact form ──
function sendMsg(){
  const n=document.getElementById('fn').value.trim();
  const e=document.getElementById('fe').value.trim();
  const m=document.getElementById('fm').value.trim();
  if(!n||!e||!m){alert('Please fill in all fields!');return;}
  const s=encodeURIComponent('Message from '+n+' via Portfolio');
  const b=encodeURIComponent('Hi Umar,\n\n'+m+'\n\nFrom: '+n+'\nEmail: '+e);
  window.location.href='mailto:umarrusjanto@gmail.com?subject='+s+'&body='+b;
  document.getElementById('fok').style.display='block';
}
// Nav scroll
const nav=document.getElementById('nav');
window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>80));

// Reveal on scroll
const ro=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');ro.unobserve(x.target)}}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>ro.observe(el));

// Photo switcher
function switchPhoto(el){
  const src = el.dataset.src;
  const mainImg = document.getElementById('main-photo');
  // fade out → swap → fade in
  mainImg.style.opacity='0';
  setTimeout(()=>{
    mainImg.src = src;
    mainImg.style.opacity='1';
  },200);
  // marcar activa
  document.querySelectorAll('.pt').forEach(t=>t.classList.remove('active-thumb'));
  el.classList.add('active-thumb');
}
function changePhoto(el,src){ switchPhoto(el); } // compat

// Lightbox
function lb(el){
  document.getElementById('lb-img').src=document.getElementById('main-photo').src;
  document.getElementById('lb').classList.add('on');
}
function closeLb(){document.getElementById('lb').classList.remove('on')}

// Catalog filter
function filterCars(btn,brand){
  document.querySelectorAll('.cf-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.car-card').forEach(c=>{
    c.style.display=(brand==='all'||c.dataset.brand===brand)?'block':'none';
  });
}

// Mobile menu
function openMenu(){document.getElementById('mobmenu').classList.add('open')}
function closeMenu(){document.getElementById('mobmenu').classList.remove('open')}
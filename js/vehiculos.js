// Reveal
const ro=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');ro.unobserve(x.target)}}),{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>ro.observe(el));

// Filter
function filter(btn,brand){
  document.querySelectorAll('.fb').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.car-card').forEach(c=>{
    c.style.display=(brand==='all'||c.dataset.brand===brand)?'flex':'none';
  });
}

// Modal
function openModal(id){
  document.getElementById('modal').classList.add('open');
  document.getElementById('modal-'+id).style.display='flex';
  document.body.style.overflow='hidden';
}
function closeModal(){
  document.getElementById('modal').classList.remove('open');
  document.querySelectorAll('.modal-inner').forEach(m=>m.style.display='none');
  document.body.style.overflow='';
}
function closeModalOutside(e){
  if(e.target===document.getElementById('modal')) closeModal();
}

// Modal thumbs
function modalThumb(el){
  const src=el.dataset.src;
  const img=document.getElementById('modal-main-img');
  img.style.opacity='0';
  setTimeout(()=>{img.src=src;img.style.opacity='1';},180);
  document.querySelectorAll('.mp-thumb').forEach(t=>t.classList.remove('active'));
  el.classList.add('active');
}

// Lightbox
function openLb(){
  const src=document.getElementById('modal-main-img').src;
  document.getElementById('lb-img').src=src;
  document.getElementById('lb').style.display='flex';
}
function closeLb(){document.getElementById('lb').style.display='none'}

// Escape key
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){closeModal();closeLb();}
});

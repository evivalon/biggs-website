const toggle=document.querySelector('.nav-toggle');const nav=document.querySelector('#main-nav');toggle.addEventListener('click',()=>{const isOpen=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(isOpen));toggle.setAttribute('aria-label',isOpen?'Close navigation':'Open navigation');toggle.textContent=isOpen?'✕':'☰'});nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open navigation');toggle.textContent='☰'}));document.querySelector('#year').textContent=new Date().getFullYear();

// Accessible tap-to-enlarge gallery; closes with Escape, backdrop, or button.
const lightbox=document.querySelector('.gallery-lightbox');
if(lightbox&&typeof lightbox.showModal==='function'){
 const image=lightbox.querySelector('img');const caption=lightbox.querySelector('p');
 document.querySelectorAll('.gallery-grid img').forEach(item=>{
  const open=()=>{image.src=item.currentSrc||item.src;image.alt=item.alt;caption.textContent=item.alt;lightbox.showModal()};
  item.addEventListener('click',open);
  item.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open()}});
 });
 lightbox.querySelector('.lightbox-close').addEventListener('click',()=>lightbox.close());
 lightbox.addEventListener('click',e=>{if(e.target===lightbox)lightbox.close()});
}

// V7: dismiss mobile navigation when tapping outside or pressing Escape.
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&nav.classList.contains('open')){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open navigation');toggle.textContent='☰';toggle.focus()}});
document.addEventListener('click',event=>{if(nav.classList.contains('open')&&!nav.contains(event.target)&&!toggle.contains(event.target)){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open navigation');toggle.textContent='☰'}});

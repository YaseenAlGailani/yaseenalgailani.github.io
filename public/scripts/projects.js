let unfolder=(self,className)=>{
  self.classList.toggle(className);
}
let bars=document.querySelectorAll('.bars-wrap div');
let project=document.querySelector(".project");
let menuHeader=document.querySelector('.menu-header')
let pItems=document.querySelectorAll('.p-item');
let hr=document.querySelectorAll('.hr');
let sideArrow=document.querySelector('.side-arrow');
let sideCircles=document.querySelector('.side-circles-wrap');

window.setTimeout(()=>{
  bars.forEach((bar)=>{bar.classList.add('bar-anim-right');});
  menuHeader.classList.add('menu-header-in');
}, 1000);
window.setTimeout(()=>{
pItems.forEach((item)=>{item.classList.add('p-item-in');});
hr.forEach((r)=>{r.classList.add('hr-in');});
},1700);
window.setTimeout(()=>{
  project.classList.add('project-in');
  pItems[0].classList.add('p-selected');
  sideArrow.classList.add('side-arrow-in');

},2500);

// --------------- Handle Navigation ---------------

function navigate(link){

  bars.forEach((bar)=>{bar.classList.remove('bar-anim-right');});
  menuHeader.classList.remove('menu-header-in');
  project.classList.remove('project-in');
  pItems[0].classList.remove('p-selected');
  pItems.forEach((item)=>{item.classList.remove('p-item-in');});
  hr.forEach((r)=>{r.classList.remove('hr-in');});
  sideArrow.classList.remove('side-arrow-in');
  window.setTimeout(function(){window.location.href = link;},1500);
}
// ----------------- Side bar reveal --------------
sideArrow.addEventListener('click',()=>{
  sideCircles.classList.toggle('side-circles-reveal')
  sideArrow.classList.toggle('side-arrow-anim');
})

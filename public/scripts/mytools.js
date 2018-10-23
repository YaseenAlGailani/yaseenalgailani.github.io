let unfolder=(self,className)=>{
  self.classList.toggle(className);
  if(document.documentElement.clientWidth <= 490){
    title.classList.toggle('hide-title')
  }
}

let articleFrontEnd=document.getElementById('front-end');
let articleBackend=document.getElementById('backend');
let articleMostImp=document.getElementById('most-imp');
let scrollNote1=document.getElementById('scroll-note1');
let scrollNote2=document.getElementById('scroll-note2');
let scrollNote3=document.getElementById('scroll-note3');
let bars=document.querySelectorAll('.bars-wrap div');
let nav=document.querySelector('.nav-mytools');
let mainMytools=document.querySelector('.main-mytools');
let title=document.querySelector('.mt-title');
let sideArrow=document.querySelector('.side-arrow');
let sideCircles=document.querySelector('.side-circles-wrap');


let locker=[false,false,false,false,false,false];
let checkpoint1=0.3;
let checkpoint2=0.6;

function taskRunner(checkpoint,x,y,element,className){

  if(document.documentElement.scrollTop>=(Math.ceil(document.documentElement.scrollHeight*checkpoint)) || document.body.scrollTop>=(Math.ceil(document.body.scrollHeight*checkpoint))){
    if(!locker[x]){
      locker[x]=true;
      for(var i=0 ; i<element.length;i++){
        element[i].classList.add(className[i]);
      }
      // console.log(">"+checkpoint);
    }
    locker[y]=false;
  }
  else if(document.documentElement.scrollTop<=(Math.ceil(document.documentElement.scrollHeight*checkpoint)) || document.body.scrollTop>=(Math.ceil(document.body.scrollHeight*checkpoint))){
    if(!locker[y]){
      locker[y]=true;
      for(var j=0 ; j<element.length;j++){
        element[j].classList.remove(className[j]);
      }
      // console.log("<"+checkpoint);
    }
    locker[x]=false;
  }
}

window.addEventListener('scroll', function(){
  taskRunner(0.1,0,1,[articleFrontEnd,scrollNote1],['article-in',"scroll-hide"]);
  taskRunner(0.4,2,3,[articleBackend,scrollNote2],['article-in',"scroll-hide"]);
  taskRunner(0.6,4,5,[articleMostImp,scrollNote3],['article-in',"scroll-hide"]);
});


// --------------------------------
window.setTimeout(()=>{
  nav.classList.add('nav-mytools-in');
}, 500);
window.setTimeout(()=>{
  bars.forEach((bar)=>{bar.classList.add('bar-anim-left');});
  mainMytools.classList.add('main-mytools-in');
  sideArrow.classList.add('side-arrow-in');
}, 1000);

// ----------------------------------------------------
function navigate(link){
  nav.classList.remove('nav-mytools-in');
  bars.forEach((bar)=>{bar.classList.remove('bar-anim-left');});
  mainMytools.classList.remove('main-mytools-in');
  sideArrow.classList.remove('side-arrow-in');

  window.setTimeout(function(){window.location.href = link;},1500);
}
// ----------------- Side bar reveal --------------
sideArrow.addEventListener('click',()=>{
  sideCircles.classList.toggle('side-circles-reveal')
  sideArrow.classList.toggle('side-arrow-anim');
})

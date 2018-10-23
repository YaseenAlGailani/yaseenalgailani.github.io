let introP2=document.querySelector('.intro-p2');
let aboutImage=document.querySelector(".about-image-wrap");
let aboutText=document.querySelector(".about-text");
let aboutH2=document.querySelector(".about-h2");
let aboutCont=document.querySelector(".about-cont");
let brgr=document.querySelector(".brgr-index");
let bars=document.querySelectorAll('.bars-wrap div');
let mainIndex=document.querySelector('.main-index');
let arrow=document.querySelector('.arrow');
let sideArrow=document.querySelector('.side-arrow');
let sideCircles=document.querySelector('.side-circles-wrap');

// --------- arrow svg ---------------
window.setTimeout(()=>{arrow.classList.add('arrow-anim');},2000);


// ------------ burger ---------------
let unfolder=()=>{
  brgr.classList.toggle('unfold');
}

// ------------ scroll reveal effects  ---------------
let checkpoint=document.documentElement.clientWidth <= 768? 0.2 : 0.4;
let lock=[false,false];
window.addEventListener("scroll", ()=>{
  if(document.documentElement.scrollTop>=(Math.ceil(document.documentElement.scrollHeight*checkpoint)) || document.body.scrollTop>=(Math.ceil(document.body.scrollHeight*checkpoint))){
    if(!lock[0]){
      lock[0]=true;
      // console.log(checkpoint);
      bars.forEach((bar)=>{bar.classList.add('bar-anim-left')});
      aboutImage.classList.add('about-image-wrap-anim');
      aboutText.classList.add('about-text-anim');
      aboutH2.classList.add('about-h2-anim');
      sideArrow.classList.add('side-arrow-in');
      window.setTimeout(()=>{arrow.classList.remove('arrow-anim');},1000);
      lock[1]=false;
    }}
    else if(document.documentElement.scrollTop<(Math.ceil(document.documentElement.scrollHeight*checkpoint)) || document.body.scrollTop<(Math.ceil(document.body.scrollHeight*checkpoint))){
      if(!lock[1]){
        lock[1]=true;
        console.log(document.documentElement.scrollTop);
        window.setTimeout(()=>{
          bars.forEach((bar)=>{bar.classList.remove('bar-anim-left')});
          aboutImage.classList.remove('about-image-wrap-anim');
          aboutText.classList.remove('about-text-anim');
          aboutH2.classList.remove('about-h2-anim');}, 0);
          brgr.classList.remove('unfold');
          sideArrow.classList.remove('side-arrow-in');
          // window.setTimeout(()=>{arrow.classList.add('arrow-anim');},1000);


        lock[0]=false;
      }
    }
})

// --------------- Handle Navigation ---------------

function navigate(link){
  mainIndex.classList.add('main-index-out');
  sideArrow.classList.remove('side-arrow-in');
  window.setTimeout(function(){window.location.href = link+'.html';},1000);
}

// console.log(document.documentElement.clientWidth <= 768);

// ----------------- Side bar reveal --------------
sideArrow.addEventListener('click',()=>{
  sideCircles.classList.toggle('side-circles-reveal')
  sideArrow.classList.toggle('side-arrow-anim');
})

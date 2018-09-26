
var txtCntIn=document.querySelectorAll(".txtCntIn");
var introBtns=document.querySelectorAll(".intro");
var mStylesOut=["cbTM","cbMM","cbBM"];
var mStylesIn=["cbTClear","cbMClear","cbBClear"];
var locker=null;
var btnIntroAboutme=document.getElementById('intro-aboutme');
var btnIntroMytools=document.getElementById('intro-mytools');
var btnIntroRecentwork=document.getElementById('intro-recentwork');
var introMain=document.getElementById("intro-main");

// --------------- Intro btn ---------------
function control(){
  if(locker!=null){return null;}
  if(!(introBtns[0].classList.contains(mStylesOut[0]))){
    for(var i=0;i<introBtns.length;i++){
      introBtns[i].classList.add("dispBlk");
      introBtns[i].classList.add(mStylesOut[i]);
      introBtns[i].classList.remove(mStylesIn[i]);
    }
  }
  else{
    for(var j=0;j<introBtns.length;j++){
      introBtns[j].classList.add(mStylesIn[j]);
    }
    locker=window.setTimeout(clearStyles,1000);
  }
  for(var k=0;k<introBtns.length;k++){
    txtCntIn[k].classList.toggle("txtRvl");
  }
}
function clearStyles(){
  for(var i=0;i<introBtns.length;i++){
      introBtns[i].classList.remove(mStylesOut[i]);
      introBtns[i].classList.remove("dispBlk");
    }
  locker=null;
}
// --------------- Intro Page ---------------

btnIntroAboutme.addEventListener("click", function(){
  introMain.classList.add("intro-main-anim");
  window.setTimeout(function(){window.location.href = 'aboutme.html';},1000);
});
btnIntroMytools.addEventListener("click", function(){
  introMain.classList.add("intro-main-anim");
  window.setTimeout(function(){window.location.href = 'mytools.html';},1000);
})
;btnIntroRecentwork.addEventListener("click", function(){
  introMain.classList.add("intro-main-anim");
  window.setTimeout(function(){window.location.href = 'recentwork.html';},1000);
});

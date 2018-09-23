function viewer(index) {
  var vline=document.querySelector(".vLine");
  var content=document.querySelectorAll("section");
  for(var i=1;i<content.length;i++){
    content[i].classList.remove("display");
  }
  content[index].classList.add("display");
  vline.classList.add("vLdisplay");
}


function togg() {
  var mainBtnOut=document.querySelector(".mainBtnOut");
  var mainBtnIn=document.querySelector(".mainBtnIn");
  var navBtn=document.querySelectorAll(".nav-btn");
  mainBtnOut.classList.toggle("navPulseIn");
  mainBtnIn.classList.toggle("navPulse");
  for (var i=0;i<navBtn.length;i++){
    navBtn[i].classList.toggle("navDisplay");
  }
}

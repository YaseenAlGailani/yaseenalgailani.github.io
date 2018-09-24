var txtCntIn=document.querySelectorAll(".txtCntIn");
var introBtns=document.querySelectorAll(".intro");
var mStylesOut=["cbTM","cbMM","cbBM"];
var mStylesIn=["cbTClear","cbMClear","cbBClear"];
var locker=null;

function sstart(){
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

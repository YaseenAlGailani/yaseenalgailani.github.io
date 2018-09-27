
var articleFrontEnd=document.getElementById('front-end');
var articleBackend=document.getElementById('backend');
var articleMostImp=document.getElementById('most-imp');
var scrollNote1=document.getElementById('scroll-note1');
var scrollNote2=document.getElementById('scroll-note2');
var scrollNote3=document.getElementById('scroll-note3');

var locker=[false,false,false,false,false,false];
var checkpoint1=0.3;
var checkpoint2=0.6;

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
  // if(document.documentElement.scrollTop>=(Math.ceil(document.documentElement.offsetHeight*checkpoint1))){
  //   if(!lockTask1){
  //     lockTask1=true;
  //     articleFrontEnd.classList.add('article-in');
  //     console.log("Task-1!");
  //   }
  //   lockTask2=false;
  // }
  // else if(document.documentElement.scrollTop<=(Math.ceil(document.documentElement.offsetHeight*checkpoint1))){
  //   if(!lockTask2){
  //     lockTask2=true;
  //     articleFrontEnd.classList.remove('article-in');
  //     console.log("Task-2!");
  //   }
  //   lockTask1=false;
  // }
});

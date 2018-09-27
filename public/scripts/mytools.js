
var articleFrontEnd=document.getElementById('front-end');
var articleBackend=document.getElementById('backend');
var articleMostImp=document.getElementById('most-imp');

var locker=[false,false,false,false,false,false];
var checkpoint1=0.3;
var checkpoint2=0.6;

function taskRunner(checkpoint,x,y,element,className){

  if(document.documentElement.scrollTop>=(Math.ceil(document.documentElement.scrollHeight*checkpoint))){
    if(!locker[x]){
      locker[x]=true;
      element.classList.add(className);
      // console.log(">"+checkpoint);
    }
    locker[y]=false;
  }
  else if(document.documentElement.scrollTop<=(Math.ceil(document.documentElement.scrollHeight*checkpoint))){
    if(!locker[y]){
      locker[y]=true;
      element.classList.remove(className);
      // console.log("<"+checkpoint);
    }
    locker[x]=false;
  }
}

window.addEventListener('scroll', function(){
  taskRunner(0.1,0,1,articleFrontEnd,'article-in');
  taskRunner(0.4,2,3,articleBackend,'article-in');
  taskRunner(0.6,4,5,articleMostImp,'article-in');
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

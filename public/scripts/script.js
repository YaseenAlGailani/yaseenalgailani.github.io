window.onload=function(){

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


    (function(){
      var container=document.getElementById("em-container");
      var httpRequest = new XMLHttpRequest();

      httpRequest.open("GET", "https://yaseenalgailani.github.io/hello.html", true);
      httpRequest.setRequestHeader('Content-type', 'text/html');
      httpRequest.send();

      httpRequest.onreadystatechange=function(){
        if(httpRequest.readyState==4 && httpRequest.status==200){
          container.innerHTML=httpRequest.responseText;
        }
      }
    })();




}

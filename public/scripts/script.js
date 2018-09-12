function viewer(index) {
  var vline=document.querySelector(".vLine");
  var content=document.querySelectorAll("section");
  for(let i=1;i<content.length;i++){
    content[i].classList.remove("display");
  }
  content[index].classList.add("display");
  vline.classList.add("vLdisplay");
}

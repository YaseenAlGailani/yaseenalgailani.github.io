'use strict';

var articleFrontEnd = document.getElementById('front-end');
var articleBackend = document.getElementById('backend');
var articleMostImp = document.getElementById('most-imp');
var scrollNote1 = document.getElementById('scroll-note1');
var scrollNote2 = document.getElementById('scroll-note2');
var scrollNote3 = document.getElementById('scroll-note3');
var bars = [].slice.call(document.querySelectorAll('.bars-wrap div'));
var nav = document.querySelector('.nav-mytools');
var mainMytools = document.querySelector('.main-mytools');
var title = document.querySelector('.mt-title');
var sideArrow = document.querySelector('.side-arrow');
var sideCircles = document.querySelector('.side-circles-wrap');

var unfolder = function (self, className) {
  self.classList.toggle(className);
  if (document.documentElement.clientWidth <= 490) {
    title.classList.toggle('hide-title');
  }
};

scroller();

var dist, endofpage, distNote = 0;
var buffer=100;
window.addEventListener('scroll', scroller);

function scroller() {
  dist = window.innerHeight - (window.innerHeight / 2);
  distNote = window.innerHeight - (window.innerHeight / 6);
  endofpage = (window.scrollY + window.innerHeight + buffer >= document.body.clientHeight);

  noteRevealer(articleFrontEnd,scrollNote1)
  articleRevealer(articleFrontEnd, scrollNote1);
  noteRevealer(articleBackend, scrollNote2)
  articleRevealer(articleBackend, scrollNote2);
  noteRevealer(articleMostImp, scrollNote3)
  articleRevealer(articleMostImp, scrollNote3);

}

function articleRevealer(articleElement,noteElement){
  if (articleElement.getBoundingClientRect().top <= dist || endofpage) {
    if (!(articleElement.classList.contains('article-in'))) {
      articleElement.classList.add('article-in');
      noteElement.classList.add('scroll-hide');  
      // noteElement.style.display='none';
    }
  }
  else if (articleElement.getBoundingClientRect().top > dist || !endofpage) {
    if (articleElement.classList.contains('article-in')) {
      articleElement.classList.remove('article-in');
      // noteElement.classList.remove('scroll-hide');
    }
  }
}

function noteRevealer(articleElement,noteElement) {
  if (noteElement.getBoundingClientRect().top <= distNote || endofpage) {
    if(!(articleElement.classList.contains('article-in'))){
    // if ((noteElement.classList.contains('scroll-hide'))) {
      noteElement.classList.remove('scroll-hide');
    }
  }
  else if (noteElement.getBoundingClientRect().top > distNote || !endofpage) {
    // if (!(noteElement.classList.contains('scroll-hide'))) {
      noteElement.classList.add('scroll-hide');
  }
}



// --------------------------------
window.setTimeout(function () {
  nav.classList.add('nav-mytools-in');
}, 500);
window.setTimeout(function () {
  bars.forEach(function (bar) {
    bar.classList.add('bar-anim-left');
  });
  mainMytools.classList.add('main-mytools-in');
  sideArrow.classList.add('side-arrow-in');
}, 1000);

// ----------------------------------------------------
function navigate(link) {
  nav.classList.remove('nav-mytools-in');
  bars.forEach(function (bar) {
    bar.classList.remove('bar-anim-left');
  });
  mainMytools.classList.remove('main-mytools-in');
  sideArrow.classList.remove('side-arrow-in');

  window.setTimeout(function () {
    window.location.href = link;
  }, 1500);
}
// ----------------- Side bar reveal --------------
sideArrow.addEventListener('click', function () {
  sideCircles.classList.toggle('side-circles-reveal');
  sideArrow.classList.toggle('side-arrow-anim');
});

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


var dist,endofpage = 0;
var buffer=100;
window.addEventListener('scroll', function (e) {
  dist = window.innerHeight - (window.innerHeight / 2);
  endofpage = (window.scrollY + window.innerHeight + buffer >= document.body.clientHeight);

  scroller(articleFrontEnd, scrollNote1);
  scroller(articleBackend, scrollNote2);
  scroller(articleMostImp, scrollNote3);

});

function scroller(articleElement,noteElement){
  if (articleElement.getBoundingClientRect().top <= dist || endofpage) {
    if (!(articleElement.classList.contains('article-in'))) {
      articleElement.classList.add('article-in');
      noteElement.classList.add('scroll-hide');
    }
  }
  else if (articleElement.getBoundingClientRect().top > dist || !endofpage) {
    if (articleElement.classList.contains('article-in')) {
      articleElement.classList.remove('article-in');
      noteElement.classList.remove('scroll-hide');
    }
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

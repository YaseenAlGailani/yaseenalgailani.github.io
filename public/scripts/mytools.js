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
window.addEventListener('scroll', function (e) {
  dist = window.innerHeight - (window.innerHeight / 2);
  endofpage = (window.scrollY + window.innerHeight >= document.body.clientHeight);
  if (articleFrontEnd.getBoundingClientRect().top <= dist) {
    if (!(articleFrontEnd.classList.contains('article-in'))) {
      articleFrontEnd.classList.add('article-in');
      scrollNote1.classList.add('scroll-hide');
    }
  }
  else if (articleFrontEnd.getBoundingClientRect().top > dist) {
    if (articleFrontEnd.classList.contains('article-in')) {
      articleFrontEnd.classList.remove('article-in');
      scrollNote1.classList.remove('scroll-hide');
    }
  }

  if (articleBackend.getBoundingClientRect().top <= dist) {
    if (!(articleBackend.classList.contains('article-in'))) {
      articleBackend.classList.add('article-in');
      scrollNote2.classList.add('scroll-hide');
    }
  }
  else if (articleBackend.getBoundingClientRect().top > dist) {
    if (articleBackend.classList.contains('article-in')) {
      articleBackend.classList.remove('article-in');
      scrollNote2.classList.remove('scroll-hide');
    }
  }

  if (endofpage) {
    if (!(articleMostImp.classList.contains('article-in'))) {
      articleMostImp.classList.add('article-in');
      scrollNote3.classList.add('scroll-hide');
    }
  }
  else if (articleMostImp.getBoundingClientRect().top > 0 || !endofpage) {
    if (articleMostImp.classList.contains('article-in')) {
      articleMostImp.classList.remove('article-in');
      scrollNote3.classList.remove('scroll-hide');
    }
  }

});


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

'use strict';

var unfolder = function unfolder(self, className) {
  self.classList.toggle(className);
  if (document.documentElement.clientWidth <= 490) {
    title.classList.toggle('hide-title');
  }
};

var articleFrontEnd = document.getElementById('front-end');
var articleBackend = document.getElementById('backend');
var articleMostImp = document.getElementById('most-imp');
var scrollNote1 = document.getElementById('scroll-note1');
var scrollNote2 = document.getElementById('scroll-note2');
var scrollNote3 = document.getElementById('scroll-note3');
var bars = document.querySelectorAll('.bars-wrap div');
var nav = document.querySelector('.nav-mytools');
var mainMytools = document.querySelector('.main-mytools');
var title = document.querySelector('.mt-title');
var sideArrow = document.querySelector('.side-arrow');
var sideCircles = document.querySelector('.side-circles-wrap');

var locker = [false, false, false, false, false, false];
var checkpoint1 = 0.3;
var checkpoint2 = 0.6;

function taskRunner(checkpoint, x, y, element, className) {

  if (document.documentElement.scrollTop >= Math.ceil(document.documentElement.scrollHeight * checkpoint) || document.body.scrollTop >= Math.ceil(document.body.scrollHeight * checkpoint)) {
    if (!locker[x]) {
      locker[x] = true;
      for (var i = 0; i < element.length; i++) {
        element[i].classList.add(className[i]);
      }
    }
    locker[y] = false;
  } else if (document.documentElement.scrollTop <= Math.ceil(document.documentElement.scrollHeight * checkpoint) || document.body.scrollTop >= Math.ceil(document.body.scrollHeight * checkpoint)) {
    if (!locker[y]) {
      locker[y] = true;
      for (var j = 0; j < element.length; j++) {
        element[j].classList.remove(className[j]);
      }
    }
    locker[x] = false;
  }
}

window.addEventListener('scroll', function () {
  taskRunner(0.1, 0, 1, [articleFrontEnd, scrollNote1], ['article-in', "scroll-hide"]);
  taskRunner(0.4, 2, 3, [articleBackend, scrollNote2], ['article-in', "scroll-hide"]);
  taskRunner(0.6, 4, 5, [articleMostImp, scrollNote3], ['article-in', "scroll-hide"]);
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

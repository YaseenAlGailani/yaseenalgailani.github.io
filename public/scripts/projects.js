'use strict';

var unfold = function(self, className) {
  self.classList.toggle(className);
};
var bars = document.querySelectorAll('.bars-wrap div');
var project = document.querySelector(".project");
var menuHeader = document.querySelector('.menu-header');
var pItems = [].slice.call(document.querySelectorAll('.p-item'));
var hr = [].slice.call(document.querySelectorAll('.hr'));
var sideArrow = document.querySelector('.side-arrow');
var sideCircles = document.querySelector('.side-circles-wrap');

window.setTimeout(function () {
  bars.forEach(function (bar) {
    bar.classList.add('bar-anim-right');
  });
  menuHeader.classList.add('menu-header-in');
}, 1000);
window.setTimeout(function () {
  pItems.forEach(function (item) {
    item.classList.add('p-item-in');
  });
  hr.forEach(function (r) {
    r.classList.add('hr-in');
  });
}, 1700);
window.setTimeout(function () {
  project.classList.add('project-in');
  pItems[0].classList.add('p-selected');
  sideArrow.classList.add('side-arrow-in');
}, 2500);

// --------------- Handle Navigation ---------------

function navigate(link) {

  bars.forEach(function (bar) {
    bar.classList.remove('bar-anim-right');
  });
  menuHeader.classList.remove('menu-header-in');
  project.classList.remove('project-in');
  pItems[0].classList.remove('p-selected');
  pItems.forEach(function (item) {
    item.classList.remove('p-item-in');
  });
  hr.forEach(function (r) {
    r.classList.remove('hr-in');
  });
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

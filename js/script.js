'use strict'
window.onscroll = function () {

  var scrolled = window.pageYOffset,
    header = qS('header'),
    topHeader = qS('.topHeader'),
    subHeader = qS('.subHeader'),
    a = scrolled > 1000,
    b = scrolled > 2000,
    c = scrolled > 3000,
    d = scrolled > 4000,
    e = scrolled > 5000,
    f = scrolled > 6000;

  if (a) {
    header.classList.add('minWidth');
    header.style.top = scrolled + 'px';
  } else {
    header.classList.remove('minWidth');
    header.style.top = '0';
  }


  function qS(el) {
    return document.querySelector(el);
  }


  function checkPos(condition, elem, className) {
    if (condition) {
      return elem.classList.add(className)
    } else {
      return elem.classList.remove(className)
    }
  }

  checkPos(b, topHeader, 'mTop');
  checkPos(c, topHeader, 'maxHeight');
  checkPos(d, subHeader, 'dblock');
  checkPos(e, topHeader, 'rotateFirstTopHeader');
  checkPos(e, subHeader, 'rotateFirstSubHeader');
  checkPos(f, topHeader, 'rotateTopHeader');
  checkPos(f, subHeader, 'rotateSubHeader');
}

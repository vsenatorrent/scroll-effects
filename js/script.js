window.onscroll = function () {
  var scrolled = window.pageYOffset,
    header = document.querySelector('header'),
    topHeader = document.querySelector('.topHeader'),
    subHeader = document.querySelector('.subHeader');

  if (scrolled > 1000) {
    header.classList.add('minWidth');
    header.style.top = scrolled + 'px';
  } else {
    header.classList.remove('minWidth');
    header.style.top = '0';
  }

  if (scrolled > 2000) {
    topHeader.classList.add('mTop');
  } else {
    topHeader.classList.remove('mTop');
  }

  if (scrolled > 3000) {
    topHeader.classList.add('maxHeight');
  } else {
    topHeader.classList.remove('maxHeight');
  }

  if (scrolled > 4000) {
    subHeader.classList.add('dblock');
  } else {
    subHeader.classList.remove('dblock');
  }
  if (scrolled > 5000) {
    topHeader.classList.add('rotateFirstTopHeader');
    subHeader.classList.add('rotateFirstSubHeader');
  }

  if (scrolled > 6000) {
    topHeader.classList.add('rotateTopHeader');
    subHeader.classList.add('rotateSubHeader');
  } else {
    topHeader.classList.remove('rotateTopHeader');
    subHeader.classList.remove('rotateSubHeader');
  }
}

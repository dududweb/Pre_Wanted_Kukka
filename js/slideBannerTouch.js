var curPos = 0;
var postion = 0;
var start_x, end_x;
var IMAGE_WIDTH = 375;
var images = document.querySelector('.carousel-item');

images.addEventListener('touchstart', touchStart);
images.addEventListener('touchend', touchEnd);

function viewPrevElement() {
  if (curPos > 0) {
    postion += IMAGE_WIDTH;
    images.style.transform = `translateX(${postion}px)`;
    curPos = curPos - 1;
  }
}
function viewNextElement() {
  if (curPos < 3) {
    postion -= IMAGE_WIDTH;
    images.style.transform = `translateX(${postion}px)`;
    curPos = curPos + 1;
  }
}

function touchStart(event) {
  start_x = event.touches[0].pageX;
}

function touchEnd(event) {
  end_x = event.changedTouches[0].pageX;
  if (start_x > end_x) {
    viewNextElement();
  } else {
    viewPrevElement();
  }
}

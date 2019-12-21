document.getElementById('slideLeft').onclick = sliderLeft;
document.getElementById('slideRight').onclick = sliderRight;
// document.getElementById('buttonS1').onclick = switch1;
// document.getElementById('buttonS2').onclick = switch2;
// document.getElementById('buttonS3').onclick = switch3;
let left = 0;

function sliderLeft() {
  let polosa = document.getElementById('polosa');
  left = left - 950;
  if (left < -1900) {
    left = 0;
  }
  polosa.style.left = left + 'px';
}

function sliderRight() {
  let polosa = document.getElementById('polosa');
  left = left + 950;
  if (left > 0) {
    left = -1900;
  }
  polosa.style.left = left + 'px';
}

// function switch1() {
//   let slide = document.getElementById('polosa2-1');
//   left = 0;
//   slide.style.left = left + 'px';
// }
// function switch1() {
//   let slide = document.getElementById('polosa2-1');
//   left = -606;
//   slide.style.left = left + 'px';
// }
// function switch1() {
//   let slide = document.getElementById('polosa2-1');
//   left = -1212;
//   slide.style.left = left + 'px';
// }

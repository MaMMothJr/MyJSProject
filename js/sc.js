document.getElementById('slideLeft').onclick = sliderLeft;
document.getElementById('slideRight').onclick = sliderRight;
document.getElementById('buttonS1').onclick = switch1;
document.getElementById('buttonS2').onclick = switch2;
document.getElementById('buttonS3').onclick = switch3;
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

 function switch1() {
   let slide1 = document.getElementById('polosa2-1');
   let slide2 = document.getElementById('polosa2-2');
   let slide3 = document.getElementById('polosa2-3');
   slide1.style.left = 0 + 'px';
   slide2.style.left = 0 + 'px';
   slide3.style.left = 0 + 'px';
}

function switch2() {
  let slide1 = document.getElementById('polosa2-1');
  let slide2 = document.getElementById('polosa2-2');
  let slide3 = document.getElementById('polosa2-3');
  slide1.style.left = -606 + 'px';
  slide2.style.left = -374 + 'px';
  slide3.style.left = -617 + 'px';
}
function switch3() {
  let slide1 = document.getElementById('polosa2-1');
  let slide2 = document.getElementById('polosa2-2');
  let slide3 = document.getElementById('polosa2-3');
  slide1.style.left = -1212 + 'px';
  slide2.style.left = -748 + 'px';
  slide3.style.left = -1234 + 'px';
}

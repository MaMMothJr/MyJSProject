document.getElementById('slideLeft').onclick = sliderLeft;
document.getElementById('slideRight').onclick = sliderRight;
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

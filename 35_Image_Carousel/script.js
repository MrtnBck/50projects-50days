const imgs = document.getElementById('imgs');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

const img = document.querySelectorAll('#imgs img');

const delay = 2000;
let idx = 0;

let interval = setInterval(run, delay);

function run() {
  idx++;
  changeImage();
}

function changeImage() {
  if (idx > img.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = img.length - 1;
  }

  imgs.style.transform = `translateX(${-idx * 500}px)`;
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, delay);
}

leftBtn.addEventListener('click', () => {
  idx--;
  changeImage();
  resetInterval();
});

rightBtn.addEventListener('click', () => {
  idx++;
  changeImage();
  resetInterval();
});

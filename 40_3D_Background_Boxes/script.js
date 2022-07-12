const boxesContainer = document.getElementById('boxes');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  boxesContainer.classList.toggle('big');
});

function createBoxes() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const box = document.createElement('div');
      box.classList.add('box');
      box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
      boxesContainer.appendChild(box);
    }
  }
}

createBoxes();

//Solution 2
//const boxes = document.querySelectorAll('.boxes .box');
/* let row = 0;
let col = 0;
boxes.forEach((box, idx) => {
  idx++;
  const x = col * 125;
  const y = row * 125;
  console.log(x, y);
  box.style.backgroundPosition = `-${x}px -${y}px`;
  col++;
  if (idx % 4 === 0) {
    row++;
    col = 0;
  }
}); */

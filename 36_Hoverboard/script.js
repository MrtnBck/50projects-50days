const container = document.getElementById('square-container');
const btn1 = document.getElementById('schema1');
const btn2 = document.getElementById('schema2');
const btn3 = document.getElementById('mosaic');
const btn4 = document.getElementById('clear');

let colors = ['#00047E', '#0038B9', '#0CA6DD', '#6845FB', '#8B41FF'];

const SQUARES_QTY = 506;

for (let i = 0; i < SQUARES_QTY; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  square.addEventListener('mouseover', () => setColor(square));
  square.addEventListener('mouseout', () => removeColor(square));
  container.appendChild(square);
}

btn1.addEventListener('click', () => {
  colors = ['#00047E', '#0038B9', '#0CA6DD', '#6845FB', '#8B41FF'];
  btn2.style.backgroundColor = '#7d7d7d';
  btn1.style.backgroundColor = '#cccdc6';
});

btn2.addEventListener('click', () => {
  colors = ['#01befe', '#ffdd00', '#ff7d00', '#adff02', '#8f00ff'];
  btn1.style.backgroundColor = '#7d7d7d';
  btn2.style.backgroundColor = '#cccdc6';
});

btn3.addEventListener('click', () => {
  MosaicEffect();
  btn3.style.backgroundColor = '#cccdc6';
});

btn4.addEventListener('click', () => {
  const squares = document.querySelectorAll('.square');
  squares.forEach((square) => {
    removeColor(square);
  });
});

function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.background = '#1d1d1d';
  element.style.boxShadow = '0 0 2px #000';
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function MosaicEffect() {
  const squares = document.querySelectorAll('.square');
  let k = 0;
  const interval = setInterval(() => {
    setColor(squares[k]);
    if (k === SQUARES_QTY - 1) {
      clearInterval(interval);
    }
    k++;
  }, 50);
}

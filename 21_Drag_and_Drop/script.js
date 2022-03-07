const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

for (const empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragEnter', dragEnter);
  empty.addEventListener('dragLeave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

function dragStart() {
  //Append the class
  this.className += ' hold';
  //Element'll invisible
  setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
  this.className = ' fill';
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className += ' hovered';
}

function dragLeave() {
  this.className = ' empty';
}

function dragDrop() {
  this.className = ' empty';
  this.append(fill);
}

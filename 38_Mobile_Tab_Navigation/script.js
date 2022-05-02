const menuBtns = document.querySelectorAll('nav ul li');
const contents = document.querySelectorAll('.content');

menuBtns.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    removeActiveShowClass();
    btn.classList.add('active');
    contents[idx].classList.add('show');
  });
});

function removeActiveShowClass() {
  menuBtns.forEach((btn) => {
    btn.classList.remove('active');
  });
  contents.forEach((content) => {
    content.classList.remove('show');
  });
}

const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');
const errContainer = document.getElementById('err-container');

textarea.focus();

//HANDLE THE TEXTAREA INPUT
textarea.addEventListener('keydown', (e) => {
  createTags(e.target.value);
  //If enter is pressed
  if (e.key === 'Enter') {
    e.preventDefault();
    //User need to write minimum two choices
    if (tags.childElementCount < 2) {
      errorMessage();
    } else {
      errContainer.innerHTML = '';
      //Remove the text from the textarea
      setTimeout(() => {
        e.target.value = '';
      }, 10);
      //Call randomization logic
      randomSelect();
    }
  }
});

function createTags(input) {
  const tags = input
    .split(',')
    .filter((tag) => tag.trim() !== '') //element of the array can NOT be an empty string
    .map((tag) => tag.trim()); //create a new arr and store the elements without whitespaces (start and/or end)
  tagsEl.innerHTML = '';
  //Add the tags to the screen visually
  tags.forEach((tag) => {
    const tagEl = document.createElement('span');
    tagEl.classList.add('tag');
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
}

//RANDOMIZATION LOGIC

//Main randomization Logic
function randomSelect() {
  const times = 30;
  textarea.setAttribute('disabled', 'true');
  //Every 100 ms run this function
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    highlightTag(randomTag);
    //Wait 100ms then remove the highlight
    setTimeout(() => {
      unhighlightTag(randomTag);
    }, 100);
  }, 100);

  //Stopping the randomization after times * 100 ms
  setTimeout(() => {
    //Stop the interval
    clearInterval(interval);
    //Pick a random tag -> this is the result
    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
    }, 100);
    textarea.removeAttribute('disabled', 'true');
  }, times * 100);
}

//This makes the randomization
function pickRandomTag() {
  const tags = document.querySelectorAll('.tag');
  return tags[Math.floor(Math.random() * tags.length)]; //rand index from tags arr => random element from tags arr
}

function highlightTag(tag) {
  tag.classList.add('highlight');
}

function unhighlightTag(tag) {
  tag.classList.remove('highlight');
}

//Add error message to the screen
function errorMessage() {
  const err = document.createElement('h3');
  err.classList.add('err');
  err.innerText = 'Add minimum two items to use the app!';
  errContainer.appendChild(err);
}

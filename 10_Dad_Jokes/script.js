const jokeEl = document.getElementById('joke');
const JokeBtn = document.getElementById('jokeBtn');

JokeBtn.addEventListener('click', generateJoke);

generateJoke();

//USING AJAX -> FETCH API (built-in browser)
//ASYNC/AWAIT and .then() is two different approach, but it's the same.
//ASYNC/AWAIT is preferable

//USING ASYNC/AWAIT
async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };
  try {
    const res = await fetch('https://icanhazdadjoke.com/', config);
    const data = await res.json();
    jokeEl.innerHTML = data.joke;
  } catch (err) {
    console.log('Sorry, an error occured. Try again later...');
  }
}

// USING .then()
/* function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  fetch('https://icanhazdadjoke.com/', config)
    .then((res) => res.json())
    .then((data) => {
      jokeEl.innerHTML = data.joke;
    });
} */

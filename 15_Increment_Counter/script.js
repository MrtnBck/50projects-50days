const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
  counter.innerText = '0';

  const updateCounter = () => {
    //+ sign: string -> number
    const target = +counter.getAttribute('data-target');
    const c = +counter.innerText;

    const increment = target / 10;

    if (c < target) {
      //The Math.ceil() function always rounds a number up to the next largest integer.
      counter.innerText = `${Math.ceil(c + increment)}`;
      //Recursion: updateCounter calls updateCounter
      setTimeout(updateCounter, 50);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});

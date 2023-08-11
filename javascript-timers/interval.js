const countdownDisplay = document.querySelector('.countdown-display');
let count = 4;

function countdown() {
  count--;
  if (count > 0) {
    countdownDisplay.textContent = count;
  } else {
    countdownDisplay.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(countdownID);
  }
}

const countdownID = setInterval(countdown, 1000);

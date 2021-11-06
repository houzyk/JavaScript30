const displayTimeLeft = document.querySelector('.display__time-left');
const displayEndTime = document.querySelector('.display__end-time');

const clearDisplay = () => {
  displayTimeLeft.innerText = "";
  displayEndTime.innerText = "";
}

const startTimer = (countdown) => {
  const currentTime = Date.now()
  // const countDownTime = ;
  displayTimeLeft.innerText = ``;
  displayEndTime.innerText = `Be Back at ${currentTime}`;
}

const timerButtons = document.querySelectorAll('.timer__button');
timerButtons.forEach((timerButton) => {
  timerButton.addEventListener('click', () => {
    clearDisplay();
    startTimer(timerButton.dataset.time);
  });
});

const customForm = document.getElementById('custom');
const customFormInput = customForm.querySelector('input');
customForm.addEventListener('submit', (event) => {
  event.preventDefault();
  clearDisplay();
  startTimer(customFormInput.value);
});

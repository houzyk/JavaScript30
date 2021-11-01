const keys = document.querySelectorAll('.key');

const triggerKey = (event, button, keypress, data) => {
  if (event.key === keypress) {
    if (button.dataset.key === data) {
      button.classList.add('playing');
      const soundWord = button.querySelector('.sound').innerText;
      const sound = new Audio(`sounds/${soundWord}.wav`);
      sound.play();
      setTimeout(() => {
        button.classList.remove('playing');
      }, 200);
    }
  }
};

keys.forEach( (button) => {
  document.addEventListener('keypress', (event) => {
    triggerKey(event, button, 'a', '65');
    triggerKey(event, button, 's', '83');
    triggerKey(event, button, 'd', '68');
    triggerKey(event, button, 'f', '70');
    triggerKey(event, button, 'g', '71');
    triggerKey(event, button, 'h', '72');
    triggerKey(event, button, 'j', '74');
    triggerKey(event, button, 'k', '75');
    triggerKey(event, button, 'l', '76');
  });
});

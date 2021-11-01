const triggerKey = (event, button, keypress, data) => {
  if (event.key === keypress && button.dataset.key === data) {
      button.classList.add('playing');
      new Audio(`sounds/${button.querySelector('.sound').innerText}.wav`).play();
      setTimeout(() => { button.classList.remove('playing');}, 200);
    }
};

document.querySelectorAll('.key').forEach( (button) => {
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

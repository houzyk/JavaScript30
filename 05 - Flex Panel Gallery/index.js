document.querySelectorAll('.panel').forEach((panel) => {
  panel.addEventListener('click', () => {
    panel.classList.toggle('open');
    panel.querySelectorAll('p')[0].classList.toggle();
    console.log(panel.querySelectorAll('p')[2]);
  });
});

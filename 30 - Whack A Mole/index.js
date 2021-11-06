const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');

const molepop = () => {
  let randomTime = Math.round(Math.random() * 3) + 1;
  holes.forEach((hole) => {
    let randomGame = Math.round(Math.random() * 4);
    if (randomGame === 1) {
      hole.classList.add('up');
      setTimeout(() => {
        hole.classList.remove('up');
      }, randomTime * 250);
    }
  });
}

const score = () => {
  let molesClicked = 0;
  moles.forEach((mole) => {
    mole.addEventListener('click', (event) => {
      event.currentTarget.parentElement.classList.remove('up');
      molesClicked += 1;
      scoreBoard.innerText = molesClicked;
    });
  });
}

const startGame = () => {
  setInterval(() => {
    molepop();
  }, 1000);
  score();
}

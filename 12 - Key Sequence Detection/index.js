const keyPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowRight', 'ArrowRight', 'ArrowLeft', 'ArrowLeft', 'b', 'a', 'b', 'a'].join();
let keysPressed = [];
window.addEventListener('keyup', (event) => {
  keysPressed.push(event.key);
  if (keysPressed.join().includes(keyPattern)) cornify_add();
});

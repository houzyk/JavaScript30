const checkBoxes = document.querySelectorAll('.item input');

checkBoxes.forEach(element => {
  element.addEventListener('change', (event) => {
    checkBoxes.forEach(checkbox => {
      if (!checkbox.checked && checkbox === event.currentTarget) {
        checkbox.checked = true;
      }
    });
  });
});

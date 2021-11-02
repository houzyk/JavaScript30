const categories = document.querySelector('.mw-category');
const boulvards = Array.from(categories.querySelectorAll('a'));
const list = boulvards.map(boulvard => boulvard.innerText).filter(name => name.includes('de'));
console.log(list);
const spaceRange = document.getElementById('spacing');
spaceRange.addEventListener('input', () => {
    document.querySelector('img').style.paddingLeft = `${spaceRange.value}px`;
});

const blurRange = document.getElementById('blur');
blurRange.addEventListener('input', () => {
    document.querySelector('img').style.filter = `blur(${blurRange.value}px)`;
});

const basePal = document.getElementById('base');
basePal.addEventListener('input', () => {
    document.querySelector('img').style.background = `${basePal.value}`;
    document.querySelector('.hl').style.color = `${basePal.value}`;
});
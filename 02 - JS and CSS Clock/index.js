const updateTime = () => {
    const hourHand = document.querySelector('.hour-hand');
    const minHand = document.querySelector('.min-hand');
    const secondHand = document.querySelector('.second-hand');
    hourHand.style.transform = `rotate(${(new Date().getHours() * 30) + 90}deg)`;
    minHand.style.transform = `rotate(${(new Date().getMinutes() * 6) + 90}deg)`;
    secondHand.style.transform = `rotate(${((new Date().getSeconds() / 60) * 360) + 90}deg)`;
};

setInterval(() => {
    updateTime();
}, 1000);

const input = document.getElementById("input-number");
const startBtn = document.getElementById("start-btn");
const countdownArea = document.querySelector(".countdown-area")

startBtn.addEventListener('click', () => {
    let startingNumber = Number(input.value);
    if (!startingNumber) {
        return window.alert("Please enter a valid starting number!");
    }
    countdownArea.innerText = String(startingNumber).padStart(2, '0');;
    input.value = "";
    const timer = setInterval(() => {
        startingNumber -= 1;
        countdownArea.innerText = String(startingNumber).padStart(2, '0');
        if (startingNumber === 0) {
            window.alert("Time is up!");
            clearInterval(timer);
        }
    }, 1000)
})
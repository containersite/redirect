let totalTime = 1.5;
let timeLeft = totalTime;

let circle = document.getElementById("circle");
let timeText = document.getElementById("time");
let buttons = document.getElementById("buttons");
let message = document.getElementById("message");

let timer = setInterval(() => {
    timeLeft -= 0.1;
    if(timeLeft < 0) timeLeft = 0;

    let progress = ((totalTime - timeLeft) / totalTime) * 360;
    circle.style.background =
        `conic-gradient(#22c55e ${progress}deg, #1e293b 0deg)`;

    timeText.textContent = Math.ceil(timeLeft);

    if(timeLeft <= 0){
        clearInterval(timer);
        timeText.textContent = "✔";
        message.textContent = "আপনার লিঙ্ক রেডি হয়েছে 👇👇";
        buttons.style.display = "flex";
    }
}, 100);


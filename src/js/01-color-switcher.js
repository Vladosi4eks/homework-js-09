const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");

startBtn.addEventListener("click", onStartChangeColor);
stopBtn.addEventListener("click", onStartChangeColor);

stopBtn.disabled = true;

function changeButtonAttribute() {
    if(startBtn.disabled){
        stopBtn.disabled = true;
        startBtn.disabled = false;
    }
    else{
        stopBtn.disabled = false;
        startBtn.disabled = true;
    }
}

var colorTimer;

function onStartChangeColor() {
    changeButtonAttribute(); 
    if(startBtn.disabled){
        colorTimer = setInterval(() => {document.body.style.backgroundColor = getRandomHexColor();}, 1000);
    }
    else{
        clearInterval(colorTimer);
    }
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


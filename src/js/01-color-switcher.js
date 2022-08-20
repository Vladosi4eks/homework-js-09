const refs = {
    startBtn: document.querySelector("[data-start]"),
    stopBtn: document.querySelector("[data-stop]"),
};
refs.startBtn.addEventListener("click", toggleModal);
refs.stopBtn.addEventListener("click", toggleModal);

refs.stopBtn.setAttribute('disabled', true);

var color;
function toggleModal() {
    refs.startBtn.classList.toggle("disabled");
    if(document.querySelector(".disabled")){
        console.log("true");
        color = setInterval(changeBackgroundColor, 1000, 1000);
        refs.startBtn.setAttribute('disabled', true);
        refs.stopBtn.removeAttribute('disabled');
    }
    else{
        console.log("false");
        clearInterval(color);
        refs.startBtn.removeAttribute('disabled');
        refs.stopBtn.setAttribute('disabled', true);
    }
}

function changeBackgroundColor() {
    
    return document.body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


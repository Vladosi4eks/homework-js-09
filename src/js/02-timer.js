// Описан в документации
import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";

const refs = {
    date: document.querySelector("#datetime-picker"),
    startBtn: document.querySelector("[data-start]"),
    items: document.querySelectorAll(".field > .value"),
}

refs.startBtn.addEventListener('click', anotherDate);

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
var countdownDate;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      countdownDate = new Date(selectedDates).getTime();
      newDateUpdate();
    },
  };
var countdown;

function newDateUpdate() {

  if(countdownDate > options.defaultDate){
    refs.startBtn.removeAttribute('disabled');
  }
  else{
    window.alert("Please choose a date in the future");
    
    refs.startBtn.setAttribute('disabled', true);
  }
}
function anotherDate() {
  countdown = setInterval(toDie, 1000);
}
function toDie() {
    const distance = countdownDate - options.defaultDate;
    options.defaultDate = new Date();
    const info = convertMs(distance);
    const values = [info.days, info.hours, info.minutes, info.seconds];
    for(let i = 0; i < values.length; i++){
        if(values[i] < 10){
            values[i] =  `0${values[i]}`;
        }
    }
    const last = distance;
    refs.items.forEach(function (item, index) {
      item.textContent = values[index];
    });
    if(countdownDate <= options.defaultDate){
        clearInterval(countdown);
    }
}


flatpickr(refs.date, options);
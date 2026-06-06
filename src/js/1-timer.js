import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

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

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const date = new Date();
    if(selectedDates[0] >= date){
      startButton.disabled = false;
      userSelectedDate = selectedDates[0];
    }else{
      startButton.disabled = true;
      window.alert("Please choose a date in the future");
    }
    console.log(selectedDates[0]);
  },
};

let userSelectedDate;
const dateInput = document.querySelector('#datetime-picker');
const startButton = document.querySelector('button');
const days = document.querySelector('.value.dataset.days');

console.log(days);
console.log(dateInput);
console.log(startButton.dataset.start);

flatpickr(dateInput, options);

startButton.addEventListener('click' , () => {
  startButton.disabled = true;

 const timerId = setInterval(() => {
 const targetTime = userSelectedDate.getTime();
  const date = new Date();
  const currentTime = date.getTime();

  const timerTime = targetTime - currentTime;

  const convertedTime = convertMs(timerTime);
  console.log(`${convertedTime.days}:${convertedTime.hours}:${convertedTime.minutes}:${convertedTime.seconds}`)

 

  if(convertedTime.days == 0 && convertedTime.hours == 0 && convertedTime.minutes == 0 && convertedTime.seconds == 0){
    clearInterval(timerId);
  }
  }, 1000);
 
})
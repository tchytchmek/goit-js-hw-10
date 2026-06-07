import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

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
      iziToast.show({
      title: 'WRONG INPUT',
      message: 'Choose Date In The Future',
      color: 'red'
});
    }
    console.log(selectedDates[0]);
  },
};

function addLeadingZero(value){
  value = value.toString();
  return value.padStart(2, "0");
}

let userSelectedDate;

const dateInput = document.querySelector('#datetime-picker');
const startButton = document.querySelector('button');

const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');

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

  days.textContent = addLeadingZero(convertedTime.days);
  hours.textContent = addLeadingZero(convertedTime.hours);
  minutes.textContent = addLeadingZero(convertedTime.minutes);
  seconds.textContent = addLeadingZero(convertedTime.seconds);
 
  startButton.disabled = true;

  if(convertedTime.days == 0 && convertedTime.hours == 0 && convertedTime.minutes == 0 && convertedTime.seconds == 0){
    clearInterval(timerId);
    startButton.disabled = false;
  }
  }, 1000);
 
})
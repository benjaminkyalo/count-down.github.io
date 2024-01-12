const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

// I am going to write this script and hope it functions.
const Techmeeting = "1 jan 2025";

function Countdown() {
    const newYearsDate = new Date(Techmeeting); // Correct variable name and use 'new Date' instead of 'New Date'
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000; // Correct variable name

    const days = Math.floor(totalSeconds / 3600 / 24); // Correct capitalization of 'Math'
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML =  days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;
}



// Initial call
setInterval(Countdown, 1000);

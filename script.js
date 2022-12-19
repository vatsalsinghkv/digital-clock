// DATA
const PCOLOR = '#00eeff';
const SCOLOR = '#007399';
const hoursEl = document.getElementById('hr');
const minutesEl = document.getElementById('min');
const secondsEl = document.getElementById('sec');

const amPmEl = document.querySelectorAll('.am-pm span');
const daysEl = document.querySelectorAll('.days li');

const dateEl = document.getElementById('date');
const monthEl = document.getElementById('month');
const yearEl = document.getElementById('year');

// CALLING
// IIFE
(function () {
  reset();
})();

setInterval(time, 1000);

// FUNCTION
function reset() {
  daysEl.forEach((day) => (day.style.color = SCOLOR));
  amPmEl.forEach((amPm) => (amPm.style.color = SCOLOR));

  const date = new Date();

  setDayAmPm(date.getDay(), date.getHours() < 12);
  setTime(date.getHours(), date.getMinutes(), date.getSeconds());
  setDate();
}

function time() {
  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  const am = hour < 12;
  const day = date.getDay();

  if (hour == 0) {
    reset();
  }

  setTime(hour, min, sec);
  setDayAmPm(day, am);
}

function setDayAmPm(day, am) {
  daysEl[day].style.color = PCOLOR;
  if (am) {
    amPmEl[0].style.color = PCOLOR;
  } else {
    amPmEl[1].style.color = PCOLOR;
  }
}

function setTime(hour, min, sec) {
  hour = hour > 12 ? hour - 12 : hour;
  hour = hour == 0 ? 12 : hour;
  hour = hour < 10 ? '0' + hour : hour;

  min = min < 10 ? '0' + min : min;
  sec = sec < 10 ? '0' + sec : sec;

  hoursEl.innerHTML = hour;
  minutesEl.innerHTML = min;
  secondsEl.innerHTML = sec;
}

function setDate() {
  dateEl.innerHTML = new Date().toLocaleDateString('en-IN', {
    dateStyle: 'medium',
  });
}

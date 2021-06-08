// DATA
let PCOLOR = "#00eeff";
let SCOLOR = "#007399";
let getHour = document.getElementById("hr");
let getMin = document.getElementById("min");
let getSec = document.getElementById("sec");

let getAmPm = document.querySelectorAll(".am-pm span");
let getDays = document.querySelectorAll(".days li");

let getDate = document.getElementById("date");
let getMonth = document.getElementById("month");
let getYear = document.getElementById("year");

// CALLING
// IIFE
let intially = (function() {
    reset();
}());

setInterval(time, 1000);


// FUNCTION
function reset() {
    getDays.forEach(day => day.style.color = SCOLOR);
    getAmPm.forEach(amPm => amPm.style.color = SCOLOR);

    let date = new Date();
    setDayAmPm(date.getDay(), date.getHours() < 12);
    setTime(date.getHours(), date.getMinutes(), date.getSeconds());
    setDate(date.getDate(), date.getMonth() + 1, date.getFullYear());
}

function time() {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec =  date.getSeconds();
    let am = (hour < 12);
    let day = date.getDay();

    if(hour == 0) {
        reset();
    }

    setTime(hour, min, sec);
}

function setDayAmPm(day, am) {
    getDays[day].style.color = PCOLOR;
    if(am) {
        getAmPm[0].style.color = PCOLOR;
    } else {
        getAmPm[1].style.color = PCOLOR;
    }
} 

function setTime(hour, min, sec) {
    hour = hour > 12 ? hour - 12 : hour;
    hour = hour == 0 ? 12 : hour;
    hour = hour < 10 ? "0" + hour : hour;
    
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    getHour.innerHTML = hour;
    getMin.innerHTML = min;
    getSec.innerHTML = sec;
}

function setDate(date, month, year) {
    date = date > 12 ? date - 12 : date;
    date = date < 10 ? "0" + date : date;
    month = month < 10 ? "0" + month : month;

    getDate.innerHTML = date;
    getMonth.innerHTML = month;
    getYear.innerHTML = year;
}
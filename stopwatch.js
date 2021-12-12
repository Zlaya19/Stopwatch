//  single digits
let seconds = 0;
let minutes = 0;
let hours = 0;

//  double digits
let dblDigitSeconds = 0;
let dblDigitMinutes = 0;
let dblDigitHours = 0;

let statusStopWatch = true;
let interval = 0;

//  start, stop & reset buttons
const start = document.getElementById("btn1");
const stop = document.getElementById("btn2");
const reset = document.getElementById("btn3");

//  If statusStopWatch is false, the interval function is executed. if true, nothing happens
start.addEventListener("click", function () {
  if (statusStopWatch === true) {
    interval = setInterval(stopWatch, 100);
    statusStopWatch = false;
  }
});

function stopWatch() {
  seconds++;
//  After every 60 seconds, minutes goes +1
  if (seconds / 60 === 1) {
    minutes++;
    seconds = 0;
  }
//  After every 60 minutes, hours goes +1
  if (seconds / 60 === 1) {
    hours++;
    minutes = 0;
  }

//  Append 0 next to the seconds variable if seconds are < 10. Otherwise write only seconds
  if (seconds < 10) {
    dblDigitSeconds = "0" + seconds.toString();
  } else {
    dblDigitSeconds = seconds;
  }
//  Append 0 next to the minutes variable if minutes are < 10. Otherwise write only minutes
  if (minutes < 10) {
    dblDigitMinutes = "0" + minutes.toString();
  } else {
    dblDigitMinutes = minutes;
  }
//  Append 0 next to the hours variable if hours are < 10. Otherwise write only hours
  if (hours < 10) {
    dblDigitHours = "0" + hours.toString();
  } else {
    dblDigitHours = hours;
  }

//  Paused the interval
  stop.addEventListener("click", pauseInterval);

  function pauseInterval() {
    interval = clearInterval(interval);
    statusStopWatch = true;
  }

//  Sets all numbers to 0 (reset)
  reset.addEventListener("click", function () {
    interval = clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    output.innerHTML =
      "<h4>" +
      "0" +
      hours +
      ":" +
      "0" +
      minutes +
      ":" +
      "0" +
      seconds +
      "</h4>";
  });

//  output code
  const output = document.getElementById("output");
  output.innerHTML =
    "<h4>" +
    dblDigitHours +
    ":" +
    dblDigitMinutes +
    ":" +
    dblDigitSeconds +
    "</h4>";
}

const clock = document.querySelector("h2#clock");
const btnChangeTimeFormat = document.querySelector(".btnChangeTimeFormat")
let isTwentyFour = true;

function getClock() {
  const date = new Date();
  let hours;
  let minutes;
  let seconds;
  let unit;

  if (isTwentyFour == true) {
    hours = String(date.getHours()).padStart(2, "0");
    minutes = String(date.getMinutes()).padStart(2, "0");
    seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
  } else {
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    unit = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    clock.innerText = `${hours}:${minutes} ${unit}`;
  }
  
}

getClock();
setInterval(getClock, 1000);

function chnageFormat () {
  isTwentyFour = !isTwentyFour;
}

btnChangeTimeFormat.addEventListener("click", chnageFormat)
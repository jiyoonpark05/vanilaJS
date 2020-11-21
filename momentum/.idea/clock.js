const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1"),
  dayContainer = document.querySelector(".js-quote"),
  todayIs = dayContainer.querySelector("div");

function getTime() {
  const week = new Array(
    "Sunday",
    "Monday",
    "Tuesday",
    "Wdnesday",
    "Tursday",
    "Friday",
    "Saturday"
  );
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  const today = week[date.getDay()];

  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
  todayIs.innerText = `Inspiring ${today} Quotes 👻`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();

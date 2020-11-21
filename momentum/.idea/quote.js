const url = "https://api.adviceslip.com/advice";
function getRandomAdvice() {
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      //  alert(json.slip.advice);
      document.getElementById("quote").innerHTML = json.slip.advice;
    });
}

setInterval(getRandomAdvice, 10000);

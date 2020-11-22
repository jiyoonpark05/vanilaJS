const msgEl = document.getElementById("msg");
const randomNum = getRandomNumber();

console.log("number:", randomNum);

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new window.SpeechRecognition();

//start recognition and game
recognition.start();

//capture user speak
function onSpeak(e) {
  const msg = e.results[0][0].transcript;

  writeMessage(msg);
  checkNumber(msg);
}

// Write what user speaks
function writeMessage(msg) {
  msgEl.innerHTML = `
      <div>You said: </div>
      <span class="box">${msg}</span>
    `;
}

//check msg against number
function checkNumber(msg) {
  const num = +msg;
  msgEl.innerHtml += "<div> check</div>";

  console.log(num);

  if (Number.isNaN(num)) {
    msgEl.innerHTML += `<div>${msg} is not a valid number</div>`;
  }

  // Check in range
  if (num > 100 || num < 1) {
    msgEl.innerHTML += "<div>Number must be between 1 and 100</div>";
  }

  //check number
  if (num == randomNum) {
    document.body.innerHTML = `
   <h2>Congrats! you have guessed the number! <br><br>
   It was ${num}</h2>
   <button class="play-again" id="play-again"> play again</button>
   `;
  }
}

//generagte random number
function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

// Speak result
recognition.addEventListener("result", onSpeak);

// End SR service
recognition.addEventListener("end", () => recognition.start());

document.body.addEventListener("click", (e) => {
  if (e.target.id == "play-again") {
    window.location.reload();
  }
});

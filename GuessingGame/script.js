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

  if (Number.isNaN(num)) {
    msgEl.innerHtml += `<div><That is not a valid number</div>`;
    return;
  }
  if (num > 100 || num < 1) {
    msgEl.innerHtml += `<div>Number must be between 1 and 100</div>`;
    return;
  }
  if (num === randomNum) {
    document.body.innerHTML = `
        <h2>Congrates! you have guessed the number<br><br>
        it was ${num}</h2>
        <button class="play-again" id = "play-again">play again</button>
        `;

  } else if (num > randomNum) {
    msgEl.innerHTML += `<div>go lower</div>`;
  } else {
    msgEl.innerHtml += `<div>Go Higher </div>`;
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

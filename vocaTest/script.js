const cardsContainer = document.getElementById("cards-container");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const currentEl = document.getElementById("current");
const showBtn = document.getElementById("show");
const hideBtn = document.getElementById("hide");
const wordEl = document.getElementById("word");
const meaningEl = document.getElementById("meaning");
const addCardBtn = document.getElementById("add-card");
const clearBtn = document.getElementById("clear");
const addContainer = document.getElementById("add-container");
const answerEl = document.getElementById("answer");

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();

//start recognition
recognition.start();

//capture user speak
function onSpeak(e) {
  const answer = e.results[0][0].transcript;

  checkAnswer(answer);
}
function writeAnswer(answer) {
  const correctAnswer = cardsData[currentActiveCard].word;
  answerEl.innerHTML = `
  <div>🚨 wrong 🚨 you said : ${answer}</div>
  <div>😊 right answer is " ${correctAnswer} "</div>
  `;
}
// speak result
recognition.addEventListener("result", onSpeak);

// checkAnswer
function checkAnswer(answer) {
  const yourAnswer = answer;
  const meaning = cardsData[currentActiveCard].word;
  console.log(cardsData);
  console.log(meaning);
  if (yourAnswer == meaning) {
    nextBtn.click();
    recognition.addEventListener("end", () => recognition.start());
  }

  if (yourAnswer != meaning) {
    writeAnswer(answer);
  }
}
// Keep track of current card
let currentActiveCard = 0;

// Store DOM cards
const cardsEl = [];

// Store card data
const cardsData = getCardsData();

// Create all cards
function createCards() {
  cardsData.forEach((data, index) => createCard(data, index));
}

// Create a single card in DOM
function createCard(data, index) {
  const card = document.createElement("div");
  card.classList.add("card");

  if (index === 0) {
    card.classList.add("active");
  }

  card.innerHTML = `
    <div class="inner-card">
    <div class="inner-card-front">
        <p>
        ${data.meaning}
        <br/>
        
        </p>
    </div>
    <div class="inner-card-back">
        <p>
        ${data.word}
        </p>
    </div>
    </div>
  `;

  card.addEventListener("click", () => card.classList.toggle("show-answer"));

  // Add to DOM cards
  cardsEl.push(card);

  cardsContainer.appendChild(card);

  updateCurrentText();
}

// Show number of cards
function updateCurrentText() {
  currentEl.innerText = `${currentActiveCard + 1}/${cardsEl.length}`;
}

// Get cards from local storage
function getCardsData() {
  const cards = JSON.parse(localStorage.getItem("cards"));
  return cards === null ? [] : cards;
}

// Add card to local storage
function setCardsData(cards) {
  localStorage.setItem("cards", JSON.stringify(cards));
  window.location.reload();
}

createCards();

// Event listeners

// Next button
nextBtn.addEventListener("click", () => {
  cardsEl[currentActiveCard].className = "card left";

  currentActiveCard = currentActiveCard + 1;

  if (currentActiveCard > cardsEl.length - 1) {
    currentActiveCard = cardsEl.length - 1;
  }

  cardsEl[currentActiveCard].className = "card active";

  updateCurrentText();
});

// Prev button
prevBtn.addEventListener("click", () => {
  cardsEl[currentActiveCard].className = "card right";

  currentActiveCard = currentActiveCard - 1;

  if (currentActiveCard < 0) {
    currentActiveCard = 0;
  }

  cardsEl[currentActiveCard].className = "card active";

  updateCurrentText();
});

// Show add container
showBtn.addEventListener("click", () => addContainer.classList.add("show"));
// Hide add container
hideBtn.addEventListener("click", () => addContainer.classList.remove("show"));

// Add new card
addCardBtn.addEventListener("click", () => {
  const word = wordEl.value;
  const meaning = meaningEl.value;

  if (word.trim() && meaning.trim()) {
    const newCard = { word, meaning };

    createCard(newCard);

    wordEl.value = "";
    meaningEl.value = "";

    addContainer.classList.remove("show");

    cardsData.push(newCard);
    setCardsData(cardsData);
  }
});

// Clear cards button
clearBtn.addEventListener("click", () => {
  localStorage.clear();
  cardsContainer.innerHTML = "";
  window.location.reload();
});

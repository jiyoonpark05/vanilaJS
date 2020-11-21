const body = document.querySelector("body");
const IMG_NUM = 5;

function painImages(imgNum) {
  const img = new Image();
  img.src = `images/${imgNum + 1}.jpg`;
  img.classList.add("backgroundImg");
  body.appendChild(img);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUM);
  return number;
}

function init() {
  const randomNum = genRandom();
  painImages(randomNum);
}

init();

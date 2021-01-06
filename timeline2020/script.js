

// check element in viewport
function isElementInViewPort(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function callbackFunc() {
  const items = document.querySelectorAll(".timeline li");

  for (var i = 0; i < items.length; i++) {
    if (isElementInViewPort(items[i])) {
      items[i].classList.add("in-view");
    } else {
      items[i].classList.remove("in-view");
    }
  }
}

// store DOM episodes
const episodeEl = [];

// store episode data
const episodeData = getEpisodeData();

// get episodes from local storage
function getEpisodeData() {
  const episodes = JSON.parse(localStorage.getItem("episode"));
  return episodes === null ? [] : episodes;
}

// create chatBoxes
function createBoxes() {
  episodeData.forEach((data) => createChatBox(data));
}

// add episodes to local storage
function setEpisodeData(episodes) {
  localStorage.setItem("episode", JSON.stringify(episodes));
  window.location.reload;
}

createBoxes();

// episode popup
function openPopup() {
  const popupSize = {
    width: 583,
    height: 366,
  };
  const left = screen.width / 2 - popupSize.width / 2;
  const top = screen.height / 2 - popupSize.height / 2;

  window.open(
    "popup.html",
    "popup-test",
    "width=" +
      popupSize.width +
      ", height=" +
      popupSize.height +
      ", left=" +
      left +
      ", top=" +
      top
  );
}

// close popup
function closePopup() {
  window.close();
}

// episode 등록
function createChatBox(data) {
  const chatBoxContainer = document.getElementById("chatBox-container");
  const chatBox = document.createElement("li");

  chatBox.classList.add("in-view");

  chatBox.innerHTML = `
  <div>
    <time>2020년 ${data.time}월</time>
    <content>${data.episode}</content>
  </div>
   `;

  //  Add to Dom episodes
  episodeEl.push(chatBox);

  chatBoxContainer.appendChild(chatBox);
}

// new episode
function addEpisode() {
  const time = document.getElementById("month").value;
  const episode = document.getElementById("epiosode").value;
  const newEpisode = { time, episode };
  const oldEpisode = JSON.parse(localStorage.getItem("episode"));

  console.log(oldEpisode);
  console.log(JSON.stringify(newEpisode))

    episodeData.push(newEpisode);
    setEpisodeData(episodeData);

    window.close();
    opener.parent.location.reload();


}

window.addEventListener("load", callbackFunc);
window.addEventListener("resize", callbackFunc);
window.addEventListener("scroll", callbackFunc);

const items = document.querySelectorAll(".timeline li");

// element가 viewport 안에 있는지 확인
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
  for (var i = 0; i < items.length; i++) {
    if (isElementInViewPort(items[i])) {
      items[i].classList.add("in-view");
    }
  }
}

// more episode 등록 팝업
function showPopup() {
  window.open("popup.html", "more_episode", "width = 558px, height = 466");
}
// close popup
function closePopup() {
  window.close();
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

// add episodes to local storage
function setEpisodeData(episodes) {
  localStorage.setItem("episode", JSON.stringify(episodes));
  window.location.reload;
}

// episode 등록
function newChatBox(data) {
  console.log(data.episode);
  const chatBoxContainer = document.getElementById("chatBox-container");
  const chatBox = document.createElement("li");
  //   chatBox.classList.add("chatBox");

  chatBox.innerHTML = `
    <li>
        <div>
            <time>${data.time}</time>
            <content>${data.episode}</content>
        </div>
    </li>
  `;

  //   Add to Dom episodes
  episodeEl.push(chatBox);

  chatBoxContainer.appendChild(chatBox);
}

// new episode
function addEpisode() {
  const time = document.getElementById("time").value;
  const episode = document.getElementById("epiosode").value;
  const newEpisode = { time, episode };

  newChatBox(newEpisode);

  episodeData.push(newEpisode);
  setEpisodeData(episodeData);
  window.close();
}
window.addEventListener("load", callbackFunc);
window.addEventListener("resize", callbackFunc);
window.addEventListener("scroll", callbackFunc);

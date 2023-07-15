document.querySelector(".player__start-pause").onclick = playPause;
document.querySelector(".player__poster-play").onclick = playPoster;
document.querySelector(".player__volume").onclick = volumeMuted;
document.querySelector("#volume").oninput = volume;

let video = document.querySelector("#video-player");
let progress = document.querySelector("#progress");

video.ontimeupdate = progressUpdate;
progress.onclick = videoRewind;

function playPoster(e) {
  const btn = e.target;

  video.play();
  btn.closest(".player__poster-play").classList.add("none");
}

function playPause(e) {
  const btn = e.target;

  if (btn.classList.contains("paused")) {
    video.pause();
    btn.classList.remove("paused");
  } else {
    video.play();
    btn.classList.add("paused");
  }
}

function volumeMuted(e) {
  const v = e.target;

  if (v.classList.contains("active")) {
    video.muted = true;
    v.classList.remove("active");
  } else {
    video.muted = false;
    v.classList.add("active");
  }
}

function volume() {
  let volume = this.value;
  video.volume = volume / 100;
}

function progressUpdate() {
  let duration = video.duration; //продолжительность
  let currentTime = video.currentTime; //текущее время

  progress.value = (100 * currentTime) / duration;
  document.querySelector(".player__duration-completed").innerHTML = formatTime(
    video.currentTime
  );
  document.querySelector(".player__duration-estimate").innerHTML = formatTime(
    video.duration
  );
}

function formatTime(formatTimeSec) {
  const roundTime = Math.round(formatTimeSec);
  const minutes = Math.floor(roundTime / 60);
  const seconds = roundTime - minutes * 60;

  const formattedSec = seconds < 10 ? `0${seconds} : ` : seconds;
  return `${minutes}:${formattedSec}`;
}

function videoRewind() {
  let width = this.offsetWidth; //ширина кликнутого объекта
  let currentClick = event.offsetX; // текущий клик

  this.value = (100 * currentClick) / width;
  video.pause();
  video.currentTime = video.duration * (currentClick / width);
  video.play();
}

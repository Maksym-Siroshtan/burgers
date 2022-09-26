let player;

const formatTime = (formatTimeSec) => {
  const roundTime = Math.round(formatTimeSec);

  const minutes = Math.floor(roundTime / 60);
  const seconds = roundTime - minutes * 60;

  const formattedSec = seconds < 10 ? `0${seconds} : ` : seconds;
  return `${minutes}:${formattedSec}`;
};

const onPlayerReady = () => {
  let interval;
  let durationSec = player.getDuration();

  $(".player__duration-estimate").text(formatTime(durationSec));

  if (interval !== "undefined") {
    clearInterval(interval);
  }

  setInterval(() => {
    const completeSec = player.getCurrentTime();
    const completePersent = (completeSec / durationSec) * 100;
    $(".player__duration-completed").text(formatTime(completeSec));

    $(".player__playback-button").css({
      left: `${completePersent}%`,
    });
  }, 1000);
};

const eventsInit = () => {
  $(".player__start").on("click", (e) => {
    e.preventDefault();

    const btn = $(e.currentTarget);

    if (btn.hasClass("paused")) {
      player.pauseVideo();
    } else {
      player.playVideo();
    }
  });

  $(".player__playback").on("click", (e) => {
    const progressBar = $(e.currentTarget);
    const newPositionBar = e.pageX - progressBar.offset().left;
    const positionBarPercent = (newPositionBar / progressBar.width()) * 100;
    const newPlayerTimeSec = (player.getDuration() / 100) * positionBarPercent;

    $(".player__playback-button").css({
      left: `${positionBarPercent}%`,
    });

    player.seekTo(newPlayerTimeSec);
  });

  $(".player__splash").on("click", () => {
    player.playVideo();
  });

  $(".player__volume").on("click", function (e) {
    const volume = $(e.currentTarget);

    if (volume.hasClass("active")) {
      player.mute();
      volume.removeClass("active");
    } else {
      player.unMute();
      volume.addClass("active");
    }
  });

  /*$("#volume").on("input", function () {
    const v = this.value;
    console.log(v);
  });*/
};

const onPlayerStateChange = (event) => {
  const playerButton = $(".player__start");
  /*Возвращает состояние проигрывателя. Возможные значения:
  -1 – воспроизведение видео не началось
  0 – воспроизведение видео завершено
  1 – воспроизведение
  2 – пауза
  3 – буферизация
  5 – видео находится в очереди*/

  switch (event.data) {
    case 1:
      $(".player__splash").addClass("active");
      playerButton.addClass("paused");
      break;
  }

  switch (event.data) {
    case 2:
      playerButton.removeClass("paused");
      break;
  }

  switch (event.data) {
    case 0:
      $(".player__splash").removeClass("active");
      break;
  }
};

function onYouTubeIframeAPIReady() {
  player = new YT.Player("myPlayer", {
    videoId: "mOOClonYKmc",
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },

    playerVars: {
      autoplay: 0,
      controls: 0,
      disablekb: 0,
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
    },
  });
}

eventsInit();

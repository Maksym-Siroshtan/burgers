export function player() {
  let player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player("myPlayer", {
      height: "360",
      width: "640",
      videoId: "B4hXrYHFomY",
      events: {
        //onReady: onPlayerReady,
        //onStateChange: onPlayerStateChange,
      },
    });
  }
  console.log("Неработает, не знаю почему!");
}

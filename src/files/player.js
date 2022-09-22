let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("myPlayer", {
    height: "360",
    width: "640",
    videoId: "mOOClonYKmc",
    events: {
      //onReady: onPlayerReady,
      //onStateChange: onPlayerStateChange,
    },
  });
}

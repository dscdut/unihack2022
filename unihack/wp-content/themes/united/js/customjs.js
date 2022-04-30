anime.timeline({loop: false})
  .add({
    targets: '.ml15 .word',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 1500,
    delay: (el, i) => 800 * i
  }).add({
    targets: '.ml15',
    opacity: 0,
    duration: 1500,
    easing: "easeOutExpo",
    delay: 1000
  });

  var video = document.getElementById("video_background");
  video.addEventListener("canplay", function() {
    setTimeout(function() {
    video.style.display = "block";
      video.play();
    }, 4000);
  });
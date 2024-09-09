window.addEventListener("load", function() {
  if (window.location.hash) {
    window.history.replaceState(null, null, window.location.pathname);
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const video = document.querySelector("video");
  video.playbackRate = 1.75;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        video.play();
      } else {
        video.pause();
      }
    });
  });
  observer.observe(video);
});
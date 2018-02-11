const heartbeat = document.querySelector("audio");
const heart1 = document.querySelector(".heart1");
const heart2 = document.querySelector(".heart2");
document.onclick = function() {
  heartbeat.play();
  heart1.classList = "heart1 enlarge1";
  heart2.classList = "heart2 enlarge2";
  setTimeout(function() {
    heart1.classList = "heart1";
    heart2.classList = "heart2";
  }, 600);
};

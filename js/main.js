const heartbeat = document.querySelector("audio");
const heart1 = document.querySelector(".heart1");
const heart2 = document.querySelector(".heart2");

let current = Date.now();
let newBeat;

function reset_animation() {
  var el = document.getElementById("enlarge1");
  el.style.animation = "none";
  el.offsetHeight; /* trigger reflow */
  el.style.animation = null;
}

// $("body").on("click", function() {
//   if (!heartbeat.paused || heartbeat.currentTime){
//     heartbeat.load();
//   }
//   $(".animated").removeClass("animated");
//   heart1.style.transition = "none"
//   heartbeat.play();
//   $(this).addClass("animate");
// });

// $("body").on("webkitAnimationEnd oanimationend msAnimationEnd animationend", function() {
//   $(this).removeClass("animate");
// });

$(function() {
  // Shorthand for $( document ).ready()
  $("body").click(function(e) {
    e.preventDefault();

    if ($(".animate").length == 0) {
      current = newBeat || current;
      newBeat = Date.now();

      var seconds = (newBeat - current) / 1000;

      var test = 60 / seconds;

      $(".bpm-counter").text(Math.floor(test) + " BPM");

      if (!heartbeat.paused || heartbeat.currentTime) {
        heartbeat.load();
      }

      heartbeat.playbackRate = 1.5;
      heartbeat.play();
    }

    $(this)
      .addClass("animate")
      .one(
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
        function() {
          $(this).removeClass("animate");
        }
      );
  });
});

// function beatCounter() {
//   window.requestAnimationFrame(beatCounter);

//   const oldText = $(".bpm-counter").text().trim();
//   const getNum = oldText.split(" ")[0];
//   const getNumToInt = parseInt(getNum);

//   $(".bpm-counter").text(`${getNumToInt + 1} BPM`);
// }

// window.requestAnimationFrame(beatCounter);

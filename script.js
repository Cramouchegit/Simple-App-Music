const audio = document.getElementById("audio");
const playButton = document.getElementById("play_pause");

playButton.addEventListener("click", () => {
  const isPause = audio.paused;

  if (isPause) {
    audio.play();
  } else {
    audio.pause();
  }
});

audio.addEventListener("durationchange", (e) => {
  document.getElementById("total_duration").innerText = formatTime(
    e.target.duration
  );
});

audio.addEventListener("timeupdate", (e) => {
  document.getElementById("current_duration").innerText = formatTime(
    e.target.currentTime
  );

  const progress = (e.target.currentTime / e.target.duration) * 100;

  document
    .querySelector(".progress .bar")
    .style.setProperty("--progress-length", `${progress}%`);
});

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60);

  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
}

audio.addEventListener("play", () => {
  document.querySelector("#play_pause .ph-play").classList.add("hidden");
  document.querySelector("#play_pause .ph-pause").classList.remove("hidden");
  document.querySelector(".player .album").classList.add("berputar");
  document.querySelector(".player .album").classList.remove("pause");
});

audio.addEventListener("pause", () => {
  document.querySelector("#play_pause .ph-play").classList.remove("hidden");
  document.querySelector("#play_pause .ph-pause").classList.add("hidden");
  document.querySelector(".player .album").classList.add("pause");
});

//Navbar
const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());

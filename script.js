const clickSound = new Audio("./assets/audio/click-suond.mp3");

const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    clickSound.currentTime = 0;
    clickSound.play();
  });
});

const music = new Audio("./assets/audio/minecraft-mod.mp3");

const btnAudio = document.querySelector(".btn.btn--audio");

btnAudio.addEventListener("click", () => {
  music.paused ? music.play() : music.pause();
});

const btnNewGame = document.querySelector(".btn.btn--new-game");

btnNewGame.addEventListener("click", () => {
  window.location.href = "minecraft.html";
});

const minecraftTitle = document.querySelector(".title--minecraft");

minecraftTitle.addEventListener("click", () => {
  minecraftTitle.textContent = "Mein Kampf";
});

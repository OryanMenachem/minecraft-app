
























































































const clickSound = new Audio("./assets/audio/click-suond.mp3");

const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    clickSound.currentTime = 0;
    clickSound.play();
  });
});

const music = new Audio("./assets/audio/minecraft-mod.mp3");
music.loop = true;

window.addEventListener(
  "click",
  () => {
    music.play();
  },
  { once: true }
);

const btnNewGame = document.querySelector(".btn.btn--new-game");

btnNewGame.addEventListener("click", () => {
  window.location.href = "minecraft.html";
});

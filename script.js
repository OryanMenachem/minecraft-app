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

const btnAudio = document.querySelector(".btn--audio");
const btnIcon = document.querySelector(".btn-icon");

btnAudio.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    btnIcon.src = "./assets/icons/volume-on.svg";
  } else {
    music.pause();
    btnIcon.src = "./assets/icons/volume-off.svg";
  }
});

const btnNewGame = document.querySelector(".btn.btn--new-game");

btnNewGame.addEventListener("click", (e) => {
  e.preventDefault();
  clickSound.currentTime = 0;
  clickSound.play();

  clickSound.onended = () => {
    window.location.href = "minecraft.html";
  };
});

const minecraftTitle = document.querySelector(".title--minecraft");

minecraftTitle.addEventListener("click", () => {
  minecraftTitle.textContent = "Mein Kampf";
});

const main = document.querySelector(".main.main--minecraft");

for (let i = 0; i < 3000; i++) {
  const div = document.createElement("div");
  div.classList.add("div", "div--tile");
  if (i <= 1199) {
    div.classList.add("sky");
  } else if (i >= 1200 && i <= 1299) {
    div.classList.add("grass");
  } else if (i >= 1300 && i <= 1799) {
    div.classList.add("dirt");
  } else if (i >= 1800 && i <= 2799) {
    div.classList.add("soil");
  } else if (i >= 2800 && i <= 2999) {
    div.classList.add("rock");
  }
  main.appendChild(div);
}

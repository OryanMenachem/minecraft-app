const main = document.querySelector(".main.main--minecraft");
const tools = document.querySelector("#Tool-and-tile-stack");
let selectedTool = "";

const toolCursors = {
  "hand-axe": "./images/hand-axe.png",
  "garden-hoe": "./images/garden-hoe.png",
  "garden-shovel": "./images/garden-shovel.png",
  "garden-shears": "./images/garden-shears.png"
};

const items = document.querySelectorAll("#Tool-and-tile-stack .item");

function setCursor(toolId) {
  if(toolCursors[toolId]) {
    document.body.style.cursor = `url("${toolCursors[toolId]}") 16 16, auto`;
  } else {
    document.body.style.cursor = "auto";
  }
}

items.forEach(item => {
  item.addEventListener("click", () => {
    setCursor(item.id);
  });
});



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

tools.addEventListener("click", (e) => {
  selectedTool = e.target.id;
});

main.addEventListener("click", (e) => {
  if (selectedTool === "garden-hoe" && e.target.classList.contains("soil")) {
    e.target.classList.replace("soil", "sky");
  }

  if (selectedTool === "hand-axe" && e.target.classList.contains("trunk")) {
    e.target.classList.replace("trunk", "sky");
  }

  if (selectedTool === "garden-shovel") {
    if (e.target.classList.contains("dirt")) {
      e.target.classList.replace("dirt", "sky");
    } else if (e.target.classList.contains("grass")) {
      e.target.classList.replace("grass", "sky");
    }
  }
});
  if (
    selectedTool === "garden-shears" &&
    e.target.classList.contains("Leaves")
  ) {
    e.target.classList.replace("Leaves", "sky");
  }

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

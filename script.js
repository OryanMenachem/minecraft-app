// --- Variables ---
const clickSound = new Audio("./assets/audio/click-suond.mp3");
const music = new Audio("./assets/audio/minecraft-mod.mp3");
music.loop = true;

const btnAudio = document.querySelector(".btn--audio");
const btnIcon = document.querySelector(".btn-icon");
const btnNewGame = document.querySelector(".btn.btn--new-game");
const buttons = document.querySelectorAll("button");
const minecraftTitle = document.querySelector(".title--minecraft");

// --- Play click sound on all buttons ---
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    clickSound.currentTime = 0;
    clickSound.play();
  });
});

// --- Audio toggle ---
if (btnAudio && btnIcon) {
  btnAudio.addEventListener("click", () => {
    if (music.paused) {
      music.play();
      btnIcon.src = "./assets/icons/volume-on.svg";
    } else {
      music.pause();
      btnIcon.src = "./assets/icons/volume-off.svg";
    }
  });
}

// --- New Game button ---
if (btnNewGame) {
  btnNewGame.addEventListener("click", (e) => {
    e.preventDefault();
    clickSound.currentTime = 0;
    clickSound.play();

    clickSound.onended = () => {
      window.location.href = "minecraft.html";
    };
  });
}

// --- Minecraft title click ---
if (minecraftTitle) {
  minecraftTitle.addEventListener("click", () => {
    minecraftTitle.textContent = "Mein Kampf";
  });
}

// --- Minecraft world and tools (only on minecraft.html) ---
const main = document.querySelector(".main.main--minecraft");
const tools = document.querySelector("#Tool-and-tile-stack");

// if (main && tools) {
let selectedTool = "";

// Select tool from inventory
tools.addEventListener("click", (e) => {
  selectedTool = e.target.id;
});

// Create world tiles
for (let i = 0; i < 3000; i++) {
  const div = document.createElement("div");
  div.classList.add("div", "div--tile");

  if (i <= 1199) div.classList.add("sky");
  else if (i <= 1299) div.classList.add("grass");
  else if (i <= 1799) div.classList.add("dirt");
  else if (i <= 2799) div.classList.add("soil");
  else div.classList.add("rock");

  main.appendChild(div);
}

// Handle clicks on the world
main.addEventListener("click", (e) => {
  if (selectedTool === "garden-hoe" && e.target.classList.contains("soil")) {
    e.target.classList.replace("soil", "sky");
  }

  if (selectedTool === "hand-axe" && e.target.classList.contains("trunk")) {
    e.target.classList.replace("trunk", "sky");
  }

  if (selectedTool === "garden-shovel") {
    if (e.target.classList.contains("dirt"))
      e.target.classList.replace("dirt", "sky");
    else if (e.target.classList.contains("grass"))
      e.target.classList.replace("grass", "sky");
  }

  if (
    selectedTool === "garden-shears" &&
    e.target.classList.contains("Leaves")
  ) {
    e.target.classList.replace("Leaves", "sky");
  }
});

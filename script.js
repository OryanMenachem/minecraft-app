const main = document.querySelector(".main.main--minecraft");
const tools = document.querySelector("#Tool-and-tile-stack");
let selectedTool = "";

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

// this object for save the count of tile by key
const listOfTile = {
  soil: 0,
  dirt: 0,
  grass: 0,
  trunk: 0,
  Leaves: 0
}

// verbolis for 5 type tile
const soilTileEl = document.getElementById("soil-tile");
const dirtTileEl = document.getElementById("dirt-tile");
const grassTileEl = document.getElementById("grass-tile");
const trunkTileEl = document.getElementById("trunk-tile");
const leavesTileEl = document.getElementById("Leaves-tile");

// this is for sowe if i have tile to bilud
soilTileEl.style.display = listOfTile.soil === 0 ? "none" : "block";
dirtTileEl.style.display = listOfTile.dirt === 0 ? "none" : "block";
grassTileEl.style.display = listOfTile.grass === 0 ? "none" : "block";
trunkTileEl.style.display = listOfTile.trunk === 0 ? "none" : "block";
leavesTileEl.style.display = listOfTile.Leaves === 0 ? "none" : "block";

// this line for change tile from sky to selected toollet selectedTool = "dirt";
const tile = document.querySelector(".tile")
let selectedTile = ""

// tihs line for check if selectedTile empty
tile.addEventListener("click", (e) => {
  const el = e.target.closest(".item");
  if (!el) return;
  selectedTile = el.id.replace("-tile", "");
  console.log("selectedTile:", selectedTile);
});

// this line select tile and chenge the class by click
main.addEventListener("click", (e) => {
  if (e.target.classList[2] === "sky") {
    if (listOfTile[selectedTile] > 0) {
      e.target.classList.replace("sky", selectedTile)
      listOfTile[selectedTile] -= 1
      // 
      if (selectedTile === "soil") document.querySelector("#soil-tile .count").textContent = listOfTile.soil;
      if (selectedTile === "dirt") document.querySelector("#dirt-tile .count").textContent = listOfTile.dirt;
      if (selectedTile === "grass") document.querySelector("#grass-tile .count").textContent = listOfTile.grass;
      if (selectedTile === "trunk") document.querySelector("#trunk-tile .count").textContent = listOfTile.trunk;
      if (selectedTile === "Leaves") document.querySelector("#Leaves-tile .count").textContent = listOfTile.Leaves;

      // 
      if (selectedTile === "soil") soilTileEl.style.display = listOfTile.soil === 0 ? "none" : "block";
      if (selectedTile === "dirt") dirtTileEl.style.display = listOfTile.dirt === 0 ? "none" : "block";
      if (selectedTile === "grass") grassTileEl.style.display = listOfTile.grass === 0 ? "none" : "block";
      if (selectedTile === "trunk") trunkTileEl.style.display = listOfTile.trunk === 0 ? "none" : "block";
      if (selectedTile === "Leaves") leavesTileEl.style.display = listOfTile.Leaves === 0 ? "none" : "block";
    }
  }
})

tools.addEventListener("click", (e) => {
  selectedTool = e.target.id;
});

main.addEventListener("click", (e) => {
  if (selectedTool === "garden-hoe" && e.target.classList.contains("soil")) {
    e.target.classList.replace("soil", "sky");
    listOfTile.soil += 1;
    soilTileEl.style.display = listOfTile.soil === 0 ? "none" : "block";
    document.querySelector("#soil-tile .count").textContent = listOfTile.soil;

  }

  if (selectedTool === "hand-axe" && e.target.classList.contains("trunk")) {
    e.target.classList.replace("trunk", "sky");
    listOfTile.trunk += 1;
    trunkTileEl.style.display = listOfTile.trunk === 0 ? "none" : "block";
    document.querySelector("#trunk-tile .count").textContent = listOfTile.trunk;

  }

  if (selectedTool === "garden-shovel") {
    if (e.target.classList.contains("dirt")) {
      e.target.classList.replace("dirt", "sky");
      listOfTile.dirt += 1;
      dirtTileEl.style.display = listOfTile.dirt === 0 ? "none" : "block";
      document.querySelector("#dirt-tile .count").textContent = listOfTile.dirt;

    } else if (e.target.classList.contains("grass")) {
      e.target.classList.replace("grass", "sky");
      listOfTile.grass += 1;
      grassTileEl.style.display = listOfTile.grass === 0 ? "none" : "block";
      document.querySelector("#grass-tile .count").textContent = listOfTile.grass;

    }
  }
});

if (
  selectedTool === "garden-shears" &&
  e.target.classList.contains("Leaves")
) {
  e.target.classList.replace("Leaves", "sky");
  listOfTile.Leaves += 1;
  leavesTileEl.style.display = listOfTile.Leaves === 0 ? "none" : "block";
  document.querySelector("#Leaves-tile .count").textContent = listOfTile.Leaves;

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

})
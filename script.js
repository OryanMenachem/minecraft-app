// --- Variables ---
const clickSound = new Audio("./assets/audio/click-suond.mp3");
const minecraftMelody = new Audio("./assets/audio/minecraft-mod.mp3");
const hitlerSpeech = new Audio("./assets/audio/Hitler-Speech.mp3");
minecraftMelody.loop = true;

const btnAudio = document.querySelector(".btn--audio");
const btnIcon = document.querySelector(".btn-icon");
const btnNewGame = document.querySelector(".btn.btn--new-game");
const buttons = document.querySelectorAll("button");
const minecraftTitle = document.querySelector(".title--minecraft");
const germansUI = document.querySelector(".btn--germans");
const indexPage = document.querySelector(".page--index");
const main = document.querySelector(".main.main--minecraft");

// --- Play click sound on all buttons ---
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    clickSound.currentTime = 0;
    clickSound
      .play()
      .catch((error) => console.error("Failed to play click sound:", error));
  });
});

// --- Audio toggle ---
if (btnAudio && btnIcon) {
  btnAudio.addEventListener("click", () => {
    if (minecraftMelody.paused) {
      minecraftMelody
        .play()
        .catch((error) => console.error("Failed to play melody:", error));
      btnIcon.src = "./assets/icons/volume-on.svg";
    } else {
      minecraftMelody.pause();
      btnIcon.src = "./assets/icons/volume-off.svg";
    }
  });
}

// --- New Game button ---
if (btnNewGame) {
  btnNewGame.addEventListener("click", (e) => {
    e.preventDefault();
    clickSound.currentTime = 0;
    clickSound.play().catch((error) => {
      console.error("Failed to play click sound:", error);
      window.location.href = "minecraft.html";
    });
    setTimeout(() => {
      window.location.href = "minecraft.html";
    }, 100);
  });
}

// --- Germans UI click ---
if (germansUI && minecraftTitle && indexPage) {
  const originalText = minecraftTitle.textContent;
  const originalImg = indexPage.style.background;
  germansUI.addEventListener("click", () => {
    const isActive = germansUI.classList.toggle("is-playing");

    if (isActive) {
      hitlerSpeech.currentTime = 0;
      hitlerSpeech
        .play()
        .catch((error) => console.error("Failed to play speech:", error));
      indexPage.style.background =
        'url("./assets/images/Hitler.jpeg") no-repeat center center';
      indexPage.style.backgroundSize = "cover";
      minecraftTitle.textContent = "Mein Kampf";
    } else {
      hitlerSpeech.pause();
      hitlerSpeech.currentTime = 0;
      minecraftTitle.textContent = originalText;
      indexPage.style.background = originalImg;
    }
  });
}

// --- Minecraft world and tools (only on minecraft.html) ---
if (main) {
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
} else {
  console.error("Main element with class 'main main--minecraft' not found.");
}

// const tools = document.querySelector("#Tool-and-tile-stack");

// if (main && tools) {
//   let selectedTool = "";

//   // Select tool from inventory
//   tools.addEventListener("click", (e) => {
//     selectedTool = e.target.id;
//   });
//   // Handle clicks on the world
//   main.addEventListener("click", (e) => {
//     if (selectedTool === "garden-hoe" && e.target.classList.contains("soil")) {
//       e.target.classList.replace("soil", "sky");
//     }

//     if (selectedTool === "hand-axe" && e.target.classList.contains("trunk")) {
//       e.target.classList.replace("trunk", "sky");
//     }

//     if (selectedTool === "garden-shovel") {
//       if (e.target.classList.contains("dirt"))
//         e.target.classList.replace("dirt", "sky");
//       else if (e.target.classList.contains("grass"))
//         e.target.classList.replace("grass", "sky");
//     }

//     if (
//       selectedTool === "garden-shears" &&
//       e.target.classList.contains("Leaves")
//     ) {
//       e.target.classList.replace("Leaves", "sky");
//     }
//   });
// }

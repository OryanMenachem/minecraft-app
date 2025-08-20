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

  if (
    selectedTool === "garden-shears" &&
    e.target.classList.contains("Leaves")
  ) {
    e.target.classList.replace("Leaves", "sky");
  }
});

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

// this object for save the number of tile
const listOfTile = {
  rock: 2,
  soil: 5,
  dirt: 5,
  grass: 0
}

// this function for change tile from sky to selected toollet selectedTool = "dirt";
let selectedTool = ""
main.addEventListener("click", (e) => {
  if (e.target.classList[2] === "sky") {
    if (listOfTile[selectedTool] > 0) {
      e.target.classList.replace("sky", selectedTool )
      listOfTile[selectedTool] -=1
      console.log(listOfTile[selectedTool] ); 
    }
  }
  else {
    console.log("Not sky!");
    console.log(e.target.classList[2]);
  }
})

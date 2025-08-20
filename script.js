const main = document.querySelector("main");

for (let i = 0; i < 3000; i++) {
  const div = document.createElement("div");
  const p = document.createElement("p");
  div.classList.add("cell");
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

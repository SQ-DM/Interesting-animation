const board = document.querySelector("#board");

const SQUARES_NUMBER = 460;

const colors = [
  "red",
  "orangered",
  "orange",
  "yellow",
  "green",
  "greenyellow",
  "blue",
  "blueviolet",
  "violet",
  "palevioletred",
  "pink",
];

function getRandomColor() {
  const rnd = Math.floor(Math.random() * colors.length);
  return colors[rnd];
}

function setColor(item) {
  const rndColor = getRandomColor();
  item.style.background = rndColor;
  item.style.boxShadow = `0 0 2px ${rndColor}, 0 0 10px ${rndColor}`;
}

function removeColor(item) {
  item.style.background = "rgb(49, 48, 48)";
  item.style.boxShadow = `0 0 2px rgb(49, 48, 48)`;
}

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseleave", () => removeColor(square));

  board.append(square);
}

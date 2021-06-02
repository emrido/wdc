const container = document.querySelector(".container");
const unsplashUrl = "https://source.unsplash.com/random/";
const row = 10;

for (let i = 0; i < row * 3; i++) {
  const element = document.createElement("img");
  element.src = `${unsplashUrl}${getRandomSize()}`;
  container.appendChild(element);
}

function getRandomSize() {
  return `${getRandomNr()}x${getRandomNr()}`;
}

function getRandomNr() {
  return Math.floor(Math.random() * 10) + 300;
}

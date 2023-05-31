import { introCards } from "./introCards.mjs";

document.addEventListener("DOMContentLoaded", function () {
  updateImage();
  updateText();
});

let currentIndex = 0;
let currentCard = introCards[currentIndex];
let imageUrl = `url(./Assets/introImg/${currentCard.image})`;
let text = currentCard.text;

const continueButton = document.getElementById("continue");
continueButton.addEventListener("click", function () {
  handleContinue();
  updateImage();
  updateText();
});

function handleContinue() {
  if (currentIndex < introCards.length - 1) {
    currentIndex++;
    updateCard(currentIndex);
  } else {
    redirectToMenu();
  }
}

function updateCard(index) {
  currentCard = introCards[index];
  imageUrl = `url(./Assets/introImg/${currentCard.image})`;
  text = currentCard.text;
}

function redirectToMenu() {
  window.location.href = "../Menu/menu.html";
}

const imageContainer = document.getElementById("image-container");
function updateImage() {
  imageContainer.style.backgroundImage = imageUrl;
}

const textContainer = document.getElementById("text");
function updateText() {
  textContainer.innerHTML = text;
}

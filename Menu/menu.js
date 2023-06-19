document.addEventListener("DOMContentLoaded", storeDifficulty("easy"));

const instructionsContainer = document.getElementById("instructions-container");
const instructionsButton = document.getElementById("open-instructions");
instructionsButton.addEventListener("click", function () {
  instructionsContainer.style.display = "block";
});

const closeInstructionsButton = document.getElementById("close-instructions");
closeInstructionsButton.addEventListener("click", function () {
  instructionsContainer.style.display = "none";
});

const difficultyContainer = document.getElementById("difficulty-container");
const difficultyButton = document.getElementById("difficulty-selector");
difficultyButton.addEventListener("click", function () {
  if (getComputedStyle(difficultyContainer).display === "none") {
    difficultyContainer.style.display = "flex";
  } else {
    difficultyContainer.style.display = "none";
  }
});

//ToDo: Fix code duplication
const setEasyButton = document.getElementById("easy");
setEasyButton.addEventListener("click", function () {
  storeDifficulty("easy");
});
const setMediumButton = document.getElementById("medium");
setMediumButton.addEventListener("click", function () {
  storeDifficulty("medium");
});
const setHardButton = document.getElementById("hard");
setHardButton.addEventListener("click", function () {
  storeDifficulty("hard");
});

function storeDifficulty(level) {
  localStorage.setItem("difficulty", level);
}

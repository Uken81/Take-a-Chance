const instructionsContainer = document.getElementById("instructions-container");

const instructionsButton = document.getElementById("open-instructions");
instructionsButton.addEventListener("click", function () {
  instructionsContainer.style.display = "block";
});

const closeInstructionsButton = document.getElementById("close-instructions");
closeInstructionsButton.addEventListener("click", function () {
  instructionsContainer.style.display = "none";
});

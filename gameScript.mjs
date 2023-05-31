import { cup1, cup2, cup3 } from "./cups.mjs";
import { checkEndGame } from "./endGame/endGame.js";
import { player } from "./player.mjs";
import { adjustPlayersBank } from "./playersBank.js";

const intsructions = document.getElementById("instructions-container");
document.getElementById("instructions").addEventListener("click", function () {
  intsructions.style.opacity = 10;
  intsructions.style.zIndex = 10;
});

document
  .getElementById("close-instructions")
  .addEventListener("click", function () {
    intsructions.style.opacity = 0;
    intsructions.style.zIndex = 0;
  });

//Select Difficulty.

//display difficulties.
document
  .getElementById("difficulty-selector")
  .addEventListener("click", function () {
    const difficultyLevel = Array.from(
      document.getElementsByClassName("difficulty")
    );

    difficultyLevel.forEach(function (entry) {
      entry.style.opacity = 10;
    });
  });
//sets difficulty level.

document.getElementById("easy").addEventListener("click", function () {
  localStorage.setItem("diff", "easy");
});

document.getElementById("medium").addEventListener("click", function () {
  localStorage.setItem("diff", "med");
});
document.getElementById("hard").addEventListener("click", function () {
  localStorage.setItem("diff", "hard");
});

//Sets difficulty in game page to whatever was selected in intro page.
let level = localStorage.getItem("diff");
let winCondition;
console.log("level: " + level);

switch (level) {
  case "easy":
    winCondition = 80;
    break;
  case "med":
    winCondition = 200;
    break;
  case "hard":
    winCondition = 400;
  default:
    winCondition = 80;
}

document.addEventListener("click", function (event) {
  console.log(event.target);
  console.log(event.target.id);
  if (event.target.matches(".cup-image")) {
    const cupImage = event.target;
    const resultToken = determineToken(event.target.id);
    console.log(resultToken);
    console.log(cupImage);

    runAnimation(cupImage);
    determineIfWinner(resultToken);
    adjustPlayersBank();
    checkEndGame();
  }
});

function determineToken(eventID) {
  if (eventID === "cup1-image") {
    return cup1.resultToken;
  } else if (eventID === "cup2-image") {
    return cup2.resultToken;
  } else if (eventID === "cup3-image") {
    return cup3.resultToken;
  }
}

const allCupElements = document.querySelectorAll(".cups");
function runAnimation(cupElement) {
  cupElement.style.animationName = "liftcup";
  //refactor pointer actions in functions
  allCupElements.forEach(removePointers);
  cupElement.onanimationend = function () {
    cupElement.style.animationName = "";
    // ballPlacement();
    allCupElements.forEach(restorePointers);
  };
}

function determineIfWinner(resultToken) {
  console.log(resultToken);
  if (resultToken === "ball") {
    player.setHasWon(true);
    //delete before commit and below
    const hasWon = player.hasWonRound;
    console.log("winner?", hasWon);
  } else {
    player.setHasWon(false);
    const hasWon = player.hasWonRound;
    console.log("winner?", hasWon);
  }
}

//removes the cup images to display win/lose screen.
function removeCups(element) {
  element.style.display = "none";
}
//prevents cups from being clicked again until animation is finished.
function removePointers(element) {
  element.style.pointerEvents = "none";
}
//allows cups to be clicked again
function restorePointers(element) {
  element.style.pointerEvents = "";
}

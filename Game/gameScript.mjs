import { cup1, cup2, cup3, placeTokens } from "../Game/Common/cups.mjs";
import { checkEndGame } from "../endGame/endGame.js";
import { player } from "./Common/player.mjs";
import { adjustPlayersBank } from "./Components/playersBank.js";

window.addEventListener("load", function () {
  placeTokens();
  console.log("loaded");
});

function isCupImage(event) {
  return event.target.matches(".cup-image");
}

document.addEventListener("click", function (event) {
  if (isCupImage(event)) {
    runGameRound(event);
  }
});

function runGameRound(event) {
  runAnimation(event);
  applyRoundResults(event);
  adjustPlayersBank();
  placeTokens();
  checkEndGame();
}

function runAnimation(event) {
  const allCupImages = document.querySelectorAll(".cups");
  const cupImage = event.target;

  cupImage.style.animationName = "liftcup";
  allCupImages.forEach(removePointers);
  cupImage.onanimationend = function () {
    cupImage.style.animationName = "";
    allCupImages.forEach(restorePointers);
  };
}

function removePointers(element) {
  element.style.pointerEvents = "none";
}

function restorePointers(element) {
  element.style.pointerEvents = "";
}

function applyRoundResults(event) {
  const selectedCupToken = determineToken(event.target.id);
  const isWinner = determineIfWinner(selectedCupToken);

  setWinProperty(isWinner);
  displayResult(isWinner);
}

function determineToken(selectedCupId) {
  if (selectedCupId === "cup1-image") {
    return cup1.resultToken;
  } else if (selectedCupId === "cup2-image") {
    return cup2.resultToken;
  } else if (selectedCupId === "cup3-image") {
    return cup3.resultToken;
  }
}

function determineIfWinner(resultToken) {
  console.log(resultToken);
  if (resultToken === "ball") {
    return true;
  } else {
    return false;
  }
}

function setWinProperty(isWinner) {
  if (isWinner) {
    player.setHasWon(true);
  } else {
    player.setHasWon(false);
  }
}

function displayResult(isWinner) {
  const resultDisplay = document.getElementById("result-display");
  resultDisplay.innerText = isWinner ? "You have won" : "You have lost";
}

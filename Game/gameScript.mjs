import { cup1, cup2, cup3, placeTokens } from "../Game/Common/cups.mjs";
import { checkEndGame } from "../endGame/endGame.js";
import { player } from "./Common/player.mjs";
import { adjustPlayersBank } from "./Components/playersBank.js";

function isCupImage(event) {
  return event.target.matches(".cup-image");
}

document.addEventListener("click", function (event) {
  if (isCupImage(event)) {
    runGameRound(event);
  }
});

function runGameRound(event) {
  placeTokens();
  runAnimation(event);
  applyRoundResults(event);
  adjustPlayersBank();
  checkEndGame();
  console.log("cup1Game", cup1);
  console.log("cup2Game", cup2);
  console.log("cup3Game", cup3);
}

function runAnimation(event) {
  console.log("runAnimation");
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
  console.log("applyRoundResults");
  const selectedCupToken = determineToken(event.target.id);
  const isWinner = determineIfWinner(selectedCupToken);

  setWinProperty(isWinner);
  displayResult(isWinner);
}

function determineToken(selectedCupId) {
  const cup = document.getElementById("selectedCupId");
  console.log("selectedCupId", selectedCupId);
  console.log("token1", cup1.resultToken);
  console.log("token2", cup2.resultToken);
  console.log("token3", cup3.resultToken);
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
  console.log("iswinner", isWinner);
}

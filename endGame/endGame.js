import { player } from "../Game/Common/player.mjs";
import { calculateWinCondition } from "../Game/Common/winCondition.js";

export function checkEndGame() {
  const gameState = checkConditions();
  console.log("gameState", gameState);

  if (gameState === "continue") {
    return;
  }

  redirectEndGame();
}

function redirectEndGame() {
  window.location.replace("../EndGame/endGame.html");
}

function checkConditions() {
  const bank = player.bank;
  const winCondition = calculateWinCondition();
  console.log("winCondition", winCondition);
  if (bank <= 0) {
    return "lose";
  } else if (bank >= winCondition) {
    return "win";
  } else {
    return "continue";
  }
}

//Fires when page is redirected to endGame.html
document.addEventListener("DOMContentLoaded", function () {
  initialiseEndGame();
});

function initialiseEndGame() {
  const gameState = getGameStateFromURL();
  console.log("gameState", gameState);

  if (gameState === "win") {
    displayWinText();
  } else {
    displayLoseText();
  }
  console.log("gameState", gameState);
}

function getGameStateFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("state");
}

function displayWinText() {
  console.log("wintext");
  document.getElementById("result-text").innerHTML =
    "Congratulations!<br>You can now afford your date<br>.....or maybe you should double your money and buy that fancy coffee machine you always wanted.";
}
function displayLoseText() {
  console.log("losetext");
  document.getElementById("result-text").innerHTML =
    "You have lost all your money!<br>You can not afford your rent tomorrow<br>Im sure Cousin Tommy will have room on his couch though<br>.....good luck.";
}

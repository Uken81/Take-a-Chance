import { player } from "../player.mjs";

export function checkEndGame() {
  const gameState = checkConditions();
  console.log("gameState", gameState);

  if (gameState === "continue") {
    return;
  }

  redirectEndGame();
}

function checkConditions() {
  const bank = player.bank;
  if (bank <= 0) {
    return "lose";
    //connect proper win condition
  } else if (bank >= 80) {
    // } else if (bank >= winCondition) {
    return "win";
  } else {
    return "continue";
  }
}

function redirectEndGame() {
  window.location.href = "./endGame/endGame.html";
}

//Fires when page is redirected to endGame.html
document.addEventListener("DOMContentLoaded", function () {
  initializeEndGame();
});

function initializeEndGame() {
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

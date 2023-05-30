import { player } from "./player.mjs";

const bank = player.bank;

export function checkWinLose() {
  const gameState = checkConditions();

  if ((gameState = "continue")) {
    return;
  }

  redirect();
}

function checkConditions() {
  if (bank <= 0) {
    return "lose";
  } else if (bank >= winCondition) {
    return "win";
  } else {
    return "continue";
  }
}

function redirect() {
  if (gameState === "win") {
    window.location.href = "winurl";
  } else {
    window.location.href = "loseurl";
  }
}

// export function checkWinLose = () => {
//     if (playersBank <= 0) {
//       document.getElementById("final-result").innerHTML =
//         "You have lost all your money!<br>You can not afford your rent tomorrow<br>Im sure Tommy will have room on his couch though<br>.....good luck.<br><br><a href='./game.html'>Try Again??</a>";
//       backgroundCity.style.backgroundImage = "url(/losescreen.jpg)";
//       allCupElements.forEach(removeCups);
//     } else if (playersBank >= winCondition) {
//       document.getElementById("final-result").innerHTML =
//         "Congratulations!<br>You can now afford your date<br>.....or maybe you should double your money and buy that fancy coffee machine you always wanted.<br><br><a href='./game.html'>Play Again??</a>";
//       backgroundCity.style.backgroundImage = "url(/winscreen.jpg)";
//       allCupElements.forEach(removeCups);
//     }
//   };

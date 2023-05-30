import { cup1, cup2, cup3 } from "./cups.mjs";
import { player } from "./player.mjs";
import { adjustPlayersBank } from "./playersBank.js";

//Event listeners for intro story progression.
document.addEventListener("DOMContentLoaded", function () {
  if (document.body.id === "intro-page") {
    document
      .getElementById("continue-1")
      .addEventListener("click", function () {
        const story = document.getElementById("story-card-1");
        story.style.zIndex = 0;
      });

    document
      .getElementById("continue-2")
      .addEventListener("click", function () {
        const story = document.getElementById("story-card-2");
        story.style.zIndex = 0;
      });

    document
      .getElementById("continue-3")
      .addEventListener("click", function () {
        const story = document.getElementById("story-card-3");
        story.style.zIndex = 0;
      });

    document
      .getElementById("continue-4")
      .addEventListener("click", function () {
        const story = document.getElementById("story-card-4");
        story.style.zIndex = 0;
      });

    document
      .getElementById("continue-5")
      .addEventListener("click", function () {
        const story = document.getElementById("story-card-5");
        story.style.zIndex = 0;
      });

    document
      .getElementById("continue-6")
      .addEventListener("click", function () {
        const story = document.getElementById("story-card-6");
        story.style.zIndex = 0;
      });

    document
      .getElementById("continue-7")
      .addEventListener("click", function () {
        const story7 = document.getElementById("story-card-7");
        const story = Array.from(
          document.getElementsByClassName("story-cards")
        );
        story7.style.zIndex = 0;
        console.log(story[2]);
        story.forEach(function (entry) {
          entry.style.opacity = 0;
        });

        const intsructions = document.getElementById("instructions-container");
        document
          .getElementById("instructions")
          .addEventListener("click", function () {
            intsructions.style.opacity = 10;
            intsructions.style.zIndex = 10;
          });

        document
          .getElementById("close-instructions")
          .addEventListener("click", function () {
            intsructions.style.opacity = 0;
            intsructions.style.zIndex = 0;
          });
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
  }
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

//Shows initial bet value of $1.
document.getElementById("show-bet").innerHTML = "You bet $" + bet;

//Player enters bet amount and displays it
document.getElementById("enter-bet").addEventListener("click", function () {
  bet = parseInt(document.getElementById("bet").valueAsNumber);
  document.getElementById("show-bet").innerHTML = "You bet $" + bet;
});

//Limits player to bet no more cash than what they have
document.getElementById("bet").addEventListener("blur", function () {
  if (document.getElementById("bet").value > playersBank) {
    document.getElementById("bet").value = playersBank;
  }
});

//Determines final win or loss conditions
const finalResult = () => {
  if (playersBank <= 0) {
    document.getElementById("final-result").innerHTML =
      "You have lost all your money!<br>You can not afford your rent tomorrow<br>Im sure Tommy will have room on his couch though<br>.....good luck.<br><br><a href='./game.html'>Try Again??</a>";
    backgroundCity.style.backgroundImage = "url(/losescreen.jpg)";
    allCupElements.forEach(removeCups);
  } else if (playersBank >= winCondition) {
    document.getElementById("final-result").innerHTML =
      "Congratulations!<br>You can now afford your date<br>.....or maybe you should double your money and buy that fancy coffee machine you always wanted.<br><br><a href='./game.html'>Play Again??</a>";
    backgroundCity.style.backgroundImage = "url(/winscreen.jpg)";
    allCupElements.forEach(removeCups);
  }
};

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

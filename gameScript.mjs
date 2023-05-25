import { cup1 } from "./cups.mjs";

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

//Determine if the guess is correct and displays result.
let playerGuess;
let outcome;
const playerWin = () => {
  //correct Guess
  if (playerGuess === "cup1" && cup1 === "ball") {
    outcome = "win";
    document.getElementById("show-round-result").innerHTML = "You are a Winner";
  } else if (playerGuess === "cup2" && cup2 === "ball") {
    outcome = "win";
    document.getElementById("show-round-result").innerHTML = "You are a Winner";
  } else if (playerGuess === "cup3" && cup3 === "ball") {
    outcome = "win";
    document.getElementById("show-round-result").innerHTML = "You are a Winner";
    //incorrect guess
  } else if (playerGuess === "cup1" && cup1 === "crab") {
    outcome = "lose";
    document.getElementById("show-round-result").innerHTML = "You are a Loser";
  } else if (playerGuess === "cup1" && cup1 === "hobo") {
    outcome = "lose";
    document.getElementById("show-round-result").innerHTML = "You are a Loser";
  } else if (playerGuess === "cup2" && cup2 === "crab") {
    outcome = "lose";
    document.getElementById("show-round-result").innerHTML = "You are a Loser";
  } else if (playerGuess === "cup2" && cup2 === "hobo") {
    outcome = "lose";
    document.getElementById("show-round-result").innerHTML = "You are a Loser";
  } else if (playerGuess === "cup3" && cup3 === "crab") {
    outcome = "lose";
    document.getElementById("show-round-result").innerHTML = "You are a Loser";
  } else if (playerGuess === "cup3" && cup3 === "hobo") {
    outcome = "lose";
    document.getElementById("show-round-result").innerHTML = "You are a Loser";
  }
};

let playerBet = 1;
let playerCash = 40;

//Shows initial bet value of $1.
document.getElementById("show-bet").innerHTML = "You bet $" + playerBet;

//Player enters bet amount and displays it
document.getElementById("enter-bet").addEventListener("click", function () {
  playerBet = parseInt(document.getElementById("bet").valueAsNumber);
  document.getElementById("show-bet").innerHTML = "You bet $" + playerBet;
});

//Limits player to bet no more cash than what they have
document.getElementById("bet").addEventListener("blur", function () {
  if (document.getElementById("bet").value > playerCash) {
    document.getElementById("bet").value = playerCash;
  }
});

// const cup1Background = document.getElementById("cup1-background");
// const cup2Background = document.getElementById("cup2-background");
// const cup3Background = document.getElementById("cup3-background");
// const allCupImages = document.querySelectorAll(".cups");

function assignBackground(url) {}

//Player selects cup, previous functions are called

//cup1
document.getElementById("cup1-image").addEventListener("click", function () {
  playerGuess = "cup1";
  runAnimation(cup1Image);
  playerWin();
  if (outcome === "win") {
    playerCash = playerCash + playerBet;
  } else if (outcome === "lose") {
    playerCash = playerCash - playerBet;
  }
  document.getElementById("cash").innerHTML =
    "You have $" + playerCash + " remaining";
  finalResult();
});

//cup2
document.getElementById("cup2-image").addEventListener("click", function () {
  playerGuess = "cup2";
  runAnimation(cup2Image);
  playerWin();
  if (outcome === "win") {
    playerCash = playerCash + playerBet;
  } else if (outcome === "lose") {
    playerCash = playerCash - playerBet;
  }
  document.getElementById("cash").innerHTML =
    "You have $" + playerCash + " remaining";
  finalResult();
});

//cup3
document.getElementById("cup3-image").addEventListener("click", function () {
  playerGuess = "cup3";
  runAnimation(cup3Image);
  playerWin();
  if (outcome === "win") {
    playerCash = playerCash + playerBet;
  } else if (outcome === "lose") {
    playerCash = playerCash - playerBet;
  }
  document.getElementById("cash").innerHTML =
    "You have $" + playerCash + " remaining";
  finalResult();
});
//Runs the liftcup animation when a cup is selected. Prevents cups from being selected during animation. Redistributes items under random balls.
function runAnimation(cupName) {
  cupName.style.animationName = "liftcup";
  allCupImages.forEach(removePointers);
  cupName.onanimationend = function () {
    cupName.style.animationName = "";
    ballPlacement();
    allCupImages.forEach(restorePointers);
  };
}

//Determines final win or loss conditions
const finalResult = () => {
  if (playerCash <= 0) {
    document.getElementById("final-result").innerHTML =
      "You have lost all your money!<br>You can not afford your rent tomorrow<br>Im sure Tommy will have room on his couch though<br>.....good luck.<br><br><a href='./game.html'>Try Again??</a>";
    backgroundCity.style.backgroundImage = "url(/losescreen.jpg)";
    allCupImages.forEach(removeCups);
  } else if (playerCash >= winCondition) {
    document.getElementById("final-result").innerHTML =
      "Congratulations!<br>You can now afford your date<br>.....or maybe you should double your money and buy that fancy coffee machine you always wanted.<br><br><a href='./game.html'>Play Again??</a>";
    backgroundCity.style.backgroundImage = "url(/winscreen.jpg)";
    allCupImages.forEach(removeCups);
  }
};

//Allows Player to change background city image.
const backgroundArray = [
  "url(./Assets/BackgroundImg/city1)",
  "url(./Assets/BackgroundImg/city2.jpg)",
  "url(./Assets/BackgroundImg/city3.jpg)",
  "url(./Assets/BackgroundImg/city4.jpg)",
  "url(./Assets/BackgroundImg/city5.jpg)",
  "url(./Assets/BackgroundImg/ity6.jpg)",
  "url(./Assets/BackgroundImg/city7.jpg)",
];
let backgroundIndex = 0;
const button = document.getElementById("location");
const backgroundCity = document.getElementById("background-city");
backgroundCity.style.backgroundImage = "url(./city1.jpg)";

button.onclick = function () {
  backgroundIndex = (backgroundIndex + 1) % backgroundArray.length;
  let selectedBackground = backgroundArray[backgroundIndex];
  console.log(backgroundArray[backgroundIndex]);
  console.log(backgroundIndex);
  console.log("selectedBackground" + selectedBackground);
  backgroundCity.style.backgroundImage = selectedBackground;
  console.log("level" + level);
  console.log("winC: " + winCondition);
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

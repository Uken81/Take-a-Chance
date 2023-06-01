import { player } from "../Common/player.mjs";

document.getElementById("enter-bet").addEventListener("click", function () {
  const input = document.getElementById("bet-input");
  const betAsNumber = parseInt(input.value);
  const bet = checkLimit(betAsNumber);

  displayBet(bet);
  setPlayerBet(bet);
});

function setPlayerBet(bet) {
  player.setBet(bet);
}

function displayBet(bet) {
  document.getElementById("show-bet").innerHTML = `You bet $${bet}`;
}

function checkLimit(betAsNumber) {
  const playerBank = player.bank;
  let limitedBet;

  if (betAsNumber > playerBank) {
    limitedBet = playerBank;
    document.getElementById("bet-input").value = limitedBet;
    return limitedBet;
  } else {
    return betAsNumber;
  }
}

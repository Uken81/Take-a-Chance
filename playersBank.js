import { player } from "./player.mjs";

export function adjustPlayersBank() {
  modifyValue();
  renderBank();
}

function modifyValue() {
  const playersBank = player.bank;
  const bet = player.bet;
  const hasWon = player.hasWonRound;

  if (hasWon === true) {
    player.addToBank();
  } else {
    player.subtractFromBank();
  }
}

function renderBank() {
  const playersBank = player.bank;
  document.getElementById(
    "cash"
  ).innerHTML = `You have $${playersBank} remaining`;
}

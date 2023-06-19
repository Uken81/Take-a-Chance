import { player } from "../Common/player.mjs";
import { calculateWinCondition } from "../Common/winCondition.js";

window.onload = initaliseCashDisplays();

function initaliseCashDisplays() {
  displayBank();
  setMeter();
}

export function adjustPlayersBank() {
  modifyValue();
  displayBank();
  setMeter();
}

function modifyValue() {
  const hasWon = player.hasWonRound;

  if (hasWon === true) {
    player.addToBank();
  } else {
    player.subtractFromBank();
  }
}

function displayBank() {
  const playersBank = player.bank;
  document.getElementById(
    "cash"
  ).innerText = `You have $${playersBank} remaining`;
}

function setMeter() {
  const winCondition = calculateWinCondition();
  const optimum = calculateOptimum(winCondition);
  const low = calculateLow(winCondition);

  const meter = document.getElementById("meter");
  meter.value = player.bank;
  meter.max = winCondition;
  meter.optimum = optimum;
  meter.low = low;
  console.log("meter", meter);
}

function calculateOptimum(value) {
  const result = (2 / 3) * value;
  return Math.floor(result);
}

function calculateLow(value) {
  const result = value / 3;
  return Math.floor(result);
}

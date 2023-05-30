export const player = {
  bank: 40,
  bet: 1,
  hasWonRound: false,

  setBet(betValue) {
    this.bet = betValue;
  },
  setHasWon(boolean) {
    this.hasWonRound = boolean;
  },
  addToBank() {
    this.bank = this.bank + this.bet;
  },
  subtractFromBank() {
    this.bank = this.bank - this.bet;
  },
};

console.log("player", player);

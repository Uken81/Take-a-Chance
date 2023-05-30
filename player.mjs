export const player = {
  bank: 40,
  bet: 1,
  hasWonRound: false,

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

export const player = {
  bank: 40,
  bet: 1,
  hasWonRound: false,

  setBet(value) {
    this.bet = value;
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

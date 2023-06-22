const createCup = () => ({
  resultToken: "",
  tokenImg: "",

  setResultToken(resultToken) {
    this.resultToken = resultToken;
  },

  setTokenImg(imageTag) {
    const imageUrl = `url(../../Assets/GameImg/${imageTag}.png)`;
    this.tokenImg = imageUrl;
  },
});

const cup1 = createCup();
const cup2 = createCup();
const cup3 = createCup();

export function placeTokens() {
  console.log("placeTokens");
  calculateTokenOrder();
  setBackgroundTokens();
}

function calculateTokenOrder() {
  console.log("calculateTokenOrder");
  const ballPosition = generateRandomNumber();
  if (ballPosition === 0) {
    setOutcome("ball", "hobo", "crab");
  } else if (ballPosition === 1) {
    setOutcome("crab", "ball", "hobo");
  } else if (ballPosition === 3) {
    setOutcome("hobo", "crab", "ball");
  }
  console.log("cups", cup1, cup2, cup3);
}

function generateRandomNumber() {
  return Math.floor(Math.random() * 3);
}

function setOutcome(token1, token2, token3) {
  setTokenProperties(cup1, token1);
  setTokenProperties(cup2, token2);
  setTokenProperties(cup3, token3);
}

function setTokenProperties(cup, resultToken) {
  cup.setResultToken(resultToken);
  cup.setTokenImg(resultToken);
}

function setBackgroundTokens() {
  const cup1Container = document.getElementById("cup1-container");
  const cup2Container = document.getElementById("cup2-container");
  const cup3Container = document.getElementById("cup3-container");

  cup1Container.style.backgroundImage = cup1.tokenImg;
  cup2Container.style.backgroundImage = cup2.tokenImg;
  cup3Container.style.backgroundImage = cup3.tokenImg;
}

export { cup1, cup2, cup3 };

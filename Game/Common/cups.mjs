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
  setTokenBackgrounds();
}

function calculateTokenOrder() {
  console.log("calculateTokenOrder");
  const ballPosition = generateRandomNumber();
  if (ballPosition === 0) {
    setOutcome1();
  } else if (ballPosition === 1) {
    setOutcome2();
  } else if (ballPosition === 3) {
    setOutcome3();
  }
  console.log("cups", cup1, cup2, cup3);
}

function generateRandomNumber() {
  return Math.floor(Math.random() * 3);
}

//code duplication. Look for alternative
function setOutcome1() {
  setTokenProperties(cup1, "ball");
  setTokenProperties(cup2, "hobo");
  setTokenProperties(cup3, "crab");
}
function setOutcome2() {
  setTokenProperties(cup1, "crab");
  setTokenProperties(cup2, "ball");
  setTokenProperties(cup3, "hobo");
}
function setOutcome3() {
  setTokenProperties(cup1, "hobo");
  setTokenProperties(cup2, "crab");
  setTokenProperties(cup3, "ball");
}

function setTokenProperties(cup, resultToken) {
  cup.setResultToken(resultToken);
  cup.setTokenImg(resultToken);
}

function setTokenBackgrounds() {
  const cup1Container = document.getElementById("cup1-container");
  const cup2Container = document.getElementById("cup2-container");
  const cup3Container = document.getElementById("cup3-container");

  cup1Container.style.backgroundImage = cup1.tokenImg;
  cup2Container.style.backgroundImage = cup2.tokenImg;
  cup3Container.style.backgroundImage = cup3.tokenImg;
}

export { cup1, cup2, cup3 };

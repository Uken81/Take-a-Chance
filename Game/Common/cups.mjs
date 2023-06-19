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
  calculateTokenOrder();
  ApplyTokenBackgrounds();
}

function calculateTokenOrder() {
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
  setCupProperties(cup1, "ball");
  setCupProperties(cup2, "hobo");
  setCupProperties(cup3, "crab");
}
function setOutcome2() {
  setCupProperties(cup1, "crab");
  setCupProperties(cup2, "ball");
  setCupProperties(cup3, "hobo");
}
function setOutcome3() {
  setCupProperties(cup1, "hobo");
  setCupProperties(cup2, "crab");
  setCupProperties(cup3, "ball");
}

function setCupProperties(cup, resultToken) {
  cup.setResultToken(resultToken);
  cup.setTokenImg(resultToken);
}

function ApplyTokenBackgrounds() {
  const cup1Container = document.getElementById("cup1-container");
  const cup2Container = document.getElementById("cup2-container");
  const cup3Container = document.getElementById("cup3-container");

  cup1Container.style.backgroundImage = cup1.tokenImg;
  cup2Container.style.backgroundImage = cup2.tokenImg;
  cup3Container.style.backgroundImage = cup3.tokenImg;
}

export { cup1, cup2, cup3 };

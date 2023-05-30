const createCup = ({ name }) => ({
  //remove name??
  name,
  resultToken: "",
  tokenImg: "",

  setResultToken(resultToken) {
    this.resultToken = resultToken;
  },

  setTokenImg(imageTag) {
    const imageUrl = `url(./Assets/GameImg/${imageTag}.png)`;
    this.tokenImg = imageUrl;
  },
});

const cup1 = createCup({ name: "cup1" });
const cup2 = createCup({ name: "cup2" });
const cup3 = createCup({ name: "cup3" });

//Todo: move this gamescript.js
placeTokens();

function placeTokens() {
  const ballPosition = determineBallPosition();
  if (ballPosition === 0) {
    setOutcome1();
  } else if (ballPosition === 1) {
    setOutcome2();
  } else {
    setOutcome3();
  }
  console.log("cups", cup1, cup2, cup3);
}

function determineBallPosition() {
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

export { cup1, cup2, cup3 };

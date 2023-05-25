import { cup1 } from "./cups.mjs";
import { cup2 } from "./cups.mjs";
import { cup3 } from "./cups.mjs";

const cup1Token = document.getElementById("cup1-token");
const cup2Token = document.getElementById("cup2-token");
const cup3Token = document.getElementById("cup3-token");
//move this back to game.js??
const allCupImages = document.querySelectorAll(".cups");

cup1Token.style.backgroundImage = cup1.tokenImg;
cup2Token.style.backgroundImage = cup2.tokenImg;
cup3Token.style.backgroundImage = cup3.tokenImg;

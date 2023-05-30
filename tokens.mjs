//what are below doing?
import { cup1 } from "./cups.mjs";
import { cup2 } from "./cups.mjs";
import { cup3 } from "./cups.mjs";

//convert this file back to js??
const cup1Container = document.getElementById("cup1-container");
const cup2Container = document.getElementById("cup2-container");
const cup3Container = document.getElementById("cup3-container");

//put this into a function?? ApplyTokenBackground??
cup1Container.style.backgroundImage = cup1.tokenImg;
cup2Container.style.backgroundImage = cup2.tokenImg;
cup3Container.style.backgroundImage = cup3.tokenImg;

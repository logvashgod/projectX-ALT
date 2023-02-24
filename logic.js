// start
const level = document.getElementById("level");
const levelNum = document.getElementById("level-num");
const xp = document.getElementById("xp");
//storage buttons
const saveProgress = document.getElementById("save_progress");
const loadProgres = document.getElementById("load_progress");
///
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const congrats = document.getElementById("congrats");
const congratsNum = document.getElementById("lvl-num");
//xp amount
console.log(levelNum.innerText);

levelNum.innerHTML = 1;
const maxXPValue = document.getElementById("xp-max");
const minXPValue = document.getElementById("xp-min");
currentXP = 0;

//STORAGE
const storedCurrentXP = localStorage.getItem("currentXP");
const storedMaxXPValue = localStorage.getItem("maxXPValue");
const storedLevelNum = localStorage.getItem("levelNum");

//buttons

button1.addEventListener("click", () => {
  currentXP += 10;
  minXPValue.innerHTML = currentXP;
  let xpNeed = maxXPValue.innerHTML;
  if (currentXP >= xpNeed) {
    updateLevel();
  }
});

button2.addEventListener("click", () => {
  currentXP += 25;
  minXPValue.innerHTML = currentXP;
  let xpNeed = maxXPValue.innerHTML;
  if (currentXP >= xpNeed) {
    updateLevel();
  }
});

button3.addEventListener("click", () => {
  currentXP += 50;
  minXPValue.innerHTML = currentXP;
  xpNeed = maxXPValue.innerHTML;
  if (currentXP >= xpNeed) {
    updateLevel();
  }
});

document.onclick = function (event) {
  console.log(event);
};

function updateLevel() {
  currentXP = 0;

  let xpNeed = Number(maxXPValue.innerHTML);
  xpNeed += 75;

  maxXPValue.innerHTML = xpNeed;
  levelNum.innerHTML++;
  let lvlInfo = levelNum.innerHTML;
  window.alert(`Now you reached ${lvlInfo++} lvl`);
  congratsNum.innerHTML++;
}

//
///local storage

saveProgress.addEventListener("click", () => {
  localStorage.setItem("currentXP", currentXP);
  localStorage.setItem("maxXPValue", maxXPValue.innerHTML);
  localStorage.setItem("levelNum", levelNum.innerHTML);
});

loadProgres.addEventListener("click", () => {
  console.log(currentXP.innerHTML);
  // const storedCurrentXP = localStorage.getItem("currentXP");
  // const storedMaxXPValue = localStorage.getItem("maxXPValue");
  // const storedLevelNum = localStorage.getItem("levelNum");

  // Set progress from local storage
  currentXP.innerHTML = storedCurrentXP;
  maxXPValue.innerHTML = storedMaxXPValue;
  levelNum.innerHTML = storedLevelNum;
});

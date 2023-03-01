const plus = document.getElementById("new_plus");
const skillLvl = document.getElementById("skill_lvl");
const skillExp = document.getElementById("xp_value");
const xpNeed = document.getElementById("xpNeed");
//s
const plus1 = document.getElementById("new_plus1");
const skillLvl1 = document.getElementById("skill_lvl1");
const skillExp1 = document.getElementById("xp_value1");
const xpNeed1 = document.getElementById("xpNeed1");
//
plus.addEventListener("click", () => {
  console.log("dadaya");
  currentXp += 3;
  skillExp.innerHTML = currentXp;
  youNeedXP = xpNeed.innerHTML;
  if (currentXp >= youNeedXP) {
    console.log("da");
    updateSkillLvl();
  }
});

plus1.addEventListener("click", () => {
  console.log("dadaya");
  currentXp += 3;
  skillExp.innerHTML = currentXp;
  youNeedXP = xpNeed.innerHTML;
  if (currentXp >= youNeedXP) {
    console.log("da");
    updateSkillLvl();
  }
});

currentXp = 0;

function updateSkillLvl() {
  currentXp = 0;
  let youNeedXP = Number(xpNeed.innerHTML);
  youNeedXP += 15;
  xpNeed.innerHTML = youNeedXP;
  skillLvl.innerHTML++;
}

///

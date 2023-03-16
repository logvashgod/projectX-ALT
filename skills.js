const skillList = document.getElementById("skil-list");
const addSkillBtn = document.getElementById("add-btn");
const removeSkillBtn = document.getElementById("remove-btn");

//array
const mySkills = [];

//
mySkills.forEach((skill) => {
  const li = document.createElement("li");
  li.innerText = skill;
  skillList.appendChild(li);
});

//add skill
addSkillBtn.addEventListener("click", () => {
  const newSkill = prompt("Enter skill name: ");
  mySkills.push(newSkill);
  const li = document.createElement("li");
  li.innerText = newSkill;
  skillList.appendChild("li");
  console.log("works");
});

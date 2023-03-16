// start
const level = document.getElementById("level");
const levelNum = document.getElementById("level-num");
const xp = document.getElementById("xp");
const progressBar = document.getElementById("progress-bar");
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
const storedQUEST_ADDED = localStorage.getItem("QUEST_ADDED");
const storedQUEST_ADDED1 = localStorage.getItem("QUEST_ADDED1");
const storedQUEST_ADDED2 = localStorage.getItem("QUEST_ADDED2");

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
    updateProgressBar();
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
}
//addtask

const ADD_QUEST = document.getElementById("add_quest");
const ADD_QUEST1 = document.getElementById("add_quest1");
const ADD_QUEST2 = document.getElementById("add_quest2");
const QUEST_DESCRIPTION = document.getElementById("1");
const QUEST_ADDED = document.getElementById("quest1");
const QUEST_ADDED1 = document.getElementById("quest2");
const QUEST_ADDED2 = document.getElementById("quest3");
const QUEST_TEXT = document.getElementById("quest_text");

ADD_QUEST.addEventListener("click", () => {
  const text = QUEST_DESCRIPTION.value;
  QUEST_ADDED.innerHTML = text;
});

ADD_QUEST1.addEventListener("click", () => {
  const text1 = QUEST_DESCRIPTION.value;
  QUEST_ADDED1.innerHTML = text1;
});

ADD_QUEST2.addEventListener("click", () => {
  const text2 = QUEST_DESCRIPTION.value;
  QUEST_ADDED2.innerHTML = text2;
});

//deleting ask
ADD_QUEST.addEventListener("dblclick", () => {
  QUEST_ADDED.innerHTML = "";
});

ADD_QUEST1.addEventListener("dblclick", () => {
  QUEST_ADDED1.innerHTML = "";
});

ADD_QUEST2.addEventListener("dblclick", () => {
  QUEST_ADDED2.innerHTML = "";
});

//
///local storage

saveProgress.addEventListener("click", () => {
  localStorage.setItem("currentXP", minXPValue.innerHTML);
  localStorage.setItem("maxXPValue", maxXPValue.innerHTML);
  localStorage.setItem("levelNum", levelNum.innerHTML);
  localStorage.setItem("QUEST_ADDED", QUEST_ADDED.innerHTML);
  localStorage.setItem("QUEST_ADDED1", QUEST_ADDED1.innerHTML);
  localStorage.setItem("QUEST_ADDED2", QUEST_ADDED2.innerHTML);
});

loadProgres.addEventListener("click", () => {
  console.log(currentXP.innerHTML);
  // const storedCurrentXP = localStorage.getItem("currentXP");
  // const storedMaxXPValue = localStorage.getItem("maxXPValue");
  // const storedLevelNum = localStorage.getItem("levelNum");

  // Set progress from local storage
  minXPValue.innerHTML = storedCurrentXP;
  maxXPValue.innerHTML = storedMaxXPValue;
  levelNum.innerHTML = storedLevelNum;
  QUEST_ADDED.innerHTML = storedQUEST_ADDED;
  QUEST_ADDED2.innerHTML = storedQUEST_ADDED1;
  QUEST_ADDED2.innerHTML = storedQUEST_ADDED2;
});

window.addEventListener("load", () => {
  minXPValue.innerHTML = storedCurrentXP;
  maxXPValue.innerHTML = storedMaxXPValue;
  levelNum.innerHTML = storedLevelNum;
  QUEST_ADDED.innerHTML = storedQUEST_ADDED;
  QUEST_ADDED2.innerHTML = storedQUEST_ADDED1;
  QUEST_ADDED2.innerHTML = storedQUEST_ADDED2;
});

//--!--! task list
const ITEMS_CONTAINER = document.getElementById("items");
const ITEM_TEMPLATE = document.getElementById("itemTemplate");
const ADD_BUTTON = document.getElementById("add");

let items = getItems();
//
function getItems() {
  const value = localStorage.getItem("todo") || "[]";

  return JSON.parse(value);
}
//
function setItems(items) {
  const itemsJson = JSON.stringify(items);

  localStorage.setItem("todo", itemsJson);
}

//adding items
function addItems() {
  items.unshift({
    description: "",
    completed: false,
  });

  setItems(items);
  refreshList();
}

function updateItem(item, key, value) {
  item[key] = value;

  setItems(items);
  refreshList();
}

function refreshList() {
  //TODO:sort items
  items.sort((a, b) => {
    if (a.completed) {
      return 1;
    }

    if (b.completed) {
      return -1;
    }

    return a.description < b.description ? -1 : 1;
  });

  ITEMS_CONTAINER.innerHTML = "";

  for (const item of items) {
    const itemElement = ITEM_TEMPLATE.content.cloneNode(true);
    const descriptionInput = itemElement.querySelector(".item-description");
    const completedInput = itemElement.querySelector(".item-completed");

    descriptionInput.value = item.description;
    completedInput.checked = item.completed;

    descriptionInput.addEventListener("change", () => {
      updateItem(item, "description", descriptionInput.value);
    });

    completedInput.addEventListener("change", () => {
      updateItem(item, "completed", completedInput.checked);
    });

    ITEMS_CONTAINER.append(itemElement);
  }
}

ADD_BUTTON.addEventListener("click", () => {
  addItems();
});
// refresh
refreshList();

////

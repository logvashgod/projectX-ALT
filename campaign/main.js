let tasks = [];

function addTask() {
  let taskName = document.getElementById("taskName").value;
  let taskDescription = document.getElementById("taskDescription").value;
  let taskXP = document.getElementById("taskXP").value;

  let newTask = {
    name: taskName,
    description: taskDescription,
    xp: taskXP,
  };

  tasks.push(newTask);

  document.getElementById("taskName").value = "";
  document.getElementById("taskDescription").value = "";
  document.getElementById("taskXP").value = "";

  console.log(tasks);

  updateTaskTable();
}

function updateTaskTable() {
  // Get the task table body element
  let tableBody = document
    .getElementById("taskTable")
    .getElementsByTagName("tbody")[0];

  // Clear the table body
  tableBody.innerHTML = "";

  // Loop through the tasks array and add a row for each task
  for (let i = 0; i < tasks.length; i++) {
    let task = tasks[i];

    let row = tableBody.insertRow(i);

    let nameCell = row.insertCell(0);
    nameCell.innerHTML = task.name;

    let descriptionCell = row.insertCell(1);
    descriptionCell.innerHTML = task.description;

    let xpCell = row.insertCell(2);
    xpCell.innerHTML = task.xp;
  }
}

//campaign constraction

let campaigns = [];

function addCampaign() {
  let campaignName = document.getElementById("campaignName").value;
  let campaignDescription = document.getElementById(
    "campaignDescription"
  ).value;
  let campaignXP = document.getElementById("campaignXP").value;

  let newCampaign = {
    name: campaignName,
    description: campaignDescription,
    xp: campaignXP,
    task: [],
  };

  campaigns.push(newCampaign);

  console.log(campaigns);

  document.getElementById("campaignName").value = "";
  document.getElementById("campaignDescription").value = "";
  document.getElementById("campaignXP").value = "";

  updateCampaignTable();
}

function updateCampaignTable() {
  let tableBody = document
    .getElementById("campaignTable")
    .getElementsByTagName("Tbody")[0];

  tableBody.innerHTML = "";

  for (let i = 0; i < campaigns.length; i++) {
    let campaign = campaigns[i];

    let row = tableBody.insertRow(i);

    let nameCell = row.insertCell(0);
    nameCell.innerHTML = campaign.name;

    let descriptionCell = row.insertCell(1);
    descriptionCell.innerHTML = campaign.description;

    let xpCell = row.insertCell(2);
    xpCell.innerHTML = campaign.xp;

    let tasksCell = row.insertCell(3);
    tasksCell.innerHTML = campaign.tasks.length;

    let viewTasksCell = row.insertCell(4);
    viewTasksCell.innerHTML =
      "<button onclick='viewTasks(" + i + ")'>View Tasks</button>";
  }
}

// To Do list by Mr. V

// Global Variables
let tasks = [];

// HTML Variables
let taskInputEl = document.getElementById("task-in");
let taskContainerEl = document.getElementById("task-container");

// Event Listener
taskInputEl.addEventListener("keydown", submitTask);

function submitTask(event) {
  if (event.keyCode === 13) {
    tasks.push(taskInputEl.value);
    taskInputEl.value = "";
    updateTasks2();
  }
}

// Display whatever is in the tasks array
function updateTasks() {
  let tasksStr = "";
  for (let i = tasks.length - 1; i >= 0; i--) {
    tasksStr += `<div class="task">
    <span><input type="checkbox">${tasks[i]}</span>
    <button>Remove</button>
  </div>`
  }

  taskContainerEl.innerHTML = tasksStr;

}

function updateTasks2() {
  // Clear Task Container
  taskContainerEl.innerHTML = "";

  // Add Task Elements to Task Container
  for (let i = tasks.length - 1; i >= 0; i--) {
    // Create Div for current task
    let divEl = document.createElement("div");
    divEl.className = "task";

    let spanEl = document.createElement("span");

    let inputEl = document.createElement("input");
    inputEl.type = "checkbox";
    inputEl.addEventListener("input", clickCheckbox);

    let textEl = document.createTextNode(tasks[i]);

    spanEl.append(inputEl);
    spanEl.append(textEl);

    let btnEl = document.createElement("button");
    btnEl.innerHTML = "Remove";
    btnEl.dataset.index = i;
    btnEl.addEventListener("click", removeTask);

    divEl.append(spanEl);
    divEl.append(btnEl);

    // Add task div to the div container
    taskContainerEl.append(divEl);
  }
}

function clickCheckbox(event) {
  console.log("clicked check box");
}

function removeTask(event) {
  let i = event.target.dataset.index;
  tasks.splice(i, 1);
  updateTasks2();
}
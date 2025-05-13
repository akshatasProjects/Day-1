const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
const clearAllBtn = document.getElementById("clearAll");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
renderTask();

// ➕ Add Task
addTaskBtn.addEventListener("click", () => {
  let task = taskInput.value.trim();

  if (task) {
    tasks.push({ text: task, completed: false });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    taskInput.value = "";
    renderTask();
  }
});

// ------------Clear All
clearAllBtn.addEventListener("click", () => {
  tasks = [];
  localStorage.removeItem("tasks");
  renderTask();
});

// ---------------Render Tasks
function renderTask() {
  taskList.innerHTML = "";

  // -----------Sort alphabetically
  tasks.sort((a, b) => a.text.localeCompare(b.text));

  tasks.forEach((taskObj, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = taskObj.text;

    // ------------------ Mark completed
    if (taskObj.completed) {
      listItem.style.textDecoration = "line-through";
      listItem.style.color = "gray";
    }

    listItem.addEventListener("click", () => {
      taskObj.completed = !taskObj.completed;
      localStorage.setItem("tasks", JSON.stringify(tasks));
      renderTask();
    });

    // ❌ Delete button
    const delBtn = document.createElement("button");
    delBtn.textContent = "❌";
    delBtn.style.cssText = `
      border: none;
      border-radius: 50px;
      margin-left: 10px;
      padding: 10px;
      background-color: lightblue;
      cursor: pointer;
    `;

    delBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent toggling complete
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      renderTask();
    });

    listItem.appendChild(delBtn);
    taskList.appendChild(listItem);
  });
}

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTask");
const taskList = document.getElementById("taskList"); //UL

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
renderTask();

addTaskBtn.addEventListener("click", () => {
  let task = taskInput.value.trim();

  if (task) {
    tasks.push(task);
    localStorage.setItem(tasks, JSON.stringify(tasks));
    taskInput.value = "";
    renderTask();
  }
});

function renderTask() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const list = document.createElement("li");
    list.textContent = task;

    // creating delete Button
    const delBtn = document.createElement("button");
    delBtn.textContent = "❌";
    delBtn.style.border = "0";
    delBtn.style.borderRadius = "50px";
    delBtn.style.marginLeft = "10px";
    delBtn.style.padding = "10px";
    delBtn.style.backgroundColor = "lightBlue";

    delBtn.addEventListener("click", () => {
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      renderTask();
    });

    list.appendChild(delBtn);
    taskList.appendChild(list);
  });
}

let todoInput = document.getElementById("todoInput");
let addTask = document.getElementById("addTask");
let taskList = document.getElementById("taskList");



function addTaskClick(){
let a = document.createElement("li");
let c = document.createElement("button");
let b = todoInput.value;

a.innerHTML = b;
c.innerHTML = "x";

taskList.appendChild(a);
a.appendChild(c)
};

function slashTask(event){

};

addTask.addEventListener("click", addTaskClick);

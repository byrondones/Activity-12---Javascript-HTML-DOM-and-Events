let todoInput = document.getElementById("todoInput");
let addTask = document.getElementById("addTask");
let taskList = document.getElementById("taskList");


addTask.addEventListener('click', function(){
    let a = document.createElement("li");
    let b = todoInput.value;
    let c = document.createElement("button");
    
    a.innerHTML = b;
    c.innerHTML = "x";

    taskList.appendChild(a);
    a.appendChild(c)

    a.addEventListener('click', function(){
        a.classList.toggle('done');
    });

    c.addEventListener('click', function(){
        taskList.removeChild(a);
    });
});



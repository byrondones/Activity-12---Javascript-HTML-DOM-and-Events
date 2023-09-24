let todoInput = document.getElementById("todoInput");
let addTask = document.getElementById("addTask");
let taskList = document.getElementById("taskList");


addTask.addEventListener('click', function(){
    const a = document.createElement("li");
    const c = document.createElement("button");
    const b = todoInput.value;
    
    a.innerHTML = b;
    c.innerHTML = "x";

    taskList.appendChild(a);
    a.appendChild(c)

    a.addEventListener('click', function(){
        a.classList.toggle('done');

        
    });
});



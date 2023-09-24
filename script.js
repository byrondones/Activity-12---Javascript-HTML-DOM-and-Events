let todoInput = document.getElementById("todoInput");
let addTask = document.getElementById("addTask");
let taskList = document.getElementById("taskList");

//added a listener to addTask button and 
addTask.addEventListener('click', function(){

if(todoInput.value === ''){
    alert("Please enter a Task!")
} else {
    let addList = document.createElement("li");
    let inputValue = todoInput.value;
    let removeButton = document.createElement("button");
    
    addList.innerHTML = inputValue;
    removeButton.innerHTML = "x";

    taskList.appendChild(addList);
    addList.appendChild(removeButton)

    addList.addEventListener('click', function(){
        addList.classList.toggle('done');
    });

    removeButton.addEventListener('click', function(){
        taskList.removeChild(addList);
    });
}
});



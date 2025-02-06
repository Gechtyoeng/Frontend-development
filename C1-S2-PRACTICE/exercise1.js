let task = [{description:"task1",priority:1},
            {description:"task2",priority:0},
            {description:"task3",priority:1}];

function displayTasks(tasks){
    const myList = document.getElementById("myTask");
    for(let i = 0;i<tasks.length;i++){
        let newLi = document.createElement("li");
        newLi.textContent = tasks[i].description;
        if(tasks[i].priority == 1){
            newLi.style.backgroundColor = "red";
        }else{
            newLi.style.backgroundColor = "grey";
        }
        myList.appendChild(newLi);
    }
        
}
displayTasks(task);


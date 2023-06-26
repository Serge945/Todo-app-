export const addToLocalStorage = (newTask) =>{
let tasks = JSON.parse(localStorage.getItem("tasks"));
if(!tasks){
    tasks =[];
}
tasks.push(newTask);
localStorage.setItem("tasks", JSON.stringify(tasks));
};

export const editToLocalStorage = (editValue, id) =>{
    const tasks= JSON.parse(localStorage.getItem('tasks'))
    const updatedTasks= tasks.map((map)=>{
        if(tasks.id=== id){
            tasks.text = editValue
        }
        return task;
    });
    localStorage.setItem("tasks", JSON.stringify(updatedTasks))
}

export const deleteFromLocalStorage = (deletedTask) =>{
    localStorage.setItem("tasks", JSON.stringify(deletedTask))
}
export const viewFromLocalStorage= (id) =>{
    const tasks= JSON.parse(localStorage.getItem("task"))
    return tasks
}

export const taskCompletedToLocalStorage = (id) =>{
    const tasks = JSON.parse(localSTorage.getItem("tasks"));
    const updatedTask = tasks.map((task)=>{
        if(task.id === id){
            task.completed = !task.completed;
        }
        return task
    })
    localStorage.setItem=("tasks", JSON.stringify(updatedTask));
}
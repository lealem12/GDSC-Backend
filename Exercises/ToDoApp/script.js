

const userInput = document.getElementById("to-do-item");
const addTaskBtn = document.getElementById("add-task");
const taskContainer = document.getElementById("task-container");

class ToDoItem {
    constructor (task) {
        this.task = task;
        this.completed = false;
    }
    taskCompleted () {
        return this.completed;
    }
}

class ToDoList {
    constructor () {
        this.toDoList = [];
    }
    addNewTask (toDoItem) {
        return this.toDoList.push(toDoItem);
    }
    renderList () {
        if (this.toDoList.length !== 0) {
            console.log(this.toDoList)
            taskContainer.innerHTML = "";
            this.toDoList.forEach((toDoItem,index) => {
                const taskElement = document.createElement("div");
                taskElement.classList.add("list")
                const taskContent = document.createElement("div");
                taskContent.innerText = toDoItem.task;

                const deleteBtn = document.createElement("button");
                deleteBtn.classList.add("delete-btn");
                deleteBtn.innerText = "Delete";
                deleteBtn.addEventListener('click', ()=> {
                    this.toDoList.splice(index, 1);
                    this.renderList()
                })
                taskElement.appendChild(taskContent);
                taskElement.appendChild(deleteBtn);
                taskContainer.appendChild(taskElement);
            });
        } else {
            taskContainer.innerHTML = `<p>woohhhh... so empty!</p>`
        }
    }
}

const tasks = new ToDoList();
addTaskBtn.addEventListener('click', ()=> {
    const newTask = new ToDoItem(userInput.value);
    tasks.addNewTask(newTask);
    tasks.renderList();
});
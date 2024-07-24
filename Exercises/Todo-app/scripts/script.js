
import { TodoList } from "./modules/todoList.js";
import { listItem } from "./elements/todoElement.js";

const listsContainer = document.querySelector(".lists-container");
const inputText = document.querySelector("#title");
const form = document.querySelector("form");
const todoList = new TodoList();

const main = () => {
    listsContainer.innerHTML = "";
    todoList.todos.forEach(todo => {
        listsContainer.innerHTML += listItem(todo.taskTitle);
    });

    const deleteBtns = document.querySelectorAll(".delete-btn");
    const checkboxes = document.querySelectorAll(".checkbox")
    const taskTitle = document.querySelectorAll(".task-title");
    const toggle = document.querySelectorAll(".checkbox");
    todoList.todos.forEach((todo, idx) => {
        const callback = () => {
            todoList.todos.splice(idx, 1);
            main();
        };  
        const portrayTodo = () => {
            if (todo.completed) {
                checkboxes[idx].setAttribute("checked", true)
                taskTitle[idx].classList.add("done-task-title");
                deleteBtns[idx].classList.add("display-delete-btn");
                deleteBtns[idx].addEventListener('click', callback);
            } else {
                taskTitle[idx].classList.remove("done-task-title");
                deleteBtns[idx].classList.remove("display-delete-btn");
                deleteBtns[idx].removeEventListener('click', callback);
            }
        };
        portrayTodo();
        toggle[idx].addEventListener('click', ()=> {
            todo.isCompleted();
            portrayTodo();
        });
    });
}
form.addEventListener('submit', (event) => {
    event.preventDefault();
    todoList.addTask(inputText.value);
    inputText.value = "";
    main();
});

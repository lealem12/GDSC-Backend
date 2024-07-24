import { TodoItem } from "./todoItem.js";

class TodoList {
    constructor () {
        this.todos = [];
    }
    addTask (taskTitle) {
        if (!taskTitle) {
            return window.alert("Please enter your task title.");
        }
        const newTodo = new TodoItem(taskTitle);
        this.todos.push(newTodo)
    }
}

export {TodoList}



class TodoItem {
    constructor (taskTitle) {
        this.taskTitle = taskTitle;
        this.completed = false;
    }

    isCompleted () {
        return this.completed = !this.completed;
    }
}

export {TodoItem}



const listItem = (taskTitle) => {
    return ` <div class="list">
                <div>
                    <input type="checkbox" name="compeletion-status" class="checkbox"/>
                    <div class="task-title">${taskTitle}</div>
                </div>
                <div class="delete-btn">\u00d7</div>
             </div> `
}

export {listItem}
const tasksList =  document.querySelector(".tasks-list");
export function renderTasks(){
    const tasks = JSON.parse(localStorage.getItem("tasks") ) || [];
    tasksList.innerHTML =  tasks.map(task => `
        <div
            class="
            task-card
            ${task.important ? "important" : ""}
            ${task.completed ? "completed" : ""}
            "
            data-id="${task.id}"
        >

            <h3>${task.title}</h3>

            <p>${task.desc}</p>

            <div class="task-actions">

                <button
                    class="complete-btn"
                >
                    ${
                        task.completed
                        ? "Undo"
                        : "Complete"
                    }
                </button>

                <button  class="edit-btn" >
                    Edit
                </button>

                <button class="delete-btn">
                    Delete
                </button>

            </div>

        </div>

    `).join("");
}

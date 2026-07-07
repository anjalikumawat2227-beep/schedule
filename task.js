import { renderTasks } from "./taskrender.js";
const addTaskForm = document.querySelector("#addTaskForm");
const tasksList = document.querySelector(".tasks-list");
const addBtn = document.querySelector("#addTaskBtn");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

export function addTask() {
    addTaskForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const task = {
            id: Date.now(),
            title: e.target.taskTitle.value,
            desc: e.target.taskDesc.value,
            important: e.target.importantTask.checked,
            completed: false
        };

        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        addTaskForm.reset();
        renderTasks()
    });

}

tasksList.addEventListener("click", (e) => {
    const card = e.target.closest(".task-card");
    if (!card) return;
    const id = Number(card.dataset.id);

    if (e.target.classList.contains("delete-btn")) {
        tasks = tasks.filter(task => task.id !== id);
    }

    // COMPLETE

    if (e.target.classList.contains( "complete-btn" )) {
        tasks =tasks.map(task => {
                if (task.id === id) {
                    task.completed =!task.completed;
                }
                return task;
            });
    }

    // EDIT

    if ( e.target.classList.contains( "edit-btn")) {
        const task = tasks.find(t => t.id === id);
        const newTitle =  prompt( "Edit Task", task.title );
        if (newTitle) {
            task.title = newTitle;
        }
    }

    localStorage.setItem("tasks",JSON.stringify(tasks));
    renderTasks();
});
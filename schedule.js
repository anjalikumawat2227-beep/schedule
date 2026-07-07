import { scheduleCard } from "./scheduleCard.js";

const taskForm = document.querySelector(".task-form");


export function addScheduleCard() {
    taskForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const scheduleArr = JSON.parse(localStorage.getItem("schedule")) || []

        const name = e.target.taskName.value
        const start = e.target.startTime.value
        const end = e.target.endTime.value

        const scheduleObj = {
            id: Date.now(),
            name, start, end
        }
        scheduleArr.push(scheduleObj)
        localStorage.setItem("schedule", JSON.stringify(scheduleArr))
        taskForm.reset()
        scheduleCard()
    });
}


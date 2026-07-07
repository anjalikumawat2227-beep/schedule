import{updateDateTime} from "./date-time.js"
import { weatherInfo } from "./wather.js";
import { addScheduleCard } from "./schedule.js";
import { scheduleCard } from "./scheduleCard.js";
import { initGoals, renderGoals } from "./goals.js";
import { updateDisplay } from "./timer.js";
import { addTask} from "./task.js";
import { renderTasks } from "./taskrender.js";
import { getQuote }from "./motivation.js";

const motivationBtn =document.getElementById("motivationBtn");
const motivationPage =document.getElementById("motivation-page");
const motivationBackBtn =document.getElementById("motivationBackBtn");
const toggleBtn = document.getElementById("themeToggle");
const dashboard = document.querySelector(".dashboard");
const scheduleBtn = document.querySelector("#schedule")
const schedulePage = document.querySelector("#schedule-page")
const schedulecontainer = document.querySelector(".schedule-container")
const cancel = document.querySelector("#cancelBtn")
const saveBtn = document.querySelector("#saveBtn")
const taskForm = document.querySelector(".task-modal")
const addSchedule = document.querySelector("#addScheduleBtn")
const modalOverlay = document.querySelector(".modal-overlay");
const backBtn = document.getElementById("backBtn");
const cancelBtn = document.querySelector("#cancelBtn")
const closeBtn = document.querySelector("#closeBtn")
const goalsBtn = document.querySelector("#goals");
const goalsPage = document.querySelector("#goals-page");
const goalbackBtn = document.getElementById("goalbackBtn");
const timerBtn = document.querySelector("#timer");
const timerBackBtn = document.querySelector("#timerBackBtn");
const timerPage = document.querySelector("#timer-page");
const taskBtn =document.querySelector("#task");
const tasksPage = document.querySelector("#tasks-page");
const taskBackBtn = document.querySelector("#taskBackBtn")
const theme = localStorage.getItem("theme");


    toggleBtn.addEventListener("click",()=>{
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme","dark");
        toggleBtn.textContent = "☀️";
    }else{
        localStorage.setItem("theme","light");
        toggleBtn.textContent = "🌙";
    }

});



if(theme === "dark"){
    document.body.classList.add("dark");
    toggleBtn.textContent = "☀️";
}
updateDateTime()
weatherInfo()
addScheduleCard();
initGoals();
updateDisplay()
addTask();
renderTasks()


function hideAllSections() {
    schedulePage.classList.add("hidden");
    goalsPage.classList.add("hidden");
    timerPage.classList.add("hidden");
    tasksPage.classList.add("hidden");
}

function showSection(section) {
    dashboard.style.display = "none";

    hideAllSections();

    section.classList.remove("hidden");
}

scheduleBtn.addEventListener("click",()=>{
   dashboard.style.display = "none";
       hideAllSections();
    showSection(schedulePage);
   schedulePage.classList.remove("hidden");
   scheduleCard()
})

addSchedule.addEventListener("click",()=>{
    modalOverlay.classList.remove("hidden");
})
backBtn.addEventListener("click", () => {
    schedulePage.classList.add("hidden");
    dashboard.style.display = "flex";
});
cancelBtn.addEventListener("click",()=>{
    modalOverlay.classList.add("hidden");
})
closeBtn.addEventListener("click",()=>{
    modalOverlay.classList.add("hidden");
})
goalsBtn.addEventListener("click", () => {
    dashboard.style.display = "none";
    hideAllSections();
    showSection(goalsPage);
    schedulePage.classList.add("hidden");
  renderGoals()
    goalsPage.classList.remove("hidden");

});
const goalBackBtn = document.querySelector("#goalBackBtn");

backBtn.addEventListener("click", () => {
    hideAllSections();
    dashboard.style.display = "flex";
});
goalbackBtn.addEventListener("click",()=>{
    hideAllSections();
     dashboard.style.display = "flex";
})
timerBackBtn.addEventListener("click",()=>{
    hideAllSections();
    dashboard.style.display = "flex";
});
timerBtn.addEventListener("click", () => {
    dashboard.style.display = "none";
    hideAllSections();
    showSection(timerPage);
    timerPage.classList.remove("hidden");

});

taskBtn.addEventListener(  "click",  ()=>{
    showSection(tasksPage);
    renderTasks();
});
taskBackBtn.addEventListener("click",()=>{
    hideAllSections();
    dashboard.style.display = "flex";
})
motivationBtn.addEventListener("click",()=>{
    hideAllSections();
    dashboard.style.display = "none";
    motivationPage.classList.remove("hidden");
    getQuote();
});
motivationBackBtn.addEventListener("click",()=>{
    motivationPage.classList.add("hidden");
    dashboard.style.display = "flex";
});

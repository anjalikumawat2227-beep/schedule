const taskList = document.querySelector(".task-list")

export function scheduleCard() {
    const scheduleArr = JSON.parse(localStorage.getItem("schedule")) || []
    taskList.innerHTML = scheduleArr.map(item => `
    <div class="schedule-card" data-id="${item.id}">

        <button class="delete-btn" >
            ✖
        </button>

        <h3>${item.name}</h3>

        <p class="time">
            ${item.start} - ${item.end}
        </p>

    </div>
`).join("");
}

taskList.addEventListener("click",(e)=>{
 if(e.target.classList.contains("delete-btn")){
    const curCard = e.target.closest(".schedule-card")
    const id = Number(curCard.dataset.id)
    const scheduleArr = JSON.parse(localStorage.getItem("schedule")) || [];

    const filterScheduleArr = scheduleArr.filter((cur)=> cur.id !== id)
      localStorage.setItem("schedule",JSON.stringify(filterScheduleArr))
     scheduleCard()
 }
})


let timer;
let totalSeconds = 30 * 60;

const minutes = document.getElementById("minutes");
const seconds =  document.getElementById("seconds");
const startBtn =  document.getElementById("startBtn")
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn =  document.getElementById("resetBtn");
const workBtn =  document.getElementById("workBtn");
const breakBtn = document.getElementById("breakBtn");

export function updateDisplay(){

    const mins =
        Math.floor(totalSeconds / 60);

    const secs =
        totalSeconds % 60;

    minutes.textContent =
        String(mins).padStart(2,"0");

    seconds.textContent =
        String(secs).padStart(2,"0");
}

startBtn.addEventListener("click",()=>{

    if(timer) return;

    timer = setInterval(()=>{

        if(totalSeconds <= 0){

            clearInterval(timer);

            timer = null;

            alert("Session Complete 🎉");

            return;
        }

        totalSeconds--;

        updateDisplay();

    },1000);

});

pauseBtn.addEventListener("click",()=>{

    clearInterval(timer);

    timer = null;

});

resetBtn.addEventListener("click",()=>{

    clearInterval(timer);

    timer = null;

    totalSeconds = 30 * 60;

    updateDisplay();

});

workBtn.addEventListener("click",()=>{

    clearInterval(timer);

    timer = null;

    totalSeconds = 30 * 60;

    updateDisplay();

    workBtn.classList.add("active-mode");

    breakBtn.classList.remove("active-mode");
});

breakBtn.addEventListener("click",()=>{

    clearInterval(timer);

    timer = null;

    totalSeconds = 5 * 60;

    updateDisplay();

    breakBtn.classList.add("active-mode");

    workBtn.classList.remove("active-mode");
});


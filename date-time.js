const dayEl = document.getElementById("day");
const dateEl = document.getElementById("date");
const timeEl = document.getElementById("time");

export function updateDateTime() {

    const now = new Date();

    dayEl.textContent = now.toLocaleDateString("en-US", {
        weekday: "long"
    });

    dateEl.textContent = now.toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    timeEl.textContent = now.toLocaleTimeString();
}

setInterval(updateDateTime, 1000);

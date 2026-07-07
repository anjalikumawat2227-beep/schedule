const addGoalBtn = document.getElementById("addGoalBtn");
const goalsList = document.querySelector(".goals-list");

let goals = JSON.parse(localStorage.getItem("goals")) || [];

export function initGoals() {

    renderGoals();

    addGoalBtn.addEventListener("click", addGoal);

    goalsList.addEventListener("click", deleteGoal);

    goalsList.addEventListener("change", completeGoal);
}

function addGoal() {

    const title = document.getElementById("goalTitle").value;
    const desc = document.getElementById("goalDesc").value;

    if (!title.trim()) return;

    const goal = {
        id: Date.now(),
        title,
        desc,
        completed: false
    };

    goals.push(goal);

    localStorage.setItem(
        "goals",
        JSON.stringify(goals)
    );

    document.getElementById("goalTitle").value = "";
    document.getElementById("goalDesc").value = "";

    renderGoals();
}

export function renderGoals() {

    goals =
        JSON.parse(localStorage.getItem("goals")) || [];

    goalsList.innerHTML = goals.map(goal => `

        <div class="goal-card" data-id="${goal.id}">

            <button class="delete-goal">✖</button>

            <h3>${goal.title}</h3>

            <p>${goal.desc}</p>

            <label>
                <input
                    type="checkbox"
                    class="complete-goal"
                    ${goal.completed ? "checked" : ""}
                >
                Completed
            </label>

        </div>

    `).join("");
}

function deleteGoal(e) {

    if (!e.target.classList.contains("delete-goal"))
        return;

    const card = e.target.closest(".goal-card");

    const id = Number(card.dataset.id);

    goals = goals.filter(goal => goal.id !== id);

    localStorage.setItem(
        "goals",
        JSON.stringify(goals)
    );

    renderGoals();
}

function completeGoal(e) {

    if (!e.target.classList.contains("complete-goal"))
        return;

    const card = e.target.closest(".goal-card");

    const id = Number(card.dataset.id);

    goals = goals.map(goal => {

        if (goal.id === id) {
            goal.completed = e.target.checked;
        }

        return goal;
    });

    localStorage.setItem(
        "goals",
        JSON.stringify(goals)
    );

    renderGoals();
}
const skillInput = document.getElementById("skill-input");
const addBtn = document.getElementById("add-btn");
const skillsList = document.getElementById("skills-list");

function addSkill() {
    const skillValue = skillInput.value.trim();
    if (skillValue === "") {
        alert("Please enter a skill!");
        return;
    }

    const skillDiv = document.createElement("div");
    skillDiv.classList.add("skill");
    skillDiv.innerHTML = `${skillValue} <span class="delete-btn">x</span>`;
    
    const deleteBtn = skillDiv.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => {
    skillDiv.remove();
    });
    skillsList.appendChild(skillDiv);
    skillInput.value = "";
}

addBtn.addEventListener("click", addSkill);
skillInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
    addSkill();
    }
});

document.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
    e.target.parentElement.remove();
    });
});

const elements =
document.querySelectorAll(
'.section, .card, .skill'
);

function reveal() {

    elements.forEach(el => {

        const top =
        el.getBoundingClientRect().top;

        const visible =
        window.innerHeight - 100;

        if(top < visible){

            el.classList.add('active');
        }

    });

}

elements.forEach(el => {

    el.classList.add('reveal');

});

window.addEventListener(
'scroll',
reveal
);

reveal();

const skillSets = [
    {
        title: "Computing Skills",
        skills: ["Python", "MATLAB", "Fortran", "Lyx/Latex","Github","Git","OceanDataView","HTML","R","C++"]
    },
    {
        title: "Languages",
        skills: [
            { text: "Spanish (Native)", flag: "assets/es.svg" },
            { text: "English (Proficient)", flag: "assets/gb.svg" },
            { text: "French (Independent)", flag: "assets/fr.svg" },
            { text: "Italian (Independent)", flag: "assets/it.svg" },
            { text: "Chinese (Basic)", flag: "assets/cn.svg" }
        ]
    },
    {
        title: "Soft Skills",
        skills: [
            { text: "Data Visualisation", icon: "assets/chart.svg" },
            { text: "Scientific Writing", icon: "assets/pen.svg" },
            { text: "Problem Solving", icon: "assets/brain.svg" },
            { text: "Oral Communication and Outreach", icon: "assets/mic.svg" },
            { text: "Teamwork", icon: "assets/users.svg" }
        ]
    }
];

let currentIndex = 0;

function renderSkills() {

    const category = document.getElementById("skills-category");
    const content = document.getElementById("skills-content");

    const current = skillSets[currentIndex];

    category.textContent = current.title;

    content.innerHTML = current.skills.map(skill => {

    if (typeof skill === "object") {

        return `
            <div class="skill language-skill">
                <img class="flag-top" src="${skill.flag}" alt="flag">
                <div class="skill-text">${skill.text}</div>
            </div>
        `;
    }

    return `<div class="skill">${skill}</div>`;

}).join("");
}

function changeSkill(direction) {

    currentIndex += direction;

    if(currentIndex < 0){
        currentIndex = skillSets.length - 1;
    }

    if(currentIndex >= skillSets.length){
        currentIndex = 0;
    }

    renderSkills();
}

renderSkills();

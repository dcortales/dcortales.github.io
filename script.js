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
            { text: "Spanish (Native)", flag: "🇪🇸" },
            { text: "English (Proficient)", flag: "🇬🇧" },
            { text: "French (Independent)", flag: "🇫🇷" },
            { text: "Italian (Independent)", flag: "🇮🇹" },
            { text: "Chinese (Basic)", flag: "🇨🇳" }
        ]
    },
    {
        title: "Soft Skills",
        skills: ["Data Visualisation","Scientific Writing", "Problem Solving", "Oral Communication and Outreach", "Teamwork"]
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
                    <div class="flag-top">${skill.flag}</div>
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

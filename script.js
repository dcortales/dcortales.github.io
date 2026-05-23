const icons = {
    chart: `
        <svg viewBox="0 0 24 24" class="svg-icon">
            <path d="M3 3v18h18" fill="none" stroke="currentColor" stroke-width="2"/>
            <path d="M7 15l3-4 3 2 4-6" fill="none" stroke="currentColor" stroke-width="2"/>
        </svg>
    `,

    pen: `
        <svg viewBox="0 0 24 24" class="svg-icon">
            <path d="M12 20h9" fill="none" stroke="currentColor" stroke-width="2"/>
            <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"
                  fill="none" stroke="currentColor" stroke-width="2"/>
        </svg>
    `,

    brain: `
        <svg viewBox="0 0 24 24" class="svg-icon">
            <path d="M8 12a4 4 0 1 1 8 0" fill="none" stroke="currentColor" stroke-width="2"/>
            <path d="M6 8a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3z"
                  fill="none" stroke="currentColor" stroke-width="2"/>
        </svg>
    `,

    mic: `
        <svg viewBox="0 0 24 24" class="svg-icon">
            <path d="M12 14a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v5a3 3 0 0 0 3 3z"
                  fill="none" stroke="currentColor" stroke-width="2"/>
            <path d="M19 11a7 7 0 0 1-14 0" fill="none" stroke="currentColor" stroke-width="2"/>
            <path d="M12 18v4" fill="none" stroke="currentColor" stroke-width="2"/>
        </svg>
    `,

    users: `
        <svg viewBox="0 0 24 24" class="svg-icon">
            <path d="M16 11a4 4 0 1 0-8 0" fill="none" stroke="currentColor" stroke-width="2"/>
            <path d="M4 21v-1a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v1"
                  fill="none" stroke="currentColor" stroke-width="2"/>
        </svg>
    `
};

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
            { text: "Data Visualisation", icon: "chart" },
            { text: "Scientific Writing", icon: "pen" },
            { text: "Problem Solving", icon: "brain" },
            { text: "Oral Communication and Outreach", icon: "mic" },
            { text: "Teamwork", icon: "users" }
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
            <div class="skill soft-skill">
                <div class="skill-icon">
                    ${icons[skill.icon]}
                </div>
                <div class="skill-text">
                    ${skill.text}
                </div>
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

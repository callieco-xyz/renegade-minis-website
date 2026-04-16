// get the json file and pass it as a promise. All the data is
// currently being passed to fillSkillBox which is not ideal
fetch("js/roster_data.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        fillSkillBox(data)
    });

// Some elements on the page we need references to.
const skill_select = document.getElementById('skills');
const selected_skills = document.getElementById('selected_skills')

// Being able to detect a change in a select box is one way to
// trigger adding the skills to the player. Because there
// might be a lot of them this might need to be more complex
skill_select.addEventListener('change', function () {
    const selectedValue = skill_select.value;
    // When it does change we're throwing the new value right
    // to a function to change it on the page. This is really
    // basic functionality.
    handleSkillChange(selectedValue);
});


function fillSkillBox(data) {
    data.skills.forEach(skill => {
        const option = document.createElement('option');
        option.textContent = skill.name;
        skill_select.appendChild(option);
    });
}

function handleSkillChange(skillName) {
    const new_skill = document.createElement('p');
    new_skill.textContent = skillName
    selected_skills.appendChild(new_skill)
}

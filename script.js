var skillsBtn = document.getElementById('skillsBtn');
var educationBtn = document.getElementById('educationBtn');
var experienceBtn = document.getElementById('experienceBtn');
var skillsSection = document.getElementById('skills');
var educationSection = document.getElementById('education');
var experienceSection = document.getElementById('experience');
function hideAllSections() {
    skillsSection.classList.add('hidden');
    educationSection.classList.add('hidden');
    experienceSection.classList.add('hidden');
    skillsSection.classList.remove('show');
    educationSection.classList.remove('show');
    experienceSection.classList.remove('show');
}
skillsBtn.addEventListener('click', function () {
    hideAllSections();
    skillsSection.classList.remove('hidden');
    skillsSection.classList.add('show');
});
educationBtn.addEventListener('click', function () {
    hideAllSections();
    educationSection.classList.remove('hidden');
    educationSection.classList.add('show');
});
experienceBtn.addEventListener('click', function () {
    hideAllSections();
    experienceSection.classList.remove('hidden');
    experienceSection.classList.add('show');
});

const skillsBtn = document.getElementById('skillsBtn');
const educationBtn = document.getElementById('educationBtn');
const experienceBtn = document.getElementById('experienceBtn');

const skillsSection = document.getElementById('skills');
const educationSection = document.getElementById('education');
const experienceSection = document.getElementById('experience');

function hideAllSections() {
  skillsSection!.classList.add('hidden');
  educationSection!.classList.add('hidden');
  experienceSection!.classList.add('hidden');

  skillsSection!.classList.remove('show');
  educationSection!.classList.remove('show');
  experienceSection!.classList.remove('show');
}

skillsBtn!.addEventListener('click', () => {
  hideAllSections();
  skillsSection!.classList.remove('hidden');
  skillsSection!.classList.add('show');
});

educationBtn!.addEventListener('click', () => {
  hideAllSections();
  educationSection!.classList.remove('hidden');
  educationSection!.classList.add('show');
});

experienceBtn!.addEventListener('click', () => {
  hideAllSections();
  experienceSection!.classList.remove('hidden');
  experienceSection!.classList.add('show');
});

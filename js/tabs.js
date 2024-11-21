// tabs.js
document.addEventListener('DOMContentLoaded', () => {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  function switchTab(selectedBtn) {
      // Remove active class from all buttons and panes
      tabBtns.forEach(btn => btn.classList.remove('active'));
      tabPanes.forEach(pane => pane.classList.remove('active'));

      // Add active class to clicked button and corresponding pane
      selectedBtn.classList.add('active');
      const tabId = selectedBtn.dataset.tab;
      document.querySelector(`#${tabId}`).classList.add('active');
  }

  tabBtns.forEach(btn => {
      btn.addEventListener('click', () => switchTab(btn));
  });

  // Initialize first tab as active
  switchTab(tabBtns[0]);
});
// Add this to tabs.js
const workExperience = [
  {
      period: "Jan 2022 - Present",
      company: "Company Name",
      role: "Data Scientist",
      achievements: [
          "Key achievement 1",
          "Key achievement 2"
      ]
  }
  // Add more experiences
];

function renderWorkExperience() {
  const workPane = document.querySelector('#work');
  workPane.innerHTML = workExperience.map(exp => `
      <div class="experience-item">
          <div>
              <h3>${exp.role}</h3>
              <p>${exp.company}</p>
              <p>${exp.period}</p>
              <ul>
                  ${exp.achievements.map(a => `<li>${a}</li>`).join('')}
              </ul>
          </div>
      </div>
  `).join('');
}

// Call this after DOM content loaded
renderWorkExperience();

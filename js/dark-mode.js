const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme') || 'dark';
setTheme(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
});

function setTheme(theme) {
    if (theme === 'light') {
        root.style.setProperty('--bg-dark', '#ffffff');
        root.style.setProperty('--text-light', '#0a0a0a');
        themeToggle.textContent = '🌙';
        document.body.setAttribute('data-theme', 'light');
    } else {
        root.style.setProperty('--bg-dark', '#030613');
        root.style.setProperty('--text-light', '#ffffff');
        themeToggle.textContent = '🌞';
        document.body.setAttribute('data-theme', 'dark');
    }
    localStorage.setItem('theme', theme);
}
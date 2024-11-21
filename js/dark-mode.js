// dark-mode.js
const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;

themeToggle.addEventListener('click', () => {
    const isDark = root.style.getPropertyValue('--bg-dark') === '#030613';
    
    if (isDark) {
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
});
const modeTogle = document.querySelector('.mode-toggle');
const darkMode = document.querySelector('.dark-mode');

modeTogle.addEventListener('click', () => {
    darkMode.classList.toggle('active');
    modeTogle.classList.toggle('active');
});
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme'
    
};

const checkbox = document.querySelector('#theme-switch-toggle');
checkbox.addEventListener('change', switchTheme);

const savedTheme = localStorage.getItem('theme');
if (savedTheme === Theme.DARK) {
    document.body.classList.toggle(Theme.DARK);
    checkbox.checked = true;
} else {
    document.body.classList.toggle(Theme.LIGHT);
    checkbox.checked = false;
}

function switchTheme(event) {
    let checkboxState = event.currentTarget.checked;
    if (checkboxState) {        
        document.body.classList.replace(Theme.LIGHT, Theme.DARK);
        localStorage.setItem('theme', Theme.DARK);
    } else {
        document.body.classList.replace(Theme.DARK, Theme.LIGHT);
        localStorage.setItem('theme', Theme.LIGHT);
    }
}
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme'
    
};

const checkbox = document.querySelector('#theme-switch-toggle');
checkbox.addEventListener('change', switchTheme);

const savedThemeJSON = localStorage.getItem('theme');
const savedTheme = JSON.parse(savedThemeJSON);
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
        localStorage.setItem('theme', JSON.stringify(Theme.DARK));
        console.log(JSON.stringify(Theme.DARK));
    } else {
        document.body.classList.replace(Theme.DARK, Theme.LIGHT);
        localStorage.setItem('theme', JSON.stringify(Theme.LIGHT));
    }
}
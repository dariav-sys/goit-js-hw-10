import menuItemsTemplate from '../templates/menu-items.hbs';
import menu from '../menu.json';


const jsMenuRef = document.querySelector('.js-menu');

const markup = menuItemsTemplate(menu);
jsMenuRef.insertAdjacentHTML('beforeend', markup);
const menuBtn = document.querySelector('.menu-btn'); //dom element
const hamburger = document.querySelector('.menu-btn__burger');

const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');

const navItems = document.querySelectorAll('.menu-nav__item'); //selects all items, not only one

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));

        showMenu = true; // we know that menu is open
    } else {
        hamburger.classList.remove('open'); // opposite
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));


        showMenu = false;
    }
}
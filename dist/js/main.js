const menuBtn  = document.querySelector('.menu__btn');
const menuBurger  = document.querySelector('.menu__btn-burger');
const nav  = document.querySelector('.nav');
const menuNav  = document.querySelector('.menu__nav');
const menuNavItem  = document.querySelector('.menu__nav');
const menuNavList  = document.querySelectorAll('.menu__nav-item');

let menuOpen = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!menuOpen) {
        menuBurger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        menuNavList.forEach(item => item.classList.add('open'));

        menuOpen = true;
    } else {
        menuBurger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        menuNavList.forEach(item => item.classList.remove('open'));

        menuOpen = false;
    }
}
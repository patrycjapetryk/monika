"use strict";

const menuButton = document.querySelector('.navigation__button--js');
const navigationItems = document.querySelectorAll('.navigation__item--js');

menuButton.addEventListener('click', () => {
    navigationItems.forEach(item => {
        item.classList.toggle('navigation__item--active');
        item.classList.contains("navigation__item--active") ? menuButton.innerHTML = "close" : menuButton.innerHTML = "menu";
    });
});
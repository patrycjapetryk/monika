"use strict";

// import moment from 'moment';
// console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))

const menuButton = document.querySelector('.navigation__button--js');
const navigationItems = document.querySelectorAll('.navigation__item--js');

menuButton.addEventListener('click', () => {
    navigationItems.forEach(item => item.classList.toggle('navigation__item--active'));
})
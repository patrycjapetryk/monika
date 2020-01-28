'use strict';

const menuButton = document.querySelector('.navigation__button--js');
const navigationItems = document.querySelectorAll('.navigation__item--js');
const galleries = document.querySelectorAll('.gallery--js');
const galleryNavigationItems = document.querySelectorAll('.navigation__item--gallery-js');

const toggleMainNavigation = () => {
  navigationItems.forEach(item => {
    item.classList.toggle('navigation__item--active');
    item.classList.contains('navigation__item--active')
      ? (menuButton.innerHTML = 'close')
      : (menuButton.innerHTML = 'menu');
  });
};

const showSideMenuActiveItem = () => {
  galleryNavigationItems.forEach((listItem, index) => {
    const viewportOffsetTop = galleries[index].getBoundingClientRect().top;
    const halfOfWindowHeight = window.innerHeight / 2;
    const galleryHeight = galleries[index].clientHeight;
    if (
      viewportOffsetTop < halfOfWindowHeight &&
      viewportOffsetTop > -1 * (galleryHeight - halfOfWindowHeight)
    ) {
      listItem.querySelector('a').classList.add('navigation__link--active');
    } else {
      listItem.querySelector('a').classList.remove('navigation__link--active');
    }
  });
};

window.addEventListener('scroll', showSideMenuActiveItem);

menuButton.addEventListener('click', toggleMainNavigation);

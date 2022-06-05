// Burger

const menuIcon = document.querySelector('.menu__icon');
const navMenu = document.querySelector('.header__nav');
const nav = document.querySelector('.nav');
const spanMenu = document.querySelector('.menu__span');
const smallSection = document.querySelector('.only__section-small');


function aside() {
  navMenu.classList.toggle('active');
  nav.classList.toggle('active');
  menuIcon.classList.toggle('active');
  spanMenu.classList.toggle('active');
  smallSection.classList.toggle('active');


}

menuIcon.addEventListener('click', aside);

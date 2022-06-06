// Burger


const menuIconOur = document.querySelector('.menu__icon-our');
const navMenu = document.querySelector('.header__nav');
const nav = document.querySelector('.nav');
const spanMenu = document.querySelector('.menu__span');

const linkMenu = document.querySelector('.header__link')
const smallSection = document.querySelector('.container-our');



function aside() {
  navMenu.classList.toggle('active');
  nav.classList.toggle('active');
  menuIconOur.classList.toggle('active');
  spanMenu.classList.toggle('active');
  smallSection.classList.toggle('active');
}

function asideB() {
  navMenu.classList.remove('active');
  nav.classList.remove('active');
  menuIconOur.classList.remove('active');
  spanMenu.classList.remove('active');
  smallSection.classList.remove('active');
  smallSection.classList.remove('active');
}




menuIconOur.addEventListener('click', aside);
smallSection.addEventListener('click', asideB);
linkMenu.addEventListener('click', aside);


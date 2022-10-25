// Burger

const menuIcon = document.querySelector('.menu__icon');
const menuIconOur = document.querySelector('.menu__icon-our');
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

function asideB() {
  navMenu.classList.remove('active');
  nav.classList.remove('active');
  menuIcon.classList.remove('active');
  spanMenu.classList.remove('active');
  smallSection.classList.remove('active');
}

menuIcon.addEventListener('click', aside);
smallSection.addEventListener('click', asideB);

// FRIENDS SECTION

const friendsSection = document.querySelector('#friends');
fetch('./js/pets.json')
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      console.log('This is not 200OK');
      return Promise.reject(response);
    }
  })
  .then((data) => {
    // this is JSON

    const generateCard = (
      name,
      img,
      description,
      age,
      type,
      breed,
      inoculations,
      diseases,
      parasites
    ) => {
      return `<div class="friends-card">
            <img src="${img}" alt="${name}"/>
            <h4 class="card-title">${name}</h4>
            <button class="btn btn-friends btn-more" data-toggle-id="open">Learn more</button>
            
          </div>
          <div class="popup-wrapper hidden">
          
          <img src="${img}" alt="${name}" class="popup-img"/>
          <div class="wr">
              <h2 class="popup-title friends-title">${type}</h2>
              <p class="descr about-text">${description}</p>
              <h3 class="help-title popup-title">${breed}</h3>
              <span class="popup-age popup-title help-title">${age}</span>
              <button class="btn btn-friend btn-close">Close</button>
          </div>
    
          </div>
          
      `;
    };

    const cardHTMl = data
      .splice(Math.floor(Math.random() * data.length), 3)
      .map((card, i, arr) => {
        return generateCard(
          card.name,
          card.img,
          card.description,
          card.type,
          card.breed,
          card.age
        );
      })
      .join('');

    const header = document.createElement('h2');
    header.classList.add('friends-title');
    header.innerHTML = `Our friends who <br />
    are looking for a house`;
    container.insertAdjacentElement('beforebegin', header);
    let cards = document.createElement('div');
    cards.classList.add('friends', 'friends-wrapper');
    container.insertAdjacentElement('beforebegin', cards);
    cards.innerHTML = cardHTMl;
    const btn1 = document.createElement('button');
    btn1.classList.add('friends-arrow_l');
    cards.prepend(btn1);
    const btn2 = document.createElement('button');
    btn2.classList.add('friends-arrow');
    cards.append(btn2);

    function addCards() {
      const generateCard = (
        name,
        img,
        description,
        age,
        type,
        breed,
        inoculations,
        diseases,
        parasites
      ) => {
        return `<div class="friends-card">
              <img src="${img}" alt="${name}"/>
              <h4 class="card-title">${name}</h4>
              <button class="btn btn-friends btn-more" data-toggle-id="open">Learn more</button>
              
            </div>
            <div class="popup popup-wrapper hidden">
            
            <img src="${img}" alt="${name}" class="popup-img"/>
            <div class="wr">
                <h2 class="popup-title friends-title">${type}</h2>
                <p class="descr about-text">${description}</p>
                <h3 class="help-title popup-title">${breed}</h3>
                <span class="popup-age popup-title help-title">${age}</span>
                <button class="btn btn-friend btn-close">Close</button>
            </div>
            </div>
        `;
      };

      function moveSlide(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i - 1));
          console.log(j);
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
      }

      const cardHTMl = data
        .map((card, i, arr) => {
          return generateCard(
            card.name,
            card.img,
            card.description,
            card.type,
            card.breed,
            card.age
          );
        })
        .join('');

      container.insertAdjacentElement('beforebegin', cards);
      cards.innerHTML = cardHTMl;
      cards.prepend(btn1);
      cards.append(btn2);
    }
    const btnLeft = document.querySelector('.friends-arrow_l');
    btnLeft.addEventListener('click', addCards);
    const btnRigth = document.querySelector('.friends-arrow');
    btnRigth.addEventListener('click', addCards);
  })
  .catch((err) => {
    // Somtihing wrong
    console.warn('Something went wrong while receiving the information.');
    console.log(err);
  });

const frag = document.createDocumentFragment();
const container = document.createElement('div');
container.classList.add('container');

const buttonMore = document.createElement('a');
buttonMore.classList.add('btn', 'btn-friend');
buttonMore.setAttribute('href', 'pets/our-pets.html');
buttonMore.innerText = 'Get to know the rest';
container.insertAdjacentElement('beforeend', buttonMore);

const section = document.querySelector('.friends-section');
frag.appendChild(container);
section.appendChild(frag);
window.addEventListener('load', function () {

  let friends = document.querySelectorAll('.friends-card');

  let popup = document.querySelectorAll('.popup-wrapper');

  let btnMore = document.querySelectorAll('.btn-more');
  for (let i = 0; i < btnMore.length; i++) {
    btnMore[i].addEventListener('click', function () {
      display(popup[i], 'flex');
    });
  }

  popup.forEach(function (item, i) {
    let btn = item.querySelector('button');
    function closePopup() {
      item.style.display = 'none';
    }
    btn.addEventListener('click', closePopup);
  });

  function display(elems, value) {
    value = value || 'block';
    if (elems instanceof HTMLElement) {
      elems.style.display = value;
      return;
    }
  }
  console.log(popup)
});











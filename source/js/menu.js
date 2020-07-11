const menu = document.querySelector(`.menu`);
const menuListItems = menu.querySelectorAll(`.menu__list-item`);

const openMenuIcon = menu.querySelector(`.menu__mobile`);
const closeMenuIcon = menu.querySelector(`.menu__cross`);

openMenuIcon.addEventListener(`click`, () => {
  for (let i = 0; i < menuListItems.length; i++) {
    menuListItems[i].classList.add(`shown`);

    openMenuIcon.classList.remove(`shown`);
    openMenuIcon.classList.add(`hidden`);

    closeMenuIcon.classList.remove(`hidden`);
    closeMenuIcon.classList.add(`shown`);
  }
});

closeMenuIcon.addEventListener(`click`, () => {
  for (let i = 0; i < menuListItems.length; i++) {

    menuListItems[i].classList.remove(`shown`);
    menuListItems[i].classList.add(`hidden`);

    openMenuIcon.classList.remove(`hidden`);
    openMenuIcon.classList.add(`shown`);

    closeMenuIcon.classList.remove(`shown`);
    closeMenuIcon.classList.add(`hidden`);
  }
});

// #1 Простой слайдер
// Тот же слайдер, только закольцованный

const leftArrow = document.querySelector('#left');
const rightArrow = document.querySelector('#right');
const itemsList = document.querySelector('#items');

const loop = (direction, e) => {
  e.preventDefault();
  if (direction == "right") {
    // если перед appendChild не было create, он возьмет существующий в DOM элемент и переместит его в конец
    itemsList.appendChild(itemsList.firstElementChild);
  } else {
    // что и куда вставляем: последний элемент перед первым
    itemsList.insertBefore(itemsList.lastElementChild, itemsList.firstElementChild);
  }
};

leftArrow.addEventListener('click', event => loop("left", event));

rightArrow.addEventListener('click', event => loop("right", event));
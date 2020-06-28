// #1 Простой слайдер
// Это простейший слайдер элементов. При клике на правую стрелочку, элементы должны сдвигаться вправо. 
// При клике на левую стрелочку, элементы должны сдвигаться влево.

const leftArrow = document.querySelector('#left');
const rightArrow = document.querySelector('#right');
const itemsList = document.querySelector('#items');
const items = document.querySelectorAll('.item'); // псевдомассив (nodelist)

const minRight = 0;
const itemWidth = getComputedStyle(items[0]).width;
const step = parseInt(itemWidth);
const visibleItemsNumber = 300 / step;
const maxRight = (items.length - visibleItemsNumber) * step;
let currentRightPosition = 0; // не хорошо, когда есть глобальные переменные
itemsList.style.right = currentRightPosition;

leftArrow.addEventListener('click', event => {
  event.preventDefault();
  if (currentRightPosition > minRight) {
    currentRightPosition -= step;
    itemsList.style.right = `${currentRightPosition}px`;
  }
});

rightArrow.addEventListener('click', event => {
  event.preventDefault();
  if (currentRightPosition < maxRight) {
    currentRightPosition += step;
    itemsList.style.right = `${currentRightPosition}px`;
  }
});
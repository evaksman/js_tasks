// #1 Создание и работа с DOM
// При изменении поля number создаются одинаковые блоки (div) внутри которых расположено число обозначающее их порядковый номер (начиная с 1). 
// При изменении поля color эти блоки перекрашиваются в цвет выбранный в этом поле. 
// При первом изменении поля color закрашиваются блоки с нечетными номерами (1, 3, 5, 7...), 
// при втором изменении поля, окрашиваются блоки с четными (2, 4, 6, 8...), при третьем снова нечетные и т.д.

const amountSelector = document.querySelector(".amount-selector");
const colorSelector = document.querySelector(".color-selector");
const blocksContainer = document.querySelector(".blocks");

const createMarkup = quantity => {
  let markup = "";

  for (let i = 0; i < quantity; i++) {
    const block = document.createElement("div");
    block.className = "item";
    block.innerText = i + 1;

    markup += block.outerHTML; // и внутренности, и сам блок
  }

  return markup;
};

amountSelector.addEventListener("change", event => {
  const amount = event.target.value; // кол-во блочков
  const markup = createMarkup(amount);

  blocksContainer.innerHTML = markup;
});

const colorTheBlock = (block, color) => {
  block.style.backgroundColor = color;
};

let changed = false;

colorSelector.addEventListener("change", event => {
  const color = event.target.value; // цвет в 16 CC
  const items = blocksContainer.querySelectorAll(".item");

  changed = !changed;

  for (let i = 0; i < items.length; i++) {
    const currentBlock = items[i];
    const blockNumber = i + 1;
    let colorToApply = "";

    if (changed) colorToApply = blockNumber % 2 != 0 ? color : "#fff";
    else colorToApply = blockNumber % 2 == 0 ? color : "#fff";  

    colorTheBlock(currentBlock, colorToApply);
  }
});
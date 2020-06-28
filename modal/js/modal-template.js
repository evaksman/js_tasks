// #2 Модальное окно
// То же модальное окно, только реализованное с пом. шаблона

const openButton = document.querySelector('#openOverlay');
const body = document.body;
const modalContent = createModal("Hello, <b>world</b>!");

openButton.addEventListener("click", event => {
  body.appendChild(modalContent);
});

function createModal(content) {
  const overlayElement = document.createElement("div");
  overlayElement.classList.add("overlay");

  const template = document.querySelector("#overlayTemplate");

  overlayElement.innerHTML = template.innerHTML;
  overlayElement.addEventListener("click", event => {
      if (event.target == overlayElement)
        closeElement.click(); // перенаправим на уже существующий обработчик с нужным действием
  });


  const closeElement = overlayElement.querySelector(".close");
  closeElement.addEventListener("click", event => {
    event.preventDefault();
    body.removeChild(overlayElement);
  });

  const contentElement = overlayElement.querySelector(".content");
  contentElement.innerHTML = content;
  
  return overlayElement;
}
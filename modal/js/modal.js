// #2 Модальное окно
// На странице создан произвольный контент и кнопка вызова модального окна. 
// По нажатию нужно отобразить оверлей (блок с затемнением) и модальное окно по середине экрана. 
// Разметка внутри оверлея должа быть создана при помощи javaScript. 
// Закрыть модальное окно можно нажатием на кнопку закрыть либо по клику вне области модального окна.

const openButton = document.querySelector('#openOverlay');
const body = document.body;
const modalContent = createModal("Hello, <b>world</b>!");

openButton.addEventListener("click", event => {
  body.appendChild(modalContent);
});

function createModal(content) {
  const overlayElement = document.createElement("div");
  overlayElement.classList.add("overlay");

  overlayElement.addEventListener("click", event => {
    if (!event.target.classList.contains("content"))
      closeElement.click(); // перенаправим на уже существующий обработчик с нужным действием
  });

  const containerElement = document.createElement("div");
  containerElement.classList.add("overlay-container");

  const contentElement = document.createElement("div");
  contentElement.classList.add("content");
  contentElement.innerHTML = content;

  const closeElement = document.createElement("a");
  closeElement.classList.add("close");
  closeElement.textContent = "x";
  closeElement.href = "#";

  closeElement.addEventListener("click", event => {
    event.preventDefault();
    body.removeChild(overlayElement);
  });

  containerElement.appendChild(closeElement);
  containerElement.appendChild(contentElement);
  overlayElement.appendChild(containerElement);

  return overlayElement;
}
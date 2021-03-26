import gallery from "../data/gallery-items"
console.log(gallery)
const refs = {
    gallery: document.querySelector('.js-gallery'),
    modal: document.querySelector(".js-lightbox"),
    modalImg: document.querySelector(".lightbox__image"),
    button: document.querySelector(".lightbox__button"),
    overlay: document.querySelector(".lightbox__overlay")

}

const marcap = gallery.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    
})

console.log(marcap)
refs.gallery.insertAdjacentHTML('beforeend', marcap.join(''));

// Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
refs.gallery.addEventListener('click', onOpenModal);

function onOpenModal(evt) {
    evt.preventDefault();
    console.log(evt.target.nodeName);
    if (evt.target.nodeName !== 'IMG') {
        return;
    }
    refs.modal.classList.add('is-open');
    changeLighboxImgSetting(evt.target.src, evt.target.dataset.source);
    // refs.modalImg.src = evt.target.dataset.source;
    // refs.modalImg.alt = evt.target.alt;
}

// Подмена значения атрибута src элемента img.lightbox__image.

function changeLighboxImgSetting(alt, src) {
  refs.modalImg.alt = alt;
  refs.modalImg.src = src;
}


// Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].

refs.button.addEventListener('click', closeModal)
function closeModal() {
    refs.modal.classList.remove('is-open');
    // Очистка значения атрибута src элемента img.lightbox__image.
  // Это необходимо для того, чтобы при следующем открытии модального окна, пока грузится изображение, мы не видели предыдущее.
  changeLighboxImgSetting("", "");
}

//  Закрытие модального окна по клику на div.lightbox__overlay.

refs.overlay.addEventListener("click", closeModal)

// Закрытие модального окна по нажатию клавиши ESC.

window.addEventListener('keydown', (evt) => {
    if (evt.key !== 'Escape') {
        return;
    }
    closeModal();
});


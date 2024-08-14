import { isEscapeKey } from './utils.js';
import { renderFullsizePicture } from './fullsizepicture-render.js';

const pictureModalElement = document.querySelector('.big-picture');
const pictureContainerElement = document.querySelector('.pictures');
const pictureModalCloseElement = document.querySelector('.big-picture__cancel');

const socialCommentsCount = document.querySelector('.social__comment-count');
const newCommentsLoader = document.querySelector('.comments-loader');

function openPictureModal() {
  pictureModalElement.classList.remove('hidden');
  socialCommentsCount.classList.add('hidden');
  newCommentsLoader.classList.add('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
}

function closePictureModal() {
  pictureModalElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
}

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePictureModal();
  }
}

const onPictureContainerClick = (evt, data) => {
  const parentElement = evt.target.closest('.picture');

  if (!parentElement) {
    return;
  }

  evt.preventDefault();
  const parentElementId = Number(parentElement.dataset.id);
  const currentPictureData = data.find((item) => item.id === parentElementId);

  if (currentPictureData) {
    openPictureModal();
    renderFullsizePicture(currentPictureData);
  }
};

export const initPicturePreview = (pictures) => {
  pictureModalCloseElement.addEventListener('click', closePictureModal);

  pictureContainerElement.addEventListener('click', (evt) =>
    onPictureContainerClick(evt, pictures)
  );
};

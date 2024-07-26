import { isEscapeKey } from './utils.js';

const pictureUploadForm = document.querySelector('.img-upload__form');
const pictureUploadOverlay = document.querySelector('.img-upload__overlay');
const buttonUploadCancel = document.querySelector('.img-upload__cancel');
const pictureUploadInput = pictureUploadForm.querySelector('.img-upload__input');
const pictureUploadPreview = pictureUploadForm.querySelector('.img-upload__preview img');


function onUploadKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUploadModal();
  }
}

export function openUploadModal() {
  pictureUploadOverlay.classList.remove('.hidden');
  document.body.classList.add('.modal-open');

  buttonUploadCancel.addEventListener('click', closeUploadModal);
  document.addEventListener('keydown', onUploadKeydown);
}


pictureUploadInput.addEventListener('change', () => {
  openUploadModal();
});


export function closeUploadModal() {
  pictureUploadOverlay.classList.add('.hidden');
  document.body.classList.remove('.modal-open');

  pictureUploadForm.reset();
  buttonUploadCancel.removeEventListener('click', closeUploadModal);
  document.removeEventListener('keydown', onUploadKeydown);
}


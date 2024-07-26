import { isEscapeKey } from './utils.js';

const pictureUploadForm = document.querySelector('#upload-select-image');
const pictureUploadOverlay = document.querySelector('.img-upload__overlay');
const buttonUploadCancel = document.querySelector('#upload-cancel');
const pictureUploadInput = document.querySelector('.img-upload__input');


function onUploadKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUploadModal();
  }
}

function openUploadModal() {
  pictureUploadOverlay.classList.remove('.hidden');
  document.body.classList.add('.modal-open');

  buttonUploadCancel.addEventListener('click', closeUploadModal);
  document.addEventListener('keydown', onUploadKeydown);
}
pictureUploadInput.addEventListener('change', () => {
  console.log(pictureUploadInput);
  openUploadModal();
});


function closeUploadModal() {
  pictureUploadOverlay.classList.add('.hidden');
  document.body.classList.remove('.modal-open');

  pictureUploadForm.reset();
  buttonUploadCancel.removeEventListener('click', closeUploadModal);
  document.removeEventListener('keydown', onUploadKeydown);
}


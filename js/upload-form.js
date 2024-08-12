import { isEscapeKey, showAlert } from './utils.js';
import { sendData } from './api.js';
import { pristine } from './validate-form.js';
import { resetScaleValue } from './scale.js';
import { resetEffects } from './effect.js';

const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Опубликовываю...',
};

const pictureUploadForm = document.querySelector('.img-upload__form');
const pictureUploadOverlay = document.querySelector('.img-upload__overlay');
const buttonUploadCancel = document.querySelector('.img-upload__cancel');
const pictureUploadInput =
  pictureUploadForm.querySelector('.img-upload__input');
const hashtagsInput = pictureUploadForm.querySelector('.text__hashtags');
const descriptionTextarea =
  pictureUploadForm.querySelector('.text__description');
const submitButton = document.querySelector('.img-upload__submit');

const onUploadKeydown = (evt) => {
  if (
    isEscapeKey(evt) &&
    !(
      hashtagsInput === document.activeElement ||
      descriptionTextarea === document.activeElement
    )
  ) {
    evt.preventDefault();
    closeUploadModal();
  }
};

function closeUploadModal() {
  pictureUploadForm.reset();
  resetScaleValue();
  resetEffects();
  pristine.reset();

  pictureUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  buttonUploadCancel.removeEventListener('click', closeUploadModal);
  document.removeEventListener('keydown', onUploadKeydown);
}

const openUploadModal = () => {
  pictureUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');

  buttonUploadCancel.addEventListener('click', closeUploadModal);
  document.addEventListener('keydown', onUploadKeydown);
};

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = SubmitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = SubmitButtonText.IDLE;
};

export const setupValidation = (onSuccess) => {
  const onFormSubmit = (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(new FormData(evt.target))
        .then(onSuccess)
        .catch((err) => {
          showAlert(err.message);
        })
        .finally(unblockSubmitButton);
    }
  };
  pictureUploadForm.addEventListener('submit', onFormSubmit);
  pictureUploadInput.addEventListener('change', () => {
    openUploadModal();
  });
};

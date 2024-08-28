import { isEscapeKey } from './utils.js';
import { validateForm, resetValidation } from './validate-form.js';
import { resetScaleValue } from './scale.js';
import { resetEffects } from './effect.js';
import { sendData } from './api.js';
import { openAlertMessage } from './message.js';

const pictureUploadForm = document.querySelector('.img-upload__form');
const pictureUploadOverlay = document.querySelector('.img-upload__overlay');
const filterUploadEffectLevel = document.querySelector('.effect-level');
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
  resetValidation();

  pictureUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  buttonUploadCancel.removeEventListener('click', closeUploadModal);
  document.removeEventListener('keydown', onUploadKeydown);
}

const openUploadModal = () => {
  filterUploadEffectLevel.classList.add('hidden');
  pictureUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');

  buttonUploadCancel.addEventListener('click', closeUploadModal);
  document.addEventListener('keydown', onUploadKeydown);
};

const blockSubmitButton = () => {
  submitButton.disabled = true;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
};

const resetUploadForm = () => {
  pictureUploadForm.reset();
  closeUploadModal();
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
  const isValid = validateForm();
  if (isValid) {
    blockSubmitButton();

    sendData(new FormData(evt.target))
      .then(() => {
        resetUploadForm();
        openAlertMessage('success');
      })
      .catch(() => {
        openAlertMessage('error');
      })
      .finally(unblockSubmitButton);
  }
};

export const setFormSubmit = () => {
  pictureUploadForm.addEventListener('submit', onFormSubmit);
  pictureUploadInput.addEventListener('change', openUploadModal);
};

import { isEscapeKey } from './utils.js';
import { pristine } from './validate-form.js';
import { resetScaleValue } from './scale.js';
import { resetEffects } from './effect.js';
import { sendData } from './api.js';
import { isOpenAlertMessage } from './message.js';

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
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
};

const isResetUploadForm = () => {
  pictureUploadForm.reset();
  closeUploadModal();
};

export const setFormSubmit = (success) => {
  const onFormSubmit = (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      isOpenAlertMessage(success);
      blockSubmitButton();
      isResetUploadForm();
      sendData(new FormData(evt.target))
        .then(success)
        .catch((error) => {
          isOpenAlertMessage(error);
        })
        .finally(unblockSubmitButton);
    }
  };
  pictureUploadForm.addEventListener('submit', onFormSubmit);
  pictureUploadInput.addEventListener('change', () => {
    openUploadModal();
  });
};

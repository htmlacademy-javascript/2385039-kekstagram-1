import { isEscapeKey } from './utils.js';

const pictureUploadForm = document.querySelector('.img-upload__form');
const pictureUploadOverlay = document.querySelector('.img-upload__overlay');
const buttonUploadCancel = document.querySelector('.img-upload__cancel');
const pictureUploadInput =
  pictureUploadForm.querySelector('.img-upload__input');
const pictureUploadSubmit = pictureUploadForm.querySelector(
  '.img-upload__submit'
);
const hashtagsInput = pictureUploadForm.querySelector('.text__hashtags');
const descriptionTextarea =
  pictureUploadForm.querySelector('.text__description');

function onUploadKeydown(evt) {
  if (
    hashtagsInput === document.activeElement ||
    descriptionTextarea === document.activeElement
  ) {
    return false;
  }
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUploadModal();
  }
}

const HASHTAG_CURRENT = /^#[a-zа-яё0-9]{1,19}$/i;
const HASTAG_MAX_COUNT = 5;

const pristine = new Pristine(pictureUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'img-upload__field-wrapper--error',
}, false);


pristine
  .addValidator(hashtagsInput,
    (value) => value.length <= HASTAG_MAX_COUNT,
    'Нельзя указать больше пяти хэш-тегов');

pristine.addValidator(hashtagsInput,
  (value) => {
    const hashtagsArray = value.toLowerCase().trim().split(' ');
    return hashtagsArray.length === new Set(hashtagsArray).size;
  }, 'Хэш-тег не может быть использован дважды');

pristine
  .addValidator(hashtagsInput,
    (value) => {
      const hashtagsArray = value.split(' ');
      return value.length === 0 || hashtagsArray.every((hashtag) => HASHTAG_CURRENT.test(hashtag));
    }, 'Хэш-тег начинается с символа # (решётка) и не может состоять только из одной решётки');


const onButtonSubmitForm = (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  console.log(isValid);
};

pictureUploadSubmit.addEventListener('submit', onButtonSubmitForm);


export const openUploadModal = () => {
  pictureUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');

  buttonUploadCancel.addEventListener('click', closeUploadModal);
  document.addEventListener('keydown', onUploadKeydown);
};

pictureUploadInput.addEventListener('change', () => {
  openUploadModal();
});

function closeUploadModal() {
  pictureUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');

  pictureUploadForm.reset();
  pristine.reset();
  buttonUploadCancel.removeEventListener('click', closeUploadModal);
  document.removeEventListener('keydown', onUploadKeydown);
}

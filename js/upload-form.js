import { isEscapeKey } from './utils.js';

const HASHTAG_REGEX = /^#[a-zа-яё0-9]{1,19}$/i;
const HASHTAG_MAX_COUNT = 5;
const HASHTAG_ERRORS = {
  duplicate: 'Хэш-тег не может быть использован дважды',
  excess: 'Нельзя указать больше пяти хэш-тегов',
  regexp: 'Хэш-тег начинается с символа # (решётка), и после решётки добавьте буквы и числа',

};

const pictureUploadForm = document.querySelector('.img-upload__form');
const pictureUploadOverlay = document.querySelector('.img-upload__overlay');
const buttonUploadCancel = document.querySelector('.img-upload__cancel');
const pictureUploadInput =
  pictureUploadForm.querySelector('.img-upload__input');
const hashtagsInput = pictureUploadForm.querySelector('.text__hashtags');
const descriptionTextarea =
  pictureUploadForm.querySelector('.text__description');


const pristine = new Pristine(pictureUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'img-upload__field-wrapper--error',
}, false);


const onUploadKeydown = (evt) => {
  if (isEscapeKey(evt) && !(hashtagsInput === document.activeElement ||
  descriptionTextarea === document.activeElement)) {
    evt.preventDefault();
    closeUploadModal();
  }
};

function closeUploadModal() {
  pictureUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');

  pictureUploadForm.reset();
  pristine.reset();
  buttonUploadCancel.removeEventListener('click', closeUploadModal);
  document.removeEventListener('keydown', onUploadKeydown);
}


const onFormSubmit = (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  console.log(isValid);
};


const openUploadModal = () => {
  pictureUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');

  buttonUploadCancel.addEventListener('click', closeUploadModal);
  document.addEventListener('keydown', onUploadKeydown);
};


export const setupValidation = () => {
  pristine
    .addValidator(hashtagsInput,
      (value) => {
        const hashtagsArray = value.toLowerCase().trim().split(' ');
        return hashtagsArray.length === new Set(hashtagsArray).size;
      }, (HASHTAG_ERRORS['duplicate']));

  pristine
    .addValidator(hashtagsInput,
      (value) => value.split(' ').length <= HASHTAG_MAX_COUNT,
      (HASHTAG_ERRORS['excess']));

  pristine
    .addValidator(hashtagsInput,
      (value) => {
        const hashtagsArray = value.split(' ');
        return value.length && value[0] === HASHTAG_REGEX[0] || hashtagsArray.every((hashtag) => HASHTAG_REGEX.test(hashtag));
      }, (HASHTAG_ERRORS['regexp']));

  pictureUploadForm.addEventListener('submit', onFormSubmit);

  pictureUploadInput.addEventListener('change', () => {
    openUploadModal();
  });
};

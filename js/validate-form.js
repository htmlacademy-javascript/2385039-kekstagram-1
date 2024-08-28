const pictureUploadForm = document.querySelector('.img-upload__form');
const hashtagsInput = pictureUploadForm.querySelector('.text__hashtags');

const HASHTAG_REGEX = /^#[a-zа-яё0-9]{1,19}$/i;
const HASHTAG_MAX_COUNT = 5;
const HASHTAG_ERRORS = {
  duplicate: 'Хэш-тег не может быть использован дважды',
  excess: 'Нельзя указать больше пяти хэш-тегов',
  regexp:
    'Хэш-тег начинается с символа # (решётка), и после решётки добавьте буквы и числа',
};

const pristine = new Pristine(
  pictureUploadForm,
  {
    classTo: 'img-upload__field-wrapper',
    errorTextParent: 'img-upload__field-wrapper',
    errorTextTag: 'div',
    errorTextClass: 'img-upload__field-wrapper--error',
  },
  false
);

pristine.addValidator(
  hashtagsInput,
  (value) => {
    const hashtagsArray = value.toLowerCase().trim().split(' ');

    return hashtagsArray.length === new Set(hashtagsArray).size;
  },
  HASHTAG_ERRORS.duplicate
);

pristine.addValidator(
  hashtagsInput,
  (value) => value.split(' ').length <= HASHTAG_MAX_COUNT,
  HASHTAG_ERRORS.excess
);

pristine.addValidator(
  hashtagsInput,
  (value) => {
    const hashtagsArray = value.split(' ');

    return (
      value[0] === HASHTAG_REGEX[0] ||
      hashtagsArray.every((hashtag) => HASHTAG_REGEX.test(hashtag))
    );
  },
  HASHTAG_ERRORS.regexp
);

export const validateForm = () => pristine.validate();

export const resetValidation = () => pristine.reset();

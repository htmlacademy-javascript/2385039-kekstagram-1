const effectElement = {
  chrome: {
    range: {
      min: 0,
      max: 1,
    },
    effect: 'grayscale',
    start: 0,
    step: 0.1,
    unit: '',
  },
  sepia: {
    range: {
      min: 0,
      max: 1,
    },
    effect: 'sepia',
    start: 0,
    step: 0.1,
    unit: '',
  },
  marvin: {
    range: {
      min: 0,
      max: 100,
    },
    effect: 'invert',
    start: 0,
    step: 1,
    unit: '%',
  },
  phobos: {
    range: {
      min: 0,
      max: 3,
    },
    effect: 'blur',
    start: 0,
    step: 0.1,
    unit: 'px',
  },
  heat: {
    range: {
      min: 1,
      max: 3,
    },
    effect: 'brightness',
    start: 1,
    step: 0.1,
    unit: '',
  },
};

const pictureUploadPreview = document.querySelector('.img-upload__preview img');
const effectLevelSlider = document.querySelector('.effect-level__slider');
const filterEffectContainer = document.querySelector('.effects__list');
const effectLevelValue = document.querySelector('.effect-level__value');
const filterUploadEffectLevel = document.querySelector('.effect-level');
const effectRadioInput = document.querySelector('.effects__radio');


noUiSlider.create(effectLevelSlider, {
  range: {
    min: 0,
    max: 1,
  },
  start: 0,
  step: 0.1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

effectLevelSlider.noUiSlider.on('update', () => {
  const newLevelValue = effectLevelSlider.noUiSlider.get();
  effectLevelValue.value = newLevelValue;
});

filterEffectContainer.addEventListener('change', (evt) => {
  const targetEffect = evt.target.value;
  console.log(targetEffect);
});


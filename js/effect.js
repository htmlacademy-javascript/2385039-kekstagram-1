const EFFECTS = {
  chrome: {
    range: {
      min: 0,
      max: 1,
    },
    effect: 'grayscale',
    start: 1,
    step: 0.1,
    unit: '',
  },
  sepia: {
    range: {
      min: 0,
      max: 1,
    },
    effect: 'sepia',
    start: 1,
    step: 0.1,
    unit: '',
  },
  marvin: {
    range: {
      min: 0,
      max: 100,
    },
    effect: 'invert',
    start: 100,
    step: 1,
    unit: '%',
  },
  phobos: {
    range: {
      min: 0,
      max: 3,
    },
    effect: 'blur',
    start: 3,
    step: 0.1,
    unit: 'px',
  },
  heat: {
    range: {
      min: 1,
      max: 3,
    },
    effect: 'brightness',
    start: 3,
    step: 0.1,
    unit: '',
  },
};

const pictureUploadPreview = document.querySelector('.img-upload__preview img');
const effectLevelSlider = document.querySelector('.effect-level__slider');
const effectLevelValue = document.querySelector('.effect-level__value');
const filterUploadEffectLevel = document.querySelector('.effect-level');
const effectRadioInput = document.querySelector('.effects');

const showSlider = () => {
  filterUploadEffectLevel.classList.remove('hidden');
};

const hideSlider = () => {
  filterUploadEffectLevel.classList.add('hidden');
};

export const resetEffects = () => {
  pictureUploadPreview.className = '';
  pictureUploadPreview.style.filter = '';
  hideSlider();
};

const onEffectRadioChange = (evt) => {
  const targetEffect = evt.target.value;

  if (targetEffect === 'none') {
    resetEffects();
    return;
  }

  showSlider();
  const options = EFFECTS[targetEffect];

  effectLevelSlider.noUiSlider.on('update', () => {
    const cssEffect = options.effect;
    const cssUnit = options.unit;
    effectLevelValue.value = effectLevelSlider.noUiSlider.get();
    pictureUploadPreview.style.filter = `${cssEffect}(${effectLevelValue.value}${cssUnit})`;
  });

  pictureUploadPreview.className = `effects__preview--${targetEffect}`;
  effectLevelSlider.noUiSlider.updateOptions(options);
};

export const initEffects = () => {
  noUiSlider.create(effectLevelSlider, {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
    connect: 'lower',
    format: {
      to: (value) => (Number.isInteger(value) ? value : value.toFixed(1)),
      from: (value) => parseFloat(value),
    },
  });

  effectRadioInput.addEventListener('change', onEffectRadioChange);
};

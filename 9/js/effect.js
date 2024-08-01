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
const effectLevelValue = document.querySelector('.effect-level__value');
const filterUploadEffectLevel = document.querySelector('.effect-level');
const effectRadioInput = document.querySelector('.effects');
const sliderElement = document.querySelector('.img-upload__effect-level');

/*const isDefault = () => {
  sliderElement.classList.add('hidden');
  closeSlader();
};

function closeSlader() {
  filterUploadEffectLevel.classList.add('hidden');
}

const openSlader = () => {
  filterUploadEffectLevel.classList.remove('hidden');
};
openSlader();*/

effectLevelValue.value = 100;

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

effectLevelSlider.noUiSlider.on('update', () => {
  effectLevelValue.value = effectLevelSlider.noUiSlider.get();
});

effectRadioInput.addEventListener('change', (evt) => {
  const targetEffect = evt.target.value;
  console.log(targetEffect);

  if (targetEffect === 'chrome') {
    pictureUploadPreview.classList = '';
    pictureUploadPreview.classList.add('effects__preview--chrome');
    effectLevelSlider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    });
  } else if (targetEffect === 'sepia') {
    pictureUploadPreview.classList = '';
    pictureUploadPreview.classList.add('effects__preview--sepia');
    effectLevelSlider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    });
  } else if (targetEffect === 'marvin') {
    pictureUploadPreview.classList = '';
    pictureUploadPreview.classList.add('effects__preview--marvin');
    effectLevelSlider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100,
      },
      start: 0,
      step: 1,
    });
  } else if (targetEffect === 'phobos') {
    pictureUploadPreview.classList = '';
    pictureUploadPreview.classList.add('effects__preview--phobos');
    effectLevelSlider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 3,
      },
      start: 0,
      step: 0.1,
    });
  } else if (targetEffect === 'heat') {
    pictureUploadPreview.classList = '';
    pictureUploadPreview.classList.add('effects__preview--heat');
    effectLevelSlider.noUiSlider.updateOptions({
      range: {
        min: 1,
        max: 3,
      },
      start: 0,
      step: 0.1,
    });
  } else {
    pictureUploadPreview.classList = '';
    pictureUploadPreview.classList.add('effects__preview--none');
    effectLevelSlider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
    });
    effectLevelSlider.noUiSlider.set(100);
  }
});

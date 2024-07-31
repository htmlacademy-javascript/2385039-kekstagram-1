const buttonScaleSmaller = document.querySelector('.scale__control--smaller');
const buttonScaleBigger = document.querySelector('.scale__control--bigger');
const pictureUploadPreview = document.querySelector('.img-upload__preview img');
const scaleControlValue = document.querySelector('.scale__control--value');

const MIN_SCALE_VALUE = 25;
const MAX_SCALE_VALUE = 100;
const DEFAULT_SCALE_STEP = 25;
const DEFAULT_SCALE_VALUE = 100;

const changeScalePicture = (value) => {
  scaleControlValue.value = `${value}%`;
  pictureUploadPreview.style.transform = `scale(${value / 100})`;
};

const onButtonScaleBiggerClick = () => {
  const inputScaleValue = parseInt(scaleControlValue.value, 10);
  let newScaleValue = inputScaleValue + DEFAULT_SCALE_STEP;

  if (newScaleValue > MAX_SCALE_VALUE) {
    newScaleValue = MAX_SCALE_VALUE;
  }
  changeScalePicture(newScaleValue);
};

const onButtonScaleSmallerClick = () => {
  const inputScaleValue = parseInt(scaleControlValue.value, 10);
  let newScaleValue = inputScaleValue - DEFAULT_SCALE_STEP;

  if (newScaleValue < MIN_SCALE_VALUE) {
    newScaleValue = MIN_SCALE_VALUE;
  }
  changeScalePicture(newScaleValue);
};


export const resetScaleValue = () => {
  changeScalePicture(DEFAULT_SCALE_VALUE);
  buttonScaleBigger.addEventListener('click', onButtonScaleBiggerClick);
  buttonScaleSmaller.addEventListener('click', onButtonScaleSmallerClick);
};



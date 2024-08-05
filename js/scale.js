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

const onButtonScaleSmallerClick = () => {
  const inputScaleValue = parseInt(scaleControlValue.value, 10);
  changeScalePicture(
    Math.max(inputScaleValue - DEFAULT_SCALE_STEP, MIN_SCALE_VALUE)
  );
};

const onButtonScaleBiggerClick = () => {
  const inputScaleValue = parseInt(scaleControlValue.value, 10);
  changeScalePicture(
    Math.min(inputScaleValue + DEFAULT_SCALE_STEP, MAX_SCALE_VALUE)
  );
};

export const resetScaleValue = () => {
  changeScalePicture(DEFAULT_SCALE_VALUE);
};

export const initScale = () => {
  buttonScaleBigger.addEventListener('click', onButtonScaleBiggerClick);
  buttonScaleSmaller.addEventListener('click', onButtonScaleSmallerClick);
};

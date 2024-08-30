const ALERT_SHOW_TIME = 5000;
const RERENDER_DELAY = 500;

export const isEscapeKey = (evt) => evt.key === 'Escape';
export const isEnterKey = (evt) => evt.key === 'Enter';

export const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export const shuffleArray = (array) => {
  const savedPictures = array.slice();
  for (let i = savedPictures.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = savedPictures[i];
    savedPictures[i] = savedPictures[j];
    savedPictures[j] = temp;
  }

  return savedPictures;
};

export const debounce = (callback, timeoutDelay = RERENDER_DELAY) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

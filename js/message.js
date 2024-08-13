import { isEscapeKey } from './utils.js';

function isOutsideKey(evt) {
  return evt.target.matches('section');
}

export const isOpenAlertMessage = (result, message, buttonText) => {
  const templateAlert = document
    .querySelector(`#${result}`)
    .content.querySelector(`.${result}`);
  const alert = templateAlert.cloneNode(true);

  const resultButtonClose = alert.querySelector(`.${result}__button`);

  if (message) {
    alert.querySelector(`.${result}__title`).textContent = message;
    resultButtonClose.textContent = buttonText;
  }

  function closeAlertMessage() {
    alert.remove();

    resultButtonClose.removeEventListener('click', closeAlertMessage);
    document.removeEventListener('click', closeClickHandler);
    document.removeEventListener('keydown', closeKeydownHandler);
  }

  function closeKeydownHandler(evt) {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      alert.remove();
    }

    resultButtonClose.removeEventListener('click', closeAlertMessage);
    document.removeEventListener('click', closeClickHandler);
    document.removeEventListener('keydown', closeKeydownHandler);
  }

  function closeClickHandler(evt) {
    if (isOutsideKey(evt)) {
      evt.preventDefault();
      alert.remove();
    }
  }

  document.body.append(alert);

  resultButtonClose.addEventListener('click', closeAlertMessage);
  document.addEventListener('click', closeClickHandler);
  document.addEventListener('keydown', closeKeydownHandler);
};

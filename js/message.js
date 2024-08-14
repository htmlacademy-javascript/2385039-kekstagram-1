import { isEscapeKey } from './utils.js';

export const openAlertMessage = (result, message, buttonText) => {
  const templateAlert = document
    .querySelector(`#${result}`)
    .content.querySelector(`.${result}`);
  const alert = templateAlert.cloneNode(true);

  const resultButtonClose = alert.querySelector(`.${result}__button`);

  if (message) {
    alert.querySelector(`.${result}__title`).textContent = message;
    resultButtonClose.textContent = buttonText;
  }

  const close = () => {
    alert.remove();
    document.removeEventListener('keydown', closeKeydownHandler);
  };

  function closeKeydownHandler(evt) {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      close();
    }
  }

  document.body.append(alert);
  resultButtonClose.addEventListener('click', () => close());
  document.addEventListener('keydown', closeKeydownHandler);
};

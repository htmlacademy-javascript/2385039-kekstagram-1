import { isEnterKey, isEscapeKey } from './utils.js';

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
    document.body.classList.remove('has-error');
    document.removeEventListener('keydown', closeEscKeyHandler);
    document.removeEventListener('click', closeEnterKeyHandler);
  };

  function closeEscKeyHandler(evt) {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      alert.remove();
    }
  }

  function closeEnterKeyHandler(evt) {
    if (isEnterKey(evt)) {
      evt.preventDefault();
      alert.remove();
    }
  }

  document.body.append(alert);
  resultButtonClose.addEventListener('click', () => close());
  document.addEventListener('keydown', closeEscKeyHandler);
  document.addEventListener('click', closeEnterKeyHandler);
  document.body.classList.add('has-error');
};

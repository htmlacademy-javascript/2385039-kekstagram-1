import { isEscapeKey } from './utils.js';

export const openAlertMessage = (type, message, buttonText) => {
  const templateAlert = document
    .querySelector(`#${type}`)
    .content.querySelector(`.${type}`);
  const alert = templateAlert.cloneNode(true);

  const buttonClose = alert.querySelector(`.${type}__button`);
  const innerElement = alert.querySelector(`.${type}__inner`);

  if (message) {
    alert.querySelector(`.${type}__title`).textContent = message;
    buttonClose.textContent = buttonText;
  }

  const close = () => {
    alert.remove();
    document.body.classList.remove('has-error');
    document.removeEventListener('keydown', closeEscKeyHandler);
  };

  function closeEscKeyHandler(evt) {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      close();
    }
  }

  const onAlertClick = (evt) => {
    if ((evt.target.closest(`.${type}__inner`) === innerElement)) {
      return;
    }
    close();
  };

  document.body.append(alert);
  alert.addEventListener('click', onAlertClick);
  buttonClose.addEventListener('click', () => close());
  document.addEventListener('keydown', closeEscKeyHandler);

  if (type === 'error') {
    document.body.classList.add('has-error');
  }
};

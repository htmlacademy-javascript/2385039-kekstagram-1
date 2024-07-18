import { isEscapeKey, isEnterKey } from './utils.js';
import { data } from './main.js';
/*import {renderPictures} from './render.js';*/

const userModalElement = document.querySelector('.big-picture');
const userModalOpenElement = document.querySelector('.pictures');
const userModalCloseElement = document.getElementById('picture-cancel');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

function openUserModal() {
  userModalElement.classList.remove('hidden');

  document.addEventListener('keydown', onDocumentKeydown);

  /*renderPictures();*/
}

function closeUserModal() {
  userModalElement.classList.add('hidden');

  document.removeEventListener('keydown', onDocumentKeydown);
}

userModalOpenElement.addEventListener('click', (evt) => {
  const parentElement = evt.target.closest('.picture');
  const parentElementData = parentElement.dataset.id;
  const parentElementId = +parentElementData;

  const pictureOpen = data.find((item) => item.id === parentElementId);

  console.log(evt.target);
  console.log(parentElement);
  console.log(parentElementData);
  console.log(typeof parentElementId);
  openUserModal(pictureOpen);
});

userModalOpenElement.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    openUserModal();
  }
});

userModalCloseElement.addEventListener('click', () => {
  closeUserModal();
});

userModalCloseElement.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    closeUserModal();
  }
});

export { openUserModal };

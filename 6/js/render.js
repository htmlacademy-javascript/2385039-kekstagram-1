const templateFragment = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');


const createPictureElement = ({url, description, comments, likes}) => {
  const pictureElement = templateFragment.cloneNode(true);

  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__img').alt = description;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.dataset.id = 'id';

  return pictureElement;
};

const renderPictures = (pictures) => {
  const fragment = document.createDocumentFragment();

  pictures.forEach((picture) => {
    const createElement = createPictureElement(picture);
    fragment.append(createElement);
  });

  container.append(fragment);
};


export { renderPictures };


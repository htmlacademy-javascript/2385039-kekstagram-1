const templateFragment = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');


const renderPhotos = (pictures) => {
  const createRender = ({url, description, comments, likes}) => {
    const renderElement = templateFragment.cloneNode(true);

    renderElement.querySelector('.picture__img').src = url;
    renderElement.querySelector('.picture__img').alt = description;
    renderElement.querySelector('.picture__comments').textContent = comments.length;
    renderElement.querySelector('.picture__likes').textContent = likes;

    return renderElement;

  };

  const render = document.createDocumentFragment();

  pictures.forEach((picture) => {
    const renderElement = createRender(picture);
    render.append(renderElement);
  });

  container.append(render);
};

export {renderPhotos};


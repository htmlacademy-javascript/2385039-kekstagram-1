import { shuffleArray } from './utils.js';
import { renderPictures } from './picture-render.js';

const pictureFilterContainer = document.querySelector('.img-filters');
const filterButtons = document.querySelectorAll('.img-filters__button');
const pictureContainer = document.querySelector('.pictures');

const PICTURE_RANDOM_NUMBER = 10;
let savedPictures = [];

const clearPicturesContainer = () => {
  const elements = pictureContainer.querySelectorAll('.picture');
  elements.forEach((element) => element.remove());
};

const getFilteredPictures = (pictures, filterId) => {
  switch (filterId) {
    case 'filter-random':
      return pictures
        .slice()
        .sort(shuffleArray(pictures))
        .slice(0, PICTURE_RANDOM_NUMBER);
    case 'filter-discussed':
      return pictures
        .slice()
        .sort((a, b) => b.comments.length - a.comments.length);
    case 'filter-default':
      return pictures;
    default:
      return pictures;
  }
};

const onFilterFormClick = (evt) => {
  const target = evt.target;
  filterButtons.forEach((button) =>
    button.classList.remove('img-filters__button--active')
  );

  target.classList.add('img-filters__button--active');
  const filteredPictures = getFilteredPictures(savedPictures, target.id);

  clearPicturesContainer();
  renderPictures(filteredPictures);
  console.log({ filteredPictures });
};

export const activateFilters = (pictures) => {
  savedPictures = pictures.slice();
  pictureFilterContainer.classList.remove('img-filters--inactive');
  pictureFilterContainer.addEventListener('click', onFilterFormClick);
};

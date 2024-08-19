const pictureSortContainer = document.querySelector('.img-filters');
const pictureSortsForm = document.querySelector('.img-filters__form');
const buttonSortSelector = pictureSortsForm.querySelectorAll(
  '.img-filters__button'
);

const PICTURE_RANDOM_NUMBER = 10;

const newArray = [];

const openSorterSelector = () => {
  pictureSortContainer.classList.remove('img-filters--inactive');
};
openSorterSelector();

const activateSorter = (evt) => {
  const target = evt.target;
  buttonSortSelector.forEach((button) =>
    button.classList.remove('img-filters__button--active')
  );
  target.classList.add('img-filters__button--active');
};

const sortRandomPictures = () => Math.floor(Math.random() * newArray.length);

const sortRandomUniquePictures = (array) =>
  new Set(array).size === array.length;

const sortDiscussedPictures = newArray
  .slice()
  .sort((a, b) => b.comments.length - a.comments.length);

const onButtonSortedPictures = (evt) => {
  const target = evt.target;
  switch (target.id) {
    case 'filter-random':
      console.log(newArray);
      return newArray
        .slice()
        .sort(sortRandomPictures)
        .slice(0, PICTURE_RANDOM_NUMBER);
    case 'filter-discussed':
      console.log(newArray);
      return newArray.slice().sort(sortDiscussedPictures);
    case 'filter-default':
      console.log(newArray);
      return newArray.slice();
  }
};

export const setSortedPictures = () => {
  pictureSortContainer.addEventListener('click', onButtonSortedPictures);
};

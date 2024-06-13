const SIMILAR_PHOTO_COUNT = 25;
const AVATAR_COUNT = 6;
const LIKES_MIN = 15;
const LIKES_MAX = 200;
const COMMENTS_COUNT = 10;

const NAMES = [
  'Маша',
  'Даша',
  'Саша',
  'Паша',
  'Варя',
  'Боря',
  'Поля',
  'Коля',
  'Толя',
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const PHOTO_DESCRIPTION = [
  'Купил билет в лучшую жизнь',
  'Отпуск не ждет',
  'Да, еще одно фото',
  'Отличный день',
  'Счастье на пляже',
  'Снова в дороге',
  'Улыбнись. Это все лишь фото',
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createRandomId = () => {
  let lastRandomId = 0;
  return () => {
    lastRandomId += 1;
    return lastRandomId;
  };
};

const createIdComment = createRandomId();

const createMessage = () =>
  Array.from({length: getRandomInteger(1, 2)}, () => getRandomArrayElement(COMMENTS)).join('');

const createComment = () => ({
  id: createIdComment(),
  avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});
createComment();

const createPhotos = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(PHOTO_DESCRIPTION),
  likes: getRandomInteger(LIKES_MIN, LIKES_MAX),
  comments: Array.from({length: getRandomInteger(0, COMMENTS_COUNT)}, createComment),
});
createPhotos();

const createContent = () => Array.from({length: SIMILAR_PHOTO_COUNT}, (_, photoIndex) => createPhotos(photoIndex + 1));
createContent();

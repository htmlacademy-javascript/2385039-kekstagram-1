const fullsizePicture = document.querySelector('.big-picture');
const socialCommentClone = document.querySelector('.social__comment');

const createFullsizePictureElement = ({
  url,
  likes,
  comments,
  comment,
  description,
}) => {
  fullsizePicture.querySelector('.big-picture__img').src = url;
  fullsizePicture.querySelector('.likes-count').textContent = likes;
  fullsizePicture.querySelector('.comments-count').textContent = comments;
  fullsizePicture.querySelector('.social__comments').textContent = comment;
  fullsizePicture.querySelector('.social__caption').alt = description;
};

const createSocialCommentElement = ({ avatar, name, comments }) => {
  const socialComment = socialCommentClone.cloneNode(true);
  socialComment.querySelector('.social__picture').url = avatar;
  socialComment.querySelector('.social__picture').alt = name;
  socialComment.querySelector('.social__text').textContent = comments;

  return socialComment;
};

const createComments = () => {};

export const renderFullsizePicture = () => {};

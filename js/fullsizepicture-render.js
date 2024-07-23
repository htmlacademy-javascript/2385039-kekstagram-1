const fullsizePicture = document.querySelector('.big-picture');
const socialCommentClone = document.querySelector('.social__comment');
const commentsContainer = document.querySelector('.social__comments');

const createSocialCommentElement = ({ avatar, message, name }) => {
  const socialComment = socialCommentClone.cloneNode(true);
  socialComment.querySelector('.social__picture').url = avatar;
  socialComment.querySelector('.social__picture').alt = name;
  socialComment.querySelector('.social__text').textContent = message;

  return socialComment;
};

const createComments = (comments) => {
  const fragment = document.createDocumentFragment();

  comments.forEach((comment) => {
    const createCommentElement = createSocialCommentElement(comment);
    fragment.append(createCommentElement);
  });
  commentsContainer.append(fragment);
};

export const renderFullsizePicture = ({
  url,
  likes,
  comments,
  description,
}) => {
  fullsizePicture.querySelector('.big-picture__img img').src = url;
  fullsizePicture.querySelector('.likes-count').textContent = likes;
  fullsizePicture.querySelector('.comments-count').textContent =
    comments.length;
  commentsContainer.innerHTML = '';
  createComments(comments);
  fullsizePicture.querySelector('.social__caption').alt = description;
};

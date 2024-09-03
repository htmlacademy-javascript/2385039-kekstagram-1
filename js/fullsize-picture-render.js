const fullsizePicture = document.querySelector('.big-picture');
const socialCommentClone = document.querySelector('.social__comment');
const commentsContainer = document.querySelector('.social__comments');
const socialCommentsCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');

const COMMENTS_STEP = 5;

let savedComments = [];

const createSocialCommentElement = ({ avatar, message, name }) => {
  const socialComment = socialCommentClone.cloneNode(true);
  socialComment.querySelector('.social__picture').url = avatar;
  socialComment.querySelector('.social__text').textContent = message;
  socialComment.querySelector('.social__picture').alt = name;

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

const renderFirstListComments = (comments) => {
  const displayedComments = comments.slice(0, COMMENTS_STEP);
  createComments(displayedComments);
  socialCommentsCount.firstChild.textContent = `${displayedComments.length} из `;
  commentsLoader.classList.remove('hidden');
};

const onShowMoreButtonClick = () => {
  const moreComments = savedComments.slice(
    commentsContainer.children.length,
    commentsContainer.children.length + COMMENTS_STEP
  );
  createComments(moreComments);
  socialCommentsCount.firstChild.textContent = `${commentsContainer.children.length} из `;

  if (commentsContainer.children.length === savedComments.length) {
    commentsLoader.classList.add('hidden');
  }
};

export const renderFullSizePicture = ({
  url,
  likes,
  comments,
  description,
}) => {
  fullsizePicture.querySelector('.big-picture__img img').src = url;
  fullsizePicture.querySelector('.likes-count').textContent = likes;
  fullsizePicture.querySelector('.comments-count').textContent =
    comments.length;
  fullsizePicture.querySelector('.social__caption').alt = description;
  commentsContainer.innerHTML = '';
  savedComments = comments;
  commentsLoader.classList.add('hidden');

  if (comments.length <= COMMENTS_STEP) {
    createComments(comments);
    socialCommentsCount.firstChild.textContent = `${comments.length} из `;
  } else {
    renderFirstListComments(comments);
    commentsLoader.addEventListener('click', onShowMoreButtonClick);
  }

};

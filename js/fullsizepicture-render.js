const fullsizePicture = document.querySelector('.big-picture');
const socialCommentClone = document.querySelector('.social__comment');
const commentsContainer = document.querySelector('.social__comments');
const socialCommentsCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');

let savedComments = [];
const STEP_COMMENTS = 5;

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

const savedFirstListComments = (comments) => {
  const displayedComments = comments.slice(0, STEP_COMMENTS);
  const renderFirstListComments = createComments(displayedComments);
  socialCommentsCount.firstChild.textContent = `${displayedComments.length} из `;
  commentsContainer.appendChild(renderFirstListComments);

  if (displayedComments.length === savedComments.length) {
    commentsLoader.classList.add('hidden');
  } else {
    commentsLoader.classList.remove('hidden');
  }
};

const onShowMoreButtonClick = () => {
  const moreComments = savedComments.slice(
    commentsContainer.children.length,
    commentsContainer.children.length + STEP_COMMENTS
  );
  const renderMoreComments = createComments(moreComments);
  socialCommentsCount.firstChild.textContent = `${commentsContainer.children.length} из `;
  commentsContainer.appendChild(renderMoreComments);

  if (savedComments.length === moreComments.length) {
    commentsLoader.classList.add('hidden');
  } else {
    commentsLoader.classList.remove('hidden');
  }
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
  fullsizePicture.querySelector('.social__caption').alt = description;
  commentsContainer.innerHTML = '';

  commentsLoader.addEventListener('click', onShowMoreButtonClick);
  savedComments = comments;
  savedFirstListComments(comments);
};

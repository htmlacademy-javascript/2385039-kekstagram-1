const fullsizePicture = document.querySelector('.big-picture');
const socialCommentClone = document.querySelector('.social__comment');
const commentsContainer = fullsizePicture.querySelector('.social__comments');
const pictureElement = document.querySelector('.picture');

const socialCommentsCount = fullsizePicture.querySelector(
  '.social__comment-count'
);
const newCommentsLoader = fullsizePicture.querySelector('.comments-loader');

let savedComments = [];
const STEP_COMMENTS = 5;
let commentsShownCount;

const createSocialCommentElement = ({ avatar, message, name }) => {
  const socialComment = socialCommentClone.cloneNode(true);
  socialComment.querySelector('.social__picture').url = avatar;
  socialComment.querySelector('.social__picture').alt = name;
  socialComment.querySelector('.social__text').textContent = message;

  return socialComment;
};

const updateCommentCount = (comments) => {
  socialCommentsCount.textContent = commentsShownCount;
  socialCommentsCount.innerHTML = `${commentsShownCount} из <span class="comments-count">${comments.length}</span>комментариев`;

  if (savedComments >= comments.length) {
    newCommentsLoader.classList.add('hidden');
  } else {
    newCommentsLoader.classList.remove('hidden');
  }
};

const createComments = () => {
  const fragment = document.createDocumentFragment();

  let i = commentsShownCount;
  for (i, i < Math.min(commentsShownCount + STEP_COMMENTS, savedComments.length); i++;) {
    const comment = document.createElement('li');
    comment.classList.add('social__comment');
    const createCommentElement = createSocialCommentElement(comment);
    fragment.append(createCommentElement);
  }
  commentsContainer.append(fragment);
  commentsShownCount = i;
};


const onShowMoreButtonClick = () => {
  createComments();
  updateCommentCount();
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
  createComments(comments);
  savedComments = comments;

};

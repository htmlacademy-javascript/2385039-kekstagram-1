const pictureUploadForm = document.querySelector('.img-upload__form');
const fileChooser = pictureUploadForm.querySelector('.img-upload__input');
const picturePreview = pictureUploadForm.querySelector(
  '.img-upload__preview img'
);
const previews = document.querySelectorAll('.effects__preview');

const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const onInputFileChange = (evt) => {
  const file = evt.target.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    const picture = URL.createObjectURL(file);
    picturePreview.src = picture;
    previews.forEach((preview) => {
      preview.style.backgroundImage = `url(${picture})`;
    });
  }
};

export const initPictureUpload = () => {
  fileChooser.addEventListener('change', onInputFileChange);
};


import { renderPictures } from './picture-render.js';
import { initPicturePreview } from './gallery.js';
import { getData } from './api.js';
import { showAlert } from './utils.js';
import { setupValidation } from './upload-form.js';
import { initScale } from './scale.js';
import { initEffect } from './effect.js';

initPicturePreview();
setupValidation();
initScale();
initEffect();

const SIMILAR_PHOTO_COUNT = 25;

getData()
  .then((data) => {
    renderPictures(data.slice(0, SIMILAR_PHOTO_COUNT));
  })
  .catch((err) => {
    showAlert(err.message);
  });

setupValidation();

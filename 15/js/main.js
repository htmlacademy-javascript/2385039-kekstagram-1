import { renderPictures } from './picture-render.js';
import { initPicturePreview } from './gallery.js';
import { initScale } from './scale.js';
import { initEffects } from './effect.js';
import { showAlert } from './utils.js';
import { getData } from './api.js';
import { setFormSubmit } from './upload-form.js';
import { activateFilters } from './filter.js';
import { initPictureUpload } from './upload-picture.js';

initPicturePreview();
initScale();
initEffects();
initPictureUpload();

getData()
  .then((data) => {
    renderPictures(data);
    activateFilters(data);
  })
  .catch((err) => {
    showAlert(err.message);
  });

setFormSubmit();

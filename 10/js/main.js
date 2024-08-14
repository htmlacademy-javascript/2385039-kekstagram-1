import { renderPictures } from './picture-render.js';
import { initPicturePreview } from './gallery.js';
import { initScale } from './scale.js';
import { initEffects } from './effect.js';
import { showAlert } from './utils.js';
import { getData } from './api.js';
import { setFormSubmit } from './upload-form.js';


initPicturePreview();
initScale();
initEffects();

getData()
  .then((data) => {
    renderPictures(data);
  })
  .catch((err) => {
    showAlert(err.message);
  });

setFormSubmit();

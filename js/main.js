import { renderPictures } from './picture-render.js';
import { initPicturePreview } from './gallery.js';
import { initScale } from './scale.js';
import { initEffects } from './effect.js';
import { showAlert } from './utils.js';
import { getData } from './api.js';
import { setFormSubmit } from './upload-form.js';
import { setSortedPictures } from './sort.js';
import { debounce } from './utils.js';

initPicturePreview();
initScale();
initEffects();

const RERENDER_DELAY = 500;

getData()
  .then((data) => {
    renderPictures(data);
    setSortedPictures(debounce(RERENDER_DELAY));
  })
  .catch((err) => {
    showAlert(err.message);
  });

setFormSubmit();

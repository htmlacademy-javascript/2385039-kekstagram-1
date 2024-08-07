import { createContent } from './data.js';
import { renderPictures } from './picture-render.js';
import { initPicturePreview } from './gallery.js';
import { setupValidation } from './upload-form.js';
import { initScale } from './scale.js';
import { initEffect } from './effect.js';

const data = createContent();
renderPictures(data);
initPicturePreview(data);
setupValidation();
initScale();
initEffect();

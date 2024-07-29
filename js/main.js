import { createContent } from './data.js';
import { renderPictures } from './picture-render.js';
import { initPicturePreview } from './gallery.js';
import './upload-form.js';

const data = createContent();
renderPictures(data);
initPicturePreview(data);

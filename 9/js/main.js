import { createContent } from './data.js';
import { renderPictures } from './picture-render.js';
import { initPicturePreview } from './gallery.js';
import { setupValidation } from './upload-form.js';
import { changeScalePicture } from './scale.js';
import './effect.js';


const data = createContent();
renderPictures(data);
initPicturePreview(data);
setupValidation();
changeScalePicture();

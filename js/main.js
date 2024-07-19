import { createContent } from './data.js';
import { renderPictures } from './picture-render.js';
import { initPicturePreview } from './gallery.js';


const data = createContent();
renderPictures(data);
initPicturePreview(data);

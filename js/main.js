import { createContent } from './data.js';
import { renderPictures } from './render.js';


const data = createContent();
renderPictures(data);

export { data };

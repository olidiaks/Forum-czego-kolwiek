import { discoMode } from './discoMode.js';
import { wypiszPost } from './wypiszPost.js';

const btnWdrukuj = document.getElementById('wydrukuj');

btnWdrukuj.addEventListener('click', wypiszPost);

document.addEventListener('keypress', discoMode);

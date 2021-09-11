import { wypiszPost } from "./wypiszPost.js";

const btnWdrukuj = document.getElementById('wydrukuj');

let nrPosta = 0;
btnWdrukuj.addEventListener('click', wypiszPost);

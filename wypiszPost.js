import { dzienMiesiacRok, godzinaMinutaSekunda } from './formatowanieCzasu.js';

export const wypiszPost = () => {
	const nazwaUzytkownika = document.getElementById(
		'inputNazwaUżytkownika',
	).value;
	const trescWpisu = document.getElementById('textareaWpis').value;
	const sekcjaWpisow = document.getElementById(`wpis`);
	const post = `
        <div class="post zaokronglonaBialaObramowka3px">
            <p  class="nazwaUzytkownika zaokronglonaBialaObramowka3px">Post został opublikowany dnia ${dzienMiesiacRok()} o godzinie ${godzinaMinutaSekunda()}, przez użytkownika: ${nazwaUzytkownika}</p>
            <p class="wpisUrzytkownika zaokronglonaBialaObramowka3px">${trescWpisu}</p>
        </div>
    `;
	sekcjaWpisow.innerHTML += post;
};

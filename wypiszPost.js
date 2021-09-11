import { dzienMiesiacRok, godzinaMinutaSekunda } from "./formatowanieCzasu.js";

export const wypiszPost = () => {
    
    const nazwaUzytkownika = document.getElementById('inputNazwaUżytkownika').value;
    const trescWpisu = document.getElementById('textareaWpis').value;
    const sekcjaWpisow = document.getElementById(`wpis`);
    const post = `
        <div class="post">
            <p  class="nazwaUzytkownika">Post został opublikowany dnia ${dzienMiesiacRok()} o godzinie ${godzinaMinutaSekunda()}, przez użytkownika: ${nazwaUzytkownika}</p>
            <p class="wpisUrzytkownika">${trescWpisu}</p>
        </div>
    `;
    sekcjaWpisow.innerHTML += post;
};
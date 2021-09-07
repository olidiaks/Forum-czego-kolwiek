import { dzienMiesiacRok, godzinaMinutaSekunda } from "./formatowanieCzasu.js";

export const wypiszPost = (nrPosta) => {
    
    const nazwaUzytkownika = document.getElementById('inputNazwaUżytkownika').value;
    const trescWpisu = document.getElementById('textareaWpis').value;
    const sekcjaWpisow = document.getElementById(`wpis`);
    const post = `
        <div id="post${nrPosta}" class="post">
            <p id="pNazwaUzytkownika${nrPosta}" class="nazwaUzytkownika"></p>
            <p id="pWpisUzytkownika${nrPosta}" class="wpisUrzytkownika"></p>
        </div>
    `;
    sekcjaWpisow.innerHTML += post;
    document.getElementById(`pNazwaUzytkownika${nrPosta}`).innerHTML = 
    `Post został opublikowany dnia ${dzienMiesiacRok()} o godzinie ${godzinaMinutaSekunda()}, przez użytkownika: ${nazwaUzytkownika}`;

    document.getElementById(`pWpisUzytkownika${nrPosta}`).innerHTML = trescWpisu;
};
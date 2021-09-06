const btnWdrukuj = document.getElementById('wydrukuj');

const wypiszPost = (nrPosta) => {
    const nazwaUzytkownika = document.getElementById('inputNazwaUżytkownika').value;
    const trescWpisu = document.getElementById('textareaWpis').value;
    const sekcjaWpisow = document.getElementById('post');
    const post = `
        <div id="post${nrPosta}" class="post">
            <p id="pNazwaUzytkownika${nrPosta}" class="nazwaUzytkownika"></p>
            <p id="pWpisUzytkownika${nrPosta}" class="wpisUrzytkownika"></p>
        </div>
    `;
    sekcjaWpisow.innerHTML += post;
    document.getElementById(`pNazwaUzytkownika${nrPosta}`).innerHTML = nazwaUzytkownika;
    document.getElementById(`pWpisUzytkownika${nrPosta}`).innerHTML = trescWpisu;
};
let nrPosta = 0;
btnWdrukuj.addEventListener('click', () => {
    nrPosta++;
    wypiszPost(nrPosta);
});

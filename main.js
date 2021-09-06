const btnWdrukuj = document.getElementById('wydrukuj');

const dzienMiesiacRok = () => {
    const data = new Date();
    let dzien;
    let miesiac;

    if(data.getDay()<10){
        dzien = `0${data.getDay()}`;
    }
    else{
        dzien = data.getDay();
    }
    
    if(data.getMonth()<10){
        miesiac = `0${data.getMonth()}`;
    }
    else{
        miesiac = data.getMonth();
    }
    
    return`${dzien}:${miesiac}:${data.getFullYear()}`

}

const godzinaMinutaSekunda = () => {
    const data = new Date();
    
    let godzina;
    let minuta;
    let sekunda;
    
    if(data.getHours()<10){
        godzina = `0${data.getHours()}`;
    }
    else{
        godzina = data.getHours();
    }

    if(data.getMinutes()<10){
        minuta = `0${data.getMinutes()}`;
    }
    else{
        minuta = data.getMinutes();
    }

    if(data.getSeconds()<10){
        sekunda = `0${data.getSeconds()}`;
    }
    else{
        sekunda = data.getSeconds();
    }

    return `${godzina}:${minuta}:${sekunda};`
}

const wypiszPost = (nrPosta) => {
    
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
let nrPosta = 0;
btnWdrukuj.addEventListener('click', () => {
    nrPosta++;
    wypiszPost(nrPosta);
});

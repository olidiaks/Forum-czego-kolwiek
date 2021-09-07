export const dzienMiesiacRok = () => {
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
    
    return`${dzien}.${miesiac}.${data.getFullYear()}`

}

export const godzinaMinutaSekunda = () => {
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

    return `${godzina}:${minuta}:${sekunda}`;
}

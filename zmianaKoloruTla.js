import { rgbKolor } from './rgbKolor.js';

export const zmienKolorTla = (numerKoloru) => {
	const kontener = document.getElementById('kontener');
	const body = document.body;
	kontener.style.backgroundColor = rgbKolor(numerKoloru + 2);
	body.style.backgroundColor = rgbKolor(numerKoloru);
};

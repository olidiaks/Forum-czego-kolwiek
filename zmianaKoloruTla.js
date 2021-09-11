import { rgbKolor } from './rgbKolor';

export const zmienKolorTla = (numerKoloru) => {
	const kontener = document.getElementById('kontener');
	const body = document.body;
	kontener.style.backgroundColor = rgbKolor(numerKoloru + 10);
	body.style.backgroundColor = rgbKolor(numerKoloru);
};

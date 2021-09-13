import { czyDiscoZostaloNapisane } from './czyDiscoZostaloWpisane.js';
import { koloryCzerwony } from './tablicaKoloryRGB.js';
import { zmienKolorTla } from './zmianaKoloruTla.js';

let czyDiscoZostaloWywolane = false;

export const discoMode = (key) => {
	if (czyDiscoZostaloNapisane(key) && !czyDiscoZostaloWywolane) {
		czyDiscoZostaloWywolane = true;
		let i = 0;
		setInterval(() => {
			i++;
			if (koloryCzerwony.length <= i) {
				i = 0;
			}
			zmienKolorTla(i);
		}, 300);
	}
};

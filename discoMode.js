import { czyDiscoZostaloNapisane } from './czyDiscoZostaloWpisane.js';
import { koloryCzerwony } from './tablicaKoloryRGB.js';
import { zmienKolorTla } from './zmianaKoloruTla.js';

export const discoMode = (key) => {
	if (czyDiscoZostaloNapisane(key)) {
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

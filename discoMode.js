import { czyDiscoZostaloNapisane } from './czyDiscoZostaloWpisane.js';
import { koloryZielony } from './tablicaKoloryRGB.js';
import { zmienKolorTla } from './zmianaKoloruTla.js';

export const discoMode = (key) => {
	if (czyDiscoZostaloNapisane(key)) {
		let i = 0;
		setInterval(() => {
			i++;
			if (koloryZielony.length <= i) {
				i = 0;
			}
			zmienKolorTla(i);
		}, 300);
	}
};

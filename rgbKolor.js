import {
	koloryCzerwony,
	koloryNiebieski,
	koloryZielony,
} from './tablicaKoloryRGB';

export const rgbKolor = (numerKoloru) => {
	let kolor = 'rgb(';

	if (koloryCzerwony.length <= numerKoloru + 20) {
		kolor += `${koloryCzerwony[numerKoloru + 20 - koloryCzerwony.length]},`;
	} else {
		kolor += `${koloryCzerwony[numerKoloru + 20]},`;
	}

	if (koloryZielony.length <= numerKoloru + 11) {
		kolor += `${koloryZielony[numerKoloru + 11 - koloryZielony.length]},`;
	} else {
		kolor += `${koloryZielony[numerKoloru + 11]},`;
	}

	if (koloryNiebieski.length <= numerKoloru + 4) {
		kolor += `${
			koloryNiebieski[numerKoloru + 4 - koloryNiebieski.length]
		},`;
	} else {
		kolor += `${koloryNiebieski[numerKoloru + 4]},`;
	}

	return kolor + ')';
};

import {
	koloryCzerwony,
	koloryNiebieski,
	koloryZielony,
} from './tablicaKoloryRGB.js';

export const rgbKolor = (numerKoloru) => {
	let kolor = 'rgb(';

	if (koloryCzerwony.length <= numerKoloru) {
		kolor += `${koloryCzerwony[numerKoloru - koloryCzerwony.length]},`;
	} else {
		kolor += `${koloryCzerwony[numerKoloru]},`;
	}

	if (koloryZielony.length <= numerKoloru) {
		kolor += `${koloryZielony[numerKoloru - koloryZielony.length]},`;
	} else {
		kolor += `${koloryZielony[numerKoloru]},`;
	}

	if (koloryNiebieski.length <= numerKoloru) {
		kolor += `${koloryNiebieski[numerKoloru - koloryNiebieski.length]},`;
	} else {
		kolor += koloryNiebieski[numerKoloru];
	}

	kolor += ')';
	return kolor;
};

import { czyPrzyciskWcisniety } from './czyPrzyciskWcisniety.js';

let dWcisniete = false;
let iWcisniete = false;
let sWcisniete = false;
let cWcisniete = false;

export const czyDiscoZostaloNapisane = (key) => {
	if (czyPrzyciskWcisniety('d', key) || czyPrzyciskWcisniety('D', key)) {
		dWcisniete = true;
		return false;
	}
	if (
		(czyPrzyciskWcisniety('i', key) || czyPrzyciskWcisniety('I', key)) &&
		dWcisniete
	) {
		iWcisniete = true;
		return false;
	}
	if (
		(czyPrzyciskWcisniety('s', key) || czyPrzyciskWcisniety('S', key)) &&
		iWcisniete
	) {
		sWcisniete = true;
		return false;
	}
	if (
		(czyPrzyciskWcisniety('c', key) || czyPrzyciskWcisniety('C', key)) &&
		sWcisniete
	) {
		cWcisniete = true;
		return false;
	}
	if (
		(czyPrzyciskWcisniety('o', key) || czyPrzyciskWcisniety('O', key)) &&
		cWcisniete
	) {
		return true;
	}
};

import { movie_description } from './data/movieData.js';
import { movieLocations } from './data/locationsdata.js';
import { search } from './events.js';
import { filetrCards } from './events.js';

const initializeApp = () => {
	movie_description();
	movieLocations();
	search();
	filetrCards();
};

initializeApp();

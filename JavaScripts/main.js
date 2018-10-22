import { writeMovie } from './data/movieData.js';
import { writeMovieLocation } from './data/locationsData.js';
import { searchMovie, filetrCards } from './events.js';

const initializeApp = () => {
	writeMovie();
	writeMovieLocation();
	searchMovie();
	filetrCards();
};

initializeApp();

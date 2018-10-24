import { movie_description } from './data/movieData.js';
import { movieLocations } from './data/locationsData.js';
import { searchMovie, filetrCards } from './events.js';

const initializeApp = () => {
	movie_description();
	movieLocations();
	searchMovie();
	filetrCards();
};

initializeApp();

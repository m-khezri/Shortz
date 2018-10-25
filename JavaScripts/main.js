import { movie_description } from './data/movieData.js';
import { movieLocations } from './data/locationsData.js';
import { searchMovie, filterCards } from './events.js';

const initializeApp = () => {
	movie_description();
	movieLocations();
	searchMovie();
	filterCards();
};

initializeApp();

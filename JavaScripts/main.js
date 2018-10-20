import { movie_description } from './data/movieData.js';
import { movieLocations } from './data/locationsdata.js';

const initializeApp = () => {
	movie_description();
	movieLocations();
};

initializeApp();

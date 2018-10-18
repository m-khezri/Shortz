import { writeMovie } from './components/movieComponent.js';
import { writeMovie } from './components/locationComponent.js';

const initializeApp = () => {
	writeMovie();
	writeMovieLocation();
};

initializeApp();

//  [AJAX call for movie data]
import { writeMovie } from '../components/movieComponent.js';
$.get('../db/movie.json')
	.done((data) => {
		writeMovie(data.movie);
	})
	.fail((error) => {
		console.error(error);
	});

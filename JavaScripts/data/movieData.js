import {} from '../components/movieComponent.js';

const movie_description = () => {
	$.get('../db/movie.json')
		.done((data) => {
			writeMovie(data.movie);
		})
		.fail((error) => {
			console.error(error);
		});
};

export { movie_description };

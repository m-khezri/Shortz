import { writeMovieLocation } from '../components/locationComponent.js';

const movieLocations = () => {
	$.get('../db/locations.json')
		.done((data) => {
			writeMovieLocation(data.locations);
		})
		.fail((error) => {
			console.error(error);
		});
};

export { movieLocations };

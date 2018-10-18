// import { movieDataGetter } from '../data/movieData.js';

const writeMovieLocation = (arrayOfLocations) => {
	let domString = '';
	arrayOfLocations.forEach((locations) => {
		domString += `
    <div class="d-flex">
        <div class="card">
          <img src="${locations.location_image}">
          <h1>${locations.name}</h1>
          <h3>${locations.location}</h3>
          <p>${locations.shoot_time}</p>
        </div>
    </div>`;
	});
	$('#movie_info').append(domString);
};

export { writeMovieLocation };

// const movieDataGetter = () => {
$.get('../db/locations.json')
	.done((data) => {
		writeMovieLocation(data.locations);
	})
	.fail((error) => {
		console.error(error);
	});
// };

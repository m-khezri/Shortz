// import { movieDataGetter } from '../data/movieData.js';

const writeMovie = (arrayOfMovie) => {
	let domString = '';
	arrayOfMovie.forEach((movie) => {
		domString += `
		<div class="card style= "height: 20vh;">
			<img class="card-img-top position-absolute mw-100" src="${movie.picture}">
			<div class="card-img-overlay">			
			<p class="card-title w-75 m-4 text-light display-2">${movie.Name}</h3>
			<h5 class="card-text- w-50 m-4">Genre: ${movie.Genre}</h6>
			<p class="card-text w-25 m-4">${movie.Description}</p>	
			<h5 class="card-text w-50 m-4">${movie.Estimated_Release_Date}</h5>
			</div>
	    </div>`;
	});
	$('#movie_description').append(domString);
};

export { writeMovie };

// const movieDataGetter = () => {
$.get('../db/movie.json')
	.done((data) => {
		writeMovie(data.movie);
	})
	.fail((error) => {
		console.error(error);
	});
// };

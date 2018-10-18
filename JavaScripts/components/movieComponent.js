// import { movieDataGetter } from '../data/movieData.js';

const writeMovie = (arrayOfMovie) => {
	let domString = '';
	arrayOfMovie.forEach((movie) => {
		domString += `
    <div class="fish card col-md-6 col-md-offset-3">
        <div class="thumbnail">
          <img src="${movie.picture}">
          <h1>${movie.Name}</h1>
          <h3>${movie.Genre}</h3>
          <p>${movie.Estimated_Release_Date}</p>
          <p>${movie.Description}</p>
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

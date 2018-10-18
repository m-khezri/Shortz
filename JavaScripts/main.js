// [Entry point/start application]

//  [AJAX call for movie data]

$.get('../db/movie.json')
	.done((data) => {
		writeMovie(data.movie);
	})
	.fail((error) => {
		console.error(error);
	});

//  [Writing to the dom for the movie component]

const writeMovie = (arrayOfMovie) => {
	let domString = '';
	arrayOfMovie.forEach((movie) => {
		domString += `
    <div class="fish card col-md-6 col-md-offset-3">
        <div class="thumbnail">
          <h1>${movie.Name}</h1>
          <h3 id="thumbnail-label">${movie.Genre}</h3>
          <p><span class="price">${movie.Estimated_Release_Date}</span></p>
          <p><span class="price">${movie.Description}</span></p>
        </div>
    </div>
      `;
	});
	$('#movie_description').append(domString);
};

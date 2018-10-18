//  [AJAX call for movie data]

$.get('../db/movie.json')
	.done((data) => {
		console.log(data);
		writeMovie(data.movie);
	})
	.fail((error) => {
		console.error(error);
	});

// SEARCH

const searchMovie = () => {
	$('#search_input').keypress(function() {
		let searchText = $('#search_input').val();
		$('.locations').not(`:contains(${searchText}`).hide();
	});
};

const filetrCards = () => {
	$('body').on('click', '#morning_btn', (e) => {
		$('#movie_info').show();
		$('#movie_info').not('#morning_btn').hide();
	});

	$('body').on('click', '#afternoon_btn', (e) => {
		$('#movie_info').show();
		$('#movie_info').not('#afternoon_btn').hide();
	});
	$('body').on('click', '#evening_btn', (e) => {
		$('#movie_info').show();
		$('#movie_info').not('#evening_btn').hide();
	});
	$('body').on('click', '#afterdark_btn', (e) => {
		$('#movie_info').show();
		$('#movie_info').not('#afterdark_btn').hide();
	});
};

export { searchMovie, filetrCards };

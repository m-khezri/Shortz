// SEARCH

const searchMovie = () => {
	$('#search_input').keypress(function() {
		let searchText = $('#search_input').val();
		$('.locations').not(`:contains(${searchText}`).hide();
	});
};

const filetrCards = () => {
	$('body').on('click', '#morning_btn', (e) => {
		$('.locations').show();
		$('.locations').not('.Morning').hide();
	});
	$('body').on('click', '#afternoon_btn', (e) => {
		$('.locations').show();
		$('.locations').not('.Afternoon').hide();
	});
	$('body').on('click', '#evening_btn', (e) => {
		$('.locations').show();
		$('.locations').not('.Evening').hide();
	});
	$('body').on('click', '#afterdark_btn', (e) => {
		$('.locations').show();
		$('.locations').not('.After').hide();
	});
};

export { searchMovie, filetrCards };

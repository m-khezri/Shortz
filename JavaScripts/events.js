// SEARCH

const searchMovie = () => {
	$('#search_input').keypress(function() {
		let searchText = $('#search_input').val();
		if ($('.card-header').not(':contains(${searchText}')) {
			// && $('.card-address').not('${searchText}')) {
			// $('.movieLoc').hide();
		}
		// $('.movieLoc').each(`:contains(${searchText}`).hide();
	});
};

const filterCards = () => {
	$('#morning_btn').on('click', (e) => {
		// console.log(shotTime);
		$('.movieLoc').each((i, MovieCard) => {
			// 'each' is looking for in each individual card
			$(MovieCard).show();
			$(MovieCard).not(':contains("Morning")').hide();
		});
	});

	$('#afternoon_btn').on('click', (e) => {
		// console.log(shotTime);
		$('.movieLoc').each((i, MovieCard) => {
			// 'each' is looking for in each individual card
			$(MovieCard).show();
			$(MovieCard).not(':contains("Afternoon")').hide();
		});
	});

	$('#evening_btn').on('click', (e) => {
		// console.log(shotTime);
		$('.movieLoc').each((i, MovieCard) => {
			// 'each' is looking for in each individual card
			$(MovieCard).show();
			$(MovieCard).not(':contains("Evening")').hide();
		});
	});

	$('#afterdark_btn').on('click', (e) => {
		// console.log(shotTime);
		$('.movieLoc').each((i, MovieCard) => {
			// 'each' is looking for in each individual card
			$(MovieCard).show();
			$(MovieCard).not(':contains("After Dark")').hide();
		});
	});
};

export { searchMovie, filterCards };

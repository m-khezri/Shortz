//  [Writing to the dom for the movie component]

const writeMovie = (arrayOfMovie) => {
	let domString = '';

	domString += `
      <div class="fish card col-md-6 col-md-offset-3">
      <div class="thumbnail">
          <img src="${moive.name}"
              alt="" width="40%">
          <div class="caption">
              <h3 id="thumbnail-label">${movie.genre}</h3>
              <p>$
                  <span class="price">${movie.estimated_release_date}</span>
              </p>
              <p>$
              <span class="price">${movie.description}</span>
          </p>
          </div>
          <div class="caption card-footer">
              <button class="add btn btn-danger">Add To Basket</button>
          </div>
      </div>
  </div>
      `;
};

$('#movie_description').append(domString);

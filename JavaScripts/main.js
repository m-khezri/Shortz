import { movie_description } from './data/movieData.js';
import { movieLocations } from './data/locationsData.js';
import { searchMovie, filterCards } from './events.js';
import { singleCard } from './components/movieComponent.js';

const initializeApp = () => {
  movie_description();
  movieLocations();
  singleCard();
  searchMovie();
  filterCards();
};

initializeApp();

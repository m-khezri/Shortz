import axios from 'axios';
import apiKeys from '../../db/apiKeys';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getMoviesFromDb = () => new Promise((resolve, reject) =>
  axios
    .get(`${baseUrl}')/getMoviesFromDb.json?orderBy="uid"&equalTo="${uid}"`)
    .then((result) => {
      const allMovieObject = result.data;
      const allMovieArray = [];
      if (allMovieObject != null) {
        Object.keys(allMovieObject).forEach((movieId) => {
          const newMovie = allMovieObject[movieId];
          newMovie.id = movieId;
          allPlayerArray.push(newMovie);
        });
      }
      resolve(allMovieArray);
    })
    .catch((err) => {
      reject(err);
    })
);


const getLocationsFromDb = () => new Promise((resolve, reject) =>
  axios
    .get(`${baseUrl}')/getLocationsFromDb.json?orderBy="uid"&equalTo="${uid}"`)
    .then((result) => {
      const allLocationObject = result.data;
      const allLocationArray = [];
      if (allLocationObject != null) {
        Object.keys(allLocationObject).forEach((locationId) => {
          const newLocation = allLocationObject[locationId];
          newLocation.id = locationId;
          allLocationArray.push(newLocation);
        });
      }
      resolve(allLocationArray);
    })
    .catch((err) => {
      reject(err);
    })
);

export default {
  getMoviesFromDb,
  getLocationsFromDb
};
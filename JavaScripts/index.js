import firebase from 'firebase';
import apiKeys from '../db/apiKeys.json';
import getMovie from './components/movieComponent';
import getLocations from './components/movieComponent';
import { searchMovie, filterCards } from './events.js';

const initializeApp = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  getMovie();
  getLocations();
  searchMovie();
  filterCards();
};

initializeApp();

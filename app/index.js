import 'babel-polyfill';
import 'whatwg-fetch';

import {
  setCard,
  setCountry,
} from './country/country.component';
import {
  setSearch,
  setCountryDatalist,
  getSearchElements,
  buttonObservable,
} from './search/search.component';
import {
  countryDetails,
  countryNames,
} from './services/country.service';

import { message } from './services/message.service';

import './styles.scss';

const search = document.querySelector('#search');
const card = document.querySelector('#card');
const loaderElement = document.querySelector('#loader');
loaderElement.classList.add('show');

// Create Search Input and Populate datalist with countries
search.innerHTML = setSearch();
const searchElements = getSearchElements();

// Get Country Names
countryNames()
  .then((data) => {
    setCountryDatalist(searchElements.datalist, data);
    loaderElement.classList.remove('show');
  })
  .catch((err) => {
    message(`${err.status} : ${err.message}`, 'Error - Could not download country names');
    loaderElement.classList.remove('show');
  });

const input$ = buttonObservable(searchElements.button);

// Accepting user input and then creating country card
input$.subscribe(
  // Next Search Button Click
  () => {
    loaderElement.classList.add('show');
    // Every time the user clicks the button
    // Collect the value of the search input
    countryDetails(searchElements.input.value)
      // Fetch Completed
      .then((data) => {
        card.innerHTML = setCard(setCountry(data));
        loaderElement.classList.remove('show');
      })
      // Fetch Error
      .catch((err) => {
        message(`${err.status} : ${err.message}`, 'Error - Could not download Country details');
        loaderElement.classList.remove('show');
      });
  },
  // Input Error
  err => message(`${err.status} : ${err.message}`, 'Error - Problem with button Event Handler'),
);

import 'babel-polyfill';
import 'whatwg-fetch';

// import { loader } from './loader/loader.component';
import {
  setCard,
  setCountry,
} from './country/country.component';
import {
  setSearch,
  setCountryDatalist,
} from './search/search.component';
import {
  country,
  countries,
} from './services/country.service';

import './styles.scss';

const search = document.getElementById('search');
const card = document.getElementById('card');

// Create Search Input and Populate datalist with countries
search.innerHTML = setSearch();
setCountryDatalist(countries);

// searchButton.addEventListener((evt) => {
//   const selectedCountry = searchInput.value;
//   console.log(evt, selectedCountry);
// });


card.innerHTML = setCard(setCountry(country[0]));

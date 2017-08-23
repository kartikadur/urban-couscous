import 'babel-polyfill';
import 'whatwg-fetch';

import { loader } from './loader/loader';
import {
  setCard,
  setCountry,
  country,
} from './country';
import { createCountryListener, createCountryDatalist } from './search';

import './styles.scss';

const body = document.getElementsByTagName('body')[0];

// Add country card
body.innerHTML = setCard(setCountry(country));
// Add loader
body.innerHTML = loader();

/**
 * TODO: Testing
 */
import Mustache from 'mustache';

import template from './country.component.html';

import './country.component.scss';

// Creates a data structure that can be used by the template
const setCountry = data => (
  Object.assign({}, {
    name: data.name || '',
    capital: data.capital || '',
    code: data.alpha3Code || '',
    region: data.region || '',
    subregion: data.subregion || '',
    population: data.population || '',
    area: data.area || '',
    languages: data.languages.map(l => l.name).join(', ') || '',
    currencies: data.currencies.map(c => c.name).join(', ') || '',
    flag: data.flag || '',
  })
);


// Adds data to template, renders it, and returns it.
const setCard = data => (
  Mustache.render(template, data)
);

module.exports = {
  setCard,
  setCountry,
};

/**
 * TODO: Testing
 */
import Mustache from 'mustache';

import template from './country.component.html';

import './country.component.scss';

// Creates a data structure that can be used by the template
const setCountry = data => (
  Object.assign({}, {
    name: data.name || 'Not Available',
    capital: data.capital || 'Not Available',
    code: data.alpha3Code || 'Not Available',
    mapCode: `assets/map-svg/${data.alpha2Code.toLowerCase()}.svg` || '',
    region: data.region || 'Not Available',
    subregion: data.subregion || 'Not Available',
    population: data.population || 'Not Available',
    area: data.area || 'Not Available',
    languages: data.languages.map(l => l.name).join(', ') || 'Not Available',
    currencies: data.currencies.map(c => c.name).join(', ') || 'Not Available',
    flag: data.flag || 'Not Available',
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

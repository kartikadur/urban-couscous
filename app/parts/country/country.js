/**
 * TODO: Testing
 */
import Mustache from 'mustache';

import template from './country.html';

import './country.scss';

// Creates a data structure that can be used by the template
export const setCountry = data => (
  Object.assign({}, {
    name: data.name.toUpperCase(),
    capital: data.capital,
    code: data.alpha3Code,
    region: data.region,
    subregion: data.subregion,
    population: data.population,
    area: data.area,
    languages: data.languages.reduce((acc, l) => `${l.name}, ${acc}`, ''),
    currencies: data.currencies.reduce((acc, l) => `${l.name}, ${acc}`, ''),
    flag: data.flag,
  })
);


// Adds data to template, renders it, and returns it.
export const setCard = data => (
  Mustache.render(template, data)
);

/**
 * Example data sample
[{
    "name": "Colombia",
    "topLevelDomain": [".co"],
    "alpha2Code": "CO",
    "alpha3Code": "COL",
    "callingCodes": ["57"],
    "capital": "Bogotá",
    "altSpellings": ["CO", "Republic of Colombia", "República de Colombia"],
    "region": "Americas",
    "subregion": "South America",
    "population": 48759958,
    "latlng": [4.0, -72.0],
    "demonym": "Colombian",
    "area": 1141748.0,
    "gini": 55.9,
    "timezones": ["UTC-05:00"],
    "borders": ["BRA", "ECU", "PAN", "PER", "VEN"],
    "nativeName": "Colombia",
    "numericCode": "170",
    "currencies": [{
        "code": "COP",
        "name": "Colombian peso",
        "symbol": "$"
    }],
    "languages": [{
        "iso639_1": "es",
        "iso639_2": "spa",
        "name": "Spanish",
        "nativeName": "Español"
    }],
    "translations": {
        "de": "Kolumbien",
        "es": "Colombia",
        "fr": "Colombie",
        "ja": "コロンビア",
        "it": "Colombia",
        "br": "Colômbia",
        "pt": "Colômbia"
    },
    "flag": "https://restcountries.eu/data/col.svg",
    "regionalBlocs": [{
        "acronym": "PA",
        "name": "Pacific Alliance",
        "otherAcronyms": [],
        "otherNames": ["Alianza del Pacífico"]
    }, {
        "acronym": "USAN",
        "name": "Union of South American Nations",
        "otherAcronyms": ["UNASUR", "UNASUL", "UZAN"],
        "otherNames": ["Unión de Naciones Suramericanas", "União de Nações Sul-Americanas", "Unie van Zuid-Amerikaanse Naties", "South American Union"]
    }]
}]
*/
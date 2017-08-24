import Mustache from 'mustache';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';

import template from './search.component.html';

import './search.component.scss';

const setSearch = () => (Mustache.render(template));

const setCountryDatalist = (datalist, data) => {
  data.forEach((el) => {
    const item = document.createElement('option');
    item.setAttribute('value', el.name);
    datalist.appendChild(item);
  });
};

const getSearchElements = () => {
  const input = document.querySelector('#search__input');
  const button = document.querySelector('#search__button');
  const datalist = document.querySelector('#search__country-list');
  return {
    input,
    button,
    datalist,
  };
};

const buttonObservable = button => (Observable.fromEvent(button, 'click').debounceTime(500));

module.exports = {
  setSearch,
  setCountryDatalist,
  getSearchElements,
  buttonObservable,
};

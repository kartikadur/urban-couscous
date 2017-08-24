import Mustache from 'mustache';

import template from './search.component.html';

import './search.component.scss';

const setSearch = () => (Mustache.render(template));

const setCountryDatalist = (data) => {
  const datalist = document.getElementById('search__country-list');
  data.forEach((el) => {
    const item = document.createElement('option');
    item.setAttribute('value', el.name);
    datalist.appendChild(item);
  });
};


module.exports = {
  setSearch,
  setCountryDatalist,
};

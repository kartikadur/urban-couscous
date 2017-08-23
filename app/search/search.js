import Mustache from 'mustache';

import template from './search.html';

import './search.scss';

const createCountryDatalist = (data) => {
  const datalist = document.getElementsByTagName('datalist')[0];
  data.forEach((el) => {
    const item = document.createElement('option');
    item.setAttribute('value', el.name);
    datalist.appendChild(item);
  });
};

const createCountryListener = () => {
  // const searchInput = document.getElementById('search');
  // const selectButton = document.getElementById('select');
  // select.addEventListener(el => searchInput.value);
};

module.exports = {
  createCountryDatalist,
  createCountryListener,
};

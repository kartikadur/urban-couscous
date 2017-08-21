import Mustache from 'mustache';

import template from './country.html';

import './country.scss';

export default class Country {
  static render() {
    const body = document.getElementsByTagName('body')[0];
    body.innerHTML = Mustache.render(template);
  }
}

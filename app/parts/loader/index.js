import Mustache from 'mustache';

import template from './loader.html';
import './loader.scss';

export default class Loader {
  static render() {
    const body = document.getElementsByTagName('body')[0];
    body.innerHTML = Mustache.render(template);
  }
}

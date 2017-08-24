import Mustache from 'mustache';

import template from './loader.component.html';
import './loader.component.scss';

const loader = () => Mustache.render(template);

module.exports = {
  loader,
};

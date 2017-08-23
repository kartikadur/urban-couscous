import Mustache from 'mustache';

import template from './loader.html';
import './loader.scss';

const loader = () => Mustache.render(template);

module.exports = {
  loader,
};

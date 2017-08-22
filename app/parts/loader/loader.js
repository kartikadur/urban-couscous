import Mustache from 'mustache';

import template from './loader.html';
import './loader.scss';

export default function loader() {
  return Mustache.render(template);
}

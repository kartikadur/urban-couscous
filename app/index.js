import 'babel-polyfill';
import 'whatwg-fetch';

import { bootstrap } from './app.component';

import './styles.scss';

window.onload = bootstrap();


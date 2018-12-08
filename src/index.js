import './style.css';
import { initTimeout } from './timer';
import { consoleGreet } from './utils';

initTimeout('Alert greet timeout', consoleGreet('Simon'), 2000);

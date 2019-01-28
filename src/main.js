import { getElement, createElement, render } from './dom';
import { MAIN, INPUT } from './dom/utils/element-types';

// Execute
const ROOT = getElement(MAIN);
const APP = createElement(INPUT);

render(ROOT, APP);

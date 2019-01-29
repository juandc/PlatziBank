import { createElement, createEvent, getElement, render } from './dom';
import { MAIN, INPUT } from './dom/utils/element-types';

// Execute
const ROOT = getElement(MAIN);
const APP = createElement(INPUT);

// APP.addEventListener('click', (e) => console.log(e));
createEvent(APP, 'input', (event) => {
  console.log(event.target.value);
});

console.log(render.displayName);

render(ROOT, APP);

import { createElement, createEvent, getElement, setAttribute, render } from './dom';
import { MAIN, DIV, INPUT } from './dom/utils/element-types';

// Execute
const ROOT = getElement(MAIN);

const CantityInput = createElement(INPUT, {
  // type: 'number',
  placeholder: 'Cantidad',
  value: '',
});

createEvent(CantityInput, 'input', (event) => {
  if (isNaN(event.data) && isNaN(event.target.value)) {
    return console.log('Not a Number');
  }
});


const APP = createElement(DIV, { id: 'div' }, CantityInput);

render(ROOT, APP);

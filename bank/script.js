const SECTION = 'SECTION';
const MAIN = 'MAIN';
const DIV = 'DIV';
const P = 'P';
const H1 = 'H1';
const H2 = 'H2';
const H3 = 'H3';
const INPUT = 'INPUT';
const BUTTON = 'BUTTON';

const getElement = element => document.querySelector(element);
const getElements = element => document.querySelectorAll(element);
const createElement = element => document.createElement(element);
const createText = element => document.createTextNode(element);
const setAttribute = (element, attr, value) => element.setAttribute(attr, value);
const appendChild = (parent, child) => parent.appendChild(child);

/*
  * appRender(rootElement)(applicationElement);
*/
const appRender = root => app => {
  // Check `root`
  if (!isElement(root)) return console.error('`root` is not an element');
  if (!isElementRenderedInDOM(root)) return console.error('`root` is not real');

  // Check `app`
  console.log(typeof app);

  return console.log('OK.');
}

const isElement = element => (
  element instanceof HTMLElement
    || element instanceof Element
);

const isElementRenderedInDOM = element => (
  document.body.contains(element)
);

// Execute
const ROOT = getElement(MAIN);

appRender(ROOT)(root => {
  return console.log('OK?')
});

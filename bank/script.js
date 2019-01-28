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
  element: Any
  => : Boolean
*/
const isElement = element => (
  element instanceof HTMLElement
  || element instanceof Element
);

/*
  element: HTMLElement(**)
  => : Boolean
*/
const isElementRenderedInDOM = element => (
  document.body.contains(element)
);

/*
  root: HTMLElement(DOM render)
  app: HTMLElement(shallow render)
  => : HTMLElement(DOM render)
*/
const appRender = (root, app) => {
  // Check `root`
  if (!isElement(root))
    return console.error('root is not an element', root);

  if (!isElementRenderedInDOM(root))
    return console.error('root is not real', root);

  // Check `app`
  if (!isElement(app))
    return console.error('app is not an element', app);

  // Append `app` to `root`
  appendChild(root, app);

  return root;
}

// Execute
const ROOT = getElement(MAIN);
const APP = createElement(INPUT);

appRender(ROOT, APP);

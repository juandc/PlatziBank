import { isHTMLElementRenderedInDOM } from './utils/check-elements';

/**
 * @typedef {HTMLElement | Element} HTMLElement
 * @type {(root: HTMLElement, app: HTMLElement) => HTMLElement}
 */
export const render = (root, app) => {
  // Check `root`
  if (!isHTMLElementRenderedInDOM(root))
    return console.error('root is not a real element', root);

  // Append `app` to `root`
  appendChild(root, app);

  return root;
}

render.displayName = 'customRender';

/**
 * @typedef {HTMLElement | Element} HTMLElement
 * @type {(element: HTMLElement) => HTMLElement}
 */
export const createEvent = (element, type, cb) => (
  element.addEventListener(type, cb)
);

/**
 * @typedef {HTMLElement | Element} HTMLElement
 * @type {(element: HTMLElement) => HTMLElement}
 */
export const getElement = element => document.querySelector(element);

/**
 * @typedef {HTMLElement | Element} HTMLElement
 * @type {(element: HTMLElement) => Array<HTMLElement>}
 */
export const getElements = element => document.querySelectorAll(element);

/**
 * @typedef {HTMLElement | Element} HTMLElement
 * @type {(element: HTMLElement) => HTMLElement}
 */
export const createElement = element => document.createElement(element);

/**
 * @typedef {HTMLElement | Element} HTMLElement
 * @type {(text: HTMLElement) => HTMLElement}
 */
export const createText = text => document.createTextNode(text);

/**
 * @typedef {HTMLElement | Element} HTMLElement
 * @type {(element: HTMLElement, attr: string, value: string) => HTMLElement}
 */
export const setAttribute = (element, attr, value) =>
  element.setAttribute(attr, value);

/**
 * @typedef {HTMLElement | Element} HTMLElement
 * @type {(parent: HTMLElement, child: HTMLElement) => HTMLElement}
 */
export const appendChild = (parent, child) => parent.appendChild(child);

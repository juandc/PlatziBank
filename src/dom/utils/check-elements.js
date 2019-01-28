/**
 * ! Deprecated
 * @template Generic
 * @type {(element: Generic) => boolean}
 */
export const isHTMLElement = element => (
  element instanceof HTMLElement
  || element instanceof Element
);

/**
 * @typedef {HTMLElement | Element} HTMLElement
 * @type {(element: HTMLElement) => boolean}
 */
export const isHTMLElementRenderedInDOM = element => (
  document.body.contains(element)
);

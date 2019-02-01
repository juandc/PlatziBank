export const isHTMLElement = element => (
  element instanceof HTMLElement || element instanceof Element
);

export const isElementRenderedInDOM = element => (
  document.body.contains(element)
);

export const isHTMLElementAndIsRenderedInDOM = element => (
  isHTMLElement(element) && isRenderedInDOM(element)
);

const compose = (...fns) => (
  fns.reduceRight((prevFn, nextFn) =>
    (...args) => nextFn(prevFn(...args)),
    value => value
  )
);

export const test = element => compose(
  isRenderedInDOM,
  isHTMLElement,
);

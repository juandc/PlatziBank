import { isHTMLElement, isElementRenderedInDOM } from './utils/check-elements';

export function createApp(root, app) {
  const rootElement = checkIfElementOrRef(root);
  console.log({ rootElement });

  if (!isHTMLElement(rootElement)) {
    return console.log('`root` is not an HTML Element', root);
  }

  if (!isElementRenderedInDOM(rootElement)) {
    return console.log('`root` is not rendered in DOM', root);
  }

  const appElement = app(rootElement);
  console.log({ appElement });
  
  if (!isHTMLElement(appElement)) {
    return console.log('`app` is not an HTML Element', root);
  }

  try {
    rootElement.appendChild(appElement);
  } catch(error) {
    console.log(error);
  }
}

// Check if elements are html elements or string
// references and return their real value...
function checkIfElementOrRef(element) {
  let checkedElement;

  if (typeof element === 'string') {
    checkedElement = document.querySelector(element);
  } else {
    checkedElement = element;
  }

  return checkedElement;
}

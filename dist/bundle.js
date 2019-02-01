/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom/render.js":
/*!***************************!*\
  !*** ./src/dom/render.js ***!
  \***************************/
/*! exports provided: createApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createApp\", function() { return createApp; });\n/* harmony import */ var _utils_check_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/check-elements */ \"./src/dom/utils/check-elements.js\");\n\n\nfunction createApp(root, app) {\n  const rootElement = checkIfElementOrRef(root);\n  console.log({ rootElement });\n\n  if (!Object(_utils_check_elements__WEBPACK_IMPORTED_MODULE_0__[\"isHTMLElement\"])(rootElement)) {\n    return console.log('`root` is not an HTML Element', root);\n  }\n\n  if (!Object(_utils_check_elements__WEBPACK_IMPORTED_MODULE_0__[\"isElementRenderedInDOM\"])(rootElement)) {\n    return console.log('`root` is not rendered in DOM', root);\n  }\n\n  const appElement = app(rootElement);\n  console.log({ appElement });\n  \n  if (!Object(_utils_check_elements__WEBPACK_IMPORTED_MODULE_0__[\"isHTMLElement\"])(appElement)) {\n    return console.log('`app` is not an HTML Element', root);\n  }\n\n  try {\n    rootElement.appendChild(appElement);\n  } catch(error) {\n    console.log(error);\n  }\n}\n\n// Check if elements are html elements or string\n// references and return their real value...\nfunction checkIfElementOrRef(element) {\n  let checkedElement;\n\n  if (typeof element === 'string') {\n    checkedElement = document.querySelector(element);\n  } else {\n    checkedElement = element;\n  }\n\n  return checkedElement;\n}\n\n\n//# sourceURL=webpack:///./src/dom/render.js?");

/***/ }),

/***/ "./src/dom/utils/check-elements.js":
/*!*****************************************!*\
  !*** ./src/dom/utils/check-elements.js ***!
  \*****************************************/
/*! exports provided: isHTMLElement, isElementRenderedInDOM, isHTMLElementAndIsRenderedInDOM, test */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isHTMLElement\", function() { return isHTMLElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isElementRenderedInDOM\", function() { return isElementRenderedInDOM; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isHTMLElementAndIsRenderedInDOM\", function() { return isHTMLElementAndIsRenderedInDOM; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"test\", function() { return test; });\nconst isHTMLElement = element => (\n  element instanceof HTMLElement || element instanceof Element\n);\n\nconst isElementRenderedInDOM = element => (\n  document.body.contains(element)\n);\n\nconst isHTMLElementAndIsRenderedInDOM = element => (\n  isHTMLElement(element) && isRenderedInDOM(element)\n);\n\nconst compose = (...fns) => (\n  fns.reduceRight((prevFn, nextFn) =>\n    (...args) => nextFn(prevFn(...args)),\n    value => value\n  )\n);\n\nconst test = element => compose(\n  isRenderedInDOM,\n  isHTMLElement,\n);\n\n\n//# sourceURL=webpack:///./src/dom/utils/check-elements.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/render */ \"./src/dom/render.js\");\n\n\nconst testApp = Object(_dom_render__WEBPACK_IMPORTED_MODULE_0__[\"createApp\"])('MAIN', () => {\n  const AElement = document.createElement('A');\n  const AText = document.createTextNode('Link');\n\n  AElement.appendChild(AText);\n  AElement.setAttribute('href', '#');\n\n  console.log({ AElement });\n\n  return AElement;\n});\n\n// import { createElement, createEvent, getElement, setAttribute, render } from './dom';\n// import { MAIN, DIV, INPUT } from './dom/utils/element-types';\n\n// // Execute\n// const ROOT = getElement(MAIN);\n\n// const CantityInput = createElement(INPUT, {\n//   // type: 'number',\n//   placeholder: 'Cantidad',\n//   value: '',\n// });\n\n// createEvent(CantityInput, 'input', (event) => {\n//   if (isNaN(event.data) && isNaN(event.target.value)) {\n//     return console.log('Not a Number');\n//   }\n// });\n\n\n// const APP = createElement(DIV, { id: 'div' }, CantityInput);\n\n// render(ROOT, APP);\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });
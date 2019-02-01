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

/***/ "./src/dom/index.js":
/*!**************************!*\
  !*** ./src/dom/index.js ***!
  \**************************/
/*! exports provided: render, createEvent, getElement, getElements, createElement, createText, setAttribute, appendChild */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/dom/render.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _render__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createEvent\", function() { return _render__WEBPACK_IMPORTED_MODULE_0__[\"createEvent\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getElement\", function() { return _render__WEBPACK_IMPORTED_MODULE_0__[\"getElement\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getElements\", function() { return _render__WEBPACK_IMPORTED_MODULE_0__[\"getElements\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return _render__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createText\", function() { return _render__WEBPACK_IMPORTED_MODULE_0__[\"createText\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"setAttribute\", function() { return _render__WEBPACK_IMPORTED_MODULE_0__[\"setAttribute\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"appendChild\", function() { return _render__WEBPACK_IMPORTED_MODULE_0__[\"appendChild\"]; });\n\n\n\n\n//# sourceURL=webpack:///./src/dom/index.js?");

/***/ }),

/***/ "./src/dom/render.js":
/*!***************************!*\
  !*** ./src/dom/render.js ***!
  \***************************/
/*! exports provided: render, createEvent, getElement, getElements, createElement, createText, setAttribute, appendChild */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createEvent\", function() { return createEvent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getElement\", function() { return getElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getElements\", function() { return getElements; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return createElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createText\", function() { return createText; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setAttribute\", function() { return setAttribute; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appendChild\", function() { return appendChild; });\n/* harmony import */ var _utils_check_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/check-elements */ \"./src/dom/utils/check-elements.js\");\n\n\n/**\n * @typedef {HTMLElement | Element} HTMLElement\n * @type {(root: HTMLElement, app: HTMLElement) => HTMLElement}\n */\nconst render = (root, app) => {\n  // Check `root`\n  if (!Object(_utils_check_elements__WEBPACK_IMPORTED_MODULE_0__[\"isHTMLElementRenderedInDOM\"])(root))\n    return console.error('root is not a real element', root);\n\n  // Append `app` to `root`\n  appendChild(root, app);\n\n  return root;\n}\n\nrender.displayName = 'customRender';\n\n/**\n * @typedef {HTMLElement | Element} HTMLElement\n * @type {(element: HTMLElement) => HTMLElement}\n */\nconst createEvent = (element, type, cb) => (\n  element.addEventListener(type, cb)\n);\n\n/**\n * @typedef {HTMLElement | Element} HTMLElement\n * @type {(element: HTMLElement) => HTMLElement}\n */\nconst getElement = element => document.querySelector(element);\n\n/**\n * @typedef {HTMLElement | Element} HTMLElement\n * @type {(element: HTMLElement) => Array<HTMLElement>}\n */\nconst getElements = (element) => document.querySelectorAll(element);\n\n/**\n * @template Generic\n * @typedef {HTMLElement | Element} HTMLElement\n * @type {(element: HTMLElement, attrs: Object, child:  HTMLElement) => HTMLElement}\n */\nconst createElement = (element, listOfAttributes, child) => {\n  const createdElement = document.createElement(element);\n\n  if (listOfAttributes) {\n    setAttributes(createdElement, listOfAttributes);\n  }\n\n  if (child) {\n    appendChild(createdElement, child);\n  }\n\n  return createdElement;\n}\n\n/**\n * @typedef {HTMLElement | Element} HTMLElement\n * @type {(text: HTMLElement) => HTMLElement}\n */\nconst createText = text => document.createTextNode(text);\n\n/**\n * @typedef {HTMLElement | Element} HTMLElement\n * @type {(element: HTMLElement, attr: string, value: string) => HTMLElement}\n */\nconst setAttribute = (element, attr, value) => {\n  const elementWithAttribute = element.setAttribute(attr, value);\n  return element;\n}\n\nconst setAttributes = (element, listOfAttributes) => {\n  const elementWithNewAttributes = Object.keys(listOfAttributes).forEach(\n    attrName => setAttribute(element, attrName, listOfAttributes[attrName])\n  );\n\n  return element;\n};\n\n/**\n * @typedef {HTMLElement | Element} HTMLElement\n * @type {(parent: HTMLElement, child: HTMLElement) => HTMLElement}\n */\nconst appendChild = (parent, child) => parent.appendChild(child);\n\n\n//# sourceURL=webpack:///./src/dom/render.js?");

/***/ }),

/***/ "./src/dom/utils/check-elements.js":
/*!*****************************************!*\
  !*** ./src/dom/utils/check-elements.js ***!
  \*****************************************/
/*! exports provided: isHTMLElement, isHTMLElementRenderedInDOM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isHTMLElement\", function() { return isHTMLElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isHTMLElementRenderedInDOM\", function() { return isHTMLElementRenderedInDOM; });\n/**\n * ! Deprecated\n * @template Generic\n * @type {(element: Generic) => boolean}\n */\nconst isHTMLElement = element => (\n  element instanceof HTMLElement\n  || element instanceof Element\n);\n\n/**\n * @typedef {HTMLElement | Element} HTMLElement\n * @type {(element: HTMLElement) => boolean}\n */\nconst isHTMLElementRenderedInDOM = element => (\n  document.body.contains(element)\n);\n\n\n//# sourceURL=webpack:///./src/dom/utils/check-elements.js?");

/***/ }),

/***/ "./src/dom/utils/element-types.js":
/*!****************************************!*\
  !*** ./src/dom/utils/element-types.js ***!
  \****************************************/
/*! exports provided: SECTION, ARTICLE, MAIN, DIV, H1, H2, H3, A, P, SPAN, SMALL, INPUT, BUTTON */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SECTION\", function() { return SECTION; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ARTICLE\", function() { return ARTICLE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MAIN\", function() { return MAIN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DIV\", function() { return DIV; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"H1\", function() { return H1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"H2\", function() { return H2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"H3\", function() { return H3; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"A\", function() { return A; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"P\", function() { return P; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SPAN\", function() { return SPAN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SMALL\", function() { return SMALL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"INPUT\", function() { return INPUT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BUTTON\", function() { return BUTTON; });\nconst SECTION = 'SECTION';\nconst ARTICLE = 'ARTICLE';\nconst MAIN = 'MAIN';\nconst DIV = 'DIV';\n\nconst H1 = 'H1';\nconst H2 = 'H2';\nconst H3 = 'H3';\n\nconst A = 'A';\nconst P = 'P';\nconst SPAN = 'SPAN';\nconst SMALL = 'SMALL';\n\nconst INPUT = 'INPUT';\nconst BUTTON = 'BUTTON';\n\n\n//# sourceURL=webpack:///./src/dom/utils/element-types.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom/index.js\");\n/* harmony import */ var _dom_utils_element_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom/utils/element-types */ \"./src/dom/utils/element-types.js\");\n\n\n\n// Execute\nconst ROOT = Object(_dom__WEBPACK_IMPORTED_MODULE_0__[\"getElement\"])(_dom_utils_element_types__WEBPACK_IMPORTED_MODULE_1__[\"MAIN\"]);\n\nconst CantityInput = Object(_dom__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_dom_utils_element_types__WEBPACK_IMPORTED_MODULE_1__[\"INPUT\"], {\n  // type: 'number',\n  placeholder: 'Cantidad',\n  value: '',\n});\n\nObject(_dom__WEBPACK_IMPORTED_MODULE_0__[\"createEvent\"])(CantityInput, 'input', (event) => {\n  if (isNaN(event.data) && isNaN(event.target.value)) {\n    return console.log('Not a Number');\n  }\n});\n\n\nconst APP = Object(_dom__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_dom_utils_element_types__WEBPACK_IMPORTED_MODULE_1__[\"DIV\"], { id: 'div' }, CantityInput);\n\nObject(_dom__WEBPACK_IMPORTED_MODULE_0__[\"render\"])(ROOT, APP);\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });
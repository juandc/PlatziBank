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

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const SECTION = 'SECTION';\nconst MAIN = 'MAIN';\nconst DIV = 'DIV';\nconst P = 'P';\nconst H1 = 'H1';\nconst H2 = 'H2';\nconst H3 = 'H3';\nconst INPUT = 'INPUT';\nconst BUTTON = 'BUTTON';\n\nconst getElement = element => document.querySelector(element);\nconst getElements = element => document.querySelectorAll(element);\nconst createElement = element => document.createElement(element);\nconst createText = element => document.createTextNode(element);\nconst setAttribute = (element, attr, value) => element.setAttribute(attr, value);\nconst appendChild = (parent, child) => parent.appendChild(child);\n\n/*\n  element: Any\n  => : Boolean\n*/\nconst isElement = element => (\n  element instanceof HTMLElement\n  || element instanceof Element\n);\n\n/*\n  element: HTMLElement(**)\n  => : Boolean\n*/\nconst isElementRenderedInDOM = element => (\n  document.body.contains(element)\n);\n\n/*\n  root: HTMLElement(DOM render)\n  app: HTMLElement(shallow render)\n  => : HTMLElement(DOM render)\n*/\nconst createApp = (root, app) => {\n  // Check `root`\n  if (!isElement(root))\n    return console.error('root is not an element', root);\n\n  if (!isElementRenderedInDOM(root))\n    return console.error('root is not real', root);\n\n  // Check `app`\n  if (!isElement(app))\n    return console.error('app is not an element', app);\n\n  // Append `app` to `root`\n  appendChild(root, app);\n\n  return root;\n}\n\n// Execute\nconst ROOT = getElement(MAIN);\nconst APP = createElement(INPUT);\n\ncreateApp(ROOT, APP);\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });
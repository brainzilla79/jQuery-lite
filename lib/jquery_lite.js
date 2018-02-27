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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dom_node_collection_js__ = __webpack_require__(1);



window.$l = (arg) => {
  switch (typeof arg) {
    case 'string':
      return new __WEBPACK_IMPORTED_MODULE_0__dom_node_collection_js__["a" /* default */]([...document.querySelectorAll(arg)]);
    case 'object':
      if (arg instanceof HTMLElement) return new __WEBPACK_IMPORTED_MODULE_0__dom_node_collection_js__["a" /* default */]([arg]);
  }
    
};

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class DOMNodeCollection {
  constructor(nodes) {
    this.nodes = nodes;
  }

  html(string = '') {
    if (!string) {
      return this.nodes[0].innerHTML;
    } else {
      this.nodes.forEach(node => {
        node.innerHTML = string;
      });
    }
  }

  empty() {
    this.nodes.forEach(node => {
      node.innerHTML = '';
    });
  }

  append(arg) {
    if (typeof arg === 'string') {
      this.nodes.forEach(node => {
        node.innerHTML += arg;
      });
    } else if (typeof arg === 'object') {
      if (!(arg instanceof DOMNodeCollection)) {
        arg = $l(arg);
      }
      this.nodes.forEach(node => {
        arg.nodes.forEach(childNode => {
          node.innerHTML += childNode.outerHTML;
        });
      });
    }
  }

  attr(attrName, value) {
    if (!value) {
      return this.nodes[0].getAttribute(attrName);
    } else {
      this.nodes.forEach(node => {
        node.setAttribute(attrName, value);
      });
    }
  }

  addClass(className) {
    this.nodes.forEach(node => {
      node.classList.add(className);
    });
  }

  removeClass(className) {
    this.nodes.forEach(node => node.classList.remove(className));
  }

  children() {}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = DOMNodeCollection;



/***/ })
/******/ ]);
//# sourceMappingURL=jquery_lite.js.map
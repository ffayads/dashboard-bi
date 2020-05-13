module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./context/global.jsx":
/*!****************************!*\
  !*** ./context/global.jsx ***!
  \****************************/
/*! exports provided: ContextOne, initialState, reducer, ContextOneProvider, ContextOneConsumer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextOne", function() { return ContextOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextOneProvider", function() { return ContextOneProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextOneConsumer", function() { return ContextOneConsumer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/var/www/html/UT/Dashboard-BI/context/global.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


let ContextOne = react__WEBPACK_IMPORTED_MODULE_0__["createContext"]();
let initialState = {
  load: true
};
let reducer = (state, action) => {
  switch (action.type) {
    case "reset":
      return initialState;

    case "stop-load":
      return _objectSpread({}, state, {
        load: false
      });

    case "start-load":
      return _objectSpread({}, state, {
        load: true
      });
  }
};
function ContextOneProvider(props) {
  let [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_0__["useReducer"](reducer, initialState);
  let value = {
    state,
    dispatch
  };
  return __jsx(ContextOne.Provider, {
    value: value,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, props.children);
}
let ContextOneConsumer = ContextOne.Consumer;

const Info = () => {
  return "this file found to controller general state";
};

/* harmony default export */ __webpack_exports__["default"] = (Info);

/***/ }),

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! universal-cookie */ "universal-cookie");
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(universal_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/global */ "./context/global.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_assets_css_nucleo_icons_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/assets/css/nucleo-icons.css */ "./public/assets/css/nucleo-icons.css");
/* harmony import */ var _public_assets_css_nucleo_icons_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_assets_css_nucleo_icons_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_assets_scss_black_dashboard_pro_react_scss_v_1_0_0__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/assets/scss/black-dashboard-pro-react.scss?v=1.0.0 */ "./public/assets/scss/black-dashboard-pro-react.scss?v=1.0.0");
/* harmony import */ var _public_assets_scss_black_dashboard_pro_react_scss_v_1_0_0__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_assets_scss_black_dashboard_pro_react_scss_v_1_0_0__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_assets_demo_demo_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/assets/demo/demo.css */ "./public/assets/demo/demo.css");
/* harmony import */ var _public_assets_demo_demo_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_assets_demo_demo_css__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/var/www/html/UT/Dashboard-BI/pages/_app.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }










axios__WEBPACK_IMPORTED_MODULE_5___default.a.defaults.baseURL = "http://localhost:5000";
axios__WEBPACK_IMPORTED_MODULE_5___default.a.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios__WEBPACK_IMPORTED_MODULE_5___default.a.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';
next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.on('routeChangeStart', () => {
  nprogress__WEBPACK_IMPORTED_MODULE_6___default.a.start();
});
next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.on('routeChangeComplete', () => {
  nprogress__WEBPACK_IMPORTED_MODULE_6___default.a.done();
});
next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.on('routeChangeError', () => {
  nprogress__WEBPACK_IMPORTED_MODULE_6___default.a.done();
});
axios__WEBPACK_IMPORTED_MODULE_5___default.a.interceptors.response.use(response => {
  return response;
}, err => {
  if (next_router__WEBPACK_IMPORTED_MODULE_2___default.a.route !== "/login" && err.response.status === 401 && err.config && !err.config.__isRetryRequest) {
    cookies.remove("Token");
    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.replace("/login");
    return err;
  }
});
const cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_3___default.a();

const MyApp = ({
  Component,
  pageProps
}) => {
  let [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useReducer(_context_global__WEBPACK_IMPORTED_MODULE_4__["reducer"], _context_global__WEBPACK_IMPORTED_MODULE_4__["initialState"]);
  let value = {
    state,
    dispatch
  };
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => validate());

  let validate = () => {
    document.body.classList.add("white-content");
    let auth = cookies.get("Token");
    axios__WEBPACK_IMPORTED_MODULE_5___default.a.defaults.headers.get['Authorization'] = auth;
    axios__WEBPACK_IMPORTED_MODULE_5___default.a.defaults.headers.post['Authorization'] = auth;

    if (next_router__WEBPACK_IMPORTED_MODULE_2___default.a.route !== "/login" && (auth === undefined || auth === "")) {
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.replace("/login");
    } else if (next_router__WEBPACK_IMPORTED_MODULE_2___default.a.route === "/login" && auth !== "" && auth !== undefined) {
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.replace("/dashboard");
    }
  };

  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    if (state.load) dispatch({
      type: "stop-load"
    });
    return () => {
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.off('routeChangeStart', () => {
        nprogress__WEBPACK_IMPORTED_MODULE_6___default.a.start();
      });
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.off('routeChangeComplete', () => {
        nprogress__WEBPACK_IMPORTED_MODULE_6___default.a.done();
      });
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.off('routeChangeError', () => {
        nprogress__WEBPACK_IMPORTED_MODULE_6___default.a.done();
      });
    };
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, "Dashboard"), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "icon",
    href: "/img/Logo.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/nprogress.css",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  })), __jsx(_context_global__WEBPACK_IMPORTED_MODULE_4__["ContextOne"].Provider, {
    value: value,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, __jsx(Component, _extends({}, pageProps, value, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./public/assets/css/nucleo-icons.css":
/*!********************************************!*\
  !*** ./public/assets/css/nucleo-icons.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/assets/demo/demo.css":
/*!*************************************!*\
  !*** ./public/assets/demo/demo.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/assets/scss/black-dashboard-pro-react.scss?v=1.0.0":
/*!*******************************************************************!*\
  !*** ./public/assets/scss/black-dashboard-pro-react.scss?v=1.0.0 ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.jsx */"./pages/_app.jsx");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "universal-cookie":
/*!***********************************!*\
  !*** external "universal-cookie" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("universal-cookie");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map
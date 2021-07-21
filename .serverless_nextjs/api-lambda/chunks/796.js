exports.id = 796;
exports.ids = [796];
exports.modules = {

/***/ 2738:
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"polyfillFiles":["static/chunks/polyfills-a54b4f32bdc1ef890ddd.js"],"devFiles":[],"ampDevFiles":[],"lowPriorityFiles":["static/kYiYO1ccFqMaA4bk7SPnX/_buildManifest.js","static/kYiYO1ccFqMaA4bk7SPnX/_ssgManifest.js"],"pages":{"/":["static/chunks/webpack-61095c13c5984b221292.js","static/chunks/framework-92300432a1172ef1338b.js","static/chunks/main-1f18f76c3a76cf3a94ff.js","static/chunks/163-57d50e18fbe217fe1b39.js","static/chunks/pages/index-0a6f09cf43765e016efc.js"],"/_app":["static/chunks/webpack-61095c13c5984b221292.js","static/chunks/framework-92300432a1172ef1338b.js","static/chunks/main-1f18f76c3a76cf3a94ff.js","static/css/120f2e2270820d49a21f.css","static/chunks/pages/_app-8f449eaf80d95afd5db6.js"],"/_error":["static/chunks/webpack-61095c13c5984b221292.js","static/chunks/framework-92300432a1172ef1338b.js","static/chunks/main-1f18f76c3a76cf3a94ff.js","static/chunks/pages/_error-a0e21b9b223f827fe1f2.js"],"/post/[slug]":["static/chunks/webpack-61095c13c5984b221292.js","static/chunks/framework-92300432a1172ef1338b.js","static/chunks/main-1f18f76c3a76cf3a94ff.js","static/chunks/163-57d50e18fbe217fe1b39.js","static/chunks/pages/post/[slug]-c9c3eed19904b54297f5.js"],"/recurso/[slug]":["static/chunks/webpack-61095c13c5984b221292.js","static/chunks/framework-92300432a1172ef1338b.js","static/chunks/main-1f18f76c3a76cf3a94ff.js","static/chunks/163-57d50e18fbe217fe1b39.js","static/chunks/pages/recurso/[slug]-a3564bc0779613de2f68.js"],"/styles":["static/chunks/webpack-61095c13c5984b221292.js","static/chunks/framework-92300432a1172ef1338b.js","static/chunks/main-1f18f76c3a76cf3a94ff.js","static/chunks/163-57d50e18fbe217fe1b39.js","static/chunks/pages/styles-de301eae591e12170ad1.js"]},"ampFirstPages":[]}');

/***/ }),

/***/ 9392:
/***/ (function(module) {

"use strict";
module.exports = {};

/***/ }),

/***/ 1476:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, _objectSpread({}, pageProps));
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ 3789:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MyDocument; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6859);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class MyDocument extends next_document__WEBPACK_IMPORTED_MODULE_1__.default {
  static async getInitialProps(ctx) {
    const sheet = new styled_components__WEBPACK_IMPORTED_MODULE_2__/* .ServerStyleSheet */ .qH();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles( /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(App, _objectSpread({}, props)))
      });

      const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_1__.default.getInitialProps(ctx);
      return _objectSpread(_objectSpread({}, initialProps), {}, {
        styles: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [initialProps.styles, sheet.getStyleElement()]
        })
      });
    } finally {
      sheet.seal();
    }
  }

}

/***/ })

};
;
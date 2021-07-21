/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 9324:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.cjs.js
var styled_components_cjs = __webpack_require__(27);
;// CONCATENATED MODULE: ./components/molecules/resource/styled.tsx

const Card = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "styled__Card",
  componentId: "sc-1x7qzml-0"
})(["width:100%;background:white;border-radius:20px;overflow:hidden;display:flex;flex-direction:column;max-width:20rem;"]);
const CardImg = styled_components_cjs/* default.img.withConfig */.ZP.img.withConfig({
  displayName: "styled__CardImg",
  componentId: "sc-1x7qzml-1"
})(["width:100%;height:15rem;"]);
const CardBody = styled_components_cjs/* default.p.withConfig */.ZP.p.withConfig({
  displayName: "styled__CardBody",
  componentId: "sc-1x7qzml-2"
})(["width:100%;color:#0f1926;"]);
const CardTitle = styled_components_cjs/* default.h2.withConfig */.ZP.h2.withConfig({
  displayName: "styled__CardTitle",
  componentId: "sc-1x7qzml-3"
})(["color:#0f1926;"]);
const CardButton = styled_components_cjs/* default.a.withConfig */.ZP.a.withConfig({
  displayName: "styled__CardButton",
  componentId: "sc-1x7qzml-4"
})(["font-size:x-large;color:#F9B208;cursor:pointer;&:active{color:#F98404;}&:hover{color:#FC5404;}"]);
;// CONCATENATED MODULE: ./components/molecules/resource/index.tsx





const createSlug = str => {
  str = str.replace(/\s+/g, '-');
  return str.toLowerCase();
};

const Resource = props => {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Card, {
    children: [/*#__PURE__*/jsx_runtime.jsx(CardImg, {
      src: props.img
    }), /*#__PURE__*/jsx_runtime.jsx(CardTitle, {
      children: props.title
    }), /*#__PURE__*/jsx_runtime.jsx(CardBody, {
      children: props.description
    }), /*#__PURE__*/jsx_runtime.jsx(next_link.default, {
      passHref: true,
      href: `/recurso/[slug]`,
      as: `/recurso/${props.slug}`,
      children: /*#__PURE__*/jsx_runtime.jsx(CardButton, {
        children: "Ver"
      })
    })]
  });
};

/* harmony default export */ var resource = (Resource);
// EXTERNAL MODULE: ./components/organism/layout/index.tsx + 5 modules
var layout = __webpack_require__(1866);
;// CONCATENATED MODULE: ./pages/api/api.tsx
async function fetchGraphQL(query, preview = false) {
  return fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${preview ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN : process.env.CONTENTFUL_ACCESS_TOKEN}`
    },
    body: JSON.stringify({
      query
    })
  }).then(response => response.json());
}

function extractPages(fetchResponse) {
  var _fetchResponse$data, _fetchResponse$data$p;

  return fetchResponse === null || fetchResponse === void 0 ? void 0 : (_fetchResponse$data = fetchResponse.data) === null || _fetchResponse$data === void 0 ? void 0 : (_fetchResponse$data$p = _fetchResponse$data.paginasCollection) === null || _fetchResponse$data$p === void 0 ? void 0 : _fetchResponse$data$p.items;
}

function extractPage(fetchResponse) {
  var _fetchResponse$data2, _fetchResponse$data2$, _fetchResponse$data2$2;

  return fetchResponse === null || fetchResponse === void 0 ? void 0 : (_fetchResponse$data2 = fetchResponse.data) === null || _fetchResponse$data2 === void 0 ? void 0 : (_fetchResponse$data2$ = _fetchResponse$data2.paginasCollection) === null || _fetchResponse$data2$ === void 0 ? void 0 : (_fetchResponse$data2$2 = _fetchResponse$data2$.items) === null || _fetchResponse$data2$2 === void 0 ? void 0 : _fetchResponse$data2$2[0];
}

const getAllResources = async () => {
  const entry = await fetchGraphQL(`query {
            paginasCollection{
                total
                items{
                  titulo
                  tipo
                  url
                  slug
                  descripcion
                  img{
                    title
                    url
                  }
                  sys{
                    id
                  }
                }
              }
        }`, true);
  return extractPages(entry);
};
const getResource = async slug => {
  const entry = await fetchGraphQL(`query {
            paginasCollection(where:{slug: "${slug}"}, limit:1){
               
                items{
                    titulo
                    tipo
                    url
                    descripcion
                    slug
                    img{
                        title
                        url
                    }
                    sys{
                        id
                    }
                }   
            }           
        }`, true);
  return extractPage(entry);
};
;// CONCATENATED MODULE: ./pages/styles.tsx

const Container = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1u0le1h-0"
})(["width:100%;padding:30px 0px;display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,20rem),1fr));gap:30px;"]);
/* harmony default export */ var styles = (Container);
;// CONCATENATED MODULE: ./pages/index.tsx






const Home = props => {
  const {
    resources
  } = props;
  return /*#__PURE__*/jsx_runtime.jsx(layout/* default */.Z, {
    children: /*#__PURE__*/jsx_runtime.jsx(styles, {
      children: resources.map((item, key) => /*#__PURE__*/jsx_runtime.jsx(resource, {
        title: item.titulo,
        img: item.img.url,
        description: item.descripcion,
        url: item.url,
        type: item.tipo,
        id: item.sys.id,
        slug: item.slug
      }, key))
    })
  });
};

async function getServerSideProps() {
  const resources = await getAllResources();
  return {
    props: {
      resources
    }
  };
}
/* harmony default export */ var pages = (Home);

/***/ }),

/***/ 9254:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; },
/* harmony export */   "getStaticPaths": function() { return /* binding */ getStaticPaths; },
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; },
/* harmony export */   "unstable_getStaticParams": function() { return /* binding */ unstable_getStaticParams; },
/* harmony export */   "unstable_getStaticProps": function() { return /* binding */ unstable_getStaticProps; },
/* harmony export */   "unstable_getStaticPaths": function() { return /* binding */ unstable_getStaticPaths; },
/* harmony export */   "unstable_getServerProps": function() { return /* binding */ unstable_getServerProps; },
/* harmony export */   "config": function() { return /* binding */ config; },
/* harmony export */   "_app": function() { return /* binding */ _app; },
/* harmony export */   "renderReqToHTML": function() { return /* binding */ renderReqToHTML; },
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var next_dist_next_server_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3660);
/* harmony import */ var next_dist_next_server_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_next_server_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5706);
/* harmony import */ var private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2738);
/* harmony import */ var private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9392);
/* harmony import */ var next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9436);

      
      
      
      

      
      const { processEnv } = __webpack_require__(2333)
      processEnv([{"path":".env.local","contents":"CONTENTFUL_SPACE_ID=84an8swvygl9\r\nCONTENTFUL_ACCESS_TOKEN=2SxrBozb_uxpLGuWHA3lBopgDk8XjWPs8a60Q40nUw4\r\nCONTENTFUL_PREVIEW_ACCESS_TOKEN=9vCPhUq4fYAoxaFKmlMxwUmlFJH9BEdJBEefGIrN328\r\nCONTENTFUL_PREVIEW_SECRET="}])
    
      
      const runtimeConfig = {}
      ;

      const documentModule = __webpack_require__(3789)

      const appMod = __webpack_require__(1476)
      let App = appMod.default || appMod.then && appMod.then(mod => mod.default);

      const compMod = __webpack_require__(9324)

      const Component = compMod.default || compMod.then && compMod.then(mod => mod.default)
      /* harmony default export */ __webpack_exports__["default"] = (Component);
      const getStaticProps = compMod['getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['getStaticProp' + 's'])
      const getStaticPaths = compMod['getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['getStaticPath' + 's'])
      const getServerSideProps = compMod['getServerSideProp' + 's'] || compMod.then && compMod.then(mod => mod['getServerSideProp' + 's'])

      // kept for detecting legacy exports
      const unstable_getStaticParams = compMod['unstable_getStaticParam' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticParam' + 's'])
      const unstable_getStaticProps = compMod['unstable_getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticProp' + 's'])
      const unstable_getStaticPaths = compMod['unstable_getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticPath' + 's'])
      const unstable_getServerProps = compMod['unstable_getServerProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getServerProp' + 's'])

      let config = compMod['confi' + 'g'] || (compMod.then && compMod.then(mod => mod['confi' + 'g'])) || {}
      const _app = App

      const combinedRewrites = Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)
        ? private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg
        : []

      if (!Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)) {
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.beforeFiles */ .Dg.beforeFiles)
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.afterFiles */ .Dg.afterFiles)
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.fallback */ .Dg.fallback)
      }

      const { renderReqToHTML, render } = (0,next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__/* .getPageHandler */ .u)({
        pageModule: compMod,
        pageComponent: Component,
        pageConfig: config,
        appModule: App,
        documentModule: documentModule,
        errorModule: __webpack_require__(3359),
        notFoundModule: undefined,
        pageGetStaticProps: getStaticProps,
        pageGetStaticPaths: getStaticPaths,
        pageGetServerSideProps: getServerSideProps,

        assetPrefix: "",
        canonicalBase: "",
        generateEtags: true,
        poweredByHeader: true,

        runtimeConfig,
        buildManifest: private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__,
        reactLoadableManifest: private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__,

        rewrites: combinedRewrites,
        i18n: undefined,
        page: "/",
        buildId: "kYiYO1ccFqMaA4bk7SPnX",
        escapedBuildId: "kYiYO1ccFqMaA4bk7SPnX",
        basePath: "",
        pageIsDynamic: false,
        encodedPreviewProps: {previewModeId:"00d3156893951e64ca333fb3b28c3094",previewModeSigningKey:"ba83ff872c64722cdb41934c25a0675f066ca2f8ff68201bc341a22357139f30",previewModeEncryptionKey:"593530104e70fad56fd00c6992e2a8ce652b089228c6a5df67273abed59cbc05"}
      })
      
    

/***/ }),

/***/ 4293:
/***/ (function(module) {

module.exports = require("buffer");;

/***/ }),

/***/ 5532:
/***/ (function(module) {

module.exports = require("critters");;

/***/ }),

/***/ 6417:
/***/ (function(module) {

module.exports = require("crypto");;

/***/ }),

/***/ 8614:
/***/ (function(module) {

module.exports = require("events");;

/***/ }),

/***/ 5747:
/***/ (function(module) {

module.exports = require("fs");;

/***/ }),

/***/ 8605:
/***/ (function(module) {

module.exports = require("http");;

/***/ }),

/***/ 7211:
/***/ (function(module) {

module.exports = require("https");;

/***/ }),

/***/ 3700:
/***/ (function(module) {

module.exports = require("next/dist/compiled/@ampproject/toolbox-optimizer");;

/***/ }),

/***/ 2087:
/***/ (function(module) {

module.exports = require("os");;

/***/ }),

/***/ 5622:
/***/ (function(module) {

module.exports = require("path");;

/***/ }),

/***/ 1191:
/***/ (function(module) {

module.exports = require("querystring");;

/***/ }),

/***/ 2413:
/***/ (function(module) {

module.exports = require("stream");;

/***/ }),

/***/ 4304:
/***/ (function(module) {

module.exports = require("string_decoder");;

/***/ }),

/***/ 8835:
/***/ (function(module) {

module.exports = require("url");;

/***/ }),

/***/ 1669:
/***/ (function(module) {

module.exports = require("util");;

/***/ }),

/***/ 8761:
/***/ (function(module) {

module.exports = require("zlib");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = function() {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [926,729,336,762,651,428,796,985], function() { return __webpack_require__(9254); })
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	                // Font manifest declaration
/******/ 	                __webpack_require__.__NEXT_FONT_MANIFEST__ = [];
/******/ 	            // Enable feature:
/******/ 	            process.env.__NEXT_OPTIMIZE_FONTS = JSON.stringify(true);/* webpack/runtime/require chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			405: 1
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.require = function(chunkId) { return installedChunks[chunkId]; };
/******/ 		
/******/ 		var installChunk = function(chunk) {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 			__webpack_require__.O();
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = function(chunkId, promises) {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("../chunks/" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	!function() {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = function() {
/******/ 			__webpack_require__.e(926);
/******/ 			__webpack_require__.e(729);
/******/ 			__webpack_require__.e(336);
/******/ 			__webpack_require__.e(762);
/******/ 			__webpack_require__.e(651);
/******/ 			__webpack_require__.e(428);
/******/ 			__webpack_require__.e(796);
/******/ 			__webpack_require__.e(985);
/******/ 			return next();
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;
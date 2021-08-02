/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 1532:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAllResources": function() { return /* binding */ getAllResources; },
/* harmony export */   "getResource": function() { return /* binding */ getResource; },
/* harmony export */   "getAllSlugs": function() { return /* binding */ getAllSlugs; }
/* harmony export */ });
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

const extractSlugs = fetchResponse => {
  var _fetchResponse$data3, _fetchResponse$data3$;

  let data = fetchResponse === null || fetchResponse === void 0 ? void 0 : (_fetchResponse$data3 = fetchResponse.data) === null || _fetchResponse$data3 === void 0 ? void 0 : (_fetchResponse$data3$ = _fetchResponse$data3.paginasCollection) === null || _fetchResponse$data3$ === void 0 ? void 0 : _fetchResponse$data3$.items;
  let paths = [];
  data.map(item => paths.push(item.slug));
  return paths;
};

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
                  recomendado
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
                    background{
                        title
                        url
                    }
                    recomendado
                    img{
                        title
                        url
                    }
                    sys{
                        id
                    }
                    metaData{
                        titulo
                        descripcion
                        imagen{
                            url
                        }
                    }
                }   
            }           
        }`, true);
  return extractPage(entry);
};
const getAllSlugs = async () => {
  const entry = await fetchGraphQL(`query {
            paginasCollection{
                items{
                    slug
                }
            }
        }`, true);
  return extractSlugs(entry);
};

/***/ }),

/***/ 5274:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_dist_next_server_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3660);
/* harmony import */ var next_dist_next_server_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_next_server_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5706);
/* harmony import */ var next_dist_build_webpack_loaders_next_serverless_loader_api_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8277);

        
      const { processEnv } = __webpack_require__(2333)
      processEnv([{"path":".env.local","contents":"CONTENTFUL_SPACE_ID=84an8swvygl9\r\nCONTENTFUL_ACCESS_TOKEN=2SxrBozb_uxpLGuWHA3lBopgDk8XjWPs8a60Q40nUw4\r\nCONTENTFUL_PREVIEW_ACCESS_TOKEN=9vCPhUq4fYAoxaFKmlMxwUmlFJH9BEdJBEefGIrN328\r\nCONTENTFUL_PREVIEW_SECRET="}])
    
        
        const runtimeConfig = {}
        ;
        

        

        const combinedRewrites = Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)
          ? private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg
          : []

        if (!Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)) {
          combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.beforeFiles */ .Dg.beforeFiles)
          combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.afterFiles */ .Dg.afterFiles)
          combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.fallback */ .Dg.fallback)
        }

        const apiHandler = (0,next_dist_build_webpack_loaders_next_serverless_loader_api_handler__WEBPACK_IMPORTED_MODULE_2__/* .getApiHandler */ .Y)({
          pageModule: __webpack_require__(1532),
          rewrites: combinedRewrites,
          i18n: undefined,
          page: "/api/api",
          basePath: "",
          pageIsDynamic: false,
          encodedPreviewProps: {previewModeId:"0bf531ebae66b89e8612ea4dbdf1c538",previewModeSigningKey:"1d448fd2ea1433bf4c8388acf69f467518de3d3e9f76928d8dd807ceb4d4677b",previewModeEncryptionKey:"df675f52ee89395880fce9c9658df38738c5070d8f1f89122617a02f947bb764"}
        })
        /* harmony default export */ __webpack_exports__["default"] = (apiHandler);
      

/***/ }),

/***/ 4293:
/***/ (function(module) {

module.exports = require("buffer");;

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
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
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [322,775,195,428], function() { return __webpack_require__(5274); })
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
/******/ 			802: 1
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
/******/ 					installChunk(require("../../chunks/" + __webpack_require__.u(chunkId)));
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
/******/ 			__webpack_require__.e(322);
/******/ 			__webpack_require__.e(775);
/******/ 			__webpack_require__.e(195);
/******/ 			__webpack_require__.e(428);
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
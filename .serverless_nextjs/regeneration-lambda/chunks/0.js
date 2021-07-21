exports.id = 0;
exports.ids = [0];
exports.modules = {

/***/ 2184:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ content_resource; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.cjs.js
var styled_components_cjs = __webpack_require__(27);
;// CONCATENATED MODULE: ./components/organism/content-resource/styled.tsx

const ContentPageResource = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "styled__ContentPageResource",
  componentId: "sc-r9dd1p-0"
})(["width:100%;padding:20px 0px;display:flex;flex-direction:column;"]);
const ImgContent = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "styled__ImgContent",
  componentId: "sc-r9dd1p-1"
})(["width:100%;height:300px;overflow:hidden;display:flex;justify-content:center;align-items:center;img{width:100%;}"]);
const TitleContent = styled_components_cjs/* default.h1.withConfig */.ZP.h1.withConfig({
  displayName: "styled__TitleContent",
  componentId: "sc-r9dd1p-2"
})(["width:100%;"]);
const DescriptionContent = styled_components_cjs/* default.p.withConfig */.ZP.p.withConfig({
  displayName: "styled__DescriptionContent",
  componentId: "sc-r9dd1p-3"
})(["width:100%;"]);
const ButtonRedirect = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "styled__ButtonRedirect",
  componentId: "sc-r9dd1p-4"
})(["width:100%;a{padding:10px 20px;color:white;background:#EF5C3D;border-radius:20px;font-weight:700;font-size:larger;}"]);
;// CONCATENATED MODULE: ./components/organism/content-resource/index.tsx



/* eslint-disable @next/next/no-img-element */


const ContentResource = props => {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(ContentPageResource, {
    children: [/*#__PURE__*/jsx_runtime.jsx(ImgContent, {
      children: /*#__PURE__*/jsx_runtime.jsx("img", {
        src: props.img,
        alt: props.title
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(TitleContent, {
      children: [props.title, " - ", props.type]
    }), /*#__PURE__*/jsx_runtime.jsx(DescriptionContent, {
      children: props.description
    }), /*#__PURE__*/jsx_runtime.jsx(ButtonRedirect, {
      children: /*#__PURE__*/jsx_runtime.jsx("a", {
        href: props.url,
        target: "_blank",
        rel: "noreferrer",
        children: "Ir al sito"
      })
    })]
  });
};

/* harmony default export */ var content_resource = (ContentResource);

/***/ }),

/***/ 1532:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getResource": function() { return /* binding */ getResource; }
/* harmony export */ });
/* unused harmony export getAllResources */
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

/***/ })

};
;
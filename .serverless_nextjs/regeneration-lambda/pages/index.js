/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 9816:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "h4": function() { return /* reexport */ header/* Header */.h; },
  "Ar": function() { return /* reexport */ layout/* Layout */.A; },
  "_z": function() { return /* reexport */ Resource; },
  "rF": function() { return /* reexport */ ResourceDetail; }
});

// UNUSED EXPORTS: ContentResource, Footer

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.cjs.js
var styled_components_cjs = __webpack_require__(27);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion.js + 80 modules
var motion = __webpack_require__(6763);
;// CONCATENATED MODULE: ./components/molecules/Resource/styledComponents.js


const Card = (0,styled_components_cjs/* default */.ZP)(motion/* motion.div */.E.div).withConfig({
  displayName: "styledComponents__Card",
  componentId: "sc-ehh093-0"
})(["width:100%;background:#fff;border-radius:20px;display:flex;flex-direction:column;max-width:20rem;align-self:flex-start;justify-self:center;cursor:pointer;opacity:1 !important;min-height:430px;box-shadow:1px 1px 12px #777;position:relative;&.isUrl{cursor:default;}"]);
const CardImg = styled_components_cjs/* default.img.withConfig */.ZP.img.withConfig({
  displayName: "styledComponents__CardImg",
  componentId: "sc-ehh093-1"
})(["width:94%;margin:0 auto 0;height:15rem;border-radius:15px;box-shadow:1px 1px 12px #ccc;margin-top:3%;"]);
const CardTitle = styled_components_cjs/* default.h2.withConfig */.ZP.h2.withConfig({
  displayName: "styledComponents__CardTitle",
  componentId: "sc-ehh093-2"
})(["color:#0f1926;padding:0 20px;margin:10px 0px 0;text-align:center;"]);
const CardBody = styled_components_cjs/* default.p.withConfig */.ZP.p.withConfig({
  displayName: "styledComponents__CardBody",
  componentId: "sc-ehh093-3"
})(["width:100%;color:#0f1926;padding:0 20px;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;margin-bottom:15px;margin-top:10px;"]);
const CardButton = styled_components_cjs/* default.a.withConfig */.ZP.a.withConfig({
  displayName: "styledComponents__CardButton",
  componentId: "sc-ehh093-4"
})(["color:#f9b208;margin:5px auto 10px;cursor:pointer;background:#fc5404;display:flex;justify-content:center;align-items:center;width:36%;padding:10px 15px;color:#fff;border-radius:6px;transition:all 0.5s ease;text-transform:uppercase;letter-spacing:0.5px;font-weight:bold;font-size:12px;&:hover{transform:scale(1.1);}"]);
const Ribbon = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "styledComponents__Ribbon",
  componentId: "sc-ehh093-5"
})(["position:absolute;right:-8px;top:-8px;z-index:1;overflow:hidden;width:80px;height:80px;text-align:right;z-index:2;span{font-size:8px;letter-spacing:0.5px;font-weight:bold;color:#FFF;text-transform:uppercase;text-align:center;line-height:24px;transform:rotate(45deg);-webkit-transform:rotate(45deg);width:104px;display:block;background:#79A70A;background:linear-gradient(#2989d8 0%,#1e5799 100%);box-shadow:0 3px 10px -5px rgba(0,0,0,1);position:absolute;top:19px;right:-21px;&:before,&:after{content:\"\";position:absolute;top:100%;z-index:-1;border-bottom:3px solid transparent;border-top:3px solid #1e5799;}&:before{left:0px;border-left:3px solid #1e5799;border-right:3px solid transparent;}&:after{right:0px;border-left:3px solid transparent;border-right:3px solid #1e5799;}}"]);
;// CONCATENATED MODULE: ./components/molecules/Resource/index.tsx





const createSlug = str => {
  str = str.replace(/\s+/g, "-");
  return str.toLowerCase();
};

const Resource = props => {
  const {
    data: {
      img,
      titulo,
      descripcion,
      url,
      slug,
      recomendado
    },
    layoutId,
    onClick
  } = props;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Card, {
    onClick: onClick,
    layoutId: layoutId,
    className: url && 'isUrl',
    children: [recomendado && /*#__PURE__*/jsx_runtime.jsx(Ribbon, {
      children: /*#__PURE__*/jsx_runtime.jsx("span", {
        children: "Recomendado"
      })
    }), /*#__PURE__*/jsx_runtime.jsx(CardImg, {
      src: img.url
    }), /*#__PURE__*/jsx_runtime.jsx(CardTitle, {
      children: titulo
    }), /*#__PURE__*/jsx_runtime.jsx(CardBody, {
      children: descripcion
    }), url && /*#__PURE__*/jsx_runtime.jsx(next_link.default, {
      passHref: true,
      href: `/post/[slug]`,
      as: `/post/${slug}`,
      children: /*#__PURE__*/jsx_runtime.jsx(CardButton, {
        children: "Descubre"
      })
    })]
  });
};
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./assets/img/close.svg
/* harmony default export */ var img_close = ({"src":"/_next/static/image/assets/img/close.3721b02ec61c1015e90388746e266d15.svg","height":512,"width":512});
;// CONCATENATED MODULE: ./components/molecules/ResourceDetail/styledComponents.js


const DetailResource = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "styledComponents__DetailResource",
  componentId: "sc-y57lv0-0"
})(["position:fixed;top:0;bottom:0;left:0;right:0;width:100%;height:100%;margin:auto;z-index:4;padding:5%;background:rgba(0,0,0,.5);display:flex;justify-content:center;align-content:center;align-items:center;"]);
const BoxDetail = (0,styled_components_cjs/* default */.ZP)(motion/* motion.div */.E.div).withConfig({
  displayName: "styledComponents__BoxDetail",
  componentId: "sc-y57lv0-1"
})(["background:#fff;box-shadow:1px 2px 8px #888;border-radius:1rem;position:relative;display:flex;flex-wrap:wrap;height:80%;width:80%;align-content:flex-start;.close{position:absolute;top:4%;left:2%;cursor:pointer;height:30px;width:30px;img{object-fit:contain;width:100%;height:100%;transition:all 0.5s ease;}&:hover{img{transform:scale(1.1);}}}"]);
const BoxLeft = (0,styled_components_cjs/* default */.ZP)(motion/* motion.div */.E.div).withConfig({
  displayName: "styledComponents__BoxLeft",
  componentId: "sc-y57lv0-2"
})(["display:flex;flex-wrap:wrap;height:100%;width:50%;.primary-product-image{border-radius:1rem 0 0 1rem;width:100%;object-fit:cover;object-position:center;height:100%;}"]);
const BoxRight = (0,styled_components_cjs/* default */.ZP)(motion/* motion.div */.E.div).withConfig({
  displayName: "styledComponents__BoxRight",
  componentId: "sc-y57lv0-3"
})(["display:flex;flex-wrap:wrap;height:100%;width:50%;align-content:flex-start;justify-content:center;padding:60px 5% 30px;h2{font-size:30px;letter-spacing:.5px;width:100%;text-align:center;margin-bottom:10px;}p{line-height:1.4;}"]);
const styledComponents_Tag = styled_components_cjs/* default.span.withConfig */.ZP.span.withConfig({
  displayName: "styledComponents__Tag",
  componentId: "sc-y57lv0-4"
})(["padding:5px 20px;margin:10px;background:rgb(0,173,181);border-radius:5px 90px 90px 5px;font-size:smaller;color:white;position:relative;box-shadow:rgba(0,0,0,0.25) 0px 54px 55px,rgba(0,0,0,0.12) 0px -12px 30px,rgba(0,0,0,0.12) 0px 4px 6px,rgba(0,0,0,0.17) 0px 12px 13px,rgba(0,0,0,0.09) 0px -3px 5px;&:before{background:#fff;border-radius:10px;box-shadow:inset 0 1px rgba(0,0,0,0.25);content:\"\";height:6px;left:8px;position:absolute;width:6px;top:10px;}"]);
const styledComponents_Ribbon = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "styledComponents__Ribbon",
  componentId: "sc-y57lv0-5"
})(["position:absolute;right:-10px;top:-6px;z-index:1;overflow:hidden;width:145px;height:145px;text-align:right;z-index:2;span{font-size:11px;letter-spacing:0.5px;font-weight:bold;color:#FFF;text-transform:uppercase;text-align:center;line-height:35px;transform:rotate(45deg);-webkit-transform:rotate(45deg);width:155px;display:block;background:#79A70A;background:linear-gradient(#2989d8 0%,#1e5799 100%);box-shadow:0 3px 10px -5px rgba(0,0,0,1);position:absolute;top:27px;right:-30px;&:before,&:after{content:\"\";position:absolute;top:100%;z-index:-1;border-bottom:3px solid transparent;border-top:3px solid #1e5799;}&:before{left:0px;border-left:3px solid #1e5799;border-right:3px solid transparent;}&:after{right:0px;border-left:3px solid transparent;border-right:3px solid #1e5799;}}"]);
;// CONCATENATED MODULE: ./components/molecules/ResourceDetail/index.tsx






const ResourceDetail = props => {
  const {
    data,
    setIsOpenAnimation,
    setSelected
  } = props;
  return /*#__PURE__*/jsx_runtime.jsx(DetailResource, {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(BoxDetail, {
      layoutId: `resource-${data.slug}`,
      children: [data.recomendado && /*#__PURE__*/jsx_runtime.jsx(styledComponents_Ribbon, {
        children: /*#__PURE__*/jsx_runtime.jsx("span", {
          children: "Recomendado"
        })
      }), /*#__PURE__*/jsx_runtime.jsx("div", {
        className: "close",
        onClick: () => {
          document.body.style.overflow = "auto";
          setIsOpenAnimation(false);
          setSelected({
            titulo: "",
            slug: "",
            img: {
              url: ""
            }
          });
        },
        children: /*#__PURE__*/jsx_runtime.jsx(next_image.default, {
          src: img_close,
          alt: "icon-close"
        })
      }), /*#__PURE__*/jsx_runtime.jsx(BoxLeft, {
        children: /*#__PURE__*/jsx_runtime.jsx(motion/* motion.img */.E.img, {
          className: "primary-product-image",
          src: data.img.url,
          alt: data.titulo
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(BoxRight, {
        children: [/*#__PURE__*/jsx_runtime.jsx("h2", {
          children: data.titulo
        }), data.tipo && data.tipo.map((item, key) => /*#__PURE__*/jsx_runtime.jsx(styledComponents_Tag, {
          children: item
        }, key)), /*#__PURE__*/jsx_runtime.jsx("p", {
          children: data.descripcion
        })]
      })]
    })
  });
};
// EXTERNAL MODULE: ./components/molecules/footer/index.tsx + 1 modules
var footer = __webpack_require__(2146);
// EXTERNAL MODULE: ./components/molecules/header/index.tsx + 1 modules
var header = __webpack_require__(8030);
;// CONCATENATED MODULE: ./components/organism/content-resource/styled.tsx

const styled_ContentPageResource = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "styled__ContentPageResource",
  componentId: "sc-r9dd1p-0"
})(["width:100%;padding:20px 0px;display:flex;flex-direction:column;background:", ";"], props => props.background);
const styled_ImgContent = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "styled__ImgContent",
  componentId: "sc-r9dd1p-1"
})(["width:100%;height:400px;overflow:hidden;display:flex;justify-content:center;align-items:center;box-shadow:rgba(0,0,0,0.25) 0px 54px 55px,rgba(0,0,0,0.12) 0px -12px 30px,rgba(0,0,0,0.12) 0px 4px 6px,rgba(0,0,0,0.17) 0px 12px 13px,rgba(0,0,0,0.09) 0px -3px 5px;border-radius:30px;margin:30px 0px;img{width:100%;}"]);
const styled_TitleContent = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "styled__TitleContent",
  componentId: "sc-r9dd1p-2"
})(["width:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;"]);
const styled_Title = styled_components_cjs/* default.h1.withConfig */.ZP.h1.withConfig({
  displayName: "styled__Title",
  componentId: "sc-r9dd1p-3"
})(["text-align:center;font-size:xx-large;margin-bottom:0px;"]);
const styled_ContentTags = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "styled__ContentTags",
  componentId: "sc-r9dd1p-4"
})(["display:flex;flex-direction:row;"]);
const styled_Tag = styled_components_cjs/* default.span.withConfig */.ZP.span.withConfig({
  displayName: "styled__Tag",
  componentId: "sc-r9dd1p-5"
})(["padding:5px 20px;margin:10px 10px;background:rgb(0,173,181);border-radius:5px 90px 90px 5px;font-size:smaller;color:white;position:relative;box-shadow:rgba(0,0,0,0.25) 0px 54px 55px,rgba(0,0,0,0.12) 0px -12px 30px,rgba(0,0,0,0.12) 0px 4px 6px,rgba(0,0,0,0.17) 0px 12px 13px,rgba(0,0,0,0.09) 0px -3px 5px;&:before{background:#fff;border-radius:10px;box-shadow:inset 0 1px rgba(0,0,0,0.25);content:\"\";height:6px;left:10px;position:absolute;width:6px;top:10px;}"]);
const styled_DescriptionContent = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "styled__DescriptionContent",
  componentId: "sc-r9dd1p-6"
})(["width:100%;margin:30px 0px;padding:10px 20px;border-radius:20px;background:white;box-shadow:rgba(0,0,0,0.25) 0px 54px 55px,rgba(0,0,0,0.12) 0px -12px 30px,rgba(0,0,0,0.12) 0px 4px 6px,rgba(0,0,0,0.17) 0px 12px 13px,rgba(0,0,0,0.09) 0px -3px 5px;p{font-size:larger;color:#000;}"]);
const styled_ButtonRedirect = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "styled__ButtonRedirect",
  componentId: "sc-r9dd1p-7"
})(["width:100%;margin-top:50px auto;display:flex;justify-content:center;a{color:#f9b208;margin:5px auto 10px;cursor:pointer;background:#fc5404;display:flex;justify-content:center;align-items:center;width:36%;padding:10px 15px;color:#fff;border-radius:6px;transition:all 0.5s ease;text-transform:uppercase;letter-spacing:0.5px;font-weight:bold;font-size:12px;&:hover{transform:scale(1.1);}}"]);
;// CONCATENATED MODULE: ./components/organism/content-resource/index.tsx




const ContentResource = props => {
  return /*#__PURE__*/_jsxs(ContentPageResource, {
    children: [/*#__PURE__*/_jsxs(TitleContent, {
      children: [/*#__PURE__*/_jsx(Title, {
        children: props.title
      }), /*#__PURE__*/_jsx(ContentTags, {
        children: props.tipo.map((item, key) => /*#__PURE__*/_jsx(Tag, {
          children: item
        }, key))
      })]
    }), /*#__PURE__*/_jsx(ImgContent, {
      children: /*#__PURE__*/_jsx(Image, {
        width: "1024",
        height: "500",
        quality: "100",
        src: props.background,
        alt: props.title,
        layout: "intrinsic"
      })
    }), /*#__PURE__*/_jsx(DescriptionContent, {
      children: /*#__PURE__*/_jsx("p", {
        children: props.description
      })
    }), /*#__PURE__*/_jsx(ButtonRedirect, {
      children: /*#__PURE__*/_jsx("a", {
        href: props.url,
        target: "_blank",
        rel: "noreferrer",
        children: "Ir al sito"
      })
    })]
  });
};
// EXTERNAL MODULE: ./components/organism/layout/index.tsx + 2 modules
var layout = __webpack_require__(7689);
;// CONCATENATED MODULE: ./components/index.tsx







/***/ }),

/***/ 8007:
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
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/components/AnimateSharedLayout/index.js + 4 modules
var AnimateSharedLayout = __webpack_require__(9540);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/components/AnimatePresence/index.js + 2 modules
var AnimatePresence = __webpack_require__(3869);
// EXTERNAL MODULE: ./components/index.tsx + 7 modules
var components = __webpack_require__(9816);
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
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.cjs.js
var styled_components_cjs = __webpack_require__(27);
;// CONCATENATED MODULE: ./pages/styledComponents.js

const Container = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "styledComponents__Container",
  componentId: "sc-1u7nnvr-0"
})(["width:100%;padding:60px 0px 80px;display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,20rem),1fr));gap:30px;justify-content:center;"]);
/* harmony default export */ var styledComponents = (Container);
// EXTERNAL MODULE: ./components/organism/SEO/index.tsx
var SEO = __webpack_require__(5940);
;// CONCATENATED MODULE: ./pages/index.tsx









const Home = props => {
  const {
    resources
  } = props;
  const {
    0: isOpenAnimation,
    1: setIsOpenAnimation
  } = (0,react.useState)(false);
  const {
    0: selected,
    1: setSelected
  } = (0,react.useState)({
    titulo: "",
    tipo: [],
    url: "",
    descripcion: "",
    slug: "",
    sys: {
      id: ""
    },
    img: {
      title: "",
      url: ""
    },
    recomendado: true
  });

  const resourceSelected = itemSelected => {
    document.body.style.overflow = "hidden";
    setIsOpenAnimation(true);
    setSelected(itemSelected);
  };

  let title = "Recursos FrontEnds";
  let description = "Son recomendaciones de personales para quien le pueda interezar";
  let img = "/public/faztweb-blog-1.jpg";
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(components/* Layout */.Ar, {
    children: [/*#__PURE__*/jsx_runtime.jsx(SEO/* default */.Z, {
      title: title,
      description: description,
      img: img
    }), /*#__PURE__*/jsx_runtime.jsx(styledComponents, {
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(AnimateSharedLayout/* AnimateSharedLayout */.s, {
        type: "crossfade",
        children: [/*#__PURE__*/jsx_runtime.jsx(AnimatePresence/* AnimatePresence */.M, {
          children: resources.map(item => /*#__PURE__*/jsx_runtime.jsx(components/* Resource */._z, {
            layoutId: `resource-${item.slug}`,
            data: item,
            onClick: () => item.url ? null : resourceSelected(item)
          }, item.slug))
        }), isOpenAnimation && /*#__PURE__*/jsx_runtime.jsx(components/* ResourceDetail */.rF, {
          setIsOpenAnimation: setIsOpenAnimation,
          setSelected: setSelected,
          data: selected
        })]
      })
    })]
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

/***/ 1689:
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

      const compMod = __webpack_require__(8007)

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
        buildId: "wWs1Vau-Pd91VZPDaO7R2",
        escapedBuildId: "wWs1Vau\-Pd91VZPDaO7R2",
        basePath: "",
        pageIsDynamic: false,
        encodedPreviewProps: {previewModeId:"0bf531ebae66b89e8612ea4dbdf1c538",previewModeSigningKey:"1d448fd2ea1433bf4c8388acf69f467518de3d3e9f76928d8dd807ceb4d4677b",previewModeEncryptionKey:"df675f52ee89395880fce9c9658df38738c5070d8f1f89122617a02f947bb764"}
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
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [322,393,325,8,651,818,428,796,20,940], function() { return __webpack_require__(1689); })
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
/******/ 			405: 1,
/******/ 			816: 1
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
/******/ 			__webpack_require__.e(322);
/******/ 			__webpack_require__.e(393);
/******/ 			__webpack_require__.e(325);
/******/ 			__webpack_require__.e(8);
/******/ 			__webpack_require__.e(651);
/******/ 			__webpack_require__.e(818);
/******/ 			__webpack_require__.e(428);
/******/ 			__webpack_require__.e(796);
/******/ 			__webpack_require__.e(20);
/******/ 			__webpack_require__.e(940);
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
exports.id = 985;
exports.ids = [985];
exports.modules = {

/***/ 1866:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ layout; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.cjs.js
var styled_components_cjs = __webpack_require__(27);
;// CONCATENATED MODULE: ./components/organism/layout/styled.tsx

const Main = styled_components_cjs/* default.main.withConfig */.ZP.main.withConfig({
  displayName: "styled__Main",
  componentId: "sc-1fql6dm-0"
})(["width:100%;height:100%;min-height:70vh;display:flex;justify-content:center;"]);
const ContentMain = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "styled__ContentMain",
  componentId: "sc-1fql6dm-1"
})(["width:100%;max-width:1024px;"]);
;// CONCATENATED MODULE: ./components/molecules/footer/styled.tsx

const FooterStyled = styled_components_cjs/* default.footer.withConfig */.ZP.footer.withConfig({
  displayName: "styled__FooterStyled",
  componentId: "sc-1azstha-0"
})(["width:100%;height:100%;min-height:200px;background:#5464BF;display:flex;justify-content:center;"]);
const FooterContent = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "styled__FooterContent",
  componentId: "sc-1azstha-1"
})(["width:100%;max-width:1024px;"]);
;// CONCATENATED MODULE: ./components/molecules/footer/index.tsx



const Footer = () => {
  return /*#__PURE__*/jsx_runtime.jsx(FooterStyled, {
    children: /*#__PURE__*/jsx_runtime.jsx(FooterContent, {
      children: "Esto es una prueba mas"
    })
  });
};

/* harmony default export */ var footer = (Footer);
;// CONCATENATED MODULE: ./components/molecules/header/styled.tsx

const HeaderStyled = styled_components_cjs/* default.header.withConfig */.ZP.header.withConfig({
  displayName: "styled__HeaderStyled",
  componentId: "sc-szzvhx-0"
})(["width:100%;height:100%;min-height:70px;background:#0f1926;color:white;display:flex;align-items:center;justify-content:center;"]);
const ContentHeader = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "styled__ContentHeader",
  componentId: "sc-szzvhx-1"
})(["max-width:1024px;width:100%;display:flex;"]);
const Logo = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "styled__Logo",
  componentId: "sc-szzvhx-2"
})(["color:white;font-size:20pt;font-weight:700;"]);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/molecules/header/index.tsx




const Header = () => {
  return /*#__PURE__*/jsx_runtime.jsx(HeaderStyled, {
    children: /*#__PURE__*/jsx_runtime.jsx(ContentHeader, {
      children: /*#__PURE__*/jsx_runtime.jsx(Logo, {
        children: /*#__PURE__*/jsx_runtime.jsx(next_link.default, {
          href: "/",
          children: /*#__PURE__*/jsx_runtime.jsx("a", {
            children: "Index"
          })
        })
      })
    })
  });
};

/* harmony default export */ var header = (Header);
;// CONCATENATED MODULE: ./components/organism/layout/index.tsx







const Layout = props => {
  const {
    children
  } = props;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/jsx_runtime.jsx(header, {}), /*#__PURE__*/jsx_runtime.jsx(Main, {
      children: /*#__PURE__*/jsx_runtime.jsx(ContentMain, {
        children: children
      })
    }), /*#__PURE__*/jsx_runtime.jsx(footer, {})]
  });
};

/* harmony default export */ var layout = (Layout);

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;
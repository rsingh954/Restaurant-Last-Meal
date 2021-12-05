/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/assets/background.jpg */ "./src/assets/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Courgette&family=JetBrains+Mono:ital,wght@1,300&family=Lobster&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* CSS RESET */\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed,\r\nfigure, figcaption, footer, header, hgroup,\r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  font-size: 100%;\r\n  font: inherit;\r\n  vertical-align: baseline;\r\n}\r\nhtml{\r\n    line-height: 1.6;\r\n}\r\n  ol, ul {\r\n    list-style: none;\r\n  }\r\n  blockquote, q {\r\n    quotes: none;\r\n  }\r\n  blockquote:before, blockquote:after,\r\n  q:before, q:after {\r\n    content: '';\r\n    content: none;\r\n  }\r\nbody{\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    background-position: center center;\r\n}\r\n#content{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    font-family: 'Courgette', cursive;\r\n    align-items: center;\r\n    height: 100vh;\r\n    overflow-x: hidden; \r\n\r\n}\r\nli, a, button{\r\n    font-family: 'Courgette', monospace;\r\n    text-decoration: none;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    color: #edf0f1;\r\n}\r\nimg{\r\n    max-height: 50vh;\r\n}\r\n  /*---------------------NAV BEGINS---------------------------- */\r\nheader{\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    padding: 18px 5%;\r\n    gap: 50px;\r\n}\r\n.nav_links{\r\n    list-style: none;\r\n}\r\n.nav_links li{\r\n    display: inline-block;\r\n    padding: 0px 10px;\r\n}\r\n.nav_links li a{\r\n    transition: all 0.3s ease 0s;\r\n}\r\n.nav_links li a:hover{\r\n    background: -webkit-linear-gradient(rgb(226, 3, 3), rgb(219, 192, 192));\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n}\r\n\r\n.logo{\r\n    cursor: pointer;\r\n    font-family: 'Courgette', monospace;\r\n    color: #edf0f1;\r\n    transition: all 0.3s ease 0s;\r\n}\r\n.logo :hover{\r\n    background: -webkit-linear-gradient(rgb(226, 3, 3), rgb(219, 192, 192));\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n}\r\n  ul {\r\n    display: flex;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  /*----------------------NAV ENDS-----------------------------*/\r\n\r\n\r\n /* --------------------HEADLINE BEGINS--------------------------*/\r\n  .container{\r\n      display: flex;\r\n      color: #edf0f1 ;\r\n      width:100%;\r\n      align-items: center;\r\n      justify-content: center;\r\n      font-family: 'Courgette', cursive;\r\n      font-weight: 700;\r\n      padding-bottom: 360px;\r\n  }\r\n\r\n.heading{\r\n    text-align: center;\r\n}\r\n.container h1{\r\n    font-size: 72px;\r\n\r\n}\r\n.blood {\r\n    color:gold;\r\n    text-shadow:\r\n    4px 4px 1px #300000,\r\n    4px 6px 1px #400000,\r\n    4px 8px 1px #500000,\r\n    4px 10px 1px #600000,\r\n    4px 12px 1px #700000,\r\n    4px 14px 1px #800000,\r\n    4px 16px 1px #900000,\r\n    4px 18px 1px #A00000,\r\n    4px 20px 1px #B00000,\r\n    4px 22px 1px #C00000,\r\n    4px 24px 1px #D00000,\r\n    4px 26px 1px #E00000,\r\n    4px 28px 1px #F00000,\r\n    4px 30px 1px #FA0000,\r\n    4px 32px 1px #FB0000,\r\n    4px 34px 1px #FC0000,\r\n    4px 36px 1px #FD0000,\r\n    4px 38px 1px #FE0000,\r\n    4px 40px 2px #FF0000;\r\n}\r\n /* --------------------HEADLINE ENDS--------------------------*/\r\n\r\n\r\n /* --------------------FOOTER BEGINS--------------------------*/\r\n.footer{\r\n    display: flex;\r\n    color: yellow;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    width: 100%;\r\n    padding: 1rem;\r\n    border-top: 1px solid var(--border-color);\r\n    background-color: var(--background-light);\r\n    \r\n}\r\n.footer a{\r\n    text-decoration: none;\r\n    color: #e5e7eb;\r\n    font-size: 18px;\r\n}\r\n /* --------------------FOOTER ENDS--------------------------*/\r\n\r\n /* --------------------MENU BEGINS--------------------------*/\r\n .menu-container-flex{\r\n    display: none;\r\n    justify-content: center;\r\n    padding: 32px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    gap: 8px;\r\n }\r\n.menu{\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    flex-shrink: 1;\r\n    gap: 8px;\r\n}\r\n.card{\r\n    display: flex;\r\n    border: white 2px solid;\r\n    border-radius: 0.5rem;\r\n    flex-wrap: wrap;\r\n    height: inherit;\r\n    flex-direction: row;\r\n    justify-content: flex-start;\r\n    gap: 18px;\r\n    width: 800px;\r\n    background: rgba(34, 31, 31, 0.993);\r\n}\r\n.card > img{\r\n    border-radius: 1rem;\r\n}\r\n.menu-container{\r\n    display: flex;\r\n    color: #d36f6f;\r\n    padding: 8px;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    gap: 30px;\r\n}\r\n.dropdown{\r\n    background: none;\r\n    border:none\r\n}\r\n.dropdown-content {\r\n    display:none;\r\n  }\r\n\r\n\r\n.dropdown:hover .dropdown-content{\r\n    display: flex\r\n}\r\n\r\n /* --------------------MENU ENDS--------------------------*/\r\n\r\n /* --------------------ABOUT BEGINS--------------------------*/\r\n.about{\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    padding: 32px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    gap: 8px;\r\n    padding-bottom: 360px;\r\n\r\n}\r\nhr{\r\n    width: 80vw;\r\n    color: gold;\r\n}\r\n.about-header{\r\n    padding: 0px 16px;\r\n\r\n}\r\n.about-content{\r\n    display: flex;\r\n    justify-content: center;\r\n    padding: 16px;\r\n    border-radius: 1em;\r\n    background: rgb(48, 47, 47);\r\n}\r\n.email{\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 32px;\r\n    padding: 16px;\r\n\r\n\r\n}\r\n.phone{\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 32px;\r\n    padding: 16px;\r\n\r\n    \r\n}\r\n.about h1{\r\n    color: gold;\r\n    font-weight: 700;\r\n    font-size: 48px;\r\n}\r\n.about-content{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    color: #d36f6f;\r\n    \r\n}\r\n\r\n /* --------------------ABOUT BEGINS--------------------------*/\r\n\r\n /* --------------------MEDIA QUERIES BEGINS--------------------------*/\r\n  @media screen and (max-width: 600px) {\r\n    header{\r\n      justify-content: center;\r\n    }\r\n    body{\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n    .card{\r\n        width: 250px;\r\n        padding: 10px 15px;\r\n    }\r\n    .menu-container-flex{\r\n        display: none;\r\n    }\r\n    \r\n  }\r\n  \r\n\r\n  /* --------------------MEDIA QUERIES ENDS--------------------------*/\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Courgette&family=JetBrains+Mono:ital,wght@1,300&family=Lobster&display=swap');/* CSS RESET */\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed,\r\nfigure, figcaption, footer, header, hgroup,\r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  font-size: 100%;\r\n  font: inherit;\r\n  vertical-align: baseline;\r\n}\r\nhtml{\r\n    line-height: 1.6;\r\n}\r\n  ol, ul {\r\n    list-style: none;\r\n  }\r\n  blockquote, q {\r\n    quotes: none;\r\n  }\r\n  blockquote:before, blockquote:after,\r\n  q:before, q:after {\r\n    content: '';\r\n    content: none;\r\n  }\r\nbody{\r\n    background-image: url('../src/assets/background.jpg');\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    background-position: center center;\r\n}\r\n#content{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    font-family: 'Courgette', cursive;\r\n    align-items: center;\r\n    height: 100vh;\r\n    overflow-x: hidden; \r\n\r\n}\r\nli, a, button{\r\n    font-family: 'Courgette', monospace;\r\n    text-decoration: none;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    color: #edf0f1;\r\n}\r\nimg{\r\n    max-height: 50vh;\r\n}\r\n  /*---------------------NAV BEGINS---------------------------- */\r\nheader{\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    padding: 18px 5%;\r\n    gap: 50px;\r\n}\r\n.nav_links{\r\n    list-style: none;\r\n}\r\n.nav_links li{\r\n    display: inline-block;\r\n    padding: 0px 10px;\r\n}\r\n.nav_links li a{\r\n    transition: all 0.3s ease 0s;\r\n}\r\n.nav_links li a:hover{\r\n    background: -webkit-linear-gradient(rgb(226, 3, 3), rgb(219, 192, 192));\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n}\r\n\r\n.logo{\r\n    cursor: pointer;\r\n    font-family: 'Courgette', monospace;\r\n    color: #edf0f1;\r\n    transition: all 0.3s ease 0s;\r\n}\r\n.logo :hover{\r\n    background: -webkit-linear-gradient(rgb(226, 3, 3), rgb(219, 192, 192));\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n}\r\n  ul {\r\n    display: flex;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  /*----------------------NAV ENDS-----------------------------*/\r\n\r\n\r\n /* --------------------HEADLINE BEGINS--------------------------*/\r\n  .container{\r\n      display: flex;\r\n      color: #edf0f1 ;\r\n      width:100%;\r\n      align-items: center;\r\n      justify-content: center;\r\n      font-family: 'Courgette', cursive;\r\n      font-weight: 700;\r\n      padding-bottom: 360px;\r\n  }\r\n\r\n.heading{\r\n    text-align: center;\r\n}\r\n.container h1{\r\n    font-size: 72px;\r\n\r\n}\r\n.blood {\r\n    color:gold;\r\n    text-shadow:\r\n    4px 4px 1px #300000,\r\n    4px 6px 1px #400000,\r\n    4px 8px 1px #500000,\r\n    4px 10px 1px #600000,\r\n    4px 12px 1px #700000,\r\n    4px 14px 1px #800000,\r\n    4px 16px 1px #900000,\r\n    4px 18px 1px #A00000,\r\n    4px 20px 1px #B00000,\r\n    4px 22px 1px #C00000,\r\n    4px 24px 1px #D00000,\r\n    4px 26px 1px #E00000,\r\n    4px 28px 1px #F00000,\r\n    4px 30px 1px #FA0000,\r\n    4px 32px 1px #FB0000,\r\n    4px 34px 1px #FC0000,\r\n    4px 36px 1px #FD0000,\r\n    4px 38px 1px #FE0000,\r\n    4px 40px 2px #FF0000;\r\n}\r\n /* --------------------HEADLINE ENDS--------------------------*/\r\n\r\n\r\n /* --------------------FOOTER BEGINS--------------------------*/\r\n.footer{\r\n    display: flex;\r\n    color: yellow;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    width: 100%;\r\n    padding: 1rem;\r\n    border-top: 1px solid var(--border-color);\r\n    background-color: var(--background-light);\r\n    \r\n}\r\n.footer a{\r\n    text-decoration: none;\r\n    color: #e5e7eb;\r\n    font-size: 18px;\r\n}\r\n /* --------------------FOOTER ENDS--------------------------*/\r\n\r\n /* --------------------MENU BEGINS--------------------------*/\r\n .menu-container-flex{\r\n    display: none;\r\n    justify-content: center;\r\n    padding: 32px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    gap: 8px;\r\n }\r\n.menu{\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    flex-shrink: 1;\r\n    gap: 8px;\r\n}\r\n.card{\r\n    display: flex;\r\n    border: white 2px solid;\r\n    border-radius: 0.5rem;\r\n    flex-wrap: wrap;\r\n    height: inherit;\r\n    flex-direction: row;\r\n    justify-content: flex-start;\r\n    gap: 18px;\r\n    width: 800px;\r\n    background: rgba(34, 31, 31, 0.993);\r\n}\r\n.card > img{\r\n    border-radius: 1rem;\r\n}\r\n.menu-container{\r\n    display: flex;\r\n    color: #d36f6f;\r\n    padding: 8px;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    gap: 30px;\r\n}\r\n.dropdown{\r\n    background: none;\r\n    border:none\r\n}\r\n.dropdown-content {\r\n    display:none;\r\n  }\r\n\r\n\r\n.dropdown:hover .dropdown-content{\r\n    display: flex\r\n}\r\n\r\n /* --------------------MENU ENDS--------------------------*/\r\n\r\n /* --------------------ABOUT BEGINS--------------------------*/\r\n.about{\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    padding: 32px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    gap: 8px;\r\n    padding-bottom: 360px;\r\n\r\n}\r\nhr{\r\n    width: 80vw;\r\n    color: gold;\r\n}\r\n.about-header{\r\n    padding: 0px 16px;\r\n\r\n}\r\n.about-content{\r\n    display: flex;\r\n    justify-content: center;\r\n    padding: 16px;\r\n    border-radius: 1em;\r\n    background: rgb(48, 47, 47);\r\n}\r\n.email{\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 32px;\r\n    padding: 16px;\r\n\r\n\r\n}\r\n.phone{\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 32px;\r\n    padding: 16px;\r\n\r\n    \r\n}\r\n.about h1{\r\n    color: gold;\r\n    font-weight: 700;\r\n    font-size: 48px;\r\n}\r\n.about-content{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    color: #d36f6f;\r\n    \r\n}\r\n\r\n /* --------------------ABOUT BEGINS--------------------------*/\r\n\r\n /* --------------------MEDIA QUERIES BEGINS--------------------------*/\r\n  @media screen and (max-width: 600px) {\r\n    header{\r\n      justify-content: center;\r\n    }\r\n    body{\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n    .card{\r\n        width: 250px;\r\n        padding: 10px 15px;\r\n    }\r\n    .menu-container-flex{\r\n        display: none;\r\n    }\r\n    \r\n  }\r\n  \r\n\r\n  /* --------------------MEDIA QUERIES ENDS--------------------------*/\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/about.js":
/*!******************************!*\
  !*** ./src/modules/about.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "about": () => (/* binding */ about)
/* harmony export */ });

const about = () =>{
const content = document.querySelector('#content')
const div = document.createElement('div')
div.classList.add("about")
div.style.display = 'none'

div.innerHTML = `
    <div class = "about-header">
    <h1>About</h1>
    </div>
    <div class = "about-content">
    What We Do: At Last Meal we serve the last meals of the most notorious human \n
    beings. Come by and give us a try!
    <hr/>
        <div class = "phone">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
            </svg> 
            <p>(650)123-4567</p>
        </div>
        <div class = "email">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
            </svg>
        <p>blalalala@yahoo.com</p>
        </div>

    </div>
`
content.appendChild(div)
    
}



/***/ }),

/***/ "./src/modules/footer.js":
/*!*******************************!*\
  !*** ./src/modules/footer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "footer": () => (/* binding */ footer)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/style.css");


const footer = () => {
    const div = document.createElement('div');
    const content = document.querySelector('#content')
    div.classList.add('footer')
    div.innerHTML = `
        <p>Copyright &#169; 2021 <a target="blank" href="https://github.com/rsingh954">github.com/rsingh954</a></p>
    `
    content.appendChild(div)
}



/***/ }),

/***/ "./src/modules/headline.js":
/*!*********************************!*\
  !*** ./src/modules/headline.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "headline": () => (/* binding */ headline)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/style.css");


const headline = () =>{
    const content = document.querySelector('#content')
    const div = document.createElement('div')
    div.classList.add('container')
    div.innerHTML = `
    <div class = "heading"> 
        <h1 class = "blood"> Come and eat your <strong> last meal</strong></h1>
    </div>
    `
    content.appendChild(div)
}



/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _data_data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/data.json */ "./src/data/data.json");
 


const createMenuItem = (data) => {
    const content = document.querySelector('#content')
    const div = document.createElement('div')
    const card  = document.createElement('card')
    const img = document.createElement('img')
    const container = document.createElement('div')
    div.classList.add('menu')
    div.innerHTML = `
    <div class="card">
    <img src="${data[0].src}" alt="Meal" style = 'height: 20vh'>
    <div class="menu-container">
      <h4><b>The ${data[0].name}</b></h4>
      <p>${data[0].meal}</p>
      <div>
        <button class = "dropdown">Additional Info </button>
        <div class = "dropdown-content">${data[0].description}</div>
    <div>
    </div>
  </div> 
    `

    content.appendChild(div)
}

const menu = () =>{
    const content = document.querySelector('#content')

    const card  = document.createElement('card')
    const img = document.createElement('img')
    const container = document.createElement('div')
    container.classList.add('menu-container-flex')
    container.style.display = 'none'
    for(let i = 0; i < _data_data_json__WEBPACK_IMPORTED_MODULE_0__.length; i++){
        const div = document.createElement('div')
        div.classList.add('menu')
        div.innerHTML = `
        <div class="card">
        <div class="menu-container">
          <h4><b>The ${_data_data_json__WEBPACK_IMPORTED_MODULE_0__[i].name}</b></h4>
          <p>${_data_data_json__WEBPACK_IMPORTED_MODULE_0__[i].meal}</p>
          <div class = "dropdown">
            <button class = "dropdown">Additional Info </button>
            <div class = "dropdown-content">${_data_data_json__WEBPACK_IMPORTED_MODULE_0__[i].description}</div>
        <div>
        </div>
      </div> 
        `
        container.appendChild(div)
    }
    content.appendChild(container)
    // card.appendChild(img)
    // card.appendChild(container)
    // div.appendChild(card)
  
}



/***/ }),

/***/ "./src/modules/navbar.js":
/*!*******************************!*\
  !*** ./src/modules/navbar.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navbar": () => (/* binding */ navbar)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/style.css");



const navbar = () =>{
    const header = document.createElement('header');
    const nav = document.createElement('nav')
    const content = document.querySelector('#content')


    nav.innerHTML = `
    <ul class = 'nav_links'>
        <li><a href ="#">Last Meals</a></li>
        <li><a href ="#">Menu</a></li>
        <li><a href ="#">About</a></li>
    </ul>
    `
    
    header.appendChild(nav)
    content.appendChild(header)
}



/***/ }),

/***/ "./src/assets/background.jpg":
/*!***********************************!*\
  !*** ./src/assets/background.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ae3ab41bc3e154fe87ba.jpg";

/***/ }),

/***/ "./src/data/data.json":
/*!****************************!*\
  !*** ./src/data/data.json ***!
  \****************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"name":"Ted Bundy","meal":"Medium Rare Steak, Eggs over easy, Toast, Milk and Coffee","description":"Ted Bundy refused to make a special request so he was given the standard.","additional info":"Ted Bundy was a serial killer"},{"name":"John Wayne Gacy","meal":"12 fried shrimp, a bucket of KFC fried chicken, french fries and a pound of strawberries.","description":"John Wayne Gacy used to be a manager at KFC so his request does not come as a surprise","additional info":"John Wayne Gacy was known as the clown killer because he often dressed like a clown while carrying out his devious acts"},{"name":"Timothy McVeigh","meal":"Two Pints of Mint Chocolate Chip Ice Cream","description":"Timothy McVeigh was an american terrorist who killed 168 people with a bomb","additional info":"He was responsible for the deadliest act of terrorism in the US prior to 911."},{"name":"Karla Faye Tucker","meal":"Salad with a peach and a banana","description":"Tucker murdered two men with a pickaxe","additional info":"She was a born again Christian who married a minister"},{"name":"Jeffrey Epstein","meal":"Vending Machine Snacks","description":"Epstein spent his last days paying other prisoners commisary and emptying out vending machines","additional info":"A lot of controversy surrounding his death"},{"name":"Al Capone","meal":"Spaghetti with Walnut sauce","description":"Al Capone was a notorious mafia cappo who spent his last days in Alcatraz","additional info":"Died via syphilis because at the time there was no cure for it"}]');

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
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/navbar */ "./src/modules/navbar.js");
/* harmony import */ var _modules_headline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/headline */ "./src/modules/headline.js");
/* harmony import */ var _modules_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/footer */ "./src/modules/footer.js");
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/menu */ "./src/modules/menu.js");
/* harmony import */ var _modules_about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/about */ "./src/modules/about.js");





const  loadPage = (()=> {
    (0,_modules_navbar__WEBPACK_IMPORTED_MODULE_0__.navbar)();
    (0,_modules_headline__WEBPACK_IMPORTED_MODULE_1__.headline)();
    (0,_modules_menu__WEBPACK_IMPORTED_MODULE_3__.menu)()
    ;(0,_modules_about__WEBPACK_IMPORTED_MODULE_4__.about)();
    (0,_modules_footer__WEBPACK_IMPORTED_MODULE_2__.footer)();
})()

const menuItem = document.querySelector('.nav_links')
menuItem.addEventListener('click', e =>{
    const {target} = e
    if(target.innerHTML == 'Menu'){menuClick()}
    if(target.innerHTML == 'About'){aboutClick()}
    if(target.innerHTML == 'Last Meals'){home()}

})

const menuClick = () =>{
    const container = document.querySelector('.container')
    const aboutContainer = document.querySelector('.about')
    container.style.display = 'none';
    aboutContainer.style.display = 'none'
    const menuContainer = document.querySelector('.menu-container-flex')
        if(menuContainer.style.display === 'flex'){
            menuContainer.style.display = 'none'
            container.style.display = 'flex';
        }
        else {
            menuContainer.style.display = 'flex'
        }
}


const aboutClick = () => {
    const container = document.querySelector('.container')
    const menuContainer = document.querySelector('.menu-container-flex')
    container.style.display = 'none';
    menuContainer.style.display = 'none'
    const aboutContainer = document.querySelector('.about')
    if(aboutContainer.style.display === 'flex'){
        aboutContainer.style.display = 'none'
        container.style.display = 'flex';
    }
    else {
        aboutContainer.style.display = 'flex'
    }
}

const home = () =>{
    const container = document.querySelector('.container')
    const menuContainer = document.querySelector('.menu-container-flex')
    const aboutContainer = document.querySelector('.about')
    console.log("AYYYE")
    menuContainer.style.display = 'none'
    aboutContainer.style.display = 'none'
    container.style.display = 'flex'

}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLEtBQUssY0FBYyxhQUFhLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLHVCQUF1QixRQUFRLE1BQU0sY0FBYyxhQUFhLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGNBQWMsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sYUFBYSxhQUFhLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxVQUFVLE9BQU8sS0FBSyxLQUFLLE1BQU0sYUFBYSxhQUFhLE1BQU0sWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVB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QSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQjBDO0FBQ0k7QUFDSjtBQUNKO0FBQ0U7QUFDeEM7QUFDQSxJQUFJLHVEQUFNO0FBQ1YsSUFBSSwyREFBUTtBQUNaLElBQUksbURBQUk7QUFDUixJQUFJLHNEQUFLO0FBQ1QsSUFBSSx1REFBTTtBQUNWLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsbUNBQW1DO0FBQ25DLG9DQUFvQztBQUNwQyx5Q0FBeUM7QUFDekM7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9SZXN0YXVyYW50Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9SZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9SZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9SZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vUmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9SZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL1Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL1Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vUmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9SZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vUmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL1Jlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy9hYm91dC5qcyIsIndlYnBhY2s6Ly9SZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvZm9vdGVyLmpzIiwid2VicGFjazovL1Jlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy9oZWFkbGluZS5qcyIsIndlYnBhY2s6Ly9SZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvbWVudS5qcyIsIndlYnBhY2s6Ly9SZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvbmF2YmFyLmpzIiwid2VicGFjazovL1Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vUmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9SZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9SZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vUmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL1Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9SZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL1Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vUmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vc3JjL2Fzc2V0cy9iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q291cmdldHRlJmZhbWlseT1KZXRCcmFpbnMrTW9ubzppdGFsLHdnaHRAMSwzMDAmZmFtaWx5PUxvYnN0ZXImZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIENTUyBSRVNFVCAqL1xcclxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXHJcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxyXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcclxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXHJcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcclxcbmIsIHUsIGksIGNlbnRlcixcXHJcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcclxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcclxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcclxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxcclxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcXHJcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXHJcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXHJcXG4gIGZvbnQ6IGluaGVyaXQ7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcbmh0bWx7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XFxyXFxufVxcclxcbiAgb2wsIHVsIHtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIGJsb2NrcXVvdGUsIHEge1xcclxcbiAgICBxdW90ZXM6IG5vbmU7XFxyXFxuICB9XFxyXFxuICBibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXHJcXG4gIHE6YmVmb3JlLCBxOmFmdGVyIHtcXHJcXG4gICAgY29udGVudDogJyc7XFxyXFxuICAgIGNvbnRlbnQ6IG5vbmU7XFxyXFxuICB9XFxyXFxuYm9keXtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXHJcXG59XFxyXFxuI2NvbnRlbnR7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyZ2V0dGUnLCBjdXJzaXZlO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47IFxcclxcblxcclxcbn1cXHJcXG5saSwgYSwgYnV0dG9ue1xcclxcbiAgICBmb250LWZhbWlseTogJ0NvdXJnZXR0ZScsIG1vbm9zcGFjZTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIGNvbG9yOiAjZWRmMGYxO1xcclxcbn1cXHJcXG5pbWd7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDUwdmg7XFxyXFxufVxcclxcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS1OQVYgQkVHSU5TLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcclxcbmhlYWRlcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDE4cHggNSU7XFxyXFxuICAgIGdhcDogNTBweDtcXHJcXG59XFxyXFxuLm5hdl9saW5rc3tcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuLm5hdl9saW5rcyBsaXtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcXHJcXG59XFxyXFxuLm5hdl9saW5rcyBsaSBhe1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xcclxcbn1cXHJcXG4ubmF2X2xpbmtzIGxpIGE6aG92ZXJ7XFxyXFxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHJnYigyMjYsIDMsIDMpLCByZ2IoMjE5LCAxOTIsIDE5MikpO1xcclxcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXHJcXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nb3tcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmb250LWZhbWlseTogJ0NvdXJnZXR0ZScsIG1vbm9zcGFjZTtcXHJcXG4gICAgY29sb3I6ICNlZGYwZjE7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XFxyXFxufVxcclxcbi5sb2dvIDpob3ZlcntcXHJcXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQocmdiKDIyNiwgMywgMyksIHJnYigyMTksIDE5MiwgMTkyKSk7XFxyXFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcclxcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcbiAgdWwge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICB9XFxyXFxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS1OQVYgRU5EUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5cXHJcXG5cXHJcXG4gLyogLS0tLS0tLS0tLS0tLS0tLS0tLS1IRUFETElORSBCRUdJTlMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuICAuY29udGFpbmVye1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgY29sb3I6ICNlZGYwZjEgO1xcclxcbiAgICAgIHdpZHRoOjEwMCU7XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICBmb250LWZhbWlseTogJ0NvdXJnZXR0ZScsIGN1cnNpdmU7XFxyXFxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMzYwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuLmhlYWRpbmd7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLmNvbnRhaW5lciBoMXtcXHJcXG4gICAgZm9udC1zaXplOiA3MnB4O1xcclxcblxcclxcbn1cXHJcXG4uYmxvb2Qge1xcclxcbiAgICBjb2xvcjpnb2xkO1xcclxcbiAgICB0ZXh0LXNoYWRvdzpcXHJcXG4gICAgNHB4IDRweCAxcHggIzMwMDAwMCxcXHJcXG4gICAgNHB4IDZweCAxcHggIzQwMDAwMCxcXHJcXG4gICAgNHB4IDhweCAxcHggIzUwMDAwMCxcXHJcXG4gICAgNHB4IDEwcHggMXB4ICM2MDAwMDAsXFxyXFxuICAgIDRweCAxMnB4IDFweCAjNzAwMDAwLFxcclxcbiAgICA0cHggMTRweCAxcHggIzgwMDAwMCxcXHJcXG4gICAgNHB4IDE2cHggMXB4ICM5MDAwMDAsXFxyXFxuICAgIDRweCAxOHB4IDFweCAjQTAwMDAwLFxcclxcbiAgICA0cHggMjBweCAxcHggI0IwMDAwMCxcXHJcXG4gICAgNHB4IDIycHggMXB4ICNDMDAwMDAsXFxyXFxuICAgIDRweCAyNHB4IDFweCAjRDAwMDAwLFxcclxcbiAgICA0cHggMjZweCAxcHggI0UwMDAwMCxcXHJcXG4gICAgNHB4IDI4cHggMXB4ICNGMDAwMDAsXFxyXFxuICAgIDRweCAzMHB4IDFweCAjRkEwMDAwLFxcclxcbiAgICA0cHggMzJweCAxcHggI0ZCMDAwMCxcXHJcXG4gICAgNHB4IDM0cHggMXB4ICNGQzAwMDAsXFxyXFxuICAgIDRweCAzNnB4IDFweCAjRkQwMDAwLFxcclxcbiAgICA0cHggMzhweCAxcHggI0ZFMDAwMCxcXHJcXG4gICAgNHB4IDQwcHggMnB4ICNGRjAwMDA7XFxyXFxufVxcclxcbiAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLUhFQURMSU5FIEVORFMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuXFxyXFxuXFxyXFxuIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tRk9PVEVSIEJFR0lOUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG4uZm9vdGVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBjb2xvcjogeWVsbG93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbGlnaHQpO1xcclxcbiAgICBcXHJcXG59XFxyXFxuLmZvb3RlciBhe1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbG9yOiAjZTVlN2ViO1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxufVxcclxcbiAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLUZPT1RFUiBFTkRTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcbiAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLU1FTlUgQkVHSU5TLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcbiAubWVudS1jb250YWluZXItZmxleHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDMycHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgZ2FwOiA4cHg7XFxyXFxuIH1cXHJcXG4ubWVudXtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZmxleC1zaHJpbms6IDE7XFxyXFxuICAgIGdhcDogOHB4O1xcclxcbn1cXHJcXG4uY2FyZHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYm9yZGVyOiB3aGl0ZSAycHggc29saWQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgZ2FwOiAxOHB4O1xcclxcbiAgICB3aWR0aDogODAwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMzQsIDMxLCAzMSwgMC45OTMpO1xcclxcbn1cXHJcXG4uY2FyZCA+IGltZ3tcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG59XFxyXFxuLm1lbnUtY29udGFpbmVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBjb2xvcjogI2QzNmY2ZjtcXHJcXG4gICAgcGFkZGluZzogOHB4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAzMHB4O1xcclxcbn1cXHJcXG4uZHJvcGRvd257XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjpub25lXFxyXFxufVxcclxcbi5kcm9wZG93bi1jb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTpub25lO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbi5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudHtcXHJcXG4gICAgZGlzcGxheTogZmxleFxcclxcbn1cXHJcXG5cXHJcXG4gLyogLS0tLS0tLS0tLS0tLS0tLS0tLS1NRU5VIEVORFMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuXFxyXFxuIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tQUJPVVQgQkVHSU5TLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcbi5hYm91dHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDMycHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgZ2FwOiA4cHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAzNjBweDtcXHJcXG5cXHJcXG59XFxyXFxuaHJ7XFxyXFxuICAgIHdpZHRoOiA4MHZ3O1xcclxcbiAgICBjb2xvcjogZ29sZDtcXHJcXG59XFxyXFxuLmFib3V0LWhlYWRlcntcXHJcXG4gICAgcGFkZGluZzogMHB4IDE2cHg7XFxyXFxuXFxyXFxufVxcclxcbi5hYm91dC1jb250ZW50e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMTZweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNDgsIDQ3LCA0Nyk7XFxyXFxufVxcclxcbi5lbWFpbHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgZ2FwOiAzMnB4O1xcclxcbiAgICBwYWRkaW5nOiAxNnB4O1xcclxcblxcclxcblxcclxcbn1cXHJcXG4ucGhvbmV7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGdhcDogMzJweDtcXHJcXG4gICAgcGFkZGluZzogMTZweDtcXHJcXG5cXHJcXG4gICAgXFxyXFxufVxcclxcbi5hYm91dCBoMXtcXHJcXG4gICAgY29sb3I6IGdvbGQ7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXHJcXG59XFxyXFxuLmFib3V0LWNvbnRlbnR7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBjb2xvcjogI2QzNmY2ZjtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbiAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLUFCT1VUIEJFR0lOUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5cXHJcXG4gLyogLS0tLS0tLS0tLS0tLS0tLS0tLS1NRURJQSBRVUVSSUVTIEJFR0lOUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxyXFxuICAgIGhlYWRlcntcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgICBib2R5e1xcclxcbiAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgfVxcclxcbiAgICAuY2FyZHtcXHJcXG4gICAgICAgIHdpZHRoOiAyNTBweDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcXHJcXG4gICAgfVxcclxcbiAgICAubWVudS1jb250YWluZXItZmxleHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICB9XFxyXFxuICBcXHJcXG5cXHJcXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tTUVESUEgUVVFUklFUyBFTkRTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5j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Q2IsZUFBZTtJQUNmLFFBQVE7SUFDUixxQkFBcUI7O0FBRXpCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsV0FBVztBQUNmO0FBQ0E7SUFDSSxpQkFBaUI7O0FBRXJCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxhQUFhOzs7QUFHakI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztJQUNULGFBQWE7OztBQUdqQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixjQUFjOztBQUVsQjs7Q0FFQyw4REFBOEQ7O0NBRTlELHNFQUFzRTtFQUNyRTtJQUNFO01BQ0UsdUJBQXVCO0lBQ3pCO0lBQ0E7UUFDSSxTQUFTO1FBQ1QsVUFBVTtJQUNkO0lBQ0E7UUFDSSxZQUFZO1FBQ1osa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCOztFQUVGOzs7RUFHQSxvRUFBb0VcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q291cmdldHRlJmZhbWlseT1KZXRCcmFpbnMrTW9ubzppdGFsLHdnaHRAMSwzMDAmZmFtaWx5PUxvYnN0ZXImZGlzcGxheT1zd2FwJyk7LyogQ1NTIFJFU0VUICovXFxyXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcclxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXHJcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxyXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcclxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxyXFxuYiwgdSwgaSwgY2VudGVyLFxcclxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxyXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxyXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXFxyXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxcclxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcclxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgZm9udC1zaXplOiAxMDAlO1xcclxcbiAgZm9udDogaW5oZXJpdDtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuaHRtbHtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcXHJcXG59XFxyXFxuICBvbCwgdWwge1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgfVxcclxcbiAgYmxvY2txdW90ZSwgcSB7XFxyXFxuICAgIHF1b3Rlczogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIGJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcclxcbiAgcTpiZWZvcmUsIHE6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiAnJztcXHJcXG4gICAgY29udGVudDogbm9uZTtcXHJcXG4gIH1cXHJcXG5ib2R5e1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3NyYy9hc3NldHMvYmFja2dyb3VuZC5qcGcnKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXHJcXG59XFxyXFxuI2NvbnRlbnR7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyZ2V0dGUnLCBjdXJzaXZlO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47IFxcclxcblxcclxcbn1cXHJcXG5saSwgYSwgYnV0dG9ue1xcclxcbiAgICBmb250LWZhbWlseTogJ0NvdXJnZXR0ZScsIG1vbm9zcGFjZTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIGNvbG9yOiAjZWRmMGYxO1xcclxcbn1cXHJcXG5pbWd7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDUwdmg7XFxyXFxufVxcclxcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS1OQVYgQkVHSU5TLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcclxcbmhlYWRlcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDE4cHggNSU7XFxyXFxuICAgIGdhcDogNTBweDtcXHJcXG59XFxyXFxuLm5hdl9saW5rc3tcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuLm5hdl9saW5rcyBsaXtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcXHJcXG59XFxyXFxuLm5hdl9saW5rcyBsaSBhe1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xcclxcbn1cXHJcXG4ubmF2X2xpbmtzIGxpIGE6aG92ZXJ7XFxyXFxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHJnYigyMjYsIDMsIDMpLCByZ2IoMjE5LCAxOTIsIDE5MikpO1xcclxcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXHJcXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nb3tcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmb250LWZhbWlseTogJ0NvdXJnZXR0ZScsIG1vbm9zcGFjZTtcXHJcXG4gICAgY29sb3I6ICNlZGYwZjE7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XFxyXFxufVxcclxcbi5sb2dvIDpob3ZlcntcXHJcXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQocmdiKDIyNiwgMywgMyksIHJnYigyMTksIDE5MiwgMTkyKSk7XFxyXFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcclxcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcbiAgdWwge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICB9XFxyXFxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS1OQVYgRU5EUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5cXHJcXG5cXHJcXG4gLyogLS0tLS0tLS0tLS0tLS0tLS0tLS1IRUFETElORSBCRUdJTlMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuICAuY29udGFpbmVye1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgY29sb3I6ICNlZGYwZjEgO1xcclxcbiAgICAgIHdpZHRoOjEwMCU7XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICBmb250LWZhbWlseTogJ0NvdXJnZXR0ZScsIGN1cnNpdmU7XFxyXFxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMzYwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuLmhlYWRpbmd7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLmNvbnRhaW5lciBoMXtcXHJcXG4gICAgZm9udC1zaXplOiA3MnB4O1xcclxcblxcclxcbn1cXHJcXG4uYmxvb2Qge1xcclxcbiAgICBjb2xvcjpnb2xkO1xcclxcbiAgICB0ZXh0LXNoYWRvdzpcXHJcXG4gICAgNHB4IDRweCAxcHggIzMwMDAwMCxcXHJcXG4gICAgNHB4IDZweCAxcHggIzQwMDAwMCxcXHJcXG4gICAgNHB4IDhweCAxcHggIzUwMDAwMCxcXHJcXG4gICAgNHB4IDEwcHggMXB4ICM2MDAwMDAsXFxyXFxuICAgIDRweCAxMnB4IDFweCAjNzAwMDAwLFxcclxcbiAgICA0cHggMTRweCAxcHggIzgwMDAwMCxcXHJcXG4gICAgNHB4IDE2cHggMXB4ICM5MDAwMDAsXFxyXFxuICAgIDRweCAxOHB4IDFweCAjQTAwMDAwLFxcclxcbiAgICA0cHggMjBweCAxcHggI0IwMDAwMCxcXHJcXG4gICAgNHB4IDIycHggMXB4ICNDMDAwMDAsXFxyXFxuICAgIDRweCAyNHB4IDFweCAjRDAwMDAwLFxcclxcbiAgICA0cHggMjZweCAxcHggI0UwMDAwMCxcXHJcXG4gICAgNHB4IDI4cHggMXB4ICNGMDAwMDAsXFxyXFxuICAgIDRweCAzMHB4IDFweCAjRkEwMDAwLFxcclxcbiAgICA0cHggMzJweCAxcHggI0ZCMDAwMCxcXHJcXG4gICAgNHB4IDM0cHggMXB4ICNGQzAwMDAsXFxyXFxuICAgIDRweCAzNnB4IDFweCAjRkQwMDAwLFxcclxcbiAgICA0cHggMzhweCAxcHggI0ZFMDAwMCxcXHJcXG4gICAgNHB4IDQwcHggMnB4ICNGRjAwMDA7XFxyXFxufVxcclxcbiAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLUhFQURMSU5FIEVORFMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuXFxyXFxuXFxyXFxuIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tRk9PVEVSIEJFR0lOUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG4uZm9vdGVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBjb2xvcjogeWVsbG93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbGlnaHQpO1xcclxcbiAgICBcXHJcXG59XFxyXFxuLmZvb3RlciBhe1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbG9yOiAjZTVlN2ViO1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxufVxcclxcbiAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLUZPT1RFUiBFTkRTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcbiAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLU1FTlUgQkVHSU5TLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcbiAubWVudS1jb250YWluZXItZmxleHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDMycHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgZ2FwOiA4cHg7XFxyXFxuIH1cXHJcXG4ubWVudXtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZmxleC1zaHJpbms6IDE7XFxyXFxuICAgIGdhcDogOHB4O1xcclxcbn1cXHJcXG4uY2FyZHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYm9yZGVyOiB3aGl0ZSAycHggc29saWQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgZ2FwOiAxOHB4O1xcclxcbiAgICB3aWR0aDogODAwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMzQsIDMxLCAzMSwgMC45OTMpO1xcclxcbn1cXHJcXG4uY2FyZCA+IGltZ3tcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG59XFxyXFxuLm1lbnUtY29udGFpbmVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBjb2xvcjogI2QzNmY2ZjtcXHJcXG4gICAgcGFkZGluZzogOHB4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAzMHB4O1xcclxcbn1cXHJcXG4uZHJvcGRvd257XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjpub25lXFxyXFxufVxcclxcbi5kcm9wZG93bi1jb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTpub25lO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbi5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudHtcXHJcXG4gICAgZGlzcGxheTogZmxleFxcclxcbn1cXHJcXG5cXHJcXG4gLyogLS0tLS0tLS0tLS0tLS0tLS0tLS1NRU5VIEVORFMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuXFxyXFxuIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tQUJPVVQgQkVHSU5TLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcbi5hYm91dHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDMycHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgZ2FwOiA4cHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAzNjBweDtcXHJcXG5cXHJcXG59XFxyXFxuaHJ7XFxyXFxuICAgIHdpZHRoOiA4MHZ3O1xcclxcbiAgICBjb2xvcjogZ29sZDtcXHJcXG59XFxyXFxuLmFib3V0LWhlYWRlcntcXHJcXG4gICAgcGFkZGluZzogMHB4IDE2cHg7XFxyXFxuXFxyXFxufVxcclxcbi5hYm91dC1jb250ZW50e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMTZweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNDgsIDQ3LCA0Nyk7XFxyXFxufVxcclxcbi5lbWFpbHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgZ2FwOiAzMnB4O1xcclxcbiAgICBwYWRkaW5nOiAxNnB4O1xcclxcblxcclxcblxcclxcbn1cXHJcXG4ucGhvbmV7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGdhcDogMzJweDtcXHJcXG4gICAgcGFkZGluZzogMTZweDtcXHJcXG5cXHJcXG4gICAgXFxyXFxufVxcclxcbi5hYm91dCBoMXtcXHJcXG4gICAgY29sb3I6IGdvbGQ7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXHJcXG59XFxyXFxuLmFib3V0LWNvbnRlbnR7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBjb2xvcjogI2QzNmY2ZjtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbiAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLUFCT1VUIEJFR0lOUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5cXHJcXG4gLyogLS0tLS0tLS0tLS0tLS0tLS0tLS1NRURJQSBRVUVSSUVTIEJFR0lOUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxyXFxuICAgIGhlYWRlcntcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgICBib2R5e1xcclxcbiAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgfVxcclxcbiAgICAuY2FyZHtcXHJcXG4gICAgICAgIHdpZHRoOiAyNTBweDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcXHJcXG4gICAgfVxcclxcbiAgICAubWVudS1jb250YWluZXItZmxleHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICB9XFxyXFxuICBcXHJcXG5cXHJcXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tTUVESUEgUVVFUklFUyBFTkRTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJcclxuY29uc3QgYWJvdXQgPSAoKSA9PntcclxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JylcclxuY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuZGl2LmNsYXNzTGlzdC5hZGQoXCJhYm91dFwiKVxyXG5kaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG5cclxuZGl2LmlubmVySFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3MgPSBcImFib3V0LWhlYWRlclwiPlxyXG4gICAgPGgxPkFib3V0PC9oMT5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcyA9IFwiYWJvdXQtY29udGVudFwiPlxyXG4gICAgV2hhdCBXZSBEbzogQXQgTGFzdCBNZWFsIHdlIHNlcnZlIHRoZSBsYXN0IG1lYWxzIG9mIHRoZSBtb3N0IG5vdG9yaW91cyBodW1hbiBcXG5cclxuICAgIGJlaW5ncy4gQ29tZSBieSBhbmQgZ2l2ZSB1cyBhIHRyeSFcclxuICAgIDxoci8+XHJcbiAgICAgICAgPGRpdiBjbGFzcyA9IFwicGhvbmVcIj5cclxuICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGNsYXNzPVwiYmkgYmktdGVsZXBob25lLWZpbGxcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xLjg4NS41MTFhMS43NDUgMS43NDUgMCAwIDEgMi42MS4xNjNMNi4yOSAyLjk4Yy4zMjkuNDIzLjQ0NS45NzQuMzE1IDEuNDk0bC0uNTQ3IDIuMTlhLjY3OC42NzggMCAwIDAgLjE3OC42NDNsMi40NTcgMi40NTdhLjY3OC42NzggMCAwIDAgLjY0NC4xNzhsMi4xODktLjU0N2ExLjc0NSAxLjc0NSAwIDAgMSAxLjQ5NC4zMTVsMi4zMDYgMS43OTRjLjgyOS42NDUuOTA1IDEuODcuMTYzIDIuNjExbC0xLjAzNCAxLjAzNGMtLjc0Ljc0LTEuODQ2IDEuMDY1LTIuODc3LjcwMmExOC42MzQgMTguNjM0IDAgMCAxLTcuMDEtNC40MiAxOC42MzQgMTguNjM0IDAgMCAxLTQuNDItNy4wMDljLS4zNjItMS4wMy0uMDM3LTIuMTM3LjcwMy0yLjg3N0wxLjg4NS41MTF6XCIvPlxyXG4gICAgICAgICAgICA8L3N2Zz4gXHJcbiAgICAgICAgICAgIDxwPig2NTApMTIzLTQ1Njc8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcyA9IFwiZW1haWxcIj5cclxuICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGNsYXNzPVwiYmkgYmktZW52ZWxvcGUtZmlsbFwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNLjA1IDMuNTU1QTIgMiAwIDAgMSAyIDJoMTJhMiAyIDAgMCAxIDEuOTUgMS41NTVMOCA4LjQxNC4wNSAzLjU1NVpNMCA0LjY5N3Y3LjEwNGw1LjgwMy0zLjU1OEwwIDQuNjk3Wk02Ljc2MSA4LjgzbC02LjU3IDQuMDI3QTIgMiAwIDAgMCAyIDE0aDEyYTIgMiAwIDAgMCAxLjgwOC0xLjE0NGwtNi41Ny00LjAyN0w4IDkuNTg2bC0xLjIzOS0uNzU3Wm0zLjQzNi0uNTg2TDE2IDExLjgwMVY0LjY5N2wtNS44MDMgMy41NDZaXCIvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8cD5ibGFsYWxhbGFAeWFob28uY29tPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG5gXHJcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2KVxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCB7YWJvdXR9IiwiaW1wb3J0ICcuLi9zdHlsZS5jc3MnXHJcblxyXG5jb25zdCBmb290ZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpXHJcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJylcclxuICAgIGRpdi5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPHA+Q29weXJpZ2h0ICYjMTY5OyAyMDIxIDxhIHRhcmdldD1cImJsYW5rXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9yc2luZ2g5NTRcIj5naXRodWIuY29tL3JzaW5naDk1NDwvYT48L3A+XHJcbiAgICBgXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpdilcclxufVxyXG5cclxuZXhwb3J0IHtmb290ZXJ9IiwiaW1wb3J0ICcuLi9zdHlsZS5jc3MnXHJcblxyXG5jb25zdCBoZWFkbGluZSA9ICgpID0+e1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JylcclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJylcclxuICAgIGRpdi5pbm5lckhUTUwgPSBgXHJcbiAgICA8ZGl2IGNsYXNzID0gXCJoZWFkaW5nXCI+IFxyXG4gICAgICAgIDxoMSBjbGFzcyA9IFwiYmxvb2RcIj4gQ29tZSBhbmQgZWF0IHlvdXIgPHN0cm9uZz4gbGFzdCBtZWFsPC9zdHJvbmc+PC9oMT5cclxuICAgIDwvZGl2PlxyXG4gICAgYFxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChkaXYpXHJcbn1cclxuXHJcbmV4cG9ydCB7aGVhZGxpbmV9IiwiaW1wb3J0IGRhdGEgZnJvbSAnLi4vZGF0YS9kYXRhLmpzb24nIFxyXG5cclxuXHJcbmNvbnN0IGNyZWF0ZU1lbnVJdGVtID0gKGRhdGEpID0+IHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpXHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3QgY2FyZCAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYXJkJylcclxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ21lbnUnKVxyXG4gICAgZGl2LmlubmVySFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XHJcbiAgICA8aW1nIHNyYz1cIiR7ZGF0YVswXS5zcmN9XCIgYWx0PVwiTWVhbFwiIHN0eWxlID0gJ2hlaWdodDogMjB2aCc+XHJcbiAgICA8ZGl2IGNsYXNzPVwibWVudS1jb250YWluZXJcIj5cclxuICAgICAgPGg0PjxiPlRoZSAke2RhdGFbMF0ubmFtZX08L2I+PC9oND5cclxuICAgICAgPHA+JHtkYXRhWzBdLm1lYWx9PC9wPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxidXR0b24gY2xhc3MgPSBcImRyb3Bkb3duXCI+QWRkaXRpb25hbCBJbmZvIDwvYnV0dG9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3MgPSBcImRyb3Bkb3duLWNvbnRlbnRcIj4ke2RhdGFbMF0uZGVzY3JpcHRpb259PC9kaXY+XHJcbiAgICA8ZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+IFxyXG4gICAgYFxyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2KVxyXG59XHJcblxyXG5jb25zdCBtZW51ID0gKCkgPT57XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxyXG5cclxuICAgIGNvbnN0IGNhcmQgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FyZCcpXHJcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51LWNvbnRhaW5lci1mbGV4JylcclxuICAgIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnbWVudScpXHJcbiAgICAgICAgZGl2LmlubmVySFRNTCA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGg0PjxiPlRoZSAke2RhdGFbaV0ubmFtZX08L2I+PC9oND5cclxuICAgICAgICAgIDxwPiR7ZGF0YVtpXS5tZWFsfTwvcD5cclxuICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3MgPSBcImRyb3Bkb3duXCI+QWRkaXRpb25hbCBJbmZvIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJkcm9wZG93bi1jb250ZW50XCI+JHtkYXRhW2ldLmRlc2NyaXB0aW9ufTwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PiBcclxuICAgICAgICBgXHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRpdilcclxuICAgIH1cclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxyXG4gICAgLy8gY2FyZC5hcHBlbmRDaGlsZChpbWcpXHJcbiAgICAvLyBjYXJkLmFwcGVuZENoaWxkKGNvbnRhaW5lcilcclxuICAgIC8vIGRpdi5hcHBlbmRDaGlsZChjYXJkKVxyXG4gIFxyXG59XHJcblxyXG5leHBvcnQge21lbnV9IiwiaW1wb3J0ICcuLi9zdHlsZS5jc3MnXHJcblxyXG5cclxuY29uc3QgbmF2YmFyID0gKCkgPT57XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpXHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxyXG5cclxuXHJcbiAgICBuYXYuaW5uZXJIVE1MID0gYFxyXG4gICAgPHVsIGNsYXNzID0gJ25hdl9saW5rcyc+XHJcbiAgICAgICAgPGxpPjxhIGhyZWYgPVwiI1wiPkxhc3QgTWVhbHM8L2E+PC9saT5cclxuICAgICAgICA8bGk+PGEgaHJlZiA9XCIjXCI+TWVudTwvYT48L2xpPlxyXG4gICAgICAgIDxsaT48YSBocmVmID1cIiNcIj5BYm91dDwvYT48L2xpPlxyXG4gICAgPC91bD5cclxuICAgIGBcclxuICAgIFxyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdilcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKVxyXG59XHJcblxyXG5leHBvcnQge25hdmJhcn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCB7IG5hdmJhciB9IGZyb20gXCIuL21vZHVsZXMvbmF2YmFyXCI7XHJcbmltcG9ydCB7IGhlYWRsaW5lIH0gZnJvbSBcIi4vbW9kdWxlcy9oZWFkbGluZVwiO1xyXG5pbXBvcnQgeyBmb290ZXIgfSBmcm9tIFwiLi9tb2R1bGVzL2Zvb3RlclwiO1xyXG5pbXBvcnQgeyBtZW51IH0gZnJvbSBcIi4vbW9kdWxlcy9tZW51XCI7XHJcbmltcG9ydCB7IGFib3V0IH0gZnJvbSBcIi4vbW9kdWxlcy9hYm91dFwiO1xyXG5jb25zdCAgbG9hZFBhZ2UgPSAoKCk9PiB7XHJcbiAgICBuYXZiYXIoKTtcclxuICAgIGhlYWRsaW5lKCk7XHJcbiAgICBtZW51KClcclxuICAgIGFib3V0KCk7XHJcbiAgICBmb290ZXIoKTtcclxufSkoKVxyXG5cclxuY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2X2xpbmtzJylcclxubWVudUl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+e1xyXG4gICAgY29uc3Qge3RhcmdldH0gPSBlXHJcbiAgICBpZih0YXJnZXQuaW5uZXJIVE1MID09ICdNZW51Jyl7bWVudUNsaWNrKCl9XHJcbiAgICBpZih0YXJnZXQuaW5uZXJIVE1MID09ICdBYm91dCcpe2Fib3V0Q2xpY2soKX1cclxuICAgIGlmKHRhcmdldC5pbm5lckhUTUwgPT0gJ0xhc3QgTWVhbHMnKXtob21lKCl9XHJcblxyXG59KVxyXG5cclxuY29uc3QgbWVudUNsaWNrID0gKCkgPT57XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJylcclxuICAgIGNvbnN0IGFib3V0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0JylcclxuICAgIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgYWJvdXRDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWNvbnRhaW5lci1mbGV4JylcclxuICAgICAgICBpZihtZW51Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPT09ICdmbGV4Jyl7XHJcbiAgICAgICAgICAgIG1lbnVDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgICAgICAgICBjb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIG1lbnVDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xyXG4gICAgICAgIH1cclxufVxyXG5cclxuXHJcbmNvbnN0IGFib3V0Q2xpY2sgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJylcclxuICAgIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1jb250YWluZXItZmxleCcpXHJcbiAgICBjb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIG1lbnVDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgY29uc3QgYWJvdXRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXQnKVxyXG4gICAgaWYoYWJvdXRDb250YWluZXIuc3R5bGUuZGlzcGxheSA9PT0gJ2ZsZXgnKXtcclxuICAgICAgICBhYm91dENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBhYm91dENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGhvbWUgPSAoKSA9PntcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKVxyXG4gICAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWNvbnRhaW5lci1mbGV4JylcclxuICAgIGNvbnN0IGFib3V0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0JylcclxuICAgIGNvbnNvbGUubG9nKFwiQVlZWUVcIilcclxuICAgIG1lbnVDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgYWJvdXRDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcclxuXHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
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
___CSS_LOADER_EXPORT___.push([module.id, "/* CSS RESET */\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed,\r\nfigure, figcaption, footer, header, hgroup,\r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  font-size: 100%;\r\n  font: inherit;\r\n  vertical-align: baseline;\r\n}\r\nhtml{\r\n    line-height: 1.6;\r\n}\r\n  ol, ul {\r\n    list-style: none;\r\n  }\r\n  blockquote, q {\r\n    quotes: none;\r\n  }\r\n  blockquote:before, blockquote:after,\r\n  q:before, q:after {\r\n    content: '';\r\n    content: none;\r\n  }\r\nbody{\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    background-position: center center;\r\n}\r\n#content{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    font-family: 'Courgette', cursive;\r\n    align-items: center;\r\n    height: 100vh;\r\n    overflow-x: hidden; \r\n\r\n}\r\nli, a, button{\r\n    font-family: 'Courgette', monospace;\r\n    text-decoration: none;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    color: #edf0f1;\r\n}\r\nimg{\r\n    max-height: 50vh;\r\n}\r\n  /*---------------------NAV BEGINS---------------------------- */\r\nheader{\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    padding: 18px 5%;\r\n    gap: 50px;\r\n}\r\n.nav_links{\r\n    list-style: none;\r\n}\r\n.nav_links li{\r\n    display: inline-block;\r\n    padding: 0px 10px;\r\n}\r\n.nav_links li a{\r\n    transition: all 0.3s ease 0s;\r\n}\r\n.nav_links li a:hover{\r\n    background: -webkit-linear-gradient(rgb(226, 3, 3), rgb(219, 192, 192));\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n}\r\n\r\n.logo{\r\n    cursor: pointer;\r\n    font-family: 'Courgette', monospace;\r\n    color: #edf0f1;\r\n    transition: all 0.3s ease 0s;\r\n}\r\n.logo :hover{\r\n    background: -webkit-linear-gradient(rgb(226, 3, 3), rgb(219, 192, 192));\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n}\r\n  ul {\r\n    display: flex;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  /*----------------------NAV ENDS-----------------------------*/\r\n\r\n\r\n /* --------------------HEADLINE BEGINS--------------------------*/\r\n  .container{\r\n      display: flex;\r\n      color: #edf0f1 ;\r\n      width:100%;\r\n      align-items: center;\r\n      justify-content: center;\r\n      font-family: 'Courgette', cursive;\r\n      font-weight: 700;\r\n      padding-bottom: 360px;\r\n  }\r\n\r\n.heading{\r\n    text-align: center;\r\n}\r\n.container h1{\r\n    font-size: 72px;\r\n\r\n}\r\n.blood {\r\n    color:gold;\r\n    text-shadow:\r\n    4px 4px 1px #300000,\r\n    4px 6px 1px #400000,\r\n    4px 8px 1px #500000,\r\n    4px 10px 1px #600000,\r\n    4px 12px 1px #700000,\r\n    4px 14px 1px #800000,\r\n    4px 16px 1px #900000,\r\n    4px 18px 1px #A00000,\r\n    4px 20px 1px #B00000,\r\n    4px 22px 1px #C00000,\r\n    4px 24px 1px #D00000,\r\n    4px 26px 1px #E00000,\r\n    4px 28px 1px #F00000,\r\n    4px 30px 1px #FA0000,\r\n    4px 32px 1px #FB0000,\r\n    4px 34px 1px #FC0000,\r\n    4px 36px 1px #FD0000,\r\n    4px 38px 1px #FE0000,\r\n    4px 40px 2px #FF0000;\r\n}\r\n /* --------------------HEADLINE ENDS--------------------------*/\r\n\r\n\r\n /* --------------------FOOTER BEGINS--------------------------*/\r\n.footer{\r\n    display: flex;\r\n    color: yellow;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    width: 100%;\r\n    padding: 1rem;\r\n    border-top: 1px solid var(--border-color);\r\n    background-color: var(--background-light);\r\n    \r\n}\r\n.footer a{\r\n    text-decoration: none;\r\n    color: #e5e7eb;\r\n    font-size: 18px;\r\n}\r\n /* --------------------FOOTER ENDS--------------------------*/\r\n\r\n /* --------------------MENU BEGINS--------------------------*/\r\n .menu-container-flex{\r\n    display: none;\r\n    justify-content: center;\r\n    padding: 32px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    gap: 8px;\r\n }\r\n.menu{\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    flex-shrink: 1;\r\n    gap: 8px;\r\n}\r\n.card{\r\n    display: flex;\r\n    border: white 2px solid;\r\n    border-radius: 0.5rem;\r\n    flex-wrap: wrap;\r\n    height: inherit;\r\n    flex-direction: row;\r\n    justify-content: flex-start;\r\n    gap: 18px;\r\n    width: 800px;\r\n    background: rgba(34, 31, 31, 0.993);\r\n}\r\n.card > img{\r\n    border-radius: 1rem;\r\n}\r\n.menu-container{\r\n    display: flex;\r\n    color: #d36f6f;\r\n    padding: 8px;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    gap: 30px;\r\n}\r\n.dropdown{\r\n    background: none;\r\n    border:none\r\n}\r\n.dropdown-content {\r\n    display:none;\r\n  }\r\n\r\n\r\n.dropdown:hover .dropdown-content{\r\n    display: flex\r\n}\r\n\r\n /* --------------------MENU ENDS--------------------------*/\r\n\r\n /* --------------------ABOUT BEGINS--------------------------*/\r\n.about{\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    padding: 32px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    gap: 8px;\r\n    padding-bottom: 360px;\r\n\r\n}\r\n.about-content{\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.email{\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 32px;\r\n    padding: 16px;\r\n\r\n\r\n}\r\n.phone{\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 32px;\r\n    padding: 16px;\r\n\r\n    \r\n}\r\n.about h1{\r\n    color: gold;\r\n    font-weight: 700;\r\n    font-size: 48px;\r\n}\r\n.about-content{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    color: #d36f6f;\r\n    \r\n}\r\n\r\n /* --------------------ABOUT BEGINS--------------------------*/\r\n\r\n /* --------------------MEDIA QUERIES BEGINS--------------------------*/\r\n  @media screen and (max-width: 600px) {\r\n    header{\r\n      justify-content: center;\r\n    }\r\n    body{\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n    .card{\r\n        width: 250px;\r\n        padding: 10px 15px;\r\n    }\r\n    .menu-container-flex{\r\n        display: none;\r\n    }\r\n    \r\n  }\r\n  \r\n\r\n  /* --------------------MEDIA QUERIES ENDS--------------------------*/\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Courgette&family=JetBrains+Mono:ital,wght@1,300&family=Lobster&display=swap');/* CSS RESET */\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed,\r\nfigure, figcaption, footer, header, hgroup,\r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  font-size: 100%;\r\n  font: inherit;\r\n  vertical-align: baseline;\r\n}\r\nhtml{\r\n    line-height: 1.6;\r\n}\r\n  ol, ul {\r\n    list-style: none;\r\n  }\r\n  blockquote, q {\r\n    quotes: none;\r\n  }\r\n  blockquote:before, blockquote:after,\r\n  q:before, q:after {\r\n    content: '';\r\n    content: none;\r\n  }\r\nbody{\r\n    background-image: url('../src/assets/background.jpg');\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    background-position: center center;\r\n}\r\n#content{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    font-family: 'Courgette', cursive;\r\n    align-items: center;\r\n    height: 100vh;\r\n    overflow-x: hidden; \r\n\r\n}\r\nli, a, button{\r\n    font-family: 'Courgette', monospace;\r\n    text-decoration: none;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    color: #edf0f1;\r\n}\r\nimg{\r\n    max-height: 50vh;\r\n}\r\n  /*---------------------NAV BEGINS---------------------------- */\r\nheader{\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    padding: 18px 5%;\r\n    gap: 50px;\r\n}\r\n.nav_links{\r\n    list-style: none;\r\n}\r\n.nav_links li{\r\n    display: inline-block;\r\n    padding: 0px 10px;\r\n}\r\n.nav_links li a{\r\n    transition: all 0.3s ease 0s;\r\n}\r\n.nav_links li a:hover{\r\n    background: -webkit-linear-gradient(rgb(226, 3, 3), rgb(219, 192, 192));\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n}\r\n\r\n.logo{\r\n    cursor: pointer;\r\n    font-family: 'Courgette', monospace;\r\n    color: #edf0f1;\r\n    transition: all 0.3s ease 0s;\r\n}\r\n.logo :hover{\r\n    background: -webkit-linear-gradient(rgb(226, 3, 3), rgb(219, 192, 192));\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n}\r\n  ul {\r\n    display: flex;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  /*----------------------NAV ENDS-----------------------------*/\r\n\r\n\r\n /* --------------------HEADLINE BEGINS--------------------------*/\r\n  .container{\r\n      display: flex;\r\n      color: #edf0f1 ;\r\n      width:100%;\r\n      align-items: center;\r\n      justify-content: center;\r\n      font-family: 'Courgette', cursive;\r\n      font-weight: 700;\r\n      padding-bottom: 360px;\r\n  }\r\n\r\n.heading{\r\n    text-align: center;\r\n}\r\n.container h1{\r\n    font-size: 72px;\r\n\r\n}\r\n.blood {\r\n    color:gold;\r\n    text-shadow:\r\n    4px 4px 1px #300000,\r\n    4px 6px 1px #400000,\r\n    4px 8px 1px #500000,\r\n    4px 10px 1px #600000,\r\n    4px 12px 1px #700000,\r\n    4px 14px 1px #800000,\r\n    4px 16px 1px #900000,\r\n    4px 18px 1px #A00000,\r\n    4px 20px 1px #B00000,\r\n    4px 22px 1px #C00000,\r\n    4px 24px 1px #D00000,\r\n    4px 26px 1px #E00000,\r\n    4px 28px 1px #F00000,\r\n    4px 30px 1px #FA0000,\r\n    4px 32px 1px #FB0000,\r\n    4px 34px 1px #FC0000,\r\n    4px 36px 1px #FD0000,\r\n    4px 38px 1px #FE0000,\r\n    4px 40px 2px #FF0000;\r\n}\r\n /* --------------------HEADLINE ENDS--------------------------*/\r\n\r\n\r\n /* --------------------FOOTER BEGINS--------------------------*/\r\n.footer{\r\n    display: flex;\r\n    color: yellow;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    width: 100%;\r\n    padding: 1rem;\r\n    border-top: 1px solid var(--border-color);\r\n    background-color: var(--background-light);\r\n    \r\n}\r\n.footer a{\r\n    text-decoration: none;\r\n    color: #e5e7eb;\r\n    font-size: 18px;\r\n}\r\n /* --------------------FOOTER ENDS--------------------------*/\r\n\r\n /* --------------------MENU BEGINS--------------------------*/\r\n .menu-container-flex{\r\n    display: none;\r\n    justify-content: center;\r\n    padding: 32px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    gap: 8px;\r\n }\r\n.menu{\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    flex-shrink: 1;\r\n    gap: 8px;\r\n}\r\n.card{\r\n    display: flex;\r\n    border: white 2px solid;\r\n    border-radius: 0.5rem;\r\n    flex-wrap: wrap;\r\n    height: inherit;\r\n    flex-direction: row;\r\n    justify-content: flex-start;\r\n    gap: 18px;\r\n    width: 800px;\r\n    background: rgba(34, 31, 31, 0.993);\r\n}\r\n.card > img{\r\n    border-radius: 1rem;\r\n}\r\n.menu-container{\r\n    display: flex;\r\n    color: #d36f6f;\r\n    padding: 8px;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    gap: 30px;\r\n}\r\n.dropdown{\r\n    background: none;\r\n    border:none\r\n}\r\n.dropdown-content {\r\n    display:none;\r\n  }\r\n\r\n\r\n.dropdown:hover .dropdown-content{\r\n    display: flex\r\n}\r\n\r\n /* --------------------MENU ENDS--------------------------*/\r\n\r\n /* --------------------ABOUT BEGINS--------------------------*/\r\n.about{\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    padding: 32px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    gap: 8px;\r\n    padding-bottom: 360px;\r\n\r\n}\r\n.about-content{\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.email{\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 32px;\r\n    padding: 16px;\r\n\r\n\r\n}\r\n.phone{\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 32px;\r\n    padding: 16px;\r\n\r\n    \r\n}\r\n.about h1{\r\n    color: gold;\r\n    font-weight: 700;\r\n    font-size: 48px;\r\n}\r\n.about-content{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    color: #d36f6f;\r\n    \r\n}\r\n\r\n /* --------------------ABOUT BEGINS--------------------------*/\r\n\r\n /* --------------------MEDIA QUERIES BEGINS--------------------------*/\r\n  @media screen and (max-width: 600px) {\r\n    header{\r\n      justify-content: center;\r\n    }\r\n    body{\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n    .card{\r\n        width: 250px;\r\n        padding: 10px 15px;\r\n    }\r\n    .menu-container-flex{\r\n        display: none;\r\n    }\r\n    \r\n  }\r\n  \r\n\r\n  /* --------------------MEDIA QUERIES ENDS--------------------------*/\r\n"],"sourceRoot":""}]);
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

module.exports = JSON.parse('[{"name":"Ted Bundy","meal":"Medium Rare Steak, Eggs over easy, Toast, Milk and Coffee","description":"Ted Bundy refused to make a special request so he was given the standard.","additional info":"Ted Bundy was a serial killer"},{"name":"John Wayne Gacy","meal":"12 fried shrimp, a bucket of KFC fried chicken, french fries and a pound of strawberries.","description":"John Wayne Gacy used to be a manager at KFC so his request does not come as a surprise","additional info":"John Wayne Gacy was known as the clown killer because he often dressed like a clown while carrying out his devious acts"},{"name":"Timothy McVeigh","meal":"Two Pints of Mint Chocolate Chip Ice Cream","description":"Timothy McVeigh was an american terrorist who killed 168 people with a bomb","additional info":"He was responsible for the deadliest act of terrorism in the US prior to 911."},{"name":"Karla Faye Tucker","meal":"Salad with a peach and a banana","description":"Tucker murdered two men with a pickaxe","additional info":"She was a born again Christian who married a minister"},{"name":"Jeffrey Epstein","meal":"Vending Machine Snacks","description":"Epstein spent his last days paying other prisoners commisary and emptying out vending machines","additional info":"A lot of controversy surrounding his death"},{"name":"Al Capone","meal":"Spaghetti with Walnut sauce","description":"Al Capone was a notorious mafia cappo who spent his last days in Alcatraz","additional info":"Died via syphilis because at the time there was no cure for it"},{"name":"Karla Faye Tucker","meal":"Salad with a peach and a banana","description":"Tucker murdered two men with a pickaxe","additional info":"She was a born again Christian who married a minister"},{"name":"Jeffrey Epstein","meal":"Vending Machine Snacks","description":"Epstein spent his last days paying other prisoners commisary and emptying out vending machines","additional info":"A lot of controversy surrounding his death"},{"name":"Karla Faye Tucker","meal":"Salad with a peach and a banana","description":"Tucker murdered two men with a pickaxe","additional info":"She was a born again Christian who married a minister"},{"name":"Jeffrey Epstein","meal":"Vending Machine Snacks","description":"Epstein spent his last days paying other prisoners commisary and emptying out vending machines","additional info":"A lot of controversy surrounding his death"}]');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsS0FBSyxjQUFjLGFBQWEsTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsdUJBQXVCLFFBQVEsTUFBTSxjQUFjLGFBQWEsTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksY0FBYyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxhQUFhLGFBQWEsTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxLQUFLLFVBQVUsT0FBTyxLQUFLLEtBQUssTUFBTSxhQUFhLGFBQWEsTUFBTSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxZQUFZLE9BQU8sYUFBYSxh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RUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDckIwQztBQUNJO0FBQ0o7QUFDSjtBQUNFO0FBQ3hDO0FBQ0EsSUFBSSx1REFBTTtBQUNWLElBQUksMkRBQVE7QUFDWixJQUFJLG1EQUFJO0FBQ1IsSUFBSSxzREFBSztBQUNULElBQUksdURBQU07QUFDVixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLG1DQUFtQztBQUNuQyxvQ0FBb0M7QUFDcEMseUNBQXlDO0FBQ3pDO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vUmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vUmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vUmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vUmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL1Jlc3RhdXJhbnQvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vUmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9SZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9SZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL1Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vUmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL1Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9SZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vUmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9SZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvaGVhZGxpbmUuanMiLCJ3ZWJwYWNrOi8vUmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL21lbnUuanMiLCJ3ZWJwYWNrOi8vUmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL25hdmJhci5qcyIsIndlYnBhY2s6Ly9SZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vUmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vUmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL1Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9SZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vUmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9SZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL1Jlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL3NyYy9hc3NldHMvYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNvdXJnZXR0ZSZmYW1pbHk9SmV0QnJhaW5zK01vbm86aXRhbCx3Z2h0QDEsMzAwJmZhbWlseT1Mb2JzdGVyJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBDU1MgUkVTRVQgKi9cXHJcXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxyXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcclxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXHJcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxyXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXHJcXG5iLCB1LCBpLCBjZW50ZXIsXFxyXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXHJcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXHJcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXHJcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcXHJcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXFxyXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxyXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxuICBmb250LXNpemU6IDEwMCU7XFxyXFxuICBmb250OiBpbmhlcml0O1xcclxcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG5odG1se1xcclxcbiAgICBsaW5lLWhlaWdodDogMS42O1xcclxcbn1cXHJcXG4gIG9sLCB1bCB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICB9XFxyXFxuICBibG9ja3F1b3RlLCBxIHtcXHJcXG4gICAgcXVvdGVzOiBub25lO1xcclxcbiAgfVxcclxcbiAgYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxyXFxuICBxOmJlZm9yZSwgcTphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICBjb250ZW50OiBub25lO1xcclxcbiAgfVxcclxcbmJvZHl7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxyXFxufVxcclxcbiNjb250ZW50e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmdldHRlJywgY3Vyc2l2ZTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuOyBcXHJcXG5cXHJcXG59XFxyXFxubGksIGEsIGJ1dHRvbntcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyZ2V0dGUnLCBtb25vc3BhY2U7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBjb2xvcjogI2VkZjBmMTtcXHJcXG59XFxyXFxuaW1ne1xcclxcbiAgICBtYXgtaGVpZ2h0OiA1MHZoO1xcclxcbn1cXHJcXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tTkFWIEJFR0lOUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXHJcXG5oZWFkZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAxOHB4IDUlO1xcclxcbiAgICBnYXA6IDUwcHg7XFxyXFxufVxcclxcbi5uYXZfbGlua3N7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcbi5uYXZfbGlua3MgbGl7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgcGFkZGluZzogMHB4IDEwcHg7XFxyXFxufVxcclxcbi5uYXZfbGlua3MgbGkgYXtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcXHJcXG59XFxyXFxuLm5hdl9saW5rcyBsaSBhOmhvdmVye1xcclxcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChyZ2IoMjI2LCAzLCAzKSwgcmdiKDIxOSwgMTkyLCAxOTIpKTtcXHJcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxyXFxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ297XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyZ2V0dGUnLCBtb25vc3BhY2U7XFxyXFxuICAgIGNvbG9yOiAjZWRmMGYxO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xcclxcbn1cXHJcXG4ubG9nbyA6aG92ZXJ7XFxyXFxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHJnYigyMjYsIDMsIDMpLCByZ2IoMjE5LCAxOTIsIDE5MikpO1xcclxcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXHJcXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG4gIHVsIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgfVxcclxcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tTkFWIEVORFMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuXFxyXFxuXFxyXFxuIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tSEVBRExJTkUgQkVHSU5TLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcbiAgLmNvbnRhaW5lcntcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGNvbG9yOiAjZWRmMGYxIDtcXHJcXG4gICAgICB3aWR0aDoxMDAlO1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgZm9udC1mYW1pbHk6ICdDb3VyZ2V0dGUnLCBjdXJzaXZlO1xcclxcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgICAgcGFkZGluZy1ib3R0b206IDM2MHB4O1xcclxcbiAgfVxcclxcblxcclxcbi5oZWFkaW5ne1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5jb250YWluZXIgaDF7XFxyXFxuICAgIGZvbnQtc2l6ZTogNzJweDtcXHJcXG5cXHJcXG59XFxyXFxuLmJsb29kIHtcXHJcXG4gICAgY29sb3I6Z29sZDtcXHJcXG4gICAgdGV4dC1zaGFkb3c6XFxyXFxuICAgIDRweCA0cHggMXB4ICMzMDAwMDAsXFxyXFxuICAgIDRweCA2cHggMXB4ICM0MDAwMDAsXFxyXFxuICAgIDRweCA4cHggMXB4ICM1MDAwMDAsXFxyXFxuICAgIDRweCAxMHB4IDFweCAjNjAwMDAwLFxcclxcbiAgICA0cHggMTJweCAxcHggIzcwMDAwMCxcXHJcXG4gICAgNHB4IDE0cHggMXB4ICM4MDAwMDAsXFxyXFxuICAgIDRweCAxNnB4IDFweCAjOTAwMDAwLFxcclxcbiAgICA0cHggMThweCAxcHggI0EwMDAwMCxcXHJcXG4gICAgNHB4IDIwcHggMXB4ICNCMDAwMDAsXFxyXFxuICAgIDRweCAyMnB4IDFweCAjQzAwMDAwLFxcclxcbiAgICA0cHggMjRweCAxcHggI0QwMDAwMCxcXHJcXG4gICAgNHB4IDI2cHggMXB4ICNFMDAwMDAsXFxyXFxuICAgIDRweCAyOHB4IDFweCAjRjAwMDAwLFxcclxcbiAgICA0cHggMzBweCAxcHggI0ZBMDAwMCxcXHJcXG4gICAgNHB4IDMycHggMXB4ICNGQjAwMDAsXFxyXFxuICAgIDRweCAzNHB4IDFweCAjRkMwMDAwLFxcclxcbiAgICA0cHggMzZweCAxcHggI0ZEMDAwMCxcXHJcXG4gICAgNHB4IDM4cHggMXB4ICNGRTAwMDAsXFxyXFxuICAgIDRweCA0MHB4IDJweCAjRkYwMDAwO1xcclxcbn1cXHJcXG4gLyogLS0tLS0tLS0tLS0tLS0tLS0tLS1IRUFETElORSBFTkRTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcblxcclxcbiAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLUZPT1RFUiBCRUdJTlMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuLmZvb3RlcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgY29sb3I6IHllbGxvdztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcXHJcXG4gICAgXFxyXFxufVxcclxcbi5mb290ZXIgYXtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjb2xvcjogI2U1ZTdlYjtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbn1cXHJcXG4gLyogLS0tLS0tLS0tLS0tLS0tLS0tLS1GT09URVIgRU5EUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5cXHJcXG4gLyogLS0tLS0tLS0tLS0tLS0tLS0tLS1NRU5VIEJFR0lOUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG4gLm1lbnUtY29udGFpbmVyLWZsZXh7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAzMnB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGdhcDogOHB4O1xcclxcbiB9XFxyXFxuLm1lbnV7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtc2hyaW5rOiAxO1xcclxcbiAgICBnYXA6IDhweDtcXHJcXG59XFxyXFxuLmNhcmR7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGJvcmRlcjogd2hpdGUgMnB4IHNvbGlkO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGdhcDogMThweDtcXHJcXG4gICAgd2lkdGg6IDgwMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDM0LCAzMSwgMzEsIDAuOTkzKTtcXHJcXG59XFxyXFxuLmNhcmQgPiBpbWd7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxufVxcclxcbi5tZW51LWNvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgY29sb3I6ICNkMzZmNmY7XFxyXFxuICAgIHBhZGRpbmc6IDhweDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMzBweDtcXHJcXG59XFxyXFxuLmRyb3Bkb3due1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICBib3JkZXI6bm9uZVxcclxcbn1cXHJcXG4uZHJvcGRvd24tY29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6bm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4uZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnR7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXhcXHJcXG59XFxyXFxuXFxyXFxuIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tTUVOVSBFTkRTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcbiAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLUFCT1VUIEJFR0lOUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG4uYWJvdXR7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAzMnB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGdhcDogOHB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMzYwcHg7XFxyXFxuXFxyXFxufVxcclxcbi5hYm91dC1jb250ZW50e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmVtYWlse1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBnYXA6IDMycHg7XFxyXFxuICAgIHBhZGRpbmc6IDE2cHg7XFxyXFxuXFxyXFxuXFxyXFxufVxcclxcbi5waG9uZXtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgZ2FwOiAzMnB4O1xcclxcbiAgICBwYWRkaW5nOiAxNnB4O1xcclxcblxcclxcbiAgICBcXHJcXG59XFxyXFxuLmFib3V0IGgxe1xcclxcbiAgICBjb2xvcjogZ29sZDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcclxcbn1cXHJcXG4uYWJvdXQtY29udGVudHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiAjZDM2ZjZmO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tQUJPVVQgQkVHSU5TLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcbiAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLU1FRElBIFFVRVJJRVMgQkVHSU5TLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXHJcXG4gICAgaGVhZGVye1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuICAgIGJvZHl7XFxyXFxuICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICB9XFxyXFxuICAgIC5jYXJke1xcclxcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xcclxcbiAgICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5tZW51LWNvbnRhaW5lci1mbGV4e1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gIH1cXHJcXG4gIFxcclxcblxcclxcbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS1NRURJQSBRVUVSSUVTIEVORFMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBb0ksY0FBYztBQUNsSjs7Ozs7Ozs7Ozs7OztFQWFFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsU0FBUztFQUNULGVBQWU7RUFDZixhQUFhO0VBQ2Isd0JBQXdCO0FBQzFCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7O0lBRUUsV0FBVztJQUNYLGFBQWE7RUFDZjtBQUNGO0lBQ0kseURBQXFEO0lBQ3JELHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsa0NBQWtDO0FBQ3RDO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixpQ0FBaUM7SUFDakMsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixrQkFBa0I7O0FBRXRCO0FBQ0E7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QkFBa0I7SUFDdEI7SUFDQTtRQUNJLGFBQWE7SUFDakI7O0VBRUY7OztFQUdBLG9FQUFvRVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Db3VyZ2V0dGUmZmFtaWx5PUpldEJyYWlucytNb25vOml0YWwsd2dodEAxLDMwMCZmYW1pbHk9TG9ic3RlciZkaXNwbGF5PXN3YXAnKTsvKiBDU1MgUkVTRVQgKi9cXHJcXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxyXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcclxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXHJcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxyXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXHJcXG5iLCB1LCBpLCBjZW50ZXIsXFxyXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXHJcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXHJcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXHJcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcXHJcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXFxyXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxyXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxuICBmb250LXNpemU6IDEwMCU7XFxyXFxuICBmb250OiBpbmhlcml0O1xcclxcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG5odG1se1xcclxcbiAgICBsaW5lLWhlaWdodDogMS42O1xcclxcbn1cXHJcXG4gIG9sLCB1bCB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICB9XFxyXFxuICBibG9ja3F1b3RlLCBxIHtcXHJcXG4gICAgcXVvdGVzOiBub25lO1xcclxcbiAgfVxcclxcbiAgYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxyXFxuICBxOmJlZm9yZSwgcTphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICBjb250ZW50OiBub25lO1xcclxcbiAgfVxcclxcbmJvZHl7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vc3JjL2Fzc2V0cy9iYWNrZ3JvdW5kLmpwZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcclxcbn1cXHJcXG4jY29udGVudHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBmb250LWZhbWlseTogJ0NvdXJnZXR0ZScsIGN1cnNpdmU7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjsgXFxyXFxuXFxyXFxufVxcclxcbmxpLCBhLCBidXR0b257XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmdldHRlJywgbW9ub3NwYWNlO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgY29sb3I6ICNlZGYwZjE7XFxyXFxufVxcclxcbmltZ3tcXHJcXG4gICAgbWF4LWhlaWdodDogNTB2aDtcXHJcXG59XFxyXFxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLU5BViBCRUdJTlMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxyXFxuaGVhZGVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMThweCA1JTtcXHJcXG4gICAgZ2FwOiA1MHB4O1xcclxcbn1cXHJcXG4ubmF2X2xpbmtze1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG4ubmF2X2xpbmtzIGxpe1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xcclxcbn1cXHJcXG4ubmF2X2xpbmtzIGxpIGF7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XFxyXFxufVxcclxcbi5uYXZfbGlua3MgbGkgYTpob3ZlcntcXHJcXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQocmdiKDIyNiwgMywgMyksIHJnYigyMTksIDE5MiwgMTkyKSk7XFxyXFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcclxcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5sb2dve1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmdldHRlJywgbW9ub3NwYWNlO1xcclxcbiAgICBjb2xvcjogI2VkZjBmMTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcXHJcXG59XFxyXFxuLmxvZ28gOmhvdmVye1xcclxcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChyZ2IoMjI2LCAzLCAzKSwgcmdiKDIxOSwgMTkyLCAxOTIpKTtcXHJcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxyXFxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuICB1bCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gIH1cXHJcXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLU5BViBFTkRTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcblxcclxcbiAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLUhFQURMSU5FIEJFR0lOUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG4gIC5jb250YWluZXJ7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBjb2xvcjogI2VkZjBmMSA7XFxyXFxuICAgICAgd2lkdGg6MTAwJTtcXHJcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgIGZvbnQtZmFtaWx5OiAnQ291cmdldHRlJywgY3Vyc2l2ZTtcXHJcXG4gICAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICAgIHBhZGRpbmctYm90dG9tOiAzNjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4uaGVhZGluZ3tcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4uY29udGFpbmVyIGgxe1xcclxcbiAgICBmb250LXNpemU6IDcycHg7XFxyXFxuXFxyXFxufVxcclxcbi5ibG9vZCB7XFxyXFxuICAgIGNvbG9yOmdvbGQ7XFxyXFxuICAgIHRleHQtc2hhZG93OlxcclxcbiAgICA0cHggNHB4IDFweCAjMzAwMDAwLFxcclxcbiAgICA0cHggNnB4IDFweCAjNDAwMDAwLFxcclxcbiAgICA0cHggOHB4IDFweCAjNTAwMDAwLFxcclxcbiAgICA0cHggMTBweCAxcHggIzYwMDAwMCxcXHJcXG4gICAgNHB4IDEycHggMXB4ICM3MDAwMDAsXFxyXFxuICAgIDRweCAxNHB4IDFweCAjODAwMDAwLFxcclxcbiAgICA0cHggMTZweCAxcHggIzkwMDAwMCxcXHJcXG4gICAgNHB4IDE4cHggMXB4ICNBMDAwMDAsXFxyXFxuICAgIDRweCAyMHB4IDFweCAjQjAwMDAwLFxcclxcbiAgICA0cHggMjJweCAxcHggI0MwMDAwMCxcXHJcXG4gICAgNHB4IDI0cHggMXB4ICNEMDAwMDAsXFxyXFxuICAgIDRweCAyNnB4IDFweCAjRTAwMDAwLFxcclxcbiAgICA0cHggMjhweCAxcHggI0YwMDAwMCxcXHJcXG4gICAgNHB4IDMwcHggMXB4ICNGQTAwMDAsXFxyXFxuICAgIDRweCAzMnB4IDFweCAjRkIwMDAwLFxcclxcbiAgICA0cHggMzRweCAxcHggI0ZDMDAwMCxcXHJcXG4gICAgNHB4IDM2cHggMXB4ICNGRDAwMDAsXFxyXFxuICAgIDRweCAzOHB4IDFweCAjRkUwMDAwLFxcclxcbiAgICA0cHggNDBweCAycHggI0ZGMDAwMDtcXHJcXG59XFxyXFxuIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tSEVBRExJTkUgRU5EUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5cXHJcXG5cXHJcXG4gLyogLS0tLS0tLS0tLS0tLS0tLS0tLS1GT09URVIgQkVHSU5TLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcbi5mb290ZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGNvbG9yOiB5ZWxsb3c7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saWdodCk7XFxyXFxuICAgIFxcclxcbn1cXHJcXG4uZm9vdGVyIGF7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3I6ICNlNWU3ZWI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG59XFxyXFxuIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tRk9PVEVSIEVORFMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuXFxyXFxuIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tTUVOVSBCRUdJTlMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuIC5tZW51LWNvbnRhaW5lci1mbGV4e1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMzJweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBnYXA6IDhweDtcXHJcXG4gfVxcclxcbi5tZW51e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBmbGV4LXNocmluazogMTtcXHJcXG4gICAgZ2FwOiA4cHg7XFxyXFxufVxcclxcbi5jYXJke1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBib3JkZXI6IHdoaXRlIDJweCBzb2xpZDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGhlaWdodDogaW5oZXJpdDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBnYXA6IDE4cHg7XFxyXFxuICAgIHdpZHRoOiA4MDBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgzNCwgMzEsIDMxLCAwLjk5Myk7XFxyXFxufVxcclxcbi5jYXJkID4gaW1ne1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbn1cXHJcXG4ubWVudS1jb250YWluZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGNvbG9yOiAjZDM2ZjZmO1xcclxcbiAgICBwYWRkaW5nOiA4cHg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDMwcHg7XFxyXFxufVxcclxcbi5kcm9wZG93bntcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgYm9yZGVyOm5vbmVcXHJcXG59XFxyXFxuLmRyb3Bkb3duLWNvbnRlbnQge1xcclxcbiAgICBkaXNwbGF5Om5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4XFxyXFxufVxcclxcblxcclxcbiAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLU1FTlUgRU5EUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5cXHJcXG4gLyogLS0tLS0tLS0tLS0tLS0tLS0tLS1BQk9VVCBCRUdJTlMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuLmFib3V0e1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMzJweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBnYXA6IDhweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDM2MHB4O1xcclxcblxcclxcbn1cXHJcXG4uYWJvdXQtY29udGVudHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbi5lbWFpbHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgZ2FwOiAzMnB4O1xcclxcbiAgICBwYWRkaW5nOiAxNnB4O1xcclxcblxcclxcblxcclxcbn1cXHJcXG4ucGhvbmV7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGdhcDogMzJweDtcXHJcXG4gICAgcGFkZGluZzogMTZweDtcXHJcXG5cXHJcXG4gICAgXFxyXFxufVxcclxcbi5hYm91dCBoMXtcXHJcXG4gICAgY29sb3I6IGdvbGQ7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXHJcXG59XFxyXFxuLmFib3V0LWNvbnRlbnR7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBjb2xvcjogI2QzNmY2ZjtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbiAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLUFCT1VUIEJFR0lOUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5cXHJcXG4gLyogLS0tLS0tLS0tLS0tLS0tLS0tLS1NRURJQSBRVUVSSUVTIEJFR0lOUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxyXFxuICAgIGhlYWRlcntcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgICBib2R5e1xcclxcbiAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgfVxcclxcbiAgICAuY2FyZHtcXHJcXG4gICAgICAgIHdpZHRoOiAyNTBweDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcXHJcXG4gICAgfVxcclxcbiAgICAubWVudS1jb250YWluZXItZmxleHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICB9XFxyXFxuICBcXHJcXG5cXHJcXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tTUVESUEgUVVFUklFUyBFTkRTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJcclxuY29uc3QgYWJvdXQgPSAoKSA9PntcclxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JylcclxuY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuZGl2LmNsYXNzTGlzdC5hZGQoXCJhYm91dFwiKVxyXG5kaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG5cclxuZGl2LmlubmVySFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3MgPSBcImFib3V0LWhlYWRlclwiPlxyXG4gICAgPGgxPkFib3V0PC9oMT5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcyA9IFwiYWJvdXQtY29udGVudFwiPlxyXG4gICAgV2hhdCBXZSBEbzogQXQgTGFzdCBNZWFsIHdlIHNlcnZlIHRoZSBsYXN0IG1lYWxzIG9mIHRoZSBtb3N0IG5vdG9yaW91cyBodW1hbiBcXG5cclxuICAgIGJlaW5ncy4gQ29tZSBieSBhbmQgZ2l2ZSB1cyBhIHRyeSFcclxuICAgIDxoci8+XHJcbiAgICAgICAgPGRpdiBjbGFzcyA9IFwicGhvbmVcIj5cclxuICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGNsYXNzPVwiYmkgYmktdGVsZXBob25lLWZpbGxcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xLjg4NS41MTFhMS43NDUgMS43NDUgMCAwIDEgMi42MS4xNjNMNi4yOSAyLjk4Yy4zMjkuNDIzLjQ0NS45NzQuMzE1IDEuNDk0bC0uNTQ3IDIuMTlhLjY3OC42NzggMCAwIDAgLjE3OC42NDNsMi40NTcgMi40NTdhLjY3OC42NzggMCAwIDAgLjY0NC4xNzhsMi4xODktLjU0N2ExLjc0NSAxLjc0NSAwIDAgMSAxLjQ5NC4zMTVsMi4zMDYgMS43OTRjLjgyOS42NDUuOTA1IDEuODcuMTYzIDIuNjExbC0xLjAzNCAxLjAzNGMtLjc0Ljc0LTEuODQ2IDEuMDY1LTIuODc3LjcwMmExOC42MzQgMTguNjM0IDAgMCAxLTcuMDEtNC40MiAxOC42MzQgMTguNjM0IDAgMCAxLTQuNDItNy4wMDljLS4zNjItMS4wMy0uMDM3LTIuMTM3LjcwMy0yLjg3N0wxLjg4NS41MTF6XCIvPlxyXG4gICAgICAgICAgICA8L3N2Zz4gXHJcbiAgICAgICAgICAgIDxwPig2NTApMTIzLTQ1Njc8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcyA9IFwiZW1haWxcIj5cclxuICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGNsYXNzPVwiYmkgYmktZW52ZWxvcGUtZmlsbFwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNLjA1IDMuNTU1QTIgMiAwIDAgMSAyIDJoMTJhMiAyIDAgMCAxIDEuOTUgMS41NTVMOCA4LjQxNC4wNSAzLjU1NVpNMCA0LjY5N3Y3LjEwNGw1LjgwMy0zLjU1OEwwIDQuNjk3Wk02Ljc2MSA4LjgzbC02LjU3IDQuMDI3QTIgMiAwIDAgMCAyIDE0aDEyYTIgMiAwIDAgMCAxLjgwOC0xLjE0NGwtNi41Ny00LjAyN0w4IDkuNTg2bC0xLjIzOS0uNzU3Wm0zLjQzNi0uNTg2TDE2IDExLjgwMVY0LjY5N2wtNS44MDMgMy41NDZaXCIvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8cD5ibGFsYWxhbGFAeWFob28uY29tPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG5gXHJcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2KVxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCB7YWJvdXR9IiwiaW1wb3J0ICcuLi9zdHlsZS5jc3MnXHJcblxyXG5jb25zdCBmb290ZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpXHJcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJylcclxuICAgIGRpdi5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPHA+Q29weXJpZ2h0ICYjMTY5OyAyMDIxIDxhIHRhcmdldD1cImJsYW5rXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9yc2luZ2g5NTRcIj5naXRodWIuY29tL3JzaW5naDk1NDwvYT48L3A+XHJcbiAgICBgXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpdilcclxufVxyXG5cclxuZXhwb3J0IHtmb290ZXJ9IiwiaW1wb3J0ICcuLi9zdHlsZS5jc3MnXHJcblxyXG5jb25zdCBoZWFkbGluZSA9ICgpID0+e1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JylcclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJylcclxuICAgIGRpdi5pbm5lckhUTUwgPSBgXHJcbiAgICA8ZGl2IGNsYXNzID0gXCJoZWFkaW5nXCI+IFxyXG4gICAgICAgIDxoMSBjbGFzcyA9IFwiYmxvb2RcIj4gQ29tZSBhbmQgZWF0IHlvdXIgPHN0cm9uZz4gbGFzdCBtZWFsPC9zdHJvbmc+PC9oMT5cclxuICAgIDwvZGl2PlxyXG4gICAgYFxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChkaXYpXHJcbn1cclxuXHJcbmV4cG9ydCB7aGVhZGxpbmV9IiwiaW1wb3J0IGRhdGEgZnJvbSAnLi4vZGF0YS9kYXRhLmpzb24nIFxyXG5cclxuXHJcbmNvbnN0IGNyZWF0ZU1lbnVJdGVtID0gKGRhdGEpID0+IHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpXHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3QgY2FyZCAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYXJkJylcclxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ21lbnUnKVxyXG4gICAgZGl2LmlubmVySFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XHJcbiAgICA8aW1nIHNyYz1cIiR7ZGF0YVswXS5zcmN9XCIgYWx0PVwiTWVhbFwiIHN0eWxlID0gJ2hlaWdodDogMjB2aCc+XHJcbiAgICA8ZGl2IGNsYXNzPVwibWVudS1jb250YWluZXJcIj5cclxuICAgICAgPGg0PjxiPlRoZSAke2RhdGFbMF0ubmFtZX08L2I+PC9oND5cclxuICAgICAgPHA+JHtkYXRhWzBdLm1lYWx9PC9wPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxidXR0b24gY2xhc3MgPSBcImRyb3Bkb3duXCI+QWRkaXRpb25hbCBJbmZvIDwvYnV0dG9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3MgPSBcImRyb3Bkb3duLWNvbnRlbnRcIj4ke2RhdGFbMF0uZGVzY3JpcHRpb259PC9kaXY+XHJcbiAgICA8ZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+IFxyXG4gICAgYFxyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2KVxyXG59XHJcblxyXG5jb25zdCBtZW51ID0gKCkgPT57XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxyXG5cclxuICAgIGNvbnN0IGNhcmQgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FyZCcpXHJcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51LWNvbnRhaW5lci1mbGV4JylcclxuICAgIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnbWVudScpXHJcbiAgICAgICAgZGl2LmlubmVySFRNTCA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGg0PjxiPlRoZSAke2RhdGFbaV0ubmFtZX08L2I+PC9oND5cclxuICAgICAgICAgIDxwPiR7ZGF0YVtpXS5tZWFsfTwvcD5cclxuICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3MgPSBcImRyb3Bkb3duXCI+QWRkaXRpb25hbCBJbmZvIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJkcm9wZG93bi1jb250ZW50XCI+JHtkYXRhW2ldLmRlc2NyaXB0aW9ufTwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PiBcclxuICAgICAgICBgXHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRpdilcclxuICAgIH1cclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxyXG4gICAgLy8gY2FyZC5hcHBlbmRDaGlsZChpbWcpXHJcbiAgICAvLyBjYXJkLmFwcGVuZENoaWxkKGNvbnRhaW5lcilcclxuICAgIC8vIGRpdi5hcHBlbmRDaGlsZChjYXJkKVxyXG4gIFxyXG59XHJcblxyXG5leHBvcnQge21lbnV9IiwiaW1wb3J0ICcuLi9zdHlsZS5jc3MnXHJcblxyXG5cclxuY29uc3QgbmF2YmFyID0gKCkgPT57XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpXHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxyXG5cclxuXHJcbiAgICBuYXYuaW5uZXJIVE1MID0gYFxyXG4gICAgPHVsIGNsYXNzID0gJ25hdl9saW5rcyc+XHJcbiAgICAgICAgPGxpPjxhIGhyZWYgPVwiI1wiPkxhc3QgTWVhbHM8L2E+PC9saT5cclxuICAgICAgICA8bGk+PGEgaHJlZiA9XCIjXCI+TWVudTwvYT48L2xpPlxyXG4gICAgICAgIDxsaT48YSBocmVmID1cIiNcIj5BYm91dDwvYT48L2xpPlxyXG4gICAgPC91bD5cclxuICAgIGBcclxuICAgIFxyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdilcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKVxyXG59XHJcblxyXG5leHBvcnQge25hdmJhcn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCB7IG5hdmJhciB9IGZyb20gXCIuL21vZHVsZXMvbmF2YmFyXCI7XHJcbmltcG9ydCB7IGhlYWRsaW5lIH0gZnJvbSBcIi4vbW9kdWxlcy9oZWFkbGluZVwiO1xyXG5pbXBvcnQgeyBmb290ZXIgfSBmcm9tIFwiLi9tb2R1bGVzL2Zvb3RlclwiO1xyXG5pbXBvcnQgeyBtZW51IH0gZnJvbSBcIi4vbW9kdWxlcy9tZW51XCI7XHJcbmltcG9ydCB7IGFib3V0IH0gZnJvbSBcIi4vbW9kdWxlcy9hYm91dFwiO1xyXG5jb25zdCAgbG9hZFBhZ2UgPSAoKCk9PiB7XHJcbiAgICBuYXZiYXIoKTtcclxuICAgIGhlYWRsaW5lKCk7XHJcbiAgICBtZW51KClcclxuICAgIGFib3V0KCk7XHJcbiAgICBmb290ZXIoKTtcclxufSkoKVxyXG5cclxuY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2X2xpbmtzJylcclxubWVudUl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+e1xyXG4gICAgY29uc3Qge3RhcmdldH0gPSBlXHJcbiAgICBpZih0YXJnZXQuaW5uZXJIVE1MID09ICdNZW51Jyl7bWVudUNsaWNrKCl9XHJcbiAgICBpZih0YXJnZXQuaW5uZXJIVE1MID09ICdBYm91dCcpe2Fib3V0Q2xpY2soKX1cclxuICAgIGlmKHRhcmdldC5pbm5lckhUTUwgPT0gJ0xhc3QgTWVhbHMnKXtob21lKCl9XHJcblxyXG59KVxyXG5cclxuY29uc3QgbWVudUNsaWNrID0gKCkgPT57XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJylcclxuICAgIGNvbnN0IGFib3V0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0JylcclxuICAgIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgYWJvdXRDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWNvbnRhaW5lci1mbGV4JylcclxuICAgICAgICBpZihtZW51Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPT09ICdmbGV4Jyl7XHJcbiAgICAgICAgICAgIG1lbnVDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgICAgICAgICBjb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIG1lbnVDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xyXG4gICAgICAgIH1cclxufVxyXG5cclxuXHJcbmNvbnN0IGFib3V0Q2xpY2sgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJylcclxuICAgIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1jb250YWluZXItZmxleCcpXHJcbiAgICBjb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIG1lbnVDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgY29uc3QgYWJvdXRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXQnKVxyXG4gICAgaWYoYWJvdXRDb250YWluZXIuc3R5bGUuZGlzcGxheSA9PT0gJ2ZsZXgnKXtcclxuICAgICAgICBhYm91dENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBhYm91dENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGhvbWUgPSAoKSA9PntcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKVxyXG4gICAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWNvbnRhaW5lci1mbGV4JylcclxuICAgIGNvbnN0IGFib3V0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0JylcclxuICAgIGNvbnNvbGUubG9nKFwiQVlZWUVcIilcclxuICAgIG1lbnVDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgYWJvdXRDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcclxuXHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
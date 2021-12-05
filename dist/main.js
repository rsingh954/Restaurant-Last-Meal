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
___CSS_LOADER_EXPORT___.push([module.id, "/* CSS RESET */\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed,\r\nfigure, figcaption, footer, header, hgroup,\r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  font-size: 100%;\r\n  font: inherit;\r\n  vertical-align: baseline;\r\n}\r\nhtml{\r\n    line-height: 1.6;\r\n}\r\n  ol, ul {\r\n    list-style: none;\r\n  }\r\n  blockquote, q {\r\n    quotes: none;\r\n  }\r\n  blockquote:before, blockquote:after,\r\n  q:before, q:after {\r\n    content: '';\r\n    content: none;\r\n  }\r\n\r\nli a{\r\n    text-decoration: none;\r\n}\r\nbody{\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    background-position: center center;\r\n}\r\n#content{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    font-family: 'Courgette', cursive;\r\n    align-items: center;\r\n    height: 100vh;\r\n    overflow-x: hidden; \r\n\r\n}\r\nli, a, button{\r\n    font-family: 'Courgette', monospace;\r\n    text-decoration: none;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    color: #edf0f1;\r\n}\r\n\r\n  /*---------------------NAV BEGINS---------------------------- */\r\nheader{\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    padding: 18px 5%;\r\n    gap: 50px;\r\n}\r\n.nav_links{\r\n    list-style: none;\r\n}\r\n.nav_links li{\r\n    display: inline-block;\r\n    padding: 0px 10px;\r\n    text-decoration: none;\r\n\r\n\r\n}\r\n.nav_links li a{\r\n    list-style: none;\r\n    text-decoration: none;\r\n    transition: all 0.3s ease 0s;\r\n}\r\n.nav_links li a:hover{\r\n    background: -webkit-linear-gradient(rgb(226, 3, 3), rgb(219, 192, 192));\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n}\r\n\r\n.logo{\r\n    cursor: pointer;\r\n    font-family: 'Courgette', monospace;\r\n    color: #edf0f1;\r\n    transition: all 0.3s ease 0s;\r\n}\r\n.logo :hover{\r\n    background: -webkit-linear-gradient(rgb(226, 3, 3), rgb(219, 192, 192));\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n}\r\n  ul {\r\n    display: flex;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  /*----------------------NAV ENDS-----------------------------*/\r\n\r\n\r\n /* --------------------HEADLINE BEGINS--------------------------*/\r\n  .container{\r\n      display: flex;\r\n      color: #edf0f1 ;\r\n      width:100%;\r\n      align-items: center;\r\n      justify-content: center;\r\n      font-family: 'Courgette', cursive;\r\n      font-weight: 700;\r\n      padding-bottom: 360px;\r\n  }\r\n\r\n.heading{\r\n    text-align: center;\r\n}\r\n.container h1{\r\n    font-size: 72px;\r\n\r\n}\r\n.blood {\r\n    color:gold;\r\n    text-shadow:\r\n    4px 4px 1px #300000,\r\n    4px 6px 1px #400000,\r\n    4px 8px 1px #500000,\r\n    4px 10px 1px #600000,\r\n    4px 12px 1px #700000,\r\n    4px 14px 1px #800000,\r\n    4px 16px 1px #900000,\r\n    4px 18px 1px #A00000,\r\n    4px 20px 1px #B00000,\r\n    4px 22px 1px #C00000,\r\n    4px 24px 1px #D00000,\r\n    4px 26px 1px #E00000,\r\n    4px 28px 1px #F00000,\r\n    4px 30px 1px #FA0000,\r\n    4px 32px 1px #FB0000,\r\n    4px 34px 1px #FC0000,\r\n    4px 36px 1px #FD0000,\r\n    4px 38px 1px #FE0000,\r\n    4px 40px 2px #FF0000;\r\n}\r\n /* --------------------HEADLINE ENDS--------------------------*/\r\n\r\n\r\n /* --------------------FOOTER BEGINS--------------------------*/\r\n.footer{\r\n    display: flex;\r\n    color: yellow;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    width: 100%;\r\n    padding: 1rem;\r\n    border-top: 1px solid var(--border-color);\r\n    background-color: var(--background-light);\r\n    \r\n}\r\n.footer a{\r\n    text-decoration: none;\r\n    color: #e5e7eb;\r\n    font-size: 18px;\r\n}\r\n /* --------------------FOOTER ENDS--------------------------*/\r\n\r\n /* --------------------MENU BEGINS--------------------------*/\r\n .menu-container-flex{\r\n    display: none;\r\n    justify-content: center;\r\n    padding: 32px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    gap: 8px;\r\n }\r\n.menu{\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    flex-shrink: 1;\r\n    gap: 8px;\r\n}\r\n.card{\r\n    display: flex;\r\n    flex-direction: column;\r\n    border: white 2px solid;\r\n    border-radius: 0.5rem;\r\n    flex-wrap: nowrap;\r\n    height: inherit;\r\n    flex-direction: row;\r\n    justify-content: flex-start;\r\n    gap: 18px;\r\n    width: 800px;\r\n    background: rgba(34, 31, 31, 0.993);\r\n}\r\n.card > img{\r\n    border-radius: 1rem;\r\n}\r\n.menu-container{\r\n    display: flex;\r\n    color: #d36f6f;\r\n    padding: 8px;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    gap: 30px;\r\n}\r\n.dropdown{\r\n    background: none;\r\n    border:none\r\n}\r\n.dropdown-content {\r\n    display:none;\r\n  }\r\n\r\n\r\n.dropdown:hover .dropdown-content{\r\n    display: flex\r\n}\r\n\r\n /* --------------------MENU ENDS--------------------------*/\r\n\r\n /* --------------------ABOUT BEGINS--------------------------*/\r\n.about{\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    padding: 32px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    gap: 8px;\r\n    padding-bottom: 360px;\r\n\r\n}\r\nhr{\r\n    width: 80vw;\r\n    color: gold;\r\n}\r\n.about-header{\r\n    padding: 0px 16px;\r\n\r\n}\r\n.about-content{\r\n    display: flex;\r\n    justify-content: center;\r\n    padding: 16px;\r\n    border-radius: 1em;\r\n    background: rgb(48, 47, 47);\r\n}\r\n.email{\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 32px;\r\n    padding: 16px;\r\n\r\n\r\n}\r\n.phone{\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 32px;\r\n    padding: 16px;\r\n\r\n    \r\n}\r\n.about h1{\r\n    color: gold;\r\n    font-weight: 700;\r\n    font-size: 48px;\r\n}\r\n.about-content{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    color: #d36f6f;\r\n    \r\n}\r\n\r\n /* --------------------ABOUT BEGINS--------------------------*/\r\n\r\n /* --------------------MEDIA QUERIES BEGINS--------------------------*/\r\n  @media screen and (max-width: 600px) {\r\n    header{\r\n      justify-content: center;\r\n    }\r\n    body{\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n    .card{\r\n        width: 250px;\r\n        padding: 10px 15px;\r\n    }\r\n    .menu-container-flex{\r\n        display: none;\r\n    }\r\n\r\n\r\n    .dropdown-content{\r\n        display: flex;\r\n        font-size: 12px !important;\r\n    }\r\n    .nav_links li a{\r\n        list-style: none;\r\n        text-decoration: none;\r\n    }\r\n  }\r\n  \r\n\r\n  /* --------------------MEDIA QUERIES ENDS--------------------------*/\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Courgette&family=JetBrains+Mono:ital,wght@1,300&family=Lobster&display=swap');/* CSS RESET */\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed,\r\nfigure, figcaption, footer, header, hgroup,\r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  font-size: 100%;\r\n  font: inherit;\r\n  vertical-align: baseline;\r\n}\r\nhtml{\r\n    line-height: 1.6;\r\n}\r\n  ol, ul {\r\n    list-style: none;\r\n  }\r\n  blockquote, q {\r\n    quotes: none;\r\n  }\r\n  blockquote:before, blockquote:after,\r\n  q:before, q:after {\r\n    content: '';\r\n    content: none;\r\n  }\r\n\r\nli a{\r\n    text-decoration: none;\r\n}\r\nbody{\r\n    background-image: url('../src/assets/background.jpg');\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    background-position: center center;\r\n}\r\n#content{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    font-family: 'Courgette', cursive;\r\n    align-items: center;\r\n    height: 100vh;\r\n    overflow-x: hidden; \r\n\r\n}\r\nli, a, button{\r\n    font-family: 'Courgette', monospace;\r\n    text-decoration: none;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    color: #edf0f1;\r\n}\r\n\r\n  /*---------------------NAV BEGINS---------------------------- */\r\nheader{\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    padding: 18px 5%;\r\n    gap: 50px;\r\n}\r\n.nav_links{\r\n    list-style: none;\r\n}\r\n.nav_links li{\r\n    display: inline-block;\r\n    padding: 0px 10px;\r\n    text-decoration: none;\r\n\r\n\r\n}\r\n.nav_links li a{\r\n    list-style: none;\r\n    text-decoration: none;\r\n    transition: all 0.3s ease 0s;\r\n}\r\n.nav_links li a:hover{\r\n    background: -webkit-linear-gradient(rgb(226, 3, 3), rgb(219, 192, 192));\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n}\r\n\r\n.logo{\r\n    cursor: pointer;\r\n    font-family: 'Courgette', monospace;\r\n    color: #edf0f1;\r\n    transition: all 0.3s ease 0s;\r\n}\r\n.logo :hover{\r\n    background: -webkit-linear-gradient(rgb(226, 3, 3), rgb(219, 192, 192));\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n}\r\n  ul {\r\n    display: flex;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  /*----------------------NAV ENDS-----------------------------*/\r\n\r\n\r\n /* --------------------HEADLINE BEGINS--------------------------*/\r\n  .container{\r\n      display: flex;\r\n      color: #edf0f1 ;\r\n      width:100%;\r\n      align-items: center;\r\n      justify-content: center;\r\n      font-family: 'Courgette', cursive;\r\n      font-weight: 700;\r\n      padding-bottom: 360px;\r\n  }\r\n\r\n.heading{\r\n    text-align: center;\r\n}\r\n.container h1{\r\n    font-size: 72px;\r\n\r\n}\r\n.blood {\r\n    color:gold;\r\n    text-shadow:\r\n    4px 4px 1px #300000,\r\n    4px 6px 1px #400000,\r\n    4px 8px 1px #500000,\r\n    4px 10px 1px #600000,\r\n    4px 12px 1px #700000,\r\n    4px 14px 1px #800000,\r\n    4px 16px 1px #900000,\r\n    4px 18px 1px #A00000,\r\n    4px 20px 1px #B00000,\r\n    4px 22px 1px #C00000,\r\n    4px 24px 1px #D00000,\r\n    4px 26px 1px #E00000,\r\n    4px 28px 1px #F00000,\r\n    4px 30px 1px #FA0000,\r\n    4px 32px 1px #FB0000,\r\n    4px 34px 1px #FC0000,\r\n    4px 36px 1px #FD0000,\r\n    4px 38px 1px #FE0000,\r\n    4px 40px 2px #FF0000;\r\n}\r\n /* --------------------HEADLINE ENDS--------------------------*/\r\n\r\n\r\n /* --------------------FOOTER BEGINS--------------------------*/\r\n.footer{\r\n    display: flex;\r\n    color: yellow;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    width: 100%;\r\n    padding: 1rem;\r\n    border-top: 1px solid var(--border-color);\r\n    background-color: var(--background-light);\r\n    \r\n}\r\n.footer a{\r\n    text-decoration: none;\r\n    color: #e5e7eb;\r\n    font-size: 18px;\r\n}\r\n /* --------------------FOOTER ENDS--------------------------*/\r\n\r\n /* --------------------MENU BEGINS--------------------------*/\r\n .menu-container-flex{\r\n    display: none;\r\n    justify-content: center;\r\n    padding: 32px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    gap: 8px;\r\n }\r\n.menu{\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    flex-shrink: 1;\r\n    gap: 8px;\r\n}\r\n.card{\r\n    display: flex;\r\n    flex-direction: column;\r\n    border: white 2px solid;\r\n    border-radius: 0.5rem;\r\n    flex-wrap: nowrap;\r\n    height: inherit;\r\n    flex-direction: row;\r\n    justify-content: flex-start;\r\n    gap: 18px;\r\n    width: 800px;\r\n    background: rgba(34, 31, 31, 0.993);\r\n}\r\n.card > img{\r\n    border-radius: 1rem;\r\n}\r\n.menu-container{\r\n    display: flex;\r\n    color: #d36f6f;\r\n    padding: 8px;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    gap: 30px;\r\n}\r\n.dropdown{\r\n    background: none;\r\n    border:none\r\n}\r\n.dropdown-content {\r\n    display:none;\r\n  }\r\n\r\n\r\n.dropdown:hover .dropdown-content{\r\n    display: flex\r\n}\r\n\r\n /* --------------------MENU ENDS--------------------------*/\r\n\r\n /* --------------------ABOUT BEGINS--------------------------*/\r\n.about{\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    padding: 32px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    gap: 8px;\r\n    padding-bottom: 360px;\r\n\r\n}\r\nhr{\r\n    width: 80vw;\r\n    color: gold;\r\n}\r\n.about-header{\r\n    padding: 0px 16px;\r\n\r\n}\r\n.about-content{\r\n    display: flex;\r\n    justify-content: center;\r\n    padding: 16px;\r\n    border-radius: 1em;\r\n    background: rgb(48, 47, 47);\r\n}\r\n.email{\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 32px;\r\n    padding: 16px;\r\n\r\n\r\n}\r\n.phone{\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 32px;\r\n    padding: 16px;\r\n\r\n    \r\n}\r\n.about h1{\r\n    color: gold;\r\n    font-weight: 700;\r\n    font-size: 48px;\r\n}\r\n.about-content{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    color: #d36f6f;\r\n    \r\n}\r\n\r\n /* --------------------ABOUT BEGINS--------------------------*/\r\n\r\n /* --------------------MEDIA QUERIES BEGINS--------------------------*/\r\n  @media screen and (max-width: 600px) {\r\n    header{\r\n      justify-content: center;\r\n    }\r\n    body{\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n    .card{\r\n        width: 250px;\r\n        padding: 10px 15px;\r\n    }\r\n    .menu-container-flex{\r\n        display: none;\r\n    }\r\n\r\n\r\n    .dropdown-content{\r\n        display: flex;\r\n        font-size: 12px !important;\r\n    }\r\n    .nav_links li a{\r\n        list-style: none;\r\n        text-decoration: none;\r\n    }\r\n  }\r\n  \r\n\r\n  /* --------------------MEDIA QUERIES ENDS--------------------------*/\r\n"],"sourceRoot":""}]);
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
 

const menu = () =>{
    const content = document.querySelector('#content')
    const container = document.createElement('div')
    container.classList.add('menu-container-flex')
    container.style.display = 'none'
    for(let i = 0; i < _data_data_json__WEBPACK_IMPORTED_MODULE_0__.length; i++){
        const div = document.createElement('div')
        div.classList.add('menu')
        div.innerHTML = `
        <div class="card">
        <img src="${_data_data_json__WEBPACK_IMPORTED_MODULE_0__[i].src}" alt="Meal" style = 'height: 100px; width: 100px;'>
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

module.exports = JSON.parse('[{"name":"Ted Bundy","meal":"Medium Rare Steak, Eggs over easy, Toast, Milk and Coffee","description":"Ted Bundy refused to make a special request so he was given the standard.","additional info":"Ted Bundy was a serial killer","src":"../src/assets/bundy.png"},{"name":"John Wayne Gacy","meal":"12 fried shrimp, a bucket of KFC fried chicken, french fries and a pound of strawberries.","description":"John Wayne Gacy used to be a manager at KFC so his request does not come as a surprise","additional info":"John Wayne Gacy was known as the clown killer because he often dressed like a clown while carrying out his devious acts","src":"../src/assets/gacy.png"},{"name":"Timothy McVeigh","meal":"Two Pints of Mint Chocolate Chip Ice Cream","description":"Timothy McVeigh was an american terrorist who killed 168 people with a bomb","additional info":"He was responsible for the deadliest act of terrorism in the US prior to 911.","src":"../src/assets/tim.png"},{"name":"Karla Faye Tucker","meal":"Salad with a peach and a banana","description":"Tucker murdered two men with a pickaxe","additional info":"She was a born again Christian who married a minister","src":"../src/assets/karla.png"},{"name":"Jeffrey Epstein","meal":"Vending Machine Snacks","description":"Epstein spent his last days paying other prisoners commisary and emptying out vending machines","additional info":"A lot of controversy surrounding his death","src":"../src/assets/jeff.jpg"},{"name":"Al Capone","meal":"Spaghetti with Walnut sauce","description":"Al Capone was a notorious mafia cappo who spent his last days in Alcatraz","additional info":"Died via syphilis because at the time there was no cure for it","src":"../src/assets/al.jpg"}]');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsZUFBZSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsS0FBSyxjQUFjLGFBQWEsTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsdUJBQXVCLFFBQVEsTUFBTSxjQUFjLGFBQWEsTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksY0FBYyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxhQUFhLGFBQWEsTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssVUFBVSxPQUFPLEtBQUssS0FBSyxNQUFNLGFBQWEsYUFBYSxNQUFNLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsWUFBWSxPQUFPLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsUUFBUSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sT0FBTyxvS0FBb0ssbWlCQUFtaUIsZ0JBQWdCLGlCQUFpQixnQkFBZ0Isc0JBQXNCLG9CQUFvQiwrQkFBK0IsS0FBSyxTQUFTLHlCQUF5QixLQUFLLGNBQWMseUJBQXlCLE9BQU8scUJBQXFCLHFCQUFxQixPQUFPLG1FQUFtRSxvQkFBb0Isc0JBQXNCLE9BQU8sYUFBYSw4QkFBOEIsS0FBSyxTQUFTLDhEQUE4RCwrQkFBK0IscUNBQXFDLDJDQUEyQyxLQUFLLGFBQWEsc0JBQXNCLCtCQUErQix1Q0FBdUMsMENBQTBDLDRCQUE0QixzQkFBc0IsNEJBQTRCLFNBQVMsa0JBQWtCLDRDQUE0Qyw4QkFBOEIsd0JBQXdCLHlCQUF5Qix1QkFBdUIsS0FBSyxxRkFBcUYsc0JBQXNCLHNDQUFzQyw0QkFBNEIseUJBQXlCLGtCQUFrQixLQUFLLGVBQWUseUJBQXlCLEtBQUssa0JBQWtCLDhCQUE4QiwwQkFBMEIsOEJBQThCLGFBQWEsb0JBQW9CLHlCQUF5Qiw4QkFBOEIscUNBQXFDLEtBQUssMEJBQTBCLGdGQUFnRixzQ0FBc0MsNkNBQTZDLEtBQUssY0FBYyx3QkFBd0IsNENBQTRDLHVCQUF1QixxQ0FBcUMsS0FBSyxpQkFBaUIsZ0ZBQWdGLHNDQUFzQyw2Q0FBNkMsS0FBSyxVQUFVLHNCQUFzQixrQkFBa0IsbUJBQW1CLE9BQU8scUtBQXFLLHdCQUF3QiwwQkFBMEIscUJBQXFCLDhCQUE4QixrQ0FBa0MsNENBQTRDLDJCQUEyQixnQ0FBZ0MsT0FBTyxpQkFBaUIsMkJBQTJCLEtBQUssa0JBQWtCLHdCQUF3QixTQUFTLFlBQVksbUJBQW1CLHdqQkFBd2pCLEtBQUssOEpBQThKLHNCQUFzQixzQkFBc0IsZ0NBQWdDLDRCQUE0QixrQkFBa0Isb0JBQW9CLHNCQUFzQixrREFBa0Qsa0RBQWtELGFBQWEsY0FBYyw4QkFBOEIsdUJBQXVCLHdCQUF3QixLQUFLLG9LQUFvSyxzQkFBc0IsZ0NBQWdDLHNCQUFzQixzQkFBc0Isd0JBQXdCLGlCQUFpQixNQUFNLFVBQVUsc0JBQXNCLDRCQUE0Qix3QkFBd0IsZ0NBQWdDLHVCQUF1QixpQkFBaUIsS0FBSyxVQUFVLHNCQUFzQiwrQkFBK0IsZ0NBQWdDLDhCQUE4QiwwQkFBMEIsd0JBQXdCLDRCQUE0QixvQ0FBb0Msa0JBQWtCLHFCQUFxQiw0Q0FBNEMsS0FBSyxnQkFBZ0IsNEJBQTRCLEtBQUssb0JBQW9CLHNCQUFzQix1QkFBdUIscUJBQXFCLCtCQUErQixnQ0FBZ0Msa0JBQWtCLEtBQUssY0FBYyx5QkFBeUIsd0JBQXdCLHVCQUF1QixxQkFBcUIsT0FBTyw4Q0FBOEMsMEJBQTBCLHdKQUF3SiwrQkFBK0IsZ0NBQWdDLHNCQUFzQixzQkFBc0Isd0JBQXdCLGlCQUFpQiw4QkFBOEIsU0FBUyxPQUFPLG9CQUFvQixvQkFBb0IsS0FBSyxrQkFBa0IsMEJBQTBCLFNBQVMsbUJBQW1CLHNCQUFzQixnQ0FBZ0Msc0JBQXNCLDJCQUEyQixvQ0FBb0MsS0FBSyxXQUFXLHNCQUFzQiw0QkFBNEIsa0JBQWtCLHNCQUFzQixhQUFhLFdBQVcsc0JBQXNCLDRCQUE0QixrQkFBa0Isc0JBQXNCLGlCQUFpQixjQUFjLG9CQUFvQix5QkFBeUIsd0JBQXdCLEtBQUssbUJBQW1CLHNCQUFzQiwrQkFBK0IsZ0NBQWdDLHVCQUF1QixhQUFhLG9NQUFvTSxlQUFlLGtDQUFrQyxTQUFTLGFBQWEsc0JBQXNCLHVCQUF1QixTQUFTLGNBQWMseUJBQXlCLCtCQUErQixTQUFTLDZCQUE2QiwwQkFBMEIsU0FBUyxrQ0FBa0MsMEJBQTBCLHVDQUF1QyxTQUFTLHdCQUF3Qiw2QkFBNkIsa0NBQWtDLFNBQVMsT0FBTyw0R0FBNEc7QUFDaGhpQjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1gxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0RBQW9EOztBQUVwRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUM1QmE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDWHFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDYm9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixJQUFJLG1EQUFXLEVBQUU7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNENBQUksUUFBUSxxQ0FBcUMsYUFBYTtBQUNsRjtBQUNBLHVCQUF1Qiw0Q0FBSSxTQUFTO0FBQ3BDLGVBQWUsNENBQUksU0FBUztBQUM1QjtBQUNBO0FBQ0EsOENBQThDLDRDQUFJLGdCQUFnQjtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQnFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3BCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCMEM7QUFDSTtBQUNKO0FBQ0o7QUFDRTtBQUN4QztBQUNBLElBQUksdURBQU07QUFDVixJQUFJLDJEQUFRO0FBQ1osSUFBSSxtREFBSTtBQUNSLElBQUksc0RBQUs7QUFDVCxJQUFJLHVEQUFNO0FBQ1YsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixtQ0FBbUM7QUFDbkMsb0NBQW9DO0FBQ3BDLHlDQUF5QztBQUN6QztBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL1Jlc3RhdXJhbnQvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL1Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL1Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL1Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9SZXN0YXVyYW50Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL1Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vUmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vUmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9SZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL1Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9SZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vUmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL2Fib3V0LmpzIiwid2VicGFjazovL1Jlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vUmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL2hlYWRsaW5lLmpzIiwid2VicGFjazovL1Jlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy9tZW51LmpzIiwid2VicGFjazovL1Jlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vUmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9SZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL1Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL1Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9SZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vUmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL1Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vUmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9SZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvYXNzZXRzL2JhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Db3VyZ2V0dGUmZmFtaWx5PUpldEJyYWlucytNb25vOml0YWwsd2dodEAxLDMwMCZmYW1pbHk9TG9ic3RlciZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogQ1NTIFJFU0VUICovXFxyXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcclxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXHJcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxyXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcclxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxyXFxuYiwgdSwgaSwgY2VudGVyLFxcclxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxyXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxyXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXFxyXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxcclxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcclxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgZm9udC1zaXplOiAxMDAlO1xcclxcbiAgZm9udDogaW5oZXJpdDtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuaHRtbHtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcXHJcXG59XFxyXFxuICBvbCwgdWwge1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgfVxcclxcbiAgYmxvY2txdW90ZSwgcSB7XFxyXFxuICAgIHF1b3Rlczogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIGJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcclxcbiAgcTpiZWZvcmUsIHE6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiAnJztcXHJcXG4gICAgY29udGVudDogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG5saSBhe1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcbmJvZHl7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxyXFxufVxcclxcbiNjb250ZW50e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmdldHRlJywgY3Vyc2l2ZTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuOyBcXHJcXG5cXHJcXG59XFxyXFxubGksIGEsIGJ1dHRvbntcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyZ2V0dGUnLCBtb25vc3BhY2U7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBjb2xvcjogI2VkZjBmMTtcXHJcXG59XFxyXFxuXFxyXFxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLU5BViBCRUdJTlMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxyXFxuaGVhZGVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMThweCA1JTtcXHJcXG4gICAgZ2FwOiA1MHB4O1xcclxcbn1cXHJcXG4ubmF2X2xpbmtze1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG4ubmF2X2xpbmtzIGxpe1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuXFxyXFxuXFxyXFxufVxcclxcbi5uYXZfbGlua3MgbGkgYXtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xcclxcbn1cXHJcXG4ubmF2X2xpbmtzIGxpIGE6aG92ZXJ7XFxyXFxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHJnYigyMjYsIDMsIDMpLCByZ2IoMjE5LCAxOTIsIDE5MikpO1xcclxcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXHJcXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nb3tcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmb250LWZhbWlseTogJ0NvdXJnZXR0ZScsIG1vbm9zcGFjZTtcXHJcXG4gICAgY29sb3I6ICNlZGYwZjE7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XFxyXFxufVxcclxcbi5sb2dvIDpob3ZlcntcXHJcXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQocmdiKDIyNiwgMywgMyksIHJnYigyMTksIDE5MiwgMTkyKSk7XFxyXFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcclxcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcbiAgdWwge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICB9XFxyXFxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS1OQVYgRU5EUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5cXHJcXG5cXHJcXG4gLyogLS0tLS0tLS0tLS0tLS0tLS0tLS1IRUFETElORSBCRUdJTlMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuICAuY29udGFpbmVye1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgY29sb3I6ICNlZGYwZjEgO1xcclxcbiAgICAgIHdpZHRoOjEwMCU7XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICBmb250LWZhbWlseTogJ0NvdXJnZXR0ZScsIGN1cnNpdmU7XFxyXFxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMzYwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuLmhlYWRpbmd7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLmNvbnRhaW5lciBoMXtcXHJcXG4gICAgZm9udC1zaXplOiA3MnB4O1xcclxcblxcclxcbn1cXHJcXG4uYmxvb2Qge1xcclxcbiAgICBjb2xvcjpnb2xkO1xcclxcbiAgICB0ZXh0LXNoYWRvdzpcXHJcXG4gICAgNHB4IDRweCAxcHggIzMwMDAwMCxcXHJcXG4gICAgNHB4IDZweCAxcHggIzQwMDAwMCxcXHJcXG4gICAgNHB4IDhweCAxcHggIzUwMDAwMCxcXHJcXG4gICAgNHB4IDEwcHggMXB4ICM2MDAwMDAsXFxyXFxuICAgIDRweCAxMnB4IDFweCAjNzAwMDAwLFxcclxcbiAgICA0cHggMTRweCAxcHggIzgwMDAwMCxcXHJcXG4gICAgNHB4IDE2cHggMXB4ICM5MDAwMDAsXFxyXFxuICAgIDRweCAxOHB4IDFweCAjQTAwMDAwLFxcclxcbiAgICA0cHggMjBweCAxcHggI0IwMDAwMCxcXHJcXG4gICAgNHB4IDIycHggMXB4ICNDMDAwMDAsXFxyXFxuICAgIDRweCAyNHB4IDFweCAjRDAwMDAwLFxcclxcbiAgICA0cHggMjZweCAxcHggI0UwMDAwMCxcXHJcXG4gICAgNHB4IDI4cHggMXB4ICNGMDAwMDAsXFxyXFxuICAgIDRweCAzMHB4IDFweCAjRkEwMDAwLFxcclxcbiAgICA0cHggMzJweCAxcHggI0ZCMDAwMCxcXHJcXG4gICAgNHB4IDM0cHggMXB4ICNGQzAwMDAsXFxyXFxuICAgIDRweCAzNnB4IDFweCAjRkQwMDAwLFxcclxcbiAgICA0cHggMzhweCAxcHggI0ZFMDAwMCxcXHJcXG4gICAgNHB4IDQwcHggMnB4ICNGRjAwMDA7XFxyXFxufVxcclxcbiAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLUhFQURMSU5FIEVORFMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuXFxyXFxuXFxyXFxuIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tRk9PVEVSIEJFR0lOUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG4uZm9vdGVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBjb2xvcjogeWVsbG93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbGlnaHQpO1xcclxcbiAgICBcXHJcXG59XFxyXFxuLmZvb3RlciBhe1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbG9yOiAjZTVlN2ViO1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxufVxcclxcbiAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLUZPT1RFUiBFTkRTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcbiAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLU1FTlUgQkVHSU5TLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcbiAubWVudS1jb250YWluZXItZmxleHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDMycHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgZ2FwOiA4cHg7XFxyXFxuIH1cXHJcXG4ubWVudXtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZmxleC1zaHJpbms6IDE7XFxyXFxuICAgIGdhcDogOHB4O1xcclxcbn1cXHJcXG4uY2FyZHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYm9yZGVyOiB3aGl0ZSAycHggc29saWQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxuICAgIGhlaWdodDogaW5oZXJpdDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBnYXA6IDE4cHg7XFxyXFxuICAgIHdpZHRoOiA4MDBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgzNCwgMzEsIDMxLCAwLjk5Myk7XFxyXFxufVxcclxcbi5jYXJkID4gaW1ne1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbn1cXHJcXG4ubWVudS1jb250YWluZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGNvbG9yOiAjZDM2ZjZmO1xcclxcbiAgICBwYWRkaW5nOiA4cHg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDMwcHg7XFxyXFxufVxcclxcbi5kcm9wZG93bntcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgYm9yZGVyOm5vbmVcXHJcXG59XFxyXFxuLmRyb3Bkb3duLWNvbnRlbnQge1xcclxcbiAgICBkaXNwbGF5Om5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4XFxyXFxufVxcclxcblxcclxcbiAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLU1FTlUgRU5EUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5cXHJcXG4gLyogLS0tLS0tLS0tLS0tLS0tLS0tLS1BQk9VVCBCRUdJTlMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuLmFib3V0e1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMzJweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBnYXA6IDhweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDM2MHB4O1xcclxcblxcclxcbn1cXHJcXG5ocntcXHJcXG4gICAgd2lkdGg6IDgwdnc7XFxyXFxuICAgIGNvbG9yOiBnb2xkO1xcclxcbn1cXHJcXG4uYWJvdXQtaGVhZGVye1xcclxcbiAgICBwYWRkaW5nOiAwcHggMTZweDtcXHJcXG5cXHJcXG59XFxyXFxuLmFib3V0LWNvbnRlbnR7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAxNnB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxZW07XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYig0OCwgNDcsIDQ3KTtcXHJcXG59XFxyXFxuLmVtYWlse1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBnYXA6IDMycHg7XFxyXFxuICAgIHBhZGRpbmc6IDE2cHg7XFxyXFxuXFxyXFxuXFxyXFxufVxcclxcbi5waG9uZXtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgZ2FwOiAzMnB4O1xcclxcbiAgICBwYWRkaW5nOiAxNnB4O1xcclxcblxcclxcbiAgICBcXHJcXG59XFxyXFxuLmFib3V0IGgxe1xcclxcbiAgICBjb2xvcjogZ29sZDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcclxcbn1cXHJcXG4uYWJvdXQtY29udGVudHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiAjZDM2ZjZmO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tQUJPVVQgQkVHSU5TLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcbiAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLU1FRElBIFFVRVJJRVMgQkVHSU5TLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXHJcXG4gICAgaGVhZGVye1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuICAgIGJvZHl7XFxyXFxuICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICB9XFxyXFxuICAgIC5jYXJke1xcclxcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xcclxcbiAgICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5tZW51LWNvbnRhaW5lci1mbGV4e1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbiAgICAuZHJvcGRvd24tY29udGVudHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcXHJcXG4gICAgfVxcclxcbiAgICAubmF2X2xpbmtzIGxpIGF7XFxyXFxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICBcXHJcXG5cXHJcXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tTUVESUEgUVVFUklFUyBFTkRTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQW9JLGNBQWM7QUFDbEo7Ozs7Ozs7Ozs7Ozs7RUFhRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLFNBQVM7RUFDVCxlQUFlO0VBQ2YsYUFBYTtFQUNiLHdCQUF3QjtBQUMxQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLFlBQVk7RUFDZDtFQUNBOztJQUVFLFdBQVc7SUFDWCxhQUFhO0VBQ2Y7O0FBRUY7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLHlEQUFxRDtJQUNyRCxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLGtDQUFrQztBQUN0QztBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsaUNBQWlDO0lBQ2pDLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isa0JBQWtCOztBQUV0QjtBQUNBO0lBQ0ksbUNBQW1DO0lBQ25DLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0VBRUUsK0RBQStEO0FBQ2pFO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFNBQVM7QUFDYjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLHFCQUFxQjs7O0FBR3pCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksdUVBQXVFO0lBQ3ZFLDZCQUE2QjtJQUM3QixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUNBQW1DO0lBQ25DLGNBQWM7SUFDZCw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLHVFQUF1RTtJQUN2RSw2QkFBNkI7SUFDN0Isb0NBQW9DO0FBQ3hDO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsU0FBUztJQUNULFVBQVU7RUFDWjtFQUNBLDhEQUE4RDs7O0NBRy9ELGlFQUFpRTtFQUNoRTtNQUNJLGFBQWE7TUFDYixlQUFlO01BQ2YsVUFBVTtNQUNWLG1CQUFtQjtNQUNuQix1QkFBdUI7TUFDdkIsaUNBQWlDO01BQ2pDLGdCQUFnQjtNQUNoQixxQkFBcUI7RUFDekI7O0FBRUY7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7O0FBRW5CO0FBQ0E7SUFDSSxVQUFVO0lBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBbUJvQjtBQUN4QjtDQUNDLCtEQUErRDs7O0NBRy9ELCtEQUErRDtBQUNoRTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsV0FBVztJQUNYLGFBQWE7SUFDYix5Q0FBeUM7SUFDekMseUNBQXlDOztBQUU3QztBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxlQUFlO0FBQ25CO0NBQ0MsNkRBQTZEOztDQUU3RCw2REFBNkQ7Q0FDN0Q7SUFDRyxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixhQUFhO0lBQ2IsZUFBZTtJQUNmLFFBQVE7Q0FDWDtBQUNEO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxRQUFRO0FBQ1o7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsU0FBUztJQUNULFlBQVk7SUFDWixtQ0FBbUM7QUFDdkM7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixTQUFTO0FBQ2I7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQjtBQUNKO0FBQ0E7SUFDSSxZQUFZO0VBQ2Q7OztBQUdGO0lBQ0k7QUFDSjs7Q0FFQywyREFBMkQ7O0NBRTNELDhEQUE4RDtBQUMvRDtJQUNJLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGFBQWE7SUFDYixlQUFlO0lBQ2YsUUFBUTtJQUNSLHFCQUFxQjs7QUFFekI7QUFDQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGlCQUFpQjs7QUFFckI7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztJQUNULGFBQWE7OztBQUdqQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsYUFBYTs7O0FBR2pCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGNBQWM7O0FBRWxCOztDQUVDLDhEQUE4RDs7Q0FFOUQsc0VBQXNFO0VBQ3JFO0lBQ0U7TUFDRSx1QkFBdUI7SUFDekI7SUFDQTtRQUNJLFNBQVM7UUFDVCxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFlBQVk7UUFDWixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGFBQWE7SUFDakI7OztJQUdBO1FBQ0ksYUFBYTtRQUNiLDBCQUEwQjtJQUM5QjtJQUNBO1FBQ0ksZ0JBQWdCO1FBQ2hCLHFCQUFxQjtJQUN6QjtFQUNGOzs7RUFHQSxvRUFBb0VcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q291cmdldHRlJmZhbWlseT1KZXRCcmFpbnMrTW9ubzppdGFsLHdnaHRAMSwzMDAmZmFtaWx5PUxvYnN0ZXImZGlzcGxheT1zd2FwJyk7LyogQ1NTIFJFU0VUICovXFxyXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcclxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXHJcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxyXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcclxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxyXFxuYiwgdSwgaSwgY2VudGVyLFxcclxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxyXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxyXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXFxyXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxcclxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcclxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgZm9udC1zaXplOiAxMDAlO1xcclxcbiAgZm9udDogaW5oZXJpdDtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuaHRtbHtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcXHJcXG59XFxyXFxuICBvbCwgdWwge1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgfVxcclxcbiAgYmxvY2txdW90ZSwgcSB7XFxyXFxuICAgIHF1b3Rlczogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIGJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcclxcbiAgcTpiZWZvcmUsIHE6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiAnJztcXHJcXG4gICAgY29udGVudDogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG5saSBhe1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcbmJvZHl7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vc3JjL2Fzc2V0cy9iYWNrZ3JvdW5kLmpwZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcclxcbn1cXHJcXG4jY29udGVudHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBmb250LWZhbWlseTogJ0NvdXJnZXR0ZScsIGN1cnNpdmU7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjsgXFxyXFxuXFxyXFxufVxcclxcbmxpLCBhLCBidXR0b257XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmdldHRlJywgbW9ub3NwYWNlO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgY29sb3I6ICNlZGYwZjE7XFxyXFxufVxcclxcblxcclxcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS1OQVYgQkVHSU5TLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcclxcbmhlYWRlcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDE4cHggNSU7XFxyXFxuICAgIGdhcDogNTBweDtcXHJcXG59XFxyXFxuLm5hdl9saW5rc3tcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuLm5hdl9saW5rcyBsaXtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcblxcclxcblxcclxcbn1cXHJcXG4ubmF2X2xpbmtzIGxpIGF7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcXHJcXG59XFxyXFxuLm5hdl9saW5rcyBsaSBhOmhvdmVye1xcclxcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChyZ2IoMjI2LCAzLCAzKSwgcmdiKDIxOSwgMTkyLCAxOTIpKTtcXHJcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxyXFxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ297XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyZ2V0dGUnLCBtb25vc3BhY2U7XFxyXFxuICAgIGNvbG9yOiAjZWRmMGYxO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xcclxcbn1cXHJcXG4ubG9nbyA6aG92ZXJ7XFxyXFxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHJnYigyMjYsIDMsIDMpLCByZ2IoMjE5LCAxOTIsIDE5MikpO1xcclxcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXHJcXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG4gIHVsIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgfVxcclxcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tTkFWIEVORFMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuXFxyXFxuXFxyXFxuIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tSEVBRExJTkUgQkVHSU5TLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcbiAgLmNvbnRhaW5lcntcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGNvbG9yOiAjZWRmMGYxIDtcXHJcXG4gICAgICB3aWR0aDoxMDAlO1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgZm9udC1mYW1pbHk6ICdDb3VyZ2V0dGUnLCBjdXJzaXZlO1xcclxcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgICAgcGFkZGluZy1ib3R0b206IDM2MHB4O1xcclxcbiAgfVxcclxcblxcclxcbi5oZWFkaW5ne1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5jb250YWluZXIgaDF7XFxyXFxuICAgIGZvbnQtc2l6ZTogNzJweDtcXHJcXG5cXHJcXG59XFxyXFxuLmJsb29kIHtcXHJcXG4gICAgY29sb3I6Z29sZDtcXHJcXG4gICAgdGV4dC1zaGFkb3c6XFxyXFxuICAgIDRweCA0cHggMXB4ICMzMDAwMDAsXFxyXFxuICAgIDRweCA2cHggMXB4ICM0MDAwMDAsXFxyXFxuICAgIDRweCA4cHggMXB4ICM1MDAwMDAsXFxyXFxuICAgIDRweCAxMHB4IDFweCAjNjAwMDAwLFxcclxcbiAgICA0cHggMTJweCAxcHggIzcwMDAwMCxcXHJcXG4gICAgNHB4IDE0cHggMXB4ICM4MDAwMDAsXFxyXFxuICAgIDRweCAxNnB4IDFweCAjOTAwMDAwLFxcclxcbiAgICA0cHggMThweCAxcHggI0EwMDAwMCxcXHJcXG4gICAgNHB4IDIwcHggMXB4ICNCMDAwMDAsXFxyXFxuICAgIDRweCAyMnB4IDFweCAjQzAwMDAwLFxcclxcbiAgICA0cHggMjRweCAxcHggI0QwMDAwMCxcXHJcXG4gICAgNHB4IDI2cHggMXB4ICNFMDAwMDAsXFxyXFxuICAgIDRweCAyOHB4IDFweCAjRjAwMDAwLFxcclxcbiAgICA0cHggMzBweCAxcHggI0ZBMDAwMCxcXHJcXG4gICAgNHB4IDMycHggMXB4ICNGQjAwMDAsXFxyXFxuICAgIDRweCAzNHB4IDFweCAjRkMwMDAwLFxcclxcbiAgICA0cHggMzZweCAxcHggI0ZEMDAwMCxcXHJcXG4gICAgNHB4IDM4cHggMXB4ICNGRTAwMDAsXFxyXFxuICAgIDRweCA0MHB4IDJweCAjRkYwMDAwO1xcclxcbn1cXHJcXG4gLyogLS0tLS0tLS0tLS0tLS0tLS0tLS1IRUFETElORSBFTkRTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcblxcclxcbiAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLUZPT1RFUiBCRUdJTlMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuLmZvb3RlcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgY29sb3I6IHllbGxvdztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcXHJcXG4gICAgXFxyXFxufVxcclxcbi5mb290ZXIgYXtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjb2xvcjogI2U1ZTdlYjtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbn1cXHJcXG4gLyogLS0tLS0tLS0tLS0tLS0tLS0tLS1GT09URVIgRU5EUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5cXHJcXG4gLyogLS0tLS0tLS0tLS0tLS0tLS0tLS1NRU5VIEJFR0lOUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG4gLm1lbnUtY29udGFpbmVyLWZsZXh7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAzMnB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGdhcDogOHB4O1xcclxcbiB9XFxyXFxuLm1lbnV7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtc2hyaW5rOiAxO1xcclxcbiAgICBnYXA6IDhweDtcXHJcXG59XFxyXFxuLmNhcmR7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGJvcmRlcjogd2hpdGUgMnB4IHNvbGlkO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xcclxcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgZ2FwOiAxOHB4O1xcclxcbiAgICB3aWR0aDogODAwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMzQsIDMxLCAzMSwgMC45OTMpO1xcclxcbn1cXHJcXG4uY2FyZCA+IGltZ3tcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG59XFxyXFxuLm1lbnUtY29udGFpbmVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBjb2xvcjogI2QzNmY2ZjtcXHJcXG4gICAgcGFkZGluZzogOHB4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAzMHB4O1xcclxcbn1cXHJcXG4uZHJvcGRvd257XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjpub25lXFxyXFxufVxcclxcbi5kcm9wZG93bi1jb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTpub25lO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbi5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudHtcXHJcXG4gICAgZGlzcGxheTogZmxleFxcclxcbn1cXHJcXG5cXHJcXG4gLyogLS0tLS0tLS0tLS0tLS0tLS0tLS1NRU5VIEVORFMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuXFxyXFxuIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tQUJPVVQgQkVHSU5TLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcbi5hYm91dHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDMycHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgZ2FwOiA4cHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAzNjBweDtcXHJcXG5cXHJcXG59XFxyXFxuaHJ7XFxyXFxuICAgIHdpZHRoOiA4MHZ3O1xcclxcbiAgICBjb2xvcjogZ29sZDtcXHJcXG59XFxyXFxuLmFib3V0LWhlYWRlcntcXHJcXG4gICAgcGFkZGluZzogMHB4IDE2cHg7XFxyXFxuXFxyXFxufVxcclxcbi5hYm91dC1jb250ZW50e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMTZweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNDgsIDQ3LCA0Nyk7XFxyXFxufVxcclxcbi5lbWFpbHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgZ2FwOiAzMnB4O1xcclxcbiAgICBwYWRkaW5nOiAxNnB4O1xcclxcblxcclxcblxcclxcbn1cXHJcXG4ucGhvbmV7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGdhcDogMzJweDtcXHJcXG4gICAgcGFkZGluZzogMTZweDtcXHJcXG5cXHJcXG4gICAgXFxyXFxufVxcclxcbi5hYm91dCBoMXtcXHJcXG4gICAgY29sb3I6IGdvbGQ7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXHJcXG59XFxyXFxuLmFib3V0LWNvbnRlbnR7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBjb2xvcjogI2QzNmY2ZjtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbiAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLUFCT1VUIEJFR0lOUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5cXHJcXG4gLyogLS0tLS0tLS0tLS0tLS0tLS0tLS1NRURJQSBRVUVSSUVTIEJFR0lOUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxyXFxuICAgIGhlYWRlcntcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgICBib2R5e1xcclxcbiAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgfVxcclxcbiAgICAuY2FyZHtcXHJcXG4gICAgICAgIHdpZHRoOiAyNTBweDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcXHJcXG4gICAgfVxcclxcbiAgICAubWVudS1jb250YWluZXItZmxleHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgLmRyb3Bkb3duLWNvbnRlbnR7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XFxyXFxuICAgIH1cXHJcXG4gICAgLm5hdl9saW5rcyBsaSBhe1xcclxcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgXFxyXFxuXFxyXFxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLU1FRElBIFFVRVJJRVMgRU5EUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXHJcbmNvbnN0IGFib3V0ID0gKCkgPT57XHJcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpXHJcbmNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbmRpdi5jbGFzc0xpc3QuYWRkKFwiYWJvdXRcIilcclxuZGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuXHJcbmRpdi5pbm5lckhUTUwgPSBgXHJcbiAgICA8ZGl2IGNsYXNzID0gXCJhYm91dC1oZWFkZXJcIj5cclxuICAgIDxoMT5BYm91dDwvaDE+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3MgPSBcImFib3V0LWNvbnRlbnRcIj5cclxuICAgIFdoYXQgV2UgRG86IEF0IExhc3QgTWVhbCB3ZSBzZXJ2ZSB0aGUgbGFzdCBtZWFscyBvZiB0aGUgbW9zdCBub3RvcmlvdXMgaHVtYW4gXFxuXHJcbiAgICBiZWluZ3MuIENvbWUgYnkgYW5kIGdpdmUgdXMgYSB0cnkhXHJcbiAgICA8aHIvPlxyXG4gICAgICAgIDxkaXYgY2xhc3MgPSBcInBob25lXCI+XHJcbiAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBjbGFzcz1cImJpIGJpLXRlbGVwaG9uZS1maWxsXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMS44ODUuNTExYTEuNzQ1IDEuNzQ1IDAgMCAxIDIuNjEuMTYzTDYuMjkgMi45OGMuMzI5LjQyMy40NDUuOTc0LjMxNSAxLjQ5NGwtLjU0NyAyLjE5YS42NzguNjc4IDAgMCAwIC4xNzguNjQzbDIuNDU3IDIuNDU3YS42NzguNjc4IDAgMCAwIC42NDQuMTc4bDIuMTg5LS41NDdhMS43NDUgMS43NDUgMCAwIDEgMS40OTQuMzE1bDIuMzA2IDEuNzk0Yy44MjkuNjQ1LjkwNSAxLjg3LjE2MyAyLjYxMWwtMS4wMzQgMS4wMzRjLS43NC43NC0xLjg0NiAxLjA2NS0yLjg3Ny43MDJhMTguNjM0IDE4LjYzNCAwIDAgMS03LjAxLTQuNDIgMTguNjM0IDE4LjYzNCAwIDAgMS00LjQyLTcuMDA5Yy0uMzYyLTEuMDMtLjAzNy0yLjEzNy43MDMtMi44NzdMMS44ODUuNTExelwiLz5cclxuICAgICAgICAgICAgPC9zdmc+IFxyXG4gICAgICAgICAgICA8cD4oNjUwKTEyMy00NTY3PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3MgPSBcImVtYWlsXCI+XHJcbiAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBjbGFzcz1cImJpIGJpLWVudmVsb3BlLWZpbGxcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTS4wNSAzLjU1NUEyIDIgMCAwIDEgMiAyaDEyYTIgMiAwIDAgMSAxLjk1IDEuNTU1TDggOC40MTQuMDUgMy41NTVaTTAgNC42OTd2Ny4xMDRsNS44MDMtMy41NThMMCA0LjY5N1pNNi43NjEgOC44M2wtNi41NyA0LjAyN0EyIDIgMCAwIDAgMiAxNGgxMmEyIDIgMCAwIDAgMS44MDgtMS4xNDRsLTYuNTctNC4wMjdMOCA5LjU4NmwtMS4yMzktLjc1N1ptMy40MzYtLjU4NkwxNiAxMS44MDFWNC42OTdsLTUuODAzIDMuNTQ2WlwiLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPHA+YmxhbGFsYWxhQHlhaG9vLmNvbTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxuYFxyXG5jb250ZW50LmFwcGVuZENoaWxkKGRpdilcclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQge2Fib3V0fSIsImltcG9ydCAnLi4vc3R5bGUuY3NzJ1xyXG5cclxuY29uc3QgZm9vdGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxyXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpXHJcbiAgICBkaXYuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxwPkNvcHlyaWdodCAmIzE2OTsgMjAyMSA8YSB0YXJnZXQ9XCJibGFua1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcnNpbmdoOTU0XCI+Z2l0aHViLmNvbS9yc2luZ2g5NTQ8L2E+PC9wPlxyXG4gICAgYFxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChkaXYpXHJcbn1cclxuXHJcbmV4cG9ydCB7Zm9vdGVyfSIsImltcG9ydCAnLi4vc3R5bGUuY3NzJ1xyXG5cclxuY29uc3QgaGVhZGxpbmUgPSAoKSA9PntcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpXHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpXHJcbiAgICBkaXYuaW5uZXJIVE1MID0gYFxyXG4gICAgPGRpdiBjbGFzcyA9IFwiaGVhZGluZ1wiPiBcclxuICAgICAgICA8aDEgY2xhc3MgPSBcImJsb29kXCI+IENvbWUgYW5kIGVhdCB5b3VyIDxzdHJvbmc+IGxhc3QgbWVhbDwvc3Ryb25nPjwvaDE+XHJcbiAgICA8L2Rpdj5cclxuICAgIGBcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2KVxyXG59XHJcblxyXG5leHBvcnQge2hlYWRsaW5lfSIsImltcG9ydCBkYXRhIGZyb20gJy4uL2RhdGEvZGF0YS5qc29uJyBcclxuXHJcbmNvbnN0IG1lbnUgPSAoKSA9PntcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpXHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtY29udGFpbmVyLWZsZXgnKVxyXG4gICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdtZW51JylcclxuICAgICAgICBkaXYuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCIke2RhdGFbaV0uc3JjfVwiIGFsdD1cIk1lYWxcIiBzdHlsZSA9ICdoZWlnaHQ6IDEwMHB4OyB3aWR0aDogMTAwcHg7Jz5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxoND48Yj5UaGUgJHtkYXRhW2ldLm5hbWV9PC9iPjwvaDQ+XHJcbiAgICAgICAgICA8cD4ke2RhdGFbaV0ubWVhbH08L3A+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJkcm9wZG93blwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzID0gXCJkcm9wZG93blwiPkFkZGl0aW9uYWwgSW5mbyA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiZHJvcGRvd24tY29udGVudFwiPiR7ZGF0YVtpXS5kZXNjcmlwdGlvbn08L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj4gXHJcbiAgICAgICAgYFxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpXHJcbiAgICB9XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcikgIFxyXG59XHJcblxyXG5leHBvcnQge21lbnV9IiwiaW1wb3J0ICcuLi9zdHlsZS5jc3MnXHJcblxyXG5cclxuY29uc3QgbmF2YmFyID0gKCkgPT57XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpXHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxyXG5cclxuXHJcbiAgICBuYXYuaW5uZXJIVE1MID0gYFxyXG4gICAgPHVsIGNsYXNzID0gJ25hdl9saW5rcyc+XHJcbiAgICAgICAgPGxpPjxhIGhyZWYgPVwiI1wiPkxhc3QgTWVhbHM8L2E+PC9saT5cclxuICAgICAgICA8bGk+PGEgaHJlZiA9XCIjXCI+TWVudTwvYT48L2xpPlxyXG4gICAgICAgIDxsaT48YSBocmVmID1cIiNcIj5BYm91dDwvYT48L2xpPlxyXG4gICAgPC91bD5cclxuICAgIGBcclxuICAgIFxyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdilcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKVxyXG59XHJcblxyXG5leHBvcnQge25hdmJhcn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCB7IG5hdmJhciB9IGZyb20gXCIuL21vZHVsZXMvbmF2YmFyXCI7XHJcbmltcG9ydCB7IGhlYWRsaW5lIH0gZnJvbSBcIi4vbW9kdWxlcy9oZWFkbGluZVwiO1xyXG5pbXBvcnQgeyBmb290ZXIgfSBmcm9tIFwiLi9tb2R1bGVzL2Zvb3RlclwiO1xyXG5pbXBvcnQgeyBtZW51IH0gZnJvbSBcIi4vbW9kdWxlcy9tZW51XCI7XHJcbmltcG9ydCB7IGFib3V0IH0gZnJvbSBcIi4vbW9kdWxlcy9hYm91dFwiO1xyXG5jb25zdCAgbG9hZFBhZ2UgPSAoKCk9PiB7XHJcbiAgICBuYXZiYXIoKTtcclxuICAgIGhlYWRsaW5lKCk7XHJcbiAgICBtZW51KClcclxuICAgIGFib3V0KCk7XHJcbiAgICBmb290ZXIoKTtcclxufSkoKVxyXG5cclxuY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2X2xpbmtzJylcclxubWVudUl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+e1xyXG4gICAgY29uc3Qge3RhcmdldH0gPSBlXHJcbiAgICBpZih0YXJnZXQuaW5uZXJIVE1MID09ICdNZW51Jyl7bWVudUNsaWNrKCl9XHJcbiAgICBpZih0YXJnZXQuaW5uZXJIVE1MID09ICdBYm91dCcpe2Fib3V0Q2xpY2soKX1cclxuICAgIGlmKHRhcmdldC5pbm5lckhUTUwgPT0gJ0xhc3QgTWVhbHMnKXtob21lKCl9XHJcblxyXG59KVxyXG5cclxuY29uc3QgbWVudUNsaWNrID0gKCkgPT57XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJylcclxuICAgIGNvbnN0IGFib3V0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0JylcclxuICAgIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgYWJvdXRDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWNvbnRhaW5lci1mbGV4JylcclxuICAgICAgICBpZihtZW51Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPT09ICdmbGV4Jyl7XHJcbiAgICAgICAgICAgIG1lbnVDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgICAgICAgICBjb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIG1lbnVDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xyXG4gICAgICAgIH1cclxufVxyXG5cclxuXHJcbmNvbnN0IGFib3V0Q2xpY2sgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJylcclxuICAgIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1jb250YWluZXItZmxleCcpXHJcbiAgICBjb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIG1lbnVDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgY29uc3QgYWJvdXRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXQnKVxyXG4gICAgaWYoYWJvdXRDb250YWluZXIuc3R5bGUuZGlzcGxheSA9PT0gJ2ZsZXgnKXtcclxuICAgICAgICBhYm91dENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBhYm91dENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGhvbWUgPSAoKSA9PntcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKVxyXG4gICAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWNvbnRhaW5lci1mbGV4JylcclxuICAgIGNvbnN0IGFib3V0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0JylcclxuICAgIGNvbnNvbGUubG9nKFwiQVlZWUVcIilcclxuICAgIG1lbnVDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgYWJvdXRDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcclxuXHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
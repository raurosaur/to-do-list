/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/index.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/index.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  margin: 0px;\\n  background: #D8EBF1;\\n  color: #FFF;\\n}\\n\\n#parent-container {\\n  display: flex;\\n  flex-direction: row;\\n  font-family: \\\"Roboto\\\", serif;\\n}\\n\\n.sidebar {\\n  position: fixed;\\n  display: flex;\\n  flex-direction: column;\\n  height: 100vh;\\n  width: 20vw;\\n  background-color: #2C7177;\\n  text-align: center;\\n}\\n.sidebar .controls {\\n  display: flex;\\n  justify-content: space-around;\\n  font-size: 2rem;\\n  height: 10%;\\n  cursor: pointer;\\n}\\n.sidebar .controls div {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  font-weight: 900;\\n  height: 4rem;\\n  width: 50%;\\n  margin: 20px;\\n  border-radius: 30px;\\n  box-shadow: 0px 0px 5px 2px #D8EBF1;\\n}\\n.sidebar .controls div:hover {\\n  transform: scale(1.1);\\n  box-shadow: 0px 0px 20px 5px #003F45;\\n  background-color: #D8EBF1;\\n  color: #003F45;\\n}\\n.sidebar .lists {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: flex-start;\\n  align-content: flex-start;\\n  text-align: left;\\n  font-size: 20px;\\n  margin-top: 30px;\\n}\\n.sidebar .lists div {\\n  width: 95%;\\n  height: 30px;\\n  padding-left: 5%;\\n  cursor: pointer;\\n}\\n.sidebar .lists div:hover {\\n  background-color: #003F45;\\n}\\n\\n.list-display {\\n  display: flex;\\n  flex-direction: column;\\n  align-content: center;\\n  min-height: 200vh;\\n  height: auto;\\n  width: 80vw;\\n  margin-left: 20vw;\\n  background-color: #D8EBF1;\\n  color: #003F45;\\n  overflow: auto;\\n  opacity: 100%;\\n  transition: opacity 500 ease-out;\\n}\\n.list-display .add {\\n  position: fixed;\\n  right: 20px;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  font-weight: 900;\\n  height: 4rem;\\n  width: 6rem;\\n  font-size: 3rem;\\n  margin: 20px;\\n  border-radius: 30px;\\n  box-shadow: 0px 0px 3px 2px #2C7177;\\n  background-color: inherit;\\n  cursor: pointer;\\n}\\n.list-display .add:hover {\\n  transform: scale(1.1);\\n  box-shadow: 0px 0px 1px 5px #003F45;\\n  background-color: #2C7177;\\n  color: #D8EBF1;\\n}\\n.list-display .to-do {\\n  display: flex;\\n  flex-direction: column;\\n  height: 20%;\\n  width: 80%;\\n  border: 3px solid #2C7177;\\n  margin-top: 5%;\\n  border-radius: 40px;\\n  margin-left: 6rem;\\n}\\n.list-display .to-do header {\\n  display: flex;\\n  justify-content: space-between;\\n}\\n.list-display .to-do header h2 {\\n  margin-left: 1rem;\\n  font-size: 2.5rem;\\n}\\n.list-display .to-do header .checkbox {\\n  border: 2px solid black;\\n  height: 2rem;\\n  width: 2rem;\\n  margin-top: 2.5rem;\\n  margin-right: 2rem;\\n}\\n.list-display .to-do header .blue {\\n  background-color: #003F45;\\n}\\n.list-display .to-do .container {\\n  display: flex;\\n  flex-direction: column;\\n}\\n.list-display .to-do .container div {\\n  margin: 0rem 0rem 3rem 2rem;\\n}\\n.list-display .to-do .container table {\\n  display: inline;\\n}\\n.list-display .to-do .container th, .list-display .to-do .container td {\\n  width: 20rem;\\n  border: 1px solid black;\\n  text-align: center;\\n}\\n\\n.display-none {\\n  opacity: 0;\\n  display: none;\\n}\\n\\nform {\\n  position: fixed;\\n  top: 50vh;\\n  left: 50vw;\\n  transform: translateX(-50%) translateY(-50%);\\n  background-color: #2C7177;\\n  height: 70vh;\\n  width: 60vh;\\n  box-shadow: 0px 0px 50vmax 40vmax #003F45;\\n}\\n\\n.form-container {\\n  height: 100%;\\n  width: 100%;\\n  display: none;\\n  background-color: rgba(0, 0, 0, 0.5);\\n  position: fixed;\\n  top: 0px;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.form-container .form {\\n  position: absolute;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  height: 70%;\\n  width: 35%;\\n  background-color: #D8EBF1;\\n  border-radius: 30px;\\n}\\n.form-container .form .close {\\n  position: relative;\\n  margin-left: auto;\\n  top: -35px;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  height: 1em;\\n  width: 1em;\\n  color: #003F45;\\n  font-size: 50px;\\n  transform: rotate(45deg);\\n  cursor: pointer;\\n}\\n.form-container .form .close:hover {\\n  transform: scale(1.3) rotate(45deg);\\n}\\n.form-container .form .form-content {\\n  height: 80%;\\n  width: 80%;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style/index.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style/index.scss":
/*!******************************!*\
  !*** ./src/style/index.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/index.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://to-do-list/./src/style/index.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/index.scss */ \"./src/style/index.scss\");\n/* harmony import */ var _modules_projectTabs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/projectTabs.js */ \"./src/modules/projectTabs.js\");\n/* harmony import */ var _modules_listElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/listElement */ \"./src/modules/listElement.js\");\n/* harmony import */ var _modules_projectForm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/projectForm.js */ \"./src/modules/projectForm.js\");\n\n\n\n\n\n\n//Function Calls\n(0,_modules_projectTabs_js__WEBPACK_IMPORTED_MODULE_1__.projectTabs)();\n(0,_modules_projectForm_js__WEBPACK_IMPORTED_MODULE_3__.projectForm)();\ndocument.querySelector('.tabs').click();\n\n//Project Form\n//createForm('70%', '35%');\n\n//Add Event Listener\nconst addProject = document.getElementsByClassName('add');\naddProject[0].addEventListener('click', () => {\n    document.body.querySelector('.form-container').style.display = 'flex';\n});\n\n//Close Button\nconst close = document.querySelectorAll('.close');\nclose.forEach(el => {\n    el.addEventListener('click', (event) => {\n        console.log('okay');\n        event.target.parentElement.parentElement.style.display = 'none';\n    });\n});\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"display\": () => /* binding */ display\n/* harmony export */ });\nconst display = function(){\n    const container = document.getElementById('parent-container');\n    const newDisplay = document.createElement('div');\n    newDisplay.classList.add('list-display');\n    newDisplay.classList.add('display-none');\n    container.appendChild(newDisplay);\n\n    //Add Button\n    const add = document.createElement('div');\n    add.textContent = '+';\n    add.classList.add('add');\n    newDisplay.appendChild(add);\n\n    return newDisplay;\n};\n\n//# sourceURL=webpack://to-do-list/./src/modules/display.js?");

/***/ }),

/***/ "./src/modules/form.js":
/*!*****************************!*\
  !*** ./src/modules/form.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createForm\": () => /* binding */ createForm\n/* harmony export */ });\nconst createForm = function(height, width){\n    const parent = document.createElement('div');\n    parent.classList.add('form-container');\n\n    const form = document.createElement('div');\n    form.classList.add('form');\n\n    const close = document.createElement('div');\n    close.classList.add('close');\n    close.textContent = '+';\n\n    form.style.height = `${height}%`;\n    form.style.width = `${width}%`;\n\n    form.appendChild(close);\n    parent.appendChild(form);\n    document.body.appendChild(parent);\n\n    return form;\n}\n\n//# sourceURL=webpack://to-do-list/./src/modules/form.js?");

/***/ }),

/***/ "./src/modules/listElement.js":
/*!************************************!*\
  !*** ./src/modules/listElement.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addElement\": () => /* binding */ addElement,\n/* harmony export */   \"listObj\": () => /* binding */ listObj\n/* harmony export */ });\n\"strict mode\"\nconst listObj = function(name, desc, date, time){\n    this.name = name;\n    this.desc = desc;\n    this.date = date;\n    this.time = time;\n};\n\nconst addElement = function(listObj, displayEL){\n    const container = document.createElement('div');\n    container.classList.add('to-do');\n    displayEL.appendChild(container);\n\n    //header\n    const header = document.createElement('header'),\n    h2 = document.createElement('h2'),\n    checkbox = document.createElement('div');\n\n    h2.textContent = listObj.name;\n\n    checkbox.classList.add('checkbox');\n    header.appendChild(h2);\n    header.appendChild(checkbox);\n\n    //Details Container\n    const lcontainer = document.createElement('div'),\n    desc = document.createElement('div'),\n    deadline = document.createElement('div'),\n    table = document.createElement('table');\n\n    lcontainer.classList.add('container');\n    desc.textContent = listObj.desc;\n    const heading = document.createElement('tr'),\n    body = document.createElement('tr');\n\n    const date = document.createElement('th'),\n    time = document.createElement('th');\n    date.textContent = 'Date';\n    time.textContent = 'Time';\n    heading.appendChild(date);\n    heading.appendChild(time);\n\n    const dateCol = document.createElement('td'),\n    timeCol = document.createElement('td');\n    dateCol.textContent = listObj.date;\n    timeCol.textContent = listObj.time;\n    body.appendChild(dateCol);\n    body.appendChild(timeCol);\n\n    table.appendChild(heading);\n    table.appendChild(body);\n    lcontainer.appendChild(desc);\n    deadline.appendChild(table);\n    lcontainer.appendChild(deadline);\n\n    //Append to Container\n    container.appendChild(header);\n    container.appendChild(lcontainer);\n\n    //EventListener\n    checkbox.addEventListener('click', (event) => {\n        let box = event.target;\n        box.classList.toggle('blue');\n        if(box.classList.contains('blue')){\n            box.parentElement.parentElement.style.opacity = '50%';\n        }\n        else{\n            box.parentElement.parentElement.style.opacity = '100%';\n        }\n    });\n};\n\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/listElement.js?");

/***/ }),

/***/ "./src/modules/projectForm.js":
/*!************************************!*\
  !*** ./src/modules/projectForm.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectForm\": () => /* binding */ projectForm\n/* harmony export */ });\n/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.js */ \"./src/modules/form.js\");\n\n\nconst projectForm = function(){\n    const formEl = (0,_form_js__WEBPACK_IMPORTED_MODULE_0__.createForm)('30%', '60%');\n    const input = document.createElement('input');\n    const button = document.createElement('div');\n\n    button.textContent = 'Submit';\n    input.setAttribute('type', 'text');\n    input.setAttribute('placeholder', 'Project Name');\n\n    input.appendChild(button);\n    formEl.appendChild(input);\n}; \n\n//# sourceURL=webpack://to-do-list/./src/modules/projectForm.js?");

/***/ }),

/***/ "./src/modules/projectTabs.js":
/*!************************************!*\
  !*** ./src/modules/projectTabs.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectTabs\": () => /* binding */ projectTabs\n/* harmony export */ });\n/* harmony import */ var _listElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listElement.js */ \"./src/modules/listElement.js\");\n/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display.js */ \"./src/modules/display.js\");\n\n\n\nconst projectTabs = function(){\n    let projects = document.getElementsByClassName('tabs');\n    projects = [].slice.call(projects);\n    const displayBar = projects.map(el => [el, (0,_display_js__WEBPACK_IMPORTED_MODULE_1__.display)()]);\n    //Heading\n    displayBar.forEach(e => {\n        const h1 = document.createElement('h1');\n        h1.style.textAlign = 'center';\n        h1.textContent = e[0].textContent;\n        e[1].appendChild(h1);\n    });\n    //Toggle Display\n    projects.forEach(el => {\n        el.addEventListener('click', (event) => {\n            displayBar.forEach(e => {\n                if(e[0] === event.target)\n                    e[1].classList.remove('display-none');\n                else \n                    e[1].classList.add('display-none');\n            });\n        })    \n    });\n    //Task Event Listener\n    let testTask = new _listElement_js__WEBPACK_IMPORTED_MODULE_0__.listObj('Heading', 'A test case', '20 Jan 2021', '7:00 am');\n    displayBar.forEach(el => {\n        el[1].getElementsByClassName('add')[0].addEventListener('click', () => {\n            (0,_listElement_js__WEBPACK_IMPORTED_MODULE_0__.addElement)(testTask, el[1]);\n        });\n    });\n};\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/projectTabs.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{139:function(module,exports,__webpack_require__){__webpack_require__(140),__webpack_require__(219),module.exports=__webpack_require__(220)},220:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(9),__webpack_require__(10),__webpack_require__(11);var _storybook_html__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(62),req=__webpack_require__(318);Object(_storybook_html__WEBPACK_IMPORTED_MODULE_3__.configure)(function(){req.keys().forEach(function(filename){return req(filename)})},module)}.call(this,__webpack_require__(110)(module))},318:function(module,exports,__webpack_require__){var map={"./index.stories.js":319};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){var id=map[req];if(!(id+1)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return id}webpackContext.keys=function(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=318},319:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(62),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(63);Object(_storybook_html__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Nutrition badges",module).addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs).add("Nova badge",function(){var value=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number)("Score",1,{range:!0,min:1,max:4,step:1});return"\n      <nova-badge score=".concat(value,"></nova-badge>\n    ")}).add("Nutri-score badge",function(){var value=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("Values",{A:"A",B:"B",C:"C",D:"D",E:"E"},"A");return"<nutri-score score=".concat(value,"></nutri-score>")})}.call(this,__webpack_require__(110)(module))}},[[139,1,2]]]);
//# sourceMappingURL=main.7196d957bba1398fd20d.bundle.js.map
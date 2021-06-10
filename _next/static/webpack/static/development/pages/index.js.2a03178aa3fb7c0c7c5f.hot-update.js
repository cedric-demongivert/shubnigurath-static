webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/SkillLine.tsx":
/*!**********************************!*\
  !*** ./components/SkillLine.tsx ***!
  \**********************************/
/*! exports provided: SkillLine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillLine", function() { return SkillLine; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Padding__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Padding */ "./components/Padding.tsx");
var _jsxFileName = "D:\\development\\rpg\\shubgath\\components\\SkillLine.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function SkillLine(properties) {
  var name = properties.skill.toString();
  var base = properties.value.sum();
  var halved = properties.value.half();
  var fifth = properties.value.fifth();
  var dbase = base.toString();
  var dhalved = (halved > 0 ? halved : base > 0 ? 1 : 0).toString();
  var dfifth = (fifth > 0 ? fifth : base > 0 ? 1 : 0).toString();
  return __jsx("div", {
    key: name,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('skill skill-default', properties.className),
    onClick: properties.onClick
  }, __jsx("div", {
    className: "skill-name"
  }, name.substr(0, 1).toLocaleUpperCase(), name.substr(1)), __jsx("div", {
    className: "skill-filler"
  }), __jsx("div", {
    className: "skill-values"
  }, __jsx("div", {
    className: "skill-value"
  }, __jsx(_Padding__WEBPACK_IMPORTED_MODULE_2__["Padding"], {
    padding: ' ',
    of: dbase,
    size: 2
  }), dbase, __jsx("span", {
    className: "percent"
  }, "%")), __jsx("div", {
    className: "skill-separator"
  }, "\xB7"), __jsx("div", {
    className: "skill-value"
  }, __jsx(_Padding__WEBPACK_IMPORTED_MODULE_2__["Padding"], {
    padding: ' ',
    of: dhalved,
    size: 2
  }), dhalved, __jsx("span", {
    className: "percent"
  }, "%")), __jsx("div", {
    className: "skill-separator"
  }, "\xB7"), __jsx("div", {
    className: "skill-value"
  }, __jsx(_Padding__WEBPACK_IMPORTED_MODULE_2__["Padding"], {
    padding: ' ',
    of: dfifth,
    size: 2
  }), dfifth, __jsx("span", {
    className: "percent"
  }, "%"))));
}
/**
 * 
 */

(function (_SkillLine) {})(SkillLine || (SkillLine = {}));

/***/ })

})
//# sourceMappingURL=index.js.2a03178aa3fb7c0c7c5f.hot-update.js.map
webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/AllSkillsDisplay.tsx":
/*!*****************************************!*\
  !*** ./components/AllSkillsDisplay.tsx ***!
  \*****************************************/
/*! exports provided: AllSkillsDisplay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllSkillsDisplay", function() { return AllSkillsDisplay; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Label */ "./components/Label.tsx");
/* harmony import */ var _SkillLine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SkillLine */ "./components/SkillLine.tsx");
var _jsxFileName = "D:\\development\\rpg\\shubgath\\components\\AllSkillsDisplay.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function renderSkill(updates, onSelect, pair) {
  return __jsx(_SkillLine__WEBPACK_IMPORTED_MODULE_2__["SkillLine"], {
    className: 'is-clickable',
    selected: updates.has(pair.left),
    skill: pair.left,
    value: pair.right,
    key: pair.left.toString(),
    onClick: onSelect.bind(undefined, pair.left)
  });
}
/**
 * 
 */


function AllSkillsDisplay(properties) {
  var defaultSkills = properties.value.computeDefaultSkills().minus(properties.value.skills);
  var skills = properties.value.skills.inherit(properties.value.computeDefaultSkills());
  return __jsx("div", {
    className: "container-fluid"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-12 col-md-12 col-lg"
  }, __jsx(_Label__WEBPACK_IMPORTED_MODULE_1__["Label"], null, "Comp\xE9tences (Expertise)"), skills.entries.map(renderSkill.bind(undefined, properties.value.updates))), __jsx("div", {
    className: "col-12 d-block d-lg-none"
  }, __jsx("br", null)), __jsx("div", {
    className: "col-12 col-md-6 col-lg"
  }, __jsx(_Label__WEBPACK_IMPORTED_MODULE_1__["Label"], null, "Comp\xE9tences (D\xE9faut)"), defaultSkills.entries.slice(0, defaultSkills.entries.size >> 1).map(renderSkill)), __jsx("div", {
    className: "col-12 col-md-6 col-lg"
  }, __jsx(_Label__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    className: "d-none d-md-flex"
  }, "Comp\xE9tences (D\xE9faut)"), defaultSkills.entries.slice(defaultSkills.entries.size >> 1).map(renderSkill))));
}
/**
 * 
 */

(function (_AllSkillsDisplay) {})(AllSkillsDisplay || (AllSkillsDisplay = {}));

/***/ })

})
//# sourceMappingURL=index.js.d7d737e6eccdeae84f18.hot-update.js.map
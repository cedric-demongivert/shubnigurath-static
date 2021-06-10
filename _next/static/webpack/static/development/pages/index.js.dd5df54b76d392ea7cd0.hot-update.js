webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./typescript/unidoc/reducer/UnidocInvestigatorReducer.ts":
/*!****************************************************************!*\
  !*** ./typescript/unidoc/reducer/UnidocInvestigatorReducer.ts ***!
  \****************************************************************/
/*! exports provided: UnidocInvestigatorReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnidocInvestigatorReducer", function() { return UnidocInvestigatorReducer; });
/* harmony import */ var _UnidocCharacteristicSetReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UnidocCharacteristicSetReducer */ "./typescript/unidoc/reducer/UnidocCharacteristicSetReducer.ts");
/* harmony import */ var _UnidocSkillSetReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UnidocSkillSetReducer */ "./typescript/unidoc/reducer/UnidocSkillSetReducer.ts");
/* harmony import */ var _UnidocStateReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UnidocStateReducer */ "./typescript/unidoc/reducer/UnidocStateReducer.ts");
/* harmony import */ var _UnidocSummaryReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UnidocSummaryReducer */ "./typescript/unidoc/reducer/UnidocSummaryReducer.ts");




/**
 * 
 */

var UnidocInvestigatorReducer;

(function (_UnidocInvestigatorReducer) {
  function reduce(investigator) {
    var indent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var elements = [];
    elements.push(_UnidocSummaryReducer__WEBPACK_IMPORTED_MODULE_3__["UnidocSummaryReducer"].reduce(investigator.summary, indent));
    elements.push(indent + '\\characteristics {\r\n' + _UnidocCharacteristicSetReducer__WEBPACK_IMPORTED_MODULE_0__["UnidocCharacteristicSetReducer"].reduce(investigator.characteristics, indent + '  ') + '\r\n' + indent + '}');
    elements.push(indent + '\\skills {\r\n' + _UnidocSkillSetReducer__WEBPACK_IMPORTED_MODULE_1__["UnidocSkillSetReducer"].reduce(investigator.skills, investigator.computeDefaultSkills(), indent + '  ') + '\r\n' + indent + '}');
    elements.push(indent + '\\state {\r\n' + _UnidocStateReducer__WEBPACK_IMPORTED_MODULE_2__["UnidocStateReducer"].reduce(investigator.mutables, indent + '  ') + '\r\n' + indent + '}');
    elements.push(indent + "\\updates {\r\n" + _UnidocSkillSetReducer__WEBPACK_IMPORTED_MODULE_1__["UnidocSkillSetReducer"].reduce(investigator.updates, investigator.computeDefaultSkills(), indent + '  ') + '\r\n' + indent + '}');
    return elements.join('\r\n\r\n');
  }

  _UnidocInvestigatorReducer.reduce = reduce;
})(UnidocInvestigatorReducer || (UnidocInvestigatorReducer = {}));

/***/ })

})
//# sourceMappingURL=index.js.dd5df54b76d392ea7cd0.hot-update.js.map
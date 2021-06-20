webpackHotUpdate_N_E("pages/investigator",{

/***/ "./components/AllSkillsDisplay.tsx":
false,

/***/ "./components/CharacteristicSetRenderer.tsx":
false,

/***/ "./components/CopyField.tsx":
false,

/***/ "./components/InvestigatorPage.tsx":
false,

/***/ "./components/MovementRenderer.tsx":
false,

/***/ "./components/SkillLine.tsx":
false,

/***/ "./components/StatusDisplay.tsx":
false,

/***/ "./components/SummaryDisplay.tsx":
false,

/***/ "./components/ValueRenderer.tsx":
false,

/***/ "./components/page/investigator/AllSkillsRenderer.tsx":
/*!************************************************************!*\
  !*** ./components/page/investigator/AllSkillsRenderer.tsx ***!
  \************************************************************/
/*! exports provided: AllSkillsRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllSkillsRenderer", function() { return AllSkillsRenderer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Label */ "./components/Label.tsx");
/* harmony import */ var _SkillLine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SkillLine */ "./components/page/investigator/SkillLine.tsx");
var _jsxFileName = "D:\\development\\rpg\\shubgath\\components\\page\\investigator\\AllSkillsRenderer.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function renderSkill(updates, onSelect, pair) {
  return __jsx(_SkillLine__WEBPACK_IMPORTED_MODULE_2__["SkillLine"], {
    className: 'is-clickable',
    selected: updates.has(pair.left),
    skill: pair.left,
    value: pair.right,
    key: pair.left.toString(),
    onClick: onSelect.bind(undefined, pair.left),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 10
    }
  });
}
/**
 * 
 */


function AllSkillsRenderer(properties) {
  var defaultSkills = properties.value.computeDefaultSkills().minus(properties.value.skills);
  var skills = properties.value.skills.inherit(properties.value.computeDefaultSkills());
  var handleSkillRendering = renderSkill.bind(undefined, properties.value.updates, properties.onSelect);
  return __jsx("div", {
    className: "container-fluid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "col-12 col-md-12 col-lg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx(_Label__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, "Comp\xE9tences (Expertise)"), skills.entries.map(handleSkillRendering)), __jsx("div", {
    className: "col-12 d-block d-lg-none",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "col-12 col-md-6 col-lg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx(_Label__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, "Comp\xE9tences (D\xE9faut)"), defaultSkills.entries.slice(0, defaultSkills.entries.size >> 1).map(handleSkillRendering)), __jsx("div", {
    className: "col-12 col-md-6 col-lg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx(_Label__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    className: "d-none d-md-flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, "Comp\xE9tences (D\xE9faut)"), defaultSkills.entries.slice(defaultSkills.entries.size >> 1).map(handleSkillRendering))));
}
/**
 * 
 */

_c = AllSkillsRenderer;

(function (_AllSkillsRenderer) {})(AllSkillsRenderer || (AllSkillsRenderer = {}));

var _c;

$RefreshReg$(_c, "AllSkillsRenderer");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/page/investigator/CharacteristicSetRenderer.tsx":
/*!********************************************************************!*\
  !*** ./components/page/investigator/CharacteristicSetRenderer.tsx ***!
  \********************************************************************/
/*! exports provided: CharacteristicSetRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacteristicSetRenderer", function() { return CharacteristicSetRenderer; });
/* harmony import */ var D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _typescript_Investigator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../typescript/Investigator */ "./typescript/Investigator.ts");
/* harmony import */ var _typescript_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../typescript/redux */ "./typescript/redux/index.ts");
/* harmony import */ var _typescript_Mutables__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../typescript/Mutables */ "./typescript/Mutables.ts");
/* harmony import */ var _form_ValueField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../form/ValueField */ "./components/form/ValueField.tsx");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../Label */ "./components/Label.tsx");
/* harmony import */ var _ValueRenderer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ValueRenderer */ "./components/page/investigator/ValueRenderer.tsx");
/* harmony import */ var _CopyField__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./CopyField */ "./components/page/investigator/CopyField.tsx");







var _jsxFileName = "D:\\development\\rpg\\shubgath\\components\\page\\investigator\\CharacteristicSetRenderer.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









/**
 * 
 */

var CharacteristicSetRenderer = /*#__PURE__*/function (_PureComponent) {
  Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(CharacteristicSetRenderer, _PureComponent);

  var _super = _createSuper(CharacteristicSetRenderer);

  /**
   * 
   */
  function CharacteristicSetRenderer(properties) {
    var _this;

    Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CharacteristicSetRenderer);

    _this = _super.call(this, properties);
    _this.handleLuckChange = _this.handleLuckChange.bind(Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.handleLuckIncrement = _this.handleLuckIncrement.bind(Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    return _this;
  }
  /**
   * 
   */


  Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(CharacteristicSetRenderer, [{
    key: "handleLuckChange",
    value: function handleLuckChange(event) {
      if (this.props.onChange) {
        this.props.onChange(_typescript_Investigator__WEBPACK_IMPORTED_MODULE_8__["Investigator"].create(_objectSpread(_objectSpread({}, this.props.value), {}, {
          mutables: _typescript_Mutables__WEBPACK_IMPORTED_MODULE_10__["Mutables"].create(_objectSpread(_objectSpread({}, this.props.value.mutables), {}, {
            luck: _typescript_redux__WEBPACK_IMPORTED_MODULE_9__["DataReducer"].reduce(this.props.value.mutables.luck, event)
          }))
        })), this.props.value);
      }
    }
    /**
     * 
     */

  }, {
    key: "handleLuckIncrement",
    value: function handleLuckIncrement(event) {
      console.log(event);
    }
    /**
     * @see React.Component.render
     */

  }, {
    key: "render",
    value: function render() {
      var characteristics = this.props.value.characteristics;
      var mutables = this.props.value.mutables;
      return __jsx("div", {
        className: "container-fluid",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "col-4 col-md-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 13
        }
      }, __jsx(_CopyField__WEBPACK_IMPORTED_MODULE_14__["CopyField"], {
        value: characteristics.appearance.toString(),
        className: "align-items-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 15
        }
      }, __jsx(_Label__WEBPACK_IMPORTED_MODULE_12__["Label"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 17
        }
      }, "Apparence"), __jsx(_ValueRenderer__WEBPACK_IMPORTED_MODULE_13__["ValueRenderer"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 17
        }
      }, characteristics.appearance))), __jsx("div", {
        className: "col-4 col-md-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 13
        }
      }, __jsx(_CopyField__WEBPACK_IMPORTED_MODULE_14__["CopyField"], {
        value: characteristics.education.toString(),
        className: "align-items-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 15
        }
      }, __jsx(_Label__WEBPACK_IMPORTED_MODULE_12__["Label"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 17
        }
      }, "\xC9ducation"), __jsx(_ValueRenderer__WEBPACK_IMPORTED_MODULE_13__["ValueRenderer"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 17
        }
      }, characteristics.education))), __jsx("div", {
        className: "col-4 col-md-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 13
        }
      }, __jsx(_CopyField__WEBPACK_IMPORTED_MODULE_14__["CopyField"], {
        value: characteristics.power.toString(),
        className: "align-items-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 15
        }
      }, __jsx(_Label__WEBPACK_IMPORTED_MODULE_12__["Label"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 17
        }
      }, "Pouvoir"), __jsx(_ValueRenderer__WEBPACK_IMPORTED_MODULE_13__["ValueRenderer"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 17
        }
      }, characteristics.power))), __jsx("div", {
        className: "col-4 col-md-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 13
        }
      }, __jsx(_CopyField__WEBPACK_IMPORTED_MODULE_14__["CopyField"], {
        value: characteristics.constitution.toString(),
        className: "align-items-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 15
        }
      }, __jsx(_Label__WEBPACK_IMPORTED_MODULE_12__["Label"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 17
        }
      }, "Constitution"), __jsx(_ValueRenderer__WEBPACK_IMPORTED_MODULE_13__["ValueRenderer"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 17
        }
      }, characteristics.constitution))), __jsx("div", {
        className: "col-4 col-md-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 13
        }
      }, __jsx(_CopyField__WEBPACK_IMPORTED_MODULE_14__["CopyField"], {
        value: characteristics.strength.toString(),
        className: "align-items-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 15
        }
      }, __jsx(_Label__WEBPACK_IMPORTED_MODULE_12__["Label"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 17
        }
      }, "Force"), __jsx(_ValueRenderer__WEBPACK_IMPORTED_MODULE_13__["ValueRenderer"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 17
        }
      }, characteristics.strength))), __jsx("div", {
        className: "col-4 col-md-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 13
        }
      }, __jsx(_CopyField__WEBPACK_IMPORTED_MODULE_14__["CopyField"], {
        value: characteristics.size.toString(),
        className: "align-items-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 14
        }
      }, __jsx(_Label__WEBPACK_IMPORTED_MODULE_12__["Label"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 17
        }
      }, "Taille"), __jsx(_ValueRenderer__WEBPACK_IMPORTED_MODULE_13__["ValueRenderer"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 17
        }
      }, characteristics.size))), __jsx("div", {
        className: "col-4 col-md-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 13
        }
      }, __jsx(_CopyField__WEBPACK_IMPORTED_MODULE_14__["CopyField"], {
        value: characteristics.dexterity.toString(),
        className: "align-items-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 15
        }
      }, __jsx(_Label__WEBPACK_IMPORTED_MODULE_12__["Label"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 17
        }
      }, "Dext\xE9rit\xE9"), __jsx(_ValueRenderer__WEBPACK_IMPORTED_MODULE_13__["ValueRenderer"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 17
        }
      }, characteristics.dexterity))), __jsx("div", {
        className: "col-4 col-md-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 13
        }
      }, __jsx(_CopyField__WEBPACK_IMPORTED_MODULE_14__["CopyField"], {
        value: characteristics.intelligence.toString(),
        className: "align-items-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 15
        }
      }, __jsx(_Label__WEBPACK_IMPORTED_MODULE_12__["Label"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 17
        }
      }, "Intelligence"), __jsx(_ValueRenderer__WEBPACK_IMPORTED_MODULE_13__["ValueRenderer"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 17
        }
      }, characteristics.intelligence))), __jsx("div", {
        className: "col-4 col-md-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 13
        }
      }, __jsx(_form_ValueField__WEBPACK_IMPORTED_MODULE_11__["ValueField"], {
        maximum: 100,
        minimum: 0,
        onChange: this.handleLuckChange,
        value: mutables.luck,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 15
        }
      }, __jsx(_Label__WEBPACK_IMPORTED_MODULE_12__["Label"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 17
        }
      }, "Chance")))));
    }
  }]);

  return CharacteristicSetRenderer;
}(react__WEBPACK_IMPORTED_MODULE_7__["PureComponent"]);
/**
 * 
 */

(function (_CharacteristicSetRenderer) {})(CharacteristicSetRenderer || (CharacteristicSetRenderer = {}));

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/page/investigator/CopyField.tsx":
/*!****************************************************!*\
  !*** ./components/page/investigator/CopyField.tsx ***!
  \****************************************************/
/*! exports provided: CopyField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopyField", function() { return CopyField; });
/* harmony import */ var D_development_rpg_shubgath_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_development_rpg_shubgath_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_development_rpg_shubgath_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Focusable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Focusable */ "./components/Focusable.tsx");
/* harmony import */ var clipboard_copy__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! clipboard-copy */ "./node_modules/clipboard-copy/index.js");
/* harmony import */ var clipboard_copy__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(clipboard_copy__WEBPACK_IMPORTED_MODULE_11__);








var _jsxFileName = "D:\\development\\rpg\\shubgath\\components\\page\\investigator\\CopyField.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





/**
 * 
 */

var CopyField = /*#__PURE__*/function (_PureComponent) {
  Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(CopyField, _PureComponent);

  var _super = _createSuper(CopyField);

  /**
   * 
   */
  function CopyField(properties) {
    var _this;

    Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, CopyField);

    _this = _super.call(this, properties);
    _this.state = {
      copied: 0
    };
    _this.handleClick = _this.handleClick.bind(Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handleKeyPress = _this.handleKeyPress.bind(Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handleTimeout = _this.handleTimeout.bind(Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }
  /**
   * 
   */


  Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(CopyField, [{
    key: "handleClick",
    value: function handleClick(event) {
      this.copy();
    }
    /**
     * 
     */

  }, {
    key: "handleKeyPress",
    value: function handleKeyPress(event) {
      if (event.key === ' ') this.copy();
    }
    /**
     * 
     */

  }, {
    key: "handleTimeout",
    value: function handleTimeout() {
      this.setState({
        copied: 0
      });
    }
    /**
     * 
     */

  }, {
    key: "copy",
    value: function () {
      var _copy2 = Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_development_rpg_shubgath_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return D_development_rpg_shubgath_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return clipboard_copy__WEBPACK_IMPORTED_MODULE_11___default()(this.props.value);

              case 2:
                if (this.state.copied > 0) {
                  window.clearTimeout(this.state.copied);
                }

                this.setState({
                  copied: window.setTimeout(this.handleTimeout, 600)
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function copy() {
        return _copy2.apply(this, arguments);
      }

      return copy;
    }()
    /**
     * @see React.Component.render
     */

  }, {
    key: "render",
    value: function render() {
      return __jsx(_Focusable__WEBPACK_IMPORTED_MODULE_10__["Focusable"].Element, {
        focus: this.props.focus,
        onFocus: this.props.onFocus,
        onBlur: this.props.onBlur,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_9___default()('field is-clickable', this.props.className),
        onClick: this.handleClick,
        onKeyPress: this.handleKeyPress,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 9
        }
      }, this.props.children, this.renderToolTip()));
    }
    /**
     * 
     */

  }, {
    key: "renderToolTip",
    value: function renderToolTip() {
      if (this.state.copied > 0) {
        return __jsx("div", {
          className: "layout layout-filler",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 9
          }
        }, __jsx("div", {
          className: "card layout layout-centered",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 13
          }
        }, "Copi\xE9"));
      } else {
        return null;
      }
    }
  }]);

  return CopyField;
}(react__WEBPACK_IMPORTED_MODULE_8__["PureComponent"]);
/**
 * 
 */

(function (_CopyField) {})(CopyField || (CopyField = {}));

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/page/investigator/InvestigatorPage.tsx":
/*!***********************************************************!*\
  !*** ./components/page/investigator/InvestigatorPage.tsx ***!
  \***********************************************************/
/*! exports provided: InvestigatorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestigatorPage", function() { return InvestigatorPage; });
/* harmony import */ var D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _typescript_unidoc_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../typescript/unidoc/reducer */ "./typescript/unidoc/reducer/index.ts");
/* harmony import */ var _typescript_application_ApplicationEvent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../typescript/application/ApplicationEvent */ "./typescript/application/ApplicationEvent.ts");
/* harmony import */ var _SummaryRenderer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SummaryRenderer */ "./components/page/investigator/SummaryRenderer.tsx");
/* harmony import */ var _CharacteristicSetRenderer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./CharacteristicSetRenderer */ "./components/page/investigator/CharacteristicSetRenderer.tsx");
/* harmony import */ var _StatusRenderer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./StatusRenderer */ "./components/page/investigator/StatusRenderer.tsx");
/* harmony import */ var _AllSkillsRenderer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./AllSkillsRenderer */ "./components/page/investigator/AllSkillsRenderer.tsx");






var _jsxFileName = "D:\\development\\rpg\\shubgath\\components\\page\\investigator\\InvestigatorPage.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }










var HomeImage = __webpack_require__(/*! ../../../public/images/logo.svg */ "./public/images/logo.svg")["default"];
/**
 * 
 */


var InvestigatorPage = /*#__PURE__*/function (_PureComponent) {
  Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(InvestigatorPage, _PureComponent);

  var _super = _createSuper(InvestigatorPage);

  /**
   * 
   */
  function InvestigatorPage(properties) {
    var _this;

    Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, InvestigatorPage);

    _this = _super.call(this, properties);
    _this.handleChange = _this.handleChange.bind(Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handleSave = _this.handleSave.bind(Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handleSkillSelection = _this.handleSkillSelection.bind(Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handleLevelup = _this.handleLevelup.bind(Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handleReload = _this.handleReload.bind(Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }
  /**
   * 
   */


  Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(InvestigatorPage, [{
    key: "handleReload",
    value: function handleReload() {
      this.props.onChange(_typescript_application_ApplicationEvent__WEBPACK_IMPORTED_MODULE_9__["ApplicationEvent"].showLoadingPage());
    }
    /**
     * 
     */

  }, {
    key: "handleChange",
    value: function handleChange(next, previous) {
      this.props.onChange(_typescript_application_ApplicationEvent__WEBPACK_IMPORTED_MODULE_9__["ApplicationEvent"].use(next));
    }
    /**
     * 
     */

  }, {
    key: "handleLevelup",
    value: function handleLevelup() {
      this.props.onChange(_typescript_application_ApplicationEvent__WEBPACK_IMPORTED_MODULE_9__["ApplicationEvent"].use(this.props.investigator.levelup()));
    }
    /**
     * 
     */

  }, {
    key: "handleSkillSelection",
    value: function handleSkillSelection(skill) {
      this.props.onChange(_typescript_application_ApplicationEvent__WEBPACK_IMPORTED_MODULE_9__["ApplicationEvent"].use(this.props.investigator.toggleForUpdate(skill)));
    }
    /**
     * 
     */

  }, {
    key: "handleSave",
    value: function handleSave() {
      var now = new Date();
      var href = document.createElement('a');
      href.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(_typescript_unidoc_reducer__WEBPACK_IMPORTED_MODULE_8__["UnidocInvestigatorReducer"].reduce(this.props.investigator)));
      href.setAttribute('download', this.props.investigator.summary.name.first.toLocaleLowerCase() + '-' + this.props.investigator.summary.name.last.toLocaleLowerCase() + '-' + now.getFullYear() + '-' + now.getMonth() + '-' + now.getDay() + '-' + now.getHours() + '-' + now.getMinutes() + '-' + now.getSeconds() + '-' + now.getMilliseconds() + '.txt');
      href.style.display = 'none';
      document.body.appendChild(href);
      href.click();
      document.body.removeChild(href);
      href.remove();
    }
    /**
     * 
     */

  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('page page-investigator', this.props.className),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "layout layout-rotulus",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "row justify-content-center align-items-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "col-8 col-md-4 order-md-1 col-lg-3 order-lg-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 15
        }
      }, __jsx(HomeImage, {
        className: "img-fluid",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 17
        }
      })), __jsx("div", {
        className: "col-12 d-block d-md-none",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 15
        }
      }, __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 17
        }
      })), __jsx("div", {
        className: "col-12 col-md-8 order-md-1 col-lg-6 order-lg-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 17
        }
      }, __jsx(_SummaryRenderer__WEBPACK_IMPORTED_MODULE_10__["SummaryRenderer"], {
        value: this.props.investigator,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 19
        }
      }))), __jsx("div", {
        className: "col-12 d-block order-md-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 15
        }
      }, __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 17
        }
      })), __jsx("div", {
        className: "col-12 col-md-6 order-md-3 col-lg-3 order-lg-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 17
        }
      }, __jsx(_CharacteristicSetRenderer__WEBPACK_IMPORTED_MODULE_11__["CharacteristicSetRenderer"], {
        value: this.props.investigator,
        onChange: this.handleChange,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 19
        }
      }))), __jsx("div", {
        className: "col-12 d-block d-md-none order-md-3 order-lg-1 d-lg-block",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 15
        }
      }, __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 17
        }
      })), __jsx("div", {
        className: "col-12 col-md-6 order-md-3 col-lg order-lg-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 17
        }
      }, __jsx(_StatusRenderer__WEBPACK_IMPORTED_MODULE_12__["StatusRenderer"], {
        value: this.props.investigator,
        onChange: this.handleChange,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 19
        }
      }))), __jsx("div", {
        className: "col-12 d-block d-md-block order-md-3 order-lg-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 15
        }
      }, __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 17
        }
      })), __jsx("div", {
        className: "col-12 order-md-3 order-lg-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 17
        }
      }, __jsx(_AllSkillsRenderer__WEBPACK_IMPORTED_MODULE_13__["AllSkillsRenderer"], {
        value: this.props.investigator,
        onSelect: this.handleSkillSelection,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 19
        }
      })))), __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "col-12",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 15
        }
      }, __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 17
        }
      }), __jsx("button", {
        className: "btn btn-link btn-block",
        onClick: this.handleLevelup,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 17
        }
      }, "Gagner de l'exp\xE9rience"), __jsx("button", {
        className: "btn btn-primary btn-block",
        onClick: this.handleSave,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 17
        }
      }, "Sauvegarder la fiche"), __jsx("button", {
        className: "btn btn-link btn-block",
        onClick: this.handleReload,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 17
        }
      }, "Charger une nouvelle fiche"))))));
    }
  }]);

  return InvestigatorPage;
}(react__WEBPACK_IMPORTED_MODULE_6__["PureComponent"]);
/**
 * 
 */

(function (_InvestigatorPage) {})(InvestigatorPage || (InvestigatorPage = {}));

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/page/investigator/MovementRenderer.tsx":
/*!***********************************************************!*\
  !*** ./components/page/investigator/MovementRenderer.tsx ***!
  \***********************************************************/
/*! exports provided: MovementRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovementRenderer", function() { return MovementRenderer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layout_Triplet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../layout/Triplet */ "./components/layout/Triplet.tsx");
var _jsxFileName = "D:\\development\\rpg\\shubgath\\components\\page\\investigator\\MovementRenderer.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/**
 * 
 */

function MovementRenderer(properties) {
  return __jsx(_layout_Triplet__WEBPACK_IMPORTED_MODULE_1__["Triplet"], {
    superscript: "+1",
    subscript: "-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, properties.value);
}
/**
 * 
 */

_c = MovementRenderer;

(function (_MovementRenderer) {})(MovementRenderer || (MovementRenderer = {}));

var _c;

$RefreshReg$(_c, "MovementRenderer");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/page/investigator/SkillLine.tsx":
/*!****************************************************!*\
  !*** ./components/page/investigator/SkillLine.tsx ***!
  \****************************************************/
/*! exports provided: SkillLine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillLine", function() { return SkillLine; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _typescript_Toggler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../typescript/Toggler */ "./typescript/Toggler.ts");
/* harmony import */ var _Padding__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Padding */ "./components/Padding.tsx");
var _jsxFileName = "D:\\development\\rpg\\shubgath\\components\\page\\investigator\\SkillLine.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var IS_SELECTED = _typescript_Toggler__WEBPACK_IMPORTED_MODULE_2__["Toggler"].create('is-selected');
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
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('skill skill-default', properties.className, IS_SELECTED.toggle(properties.selected)),
    onClick: properties.onClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "skill-name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, name.substr(0, 1).toLocaleUpperCase(), name.substr(1)), __jsx("div", {
    className: "skill-filler",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "skill-values",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "skill-value",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx(_Padding__WEBPACK_IMPORTED_MODULE_3__["Padding"], {
    padding: ' ',
    of: dbase,
    size: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }), dbase, __jsx("span", {
    className: "percent",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 63
    }
  }, "%")), __jsx("div", {
    className: "skill-separator",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, "\xB7"), __jsx("div", {
    className: "skill-value",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx(_Padding__WEBPACK_IMPORTED_MODULE_3__["Padding"], {
    padding: ' ',
    of: dhalved,
    size: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }), dhalved, __jsx("span", {
    className: "percent",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 67
    }
  }, "%")), __jsx("div", {
    className: "skill-separator",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, "\xB7"), __jsx("div", {
    className: "skill-value",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx(_Padding__WEBPACK_IMPORTED_MODULE_3__["Padding"], {
    padding: ' ',
    of: dfifth,
    size: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }), dfifth, __jsx("span", {
    className: "percent",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 65
    }
  }, "%"))));
}
/**
 * 
 */

_c = SkillLine;

(function (_SkillLine) {})(SkillLine || (SkillLine = {}));

var _c;

$RefreshReg$(_c, "SkillLine");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/page/investigator/StatusRenderer.tsx":
/*!*********************************************************!*\
  !*** ./components/page/investigator/StatusRenderer.tsx ***!
  \*********************************************************/
/*! exports provided: StatusRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusRenderer", function() { return StatusRenderer; });
/* harmony import */ var D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _typescript_Investigator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../typescript/Investigator */ "./typescript/Investigator.ts");
/* harmony import */ var _typescript_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../typescript/utils */ "./typescript/utils/index.ts");
/* harmony import */ var _typescript_Mutables__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../typescript/Mutables */ "./typescript/Mutables.ts");
/* harmony import */ var _typescript_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../typescript/redux */ "./typescript/redux/index.ts");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../Label */ "./components/Label.tsx");
/* harmony import */ var _form_BooleanField__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../form/BooleanField */ "./components/form/BooleanField.tsx");
/* harmony import */ var _form_BoundStatisticField__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../form/BoundStatisticField */ "./components/form/BoundStatisticField.tsx");
/* harmony import */ var _CopyField__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./CopyField */ "./components/page/investigator/CopyField.tsx");
/* harmony import */ var _MovementRenderer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./MovementRenderer */ "./components/page/investigator/MovementRenderer.tsx");







var _jsxFileName = "D:\\development\\rpg\\shubgath\\components\\page\\investigator\\StatusRenderer.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }











/**
 * 
 */

var StatusRenderer = /*#__PURE__*/function (_PureComponent) {
  Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(StatusRenderer, _PureComponent);

  var _super = _createSuper(StatusRenderer);

  /**
   * 
   */

  /**
   * 
   */
  function StatusRenderer(properties) {
    var _this;

    Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, StatusRenderer);

    _this = _super.call(this, properties);
    _this.handleTemporaryInsaneChange = _this.handleTemporaryInsaneChange.bind(Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.handleIndefinitelyInsaneChange = _this.handleIndefinitelyInsaneChange.bind(Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.handleMajorWoundChange = _this.handleMajorWoundChange.bind(Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.handleHealthChange = _this.handleHealthChange.bind(Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.handleMagicChange = _this.handleMagicChange.bind(Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.handleMentalHealthChange = _this.handleMentalHealthChange.bind(Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    return _this;
  }
  /**
   * 
   */


  Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(StatusRenderer, [{
    key: "handleTemporaryInsaneChange",
    value: function handleTemporaryInsaneChange(event) {
      this.props.onChange(_typescript_Investigator__WEBPACK_IMPORTED_MODULE_8__["Investigator"].create(_objectSpread(_objectSpread({}, this.props.value), {}, {
        mutables: _typescript_Mutables__WEBPACK_IMPORTED_MODULE_10__["Mutables"].create(_objectSpread(_objectSpread({}, this.props.value.mutables), {}, {
          temporaryInsane: _typescript_redux__WEBPACK_IMPORTED_MODULE_11__["DataReducer"].reduce(this.props.value.mutables.temporaryInsane, event)
        }))
      })), this.props.value);
    }
    /**
     * 
     */

  }, {
    key: "handleIndefinitelyInsaneChange",
    value: function handleIndefinitelyInsaneChange(event) {
      this.props.onChange(_typescript_Investigator__WEBPACK_IMPORTED_MODULE_8__["Investigator"].create(_objectSpread(_objectSpread({}, this.props.value), {}, {
        mutables: _typescript_Mutables__WEBPACK_IMPORTED_MODULE_10__["Mutables"].create(_objectSpread(_objectSpread({}, this.props.value.mutables), {}, {
          indefinitelyInsane: _typescript_redux__WEBPACK_IMPORTED_MODULE_11__["DataReducer"].reduce(this.props.value.mutables.indefinitelyInsane, event)
        }))
      })), this.props.value);
    }
    /**
     * 
     */

  }, {
    key: "handleMajorWoundChange",
    value: function handleMajorWoundChange(event) {
      this.props.onChange(_typescript_Investigator__WEBPACK_IMPORTED_MODULE_8__["Investigator"].create(_objectSpread(_objectSpread({}, this.props.value), {}, {
        mutables: _typescript_Mutables__WEBPACK_IMPORTED_MODULE_10__["Mutables"].create(_objectSpread(_objectSpread({}, this.props.value.mutables), {}, {
          majorWound: _typescript_redux__WEBPACK_IMPORTED_MODULE_11__["DataReducer"].reduce(this.props.value.mutables.majorWound, event)
        }))
      })), this.props.value);
    }
    /**
     * 
     */

  }, {
    key: "handleHealthChange",
    value: function handleHealthChange(event) {
      this.props.onChange(_typescript_Investigator__WEBPACK_IMPORTED_MODULE_8__["Investigator"].create(_objectSpread(_objectSpread({}, this.props.value), {}, {
        mutables: _typescript_Mutables__WEBPACK_IMPORTED_MODULE_10__["Mutables"].create(_objectSpread(_objectSpread({}, this.props.value.mutables), {}, {
          health: _typescript_redux__WEBPACK_IMPORTED_MODULE_11__["DataReducer"].reduce(this.props.value.mutables.health, event)
        }))
      })), this.props.value);
    }
    /**
     * 
     */

  }, {
    key: "handleMagicChange",
    value: function handleMagicChange(event) {
      this.props.onChange(_typescript_Investigator__WEBPACK_IMPORTED_MODULE_8__["Investigator"].create(_objectSpread(_objectSpread({}, this.props.value), {}, {
        mutables: _typescript_Mutables__WEBPACK_IMPORTED_MODULE_10__["Mutables"].create(_objectSpread(_objectSpread({}, this.props.value.mutables), {}, {
          magic: _typescript_redux__WEBPACK_IMPORTED_MODULE_11__["DataReducer"].reduce(this.props.value.mutables.magic, event)
        }))
      })), this.props.value);
    }
    /**
     * 
     */

  }, {
    key: "handleMentalHealthChange",
    value: function handleMentalHealthChange(event) {
      this.props.onChange(_typescript_Investigator__WEBPACK_IMPORTED_MODULE_8__["Investigator"].create(_objectSpread(_objectSpread({}, this.props.value), {}, {
        mutables: _typescript_Mutables__WEBPACK_IMPORTED_MODULE_10__["Mutables"].create(_objectSpread(_objectSpread({}, this.props.value.mutables), {}, {
          mentalHealth: _typescript_redux__WEBPACK_IMPORTED_MODULE_11__["DataReducer"].reduce(this.props.value.mutables.mentalHealth, event)
        }))
      })), this.props.value);
    }
    /**
     * 
     */

  }, {
    key: "render",
    value: function render() {
      var investigator = this.props.value;
      var mutables = this.props.value.mutables;
      var characteristics = investigator.characteristics;
      return __jsx("div", {
        className: "container-fluid",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "col-4 col-md-6 col-lg",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 11
        }
      }, __jsx(_form_BoundStatisticField__WEBPACK_IMPORTED_MODULE_14__["BoundStatisticField"], {
        onChange: this.handleHealthChange,
        value: mutables.health,
        maximum: investigator.maximumHP,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 13
        }
      }, __jsx(_Label__WEBPACK_IMPORTED_MODULE_12__["Label"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 15
        }
      }, "Points de vie"))), __jsx("div", {
        className: "col-4 col-md-6 col-lg",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 11
        }
      }, __jsx(_form_BoundStatisticField__WEBPACK_IMPORTED_MODULE_14__["BoundStatisticField"], {
        onChange: this.handleMentalHealthChange,
        value: mutables.mentalHealth,
        maximum: characteristics.power.sum(),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 13
        }
      }, __jsx(_Label__WEBPACK_IMPORTED_MODULE_12__["Label"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 15
        }
      }, "Sant\xE9 mentale"))), __jsx("div", {
        className: "col-4 col-md-6 col-lg",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 11
        }
      }, __jsx(_form_BoundStatisticField__WEBPACK_IMPORTED_MODULE_14__["BoundStatisticField"], {
        onChange: this.handleMagicChange,
        value: mutables.magic,
        maximum: investigator.maximumMP,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 13
        }
      }, __jsx(_Label__WEBPACK_IMPORTED_MODULE_12__["Label"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 15
        }
      }, "Points de magie"))), __jsx("div", {
        className: "col-4 col-md-6 col-lg",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 11
        }
      }, __jsx(_form_BooleanField__WEBPACK_IMPORTED_MODULE_13__["BooleanField"], {
        value: mutables.majorWound,
        onChange: this.handleMajorWoundChange,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 13
        }
      }, __jsx(_Label__WEBPACK_IMPORTED_MODULE_12__["Label"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 15
        }
      }, "Blessure grave"))), __jsx("div", {
        className: "col-4 col-md-6 col-lg",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 11
        }
      }, __jsx(_form_BooleanField__WEBPACK_IMPORTED_MODULE_13__["BooleanField"], {
        value: mutables.temporaryInsane,
        onChange: this.handleTemporaryInsaneChange,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 13
        }
      }, __jsx(_Label__WEBPACK_IMPORTED_MODULE_12__["Label"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 15
        }
      }, "Folie temporaire"))), __jsx("div", {
        className: "col-4 col-md-6 col-lg",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 11
        }
      }, __jsx(_form_BooleanField__WEBPACK_IMPORTED_MODULE_13__["BooleanField"], {
        value: mutables.indefinitelyInsane,
        onChange: this.handleIndefinitelyInsaneChange,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 13
        }
      }, __jsx(_Label__WEBPACK_IMPORTED_MODULE_12__["Label"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 15
        }
      }, "Folie persistante"))), __jsx("div", {
        className: "col-4 col-md-6 col-lg",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 11
        }
      }, __jsx(_CopyField__WEBPACK_IMPORTED_MODULE_15__["CopyField"], {
        value: investigator.impact,
        className: "align-items-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 13
        }
      }, __jsx(_Label__WEBPACK_IMPORTED_MODULE_12__["Label"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 15
        }
      }, "Impact"), investigator.impact)), __jsx("div", {
        className: "col-4 col-md-6 col-lg",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 11
        }
      }, __jsx(_CopyField__WEBPACK_IMPORTED_MODULE_15__["CopyField"], {
        value: investigator.carrure.toString(),
        className: "align-items-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 13
        }
      }, __jsx(_Label__WEBPACK_IMPORTED_MODULE_12__["Label"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 15
        }
      }, "Carrure"), investigator.carrure)), __jsx("div", {
        className: "col-4 col-md-6 col-lg",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 11
        }
      }, __jsx(_CopyField__WEBPACK_IMPORTED_MODULE_15__["CopyField"], {
        value: investigator.movement.toString(),
        className: "align-items-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 13
        }
      }, __jsx(_Label__WEBPACK_IMPORTED_MODULE_12__["Label"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 15
        }
      }, "Mouvement"), __jsx(_MovementRenderer__WEBPACK_IMPORTED_MODULE_16__["MovementRenderer"], {
        value: investigator.carrure,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 15
        }
      })))));
    }
  }]);

  return StatusRenderer;
}(react__WEBPACK_IMPORTED_MODULE_7__["PureComponent"]);
/**
 * 
 */

StatusRenderer.defaultProps = {
  /**
   * 
   */
  onChange: _typescript_utils__WEBPACK_IMPORTED_MODULE_9__["Empty"].callback
};

(function (_StatusRenderer) {})(StatusRenderer || (StatusRenderer = {}));

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/page/investigator/SummaryRenderer.tsx":
/*!**********************************************************!*\
  !*** ./components/page/investigator/SummaryRenderer.tsx ***!
  \**********************************************************/
/*! exports provided: SummaryRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryRenderer", function() { return SummaryRenderer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _typescript_Gender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../typescript/Gender */ "./typescript/Gender.ts");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Label */ "./components/Label.tsx");
/* harmony import */ var _CopyField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CopyField */ "./components/page/investigator/CopyField.tsx");
var _jsxFileName = "D:\\development\\rpg\\shubgath\\components\\page\\investigator\\SummaryRenderer.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/**
 * 
 */

function SummaryRenderer(properties) {
  var summary = properties.value.summary;
  var name = summary.name == null ? 'Non Défini' : summary.name.toString();
  var gender = summary.gender == null ? 'Non Défini' : summary.gender === _typescript_Gender__WEBPACK_IMPORTED_MODULE_1__["Gender"].MALE ? 'M' : 'F';
  var birthdate = summary.birthdate == null ? 'Non Défini' : summary.birthdate;
  var hiringdate = summary.hiringdate == null ? 'Non Défini' : summary.hiringdate;
  var birthplace = summary.birthplace == null ? 'Non Défini' : summary.birthplace.toString();
  var home = summary.home == null ? 'Non Défini' : summary.home.toString();
  return __jsx("div", {
    className: "container-fluid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-12 col-md-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, __jsx(_CopyField__WEBPACK_IMPORTED_MODULE_3__["CopyField"], {
    value: name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx(_Label__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 15
    }
  }, "Agent"), name)), __jsx("div", {
    className: "col-6 col-md-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, __jsx(_CopyField__WEBPACK_IMPORTED_MODULE_3__["CopyField"], {
    value: gender,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, __jsx(_Label__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 15
    }
  }, "Sexe"), gender)), __jsx("div", {
    className: "col-6 col-md-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, __jsx(_CopyField__WEBPACK_IMPORTED_MODULE_3__["CopyField"], {
    value: summary.age.toString(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 12
    }
  }, __jsx(_Label__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  }, "\xC2ge"), summary.age)), __jsx("div", {
    className: "col-12 col-md-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, __jsx(_CopyField__WEBPACK_IMPORTED_MODULE_3__["CopyField"], {
    value: summary.alias,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx(_Label__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  }, "Alias"), summary.alias)), __jsx("div", {
    className: "col-12 col-md-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, __jsx(_CopyField__WEBPACK_IMPORTED_MODULE_3__["CopyField"], {
    value: summary.job,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, __jsx(_Label__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 15
    }
  }, "Couverture"), summary.job)), __jsx("div", {
    className: "col-12 col-md-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, __jsx(_CopyField__WEBPACK_IMPORTED_MODULE_3__["CopyField"], {
    value: summary.matricule,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, __jsx(_Label__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 15
    }
  }, "Matricule"), summary.matricule)), __jsx("div", {
    className: "col-12 col-md-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, __jsx(_CopyField__WEBPACK_IMPORTED_MODULE_3__["CopyField"], {
    value: birthdate,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, __jsx(_Label__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 15
    }
  }, "Date de naissance"), birthdate)), __jsx("div", {
    className: "col-12 col-md-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }, __jsx(_CopyField__WEBPACK_IMPORTED_MODULE_3__["CopyField"], {
    value: hiringdate,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, __jsx(_Label__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 15
    }
  }, "Date d'int\xE9gration"), hiringdate)), __jsx("div", {
    className: "col-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }, __jsx(_CopyField__WEBPACK_IMPORTED_MODULE_3__["CopyField"], {
    value: birthplace,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, __jsx(_Label__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 15
    }
  }, "Lieu de naissance"), birthplace)), __jsx("div", {
    className: "col-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 11
    }
  }, __jsx(_CopyField__WEBPACK_IMPORTED_MODULE_3__["CopyField"], {
    value: home,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, __jsx(_Label__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 15
    }
  }, "Lieu de r\xE9sidence"), home))));
}
/**
 * 
 */

_c = SummaryRenderer;

(function (_SummaryRenderer) {})(SummaryRenderer || (SummaryRenderer = {}));

var _c;

$RefreshReg$(_c, "SummaryRenderer");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/page/investigator/ValueRenderer.tsx":
/*!********************************************************!*\
  !*** ./components/page/investigator/ValueRenderer.tsx ***!
  \********************************************************/
/*! exports provided: ValueRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueRenderer", function() { return ValueRenderer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout_Triplet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layout/Triplet */ "./components/layout/Triplet.tsx");
var _jsxFileName = "D:\\development\\rpg\\shubgath\\components\\page\\investigator\\ValueRenderer.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/**
 * 
 */

function ValueRenderer(properties) {
  return __jsx(_layout_Triplet__WEBPACK_IMPORTED_MODULE_2__["Triplet"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('value', properties.className),
    subscript: properties.children.fifth(),
    superscript: properties.children.half(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, properties.children.sum().toString());
}
/**
 * 
 */

_c = ValueRenderer;

(function (_ValueRenderer) {})(ValueRenderer || (ValueRenderer = {}));

var _c;

$RefreshReg$(_c, "ValueRenderer");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/investigator.tsx":
/*!********************************!*\
  !*** ./pages/investigator.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return investigator; });
/* harmony import */ var D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout_VanillaLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout/VanillaLayout */ "./components/layout/VanillaLayout.tsx");
/* harmony import */ var _components_page_investigator_InvestigatorPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/page/investigator/InvestigatorPage */ "./components/page/investigator/InvestigatorPage.tsx");
/* harmony import */ var _components_page_investigator_InvestigatorNotLoadedPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/page/investigator/InvestigatorNotLoadedPage */ "./components/page/investigator/InvestigatorNotLoadedPage.tsx");

var _jsxFileName = "D:\\development\\rpg\\shubgath\\pages\\investigator.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





/**
*
*/

function investigator(properties) {
  return __jsx(_components_layout_VanillaLayout__WEBPACK_IMPORTED_MODULE_3__["VanillaLayout"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, "Shubniggurath - Investigateur"), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  })), properties.investigator ? __jsx(_components_page_investigator_InvestigatorPage__WEBPACK_IMPORTED_MODULE_4__["InvestigatorPage"], Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, properties, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 35
    }
  })) : __jsx(_components_page_investigator_InvestigatorNotLoadedPage__WEBPACK_IMPORTED_MODULE_5__["InvestigatorNotLoadedPage"], Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, properties, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 76
    }
  })));
}

(function (_investigator) {})(investigator || (investigator = {}));

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlL2ludmVzdGlnYXRvci9BbGxTa2lsbHNSZW5kZXJlci50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcGFnZS9pbnZlc3RpZ2F0b3IvQ2hhcmFjdGVyaXN0aWNTZXRSZW5kZXJlci50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcGFnZS9pbnZlc3RpZ2F0b3IvQ29weUZpZWxkLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlL2ludmVzdGlnYXRvci9JbnZlc3RpZ2F0b3JQYWdlLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlL2ludmVzdGlnYXRvci9Nb3ZlbWVudFJlbmRlcmVyLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlL2ludmVzdGlnYXRvci9Ta2lsbExpbmUudHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3BhZ2UvaW52ZXN0aWdhdG9yL1N0YXR1c1JlbmRlcmVyLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlL2ludmVzdGlnYXRvci9TdW1tYXJ5UmVuZGVyZXIudHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3BhZ2UvaW52ZXN0aWdhdG9yL1ZhbHVlUmVuZGVyZXIudHN4Iiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbnZlc3RpZ2F0b3IudHN4Il0sIm5hbWVzIjpbInJlbmRlclNraWxsIiwidXBkYXRlcyIsIm9uU2VsZWN0IiwicGFpciIsImhhcyIsImxlZnQiLCJyaWdodCIsInRvU3RyaW5nIiwiYmluZCIsInVuZGVmaW5lZCIsIkFsbFNraWxsc1JlbmRlcmVyIiwicHJvcGVydGllcyIsImRlZmF1bHRTa2lsbHMiLCJ2YWx1ZSIsImNvbXB1dGVEZWZhdWx0U2tpbGxzIiwibWludXMiLCJza2lsbHMiLCJpbmhlcml0IiwiaGFuZGxlU2tpbGxSZW5kZXJpbmciLCJlbnRyaWVzIiwibWFwIiwic2xpY2UiLCJzaXplIiwiQ2hhcmFjdGVyaXN0aWNTZXRSZW5kZXJlciIsImhhbmRsZUx1Y2tDaGFuZ2UiLCJoYW5kbGVMdWNrSW5jcmVtZW50IiwiZXZlbnQiLCJwcm9wcyIsIm9uQ2hhbmdlIiwiSW52ZXN0aWdhdG9yIiwiY3JlYXRlIiwibXV0YWJsZXMiLCJNdXRhYmxlcyIsImx1Y2siLCJEYXRhUmVkdWNlciIsInJlZHVjZSIsImNvbnNvbGUiLCJsb2ciLCJjaGFyYWN0ZXJpc3RpY3MiLCJhcHBlYXJhbmNlIiwiZWR1Y2F0aW9uIiwicG93ZXIiLCJjb25zdGl0dXRpb24iLCJzdHJlbmd0aCIsImRleHRlcml0eSIsImludGVsbGlnZW5jZSIsIlB1cmVDb21wb25lbnQiLCJDb3B5RmllbGQiLCJzdGF0ZSIsImNvcGllZCIsImhhbmRsZUNsaWNrIiwiaGFuZGxlS2V5UHJlc3MiLCJoYW5kbGVUaW1lb3V0IiwiY29weSIsImtleSIsInNldFN0YXRlIiwid2luZG93IiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImZvY3VzIiwib25Gb2N1cyIsIm9uQmx1ciIsImNsYXNzbmFtZXMiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsInJlbmRlclRvb2xUaXAiLCJIb21lSW1hZ2UiLCJyZXF1aXJlIiwiSW52ZXN0aWdhdG9yUGFnZSIsImhhbmRsZUNoYW5nZSIsImhhbmRsZVNhdmUiLCJoYW5kbGVTa2lsbFNlbGVjdGlvbiIsImhhbmRsZUxldmVsdXAiLCJoYW5kbGVSZWxvYWQiLCJBcHBsaWNhdGlvbkV2ZW50Iiwic2hvd0xvYWRpbmdQYWdlIiwibmV4dCIsInByZXZpb3VzIiwidXNlIiwiaW52ZXN0aWdhdG9yIiwibGV2ZWx1cCIsInNraWxsIiwidG9nZ2xlRm9yVXBkYXRlIiwibm93IiwiRGF0ZSIsImhyZWYiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJVbmlkb2NJbnZlc3RpZ2F0b3JSZWR1Y2VyIiwic3VtbWFyeSIsIm5hbWUiLCJmaXJzdCIsInRvTG9jYWxlTG93ZXJDYXNlIiwibGFzdCIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXkiLCJnZXRIb3VycyIsImdldE1pbnV0ZXMiLCJnZXRTZWNvbmRzIiwiZ2V0TWlsbGlzZWNvbmRzIiwic3R5bGUiLCJkaXNwbGF5IiwiYm9keSIsImFwcGVuZENoaWxkIiwiY2xpY2siLCJyZW1vdmVDaGlsZCIsInJlbW92ZSIsIk1vdmVtZW50UmVuZGVyZXIiLCJJU19TRUxFQ1RFRCIsIlRvZ2dsZXIiLCJTa2lsbExpbmUiLCJiYXNlIiwic3VtIiwiaGFsdmVkIiwiaGFsZiIsImZpZnRoIiwiZGJhc2UiLCJkaGFsdmVkIiwiZGZpZnRoIiwidG9nZ2xlIiwic2VsZWN0ZWQiLCJvbkNsaWNrIiwic3Vic3RyIiwidG9Mb2NhbGVVcHBlckNhc2UiLCJTdGF0dXNSZW5kZXJlciIsImhhbmRsZVRlbXBvcmFyeUluc2FuZUNoYW5nZSIsImhhbmRsZUluZGVmaW5pdGVseUluc2FuZUNoYW5nZSIsImhhbmRsZU1ham9yV291bmRDaGFuZ2UiLCJoYW5kbGVIZWFsdGhDaGFuZ2UiLCJoYW5kbGVNYWdpY0NoYW5nZSIsImhhbmRsZU1lbnRhbEhlYWx0aENoYW5nZSIsInRlbXBvcmFyeUluc2FuZSIsImluZGVmaW5pdGVseUluc2FuZSIsIm1ham9yV291bmQiLCJoZWFsdGgiLCJtYWdpYyIsIm1lbnRhbEhlYWx0aCIsIm1heGltdW1IUCIsIm1heGltdW1NUCIsImltcGFjdCIsImNhcnJ1cmUiLCJtb3ZlbWVudCIsImRlZmF1bHRQcm9wcyIsIkVtcHR5IiwiY2FsbGJhY2siLCJTdW1tYXJ5UmVuZGVyZXIiLCJnZW5kZXIiLCJHZW5kZXIiLCJNQUxFIiwiYmlydGhkYXRlIiwiaGlyaW5nZGF0ZSIsImJpcnRocGxhY2UiLCJob21lIiwiYWdlIiwiYWxpYXMiLCJqb2IiLCJtYXRyaWN1bGUiLCJWYWx1ZVJlbmRlcmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7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QUFNLFFBQUksRUFBQyxVQUFYO0FBQXNCLFdBQU8sRUFBQyx1Q0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsRUFPSUEsVUFBVSxDQUFDb0UsWUFBWCxHQUEwQixNQUFDLCtGQUFELGdJQUF1QnBFLFVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBMUIsR0FBbUUsTUFBQyxpSEFBRCxnSUFBZ0NBLFVBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FQdkUsQ0FERjtBQWFEOzs4QkFHZ0JvRSxZLEtBQUFBLFkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW52ZXN0aWdhdG9yLmIwYjEyMDExM2E0NTcxZmFiNDgxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWFjdEVsZW1lbnQgfSBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCB7IEludmVzdGlnYXRvciB9IGZyb20gJy4uLy4uLy4uL3R5cGVzY3JpcHQvSW52ZXN0aWdhdG9yJ1xyXG5pbXBvcnQgeyBTa2lsbCB9IGZyb20gJy4uLy4uLy4uL3R5cGVzY3JpcHQvU2tpbGwnXHJcbmltcG9ydCB7IFZhbHVlIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXNjcmlwdC9WYWx1ZSdcclxuaW1wb3J0IHsgUGFpciB9IGZyb20gJy4uLy4uLy4uL3R5cGVzY3JpcHQvZGF0YS9QYWlyJ1xyXG5pbXBvcnQgeyBTa2lsbFNldCB9IGZyb20gJy4uLy4uLy4uL3R5cGVzY3JpcHQvU2tpbGxTZXQnXHJcblxyXG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gJy4uLy4uL0xhYmVsJ1xyXG5cclxuaW1wb3J0IHsgU2tpbGxMaW5lIH0gZnJvbSAnLi9Ta2lsbExpbmUnXHJcblxyXG5mdW5jdGlvbiByZW5kZXJTa2lsbCh1cGRhdGVzOiBTa2lsbFNldCwgb25TZWxlY3Q6IChza2lsbDogU2tpbGwpID0+IHZvaWQsIHBhaXI6IFBhaXI8U2tpbGwsIFZhbHVlPikgOiBSZWFjdEVsZW1lbnQge1xyXG4gIHJldHVybiA8U2tpbGxMaW5lIFxyXG4gICAgY2xhc3NOYW1lPXsnaXMtY2xpY2thYmxlJ30gXHJcbiAgICBzZWxlY3RlZD17dXBkYXRlcy5oYXMocGFpci5sZWZ0KX0gXHJcbiAgICBza2lsbD17cGFpci5sZWZ0fSBcclxuICAgIHZhbHVlPXtwYWlyLnJpZ2h0fSBcclxuICAgIGtleT17cGFpci5sZWZ0LnRvU3RyaW5nKCl9IFxyXG4gICAgb25DbGljaz17b25TZWxlY3QuYmluZCh1bmRlZmluZWQsIHBhaXIubGVmdCl9XHJcbiAgLz5cclxufVxyXG5cclxuLyoqXHJcbiAqIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIEFsbFNraWxsc1JlbmRlcmVyIChwcm9wZXJ0aWVzOiBBbGxTa2lsbHNSZW5kZXJlci5Qcm9wZXJ0aWVzKSB7ICBcclxuICBjb25zdCBkZWZhdWx0U2tpbGxzOiBTa2lsbFNldCA9IHByb3BlcnRpZXMudmFsdWUuY29tcHV0ZURlZmF1bHRTa2lsbHMoKS5taW51cyhwcm9wZXJ0aWVzLnZhbHVlLnNraWxscylcclxuICBjb25zdCBza2lsbHM6IFNraWxsU2V0ID0gcHJvcGVydGllcy52YWx1ZS5za2lsbHMuaW5oZXJpdChwcm9wZXJ0aWVzLnZhbHVlLmNvbXB1dGVEZWZhdWx0U2tpbGxzKCkpXHJcblxyXG4gIGNvbnN0IGhhbmRsZVNraWxsUmVuZGVyaW5nID0gcmVuZGVyU2tpbGwuYmluZCh1bmRlZmluZWQsIHByb3BlcnRpZXMudmFsdWUudXBkYXRlcywgcHJvcGVydGllcy5vblNlbGVjdClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXItZmx1aWQnPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTEyIGNvbC1tZC0xMiBjb2wtbGcnPlxyXG4gICAgICAgICAgPExhYmVsPkNvbXDDqXRlbmNlcyAoRXhwZXJ0aXNlKTwvTGFiZWw+XHJcbiAgICAgICAgICB7IHNraWxscy5lbnRyaWVzLm1hcChoYW5kbGVTa2lsbFJlbmRlcmluZykgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtMTIgZC1ibG9jayBkLWxnLW5vbmUnPlxyXG4gICAgICAgICAgPGJyLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTEyIGNvbC1tZC02IGNvbC1sZyc+XHJcbiAgICAgICAgICA8TGFiZWw+Q29tcMOpdGVuY2VzIChEw6lmYXV0KTwvTGFiZWw+XHJcbiAgICAgICAgICB7IGRlZmF1bHRTa2lsbHMuZW50cmllcy5zbGljZSgwLCBkZWZhdWx0U2tpbGxzLmVudHJpZXMuc2l6ZSA+PiAxKS5tYXAoaGFuZGxlU2tpbGxSZW5kZXJpbmcpIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTEyIGNvbC1tZC02IGNvbC1sZyc+XHJcbiAgICAgICAgICA8TGFiZWwgY2xhc3NOYW1lPSdkLW5vbmUgZC1tZC1mbGV4Jz5Db21ww6l0ZW5jZXMgKETDqWZhdXQpPC9MYWJlbD5cclxuICAgICAgICAgIHsgZGVmYXVsdFNraWxscy5lbnRyaWVzLnNsaWNlKGRlZmF1bHRTa2lsbHMuZW50cmllcy5zaXplID4+IDEpLm1hcChoYW5kbGVTa2lsbFJlbmRlcmluZykgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuLyoqXHJcbiAqIFxyXG4gKi9cclxuZXhwb3J0IG5hbWVzcGFjZSBBbGxTa2lsbHNSZW5kZXJlciB7XHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgZXhwb3J0IHR5cGUgUHJvcGVydGllcyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIGNsYXNzTmFtZT86IHN0cmluZyB8IHVuZGVmaW5lZCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICB2YWx1ZTogSW52ZXN0aWdhdG9yLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIG9uU2VsZWN0OiAoc2tpbGw6IFNraWxsKSA9PiB2b2lkXHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgUHVyZUNvbXBvbmVudCwgUmVhY3RFbGVtZW50IH0gZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgeyBJbnZlc3RpZ2F0b3IgfSBmcm9tICcuLi8uLi8uLi90eXBlc2NyaXB0L0ludmVzdGlnYXRvcidcclxuaW1wb3J0IHsgQ2hhcmFjdGVyaXN0aWNTZXQgfSBmcm9tICcuLi8uLi8uLi90eXBlc2NyaXB0L0NoYXJhY3RlcmlzdGljU2V0J1xyXG5pbXBvcnQgeyBEYXRhRXZlbnQgfSBmcm9tICcuLi8uLi8uLi90eXBlc2NyaXB0L3JlZHV4L0RhdGFFdmVudCdcclxuaW1wb3J0IHsgRGF0YVJlZHVjZXIgfSBmcm9tICcuLi8uLi8uLi90eXBlc2NyaXB0L3JlZHV4J1xyXG5pbXBvcnQgeyBNdXRhYmxlcyB9IGZyb20gJy4uLy4uLy4uL3R5cGVzY3JpcHQvTXV0YWJsZXMnXHJcblxyXG5pbXBvcnQgeyBWYWx1ZUZpZWxkIH0gZnJvbSAnLi4vLi4vZm9ybS9WYWx1ZUZpZWxkJ1xyXG5pbXBvcnQgeyBJbmNyZW1lbnRFdmVudCB9IGZyb20gJy4uLy4uL2luY3JlbWVudC9JbmNyZW1lbnRFdmVudCdcclxuXHJcbmltcG9ydCB7IExhYmVsIH0gZnJvbSAnLi4vLi4vTGFiZWwnXHJcblxyXG5pbXBvcnQgeyBWYWx1ZVJlbmRlcmVyIH0gZnJvbSAnLi9WYWx1ZVJlbmRlcmVyJ1xyXG5pbXBvcnQgeyBDb3B5RmllbGQgfSBmcm9tICcuL0NvcHlGaWVsZCdcclxuXHJcbi8qKlxyXG4gKiBcclxuICovXHJcbmV4cG9ydCBjbGFzcyBDaGFyYWN0ZXJpc3RpY1NldFJlbmRlcmVyIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxDaGFyYWN0ZXJpc3RpY1NldFJlbmRlcmVyLlByb3BlcnRpZXM+IFxyXG57XHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yIChwcm9wZXJ0aWVzOiBDaGFyYWN0ZXJpc3RpY1NldFJlbmRlcmVyLlByb3BlcnRpZXMpIHtcclxuICAgIHN1cGVyKHByb3BlcnRpZXMpXHJcblxyXG4gICAgdGhpcy5oYW5kbGVMdWNrQ2hhbmdlID0gdGhpcy5oYW5kbGVMdWNrQ2hhbmdlLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlTHVja0luY3JlbWVudCA9IHRoaXMuaGFuZGxlTHVja0luY3JlbWVudC5iaW5kKHRoaXMpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwcml2YXRlIGhhbmRsZUx1Y2tDaGFuZ2UgKGV2ZW50OiBEYXRhRXZlbnQ8bnVtYmVyPik6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UpIHtcclxuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShcclxuICAgICAgICBJbnZlc3RpZ2F0b3IuY3JlYXRlKHtcclxuICAgICAgICAgIC4uLnRoaXMucHJvcHMudmFsdWUsXHJcbiAgICAgICAgICBtdXRhYmxlczogTXV0YWJsZXMuY3JlYXRlKHtcclxuICAgICAgICAgICAgLi4udGhpcy5wcm9wcy52YWx1ZS5tdXRhYmxlcyxcclxuICAgICAgICAgICAgbHVjazogRGF0YVJlZHVjZXIucmVkdWNlKHRoaXMucHJvcHMudmFsdWUubXV0YWJsZXMubHVjaywgZXZlbnQpXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHRoaXMucHJvcHMudmFsdWVcclxuICAgICAgKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBoYW5kbGVMdWNrSW5jcmVtZW50IChldmVudDogSW5jcmVtZW50RXZlbnQpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKGV2ZW50KVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHNlZSBSZWFjdC5Db21wb25lbnQucmVuZGVyXHJcbiAgICovXHJcbiAgcHVibGljIHJlbmRlciAoKTogUmVhY3RFbGVtZW50IHtcclxuICAgIGNvbnN0IGNoYXJhY3RlcmlzdGljczogQ2hhcmFjdGVyaXN0aWNTZXQgPSB0aGlzLnByb3BzLnZhbHVlLmNoYXJhY3RlcmlzdGljc1xyXG4gICAgY29uc3QgbXV0YWJsZXM6IE11dGFibGVzID0gdGhpcy5wcm9wcy52YWx1ZS5tdXRhYmxlc1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lci1mbHVpZCc+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC00IGNvbC1tZC02Jz5cclxuICAgICAgICAgICAgICA8Q29weUZpZWxkIHZhbHVlPXtjaGFyYWN0ZXJpc3RpY3MuYXBwZWFyYW5jZS50b1N0cmluZygpfSBjbGFzc05hbWU9J2FsaWduLWl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWw+QXBwYXJlbmNlPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxWYWx1ZVJlbmRlcmVyPntjaGFyYWN0ZXJpc3RpY3MuYXBwZWFyYW5jZX08L1ZhbHVlUmVuZGVyZXI+XHJcbiAgICAgICAgICAgICAgPC9Db3B5RmllbGQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTQgY29sLW1kLTYnPlxyXG4gICAgICAgICAgICAgIDxDb3B5RmllbGQgdmFsdWU9e2NoYXJhY3RlcmlzdGljcy5lZHVjYXRpb24udG9TdHJpbmcoKX0gY2xhc3NOYW1lPSdhbGlnbi1pdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsPsOJZHVjYXRpb248L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPFZhbHVlUmVuZGVyZXI+eyBjaGFyYWN0ZXJpc3RpY3MuZWR1Y2F0aW9uIH08L1ZhbHVlUmVuZGVyZXI+XHJcbiAgICAgICAgICAgICAgPC9Db3B5RmllbGQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTQgY29sLW1kLTYnPlxyXG4gICAgICAgICAgICAgIDxDb3B5RmllbGQgdmFsdWU9e2NoYXJhY3RlcmlzdGljcy5wb3dlci50b1N0cmluZygpfSBjbGFzc05hbWU9J2FsaWduLWl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWw+UG91dm9pcjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8VmFsdWVSZW5kZXJlcj57IGNoYXJhY3RlcmlzdGljcy5wb3dlciB9PC9WYWx1ZVJlbmRlcmVyPlxyXG4gICAgICAgICAgICAgIDwvQ29weUZpZWxkPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC00IGNvbC1tZC02Jz5cclxuICAgICAgICAgICAgICA8Q29weUZpZWxkIHZhbHVlPXtjaGFyYWN0ZXJpc3RpY3MuY29uc3RpdHV0aW9uLnRvU3RyaW5nKCl9IGNsYXNzTmFtZT0nYWxpZ24taXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgIDxMYWJlbD5Db25zdGl0dXRpb248L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPFZhbHVlUmVuZGVyZXI+eyBjaGFyYWN0ZXJpc3RpY3MuY29uc3RpdHV0aW9uIH08L1ZhbHVlUmVuZGVyZXI+XHJcbiAgICAgICAgICAgICAgPC9Db3B5RmllbGQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTQgY29sLW1kLTYnPlxyXG4gICAgICAgICAgICAgIDxDb3B5RmllbGQgdmFsdWU9e2NoYXJhY3RlcmlzdGljcy5zdHJlbmd0aC50b1N0cmluZygpfSBjbGFzc05hbWU9J2FsaWduLWl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWw+Rm9yY2U8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPFZhbHVlUmVuZGVyZXI+eyBjaGFyYWN0ZXJpc3RpY3Muc3RyZW5ndGggfTwvVmFsdWVSZW5kZXJlcj5cclxuICAgICAgICAgICAgICA8L0NvcHlGaWVsZD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtNCBjb2wtbWQtNic+XHJcbiAgICAgICAgICAgICA8Q29weUZpZWxkIHZhbHVlPXtjaGFyYWN0ZXJpc3RpY3Muc2l6ZS50b1N0cmluZygpfSBjbGFzc05hbWU9J2FsaWduLWl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWw+VGFpbGxlPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxWYWx1ZVJlbmRlcmVyPnsgY2hhcmFjdGVyaXN0aWNzLnNpemUgfTwvVmFsdWVSZW5kZXJlcj5cclxuICAgICAgICAgICAgICA8L0NvcHlGaWVsZD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtNCBjb2wtbWQtNic+XHJcbiAgICAgICAgICAgICAgPENvcHlGaWVsZCB2YWx1ZT17Y2hhcmFjdGVyaXN0aWNzLmRleHRlcml0eS50b1N0cmluZygpfSBjbGFzc05hbWU9J2FsaWduLWl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWw+RGV4dMOpcml0w6k8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPFZhbHVlUmVuZGVyZXI+eyBjaGFyYWN0ZXJpc3RpY3MuZGV4dGVyaXR5IH08L1ZhbHVlUmVuZGVyZXI+XHJcbiAgICAgICAgICAgICAgPC9Db3B5RmllbGQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTQgY29sLW1kLTYnPlxyXG4gICAgICAgICAgICAgIDxDb3B5RmllbGQgdmFsdWU9e2NoYXJhY3RlcmlzdGljcy5pbnRlbGxpZ2VuY2UudG9TdHJpbmcoKX0gY2xhc3NOYW1lPSdhbGlnbi1pdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsPkludGVsbGlnZW5jZTwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8VmFsdWVSZW5kZXJlcj57IGNoYXJhY3RlcmlzdGljcy5pbnRlbGxpZ2VuY2UgfTwvVmFsdWVSZW5kZXJlcj5cclxuICAgICAgICAgICAgICA8L0NvcHlGaWVsZD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtNCBjb2wtbWQtNic+XHJcbiAgICAgICAgICAgICAgPFZhbHVlRmllbGQgbWF4aW11bT17MTAwfSBtaW5pbXVtPXswfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVMdWNrQ2hhbmdlfSB2YWx1ZT17bXV0YWJsZXMubHVja30+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWw+Q2hhbmNlPC9MYWJlbD5cclxuICAgICAgICAgICAgICA8L1ZhbHVlRmllbGQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIFxyXG4gKi9cclxuZXhwb3J0IG5hbWVzcGFjZSBDaGFyYWN0ZXJpc3RpY1NldFJlbmRlcmVyIHtcclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBleHBvcnQgdHlwZSBDaGFuZ2VDYWxsYmFjayA9IChuZXh0OiBJbnZlc3RpZ2F0b3IsIHByZXZpb3VzOiBJbnZlc3RpZ2F0b3IpID0+IHZvaWRcclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgZXhwb3J0IHR5cGUgUHJvcGVydGllcyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IGNsYXNzTmFtZT86IHN0cmluZyB8IHVuZGVmaW5lZCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICByZWFkb25seSB2YWx1ZTogSW52ZXN0aWdhdG9yLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IG9uQ2hhbmdlPzogQ2hhbmdlQ2FsbGJhY2sgfCB1bmRlZmluZWRcclxuICB9XHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCwgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFJlYWN0RWxlbWVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBNb3VzZUV2ZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEtleWJvYXJkRXZlbnQgfSBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXHJcblxyXG5pbXBvcnQgeyBGb2N1c2FibGUgfSBmcm9tICcuLi8uLi9Gb2N1c2FibGUnXHJcbmltcG9ydCBjb3B5IGZyb20gJ2NsaXBib2FyZC1jb3B5J1xyXG5cclxuLyoqXHJcbiAqIFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENvcHlGaWVsZCBleHRlbmRzIFB1cmVDb21wb25lbnQ8Q29weUZpZWxkLlByb3BlcnRpZXMsIENvcHlGaWVsZC5TdGF0ZT4ge1xyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvciAocHJvcGVydGllczogQ29weUZpZWxkLlByb3BlcnRpZXMpIHtcclxuICAgIHN1cGVyKHByb3BlcnRpZXMpXHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHsgY29waWVkOiAwIH1cclxuXHJcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmhhbmRsZUtleVByZXNzID0gdGhpcy5oYW5kbGVLZXlQcmVzcy5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmhhbmRsZVRpbWVvdXQgPSB0aGlzLmhhbmRsZVRpbWVvdXQuYmluZCh0aGlzKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIGhhbmRsZUNsaWNrIChldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5jb3B5KClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyBoYW5kbGVLZXlQcmVzcyAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmIChldmVudC5rZXkgPT09ICcgJykgdGhpcy5jb3B5KClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyBoYW5kbGVUaW1lb3V0ICgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBjb3BpZWQ6IDAgfSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyBhc3luYyBjb3B5ICgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGF3YWl0IGNvcHkodGhpcy5wcm9wcy52YWx1ZSlcclxuXHJcbiAgICBpZiAodGhpcy5zdGF0ZS5jb3BpZWQgPiAwKSB7XHJcbiAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5zdGF0ZS5jb3BpZWQpXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNvcGllZDogd2luZG93LnNldFRpbWVvdXQodGhpcy5oYW5kbGVUaW1lb3V0LCA2MDApIH0pXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAc2VlIFJlYWN0LkNvbXBvbmVudC5yZW5kZXJcclxuICAgKi9cclxuICBwdWJsaWMgcmVuZGVyICgpOiBSZWFjdEVsZW1lbnQge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEZvY3VzYWJsZS5FbGVtZW50IGZvY3VzPXt0aGlzLnByb3BzLmZvY3VzfSBvbkZvY3VzPXt0aGlzLnByb3BzLm9uRm9jdXN9IG9uQmx1cj17dGhpcy5wcm9wcy5vbkJsdXJ9PlxyXG4gICAgICAgIDxkaXYgXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ2ZpZWxkIGlzLWNsaWNrYWJsZScsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX1cclxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9IFxyXG4gICAgICAgICAgb25LZXlQcmVzcz17dGhpcy5oYW5kbGVLZXlQcmVzc31cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7IHRoaXMucHJvcHMuY2hpbGRyZW4gfVxyXG4gICAgICAgICAgeyB0aGlzLnJlbmRlclRvb2xUaXAoKSB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvRm9jdXNhYmxlLkVsZW1lbnQ+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgcmVuZGVyVG9vbFRpcCAoKTogUmVhY3RFbGVtZW50IHtcclxuICAgIGlmICh0aGlzLnN0YXRlLmNvcGllZCA+IDApIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGF5b3V0IGxheW91dC1maWxsZXInPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZCBsYXlvdXQgbGF5b3V0LWNlbnRlcmVkJz5cclxuICAgICAgICAgICAgICBDb3Bpw6lcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogXHJcbiAqL1xyXG5leHBvcnQgbmFtZXNwYWNlIENvcHlGaWVsZCB7XHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgZXhwb3J0IHR5cGUgU3RhdGUgPSB7XHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBjb3BpZWQ6IG51bWJlclxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgZXhwb3J0IHR5cGUgUmVxdWlyZWRQcm9wZXJ0aWVzID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgY2hpbGRyZW46IFJlYWN0Tm9kZSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICByZWFkb25seSB2YWx1ZTogc3RyaW5nXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBleHBvcnQgdHlwZSBPcHRpb25hbFByb3BlcnRpZXMgPSB7XHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBjbGFzc05hbWU/OiBzdHJpbmcgfCB1bmRlZmluZWRcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIGV4cG9ydCB0eXBlIFByb3BlcnRpZXMgPSBSZXF1aXJlZFByb3BlcnRpZXMgJiBPcHRpb25hbFByb3BlcnRpZXMgJiBGb2N1c2FibGUuUHJvcGVydGllc1xyXG59IiwiaW1wb3J0IHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBSZWFjdEVsZW1lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcclxuXHJcbmltcG9ydCB7IEludmVzdGlnYXRvciB9IGZyb20gJy4uLy4uLy4uL3R5cGVzY3JpcHQvSW52ZXN0aWdhdG9yJ1xyXG5pbXBvcnQgeyBVbmlkb2NJbnZlc3RpZ2F0b3JSZWR1Y2VyIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXNjcmlwdC91bmlkb2MvcmVkdWNlcidcclxuaW1wb3J0IHsgU2tpbGwgfSBmcm9tICcuLi8uLi8uLi90eXBlc2NyaXB0L1NraWxsJ1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvbkV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vdHlwZXNjcmlwdC9hcHBsaWNhdGlvbi9BcHBsaWNhdGlvbkV2ZW50J1xyXG5cclxuaW1wb3J0IHsgU3VtbWFyeVJlbmRlcmVyIH0gZnJvbSAnLi9TdW1tYXJ5UmVuZGVyZXInXHJcbmltcG9ydCB7IENoYXJhY3RlcmlzdGljU2V0UmVuZGVyZXIgfSBmcm9tICcuL0NoYXJhY3RlcmlzdGljU2V0UmVuZGVyZXInXHJcbmltcG9ydCB7IFN0YXR1c1JlbmRlcmVyIH0gZnJvbSAnLi9TdGF0dXNSZW5kZXJlcidcclxuaW1wb3J0IHsgQWxsU2tpbGxzUmVuZGVyZXIgfSBmcm9tICcuL0FsbFNraWxsc1JlbmRlcmVyJ1xyXG5cclxuY29uc3QgSG9tZUltYWdlID0gcmVxdWlyZSgnLi4vLi4vLi4vcHVibGljL2ltYWdlcy9sb2dvLnN2ZycpLmRlZmF1bHRcclxuXHJcblxyXG4vKipcclxuICogXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgSW52ZXN0aWdhdG9yUGFnZSBleHRlbmRzIFB1cmVDb21wb25lbnQ8SW52ZXN0aWdhdG9yUGFnZS5Qcm9wZXJ0aWVzPiB7XHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yIChwcm9wZXJ0aWVzOiBJbnZlc3RpZ2F0b3JQYWdlLlByb3BlcnRpZXMpIHtcclxuICAgIHN1cGVyKHByb3BlcnRpZXMpXHJcblxyXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmhhbmRsZVNhdmUgPSB0aGlzLmhhbmRsZVNhdmUuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVTa2lsbFNlbGVjdGlvbiA9IHRoaXMuaGFuZGxlU2tpbGxTZWxlY3Rpb24uYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVMZXZlbHVwID0gdGhpcy5oYW5kbGVMZXZlbHVwLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlUmVsb2FkID0gdGhpcy5oYW5kbGVSZWxvYWQuYmluZCh0aGlzKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIGhhbmRsZVJlbG9hZCgpOiB2b2lkIHtcclxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoQXBwbGljYXRpb25FdmVudC5zaG93TG9hZGluZ1BhZ2UoKSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyBoYW5kbGVDaGFuZ2UobmV4dDogSW52ZXN0aWdhdG9yLCBwcmV2aW91czogSW52ZXN0aWdhdG9yKTogdm9pZCB7XHJcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKEFwcGxpY2F0aW9uRXZlbnQudXNlKG5leHQpKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIGhhbmRsZUxldmVsdXAoKTogdm9pZCB7XHJcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKEFwcGxpY2F0aW9uRXZlbnQudXNlKHRoaXMucHJvcHMuaW52ZXN0aWdhdG9yLmxldmVsdXAoKSkpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgaGFuZGxlU2tpbGxTZWxlY3Rpb24oc2tpbGw6IFNraWxsKTogdm9pZCB7XHJcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKEFwcGxpY2F0aW9uRXZlbnQudXNlKHRoaXMucHJvcHMuaW52ZXN0aWdhdG9yLnRvZ2dsZUZvclVwZGF0ZShza2lsbCkpKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIGhhbmRsZVNhdmUoKTogdm9pZCB7XHJcbiAgICBjb25zdCBub3c6IERhdGUgPSBuZXcgRGF0ZSgpXHJcbiAgICBjb25zdCBocmVmOiBIVE1MQW5jaG9yRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxyXG4gICAgaHJlZi5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnZGF0YTp0ZXh0L3BsYWluO2NoYXJzZXQ9dXRmLTgsJyArIGVuY29kZVVSSUNvbXBvbmVudChVbmlkb2NJbnZlc3RpZ2F0b3JSZWR1Y2VyLnJlZHVjZSh0aGlzLnByb3BzLmludmVzdGlnYXRvcikpKVxyXG4gICAgaHJlZi5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICdkb3dubG9hZCcsIFxyXG4gICAgICB0aGlzLnByb3BzLmludmVzdGlnYXRvci5zdW1tYXJ5Lm5hbWUuZmlyc3QudG9Mb2NhbGVMb3dlckNhc2UoKSArICctJyArIFxyXG4gICAgICB0aGlzLnByb3BzLmludmVzdGlnYXRvci5zdW1tYXJ5Lm5hbWUubGFzdC50b0xvY2FsZUxvd2VyQ2FzZSgpICsgJy0nICsgXHJcbiAgICAgIG5vdy5nZXRGdWxsWWVhcigpICsgJy0nICsgXHJcbiAgICAgIG5vdy5nZXRNb250aCgpICsgJy0nICsgXHJcbiAgICAgIG5vdy5nZXREYXkoKSArICctJyArIFxyXG4gICAgICBub3cuZ2V0SG91cnMoKSArICctJyArXHJcbiAgICAgIG5vdy5nZXRNaW51dGVzKCkgKyAnLScgKyBcclxuICAgICAgbm93LmdldFNlY29uZHMoKSArICctJyArXHJcbiAgICAgIG5vdy5nZXRNaWxsaXNlY29uZHMoKSArICcudHh0J1xyXG4gICAgKVxyXG5cclxuICAgIGhyZWYuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChocmVmKVxyXG5cclxuICAgIGhyZWYuY2xpY2soKVxyXG5cclxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoaHJlZilcclxuXHJcbiAgICBocmVmLnJlbW92ZSgpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgcmVuZGVyICgpIDogUmVhY3RFbGVtZW50IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdwYWdlIHBhZ2UtaW52ZXN0aWdhdG9yJywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGF5b3V0IGxheW91dC1yb3R1bHVzJz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTggY29sLW1kLTQgb3JkZXItbWQtMSBjb2wtbGctMyBvcmRlci1sZy0xJz5cclxuICAgICAgICAgICAgICAgIDxIb21lSW1hZ2UgY2xhc3NOYW1lPSdpbWctZmx1aWQnIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtMTIgZC1ibG9jayBkLW1kLW5vbmUnPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtMTIgY29sLW1kLTggb3JkZXItbWQtMSBjb2wtbGctNiBvcmRlci1sZy0xJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICAgICAgICAgICA8U3VtbWFyeVJlbmRlcmVyIHZhbHVlPXt0aGlzLnByb3BzLmludmVzdGlnYXRvcn0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTEyIGQtYmxvY2sgb3JkZXItbWQtMyc+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC0xMiBjb2wtbWQtNiBvcmRlci1tZC0zIGNvbC1sZy0zIG9yZGVyLWxnLTEnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgICAgICAgICAgIDxDaGFyYWN0ZXJpc3RpY1NldFJlbmRlcmVyIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmludmVzdGlnYXRvcn0gXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSBcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTEyIGQtYmxvY2sgZC1tZC1ub25lIG9yZGVyLW1kLTMgb3JkZXItbGctMSBkLWxnLWJsb2NrJz5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTEyIGNvbC1tZC02IG9yZGVyLW1kLTMgY29sLWxnIG9yZGVyLWxnLTEnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgICAgICAgICAgIDxTdGF0dXNSZW5kZXJlciBcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5pbnZlc3RpZ2F0b3J9IFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC0xMiBkLWJsb2NrIGQtbWQtYmxvY2sgb3JkZXItbWQtMyBvcmRlci1sZy0xJz5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTEyIG9yZGVyLW1kLTMgb3JkZXItbGctMSc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuICAgICAgICAgICAgICAgICAgPEFsbFNraWxsc1JlbmRlcmVyIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmludmVzdGlnYXRvcn1cclxuICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17dGhpcy5oYW5kbGVTa2lsbFNlbGVjdGlvbn1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtMTInPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLWxpbmsgYnRuLWJsb2NrJyBvbkNsaWNrPXt0aGlzLmhhbmRsZUxldmVsdXB9PlxyXG4gICAgICAgICAgICAgICAgICBHYWduZXIgZGUgbCdleHDDqXJpZW5jZVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9jaycgb25DbGljaz17dGhpcy5oYW5kbGVTYXZlfT5cclxuICAgICAgICAgICAgICAgICAgU2F1dmVnYXJkZXIgbGEgZmljaGVcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLWxpbmsgYnRuLWJsb2NrJyBvbkNsaWNrPXt0aGlzLmhhbmRsZVJlbG9hZH0+XHJcbiAgICAgICAgICAgICAgICAgIENoYXJnZXIgdW5lIG5vdXZlbGxlIGZpY2hlXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogXHJcbiAqL1xyXG5leHBvcnQgbmFtZXNwYWNlIEludmVzdGlnYXRvclBhZ2Uge1xyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIGV4cG9ydCB0eXBlIEFwcGxpY2F0aW9uQ2FsbGJhY2sgPSAoZXZlbnQ6IEFwcGxpY2F0aW9uRXZlbnQpID0+IHZvaWRcclxuICBcclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBleHBvcnQgdHlwZSBQcm9wZXJ0aWVzID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nIHwgdW5kZWZpbmVkLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIG9uQ2hhbmdlPzogQXBwbGljYXRpb25DYWxsYmFjayxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBpbnZlc3RpZ2F0b3I6IEludmVzdGlnYXRvclxyXG4gIH1cclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCB7IFRyaXBsZXQgfSBmcm9tICcuLi8uLi9sYXlvdXQvVHJpcGxldCdcclxuXHJcbi8qKlxyXG4gKiBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBNb3ZlbWVudFJlbmRlcmVyIChwcm9wZXJ0aWVzOiBNb3ZlbWVudFJlbmRlcmVyLlByb3BlcnRpZXMpOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xyXG4gIHJldHVybiAoXHJcbiAgICA8VHJpcGxldCBzdXBlcnNjcmlwdD0nKzEnIHN1YnNjcmlwdD0nLTEnPlxyXG4gICAgICB7IHByb3BlcnRpZXMudmFsdWUgfVxyXG4gICAgPC9UcmlwbGV0PlxyXG4gIClcclxufVxyXG5cclxuLyoqXHJcbiAqIFxyXG4gKi9cclxuZXhwb3J0IG5hbWVzcGFjZSBNb3ZlbWVudFJlbmRlcmVyIHtcclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBleHBvcnQgdHlwZSBQcm9wZXJ0aWVzID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgdmFsdWU6IG51bWJlclxyXG4gIH1cclxufSIsImltcG9ydCBSZWFjdCwgeyBSZWFjdEVsZW1lbnQgfSBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXHJcblxyXG5pbXBvcnQgeyBTa2lsbCB9IGZyb20gJy4uLy4uLy4uL3R5cGVzY3JpcHQvU2tpbGwnXHJcbmltcG9ydCB7IFZhbHVlIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXNjcmlwdC9WYWx1ZSdcclxuaW1wb3J0IHsgVG9nZ2xlciB9IGZyb20gJy4uLy4uLy4uL3R5cGVzY3JpcHQvVG9nZ2xlcidcclxuXHJcbmltcG9ydCB7IFBhZGRpbmcgfSBmcm9tICcuLi8uLi9QYWRkaW5nJ1xyXG5cclxuY29uc3QgSVNfU0VMRUNURUQ6IFRvZ2dsZXIgPSBUb2dnbGVyLmNyZWF0ZSgnaXMtc2VsZWN0ZWQnKVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNraWxsTGluZShwcm9wZXJ0aWVzOiBTa2lsbExpbmUuUHJvcGVydGllcykgOiBSZWFjdEVsZW1lbnQge1xyXG4gIGNvbnN0IG5hbWU6IHN0cmluZyA9IHByb3BlcnRpZXMuc2tpbGwudG9TdHJpbmcoKVxyXG5cclxuICBjb25zdCBiYXNlOiBudW1iZXIgPSBwcm9wZXJ0aWVzLnZhbHVlLnN1bSgpXHJcbiAgY29uc3QgaGFsdmVkOiBudW1iZXIgPSBwcm9wZXJ0aWVzLnZhbHVlLmhhbGYoKVxyXG4gIGNvbnN0IGZpZnRoOiBudW1iZXIgPSBwcm9wZXJ0aWVzLnZhbHVlLmZpZnRoKClcclxuXHJcbiAgY29uc3QgZGJhc2UgPSBiYXNlLnRvU3RyaW5nKClcclxuICBjb25zdCBkaGFsdmVkID0gKGhhbHZlZCA+IDAgPyBoYWx2ZWQgOiBiYXNlID4gMCA/IDEgOiAwKS50b1N0cmluZygpXHJcbiAgY29uc3QgZGZpZnRoID0gKGZpZnRoID4gMCA/IGZpZnRoIDogYmFzZSA+IDAgPyAxIDogMCkudG9TdHJpbmcoKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBrZXk9e25hbWV9IGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnc2tpbGwgc2tpbGwtZGVmYXVsdCcsIHByb3BlcnRpZXMuY2xhc3NOYW1lLCBJU19TRUxFQ1RFRC50b2dnbGUocHJvcGVydGllcy5zZWxlY3RlZCkpfSBvbkNsaWNrPXtwcm9wZXJ0aWVzLm9uQ2xpY2t9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc2tpbGwtbmFtZSc+XHJcbiAgICAgICAge25hbWUuc3Vic3RyKDAsIDEpLnRvTG9jYWxlVXBwZXJDYXNlKCl9e25hbWUuc3Vic3RyKDEpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NraWxsLWZpbGxlcicgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NraWxsLXZhbHVlcyc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NraWxsLXZhbHVlJz5cclxuICAgICAgICAgIDxQYWRkaW5nIHBhZGRpbmc9eycgJ30gb2Y9e2RiYXNlfSBzaXplPXsyfSAvPntkYmFzZX08c3BhbiBjbGFzc05hbWU9J3BlcmNlbnQnPiU8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NraWxsLXNlcGFyYXRvcic+wrc8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2tpbGwtdmFsdWUnPlxyXG4gICAgICAgICAgPFBhZGRpbmcgcGFkZGluZz17JyAnfSBvZj17ZGhhbHZlZH0gc2l6ZT17Mn0gLz57ZGhhbHZlZH08c3BhbiBjbGFzc05hbWU9J3BlcmNlbnQnPiU8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NraWxsLXNlcGFyYXRvcic+wrc8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2tpbGwtdmFsdWUnPlxyXG4gICAgICAgICAgPFBhZGRpbmcgcGFkZGluZz17JyAnfSBvZj17ZGZpZnRofSBzaXplPXsyfSAvPntkZmlmdGh9PHNwYW4gY2xhc3NOYW1lPSdwZXJjZW50Jz4lPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuLyoqXHJcbiAqIFxyXG4gKi9cclxuZXhwb3J0IG5hbWVzcGFjZSBTa2lsbExpbmUge1xyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIGV4cG9ydCB0eXBlIFByb3BlcnRpZXMgPSB7XHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmcgfCB1bmRlZmluZWQsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgb25DbGljaz86IChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHZvaWQgfCB1bmRlZmluZWQsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgc2VsZWN0ZWQ/OiBib29sZWFuIHwgdW5kZWZpbmVkLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIHNraWxsOiBTa2lsbCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICB2YWx1ZTogVmFsdWVcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFJlYWN0RWxlbWVudCB9IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IHsgSW52ZXN0aWdhdG9yIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXNjcmlwdC9JbnZlc3RpZ2F0b3InXHJcbmltcG9ydCB7IENoYXJhY3RlcmlzdGljU2V0IH0gZnJvbSAnLi4vLi4vLi4vdHlwZXNjcmlwdC9DaGFyYWN0ZXJpc3RpY1NldCdcclxuaW1wb3J0IHsgRW1wdHkgfSBmcm9tICcuLi8uLi8uLi90eXBlc2NyaXB0L3V0aWxzJ1xyXG5pbXBvcnQgeyBNdXRhYmxlcyB9IGZyb20gJy4uLy4uLy4uL3R5cGVzY3JpcHQvTXV0YWJsZXMnXHJcbmltcG9ydCB7IERhdGFFdmVudCwgRGF0YVJlZHVjZXIgfSBmcm9tICcuLi8uLi8uLi90eXBlc2NyaXB0L3JlZHV4J1xyXG5cclxuaW1wb3J0IHsgTGFiZWwgfSBmcm9tICcuLi8uLi9MYWJlbCdcclxuaW1wb3J0IHsgQm9vbGVhbkZpZWxkIH0gZnJvbSAnLi4vLi4vZm9ybS9Cb29sZWFuRmllbGQnXHJcbmltcG9ydCB7IEJvdW5kU3RhdGlzdGljRmllbGQgfSBmcm9tICcuLi8uLi9mb3JtL0JvdW5kU3RhdGlzdGljRmllbGQnXHJcblxyXG5pbXBvcnQgeyBDb3B5RmllbGQgfSBmcm9tICcuL0NvcHlGaWVsZCdcclxuaW1wb3J0IHsgTW92ZW1lbnRSZW5kZXJlciB9IGZyb20gJy4vTW92ZW1lbnRSZW5kZXJlcidcclxuXHJcblxyXG4vKipcclxuICogXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU3RhdHVzUmVuZGVyZXIgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFN0YXR1c1JlbmRlcmVyLlByb3BlcnRpZXM+IHtcclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIGRlZmF1bHRQcm9wczogU3RhdHVzUmVuZGVyZXIuT3B0aW9uYWxQcm9wZXJ0aWVzID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgb25DaGFuZ2U6IEVtcHR5LmNhbGxiYWNrXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgY29uc3RydWN0b3IocHJvcGVydGllczogU3RhdHVzUmVuZGVyZXIuUHJvcGVydGllcykge1xyXG4gICAgc3VwZXIocHJvcGVydGllcylcclxuICAgIFxyXG4gICAgdGhpcy5oYW5kbGVUZW1wb3JhcnlJbnNhbmVDaGFuZ2UgPSB0aGlzLmhhbmRsZVRlbXBvcmFyeUluc2FuZUNoYW5nZS5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmhhbmRsZUluZGVmaW5pdGVseUluc2FuZUNoYW5nZSA9IHRoaXMuaGFuZGxlSW5kZWZpbml0ZWx5SW5zYW5lQ2hhbmdlLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlTWFqb3JXb3VuZENoYW5nZSA9IHRoaXMuaGFuZGxlTWFqb3JXb3VuZENoYW5nZS5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmhhbmRsZUhlYWx0aENoYW5nZSA9IHRoaXMuaGFuZGxlSGVhbHRoQ2hhbmdlLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlTWFnaWNDaGFuZ2UgPSB0aGlzLmhhbmRsZU1hZ2ljQ2hhbmdlLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlTWVudGFsSGVhbHRoQ2hhbmdlID0gdGhpcy5oYW5kbGVNZW50YWxIZWFsdGhDaGFuZ2UuYmluZCh0aGlzKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIGhhbmRsZVRlbXBvcmFyeUluc2FuZUNoYW5nZSAoZXZlbnQ6IERhdGFFdmVudDxib29sZWFuPik6IHZvaWQge1xyXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShcclxuICAgICAgSW52ZXN0aWdhdG9yLmNyZWF0ZSh7XHJcbiAgICAgICAgLi4udGhpcy5wcm9wcy52YWx1ZSxcclxuICAgICAgICBtdXRhYmxlczogTXV0YWJsZXMuY3JlYXRlKHtcclxuICAgICAgICAgIC4uLnRoaXMucHJvcHMudmFsdWUubXV0YWJsZXMsXHJcbiAgICAgICAgICB0ZW1wb3JhcnlJbnNhbmU6IERhdGFSZWR1Y2VyLnJlZHVjZSh0aGlzLnByb3BzLnZhbHVlLm11dGFibGVzLnRlbXBvcmFyeUluc2FuZSwgZXZlbnQpXHJcbiAgICAgICAgfSlcclxuICAgICAgfSksXHJcbiAgICAgIHRoaXMucHJvcHMudmFsdWVcclxuICAgIClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyBoYW5kbGVJbmRlZmluaXRlbHlJbnNhbmVDaGFuZ2UgKGV2ZW50OiBEYXRhRXZlbnQ8Ym9vbGVhbj4pOiB2b2lkIHtcclxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoXHJcbiAgICAgIEludmVzdGlnYXRvci5jcmVhdGUoe1xyXG4gICAgICAgIC4uLnRoaXMucHJvcHMudmFsdWUsXHJcbiAgICAgICAgbXV0YWJsZXM6IE11dGFibGVzLmNyZWF0ZSh7XHJcbiAgICAgICAgICAuLi50aGlzLnByb3BzLnZhbHVlLm11dGFibGVzLFxyXG4gICAgICAgICAgaW5kZWZpbml0ZWx5SW5zYW5lOiBEYXRhUmVkdWNlci5yZWR1Y2UodGhpcy5wcm9wcy52YWx1ZS5tdXRhYmxlcy5pbmRlZmluaXRlbHlJbnNhbmUsIGV2ZW50KVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pLFxyXG4gICAgICB0aGlzLnByb3BzLnZhbHVlXHJcbiAgICApXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgaGFuZGxlTWFqb3JXb3VuZENoYW5nZSAoZXZlbnQ6IERhdGFFdmVudDxib29sZWFuPik6IHZvaWQge1xyXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShcclxuICAgICAgSW52ZXN0aWdhdG9yLmNyZWF0ZSh7XHJcbiAgICAgICAgLi4udGhpcy5wcm9wcy52YWx1ZSxcclxuICAgICAgICBtdXRhYmxlczogTXV0YWJsZXMuY3JlYXRlKHtcclxuICAgICAgICAgIC4uLnRoaXMucHJvcHMudmFsdWUubXV0YWJsZXMsXHJcbiAgICAgICAgICBtYWpvcldvdW5kOiBEYXRhUmVkdWNlci5yZWR1Y2UodGhpcy5wcm9wcy52YWx1ZS5tdXRhYmxlcy5tYWpvcldvdW5kLCBldmVudClcclxuICAgICAgICB9KVxyXG4gICAgICB9KSxcclxuICAgICAgdGhpcy5wcm9wcy52YWx1ZVxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIGhhbmRsZUhlYWx0aENoYW5nZSAoZXZlbnQ6IERhdGFFdmVudDxudW1iZXI+KTogdm9pZCB7XHJcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKFxyXG4gICAgICBJbnZlc3RpZ2F0b3IuY3JlYXRlKHtcclxuICAgICAgICAuLi50aGlzLnByb3BzLnZhbHVlLFxyXG4gICAgICAgIG11dGFibGVzOiBNdXRhYmxlcy5jcmVhdGUoe1xyXG4gICAgICAgICAgLi4udGhpcy5wcm9wcy52YWx1ZS5tdXRhYmxlcyxcclxuICAgICAgICAgIGhlYWx0aDogRGF0YVJlZHVjZXIucmVkdWNlKHRoaXMucHJvcHMudmFsdWUubXV0YWJsZXMuaGVhbHRoLCBldmVudClcclxuICAgICAgICB9KVxyXG4gICAgICB9KSxcclxuICAgICAgdGhpcy5wcm9wcy52YWx1ZVxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIGhhbmRsZU1hZ2ljQ2hhbmdlIChldmVudDogRGF0YUV2ZW50PG51bWJlcj4pOiB2b2lkIHtcclxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoXHJcbiAgICAgIEludmVzdGlnYXRvci5jcmVhdGUoe1xyXG4gICAgICAgIC4uLnRoaXMucHJvcHMudmFsdWUsXHJcbiAgICAgICAgbXV0YWJsZXM6IE11dGFibGVzLmNyZWF0ZSh7XHJcbiAgICAgICAgICAuLi50aGlzLnByb3BzLnZhbHVlLm11dGFibGVzLFxyXG4gICAgICAgICAgbWFnaWM6IERhdGFSZWR1Y2VyLnJlZHVjZSh0aGlzLnByb3BzLnZhbHVlLm11dGFibGVzLm1hZ2ljLCBldmVudClcclxuICAgICAgICB9KVxyXG4gICAgICB9KSxcclxuICAgICAgdGhpcy5wcm9wcy52YWx1ZVxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIGhhbmRsZU1lbnRhbEhlYWx0aENoYW5nZSAoZXZlbnQ6IERhdGFFdmVudDxudW1iZXI+KTogdm9pZCB7XHJcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKFxyXG4gICAgICBJbnZlc3RpZ2F0b3IuY3JlYXRlKHtcclxuICAgICAgICAuLi50aGlzLnByb3BzLnZhbHVlLFxyXG4gICAgICAgIG11dGFibGVzOiBNdXRhYmxlcy5jcmVhdGUoe1xyXG4gICAgICAgICAgLi4udGhpcy5wcm9wcy52YWx1ZS5tdXRhYmxlcyxcclxuICAgICAgICAgIG1lbnRhbEhlYWx0aDogRGF0YVJlZHVjZXIucmVkdWNlKHRoaXMucHJvcHMudmFsdWUubXV0YWJsZXMubWVudGFsSGVhbHRoLCBldmVudClcclxuICAgICAgICB9KVxyXG4gICAgICB9KSxcclxuICAgICAgdGhpcy5wcm9wcy52YWx1ZVxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIHJlbmRlciAoKTogUmVhY3RFbGVtZW50IHtcclxuICAgIGNvbnN0IGludmVzdGlnYXRvcjogSW52ZXN0aWdhdG9yID0gdGhpcy5wcm9wcy52YWx1ZVxyXG4gICAgY29uc3QgbXV0YWJsZXM6IE11dGFibGVzID0gdGhpcy5wcm9wcy52YWx1ZS5tdXRhYmxlc1xyXG4gICAgY29uc3QgY2hhcmFjdGVyaXN0aWNzOiBDaGFyYWN0ZXJpc3RpY1NldCA9IGludmVzdGlnYXRvci5jaGFyYWN0ZXJpc3RpY3NcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyLWZsdWlkJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtNCBjb2wtbWQtNiBjb2wtbGcnPlxyXG4gICAgICAgICAgICA8Qm91bmRTdGF0aXN0aWNGaWVsZCBvbkNoYW5nZT17dGhpcy5oYW5kbGVIZWFsdGhDaGFuZ2V9IHZhbHVlPXttdXRhYmxlcy5oZWFsdGh9IG1heGltdW09e2ludmVzdGlnYXRvci5tYXhpbXVtSFB9PlxyXG4gICAgICAgICAgICAgIDxMYWJlbD5Qb2ludHMgZGUgdmllPC9MYWJlbD5cclxuICAgICAgICAgICAgPC9Cb3VuZFN0YXRpc3RpY0ZpZWxkPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTQgY29sLW1kLTYgY29sLWxnJz5cclxuICAgICAgICAgICAgPEJvdW5kU3RhdGlzdGljRmllbGQgb25DaGFuZ2U9e3RoaXMuaGFuZGxlTWVudGFsSGVhbHRoQ2hhbmdlfSB2YWx1ZT17bXV0YWJsZXMubWVudGFsSGVhbHRofSBtYXhpbXVtPXtjaGFyYWN0ZXJpc3RpY3MucG93ZXIuc3VtKCl9PlxyXG4gICAgICAgICAgICAgIDxMYWJlbD5TYW50w6kgbWVudGFsZTwvTGFiZWw+XHJcbiAgICAgICAgICAgIDwvQm91bmRTdGF0aXN0aWNGaWVsZD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC00IGNvbC1tZC02IGNvbC1sZyc+IFxyXG4gICAgICAgICAgICA8Qm91bmRTdGF0aXN0aWNGaWVsZCBvbkNoYW5nZT17dGhpcy5oYW5kbGVNYWdpY0NoYW5nZX0gdmFsdWU9e211dGFibGVzLm1hZ2ljfSBtYXhpbXVtPXtpbnZlc3RpZ2F0b3IubWF4aW11bU1QfT5cclxuICAgICAgICAgICAgICA8TGFiZWw+UG9pbnRzIGRlIG1hZ2llPC9MYWJlbD5cclxuICAgICAgICAgICAgPC9Cb3VuZFN0YXRpc3RpY0ZpZWxkPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTQgY29sLW1kLTYgY29sLWxnJz5cclxuICAgICAgICAgICAgPEJvb2xlYW5GaWVsZCB2YWx1ZT17bXV0YWJsZXMubWFqb3JXb3VuZH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlTWFqb3JXb3VuZENoYW5nZX0+XHJcbiAgICAgICAgICAgICAgPExhYmVsPkJsZXNzdXJlIGdyYXZlPC9MYWJlbD5cclxuICAgICAgICAgICAgPC9Cb29sZWFuRmllbGQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtNCBjb2wtbWQtNiBjb2wtbGcnPlxyXG4gICAgICAgICAgICA8Qm9vbGVhbkZpZWxkIHZhbHVlPXttdXRhYmxlcy50ZW1wb3JhcnlJbnNhbmV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVRlbXBvcmFyeUluc2FuZUNoYW5nZX0+XHJcbiAgICAgICAgICAgICAgPExhYmVsPkZvbGllIHRlbXBvcmFpcmU8L0xhYmVsPlxyXG4gICAgICAgICAgICA8L0Jvb2xlYW5GaWVsZD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC00IGNvbC1tZC02IGNvbC1sZyc+XHJcbiAgICAgICAgICAgIDxCb29sZWFuRmllbGQgdmFsdWU9e211dGFibGVzLmluZGVmaW5pdGVseUluc2FuZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5kZWZpbml0ZWx5SW5zYW5lQ2hhbmdlfT5cclxuICAgICAgICAgICAgICA8TGFiZWw+Rm9saWUgcGVyc2lzdGFudGU8L0xhYmVsPlxyXG4gICAgICAgICAgICA8L0Jvb2xlYW5GaWVsZD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC00IGNvbC1tZC02IGNvbC1sZyc+XHJcbiAgICAgICAgICAgIDxDb3B5RmllbGQgdmFsdWU9e2ludmVzdGlnYXRvci5pbXBhY3R9IGNsYXNzTmFtZT0nYWxpZ24taXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgICA8TGFiZWw+SW1wYWN0PC9MYWJlbD5cclxuICAgICAgICAgICAgICB7IGludmVzdGlnYXRvci5pbXBhY3QgfVxyXG4gICAgICAgICAgICA8L0NvcHlGaWVsZD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC00IGNvbC1tZC02IGNvbC1sZyc+XHJcbiAgICAgICAgICAgIDxDb3B5RmllbGQgdmFsdWU9e2ludmVzdGlnYXRvci5jYXJydXJlLnRvU3RyaW5nKCl9IGNsYXNzTmFtZT0nYWxpZ24taXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgICA8TGFiZWw+Q2FycnVyZTwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgeyBpbnZlc3RpZ2F0b3IuY2FycnVyZSB9XHJcbiAgICAgICAgICAgIDwvQ29weUZpZWxkPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTQgY29sLW1kLTYgY29sLWxnJz5cclxuICAgICAgICAgICAgPENvcHlGaWVsZCB2YWx1ZT17aW52ZXN0aWdhdG9yLm1vdmVtZW50LnRvU3RyaW5nKCl9IGNsYXNzTmFtZT0nYWxpZ24taXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgICA8TGFiZWw+TW91dmVtZW50PC9MYWJlbD5cclxuICAgICAgICAgICAgICA8TW92ZW1lbnRSZW5kZXJlciB2YWx1ZT17IGludmVzdGlnYXRvci5jYXJydXJlIH0gLz5cclxuICAgICAgICAgICAgPC9Db3B5RmllbGQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbi8qKlxyXG4gKiBcclxuICovXHJcbmV4cG9ydCBuYW1lc3BhY2UgU3RhdHVzUmVuZGVyZXIge1xyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIGV4cG9ydCB0eXBlIENoYW5nZUNhbGxiYWNrID0gKG5leHQ6IEludmVzdGlnYXRvciwgcHJldmlvdXM6IEludmVzdGlnYXRvcikgPT4gdm9pZFxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBleHBvcnQgdHlwZSBPcHRpb25hbFByb3BlcnRpZXMgPSB7XHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBjbGFzc05hbWU/OiBzdHJpbmcgfCB1bmRlZmluZWQsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgb25DaGFuZ2U/OiBDaGFuZ2VDYWxsYmFjayB8IHVuZGVmaW5lZFxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgZXhwb3J0IHR5cGUgUmVxdWlyZWRQcm9wZXJ0aWVzID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgdmFsdWU6IEludmVzdGlnYXRvclxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgZXhwb3J0IHR5cGUgUHJvcGVydGllcyA9IE9wdGlvbmFsUHJvcGVydGllcyAmIFJlcXVpcmVkUHJvcGVydGllc1xyXG59IiwiaW1wb3J0IHsgSW52ZXN0aWdhdG9yIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXNjcmlwdC9JbnZlc3RpZ2F0b3InXHJcbmltcG9ydCB7IEdlbmRlciB9IGZyb20gJy4uLy4uLy4uL3R5cGVzY3JpcHQvR2VuZGVyJ1xyXG5pbXBvcnQgeyBTdW1tYXJ5IH0gZnJvbSAnLi4vLi4vLi4vdHlwZXNjcmlwdC9TdW1tYXJ5J1xyXG5cclxuaW1wb3J0IHsgTGFiZWwgfSBmcm9tICcuLi8uLi9MYWJlbCdcclxuXHJcbmltcG9ydCB7IENvcHlGaWVsZCB9IGZyb20gJy4vQ29weUZpZWxkJ1xyXG5cclxuLyoqXHJcbiAqIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFN1bW1hcnlSZW5kZXJlciAocHJvcGVydGllczogU3VtbWFyeVJlbmRlcmVyLlByb3BlcnRpZXMpIHtcclxuICBjb25zdCBzdW1tYXJ5OiBTdW1tYXJ5ID0gcHJvcGVydGllcy52YWx1ZS5zdW1tYXJ5XHJcblxyXG4gIGNvbnN0IG5hbWU6IHN0cmluZyA9IHN1bW1hcnkubmFtZSA9PSBudWxsID8gJ05vbiBEw6lmaW5pJyA6IHN1bW1hcnkubmFtZS50b1N0cmluZygpXHJcbiAgY29uc3QgZ2VuZGVyOiBzdHJpbmcgPSBzdW1tYXJ5LmdlbmRlciA9PSBudWxsID8gJ05vbiBEw6lmaW5pJyA6IChzdW1tYXJ5LmdlbmRlciA9PT0gR2VuZGVyLk1BTEUgPyAnTScgOiAnRicgKVxyXG4gIGNvbnN0IGJpcnRoZGF0ZTogc3RyaW5nID0gc3VtbWFyeS5iaXJ0aGRhdGUgPT0gbnVsbCA/ICdOb24gRMOpZmluaScgOiBzdW1tYXJ5LmJpcnRoZGF0ZVxyXG4gIGNvbnN0IGhpcmluZ2RhdGU6IHN0cmluZyA9IHN1bW1hcnkuaGlyaW5nZGF0ZSA9PSBudWxsID8gJ05vbiBEw6lmaW5pJyA6IHN1bW1hcnkuaGlyaW5nZGF0ZVxyXG4gIGNvbnN0IGJpcnRocGxhY2U6IHN0cmluZyA9IHN1bW1hcnkuYmlydGhwbGFjZSA9PSBudWxsID8gJ05vbiBEw6lmaW5pJyA6IHN1bW1hcnkuYmlydGhwbGFjZS50b1N0cmluZygpXHJcbiAgY29uc3QgaG9tZTogc3RyaW5nID0gc3VtbWFyeS5ob21lID09IG51bGwgPyAnTm9uIETDqWZpbmknIDogc3VtbWFyeS5ob21lLnRvU3RyaW5nKClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lci1mbHVpZCc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTEyIGNvbC1tZC04Jz5cclxuICAgICAgICAgICAgPENvcHlGaWVsZCB2YWx1ZT17bmFtZX0+XHJcbiAgICAgICAgICAgICAgPExhYmVsPkFnZW50PC9MYWJlbD5cclxuICAgICAgICAgICAgICB7IG5hbWUgfVxyXG4gICAgICAgICAgICA8L0NvcHlGaWVsZD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC02IGNvbC1tZC0yJz5cclxuICAgICAgICAgICAgPENvcHlGaWVsZCB2YWx1ZT17Z2VuZGVyfT5cclxuICAgICAgICAgICAgICA8TGFiZWw+U2V4ZTwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgeyBnZW5kZXIgfVxyXG4gICAgICAgICAgICA8L0NvcHlGaWVsZD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC02IGNvbC1tZC0yJz5cclxuICAgICAgICAgICA8Q29weUZpZWxkIHZhbHVlPXtzdW1tYXJ5LmFnZS50b1N0cmluZygpfT5cclxuICAgICAgICAgICAgICA8TGFiZWw+w4JnZTwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgeyBzdW1tYXJ5LmFnZSB9XHJcbiAgICAgICAgICAgIDwvQ29weUZpZWxkPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC0xMiBjb2wtbWQtOCc+XHJcbiAgICAgICAgICAgIDxDb3B5RmllbGQgdmFsdWU9e3N1bW1hcnkuYWxpYXN9PlxyXG4gICAgICAgICAgICAgIDxMYWJlbD5BbGlhczwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgeyBzdW1tYXJ5LmFsaWFzIH1cclxuICAgICAgICAgICAgPC9Db3B5RmllbGQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtMTIgY29sLW1kLTQnPlxyXG4gICAgICAgICAgICA8Q29weUZpZWxkIHZhbHVlPXtzdW1tYXJ5LmpvYn0+XHJcbiAgICAgICAgICAgICAgPExhYmVsPkNvdXZlcnR1cmU8L0xhYmVsPlxyXG4gICAgICAgICAgICAgIHsgc3VtbWFyeS5qb2IgfVxyXG4gICAgICAgICAgICA8L0NvcHlGaWVsZD5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtMTIgY29sLW1kLTQnPlxyXG4gICAgICAgICAgICA8Q29weUZpZWxkIHZhbHVlPXtzdW1tYXJ5Lm1hdHJpY3VsZX0+XHJcbiAgICAgICAgICAgICAgPExhYmVsPk1hdHJpY3VsZTwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgeyBzdW1tYXJ5Lm1hdHJpY3VsZSB9XHJcbiAgICAgICAgICAgIDwvQ29weUZpZWxkPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTEyIGNvbC1tZC00Jz5cclxuICAgICAgICAgICAgPENvcHlGaWVsZCB2YWx1ZT17YmlydGhkYXRlfT5cclxuICAgICAgICAgICAgICA8TGFiZWw+RGF0ZSBkZSBuYWlzc2FuY2U8L0xhYmVsPlxyXG4gICAgICAgICAgICAgIHsgYmlydGhkYXRlIH1cclxuICAgICAgICAgICAgPC9Db3B5RmllbGQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtMTIgY29sLW1kLTQnPlxyXG4gICAgICAgICAgICA8Q29weUZpZWxkIHZhbHVlPXtoaXJpbmdkYXRlfT5cclxuICAgICAgICAgICAgICA8TGFiZWw+RGF0ZSBkJ2ludMOpZ3JhdGlvbjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgeyBoaXJpbmdkYXRlIH1cclxuICAgICAgICAgICAgPC9Db3B5RmllbGQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTEyJz5cclxuICAgICAgICAgICAgPENvcHlGaWVsZCB2YWx1ZT17YmlydGhwbGFjZX0+XHJcbiAgICAgICAgICAgICAgPExhYmVsPkxpZXUgZGUgbmFpc3NhbmNlPC9MYWJlbD5cclxuICAgICAgICAgICAgICB7IGJpcnRocGxhY2UgfVxyXG4gICAgICAgICAgICA8L0NvcHlGaWVsZD5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtMTInPlxyXG4gICAgICAgICAgICA8Q29weUZpZWxkIHZhbHVlPXtob21lfT5cclxuICAgICAgICAgICAgICA8TGFiZWw+TGlldSBkZSByw6lzaWRlbmNlPC9MYWJlbD5cclxuICAgICAgICAgICAgICB7IGhvbWUgfVxyXG4gICAgICAgICAgICA8L0NvcHlGaWVsZD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcclxuICovXHJcbmV4cG9ydCBuYW1lc3BhY2UgU3VtbWFyeVJlbmRlcmVyIHtcclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBleHBvcnQgdHlwZSBQcm9wZXJ0aWVzID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nIHwgdW5kZWZpbmVkLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIHZhbHVlOiBJbnZlc3RpZ2F0b3JcclxuICB9XHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgUmVhY3RFbGVtZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXHJcblxyXG5pbXBvcnQgeyBWYWx1ZSB9IGZyb20gJy4uLy4uLy4uL3R5cGVzY3JpcHQvVmFsdWUnXHJcbmltcG9ydCB7IFRyaXBsZXQgfSBmcm9tICcuLi8uLi9sYXlvdXQvVHJpcGxldCdcclxuXHJcblxyXG4vKipcclxuICogXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gVmFsdWVSZW5kZXJlciAocHJvcGVydGllczogVmFsdWVSZW5kZXJlci5Qcm9wZXJ0aWVzKTogUmVhY3RFbGVtZW50IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFRyaXBsZXQgXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygndmFsdWUnLCBwcm9wZXJ0aWVzLmNsYXNzTmFtZSl9IFxyXG4gICAgICBzdWJzY3JpcHQ9eyBwcm9wZXJ0aWVzLmNoaWxkcmVuLmZpZnRoKCkgfSBcclxuICAgICAgc3VwZXJzY3JpcHQ9eyBwcm9wZXJ0aWVzLmNoaWxkcmVuLmhhbGYoKSB9XHJcbiAgICA+eyBwcm9wZXJ0aWVzLmNoaWxkcmVuLnN1bSgpLnRvU3RyaW5nKCkgfTwvVHJpcGxldD5cclxuICApXHJcbn0gXHJcblxyXG4vKipcclxuICogXHJcbiAqL1xyXG5leHBvcnQgbmFtZXNwYWNlIFZhbHVlUmVuZGVyZXIge1xyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIGV4cG9ydCB0eXBlIFByb3BlcnRpZXMgPSB7XHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBjbGFzc05hbWU/OiBzdHJpbmcgfCB1bmRlZmluZWQsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgY2hpbGRyZW46IFZhbHVlXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFJlYWN0RWxlbWVudCB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmltcG9ydCB7IFZhbmlsbGFMYXlvdXQgfSBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9WYW5pbGxhTGF5b3V0J1xuaW1wb3J0IHsgSW52ZXN0aWdhdG9yIH0gZnJvbSAnLi4vdHlwZXNjcmlwdC9JbnZlc3RpZ2F0b3InXG5pbXBvcnQgeyBBcHBsaWNhdGlvbkV2ZW50IH0gZnJvbSAnLi4vdHlwZXNjcmlwdC9hcHBsaWNhdGlvbi9BcHBsaWNhdGlvbkV2ZW50J1xuaW1wb3J0IHsgSW52ZXN0aWdhdG9yUGFnZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvcGFnZS9pbnZlc3RpZ2F0b3IvSW52ZXN0aWdhdG9yUGFnZSdcbmltcG9ydCB7IEludmVzdGlnYXRvck5vdExvYWRlZFBhZ2UgfSBmcm9tICcuLi9jb21wb25lbnRzL3BhZ2UvaW52ZXN0aWdhdG9yL0ludmVzdGlnYXRvck5vdExvYWRlZFBhZ2UnXG5cbi8qKlxuKlxuKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGludmVzdGlnYXRvciAocHJvcGVydGllcyA6IGludmVzdGlnYXRvci5Qcm9wZXJ0aWVzKSA6IFJlYWN0RWxlbWVudCB7XG4gIHJldHVybiAoXG4gICAgPFZhbmlsbGFMYXlvdXQ+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlNodWJuaWdndXJhdGggLSBJbnZlc3RpZ2F0ZXVyPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J2luaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGgnIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIHsgXG4gICAgICAgIHByb3BlcnRpZXMuaW52ZXN0aWdhdG9yID8gPEludmVzdGlnYXRvclBhZ2UgeyAuLi5wcm9wZXJ0aWVzIH0gLz4gOiA8SW52ZXN0aWdhdG9yTm90TG9hZGVkUGFnZSB7IC4uLnByb3BlcnRpZXMgfSAvPlxuICAgICAgfVxuICAgICAgXG4gICAgPC9WYW5pbGxhTGF5b3V0PlxuICApXG59XG5cblxuZXhwb3J0IG5hbWVzcGFjZSBpbnZlc3RpZ2F0b3Ige1xuICAvKipcbiAgICogXG4gICAqL1xuICBleHBvcnQgdHlwZSBBcHBsaWNhdGlvbkNhbGxiYWNrID0gKGV2ZW50OiBBcHBsaWNhdGlvbkV2ZW50KSA9PiB2b2lkXG4gIFxuICAvKipcbiAgKlxuICAqL1xuICBleHBvcnQgdHlwZSBQcm9wZXJ0aWVzID0ge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqL1xuICAgIGludmVzdGlnYXRvcjogSW52ZXN0aWdhdG9yIHwgdW5kZWZpbmVkLFxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICovXG4gICAgb25DaGFuZ2U/OiBBcHBsaWNhdGlvbkNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
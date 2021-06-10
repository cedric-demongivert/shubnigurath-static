webpackHotUpdate_N_E("pages/index",{

/***/ "./components/InvestigatorPage.tsx":
/*!*****************************************!*\
  !*** ./components/InvestigatorPage.tsx ***!
  \*****************************************/
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
/* harmony import */ var _SummaryDisplay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SummaryDisplay */ "./components/SummaryDisplay.tsx");
/* harmony import */ var _CharacteristicSetRenderer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CharacteristicSetRenderer */ "./components/CharacteristicSetRenderer.tsx");
/* harmony import */ var _StatusDisplay__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./StatusDisplay */ "./components/StatusDisplay.tsx");
/* harmony import */ var _AllSkillsDisplay__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./AllSkillsDisplay */ "./components/AllSkillsDisplay.tsx");
/* harmony import */ var _typescript_unidoc_reducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../typescript/unidoc/reducer */ "./typescript/unidoc/reducer/index.ts");






var _jsxFileName = "D:\\development\\rpg\\shubgath\\components\\InvestigatorPage.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









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
    return _this;
  }
  /**
   * 
   */


  Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(InvestigatorPage, [{
    key: "handleChange",
    value: function handleChange(next, previous) {
      this.props.onChange(next, previous);
    }
    /**
     * 
     */

  }, {
    key: "handleLevelup",
    value: function handleLevelup() {
      this.props.onChange(this.props.value.levelup(), this.props.value);
    }
    /**
     * 
     */

  }, {
    key: "handleSkillSelection",
    value: function handleSkillSelection(skill) {
      this.props.onChange(this.props.value.toggleForUpdate(skill), this.props.value);
    }
    /**
     * 
     */

  }, {
    key: "handleSave",
    value: function handleSave() {
      var now = new Date();
      var href = document.createElement('a');
      href.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(_typescript_unidoc_reducer__WEBPACK_IMPORTED_MODULE_12__["UnidocInvestigatorReducer"].reduce(this.props.value)));
      href.setAttribute('download', this.props.value.summary.name.first.toLocaleLowerCase() + '-' + this.props.value.summary.name.last.toLocaleLowerCase() + '-' + now.getFullYear() + '-' + now.getMonth() + '-' + now.getDay() + '-' + now.getHours() + '-' + now.getMinutes() + '-' + now.getSeconds() + '-' + now.getMilliseconds() + '.txt');
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
          lineNumber: 87,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "layout layout-rotulus",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "row justify-content-center align-items-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "col-8 col-md-4 order-md-1 col-lg-3 order-lg-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 15
        }
      }, __jsx("img", {
        className: "img-fluid",
        src: "./images/logo.svg",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 17
        }
      })), __jsx("div", {
        className: "col-12 d-block d-md-none",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 15
        }
      }, __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 17
        }
      })), __jsx("div", {
        className: "col-12 col-md-8 order-md-1 col-lg-6 order-lg-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 17
        }
      }, __jsx(_SummaryDisplay__WEBPACK_IMPORTED_MODULE_8__["SummaryDisplay"], {
        value: this.props.value,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 19
        }
      }))), __jsx("div", {
        className: "col-12 d-block order-md-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 15
        }
      }, __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 17
        }
      })), __jsx("div", {
        className: "col-12 col-md-6 order-md-3 col-lg-3 order-lg-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 17
        }
      }, __jsx(_CharacteristicSetRenderer__WEBPACK_IMPORTED_MODULE_9__["CharacteristicSetRenderer"], {
        value: this.props.value,
        onChange: this.handleChange,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 19
        }
      }))), __jsx("div", {
        className: "col-12 d-block d-md-none order-md-3 order-lg-1 d-lg-block",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 15
        }
      }, __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 17
        }
      })), __jsx("div", {
        className: "col-12 col-md-6 order-md-3 col-lg order-lg-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 17
        }
      }, __jsx(_StatusDisplay__WEBPACK_IMPORTED_MODULE_10__["StatusDisplay"], {
        value: this.props.value,
        onChange: this.handleChange,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 19
        }
      }))), __jsx("div", {
        className: "col-12 d-block d-md-block order-md-3 order-lg-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 15
        }
      }, __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 17
        }
      })), __jsx("div", {
        className: "col-12 order-md-3 order-lg-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 17
        }
      }, __jsx(_AllSkillsDisplay__WEBPACK_IMPORTED_MODULE_11__["AllSkillsDisplay"], {
        value: this.props.value,
        onSelect: this.handleSkillSelection,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 19
        }
      })))), __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "col-12",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 15
        }
      }, __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 17
        }
      }), __jsx("button", {
        className: "btn btn-link btn-block",
        onClick: this.handleLevelup,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 17
        }
      }, "Gagner de l'exp\xE9rience"), __jsx("button", {
        className: "btn btn-primary btn-block",
        onClick: this.handleSave,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 17
        }
      }, "Sauvegarder la fiche"), __jsx("button", {
        className: "btn btn-link btn-block",
        onClick: this.props.onReload,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbnZlc3RpZ2F0b3JQYWdlLnRzeCJdLCJuYW1lcyI6WyJJbnZlc3RpZ2F0b3JQYWdlIiwicHJvcGVydGllcyIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJoYW5kbGVTYXZlIiwiaGFuZGxlU2tpbGxTZWxlY3Rpb24iLCJoYW5kbGVMZXZlbHVwIiwibmV4dCIsInByZXZpb3VzIiwicHJvcHMiLCJvbkNoYW5nZSIsInZhbHVlIiwibGV2ZWx1cCIsInNraWxsIiwidG9nZ2xlRm9yVXBkYXRlIiwibm93IiwiRGF0ZSIsImhyZWYiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJVbmlkb2NJbnZlc3RpZ2F0b3JSZWR1Y2VyIiwicmVkdWNlIiwic3VtbWFyeSIsIm5hbWUiLCJmaXJzdCIsInRvTG9jYWxlTG93ZXJDYXNlIiwibGFzdCIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXkiLCJnZXRIb3VycyIsImdldE1pbnV0ZXMiLCJnZXRTZWNvbmRzIiwiZ2V0TWlsbGlzZWNvbmRzIiwic3R5bGUiLCJkaXNwbGF5IiwiYm9keSIsImFwcGVuZENoaWxkIiwiY2xpY2siLCJyZW1vdmVDaGlsZCIsInJlbW92ZSIsImNsYXNzbmFtZXMiLCJjbGFzc05hbWUiLCJvblJlbG9hZCIsIlB1cmVDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSUE7QUFDQTtBQUNBO0FBQ08sSUFBTUEsZ0JBQWI7QUFBQTs7QUFBQTs7QUFDRTtBQUNGO0FBQ0E7QUFDRSw0QkFBb0JDLFVBQXBCLEVBQTZEO0FBQUE7O0FBQUE7O0FBQzNELDhCQUFNQSxVQUFOO0FBRUEsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJ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QTtBQUFBO0FBQUEsU0FDRTtBQUFLLGlCQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLEVBR0U7QUFBUSxpQkFBUyxFQUFDLHdCQUFsQjtBQUEyQyxlQUFPLEVBQUUsS0FBS0MsYUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQ0FIRixFQU9FO0FBQVEsaUJBQVMsRUFBQywyQkFBbEI7QUFBOEMsZUFBTyxFQUFFLEtBQUtGLFVBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBUEYsRUFXRTtBQUFRLGlCQUFTLEVBQUMsd0JBQWxCO0FBQTJDLGVBQU8sRUFBRSxLQUFLSyxLQUFMLENBQVdvQyxRQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQVhGLENBREYsQ0F4REYsQ0FERixDQURGLENBREY7QUFnRkQ7QUFwSkg7O0FBQUE7QUFBQSxFQUFzQ0MsbURBQXRDO0FBdUpBO0FBQ0E7QUFDQTs7a0NBQ2lCOUMsZ0IsS0FBQUEsZ0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGE0Mjc2YjdhYTJiNzExYWE0NDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgUmVhY3RFbGVtZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXHJcblxyXG5pbXBvcnQgeyBJbnZlc3RpZ2F0b3IgfSBmcm9tICcuLi90eXBlc2NyaXB0L0ludmVzdGlnYXRvcidcclxuXHJcbmltcG9ydCB7IFN1bW1hcnlEaXNwbGF5IH0gZnJvbSAnLi9TdW1tYXJ5RGlzcGxheSdcclxuaW1wb3J0IHsgQ2hhcmFjdGVyaXN0aWNTZXRSZW5kZXJlciB9IGZyb20gJy4vQ2hhcmFjdGVyaXN0aWNTZXRSZW5kZXJlcidcclxuaW1wb3J0IHsgU3RhdHVzRGlzcGxheSB9IGZyb20gJy4vU3RhdHVzRGlzcGxheSdcclxuaW1wb3J0IHsgQWxsU2tpbGxzRGlzcGxheSB9IGZyb20gJy4vQWxsU2tpbGxzRGlzcGxheSdcclxuaW1wb3J0IHsgVW5pZG9jSW52ZXN0aWdhdG9yUmVkdWNlciB9IGZyb20gJy4uL3R5cGVzY3JpcHQvdW5pZG9jL3JlZHVjZXInXHJcbmltcG9ydCB7IFNraWxsIH0gZnJvbSAnLi4vdHlwZXNjcmlwdC9Ta2lsbCdcclxuXHJcblxyXG4vKipcclxuICogXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgSW52ZXN0aWdhdG9yUGFnZSBleHRlbmRzIFB1cmVDb21wb25lbnQ8SW52ZXN0aWdhdG9yUGFnZS5Qcm9wZXJ0aWVzPiB7XHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yIChwcm9wZXJ0aWVzOiBJbnZlc3RpZ2F0b3JQYWdlLlByb3BlcnRpZXMpIHtcclxuICAgIHN1cGVyKHByb3BlcnRpZXMpXHJcblxyXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmhhbmRsZVNhdmUgPSB0aGlzLmhhbmRsZVNhdmUuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVTa2lsbFNlbGVjdGlvbiA9IHRoaXMuaGFuZGxlU2tpbGxTZWxlY3Rpb24uYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVMZXZlbHVwID0gdGhpcy5oYW5kbGVMZXZlbHVwLmJpbmQodGhpcylcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyBoYW5kbGVDaGFuZ2UobmV4dDogSW52ZXN0aWdhdG9yLCBwcmV2aW91czogSW52ZXN0aWdhdG9yKTogdm9pZCB7XHJcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKG5leHQsIHByZXZpb3VzKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIGhhbmRsZUxldmVsdXAoKTogdm9pZCB7XHJcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMucHJvcHMudmFsdWUubGV2ZWx1cCgpLCB0aGlzLnByb3BzLnZhbHVlKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIGhhbmRsZVNraWxsU2VsZWN0aW9uKHNraWxsOiBTa2lsbCk6IHZvaWQge1xyXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnByb3BzLnZhbHVlLnRvZ2dsZUZvclVwZGF0ZShza2lsbCksIHRoaXMucHJvcHMudmFsdWUpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgaGFuZGxlU2F2ZSgpOiB2b2lkIHtcclxuICAgIGNvbnN0IG5vdzogRGF0ZSA9IG5ldyBEYXRlKClcclxuICAgIGNvbnN0IGhyZWY6IEhUTUxBbmNob3JFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXHJcbiAgICBocmVmLnNldEF0dHJpYnV0ZSgnaHJlZicsICdkYXRhOnRleHQvcGxhaW47Y2hhcnNldD11dGYtOCwnICsgZW5jb2RlVVJJQ29tcG9uZW50KFVuaWRvY0ludmVzdGlnYXRvclJlZHVjZXIucmVkdWNlKHRoaXMucHJvcHMudmFsdWUpKSlcclxuICAgIGhyZWYuc2V0QXR0cmlidXRlKFxyXG4gICAgICAnZG93bmxvYWQnLCBcclxuICAgICAgdGhpcy5wcm9wcy52YWx1ZS5zdW1tYXJ5Lm5hbWUuZmlyc3QudG9Mb2NhbGVMb3dlckNhc2UoKSArICctJyArIFxyXG4gICAgICB0aGlzLnByb3BzLnZhbHVlLnN1bW1hcnkubmFtZS5sYXN0LnRvTG9jYWxlTG93ZXJDYXNlKCkgKyAnLScgKyBcclxuICAgICAgbm93LmdldEZ1bGxZZWFyKCkgKyAnLScgKyBcclxuICAgICAgbm93LmdldE1vbnRoKCkgKyAnLScgKyBcclxuICAgICAgbm93LmdldERheSgpICsgJy0nICsgXHJcbiAgICAgIG5vdy5nZXRIb3VycygpICsgJy0nICtcclxuICAgICAgbm93LmdldE1pbnV0ZXMoKSArICctJyArIFxyXG4gICAgICBub3cuZ2V0U2Vjb25kcygpICsgJy0nICtcclxuICAgICAgbm93LmdldE1pbGxpc2Vjb25kcygpICsgJy50eHQnXHJcbiAgICApXHJcblxyXG4gICAgaHJlZi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhyZWYpXHJcblxyXG4gICAgaHJlZi5jbGljaygpXHJcblxyXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChocmVmKVxyXG5cclxuICAgIGhyZWYucmVtb3ZlKClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyByZW5kZXIgKCkgOiBSZWFjdEVsZW1lbnQge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ3BhZ2UgcGFnZS1pbnZlc3RpZ2F0b3InLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsYXlvdXQgbGF5b3V0LXJvdHVsdXMnPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtOCBjb2wtbWQtNCBvcmRlci1tZC0xIGNvbC1sZy0zIG9yZGVyLWxnLTEnPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2ltZy1mbHVpZCcgc3JjPScuL2ltYWdlcy9sb2dvLnN2ZycgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC0xMiBkLWJsb2NrIGQtbWQtbm9uZSc+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC0xMiBjb2wtbWQtOCBvcmRlci1tZC0xIGNvbC1sZy02IG9yZGVyLWxnLTEnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgICAgICAgICAgIDxTdW1tYXJ5RGlzcGxheSB2YWx1ZT17dGhpcy5wcm9wcy52YWx1ZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTEyIGQtYmxvY2sgb3JkZXItbWQtMyc+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC0xMiBjb2wtbWQtNiBvcmRlci1tZC0zIGNvbC1sZy0zIG9yZGVyLWxnLTEnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgICAgICAgICAgIDxDaGFyYWN0ZXJpc3RpY1NldFJlbmRlcmVyIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLnZhbHVlfSBcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IFxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtMTIgZC1ibG9jayBkLW1kLW5vbmUgb3JkZXItbWQtMyBvcmRlci1sZy0xIGQtbGctYmxvY2snPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtMTIgY29sLW1kLTYgb3JkZXItbWQtMyBjb2wtbGcgb3JkZXItbGctMSc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuICAgICAgICAgICAgICAgICAgPFN0YXR1c0Rpc3BsYXkgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMudmFsdWV9IFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC0xMiBkLWJsb2NrIGQtbWQtYmxvY2sgb3JkZXItbWQtMyBvcmRlci1sZy0xJz5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTEyIG9yZGVyLW1kLTMgb3JkZXItbGctMSc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuICAgICAgICAgICAgICAgICAgPEFsbFNraWxsc0Rpc3BsYXkgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9e3RoaXMuaGFuZGxlU2tpbGxTZWxlY3Rpb259XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTEyJz5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1saW5rIGJ0bi1ibG9jaycgb25DbGljaz17dGhpcy5oYW5kbGVMZXZlbHVwfT5cclxuICAgICAgICAgICAgICAgICAgR2FnbmVyIGRlIGwnZXhww6lyaWVuY2VcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tcHJpbWFyeSBidG4tYmxvY2snIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2F2ZX0+XHJcbiAgICAgICAgICAgICAgICAgIFNhdXZlZ2FyZGVyIGxhIGZpY2hlXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1saW5rIGJ0bi1ibG9jaycgb25DbGljaz17dGhpcy5wcm9wcy5vblJlbG9hZH0+XHJcbiAgICAgICAgICAgICAgICAgIENoYXJnZXIgdW5lIG5vdXZlbGxlIGZpY2hlXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogXHJcbiAqL1xyXG5leHBvcnQgbmFtZXNwYWNlIEludmVzdGlnYXRvclBhZ2Uge1xyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIGV4cG9ydCB0eXBlIFByb3BlcnRpZXMgPSB7XHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmcgfCB1bmRlZmluZWQsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgb25SZWxvYWQ/OiAoKSA9PiB2b2lkLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIG9uQ2hhbmdlPzogKG5leHQ6IEludmVzdGlnYXRvciwgcHJldmlvdXM6IEludmVzdGlnYXRvcikgPT4gdm9pZCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICB2YWx1ZTogSW52ZXN0aWdhdG9yXHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==
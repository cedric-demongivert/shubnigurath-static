webpackHotUpdate_N_E("pages/investigator",{

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
        className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('layout layout-page', this.props.className),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "layout layout-sandwich",
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlL2ludmVzdGlnYXRvci9JbnZlc3RpZ2F0b3JQYWdlLnRzeCJdLCJuYW1lcyI6WyJIb21lSW1hZ2UiLCJyZXF1aXJlIiwiSW52ZXN0aWdhdG9yUGFnZSIsInByb3BlcnRpZXMiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiaGFuZGxlU2F2ZSIsImhhbmRsZVNraWxsU2VsZWN0aW9uIiwiaGFuZGxlTGV2ZWx1cCIsImhhbmRsZVJlbG9hZCIsInByb3BzIiwib25DaGFuZ2UiLCJBcHBsaWNhdGlvbkV2ZW50Iiwic2hvd0xvYWRpbmdQYWdlIiwibmV4dCIsInByZXZpb3VzIiwidXNlIiwiaW52ZXN0aWdhdG9yIiwibGV2ZWx1cCIsInNraWxsIiwidG9nZ2xlRm9yVXBkYXRlIiwibm93IiwiRGF0ZSIsImhyZWYiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJVbmlkb2NJbnZlc3RpZ2F0b3JSZWR1Y2VyIiwicmVkdWNlIiwic3VtbWFyeSIsIm5hbWUiLCJmaXJzdCIsInRvTG9jYWxlTG93ZXJDYXNlIiwibGFzdCIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXkiLCJnZXRIb3VycyIsImdldE1pbnV0ZXMiLCJnZXRTZWNvbmRzIiwiZ2V0TWlsbGlzZWNvbmRzIiwic3R5bGUiLCJkaXNwbGF5IiwiYm9keSIsImFwcGVuZENoaWxkIiwiY2xpY2siLCJyZW1vdmVDaGlsZCIsInJlbW92ZSIsImNsYXNzbmFtZXMiLCJjbGFzc05hbWUiLCJQdXJlQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBR0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBR0MsbUJBQU8sQ0FBQyxpRUFBRCxDQUFQLFdBQWxCO0FBR0E7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LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFJlYWN0RWxlbWVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xyXG5cclxuaW1wb3J0IHsgSW52ZXN0aWdhdG9yIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXNjcmlwdC9JbnZlc3RpZ2F0b3InXHJcbmltcG9ydCB7IFVuaWRvY0ludmVzdGlnYXRvclJlZHVjZXIgfSBmcm9tICcuLi8uLi8uLi90eXBlc2NyaXB0L3VuaWRvYy9yZWR1Y2VyJ1xyXG5pbXBvcnQgeyBTa2lsbCB9IGZyb20gJy4uLy4uLy4uL3R5cGVzY3JpcHQvU2tpbGwnXHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uRXZlbnQgfSBmcm9tICcuLi8uLi8uLi90eXBlc2NyaXB0L2FwcGxpY2F0aW9uL0FwcGxpY2F0aW9uRXZlbnQnXHJcblxyXG5pbXBvcnQgeyBTdW1tYXJ5UmVuZGVyZXIgfSBmcm9tICcuL1N1bW1hcnlSZW5kZXJlcidcclxuaW1wb3J0IHsgQ2hhcmFjdGVyaXN0aWNTZXRSZW5kZXJlciB9IGZyb20gJy4vQ2hhcmFjdGVyaXN0aWNTZXRSZW5kZXJlcidcclxuaW1wb3J0IHsgU3RhdHVzUmVuZGVyZXIgfSBmcm9tICcuL1N0YXR1c1JlbmRlcmVyJ1xyXG5pbXBvcnQgeyBBbGxTa2lsbHNSZW5kZXJlciB9IGZyb20gJy4vQWxsU2tpbGxzUmVuZGVyZXInXHJcblxyXG5jb25zdCBIb21lSW1hZ2UgPSByZXF1aXJlKCcuLi8uLi8uLi9wdWJsaWMvaW1hZ2VzL2xvZ28uc3ZnJykuZGVmYXVsdFxyXG5cclxuXHJcbi8qKlxyXG4gKiBcclxuICovXHJcbmV4cG9ydCBjbGFzcyBJbnZlc3RpZ2F0b3JQYWdlIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxJbnZlc3RpZ2F0b3JQYWdlLlByb3BlcnRpZXM+IHtcclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgY29uc3RydWN0b3IgKHByb3BlcnRpZXM6IEludmVzdGlnYXRvclBhZ2UuUHJvcGVydGllcykge1xyXG4gICAgc3VwZXIocHJvcGVydGllcylcclxuXHJcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlU2F2ZSA9IHRoaXMuaGFuZGxlU2F2ZS5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmhhbmRsZVNraWxsU2VsZWN0aW9uID0gdGhpcy5oYW5kbGVTa2lsbFNlbGVjdGlvbi5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmhhbmRsZUxldmVsdXAgPSB0aGlzLmhhbmRsZUxldmVsdXAuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVSZWxvYWQgPSB0aGlzLmhhbmRsZVJlbG9hZC5iaW5kKHRoaXMpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgaGFuZGxlUmVsb2FkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShBcHBsaWNhdGlvbkV2ZW50LnNob3dMb2FkaW5nUGFnZSgpKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIGhhbmRsZUNoYW5nZShuZXh0OiBJbnZlc3RpZ2F0b3IsIHByZXZpb3VzOiBJbnZlc3RpZ2F0b3IpOiB2b2lkIHtcclxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoQXBwbGljYXRpb25FdmVudC51c2UobmV4dCkpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgaGFuZGxlTGV2ZWx1cCgpOiB2b2lkIHtcclxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoQXBwbGljYXRpb25FdmVudC51c2UodGhpcy5wcm9wcy5pbnZlc3RpZ2F0b3IubGV2ZWx1cCgpKSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyBoYW5kbGVTa2lsbFNlbGVjdGlvbihza2lsbDogU2tpbGwpOiB2b2lkIHtcclxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoQXBwbGljYXRpb25FdmVudC51c2UodGhpcy5wcm9wcy5pbnZlc3RpZ2F0b3IudG9nZ2xlRm9yVXBkYXRlKHNraWxsKSkpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgaGFuZGxlU2F2ZSgpOiB2b2lkIHtcclxuICAgIGNvbnN0IG5vdzogRGF0ZSA9IG5ldyBEYXRlKClcclxuICAgIGNvbnN0IGhyZWY6IEhUTUxBbmNob3JFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXHJcbiAgICBocmVmLnNldEF0dHJpYnV0ZSgnaHJlZicsICdkYXRhOnRleHQvcGxhaW47Y2hhcnNldD11dGYtOCwnICsgZW5jb2RlVVJJQ29tcG9uZW50KFVuaWRvY0ludmVzdGlnYXRvclJlZHVjZXIucmVkdWNlKHRoaXMucHJvcHMuaW52ZXN0aWdhdG9yKSkpXHJcbiAgICBocmVmLnNldEF0dHJpYnV0ZShcclxuICAgICAgJ2Rvd25sb2FkJywgXHJcbiAgICAgIHRoaXMucHJvcHMuaW52ZXN0aWdhdG9yLnN1bW1hcnkubmFtZS5maXJzdC50b0xvY2FsZUxvd2VyQ2FzZSgpICsgJy0nICsgXHJcbiAgICAgIHRoaXMucHJvcHMuaW52ZXN0aWdhdG9yLnN1bW1hcnkubmFtZS5sYXN0LnRvTG9jYWxlTG93ZXJDYXNlKCkgKyAnLScgKyBcclxuICAgICAgbm93LmdldEZ1bGxZZWFyKCkgKyAnLScgKyBcclxuICAgICAgbm93LmdldE1vbnRoKCkgKyAnLScgKyBcclxuICAgICAgbm93LmdldERheSgpICsgJy0nICsgXHJcbiAgICAgIG5vdy5nZXRIb3VycygpICsgJy0nICtcclxuICAgICAgbm93LmdldE1pbnV0ZXMoKSArICctJyArIFxyXG4gICAgICBub3cuZ2V0U2Vjb25kcygpICsgJy0nICtcclxuICAgICAgbm93LmdldE1pbGxpc2Vjb25kcygpICsgJy50eHQnXHJcbiAgICApXHJcblxyXG4gICAgaHJlZi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhyZWYpXHJcblxyXG4gICAgaHJlZi5jbGljaygpXHJcblxyXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChocmVmKVxyXG5cclxuICAgIGhyZWYucmVtb3ZlKClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyByZW5kZXIgKCkgOiBSZWFjdEVsZW1lbnQge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ2xheW91dCBsYXlvdXQtcGFnZScsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xheW91dCBsYXlvdXQtc2FuZHdpY2gnPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtOCBjb2wtbWQtNCBvcmRlci1tZC0xIGNvbC1sZy0zIG9yZGVyLWxnLTEnPlxyXG4gICAgICAgICAgICAgICAgPEhvbWVJbWFnZSBjbGFzc05hbWU9J2ltZy1mbHVpZCcgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC0xMiBkLWJsb2NrIGQtbWQtbm9uZSc+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC0xMiBjb2wtbWQtOCBvcmRlci1tZC0xIGNvbC1sZy02IG9yZGVyLWxnLTEnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgICAgICAgICAgIDxTdW1tYXJ5UmVuZGVyZXIgdmFsdWU9e3RoaXMucHJvcHMuaW52ZXN0aWdhdG9yfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtMTIgZC1ibG9jayBvcmRlci1tZC0zJz5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTEyIGNvbC1tZC02IG9yZGVyLW1kLTMgY29sLWxnLTMgb3JkZXItbGctMSc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuICAgICAgICAgICAgICAgICAgPENoYXJhY3RlcmlzdGljU2V0UmVuZGVyZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuaW52ZXN0aWdhdG9yfSBcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IFxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtMTIgZC1ibG9jayBkLW1kLW5vbmUgb3JkZXItbWQtMyBvcmRlci1sZy0xIGQtbGctYmxvY2snPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtMTIgY29sLW1kLTYgb3JkZXItbWQtMyBjb2wtbGcgb3JkZXItbGctMSc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuICAgICAgICAgICAgICAgICAgPFN0YXR1c1JlbmRlcmVyIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmludmVzdGlnYXRvcn0gXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSBcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTEyIGQtYmxvY2sgZC1tZC1ibG9jayBvcmRlci1tZC0zIG9yZGVyLWxnLTEnPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtMTIgb3JkZXItbWQtMyBvcmRlci1sZy0xJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICAgICAgICAgICA8QWxsU2tpbGxzUmVuZGVyZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuaW52ZXN0aWdhdG9yfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXt0aGlzLmhhbmRsZVNraWxsU2VsZWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC0xMic+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tbGluayBidG4tYmxvY2snIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTGV2ZWx1cH0+XHJcbiAgICAgICAgICAgICAgICAgIEdhZ25lciBkZSBsJ2V4cMOpcmllbmNlXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLXByaW1hcnkgYnRuLWJsb2NrJyBvbkNsaWNrPXt0aGlzLmhhbmRsZVNhdmV9PlxyXG4gICAgICAgICAgICAgICAgICBTYXV2ZWdhcmRlciBsYSBmaWNoZVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tbGluayBidG4tYmxvY2snIG9uQ2xpY2s9e3RoaXMuaGFuZGxlUmVsb2FkfT5cclxuICAgICAgICAgICAgICAgICAgQ2hhcmdlciB1bmUgbm91dmVsbGUgZmljaGVcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcclxuICovXHJcbmV4cG9ydCBuYW1lc3BhY2UgSW52ZXN0aWdhdG9yUGFnZSB7XHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgZXhwb3J0IHR5cGUgQXBwbGljYXRpb25DYWxsYmFjayA9IChldmVudDogQXBwbGljYXRpb25FdmVudCkgPT4gdm9pZFxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIGV4cG9ydCB0eXBlIFByb3BlcnRpZXMgPSB7XHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmcgfCB1bmRlZmluZWQsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgb25DaGFuZ2U/OiBBcHBsaWNhdGlvbkNhbGxiYWNrLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIGludmVzdGlnYXRvcjogSW52ZXN0aWdhdG9yXHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==
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
        className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('layout layout-sandwich', this.props.className),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "row justify-content-center align-items-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "col-8 col-md-4 order-md-1 col-lg-3 order-lg-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 13
        }
      }, __jsx(HomeImage, {
        className: "img-fluid",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 15
        }
      })), __jsx("div", {
        className: "col-12 d-block d-md-none",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 13
        }
      }, __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 15
        }
      })), __jsx("div", {
        className: "col-12 col-md-8 order-md-1 col-lg-6 order-lg-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 15
        }
      }, __jsx(_SummaryRenderer__WEBPACK_IMPORTED_MODULE_10__["SummaryRenderer"], {
        value: this.props.investigator,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 17
        }
      }))), __jsx("div", {
        className: "col-12 d-block order-md-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 13
        }
      }, __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 15
        }
      })), __jsx("div", {
        className: "col-12 col-md-6 order-md-3 col-lg-3 order-lg-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 15
        }
      }, __jsx(_CharacteristicSetRenderer__WEBPACK_IMPORTED_MODULE_11__["CharacteristicSetRenderer"], {
        value: this.props.investigator,
        onChange: this.handleChange,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 17
        }
      }))), __jsx("div", {
        className: "col-12 d-block d-md-none order-md-3 order-lg-1 d-lg-block",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 13
        }
      }, __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 15
        }
      })), __jsx("div", {
        className: "col-12 col-md-6 order-md-3 col-lg order-lg-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 15
        }
      }, __jsx(_StatusRenderer__WEBPACK_IMPORTED_MODULE_12__["StatusRenderer"], {
        value: this.props.investigator,
        onChange: this.handleChange,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 17
        }
      }))), __jsx("div", {
        className: "col-12 d-block d-md-block order-md-3 order-lg-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 13
        }
      }, __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 15
        }
      })), __jsx("div", {
        className: "col-12 order-md-3 order-lg-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 15
        }
      }, __jsx(_AllSkillsRenderer__WEBPACK_IMPORTED_MODULE_13__["AllSkillsRenderer"], {
        value: this.props.investigator,
        onSelect: this.handleSkillSelection,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 17
        }
      })))), __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "col-12",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 13
        }
      }, __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 15
        }
      }), __jsx("button", {
        className: "btn btn-link btn-block",
        onClick: this.handleLevelup,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 15
        }
      }, "Gagner de l'exp\xE9rience"), __jsx("button", {
        className: "btn btn-primary btn-block",
        onClick: this.handleSave,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 15
        }
      }, "Sauvegarder la fiche"), __jsx("button", {
        className: "btn btn-link btn-block",
        onClick: this.handleReload,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 15
        }
      }, "Charger une nouvelle fiche")))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlL2ludmVzdGlnYXRvci9JbnZlc3RpZ2F0b3JQYWdlLnRzeCJdLCJuYW1lcyI6WyJIb21lSW1hZ2UiLCJyZXF1aXJlIiwiSW52ZXN0aWdhdG9yUGFnZSIsInByb3BlcnRpZXMiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiaGFuZGxlU2F2ZSIsImhhbmRsZVNraWxsU2VsZWN0aW9uIiwiaGFuZGxlTGV2ZWx1cCIsImhhbmRsZVJlbG9hZCIsInByb3BzIiwib25DaGFuZ2UiLCJBcHBsaWNhdGlvbkV2ZW50Iiwic2hvd0xvYWRpbmdQYWdlIiwibmV4dCIsInByZXZpb3VzIiwidXNlIiwiaW52ZXN0aWdhdG9yIiwibGV2ZWx1cCIsInNraWxsIiwidG9nZ2xlRm9yVXBkYXRlIiwibm93IiwiRGF0ZSIsImhyZWYiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJVbmlkb2NJbnZlc3RpZ2F0b3JSZWR1Y2VyIiwicmVkdWNlIiwic3VtbWFyeSIsIm5hbWUiLCJmaXJzdCIsInRvTG9jYWxlTG93ZXJDYXNlIiwibGFzdCIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXkiLCJnZXRIb3VycyIsImdldE1pbnV0ZXMiLCJnZXRTZWNvbmRzIiwiZ2V0TWlsbGlzZWNvbmRzIiwic3R5bGUiLCJkaXNwbGF5IiwiYm9keSIsImFwcGVuZENoaWxkIiwiY2xpY2siLCJyZW1vdmVDaGlsZCIsInJlbW92ZSIsImNsYXNzbmFtZXMiLCJjbGFzc05hbWUiLCJQdXJlQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBR0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBR0MsbUJBQU8sQ0FBQyxpRUFBRCxDQUFQLFdBQWxCO0FBR0E7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QUFBO0FBQUE7QUFBQSxTQUNFO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLHFFQUFEO0FBQ0UsYUFBSyxFQUFFLEtBQUtNLEtBQUwsQ0FBV08sWUFEcEI7QUFFRSxnQkFBUSxFQUFFLEtBQUtWLG9CQUZqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsQ0FERixDQTdDRixDQURGLEVBd0RFO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFLLGlCQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLEVBR0U7QUFBUSxpQkFBUyxFQUFDLHdCQUFsQjtBQUEyQyxlQUFPLEVBQUUsS0FBS0MsYUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQ0FIRixFQU9FO0FBQVEsaUJBQVMsRUFBQywyQkFBbEI7QUFBOEMsZUFBTyxFQUFFLEtBQUtGLFVBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBUEYsRUFXRTtBQUFRLGlCQUFTLEVBQUMsd0JBQWxCO0FBQTJDLGVBQU8sRUFBRSxLQUFLRyxZQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQVhGLENBREYsQ0F4REYsQ0FERixDQURGO0FBOEVEO0FBMUpIOztBQUFBO0FBQUEsRUFBc0MwQyxtREFBdEM7QUE2SkE7QUFDQTtBQUNBOztrQ0FDaUJqRCxnQixLQUFBQSxnQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbnZlc3RpZ2F0b3IuYzIzODgyY2YwYTRkYjg5MTA4YTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgUmVhY3RFbGVtZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXHJcblxyXG5pbXBvcnQgeyBJbnZlc3RpZ2F0b3IgfSBmcm9tICcuLi8uLi8uLi90eXBlc2NyaXB0L0ludmVzdGlnYXRvcidcclxuaW1wb3J0IHsgVW5pZG9jSW52ZXN0aWdhdG9yUmVkdWNlciB9IGZyb20gJy4uLy4uLy4uL3R5cGVzY3JpcHQvdW5pZG9jL3JlZHVjZXInXHJcbmltcG9ydCB7IFNraWxsIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXNjcmlwdC9Ta2lsbCdcclxuaW1wb3J0IHsgQXBwbGljYXRpb25FdmVudCB9IGZyb20gJy4uLy4uLy4uL3R5cGVzY3JpcHQvYXBwbGljYXRpb24vQXBwbGljYXRpb25FdmVudCdcclxuXHJcbmltcG9ydCB7IFN1bW1hcnlSZW5kZXJlciB9IGZyb20gJy4vU3VtbWFyeVJlbmRlcmVyJ1xyXG5pbXBvcnQgeyBDaGFyYWN0ZXJpc3RpY1NldFJlbmRlcmVyIH0gZnJvbSAnLi9DaGFyYWN0ZXJpc3RpY1NldFJlbmRlcmVyJ1xyXG5pbXBvcnQgeyBTdGF0dXNSZW5kZXJlciB9IGZyb20gJy4vU3RhdHVzUmVuZGVyZXInXHJcbmltcG9ydCB7IEFsbFNraWxsc1JlbmRlcmVyIH0gZnJvbSAnLi9BbGxTa2lsbHNSZW5kZXJlcidcclxuXHJcbmNvbnN0IEhvbWVJbWFnZSA9IHJlcXVpcmUoJy4uLy4uLy4uL3B1YmxpYy9pbWFnZXMvbG9nby5zdmcnKS5kZWZhdWx0XHJcblxyXG5cclxuLyoqXHJcbiAqIFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEludmVzdGlnYXRvclBhZ2UgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PEludmVzdGlnYXRvclBhZ2UuUHJvcGVydGllcz4ge1xyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvciAocHJvcGVydGllczogSW52ZXN0aWdhdG9yUGFnZS5Qcm9wZXJ0aWVzKSB7XHJcbiAgICBzdXBlcihwcm9wZXJ0aWVzKVxyXG5cclxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVTYXZlID0gdGhpcy5oYW5kbGVTYXZlLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlU2tpbGxTZWxlY3Rpb24gPSB0aGlzLmhhbmRsZVNraWxsU2VsZWN0aW9uLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlTGV2ZWx1cCA9IHRoaXMuaGFuZGxlTGV2ZWx1cC5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmhhbmRsZVJlbG9hZCA9IHRoaXMuaGFuZGxlUmVsb2FkLmJpbmQodGhpcylcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyBoYW5kbGVSZWxvYWQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKEFwcGxpY2F0aW9uRXZlbnQuc2hvd0xvYWRpbmdQYWdlKCkpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgaGFuZGxlQ2hhbmdlKG5leHQ6IEludmVzdGlnYXRvciwgcHJldmlvdXM6IEludmVzdGlnYXRvcik6IHZvaWQge1xyXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShBcHBsaWNhdGlvbkV2ZW50LnVzZShuZXh0KSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyBoYW5kbGVMZXZlbHVwKCk6IHZvaWQge1xyXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShBcHBsaWNhdGlvbkV2ZW50LnVzZSh0aGlzLnByb3BzLmludmVzdGlnYXRvci5sZXZlbHVwKCkpKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIGhhbmRsZVNraWxsU2VsZWN0aW9uKHNraWxsOiBTa2lsbCk6IHZvaWQge1xyXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShBcHBsaWNhdGlvbkV2ZW50LnVzZSh0aGlzLnByb3BzLmludmVzdGlnYXRvci50b2dnbGVGb3JVcGRhdGUoc2tpbGwpKSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyBoYW5kbGVTYXZlKCk6IHZvaWQge1xyXG4gICAgY29uc3Qgbm93OiBEYXRlID0gbmV3IERhdGUoKVxyXG4gICAgY29uc3QgaHJlZjogSFRNTEFuY2hvckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcclxuICAgIGhyZWYuc2V0QXR0cmlidXRlKCdocmVmJywgJ2RhdGE6dGV4dC9wbGFpbjtjaGFyc2V0PXV0Zi04LCcgKyBlbmNvZGVVUklDb21wb25lbnQoVW5pZG9jSW52ZXN0aWdhdG9yUmVkdWNlci5yZWR1Y2UodGhpcy5wcm9wcy5pbnZlc3RpZ2F0b3IpKSlcclxuICAgIGhyZWYuc2V0QXR0cmlidXRlKFxyXG4gICAgICAnZG93bmxvYWQnLCBcclxuICAgICAgdGhpcy5wcm9wcy5pbnZlc3RpZ2F0b3Iuc3VtbWFyeS5uYW1lLmZpcnN0LnRvTG9jYWxlTG93ZXJDYXNlKCkgKyAnLScgKyBcclxuICAgICAgdGhpcy5wcm9wcy5pbnZlc3RpZ2F0b3Iuc3VtbWFyeS5uYW1lLmxhc3QudG9Mb2NhbGVMb3dlckNhc2UoKSArICctJyArIFxyXG4gICAgICBub3cuZ2V0RnVsbFllYXIoKSArICctJyArIFxyXG4gICAgICBub3cuZ2V0TW9udGgoKSArICctJyArIFxyXG4gICAgICBub3cuZ2V0RGF5KCkgKyAnLScgKyBcclxuICAgICAgbm93LmdldEhvdXJzKCkgKyAnLScgK1xyXG4gICAgICBub3cuZ2V0TWludXRlcygpICsgJy0nICsgXHJcbiAgICAgIG5vdy5nZXRTZWNvbmRzKCkgKyAnLScgK1xyXG4gICAgICBub3cuZ2V0TWlsbGlzZWNvbmRzKCkgKyAnLnR4dCdcclxuICAgIClcclxuXHJcbiAgICBocmVmLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaHJlZilcclxuXHJcbiAgICBocmVmLmNsaWNrKClcclxuXHJcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGhyZWYpXHJcblxyXG4gICAgaHJlZi5yZW1vdmUoKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIHJlbmRlciAoKSA6IFJlYWN0RWxlbWVudCB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnbGF5b3V0IGxheW91dC1zYW5kd2ljaCcsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC04IGNvbC1tZC00IG9yZGVyLW1kLTEgY29sLWxnLTMgb3JkZXItbGctMSc+XHJcbiAgICAgICAgICAgICAgPEhvbWVJbWFnZSBjbGFzc05hbWU9J2ltZy1mbHVpZCcgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTEyIGQtYmxvY2sgZC1tZC1ub25lJz5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTEyIGNvbC1tZC04IG9yZGVyLW1kLTEgY29sLWxnLTYgb3JkZXItbGctMSc+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgICAgICAgICA8U3VtbWFyeVJlbmRlcmVyIHZhbHVlPXt0aGlzLnByb3BzLmludmVzdGlnYXRvcn0gLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTEyIGQtYmxvY2sgb3JkZXItbWQtMyc+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC0xMiBjb2wtbWQtNiBvcmRlci1tZC0zIGNvbC1sZy0zIG9yZGVyLWxnLTEnPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICAgICAgICAgPENoYXJhY3RlcmlzdGljU2V0UmVuZGVyZXIgXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmludmVzdGlnYXRvcn0gXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtMTIgZC1ibG9jayBkLW1kLW5vbmUgb3JkZXItbWQtMyBvcmRlci1sZy0xIGQtbGctYmxvY2snPlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtMTIgY29sLW1kLTYgb3JkZXItbWQtMyBjb2wtbGcgb3JkZXItbGctMSc+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgICAgICAgICA8U3RhdHVzUmVuZGVyZXIgXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmludmVzdGlnYXRvcn0gXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtMTIgZC1ibG9jayBkLW1kLWJsb2NrIG9yZGVyLW1kLTMgb3JkZXItbGctMSc+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC0xMiBvcmRlci1tZC0zIG9yZGVyLWxnLTEnPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICAgICAgICAgPEFsbFNraWxsc1JlbmRlcmVyIFxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5pbnZlc3RpZ2F0b3J9XHJcbiAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXt0aGlzLmhhbmRsZVNraWxsU2VsZWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC0xMic+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tbGluayBidG4tYmxvY2snIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTGV2ZWx1cH0+XHJcbiAgICAgICAgICAgICAgICBHYWduZXIgZGUgbCdleHDDqXJpZW5jZVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9jaycgb25DbGljaz17dGhpcy5oYW5kbGVTYXZlfT5cclxuICAgICAgICAgICAgICAgIFNhdXZlZ2FyZGVyIGxhIGZpY2hlXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLWxpbmsgYnRuLWJsb2NrJyBvbkNsaWNrPXt0aGlzLmhhbmRsZVJlbG9hZH0+XHJcbiAgICAgICAgICAgICAgICBDaGFyZ2VyIHVuZSBub3V2ZWxsZSBmaWNoZVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcclxuICovXHJcbmV4cG9ydCBuYW1lc3BhY2UgSW52ZXN0aWdhdG9yUGFnZSB7XHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgZXhwb3J0IHR5cGUgQXBwbGljYXRpb25DYWxsYmFjayA9IChldmVudDogQXBwbGljYXRpb25FdmVudCkgPT4gdm9pZFxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIGV4cG9ydCB0eXBlIFByb3BlcnRpZXMgPSB7XHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmcgfCB1bmRlZmluZWQsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgb25DaGFuZ2U/OiBBcHBsaWNhdGlvbkNhbGxiYWNrLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIGludmVzdGlnYXRvcjogSW52ZXN0aWdhdG9yXHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==
webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Application.tsx":
/*!************************************!*\
  !*** ./components/Application.tsx ***!
  \************************************/
/*! exports provided: Application */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Application", function() { return Application; });
/* harmony import */ var D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _typescript_application_ApplicationAction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../typescript/application/ApplicationAction */ "./typescript/application/ApplicationAction.ts");
/* harmony import */ var _typescript_Investigator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../typescript/Investigator */ "./typescript/Investigator.ts");
/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Slider */ "./components/Slider.tsx");







var _jsxFileName = "D:\\development\\rpg\\shubgath\\components\\Application.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





/**
 * 
 */

var Application = /*#__PURE__*/function (_React$Component) {
  Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Application, _React$Component);

  var _super = _createSuper(Application);

  /**
   * 
   */
  function Application(properties) {
    var _this;

    Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Application);

    _this = _super.call(this, properties);
    _this.handleChange = _this.handleChange.bind(Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.state = {
      investigator: _typescript_Investigator__WEBPACK_IMPORTED_MODULE_9__["Investigator"].empty()
    };
    return _this;
  }
  /**
   * 
   */


  Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Application, [{
    key: "handleChange",
    value: function handleChange(event) {
      switch (event.type) {
        case _typescript_application_ApplicationAction__WEBPACK_IMPORTED_MODULE_8__["ApplicationAction"].USE:
          this.setState({
            investigator: event.payload
          });
          return;

        case _typescript_application_ApplicationAction__WEBPACK_IMPORTED_MODULE_8__["ApplicationAction"].SHOW_INVESTIGATOR_PAGE:
          this.props.router.replace('/investigator');
          return;

        case _typescript_application_ApplicationAction__WEBPACK_IMPORTED_MODULE_8__["ApplicationAction"].SHOW_LOADING_PAGE:
          this.props.router.replace('/');
          return;

        default:
          throw new Error('Unable to resolve application action "' + event.type + '" as no procedure was defined for that.');
      }
    }
    /**
     * @see React.Component.Render
     */

  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "application",
        id: "application",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 7
        }
      }, __jsx(_Slider__WEBPACK_IMPORTED_MODULE_10__["Slider"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 9
        }
      }, __jsx(this.props.Component, Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        onChange: this.handleChange,
        investigator: this.state.investigator
      }, this.props.pageProps, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }
      }))));
    }
  }]);

  return Application;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);
/**
 * 
 */

(function (_Application) {})(Application || (Application = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBsaWNhdGlvbi50c3giXSwibmFtZXMiOlsiQXBwbGljYXRpb24iLCJwcm9wZXJ0aWVzIiwiaGFuZGxlQ2hhbmdlIiwiYmluZCIsInN0YXRlIiwiaW52ZXN0aWdhdG9yIiwiSW52ZXN0aWdhdG9yIiwiZW1wdHkiLCJldmVudCIsInR5cGUiLCJBcHBsaWNhdGlvbkFjdGlvbiIsIlVTRSIsInNldFN0YXRlIiwicGF5bG9hZCIsIlNIT1dfSU5WRVNUSUdBVE9SX1BBR0UiLCJwcm9wcyIsInJvdXRlciIsInJlcGxhY2UiLCJTSE9XX0xPQURJTkdfUEFHRSIsIkVycm9yIiwicGFnZVByb3BzIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFJQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUEsV0FBYjtBQUFBOztBQUFBOztBQUNFO0FBQ0Y7QUFDQTtBQUNFLHVCQUFtQkMsVUFBbkIsRUFBdUQ7QUFBQTs7QUFBQTs7QUFDckQsOEJBQU1BLFVBQU47QUFFQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLGdKQUFwQjtBQUVBLFVBQUtDLEtBQUwsR0FBYTtBQUFFQyxrQkFBWSxFQUFFQyxxRUFBWSxDQUFDQyxLQUFiO0FBQWhCLEtBQWI7QUFMcUQ7QUFNdEQ7QUFFRDtBQUNGO0FBQ0E7OztBQWRBO0FBQUE7QUFBQSxpQ0FldUJDLEtBZnZCLEVBZXNEO0FBQ2xELGNBQVFBLEtBQUssQ0FBQ0MsSUFBZDtBQUNFLGFBQUtDLDJGQUFpQixDQUFDQyxHQUF2QjtBQUNFLGVBQUtDLFFBQUwsQ0FBYztBQUFFUCx3QkFBWSxFQUFFRyxLQUFLLENBQUNLO0FBQXRCLFdBQWQ7QUFDQTs7QUFDRixhQUFLSCwyRkFBaUIsQ0FBQ0ksc0JBQXZCO0FBQ0UsZUFBS0MsS0FBTCxDQUFXQyxNQUFYLENBQWtCQyxPQUFsQixDQUEwQixlQUExQjtBQUNBOztBQUNGLGFBQUtQLDJGQUFpQixDQUFDUSxpQkFBdkI7QUFDRSxlQUFLSCxLQUFMLENBQVdDLE1BQVgsQ0FBa0JDLE9BQWxCLENBQTBCLEdBQTFCO0FBQ0E7O0FBQ0Y7QUFDRSxnQkFBTSxJQUFJRSxLQUFKLENBQ0osMkNBQTJDWCxLQUFLLENBQUNDLElBQWpELEdBQ0EseUNBRkksQ0FBTjtBQVhKO0FBZ0JEO0FBRUQ7QUFDRjtBQUNBOztBQXBDQTtBQUFBO0FBQUEsNkJBcUN3QztBQUNwQyxhQUNFO0FBQUssaUJBQVMsRUFBQyxhQUFmO0FBQTZCLFVBQUUsRUFBQyxhQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsV0FBTSxLQUFOLENBQVksU0FBWjtBQUNFLGdCQUFRLEVBQUUsS0FBS1AsWUFEakI7QUFFRSxvQkFBWSxFQUFFLEtBQUtFLEtBQUwsQ0FBV0M7QUFGM0IsU0FHTyxLQUFLVSxLQUFMLENBQVdLLFNBSGxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERixDQURGLENBREY7QUFXRDtBQWpESDs7QUFBQTtBQUFBLEVBQWlDQyw0Q0FBSyxDQUFDQyxTQUF2QztBQW9EQTtBQUNBO0FBQ0E7OzZCQUNpQnRCLFcsS0FBQUEsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmVjOGY0ZDljYjMwNTE3MTUzYzM5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uRXZlbnQgfSBmcm9tICcuLi90eXBlc2NyaXB0L2FwcGxpY2F0aW9uL0FwcGxpY2F0aW9uRXZlbnQnXHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uQWN0aW9uIH0gZnJvbSAnLi4vdHlwZXNjcmlwdC9hcHBsaWNhdGlvbi9BcHBsaWNhdGlvbkFjdGlvbidcclxuXHJcbmltcG9ydCB7IEludmVzdGlnYXRvciB9IGZyb20gJy4uL3R5cGVzY3JpcHQvSW52ZXN0aWdhdG9yJ1xyXG5cclxuaW1wb3J0IHsgU2xpZGVyIH0gZnJvbSAnLi9TbGlkZXInXHJcbi8qKlxyXG4gKiBcclxuICovXHJcbmV4cG9ydCBjbGFzcyBBcHBsaWNhdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxBcHBsaWNhdGlvbi5Qcm9wZXJ0aWVzLCBBcHBsaWNhdGlvbi5TdGF0ZT4ge1xyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzOiBBcHBsaWNhdGlvbi5Qcm9wZXJ0aWVzKSB7XHJcbiAgICBzdXBlcihwcm9wZXJ0aWVzKVxyXG5cclxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKVxyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7IGludmVzdGlnYXRvcjogSW52ZXN0aWdhdG9yLmVtcHR5KCkgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBoYW5kbGVDaGFuZ2UoZXZlbnQ6IEFwcGxpY2F0aW9uRXZlbnQpOiB2b2lkIHtcclxuICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xyXG4gICAgICBjYXNlIEFwcGxpY2F0aW9uQWN0aW9uLlVTRTpcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaW52ZXN0aWdhdG9yOiBldmVudC5wYXlsb2FkIH0pXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIGNhc2UgQXBwbGljYXRpb25BY3Rpb24uU0hPV19JTlZFU1RJR0FUT1JfUEFHRTpcclxuICAgICAgICB0aGlzLnByb3BzLnJvdXRlci5yZXBsYWNlKCcvaW52ZXN0aWdhdG9yJylcclxuICAgICAgICByZXR1cm5cclxuICAgICAgY2FzZSBBcHBsaWNhdGlvbkFjdGlvbi5TSE9XX0xPQURJTkdfUEFHRTpcclxuICAgICAgICB0aGlzLnByb3BzLnJvdXRlci5yZXBsYWNlKCcvJylcclxuICAgICAgICByZXR1cm5cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgICAnVW5hYmxlIHRvIHJlc29sdmUgYXBwbGljYXRpb24gYWN0aW9uIFwiJyArIGV2ZW50LnR5cGUgKyBcclxuICAgICAgICAgICdcIiBhcyBubyBwcm9jZWR1cmUgd2FzIGRlZmluZWQgZm9yIHRoYXQuJ1xyXG4gICAgICAgIClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBzZWUgUmVhY3QuQ29tcG9uZW50LlJlbmRlclxyXG4gICAqL1xyXG4gIHB1YmxpYyByZW5kZXIgKCkgOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2FwcGxpY2F0aW9uJyBpZD0nYXBwbGljYXRpb24nPlxyXG4gICAgICAgIDxTbGlkZXI+XHJcbiAgICAgICAgICA8dGhpcy5wcm9wcy5Db21wb25lbnQgXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gXHJcbiAgICAgICAgICAgIGludmVzdGlnYXRvcj17dGhpcy5zdGF0ZS5pbnZlc3RpZ2F0b3J9XHJcbiAgICAgICAgICAgIHsgLi4udGhpcy5wcm9wcy5wYWdlUHJvcHMgfSBcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9TbGlkZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFxyXG4gKi9cclxuZXhwb3J0IG5hbWVzcGFjZSBBcHBsaWNhdGlvbiB7XHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgZXhwb3J0IHR5cGUgU3RhdGUgPSB7XHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBpbnZlc3RpZ2F0b3I6IEludmVzdGlnYXRvclxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgZXhwb3J0IHR5cGUgUHJvcGVydGllcyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIHJvdXRlcjogTmV4dFJvdXRlcixcclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBwYWdlUHJvcHM6IGFueSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBDb21wb25lbnQ6IFJlYWN0LkpTWEVsZW1lbnRDb25zdHJ1Y3Rvcjxhbnk+XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
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
/* harmony import */ var D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _typescript_application_ApplicationAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../typescript/application/ApplicationAction */ "./typescript/application/ApplicationAction.ts");
/* harmony import */ var _RouterSlider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./RouterSlider */ "./components/RouterSlider.tsx");






var _jsxFileName = "D:\\development\\rpg\\shubgath\\components\\Application.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




/**
 * 
 */

var Application = /*#__PURE__*/function (_React$Component) {
  Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Application, _React$Component);

  var _super = _createSuper(Application);

  /**
   * 
   */
  function Application(properties) {
    var _this;

    Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Application);

    _this = _super.call(this, properties);
    _this.handleChange = _this.handleChange.bind(Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.state = {
      investigator: undefined
    };
    return _this;
  }
  /**
   * 
   */


  Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Application, [{
    key: "handleChange",
    value: function handleChange(event) {
      switch (event.type) {
        case _typescript_application_ApplicationAction__WEBPACK_IMPORTED_MODULE_7__["ApplicationAction"].USE:
          this.setState({
            investigator: event.payload
          });
          return;

        case _typescript_application_ApplicationAction__WEBPACK_IMPORTED_MODULE_7__["ApplicationAction"].SHOW_INVESTIGATOR_PAGE:
          this.props.router.replace('/investigator');
          return;

        case _typescript_application_ApplicationAction__WEBPACK_IMPORTED_MODULE_7__["ApplicationAction"].SHOW_LOADING_PAGE:
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
      var connectedChildren = undefined;

      if (this.props.children) {
        connectedChildren = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.cloneElement(this.props.children, {
          onChange: this.handleChange,
          investigator: this.state.investigator
        });
      }

      return __jsx("div", {
        className: "application",
        id: "application",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 7
        }
      }, __jsx(_RouterSlider__WEBPACK_IMPORTED_MODULE_8__["RouterSlider"], {
        router: this.props.router,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 9
        }
      }, connectedChildren));
    }
  }]);

  return Application;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBsaWNhdGlvbi50c3giXSwibmFtZXMiOlsiQXBwbGljYXRpb24iLCJwcm9wZXJ0aWVzIiwiaGFuZGxlQ2hhbmdlIiwiYmluZCIsInN0YXRlIiwiaW52ZXN0aWdhdG9yIiwidW5kZWZpbmVkIiwiZXZlbnQiLCJ0eXBlIiwiQXBwbGljYXRpb25BY3Rpb24iLCJVU0UiLCJzZXRTdGF0ZSIsInBheWxvYWQiLCJTSE9XX0lOVkVTVElHQVRPUl9QQUdFIiwicHJvcHMiLCJyb3V0ZXIiLCJyZXBsYWNlIiwiU0hPV19MT0FESU5HX1BBR0UiLCJFcnJvciIsImNvbm5lY3RlZENoaWxkcmVuIiwiY2hpbGRyZW4iLCJSZWFjdCIsImNsb25lRWxlbWVudCIsIm9uQ2hhbmdlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBSUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxJQUFNQSxXQUFiO0FBQUE7O0FBQUE7O0FBQ0U7QUFDRjtBQUNBO0FBQ0UsdUJBQW1CQyxVQUFuQixFQUF1RDtBQUFBOztBQUFBOztBQUNyRCw4QkFBTUEsVUFBTjtBQUVBLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkMsSUFBbEIsZ0pBQXBCO0FBRUEsVUFBS0MsS0FBTCxHQUFhO0FBQUVDLGtCQUFZLEVBQUVDO0FBQWhCLEtBQWI7QUFMcUQ7QUFNdEQ7QUFFRDtBQUNGO0FBQ0E7OztBQWRBO0FBQUE7QUFBQSxpQ0FldUJDLEtBZnZCLEVBZXNEO0FBQ2xELGNBQVFBLEtBQUssQ0FBQ0MsSUFBZDtBQUNFLGFBQUtDLDJGQUFpQixDQUFDQyxHQUF2QjtBQUNFLGVBQUtDLFFBQUwsQ0FBYztBQUFFTix3QkFBWSxFQUFFRSxLQUFLLENBQUNLO0FBQXRCLFdBQWQ7QUFDQTs7QUFDRixhQUFLSCwyRkFBaUIsQ0FBQ0ksc0JBQXZCO0FBQ0UsZUFBS0MsS0FBTCxDQUFXQyxNQUFYLENBQWtCQyxPQUFsQixDQUEwQixlQUExQjtBQUNBOztBQUNGLGFBQUtQLDJGQUFpQixDQUFDUSxpQkFBdkI7QUFDRSxlQUFLSCxLQUFMLENBQVdDLE1BQVgsQ0FBa0JDLE9BQWxCLENBQTBCLEdBQTFCO0FBQ0E7O0FBQ0Y7QUFDRSxnQkFBTSxJQUFJRSxLQUFKLENBQ0osMkNBQTJDWCxLQUFLLENBQUNDLElBQWpELEdBQ0EseUNBRkksQ0FBTjtBQVhKO0FBZ0JEO0FBRUQ7QUFDRjtBQUNBOztBQXBDQTtBQUFBO0FBQUEsNkJBcUN3QztBQUNwQyxVQUFJVyxpQkFBaUQsR0FBR2IsU0FBeEQ7O0FBRUEsVUFBSSxLQUFLUSxLQUFMLENBQVdNLFFBQWYsRUFBeUI7QUFDdkJELHlCQUFpQixnQkFBR0UsNENBQUssQ0FBQ0MsWUFBTixDQUFtQixLQUFLUixLQUFMLENBQVdNLFFBQTlCLEVBQXdDO0FBQzFERyxrQkFBUSxFQUFFLEtBQUtyQixZQUQyQztBQUUxREcsc0JBQVksRUFBRSxLQUFLRCxLQUFMLENBQVdDO0FBRmlDLFNBQXhDLENBQXBCO0FBSUQ7O0FBRUQsYUFDRTtBQUFLLGlCQUFTLEVBQUMsYUFBZjtBQUE2QixVQUFFLEVBQUMsYUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsMERBQUQ7QUFBYyxjQUFNLEVBQUUsS0FBS1MsS0FBTCxDQUFXQyxNQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0lJLGlCQURKLENBREYsQ0FERjtBQU9EO0FBdERIOztBQUFBO0FBQUEsRUFBaUNFLDRDQUFLLENBQUNHLFNBQXZDO0FBeURBO0FBQ0E7QUFDQTs7NkJBQ2lCeEIsVyxLQUFBQSxXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZmZhYjM2NmUzY2FjMGI2MWVlMzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuaW1wb3J0IHsgQXBwbGljYXRpb25FdmVudCB9IGZyb20gJy4uL3R5cGVzY3JpcHQvYXBwbGljYXRpb24vQXBwbGljYXRpb25FdmVudCdcclxuaW1wb3J0IHsgQXBwbGljYXRpb25BY3Rpb24gfSBmcm9tICcuLi90eXBlc2NyaXB0L2FwcGxpY2F0aW9uL0FwcGxpY2F0aW9uQWN0aW9uJ1xyXG5cclxuaW1wb3J0IHsgSW52ZXN0aWdhdG9yIH0gZnJvbSAnLi4vdHlwZXNjcmlwdC9JbnZlc3RpZ2F0b3InXHJcblxyXG5pbXBvcnQgeyBSb3V0ZXJTbGlkZXIgfSBmcm9tICcuL1JvdXRlclNsaWRlcidcclxuLyoqXHJcbiAqIFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEFwcGxpY2F0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PEFwcGxpY2F0aW9uLlByb3BlcnRpZXMsIEFwcGxpY2F0aW9uLlN0YXRlPiB7XHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByb3BlcnRpZXM6IEFwcGxpY2F0aW9uLlByb3BlcnRpZXMpIHtcclxuICAgIHN1cGVyKHByb3BlcnRpZXMpXHJcblxyXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpXHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHsgaW52ZXN0aWdhdG9yOiB1bmRlZmluZWQgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBoYW5kbGVDaGFuZ2UoZXZlbnQ6IEFwcGxpY2F0aW9uRXZlbnQpOiB2b2lkIHtcclxuICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xyXG4gICAgICBjYXNlIEFwcGxpY2F0aW9uQWN0aW9uLlVTRTpcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaW52ZXN0aWdhdG9yOiBldmVudC5wYXlsb2FkIH0pXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIGNhc2UgQXBwbGljYXRpb25BY3Rpb24uU0hPV19JTlZFU1RJR0FUT1JfUEFHRTpcclxuICAgICAgICB0aGlzLnByb3BzLnJvdXRlci5yZXBsYWNlKCcvaW52ZXN0aWdhdG9yJylcclxuICAgICAgICByZXR1cm5cclxuICAgICAgY2FzZSBBcHBsaWNhdGlvbkFjdGlvbi5TSE9XX0xPQURJTkdfUEFHRTpcclxuICAgICAgICB0aGlzLnByb3BzLnJvdXRlci5yZXBsYWNlKCcvJylcclxuICAgICAgICByZXR1cm5cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgICAnVW5hYmxlIHRvIHJlc29sdmUgYXBwbGljYXRpb24gYWN0aW9uIFwiJyArIGV2ZW50LnR5cGUgKyBcclxuICAgICAgICAgICdcIiBhcyBubyBwcm9jZWR1cmUgd2FzIGRlZmluZWQgZm9yIHRoYXQuJ1xyXG4gICAgICAgIClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBzZWUgUmVhY3QuQ29tcG9uZW50LlJlbmRlclxyXG4gICAqL1xyXG4gIHB1YmxpYyByZW5kZXIgKCkgOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xyXG4gICAgbGV0IGNvbm5lY3RlZENoaWxkcmVuOiBSZWFjdC5SZWFjdEVsZW1lbnQgfCB1bmRlZmluZWQgPSB1bmRlZmluZWRcclxuICAgIFxyXG4gICAgaWYgKHRoaXMucHJvcHMuY2hpbGRyZW4pIHtcclxuICAgICAgY29ubmVjdGVkQ2hpbGRyZW4gPSBSZWFjdC5jbG9uZUVsZW1lbnQodGhpcy5wcm9wcy5jaGlsZHJlbiwge1xyXG4gICAgICAgIG9uQ2hhbmdlOiB0aGlzLmhhbmRsZUNoYW5nZSxcclxuICAgICAgICBpbnZlc3RpZ2F0b3I6IHRoaXMuc3RhdGUuaW52ZXN0aWdhdG9yXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2FwcGxpY2F0aW9uJyBpZD0nYXBwbGljYXRpb24nPlxyXG4gICAgICAgIDxSb3V0ZXJTbGlkZXIgcm91dGVyPXt0aGlzLnByb3BzLnJvdXRlcn0+XHJcbiAgICAgICAgICB7IGNvbm5lY3RlZENoaWxkcmVuIH1cclxuICAgICAgICA8L1JvdXRlclNsaWRlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogXHJcbiAqL1xyXG5leHBvcnQgbmFtZXNwYWNlIEFwcGxpY2F0aW9uIHtcclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBleHBvcnQgdHlwZSBTdGF0ZSA9IHtcclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIGludmVzdGlnYXRvcjogSW52ZXN0aWdhdG9yIHwgdW5kZWZpbmVkXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBleHBvcnQgdHlwZSBQcm9wZXJ0aWVzID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nIHwgdW5kZWZpbmVkLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIHJvdXRlcjogTmV4dFJvdXRlcixcclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0RWxlbWVudCB8IHVuZGVmaW5lZFxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9
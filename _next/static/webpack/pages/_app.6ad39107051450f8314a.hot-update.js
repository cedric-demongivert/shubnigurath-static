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
      var connectedChildren = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.cloneElement(this.props.children, {
        onChange: this.handleChange,
        investigator: this.state.investigator
      });
      return __jsx("div", {
        className: "application",
        id: "application",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 7
        }
      }, __jsx(_RouterSlider__WEBPACK_IMPORTED_MODULE_8__["RouterSlider"], {
        router: this.props.router,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBsaWNhdGlvbi50c3giXSwibmFtZXMiOlsiQXBwbGljYXRpb24iLCJwcm9wZXJ0aWVzIiwiaGFuZGxlQ2hhbmdlIiwiYmluZCIsInN0YXRlIiwiaW52ZXN0aWdhdG9yIiwidW5kZWZpbmVkIiwiZXZlbnQiLCJ0eXBlIiwiQXBwbGljYXRpb25BY3Rpb24iLCJVU0UiLCJzZXRTdGF0ZSIsInBheWxvYWQiLCJTSE9XX0lOVkVTVElHQVRPUl9QQUdFIiwicHJvcHMiLCJyb3V0ZXIiLCJyZXBsYWNlIiwiU0hPV19MT0FESU5HX1BBR0UiLCJFcnJvciIsImNvbm5lY3RlZENoaWxkcmVuIiwiUmVhY3QiLCJjbG9uZUVsZW1lbnQiLCJjaGlsZHJlbiIsIm9uQ2hhbmdlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBSUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxJQUFNQSxXQUFiO0FBQUE7O0FBQUE7O0FBQ0U7QUFDRjtBQUNBO0FBQ0UsdUJBQW1CQyxVQUFuQixFQUF1RDtBQUFBOztBQUFBOztBQUNyRCw4QkFBTUEsVUFBTjtBQUVBLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkMsSUFBbEIsZ0pBQXBCO0FBRUEsVUFBS0MsS0FBTCxHQUFhO0FBQUVDLGtCQUFZLEVBQUVDO0FBQWhCLEtBQWI7QUFMcUQ7QUFNdEQ7QUFFRDtBQUNGO0FBQ0E7OztBQWRBO0FBQUE7QUFBQSxpQ0FldUJDLEtBZnZCLEVBZXNEO0FBQ2xELGNBQVFBLEtBQUssQ0FBQ0MsSUFBZDtBQUNFLGFBQUtDLDJGQUFpQixDQUFDQyxHQUF2QjtBQUNFLGVBQUtDLFFBQUwsQ0FBYztBQUFFTix3QkFBWSxFQUFFRSxLQUFLLENBQUNLO0FBQXRCLFdBQWQ7QUFDQTs7QUFDRixhQUFLSCwyRkFBaUIsQ0FBQ0ksc0JBQXZCO0FBQ0UsZUFBS0MsS0FBTCxDQUFXQyxNQUFYLENBQWtCQyxPQUFsQixDQUEwQixlQUExQjtBQUNBOztBQUNGLGFBQUtQLDJGQUFpQixDQUFDUSxpQkFBdkI7QUFDRSxlQUFLSCxLQUFMLENBQVdDLE1BQVgsQ0FBa0JDLE9BQWxCLENBQTBCLEdBQTFCO0FBQ0E7O0FBQ0Y7QUFDRSxnQkFBTSxJQUFJRSxLQUFKLENBQ0osMkNBQTJDWCxLQUFLLENBQUNDLElBQWpELEdBQ0EseUNBRkksQ0FBTjtBQVhKO0FBZ0JEO0FBRUQ7QUFDRjtBQUNBOztBQXBDQTtBQUFBO0FBQUEsNkJBcUN3QztBQUNwQyxVQUFNVyxpQkFBcUMsZ0JBQUdDLDRDQUFLLENBQUNDLFlBQU4sQ0FDNUMsS0FBS1AsS0FBTCxDQUFXUSxRQURpQyxFQUN2QjtBQUNuQkMsZ0JBQVEsRUFBRSxLQUFLckIsWUFESTtBQUVuQkcsb0JBQVksRUFBRSxLQUFLRCxLQUFMLENBQVdDO0FBRk4sT0FEdUIsQ0FBOUM7QUFPQSxhQUNFO0FBQUssaUJBQVMsRUFBQyxhQUFmO0FBQTZCLFVBQUUsRUFBQyxhQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQywwREFBRDtBQUFjLGNBQU0sRUFBRSxLQUFLUyxLQUFMLENBQVdDLE1BQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSUksaUJBREosQ0FERixDQURGO0FBT0Q7QUFwREg7O0FBQUE7QUFBQSxFQUFpQ0MsNENBQUssQ0FBQ0ksU0FBdkM7QUF1REE7QUFDQTtBQUNBOzs2QkFDaUJ4QixXLEtBQUFBLFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC42YWQzOTEwNzA1MTQ1MGY4MzE0YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5pbXBvcnQgeyBBcHBsaWNhdGlvbkV2ZW50IH0gZnJvbSAnLi4vdHlwZXNjcmlwdC9hcHBsaWNhdGlvbi9BcHBsaWNhdGlvbkV2ZW50J1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvbkFjdGlvbiB9IGZyb20gJy4uL3R5cGVzY3JpcHQvYXBwbGljYXRpb24vQXBwbGljYXRpb25BY3Rpb24nXHJcblxyXG5pbXBvcnQgeyBJbnZlc3RpZ2F0b3IgfSBmcm9tICcuLi90eXBlc2NyaXB0L0ludmVzdGlnYXRvcidcclxuXHJcbmltcG9ydCB7IFJvdXRlclNsaWRlciB9IGZyb20gJy4vUm91dGVyU2xpZGVyJ1xyXG4vKipcclxuICogXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQXBwbGljYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8QXBwbGljYXRpb24uUHJvcGVydGllcywgQXBwbGljYXRpb24uU3RhdGU+IHtcclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgY29uc3RydWN0b3IocHJvcGVydGllczogQXBwbGljYXRpb24uUHJvcGVydGllcykge1xyXG4gICAgc3VwZXIocHJvcGVydGllcylcclxuXHJcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcylcclxuXHJcbiAgICB0aGlzLnN0YXRlID0geyBpbnZlc3RpZ2F0b3I6IHVuZGVmaW5lZCB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwcml2YXRlIGhhbmRsZUNoYW5nZShldmVudDogQXBwbGljYXRpb25FdmVudCk6IHZvaWQge1xyXG4gICAgc3dpdGNoIChldmVudC50eXBlKSB7XHJcbiAgICAgIGNhc2UgQXBwbGljYXRpb25BY3Rpb24uVVNFOlxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpbnZlc3RpZ2F0b3I6IGV2ZW50LnBheWxvYWQgfSlcclxuICAgICAgICByZXR1cm5cclxuICAgICAgY2FzZSBBcHBsaWNhdGlvbkFjdGlvbi5TSE9XX0lOVkVTVElHQVRPUl9QQUdFOlxyXG4gICAgICAgIHRoaXMucHJvcHMucm91dGVyLnJlcGxhY2UoJy9pbnZlc3RpZ2F0b3InKVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICBjYXNlIEFwcGxpY2F0aW9uQWN0aW9uLlNIT1dfTE9BRElOR19QQUdFOlxyXG4gICAgICAgIHRoaXMucHJvcHMucm91dGVyLnJlcGxhY2UoJy8nKVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAgICdVbmFibGUgdG8gcmVzb2x2ZSBhcHBsaWNhdGlvbiBhY3Rpb24gXCInICsgZXZlbnQudHlwZSArIFxyXG4gICAgICAgICAgJ1wiIGFzIG5vIHByb2NlZHVyZSB3YXMgZGVmaW5lZCBmb3IgdGhhdC4nXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHNlZSBSZWFjdC5Db21wb25lbnQuUmVuZGVyXHJcbiAgICovXHJcbiAgcHVibGljIHJlbmRlciAoKSA6IFJlYWN0LlJlYWN0RWxlbWVudCB7XHJcbiAgICBjb25zdCBjb25uZWN0ZWRDaGlsZHJlbjogUmVhY3QuUmVhY3RFbGVtZW50ID0gUmVhY3QuY2xvbmVFbGVtZW50KFxyXG4gICAgICB0aGlzLnByb3BzLmNoaWxkcmVuLCB7XHJcbiAgICAgICAgb25DaGFuZ2U6IHRoaXMuaGFuZGxlQ2hhbmdlLFxyXG4gICAgICAgIGludmVzdGlnYXRvcjogdGhpcy5zdGF0ZS5pbnZlc3RpZ2F0b3JcclxuICAgICAgfVxyXG4gICAgKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcHBsaWNhdGlvbicgaWQ9J2FwcGxpY2F0aW9uJz5cclxuICAgICAgICA8Um91dGVyU2xpZGVyIHJvdXRlcj17dGhpcy5wcm9wcy5yb3V0ZXJ9PlxyXG4gICAgICAgICAgeyBjb25uZWN0ZWRDaGlsZHJlbiB9XHJcbiAgICAgICAgPC9Sb3V0ZXJTbGlkZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFxyXG4gKi9cclxuZXhwb3J0IG5hbWVzcGFjZSBBcHBsaWNhdGlvbiB7XHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgZXhwb3J0IHR5cGUgU3RhdGUgPSB7XHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBpbnZlc3RpZ2F0b3I6IEludmVzdGlnYXRvciB8IHVuZGVmaW5lZFxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgZXhwb3J0IHR5cGUgUHJvcGVydGllcyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIHJvdXRlcjogTmV4dFJvdXRlcixcclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBjaGlsZHJlbjogUmVhY3QuUmVhY3RFbGVtZW50XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
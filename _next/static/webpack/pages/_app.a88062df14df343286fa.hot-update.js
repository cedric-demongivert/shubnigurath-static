webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/RouterSlider.tsx":
/*!*************************************!*\
  !*** ./components/RouterSlider.tsx ***!
  \*************************************/
/*! exports provided: RouterSlider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterSlider", function() { return RouterSlider; });
/* harmony import */ var D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");







var _jsxFileName = "D:\\development\\rpg\\shubgath\\components\\RouterSlider.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



/**
 * 
 */

/**
 * 
 */
var RouterSlider = /*#__PURE__*/function (_React$Component) {
  Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RouterSlider, _React$Component);

  var _super = _createSuper(RouterSlider);

  /**
   * 
   */

  /**
   * 
   */
  function RouterSlider(properties) {
    var _this;

    Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RouterSlider);

    _this = _super.call(this, properties);
    _this._slides = void 0;
    _this._slides = [];
    _this.handleSlideRendering = _this.handleSlideRendering.bind(Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    return _this;
  }
  /**
   * 
   */


  Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(RouterSlider, [{
    key: "stackNextSlide",
    value: function stackNextSlide() {
      var path = this.props.router.pathname;
      var children = this.props.children;
      var slides = this._slides;
      console.log(path);

      if (slides.length < 1) {
        slides.push({
          path: path,
          children: children
        });
      } else {
        var lastIndex = slides.length - 1;
        var lastEntry = slides[lastIndex];

        if (lastEntry.path !== path) {
          slides.push({
            path: path,
            children: children
          });
        } else if (lastEntry.children !== children) {
          slides[lastIndex] = {
            path: path,
            children: children
          };
        }

        while (this._slides.length > 2) {
          this._slides.shift();
        }
      }
    }
    /**
     * @see React.Component.Render
     */

  }, {
    key: "render",
    value: function render() {
      this.stackNextSlide();
      return __jsx("div", {
        className: "slider slider-router",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 7
        }
      }, this._slides.map(this.handleSlideRendering));
    }
    /**
     * 
     */

  }, {
    key: "handleSlideRendering",
    value: function handleSlideRendering(entry, index) {
      var transitionProperties = {
        "in": index === this._slides.length - 1,
        unmountOnExit: true,
        classNames: 'is',
        timeout: 400,
        key: index
      };
      return __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_8__["CSSTransition"], Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, transitionProperties, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 7
        }
      }), __jsx("div", {
        className: "slider-slide",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 9
        }
      }, entry.children));
    }
  }]);

  return RouterSlider;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);
/**
 * 
 */

(function (_RouterSlider) {})(RouterSlider || (RouterSlider = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Sb3V0ZXJTbGlkZXIudHN4Il0sIm5hbWVzIjpbIlJvdXRlclNsaWRlciIsInByb3BlcnRpZXMiLCJfc2xpZGVzIiwiaGFuZGxlU2xpZGVSZW5kZXJpbmciLCJiaW5kIiwicGF0aCIsInByb3BzIiwicm91dGVyIiwicGF0aG5hbWUiLCJjaGlsZHJlbiIsInNsaWRlcyIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJwdXNoIiwibGFzdEluZGV4IiwibGFzdEVudHJ5Iiwic2hpZnQiLCJzdGFja05leHRTbGlkZSIsIm1hcCIsImVudHJ5IiwiaW5kZXgiLCJ0cmFuc2l0aW9uUHJvcGVydGllcyIsInVubW91bnRPbkV4aXQiLCJjbGFzc05hbWVzIiwidGltZW91dCIsImtleSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBO0FBRUE7QUFDQTtBQUNBOztBQWNBO0FBQ0E7QUFDQTtBQUNPLElBQU1BLFlBQWI7QUFBQTs7QUFBQTs7QUFDRTtBQUNGO0FBQ0E7O0FBR0U7QUFDRjtBQUNBO0FBQ0Usd0JBQW9CQyxVQUFwQixFQUF5RDtBQUFBOztBQUFBOztBQUN2RCw4QkFBTUEsVUFBTjtBQUR1RCxVQUx4Q0MsT0FLd0M7QUFHdkQsVUFBS0EsT0FBTCxHQUFlLEVBQWY7QUFFQSxVQUFLQyxvQkFBTCxHQUE0QixNQUFLQSxvQkFBTCxDQUEwQkMsSUFBMUIsZ0pBQTVCO0FBTHVEO0FBTXhEO0FBRUQ7QUFDRjtBQUNBOzs7QUFuQkE7QUFBQTtBQUFBLHFDQW9CaUM7QUFDN0IsVUFBTUMsSUFBWSxHQUFHLEtBQUtDLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQkMsUUFBdkM7QUFDQSxVQUFNQyxRQUFtQixHQUFHLEtBQUtILEtBQUwsQ0FBV0csUUFBdkM7QUFDQSxVQUFNQyxNQUF5QixHQUFHLEtBQUtSLE9BQXZDO0FBRUFTLGFBQU8sQ0FBQ0MsR0FBUixDQUFZUCxJQUFaOztBQUVBLFVBQUlLLE1BQU0sQ0FBQ0csTUFBUCxHQUFnQixDQUFwQixFQUF1QjtBQUNyQkgsY0FBTSxDQUFDSSxJQUFQLENBQVk7QUFBRVQsY0FBSSxFQUFKQSxJQUFGO0FBQVFJLGtCQUFRLEVBQVJBO0FBQVIsU0FBWjtBQUNELE9BRkQsTUFFTztBQUNMLFlBQU1NLFNBQWlCLEdBQUdMLE1BQU0sQ0FBQ0csTUFBUCxHQUFnQixDQUExQztBQUNBLFlBQU1HLFNBQTBCLEdBQUdOLE1BQU0sQ0FBQ0ssU0FBRCxDQUF6Qzs7QUFFQSxZQUFJQyxTQUFTLENBQUNYLElBQVYsS0FBbUJBLElBQXZCLEVBQTZCO0FBQzNCSyxnQkFBTSxDQUFDSSxJQUFQLENBQVk7QUFBRVQsZ0JBQUksRUFBSkEsSUFBRjtBQUFRSSxvQkFBUSxFQUFSQTtBQUFSLFdBQVo7QUFDRCxTQUZELE1BRU8sSUFBSU8sU0FBUyxDQUFDUCxRQUFWLEtBQXVCQSxRQUEzQixFQUFxQztBQUMxQ0MsZ0JBQU0sQ0FBQ0ssU0FBRCxDQUFOLEdBQW9CO0FBQUVWLGdCQUFJLEVBQUpBLElBQUY7QUFBUUksb0JBQVEsRUFBUkE7QUFBUixXQUFwQjtBQUNEOztBQUVELGVBQU8sS0FBS1AsT0FBTCxDQUFhVyxNQUFiLEdBQXNCLENBQTdCLEVBQWdDO0FBQzlCLGVBQUtYLE9BQUwsQ0FBYWUsS0FBYjtBQUNEO0FBQ0Y7QUFDRjtBQUdEO0FBQ0Y7QUFDQTs7QUFoREE7QUFBQTtBQUFBLDZCQWlEd0M7QUFDcEMsV0FBS0MsY0FBTDtBQUVBLGFBQ0U7QUFBSyxpQkFBUyxFQUFDLHNCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSSxLQUFLaEIsT0FBTCxDQUFhaUIsR0FBYixDQUFpQixLQUFLaEIsb0JBQXRCLENBREosQ0FERjtBQUtEO0FBRUQ7QUFDRjtBQUNBOztBQTdEQTtBQUFBO0FBQUEseUNBOERnQ2lCLEtBOURoQyxFQThEd0RDLEtBOUR4RCxFQThEMkY7QUFDdkYsVUFBTUMsb0JBQThDLEdBQUc7QUFDckQsY0FBSUQsS0FBSyxLQUFLLEtBQUtuQixPQUFMLENBQWFXLE1BQWIsR0FBc0IsQ0FEaUI7QUFFckRVLHFCQUFhLEVBQUUsSUFGc0M7QUFHckRDLGtCQUFVLEVBQUUsSUFIeUM7QUFJckRDLGVBQU8sRUFBRSxHQUo0QztBQUtyREMsV0FBRyxFQUFFTDtBQUxnRCxPQUF2RDtBQVFBLGFBQ0UsTUFBQyxvRUFBRCxnSUFBbUJDLG9CQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQ0U7QUFBSyxpQkFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJRixLQUFLLENBQUNYLFFBRFYsQ0FERixDQURGO0FBT0Q7QUE5RUg7O0FBQUE7QUFBQSxFQUFrQ2tCLDRDQUFLLENBQUNDLFNBQXhDO0FBaUZBO0FBQ0E7QUFDQTs7OEJBQ2lCNUIsWSxLQUFBQSxZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYTg4MDYyZGYxNGRmMzQzMjg2ZmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuaW1wb3J0IHsgQ1NTVHJhbnNpdGlvbiB9IGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAnXHJcblxyXG4vKipcclxuICogXHJcbiAqL1xyXG50eXBlIEVudHJ5ID0ge1xyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHBhdGg6IHN0cmluZyxcclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFJvdXRlclNsaWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxSb3V0ZXJTbGlkZXIuUHJvcGVydGllcz4ge1xyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgX3NsaWRlczogUmVhZG9ubHk8RW50cnk+W11cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yIChwcm9wZXJ0aWVzOiBSb3V0ZXJTbGlkZXIuUHJvcGVydGllcykge1xyXG4gICAgc3VwZXIocHJvcGVydGllcylcclxuXHJcbiAgICB0aGlzLl9zbGlkZXMgPSBbIF1cclxuXHJcbiAgICB0aGlzLmhhbmRsZVNsaWRlUmVuZGVyaW5nID0gdGhpcy5oYW5kbGVTbGlkZVJlbmRlcmluZy5iaW5kKHRoaXMpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwcml2YXRlIHN0YWNrTmV4dFNsaWRlKCk6IHZvaWQge1xyXG4gICAgY29uc3QgcGF0aDogc3RyaW5nID0gdGhpcy5wcm9wcy5yb3V0ZXIucGF0aG5hbWVcclxuICAgIGNvbnN0IGNoaWxkcmVuOiBSZWFjdE5vZGUgPSB0aGlzLnByb3BzLmNoaWxkcmVuXHJcbiAgICBjb25zdCBzbGlkZXM6IFJlYWRvbmx5PEVudHJ5PltdID0gdGhpcy5fc2xpZGVzXHJcblxyXG4gICAgY29uc29sZS5sb2cocGF0aClcclxuXHJcbiAgICBpZiAoc2xpZGVzLmxlbmd0aCA8IDEpIHtcclxuICAgICAgc2xpZGVzLnB1c2goeyBwYXRoLCBjaGlsZHJlbiB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgbGFzdEluZGV4OiBudW1iZXIgPSBzbGlkZXMubGVuZ3RoIC0gMVxyXG4gICAgICBjb25zdCBsYXN0RW50cnk6IFJlYWRvbmx5PEVudHJ5PiA9IHNsaWRlc1tsYXN0SW5kZXhdXHJcblxyXG4gICAgICBpZiAobGFzdEVudHJ5LnBhdGggIT09IHBhdGgpIHtcclxuICAgICAgICBzbGlkZXMucHVzaCh7IHBhdGgsIGNoaWxkcmVuIH0pXHJcbiAgICAgIH0gZWxzZSBpZiAobGFzdEVudHJ5LmNoaWxkcmVuICE9PSBjaGlsZHJlbikge1xyXG4gICAgICAgIHNsaWRlc1tsYXN0SW5kZXhdID0geyBwYXRoLCBjaGlsZHJlbiB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHdoaWxlICh0aGlzLl9zbGlkZXMubGVuZ3RoID4gMikge1xyXG4gICAgICAgIHRoaXMuX3NsaWRlcy5zaGlmdCgpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICAgKiBAc2VlIFJlYWN0LkNvbXBvbmVudC5SZW5kZXJcclxuICAgKi9cclxuICBwdWJsaWMgcmVuZGVyICgpIDogUmVhY3QuUmVhY3RFbGVtZW50IHtcclxuICAgIHRoaXMuc3RhY2tOZXh0U2xpZGUoKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGlkZXIgc2xpZGVyLXJvdXRlcic+XHJcbiAgICAgICAgeyB0aGlzLl9zbGlkZXMubWFwKHRoaXMuaGFuZGxlU2xpZGVSZW5kZXJpbmcpIH1cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwcml2YXRlIGhhbmRsZVNsaWRlUmVuZGVyaW5nIChlbnRyeTogUmVhZG9ubHk8RW50cnk+LCBpbmRleDogbnVtYmVyKTogUmVhY3QuUmVhY3RFbGVtZW50IHtcclxuICAgIGNvbnN0IHRyYW5zaXRpb25Qcm9wZXJ0aWVzOiBDU1NUcmFuc2l0aW9uLlByb3BlcnRpZXMgPSB7XHJcbiAgICAgIGluOiBpbmRleCA9PT0gdGhpcy5fc2xpZGVzLmxlbmd0aCAtIDEsXHJcbiAgICAgIHVubW91bnRPbkV4aXQ6IHRydWUsXHJcbiAgICAgIGNsYXNzTmFtZXM6ICdpcycsXHJcbiAgICAgIHRpbWVvdXQ6IDQwMCxcclxuICAgICAga2V5OiBpbmRleFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxDU1NUcmFuc2l0aW9uIHsuLi50cmFuc2l0aW9uUHJvcGVydGllc30+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsaWRlci1zbGlkZSc+XHJcbiAgICAgICAgICB7IGVudHJ5LmNoaWxkcmVuIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9DU1NUcmFuc2l0aW9uPlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFxyXG4gKi9cclxuZXhwb3J0IG5hbWVzcGFjZSBSb3V0ZXJTbGlkZXIge1xyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIGV4cG9ydCB0eXBlIFByb3BlcnRpZXMgPSB7XHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmcgfCB1bmRlZmluZWQsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgcm91dGVyOiBOZXh0Um91dGVyLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
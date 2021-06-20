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

        while (slides.length > 2) {
          slides.shift();
        }
      }

      console.log(slides);
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
          lineNumber: 80,
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
          lineNumber: 99,
          columnNumber: 7
        }
      }), __jsx("div", {
        className: "slider-slide",
        key: entry.path,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Sb3V0ZXJTbGlkZXIudHN4Il0sIm5hbWVzIjpbIlJvdXRlclNsaWRlciIsInByb3BlcnRpZXMiLCJfc2xpZGVzIiwiaGFuZGxlU2xpZGVSZW5kZXJpbmciLCJiaW5kIiwicGF0aCIsInByb3BzIiwicm91dGVyIiwicGF0aG5hbWUiLCJjaGlsZHJlbiIsInNsaWRlcyIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJwdXNoIiwibGFzdEluZGV4IiwibGFzdEVudHJ5Iiwic2hpZnQiLCJzdGFja05leHRTbGlkZSIsIm1hcCIsImVudHJ5IiwiaW5kZXgiLCJ0cmFuc2l0aW9uUHJvcGVydGllcyIsInVubW91bnRPbkV4aXQiLCJjbGFzc05hbWVzIiwidGltZW91dCIsImtleSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBO0FBRUE7QUFDQTtBQUNBOztBQWNBO0FBQ0E7QUFDQTtBQUNPLElBQU1BLFlBQWI7QUFBQTs7QUFBQTs7QUFDRTtBQUNGO0FBQ0E7O0FBR0U7QUFDRjtBQUNBO0FBQ0Usd0JBQW9CQyxVQUFwQixFQUF5RDtBQUFBOztBQUFBOztBQUN2RCw4QkFBTUEsVUFBTjtBQUR1RCxVQUx4Q0MsT0FLd0M7QUFHdkQsVUFBS0EsT0FBTCxHQUFlLEVBQWY7QUFFQSxVQUFLQyxvQkFBTCxHQUE0QixNQUFLQSxvQkFBTCxDQUEwQkMsSUFBMUIsZ0pBQTVCO0FBTHVEO0FBTXhEO0FBRUQ7QUFDRjtBQUNBOzs7QUFuQkE7QUFBQTtBQUFBLHFDQW9CaUM7QUFDN0IsVUFBTUMsSUFBWSxHQUFHLEtBQUtDLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQkMsUUFBdkM7QUFDQSxVQUFNQyxRQUFtQixHQUFHLEtBQUtILEtBQUwsQ0FBV0csUUFBdkM7QUFDQSxVQUFNQyxNQUF5QixHQUFHLEtBQUtSLE9BQXZDO0FBRUFTLGFBQU8sQ0FBQ0MsR0FBUixDQUFZUCxJQUFaOztBQUVBLFVBQUlLLE1BQU0sQ0FBQ0csTUFBUCxHQUFnQixDQUFwQixFQUF1QjtBQUNyQkgsY0FBTSxDQUFDSSxJQUFQLENBQVk7QUFBRVQsY0FBSSxFQUFKQSxJQUFGO0FBQVFJLGtCQUFRLEVBQVJBO0FBQVIsU0FBWjtBQUNELE9BRkQsTUFFTztBQUNMLFlBQU1NLFNBQWlCLEdBQUdMLE1BQU0sQ0FBQ0csTUFBUCxHQUFnQixDQUExQztBQUNBLFlBQU1HLFNBQTBCLEdBQUdOLE1BQU0sQ0FBQ0ssU0FBRCxDQUF6Qzs7QUFFQSxZQUFJQyxTQUFTLENBQUNYLElBQVYsS0FBbUJBLElBQXZCLEVBQTZCO0FBQzNCSyxnQkFBTSxDQUFDSSxJQUFQLENBQVk7QUFBRVQsZ0JBQUksRUFBSkEsSUFBRjtBQUFRSSxvQkFBUSxFQUFSQTtBQUFSLFdBQVo7QUFDRCxTQUZELE1BRU8sSUFBSU8sU0FBUyxDQUFDUCxRQUFWLEtBQXVCQSxRQUEzQixFQUFxQztBQUMxQ0MsZ0JBQU0sQ0FBQ0ssU0FBRCxDQUFOLEdBQW9CO0FBQUVWLGdCQUFJLEVBQUpBLElBQUY7QUFBUUksb0JBQVEsRUFBUkE7QUFBUixXQUFwQjtBQUNEOztBQUVELGVBQU9DLE1BQU0sQ0FBQ0csTUFBUCxHQUFnQixDQUF2QixFQUEwQjtBQUN4QkgsZ0JBQU0sQ0FBQ08sS0FBUDtBQUNEO0FBQ0Y7O0FBRUROLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFaO0FBQ0Q7QUFHRDtBQUNGO0FBQ0E7O0FBbERBO0FBQUE7QUFBQSw2QkFtRHdDO0FBQ3BDLFdBQUtRLGNBQUw7QUFFQSxhQUNFO0FBQUssaUJBQVMsRUFBQyxzQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0ksS0FBS2hCLE9BQUwsQ0FBYWlCLEdBQWIsQ0FBaUIsS0FBS2hCLG9CQUF0QixDQURKLENBREY7QUFLRDtBQUVEO0FBQ0Y7QUFDQTs7QUEvREE7QUFBQTtBQUFBLHlDQWdFZ0NpQixLQWhFaEMsRUFnRXdEQyxLQWhFeEQsRUFnRTJGO0FBQ3ZGLFVBQU1DLG9CQUE4QyxHQUFHO0FBQ3JELGNBQUlELEtBQUssS0FBSyxLQUFLbkIsT0FBTCxDQUFhVyxNQUFiLEdBQXNCLENBRGlCO0FBRXJEVSxxQkFBYSxFQUFFLElBRnNDO0FBR3JEQyxrQkFBVSxFQUFFLElBSHlDO0FBSXJEQyxlQUFPLEVBQUUsR0FKNEM7QUFLckRDLFdBQUcsRUFBRUw7QUFMZ0QsT0FBdkQ7QUFRQSxhQUNFLE1BQUMsb0VBQUQsZ0lBQW1CQyxvQkFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUNFO0FBQUssaUJBQVMsRUFBQyxjQUFmO0FBQThCLFdBQUcsRUFBRUYsS0FBSyxDQUFDZixJQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0llLEtBQUssQ0FBQ1gsUUFEVixDQURGLENBREY7QUFPRDtBQWhGSDs7QUFBQTtBQUFBLEVBQWtDa0IsNENBQUssQ0FBQ0MsU0FBeEM7QUFtRkE7QUFDQTtBQUNBOzs4QkFDaUI1QixZLEtBQUFBLFkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC45YzNmMzdhMTI1OTFiMmJiYzFlOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5pbXBvcnQgeyBDU1NUcmFuc2l0aW9uIH0gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cCdcclxuXHJcbi8qKlxyXG4gKiBcclxuICovXHJcbnR5cGUgRW50cnkgPSB7XHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcGF0aDogc3RyaW5nLFxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXHJcbn1cclxuXHJcblxyXG4vKipcclxuICogXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUm91dGVyU2xpZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFJvdXRlclNsaWRlci5Qcm9wZXJ0aWVzPiB7XHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHJpdmF0ZSByZWFkb25seSBfc2xpZGVzOiBSZWFkb25seTxFbnRyeT5bXVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgY29uc3RydWN0b3IgKHByb3BlcnRpZXM6IFJvdXRlclNsaWRlci5Qcm9wZXJ0aWVzKSB7XHJcbiAgICBzdXBlcihwcm9wZXJ0aWVzKVxyXG5cclxuICAgIHRoaXMuX3NsaWRlcyA9IFsgXVxyXG5cclxuICAgIHRoaXMuaGFuZGxlU2xpZGVSZW5kZXJpbmcgPSB0aGlzLmhhbmRsZVNsaWRlUmVuZGVyaW5nLmJpbmQodGhpcylcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHByaXZhdGUgc3RhY2tOZXh0U2xpZGUoKTogdm9pZCB7XHJcbiAgICBjb25zdCBwYXRoOiBzdHJpbmcgPSB0aGlzLnByb3BzLnJvdXRlci5wYXRobmFtZVxyXG4gICAgY29uc3QgY2hpbGRyZW46IFJlYWN0Tm9kZSA9IHRoaXMucHJvcHMuY2hpbGRyZW5cclxuICAgIGNvbnN0IHNsaWRlczogUmVhZG9ubHk8RW50cnk+W10gPSB0aGlzLl9zbGlkZXNcclxuXHJcbiAgICBjb25zb2xlLmxvZyhwYXRoKVxyXG5cclxuICAgIGlmIChzbGlkZXMubGVuZ3RoIDwgMSkge1xyXG4gICAgICBzbGlkZXMucHVzaCh7IHBhdGgsIGNoaWxkcmVuIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBsYXN0SW5kZXg6IG51bWJlciA9IHNsaWRlcy5sZW5ndGggLSAxXHJcbiAgICAgIGNvbnN0IGxhc3RFbnRyeTogUmVhZG9ubHk8RW50cnk+ID0gc2xpZGVzW2xhc3RJbmRleF1cclxuXHJcbiAgICAgIGlmIChsYXN0RW50cnkucGF0aCAhPT0gcGF0aCkge1xyXG4gICAgICAgIHNsaWRlcy5wdXNoKHsgcGF0aCwgY2hpbGRyZW4gfSlcclxuICAgICAgfSBlbHNlIGlmIChsYXN0RW50cnkuY2hpbGRyZW4gIT09IGNoaWxkcmVuKSB7XHJcbiAgICAgICAgc2xpZGVzW2xhc3RJbmRleF0gPSB7IHBhdGgsIGNoaWxkcmVuIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgd2hpbGUgKHNsaWRlcy5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgc2xpZGVzLnNoaWZ0KClcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKHNsaWRlcylcclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICAgKiBAc2VlIFJlYWN0LkNvbXBvbmVudC5SZW5kZXJcclxuICAgKi9cclxuICBwdWJsaWMgcmVuZGVyICgpIDogUmVhY3QuUmVhY3RFbGVtZW50IHtcclxuICAgIHRoaXMuc3RhY2tOZXh0U2xpZGUoKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGlkZXIgc2xpZGVyLXJvdXRlcic+XHJcbiAgICAgICAgeyB0aGlzLl9zbGlkZXMubWFwKHRoaXMuaGFuZGxlU2xpZGVSZW5kZXJpbmcpIH1cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwcml2YXRlIGhhbmRsZVNsaWRlUmVuZGVyaW5nIChlbnRyeTogUmVhZG9ubHk8RW50cnk+LCBpbmRleDogbnVtYmVyKTogUmVhY3QuUmVhY3RFbGVtZW50IHtcclxuICAgIGNvbnN0IHRyYW5zaXRpb25Qcm9wZXJ0aWVzOiBDU1NUcmFuc2l0aW9uLlByb3BlcnRpZXMgPSB7XHJcbiAgICAgIGluOiBpbmRleCA9PT0gdGhpcy5fc2xpZGVzLmxlbmd0aCAtIDEsXHJcbiAgICAgIHVubW91bnRPbkV4aXQ6IHRydWUsXHJcbiAgICAgIGNsYXNzTmFtZXM6ICdpcycsXHJcbiAgICAgIHRpbWVvdXQ6IDQwMCxcclxuICAgICAga2V5OiBpbmRleFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxDU1NUcmFuc2l0aW9uIHsuLi50cmFuc2l0aW9uUHJvcGVydGllc30+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsaWRlci1zbGlkZScga2V5PXtlbnRyeS5wYXRofT5cclxuICAgICAgICAgIHsgZW50cnkuY2hpbGRyZW4gfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NTU1RyYW5zaXRpb24+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogXHJcbiAqL1xyXG5leHBvcnQgbmFtZXNwYWNlIFJvdXRlclNsaWRlciB7XHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgZXhwb3J0IHR5cGUgUHJvcGVydGllcyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIGNsYXNzTmFtZT86IHN0cmluZyB8IHVuZGVmaW5lZCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICByb3V0ZXI6IE5leHRSb3V0ZXIsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9
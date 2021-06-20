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
        timeout: 400
      };
      return __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_8__["CSSTransition"], Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        key: entry.path
      }, transitionProperties, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 7
        }
      }), __jsx("div", {
        className: "slider-slide",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Sb3V0ZXJTbGlkZXIudHN4Il0sIm5hbWVzIjpbIlJvdXRlclNsaWRlciIsInByb3BlcnRpZXMiLCJfc2xpZGVzIiwiaGFuZGxlU2xpZGVSZW5kZXJpbmciLCJiaW5kIiwicGF0aCIsInByb3BzIiwicm91dGVyIiwicGF0aG5hbWUiLCJjaGlsZHJlbiIsInNsaWRlcyIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJwdXNoIiwibGFzdEluZGV4IiwibGFzdEVudHJ5Iiwic2hpZnQiLCJzdGFja05leHRTbGlkZSIsIm1hcCIsImVudHJ5IiwiaW5kZXgiLCJ0cmFuc2l0aW9uUHJvcGVydGllcyIsInVubW91bnRPbkV4aXQiLCJjbGFzc05hbWVzIiwidGltZW91dCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBO0FBRUE7QUFDQTtBQUNBOztBQWNBO0FBQ0E7QUFDQTtBQUNPLElBQU1BLFlBQWI7QUFBQTs7QUFBQTs7QUFDRTtBQUNGO0FBQ0E7O0FBR0U7QUFDRjtBQUNBO0FBQ0Usd0JBQW9CQyxVQUFwQixFQUF5RDtBQUFBOztBQUFBOztBQUN2RCw4QkFBTUEsVUFBTjtBQUR1RCxVQUx4Q0MsT0FLd0M7QUFHdkQsVUFBS0EsT0FBTCxHQUFlLEVBQWY7QUFFQSxVQUFLQyxvQkFBTCxHQUE0QixNQUFLQSxvQkFBTCxDQUEwQkMsSUFBMUIsZ0pBQTVCO0FBTHVEO0FBTXhEO0FBRUQ7QUFDRjtBQUNBOzs7QUFuQkE7QUFBQTtBQUFBLHFDQW9CaUM7QUFDN0IsVUFBTUMsSUFBWSxHQUFHLEtBQUtDLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQkMsUUFBdkM7QUFDQSxVQUFNQyxRQUFtQixHQUFHLEtBQUtILEtBQUwsQ0FBV0csUUFBdkM7QUFDQSxVQUFNQyxNQUF5QixHQUFHLEtBQUtSLE9BQXZDO0FBRUFTLGFBQU8sQ0FBQ0MsR0FBUixDQUFZUCxJQUFaOztBQUVBLFVBQUlLLE1BQU0sQ0FBQ0csTUFBUCxHQUFnQixDQUFwQixFQUF1QjtBQUNyQkgsY0FBTSxDQUFDSSxJQUFQLENBQVk7QUFBRVQsY0FBSSxFQUFKQSxJQUFGO0FBQVFJLGtCQUFRLEVBQVJBO0FBQVIsU0FBWjtBQUNELE9BRkQsTUFFTztBQUNMLFlBQU1NLFNBQWlCLEdBQUdMLE1BQU0sQ0FBQ0csTUFBUCxHQUFnQixDQUExQztBQUNBLFlBQU1HLFNBQTBCLEdBQUdOLE1BQU0sQ0FBQ0ssU0FBRCxDQUF6Qzs7QUFFQSxZQUFJQyxTQUFTLENBQUNYLElBQVYsS0FBbUJBLElBQXZCLEVBQTZCO0FBQzNCSyxnQkFBTSxDQUFDSSxJQUFQLENBQVk7QUFBRVQsZ0JBQUksRUFBSkEsSUFBRjtBQUFRSSxvQkFBUSxFQUFSQTtBQUFSLFdBQVo7QUFDRCxTQUZELE1BRU8sSUFBSU8sU0FBUyxDQUFDUCxRQUFWLEtBQXVCQSxRQUEzQixFQUFxQztBQUMxQ0MsZ0JBQU0sQ0FBQ0ssU0FBRCxDQUFOLEdBQW9CO0FBQUVWLGdCQUFJLEVBQUpBLElBQUY7QUFBUUksb0JBQVEsRUFBUkE7QUFBUixXQUFwQjtBQUNEOztBQUVELGVBQU9DLE1BQU0sQ0FBQ0csTUFBUCxHQUFnQixDQUF2QixFQUEwQjtBQUN4QkgsZ0JBQU0sQ0FBQ08sS0FBUDtBQUNEO0FBQ0Y7O0FBRUROLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFaO0FBQ0Q7QUFHRDtBQUNGO0FBQ0E7O0FBbERBO0FBQUE7QUFBQSw2QkFtRHdDO0FBQ3BDLFdBQUtRLGNBQUw7QUFFQSxhQUNFO0FBQUssaUJBQVMsRUFBQyxzQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0ksS0FBS2hCLE9BQUwsQ0FBYWlCLEdBQWIsQ0FBaUIsS0FBS2hCLG9CQUF0QixDQURKLENBREY7QUFLRDtBQUVEO0FBQ0Y7QUFDQTs7QUEvREE7QUFBQTtBQUFBLHlDQWdFZ0NpQixLQWhFaEMsRUFnRXdEQyxLQWhFeEQsRUFnRTJGO0FBQ3ZGLFVBQU1DLG9CQUE4QyxHQUFHO0FBQ3JELGNBQUlELEtBQUssS0FBSyxLQUFLbkIsT0FBTCxDQUFhVyxNQUFiLEdBQXNCLENBRGlCO0FBRXJEVSxxQkFBYSxFQUFFLElBRnNDO0FBR3JEQyxrQkFBVSxFQUFFLElBSHlDO0FBSXJEQyxlQUFPLEVBQUU7QUFKNEMsT0FBdkQ7QUFPQSxhQUNFLE1BQUMsb0VBQUQ7QUFBZSxXQUFHLEVBQUVMLEtBQUssQ0FBQ2Y7QUFBMUIsU0FBb0NpQixvQkFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUNFO0FBQUssaUJBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSUYsS0FBSyxDQUFDWCxRQURWLENBREYsQ0FERjtBQU9EO0FBL0VIOztBQUFBO0FBQUEsRUFBa0NpQiw0Q0FBSyxDQUFDQyxTQUF4QztBQWtGQTtBQUNBO0FBQ0E7OzhCQUNpQjNCLFksS0FBQUEsWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmU2NjU5ZjE3YTk0NzdmZTBlNTczLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmltcG9ydCB7IENTU1RyYW5zaXRpb24gfSBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwJ1xyXG5cclxuLyoqXHJcbiAqIFxyXG4gKi9cclxudHlwZSBFbnRyeSA9IHtcclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwYXRoOiBzdHJpbmcsXHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBcclxuICovXHJcbmV4cG9ydCBjbGFzcyBSb3V0ZXJTbGlkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8Um91dGVyU2xpZGVyLlByb3BlcnRpZXM+IHtcclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwcml2YXRlIHJlYWRvbmx5IF9zbGlkZXM6IFJlYWRvbmx5PEVudHJ5PltdXHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvciAocHJvcGVydGllczogUm91dGVyU2xpZGVyLlByb3BlcnRpZXMpIHtcclxuICAgIHN1cGVyKHByb3BlcnRpZXMpXHJcblxyXG4gICAgdGhpcy5fc2xpZGVzID0gWyBdXHJcblxyXG4gICAgdGhpcy5oYW5kbGVTbGlkZVJlbmRlcmluZyA9IHRoaXMuaGFuZGxlU2xpZGVSZW5kZXJpbmcuYmluZCh0aGlzKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzdGFja05leHRTbGlkZSgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHBhdGg6IHN0cmluZyA9IHRoaXMucHJvcHMucm91dGVyLnBhdGhuYW1lXHJcbiAgICBjb25zdCBjaGlsZHJlbjogUmVhY3ROb2RlID0gdGhpcy5wcm9wcy5jaGlsZHJlblxyXG4gICAgY29uc3Qgc2xpZGVzOiBSZWFkb25seTxFbnRyeT5bXSA9IHRoaXMuX3NsaWRlc1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHBhdGgpXHJcblxyXG4gICAgaWYgKHNsaWRlcy5sZW5ndGggPCAxKSB7XHJcbiAgICAgIHNsaWRlcy5wdXNoKHsgcGF0aCwgY2hpbGRyZW4gfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGxhc3RJbmRleDogbnVtYmVyID0gc2xpZGVzLmxlbmd0aCAtIDFcclxuICAgICAgY29uc3QgbGFzdEVudHJ5OiBSZWFkb25seTxFbnRyeT4gPSBzbGlkZXNbbGFzdEluZGV4XVxyXG5cclxuICAgICAgaWYgKGxhc3RFbnRyeS5wYXRoICE9PSBwYXRoKSB7XHJcbiAgICAgICAgc2xpZGVzLnB1c2goeyBwYXRoLCBjaGlsZHJlbiB9KVxyXG4gICAgICB9IGVsc2UgaWYgKGxhc3RFbnRyeS5jaGlsZHJlbiAhPT0gY2hpbGRyZW4pIHtcclxuICAgICAgICBzbGlkZXNbbGFzdEluZGV4XSA9IHsgcGF0aCwgY2hpbGRyZW4gfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB3aGlsZSAoc2xpZGVzLmxlbmd0aCA+IDIpIHtcclxuICAgICAgICBzbGlkZXMuc2hpZnQoKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2coc2xpZGVzKVxyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIEBzZWUgUmVhY3QuQ29tcG9uZW50LlJlbmRlclxyXG4gICAqL1xyXG4gIHB1YmxpYyByZW5kZXIgKCkgOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xyXG4gICAgdGhpcy5zdGFja05leHRTbGlkZSgpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NsaWRlciBzbGlkZXItcm91dGVyJz5cclxuICAgICAgICB7IHRoaXMuX3NsaWRlcy5tYXAodGhpcy5oYW5kbGVTbGlkZVJlbmRlcmluZykgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHByaXZhdGUgaGFuZGxlU2xpZGVSZW5kZXJpbmcgKGVudHJ5OiBSZWFkb25seTxFbnRyeT4sIGluZGV4OiBudW1iZXIpOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xyXG4gICAgY29uc3QgdHJhbnNpdGlvblByb3BlcnRpZXM6IENTU1RyYW5zaXRpb24uUHJvcGVydGllcyA9IHtcclxuICAgICAgaW46IGluZGV4ID09PSB0aGlzLl9zbGlkZXMubGVuZ3RoIC0gMSxcclxuICAgICAgdW5tb3VudE9uRXhpdDogdHJ1ZSxcclxuICAgICAgY2xhc3NOYW1lczogJ2lzJyxcclxuICAgICAgdGltZW91dDogNDAwXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPENTU1RyYW5zaXRpb24ga2V5PXtlbnRyeS5wYXRofSB7Li4udHJhbnNpdGlvblByb3BlcnRpZXN9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGlkZXItc2xpZGUnPlxyXG4gICAgICAgICAgeyBlbnRyeS5jaGlsZHJlbiB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQ1NTVHJhbnNpdGlvbj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcclxuICovXHJcbmV4cG9ydCBuYW1lc3BhY2UgUm91dGVyU2xpZGVyIHtcclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBleHBvcnQgdHlwZSBQcm9wZXJ0aWVzID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nIHwgdW5kZWZpbmVkLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIHJvdXRlcjogTmV4dFJvdXRlcixcclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
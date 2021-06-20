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
          lineNumber: 76,
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
          lineNumber: 94,
          columnNumber: 7
        }
      }), __jsx("div", {
        className: "slider-slide",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Sb3V0ZXJTbGlkZXIudHN4Il0sIm5hbWVzIjpbIlJvdXRlclNsaWRlciIsInByb3BlcnRpZXMiLCJfc2xpZGVzIiwiaGFuZGxlU2xpZGVSZW5kZXJpbmciLCJiaW5kIiwicGF0aCIsInByb3BzIiwicm91dGVyIiwicGF0aG5hbWUiLCJjaGlsZHJlbiIsInNsaWRlcyIsImxlbmd0aCIsInB1c2giLCJsYXN0SW5kZXgiLCJsYXN0RW50cnkiLCJzaGlmdCIsInN0YWNrTmV4dFNsaWRlIiwibWFwIiwiZW50cnkiLCJpbmRleCIsInRyYW5zaXRpb25Qcm9wZXJ0aWVzIiwidW5tb3VudE9uRXhpdCIsImNsYXNzTmFtZXMiLCJ0aW1lb3V0IiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7O0FBY0E7QUFDQTtBQUNBO0FBQ08sSUFBTUEsWUFBYjtBQUFBOztBQUFBOztBQUNFO0FBQ0Y7QUFDQTs7QUFHRTtBQUNGO0FBQ0E7QUFDRSx3QkFBb0JDLFVBQXBCLEVBQXlEO0FBQUE7O0FBQUE7O0FBQ3ZELDhCQUFNQSxVQUFOO0FBRHVELFVBTHhDQyxPQUt3QztBQUd2RCxVQUFLQSxPQUFMLEdBQWUsRUFBZjtBQUVBLFVBQUtDLG9CQUFMLEdBQTRCLE1BQUtBLG9CQUFMLENBQTBCQyxJQUExQixnSkFBNUI7QUFMdUQ7QUFNeEQ7QUFFRDtBQUNGO0FBQ0E7OztBQW5CQTtBQUFBO0FBQUEscUNBb0JpQztBQUM3QixVQUFNQyxJQUFZLEdBQUcsS0FBS0MsS0FBTCxDQUFXQyxNQUFYLENBQWtCQyxRQUF2QztBQUNBLFVBQU1DLFFBQW1CLEdBQUcsS0FBS0gsS0FBTCxDQUFXRyxRQUF2QztBQUNBLFVBQU1DLE1BQXlCLEdBQUcsS0FBS1IsT0FBdkM7O0FBRUEsVUFBSVEsTUFBTSxDQUFDQyxNQUFQLEdBQWdCLENBQXBCLEVBQXVCO0FBQ3JCRCxjQUFNLENBQUNFLElBQVAsQ0FBWTtBQUFFUCxjQUFJLEVBQUpBLElBQUY7QUFBUUksa0JBQVEsRUFBUkE7QUFBUixTQUFaO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsWUFBTUksU0FBaUIsR0FBR0gsTUFBTSxDQUFDQyxNQUFQLEdBQWdCLENBQTFDO0FBQ0EsWUFBTUcsU0FBMEIsR0FBR0osTUFBTSxDQUFDRyxTQUFELENBQXpDOztBQUVBLFlBQUlDLFNBQVMsQ0FBQ1QsSUFBVixLQUFtQkEsSUFBdkIsRUFBNkI7QUFDM0JLLGdCQUFNLENBQUNFLElBQVAsQ0FBWTtBQUFFUCxnQkFBSSxFQUFKQSxJQUFGO0FBQVFJLG9CQUFRLEVBQVJBO0FBQVIsV0FBWjtBQUNELFNBRkQsTUFFTyxJQUFJSyxTQUFTLENBQUNMLFFBQVYsS0FBdUJBLFFBQTNCLEVBQXFDO0FBQzFDQyxnQkFBTSxDQUFDRyxTQUFELENBQU4sR0FBb0I7QUFBRVIsZ0JBQUksRUFBSkEsSUFBRjtBQUFRSSxvQkFBUSxFQUFSQTtBQUFSLFdBQXBCO0FBQ0Q7O0FBRUQsZUFBT0MsTUFBTSxDQUFDQyxNQUFQLEdBQWdCLENBQXZCLEVBQTBCO0FBQ3hCRCxnQkFBTSxDQUFDSyxLQUFQO0FBQ0Q7QUFDRjtBQUNGO0FBR0Q7QUFDRjtBQUNBOztBQTlDQTtBQUFBO0FBQUEsNkJBK0N3QztBQUNwQyxXQUFLQyxjQUFMO0FBRUEsYUFDRTtBQUFLLGlCQUFTLEVBQUMsc0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLEtBQUtkLE9BQUwsQ0FBYWUsR0FBYixDQUFpQixLQUFLZCxvQkFBdEIsQ0FESixDQURGO0FBS0Q7QUFFRDtBQUNGO0FBQ0E7O0FBM0RBO0FBQUE7QUFBQSx5Q0E0RGdDZSxLQTVEaEMsRUE0RHdEQyxLQTVEeEQsRUE0RDJGO0FBQ3ZGLFVBQU1DLG9CQUE4QyxHQUFHO0FBQ3JELGNBQUlELEtBQUssS0FBSyxLQUFLakIsT0FBTCxDQUFhUyxNQUFiLEdBQXNCLENBRGlCO0FBRXJEVSxxQkFBYSxFQUFFLElBRnNDO0FBR3JEQyxrQkFBVSxFQUFFLElBSHlDO0FBSXJEQyxlQUFPLEVBQUU7QUFKNEMsT0FBdkQ7QUFPQSxhQUNFLE1BQUMsb0VBQUQ7QUFBZSxXQUFHLEVBQUVMLEtBQUssQ0FBQ2I7QUFBMUIsU0FBb0NlLG9CQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQ0U7QUFBSyxpQkFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJRixLQUFLLENBQUNULFFBRFYsQ0FERixDQURGO0FBT0Q7QUEzRUg7O0FBQUE7QUFBQSxFQUFrQ2UsNENBQUssQ0FBQ0MsU0FBeEM7QUE4RUE7QUFDQTtBQUNBOzs4QkFDaUJ6QixZLEtBQUFBLFkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC44NzIxM2YyOGU2NDdkOThjYzI0My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5pbXBvcnQgeyBDU1NUcmFuc2l0aW9uIH0gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cCdcclxuXHJcbi8qKlxyXG4gKiBcclxuICovXHJcbnR5cGUgRW50cnkgPSB7XHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcGF0aDogc3RyaW5nLFxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXHJcbn1cclxuXHJcblxyXG4vKipcclxuICogXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUm91dGVyU2xpZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFJvdXRlclNsaWRlci5Qcm9wZXJ0aWVzPiB7XHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHJpdmF0ZSByZWFkb25seSBfc2xpZGVzOiBSZWFkb25seTxFbnRyeT5bXVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgY29uc3RydWN0b3IgKHByb3BlcnRpZXM6IFJvdXRlclNsaWRlci5Qcm9wZXJ0aWVzKSB7XHJcbiAgICBzdXBlcihwcm9wZXJ0aWVzKVxyXG5cclxuICAgIHRoaXMuX3NsaWRlcyA9IFsgXVxyXG5cclxuICAgIHRoaXMuaGFuZGxlU2xpZGVSZW5kZXJpbmcgPSB0aGlzLmhhbmRsZVNsaWRlUmVuZGVyaW5nLmJpbmQodGhpcylcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHByaXZhdGUgc3RhY2tOZXh0U2xpZGUoKTogdm9pZCB7XHJcbiAgICBjb25zdCBwYXRoOiBzdHJpbmcgPSB0aGlzLnByb3BzLnJvdXRlci5wYXRobmFtZVxyXG4gICAgY29uc3QgY2hpbGRyZW46IFJlYWN0Tm9kZSA9IHRoaXMucHJvcHMuY2hpbGRyZW5cclxuICAgIGNvbnN0IHNsaWRlczogUmVhZG9ubHk8RW50cnk+W10gPSB0aGlzLl9zbGlkZXNcclxuICAgIFxyXG4gICAgaWYgKHNsaWRlcy5sZW5ndGggPCAxKSB7XHJcbiAgICAgIHNsaWRlcy5wdXNoKHsgcGF0aCwgY2hpbGRyZW4gfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGxhc3RJbmRleDogbnVtYmVyID0gc2xpZGVzLmxlbmd0aCAtIDFcclxuICAgICAgY29uc3QgbGFzdEVudHJ5OiBSZWFkb25seTxFbnRyeT4gPSBzbGlkZXNbbGFzdEluZGV4XVxyXG5cclxuICAgICAgaWYgKGxhc3RFbnRyeS5wYXRoICE9PSBwYXRoKSB7XHJcbiAgICAgICAgc2xpZGVzLnB1c2goeyBwYXRoLCBjaGlsZHJlbiB9KVxyXG4gICAgICB9IGVsc2UgaWYgKGxhc3RFbnRyeS5jaGlsZHJlbiAhPT0gY2hpbGRyZW4pIHtcclxuICAgICAgICBzbGlkZXNbbGFzdEluZGV4XSA9IHsgcGF0aCwgY2hpbGRyZW4gfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB3aGlsZSAoc2xpZGVzLmxlbmd0aCA+IDIpIHtcclxuICAgICAgICBzbGlkZXMuc2hpZnQoKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogQHNlZSBSZWFjdC5Db21wb25lbnQuUmVuZGVyXHJcbiAgICovXHJcbiAgcHVibGljIHJlbmRlciAoKSA6IFJlYWN0LlJlYWN0RWxlbWVudCB7XHJcbiAgICB0aGlzLnN0YWNrTmV4dFNsaWRlKClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xpZGVyIHNsaWRlci1yb3V0ZXInPlxyXG4gICAgICAgIHsgdGhpcy5fc2xpZGVzLm1hcCh0aGlzLmhhbmRsZVNsaWRlUmVuZGVyaW5nKSB9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBoYW5kbGVTbGlkZVJlbmRlcmluZyAoZW50cnk6IFJlYWRvbmx5PEVudHJ5PiwgaW5kZXg6IG51bWJlcik6IFJlYWN0LlJlYWN0RWxlbWVudCB7XHJcbiAgICBjb25zdCB0cmFuc2l0aW9uUHJvcGVydGllczogQ1NTVHJhbnNpdGlvbi5Qcm9wZXJ0aWVzID0ge1xyXG4gICAgICBpbjogaW5kZXggPT09IHRoaXMuX3NsaWRlcy5sZW5ndGggLSAxLFxyXG4gICAgICB1bm1vdW50T25FeGl0OiB0cnVlLFxyXG4gICAgICBjbGFzc05hbWVzOiAnaXMnLFxyXG4gICAgICB0aW1lb3V0OiA0MDBcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Q1NTVHJhbnNpdGlvbiBrZXk9e2VudHJ5LnBhdGh9IHsuLi50cmFuc2l0aW9uUHJvcGVydGllc30+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsaWRlci1zbGlkZSc+XHJcbiAgICAgICAgICB7IGVudHJ5LmNoaWxkcmVuIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9DU1NUcmFuc2l0aW9uPlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFxyXG4gKi9cclxuZXhwb3J0IG5hbWVzcGFjZSBSb3V0ZXJTbGlkZXIge1xyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIGV4cG9ydCB0eXBlIFByb3BlcnRpZXMgPSB7XHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmcgfCB1bmRlZmluZWQsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgcm91dGVyOiBOZXh0Um91dGVyLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
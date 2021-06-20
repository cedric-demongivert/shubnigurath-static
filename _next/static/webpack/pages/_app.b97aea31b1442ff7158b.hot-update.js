webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Slider.tsx":
/*!*******************************!*\
  !*** ./components/Slider.tsx ***!
  \*******************************/
/*! exports provided: Slider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return Slider; });
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







var _jsxFileName = "D:\\development\\rpg\\shubgath\\components\\Slider.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



/**
 * 
 */

var Slider = /*#__PURE__*/function (_React$Component) {
  Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Slider, _React$Component);

  var _super = _createSuper(Slider);

  /**
   * 
   */

  /**
   * 
   */
  function Slider(properties) {
    var _this;

    Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Slider);

    _this = _super.call(this, properties);
    _this._slides = void 0;
    _this._slides = [];
    _this.handleSlideRendering = _this.handleSlideRendering.bind(Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    return _this;
  }
  /**
   * 
   */


  Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Slider, [{
    key: "isNextSlideAvailable",
    value: function isNextSlideAvailable() {
      var slides = this._slides;
      return slides.length < 1 || slides[slides.length - 1] !== this.props.children;
    }
    /**
     * 
     */

  }, {
    key: "stackNextSlideIfAny",
    value: function stackNextSlideIfAny() {
      if (this.isNextSlideAvailable()) {
        this._slides.push(this.props.children);
      }

      while (this._slides.length > 2) {
        this._slides.unshift();
      }
    }
    /**
     * @see React.Component.Render
     */

  }, {
    key: "render",
    value: function render() {
      this.stackNextSlideIfAny();
      return __jsx("div", {
        className: "slider",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 7
        }
      }, this._slides.map(this.handleSlideRendering));
    }
    /**
     * 
     */

  }, {
    key: "handleSlideRendering",
    value: function handleSlideRendering(children, index) {
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
          lineNumber: 77,
          columnNumber: 7
        }
      }), __jsx("div", {
        className: "slider-slide",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 9
        }
      }, children));
    }
  }]);

  return Slider;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);
/**
 * 
 */

(function (_Slider) {})(Slider || (Slider = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TbGlkZXIudHN4Il0sIm5hbWVzIjpbIlNsaWRlciIsInByb3BlcnRpZXMiLCJfc2xpZGVzIiwiaGFuZGxlU2xpZGVSZW5kZXJpbmciLCJiaW5kIiwic2xpZGVzIiwibGVuZ3RoIiwicHJvcHMiLCJjaGlsZHJlbiIsImlzTmV4dFNsaWRlQXZhaWxhYmxlIiwicHVzaCIsInVuc2hpZnQiLCJzdGFja05leHRTbGlkZUlmQW55IiwibWFwIiwiaW5kZXgiLCJ0cmFuc2l0aW9uUHJvcGVydGllcyIsInVubW91bnRPbkV4aXQiLCJjbGFzc05hbWVzIiwidGltZW91dCIsImtleSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBOztBQUNPLElBQU1BLE1BQWI7QUFBQTs7QUFBQTs7QUFDRTtBQUNGO0FBQ0E7O0FBR0U7QUFDRjtBQUNBO0FBQ0Usa0JBQW9CQyxVQUFwQixFQUFtRDtBQUFBOztBQUFBOztBQUNqRCw4QkFBTUEsVUFBTjtBQURpRCxVQUxsQ0MsT0FLa0M7QUFHakQsVUFBS0EsT0FBTCxHQUFlLEVBQWY7QUFFQSxVQUFLQyxvQkFBTCxHQUE0QixNQUFLQSxvQkFBTCxDQUEwQkMsSUFBMUIsZ0pBQTVCO0FBTGlEO0FBTWxEO0FBRUQ7QUFDRjtBQUNBOzs7QUFuQkE7QUFBQTtBQUFBLDJDQW9CMEM7QUFDdEMsVUFBTUMsTUFBeUIsR0FBRyxLQUFLSCxPQUF2QztBQUVBLGFBQ0VHLE1BQU0sQ0FBQ0MsTUFBUCxHQUFnQixDQUFoQixJQUNBRCxNQUFNLENBQUNBLE1BQU0sQ0FBQ0MsTUFBUCxHQUFnQixDQUFqQixDQUFOLEtBQThCLEtBQUtDLEtBQUwsQ0FBV0MsUUFGM0M7QUFJRDtBQUVEO0FBQ0Y7QUFDQTs7QUEvQkE7QUFBQTtBQUFBLDBDQWdDc0M7QUFDbEMsVUFBSSxLQUFLQyxvQkFBTCxFQUFKLEVBQWlDO0FBQy9CLGFBQUtQLE9BQUwsQ0FBYVEsSUFBYixDQUFrQixLQUFLSCxLQUFMLENBQVdDLFFBQTdCO0FBQ0Q7O0FBRUQsYUFBTyxLQUFLTixPQUFMLENBQWFJLE1BQWIsR0FBc0IsQ0FBN0IsRUFBZ0M7QUFDOUIsYUFBS0osT0FBTCxDQUFhUyxPQUFiO0FBQ0Q7QUFDRjtBQUdEO0FBQ0Y7QUFDQTs7QUE3Q0E7QUFBQTtBQUFBLDZCQThDd0M7QUFDcEMsV0FBS0MsbUJBQUw7QUFFQSxhQUNFO0FBQUssaUJBQVMsRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSSxLQUFLVixPQUFMLENBQWFXLEdBQWIsQ0FBaUIsS0FBS1Ysb0JBQXRCLENBREosQ0FERjtBQUtEO0FBRUQ7QUFDRjtBQUNBOztBQTFEQTtBQUFBO0FBQUEseUNBMkRnQ0ssUUEzRGhDLEVBMkQyRE0sS0EzRDNELEVBMkQ4RjtBQUMxRixVQUFNQyxvQkFBOEMsR0FBRztBQUNyRCxjQUFJRCxLQUFLLEtBQUssS0FBS1osT0FBTCxDQUFhSSxNQUFiLEdBQXNCLENBRGlCO0FBRXJEVSxxQkFBYSxFQUFFLElBRnNDO0FBR3JEQyxrQkFBVSxFQUFFLElBSHlDO0FBSXJEQyxlQUFPLEVBQUUsR0FKNEM7QUFLckRDLFdBQUcsRUFBRUw7QUFMZ0QsT0FBdkQ7QUFRQSxhQUNFLE1BQUMsb0VBQUQsZ0lBQW1CQyxvQkFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUNFO0FBQUssaUJBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSVAsUUFESixDQURGLENBREY7QUFPRDtBQTNFSDs7QUFBQTtBQUFBLEVBQTRCWSw0Q0FBSyxDQUFDQyxTQUFsQztBQThFQTtBQUNBO0FBQ0E7O3dCQUNpQnJCLE0sS0FBQUEsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmI5N2FlYTMxYjE0NDJmZjcxNThiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgeyBDU1NUcmFuc2l0aW9uIH0gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cCdcclxuXHJcbi8qKlxyXG4gKiBcclxuICovXHJcbmV4cG9ydCBjbGFzcyBTbGlkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8U2xpZGVyLlByb3BlcnRpZXM+IHtcclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwcml2YXRlIHJlYWRvbmx5IF9zbGlkZXM6IFJlYWN0LlJlYWN0Tm9kZVtdXHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvciAocHJvcGVydGllczogU2xpZGVyLlByb3BlcnRpZXMpIHtcclxuICAgIHN1cGVyKHByb3BlcnRpZXMpXHJcblxyXG4gICAgdGhpcy5fc2xpZGVzID0gWyBdXHJcblxyXG4gICAgdGhpcy5oYW5kbGVTbGlkZVJlbmRlcmluZyA9IHRoaXMuaGFuZGxlU2xpZGVSZW5kZXJpbmcuYmluZCh0aGlzKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBpc05leHRTbGlkZUF2YWlsYWJsZSgpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IHNsaWRlczogUmVhY3QuUmVhY3ROb2RlW10gPSB0aGlzLl9zbGlkZXNcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBzbGlkZXMubGVuZ3RoIDwgMSB8fFxyXG4gICAgICBzbGlkZXNbc2xpZGVzLmxlbmd0aCAtIDFdICE9PSB0aGlzLnByb3BzLmNoaWxkcmVuXHJcbiAgICApXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwcml2YXRlIHN0YWNrTmV4dFNsaWRlSWZBbnkoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc05leHRTbGlkZUF2YWlsYWJsZSgpKSB7XHJcbiAgICAgIHRoaXMuX3NsaWRlcy5wdXNoKHRoaXMucHJvcHMuY2hpbGRyZW4pXHJcbiAgICB9XHJcblxyXG4gICAgd2hpbGUgKHRoaXMuX3NsaWRlcy5sZW5ndGggPiAyKSB7XHJcbiAgICAgIHRoaXMuX3NsaWRlcy51bnNoaWZ0KClcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICAgKiBAc2VlIFJlYWN0LkNvbXBvbmVudC5SZW5kZXJcclxuICAgKi9cclxuICBwdWJsaWMgcmVuZGVyICgpIDogUmVhY3QuUmVhY3RFbGVtZW50IHtcclxuICAgIHRoaXMuc3RhY2tOZXh0U2xpZGVJZkFueSgpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NsaWRlcic+XHJcbiAgICAgICAgeyB0aGlzLl9zbGlkZXMubWFwKHRoaXMuaGFuZGxlU2xpZGVSZW5kZXJpbmcpIH1cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwcml2YXRlIGhhbmRsZVNsaWRlUmVuZGVyaW5nIChjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlLCBpbmRleDogbnVtYmVyKTogUmVhY3QuUmVhY3RFbGVtZW50IHtcclxuICAgIGNvbnN0IHRyYW5zaXRpb25Qcm9wZXJ0aWVzOiBDU1NUcmFuc2l0aW9uLlByb3BlcnRpZXMgPSB7XHJcbiAgICAgIGluOiBpbmRleCA9PT0gdGhpcy5fc2xpZGVzLmxlbmd0aCAtIDEsXHJcbiAgICAgIHVubW91bnRPbkV4aXQ6IHRydWUsXHJcbiAgICAgIGNsYXNzTmFtZXM6ICdpcycsXHJcbiAgICAgIHRpbWVvdXQ6IDQwMCxcclxuICAgICAga2V5OiBpbmRleFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxDU1NUcmFuc2l0aW9uIHsuLi50cmFuc2l0aW9uUHJvcGVydGllc30+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsaWRlci1zbGlkZSc+XHJcbiAgICAgICAgICB7IGNoaWxkcmVuIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9DU1NUcmFuc2l0aW9uPlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFxyXG4gKi9cclxuZXhwb3J0IG5hbWVzcGFjZSBTbGlkZXIge1xyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIGV4cG9ydCB0eXBlIFByb3BlcnRpZXMgPSB7XHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmcgfCB1bmRlZmluZWQsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9
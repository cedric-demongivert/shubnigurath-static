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
        this._slides.shift();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TbGlkZXIudHN4Il0sIm5hbWVzIjpbIlNsaWRlciIsInByb3BlcnRpZXMiLCJfc2xpZGVzIiwiaGFuZGxlU2xpZGVSZW5kZXJpbmciLCJiaW5kIiwic2xpZGVzIiwibGVuZ3RoIiwicHJvcHMiLCJjaGlsZHJlbiIsImlzTmV4dFNsaWRlQXZhaWxhYmxlIiwicHVzaCIsInNoaWZ0Iiwic3RhY2tOZXh0U2xpZGVJZkFueSIsIm1hcCIsImluZGV4IiwidHJhbnNpdGlvblByb3BlcnRpZXMiLCJ1bm1vdW50T25FeGl0IiwiY2xhc3NOYW1lcyIsInRpbWVvdXQiLCJrZXkiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTs7QUFDTyxJQUFNQSxNQUFiO0FBQUE7O0FBQUE7O0FBQ0U7QUFDRjtBQUNBOztBQUdFO0FBQ0Y7QUFDQTtBQUNFLGtCQUFvQkMsVUFBcEIsRUFBbUQ7QUFBQTs7QUFBQTs7QUFDakQsOEJBQU1BLFVBQU47QUFEaUQsVUFMbENDLE9BS2tDO0FBR2pELFVBQUtBLE9BQUwsR0FBZSxFQUFmO0FBRUEsVUFBS0Msb0JBQUwsR0FBNEIsTUFBS0Esb0JBQUwsQ0FBMEJDLElBQTFCLGdKQUE1QjtBQUxpRDtBQU1sRDtBQUVEO0FBQ0Y7QUFDQTs7O0FBbkJBO0FBQUE7QUFBQSwyQ0FvQjBDO0FBQ3RDLFVBQU1DLE1BQXlCLEdBQUcsS0FBS0gsT0FBdkM7QUFFQSxhQUNFRyxNQUFNLENBQUNDLE1BQVAsR0FBZ0IsQ0FBaEIsSUFDQUQsTUFBTSxDQUFDQSxNQUFNLENBQUNDLE1BQVAsR0FBZ0IsQ0FBakIsQ0FBTixLQUE4QixLQUFLQyxLQUFMLENBQVdDLFFBRjNDO0FBSUQ7QUFFRDtBQUNGO0FBQ0E7O0FBL0JBO0FBQUE7QUFBQSwwQ0FnQ3NDO0FBQ2xDLFVBQUksS0FBS0Msb0JBQUwsRUFBSixFQUFpQztBQUMvQixhQUFLUCxPQUFMLENBQWFRLElBQWIsQ0FBa0IsS0FBS0gsS0FBTCxDQUFXQyxRQUE3QjtBQUNEOztBQUVELGFBQU8sS0FBS04sT0FBTCxDQUFhSSxNQUFiLEdBQXNCLENBQTdCLEVBQWdDO0FBQzlCLGFBQUtKLE9BQUwsQ0FBYVMsS0FBYjtBQUNEO0FBQ0Y7QUFHRDtBQUNGO0FBQ0E7O0FBN0NBO0FBQUE7QUFBQSw2QkE4Q3dDO0FBQ3BDLFdBQUtDLG1CQUFMO0FBRUEsYUFDRTtBQUFLLGlCQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0ksS0FBS1YsT0FBTCxDQUFhVyxHQUFiLENBQWlCLEtBQUtWLG9CQUF0QixDQURKLENBREY7QUFLRDtBQUVEO0FBQ0Y7QUFDQTs7QUExREE7QUFBQTtBQUFBLHlDQTJEZ0NLLFFBM0RoQyxFQTJEMkRNLEtBM0QzRCxFQTJEOEY7QUFDMUYsVUFBTUMsb0JBQThDLEdBQUc7QUFDckQsY0FBSUQsS0FBSyxLQUFLLEtBQUtaLE9BQUwsQ0FBYUksTUFBYixHQUFzQixDQURpQjtBQUVyRFUscUJBQWEsRUFBRSxJQUZzQztBQUdyREMsa0JBQVUsRUFBRSxJQUh5QztBQUlyREMsZUFBTyxFQUFFLEdBSjRDO0FBS3JEQyxXQUFHLEVBQUVMO0FBTGdELE9BQXZEO0FBUUEsYUFDRSxNQUFDLG9FQUFELGdJQUFtQkMsb0JBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFDRTtBQUFLLGlCQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0lQLFFBREosQ0FERixDQURGO0FBT0Q7QUEzRUg7O0FBQUE7QUFBQSxFQUE0QlksNENBQUssQ0FBQ0MsU0FBbEM7QUE4RUE7QUFDQTtBQUNBOzt3QkFDaUJyQixNLEtBQUFBLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC42Nzg3Yzg4ZDVmM2FjNGQwMDRiZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IHsgQ1NTVHJhbnNpdGlvbiB9IGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAnXHJcblxyXG4vKipcclxuICogXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU2xpZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFNsaWRlci5Qcm9wZXJ0aWVzPiB7XHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHJpdmF0ZSByZWFkb25seSBfc2xpZGVzOiBSZWFjdC5SZWFjdE5vZGVbXVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgY29uc3RydWN0b3IgKHByb3BlcnRpZXM6IFNsaWRlci5Qcm9wZXJ0aWVzKSB7XHJcbiAgICBzdXBlcihwcm9wZXJ0aWVzKVxyXG5cclxuICAgIHRoaXMuX3NsaWRlcyA9IFsgXVxyXG5cclxuICAgIHRoaXMuaGFuZGxlU2xpZGVSZW5kZXJpbmcgPSB0aGlzLmhhbmRsZVNsaWRlUmVuZGVyaW5nLmJpbmQodGhpcylcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHByaXZhdGUgaXNOZXh0U2xpZGVBdmFpbGFibGUoKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBzbGlkZXM6IFJlYWN0LlJlYWN0Tm9kZVtdID0gdGhpcy5fc2xpZGVzXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgc2xpZGVzLmxlbmd0aCA8IDEgfHxcclxuICAgICAgc2xpZGVzW3NsaWRlcy5sZW5ndGggLSAxXSAhPT0gdGhpcy5wcm9wcy5jaGlsZHJlblxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzdGFja05leHRTbGlkZUlmQW55KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNOZXh0U2xpZGVBdmFpbGFibGUoKSkge1xyXG4gICAgICB0aGlzLl9zbGlkZXMucHVzaCh0aGlzLnByb3BzLmNoaWxkcmVuKVxyXG4gICAgfVxyXG5cclxuICAgIHdoaWxlICh0aGlzLl9zbGlkZXMubGVuZ3RoID4gMikge1xyXG4gICAgICB0aGlzLl9zbGlkZXMuc2hpZnQoKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIEBzZWUgUmVhY3QuQ29tcG9uZW50LlJlbmRlclxyXG4gICAqL1xyXG4gIHB1YmxpYyByZW5kZXIgKCkgOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xyXG4gICAgdGhpcy5zdGFja05leHRTbGlkZUlmQW55KClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xpZGVyJz5cclxuICAgICAgICB7IHRoaXMuX3NsaWRlcy5tYXAodGhpcy5oYW5kbGVTbGlkZVJlbmRlcmluZykgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHByaXZhdGUgaGFuZGxlU2xpZGVSZW5kZXJpbmcgKGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUsIGluZGV4OiBudW1iZXIpOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xyXG4gICAgY29uc3QgdHJhbnNpdGlvblByb3BlcnRpZXM6IENTU1RyYW5zaXRpb24uUHJvcGVydGllcyA9IHtcclxuICAgICAgaW46IGluZGV4ID09PSB0aGlzLl9zbGlkZXMubGVuZ3RoIC0gMSxcclxuICAgICAgdW5tb3VudE9uRXhpdDogdHJ1ZSxcclxuICAgICAgY2xhc3NOYW1lczogJ2lzJyxcclxuICAgICAgdGltZW91dDogNDAwLFxyXG4gICAgICBrZXk6IGluZGV4XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPENTU1RyYW5zaXRpb24gey4uLnRyYW5zaXRpb25Qcm9wZXJ0aWVzfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xpZGVyLXNsaWRlJz5cclxuICAgICAgICAgIHsgY2hpbGRyZW4gfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NTU1RyYW5zaXRpb24+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogXHJcbiAqL1xyXG5leHBvcnQgbmFtZXNwYWNlIFNsaWRlciB7XHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgZXhwb3J0IHR5cGUgUHJvcGVydGllcyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIGNsYXNzTmFtZT86IHN0cmluZyB8IHVuZGVmaW5lZCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
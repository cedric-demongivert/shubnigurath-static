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
/* harmony import */ var _RouterSlider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./RouterSlider */ "./components/RouterSlider.tsx");







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
      }, __jsx(_RouterSlider__WEBPACK_IMPORTED_MODULE_10__["RouterSlider"], {
        router: this.props.router,
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

/***/ }),

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
        timeout: 400,
        key: index
      };
      return __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_8__["CSSTransition"], Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, transitionProperties, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 7
        }
      }), __jsx("div", {
        className: "slider-slide",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
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

/***/ }),

/***/ "./components/Slider.tsx":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBsaWNhdGlvbi50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUm91dGVyU2xpZGVyLnRzeCJdLCJuYW1lcyI6WyJBcHBsaWNhdGlvbiIsInByb3BlcnRpZXMiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwic3RhdGUiLCJpbnZlc3RpZ2F0b3IiLCJJbnZlc3RpZ2F0b3IiLCJlbXB0eSIsImV2ZW50IiwidHlwZSIsIkFwcGxpY2F0aW9uQWN0aW9uIiwiVVNFIiwic2V0U3RhdGUiLCJwYXlsb2FkIiwiU0hPV19JTlZFU1RJR0FUT1JfUEFHRSIsInByb3BzIiwicm91dGVyIiwicmVwbGFjZSIsIlNIT1dfTE9BRElOR19QQUdFIiwiRXJyb3IiLCJwYWdlUHJvcHMiLCJSZWFjdCIsIkNvbXBvbmVudCIsIlJvdXRlclNsaWRlciIsIl9zbGlkZXMiLCJoYW5kbGVTbGlkZVJlbmRlcmluZyIsInBhdGgiLCJwYXRobmFtZSIsImNoaWxkcmVuIiwic2xpZGVzIiwibGVuZ3RoIiwicHVzaCIsImxhc3RJbmRleCIsImxhc3RFbnRyeSIsInNoaWZ0Iiwic3RhY2tOZXh0U2xpZGUiLCJtYXAiLCJlbnRyeSIsImluZGV4IiwidHJhbnNpdGlvblByb3BlcnRpZXMiLCJ1bm1vdW50T25FeGl0IiwiY2xhc3NOYW1lcyIsInRpbWVvdXQiLCJrZXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFJQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUEsV0FBYjtBQUFBOztBQUFBOztBQUNFO0FBQ0Y7QUFDQTtBQUNFLHVCQUFtQkMsVUFBbkIsRUFBdUQ7QUFBQTs7QUFBQTs7QUFDckQsOEJBQU1BLFVBQU47QUFFQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLGdKQUFwQjtBQUVBLFVBQUtDLEtBQUwsR0FBYTtBQUFF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QURWLENBREYsQ0FERjtBQU9EO0FBNUVIOztBQUFBO0FBQUEsRUFBa0NQLDRDQUFLLENBQUNDLFNBQXhDO0FBK0VBO0FBQ0E7QUFDQTs7OEJBQ2lCQyxZLEtBQUFBLFkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5jY2Y1ZWU3OTRhMTE5NDgwNzMzNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5pbXBvcnQgeyBBcHBsaWNhdGlvbkV2ZW50IH0gZnJvbSAnLi4vdHlwZXNjcmlwdC9hcHBsaWNhdGlvbi9BcHBsaWNhdGlvbkV2ZW50J1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvbkFjdGlvbiB9IGZyb20gJy4uL3R5cGVzY3JpcHQvYXBwbGljYXRpb24vQXBwbGljYXRpb25BY3Rpb24nXHJcblxyXG5pbXBvcnQgeyBJbnZlc3RpZ2F0b3IgfSBmcm9tICcuLi90eXBlc2NyaXB0L0ludmVzdGlnYXRvcidcclxuXHJcbmltcG9ydCB7IFJvdXRlclNsaWRlciB9IGZyb20gJy4vUm91dGVyU2xpZGVyJ1xyXG4vKipcclxuICogXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQXBwbGljYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8QXBwbGljYXRpb24uUHJvcGVydGllcywgQXBwbGljYXRpb24uU3RhdGU+IHtcclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgY29uc3RydWN0b3IocHJvcGVydGllczogQXBwbGljYXRpb24uUHJvcGVydGllcykge1xyXG4gICAgc3VwZXIocHJvcGVydGllcylcclxuXHJcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcylcclxuXHJcbiAgICB0aGlzLnN0YXRlID0geyBpbnZlc3RpZ2F0b3I6IEludmVzdGlnYXRvci5lbXB0eSgpIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHByaXZhdGUgaGFuZGxlQ2hhbmdlKGV2ZW50OiBBcHBsaWNhdGlvbkV2ZW50KTogdm9pZCB7XHJcbiAgICBzd2l0Y2ggKGV2ZW50LnR5cGUpIHtcclxuICAgICAgY2FzZSBBcHBsaWNhdGlvbkFjdGlvbi5VU0U6XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGludmVzdGlnYXRvcjogZXZlbnQucGF5bG9hZCB9KVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICBjYXNlIEFwcGxpY2F0aW9uQWN0aW9uLlNIT1dfSU5WRVNUSUdBVE9SX1BBR0U6XHJcbiAgICAgICAgdGhpcy5wcm9wcy5yb3V0ZXIucmVwbGFjZSgnL2ludmVzdGlnYXRvcicpXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIGNhc2UgQXBwbGljYXRpb25BY3Rpb24uU0hPV19MT0FESU5HX1BBR0U6XHJcbiAgICAgICAgdGhpcy5wcm9wcy5yb3V0ZXIucmVwbGFjZSgnLycpXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgJ1VuYWJsZSB0byByZXNvbHZlIGFwcGxpY2F0aW9uIGFjdGlvbiBcIicgKyBldmVudC50eXBlICsgXHJcbiAgICAgICAgICAnXCIgYXMgbm8gcHJvY2VkdXJlIHdhcyBkZWZpbmVkIGZvciB0aGF0LidcclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAc2VlIFJlYWN0LkNvbXBvbmVudC5SZW5kZXJcclxuICAgKi9cclxuICBwdWJsaWMgcmVuZGVyICgpIDogUmVhY3QuUmVhY3RFbGVtZW50IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcHBsaWNhdGlvbicgaWQ9J2FwcGxpY2F0aW9uJz5cclxuICAgICAgICA8Um91dGVyU2xpZGVyIHJvdXRlcj17dGhpcy5wcm9wcy5yb3V0ZXJ9PlxyXG4gICAgICAgICAgPHRoaXMucHJvcHMuQ29tcG9uZW50IFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IFxyXG4gICAgICAgICAgICBpbnZlc3RpZ2F0b3I9e3RoaXMuc3RhdGUuaW52ZXN0aWdhdG9yfVxyXG4gICAgICAgICAgICB7IC4uLnRoaXMucHJvcHMucGFnZVByb3BzIH0gXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvUm91dGVyU2xpZGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcclxuICovXHJcbmV4cG9ydCBuYW1lc3BhY2UgQXBwbGljYXRpb24ge1xyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIGV4cG9ydCB0eXBlIFN0YXRlID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgaW52ZXN0aWdhdG9yOiBJbnZlc3RpZ2F0b3JcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIGV4cG9ydCB0eXBlIFByb3BlcnRpZXMgPSB7XHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICByb3V0ZXI6IE5leHRSb3V0ZXIsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgcGFnZVByb3BzOiBhbnksXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgQ29tcG9uZW50OiBSZWFjdC5KU1hFbGVtZW50Q29uc3RydWN0b3I8YW55PlxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmltcG9ydCB7IENTU1RyYW5zaXRpb24gfSBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwJ1xyXG5cclxuLyoqXHJcbiAqIFxyXG4gKi9cclxudHlwZSBFbnRyeSA9IHtcclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwYXRoOiBzdHJpbmcsXHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBcclxuICovXHJcbmV4cG9ydCBjbGFzcyBSb3V0ZXJTbGlkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8Um91dGVyU2xpZGVyLlByb3BlcnRpZXM+IHtcclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwcml2YXRlIHJlYWRvbmx5IF9zbGlkZXM6IFJlYWRvbmx5PEVudHJ5PltdXHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvciAocHJvcGVydGllczogUm91dGVyU2xpZGVyLlByb3BlcnRpZXMpIHtcclxuICAgIHN1cGVyKHByb3BlcnRpZXMpXHJcblxyXG4gICAgdGhpcy5fc2xpZGVzID0gWyBdXHJcblxyXG4gICAgdGhpcy5oYW5kbGVTbGlkZVJlbmRlcmluZyA9IHRoaXMuaGFuZGxlU2xpZGVSZW5kZXJpbmcuYmluZCh0aGlzKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzdGFja05leHRTbGlkZSgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHBhdGg6IHN0cmluZyA9IHRoaXMucHJvcHMucm91dGVyLnBhdGhuYW1lXHJcbiAgICBjb25zdCBjaGlsZHJlbjogUmVhY3ROb2RlID0gdGhpcy5wcm9wcy5jaGlsZHJlblxyXG4gICAgY29uc3Qgc2xpZGVzOiBSZWFkb25seTxFbnRyeT5bXSA9IHRoaXMuX3NsaWRlc1xyXG5cclxuICAgIGlmIChzbGlkZXMubGVuZ3RoIDwgMSkge1xyXG4gICAgICBzbGlkZXMucHVzaCh7IHBhdGgsIGNoaWxkcmVuIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBsYXN0SW5kZXg6IG51bWJlciA9IHNsaWRlcy5sZW5ndGggLSAxXHJcbiAgICAgIGNvbnN0IGxhc3RFbnRyeTogUmVhZG9ubHk8RW50cnk+ID0gc2xpZGVzW2xhc3RJbmRleF1cclxuXHJcbiAgICAgIGlmIChsYXN0RW50cnkucGF0aCAhPT0gcGF0aCkge1xyXG4gICAgICAgIHNsaWRlcy5wdXNoKHsgcGF0aCwgY2hpbGRyZW4gfSlcclxuICAgICAgfSBlbHNlIGlmIChsYXN0RW50cnkuY2hpbGRyZW4gIT09IGNoaWxkcmVuKSB7XHJcbiAgICAgICAgc2xpZGVzW2xhc3RJbmRleF0gPSB7IHBhdGgsIGNoaWxkcmVuIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgd2hpbGUgKHRoaXMuX3NsaWRlcy5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgdGhpcy5fc2xpZGVzLnNoaWZ0KClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIEBzZWUgUmVhY3QuQ29tcG9uZW50LlJlbmRlclxyXG4gICAqL1xyXG4gIHB1YmxpYyByZW5kZXIgKCkgOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xyXG4gICAgdGhpcy5zdGFja05leHRTbGlkZSgpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NsaWRlciBzbGlkZXItcm91dGVyJz5cclxuICAgICAgICB7IHRoaXMuX3NsaWRlcy5tYXAodGhpcy5oYW5kbGVTbGlkZVJlbmRlcmluZykgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHByaXZhdGUgaGFuZGxlU2xpZGVSZW5kZXJpbmcgKGVudHJ5OiBSZWFkb25seTxFbnRyeT4sIGluZGV4OiBudW1iZXIpOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xyXG4gICAgY29uc3QgdHJhbnNpdGlvblByb3BlcnRpZXM6IENTU1RyYW5zaXRpb24uUHJvcGVydGllcyA9IHtcclxuICAgICAgaW46IGluZGV4ID09PSB0aGlzLl9zbGlkZXMubGVuZ3RoIC0gMSxcclxuICAgICAgdW5tb3VudE9uRXhpdDogdHJ1ZSxcclxuICAgICAgY2xhc3NOYW1lczogJ2lzJyxcclxuICAgICAgdGltZW91dDogNDAwLFxyXG4gICAgICBrZXk6IGluZGV4XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPENTU1RyYW5zaXRpb24gey4uLnRyYW5zaXRpb25Qcm9wZXJ0aWVzfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xpZGVyLXNsaWRlJz5cclxuICAgICAgICAgIHsgZW50cnkuY2hpbGRyZW4gfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NTU1RyYW5zaXRpb24+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogXHJcbiAqL1xyXG5leHBvcnQgbmFtZXNwYWNlIFJvdXRlclNsaWRlciB7XHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgZXhwb3J0IHR5cGUgUHJvcGVydGllcyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIGNsYXNzTmFtZT86IHN0cmluZyB8IHVuZGVmaW5lZCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICByb3V0ZXI6IE5leHRSb3V0ZXIsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9
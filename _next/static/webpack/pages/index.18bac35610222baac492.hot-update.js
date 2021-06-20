webpackHotUpdate_N_E("pages/index",{

/***/ "./components/page/loading/InitialState.tsx":
false,

/***/ "./components/page/loading/LoadingPage.tsx":
false,

/***/ "./components/page/loading/LoadingPageState.tsx":
false,

/***/ "./components/page/loading/LoadingState.tsx":
false,

/***/ "./components/page/loading/ResolvedState.tsx":
false,

/***/ "./components/page/nloading/InitialState.tsx":
/*!***************************************************!*\
  !*** ./components/page/nloading/InitialState.tsx ***!
  \***************************************************/
/*! exports provided: InitialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialState", function() { return InitialState; });
/* harmony import */ var D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _typescript_utils_Empty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../typescript/utils/Empty */ "./typescript/utils/Empty.ts");






var _jsxFileName = "D:\\development\\rpg\\shubgath\\components\\page\\loading\\InitialState.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var HomeImage = __webpack_require__(/*! ../../../public/images/logo.svg */ "./public/images/logo.svg")["default"];
/**
 * 
 */


var InitialState = /*#__PURE__*/function (_React$PureComponent) {
  Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(InitialState, _React$PureComponent);

  var _super = _createSuper(InitialState);

  /**
   * 
   */

  /**
   * 
   */

  /**
   * 
   */
  function InitialState(properties) {
    var _this;

    Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, InitialState);

    _this = _super.call(this, properties);
    _this._input = void 0;
    _this.handleInputChange = _this.handleInputChange.bind(Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handlePageClick = _this.handlePageClick.bind(Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handleDrop = _this.handleDrop.bind(Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handleSilentAction = _this.handleSilentAction.bind(Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handleCancel = _this.handleCancel.bind(Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this._input = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();
    return _this;
  }
  /**
   * 
   */


  Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(InitialState, [{
    key: "handleInputChange",
    value: function handleInputChange(event) {
      if (event.target.files.length > 0) {
        this.props.onSelection(event.target.files[0]);
      }
    }
    /**
     * 
     */

  }, {
    key: "handleSilentAction",
    value: function handleSilentAction(event) {
      event.stopPropagation();
      event.preventDefault();
    }
    /**
     * 
     */

  }, {
    key: "handleDrop",
    value: function handleDrop(event) {
      event.stopPropagation();
      event.preventDefault();
      var dragged = event.dataTransfer;

      if (dragged.files.length > 0) {
        var _iterator = _createForOfIteratorHelper(dragged.files),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _file = _step.value;

            if (_file.name.endsWith('.sheet.unidoc')) {
              this.props.onSelection(_file);
              break;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }
    /**
     * 
     */

  }, {
    key: "handlePageClick",
    value: function handlePageClick(event) {
      this._input.current.click();
    }
    /**
     * 
     */

  }, {
    key: "handleCancel",
    value: function handleCancel(event) {
      event.stopPropagation();
      this.props.onCancel();
    }
    /**
     * 
     */

  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        onDrop: this.handleDrop,
        onDragEnter: this.handleSilentAction,
        onDragOver: this.handleSilentAction,
        onClick: this.handlePageClick,
        className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('layout layout-centered is-clickable', this.props.className),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "container-fluid",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "row justify-content-center align-items-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "col-10 col-md-8 col-lg-6 col-xl-6 text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 13
        }
      }, __jsx(HomeImage, {
        className: "img-fluid",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 15
        }
      }))), __jsx("div", {
        className: "row justify-content-center align-items-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "col-10 col-md-8 col-lg-6 col-xl-6 text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 13
        }
      }, __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 15
        }
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 15
        }
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 15
        }
      }), "D\xE9posez une feuille de personnage ou cliquez pour en choisir une.", __jsx("input", {
        onChange: this.handleInputChange,
        ref: this._input,
        type: "file",
        accept: ".sheet.unidoc,.unidoc,text/plain",
        style: {
          display: 'none'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 15
        }
      }), this.props.cancellable ? __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 42
        }
      }) : null, this.props.cancellable ? __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 42
        }
      }) : null, this.props.cancellable ? __jsx("button", {
        className: "btn btn-link btn-block",
        onClick: this.handleCancel,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 42
        }
      }, "Annuler") : null))));
    }
  }]);

  return InitialState;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.PureComponent);
/**
 * 
 */

InitialState.defaultProps = Object.seal({
  /**
   * 
   */
  onSelection: _typescript_utils_Empty__WEBPACK_IMPORTED_MODULE_8__["Empty"].callback
});

(function (_InitialState) {})(InitialState || (InitialState = {}));

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/page/nloading/LoadingPage.tsx":
/*!**************************************************!*\
  !*** ./components/page/nloading/LoadingPage.tsx ***!
  \**************************************************/
/*! exports provided: LoadingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingPage", function() { return LoadingPage; });
/* harmony import */ var D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @cedric-demongivert/unidoc */ "./node_modules/@cedric-demongivert/unidoc/index.js");
/* harmony import */ var _cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _typescript_unidoc_UnidocCommand__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../typescript/unidoc/UnidocCommand */ "./typescript/unidoc/UnidocCommand.ts");
/* harmony import */ var _typescript_unidoc_InvestigatorCommand__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../typescript/unidoc/InvestigatorCommand */ "./typescript/unidoc/InvestigatorCommand.ts");
/* harmony import */ var _typescript_unidoc_UnidocFileSymbolProducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../typescript/unidoc/UnidocFileSymbolProducer */ "./typescript/unidoc/UnidocFileSymbolProducer.ts");
/* harmony import */ var _typescript_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../typescript/utils */ "./typescript/utils/index.ts");
/* harmony import */ var _InitialState__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./InitialState */ "./components/page/nloading/InitialState.tsx");
/* harmony import */ var _LoadingState__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./LoadingState */ "./components/page/nloading/LoadingState.tsx");
/* harmony import */ var _ResolvedState__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ResolvedState */ "./components/page/nloading/ResolvedState.tsx");
/* harmony import */ var _LoadingPageState__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./LoadingPageState */ "./components/page/nloading/LoadingPageState.tsx");
/* harmony import */ var _typescript_application_ApplicationEvent__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../typescript/application/ApplicationEvent */ "./typescript/application/ApplicationEvent.ts");






var _jsxFileName = "D:\\development\\rpg\\shubgath\\components\\page\\loading\\LoadingPage.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }












/**
 * 
 */

var LoadingPage = /*#__PURE__*/function (_React$Component) {
  Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(LoadingPage, _React$Component);

  var _super = _createSuper(LoadingPage);

  /**
   * 
   */

  /**
   * 
   */
  function LoadingPage(properties) {
    var _this;

    Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LoadingPage);

    _this = _super.call(this, properties);
    _this.handleFileSelection = _this.handleFileSelection.bind(Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handleFileValidation = _this.handleFileValidation.bind(Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handleFileReduction = _this.handleFileReduction.bind(Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handleCancellation = _this.handleCancellation.bind(Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.state = {
      state: _LoadingPageState__WEBPACK_IMPORTED_MODULE_15__["LoadingPageState"].INITIAL,
      file: undefined,
      source: undefined,
      error: undefined
    };
    return _this;
  }
  /**
   * 
   */


  Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LoadingPage, [{
    key: "handleCancellation",
    value: function handleCancellation() {
      this.props.onChange(_typescript_application_ApplicationEvent__WEBPACK_IMPORTED_MODULE_16__["ApplicationEvent"].showInvestigatorPage());
    }
    /**
     * 
     */

  }, {
    key: "handleFileValidation",
    value: function handleFileValidation(validation) {// @TODO error-check
      //console.log(validation.toString())
    }
    /**
     * 
     */

  }, {
    key: "handleFileReduction",
    value: function handleFileReduction(value) {
      this.setState({
        state: _LoadingPageState__WEBPACK_IMPORTED_MODULE_15__["LoadingPageState"].RESOLVED
      });
      this.props.onChange(_typescript_application_ApplicationEvent__WEBPACK_IMPORTED_MODULE_16__["ApplicationEvent"].use(value));
      this.props.onChange(_typescript_application_ApplicationEvent__WEBPACK_IMPORTED_MODULE_16__["ApplicationEvent"].showInvestigatorPage());
    }
    /**
     * 
     */

  }, {
    key: "handleFileSelection",
    value: function handleFileSelection(file) {
      var source = _typescript_unidoc_UnidocFileSymbolProducer__WEBPACK_IMPORTED_MODULE_10__["UnidocFileSymbolProducer"].create(file);
      var events = Object(_cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_7__["parse"])(Object(_cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_7__["tokenize"])(source));
      var validator = _cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_7__["UnidocValidator"].kiss(_typescript_unidoc_UnidocCommand__WEBPACK_IMPORTED_MODULE_8__["UnidocCommand"].validateUnidoc.factory(_typescript_unidoc_InvestigatorCommand__WEBPACK_IMPORTED_MODULE_9__["InvestigatorCommand"].validate));
      validator.subscribe(events);
      var reducer = _cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_7__["UnidocReducer"].reduce.validation(validator, _typescript_unidoc_UnidocCommand__WEBPACK_IMPORTED_MODULE_8__["UnidocCommand"].reduce.factory(_typescript_unidoc_InvestigatorCommand__WEBPACK_IMPORTED_MODULE_9__["InvestigatorCommand"].reduce));
      validator.addEventListener(_cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_7__["UnidocProducerEvent"].PRODUCTION, this.handleFileValidation);
      reducer.addEventListener(_cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_7__["UnidocProducerEvent"].PRODUCTION, this.handleFileReduction);
      this.setState({
        state: _LoadingPageState__WEBPACK_IMPORTED_MODULE_15__["LoadingPageState"].LOADING,
        file: file,
        source: source,
        error: undefined
      }, source.read.bind(source));
    }
    /**
     * 
     */

  }, {
    key: "render",
    value: function render() {
      switch (this.state.state) {
        case _LoadingPageState__WEBPACK_IMPORTED_MODULE_15__["LoadingPageState"].INITIAL:
          return this.renderInitialState();

        case _LoadingPageState__WEBPACK_IMPORTED_MODULE_15__["LoadingPageState"].LOADING:
          return this.renderLoadingState();

        case _LoadingPageState__WEBPACK_IMPORTED_MODULE_15__["LoadingPageState"].RESOLVED:
          return this.renderResolvedState();

        default:
          throw new Error('Unable to render loading page in state ' + _LoadingPageState__WEBPACK_IMPORTED_MODULE_15__["LoadingPageState"].toDebugString(this.state.state) + ' because no rendering factory was defined for that.');
      }
    }
    /**
     * 
     */

  }, {
    key: "renderInitialState",
    value: function renderInitialState() {
      return __jsx(_InitialState__WEBPACK_IMPORTED_MODULE_12__["InitialState"], {
        cancellable: this.props.cancellable,
        onCancel: this.handleCancellation,
        className: this.props.className,
        onSelection: this.handleFileSelection,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 12
        }
      });
    }
    /**
     * 
     */

  }, {
    key: "renderLoadingState",
    value: function renderLoadingState() {
      return __jsx(_LoadingState__WEBPACK_IMPORTED_MODULE_13__["LoadingState"], {
        className: this.props.className,
        file: this.state.file,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 12
        }
      });
    }
    /**
     * 
     */

  }, {
    key: "renderResolvedState",
    value: function renderResolvedState() {
      return __jsx(_ResolvedState__WEBPACK_IMPORTED_MODULE_14__["ResolvedState"], {
        className: this.props.className,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 12
        }
      });
    }
  }]);

  return LoadingPage;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);
/**
 * 
 */

LoadingPage.defaultProps = {
  /**
   * 
   */
  onChange: _typescript_utils__WEBPACK_IMPORTED_MODULE_11__["Empty"].callback
};

(function (_LoadingPage) {})(LoadingPage || (LoadingPage = {}));

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/page/nloading/LoadingPageState.tsx":
/*!*******************************************************!*\
  !*** ./components/page/nloading/LoadingPageState.tsx ***!
  \*******************************************************/
/*! exports provided: LoadingPageState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingPageState", function() { return LoadingPageState; });
/**
 * 
 */

/**
 * 
 */
var LoadingPageState;

(function (_LoadingPageState) {
  /**
   * 
   */
  var INITIAL = _LoadingPageState.INITIAL = 0;
  var LOADING = _LoadingPageState.LOADING = 1;
  var FAILURE = _LoadingPageState.FAILURE = 2;
  var RESOLVED = _LoadingPageState.RESOLVED = 3;
  var ALL = _LoadingPageState.ALL = [INITIAL, LOADING, FAILURE, RESOLVED];

  function toString(state) {
    switch (state) {
      case INITIAL:
        return 'INITIAL';

      case LOADING:
        return 'LOADING';

      case FAILURE:
        return 'FAILURE';

      case RESOLVED:
        return 'RESOLVED';

      default:
        return undefined;
    }
  }

  _LoadingPageState.toString = toString;

  function toDebugString(state) {
    return 'LoadingPageState #' + state + '(' + (toString(state) || 'undefined') + ')';
  }

  _LoadingPageState.toDebugString = toDebugString;
})(LoadingPageState || (LoadingPageState = {}));

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/page/nloading/LoadingState.tsx":
/*!***************************************************!*\
  !*** ./components/page/nloading/LoadingState.tsx ***!
  \***************************************************/
/*! exports provided: LoadingState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingState", function() { return LoadingState; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Loader */ "./components/Loader.tsx");
var _jsxFileName = "D:\\development\\rpg\\shubgath\\components\\page\\loading\\LoadingState.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var HomeImage = __webpack_require__(/*! ../../../public/images/logo.svg */ "./public/images/logo.svg")["default"];
/**
 * 
 */


function LoadingState(properties) {
  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('layout layout-centered', properties.className),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "container-fluid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "row justify-content-center align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-10 col-md-8 col-lg-6 col-xl-6 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, __jsx(HomeImage, {
    className: "img-fluid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: "row justify-content-center align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-10 col-md-8 col-lg-6 col-xl-6 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }), __jsx(_Loader__WEBPACK_IMPORTED_MODULE_2__["Loader"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, "Chargement de ", properties.file.name)))));
}
/**
 * 
 */

_c = LoadingState;

(function (_LoadingState) {})(LoadingState || (LoadingState = {}));

var _c;

$RefreshReg$(_c, "LoadingState");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/page/nloading/ResolvedState.tsx":
/*!****************************************************!*\
  !*** ./components/page/nloading/ResolvedState.tsx ***!
  \****************************************************/
/*! exports provided: ResolvedState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResolvedState", function() { return ResolvedState; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\development\\rpg\\shubgath\\components\\page\\loading\\ResolvedState.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var HomeImage = __webpack_require__(/*! ../../../public/images/logo.svg */ "./public/images/logo.svg")["default"];
/**
 * 
 */


function ResolvedState(properties) {
  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('layout layout-centered', properties.className),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "container-fluid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "row justify-content-center align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-10 col-md-8 col-lg-6 col-xl-6 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, __jsx(HomeImage, {
    className: "img-fluid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: "row justify-content-center align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-10 col-md-8 col-lg-6 col-xl-6 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }), "Document charg\xE9 avec succ\xE8s !"))));
}
/**
 * 
 */

_c = ResolvedState;

(function (_ResolvedState) {})(ResolvedState || (ResolvedState = {}));

var _c;

$RefreshReg$(_c, "ResolvedState");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_page_nloading_LoadingPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/page/nloading/LoadingPage */ "./components/page/nloading/LoadingPage.tsx");
/* harmony import */ var _components_layout_VanillaLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout/VanillaLayout */ "./components/layout/VanillaLayout.tsx");

var _jsxFileName = "D:\\development\\rpg\\shubgath\\pages\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





/**
*
*/
function index(properties) {
  return __jsx(_components_layout_VanillaLayout__WEBPACK_IMPORTED_MODULE_4__["VanillaLayout"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, "Shubniggurath - Choisir un investigateur"), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  })), __jsx(_components_page_nloading_LoadingPage__WEBPACK_IMPORTED_MODULE_3__["LoadingPage"], Object(D_development_rpg_shubgath_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    cancellable: properties.investigator != null
  }, properties, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  })));
}

(function (_index) {})(index || (index = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlL2xvYWRpbmcvSW5pdGlhbFN0YXRlLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlL2xvYWRpbmcvTG9hZGluZ1BhZ2UudHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3BhZ2UvbG9hZGluZy9Mb2FkaW5nUGFnZVN0YXRlLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlL2xvYWRpbmcvTG9hZGluZ1N0YXRlLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlL2xvYWRpbmcvUmVzb2x2ZWRTdGF0ZS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJIb21lSW1hZ2UiLCJyZXF1aXJlIiwiSW5pdGlhbFN0YXRlIiwicHJvcGVydGllcyIsIl9pbnB1dCIsImhhbmRsZUlucHV0Q2hhbmdlIiwiYmluZCIsImhhbmRsZVBhZ2VDbGljayIsImhhbmRsZURyb3AiLCJoYW5kbGVTaWxlbnRBY3Rpb24iLCJoYW5kbGVDYW5jZWwiLCJSZWFjdCIsImNyZWF0ZVJlZiIsImV2ZW50IiwidGFyZ2V0IiwiZmlsZXMiLCJsZW5ndGgiLCJwcm9wcyIsIm9uU2VsZWN0aW9uIiwic3RvcFByb3BhZ2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJkcmFnZ2VkIiwiZGF0YVRyYW5zZmVyIiwiZmlsZSIsIm5hbWUiLCJlbmRzV2l0aCIsImN1cnJlbnQiLCJjbGljayIsIm9uQ2FuY2VsIiwiY2xhc3NuYW1lcyIsImNsYXNzTmFtZSIsImRpc3BsYXkiLCJjYW5jZWxsYWJsZSIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJPYmplY3QiLCJzZWFsIiwiRW1wdHkiLCJjYWxsYmFjayIsIkxvYWRpbmdQYWdlIiwiaGFuZGxlRmlsZVNlbGVjdGlvbiIsImhhbmRsZUZpbGVWYWxpZGF0aW9uIiwiaGFuZGxlRmlsZVJlZHVjdGlvbiIsImhhbmRsZUNhbmNlbGxhdGlvbiIsInN0YXRlIiwiTG9hZGluZ1BhZ2VTdGF0ZSIsIklOSVRJQUwiLCJ1bmRlZmluZWQiLCJzb3VyY2UiLCJlcnJvciIsIm9uQ2hhbmdlIiwiQXBwbGljYXRpb25FdmVudCIsInNob3dJbnZlc3RpZ2F0b3JQYWdlIiwidmFsaWRhdGlvbiIsInZhbHVlIiwic2V0U3RhdGUiLCJSRVNPTFZFRCIsInVzZSIsIlVuaWRvY0ZpbGVTeW1ib2xQcm9kdWNlciIsImNyZWF0ZSIsImV2ZW50cyIsInBhcnNlIiwidG9rZW5pemUiLCJ2YWxpZGF0b3IiLCJVbmlkb2NWYWxpZGF0b3IiLCJraXNzIiwiVW5pZG9jQ29tbWFuZCIsInZhbGlkYXRlVW5pZG9jIiwiZmFjdG9yeSIsIkludmVzdGlnYXRvckNvbW1hbmQiLCJ2YWxpZGF0ZSIsInN1YnNjcmliZSIsInJlZHVjZXIiLCJVbmlkb2NSZWR1Y2VyIiwicmVkdWNlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIlVuaWRvY1Byb2R1Y2VyRXZlbnQiLCJQUk9EVUNUSU9OIiwiTE9BRElORyIsInJlYWQiLCJyZW5kZXJJbml0aWFsU3RhdGUiLCJyZW5kZXJMb2FkaW5nU3RhdGUiLCJyZW5kZXJSZXNvbHZlZFN0YXRlIiwiRXJyb3IiLCJ0b0RlYnVnU3RyaW5nIiwiQ29tcG9uZW50IiwiRkFJTFVSRSIsIkFMTCIsInRvU3RyaW5nIiwiTG9hZGluZ1N0YXRlIiwiUmVzb2x2ZWRTdGF0ZSIsImluZGV4IiwiaW52ZXN0aWdhdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxtQkFBTyxDQUFDLGlFQUFELENBQVAsV0FBbEI7QUFFQTtBQUNBO0FBQ0E7OztBQUNPLElBQU1DLFlBQWI7QUFBQTs7QUFBQTs7QUFDRTtBQUNGO0FBQ0E7O0FBUUU7QUFDRjtBQUNBOztBQUdFO0FBQ0Y7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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTkYsQ0FERjtBQVVEOzt1QkFHZ0J3RixLLEtBQUFBLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMThiYWMzNTYxMDIyMmJhYWM0OTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcclxuXHJcbmltcG9ydCB7IEVtcHR5IH0gZnJvbSAnLi4vLi4vLi4vdHlwZXNjcmlwdC91dGlscy9FbXB0eSdcclxuXHJcbmNvbnN0IEhvbWVJbWFnZSA9IHJlcXVpcmUoJy4uLy4uLy4uL3B1YmxpYy9pbWFnZXMvbG9nby5zdmcnKS5kZWZhdWx0XHJcblxyXG4vKipcclxuICogXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgSW5pdGlhbFN0YXRlIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxJbml0aWFsU3RhdGUuUHJvcGVydGllcz4ge1xyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgZGVmYXVsdFByb3BzOiBJbml0aWFsU3RhdGUuUHJvcGVydGllcyA9IE9iamVjdC5zZWFsKHtcclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIG9uU2VsZWN0aW9uOiBFbXB0eS5jYWxsYmFja1xyXG4gIH0pXHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgX2lucHV0OiBSZWFjdC5SZWZPYmplY3Q8SFRNTElucHV0RWxlbWVudD5cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yIChwcm9wZXJ0aWVzOiBJbml0aWFsU3RhdGUuUHJvcGVydGllcykge1xyXG4gICAgc3VwZXIocHJvcGVydGllcylcclxuXHJcbiAgICB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlID0gdGhpcy5oYW5kbGVJbnB1dENoYW5nZS5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmhhbmRsZVBhZ2VDbGljayA9IHRoaXMuaGFuZGxlUGFnZUNsaWNrLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlRHJvcCA9IHRoaXMuaGFuZGxlRHJvcC5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmhhbmRsZVNpbGVudEFjdGlvbiA9IHRoaXMuaGFuZGxlU2lsZW50QWN0aW9uLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlQ2FuY2VsID0gdGhpcy5oYW5kbGVDYW5jZWwuYmluZCh0aGlzKVxyXG5cclxuICAgIHRoaXMuX2lucHV0ID0gUmVhY3QuY3JlYXRlUmVmKClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHByaXZhdGUgaGFuZGxlSW5wdXRDaGFuZ2UoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KTogdm9pZCB7XHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmZpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdGlvbihldmVudC50YXJnZXQuZmlsZXNbMF0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwcml2YXRlIGhhbmRsZVNpbGVudEFjdGlvbihldmVudDogUmVhY3QuU3ludGhldGljRXZlbnQpOiB2b2lkIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwcml2YXRlIGhhbmRsZURyb3AoZXZlbnQ6IFJlYWN0LkRyYWdFdmVudDxIVE1MSW5wdXRFbGVtZW50Pik6IHZvaWQge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICBjb25zdCBkcmFnZ2VkOiBEYXRhVHJhbnNmZXIgPSBldmVudC5kYXRhVHJhbnNmZXJcclxuXHJcbiAgICBpZiAoZHJhZ2dlZC5maWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGZvciAoY29uc3QgZmlsZSBvZiBkcmFnZ2VkLmZpbGVzKSB7XHJcbiAgICAgICAgaWYgKGZpbGUubmFtZS5lbmRzV2l0aCgnLnNoZWV0LnVuaWRvYycpKSB7XHJcbiAgICAgICAgICB0aGlzLnByb3BzLm9uU2VsZWN0aW9uKGZpbGUpXHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBoYW5kbGVQYWdlQ2xpY2soZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KTogdm9pZCB7XHJcbiAgICB0aGlzLl9pbnB1dC5jdXJyZW50LmNsaWNrKClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHByaXZhdGUgaGFuZGxlQ2FuY2VsKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50Pik6IHZvaWQge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcclxuXHJcbiAgICB0aGlzLnByb3BzLm9uQ2FuY2VsKClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyByZW5kZXIgKCkgOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBcclxuICAgICAgICBvbkRyb3A9e3RoaXMuaGFuZGxlRHJvcH0gXHJcbiAgICAgICAgb25EcmFnRW50ZXI9e3RoaXMuaGFuZGxlU2lsZW50QWN0aW9ufVxyXG4gICAgICAgIG9uRHJhZ092ZXI9e3RoaXMuaGFuZGxlU2lsZW50QWN0aW9ufVxyXG4gICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlUGFnZUNsaWNrfSBcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ2xheW91dCBsYXlvdXQtY2VudGVyZWQgaXMtY2xpY2thYmxlJywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lci1mbHVpZCc+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC0xMCBjb2wtbWQtOCBjb2wtbGctNiBjb2wteGwtNiB0ZXh0LWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgPEhvbWVJbWFnZSBjbGFzc05hbWU9J2ltZy1mbHVpZCcgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTEwIGNvbC1tZC04IGNvbC1sZy02IGNvbC14bC02IHRleHQtY2VudGVyJz5cclxuICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICBEw6lwb3NleiB1bmUgZmV1aWxsZSBkZSBwZXJzb25uYWdlIG91IGNsaXF1ZXogcG91ciBlbiBjaG9pc2lyIHVuZS5cclxuICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgICAgIHJlZj17dGhpcy5faW5wdXR9IFxyXG4gICAgICAgICAgICAgICAgdHlwZT0nZmlsZScgXHJcbiAgICAgICAgICAgICAgICBhY2NlcHQ9Jy5zaGVldC51bmlkb2MsLnVuaWRvYyx0ZXh0L3BsYWluJyBcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLmNhbmNlbGxhYmxlID8gPGJyLz4gOiBudWxsIH1cclxuICAgICAgICAgICAgICB7IHRoaXMucHJvcHMuY2FuY2VsbGFibGUgPyA8YnIvPiA6IG51bGwgfVxyXG4gICAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5jYW5jZWxsYWJsZSA/IDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLWxpbmsgYnRuLWJsb2NrJyBvbkNsaWNrPXt0aGlzLmhhbmRsZUNhbmNlbH0+QW5udWxlcjwvYnV0dG9uPiA6IG51bGwgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcclxuICovXHJcbmV4cG9ydCBuYW1lc3BhY2UgSW5pdGlhbFN0YXRlIHtcclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBleHBvcnQgdHlwZSBTZWxlY3Rpb25DYWxsYmFjayA9IChmaWxlOiBGaWxlKSA9PiB2b2lkXHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIGV4cG9ydCB0eXBlIFByb3BlcnRpZXMgPSB7XHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmcgfCB1bmRlZmluZWQsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgY2FuY2VsbGFibGU/OiBib29sZWFuLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIG9uU2VsZWN0aW9uPzogU2VsZWN0aW9uQ2FsbGJhY2ssXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgb25DYW5jZWw/OiAoKSA9PiB2b2lkIHwgdW5kZWZpbmVkXHJcbiAgfVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBcclxuICB0b2tlbml6ZSwgXHJcbiAgcGFyc2UsXHJcbiAgVW5pZG9jRXZlbnQsIFxyXG4gIFVuaWRvY1Byb2R1Y2VyLCBcclxuICBVbmlkb2NQcm9kdWNlckV2ZW50LCBcclxuICBVbmlkb2NSZWR1Y2VyLCBcclxuICBVbmlkb2NWYWxpZGF0aW9uRXZlbnQsXHJcbiAgVW5pZG9jVmFsaWRhdG9yIFxyXG59IGZyb20gJ0BjZWRyaWMtZGVtb25naXZlcnQvdW5pZG9jJ1xyXG5cclxuaW1wb3J0IHsgVW5pZG9jQ29tbWFuZCB9IGZyb20gJy4uLy4uLy4uL3R5cGVzY3JpcHQvdW5pZG9jL1VuaWRvY0NvbW1hbmQnXHJcbmltcG9ydCB7IEludmVzdGlnYXRvckNvbW1hbmQgfSBmcm9tICcuLi8uLi8uLi90eXBlc2NyaXB0L3VuaWRvYy9JbnZlc3RpZ2F0b3JDb21tYW5kJ1xyXG5pbXBvcnQgeyBJbnZlc3RpZ2F0b3IgfSBmcm9tICcuLi8uLi8uLi90eXBlc2NyaXB0L0ludmVzdGlnYXRvcidcclxuaW1wb3J0IHsgVW5pZG9jRmlsZVN5bWJvbFByb2R1Y2VyIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXNjcmlwdC91bmlkb2MvVW5pZG9jRmlsZVN5bWJvbFByb2R1Y2VyJ1xyXG5pbXBvcnQgeyBFbXB0eSB9IGZyb20gJy4uLy4uLy4uL3R5cGVzY3JpcHQvdXRpbHMnXHJcblxyXG5pbXBvcnQgeyBJbml0aWFsU3RhdGUgfSBmcm9tICcuL0luaXRpYWxTdGF0ZSdcclxuaW1wb3J0IHsgTG9hZGluZ1N0YXRlIH0gZnJvbSAnLi9Mb2FkaW5nU3RhdGUnXHJcbmltcG9ydCB7IFJlc29sdmVkU3RhdGUgfSBmcm9tICcuL1Jlc29sdmVkU3RhdGUnXHJcbmltcG9ydCB7IExvYWRpbmdQYWdlU3RhdGUgfSBmcm9tICcuL0xvYWRpbmdQYWdlU3RhdGUnXHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uRXZlbnQgfSBmcm9tICcuLi8uLi8uLi90eXBlc2NyaXB0L2FwcGxpY2F0aW9uL0FwcGxpY2F0aW9uRXZlbnQnXHJcblxyXG4vKipcclxuICogXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTG9hZGluZ1BhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8TG9hZGluZ1BhZ2UuUHJvcGVydGllcywgTG9hZGluZ1BhZ2UuU3RhdGU+IHtcclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGRlZmF1bHRQcm9wczogUmVhZG9ubHk8TG9hZGluZ1BhZ2UuUHJvcGVydGllcz4gPSB7XHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBvbkNoYW5nZTogRW1wdHkuY2FsbGJhY2tcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvciAocHJvcGVydGllczogTG9hZGluZ1BhZ2UuUHJvcGVydGllcykge1xyXG4gICAgc3VwZXIocHJvcGVydGllcylcclxuXHJcbiAgICB0aGlzLmhhbmRsZUZpbGVTZWxlY3Rpb24gPSB0aGlzLmhhbmRsZUZpbGVTZWxlY3Rpb24uYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVGaWxlVmFsaWRhdGlvbiA9IHRoaXMuaGFuZGxlRmlsZVZhbGlkYXRpb24uYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVGaWxlUmVkdWN0aW9uID0gdGhpcy5oYW5kbGVGaWxlUmVkdWN0aW9uLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlQ2FuY2VsbGF0aW9uID0gdGhpcy5oYW5kbGVDYW5jZWxsYXRpb24uYmluZCh0aGlzKVxyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHN0YXRlOiBMb2FkaW5nUGFnZVN0YXRlLklOSVRJQUwsXHJcbiAgICAgIGZpbGU6IHVuZGVmaW5lZCxcclxuICAgICAgc291cmNlOiB1bmRlZmluZWQsXHJcbiAgICAgIGVycm9yOiB1bmRlZmluZWRcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHByaXZhdGUgaGFuZGxlQ2FuY2VsbGF0aW9uICgpIDogdm9pZCB7XHJcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKEFwcGxpY2F0aW9uRXZlbnQuc2hvd0ludmVzdGlnYXRvclBhZ2UoKSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHByaXZhdGUgaGFuZGxlRmlsZVZhbGlkYXRpb24gKHZhbGlkYXRpb246IFVuaWRvY1ZhbGlkYXRpb25FdmVudCkgOiB2b2lkIHtcclxuICAgIC8vIEBUT0RPIGVycm9yLWNoZWNrXHJcbiAgICAvL2NvbnNvbGUubG9nKHZhbGlkYXRpb24udG9TdHJpbmcoKSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHByaXZhdGUgaGFuZGxlRmlsZVJlZHVjdGlvbiAodmFsdWU6IEludmVzdGlnYXRvcikgOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBcclxuICAgICAgc3RhdGU6IExvYWRpbmdQYWdlU3RhdGUuUkVTT0xWRURcclxuICAgIH0pXHJcblxyXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShBcHBsaWNhdGlvbkV2ZW50LnVzZSh2YWx1ZSkpXHJcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKEFwcGxpY2F0aW9uRXZlbnQuc2hvd0ludmVzdGlnYXRvclBhZ2UoKSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHByaXZhdGUgaGFuZGxlRmlsZVNlbGVjdGlvbihmaWxlOiBGaWxlKTogdm9pZCB7XHJcbiAgICBjb25zdCBzb3VyY2U6IFVuaWRvY0ZpbGVTeW1ib2xQcm9kdWNlciA9IFVuaWRvY0ZpbGVTeW1ib2xQcm9kdWNlci5jcmVhdGUoZmlsZSlcclxuICAgIGNvbnN0IGV2ZW50czogVW5pZG9jUHJvZHVjZXI8VW5pZG9jRXZlbnQ+ID0gcGFyc2UodG9rZW5pemUoc291cmNlKSlcclxuICAgIGNvbnN0IHZhbGlkYXRvcjogVW5pZG9jVmFsaWRhdG9yID0gVW5pZG9jVmFsaWRhdG9yLmtpc3MoVW5pZG9jQ29tbWFuZC52YWxpZGF0ZVVuaWRvYy5mYWN0b3J5KEludmVzdGlnYXRvckNvbW1hbmQudmFsaWRhdGUpKVxyXG5cclxuICAgIHZhbGlkYXRvci5zdWJzY3JpYmUoZXZlbnRzKVxyXG5cclxuICAgIGNvbnN0IHJlZHVjZXI6IFVuaWRvY1Byb2R1Y2VyPEludmVzdGlnYXRvcj4gPSBVbmlkb2NSZWR1Y2VyLnJlZHVjZS52YWxpZGF0aW9uKHZhbGlkYXRvciwgVW5pZG9jQ29tbWFuZC5yZWR1Y2UuZmFjdG9yeShJbnZlc3RpZ2F0b3JDb21tYW5kLnJlZHVjZSkpXHJcblxyXG4gICAgdmFsaWRhdG9yLmFkZEV2ZW50TGlzdGVuZXIoVW5pZG9jUHJvZHVjZXJFdmVudC5QUk9EVUNUSU9OLCB0aGlzLmhhbmRsZUZpbGVWYWxpZGF0aW9uKVxyXG4gICAgcmVkdWNlci5hZGRFdmVudExpc3RlbmVyKFVuaWRvY1Byb2R1Y2VyRXZlbnQuUFJPRFVDVElPTiwgdGhpcy5oYW5kbGVGaWxlUmVkdWN0aW9uKVxyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBcclxuICAgICAgc3RhdGU6IExvYWRpbmdQYWdlU3RhdGUuTE9BRElORyxcclxuICAgICAgZmlsZSxcclxuICAgICAgc291cmNlLFxyXG4gICAgICBlcnJvcjogdW5kZWZpbmVkXHJcbiAgICB9LCBzb3VyY2UucmVhZC5iaW5kKHNvdXJjZSkpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgcmVuZGVyICgpIDogUmVhY3QuUmVhY3RFbGVtZW50IHtcclxuICAgIHN3aXRjaCAodGhpcy5zdGF0ZS5zdGF0ZSkge1xyXG4gICAgICBjYXNlIExvYWRpbmdQYWdlU3RhdGUuSU5JVElBTDpcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJJbml0aWFsU3RhdGUoKVxyXG4gICAgICBjYXNlIExvYWRpbmdQYWdlU3RhdGUuTE9BRElORzpcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJMb2FkaW5nU3RhdGUoKVxyXG4gICAgICAgIGNhc2UgTG9hZGluZ1BhZ2VTdGF0ZS5SRVNPTFZFRDpcclxuICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlclJlc29sdmVkU3RhdGUoKVxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAgICdVbmFibGUgdG8gcmVuZGVyIGxvYWRpbmcgcGFnZSBpbiBzdGF0ZSAnICsgTG9hZGluZ1BhZ2VTdGF0ZS50b0RlYnVnU3RyaW5nKHRoaXMuc3RhdGUuc3RhdGUpICsgXHJcbiAgICAgICAgICAnIGJlY2F1c2Ugbm8gcmVuZGVyaW5nIGZhY3Rvcnkgd2FzIGRlZmluZWQgZm9yIHRoYXQuJ1xyXG4gICAgICAgIClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyByZW5kZXJJbml0aWFsU3RhdGUgKCk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XHJcbiAgICByZXR1cm4gPEluaXRpYWxTdGF0ZSBcclxuICAgICAgY2FuY2VsbGFibGU9e3RoaXMucHJvcHMuY2FuY2VsbGFibGV9IFxyXG4gICAgICBvbkNhbmNlbD17dGhpcy5oYW5kbGVDYW5jZWxsYXRpb259IFxyXG4gICAgICBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfSBcclxuICAgICAgb25TZWxlY3Rpb249e3RoaXMuaGFuZGxlRmlsZVNlbGVjdGlvbn0gXHJcbiAgICAvPlxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIHJlbmRlckxvYWRpbmdTdGF0ZSAoKTogUmVhY3QuUmVhY3RFbGVtZW50IHtcclxuICAgIHJldHVybiA8TG9hZGluZ1N0YXRlIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9IGZpbGU9e3RoaXMuc3RhdGUuZmlsZX0gLz5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyByZW5kZXJSZXNvbHZlZFN0YXRlICgpOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xyXG4gICAgcmV0dXJuIDxSZXNvbHZlZFN0YXRlIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9IC8+XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogXHJcbiAqL1xyXG5leHBvcnQgbmFtZXNwYWNlIExvYWRpbmdQYWdlIHtcclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBleHBvcnQgdHlwZSBBcHBsaWNhdGlvbkNhbGxiYWNrID0gKGV2ZW50OiBBcHBsaWNhdGlvbkV2ZW50KSA9PiB2b2lkXHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIGV4cG9ydCB0eXBlIFByb3BlcnRpZXMgPSB7XHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmcgfCB1bmRlZmluZWQsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgY2FuY2VsbGFibGU/OiBib29sZWFuIHwgdW5kZWZpbmVkLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIG9uQ2hhbmdlPzogQXBwbGljYXRpb25DYWxsYmFjayB8IHVuZGVmaW5lZFxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgZXhwb3J0IHR5cGUgSW5pdGlhbFN0YXRlID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgc3RhdGU6IExvYWRpbmdQYWdlU3RhdGUuSU5JVElBTCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBmaWxlOiB1bmRlZmluZWQsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgc291cmNlOiB1bmRlZmluZWQsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgZXJyb3I6IHVuZGVmaW5lZFxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgZXhwb3J0IHR5cGUgTG9hZGluZ1N0YXRlID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgc3RhdGU6IExvYWRpbmdQYWdlU3RhdGUuTE9BRElORyxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBmaWxlOiBGaWxlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIHNvdXJjZTogVW5pZG9jRmlsZVN5bWJvbFByb2R1Y2VyLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIGVycm9yOiB1bmRlZmluZWRcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIGV4cG9ydCB0eXBlIEZhaWx1cmVTdGF0ZSA9IHtcclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIHN0YXRlOiBMb2FkaW5nUGFnZVN0YXRlLkZBSUxVUkUsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgZmlsZTogRmlsZSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBzb3VyY2U6IFVuaWRvY0ZpbGVTeW1ib2xQcm9kdWNlcixcclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBlcnJvcjogRXJyb3JcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIGV4cG9ydCB0eXBlIFJlc29sdmVkU3RhdGUgPSB7XHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBzdGF0ZTogTG9hZGluZ1BhZ2VTdGF0ZS5SRVNPTFZFRCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBmaWxlOiBGaWxlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIHNvdXJjZTogVW5pZG9jRmlsZVN5bWJvbFByb2R1Y2VyLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIGVycm9yOiB1bmRlZmluZWRcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIGV4cG9ydCB0eXBlIFN0YXRlID0gSW5pdGlhbFN0YXRlIHwgTG9hZGluZ1N0YXRlIHwgRmFpbHVyZVN0YXRlIHwgUmVzb2x2ZWRTdGF0ZVxyXG59IiwiLyoqXHJcbiAqIFxyXG4gKi9cclxuZXhwb3J0IHR5cGUgTG9hZGluZ1BhZ2VTdGF0ZSA9IChcclxuICBMb2FkaW5nUGFnZVN0YXRlLklOSVRJQUwgfFxyXG4gIExvYWRpbmdQYWdlU3RhdGUuTE9BRElORyB8XHJcbiAgTG9hZGluZ1BhZ2VTdGF0ZS5GQUlMVVJFIHxcclxuICBMb2FkaW5nUGFnZVN0YXRlLlJFU09MVkVEXHJcbilcclxuXHJcbi8qKlxyXG4gKiBcclxuICovXHJcbmV4cG9ydCBuYW1lc3BhY2UgTG9hZGluZ1BhZ2VTdGF0ZSB7XHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgZXhwb3J0IHR5cGUgSU5JVElBTCA9IDBcclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgZXhwb3J0IGNvbnN0IElOSVRJQUwgOiBJTklUSUFMID0gMFxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBleHBvcnQgdHlwZSBMT0FESU5HID0gMVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBleHBvcnQgY29uc3QgTE9BRElORyA6IExPQURJTkcgPSAxXHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIGV4cG9ydCB0eXBlIEZBSUxVUkUgPSAyXHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIGV4cG9ydCBjb25zdCBGQUlMVVJFIDogRkFJTFVSRSA9IDJcclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgZXhwb3J0IHR5cGUgUkVTT0xWRUQgPSAzXHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIGV4cG9ydCBjb25zdCBSRVNPTFZFRCA6IFJFU09MVkVEID0gM1xyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBleHBvcnQgY29uc3QgQUxMOiBMb2FkaW5nUGFnZVN0YXRlW10gPSBbXHJcbiAgICBJTklUSUFMLFxyXG4gICAgTE9BRElORyxcclxuICAgIEZBSUxVUkUsXHJcbiAgICBSRVNPTFZFRFxyXG4gIF1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIHRvU3RyaW5nKHN0YXRlOiBMb2FkaW5nUGFnZVN0YXRlKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcclxuICAgIHN3aXRjaCAoc3RhdGUpIHtcclxuICAgICAgY2FzZSBJTklUSUFMOiByZXR1cm4gJ0lOSVRJQUwnXHJcbiAgICAgIGNhc2UgTE9BRElORzogcmV0dXJuICdMT0FESU5HJ1xyXG4gICAgICBjYXNlIEZBSUxVUkU6IHJldHVybiAnRkFJTFVSRSdcclxuICAgICAgY2FzZSBSRVNPTFZFRDogcmV0dXJuICdSRVNPTFZFRCdcclxuICAgICAgZGVmYXVsdDogcmV0dXJuIHVuZGVmaW5lZFxyXG4gICAgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBleHBvcnQgZnVuY3Rpb24gdG9EZWJ1Z1N0cmluZyhzdGF0ZTogTG9hZGluZ1BhZ2VTdGF0ZSk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XHJcbiAgICByZXR1cm4gJ0xvYWRpbmdQYWdlU3RhdGUgIycgKyBzdGF0ZSArICcoJyArICh0b1N0cmluZyhzdGF0ZSkgfHwgJ3VuZGVmaW5lZCcpICsgJyknXHJcbiAgfVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xyXG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tICcuLi8uLi9Mb2FkZXInXHJcblxyXG5jb25zdCBIb21lSW1hZ2UgPSByZXF1aXJlKCcuLi8uLi8uLi9wdWJsaWMvaW1hZ2VzL2xvZ28uc3ZnJykuZGVmYXVsdFxyXG5cclxuLyoqXHJcbiAqIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIExvYWRpbmdTdGF0ZSAocHJvcGVydGllczogTG9hZGluZ1N0YXRlLlByb3BlcnRpZXMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ2xheW91dCBsYXlvdXQtY2VudGVyZWQnLCBwcm9wZXJ0aWVzLmNsYXNzTmFtZSl9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyLWZsdWlkJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtMTAgY29sLW1kLTggY29sLWxnLTYgY29sLXhsLTYgdGV4dC1jZW50ZXInPlxyXG4gICAgICAgICAgICA8SG9tZUltYWdlIGNsYXNzTmFtZT0naW1nLWZsdWlkJyAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTEwIGNvbC1tZC04IGNvbC1sZy02IGNvbC14bC02IHRleHQtY2VudGVyJz5cclxuICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgPExvYWRlcj5DaGFyZ2VtZW50IGRlIHtwcm9wZXJ0aWVzLmZpbGUubmFtZX08L0xvYWRlcj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuLyoqXHJcbiAqIFxyXG4gKi9cclxuZXhwb3J0IG5hbWVzcGFjZSBMb2FkaW5nU3RhdGUge1xyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIGV4cG9ydCB0eXBlIFByb3BlcnRpZXMgPSB7XHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmcgfCB1bmRlZmluZWQsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgZmlsZTogRmlsZVxyXG4gIH1cclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcclxuXHJcbmNvbnN0IEhvbWVJbWFnZSA9IHJlcXVpcmUoJy4uLy4uLy4uL3B1YmxpYy9pbWFnZXMvbG9nby5zdmcnKS5kZWZhdWx0XHJcblxyXG4vKipcclxuICogXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gUmVzb2x2ZWRTdGF0ZSAocHJvcGVydGllczogUmVzb2x2ZWRTdGF0ZS5Qcm9wZXJ0aWVzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdsYXlvdXQgbGF5b3V0LWNlbnRlcmVkJywgcHJvcGVydGllcy5jbGFzc05hbWUpfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lci1mbHVpZCc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTEwIGNvbC1tZC04IGNvbC1sZy02IGNvbC14bC02IHRleHQtY2VudGVyJz5cclxuICAgICAgICAgICAgPEhvbWVJbWFnZSBjbGFzc05hbWU9J2ltZy1mbHVpZCcgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC0xMCBjb2wtbWQtOCBjb2wtbGctNiBjb2wteGwtNiB0ZXh0LWNlbnRlcic+XHJcbiAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIERvY3VtZW50IGNoYXJnw6kgYXZlYyBzdWNjw6hzICFcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuLyoqXHJcbiAqIFxyXG4gKi9cclxuZXhwb3J0IG5hbWVzcGFjZSBSZXNvbHZlZFN0YXRlIHtcclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBleHBvcnQgdHlwZSBQcm9wZXJ0aWVzID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nIHwgdW5kZWZpbmVkXHJcbiAgfVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUmVhY3RFbGVtZW50IH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuaW1wb3J0IHsgTG9hZGluZ1BhZ2UgfSBmcm9tICcuLi9jb21wb25lbnRzL3BhZ2UvbmxvYWRpbmcvTG9hZGluZ1BhZ2UnXG5pbXBvcnQgeyBWYW5pbGxhTGF5b3V0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvVmFuaWxsYUxheW91dCdcbmltcG9ydCB7IEludmVzdGlnYXRvciB9IGZyb20gJy4uL3R5cGVzY3JpcHQvSW52ZXN0aWdhdG9yJ1xuaW1wb3J0IHsgQXBwbGljYXRpb25FdmVudCB9IGZyb20gJy4uL3R5cGVzY3JpcHQvYXBwbGljYXRpb24vQXBwbGljYXRpb25FdmVudCdcblxuLyoqXG4qXG4qL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5kZXggKHByb3BlcnRpZXMgOiBpbmRleC5Qcm9wZXJ0aWVzKSA6IFJlYWN0RWxlbWVudCB7XG4gIHJldHVybiAoXG4gICAgPFZhbmlsbGFMYXlvdXQ+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlNodWJuaWdndXJhdGggLSBDaG9pc2lyIHVuIGludmVzdGlnYXRldXI8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0naW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aCcgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPExvYWRpbmdQYWdlIGNhbmNlbGxhYmxlPXtwcm9wZXJ0aWVzLmludmVzdGlnYXRvciAhPSBudWxsfSB7Li4ucHJvcGVydGllc30gLz5cbiAgICA8L1ZhbmlsbGFMYXlvdXQ+XG4gIClcbn1cblxuXG5leHBvcnQgbmFtZXNwYWNlIGluZGV4IHtcbiAgLyoqXG4gICAqIFxuICAgKi9cbiAgZXhwb3J0IHR5cGUgQXBwbGljYXRpb25DYWxsYmFjayA9IChldmVudDogQXBwbGljYXRpb25FdmVudCkgPT4gdm9pZFxuICBcbiAgLyoqXG4gICpcbiAgKi9cbiAgZXhwb3J0IHR5cGUgUHJvcGVydGllcyA9IHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKi9cbiAgICBpbnZlc3RpZ2F0b3I6IEludmVzdGlnYXRvciB8IHVuZGVmaW5lZCxcblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqL1xuICAgIG9uQ2hhbmdlPzogQXBwbGljYXRpb25DYWxsYmFjayB8IHVuZGVmaW5lZFxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9
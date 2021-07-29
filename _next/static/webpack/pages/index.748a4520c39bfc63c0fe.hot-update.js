webpackHotUpdate_N_E("pages/index",{

/***/ "./components/page/loading/LoadingPage.tsx":
/*!*************************************************!*\
  !*** ./components/page/loading/LoadingPage.tsx ***!
  \*************************************************/
/*! exports provided: LoadingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingPage", function() { return LoadingPage; });
/* harmony import */ var D_development_rpg_shubgath_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_development_rpg_shubgath_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_development_rpg_shubgath_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var D_development_rpg_shubgath_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var D_development_rpg_shubgath_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var D_development_rpg_shubgath_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @cedric-demongivert/unidoc */ "./node_modules/@cedric-demongivert/unidoc/index.js");
/* harmony import */ var _cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _typescript_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../typescript/utils */ "./typescript/utils/index.ts");
/* harmony import */ var _typescript_unidoc_UnidocFileSymbolProducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../typescript/unidoc/UnidocFileSymbolProducer */ "./typescript/unidoc/UnidocFileSymbolProducer.ts");
/* harmony import */ var _typescript_unidoc_UnidocCommand__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../typescript/unidoc/UnidocCommand */ "./typescript/unidoc/UnidocCommand.ts");
/* harmony import */ var _typescript_unidoc_InvestigatorCommand__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../typescript/unidoc/InvestigatorCommand */ "./typescript/unidoc/InvestigatorCommand.ts");
/* harmony import */ var _typescript_application_ApplicationEvent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../typescript/application/ApplicationEvent */ "./typescript/application/ApplicationEvent.ts");
/* harmony import */ var _typescript_Investigator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../typescript/Investigator */ "./typescript/Investigator.ts");
/* harmony import */ var _Images__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../Images */ "./components/Images.tsx");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../Loader */ "./components/Loader.tsx");
/* harmony import */ var _StaticSlideshow__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../StaticSlideshow */ "./components/StaticSlideshow.tsx");
/* harmony import */ var _Premades__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Premades */ "./components/page/loading/Premades.ts");
/* harmony import */ var _LoadingPageState__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./LoadingPageState */ "./components/page/loading/LoadingPageState.tsx");
/* harmony import */ var _Slide__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../Slide */ "./components/Slide.tsx");






var _jsxFileName = "D:\\development\\rpg\\shubgath\\components\\page\\loading\\LoadingPage.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(D_development_rpg_shubgath_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(D_development_rpg_shubgath_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(D_development_rpg_shubgath_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
















/**
 * 
 */

var LoadingPage = /*#__PURE__*/function (_React$Component) {
  Object(D_development_rpg_shubgath_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(LoadingPage, _React$Component);

  var _super = _createSuper(LoadingPage);

  /**
   * 
   */

  /**
   * 
   */

  /**
   * 
   */
  function LoadingPage(properties) {
    var _this;

    Object(D_development_rpg_shubgath_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LoadingPage);

    _this = _super.call(this, properties);
    _this._input = void 0;
    _this.state = {
      premades: undefined,
      state: _LoadingPageState__WEBPACK_IMPORTED_MODULE_19__["LoadingPageState"].INITIAL,
      file: undefined,
      scroll: 0,
      mouse: -1
    };
    _this.handlePremadesLoading = _this.handlePremadesLoading.bind(Object(D_development_rpg_shubgath_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handlePremadeRendering = _this.handlePremadeRendering.bind(Object(D_development_rpg_shubgath_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handlePremadeSlideRendering = _this.handlePremadeSlideRendering.bind(Object(D_development_rpg_shubgath_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handleInputChange = _this.handleInputChange.bind(Object(D_development_rpg_shubgath_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handleDrop = _this.handleDrop.bind(Object(D_development_rpg_shubgath_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handleSilentAction = _this.handleSilentAction.bind(Object(D_development_rpg_shubgath_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handleCancel = _this.handleCancel.bind(Object(D_development_rpg_shubgath_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handleFileSelection = _this.handleFileSelection.bind(Object(D_development_rpg_shubgath_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handleFileValidation = _this.handleFileValidation.bind(Object(D_development_rpg_shubgath_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handleFileReduction = _this.handleFileReduction.bind(Object(D_development_rpg_shubgath_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handleCancellation = _this.handleCancellation.bind(Object(D_development_rpg_shubgath_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handleClick = _this.handleClick.bind(Object(D_development_rpg_shubgath_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handleScroll = _this.handleScroll.bind(Object(D_development_rpg_shubgath_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handleMouseEnterOption = _this.handleMouseEnterOption.bind(Object(D_development_rpg_shubgath_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handleMouseClickOption = _this.handleMouseClickOption.bind(Object(D_development_rpg_shubgath_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handleMouseLeaveOption = _this.handleMouseLeaveOption.bind(Object(D_development_rpg_shubgath_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this._input = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();
    _Premades__WEBPACK_IMPORTED_MODULE_18__["Premades"].load().then(_this.handlePremadesLoading);
    return _this;
  }
  /**
   * 
   */


  Object(D_development_rpg_shubgath_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LoadingPage, [{
    key: "handleMouseClickOption",
    value: function handleMouseClickOption(event) {
      console.log('handleMouseClick');
      event.stopPropagation();
      event.nativeEvent.stopPropagation();
      this.handleMouseEnterOption(event);
      this.handleClick();
    }
    /**
     * 
     */

  }, {
    key: "handleMouseEnterOption",
    value: function handleMouseEnterOption(event) {
      var target = event.currentTarget;
      var basis = target.parentNode.firstElementChild.offsetTop;
      this.setState({
        mouse: target.offsetTop - basis
      });
    }
    /**
     * 
     */

  }, {
    key: "handleMouseLeaveOption",
    value: function handleMouseLeaveOption(event) {
      this.setState({
        mouse: -1
      });
    }
    /**
     * 
     */

  }, {
    key: "handlePremadesLoading",
    value: function handlePremadesLoading(premades) {
      premades.sort(_typescript_Investigator__WEBPACK_IMPORTED_MODULE_14__["Investigator"].compareByName);
      this.setState({
        premades: premades
      });
    }
    /**
     * 
     */

  }, {
    key: "handleInputChange",
    value: function handleInputChange(event) {
      if (event.target.files.length > 0) {
        this.setState({
          state: _LoadingPageState__WEBPACK_IMPORTED_MODULE_19__["LoadingPageState"].LOADING,
          file: event.target.files[0]
        }, this.handleFileSelection.bind(undefined, event.target.files[0]));
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
            var file = _step.value;

            if (file.name.endsWith('.txt')) {
              this.setState({
                state: _LoadingPageState__WEBPACK_IMPORTED_MODULE_19__["LoadingPageState"].LOADING,
                file: file
              }, this.handleFileSelection.bind(undefined, file));
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
    key: "handleScroll",
    value: function handleScroll(event) {
      this.setState({
        scroll: event.currentTarget.scrollTop
      });
    }
    /**
     * 
     */

  }, {
    key: "handlePremadeSelection",
    value: function handlePremadeSelection(index) {
      this.props.onChange(_typescript_application_ApplicationEvent__WEBPACK_IMPORTED_MODULE_13__["ApplicationEvent"].use(this.state.premades[index]));
      this.props.onChange(_typescript_application_ApplicationEvent__WEBPACK_IMPORTED_MODULE_13__["ApplicationEvent"].showInvestigatorPage());
    }
    /**
     * 
     */

  }, {
    key: "handleClick",
    value: function handleClick() {
      console.log('handleClick');

      if (this.state.state !== _LoadingPageState__WEBPACK_IMPORTED_MODULE_19__["LoadingPageState"].INITIAL) {
        return;
      }

      var selected = this.getSelected();

      if (selected < 1) {
        this._input.current.click();
      } else if (selected === 1) {
        if (this.props.current) {
          this.handleCancellation();
        }
      } else {
        this.handlePremadeSelection(selected - 2);
      }
    }
    /**
     * 
     */

  }, {
    key: "handleCancel",
    value: function handleCancel(event) {
      event.stopPropagation();
      this.props.onChange(_typescript_application_ApplicationEvent__WEBPACK_IMPORTED_MODULE_13__["ApplicationEvent"].showInvestigatorPage());
    }
    /**
     * 
     */

  }, {
    key: "handleCancellation",
    value: function handleCancellation() {
      this.props.onChange(_typescript_application_ApplicationEvent__WEBPACK_IMPORTED_MODULE_13__["ApplicationEvent"].showInvestigatorPage());
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
        state: _LoadingPageState__WEBPACK_IMPORTED_MODULE_19__["LoadingPageState"].RESOLVED
      });
      this.props.onChange(_typescript_application_ApplicationEvent__WEBPACK_IMPORTED_MODULE_13__["ApplicationEvent"].use(value));
      this.props.onChange(_typescript_application_ApplicationEvent__WEBPACK_IMPORTED_MODULE_13__["ApplicationEvent"].showInvestigatorPage());
    }
    /**
     * 
     */

  }, {
    key: "handleFileSelection",
    value: function handleFileSelection(file) {
      var source = _typescript_unidoc_UnidocFileSymbolProducer__WEBPACK_IMPORTED_MODULE_10__["UnidocFileSymbolProducer"].create(file);
      var events = Object(_cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_8__["parse"])(Object(_cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_8__["tokenize"])(source));
      var validator = _cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_8__["UnidocValidator"].kiss(_typescript_unidoc_UnidocCommand__WEBPACK_IMPORTED_MODULE_11__["UnidocCommand"].validateUnidoc.factory(_typescript_unidoc_InvestigatorCommand__WEBPACK_IMPORTED_MODULE_12__["InvestigatorCommand"].validate));
      validator.subscribe(events);
      var reducer = _cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_8__["UnidocReducer"].reduce.validation(validator, _typescript_unidoc_UnidocCommand__WEBPACK_IMPORTED_MODULE_11__["UnidocCommand"].reduce.factory(_typescript_unidoc_InvestigatorCommand__WEBPACK_IMPORTED_MODULE_12__["InvestigatorCommand"].reduce));
      validator.on('next', this.handleFileValidation);
      reducer.on('next', this.handleFileReduction);
      this.setState({
        state: _LoadingPageState__WEBPACK_IMPORTED_MODULE_19__["LoadingPageState"].LOADING,
        file: file
      }, source.read.bind(source));
    }
    /**
     * 
     */

  }, {
    key: "getSelected",
    value: function getSelected() {
      if (this.state.mouse < 0) {
        return (this.state.scroll + 50) / 100 << 0;
      } else {
        return this.state.mouse / 100 << 0;
      }
    }
    /**
     * 
     */

  }, {
    key: "isSelected",
    value: function isSelected(index) {
      return this.getSelected() === index;
    }
    /**
     * 
     */

  }, {
    key: "isFileLoadingSelected",
    value: function isFileLoadingSelected() {
      return this.isSelected(0);
    }
    /**
     * 
     */

  }, {
    key: "isCancellationSelected",
    value: function isCancellationSelected() {
      return this.isSelected(1);
    }
    /**
     * 
     */

  }, {
    key: "isPremadeSelected",
    value: function isPremadeSelected(index) {
      return this.isSelected(index + 2);
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
        onClick: this.handleClick,
        className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('layout layout-loading-page', this.props.className),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301,
          columnNumber: 7
        }
      }, __jsx("input", {
        onChange: this.handleInputChange,
        ref: this._input,
        type: "file",
        accept: "text/plain",
        style: {
          display: 'none'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308,
          columnNumber: 9
        }
      }), __jsx("div", {
        className: "layout-loading-page-options",
        onScroll: this.handleScroll,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315,
          columnNumber: 9
        }
      }, this.renderFile(), this.renderCancellation(), this.renderPremades()), __jsx("div", {
        className: "layout-loading-page-display",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323,
          columnNumber: 9
        }
      }, __jsx(_StaticSlideshow__WEBPACK_IMPORTED_MODULE_17__["StaticSlideshow"], {
        index: this.getSelected(),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324,
          columnNumber: 11
        }
      }, this.renderFileSlide(), this.renderCancellationSlide(), this.renderPremadeSlides())));
    }
    /**
     * 
     */

  }, {
    key: "renderFile",
    value: function renderFile() {
      var selected = this.isFileLoadingSelected();
      return __jsx("button", {
        className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('loading-option', {
          'is-active': selected
        }),
        "aria-pressed": selected,
        disabled: this.state.state !== _LoadingPageState__WEBPACK_IMPORTED_MODULE_19__["LoadingPageState"].INITIAL,
        onMouseEnter: this.handleMouseEnterOption,
        onClick: this.handleMouseClickOption,
        onMouseLeave: this.handleMouseLeaveOption,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "loading-option-icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349,
          columnNumber: 9
        }
      }, __jsx("i", {
        className: "fas fa-upload",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350,
          columnNumber: 11
        }
      })), __jsx("div", {
        className: "loading-option-information",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352,
          columnNumber: 9
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353,
          columnNumber: 11
        }
      }, "Charger un document")));
    }
    /**
     * 
     */

  }, {
    key: "renderCancellation",
    value: function renderCancellation() {
      var selected = this.isSelected(1);
      return __jsx("button", {
        className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('loading-option', {
          'is-active': selected
        }),
        "aria-pressed": selected,
        disabled: !this.props.current || this.state.state !== _LoadingPageState__WEBPACK_IMPORTED_MODULE_19__["LoadingPageState"].INITIAL,
        onMouseEnter: this.handleMouseEnterOption,
        onClick: this.handleMouseClickOption,
        onMouseLeave: this.handleMouseLeaveOption,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 366,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "loading-option-icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 374,
          columnNumber: 9
        }
      }, __jsx("i", {
        className: "fas fa-undo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375,
          columnNumber: 11
        }
      })), __jsx("div", {
        className: "loading-option-information",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 377,
          columnNumber: 9
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 378,
          columnNumber: 11
        }
      }, "Retour")));
    }
    /**
     * 
     */

  }, {
    key: "renderPremades",
    value: function renderPremades() {
      if (this.state.premades) {
        return this.state.premades.map(this.handlePremadeRendering);
      } else {
        return __jsx(_Loader__WEBPACK_IMPORTED_MODULE_16__["Loader"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 391,
            columnNumber: 14
          }
        }, "Chargement des pr\xE9tir\xE9s en cours");
      }
    }
    /**
     * 
     */

  }, {
    key: "handlePremadeRendering",
    value: function handlePremadeRendering(premade, index) {
      var selected = this.isSelected(index + 2);
      return __jsx("button", {
        className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('loading-option is-premade', {
          'is-active': selected
        }),
        "aria-pressed": selected,
        disabled: this.state.state !== _LoadingPageState__WEBPACK_IMPORTED_MODULE_19__["LoadingPageState"].INITIAL,
        key: index,
        onMouseEnter: this.handleMouseEnterOption,
        onClick: this.handleMouseClickOption,
        onMouseLeave: this.handleMouseLeaveOption,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 402,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "loading-option-icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 411,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: 'sprite sprite-folder sprite-variation-' + index % 3,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 412,
          columnNumber: 11
        }
      })), __jsx("div", {
        className: "loading-option-information",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 414,
          columnNumber: 9
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 415,
          columnNumber: 11
        }
      }, premade.summary.name.toString()), __jsx("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 416,
          columnNumber: 11
        }
      }, premade.summary.job)));
    }
    /**
     * 
     */

  }, {
    key: "renderFileSlide",
    value: function renderFileSlide() {
      return __jsx(_Slide__WEBPACK_IMPORTED_MODULE_20__["Slide"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 427,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "layout layout-centered",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 428,
          columnNumber: 9
        }
      }, __jsx(_Images__WEBPACK_IMPORTED_MODULE_15__["Images"].Home, {
        className: "loading-maturin",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 429,
          columnNumber: 11
        }
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 430,
          columnNumber: 11
        }
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 431,
          columnNumber: 11
        }
      }), "S\xE9lectionner une feuille."));
    }
    /**
     * 
     */

  }, {
    key: "renderCancellationSlide",
    value: function renderCancellationSlide() {
      if (this.props.current) {
        return __jsx(_Slide__WEBPACK_IMPORTED_MODULE_20__["Slide"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 444,
            columnNumber: 9
          }
        }, __jsx("div", {
          className: "layout layout-bottom text-center",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 445,
            columnNumber: 11
          }
        }, __jsx("div", {
          className: 'sprite sprite-character sprite-variation-' + this.props.current.summary.alias.toLowerCase().replaceAll('é', 'e'),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 446,
            columnNumber: 13
          }
        })));
      } else {
        return __jsx(_Slide__WEBPACK_IMPORTED_MODULE_20__["Slide"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 452,
            columnNumber: 9
          }
        }, __jsx("div", {
          className: "layout layout-centered",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 453,
            columnNumber: 11
          }
        }, __jsx(_Images__WEBPACK_IMPORTED_MODULE_15__["Images"].Home, {
          className: "loading-maturin",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 454,
            columnNumber: 13
          }
        }), __jsx("br", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 455,
            columnNumber: 13
          }
        }), __jsx("br", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 456,
            columnNumber: 13
          }
        }), "Aucun document charg\xE9."));
      }
    }
    /**
     * 
     */

  }, {
    key: "renderPremadeSlides",
    value: function renderPremadeSlides() {
      if (this.state.premades) {
        return this.state.premades.map(this.handlePremadeSlideRendering);
      } else {
        return __jsx(_Loader__WEBPACK_IMPORTED_MODULE_16__["Loader"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 471,
            columnNumber: 14
          }
        }, "Chargement des pr\xE9tir\xE9s en cours");
      }
    }
    /**
     * 
     */

  }, {
    key: "handlePremadeSlideRendering",
    value: function handlePremadeSlideRendering(premade, index) {
      return __jsx(_Slide__WEBPACK_IMPORTED_MODULE_20__["Slide"], {
        key: index,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 480,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "layout layout-bottom text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 481,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: 'sprite sprite-character sprite-variation-' + premade.summary.alias.toLowerCase().replaceAll('é', 'e'),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 482,
          columnNumber: 11
        }
      })));
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
  onChange: _typescript_utils__WEBPACK_IMPORTED_MODULE_9__["Empty"].callback
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlL2xvYWRpbmcvTG9hZGluZ1BhZ2UudHN4Il0sIm5hbWVzIjpbIkxvYWRpbmdQYWdlIiwicHJvcGVydGllcyIsIl9pbnB1dCIsInN0YXRlIiwicHJlbWFkZXMiLCJ1bmRlZmluZWQiLCJMb2FkaW5nUGFnZVN0YXRlIiwiSU5JVElBTCIsImZpbGUiLCJzY3JvbGwiLCJtb3VzZSIsImhhbmRsZVByZW1hZGVzTG9hZGluZyIsImJpbmQiLCJoYW5kbGVQcmVtYWRlUmVuZGVyaW5nIiwiaGFuZGxlUHJlbWFkZVNsaWRlUmVuZGVyaW5nIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJoYW5kbGVEcm9wIiwiaGFuZGxlU2lsZW50QWN0aW9uIiwiaGFuZGxlQ2FuY2VsIiwiaGFuZGxlRmlsZVNlbGVjdGlvbiIsImhhbmRsZUZpbGVWYWxpZGF0aW9uIiwiaGFuZGxlRmlsZVJlZHVjdGlvbiIsImhhbmRsZUNhbmNlbGxhdGlvbiIsImhhbmRsZUNsaWNrIiwiaGFuZGxlU2Nyb2xsIiwiaGFuZGxlTW91c2VFbnRlck9wdGlvbiIsImhhbmRsZU1vdXNlQ2xpY2tPcHRpb24iLCJoYW5kbGVNb3VzZUxlYXZlT3B0aW9uIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJQcmVtYWRlcyIsImxvYWQiLCJ0aGVuIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwic3RvcFByb3BhZ2F0aW9uIiwibmF0aXZlRXZlbnQiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiYmFzaXMiLCJwYXJlbnROb2RlIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJvZmZzZXRUb3AiLCJzZXRTdGF0ZSIsInNvcnQiLCJJbnZlc3RpZ2F0b3IiLCJjb21wYXJlQnlOYW1lIiwiZmlsZXMiLCJsZW5ndGgiLCJMT0FESU5HIiwicHJldmVudERlZmF1bHQiLCJkcmFnZ2VkIiwiZGF0YVRyYW5zZmVyIiwibmFtZSIsImVuZHNXaXRoIiwic2Nyb2xsVG9wIiwiaW5kZXgiLCJwcm9wcyIsIm9uQ2hhbmdlIiwiQXBwbGljYXRpb25FdmVudCIsInVzZSIsInNob3dJbnZlc3RpZ2F0b3JQYWdlIiwic2VsZWN0ZWQiLCJnZXRTZWxlY3RlZCIsImN1cnJlbnQiLCJjbGljayIsImhhbmRsZVByZW1hZGVTZWxlY3Rpb24iLCJ2YWxpZGF0aW9uIiwidmFsdWUiLCJSRVNPTFZFRCIsInNvdXJjZSIsIlVuaWRvY0ZpbGVTeW1ib2xQcm9kdWNlciIsImNyZWF0ZSIsImV2ZW50cyIsInBhcnNlIiwidG9rZW5pemUiLCJ2YWxpZGF0b3IiLCJVbmlkb2NWYWxpZGF0b3IiLCJraXNzIiwiVW5pZG9jQ29tbWFuZCIsInZhbGlkYXRlVW5pZG9jIiwiZmFjdG9yeSIsIkludmVzdGlnYXRvckNvbW1hbmQiLCJ2YWxpZGF0ZSIsInN1YnNjcmliZSIsInJlZHVjZXIiLCJVbmlkb2NSZWR1Y2VyIiwicmVkdWNlIiwib24iLCJyZWFkIiwiaXNTZWxlY3RlZCIsImNsYXNzbmFtZXMiLCJjbGFzc05hbWUiLCJkaXNwbGF5IiwicmVuZGVyRmlsZSIsInJlbmRlckNhbmNlbGxhdGlvbiIsInJlbmRlclByZW1hZGVzIiwicmVuZGVyRmlsZVNsaWRlIiwicmVuZGVyQ2FuY2VsbGF0aW9uU2xpZGUiLCJyZW5kZXJQcmVtYWRlU2xpZGVzIiwiaXNGaWxlTG9hZGluZ1NlbGVjdGVkIiwibWFwIiwicHJlbWFkZSIsInN1bW1hcnkiLCJ0b1N0cmluZyIsImpvYiIsImFsaWFzIiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlQWxsIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwiRW1wdHkiLCJjYWxsYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTs7QUFDTyxJQUFNQSxXQUFiO0FBQUE7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LEM7OzZCQXljekRqSCxXLEtBQUFBLFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzQ4YTQ1MjBjMzliZmM2M2MwZmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcclxuaW1wb3J0IHsgXHJcbiAgdG9rZW5pemUsIFxyXG4gIHBhcnNlLFxyXG4gIFVuaWRvY0V2ZW50LCBcclxuICBVbmlkb2NQcm9kdWNlciwgXHJcbiAgVW5pZG9jUmVkdWNlciwgXHJcbiAgVW5pZG9jVmFsaWRhdGlvbkV2ZW50LFxyXG4gIFVuaWRvY1ZhbGlkYXRvciBcclxufSBmcm9tICdAY2VkcmljLWRlbW9uZ2l2ZXJ0L3VuaWRvYydcclxuXHJcbmltcG9ydCB7IEVtcHR5IH0gZnJvbSAnLi4vLi4vLi4vdHlwZXNjcmlwdC91dGlscydcclxuaW1wb3J0IHsgVW5pZG9jRmlsZVN5bWJvbFByb2R1Y2VyIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXNjcmlwdC91bmlkb2MvVW5pZG9jRmlsZVN5bWJvbFByb2R1Y2VyJ1xyXG5pbXBvcnQgeyBVbmlkb2NDb21tYW5kIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXNjcmlwdC91bmlkb2MvVW5pZG9jQ29tbWFuZCdcclxuaW1wb3J0IHsgSW52ZXN0aWdhdG9yQ29tbWFuZCB9IGZyb20gJy4uLy4uLy4uL3R5cGVzY3JpcHQvdW5pZG9jL0ludmVzdGlnYXRvckNvbW1hbmQnXHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uRXZlbnQgfSBmcm9tICcuLi8uLi8uLi90eXBlc2NyaXB0L2FwcGxpY2F0aW9uL0FwcGxpY2F0aW9uRXZlbnQnXHJcbmltcG9ydCB7IEludmVzdGlnYXRvciB9IGZyb20gJy4uLy4uLy4uL3R5cGVzY3JpcHQvSW52ZXN0aWdhdG9yJ1xyXG5cclxuaW1wb3J0IHsgSW1hZ2VzIH0gZnJvbSAnLi4vLi4vSW1hZ2VzJ1xyXG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tICcuLi8uLi9Mb2FkZXInXHJcbmltcG9ydCB7IFN0YXRpY1NsaWRlc2hvdyAgfSBmcm9tICcuLi8uLi9TdGF0aWNTbGlkZXNob3cnXHJcbmltcG9ydCB7IFByZW1hZGVzIH0gZnJvbSAnLi9QcmVtYWRlcydcclxuaW1wb3J0IHsgTG9hZGluZ1BhZ2VTdGF0ZSB9IGZyb20gJy4vTG9hZGluZ1BhZ2VTdGF0ZSdcclxuaW1wb3J0IHsgU2xpZGUgfSBmcm9tICcuLi8uLi9TbGlkZSdcclxuXHJcblxyXG4vKipcclxuICogXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTG9hZGluZ1BhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8TG9hZGluZ1BhZ2UuUHJvcGVydGllcywgTG9hZGluZ1BhZ2UuU3RhdGU+IHtcclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGRlZmF1bHRQcm9wczogUmVhZG9ubHk8TG9hZGluZ1BhZ2UuUHJvcGVydGllcz4gPSB7XHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBvbkNoYW5nZTogRW1wdHkuY2FsbGJhY2tcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgX2lucHV0OiBSZWFjdC5SZWZPYmplY3Q8SFRNTElucHV0RWxlbWVudD5cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yIChwcm9wZXJ0aWVzOiBMb2FkaW5nUGFnZS5Qcm9wZXJ0aWVzKSB7XHJcbiAgICBzdXBlcihwcm9wZXJ0aWVzKVxyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHByZW1hZGVzOiB1bmRlZmluZWQsXHJcbiAgICAgIHN0YXRlOiBMb2FkaW5nUGFnZVN0YXRlLklOSVRJQUwsXHJcbiAgICAgIGZpbGU6IHVuZGVmaW5lZCxcclxuICAgICAgc2Nyb2xsOiAwLFxyXG4gICAgICBtb3VzZTogLTFcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmhhbmRsZVByZW1hZGVzTG9hZGluZyA9IHRoaXMuaGFuZGxlUHJlbWFkZXNMb2FkaW5nLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlUHJlbWFkZVJlbmRlcmluZyA9IHRoaXMuaGFuZGxlUHJlbWFkZVJlbmRlcmluZy5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmhhbmRsZVByZW1hZGVTbGlkZVJlbmRlcmluZyA9IHRoaXMuaGFuZGxlUHJlbWFkZVNsaWRlUmVuZGVyaW5nLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UgPSB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlRHJvcCA9IHRoaXMuaGFuZGxlRHJvcC5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmhhbmRsZVNpbGVudEFjdGlvbiA9IHRoaXMuaGFuZGxlU2lsZW50QWN0aW9uLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlQ2FuY2VsID0gdGhpcy5oYW5kbGVDYW5jZWwuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVGaWxlU2VsZWN0aW9uID0gdGhpcy5oYW5kbGVGaWxlU2VsZWN0aW9uLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlRmlsZVZhbGlkYXRpb24gPSB0aGlzLmhhbmRsZUZpbGVWYWxpZGF0aW9uLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlRmlsZVJlZHVjdGlvbiA9IHRoaXMuaGFuZGxlRmlsZVJlZHVjdGlvbi5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmhhbmRsZUNhbmNlbGxhdGlvbiA9IHRoaXMuaGFuZGxlQ2FuY2VsbGF0aW9uLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlU2Nyb2xsID0gdGhpcy5oYW5kbGVTY3JvbGwuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVNb3VzZUVudGVyT3B0aW9uID0gdGhpcy5oYW5kbGVNb3VzZUVudGVyT3B0aW9uLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlTW91c2VDbGlja09wdGlvbiA9IHRoaXMuaGFuZGxlTW91c2VDbGlja09wdGlvbi5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmhhbmRsZU1vdXNlTGVhdmVPcHRpb24gPSB0aGlzLmhhbmRsZU1vdXNlTGVhdmVPcHRpb24uYmluZCh0aGlzKVxyXG5cclxuICAgIHRoaXMuX2lucHV0ID0gUmVhY3QuY3JlYXRlUmVmKClcclxuXHJcbiAgICBQcmVtYWRlcy5sb2FkKCkudGhlbih0aGlzLmhhbmRsZVByZW1hZGVzTG9hZGluZylcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyBoYW5kbGVNb3VzZUNsaWNrT3B0aW9uIChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKCdoYW5kbGVNb3VzZUNsaWNrJylcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICBldmVudC5uYXRpdmVFdmVudC5zdG9wUHJvcGFnYXRpb24oKVxyXG5cclxuICAgIHRoaXMuaGFuZGxlTW91c2VFbnRlck9wdGlvbihldmVudClcclxuICAgIHRoaXMuaGFuZGxlQ2xpY2soKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIGhhbmRsZU1vdXNlRW50ZXJPcHRpb24gKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50Pik6IHZvaWQge1xyXG4gICAgY29uc3QgdGFyZ2V0OiBIVE1MQnV0dG9uRWxlbWVudCA9IGV2ZW50LmN1cnJlbnRUYXJnZXRcclxuICAgIGNvbnN0IGJhc2lzOiBudW1iZXIgPSAodGFyZ2V0LnBhcmVudE5vZGUuZmlyc3RFbGVtZW50Q2hpbGQgYXMgYW55KS5vZmZzZXRUb3BcclxuICAgIFxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1vdXNlOiB0YXJnZXQub2Zmc2V0VG9wIC0gYmFzaXMgfSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyBoYW5kbGVNb3VzZUxlYXZlT3B0aW9uIChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBtb3VzZTogLTEgfSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyBoYW5kbGVQcmVtYWRlc0xvYWRpbmcocHJlbWFkZXM6IEludmVzdGlnYXRvcltdKTogdm9pZCB7XHJcbiAgICBwcmVtYWRlcy5zb3J0KEludmVzdGlnYXRvci5jb21wYXJlQnlOYW1lKVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHByZW1hZGVzIH0pXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwcml2YXRlIGhhbmRsZUlucHV0Q2hhbmdlKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pik6IHZvaWQge1xyXG4gICAgaWYgKGV2ZW50LnRhcmdldC5maWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBcclxuICAgICAgICBzdGF0ZTogTG9hZGluZ1BhZ2VTdGF0ZS5MT0FESU5HLFxyXG4gICAgICAgIGZpbGU6IGV2ZW50LnRhcmdldC5maWxlc1swXSBcclxuICAgICAgfSwgdGhpcy5oYW5kbGVGaWxlU2VsZWN0aW9uLmJpbmQodW5kZWZpbmVkLCBldmVudC50YXJnZXQuZmlsZXNbMF0pKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBoYW5kbGVTaWxlbnRBY3Rpb24oZXZlbnQ6IFJlYWN0LlN5bnRoZXRpY0V2ZW50KTogdm9pZCB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBoYW5kbGVEcm9wKGV2ZW50OiBSZWFjdC5EcmFnRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pOiB2b2lkIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgY29uc3QgZHJhZ2dlZDogRGF0YVRyYW5zZmVyID0gZXZlbnQuZGF0YVRyYW5zZmVyXHJcblxyXG4gICAgaWYgKGRyYWdnZWQuZmlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBmb3IgKGNvbnN0IGZpbGUgb2YgZHJhZ2dlZC5maWxlcykge1xyXG4gICAgICAgIGlmIChmaWxlLm5hbWUuZW5kc1dpdGgoJy50eHQnKSkge1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFxyXG4gICAgICAgICAgICBzdGF0ZTogTG9hZGluZ1BhZ2VTdGF0ZS5MT0FESU5HLFxyXG4gICAgICAgICAgICBmaWxlXHJcbiAgICAgICAgICB9LCB0aGlzLmhhbmRsZUZpbGVTZWxlY3Rpb24uYmluZCh1bmRlZmluZWQsIGZpbGUpKVxyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHByaXZhdGUgaGFuZGxlU2Nyb2xsKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50LCBXaGVlbEV2ZW50Pik6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNjcm9sbDogZXZlbnQuY3VycmVudFRhcmdldC5zY3JvbGxUb3AgfSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHByaXZhdGUgaGFuZGxlUHJlbWFkZVNlbGVjdGlvbiAoaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShBcHBsaWNhdGlvbkV2ZW50LnVzZSh0aGlzLnN0YXRlLnByZW1hZGVzW2luZGV4XSkpXHJcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKEFwcGxpY2F0aW9uRXZlbnQuc2hvd0ludmVzdGlnYXRvclBhZ2UoKSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHByaXZhdGUgaGFuZGxlQ2xpY2soKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZygnaGFuZGxlQ2xpY2snKVxyXG5cclxuICAgIGlmICh0aGlzLnN0YXRlLnN0YXRlICE9PSBMb2FkaW5nUGFnZVN0YXRlLklOSVRJQUwpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2VsZWN0ZWQ6IG51bWJlciA9IHRoaXMuZ2V0U2VsZWN0ZWQoKVxyXG5cclxuICAgIGlmIChzZWxlY3RlZCA8IDEpIHtcclxuICAgICAgdGhpcy5faW5wdXQuY3VycmVudC5jbGljaygpXHJcbiAgICB9IGVsc2UgaWYgKHNlbGVjdGVkID09PSAxKSB7XHJcbiAgICAgIGlmICh0aGlzLnByb3BzLmN1cnJlbnQpIHtcclxuICAgICAgICB0aGlzLmhhbmRsZUNhbmNlbGxhdGlvbigpXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaGFuZGxlUHJlbWFkZVNlbGVjdGlvbihzZWxlY3RlZCAtIDIpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwcml2YXRlIGhhbmRsZUNhbmNlbChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pOiB2b2lkIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKEFwcGxpY2F0aW9uRXZlbnQuc2hvd0ludmVzdGlnYXRvclBhZ2UoKSlcclxuICB9XHJcblxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gICBwcml2YXRlIGhhbmRsZUNhbmNlbGxhdGlvbiAoKSA6IHZvaWQge1xyXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShBcHBsaWNhdGlvbkV2ZW50LnNob3dJbnZlc3RpZ2F0b3JQYWdlKCkpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwcml2YXRlIGhhbmRsZUZpbGVWYWxpZGF0aW9uICh2YWxpZGF0aW9uOiBVbmlkb2NWYWxpZGF0aW9uRXZlbnQpIDogdm9pZCB7XHJcbiAgICAvLyBAVE9ETyBlcnJvci1jaGVja1xyXG4gICAgLy9jb25zb2xlLmxvZyh2YWxpZGF0aW9uLnRvU3RyaW5nKCkpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwcml2YXRlIGhhbmRsZUZpbGVSZWR1Y3Rpb24gKHZhbHVlOiBJbnZlc3RpZ2F0b3IpIDogdm9pZCB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgXHJcbiAgICAgIHN0YXRlOiBMb2FkaW5nUGFnZVN0YXRlLlJFU09MVkVEXHJcbiAgICB9KVxyXG5cclxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoQXBwbGljYXRpb25FdmVudC51c2UodmFsdWUpKVxyXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShBcHBsaWNhdGlvbkV2ZW50LnNob3dJbnZlc3RpZ2F0b3JQYWdlKCkpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwcml2YXRlIGhhbmRsZUZpbGVTZWxlY3Rpb24oZmlsZTogRmlsZSk6IHZvaWQge1xyXG4gICAgY29uc3Qgc291cmNlOiBVbmlkb2NGaWxlU3ltYm9sUHJvZHVjZXIgPSBVbmlkb2NGaWxlU3ltYm9sUHJvZHVjZXIuY3JlYXRlKGZpbGUpXHJcbiAgICBjb25zdCBldmVudHM6IFVuaWRvY1Byb2R1Y2VyPFVuaWRvY0V2ZW50PiA9IHBhcnNlKHRva2VuaXplKHNvdXJjZSkpXHJcbiAgICBjb25zdCB2YWxpZGF0b3I6IFVuaWRvY1ZhbGlkYXRvciA9IFVuaWRvY1ZhbGlkYXRvci5raXNzKFVuaWRvY0NvbW1hbmQudmFsaWRhdGVVbmlkb2MuZmFjdG9yeShJbnZlc3RpZ2F0b3JDb21tYW5kLnZhbGlkYXRlKSlcclxuXHJcbiAgICB2YWxpZGF0b3Iuc3Vic2NyaWJlKGV2ZW50cylcclxuXHJcbiAgICBjb25zdCByZWR1Y2VyOiBVbmlkb2NQcm9kdWNlcjxJbnZlc3RpZ2F0b3I+ID0gVW5pZG9jUmVkdWNlci5yZWR1Y2UudmFsaWRhdGlvbih2YWxpZGF0b3IsIFVuaWRvY0NvbW1hbmQucmVkdWNlLmZhY3RvcnkoSW52ZXN0aWdhdG9yQ29tbWFuZC5yZWR1Y2UpKVxyXG5cclxuICAgIHZhbGlkYXRvci5vbignbmV4dCcsIHRoaXMuaGFuZGxlRmlsZVZhbGlkYXRpb24pXHJcbiAgICByZWR1Y2VyLm9uKCduZXh0JywgdGhpcy5oYW5kbGVGaWxlUmVkdWN0aW9uKVxyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBcclxuICAgICAgc3RhdGU6IExvYWRpbmdQYWdlU3RhdGUuTE9BRElORyxcclxuICAgICAgZmlsZVxyXG4gICAgfSwgc291cmNlLnJlYWQuYmluZChzb3VyY2UpKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIGdldFNlbGVjdGVkKCk6IG51bWJlciB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5tb3VzZSA8IDApIHtcclxuICAgICAgcmV0dXJuICgoKHRoaXMuc3RhdGUuc2Nyb2xsICsgNTApIC8gMTAwKSA8PCAwKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuICgodGhpcy5zdGF0ZS5tb3VzZSAvIDEwMCkgPDwgMClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyBpc1NlbGVjdGVkKGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmdldFNlbGVjdGVkKCkgPT09IGluZGV4XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgaXNGaWxlTG9hZGluZ1NlbGVjdGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNTZWxlY3RlZCgwKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIGlzQ2FuY2VsbGF0aW9uU2VsZWN0ZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1NlbGVjdGVkKDEpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgaXNQcmVtYWRlU2VsZWN0ZWQoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNTZWxlY3RlZChpbmRleCArIDIpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgcmVuZGVyICgpIDogUmVhY3QuUmVhY3RFbGVtZW50IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgXHJcbiAgICAgICAgb25Ecm9wPXt0aGlzLmhhbmRsZURyb3B9IFxyXG4gICAgICAgIG9uRHJhZ0VudGVyPXt0aGlzLmhhbmRsZVNpbGVudEFjdGlvbn1cclxuICAgICAgICBvbkRyYWdPdmVyPXt0aGlzLmhhbmRsZVNpbGVudEFjdGlvbn1cclxuICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfVxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnbGF5b3V0IGxheW91dC1sb2FkaW5nLXBhZ2UnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9XHJcbiAgICAgID5cclxuICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgIHJlZj17dGhpcy5faW5wdXR9IFxyXG4gICAgICAgICAgdHlwZT0nZmlsZScgXHJcbiAgICAgICAgICBhY2NlcHQ9J3RleHQvcGxhaW4nIFxyXG4gICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgY2xhc3NOYW1lPSdsYXlvdXQtbG9hZGluZy1wYWdlLW9wdGlvbnMnXHJcbiAgICAgICAgICBvblNjcm9sbD17dGhpcy5oYW5kbGVTY3JvbGx9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgeyB0aGlzLnJlbmRlckZpbGUoKSB9XHJcbiAgICAgICAgICB7IHRoaXMucmVuZGVyQ2FuY2VsbGF0aW9uKCkgfVxyXG4gICAgICAgICAgeyB0aGlzLnJlbmRlclByZW1hZGVzKCkgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsYXlvdXQtbG9hZGluZy1wYWdlLWRpc3BsYXknPlxyXG4gICAgICAgICAgPFN0YXRpY1NsaWRlc2hvdyBpbmRleD17dGhpcy5nZXRTZWxlY3RlZCgpfT5cclxuICAgICAgICAgICAgeyB0aGlzLnJlbmRlckZpbGVTbGlkZSgpIH1cclxuICAgICAgICAgICAgeyB0aGlzLnJlbmRlckNhbmNlbGxhdGlvblNsaWRlKCkgfVxyXG4gICAgICAgICAgICB7IHRoaXMucmVuZGVyUHJlbWFkZVNsaWRlcygpIH1cclxuICAgICAgICAgIDwvU3RhdGljU2xpZGVzaG93PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyByZW5kZXJGaWxlKCk6IFJlYWN0LlJlYWN0Tm9kZSB7XHJcbiAgICBjb25zdCBzZWxlY3RlZDogYm9vbGVhbiA9IHRoaXMuaXNGaWxlTG9hZGluZ1NlbGVjdGVkKClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8YnV0dG9uIFxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnbG9hZGluZy1vcHRpb24nLCB7ICdpcy1hY3RpdmUnOiBzZWxlY3RlZCB9KX1cclxuICAgICAgICBhcmlhLXByZXNzZWQ9e3NlbGVjdGVkfVxyXG4gICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLnN0YXRlICE9PSBMb2FkaW5nUGFnZVN0YXRlLklOSVRJQUx9XHJcbiAgICAgICAgb25Nb3VzZUVudGVyPXt0aGlzLmhhbmRsZU1vdXNlRW50ZXJPcHRpb259XHJcbiAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVNb3VzZUNsaWNrT3B0aW9ufVxyXG4gICAgICAgIG9uTW91c2VMZWF2ZT17dGhpcy5oYW5kbGVNb3VzZUxlYXZlT3B0aW9ufVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvYWRpbmctb3B0aW9uLWljb24nPlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXVwbG9hZFwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvYWRpbmctb3B0aW9uLWluZm9ybWF0aW9uJz5cclxuICAgICAgICAgIDxoMT5DaGFyZ2VyIHVuIGRvY3VtZW50PC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICApXHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyByZW5kZXJDYW5jZWxsYXRpb24oKTogUmVhY3QuUmVhY3ROb2RlIHtcclxuICAgIGNvbnN0IHNlbGVjdGVkOiBib29sZWFuID0gdGhpcy5pc1NlbGVjdGVkKDEpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGJ1dHRvbiBcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ2xvYWRpbmctb3B0aW9uJywgeyAnaXMtYWN0aXZlJzogc2VsZWN0ZWQgfSl9XHJcbiAgICAgICAgYXJpYS1wcmVzc2VkPXtzZWxlY3RlZH1cclxuICAgICAgICBkaXNhYmxlZD17IXRoaXMucHJvcHMuY3VycmVudCB8fCB0aGlzLnN0YXRlLnN0YXRlICE9PSBMb2FkaW5nUGFnZVN0YXRlLklOSVRJQUx9XHJcbiAgICAgICAgb25Nb3VzZUVudGVyPXt0aGlzLmhhbmRsZU1vdXNlRW50ZXJPcHRpb259XHJcbiAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVNb3VzZUNsaWNrT3B0aW9ufVxyXG4gICAgICAgIG9uTW91c2VMZWF2ZT17dGhpcy5oYW5kbGVNb3VzZUxlYXZlT3B0aW9ufVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvYWRpbmctb3B0aW9uLWljb24nPlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXVuZG9cIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2FkaW5nLW9wdGlvbi1pbmZvcm1hdGlvbic+XHJcbiAgICAgICAgICA8aDE+UmV0b3VyPC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgcmVuZGVyUHJlbWFkZXMoKTogUmVhY3QuUmVhY3ROb2RlIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLnByZW1hZGVzKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLnByZW1hZGVzLm1hcCh0aGlzLmhhbmRsZVByZW1hZGVSZW5kZXJpbmcpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gPExvYWRlcj5DaGFyZ2VtZW50IGRlcyBwcsOpdGlyw6lzIGVuIGNvdXJzPC9Mb2FkZXI+XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgaGFuZGxlUHJlbWFkZVJlbmRlcmluZyhwcmVtYWRlOiBJbnZlc3RpZ2F0b3IsIGluZGV4OiBudW1iZXIpOiBSZWFjdC5SZWFjdE5vZGUge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWQ6IGJvb2xlYW4gPSB0aGlzLmlzU2VsZWN0ZWQoaW5kZXggKyAyKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxidXR0b24gXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdsb2FkaW5nLW9wdGlvbiBpcy1wcmVtYWRlJywgeyAnaXMtYWN0aXZlJzogc2VsZWN0ZWQgfSl9XHJcbiAgICAgICAgYXJpYS1wcmVzc2VkPXtzZWxlY3RlZH0gXHJcbiAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUuc3RhdGUgIT09IExvYWRpbmdQYWdlU3RhdGUuSU5JVElBTH0gXHJcbiAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICBvbk1vdXNlRW50ZXI9e3RoaXMuaGFuZGxlTW91c2VFbnRlck9wdGlvbn1cclxuICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZU1vdXNlQ2xpY2tPcHRpb259XHJcbiAgICAgICAgb25Nb3VzZUxlYXZlPXt0aGlzLmhhbmRsZU1vdXNlTGVhdmVPcHRpb259XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9hZGluZy1vcHRpb24taWNvbic+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3Nwcml0ZSBzcHJpdGUtZm9sZGVyIHNwcml0ZS12YXJpYXRpb24tJyArIChpbmRleCAlIDMpfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2FkaW5nLW9wdGlvbi1pbmZvcm1hdGlvbic+XHJcbiAgICAgICAgICA8aDE+eyBwcmVtYWRlLnN1bW1hcnkubmFtZS50b1N0cmluZygpIH08L2gxPlxyXG4gICAgICAgICAgPGgyPnsgcHJlbWFkZS5zdW1tYXJ5LmpvYiB9PC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICAgcHVibGljIHJlbmRlckZpbGVTbGlkZSgpOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFNsaWRlPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsYXlvdXQgbGF5b3V0LWNlbnRlcmVkJz5cclxuICAgICAgICAgIDxJbWFnZXMuSG9tZSBjbGFzc05hbWU9J2xvYWRpbmctbWF0dXJpbicgLz5cclxuICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgU8OpbGVjdGlvbm5lciB1bmUgZmV1aWxsZS5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9TbGlkZT5cclxuICAgIClcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIHJlbmRlckNhbmNlbGxhdGlvblNsaWRlKCk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5jdXJyZW50KSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPFNsaWRlPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xheW91dCBsYXlvdXQtYm90dG9tIHRleHQtY2VudGVyJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydzcHJpdGUgc3ByaXRlLWNoYXJhY3RlciBzcHJpdGUtdmFyaWF0aW9uLScgKyB0aGlzLnByb3BzLmN1cnJlbnQuc3VtbWFyeS5hbGlhcy50b0xvd2VyQ2FzZSgpLnJlcGxhY2VBbGwoJ8OpJywgJ2UnKX0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvU2xpZGU+XHJcbiAgICAgIClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPFNsaWRlPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xheW91dCBsYXlvdXQtY2VudGVyZWQnPlxyXG4gICAgICAgICAgICA8SW1hZ2VzLkhvbWUgY2xhc3NOYW1lPSdsb2FkaW5nLW1hdHVyaW4nIC8+XHJcbiAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIEF1Y3VuIGRvY3VtZW50IGNoYXJnw6kuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1NsaWRlPlxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgcmVuZGVyUHJlbWFkZVNsaWRlcygpOiBSZWFjdC5SZWFjdE5vZGUge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUucHJlbWFkZXMpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUucHJlbWFkZXMubWFwKHRoaXMuaGFuZGxlUHJlbWFkZVNsaWRlUmVuZGVyaW5nKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIDxMb2FkZXI+Q2hhcmdlbWVudCBkZXMgcHLDqXRpcsOpcyBlbiBjb3VyczwvTG9hZGVyPlxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIGhhbmRsZVByZW1hZGVTbGlkZVJlbmRlcmluZyhwcmVtYWRlOiBJbnZlc3RpZ2F0b3IsIGluZGV4OiBudW1iZXIpOiBSZWFjdC5SZWFjdE5vZGUge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFNsaWRlIGtleT17aW5kZXh9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsYXlvdXQgbGF5b3V0LWJvdHRvbSB0ZXh0LWNlbnRlcic+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3Nwcml0ZSBzcHJpdGUtY2hhcmFjdGVyIHNwcml0ZS12YXJpYXRpb24tJyArIHByZW1hZGUuc3VtbWFyeS5hbGlhcy50b0xvd2VyQ2FzZSgpLnJlcGxhY2VBbGwoJ8OpJywgJ2UnKX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9TbGlkZT5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcclxuICovXHJcbmV4cG9ydCBuYW1lc3BhY2UgTG9hZGluZ1BhZ2Uge1xyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIGV4cG9ydCB0eXBlIEFwcGxpY2F0aW9uQ2FsbGJhY2sgPSAoZXZlbnQ6IEFwcGxpY2F0aW9uRXZlbnQpID0+IHZvaWRcclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgZXhwb3J0IHR5cGUgUHJvcGVydGllcyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIGNsYXNzTmFtZT86IHN0cmluZyB8IHVuZGVmaW5lZCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBjdXJyZW50PzogSW52ZXN0aWdhdG9yIHwgdW5kZWZpbmVkLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIG9uQ2hhbmdlPzogQXBwbGljYXRpb25DYWxsYmFjayB8IHVuZGVmaW5lZFxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgZXhwb3J0IHR5cGUgU3RhdGUgPSB7XHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBwcmVtYWRlczogdW5kZWZpbmVkIHwgSW52ZXN0aWdhdG9yW10sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgZmlsZTogRmlsZSB8IHVuZGVmaW5lZCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBzdGF0ZTogTG9hZGluZ1BhZ2VTdGF0ZSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBzY3JvbGw6IG51bWJlcixcclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBtb3VzZTogbnVtYmVyXHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==
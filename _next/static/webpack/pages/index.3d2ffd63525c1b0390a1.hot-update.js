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
      event.nativeEvent.stopImmediatePropagation();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlL2xvYWRpbmcvTG9hZGluZ1BhZ2UudHN4Il0sIm5hbWVzIjpbIkxvYWRpbmdQYWdlIiwicHJvcGVydGllcyIsIl9pbnB1dCIsInN0YXRlIiwicHJlbWFkZXMiLCJ1bmRlZmluZWQiLCJMb2FkaW5nUGFnZVN0YXRlIiwiSU5JVElBTCIsImZpbGUiLCJzY3JvbGwiLCJtb3VzZSIsImhhbmRsZVByZW1hZGVzTG9hZGluZyIsImJpbmQiLCJoYW5kbGVQcmVtYWRlUmVuZGVyaW5nIiwiaGFuZGxlUHJlbWFkZVNsaWRlUmVuZGVyaW5nIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJoYW5kbGVEcm9wIiwiaGFuZGxlU2lsZW50QWN0aW9uIiwiaGFuZGxlQ2FuY2VsIiwiaGFuZGxlRmlsZVNlbGVjdGlvbiIsImhhbmRsZUZpbGVWYWxpZGF0aW9uIiwiaGFuZGxlRmlsZVJlZHVjdGlvbiIsImhhbmRsZUNhbmNlbGxhdGlvbiIsImhhbmRsZUNsaWNrIiwiaGFuZGxlU2Nyb2xsIiwiaGFuZGxlTW91c2VFbnRlck9wdGlvbiIsImhhbmRsZU1vdXNlQ2xpY2tPcHRpb24iLCJoYW5kbGVNb3VzZUxlYXZlT3B0aW9uIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJQcmVtYWRlcyIsImxvYWQiLCJ0aGVuIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwic3RvcFByb3BhZ2F0aW9uIiwibmF0aXZlRXZlbnQiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiYmFzaXMiLCJwYXJlbnROb2RlIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJvZmZzZXRUb3AiLCJzZXRTdGF0ZSIsInNvcnQiLCJJbnZlc3RpZ2F0b3IiLCJjb21wYXJlQnlOYW1lIiwiZmlsZXMiLCJsZW5ndGgiLCJMT0FESU5HIiwicHJldmVudERlZmF1bHQiLCJkcmFnZ2VkIiwiZGF0YVRyYW5zZmVyIiwibmFtZSIsImVuZHNXaXRoIiwic2Nyb2xsVG9wIiwiaW5kZXgiLCJwcm9wcyIsIm9uQ2hhbmdlIiwiQXBwbGljYXRpb25FdmVudCIsInVzZSIsInNob3dJbnZlc3RpZ2F0b3JQYWdlIiwic2VsZWN0ZWQiLCJnZXRTZWxlY3RlZCIsImN1cnJlbnQiLCJjbGljayIsImhhbmRsZVByZW1hZGVTZWxlY3Rpb24iLCJ2YWxpZGF0aW9uIiwidmFsdWUiLCJSRVNPTFZFRCIsInNvdXJjZSIsIlVuaWRvY0ZpbGVTeW1ib2xQcm9kdWNlciIsImNyZWF0ZSIsImV2ZW50cyIsInBhcnNlIiwidG9rZW5pemUiLCJ2YWxpZGF0b3IiLCJVbmlkb2NWYWxpZGF0b3IiLCJraXNzIiwiVW5pZG9jQ29tbWFuZCIsInZhbGlkYXRlVW5pZG9jIiwiZmFjdG9yeSIsIkludmVzdGlnYXRvckNvbW1hbmQiLCJ2YWxpZGF0ZSIsInN1YnNjcmliZSIsInJlZHVjZXIiLCJVbmlkb2NSZWR1Y2VyIiwicmVkdWNlIiwib24iLCJyZWFkIiwiaXNTZWxlY3RlZCIsImNsYXNzbmFtZXMiLCJjbGFzc05hbWUiLCJkaXNwbGF5IiwicmVuZGVyRmlsZSIsInJlbmRlckNhbmNlbGxhdGlvbiIsInJlbmRlclByZW1hZGVzIiwicmVuZGVyRmlsZVNsaWRlIiwicmVuZGVyQ2FuY2VsbGF0aW9uU2xpZGUiLCJyZW5kZXJQcmVtYWRlU2xpZGVzIiwiaXNGaWxlTG9hZGluZ1NlbGVjdGVkIiwibWFwIiwicHJlbWFkZSIsInN1bW1hcnkiLCJ0b1N0cmluZyIsImpvYiIsImFsaWFzIiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlQWxsIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwiRW1wdHkiLCJjYWxsYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7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VUFBUSxFQUFFcUQsdURBQUssQ0FBQ0M7QUFKc0QsQzs7NkJBeWN6RGxILFcsS0FBQUEsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zZDJmZmQ2MzUyNWMxYjAzOTBhMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xyXG5pbXBvcnQgeyBcclxuICB0b2tlbml6ZSwgXHJcbiAgcGFyc2UsXHJcbiAgVW5pZG9jRXZlbnQsIFxyXG4gIFVuaWRvY1Byb2R1Y2VyLCBcclxuICBVbmlkb2NSZWR1Y2VyLCBcclxuICBVbmlkb2NWYWxpZGF0aW9uRXZlbnQsXHJcbiAgVW5pZG9jVmFsaWRhdG9yIFxyXG59IGZyb20gJ0BjZWRyaWMtZGVtb25naXZlcnQvdW5pZG9jJ1xyXG5cclxuaW1wb3J0IHsgRW1wdHkgfSBmcm9tICcuLi8uLi8uLi90eXBlc2NyaXB0L3V0aWxzJ1xyXG5pbXBvcnQgeyBVbmlkb2NGaWxlU3ltYm9sUHJvZHVjZXIgfSBmcm9tICcuLi8uLi8uLi90eXBlc2NyaXB0L3VuaWRvYy9Vbmlkb2NGaWxlU3ltYm9sUHJvZHVjZXInXHJcbmltcG9ydCB7IFVuaWRvY0NvbW1hbmQgfSBmcm9tICcuLi8uLi8uLi90eXBlc2NyaXB0L3VuaWRvYy9Vbmlkb2NDb21tYW5kJ1xyXG5pbXBvcnQgeyBJbnZlc3RpZ2F0b3JDb21tYW5kIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXNjcmlwdC91bmlkb2MvSW52ZXN0aWdhdG9yQ29tbWFuZCdcclxuaW1wb3J0IHsgQXBwbGljYXRpb25FdmVudCB9IGZyb20gJy4uLy4uLy4uL3R5cGVzY3JpcHQvYXBwbGljYXRpb24vQXBwbGljYXRpb25FdmVudCdcclxuaW1wb3J0IHsgSW52ZXN0aWdhdG9yIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXNjcmlwdC9JbnZlc3RpZ2F0b3InXHJcblxyXG5pbXBvcnQgeyBJbWFnZXMgfSBmcm9tICcuLi8uLi9JbWFnZXMnXHJcbmltcG9ydCB7IExvYWRlciB9IGZyb20gJy4uLy4uL0xvYWRlcidcclxuaW1wb3J0IHsgU3RhdGljU2xpZGVzaG93ICB9IGZyb20gJy4uLy4uL1N0YXRpY1NsaWRlc2hvdydcclxuaW1wb3J0IHsgUHJlbWFkZXMgfSBmcm9tICcuL1ByZW1hZGVzJ1xyXG5pbXBvcnQgeyBMb2FkaW5nUGFnZVN0YXRlIH0gZnJvbSAnLi9Mb2FkaW5nUGFnZVN0YXRlJ1xyXG5pbXBvcnQgeyBTbGlkZSB9IGZyb20gJy4uLy4uL1NsaWRlJ1xyXG5cclxuXHJcbi8qKlxyXG4gKiBcclxuICovXHJcbmV4cG9ydCBjbGFzcyBMb2FkaW5nUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxMb2FkaW5nUGFnZS5Qcm9wZXJ0aWVzLCBMb2FkaW5nUGFnZS5TdGF0ZT4ge1xyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgZGVmYXVsdFByb3BzOiBSZWFkb25seTxMb2FkaW5nUGFnZS5Qcm9wZXJ0aWVzPiA9IHtcclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIG9uQ2hhbmdlOiBFbXB0eS5jYWxsYmFja1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHJpdmF0ZSByZWFkb25seSBfaW5wdXQ6IFJlYWN0LlJlZk9iamVjdDxIVE1MSW5wdXRFbGVtZW50PlxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgY29uc3RydWN0b3IgKHByb3BlcnRpZXM6IExvYWRpbmdQYWdlLlByb3BlcnRpZXMpIHtcclxuICAgIHN1cGVyKHByb3BlcnRpZXMpXHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgcHJlbWFkZXM6IHVuZGVmaW5lZCxcclxuICAgICAgc3RhdGU6IExvYWRpbmdQYWdlU3RhdGUuSU5JVElBTCxcclxuICAgICAgZmlsZTogdW5kZWZpbmVkLFxyXG4gICAgICBzY3JvbGw6IDAsXHJcbiAgICAgIG1vdXNlOiAtMVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaGFuZGxlUHJlbWFkZXNMb2FkaW5nID0gdGhpcy5oYW5kbGVQcmVtYWRlc0xvYWRpbmcuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVQcmVtYWRlUmVuZGVyaW5nID0gdGhpcy5oYW5kbGVQcmVtYWRlUmVuZGVyaW5nLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlUHJlbWFkZVNsaWRlUmVuZGVyaW5nID0gdGhpcy5oYW5kbGVQcmVtYWRlU2xpZGVSZW5kZXJpbmcuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVJbnB1dENoYW5nZSA9IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVEcm9wID0gdGhpcy5oYW5kbGVEcm9wLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlU2lsZW50QWN0aW9uID0gdGhpcy5oYW5kbGVTaWxlbnRBY3Rpb24uYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVDYW5jZWwgPSB0aGlzLmhhbmRsZUNhbmNlbC5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmhhbmRsZUZpbGVTZWxlY3Rpb24gPSB0aGlzLmhhbmRsZUZpbGVTZWxlY3Rpb24uYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVGaWxlVmFsaWRhdGlvbiA9IHRoaXMuaGFuZGxlRmlsZVZhbGlkYXRpb24uYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVGaWxlUmVkdWN0aW9uID0gdGhpcy5oYW5kbGVGaWxlUmVkdWN0aW9uLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlQ2FuY2VsbGF0aW9uID0gdGhpcy5oYW5kbGVDYW5jZWxsYXRpb24uYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVTY3JvbGwgPSB0aGlzLmhhbmRsZVNjcm9sbC5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmhhbmRsZU1vdXNlRW50ZXJPcHRpb24gPSB0aGlzLmhhbmRsZU1vdXNlRW50ZXJPcHRpb24uYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVNb3VzZUNsaWNrT3B0aW9uID0gdGhpcy5oYW5kbGVNb3VzZUNsaWNrT3B0aW9uLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlTW91c2VMZWF2ZU9wdGlvbiA9IHRoaXMuaGFuZGxlTW91c2VMZWF2ZU9wdGlvbi5iaW5kKHRoaXMpXHJcblxyXG4gICAgdGhpcy5faW5wdXQgPSBSZWFjdC5jcmVhdGVSZWYoKVxyXG5cclxuICAgIFByZW1hZGVzLmxvYWQoKS50aGVuKHRoaXMuaGFuZGxlUHJlbWFkZXNMb2FkaW5nKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIGhhbmRsZU1vdXNlQ2xpY2tPcHRpb24gKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50Pik6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coJ2hhbmRsZU1vdXNlQ2xpY2snKVxyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgIGV2ZW50Lm5hdGl2ZUV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpXHJcblxyXG4gICAgdGhpcy5oYW5kbGVNb3VzZUVudGVyT3B0aW9uKGV2ZW50KVxyXG4gICAgdGhpcy5oYW5kbGVDbGljaygpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgaGFuZGxlTW91c2VFbnRlck9wdGlvbiAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KTogdm9pZCB7XHJcbiAgICBjb25zdCB0YXJnZXQ6IEhUTUxCdXR0b25FbGVtZW50ID0gZXZlbnQuY3VycmVudFRhcmdldFxyXG4gICAgY29uc3QgYmFzaXM6IG51bWJlciA9ICh0YXJnZXQucGFyZW50Tm9kZS5maXJzdEVsZW1lbnRDaGlsZCBhcyBhbnkpLm9mZnNldFRvcFxyXG4gICAgXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbW91c2U6IHRhcmdldC5vZmZzZXRUb3AgLSBiYXNpcyB9KVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIGhhbmRsZU1vdXNlTGVhdmVPcHRpb24gKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50Pik6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1vdXNlOiAtMSB9KVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIGhhbmRsZVByZW1hZGVzTG9hZGluZyhwcmVtYWRlczogSW52ZXN0aWdhdG9yW10pOiB2b2lkIHtcclxuICAgIHByZW1hZGVzLnNvcnQoSW52ZXN0aWdhdG9yLmNvbXBhcmVCeU5hbWUpXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgcHJlbWFkZXMgfSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHByaXZhdGUgaGFuZGxlSW5wdXRDaGFuZ2UoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KTogdm9pZCB7XHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmZpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IFxyXG4gICAgICAgIHN0YXRlOiBMb2FkaW5nUGFnZVN0YXRlLkxPQURJTkcsXHJcbiAgICAgICAgZmlsZTogZXZlbnQudGFyZ2V0LmZpbGVzWzBdIFxyXG4gICAgICB9LCB0aGlzLmhhbmRsZUZpbGVTZWxlY3Rpb24uYmluZCh1bmRlZmluZWQsIGV2ZW50LnRhcmdldC5maWxlc1swXSkpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwcml2YXRlIGhhbmRsZVNpbGVudEFjdGlvbihldmVudDogUmVhY3QuU3ludGhldGljRXZlbnQpOiB2b2lkIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwcml2YXRlIGhhbmRsZURyb3AoZXZlbnQ6IFJlYWN0LkRyYWdFdmVudDxIVE1MSW5wdXRFbGVtZW50Pik6IHZvaWQge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICBjb25zdCBkcmFnZ2VkOiBEYXRhVHJhbnNmZXIgPSBldmVudC5kYXRhVHJhbnNmZXJcclxuXHJcbiAgICBpZiAoZHJhZ2dlZC5maWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGZvciAoY29uc3QgZmlsZSBvZiBkcmFnZ2VkLmZpbGVzKSB7XHJcbiAgICAgICAgaWYgKGZpbGUubmFtZS5lbmRzV2l0aCgnLnR4dCcpKSB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgXHJcbiAgICAgICAgICAgIHN0YXRlOiBMb2FkaW5nUGFnZVN0YXRlLkxPQURJTkcsXHJcbiAgICAgICAgICAgIGZpbGVcclxuICAgICAgICAgIH0sIHRoaXMuaGFuZGxlRmlsZVNlbGVjdGlvbi5iaW5kKHVuZGVmaW5lZCwgZmlsZSkpXHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBoYW5kbGVTY3JvbGwoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQsIFdoZWVsRXZlbnQ+KTogdm9pZCB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2Nyb2xsOiBldmVudC5jdXJyZW50VGFyZ2V0LnNjcm9sbFRvcCB9KVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBoYW5kbGVQcmVtYWRlU2VsZWN0aW9uIChpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKEFwcGxpY2F0aW9uRXZlbnQudXNlKHRoaXMuc3RhdGUucHJlbWFkZXNbaW5kZXhdKSlcclxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoQXBwbGljYXRpb25FdmVudC5zaG93SW52ZXN0aWdhdG9yUGFnZSgpKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBoYW5kbGVDbGljaygpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKCdoYW5kbGVDbGljaycpXHJcblxyXG4gICAgaWYgKHRoaXMuc3RhdGUuc3RhdGUgIT09IExvYWRpbmdQYWdlU3RhdGUuSU5JVElBTCkge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZWxlY3RlZDogbnVtYmVyID0gdGhpcy5nZXRTZWxlY3RlZCgpXHJcblxyXG4gICAgaWYgKHNlbGVjdGVkIDwgMSkge1xyXG4gICAgICB0aGlzLl9pbnB1dC5jdXJyZW50LmNsaWNrKClcclxuICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWQgPT09IDEpIHtcclxuICAgICAgaWYgKHRoaXMucHJvcHMuY3VycmVudCkge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQ2FuY2VsbGF0aW9uKClcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5oYW5kbGVQcmVtYWRlU2VsZWN0aW9uKHNlbGVjdGVkIC0gMilcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHByaXZhdGUgaGFuZGxlQ2FuY2VsKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50Pik6IHZvaWQge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoQXBwbGljYXRpb25FdmVudC5zaG93SW52ZXN0aWdhdG9yUGFnZSgpKVxyXG4gIH1cclxuXHJcbiAgXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgIHByaXZhdGUgaGFuZGxlQ2FuY2VsbGF0aW9uICgpIDogdm9pZCB7XHJcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKEFwcGxpY2F0aW9uRXZlbnQuc2hvd0ludmVzdGlnYXRvclBhZ2UoKSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHByaXZhdGUgaGFuZGxlRmlsZVZhbGlkYXRpb24gKHZhbGlkYXRpb246IFVuaWRvY1ZhbGlkYXRpb25FdmVudCkgOiB2b2lkIHtcclxuICAgIC8vIEBUT0RPIGVycm9yLWNoZWNrXHJcbiAgICAvL2NvbnNvbGUubG9nKHZhbGlkYXRpb24udG9TdHJpbmcoKSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHByaXZhdGUgaGFuZGxlRmlsZVJlZHVjdGlvbiAodmFsdWU6IEludmVzdGlnYXRvcikgOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBcclxuICAgICAgc3RhdGU6IExvYWRpbmdQYWdlU3RhdGUuUkVTT0xWRURcclxuICAgIH0pXHJcblxyXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShBcHBsaWNhdGlvbkV2ZW50LnVzZSh2YWx1ZSkpXHJcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKEFwcGxpY2F0aW9uRXZlbnQuc2hvd0ludmVzdGlnYXRvclBhZ2UoKSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHByaXZhdGUgaGFuZGxlRmlsZVNlbGVjdGlvbihmaWxlOiBGaWxlKTogdm9pZCB7XHJcbiAgICBjb25zdCBzb3VyY2U6IFVuaWRvY0ZpbGVTeW1ib2xQcm9kdWNlciA9IFVuaWRvY0ZpbGVTeW1ib2xQcm9kdWNlci5jcmVhdGUoZmlsZSlcclxuICAgIGNvbnN0IGV2ZW50czogVW5pZG9jUHJvZHVjZXI8VW5pZG9jRXZlbnQ+ID0gcGFyc2UodG9rZW5pemUoc291cmNlKSlcclxuICAgIGNvbnN0IHZhbGlkYXRvcjogVW5pZG9jVmFsaWRhdG9yID0gVW5pZG9jVmFsaWRhdG9yLmtpc3MoVW5pZG9jQ29tbWFuZC52YWxpZGF0ZVVuaWRvYy5mYWN0b3J5KEludmVzdGlnYXRvckNvbW1hbmQudmFsaWRhdGUpKVxyXG5cclxuICAgIHZhbGlkYXRvci5zdWJzY3JpYmUoZXZlbnRzKVxyXG5cclxuICAgIGNvbnN0IHJlZHVjZXI6IFVuaWRvY1Byb2R1Y2VyPEludmVzdGlnYXRvcj4gPSBVbmlkb2NSZWR1Y2VyLnJlZHVjZS52YWxpZGF0aW9uKHZhbGlkYXRvciwgVW5pZG9jQ29tbWFuZC5yZWR1Y2UuZmFjdG9yeShJbnZlc3RpZ2F0b3JDb21tYW5kLnJlZHVjZSkpXHJcblxyXG4gICAgdmFsaWRhdG9yLm9uKCduZXh0JywgdGhpcy5oYW5kbGVGaWxlVmFsaWRhdGlvbilcclxuICAgIHJlZHVjZXIub24oJ25leHQnLCB0aGlzLmhhbmRsZUZpbGVSZWR1Y3Rpb24pXHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IFxyXG4gICAgICBzdGF0ZTogTG9hZGluZ1BhZ2VTdGF0ZS5MT0FESU5HLFxyXG4gICAgICBmaWxlXHJcbiAgICB9LCBzb3VyY2UucmVhZC5iaW5kKHNvdXJjZSkpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgZ2V0U2VsZWN0ZWQoKTogbnVtYmVyIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLm1vdXNlIDwgMCkge1xyXG4gICAgICByZXR1cm4gKCgodGhpcy5zdGF0ZS5zY3JvbGwgKyA1MCkgLyAxMDApIDw8IDApXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gKCh0aGlzLnN0YXRlLm1vdXNlIC8gMTAwKSA8PCAwKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIGlzU2VsZWN0ZWQoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0U2VsZWN0ZWQoKSA9PT0gaW5kZXhcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyBpc0ZpbGVMb2FkaW5nU2VsZWN0ZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1NlbGVjdGVkKDApXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgaXNDYW5jZWxsYXRpb25TZWxlY3RlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmlzU2VsZWN0ZWQoMSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyBpc1ByZW1hZGVTZWxlY3RlZChpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1NlbGVjdGVkKGluZGV4ICsgMilcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyByZW5kZXIgKCkgOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBcclxuICAgICAgICBvbkRyb3A9e3RoaXMuaGFuZGxlRHJvcH0gXHJcbiAgICAgICAgb25EcmFnRW50ZXI9e3RoaXMuaGFuZGxlU2lsZW50QWN0aW9ufVxyXG4gICAgICAgIG9uRHJhZ092ZXI9e3RoaXMuaGFuZGxlU2lsZW50QWN0aW9ufVxyXG4gICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdsYXlvdXQgbGF5b3V0LWxvYWRpbmctcGFnZScsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX1cclxuICAgICAgPlxyXG4gICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgcmVmPXt0aGlzLl9pbnB1dH0gXHJcbiAgICAgICAgICB0eXBlPSdmaWxlJyBcclxuICAgICAgICAgIGFjY2VwdD0ndGV4dC9wbGFpbicgXHJcbiAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXYgXHJcbiAgICAgICAgICBjbGFzc05hbWU9J2xheW91dC1sb2FkaW5nLXBhZ2Utb3B0aW9ucydcclxuICAgICAgICAgIG9uU2Nyb2xsPXt0aGlzLmhhbmRsZVNjcm9sbH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7IHRoaXMucmVuZGVyRmlsZSgpIH1cclxuICAgICAgICAgIHsgdGhpcy5yZW5kZXJDYW5jZWxsYXRpb24oKSB9XHJcbiAgICAgICAgICB7IHRoaXMucmVuZGVyUHJlbWFkZXMoKSB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xheW91dC1sb2FkaW5nLXBhZ2UtZGlzcGxheSc+XHJcbiAgICAgICAgICA8U3RhdGljU2xpZGVzaG93IGluZGV4PXt0aGlzLmdldFNlbGVjdGVkKCl9PlxyXG4gICAgICAgICAgICB7IHRoaXMucmVuZGVyRmlsZVNsaWRlKCkgfVxyXG4gICAgICAgICAgICB7IHRoaXMucmVuZGVyQ2FuY2VsbGF0aW9uU2xpZGUoKSB9XHJcbiAgICAgICAgICAgIHsgdGhpcy5yZW5kZXJQcmVtYWRlU2xpZGVzKCkgfVxyXG4gICAgICAgICAgPC9TdGF0aWNTbGlkZXNob3c+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIHJlbmRlckZpbGUoKTogUmVhY3QuUmVhY3ROb2RlIHtcclxuICAgIGNvbnN0IHNlbGVjdGVkOiBib29sZWFuID0gdGhpcy5pc0ZpbGVMb2FkaW5nU2VsZWN0ZWQoKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxidXR0b24gXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdsb2FkaW5nLW9wdGlvbicsIHsgJ2lzLWFjdGl2ZSc6IHNlbGVjdGVkIH0pfVxyXG4gICAgICAgIGFyaWEtcHJlc3NlZD17c2VsZWN0ZWR9XHJcbiAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUuc3RhdGUgIT09IExvYWRpbmdQYWdlU3RhdGUuSU5JVElBTH1cclxuICAgICAgICBvbk1vdXNlRW50ZXI9e3RoaXMuaGFuZGxlTW91c2VFbnRlck9wdGlvbn1cclxuICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZU1vdXNlQ2xpY2tPcHRpb259XHJcbiAgICAgICAgb25Nb3VzZUxlYXZlPXt0aGlzLmhhbmRsZU1vdXNlTGVhdmVPcHRpb259XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9hZGluZy1vcHRpb24taWNvbic+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdXBsb2FkXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9hZGluZy1vcHRpb24taW5mb3JtYXRpb24nPlxyXG4gICAgICAgICAgPGgxPkNoYXJnZXIgdW4gZG9jdW1lbnQ8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIClcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIHJlbmRlckNhbmNlbGxhdGlvbigpOiBSZWFjdC5SZWFjdE5vZGUge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWQ6IGJvb2xlYW4gPSB0aGlzLmlzU2VsZWN0ZWQoMSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8YnV0dG9uIFxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnbG9hZGluZy1vcHRpb24nLCB7ICdpcy1hY3RpdmUnOiBzZWxlY3RlZCB9KX1cclxuICAgICAgICBhcmlhLXByZXNzZWQ9e3NlbGVjdGVkfVxyXG4gICAgICAgIGRpc2FibGVkPXshdGhpcy5wcm9wcy5jdXJyZW50IHx8IHRoaXMuc3RhdGUuc3RhdGUgIT09IExvYWRpbmdQYWdlU3RhdGUuSU5JVElBTH1cclxuICAgICAgICBvbk1vdXNlRW50ZXI9e3RoaXMuaGFuZGxlTW91c2VFbnRlck9wdGlvbn1cclxuICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZU1vdXNlQ2xpY2tPcHRpb259XHJcbiAgICAgICAgb25Nb3VzZUxlYXZlPXt0aGlzLmhhbmRsZU1vdXNlTGVhdmVPcHRpb259XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9hZGluZy1vcHRpb24taWNvbic+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdW5kb1wiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvYWRpbmctb3B0aW9uLWluZm9ybWF0aW9uJz5cclxuICAgICAgICAgIDxoMT5SZXRvdXI8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyByZW5kZXJQcmVtYWRlcygpOiBSZWFjdC5SZWFjdE5vZGUge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUucHJlbWFkZXMpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUucHJlbWFkZXMubWFwKHRoaXMuaGFuZGxlUHJlbWFkZVJlbmRlcmluZylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiA8TG9hZGVyPkNoYXJnZW1lbnQgZGVzIHByw6l0aXLDqXMgZW4gY291cnM8L0xvYWRlcj5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyBoYW5kbGVQcmVtYWRlUmVuZGVyaW5nKHByZW1hZGU6IEludmVzdGlnYXRvciwgaW5kZXg6IG51bWJlcik6IFJlYWN0LlJlYWN0Tm9kZSB7XHJcbiAgICBjb25zdCBzZWxlY3RlZDogYm9vbGVhbiA9IHRoaXMuaXNTZWxlY3RlZChpbmRleCArIDIpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGJ1dHRvbiBcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ2xvYWRpbmctb3B0aW9uIGlzLXByZW1hZGUnLCB7ICdpcy1hY3RpdmUnOiBzZWxlY3RlZCB9KX1cclxuICAgICAgICBhcmlhLXByZXNzZWQ9e3NlbGVjdGVkfSBcclxuICAgICAgICBkaXNhYmxlZD17dGhpcy5zdGF0ZS5zdGF0ZSAhPT0gTG9hZGluZ1BhZ2VTdGF0ZS5JTklUSUFMfSBcclxuICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgIG9uTW91c2VFbnRlcj17dGhpcy5oYW5kbGVNb3VzZUVudGVyT3B0aW9ufVxyXG4gICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTW91c2VDbGlja09wdGlvbn1cclxuICAgICAgICBvbk1vdXNlTGVhdmU9e3RoaXMuaGFuZGxlTW91c2VMZWF2ZU9wdGlvbn1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2FkaW5nLW9wdGlvbi1pY29uJz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnc3ByaXRlIHNwcml0ZS1mb2xkZXIgc3ByaXRlLXZhcmlhdGlvbi0nICsgKGluZGV4ICUgMyl9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvYWRpbmctb3B0aW9uLWluZm9ybWF0aW9uJz5cclxuICAgICAgICAgIDxoMT57IHByZW1hZGUuc3VtbWFyeS5uYW1lLnRvU3RyaW5nKCkgfTwvaDE+XHJcbiAgICAgICAgICA8aDI+eyBwcmVtYWRlLnN1bW1hcnkuam9iIH08L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gICBwdWJsaWMgcmVuZGVyRmlsZVNsaWRlKCk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8U2xpZGU+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xheW91dCBsYXlvdXQtY2VudGVyZWQnPlxyXG4gICAgICAgICAgPEltYWdlcy5Ib21lIGNsYXNzTmFtZT0nbG9hZGluZy1tYXR1cmluJyAvPlxyXG4gICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICBTw6lsZWN0aW9ubmVyIHVuZSBmZXVpbGxlLlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1NsaWRlPlxyXG4gICAgKVxyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgcmVuZGVyQ2FuY2VsbGF0aW9uU2xpZGUoKTogUmVhY3QuUmVhY3RFbGVtZW50IHtcclxuICAgIGlmICh0aGlzLnByb3BzLmN1cnJlbnQpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8U2xpZGU+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGF5b3V0IGxheW91dC1ib3R0b20gdGV4dC1jZW50ZXInPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3Nwcml0ZSBzcHJpdGUtY2hhcmFjdGVyIHNwcml0ZS12YXJpYXRpb24tJyArIHRoaXMucHJvcHMuY3VycmVudC5zdW1tYXJ5LmFsaWFzLnRvTG93ZXJDYXNlKCkucmVwbGFjZUFsbCgnw6knLCAnZScpfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9TbGlkZT5cclxuICAgICAgKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8U2xpZGU+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGF5b3V0IGxheW91dC1jZW50ZXJlZCc+XHJcbiAgICAgICAgICAgIDxJbWFnZXMuSG9tZSBjbGFzc05hbWU9J2xvYWRpbmctbWF0dXJpbicgLz5cclxuICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgQXVjdW4gZG9jdW1lbnQgY2hhcmfDqS5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvU2xpZGU+XHJcbiAgICAgIClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyByZW5kZXJQcmVtYWRlU2xpZGVzKCk6IFJlYWN0LlJlYWN0Tm9kZSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5wcmVtYWRlcykge1xyXG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5wcmVtYWRlcy5tYXAodGhpcy5oYW5kbGVQcmVtYWRlU2xpZGVSZW5kZXJpbmcpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gPExvYWRlcj5DaGFyZ2VtZW50IGRlcyBwcsOpdGlyw6lzIGVuIGNvdXJzPC9Mb2FkZXI+XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgaGFuZGxlUHJlbWFkZVNsaWRlUmVuZGVyaW5nKHByZW1hZGU6IEludmVzdGlnYXRvciwgaW5kZXg6IG51bWJlcik6IFJlYWN0LlJlYWN0Tm9kZSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8U2xpZGUga2V5PXtpbmRleH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xheW91dCBsYXlvdXQtYm90dG9tIHRleHQtY2VudGVyJz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnc3ByaXRlIHNwcml0ZS1jaGFyYWN0ZXIgc3ByaXRlLXZhcmlhdGlvbi0nICsgcHJlbWFkZS5zdW1tYXJ5LmFsaWFzLnRvTG93ZXJDYXNlKCkucmVwbGFjZUFsbCgnw6knLCAnZScpfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1NsaWRlPlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFxyXG4gKi9cclxuZXhwb3J0IG5hbWVzcGFjZSBMb2FkaW5nUGFnZSB7XHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgZXhwb3J0IHR5cGUgQXBwbGljYXRpb25DYWxsYmFjayA9IChldmVudDogQXBwbGljYXRpb25FdmVudCkgPT4gdm9pZFxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBleHBvcnQgdHlwZSBQcm9wZXJ0aWVzID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nIHwgdW5kZWZpbmVkLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIGN1cnJlbnQ/OiBJbnZlc3RpZ2F0b3IgfCB1bmRlZmluZWQsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgb25DaGFuZ2U/OiBBcHBsaWNhdGlvbkNhbGxiYWNrIHwgdW5kZWZpbmVkXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBleHBvcnQgdHlwZSBTdGF0ZSA9IHtcclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIHByZW1hZGVzOiB1bmRlZmluZWQgfCBJbnZlc3RpZ2F0b3JbXSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBmaWxlOiBGaWxlIHwgdW5kZWZpbmVkLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIHN0YXRlOiBMb2FkaW5nUGFnZVN0YXRlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIHNjcm9sbDogbnVtYmVyLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIG1vdXNlOiBudW1iZXJcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9
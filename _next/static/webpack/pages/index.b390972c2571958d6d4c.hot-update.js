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
    _this.handleMouseLeaveOption = _this.handleMouseLeaveOption.bind(Object(D_development_rpg_shubgath_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this._input = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();
    _Premades__WEBPACK_IMPORTED_MODULE_18__["Premades"].load().then(_this.handlePremadesLoading);
    return _this;
  }
  /**
   * 
   */


  Object(D_development_rpg_shubgath_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LoadingPage, [{
    key: "handleMouseEnterOption",
    value: function handleMouseEnterOption(event) {
      var target = event.currentTarget;
      var basis = target.parentNode.firstElementChild.offsetTop;
      console.log(target.offsetTop, basis);
      console.log(target.offsetTop - basis);
      this.setState({
        mouse: target.offsetTop - basis
      });
    }
    /**
     * 
     */

  }, {
    key: "handleMouseLeaveOption",
    value: function handleMouseLeaveOption(event) {}
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
    value: function handleClick(event) {
      if (this.state.state !== _LoadingPageState__WEBPACK_IMPORTED_MODULE_19__["LoadingPageState"].INITIAL) {
        return;
      }

      var selected = this.getSelected();

      if (selected < 1) {
        this._input.current.click();
      } else if (selected === 1) {
        if (this.props.cancellable) {
          this.handleCancellation();
        }
      } else {
        this.handlePremadeSelection(selected - 1);
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
      return (this.state.scroll + 50) / 100 << 0;
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
      return this.props.cancellable && this.isSelected(1);
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
          lineNumber: 284,
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
          lineNumber: 291,
          columnNumber: 9
        }
      }), __jsx("div", {
        className: "layout-loading-page-options",
        onScroll: this.handleScroll,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298,
          columnNumber: 9
        }
      }, this.renderFile(), this.renderCancellation(), this.renderPremades()), __jsx("div", {
        className: "layout-loading-page-display",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306,
          columnNumber: 9
        }
      }, __jsx(_StaticSlideshow__WEBPACK_IMPORTED_MODULE_17__["StaticSlideshow"], {
        index: this.getSelected(),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307,
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
        onMouseLeave: this.handleMouseLeaveOption,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "loading-option-icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331,
          columnNumber: 9
        }
      }), __jsx("div", {
        className: "loading-option-information",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332,
          columnNumber: 9
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333,
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
        disabled: !this.props.cancellable || this.state.state !== _LoadingPageState__WEBPACK_IMPORTED_MODULE_19__["LoadingPageState"].INITIAL,
        onMouseEnter: this.handleMouseEnterOption,
        onMouseLeave: this.handleMouseLeaveOption,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "loading-option-icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353,
          columnNumber: 9
        }
      }), __jsx("div", {
        className: "loading-option-information",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354,
          columnNumber: 9
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 355,
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
            lineNumber: 368,
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
        onMouseLeave: this.handleMouseLeaveOption,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 379,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "loading-option-icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 387,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: 'sprite sprite-folder sprite-variation-' + index % 3,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 388,
          columnNumber: 11
        }
      })), __jsx("div", {
        className: "loading-option-information",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 390,
          columnNumber: 9
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 391,
          columnNumber: 11
        }
      }, premade.summary.name.toString()), __jsx("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 392,
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
          lineNumber: 403,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "layout layout-centered",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 404,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "container-fluid",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 405,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "row justify-content-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 406,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "col-8 text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 407,
          columnNumber: 15
        }
      }, __jsx(_Images__WEBPACK_IMPORTED_MODULE_15__["Images"].Home, {
        className: "img-fluid",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 408,
          columnNumber: 17
        }
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 409,
          columnNumber: 17
        }
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 410,
          columnNumber: 17
        }
      }), "S\xE9lectionner ou d\xE9poser une feuille de personnage.")))));
    }
    /**
     * 
     */

  }, {
    key: "renderCancellationSlide",
    value: function renderCancellationSlide() {
      return __jsx(_Slide__WEBPACK_IMPORTED_MODULE_20__["Slide"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 426,
          columnNumber: 7
        }
      });
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
            lineNumber: 439,
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
          lineNumber: 448,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "layout layout-bottom text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 449,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: 'sprite sprite-character sprite-variation-' + premade.summary.alias.toLowerCase().replaceAll('é', 'e'),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 450,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlL2xvYWRpbmcvTG9hZGluZ1BhZ2UudHN4Il0sIm5hbWVzIjpbIkxvYWRpbmdQYWdlIiwicHJvcGVydGllcyIsIl9pbnB1dCIsInN0YXRlIiwicHJlbWFkZXMiLCJ1bmRlZmluZWQiLCJMb2FkaW5nUGFnZVN0YXRlIiwiSU5JVElBTCIsImZpbGUiLCJzY3JvbGwiLCJtb3VzZSIsImhhbmRsZVByZW1hZGVzTG9hZGluZyIsImJpbmQiLCJoYW5kbGVQcmVtYWRlUmVuZGVyaW5nIiwiaGFuZGxlUHJlbWFkZVNsaWRlUmVuZGVyaW5nIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJoYW5kbGVEcm9wIiwiaGFuZGxlU2lsZW50QWN0aW9uIiwiaGFuZGxlQ2FuY2VsIiwiaGFuZGxlRmlsZVNlbGVjdGlvbiIsImhhbmRsZUZpbGVWYWxpZGF0aW9uIiwiaGFuZGxlRmlsZVJlZHVjdGlvbiIsImhhbmRsZUNhbmNlbGxhdGlvbiIsImhhbmRsZUNsaWNrIiwiaGFuZGxlU2Nyb2xsIiwiaGFuZGxlTW91c2VFbnRlck9wdGlvbiIsImhhbmRsZU1vdXNlTGVhdmVPcHRpb24iLCJSZWFjdCIsImNyZWF0ZVJlZiIsIlByZW1hZGVzIiwibG9hZCIsInRoZW4iLCJldmVudCIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJiYXNpcyIsInBhcmVudE5vZGUiLCJmaXJzdEVsZW1lbnRDaGlsZCIsIm9mZnNldFRvcCIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsInNvcnQiLCJJbnZlc3RpZ2F0b3IiLCJjb21wYXJlQnlOYW1lIiwiZmlsZXMiLCJsZW5ndGgiLCJMT0FESU5HIiwic3RvcFByb3BhZ2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJkcmFnZ2VkIiwiZGF0YVRyYW5zZmVyIiwibmFtZSIsImVuZHNXaXRoIiwic2Nyb2xsVG9wIiwiaW5kZXgiLCJwcm9wcyIsIm9uQ2hhbmdlIiwiQXBwbGljYXRpb25FdmVudCIsInVzZSIsInNob3dJbnZlc3RpZ2F0b3JQYWdlIiwic2VsZWN0ZWQiLCJnZXRTZWxlY3RlZCIsImN1cnJlbnQiLCJjbGljayIsImNhbmNlbGxhYmxlIiwiaGFuZGxlUHJlbWFkZVNlbGVjdGlvbiIsInZhbGlkYXRpb24iLCJ2YWx1ZSIsIlJFU09MVkVEIiwic291cmNlIiwiVW5pZG9jRmlsZVN5bWJvbFByb2R1Y2VyIiwiY3JlYXRlIiwiZXZlbnRzIiwicGFyc2UiLCJ0b2tlbml6ZSIsInZhbGlkYXRvciIsIlVuaWRvY1ZhbGlkYXRvciIsImtpc3MiLCJVbmlkb2NDb21tYW5kIiwidmFsaWRhdGVVbmlkb2MiLCJmYWN0b3J5IiwiSW52ZXN0aWdhdG9yQ29tbWFuZCIsInZhbGlkYXRlIiwic3Vic2NyaWJlIiwicmVkdWNlciIsIlVuaWRvY1JlZHVjZXIiLCJyZWR1Y2UiLCJvbiIsInJlYWQiLCJpc1NlbGVjdGVkIiwiY2xhc3NuYW1lcyIsImNsYXNzTmFtZSIsImRpc3BsYXkiLCJyZW5kZXJGaWxlIiwicmVuZGVyQ2FuY2VsbGF0aW9uIiwicmVuZGVyUHJlbWFkZXMiLCJyZW5kZXJGaWxlU2xpZGUiLCJyZW5kZXJDYW5jZWxsYXRpb25TbGlkZSIsInJlbmRlclByZW1hZGVTbGlkZXMiLCJpc0ZpbGVMb2FkaW5nU2VsZWN0ZWQiLCJtYXAiLCJwcmVtYWRlIiwic3VtbWFyeSIsInRvU3RyaW5nIiwiam9iIiwiYWxpYXMiLCJ0b0xvd2VyQ2FzZSIsInJlcGxhY2VBbGwiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJFbXB0eSIsImNhbGxiYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBOztBQUNPLElBQU1BLFdBQWI7QUFBQTs7QUFBQTs7QUFDRTtBQUNGO0FBQ0E7O0FB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YWdlcy9pbmRleC5iMzkwOTcyYzI1NzE5NThkNmQ0Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xyXG5pbXBvcnQgeyBcclxuICB0b2tlbml6ZSwgXHJcbiAgcGFyc2UsXHJcbiAgVW5pZG9jRXZlbnQsIFxyXG4gIFVuaWRvY1Byb2R1Y2VyLCBcclxuICBVbmlkb2NSZWR1Y2VyLCBcclxuICBVbmlkb2NWYWxpZGF0aW9uRXZlbnQsXHJcbiAgVW5pZG9jVmFsaWRhdG9yIFxyXG59IGZyb20gJ0BjZWRyaWMtZGVtb25naXZlcnQvdW5pZG9jJ1xyXG5cclxuaW1wb3J0IHsgRW1wdHkgfSBmcm9tICcuLi8uLi8uLi90eXBlc2NyaXB0L3V0aWxzJ1xyXG5pbXBvcnQgeyBVbmlkb2NGaWxlU3ltYm9sUHJvZHVjZXIgfSBmcm9tICcuLi8uLi8uLi90eXBlc2NyaXB0L3VuaWRvYy9Vbmlkb2NGaWxlU3ltYm9sUHJvZHVjZXInXHJcbmltcG9ydCB7IFVuaWRvY0NvbW1hbmQgfSBmcm9tICcuLi8uLi8uLi90eXBlc2NyaXB0L3VuaWRvYy9Vbmlkb2NDb21tYW5kJ1xyXG5pbXBvcnQgeyBJbnZlc3RpZ2F0b3JDb21tYW5kIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXNjcmlwdC91bmlkb2MvSW52ZXN0aWdhdG9yQ29tbWFuZCdcclxuaW1wb3J0IHsgQXBwbGljYXRpb25FdmVudCB9IGZyb20gJy4uLy4uLy4uL3R5cGVzY3JpcHQvYXBwbGljYXRpb24vQXBwbGljYXRpb25FdmVudCdcclxuaW1wb3J0IHsgSW52ZXN0aWdhdG9yIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXNjcmlwdC9JbnZlc3RpZ2F0b3InXHJcblxyXG5pbXBvcnQgeyBJbWFnZXMgfSBmcm9tICcuLi8uLi9JbWFnZXMnXHJcbmltcG9ydCB7IExvYWRlciB9IGZyb20gJy4uLy4uL0xvYWRlcidcclxuaW1wb3J0IHsgU3RhdGljU2xpZGVzaG93ICB9IGZyb20gJy4uLy4uL1N0YXRpY1NsaWRlc2hvdydcclxuaW1wb3J0IHsgUHJlbWFkZXMgfSBmcm9tICcuL1ByZW1hZGVzJ1xyXG5pbXBvcnQgeyBMb2FkaW5nUGFnZVN0YXRlIH0gZnJvbSAnLi9Mb2FkaW5nUGFnZVN0YXRlJ1xyXG5pbXBvcnQgeyBTbGlkZSB9IGZyb20gJy4uLy4uL1NsaWRlJ1xyXG5cclxuXHJcbi8qKlxyXG4gKiBcclxuICovXHJcbmV4cG9ydCBjbGFzcyBMb2FkaW5nUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxMb2FkaW5nUGFnZS5Qcm9wZXJ0aWVzLCBMb2FkaW5nUGFnZS5TdGF0ZT4ge1xyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgZGVmYXVsdFByb3BzOiBSZWFkb25seTxMb2FkaW5nUGFnZS5Qcm9wZXJ0aWVzPiA9IHtcclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIG9uQ2hhbmdlOiBFbXB0eS5jYWxsYmFja1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHJpdmF0ZSByZWFkb25seSBfaW5wdXQ6IFJlYWN0LlJlZk9iamVjdDxIVE1MSW5wdXRFbGVtZW50PlxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgY29uc3RydWN0b3IgKHByb3BlcnRpZXM6IExvYWRpbmdQYWdlLlByb3BlcnRpZXMpIHtcclxuICAgIHN1cGVyKHByb3BlcnRpZXMpXHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgcHJlbWFkZXM6IHVuZGVmaW5lZCxcclxuICAgICAgc3RhdGU6IExvYWRpbmdQYWdlU3RhdGUuSU5JVElBTCxcclxuICAgICAgZmlsZTogdW5kZWZpbmVkLFxyXG4gICAgICBzY3JvbGw6IDAsXHJcbiAgICAgIG1vdXNlOiAtMVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaGFuZGxlUHJlbWFkZXNMb2FkaW5nID0gdGhpcy5oYW5kbGVQcmVtYWRlc0xvYWRpbmcuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVQcmVtYWRlUmVuZGVyaW5nID0gdGhpcy5oYW5kbGVQcmVtYWRlUmVuZGVyaW5nLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlUHJlbWFkZVNsaWRlUmVuZGVyaW5nID0gdGhpcy5oYW5kbGVQcmVtYWRlU2xpZGVSZW5kZXJpbmcuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVJbnB1dENoYW5nZSA9IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVEcm9wID0gdGhpcy5oYW5kbGVEcm9wLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlU2lsZW50QWN0aW9uID0gdGhpcy5oYW5kbGVTaWxlbnRBY3Rpb24uYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVDYW5jZWwgPSB0aGlzLmhhbmRsZUNhbmNlbC5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmhhbmRsZUZpbGVTZWxlY3Rpb24gPSB0aGlzLmhhbmRsZUZpbGVTZWxlY3Rpb24uYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVGaWxlVmFsaWRhdGlvbiA9IHRoaXMuaGFuZGxlRmlsZVZhbGlkYXRpb24uYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVGaWxlUmVkdWN0aW9uID0gdGhpcy5oYW5kbGVGaWxlUmVkdWN0aW9uLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlQ2FuY2VsbGF0aW9uID0gdGhpcy5oYW5kbGVDYW5jZWxsYXRpb24uYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVTY3JvbGwgPSB0aGlzLmhhbmRsZVNjcm9sbC5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmhhbmRsZU1vdXNlRW50ZXJPcHRpb24gPSB0aGlzLmhhbmRsZU1vdXNlRW50ZXJPcHRpb24uYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVNb3VzZUxlYXZlT3B0aW9uID0gdGhpcy5oYW5kbGVNb3VzZUxlYXZlT3B0aW9uLmJpbmQodGhpcylcclxuXHJcbiAgICB0aGlzLl9pbnB1dCA9IFJlYWN0LmNyZWF0ZVJlZigpXHJcblxyXG4gICAgUHJlbWFkZXMubG9hZCgpLnRoZW4odGhpcy5oYW5kbGVQcmVtYWRlc0xvYWRpbmcpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgaGFuZGxlTW91c2VFbnRlck9wdGlvbiAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KTogdm9pZCB7XHJcbiAgICBjb25zdCB0YXJnZXQ6IEhUTUxCdXR0b25FbGVtZW50ID0gZXZlbnQuY3VycmVudFRhcmdldFxyXG4gICAgY29uc3QgYmFzaXM6IG51bWJlciA9ICh0YXJnZXQucGFyZW50Tm9kZS5maXJzdEVsZW1lbnRDaGlsZCBhcyBhbnkpLm9mZnNldFRvcFxyXG4gICAgXHJcbiAgICBjb25zb2xlLmxvZyh0YXJnZXQub2Zmc2V0VG9wLCBiYXNpcylcclxuICAgIGNvbnNvbGUubG9nKHRhcmdldC5vZmZzZXRUb3AgLSBiYXNpcylcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBtb3VzZTogdGFyZ2V0Lm9mZnNldFRvcCAtIGJhc2lzIH0pXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgaGFuZGxlTW91c2VMZWF2ZU9wdGlvbiAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KTogdm9pZCB7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyBoYW5kbGVQcmVtYWRlc0xvYWRpbmcocHJlbWFkZXM6IEludmVzdGlnYXRvcltdKTogdm9pZCB7XHJcbiAgICBwcmVtYWRlcy5zb3J0KEludmVzdGlnYXRvci5jb21wYXJlQnlOYW1lKVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHByZW1hZGVzIH0pXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwcml2YXRlIGhhbmRsZUlucHV0Q2hhbmdlKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pik6IHZvaWQge1xyXG4gICAgaWYgKGV2ZW50LnRhcmdldC5maWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBcclxuICAgICAgICBzdGF0ZTogTG9hZGluZ1BhZ2VTdGF0ZS5MT0FESU5HLFxyXG4gICAgICAgIGZpbGU6IGV2ZW50LnRhcmdldC5maWxlc1swXSBcclxuICAgICAgfSwgdGhpcy5oYW5kbGVGaWxlU2VsZWN0aW9uLmJpbmQodW5kZWZpbmVkLCBldmVudC50YXJnZXQuZmlsZXNbMF0pKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBoYW5kbGVTaWxlbnRBY3Rpb24oZXZlbnQ6IFJlYWN0LlN5bnRoZXRpY0V2ZW50KTogdm9pZCB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBoYW5kbGVEcm9wKGV2ZW50OiBSZWFjdC5EcmFnRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pOiB2b2lkIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgY29uc3QgZHJhZ2dlZDogRGF0YVRyYW5zZmVyID0gZXZlbnQuZGF0YVRyYW5zZmVyXHJcblxyXG4gICAgaWYgKGRyYWdnZWQuZmlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBmb3IgKGNvbnN0IGZpbGUgb2YgZHJhZ2dlZC5maWxlcykge1xyXG4gICAgICAgIGlmIChmaWxlLm5hbWUuZW5kc1dpdGgoJy50eHQnKSkge1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFxyXG4gICAgICAgICAgICBzdGF0ZTogTG9hZGluZ1BhZ2VTdGF0ZS5MT0FESU5HLFxyXG4gICAgICAgICAgICBmaWxlXHJcbiAgICAgICAgICB9LCB0aGlzLmhhbmRsZUZpbGVTZWxlY3Rpb24uYmluZCh1bmRlZmluZWQsIGZpbGUpKVxyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHByaXZhdGUgaGFuZGxlU2Nyb2xsKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50LCBXaGVlbEV2ZW50Pik6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNjcm9sbDogZXZlbnQuY3VycmVudFRhcmdldC5zY3JvbGxUb3AgfSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHByaXZhdGUgaGFuZGxlUHJlbWFkZVNlbGVjdGlvbiAoaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShBcHBsaWNhdGlvbkV2ZW50LnVzZSh0aGlzLnN0YXRlLnByZW1hZGVzW2luZGV4XSkpXHJcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKEFwcGxpY2F0aW9uRXZlbnQuc2hvd0ludmVzdGlnYXRvclBhZ2UoKSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHByaXZhdGUgaGFuZGxlQ2xpY2soZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5zdGF0ZSAhPT0gTG9hZGluZ1BhZ2VTdGF0ZS5JTklUSUFMKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNlbGVjdGVkOiBudW1iZXIgPSB0aGlzLmdldFNlbGVjdGVkKClcclxuXHJcbiAgICBpZiAoc2VsZWN0ZWQgPCAxKSB7XHJcbiAgICAgIHRoaXMuX2lucHV0LmN1cnJlbnQuY2xpY2soKVxyXG4gICAgfSBlbHNlIGlmIChzZWxlY3RlZCA9PT0gMSkge1xyXG4gICAgICBpZiAodGhpcy5wcm9wcy5jYW5jZWxsYWJsZSkge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQ2FuY2VsbGF0aW9uKClcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5oYW5kbGVQcmVtYWRlU2VsZWN0aW9uKHNlbGVjdGVkIC0gMSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHByaXZhdGUgaGFuZGxlQ2FuY2VsKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50Pik6IHZvaWQge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoQXBwbGljYXRpb25FdmVudC5zaG93SW52ZXN0aWdhdG9yUGFnZSgpKVxyXG4gIH1cclxuXHJcbiAgXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgIHByaXZhdGUgaGFuZGxlQ2FuY2VsbGF0aW9uICgpIDogdm9pZCB7XHJcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKEFwcGxpY2F0aW9uRXZlbnQuc2hvd0ludmVzdGlnYXRvclBhZ2UoKSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHByaXZhdGUgaGFuZGxlRmlsZVZhbGlkYXRpb24gKHZhbGlkYXRpb246IFVuaWRvY1ZhbGlkYXRpb25FdmVudCkgOiB2b2lkIHtcclxuICAgIC8vIEBUT0RPIGVycm9yLWNoZWNrXHJcbiAgICAvL2NvbnNvbGUubG9nKHZhbGlkYXRpb24udG9TdHJpbmcoKSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHByaXZhdGUgaGFuZGxlRmlsZVJlZHVjdGlvbiAodmFsdWU6IEludmVzdGlnYXRvcikgOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBcclxuICAgICAgc3RhdGU6IExvYWRpbmdQYWdlU3RhdGUuUkVTT0xWRURcclxuICAgIH0pXHJcblxyXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShBcHBsaWNhdGlvbkV2ZW50LnVzZSh2YWx1ZSkpXHJcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKEFwcGxpY2F0aW9uRXZlbnQuc2hvd0ludmVzdGlnYXRvclBhZ2UoKSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHByaXZhdGUgaGFuZGxlRmlsZVNlbGVjdGlvbihmaWxlOiBGaWxlKTogdm9pZCB7XHJcbiAgICBjb25zdCBzb3VyY2U6IFVuaWRvY0ZpbGVTeW1ib2xQcm9kdWNlciA9IFVuaWRvY0ZpbGVTeW1ib2xQcm9kdWNlci5jcmVhdGUoZmlsZSlcclxuICAgIGNvbnN0IGV2ZW50czogVW5pZG9jUHJvZHVjZXI8VW5pZG9jRXZlbnQ+ID0gcGFyc2UodG9rZW5pemUoc291cmNlKSlcclxuICAgIGNvbnN0IHZhbGlkYXRvcjogVW5pZG9jVmFsaWRhdG9yID0gVW5pZG9jVmFsaWRhdG9yLmtpc3MoVW5pZG9jQ29tbWFuZC52YWxpZGF0ZVVuaWRvYy5mYWN0b3J5KEludmVzdGlnYXRvckNvbW1hbmQudmFsaWRhdGUpKVxyXG5cclxuICAgIHZhbGlkYXRvci5zdWJzY3JpYmUoZXZlbnRzKVxyXG5cclxuICAgIGNvbnN0IHJlZHVjZXI6IFVuaWRvY1Byb2R1Y2VyPEludmVzdGlnYXRvcj4gPSBVbmlkb2NSZWR1Y2VyLnJlZHVjZS52YWxpZGF0aW9uKHZhbGlkYXRvciwgVW5pZG9jQ29tbWFuZC5yZWR1Y2UuZmFjdG9yeShJbnZlc3RpZ2F0b3JDb21tYW5kLnJlZHVjZSkpXHJcblxyXG4gICAgdmFsaWRhdG9yLm9uKCduZXh0JywgdGhpcy5oYW5kbGVGaWxlVmFsaWRhdGlvbilcclxuICAgIHJlZHVjZXIub24oJ25leHQnLCB0aGlzLmhhbmRsZUZpbGVSZWR1Y3Rpb24pXHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IFxyXG4gICAgICBzdGF0ZTogTG9hZGluZ1BhZ2VTdGF0ZS5MT0FESU5HLFxyXG4gICAgICBmaWxlXHJcbiAgICB9LCBzb3VyY2UucmVhZC5iaW5kKHNvdXJjZSkpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgZ2V0U2VsZWN0ZWQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiAoKCh0aGlzLnN0YXRlLnNjcm9sbCArIDUwKSAvIDEwMCkgPDwgMClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyBpc1NlbGVjdGVkKGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmdldFNlbGVjdGVkKCkgPT09IGluZGV4XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgaXNGaWxlTG9hZGluZ1NlbGVjdGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNTZWxlY3RlZCgwKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIGlzQ2FuY2VsbGF0aW9uU2VsZWN0ZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jYW5jZWxsYWJsZSAmJiB0aGlzLmlzU2VsZWN0ZWQoMSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyBpc1ByZW1hZGVTZWxlY3RlZChpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1NlbGVjdGVkKGluZGV4ICsgMilcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyByZW5kZXIgKCkgOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBcclxuICAgICAgICBvbkRyb3A9e3RoaXMuaGFuZGxlRHJvcH0gXHJcbiAgICAgICAgb25EcmFnRW50ZXI9e3RoaXMuaGFuZGxlU2lsZW50QWN0aW9ufVxyXG4gICAgICAgIG9uRHJhZ092ZXI9e3RoaXMuaGFuZGxlU2lsZW50QWN0aW9ufVxyXG4gICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdsYXlvdXQgbGF5b3V0LWxvYWRpbmctcGFnZScsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX1cclxuICAgICAgPlxyXG4gICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgcmVmPXt0aGlzLl9pbnB1dH0gXHJcbiAgICAgICAgICB0eXBlPSdmaWxlJyBcclxuICAgICAgICAgIGFjY2VwdD0ndGV4dC9wbGFpbicgXHJcbiAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXYgXHJcbiAgICAgICAgICBjbGFzc05hbWU9J2xheW91dC1sb2FkaW5nLXBhZ2Utb3B0aW9ucydcclxuICAgICAgICAgIG9uU2Nyb2xsPXt0aGlzLmhhbmRsZVNjcm9sbH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7IHRoaXMucmVuZGVyRmlsZSgpIH1cclxuICAgICAgICAgIHsgdGhpcy5yZW5kZXJDYW5jZWxsYXRpb24oKSB9XHJcbiAgICAgICAgICB7IHRoaXMucmVuZGVyUHJlbWFkZXMoKSB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xheW91dC1sb2FkaW5nLXBhZ2UtZGlzcGxheSc+XHJcbiAgICAgICAgICA8U3RhdGljU2xpZGVzaG93IGluZGV4PXt0aGlzLmdldFNlbGVjdGVkKCl9PlxyXG4gICAgICAgICAgICB7IHRoaXMucmVuZGVyRmlsZVNsaWRlKCkgfVxyXG4gICAgICAgICAgICB7IHRoaXMucmVuZGVyQ2FuY2VsbGF0aW9uU2xpZGUoKSB9XHJcbiAgICAgICAgICAgIHsgdGhpcy5yZW5kZXJQcmVtYWRlU2xpZGVzKCkgfVxyXG4gICAgICAgICAgPC9TdGF0aWNTbGlkZXNob3c+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIHJlbmRlckZpbGUoKTogUmVhY3QuUmVhY3ROb2RlIHtcclxuICAgIGNvbnN0IHNlbGVjdGVkOiBib29sZWFuID0gdGhpcy5pc0ZpbGVMb2FkaW5nU2VsZWN0ZWQoKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxidXR0b24gXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdsb2FkaW5nLW9wdGlvbicsIHsgJ2lzLWFjdGl2ZSc6IHNlbGVjdGVkIH0pfVxyXG4gICAgICAgIGFyaWEtcHJlc3NlZD17c2VsZWN0ZWR9XHJcbiAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUuc3RhdGUgIT09IExvYWRpbmdQYWdlU3RhdGUuSU5JVElBTH1cclxuICAgICAgICBvbk1vdXNlRW50ZXI9e3RoaXMuaGFuZGxlTW91c2VFbnRlck9wdGlvbn1cclxuICAgICAgICBvbk1vdXNlTGVhdmU9e3RoaXMuaGFuZGxlTW91c2VMZWF2ZU9wdGlvbn1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2FkaW5nLW9wdGlvbi1pY29uJyAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2FkaW5nLW9wdGlvbi1pbmZvcm1hdGlvbic+XHJcbiAgICAgICAgICA8aDE+Q2hhcmdlciB1biBkb2N1bWVudDwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgKVxyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgcmVuZGVyQ2FuY2VsbGF0aW9uKCk6IFJlYWN0LlJlYWN0Tm9kZSB7XHJcbiAgICBjb25zdCBzZWxlY3RlZDogYm9vbGVhbiA9IHRoaXMuaXNTZWxlY3RlZCgxKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxidXR0b24gXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdsb2FkaW5nLW9wdGlvbicsIHsgJ2lzLWFjdGl2ZSc6IHNlbGVjdGVkIH0pfVxyXG4gICAgICAgIGFyaWEtcHJlc3NlZD17c2VsZWN0ZWR9XHJcbiAgICAgICAgZGlzYWJsZWQ9eyF0aGlzLnByb3BzLmNhbmNlbGxhYmxlIHx8IHRoaXMuc3RhdGUuc3RhdGUgIT09IExvYWRpbmdQYWdlU3RhdGUuSU5JVElBTH1cclxuICAgICAgICBvbk1vdXNlRW50ZXI9e3RoaXMuaGFuZGxlTW91c2VFbnRlck9wdGlvbn1cclxuICAgICAgICBvbk1vdXNlTGVhdmU9e3RoaXMuaGFuZGxlTW91c2VMZWF2ZU9wdGlvbn1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2FkaW5nLW9wdGlvbi1pY29uJyAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2FkaW5nLW9wdGlvbi1pbmZvcm1hdGlvbic+XHJcbiAgICAgICAgICA8aDE+UmV0b3VyPC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgcmVuZGVyUHJlbWFkZXMoKTogUmVhY3QuUmVhY3ROb2RlIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLnByZW1hZGVzKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLnByZW1hZGVzLm1hcCh0aGlzLmhhbmRsZVByZW1hZGVSZW5kZXJpbmcpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gPExvYWRlcj5DaGFyZ2VtZW50IGRlcyBwcsOpdGlyw6lzIGVuIGNvdXJzPC9Mb2FkZXI+XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgaGFuZGxlUHJlbWFkZVJlbmRlcmluZyhwcmVtYWRlOiBJbnZlc3RpZ2F0b3IsIGluZGV4OiBudW1iZXIpOiBSZWFjdC5SZWFjdE5vZGUge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWQ6IGJvb2xlYW4gPSB0aGlzLmlzU2VsZWN0ZWQoaW5kZXggKyAyKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxidXR0b24gXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdsb2FkaW5nLW9wdGlvbiBpcy1wcmVtYWRlJywgeyAnaXMtYWN0aXZlJzogc2VsZWN0ZWQgfSl9XHJcbiAgICAgICAgYXJpYS1wcmVzc2VkPXtzZWxlY3RlZH0gXHJcbiAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUuc3RhdGUgIT09IExvYWRpbmdQYWdlU3RhdGUuSU5JVElBTH0gXHJcbiAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICBvbk1vdXNlRW50ZXI9e3RoaXMuaGFuZGxlTW91c2VFbnRlck9wdGlvbn1cclxuICAgICAgICBvbk1vdXNlTGVhdmU9e3RoaXMuaGFuZGxlTW91c2VMZWF2ZU9wdGlvbn1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2FkaW5nLW9wdGlvbi1pY29uJz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnc3ByaXRlIHNwcml0ZS1mb2xkZXIgc3ByaXRlLXZhcmlhdGlvbi0nICsgKGluZGV4ICUgMyl9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvYWRpbmctb3B0aW9uLWluZm9ybWF0aW9uJz5cclxuICAgICAgICAgIDxoMT57IHByZW1hZGUuc3VtbWFyeS5uYW1lLnRvU3RyaW5nKCkgfTwvaDE+XHJcbiAgICAgICAgICA8aDI+eyBwcmVtYWRlLnN1bW1hcnkuam9iIH08L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gICBwdWJsaWMgcmVuZGVyRmlsZVNsaWRlKCk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8U2xpZGU+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xheW91dCBsYXlvdXQtY2VudGVyZWQnPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lci1mbHVpZCc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cganVzdGlmeS1jb250ZW50LWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC04IHRleHQtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgIDxJbWFnZXMuSG9tZSBjbGFzc05hbWU9J2ltZy1mbHVpZCcgLz5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgU8OpbGVjdGlvbm5lciBvdSBkw6lwb3NlciB1bmUgZmV1aWxsZSBkZSBwZXJzb25uYWdlLlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvU2xpZGU+XHJcbiAgICApXHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyByZW5kZXJDYW5jZWxsYXRpb25TbGlkZSgpOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFNsaWRlPlxyXG4gICAgICAgIFxyXG4gICAgICA8L1NsaWRlPlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIHJlbmRlclByZW1hZGVTbGlkZXMoKTogUmVhY3QuUmVhY3ROb2RlIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLnByZW1hZGVzKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLnByZW1hZGVzLm1hcCh0aGlzLmhhbmRsZVByZW1hZGVTbGlkZVJlbmRlcmluZylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiA8TG9hZGVyPkNoYXJnZW1lbnQgZGVzIHByw6l0aXLDqXMgZW4gY291cnM8L0xvYWRlcj5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyBoYW5kbGVQcmVtYWRlU2xpZGVSZW5kZXJpbmcocHJlbWFkZTogSW52ZXN0aWdhdG9yLCBpbmRleDogbnVtYmVyKTogUmVhY3QuUmVhY3ROb2RlIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxTbGlkZSBrZXk9e2luZGV4fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGF5b3V0IGxheW91dC1ib3R0b20gdGV4dC1jZW50ZXInPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydzcHJpdGUgc3ByaXRlLWNoYXJhY3RlciBzcHJpdGUtdmFyaWF0aW9uLScgKyBwcmVtYWRlLnN1bW1hcnkuYWxpYXMudG9Mb3dlckNhc2UoKS5yZXBsYWNlQWxsKCfDqScsICdlJyl9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvU2xpZGU+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogXHJcbiAqL1xyXG5leHBvcnQgbmFtZXNwYWNlIExvYWRpbmdQYWdlIHtcclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBleHBvcnQgdHlwZSBBcHBsaWNhdGlvbkNhbGxiYWNrID0gKGV2ZW50OiBBcHBsaWNhdGlvbkV2ZW50KSA9PiB2b2lkXHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIGV4cG9ydCB0eXBlIFByb3BlcnRpZXMgPSB7XHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmcgfCB1bmRlZmluZWQsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgY2FuY2VsbGFibGU/OiBib29sZWFuIHwgdW5kZWZpbmVkLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIG9uQ2hhbmdlPzogQXBwbGljYXRpb25DYWxsYmFjayB8IHVuZGVmaW5lZFxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgZXhwb3J0IHR5cGUgU3RhdGUgPSB7XHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBwcmVtYWRlczogdW5kZWZpbmVkIHwgSW52ZXN0aWdhdG9yW10sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgZmlsZTogRmlsZSB8IHVuZGVmaW5lZCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBzdGF0ZTogTG9hZGluZ1BhZ2VTdGF0ZSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBzY3JvbGw6IG51bWJlcixcclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBtb3VzZTogbnVtYmVyXHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==
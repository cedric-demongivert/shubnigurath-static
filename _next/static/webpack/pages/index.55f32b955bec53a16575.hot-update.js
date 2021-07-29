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
      console.log(event.currentTarget.offsetTop, event.currentTarget.parentElement.offsetTop);
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
          lineNumber: 279,
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
          lineNumber: 286,
          columnNumber: 9
        }
      }), __jsx("div", {
        className: "layout-loading-page-options",
        onScroll: this.handleScroll,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293,
          columnNumber: 9
        }
      }, this.renderFile(), this.renderCancellation(), this.renderPremades()), __jsx("div", {
        className: "layout-loading-page-display",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301,
          columnNumber: 9
        }
      }, __jsx(_StaticSlideshow__WEBPACK_IMPORTED_MODULE_17__["StaticSlideshow"], {
        index: this.getSelected(),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302,
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
          lineNumber: 319,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "loading-option-icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326,
          columnNumber: 9
        }
      }), __jsx("div", {
        className: "loading-option-information",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327,
          columnNumber: 9
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328,
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
          lineNumber: 341,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "loading-option-icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348,
          columnNumber: 9
        }
      }), __jsx("div", {
        className: "loading-option-information",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349,
          columnNumber: 9
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350,
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
            lineNumber: 363,
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
          lineNumber: 374,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "loading-option-icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 382,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: 'sprite sprite-folder sprite-variation-' + index % 3,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 383,
          columnNumber: 11
        }
      })), __jsx("div", {
        className: "loading-option-information",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 385,
          columnNumber: 9
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 386,
          columnNumber: 11
        }
      }, premade.summary.name.toString()), __jsx("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 387,
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
          lineNumber: 398,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "layout layout-centered",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 399,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "container-fluid",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 400,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "row justify-content-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 401,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "col-8 text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 402,
          columnNumber: 15
        }
      }, __jsx(_Images__WEBPACK_IMPORTED_MODULE_15__["Images"].Home, {
        className: "img-fluid",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 403,
          columnNumber: 17
        }
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 404,
          columnNumber: 17
        }
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 405,
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
          lineNumber: 421,
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
            lineNumber: 434,
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
          lineNumber: 443,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "layout layout-bottom text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 444,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: 'sprite sprite-character sprite-variation-' + premade.summary.alias.toLowerCase().replaceAll('é', 'e'),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 445,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlL2xvYWRpbmcvTG9hZGluZ1BhZ2UudHN4Il0sIm5hbWVzIjpbIkxvYWRpbmdQYWdlIiwicHJvcGVydGllcyIsIl9pbnB1dCIsInN0YXRlIiwicHJlbWFkZXMiLCJ1bmRlZmluZWQiLCJMb2FkaW5nUGFnZVN0YXRlIiwiSU5JVElBTCIsImZpbGUiLCJzY3JvbGwiLCJtb3VzZSIsImhhbmRsZVByZW1hZGVzTG9hZGluZyIsImJpbmQiLCJoYW5kbGVQcmVtYWRlUmVuZGVyaW5nIiwiaGFuZGxlUHJlbWFkZVNsaWRlUmVuZGVyaW5nIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJoYW5kbGVEcm9wIiwiaGFuZGxlU2lsZW50QWN0aW9uIiwiaGFuZGxlQ2FuY2VsIiwiaGFuZGxlRmlsZVNlbGVjdGlvbiIsImhhbmRsZUZpbGVWYWxpZGF0aW9uIiwiaGFuZGxlRmlsZVJlZHVjdGlvbiIsImhhbmRsZUNhbmNlbGxhdGlvbiIsImhhbmRsZUNsaWNrIiwiaGFuZGxlU2Nyb2xsIiwiaGFuZGxlTW91c2VFbnRlck9wdGlvbiIsImhhbmRsZU1vdXNlTGVhdmVPcHRpb24iLCJSZWFjdCIsImNyZWF0ZVJlZiIsIlByZW1hZGVzIiwibG9hZCIsInRoZW4iLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50VGFyZ2V0Iiwib2Zmc2V0VG9wIiwicGFyZW50RWxlbWVudCIsInNvcnQiLCJJbnZlc3RpZ2F0b3IiLCJjb21wYXJlQnlOYW1lIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJmaWxlcyIsImxlbmd0aCIsIkxPQURJTkciLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsImRyYWdnZWQiLCJkYXRhVHJhbnNmZXIiLCJuYW1lIiwiZW5kc1dpdGgiLCJzY3JvbGxUb3AiLCJpbmRleCIsInByb3BzIiwib25DaGFuZ2UiLCJBcHBsaWNhdGlvbkV2ZW50IiwidXNlIiwic2hvd0ludmVzdGlnYXRvclBhZ2UiLCJzZWxlY3RlZCIsImdldFNlbGVjdGVkIiwiY3VycmVudCIsImNsaWNrIiwiY2FuY2VsbGFibGUiLCJoYW5kbGVQcmVtYWRlU2VsZWN0aW9uIiwidmFsaWRhdGlvbiIsInZhbHVlIiwiUkVTT0xWRUQiLCJzb3VyY2UiLCJVbmlkb2NGaWxlU3ltYm9sUHJvZHVjZXIiLCJjcmVhdGUiLCJldmVudHMiLCJwYXJzZSIsInRva2VuaXplIiwidmFsaWRhdG9yIiwiVW5pZG9jVmFsaWRhdG9yIiwia2lzcyIsIlVuaWRvY0NvbW1hbmQiLCJ2YWxpZGF0ZVVuaWRvYyIsImZhY3RvcnkiLCJJbnZlc3RpZ2F0b3JDb21tYW5kIiwidmFsaWRhdGUiLCJzdWJzY3JpYmUiLCJyZWR1Y2VyIiwiVW5pZG9jUmVkdWNlciIsInJlZHVjZSIsIm9uIiwicmVhZCIsImlzU2VsZWN0ZWQiLCJjbGFzc25hbWVzIiwiY2xhc3NOYW1lIiwiZGlzcGxheSIsInJlbmRlckZpbGUiLCJyZW5kZXJDYW5jZWxsYXRpb24iLCJyZW5kZXJQcmVtYWRlcyIsInJlbmRlckZpbGVTbGlkZSIsInJlbmRlckNhbmNlbGxhdGlvblNsaWRlIiwicmVuZGVyUHJlbWFkZVNsaWRlcyIsImlzRmlsZUxvYWRpbmdTZWxlY3RlZCIsIm1hcCIsInByZW1hZGUiLCJzdW1tYXJ5IiwidG9TdHJpbmciLCJqb2IiLCJhbGlhcyIsInRvTG93ZXJDYXNlIiwicmVwbGFjZUFsbCIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsIkVtcHR5IiwiY2FsbGJhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUEsV0FBYjtBQUFBOztBQUFBOztBQUNFO0FBQ0Y7QUFDQTs7QUFRRTtBQUNGO0FBQ0E7O0FBR0U7QUFDRjtB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QXdCLEtBQUtyRiwyQkFBN0IsQ0FBUDtBQUNELE9BRkQsTUFFTztBQUNMLGVBQU8sTUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9EQUFQO0FBQ0Q7QUFDRjtBQUVEO0FBQ0Y7QUFDQTs7QUF6WkE7QUFBQTtBQUFBLGdEQTBacUNzRixPQTFackMsRUEwWjREL0MsS0ExWjVELEVBMFo0RjtBQUN4RixhQUNFLE1BQUMsNkNBQUQ7QUFBTyxXQUFHLEVBQUVBLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUssaUJBQVMsRUFBQyxrQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSyxpQkFBUyxFQUFFLDhDQUE4QytDLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQkcsS0FBaEIsQ0FBc0JDLFdBQXRCLEdBQW9DQyxVQUFwQyxDQUErQyxHQUEvQyxFQUFvRCxHQUFwRCxDQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsQ0FERixDQURGO0FBT0Q7QUFsYUg7O0FBQUE7QUFBQSxFQUFpQy9FLDRDQUFLLENBQUNnRixTQUF2QztBQXFhQTtBQUNBO0FBQ0E7O0FBdmFhM0csVyxDQUlZNEcsWSxHQUFpRDtBQUN0RTtBQUNKO0FBQ0E7QUFDSXJELFVBQVEsRUFBRXNELHVEQUFLLENBQUNDO0FBSnNELEM7OzZCQW9hekQ5RyxXLEtBQUFBLFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTVmMzJiOTU1YmVjNTNhMTY1NzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcclxuaW1wb3J0IHsgXHJcbiAgdG9rZW5pemUsIFxyXG4gIHBhcnNlLFxyXG4gIFVuaWRvY0V2ZW50LCBcclxuICBVbmlkb2NQcm9kdWNlciwgXHJcbiAgVW5pZG9jUmVkdWNlciwgXHJcbiAgVW5pZG9jVmFsaWRhdGlvbkV2ZW50LFxyXG4gIFVuaWRvY1ZhbGlkYXRvciBcclxufSBmcm9tICdAY2VkcmljLWRlbW9uZ2l2ZXJ0L3VuaWRvYydcclxuXHJcbmltcG9ydCB7IEVtcHR5IH0gZnJvbSAnLi4vLi4vLi4vdHlwZXNjcmlwdC91dGlscydcclxuaW1wb3J0IHsgVW5pZG9jRmlsZVN5bWJvbFByb2R1Y2VyIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXNjcmlwdC91bmlkb2MvVW5pZG9jRmlsZVN5bWJvbFByb2R1Y2VyJ1xyXG5pbXBvcnQgeyBVbmlkb2NDb21tYW5kIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXNjcmlwdC91bmlkb2MvVW5pZG9jQ29tbWFuZCdcclxuaW1wb3J0IHsgSW52ZXN0aWdhdG9yQ29tbWFuZCB9IGZyb20gJy4uLy4uLy4uL3R5cGVzY3JpcHQvdW5pZG9jL0ludmVzdGlnYXRvckNvbW1hbmQnXHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uRXZlbnQgfSBmcm9tICcuLi8uLi8uLi90eXBlc2NyaXB0L2FwcGxpY2F0aW9uL0FwcGxpY2F0aW9uRXZlbnQnXHJcbmltcG9ydCB7IEludmVzdGlnYXRvciB9IGZyb20gJy4uLy4uLy4uL3R5cGVzY3JpcHQvSW52ZXN0aWdhdG9yJ1xyXG5cclxuaW1wb3J0IHsgSW1hZ2VzIH0gZnJvbSAnLi4vLi4vSW1hZ2VzJ1xyXG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tICcuLi8uLi9Mb2FkZXInXHJcbmltcG9ydCB7IFN0YXRpY1NsaWRlc2hvdyAgfSBmcm9tICcuLi8uLi9TdGF0aWNTbGlkZXNob3cnXHJcbmltcG9ydCB7IFByZW1hZGVzIH0gZnJvbSAnLi9QcmVtYWRlcydcclxuaW1wb3J0IHsgTG9hZGluZ1BhZ2VTdGF0ZSB9IGZyb20gJy4vTG9hZGluZ1BhZ2VTdGF0ZSdcclxuaW1wb3J0IHsgU2xpZGUgfSBmcm9tICcuLi8uLi9TbGlkZSdcclxuXHJcblxyXG4vKipcclxuICogXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTG9hZGluZ1BhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8TG9hZGluZ1BhZ2UuUHJvcGVydGllcywgTG9hZGluZ1BhZ2UuU3RhdGU+IHtcclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGRlZmF1bHRQcm9wczogUmVhZG9ubHk8TG9hZGluZ1BhZ2UuUHJvcGVydGllcz4gPSB7XHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBvbkNoYW5nZTogRW1wdHkuY2FsbGJhY2tcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgX2lucHV0OiBSZWFjdC5SZWZPYmplY3Q8SFRNTElucHV0RWxlbWVudD5cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yIChwcm9wZXJ0aWVzOiBMb2FkaW5nUGFnZS5Qcm9wZXJ0aWVzKSB7XHJcbiAgICBzdXBlcihwcm9wZXJ0aWVzKVxyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHByZW1hZGVzOiB1bmRlZmluZWQsXHJcbiAgICAgIHN0YXRlOiBMb2FkaW5nUGFnZVN0YXRlLklOSVRJQUwsXHJcbiAgICAgIGZpbGU6IHVuZGVmaW5lZCxcclxuICAgICAgc2Nyb2xsOiAwLFxyXG4gICAgICBtb3VzZTogLTFcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmhhbmRsZVByZW1hZGVzTG9hZGluZyA9IHRoaXMuaGFuZGxlUHJlbWFkZXNMb2FkaW5nLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlUHJlbWFkZVJlbmRlcmluZyA9IHRoaXMuaGFuZGxlUHJlbWFkZVJlbmRlcmluZy5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmhhbmRsZVByZW1hZGVTbGlkZVJlbmRlcmluZyA9IHRoaXMuaGFuZGxlUHJlbWFkZVNsaWRlUmVuZGVyaW5nLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UgPSB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlRHJvcCA9IHRoaXMuaGFuZGxlRHJvcC5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmhhbmRsZVNpbGVudEFjdGlvbiA9IHRoaXMuaGFuZGxlU2lsZW50QWN0aW9uLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlQ2FuY2VsID0gdGhpcy5oYW5kbGVDYW5jZWwuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVGaWxlU2VsZWN0aW9uID0gdGhpcy5oYW5kbGVGaWxlU2VsZWN0aW9uLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlRmlsZVZhbGlkYXRpb24gPSB0aGlzLmhhbmRsZUZpbGVWYWxpZGF0aW9uLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlRmlsZVJlZHVjdGlvbiA9IHRoaXMuaGFuZGxlRmlsZVJlZHVjdGlvbi5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmhhbmRsZUNhbmNlbGxhdGlvbiA9IHRoaXMuaGFuZGxlQ2FuY2VsbGF0aW9uLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlU2Nyb2xsID0gdGhpcy5oYW5kbGVTY3JvbGwuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVNb3VzZUVudGVyT3B0aW9uID0gdGhpcy5oYW5kbGVNb3VzZUVudGVyT3B0aW9uLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlTW91c2VMZWF2ZU9wdGlvbiA9IHRoaXMuaGFuZGxlTW91c2VMZWF2ZU9wdGlvbi5iaW5kKHRoaXMpXHJcblxyXG4gICAgdGhpcy5faW5wdXQgPSBSZWFjdC5jcmVhdGVSZWYoKVxyXG5cclxuICAgIFByZW1hZGVzLmxvYWQoKS50aGVuKHRoaXMuaGFuZGxlUHJlbWFkZXNMb2FkaW5nKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIGhhbmRsZU1vdXNlRW50ZXJPcHRpb24gKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50Pik6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coZXZlbnQuY3VycmVudFRhcmdldC5vZmZzZXRUb3AsIGV2ZW50LmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5vZmZzZXRUb3ApXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgaGFuZGxlTW91c2VMZWF2ZU9wdGlvbiAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KTogdm9pZCB7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyBoYW5kbGVQcmVtYWRlc0xvYWRpbmcocHJlbWFkZXM6IEludmVzdGlnYXRvcltdKTogdm9pZCB7XHJcbiAgICBwcmVtYWRlcy5zb3J0KEludmVzdGlnYXRvci5jb21wYXJlQnlOYW1lKVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHByZW1hZGVzIH0pXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwcml2YXRlIGhhbmRsZUlucHV0Q2hhbmdlKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pik6IHZvaWQge1xyXG4gICAgaWYgKGV2ZW50LnRhcmdldC5maWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBcclxuICAgICAgICBzdGF0ZTogTG9hZGluZ1BhZ2VTdGF0ZS5MT0FESU5HLFxyXG4gICAgICAgIGZpbGU6IGV2ZW50LnRhcmdldC5maWxlc1swXSBcclxuICAgICAgfSwgdGhpcy5oYW5kbGVGaWxlU2VsZWN0aW9uLmJpbmQodW5kZWZpbmVkLCBldmVudC50YXJnZXQuZmlsZXNbMF0pKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBoYW5kbGVTaWxlbnRBY3Rpb24oZXZlbnQ6IFJlYWN0LlN5bnRoZXRpY0V2ZW50KTogdm9pZCB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBoYW5kbGVEcm9wKGV2ZW50OiBSZWFjdC5EcmFnRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pOiB2b2lkIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgY29uc3QgZHJhZ2dlZDogRGF0YVRyYW5zZmVyID0gZXZlbnQuZGF0YVRyYW5zZmVyXHJcblxyXG4gICAgaWYgKGRyYWdnZWQuZmlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBmb3IgKGNvbnN0IGZpbGUgb2YgZHJhZ2dlZC5maWxlcykge1xyXG4gICAgICAgIGlmIChmaWxlLm5hbWUuZW5kc1dpdGgoJy50eHQnKSkge1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFxyXG4gICAgICAgICAgICBzdGF0ZTogTG9hZGluZ1BhZ2VTdGF0ZS5MT0FESU5HLFxyXG4gICAgICAgICAgICBmaWxlXHJcbiAgICAgICAgICB9LCB0aGlzLmhhbmRsZUZpbGVTZWxlY3Rpb24uYmluZCh1bmRlZmluZWQsIGZpbGUpKVxyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHByaXZhdGUgaGFuZGxlU2Nyb2xsKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50LCBXaGVlbEV2ZW50Pik6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNjcm9sbDogZXZlbnQuY3VycmVudFRhcmdldC5zY3JvbGxUb3AgfSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHByaXZhdGUgaGFuZGxlUHJlbWFkZVNlbGVjdGlvbiAoaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShBcHBsaWNhdGlvbkV2ZW50LnVzZSh0aGlzLnN0YXRlLnByZW1hZGVzW2luZGV4XSkpXHJcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKEFwcGxpY2F0aW9uRXZlbnQuc2hvd0ludmVzdGlnYXRvclBhZ2UoKSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHByaXZhdGUgaGFuZGxlQ2xpY2soZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5zdGF0ZSAhPT0gTG9hZGluZ1BhZ2VTdGF0ZS5JTklUSUFMKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNlbGVjdGVkOiBudW1iZXIgPSB0aGlzLmdldFNlbGVjdGVkKClcclxuXHJcbiAgICBpZiAoc2VsZWN0ZWQgPCAxKSB7XHJcbiAgICAgIHRoaXMuX2lucHV0LmN1cnJlbnQuY2xpY2soKVxyXG4gICAgfSBlbHNlIGlmIChzZWxlY3RlZCA9PT0gMSkge1xyXG4gICAgICBpZiAodGhpcy5wcm9wcy5jYW5jZWxsYWJsZSkge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQ2FuY2VsbGF0aW9uKClcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5oYW5kbGVQcmVtYWRlU2VsZWN0aW9uKHNlbGVjdGVkIC0gMSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHByaXZhdGUgaGFuZGxlQ2FuY2VsKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50Pik6IHZvaWQge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoQXBwbGljYXRpb25FdmVudC5zaG93SW52ZXN0aWdhdG9yUGFnZSgpKVxyXG4gIH1cclxuXHJcbiAgXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgIHByaXZhdGUgaGFuZGxlQ2FuY2VsbGF0aW9uICgpIDogdm9pZCB7XHJcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKEFwcGxpY2F0aW9uRXZlbnQuc2hvd0ludmVzdGlnYXRvclBhZ2UoKSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHByaXZhdGUgaGFuZGxlRmlsZVZhbGlkYXRpb24gKHZhbGlkYXRpb246IFVuaWRvY1ZhbGlkYXRpb25FdmVudCkgOiB2b2lkIHtcclxuICAgIC8vIEBUT0RPIGVycm9yLWNoZWNrXHJcbiAgICAvL2NvbnNvbGUubG9nKHZhbGlkYXRpb24udG9TdHJpbmcoKSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHByaXZhdGUgaGFuZGxlRmlsZVJlZHVjdGlvbiAodmFsdWU6IEludmVzdGlnYXRvcikgOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBcclxuICAgICAgc3RhdGU6IExvYWRpbmdQYWdlU3RhdGUuUkVTT0xWRURcclxuICAgIH0pXHJcblxyXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShBcHBsaWNhdGlvbkV2ZW50LnVzZSh2YWx1ZSkpXHJcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKEFwcGxpY2F0aW9uRXZlbnQuc2hvd0ludmVzdGlnYXRvclBhZ2UoKSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHByaXZhdGUgaGFuZGxlRmlsZVNlbGVjdGlvbihmaWxlOiBGaWxlKTogdm9pZCB7XHJcbiAgICBjb25zdCBzb3VyY2U6IFVuaWRvY0ZpbGVTeW1ib2xQcm9kdWNlciA9IFVuaWRvY0ZpbGVTeW1ib2xQcm9kdWNlci5jcmVhdGUoZmlsZSlcclxuICAgIGNvbnN0IGV2ZW50czogVW5pZG9jUHJvZHVjZXI8VW5pZG9jRXZlbnQ+ID0gcGFyc2UodG9rZW5pemUoc291cmNlKSlcclxuICAgIGNvbnN0IHZhbGlkYXRvcjogVW5pZG9jVmFsaWRhdG9yID0gVW5pZG9jVmFsaWRhdG9yLmtpc3MoVW5pZG9jQ29tbWFuZC52YWxpZGF0ZVVuaWRvYy5mYWN0b3J5KEludmVzdGlnYXRvckNvbW1hbmQudmFsaWRhdGUpKVxyXG5cclxuICAgIHZhbGlkYXRvci5zdWJzY3JpYmUoZXZlbnRzKVxyXG5cclxuICAgIGNvbnN0IHJlZHVjZXI6IFVuaWRvY1Byb2R1Y2VyPEludmVzdGlnYXRvcj4gPSBVbmlkb2NSZWR1Y2VyLnJlZHVjZS52YWxpZGF0aW9uKHZhbGlkYXRvciwgVW5pZG9jQ29tbWFuZC5yZWR1Y2UuZmFjdG9yeShJbnZlc3RpZ2F0b3JDb21tYW5kLnJlZHVjZSkpXHJcblxyXG4gICAgdmFsaWRhdG9yLm9uKCduZXh0JywgdGhpcy5oYW5kbGVGaWxlVmFsaWRhdGlvbilcclxuICAgIHJlZHVjZXIub24oJ25leHQnLCB0aGlzLmhhbmRsZUZpbGVSZWR1Y3Rpb24pXHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IFxyXG4gICAgICBzdGF0ZTogTG9hZGluZ1BhZ2VTdGF0ZS5MT0FESU5HLFxyXG4gICAgICBmaWxlXHJcbiAgICB9LCBzb3VyY2UucmVhZC5iaW5kKHNvdXJjZSkpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgZ2V0U2VsZWN0ZWQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiAoKCh0aGlzLnN0YXRlLnNjcm9sbCArIDUwKSAvIDEwMCkgPDwgMClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyBpc1NlbGVjdGVkKGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmdldFNlbGVjdGVkKCkgPT09IGluZGV4XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgaXNGaWxlTG9hZGluZ1NlbGVjdGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNTZWxlY3RlZCgwKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIGlzQ2FuY2VsbGF0aW9uU2VsZWN0ZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jYW5jZWxsYWJsZSAmJiB0aGlzLmlzU2VsZWN0ZWQoMSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyBpc1ByZW1hZGVTZWxlY3RlZChpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1NlbGVjdGVkKGluZGV4ICsgMilcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyByZW5kZXIgKCkgOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBcclxuICAgICAgICBvbkRyb3A9e3RoaXMuaGFuZGxlRHJvcH0gXHJcbiAgICAgICAgb25EcmFnRW50ZXI9e3RoaXMuaGFuZGxlU2lsZW50QWN0aW9ufVxyXG4gICAgICAgIG9uRHJhZ092ZXI9e3RoaXMuaGFuZGxlU2lsZW50QWN0aW9ufVxyXG4gICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdsYXlvdXQgbGF5b3V0LWxvYWRpbmctcGFnZScsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX1cclxuICAgICAgPlxyXG4gICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgcmVmPXt0aGlzLl9pbnB1dH0gXHJcbiAgICAgICAgICB0eXBlPSdmaWxlJyBcclxuICAgICAgICAgIGFjY2VwdD0ndGV4dC9wbGFpbicgXHJcbiAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXYgXHJcbiAgICAgICAgICBjbGFzc05hbWU9J2xheW91dC1sb2FkaW5nLXBhZ2Utb3B0aW9ucydcclxuICAgICAgICAgIG9uU2Nyb2xsPXt0aGlzLmhhbmRsZVNjcm9sbH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7IHRoaXMucmVuZGVyRmlsZSgpIH1cclxuICAgICAgICAgIHsgdGhpcy5yZW5kZXJDYW5jZWxsYXRpb24oKSB9XHJcbiAgICAgICAgICB7IHRoaXMucmVuZGVyUHJlbWFkZXMoKSB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xheW91dC1sb2FkaW5nLXBhZ2UtZGlzcGxheSc+XHJcbiAgICAgICAgICA8U3RhdGljU2xpZGVzaG93IGluZGV4PXt0aGlzLmdldFNlbGVjdGVkKCl9PlxyXG4gICAgICAgICAgICB7IHRoaXMucmVuZGVyRmlsZVNsaWRlKCkgfVxyXG4gICAgICAgICAgICB7IHRoaXMucmVuZGVyQ2FuY2VsbGF0aW9uU2xpZGUoKSB9XHJcbiAgICAgICAgICAgIHsgdGhpcy5yZW5kZXJQcmVtYWRlU2xpZGVzKCkgfVxyXG4gICAgICAgICAgPC9TdGF0aWNTbGlkZXNob3c+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIHJlbmRlckZpbGUoKTogUmVhY3QuUmVhY3ROb2RlIHtcclxuICAgIGNvbnN0IHNlbGVjdGVkOiBib29sZWFuID0gdGhpcy5pc0ZpbGVMb2FkaW5nU2VsZWN0ZWQoKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxidXR0b24gXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdsb2FkaW5nLW9wdGlvbicsIHsgJ2lzLWFjdGl2ZSc6IHNlbGVjdGVkIH0pfVxyXG4gICAgICAgIGFyaWEtcHJlc3NlZD17c2VsZWN0ZWR9XHJcbiAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUuc3RhdGUgIT09IExvYWRpbmdQYWdlU3RhdGUuSU5JVElBTH1cclxuICAgICAgICBvbk1vdXNlRW50ZXI9e3RoaXMuaGFuZGxlTW91c2VFbnRlck9wdGlvbn1cclxuICAgICAgICBvbk1vdXNlTGVhdmU9e3RoaXMuaGFuZGxlTW91c2VMZWF2ZU9wdGlvbn1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2FkaW5nLW9wdGlvbi1pY29uJyAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2FkaW5nLW9wdGlvbi1pbmZvcm1hdGlvbic+XHJcbiAgICAgICAgICA8aDE+Q2hhcmdlciB1biBkb2N1bWVudDwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgKVxyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgcmVuZGVyQ2FuY2VsbGF0aW9uKCk6IFJlYWN0LlJlYWN0Tm9kZSB7XHJcbiAgICBjb25zdCBzZWxlY3RlZDogYm9vbGVhbiA9IHRoaXMuaXNTZWxlY3RlZCgxKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxidXR0b24gXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdsb2FkaW5nLW9wdGlvbicsIHsgJ2lzLWFjdGl2ZSc6IHNlbGVjdGVkIH0pfVxyXG4gICAgICAgIGFyaWEtcHJlc3NlZD17c2VsZWN0ZWR9XHJcbiAgICAgICAgZGlzYWJsZWQ9eyF0aGlzLnByb3BzLmNhbmNlbGxhYmxlIHx8IHRoaXMuc3RhdGUuc3RhdGUgIT09IExvYWRpbmdQYWdlU3RhdGUuSU5JVElBTH1cclxuICAgICAgICBvbk1vdXNlRW50ZXI9e3RoaXMuaGFuZGxlTW91c2VFbnRlck9wdGlvbn1cclxuICAgICAgICBvbk1vdXNlTGVhdmU9e3RoaXMuaGFuZGxlTW91c2VMZWF2ZU9wdGlvbn1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2FkaW5nLW9wdGlvbi1pY29uJyAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2FkaW5nLW9wdGlvbi1pbmZvcm1hdGlvbic+XHJcbiAgICAgICAgICA8aDE+UmV0b3VyPC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgcmVuZGVyUHJlbWFkZXMoKTogUmVhY3QuUmVhY3ROb2RlIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLnByZW1hZGVzKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLnByZW1hZGVzLm1hcCh0aGlzLmhhbmRsZVByZW1hZGVSZW5kZXJpbmcpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gPExvYWRlcj5DaGFyZ2VtZW50IGRlcyBwcsOpdGlyw6lzIGVuIGNvdXJzPC9Mb2FkZXI+XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgaGFuZGxlUHJlbWFkZVJlbmRlcmluZyhwcmVtYWRlOiBJbnZlc3RpZ2F0b3IsIGluZGV4OiBudW1iZXIpOiBSZWFjdC5SZWFjdE5vZGUge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWQ6IGJvb2xlYW4gPSB0aGlzLmlzU2VsZWN0ZWQoaW5kZXggKyAyKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxidXR0b24gXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdsb2FkaW5nLW9wdGlvbiBpcy1wcmVtYWRlJywgeyAnaXMtYWN0aXZlJzogc2VsZWN0ZWQgfSl9XHJcbiAgICAgICAgYXJpYS1wcmVzc2VkPXtzZWxlY3RlZH0gXHJcbiAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUuc3RhdGUgIT09IExvYWRpbmdQYWdlU3RhdGUuSU5JVElBTH0gXHJcbiAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICBvbk1vdXNlRW50ZXI9e3RoaXMuaGFuZGxlTW91c2VFbnRlck9wdGlvbn1cclxuICAgICAgICBvbk1vdXNlTGVhdmU9e3RoaXMuaGFuZGxlTW91c2VMZWF2ZU9wdGlvbn1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2FkaW5nLW9wdGlvbi1pY29uJz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnc3ByaXRlIHNwcml0ZS1mb2xkZXIgc3ByaXRlLXZhcmlhdGlvbi0nICsgKGluZGV4ICUgMyl9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvYWRpbmctb3B0aW9uLWluZm9ybWF0aW9uJz5cclxuICAgICAgICAgIDxoMT57IHByZW1hZGUuc3VtbWFyeS5uYW1lLnRvU3RyaW5nKCkgfTwvaDE+XHJcbiAgICAgICAgICA8aDI+eyBwcmVtYWRlLnN1bW1hcnkuam9iIH08L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gICBwdWJsaWMgcmVuZGVyRmlsZVNsaWRlKCk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8U2xpZGU+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xheW91dCBsYXlvdXQtY2VudGVyZWQnPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lci1mbHVpZCc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cganVzdGlmeS1jb250ZW50LWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC04IHRleHQtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgIDxJbWFnZXMuSG9tZSBjbGFzc05hbWU9J2ltZy1mbHVpZCcgLz5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgU8OpbGVjdGlvbm5lciBvdSBkw6lwb3NlciB1bmUgZmV1aWxsZSBkZSBwZXJzb25uYWdlLlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvU2xpZGU+XHJcbiAgICApXHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyByZW5kZXJDYW5jZWxsYXRpb25TbGlkZSgpOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFNsaWRlPlxyXG4gICAgICAgIFxyXG4gICAgICA8L1NsaWRlPlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIHJlbmRlclByZW1hZGVTbGlkZXMoKTogUmVhY3QuUmVhY3ROb2RlIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLnByZW1hZGVzKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLnByZW1hZGVzLm1hcCh0aGlzLmhhbmRsZVByZW1hZGVTbGlkZVJlbmRlcmluZylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiA8TG9hZGVyPkNoYXJnZW1lbnQgZGVzIHByw6l0aXLDqXMgZW4gY291cnM8L0xvYWRlcj5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyBoYW5kbGVQcmVtYWRlU2xpZGVSZW5kZXJpbmcocHJlbWFkZTogSW52ZXN0aWdhdG9yLCBpbmRleDogbnVtYmVyKTogUmVhY3QuUmVhY3ROb2RlIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxTbGlkZSBrZXk9e2luZGV4fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGF5b3V0IGxheW91dC1ib3R0b20gdGV4dC1jZW50ZXInPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydzcHJpdGUgc3ByaXRlLWNoYXJhY3RlciBzcHJpdGUtdmFyaWF0aW9uLScgKyBwcmVtYWRlLnN1bW1hcnkuYWxpYXMudG9Mb3dlckNhc2UoKS5yZXBsYWNlQWxsKCfDqScsICdlJyl9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvU2xpZGU+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogXHJcbiAqL1xyXG5leHBvcnQgbmFtZXNwYWNlIExvYWRpbmdQYWdlIHtcclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBleHBvcnQgdHlwZSBBcHBsaWNhdGlvbkNhbGxiYWNrID0gKGV2ZW50OiBBcHBsaWNhdGlvbkV2ZW50KSA9PiB2b2lkXHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIGV4cG9ydCB0eXBlIFByb3BlcnRpZXMgPSB7XHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmcgfCB1bmRlZmluZWQsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgY2FuY2VsbGFibGU/OiBib29sZWFuIHwgdW5kZWZpbmVkLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIG9uQ2hhbmdlPzogQXBwbGljYXRpb25DYWxsYmFjayB8IHVuZGVmaW5lZFxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgZXhwb3J0IHR5cGUgU3RhdGUgPSB7XHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBwcmVtYWRlczogdW5kZWZpbmVkIHwgSW52ZXN0aWdhdG9yW10sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgZmlsZTogRmlsZSB8IHVuZGVmaW5lZCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBzdGF0ZTogTG9hZGluZ1BhZ2VTdGF0ZSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBzY3JvbGw6IG51bWJlcixcclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBtb3VzZTogbnVtYmVyXHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==
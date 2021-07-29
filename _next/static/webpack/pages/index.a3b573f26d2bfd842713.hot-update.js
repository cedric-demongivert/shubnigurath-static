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
    value: function handleMouseEnterOption(event) {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlL2xvYWRpbmcvTG9hZGluZ1BhZ2UudHN4Il0sIm5hbWVzIjpbIkxvYWRpbmdQYWdlIiwicHJvcGVydGllcyIsIl9pbnB1dCIsInN0YXRlIiwicHJlbWFkZXMiLCJ1bmRlZmluZWQiLCJMb2FkaW5nUGFnZVN0YXRlIiwiSU5JVElBTCIsImZpbGUiLCJzY3JvbGwiLCJtb3VzZSIsImhhbmRsZVByZW1hZGVzTG9hZGluZyIsImJpbmQiLCJoYW5kbGVQcmVtYWRlUmVuZGVyaW5nIiwiaGFuZGxlUHJlbWFkZVNsaWRlUmVuZGVyaW5nIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJoYW5kbGVEcm9wIiwiaGFuZGxlU2lsZW50QWN0aW9uIiwiaGFuZGxlQ2FuY2VsIiwiaGFuZGxlRmlsZVNlbGVjdGlvbiIsImhhbmRsZUZpbGVWYWxpZGF0aW9uIiwiaGFuZGxlRmlsZVJlZHVjdGlvbiIsImhhbmRsZUNhbmNlbGxhdGlvbiIsImhhbmRsZUNsaWNrIiwiaGFuZGxlU2Nyb2xsIiwiaGFuZGxlTW91c2VFbnRlck9wdGlvbiIsImhhbmRsZU1vdXNlTGVhdmVPcHRpb24iLCJSZWFjdCIsImNyZWF0ZVJlZiIsIlByZW1hZGVzIiwibG9hZCIsInRoZW4iLCJldmVudCIsInNvcnQiLCJJbnZlc3RpZ2F0b3IiLCJjb21wYXJlQnlOYW1lIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJmaWxlcyIsImxlbmd0aCIsIkxPQURJTkciLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsImRyYWdnZWQiLCJkYXRhVHJhbnNmZXIiLCJuYW1lIiwiZW5kc1dpdGgiLCJjdXJyZW50VGFyZ2V0Iiwic2Nyb2xsVG9wIiwiaW5kZXgiLCJwcm9wcyIsIm9uQ2hhbmdlIiwiQXBwbGljYXRpb25FdmVudCIsInVzZSIsInNob3dJbnZlc3RpZ2F0b3JQYWdlIiwic2VsZWN0ZWQiLCJnZXRTZWxlY3RlZCIsImN1cnJlbnQiLCJjbGljayIsImNhbmNlbGxhYmxlIiwiaGFuZGxlUHJlbWFkZVNlbGVjdGlvbiIsInZhbGlkYXRpb24iLCJ2YWx1ZSIsIlJFU09MVkVEIiwic291cmNlIiwiVW5pZG9jRmlsZVN5bWJvbFByb2R1Y2VyIiwiY3JlYXRlIiwiZXZlbnRzIiwicGFyc2UiLCJ0b2tlbml6ZSIsInZhbGlkYXRvciIsIlVuaWRvY1ZhbGlkYXRvciIsImtpc3MiLCJVbmlkb2NDb21tYW5kIiwidmFsaWRhdGVVbmlkb2MiLCJmYWN0b3J5IiwiSW52ZXN0aWdhdG9yQ29tbWFuZCIsInZhbGlkYXRlIiwic3Vic2NyaWJlIiwicmVkdWNlciIsIlVuaWRvY1JlZHVjZXIiLCJyZWR1Y2UiLCJvbiIsInJlYWQiLCJpc1NlbGVjdGVkIiwiY2xhc3NuYW1lcyIsImNsYXNzTmFtZSIsImRpc3BsYXkiLCJyZW5kZXJGaWxlIiwicmVuZGVyQ2FuY2VsbGF0aW9uIiwicmVuZGVyUHJlbWFkZXMiLCJyZW5kZXJGaWxlU2xpZGUiLCJyZW5kZXJDYW5jZWxsYXRpb25TbGlkZSIsInJlbmRlclByZW1hZGVTbGlkZXMiLCJpc0ZpbGVMb2FkaW5nU2VsZWN0ZWQiLCJtYXAiLCJwcmVtYWRlIiwic3VtbWFyeSIsInRvU3RyaW5nIiwiam9iIiwiYWxpYXMiLCJ0b0xvd2VyQ2FzZSIsInJlcGxhY2VBbGwiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJFbXB0eSIsImNhbGxiYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBOztBQUNPLElBQU1BLFdBQWI7QUFBQTs7QUFBQTs7QUFDRTtBQUNGO0FBQ0E7O0FBUUU7QUFDRjtBQUNBOztBQUdFO0FBQ0Y7QUFDQTtBQUNFLHVCQUFvQkMsVUFBcEIsRUFBd0Q7QUFBQTs7QUFBQTs7QUFD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MVpyQyxFQTBaNEQvQyxLQTFaNUQsRUEwWjRGO0FBQ3hGLGFBQ0UsTUFBQyw2Q0FBRDtBQUFPLFdBQUcsRUFBRUEsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSyxpQkFBUyxFQUFDLGtDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFLLGlCQUFTLEVBQUUsOENBQThDK0MsT0FBTyxDQUFDQyxPQUFSLENBQWdCRyxLQUFoQixDQUFzQkMsV0FBdEIsR0FBb0NDLFVBQXBDLENBQStDLEdBQS9DLEVBQW9ELEdBQXBELENBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixDQURGLENBREY7QUFPRDtBQWxhSDs7QUFBQTtBQUFBLEVBQWlDM0UsNENBQUssQ0FBQzRFLFNBQXZDO0FBcWFBO0FBQ0E7QUFDQTs7QUF2YWF2RyxXLENBSVl3RyxZLEdBQWlEO0FBQ3RFO0FBQ0o7QUFDQTtBQUNJckQsVUFBUSxFQUFFc0QsdURBQUssQ0FBQ0M7QUFKc0QsQzs7NkJBb2F6RDFHLFcsS0FBQUEsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hM2I1NzNmMjZkMmJmZDg0MjcxMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xyXG5pbXBvcnQgeyBcclxuICB0b2tlbml6ZSwgXHJcbiAgcGFyc2UsXHJcbiAgVW5pZG9jRXZlbnQsIFxyXG4gIFVuaWRvY1Byb2R1Y2VyLCBcclxuICBVbmlkb2NSZWR1Y2VyLCBcclxuICBVbmlkb2NWYWxpZGF0aW9uRXZlbnQsXHJcbiAgVW5pZG9jVmFsaWRhdG9yIFxyXG59IGZyb20gJ0BjZWRyaWMtZGVtb25naXZlcnQvdW5pZG9jJ1xyXG5cclxuaW1wb3J0IHsgRW1wdHkgfSBmcm9tICcuLi8uLi8uLi90eXBlc2NyaXB0L3V0aWxzJ1xyXG5pbXBvcnQgeyBVbmlkb2NGaWxlU3ltYm9sUHJvZHVjZXIgfSBmcm9tICcuLi8uLi8uLi90eXBlc2NyaXB0L3VuaWRvYy9Vbmlkb2NGaWxlU3ltYm9sUHJvZHVjZXInXHJcbmltcG9ydCB7IFVuaWRvY0NvbW1hbmQgfSBmcm9tICcuLi8uLi8uLi90eXBlc2NyaXB0L3VuaWRvYy9Vbmlkb2NDb21tYW5kJ1xyXG5pbXBvcnQgeyBJbnZlc3RpZ2F0b3JDb21tYW5kIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXNjcmlwdC91bmlkb2MvSW52ZXN0aWdhdG9yQ29tbWFuZCdcclxuaW1wb3J0IHsgQXBwbGljYXRpb25FdmVudCB9IGZyb20gJy4uLy4uLy4uL3R5cGVzY3JpcHQvYXBwbGljYXRpb24vQXBwbGljYXRpb25FdmVudCdcclxuaW1wb3J0IHsgSW52ZXN0aWdhdG9yIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXNjcmlwdC9JbnZlc3RpZ2F0b3InXHJcblxyXG5pbXBvcnQgeyBJbWFnZXMgfSBmcm9tICcuLi8uLi9JbWFnZXMnXHJcbmltcG9ydCB7IExvYWRlciB9IGZyb20gJy4uLy4uL0xvYWRlcidcclxuaW1wb3J0IHsgU3RhdGljU2xpZGVzaG93ICB9IGZyb20gJy4uLy4uL1N0YXRpY1NsaWRlc2hvdydcclxuaW1wb3J0IHsgUHJlbWFkZXMgfSBmcm9tICcuL1ByZW1hZGVzJ1xyXG5pbXBvcnQgeyBMb2FkaW5nUGFnZVN0YXRlIH0gZnJvbSAnLi9Mb2FkaW5nUGFnZVN0YXRlJ1xyXG5pbXBvcnQgeyBTbGlkZSB9IGZyb20gJy4uLy4uL1NsaWRlJ1xyXG5cclxuXHJcbi8qKlxyXG4gKiBcclxuICovXHJcbmV4cG9ydCBjbGFzcyBMb2FkaW5nUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxMb2FkaW5nUGFnZS5Qcm9wZXJ0aWVzLCBMb2FkaW5nUGFnZS5TdGF0ZT4ge1xyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgZGVmYXVsdFByb3BzOiBSZWFkb25seTxMb2FkaW5nUGFnZS5Qcm9wZXJ0aWVzPiA9IHtcclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIG9uQ2hhbmdlOiBFbXB0eS5jYWxsYmFja1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHJpdmF0ZSByZWFkb25seSBfaW5wdXQ6IFJlYWN0LlJlZk9iamVjdDxIVE1MSW5wdXRFbGVtZW50PlxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgY29uc3RydWN0b3IgKHByb3BlcnRpZXM6IExvYWRpbmdQYWdlLlByb3BlcnRpZXMpIHtcclxuICAgIHN1cGVyKHByb3BlcnRpZXMpXHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgcHJlbWFkZXM6IHVuZGVmaW5lZCxcclxuICAgICAgc3RhdGU6IExvYWRpbmdQYWdlU3RhdGUuSU5JVElBTCxcclxuICAgICAgZmlsZTogdW5kZWZpbmVkLFxyXG4gICAgICBzY3JvbGw6IDAsXHJcbiAgICAgIG1vdXNlOiAtMVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaGFuZGxlUHJlbWFkZXNMb2FkaW5nID0gdGhpcy5oYW5kbGVQcmVtYWRlc0xvYWRpbmcuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVQcmVtYWRlUmVuZGVyaW5nID0gdGhpcy5oYW5kbGVQcmVtYWRlUmVuZGVyaW5nLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlUHJlbWFkZVNsaWRlUmVuZGVyaW5nID0gdGhpcy5oYW5kbGVQcmVtYWRlU2xpZGVSZW5kZXJpbmcuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVJbnB1dENoYW5nZSA9IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVEcm9wID0gdGhpcy5oYW5kbGVEcm9wLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlU2lsZW50QWN0aW9uID0gdGhpcy5oYW5kbGVTaWxlbnRBY3Rpb24uYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVDYW5jZWwgPSB0aGlzLmhhbmRsZUNhbmNlbC5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmhhbmRsZUZpbGVTZWxlY3Rpb24gPSB0aGlzLmhhbmRsZUZpbGVTZWxlY3Rpb24uYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVGaWxlVmFsaWRhdGlvbiA9IHRoaXMuaGFuZGxlRmlsZVZhbGlkYXRpb24uYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVGaWxlUmVkdWN0aW9uID0gdGhpcy5oYW5kbGVGaWxlUmVkdWN0aW9uLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlQ2FuY2VsbGF0aW9uID0gdGhpcy5oYW5kbGVDYW5jZWxsYXRpb24uYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVTY3JvbGwgPSB0aGlzLmhhbmRsZVNjcm9sbC5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmhhbmRsZU1vdXNlRW50ZXJPcHRpb24gPSB0aGlzLmhhbmRsZU1vdXNlRW50ZXJPcHRpb24uYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVNb3VzZUxlYXZlT3B0aW9uID0gdGhpcy5oYW5kbGVNb3VzZUxlYXZlT3B0aW9uLmJpbmQodGhpcylcclxuXHJcbiAgICB0aGlzLl9pbnB1dCA9IFJlYWN0LmNyZWF0ZVJlZigpXHJcblxyXG4gICAgUHJlbWFkZXMubG9hZCgpLnRoZW4odGhpcy5oYW5kbGVQcmVtYWRlc0xvYWRpbmcpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgaGFuZGxlTW91c2VFbnRlck9wdGlvbiAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KTogdm9pZCB7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIGhhbmRsZU1vdXNlTGVhdmVPcHRpb24gKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50Pik6IHZvaWQge1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgaGFuZGxlUHJlbWFkZXNMb2FkaW5nKHByZW1hZGVzOiBJbnZlc3RpZ2F0b3JbXSk6IHZvaWQge1xyXG4gICAgcHJlbWFkZXMuc29ydChJbnZlc3RpZ2F0b3IuY29tcGFyZUJ5TmFtZSlcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBwcmVtYWRlcyB9KVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBoYW5kbGVJbnB1dENoYW5nZShldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pOiB2b2lkIHtcclxuICAgIGlmIChldmVudC50YXJnZXQuZmlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgXHJcbiAgICAgICAgc3RhdGU6IExvYWRpbmdQYWdlU3RhdGUuTE9BRElORyxcclxuICAgICAgICBmaWxlOiBldmVudC50YXJnZXQuZmlsZXNbMF0gXHJcbiAgICAgIH0sIHRoaXMuaGFuZGxlRmlsZVNlbGVjdGlvbi5iaW5kKHVuZGVmaW5lZCwgZXZlbnQudGFyZ2V0LmZpbGVzWzBdKSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHByaXZhdGUgaGFuZGxlU2lsZW50QWN0aW9uKGV2ZW50OiBSZWFjdC5TeW50aGV0aWNFdmVudCk6IHZvaWQge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHByaXZhdGUgaGFuZGxlRHJvcChldmVudDogUmVhY3QuRHJhZ0V2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KTogdm9pZCB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgIGNvbnN0IGRyYWdnZWQ6IERhdGFUcmFuc2ZlciA9IGV2ZW50LmRhdGFUcmFuc2ZlclxyXG5cclxuICAgIGlmIChkcmFnZ2VkLmZpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgZm9yIChjb25zdCBmaWxlIG9mIGRyYWdnZWQuZmlsZXMpIHtcclxuICAgICAgICBpZiAoZmlsZS5uYW1lLmVuZHNXaXRoKCcudHh0JykpIHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBcclxuICAgICAgICAgICAgc3RhdGU6IExvYWRpbmdQYWdlU3RhdGUuTE9BRElORyxcclxuICAgICAgICAgICAgZmlsZVxyXG4gICAgICAgICAgfSwgdGhpcy5oYW5kbGVGaWxlU2VsZWN0aW9uLmJpbmQodW5kZWZpbmVkLCBmaWxlKSlcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwcml2YXRlIGhhbmRsZVNjcm9sbChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudCwgV2hlZWxFdmVudD4pOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzY3JvbGw6IGV2ZW50LmN1cnJlbnRUYXJnZXQuc2Nyb2xsVG9wIH0pXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwcml2YXRlIGhhbmRsZVByZW1hZGVTZWxlY3Rpb24gKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoQXBwbGljYXRpb25FdmVudC51c2UodGhpcy5zdGF0ZS5wcmVtYWRlc1tpbmRleF0pKVxyXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShBcHBsaWNhdGlvbkV2ZW50LnNob3dJbnZlc3RpZ2F0b3JQYWdlKCkpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwcml2YXRlIGhhbmRsZUNsaWNrKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50Pik6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuc3RhdGUgIT09IExvYWRpbmdQYWdlU3RhdGUuSU5JVElBTCkge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZWxlY3RlZDogbnVtYmVyID0gdGhpcy5nZXRTZWxlY3RlZCgpXHJcblxyXG4gICAgaWYgKHNlbGVjdGVkIDwgMSkge1xyXG4gICAgICB0aGlzLl9pbnB1dC5jdXJyZW50LmNsaWNrKClcclxuICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWQgPT09IDEpIHtcclxuICAgICAgaWYgKHRoaXMucHJvcHMuY2FuY2VsbGFibGUpIHtcclxuICAgICAgICB0aGlzLmhhbmRsZUNhbmNlbGxhdGlvbigpXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaGFuZGxlUHJlbWFkZVNlbGVjdGlvbihzZWxlY3RlZCAtIDEpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwcml2YXRlIGhhbmRsZUNhbmNlbChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pOiB2b2lkIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKEFwcGxpY2F0aW9uRXZlbnQuc2hvd0ludmVzdGlnYXRvclBhZ2UoKSlcclxuICB9XHJcblxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gICBwcml2YXRlIGhhbmRsZUNhbmNlbGxhdGlvbiAoKSA6IHZvaWQge1xyXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShBcHBsaWNhdGlvbkV2ZW50LnNob3dJbnZlc3RpZ2F0b3JQYWdlKCkpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwcml2YXRlIGhhbmRsZUZpbGVWYWxpZGF0aW9uICh2YWxpZGF0aW9uOiBVbmlkb2NWYWxpZGF0aW9uRXZlbnQpIDogdm9pZCB7XHJcbiAgICAvLyBAVE9ETyBlcnJvci1jaGVja1xyXG4gICAgLy9jb25zb2xlLmxvZyh2YWxpZGF0aW9uLnRvU3RyaW5nKCkpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwcml2YXRlIGhhbmRsZUZpbGVSZWR1Y3Rpb24gKHZhbHVlOiBJbnZlc3RpZ2F0b3IpIDogdm9pZCB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgXHJcbiAgICAgIHN0YXRlOiBMb2FkaW5nUGFnZVN0YXRlLlJFU09MVkVEXHJcbiAgICB9KVxyXG5cclxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoQXBwbGljYXRpb25FdmVudC51c2UodmFsdWUpKVxyXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShBcHBsaWNhdGlvbkV2ZW50LnNob3dJbnZlc3RpZ2F0b3JQYWdlKCkpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwcml2YXRlIGhhbmRsZUZpbGVTZWxlY3Rpb24oZmlsZTogRmlsZSk6IHZvaWQge1xyXG4gICAgY29uc3Qgc291cmNlOiBVbmlkb2NGaWxlU3ltYm9sUHJvZHVjZXIgPSBVbmlkb2NGaWxlU3ltYm9sUHJvZHVjZXIuY3JlYXRlKGZpbGUpXHJcbiAgICBjb25zdCBldmVudHM6IFVuaWRvY1Byb2R1Y2VyPFVuaWRvY0V2ZW50PiA9IHBhcnNlKHRva2VuaXplKHNvdXJjZSkpXHJcbiAgICBjb25zdCB2YWxpZGF0b3I6IFVuaWRvY1ZhbGlkYXRvciA9IFVuaWRvY1ZhbGlkYXRvci5raXNzKFVuaWRvY0NvbW1hbmQudmFsaWRhdGVVbmlkb2MuZmFjdG9yeShJbnZlc3RpZ2F0b3JDb21tYW5kLnZhbGlkYXRlKSlcclxuXHJcbiAgICB2YWxpZGF0b3Iuc3Vic2NyaWJlKGV2ZW50cylcclxuXHJcbiAgICBjb25zdCByZWR1Y2VyOiBVbmlkb2NQcm9kdWNlcjxJbnZlc3RpZ2F0b3I+ID0gVW5pZG9jUmVkdWNlci5yZWR1Y2UudmFsaWRhdGlvbih2YWxpZGF0b3IsIFVuaWRvY0NvbW1hbmQucmVkdWNlLmZhY3RvcnkoSW52ZXN0aWdhdG9yQ29tbWFuZC5yZWR1Y2UpKVxyXG5cclxuICAgIHZhbGlkYXRvci5vbignbmV4dCcsIHRoaXMuaGFuZGxlRmlsZVZhbGlkYXRpb24pXHJcbiAgICByZWR1Y2VyLm9uKCduZXh0JywgdGhpcy5oYW5kbGVGaWxlUmVkdWN0aW9uKVxyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBcclxuICAgICAgc3RhdGU6IExvYWRpbmdQYWdlU3RhdGUuTE9BRElORyxcclxuICAgICAgZmlsZVxyXG4gICAgfSwgc291cmNlLnJlYWQuYmluZChzb3VyY2UpKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIGdldFNlbGVjdGVkKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gKCgodGhpcy5zdGF0ZS5zY3JvbGwgKyA1MCkgLyAxMDApIDw8IDApXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgaXNTZWxlY3RlZChpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRTZWxlY3RlZCgpID09PSBpbmRleFxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIGlzRmlsZUxvYWRpbmdTZWxlY3RlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmlzU2VsZWN0ZWQoMClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyBpc0NhbmNlbGxhdGlvblNlbGVjdGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvcHMuY2FuY2VsbGFibGUgJiYgdGhpcy5pc1NlbGVjdGVkKDEpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgaXNQcmVtYWRlU2VsZWN0ZWQoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNTZWxlY3RlZChpbmRleCArIDIpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgcmVuZGVyICgpIDogUmVhY3QuUmVhY3RFbGVtZW50IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgXHJcbiAgICAgICAgb25Ecm9wPXt0aGlzLmhhbmRsZURyb3B9IFxyXG4gICAgICAgIG9uRHJhZ0VudGVyPXt0aGlzLmhhbmRsZVNpbGVudEFjdGlvbn1cclxuICAgICAgICBvbkRyYWdPdmVyPXt0aGlzLmhhbmRsZVNpbGVudEFjdGlvbn1cclxuICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfVxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnbGF5b3V0IGxheW91dC1sb2FkaW5nLXBhZ2UnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9XHJcbiAgICAgID5cclxuICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgIHJlZj17dGhpcy5faW5wdXR9IFxyXG4gICAgICAgICAgdHlwZT0nZmlsZScgXHJcbiAgICAgICAgICBhY2NlcHQ9J3RleHQvcGxhaW4nIFxyXG4gICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgY2xhc3NOYW1lPSdsYXlvdXQtbG9hZGluZy1wYWdlLW9wdGlvbnMnXHJcbiAgICAgICAgICBvblNjcm9sbD17dGhpcy5oYW5kbGVTY3JvbGx9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgeyB0aGlzLnJlbmRlckZpbGUoKSB9XHJcbiAgICAgICAgICB7IHRoaXMucmVuZGVyQ2FuY2VsbGF0aW9uKCkgfVxyXG4gICAgICAgICAgeyB0aGlzLnJlbmRlclByZW1hZGVzKCkgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsYXlvdXQtbG9hZGluZy1wYWdlLWRpc3BsYXknPlxyXG4gICAgICAgICAgPFN0YXRpY1NsaWRlc2hvdyBpbmRleD17dGhpcy5nZXRTZWxlY3RlZCgpfT5cclxuICAgICAgICAgICAgeyB0aGlzLnJlbmRlckZpbGVTbGlkZSgpIH1cclxuICAgICAgICAgICAgeyB0aGlzLnJlbmRlckNhbmNlbGxhdGlvblNsaWRlKCkgfVxyXG4gICAgICAgICAgICB7IHRoaXMucmVuZGVyUHJlbWFkZVNsaWRlcygpIH1cclxuICAgICAgICAgIDwvU3RhdGljU2xpZGVzaG93PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyByZW5kZXJGaWxlKCk6IFJlYWN0LlJlYWN0Tm9kZSB7XHJcbiAgICBjb25zdCBzZWxlY3RlZDogYm9vbGVhbiA9IHRoaXMuaXNGaWxlTG9hZGluZ1NlbGVjdGVkKClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8YnV0dG9uIFxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnbG9hZGluZy1vcHRpb24nLCB7ICdpcy1hY3RpdmUnOiBzZWxlY3RlZCB9KX1cclxuICAgICAgICBhcmlhLXByZXNzZWQ9e3NlbGVjdGVkfVxyXG4gICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLnN0YXRlICE9PSBMb2FkaW5nUGFnZVN0YXRlLklOSVRJQUx9XHJcbiAgICAgICAgb25Nb3VzZUVudGVyPXt0aGlzLmhhbmRsZU1vdXNlRW50ZXJPcHRpb259XHJcbiAgICAgICAgb25Nb3VzZUxlYXZlPXt0aGlzLmhhbmRsZU1vdXNlTGVhdmVPcHRpb259XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9hZGluZy1vcHRpb24taWNvbicgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9hZGluZy1vcHRpb24taW5mb3JtYXRpb24nPlxyXG4gICAgICAgICAgPGgxPkNoYXJnZXIgdW4gZG9jdW1lbnQ8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIClcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIHJlbmRlckNhbmNlbGxhdGlvbigpOiBSZWFjdC5SZWFjdE5vZGUge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWQ6IGJvb2xlYW4gPSB0aGlzLmlzU2VsZWN0ZWQoMSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8YnV0dG9uIFxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnbG9hZGluZy1vcHRpb24nLCB7ICdpcy1hY3RpdmUnOiBzZWxlY3RlZCB9KX1cclxuICAgICAgICBhcmlhLXByZXNzZWQ9e3NlbGVjdGVkfVxyXG4gICAgICAgIGRpc2FibGVkPXshdGhpcy5wcm9wcy5jYW5jZWxsYWJsZSB8fCB0aGlzLnN0YXRlLnN0YXRlICE9PSBMb2FkaW5nUGFnZVN0YXRlLklOSVRJQUx9XHJcbiAgICAgICAgb25Nb3VzZUVudGVyPXt0aGlzLmhhbmRsZU1vdXNlRW50ZXJPcHRpb259XHJcbiAgICAgICAgb25Nb3VzZUxlYXZlPXt0aGlzLmhhbmRsZU1vdXNlTGVhdmVPcHRpb259XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9hZGluZy1vcHRpb24taWNvbicgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9hZGluZy1vcHRpb24taW5mb3JtYXRpb24nPlxyXG4gICAgICAgICAgPGgxPlJldG91cjwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIHJlbmRlclByZW1hZGVzKCk6IFJlYWN0LlJlYWN0Tm9kZSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5wcmVtYWRlcykge1xyXG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5wcmVtYWRlcy5tYXAodGhpcy5oYW5kbGVQcmVtYWRlUmVuZGVyaW5nKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIDxMb2FkZXI+Q2hhcmdlbWVudCBkZXMgcHLDqXRpcsOpcyBlbiBjb3VyczwvTG9hZGVyPlxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIGhhbmRsZVByZW1hZGVSZW5kZXJpbmcocHJlbWFkZTogSW52ZXN0aWdhdG9yLCBpbmRleDogbnVtYmVyKTogUmVhY3QuUmVhY3ROb2RlIHtcclxuICAgIGNvbnN0IHNlbGVjdGVkOiBib29sZWFuID0gdGhpcy5pc1NlbGVjdGVkKGluZGV4ICsgMilcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8YnV0dG9uIFxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnbG9hZGluZy1vcHRpb24gaXMtcHJlbWFkZScsIHsgJ2lzLWFjdGl2ZSc6IHNlbGVjdGVkIH0pfVxyXG4gICAgICAgIGFyaWEtcHJlc3NlZD17c2VsZWN0ZWR9IFxyXG4gICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLnN0YXRlICE9PSBMb2FkaW5nUGFnZVN0YXRlLklOSVRJQUx9IFxyXG4gICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgb25Nb3VzZUVudGVyPXt0aGlzLmhhbmRsZU1vdXNlRW50ZXJPcHRpb259XHJcbiAgICAgICAgb25Nb3VzZUxlYXZlPXt0aGlzLmhhbmRsZU1vdXNlTGVhdmVPcHRpb259XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9hZGluZy1vcHRpb24taWNvbic+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3Nwcml0ZSBzcHJpdGUtZm9sZGVyIHNwcml0ZS12YXJpYXRpb24tJyArIChpbmRleCAlIDMpfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2FkaW5nLW9wdGlvbi1pbmZvcm1hdGlvbic+XHJcbiAgICAgICAgICA8aDE+eyBwcmVtYWRlLnN1bW1hcnkubmFtZS50b1N0cmluZygpIH08L2gxPlxyXG4gICAgICAgICAgPGgyPnsgcHJlbWFkZS5zdW1tYXJ5LmpvYiB9PC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICAgcHVibGljIHJlbmRlckZpbGVTbGlkZSgpOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFNsaWRlPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsYXlvdXQgbGF5b3V0LWNlbnRlcmVkJz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXItZmx1aWQnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGp1c3RpZnktY29udGVudC1jZW50ZXInPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtOCB0ZXh0LWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VzLkhvbWUgY2xhc3NOYW1lPSdpbWctZmx1aWQnIC8+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgIFPDqWxlY3Rpb25uZXIgb3UgZMOpcG9zZXIgdW5lIGZldWlsbGUgZGUgcGVyc29ubmFnZS5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1NsaWRlPlxyXG4gICAgKVxyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgcmVuZGVyQ2FuY2VsbGF0aW9uU2xpZGUoKTogUmVhY3QuUmVhY3RFbGVtZW50IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxTbGlkZT5cclxuICAgICAgICBcclxuICAgICAgPC9TbGlkZT5cclxuICAgIClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyByZW5kZXJQcmVtYWRlU2xpZGVzKCk6IFJlYWN0LlJlYWN0Tm9kZSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5wcmVtYWRlcykge1xyXG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5wcmVtYWRlcy5tYXAodGhpcy5oYW5kbGVQcmVtYWRlU2xpZGVSZW5kZXJpbmcpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gPExvYWRlcj5DaGFyZ2VtZW50IGRlcyBwcsOpdGlyw6lzIGVuIGNvdXJzPC9Mb2FkZXI+XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgaGFuZGxlUHJlbWFkZVNsaWRlUmVuZGVyaW5nKHByZW1hZGU6IEludmVzdGlnYXRvciwgaW5kZXg6IG51bWJlcik6IFJlYWN0LlJlYWN0Tm9kZSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8U2xpZGUga2V5PXtpbmRleH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xheW91dCBsYXlvdXQtYm90dG9tIHRleHQtY2VudGVyJz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnc3ByaXRlIHNwcml0ZS1jaGFyYWN0ZXIgc3ByaXRlLXZhcmlhdGlvbi0nICsgcHJlbWFkZS5zdW1tYXJ5LmFsaWFzLnRvTG93ZXJDYXNlKCkucmVwbGFjZUFsbCgnw6knLCAnZScpfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1NsaWRlPlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFxyXG4gKi9cclxuZXhwb3J0IG5hbWVzcGFjZSBMb2FkaW5nUGFnZSB7XHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgZXhwb3J0IHR5cGUgQXBwbGljYXRpb25DYWxsYmFjayA9IChldmVudDogQXBwbGljYXRpb25FdmVudCkgPT4gdm9pZFxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBleHBvcnQgdHlwZSBQcm9wZXJ0aWVzID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nIHwgdW5kZWZpbmVkLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIGNhbmNlbGxhYmxlPzogYm9vbGVhbiB8IHVuZGVmaW5lZCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBvbkNoYW5nZT86IEFwcGxpY2F0aW9uQ2FsbGJhY2sgfCB1bmRlZmluZWRcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIGV4cG9ydCB0eXBlIFN0YXRlID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgcHJlbWFkZXM6IHVuZGVmaW5lZCB8IEludmVzdGlnYXRvcltdLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIGZpbGU6IEZpbGUgfCB1bmRlZmluZWQsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgc3RhdGU6IExvYWRpbmdQYWdlU3RhdGUsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgc2Nyb2xsOiBudW1iZXIsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgbW91c2U6IG51bWJlclxyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=
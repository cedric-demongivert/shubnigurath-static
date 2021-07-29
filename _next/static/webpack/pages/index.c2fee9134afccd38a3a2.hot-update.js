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
          lineNumber: 286,
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
          lineNumber: 293,
          columnNumber: 9
        }
      }), __jsx("div", {
        className: "layout-loading-page-options",
        onScroll: this.handleScroll,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300,
          columnNumber: 9
        }
      }, this.renderFile(), this.renderCancellation(), this.renderPremades()), __jsx("div", {
        className: "layout-loading-page-display",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308,
          columnNumber: 9
        }
      }, __jsx(_StaticSlideshow__WEBPACK_IMPORTED_MODULE_17__["StaticSlideshow"], {
        index: this.getSelected(),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309,
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
          lineNumber: 326,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "loading-option-icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333,
          columnNumber: 9
        }
      }), __jsx("div", {
        className: "loading-option-information",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 334,
          columnNumber: 9
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 335,
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
          lineNumber: 348,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "loading-option-icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 355,
          columnNumber: 9
        }
      }), __jsx("div", {
        className: "loading-option-information",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 356,
          columnNumber: 9
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 357,
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
            lineNumber: 370,
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
          lineNumber: 381,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "loading-option-icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 389,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: 'sprite sprite-folder sprite-variation-' + index % 3,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 390,
          columnNumber: 11
        }
      })), __jsx("div", {
        className: "loading-option-information",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 392,
          columnNumber: 9
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 393,
          columnNumber: 11
        }
      }, premade.summary.name.toString()), __jsx("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394,
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
          lineNumber: 405,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "layout layout-centered",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 406,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "container-fluid",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 407,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "row justify-content-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 408,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "col-8 text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 409,
          columnNumber: 15
        }
      }, __jsx(_Images__WEBPACK_IMPORTED_MODULE_15__["Images"].Home, {
        className: "img-fluid",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 410,
          columnNumber: 17
        }
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 411,
          columnNumber: 17
        }
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 412,
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
          lineNumber: 428,
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
            lineNumber: 441,
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
          lineNumber: 450,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "layout layout-bottom text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 451,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: 'sprite sprite-character sprite-variation-' + premade.summary.alias.toLowerCase().replaceAll('é', 'e'),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 452,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlL2xvYWRpbmcvTG9hZGluZ1BhZ2UudHN4Il0sIm5hbWVzIjpbIkxvYWRpbmdQYWdlIiwicHJvcGVydGllcyIsIl9pbnB1dCIsInN0YXRlIiwicHJlbWFkZXMiLCJ1bmRlZmluZWQiLCJMb2FkaW5nUGFnZVN0YXRlIiwiSU5JVElBTCIsImZpbGUiLCJzY3JvbGwiLCJtb3VzZSIsImhhbmRsZVByZW1hZGVzTG9hZGluZyIsImJpbmQiLCJoYW5kbGVQcmVtYWRlUmVuZGVyaW5nIiwiaGFuZGxlUHJlbWFkZVNsaWRlUmVuZGVyaW5nIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJoYW5kbGVEcm9wIiwiaGFuZGxlU2lsZW50QWN0aW9uIiwiaGFuZGxlQ2FuY2VsIiwiaGFuZGxlRmlsZVNlbGVjdGlvbiIsImhhbmRsZUZpbGVWYWxpZGF0aW9uIiwiaGFuZGxlRmlsZVJlZHVjdGlvbiIsImhhbmRsZUNhbmNlbGxhdGlvbiIsImhhbmRsZUNsaWNrIiwiaGFuZGxlU2Nyb2xsIiwiaGFuZGxlTW91c2VFbnRlck9wdGlvbiIsImhhbmRsZU1vdXNlTGVhdmVPcHRpb24iLCJSZWFjdCIsImNyZWF0ZVJlZiIsIlByZW1hZGVzIiwibG9hZCIsInRoZW4iLCJldmVudCIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJiYXNpcyIsInBhcmVudE5vZGUiLCJmaXJzdEVsZW1lbnRDaGlsZCIsIm9mZnNldFRvcCIsInNldFN0YXRlIiwic29ydCIsIkludmVzdGlnYXRvciIsImNvbXBhcmVCeU5hbWUiLCJmaWxlcyIsImxlbmd0aCIsIkxPQURJTkciLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsImRyYWdnZWQiLCJkYXRhVHJhbnNmZXIiLCJuYW1lIiwiZW5kc1dpdGgiLCJzY3JvbGxUb3AiLCJpbmRleCIsInByb3BzIiwib25DaGFuZ2UiLCJBcHBsaWNhdGlvbkV2ZW50IiwidXNlIiwic2hvd0ludmVzdGlnYXRvclBhZ2UiLCJzZWxlY3RlZCIsImdldFNlbGVjdGVkIiwiY3VycmVudCIsImNsaWNrIiwiY2FuY2VsbGFibGUiLCJoYW5kbGVQcmVtYWRlU2VsZWN0aW9uIiwidmFsaWRhdGlvbiIsInZhbHVlIiwiUkVTT0xWRUQiLCJzb3VyY2UiLCJVbmlkb2NGaWxlU3ltYm9sUHJvZHVjZXIiLCJjcmVhdGUiLCJldmVudHMiLCJwYXJzZSIsInRva2VuaXplIiwidmFsaWRhdG9yIiwiVW5pZG9jVmFsaWRhdG9yIiwia2lzcyIsIlVuaWRvY0NvbW1hbmQiLCJ2YWxpZGF0ZVVuaWRvYyIsImZhY3RvcnkiLCJJbnZlc3RpZ2F0b3JDb21tYW5kIiwidmFsaWRhdGUiLCJzdWJzY3JpYmUiLCJyZWR1Y2VyIiwiVW5pZG9jUmVkdWNlciIsInJlZHVjZSIsIm9uIiwicmVhZCIsImlzU2VsZWN0ZWQiLCJjbGFzc25hbWVzIiwiY2xhc3NOYW1lIiwiZGlzcGxheSIsInJlbmRlckZpbGUiLCJyZW5kZXJDYW5jZWxsYXRpb24iLCJyZW5kZXJQcmVtYWRlcyIsInJlbmRlckZpbGVTbGlkZSIsInJlbmRlckNhbmNlbGxhdGlvblNsaWRlIiwicmVuZGVyUHJlbWFkZVNsaWRlcyIsImlzRmlsZUxvYWRpbmdTZWxlY3RlZCIsIm1hcCIsInByZW1hZGUiLCJzdW1tYXJ5IiwidG9TdHJpbmciLCJqb2IiLCJhbGlhcyIsInRvTG93ZXJDYXNlIiwicmVwbGFjZUFsbCIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsIkVtcHR5IiwiY2FsbGJhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUEsV0FBYjtBQUFBOztBQUFBOztBQUNFO0FBQ0Y7QUFDQTs7QUFRRTtBQUNGO0FBQ0E7O0FB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ekQ5RyxXLEtBQUFBLFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzJmZWU5MTM0YWZjY2QzOGEzYTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcclxuaW1wb3J0IHsgXHJcbiAgdG9rZW5pemUsIFxyXG4gIHBhcnNlLFxyXG4gIFVuaWRvY0V2ZW50LCBcclxuICBVbmlkb2NQcm9kdWNlciwgXHJcbiAgVW5pZG9jUmVkdWNlciwgXHJcbiAgVW5pZG9jVmFsaWRhdGlvbkV2ZW50LFxyXG4gIFVuaWRvY1ZhbGlkYXRvciBcclxufSBmcm9tICdAY2VkcmljLWRlbW9uZ2l2ZXJ0L3VuaWRvYydcclxuXHJcbmltcG9ydCB7IEVtcHR5IH0gZnJvbSAnLi4vLi4vLi4vdHlwZXNjcmlwdC91dGlscydcclxuaW1wb3J0IHsgVW5pZG9jRmlsZVN5bWJvbFByb2R1Y2VyIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXNjcmlwdC91bmlkb2MvVW5pZG9jRmlsZVN5bWJvbFByb2R1Y2VyJ1xyXG5pbXBvcnQgeyBVbmlkb2NDb21tYW5kIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXNjcmlwdC91bmlkb2MvVW5pZG9jQ29tbWFuZCdcclxuaW1wb3J0IHsgSW52ZXN0aWdhdG9yQ29tbWFuZCB9IGZyb20gJy4uLy4uLy4uL3R5cGVzY3JpcHQvdW5pZG9jL0ludmVzdGlnYXRvckNvbW1hbmQnXHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uRXZlbnQgfSBmcm9tICcuLi8uLi8uLi90eXBlc2NyaXB0L2FwcGxpY2F0aW9uL0FwcGxpY2F0aW9uRXZlbnQnXHJcbmltcG9ydCB7IEludmVzdGlnYXRvciB9IGZyb20gJy4uLy4uLy4uL3R5cGVzY3JpcHQvSW52ZXN0aWdhdG9yJ1xyXG5cclxuaW1wb3J0IHsgSW1hZ2VzIH0gZnJvbSAnLi4vLi4vSW1hZ2VzJ1xyXG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tICcuLi8uLi9Mb2FkZXInXHJcbmltcG9ydCB7IFN0YXRpY1NsaWRlc2hvdyAgfSBmcm9tICcuLi8uLi9TdGF0aWNTbGlkZXNob3cnXHJcbmltcG9ydCB7IFByZW1hZGVzIH0gZnJvbSAnLi9QcmVtYWRlcydcclxuaW1wb3J0IHsgTG9hZGluZ1BhZ2VTdGF0ZSB9IGZyb20gJy4vTG9hZGluZ1BhZ2VTdGF0ZSdcclxuaW1wb3J0IHsgU2xpZGUgfSBmcm9tICcuLi8uLi9TbGlkZSdcclxuXHJcblxyXG4vKipcclxuICogXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTG9hZGluZ1BhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8TG9hZGluZ1BhZ2UuUHJvcGVydGllcywgTG9hZGluZ1BhZ2UuU3RhdGU+IHtcclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGRlZmF1bHRQcm9wczogUmVhZG9ubHk8TG9hZGluZ1BhZ2UuUHJvcGVydGllcz4gPSB7XHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBvbkNoYW5nZTogRW1wdHkuY2FsbGJhY2tcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgX2lucHV0OiBSZWFjdC5SZWZPYmplY3Q8SFRNTElucHV0RWxlbWVudD5cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yIChwcm9wZXJ0aWVzOiBMb2FkaW5nUGFnZS5Qcm9wZXJ0aWVzKSB7XHJcbiAgICBzdXBlcihwcm9wZXJ0aWVzKVxyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHByZW1hZGVzOiB1bmRlZmluZWQsXHJcbiAgICAgIHN0YXRlOiBMb2FkaW5nUGFnZVN0YXRlLklOSVRJQUwsXHJcbiAgICAgIGZpbGU6IHVuZGVmaW5lZCxcclxuICAgICAgc2Nyb2xsOiAwLFxyXG4gICAgICBtb3VzZTogLTFcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmhhbmRsZVByZW1hZGVzTG9hZGluZyA9IHRoaXMuaGFuZGxlUHJlbWFkZXNMb2FkaW5nLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlUHJlbWFkZVJlbmRlcmluZyA9IHRoaXMuaGFuZGxlUHJlbWFkZVJlbmRlcmluZy5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmhhbmRsZVByZW1hZGVTbGlkZVJlbmRlcmluZyA9IHRoaXMuaGFuZGxlUHJlbWFkZVNsaWRlUmVuZGVyaW5nLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UgPSB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlRHJvcCA9IHRoaXMuaGFuZGxlRHJvcC5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmhhbmRsZVNpbGVudEFjdGlvbiA9IHRoaXMuaGFuZGxlU2lsZW50QWN0aW9uLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlQ2FuY2VsID0gdGhpcy5oYW5kbGVDYW5jZWwuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVGaWxlU2VsZWN0aW9uID0gdGhpcy5oYW5kbGVGaWxlU2VsZWN0aW9uLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlRmlsZVZhbGlkYXRpb24gPSB0aGlzLmhhbmRsZUZpbGVWYWxpZGF0aW9uLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlRmlsZVJlZHVjdGlvbiA9IHRoaXMuaGFuZGxlRmlsZVJlZHVjdGlvbi5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmhhbmRsZUNhbmNlbGxhdGlvbiA9IHRoaXMuaGFuZGxlQ2FuY2VsbGF0aW9uLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlU2Nyb2xsID0gdGhpcy5oYW5kbGVTY3JvbGwuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVNb3VzZUVudGVyT3B0aW9uID0gdGhpcy5oYW5kbGVNb3VzZUVudGVyT3B0aW9uLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlTW91c2VMZWF2ZU9wdGlvbiA9IHRoaXMuaGFuZGxlTW91c2VMZWF2ZU9wdGlvbi5iaW5kKHRoaXMpXHJcblxyXG4gICAgdGhpcy5faW5wdXQgPSBSZWFjdC5jcmVhdGVSZWYoKVxyXG5cclxuICAgIFByZW1hZGVzLmxvYWQoKS50aGVuKHRoaXMuaGFuZGxlUHJlbWFkZXNMb2FkaW5nKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIGhhbmRsZU1vdXNlRW50ZXJPcHRpb24gKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50Pik6IHZvaWQge1xyXG4gICAgY29uc3QgdGFyZ2V0OiBIVE1MQnV0dG9uRWxlbWVudCA9IGV2ZW50LmN1cnJlbnRUYXJnZXRcclxuICAgIGNvbnN0IGJhc2lzOiBudW1iZXIgPSAodGFyZ2V0LnBhcmVudE5vZGUuZmlyc3RFbGVtZW50Q2hpbGQgYXMgYW55KS5vZmZzZXRUb3BcclxuICAgIFxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1vdXNlOiB0YXJnZXQub2Zmc2V0VG9wIC0gYmFzaXMgfSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyBoYW5kbGVNb3VzZUxlYXZlT3B0aW9uIChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBtb3VzZTogLTEgfSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyBoYW5kbGVQcmVtYWRlc0xvYWRpbmcocHJlbWFkZXM6IEludmVzdGlnYXRvcltdKTogdm9pZCB7XHJcbiAgICBwcmVtYWRlcy5zb3J0KEludmVzdGlnYXRvci5jb21wYXJlQnlOYW1lKVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHByZW1hZGVzIH0pXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwcml2YXRlIGhhbmRsZUlucHV0Q2hhbmdlKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pik6IHZvaWQge1xyXG4gICAgaWYgKGV2ZW50LnRhcmdldC5maWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBcclxuICAgICAgICBzdGF0ZTogTG9hZGluZ1BhZ2VTdGF0ZS5MT0FESU5HLFxyXG4gICAgICAgIGZpbGU6IGV2ZW50LnRhcmdldC5maWxlc1swXSBcclxuICAgICAgfSwgdGhpcy5oYW5kbGVGaWxlU2VsZWN0aW9uLmJpbmQodW5kZWZpbmVkLCBldmVudC50YXJnZXQuZmlsZXNbMF0pKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBoYW5kbGVTaWxlbnRBY3Rpb24oZXZlbnQ6IFJlYWN0LlN5bnRoZXRpY0V2ZW50KTogdm9pZCB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBoYW5kbGVEcm9wKGV2ZW50OiBSZWFjdC5EcmFnRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pOiB2b2lkIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgY29uc3QgZHJhZ2dlZDogRGF0YVRyYW5zZmVyID0gZXZlbnQuZGF0YVRyYW5zZmVyXHJcblxyXG4gICAgaWYgKGRyYWdnZWQuZmlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBmb3IgKGNvbnN0IGZpbGUgb2YgZHJhZ2dlZC5maWxlcykge1xyXG4gICAgICAgIGlmIChmaWxlLm5hbWUuZW5kc1dpdGgoJy50eHQnKSkge1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFxyXG4gICAgICAgICAgICBzdGF0ZTogTG9hZGluZ1BhZ2VTdGF0ZS5MT0FESU5HLFxyXG4gICAgICAgICAgICBmaWxlXHJcbiAgICAgICAgICB9LCB0aGlzLmhhbmRsZUZpbGVTZWxlY3Rpb24uYmluZCh1bmRlZmluZWQsIGZpbGUpKVxyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHByaXZhdGUgaGFuZGxlU2Nyb2xsKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50LCBXaGVlbEV2ZW50Pik6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNjcm9sbDogZXZlbnQuY3VycmVudFRhcmdldC5zY3JvbGxUb3AgfSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHByaXZhdGUgaGFuZGxlUHJlbWFkZVNlbGVjdGlvbiAoaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShBcHBsaWNhdGlvbkV2ZW50LnVzZSh0aGlzLnN0YXRlLnByZW1hZGVzW2luZGV4XSkpXHJcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKEFwcGxpY2F0aW9uRXZlbnQuc2hvd0ludmVzdGlnYXRvclBhZ2UoKSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHByaXZhdGUgaGFuZGxlQ2xpY2soZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5zdGF0ZSAhPT0gTG9hZGluZ1BhZ2VTdGF0ZS5JTklUSUFMKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNlbGVjdGVkOiBudW1iZXIgPSB0aGlzLmdldFNlbGVjdGVkKClcclxuXHJcbiAgICBpZiAoc2VsZWN0ZWQgPCAxKSB7XHJcbiAgICAgIHRoaXMuX2lucHV0LmN1cnJlbnQuY2xpY2soKVxyXG4gICAgfSBlbHNlIGlmIChzZWxlY3RlZCA9PT0gMSkge1xyXG4gICAgICBpZiAodGhpcy5wcm9wcy5jYW5jZWxsYWJsZSkge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQ2FuY2VsbGF0aW9uKClcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5oYW5kbGVQcmVtYWRlU2VsZWN0aW9uKHNlbGVjdGVkIC0gMSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHByaXZhdGUgaGFuZGxlQ2FuY2VsKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50Pik6IHZvaWQge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoQXBwbGljYXRpb25FdmVudC5zaG93SW52ZXN0aWdhdG9yUGFnZSgpKVxyXG4gIH1cclxuXHJcbiAgXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgIHByaXZhdGUgaGFuZGxlQ2FuY2VsbGF0aW9uICgpIDogdm9pZCB7XHJcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKEFwcGxpY2F0aW9uRXZlbnQuc2hvd0ludmVzdGlnYXRvclBhZ2UoKSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHByaXZhdGUgaGFuZGxlRmlsZVZhbGlkYXRpb24gKHZhbGlkYXRpb246IFVuaWRvY1ZhbGlkYXRpb25FdmVudCkgOiB2b2lkIHtcclxuICAgIC8vIEBUT0RPIGVycm9yLWNoZWNrXHJcbiAgICAvL2NvbnNvbGUubG9nKHZhbGlkYXRpb24udG9TdHJpbmcoKSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHByaXZhdGUgaGFuZGxlRmlsZVJlZHVjdGlvbiAodmFsdWU6IEludmVzdGlnYXRvcikgOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBcclxuICAgICAgc3RhdGU6IExvYWRpbmdQYWdlU3RhdGUuUkVTT0xWRURcclxuICAgIH0pXHJcblxyXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShBcHBsaWNhdGlvbkV2ZW50LnVzZSh2YWx1ZSkpXHJcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKEFwcGxpY2F0aW9uRXZlbnQuc2hvd0ludmVzdGlnYXRvclBhZ2UoKSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHByaXZhdGUgaGFuZGxlRmlsZVNlbGVjdGlvbihmaWxlOiBGaWxlKTogdm9pZCB7XHJcbiAgICBjb25zdCBzb3VyY2U6IFVuaWRvY0ZpbGVTeW1ib2xQcm9kdWNlciA9IFVuaWRvY0ZpbGVTeW1ib2xQcm9kdWNlci5jcmVhdGUoZmlsZSlcclxuICAgIGNvbnN0IGV2ZW50czogVW5pZG9jUHJvZHVjZXI8VW5pZG9jRXZlbnQ+ID0gcGFyc2UodG9rZW5pemUoc291cmNlKSlcclxuICAgIGNvbnN0IHZhbGlkYXRvcjogVW5pZG9jVmFsaWRhdG9yID0gVW5pZG9jVmFsaWRhdG9yLmtpc3MoVW5pZG9jQ29tbWFuZC52YWxpZGF0ZVVuaWRvYy5mYWN0b3J5KEludmVzdGlnYXRvckNvbW1hbmQudmFsaWRhdGUpKVxyXG5cclxuICAgIHZhbGlkYXRvci5zdWJzY3JpYmUoZXZlbnRzKVxyXG5cclxuICAgIGNvbnN0IHJlZHVjZXI6IFVuaWRvY1Byb2R1Y2VyPEludmVzdGlnYXRvcj4gPSBVbmlkb2NSZWR1Y2VyLnJlZHVjZS52YWxpZGF0aW9uKHZhbGlkYXRvciwgVW5pZG9jQ29tbWFuZC5yZWR1Y2UuZmFjdG9yeShJbnZlc3RpZ2F0b3JDb21tYW5kLnJlZHVjZSkpXHJcblxyXG4gICAgdmFsaWRhdG9yLm9uKCduZXh0JywgdGhpcy5oYW5kbGVGaWxlVmFsaWRhdGlvbilcclxuICAgIHJlZHVjZXIub24oJ25leHQnLCB0aGlzLmhhbmRsZUZpbGVSZWR1Y3Rpb24pXHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IFxyXG4gICAgICBzdGF0ZTogTG9hZGluZ1BhZ2VTdGF0ZS5MT0FESU5HLFxyXG4gICAgICBmaWxlXHJcbiAgICB9LCBzb3VyY2UucmVhZC5iaW5kKHNvdXJjZSkpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgZ2V0U2VsZWN0ZWQoKTogbnVtYmVyIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLm1vdXNlIDwgMCkge1xyXG4gICAgICByZXR1cm4gKCgodGhpcy5zdGF0ZS5zY3JvbGwgKyA1MCkgLyAxMDApIDw8IDApXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gKCgodGhpcy5zdGF0ZS5tb3VzZSkgLyAxMDApIDw8IDApXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgaXNTZWxlY3RlZChpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRTZWxlY3RlZCgpID09PSBpbmRleFxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIGlzRmlsZUxvYWRpbmdTZWxlY3RlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmlzU2VsZWN0ZWQoMClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyBpc0NhbmNlbGxhdGlvblNlbGVjdGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvcHMuY2FuY2VsbGFibGUgJiYgdGhpcy5pc1NlbGVjdGVkKDEpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgaXNQcmVtYWRlU2VsZWN0ZWQoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNTZWxlY3RlZChpbmRleCArIDIpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgcmVuZGVyICgpIDogUmVhY3QuUmVhY3RFbGVtZW50IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgXHJcbiAgICAgICAgb25Ecm9wPXt0aGlzLmhhbmRsZURyb3B9IFxyXG4gICAgICAgIG9uRHJhZ0VudGVyPXt0aGlzLmhhbmRsZVNpbGVudEFjdGlvbn1cclxuICAgICAgICBvbkRyYWdPdmVyPXt0aGlzLmhhbmRsZVNpbGVudEFjdGlvbn1cclxuICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfVxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnbGF5b3V0IGxheW91dC1sb2FkaW5nLXBhZ2UnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9XHJcbiAgICAgID5cclxuICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgIHJlZj17dGhpcy5faW5wdXR9IFxyXG4gICAgICAgICAgdHlwZT0nZmlsZScgXHJcbiAgICAgICAgICBhY2NlcHQ9J3RleHQvcGxhaW4nIFxyXG4gICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgY2xhc3NOYW1lPSdsYXlvdXQtbG9hZGluZy1wYWdlLW9wdGlvbnMnXHJcbiAgICAgICAgICBvblNjcm9sbD17dGhpcy5oYW5kbGVTY3JvbGx9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgeyB0aGlzLnJlbmRlckZpbGUoKSB9XHJcbiAgICAgICAgICB7IHRoaXMucmVuZGVyQ2FuY2VsbGF0aW9uKCkgfVxyXG4gICAgICAgICAgeyB0aGlzLnJlbmRlclByZW1hZGVzKCkgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsYXlvdXQtbG9hZGluZy1wYWdlLWRpc3BsYXknPlxyXG4gICAgICAgICAgPFN0YXRpY1NsaWRlc2hvdyBpbmRleD17dGhpcy5nZXRTZWxlY3RlZCgpfT5cclxuICAgICAgICAgICAgeyB0aGlzLnJlbmRlckZpbGVTbGlkZSgpIH1cclxuICAgICAgICAgICAgeyB0aGlzLnJlbmRlckNhbmNlbGxhdGlvblNsaWRlKCkgfVxyXG4gICAgICAgICAgICB7IHRoaXMucmVuZGVyUHJlbWFkZVNsaWRlcygpIH1cclxuICAgICAgICAgIDwvU3RhdGljU2xpZGVzaG93PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyByZW5kZXJGaWxlKCk6IFJlYWN0LlJlYWN0Tm9kZSB7XHJcbiAgICBjb25zdCBzZWxlY3RlZDogYm9vbGVhbiA9IHRoaXMuaXNGaWxlTG9hZGluZ1NlbGVjdGVkKClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8YnV0dG9uIFxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnbG9hZGluZy1vcHRpb24nLCB7ICdpcy1hY3RpdmUnOiBzZWxlY3RlZCB9KX1cclxuICAgICAgICBhcmlhLXByZXNzZWQ9e3NlbGVjdGVkfVxyXG4gICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLnN0YXRlICE9PSBMb2FkaW5nUGFnZVN0YXRlLklOSVRJQUx9XHJcbiAgICAgICAgb25Nb3VzZUVudGVyPXt0aGlzLmhhbmRsZU1vdXNlRW50ZXJPcHRpb259XHJcbiAgICAgICAgb25Nb3VzZUxlYXZlPXt0aGlzLmhhbmRsZU1vdXNlTGVhdmVPcHRpb259XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9hZGluZy1vcHRpb24taWNvbicgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9hZGluZy1vcHRpb24taW5mb3JtYXRpb24nPlxyXG4gICAgICAgICAgPGgxPkNoYXJnZXIgdW4gZG9jdW1lbnQ8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIClcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIHJlbmRlckNhbmNlbGxhdGlvbigpOiBSZWFjdC5SZWFjdE5vZGUge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWQ6IGJvb2xlYW4gPSB0aGlzLmlzU2VsZWN0ZWQoMSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8YnV0dG9uIFxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnbG9hZGluZy1vcHRpb24nLCB7ICdpcy1hY3RpdmUnOiBzZWxlY3RlZCB9KX1cclxuICAgICAgICBhcmlhLXByZXNzZWQ9e3NlbGVjdGVkfVxyXG4gICAgICAgIGRpc2FibGVkPXshdGhpcy5wcm9wcy5jYW5jZWxsYWJsZSB8fCB0aGlzLnN0YXRlLnN0YXRlICE9PSBMb2FkaW5nUGFnZVN0YXRlLklOSVRJQUx9XHJcbiAgICAgICAgb25Nb3VzZUVudGVyPXt0aGlzLmhhbmRsZU1vdXNlRW50ZXJPcHRpb259XHJcbiAgICAgICAgb25Nb3VzZUxlYXZlPXt0aGlzLmhhbmRsZU1vdXNlTGVhdmVPcHRpb259XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9hZGluZy1vcHRpb24taWNvbicgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9hZGluZy1vcHRpb24taW5mb3JtYXRpb24nPlxyXG4gICAgICAgICAgPGgxPlJldG91cjwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIHJlbmRlclByZW1hZGVzKCk6IFJlYWN0LlJlYWN0Tm9kZSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5wcmVtYWRlcykge1xyXG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5wcmVtYWRlcy5tYXAodGhpcy5oYW5kbGVQcmVtYWRlUmVuZGVyaW5nKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIDxMb2FkZXI+Q2hhcmdlbWVudCBkZXMgcHLDqXRpcsOpcyBlbiBjb3VyczwvTG9hZGVyPlxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIGhhbmRsZVByZW1hZGVSZW5kZXJpbmcocHJlbWFkZTogSW52ZXN0aWdhdG9yLCBpbmRleDogbnVtYmVyKTogUmVhY3QuUmVhY3ROb2RlIHtcclxuICAgIGNvbnN0IHNlbGVjdGVkOiBib29sZWFuID0gdGhpcy5pc1NlbGVjdGVkKGluZGV4ICsgMilcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8YnV0dG9uIFxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnbG9hZGluZy1vcHRpb24gaXMtcHJlbWFkZScsIHsgJ2lzLWFjdGl2ZSc6IHNlbGVjdGVkIH0pfVxyXG4gICAgICAgIGFyaWEtcHJlc3NlZD17c2VsZWN0ZWR9IFxyXG4gICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLnN0YXRlICE9PSBMb2FkaW5nUGFnZVN0YXRlLklOSVRJQUx9IFxyXG4gICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgb25Nb3VzZUVudGVyPXt0aGlzLmhhbmRsZU1vdXNlRW50ZXJPcHRpb259XHJcbiAgICAgICAgb25Nb3VzZUxlYXZlPXt0aGlzLmhhbmRsZU1vdXNlTGVhdmVPcHRpb259XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9hZGluZy1vcHRpb24taWNvbic+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3Nwcml0ZSBzcHJpdGUtZm9sZGVyIHNwcml0ZS12YXJpYXRpb24tJyArIChpbmRleCAlIDMpfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2FkaW5nLW9wdGlvbi1pbmZvcm1hdGlvbic+XHJcbiAgICAgICAgICA8aDE+eyBwcmVtYWRlLnN1bW1hcnkubmFtZS50b1N0cmluZygpIH08L2gxPlxyXG4gICAgICAgICAgPGgyPnsgcHJlbWFkZS5zdW1tYXJ5LmpvYiB9PC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICAgcHVibGljIHJlbmRlckZpbGVTbGlkZSgpOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFNsaWRlPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsYXlvdXQgbGF5b3V0LWNlbnRlcmVkJz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXItZmx1aWQnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGp1c3RpZnktY29udGVudC1jZW50ZXInPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtOCB0ZXh0LWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VzLkhvbWUgY2xhc3NOYW1lPSdpbWctZmx1aWQnIC8+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgIFPDqWxlY3Rpb25uZXIgb3UgZMOpcG9zZXIgdW5lIGZldWlsbGUgZGUgcGVyc29ubmFnZS5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1NsaWRlPlxyXG4gICAgKVxyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgcmVuZGVyQ2FuY2VsbGF0aW9uU2xpZGUoKTogUmVhY3QuUmVhY3RFbGVtZW50IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxTbGlkZT5cclxuICAgICAgICBcclxuICAgICAgPC9TbGlkZT5cclxuICAgIClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyByZW5kZXJQcmVtYWRlU2xpZGVzKCk6IFJlYWN0LlJlYWN0Tm9kZSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5wcmVtYWRlcykge1xyXG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5wcmVtYWRlcy5tYXAodGhpcy5oYW5kbGVQcmVtYWRlU2xpZGVSZW5kZXJpbmcpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gPExvYWRlcj5DaGFyZ2VtZW50IGRlcyBwcsOpdGlyw6lzIGVuIGNvdXJzPC9Mb2FkZXI+XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgaGFuZGxlUHJlbWFkZVNsaWRlUmVuZGVyaW5nKHByZW1hZGU6IEludmVzdGlnYXRvciwgaW5kZXg6IG51bWJlcik6IFJlYWN0LlJlYWN0Tm9kZSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8U2xpZGUga2V5PXtpbmRleH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xheW91dCBsYXlvdXQtYm90dG9tIHRleHQtY2VudGVyJz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnc3ByaXRlIHNwcml0ZS1jaGFyYWN0ZXIgc3ByaXRlLXZhcmlhdGlvbi0nICsgcHJlbWFkZS5zdW1tYXJ5LmFsaWFzLnRvTG93ZXJDYXNlKCkucmVwbGFjZUFsbCgnw6knLCAnZScpfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1NsaWRlPlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFxyXG4gKi9cclxuZXhwb3J0IG5hbWVzcGFjZSBMb2FkaW5nUGFnZSB7XHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgZXhwb3J0IHR5cGUgQXBwbGljYXRpb25DYWxsYmFjayA9IChldmVudDogQXBwbGljYXRpb25FdmVudCkgPT4gdm9pZFxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBleHBvcnQgdHlwZSBQcm9wZXJ0aWVzID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nIHwgdW5kZWZpbmVkLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIGNhbmNlbGxhYmxlPzogYm9vbGVhbiB8IHVuZGVmaW5lZCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBvbkNoYW5nZT86IEFwcGxpY2F0aW9uQ2FsbGJhY2sgfCB1bmRlZmluZWRcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIGV4cG9ydCB0eXBlIFN0YXRlID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgcHJlbWFkZXM6IHVuZGVmaW5lZCB8IEludmVzdGlnYXRvcltdLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIGZpbGU6IEZpbGUgfCB1bmRlZmluZWQsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgc3RhdGU6IExvYWRpbmdQYWdlU3RhdGUsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgc2Nyb2xsOiBudW1iZXIsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgbW91c2U6IG51bWJlclxyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=
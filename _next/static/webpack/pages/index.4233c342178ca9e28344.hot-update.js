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
        disabled: !this.props.current || this.state.state !== _LoadingPageState__WEBPACK_IMPORTED_MODULE_19__["LoadingPageState"].INITIAL,
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
      }, __jsx(_Images__WEBPACK_IMPORTED_MODULE_15__["Images"].Home, {
        className: "loading-maturin",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 407,
          columnNumber: 11
        }
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 408,
          columnNumber: 11
        }
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 409,
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
      console.log(this.props.current);

      if (this.props.current) {
        return __jsx(_Slide__WEBPACK_IMPORTED_MODULE_20__["Slide"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 423,
            columnNumber: 9
          }
        }, __jsx("div", {
          className: "layout layout-bottom text-center",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 424,
            columnNumber: 11
          }
        }, __jsx("div", {
          className: 'sprite sprite-character sprite-variation-' + this.props.current.summary.alias.toLowerCase().replaceAll('é', 'e'),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 425,
            columnNumber: 13
          }
        })));
      } else {
        __jsx(_Slide__WEBPACK_IMPORTED_MODULE_20__["Slide"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 430,
            columnNumber: 7
          }
        }, __jsx("div", {
          className: "layout layout-centered",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 431,
            columnNumber: 9
          }
        }, __jsx(_Images__WEBPACK_IMPORTED_MODULE_15__["Images"].Home, {
          className: "loading-maturin",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 432,
            columnNumber: 11
          }
        }), __jsx("br", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 433,
            columnNumber: 11
          }
        }), __jsx("br", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 434,
            columnNumber: 11
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
            lineNumber: 448,
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
          lineNumber: 457,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "layout layout-bottom text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 458,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: 'sprite sprite-character sprite-variation-' + premade.summary.alias.toLowerCase().replaceAll('é', 'e'),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 459,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlL2xvYWRpbmcvTG9hZGluZ1BhZ2UudHN4Il0sIm5hbWVzIjpbIkxvYWRpbmdQYWdlIiwicHJvcGVydGllcyIsIl9pbnB1dCIsInN0YXRlIiwicHJlbWFkZXMiLCJ1bmRlZmluZWQiLCJMb2FkaW5nUGFnZVN0YXRlIiwiSU5JVElBTCIsImZpbGUiLCJzY3JvbGwiLCJtb3VzZSIsImhhbmRsZVByZW1hZGVzTG9hZGluZyIsImJpbmQiLCJoYW5kbGVQcmVtYWRlUmVuZGVyaW5nIiwiaGFuZGxlUHJlbWFkZVNsaWRlUmVuZGVyaW5nIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJoYW5kbGVEcm9wIiwiaGFuZGxlU2lsZW50QWN0aW9uIiwiaGFuZGxlQ2FuY2VsIiwiaGFuZGxlRmlsZVNlbGVjdGlvbiIsImhhbmRsZUZpbGVWYWxpZGF0aW9uIiwiaGFuZGxlRmlsZVJlZHVjdGlvbiIsImhhbmRsZUNhbmNlbGxhdGlvbiIsImhhbmRsZUNsaWNrIiwiaGFuZGxlU2Nyb2xsIiwiaGFuZGxlTW91c2VFbnRlck9wdGlvbiIsImhhbmRsZU1vdXNlTGVhdmVPcHRpb24iLCJSZWFjdCIsImNyZWF0ZVJlZiIsIlByZW1hZGVzIiwibG9hZCIsInRoZW4iLCJldmVudCIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJiYXNpcyIsInBhcmVudE5vZGUiLCJmaXJzdEVsZW1lbnRDaGlsZCIsIm9mZnNldFRvcCIsInNldFN0YXRlIiwic29ydCIsIkludmVzdGlnYXRvciIsImNvbXBhcmVCeU5hbWUiLCJmaWxlcyIsImxlbmd0aCIsIkxPQURJTkciLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsImRyYWdnZWQiLCJkYXRhVHJhbnNmZXIiLCJuYW1lIiwiZW5kc1dpdGgiLCJzY3JvbGxUb3AiLCJpbmRleCIsInByb3BzIiwib25DaGFuZ2UiLCJBcHBsaWNhdGlvbkV2ZW50IiwidXNlIiwic2hvd0ludmVzdGlnYXRvclBhZ2UiLCJzZWxlY3RlZCIsImdldFNlbGVjdGVkIiwiY3VycmVudCIsImNsaWNrIiwiaGFuZGxlUHJlbWFkZVNlbGVjdGlvbiIsInZhbGlkYXRpb24iLCJ2YWx1ZSIsIlJFU09MVkVEIiwic291cmNlIiwiVW5pZG9jRmlsZVN5bWJvbFByb2R1Y2VyIiwiY3JlYXRlIiwiZXZlbnRzIiwicGFyc2UiLCJ0b2tlbml6ZSIsInZhbGlkYXRvciIsIlVuaWRvY1ZhbGlkYXRvciIsImtpc3MiLCJVbmlkb2NDb21tYW5kIiwidmFsaWRhdGVVbmlkb2MiLCJmYWN0b3J5IiwiSW52ZXN0aWdhdG9yQ29tbWFuZCIsInZhbGlkYXRlIiwic3Vic2NyaWJlIiwicmVkdWNlciIsIlVuaWRvY1JlZHVjZXIiLCJyZWR1Y2UiLCJvbiIsInJlYWQiLCJpc1NlbGVjdGVkIiwiY2xhc3NuYW1lcyIsImNsYXNzTmFtZSIsImRpc3BsYXkiLCJyZW5kZXJGaWxlIiwicmVuZGVyQ2FuY2VsbGF0aW9uIiwicmVuZGVyUHJlbWFkZXMiLCJyZW5kZXJGaWxlU2xpZGUiLCJyZW5kZXJDYW5jZWxsYXRpb25TbGlkZSIsInJlbmRlclByZW1hZGVTbGlkZXMiLCJpc0ZpbGVMb2FkaW5nU2VsZWN0ZWQiLCJtYXAiLCJwcmVtYWRlIiwic3VtbWFyeSIsInRvU3RyaW5nIiwiam9iIiwiY29uc29sZSIsImxvZyIsImFsaWFzIiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlQWxsIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwiRW1wdHkiLCJjYWxsYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTs7QUFDTyxJQUFNQSxXQUFiO0FBQUE7O0FBQUE7O0FBQ0U7QUFDRjtBQUNBOztBQVFFO0FBQ0Y7QUFDQTs7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S0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSyxpQkFBUyxFQUFDLGtDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFLLGlCQUFTLEVBQUUsOENBQThDOEMsT0FBTyxDQUFDQyxPQUFSLENBQWdCSyxLQUFoQixDQUFzQkMsV0FBdEIsR0FBb0NDLFVBQXBDLENBQStDLEdBQS9DLEVBQW9ELEdBQXBELENBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixDQURGLENBREY7QUFPRDtBQWhiSDs7QUFBQTtBQUFBLEVBQWlDaEYsNENBQUssQ0FBQ2lGLFNBQXZDO0FBbWJBO0FBQ0E7QUFDQTs7QUFyYmE1RyxXLENBSVk2RyxZLEdBQWlEO0FBQ3RFO0FBQ0o7QUFDQTtBQUNJdEQsVUFBUSxFQUFFdUQsdURBQUssQ0FBQ0M7QUFKc0QsQzs7NkJBa2J6RC9HLFcsS0FBQUEsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40MjMzYzM0MjE3OGNhOWUyODM0NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xyXG5pbXBvcnQgeyBcclxuICB0b2tlbml6ZSwgXHJcbiAgcGFyc2UsXHJcbiAgVW5pZG9jRXZlbnQsIFxyXG4gIFVuaWRvY1Byb2R1Y2VyLCBcclxuICBVbmlkb2NSZWR1Y2VyLCBcclxuICBVbmlkb2NWYWxpZGF0aW9uRXZlbnQsXHJcbiAgVW5pZG9jVmFsaWRhdG9yIFxyXG59IGZyb20gJ0BjZWRyaWMtZGVtb25naXZlcnQvdW5pZG9jJ1xyXG5cclxuaW1wb3J0IHsgRW1wdHkgfSBmcm9tICcuLi8uLi8uLi90eXBlc2NyaXB0L3V0aWxzJ1xyXG5pbXBvcnQgeyBVbmlkb2NGaWxlU3ltYm9sUHJvZHVjZXIgfSBmcm9tICcuLi8uLi8uLi90eXBlc2NyaXB0L3VuaWRvYy9Vbmlkb2NGaWxlU3ltYm9sUHJvZHVjZXInXHJcbmltcG9ydCB7IFVuaWRvY0NvbW1hbmQgfSBmcm9tICcuLi8uLi8uLi90eXBlc2NyaXB0L3VuaWRvYy9Vbmlkb2NDb21tYW5kJ1xyXG5pbXBvcnQgeyBJbnZlc3RpZ2F0b3JDb21tYW5kIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXNjcmlwdC91bmlkb2MvSW52ZXN0aWdhdG9yQ29tbWFuZCdcclxuaW1wb3J0IHsgQXBwbGljYXRpb25FdmVudCB9IGZyb20gJy4uLy4uLy4uL3R5cGVzY3JpcHQvYXBwbGljYXRpb24vQXBwbGljYXRpb25FdmVudCdcclxuaW1wb3J0IHsgSW52ZXN0aWdhdG9yIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXNjcmlwdC9JbnZlc3RpZ2F0b3InXHJcblxyXG5pbXBvcnQgeyBJbWFnZXMgfSBmcm9tICcuLi8uLi9JbWFnZXMnXHJcbmltcG9ydCB7IExvYWRlciB9IGZyb20gJy4uLy4uL0xvYWRlcidcclxuaW1wb3J0IHsgU3RhdGljU2xpZGVzaG93ICB9IGZyb20gJy4uLy4uL1N0YXRpY1NsaWRlc2hvdydcclxuaW1wb3J0IHsgUHJlbWFkZXMgfSBmcm9tICcuL1ByZW1hZGVzJ1xyXG5pbXBvcnQgeyBMb2FkaW5nUGFnZVN0YXRlIH0gZnJvbSAnLi9Mb2FkaW5nUGFnZVN0YXRlJ1xyXG5pbXBvcnQgeyBTbGlkZSB9IGZyb20gJy4uLy4uL1NsaWRlJ1xyXG5cclxuXHJcbi8qKlxyXG4gKiBcclxuICovXHJcbmV4cG9ydCBjbGFzcyBMb2FkaW5nUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxMb2FkaW5nUGFnZS5Qcm9wZXJ0aWVzLCBMb2FkaW5nUGFnZS5TdGF0ZT4ge1xyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgZGVmYXVsdFByb3BzOiBSZWFkb25seTxMb2FkaW5nUGFnZS5Qcm9wZXJ0aWVzPiA9IHtcclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIG9uQ2hhbmdlOiBFbXB0eS5jYWxsYmFja1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHJpdmF0ZSByZWFkb25seSBfaW5wdXQ6IFJlYWN0LlJlZk9iamVjdDxIVE1MSW5wdXRFbGVtZW50PlxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgY29uc3RydWN0b3IgKHByb3BlcnRpZXM6IExvYWRpbmdQYWdlLlByb3BlcnRpZXMpIHtcclxuICAgIHN1cGVyKHByb3BlcnRpZXMpXHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgcHJlbWFkZXM6IHVuZGVmaW5lZCxcclxuICAgICAgc3RhdGU6IExvYWRpbmdQYWdlU3RhdGUuSU5JVElBTCxcclxuICAgICAgZmlsZTogdW5kZWZpbmVkLFxyXG4gICAgICBzY3JvbGw6IDAsXHJcbiAgICAgIG1vdXNlOiAtMVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaGFuZGxlUHJlbWFkZXNMb2FkaW5nID0gdGhpcy5oYW5kbGVQcmVtYWRlc0xvYWRpbmcuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVQcmVtYWRlUmVuZGVyaW5nID0gdGhpcy5oYW5kbGVQcmVtYWRlUmVuZGVyaW5nLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlUHJlbWFkZVNsaWRlUmVuZGVyaW5nID0gdGhpcy5oYW5kbGVQcmVtYWRlU2xpZGVSZW5kZXJpbmcuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVJbnB1dENoYW5nZSA9IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVEcm9wID0gdGhpcy5oYW5kbGVEcm9wLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlU2lsZW50QWN0aW9uID0gdGhpcy5oYW5kbGVTaWxlbnRBY3Rpb24uYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVDYW5jZWwgPSB0aGlzLmhhbmRsZUNhbmNlbC5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmhhbmRsZUZpbGVTZWxlY3Rpb24gPSB0aGlzLmhhbmRsZUZpbGVTZWxlY3Rpb24uYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVGaWxlVmFsaWRhdGlvbiA9IHRoaXMuaGFuZGxlRmlsZVZhbGlkYXRpb24uYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVGaWxlUmVkdWN0aW9uID0gdGhpcy5oYW5kbGVGaWxlUmVkdWN0aW9uLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlQ2FuY2VsbGF0aW9uID0gdGhpcy5oYW5kbGVDYW5jZWxsYXRpb24uYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVTY3JvbGwgPSB0aGlzLmhhbmRsZVNjcm9sbC5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmhhbmRsZU1vdXNlRW50ZXJPcHRpb24gPSB0aGlzLmhhbmRsZU1vdXNlRW50ZXJPcHRpb24uYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVNb3VzZUxlYXZlT3B0aW9uID0gdGhpcy5oYW5kbGVNb3VzZUxlYXZlT3B0aW9uLmJpbmQodGhpcylcclxuXHJcbiAgICB0aGlzLl9pbnB1dCA9IFJlYWN0LmNyZWF0ZVJlZigpXHJcblxyXG4gICAgUHJlbWFkZXMubG9hZCgpLnRoZW4odGhpcy5oYW5kbGVQcmVtYWRlc0xvYWRpbmcpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgaGFuZGxlTW91c2VFbnRlck9wdGlvbiAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KTogdm9pZCB7XHJcbiAgICBjb25zdCB0YXJnZXQ6IEhUTUxCdXR0b25FbGVtZW50ID0gZXZlbnQuY3VycmVudFRhcmdldFxyXG4gICAgY29uc3QgYmFzaXM6IG51bWJlciA9ICh0YXJnZXQucGFyZW50Tm9kZS5maXJzdEVsZW1lbnRDaGlsZCBhcyBhbnkpLm9mZnNldFRvcFxyXG4gICAgXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbW91c2U6IHRhcmdldC5vZmZzZXRUb3AgLSBiYXNpcyB9KVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIGhhbmRsZU1vdXNlTGVhdmVPcHRpb24gKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50Pik6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1vdXNlOiAtMSB9KVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIGhhbmRsZVByZW1hZGVzTG9hZGluZyhwcmVtYWRlczogSW52ZXN0aWdhdG9yW10pOiB2b2lkIHtcclxuICAgIHByZW1hZGVzLnNvcnQoSW52ZXN0aWdhdG9yLmNvbXBhcmVCeU5hbWUpXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgcHJlbWFkZXMgfSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHByaXZhdGUgaGFuZGxlSW5wdXRDaGFuZ2UoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KTogdm9pZCB7XHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmZpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IFxyXG4gICAgICAgIHN0YXRlOiBMb2FkaW5nUGFnZVN0YXRlLkxPQURJTkcsXHJcbiAgICAgICAgZmlsZTogZXZlbnQudGFyZ2V0LmZpbGVzWzBdIFxyXG4gICAgICB9LCB0aGlzLmhhbmRsZUZpbGVTZWxlY3Rpb24uYmluZCh1bmRlZmluZWQsIGV2ZW50LnRhcmdldC5maWxlc1swXSkpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwcml2YXRlIGhhbmRsZVNpbGVudEFjdGlvbihldmVudDogUmVhY3QuU3ludGhldGljRXZlbnQpOiB2b2lkIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwcml2YXRlIGhhbmRsZURyb3AoZXZlbnQ6IFJlYWN0LkRyYWdFdmVudDxIVE1MSW5wdXRFbGVtZW50Pik6IHZvaWQge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICBjb25zdCBkcmFnZ2VkOiBEYXRhVHJhbnNmZXIgPSBldmVudC5kYXRhVHJhbnNmZXJcclxuXHJcbiAgICBpZiAoZHJhZ2dlZC5maWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGZvciAoY29uc3QgZmlsZSBvZiBkcmFnZ2VkLmZpbGVzKSB7XHJcbiAgICAgICAgaWYgKGZpbGUubmFtZS5lbmRzV2l0aCgnLnR4dCcpKSB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgXHJcbiAgICAgICAgICAgIHN0YXRlOiBMb2FkaW5nUGFnZVN0YXRlLkxPQURJTkcsXHJcbiAgICAgICAgICAgIGZpbGVcclxuICAgICAgICAgIH0sIHRoaXMuaGFuZGxlRmlsZVNlbGVjdGlvbi5iaW5kKHVuZGVmaW5lZCwgZmlsZSkpXHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBoYW5kbGVTY3JvbGwoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQsIFdoZWVsRXZlbnQ+KTogdm9pZCB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2Nyb2xsOiBldmVudC5jdXJyZW50VGFyZ2V0LnNjcm9sbFRvcCB9KVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBoYW5kbGVQcmVtYWRlU2VsZWN0aW9uIChpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKEFwcGxpY2F0aW9uRXZlbnQudXNlKHRoaXMuc3RhdGUucHJlbWFkZXNbaW5kZXhdKSlcclxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoQXBwbGljYXRpb25FdmVudC5zaG93SW52ZXN0aWdhdG9yUGFnZSgpKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBoYW5kbGVDbGljayhldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLnN0YXRlICE9PSBMb2FkaW5nUGFnZVN0YXRlLklOSVRJQUwpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2VsZWN0ZWQ6IG51bWJlciA9IHRoaXMuZ2V0U2VsZWN0ZWQoKVxyXG5cclxuICAgIGlmIChzZWxlY3RlZCA8IDEpIHtcclxuICAgICAgdGhpcy5faW5wdXQuY3VycmVudC5jbGljaygpXHJcbiAgICB9IGVsc2UgaWYgKHNlbGVjdGVkID09PSAxKSB7XHJcbiAgICAgIGlmICh0aGlzLnByb3BzLmN1cnJlbnQpIHtcclxuICAgICAgICB0aGlzLmhhbmRsZUNhbmNlbGxhdGlvbigpXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaGFuZGxlUHJlbWFkZVNlbGVjdGlvbihzZWxlY3RlZCAtIDIpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwcml2YXRlIGhhbmRsZUNhbmNlbChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pOiB2b2lkIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKEFwcGxpY2F0aW9uRXZlbnQuc2hvd0ludmVzdGlnYXRvclBhZ2UoKSlcclxuICB9XHJcblxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gICBwcml2YXRlIGhhbmRsZUNhbmNlbGxhdGlvbiAoKSA6IHZvaWQge1xyXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShBcHBsaWNhdGlvbkV2ZW50LnNob3dJbnZlc3RpZ2F0b3JQYWdlKCkpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwcml2YXRlIGhhbmRsZUZpbGVWYWxpZGF0aW9uICh2YWxpZGF0aW9uOiBVbmlkb2NWYWxpZGF0aW9uRXZlbnQpIDogdm9pZCB7XHJcbiAgICAvLyBAVE9ETyBlcnJvci1jaGVja1xyXG4gICAgLy9jb25zb2xlLmxvZyh2YWxpZGF0aW9uLnRvU3RyaW5nKCkpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwcml2YXRlIGhhbmRsZUZpbGVSZWR1Y3Rpb24gKHZhbHVlOiBJbnZlc3RpZ2F0b3IpIDogdm9pZCB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgXHJcbiAgICAgIHN0YXRlOiBMb2FkaW5nUGFnZVN0YXRlLlJFU09MVkVEXHJcbiAgICB9KVxyXG5cclxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoQXBwbGljYXRpb25FdmVudC51c2UodmFsdWUpKVxyXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShBcHBsaWNhdGlvbkV2ZW50LnNob3dJbnZlc3RpZ2F0b3JQYWdlKCkpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwcml2YXRlIGhhbmRsZUZpbGVTZWxlY3Rpb24oZmlsZTogRmlsZSk6IHZvaWQge1xyXG4gICAgY29uc3Qgc291cmNlOiBVbmlkb2NGaWxlU3ltYm9sUHJvZHVjZXIgPSBVbmlkb2NGaWxlU3ltYm9sUHJvZHVjZXIuY3JlYXRlKGZpbGUpXHJcbiAgICBjb25zdCBldmVudHM6IFVuaWRvY1Byb2R1Y2VyPFVuaWRvY0V2ZW50PiA9IHBhcnNlKHRva2VuaXplKHNvdXJjZSkpXHJcbiAgICBjb25zdCB2YWxpZGF0b3I6IFVuaWRvY1ZhbGlkYXRvciA9IFVuaWRvY1ZhbGlkYXRvci5raXNzKFVuaWRvY0NvbW1hbmQudmFsaWRhdGVVbmlkb2MuZmFjdG9yeShJbnZlc3RpZ2F0b3JDb21tYW5kLnZhbGlkYXRlKSlcclxuXHJcbiAgICB2YWxpZGF0b3Iuc3Vic2NyaWJlKGV2ZW50cylcclxuXHJcbiAgICBjb25zdCByZWR1Y2VyOiBVbmlkb2NQcm9kdWNlcjxJbnZlc3RpZ2F0b3I+ID0gVW5pZG9jUmVkdWNlci5yZWR1Y2UudmFsaWRhdGlvbih2YWxpZGF0b3IsIFVuaWRvY0NvbW1hbmQucmVkdWNlLmZhY3RvcnkoSW52ZXN0aWdhdG9yQ29tbWFuZC5yZWR1Y2UpKVxyXG5cclxuICAgIHZhbGlkYXRvci5vbignbmV4dCcsIHRoaXMuaGFuZGxlRmlsZVZhbGlkYXRpb24pXHJcbiAgICByZWR1Y2VyLm9uKCduZXh0JywgdGhpcy5oYW5kbGVGaWxlUmVkdWN0aW9uKVxyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBcclxuICAgICAgc3RhdGU6IExvYWRpbmdQYWdlU3RhdGUuTE9BRElORyxcclxuICAgICAgZmlsZVxyXG4gICAgfSwgc291cmNlLnJlYWQuYmluZChzb3VyY2UpKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIGdldFNlbGVjdGVkKCk6IG51bWJlciB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5tb3VzZSA8IDApIHtcclxuICAgICAgcmV0dXJuICgoKHRoaXMuc3RhdGUuc2Nyb2xsICsgNTApIC8gMTAwKSA8PCAwKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuICgodGhpcy5zdGF0ZS5tb3VzZSAvIDEwMCkgPDwgMClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyBpc1NlbGVjdGVkKGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmdldFNlbGVjdGVkKCkgPT09IGluZGV4XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgaXNGaWxlTG9hZGluZ1NlbGVjdGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNTZWxlY3RlZCgwKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIGlzQ2FuY2VsbGF0aW9uU2VsZWN0ZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1NlbGVjdGVkKDEpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgaXNQcmVtYWRlU2VsZWN0ZWQoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNTZWxlY3RlZChpbmRleCArIDIpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgcmVuZGVyICgpIDogUmVhY3QuUmVhY3RFbGVtZW50IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgXHJcbiAgICAgICAgb25Ecm9wPXt0aGlzLmhhbmRsZURyb3B9IFxyXG4gICAgICAgIG9uRHJhZ0VudGVyPXt0aGlzLmhhbmRsZVNpbGVudEFjdGlvbn1cclxuICAgICAgICBvbkRyYWdPdmVyPXt0aGlzLmhhbmRsZVNpbGVudEFjdGlvbn1cclxuICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfVxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnbGF5b3V0IGxheW91dC1sb2FkaW5nLXBhZ2UnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9XHJcbiAgICAgID5cclxuICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgIHJlZj17dGhpcy5faW5wdXR9IFxyXG4gICAgICAgICAgdHlwZT0nZmlsZScgXHJcbiAgICAgICAgICBhY2NlcHQ9J3RleHQvcGxhaW4nIFxyXG4gICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgY2xhc3NOYW1lPSdsYXlvdXQtbG9hZGluZy1wYWdlLW9wdGlvbnMnXHJcbiAgICAgICAgICBvblNjcm9sbD17dGhpcy5oYW5kbGVTY3JvbGx9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgeyB0aGlzLnJlbmRlckZpbGUoKSB9XHJcbiAgICAgICAgICB7IHRoaXMucmVuZGVyQ2FuY2VsbGF0aW9uKCkgfVxyXG4gICAgICAgICAgeyB0aGlzLnJlbmRlclByZW1hZGVzKCkgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsYXlvdXQtbG9hZGluZy1wYWdlLWRpc3BsYXknPlxyXG4gICAgICAgICAgPFN0YXRpY1NsaWRlc2hvdyBpbmRleD17dGhpcy5nZXRTZWxlY3RlZCgpfT5cclxuICAgICAgICAgICAgeyB0aGlzLnJlbmRlckZpbGVTbGlkZSgpIH1cclxuICAgICAgICAgICAgeyB0aGlzLnJlbmRlckNhbmNlbGxhdGlvblNsaWRlKCkgfVxyXG4gICAgICAgICAgICB7IHRoaXMucmVuZGVyUHJlbWFkZVNsaWRlcygpIH1cclxuICAgICAgICAgIDwvU3RhdGljU2xpZGVzaG93PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyByZW5kZXJGaWxlKCk6IFJlYWN0LlJlYWN0Tm9kZSB7XHJcbiAgICBjb25zdCBzZWxlY3RlZDogYm9vbGVhbiA9IHRoaXMuaXNGaWxlTG9hZGluZ1NlbGVjdGVkKClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8YnV0dG9uIFxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnbG9hZGluZy1vcHRpb24nLCB7ICdpcy1hY3RpdmUnOiBzZWxlY3RlZCB9KX1cclxuICAgICAgICBhcmlhLXByZXNzZWQ9e3NlbGVjdGVkfVxyXG4gICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLnN0YXRlICE9PSBMb2FkaW5nUGFnZVN0YXRlLklOSVRJQUx9XHJcbiAgICAgICAgb25Nb3VzZUVudGVyPXt0aGlzLmhhbmRsZU1vdXNlRW50ZXJPcHRpb259XHJcbiAgICAgICAgb25Nb3VzZUxlYXZlPXt0aGlzLmhhbmRsZU1vdXNlTGVhdmVPcHRpb259XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9hZGluZy1vcHRpb24taWNvbicgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9hZGluZy1vcHRpb24taW5mb3JtYXRpb24nPlxyXG4gICAgICAgICAgPGgxPkNoYXJnZXIgdW4gZG9jdW1lbnQ8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIClcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIHJlbmRlckNhbmNlbGxhdGlvbigpOiBSZWFjdC5SZWFjdE5vZGUge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWQ6IGJvb2xlYW4gPSB0aGlzLmlzU2VsZWN0ZWQoMSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8YnV0dG9uIFxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnbG9hZGluZy1vcHRpb24nLCB7ICdpcy1hY3RpdmUnOiBzZWxlY3RlZCB9KX1cclxuICAgICAgICBhcmlhLXByZXNzZWQ9e3NlbGVjdGVkfVxyXG4gICAgICAgIGRpc2FibGVkPXshdGhpcy5wcm9wcy5jdXJyZW50IHx8IHRoaXMuc3RhdGUuc3RhdGUgIT09IExvYWRpbmdQYWdlU3RhdGUuSU5JVElBTH1cclxuICAgICAgICBvbk1vdXNlRW50ZXI9e3RoaXMuaGFuZGxlTW91c2VFbnRlck9wdGlvbn1cclxuICAgICAgICBvbk1vdXNlTGVhdmU9e3RoaXMuaGFuZGxlTW91c2VMZWF2ZU9wdGlvbn1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2FkaW5nLW9wdGlvbi1pY29uJyAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2FkaW5nLW9wdGlvbi1pbmZvcm1hdGlvbic+XHJcbiAgICAgICAgICA8aDE+UmV0b3VyPC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgcmVuZGVyUHJlbWFkZXMoKTogUmVhY3QuUmVhY3ROb2RlIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLnByZW1hZGVzKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLnByZW1hZGVzLm1hcCh0aGlzLmhhbmRsZVByZW1hZGVSZW5kZXJpbmcpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gPExvYWRlcj5DaGFyZ2VtZW50IGRlcyBwcsOpdGlyw6lzIGVuIGNvdXJzPC9Mb2FkZXI+XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgaGFuZGxlUHJlbWFkZVJlbmRlcmluZyhwcmVtYWRlOiBJbnZlc3RpZ2F0b3IsIGluZGV4OiBudW1iZXIpOiBSZWFjdC5SZWFjdE5vZGUge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWQ6IGJvb2xlYW4gPSB0aGlzLmlzU2VsZWN0ZWQoaW5kZXggKyAyKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxidXR0b24gXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdsb2FkaW5nLW9wdGlvbiBpcy1wcmVtYWRlJywgeyAnaXMtYWN0aXZlJzogc2VsZWN0ZWQgfSl9XHJcbiAgICAgICAgYXJpYS1wcmVzc2VkPXtzZWxlY3RlZH0gXHJcbiAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUuc3RhdGUgIT09IExvYWRpbmdQYWdlU3RhdGUuSU5JVElBTH0gXHJcbiAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICBvbk1vdXNlRW50ZXI9e3RoaXMuaGFuZGxlTW91c2VFbnRlck9wdGlvbn1cclxuICAgICAgICBvbk1vdXNlTGVhdmU9e3RoaXMuaGFuZGxlTW91c2VMZWF2ZU9wdGlvbn1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2FkaW5nLW9wdGlvbi1pY29uJz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnc3ByaXRlIHNwcml0ZS1mb2xkZXIgc3ByaXRlLXZhcmlhdGlvbi0nICsgKGluZGV4ICUgMyl9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvYWRpbmctb3B0aW9uLWluZm9ybWF0aW9uJz5cclxuICAgICAgICAgIDxoMT57IHByZW1hZGUuc3VtbWFyeS5uYW1lLnRvU3RyaW5nKCkgfTwvaDE+XHJcbiAgICAgICAgICA8aDI+eyBwcmVtYWRlLnN1bW1hcnkuam9iIH08L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gICBwdWJsaWMgcmVuZGVyRmlsZVNsaWRlKCk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8U2xpZGU+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xheW91dCBsYXlvdXQtY2VudGVyZWQnPlxyXG4gICAgICAgICAgPEltYWdlcy5Ib21lIGNsYXNzTmFtZT0nbG9hZGluZy1tYXR1cmluJyAvPlxyXG4gICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICBTw6lsZWN0aW9ubmVyIHVuZSBmZXVpbGxlLlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1NsaWRlPlxyXG4gICAgKVxyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgcmVuZGVyQ2FuY2VsbGF0aW9uU2xpZGUoKTogUmVhY3QuUmVhY3RFbGVtZW50IHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuY3VycmVudClcclxuICAgIGlmICh0aGlzLnByb3BzLmN1cnJlbnQpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8U2xpZGU+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGF5b3V0IGxheW91dC1ib3R0b20gdGV4dC1jZW50ZXInPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3Nwcml0ZSBzcHJpdGUtY2hhcmFjdGVyIHNwcml0ZS12YXJpYXRpb24tJyArIHRoaXMucHJvcHMuY3VycmVudC5zdW1tYXJ5LmFsaWFzLnRvTG93ZXJDYXNlKCkucmVwbGFjZUFsbCgnw6knLCAnZScpfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9TbGlkZT5cclxuICAgICAgKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgPFNsaWRlPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsYXlvdXQgbGF5b3V0LWNlbnRlcmVkJz5cclxuICAgICAgICAgIDxJbWFnZXMuSG9tZSBjbGFzc05hbWU9J2xvYWRpbmctbWF0dXJpbicgLz5cclxuICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgQXVjdW4gZG9jdW1lbnQgY2hhcmfDqS5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9TbGlkZT5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyByZW5kZXJQcmVtYWRlU2xpZGVzKCk6IFJlYWN0LlJlYWN0Tm9kZSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5wcmVtYWRlcykge1xyXG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5wcmVtYWRlcy5tYXAodGhpcy5oYW5kbGVQcmVtYWRlU2xpZGVSZW5kZXJpbmcpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gPExvYWRlcj5DaGFyZ2VtZW50IGRlcyBwcsOpdGlyw6lzIGVuIGNvdXJzPC9Mb2FkZXI+XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgaGFuZGxlUHJlbWFkZVNsaWRlUmVuZGVyaW5nKHByZW1hZGU6IEludmVzdGlnYXRvciwgaW5kZXg6IG51bWJlcik6IFJlYWN0LlJlYWN0Tm9kZSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8U2xpZGUga2V5PXtpbmRleH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xheW91dCBsYXlvdXQtYm90dG9tIHRleHQtY2VudGVyJz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnc3ByaXRlIHNwcml0ZS1jaGFyYWN0ZXIgc3ByaXRlLXZhcmlhdGlvbi0nICsgcHJlbWFkZS5zdW1tYXJ5LmFsaWFzLnRvTG93ZXJDYXNlKCkucmVwbGFjZUFsbCgnw6knLCAnZScpfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1NsaWRlPlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFxyXG4gKi9cclxuZXhwb3J0IG5hbWVzcGFjZSBMb2FkaW5nUGFnZSB7XHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgZXhwb3J0IHR5cGUgQXBwbGljYXRpb25DYWxsYmFjayA9IChldmVudDogQXBwbGljYXRpb25FdmVudCkgPT4gdm9pZFxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBleHBvcnQgdHlwZSBQcm9wZXJ0aWVzID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nIHwgdW5kZWZpbmVkLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIGN1cnJlbnQ/OiBJbnZlc3RpZ2F0b3IgfCB1bmRlZmluZWQsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgb25DaGFuZ2U/OiBBcHBsaWNhdGlvbkNhbGxiYWNrIHwgdW5kZWZpbmVkXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBleHBvcnQgdHlwZSBTdGF0ZSA9IHtcclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIHByZW1hZGVzOiB1bmRlZmluZWQgfCBJbnZlc3RpZ2F0b3JbXSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBmaWxlOiBGaWxlIHwgdW5kZWZpbmVkLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIHN0YXRlOiBMb2FkaW5nUGFnZVN0YXRlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIHNjcm9sbDogbnVtYmVyLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIG1vdXNlOiBudW1iZXJcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9
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
    key: "handleMouseClickOption",
    value: function handleMouseClickOption(event) {
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
          lineNumber: 294,
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
          lineNumber: 301,
          columnNumber: 9
        }
      }), __jsx("div", {
        className: "layout-loading-page-options",
        onScroll: this.handleScroll,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308,
          columnNumber: 9
        }
      }, this.renderFile(), this.renderCancellation(), this.renderPremades()), __jsx("div", {
        className: "layout-loading-page-display",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316,
          columnNumber: 9
        }
      }, __jsx(_StaticSlideshow__WEBPACK_IMPORTED_MODULE_17__["StaticSlideshow"], {
        index: this.getSelected(),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317,
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
          lineNumber: 334,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "loading-option-icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342,
          columnNumber: 9
        }
      }, __jsx("i", {
        className: "fas fa-upload",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343,
          columnNumber: 11
        }
      })), __jsx("div", {
        className: "loading-option-information",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345,
          columnNumber: 9
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346,
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
          lineNumber: 359,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "loading-option-icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367,
          columnNumber: 9
        }
      }, __jsx("i", {
        className: "fas fa-undo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368,
          columnNumber: 11
        }
      })), __jsx("div", {
        className: "loading-option-information",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 370,
          columnNumber: 9
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 371,
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
            lineNumber: 384,
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
          lineNumber: 395,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "loading-option-icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 404,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: 'sprite sprite-folder sprite-variation-' + index % 3,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 405,
          columnNumber: 11
        }
      })), __jsx("div", {
        className: "loading-option-information",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 407,
          columnNumber: 9
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 408,
          columnNumber: 11
        }
      }, premade.summary.name.toString()), __jsx("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 409,
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
          lineNumber: 420,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "layout layout-centered",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 421,
          columnNumber: 9
        }
      }, __jsx(_Images__WEBPACK_IMPORTED_MODULE_15__["Images"].Home, {
        className: "loading-maturin",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 422,
          columnNumber: 11
        }
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 423,
          columnNumber: 11
        }
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 424,
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
            lineNumber: 437,
            columnNumber: 9
          }
        }, __jsx("div", {
          className: "layout layout-bottom text-center",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 438,
            columnNumber: 11
          }
        }, __jsx("div", {
          className: 'sprite sprite-character sprite-variation-' + this.props.current.summary.alias.toLowerCase().replaceAll('é', 'e'),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 439,
            columnNumber: 13
          }
        })));
      } else {
        return __jsx(_Slide__WEBPACK_IMPORTED_MODULE_20__["Slide"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 445,
            columnNumber: 9
          }
        }, __jsx("div", {
          className: "layout layout-centered",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 446,
            columnNumber: 11
          }
        }, __jsx(_Images__WEBPACK_IMPORTED_MODULE_15__["Images"].Home, {
          className: "loading-maturin",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 447,
            columnNumber: 13
          }
        }), __jsx("br", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 448,
            columnNumber: 13
          }
        }), __jsx("br", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 449,
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
            lineNumber: 464,
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
          lineNumber: 473,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "layout layout-bottom text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 474,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: 'sprite sprite-character sprite-variation-' + premade.summary.alias.toLowerCase().replaceAll('é', 'e'),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 475,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlL2xvYWRpbmcvTG9hZGluZ1BhZ2UudHN4Il0sIm5hbWVzIjpbIkxvYWRpbmdQYWdlIiwicHJvcGVydGllcyIsIl9pbnB1dCIsInN0YXRlIiwicHJlbWFkZXMiLCJ1bmRlZmluZWQiLCJMb2FkaW5nUGFnZVN0YXRlIiwiSU5JVElBTCIsImZpbGUiLCJzY3JvbGwiLCJtb3VzZSIsImhhbmRsZVByZW1hZGVzTG9hZGluZyIsImJpbmQiLCJoYW5kbGVQcmVtYWRlUmVuZGVyaW5nIiwiaGFuZGxlUHJlbWFkZVNsaWRlUmVuZGVyaW5nIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJoYW5kbGVEcm9wIiwiaGFuZGxlU2lsZW50QWN0aW9uIiwiaGFuZGxlQ2FuY2VsIiwiaGFuZGxlRmlsZVNlbGVjdGlvbiIsImhhbmRsZUZpbGVWYWxpZGF0aW9uIiwiaGFuZGxlRmlsZVJlZHVjdGlvbiIsImhhbmRsZUNhbmNlbGxhdGlvbiIsImhhbmRsZUNsaWNrIiwiaGFuZGxlU2Nyb2xsIiwiaGFuZGxlTW91c2VFbnRlck9wdGlvbiIsImhhbmRsZU1vdXNlTGVhdmVPcHRpb24iLCJSZWFjdCIsImNyZWF0ZVJlZiIsIlByZW1hZGVzIiwibG9hZCIsInRoZW4iLCJldmVudCIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJiYXNpcyIsInBhcmVudE5vZGUiLCJmaXJzdEVsZW1lbnRDaGlsZCIsIm9mZnNldFRvcCIsInNldFN0YXRlIiwic29ydCIsIkludmVzdGlnYXRvciIsImNvbXBhcmVCeU5hbWUiLCJmaWxlcyIsImxlbmd0aCIsIkxPQURJTkciLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsImRyYWdnZWQiLCJkYXRhVHJhbnNmZXIiLCJuYW1lIiwiZW5kc1dpdGgiLCJzY3JvbGxUb3AiLCJpbmRleCIsInByb3BzIiwib25DaGFuZ2UiLCJBcHBsaWNhdGlvbkV2ZW50IiwidXNlIiwic2hvd0ludmVzdGlnYXRvclBhZ2UiLCJzZWxlY3RlZCIsImdldFNlbGVjdGVkIiwiY3VycmVudCIsImNsaWNrIiwiaGFuZGxlUHJlbWFkZVNlbGVjdGlvbiIsInZhbGlkYXRpb24iLCJ2YWx1ZSIsIlJFU09MVkVEIiwic291cmNlIiwiVW5pZG9jRmlsZVN5bWJvbFByb2R1Y2VyIiwiY3JlYXRlIiwiZXZlbnRzIiwicGFyc2UiLCJ0b2tlbml6ZSIsInZhbGlkYXRvciIsIlVuaWRvY1ZhbGlkYXRvciIsImtpc3MiLCJVbmlkb2NDb21tYW5kIiwidmFsaWRhdGVVbmlkb2MiLCJmYWN0b3J5IiwiSW52ZXN0aWdhdG9yQ29tbWFuZCIsInZhbGlkYXRlIiwic3Vic2NyaWJlIiwicmVkdWNlciIsIlVuaWRvY1JlZHVjZXIiLCJyZWR1Y2UiLCJvbiIsInJlYWQiLCJpc1NlbGVjdGVkIiwiY2xhc3NuYW1lcyIsImNsYXNzTmFtZSIsImRpc3BsYXkiLCJyZW5kZXJGaWxlIiwicmVuZGVyQ2FuY2VsbGF0aW9uIiwicmVuZGVyUHJlbWFkZXMiLCJyZW5kZXJGaWxlU2xpZGUiLCJyZW5kZXJDYW5jZWxsYXRpb25TbGlkZSIsInJlbmRlclByZW1hZGVTbGlkZXMiLCJpc0ZpbGVMb2FkaW5nU2VsZWN0ZWQiLCJoYW5kbGVNb3VzZUNsaWNrT3B0aW9uIiwibWFwIiwicHJlbWFkZSIsInN1bW1hcnkiLCJ0b1N0cmluZyIsImpvYiIsImFsaWFzIiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlQWxsIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwiRW1wdHkiLCJjYWxsYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTs7QUFDTyxJQUFNQSxXQUFiO0FBQUE7O0FBQUE7O0FBQ0U7QUFDRjtBQUNBOztBQVFFO0FB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V0MsUUFBZixFQUF5QjtBQUN2QixlQUFPLEtBQUtELEtBQUwsQ0FBV0MsUUFBWCxDQUFvQitGLEdBQXBCLENBQXdCLEtBQUtyRiwyQkFBN0IsQ0FBUDtBQUNELE9BRkQsTUFFTztBQUNMLGVBQU8sTUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9EQUFQO0FBQ0Q7QUFDRjtBQUVEO0FBQ0Y7QUFDQTs7QUF2YkE7QUFBQTtBQUFBLGdEQXdicUNzRixPQXhickMsRUF3YjREL0MsS0F4YjVELEVBd2I0RjtBQUN4RixhQUNFLE1BQUMsNkNBQUQ7QUFBTyxXQUFHLEVBQUVBLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUssaUJBQVMsRUFBQyxrQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSyxpQkFBUyxFQUFFLDhDQUE4QytDLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQkcsS0FBaEIsQ0FBc0JDLFdBQXRCLEdBQW9DQyxVQUFwQyxDQUErQyxHQUEvQyxFQUFvRCxHQUFwRCxDQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsQ0FERixDQURGO0FBT0Q7QUFoY0g7O0FBQUE7QUFBQSxFQUFpQy9FLDRDQUFLLENBQUNnRixTQUF2QztBQW1jQTtBQUNBO0FBQ0E7O0FBcmNhM0csVyxDQUlZNEcsWSxHQUFpRDtBQUN0RTtBQUNKO0FBQ0E7QUFDSXJELFVBQVEsRUFBRXNELHVEQUFLLENBQUNDO0FBSnNELEM7OzZCQWtjekQ5RyxXLEtBQUFBLFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTBiOGMyZmUxY2QyMmVkNTE2NjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcclxuaW1wb3J0IHsgXHJcbiAgdG9rZW5pemUsIFxyXG4gIHBhcnNlLFxyXG4gIFVuaWRvY0V2ZW50LCBcclxuICBVbmlkb2NQcm9kdWNlciwgXHJcbiAgVW5pZG9jUmVkdWNlciwgXHJcbiAgVW5pZG9jVmFsaWRhdGlvbkV2ZW50LFxyXG4gIFVuaWRvY1ZhbGlkYXRvciBcclxufSBmcm9tICdAY2VkcmljLWRlbW9uZ2l2ZXJ0L3VuaWRvYydcclxuXHJcbmltcG9ydCB7IEVtcHR5IH0gZnJvbSAnLi4vLi4vLi4vdHlwZXNjcmlwdC91dGlscydcclxuaW1wb3J0IHsgVW5pZG9jRmlsZVN5bWJvbFByb2R1Y2VyIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXNjcmlwdC91bmlkb2MvVW5pZG9jRmlsZVN5bWJvbFByb2R1Y2VyJ1xyXG5pbXBvcnQgeyBVbmlkb2NDb21tYW5kIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXNjcmlwdC91bmlkb2MvVW5pZG9jQ29tbWFuZCdcclxuaW1wb3J0IHsgSW52ZXN0aWdhdG9yQ29tbWFuZCB9IGZyb20gJy4uLy4uLy4uL3R5cGVzY3JpcHQvdW5pZG9jL0ludmVzdGlnYXRvckNvbW1hbmQnXHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uRXZlbnQgfSBmcm9tICcuLi8uLi8uLi90eXBlc2NyaXB0L2FwcGxpY2F0aW9uL0FwcGxpY2F0aW9uRXZlbnQnXHJcbmltcG9ydCB7IEludmVzdGlnYXRvciB9IGZyb20gJy4uLy4uLy4uL3R5cGVzY3JpcHQvSW52ZXN0aWdhdG9yJ1xyXG5cclxuaW1wb3J0IHsgSW1hZ2VzIH0gZnJvbSAnLi4vLi4vSW1hZ2VzJ1xyXG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tICcuLi8uLi9Mb2FkZXInXHJcbmltcG9ydCB7IFN0YXRpY1NsaWRlc2hvdyAgfSBmcm9tICcuLi8uLi9TdGF0aWNTbGlkZXNob3cnXHJcbmltcG9ydCB7IFByZW1hZGVzIH0gZnJvbSAnLi9QcmVtYWRlcydcclxuaW1wb3J0IHsgTG9hZGluZ1BhZ2VTdGF0ZSB9IGZyb20gJy4vTG9hZGluZ1BhZ2VTdGF0ZSdcclxuaW1wb3J0IHsgU2xpZGUgfSBmcm9tICcuLi8uLi9TbGlkZSdcclxuXHJcblxyXG4vKipcclxuICogXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTG9hZGluZ1BhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8TG9hZGluZ1BhZ2UuUHJvcGVydGllcywgTG9hZGluZ1BhZ2UuU3RhdGU+IHtcclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGRlZmF1bHRQcm9wczogUmVhZG9ubHk8TG9hZGluZ1BhZ2UuUHJvcGVydGllcz4gPSB7XHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBvbkNoYW5nZTogRW1wdHkuY2FsbGJhY2tcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgX2lucHV0OiBSZWFjdC5SZWZPYmplY3Q8SFRNTElucHV0RWxlbWVudD5cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yIChwcm9wZXJ0aWVzOiBMb2FkaW5nUGFnZS5Qcm9wZXJ0aWVzKSB7XHJcbiAgICBzdXBlcihwcm9wZXJ0aWVzKVxyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHByZW1hZGVzOiB1bmRlZmluZWQsXHJcbiAgICAgIHN0YXRlOiBMb2FkaW5nUGFnZVN0YXRlLklOSVRJQUwsXHJcbiAgICAgIGZpbGU6IHVuZGVmaW5lZCxcclxuICAgICAgc2Nyb2xsOiAwLFxyXG4gICAgICBtb3VzZTogLTFcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmhhbmRsZVByZW1hZGVzTG9hZGluZyA9IHRoaXMuaGFuZGxlUHJlbWFkZXNMb2FkaW5nLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlUHJlbWFkZVJlbmRlcmluZyA9IHRoaXMuaGFuZGxlUHJlbWFkZVJlbmRlcmluZy5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmhhbmRsZVByZW1hZGVTbGlkZVJlbmRlcmluZyA9IHRoaXMuaGFuZGxlUHJlbWFkZVNsaWRlUmVuZGVyaW5nLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UgPSB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlRHJvcCA9IHRoaXMuaGFuZGxlRHJvcC5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmhhbmRsZVNpbGVudEFjdGlvbiA9IHRoaXMuaGFuZGxlU2lsZW50QWN0aW9uLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlQ2FuY2VsID0gdGhpcy5oYW5kbGVDYW5jZWwuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVGaWxlU2VsZWN0aW9uID0gdGhpcy5oYW5kbGVGaWxlU2VsZWN0aW9uLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlRmlsZVZhbGlkYXRpb24gPSB0aGlzLmhhbmRsZUZpbGVWYWxpZGF0aW9uLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlRmlsZVJlZHVjdGlvbiA9IHRoaXMuaGFuZGxlRmlsZVJlZHVjdGlvbi5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmhhbmRsZUNhbmNlbGxhdGlvbiA9IHRoaXMuaGFuZGxlQ2FuY2VsbGF0aW9uLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlU2Nyb2xsID0gdGhpcy5oYW5kbGVTY3JvbGwuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVNb3VzZUVudGVyT3B0aW9uID0gdGhpcy5oYW5kbGVNb3VzZUVudGVyT3B0aW9uLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlTW91c2VMZWF2ZU9wdGlvbiA9IHRoaXMuaGFuZGxlTW91c2VMZWF2ZU9wdGlvbi5iaW5kKHRoaXMpXHJcblxyXG4gICAgdGhpcy5faW5wdXQgPSBSZWFjdC5jcmVhdGVSZWYoKVxyXG5cclxuICAgIFByZW1hZGVzLmxvYWQoKS50aGVuKHRoaXMuaGFuZGxlUHJlbWFkZXNMb2FkaW5nKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIGhhbmRsZU1vdXNlQ2xpY2tPcHRpb24gKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50Pik6IHZvaWQge1xyXG4gICAgdGhpcy5oYW5kbGVNb3VzZUVudGVyT3B0aW9uKGV2ZW50KVxyXG4gICAgdGhpcy5oYW5kbGVDbGljaygpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgaGFuZGxlTW91c2VFbnRlck9wdGlvbiAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KTogdm9pZCB7XHJcbiAgICBjb25zdCB0YXJnZXQ6IEhUTUxCdXR0b25FbGVtZW50ID0gZXZlbnQuY3VycmVudFRhcmdldFxyXG4gICAgY29uc3QgYmFzaXM6IG51bWJlciA9ICh0YXJnZXQucGFyZW50Tm9kZS5maXJzdEVsZW1lbnRDaGlsZCBhcyBhbnkpLm9mZnNldFRvcFxyXG4gICAgXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbW91c2U6IHRhcmdldC5vZmZzZXRUb3AgLSBiYXNpcyB9KVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIGhhbmRsZU1vdXNlTGVhdmVPcHRpb24gKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50Pik6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1vdXNlOiAtMSB9KVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIGhhbmRsZVByZW1hZGVzTG9hZGluZyhwcmVtYWRlczogSW52ZXN0aWdhdG9yW10pOiB2b2lkIHtcclxuICAgIHByZW1hZGVzLnNvcnQoSW52ZXN0aWdhdG9yLmNvbXBhcmVCeU5hbWUpXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgcHJlbWFkZXMgfSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHByaXZhdGUgaGFuZGxlSW5wdXRDaGFuZ2UoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KTogdm9pZCB7XHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmZpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IFxyXG4gICAgICAgIHN0YXRlOiBMb2FkaW5nUGFnZVN0YXRlLkxPQURJTkcsXHJcbiAgICAgICAgZmlsZTogZXZlbnQudGFyZ2V0LmZpbGVzWzBdIFxyXG4gICAgICB9LCB0aGlzLmhhbmRsZUZpbGVTZWxlY3Rpb24uYmluZCh1bmRlZmluZWQsIGV2ZW50LnRhcmdldC5maWxlc1swXSkpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwcml2YXRlIGhhbmRsZVNpbGVudEFjdGlvbihldmVudDogUmVhY3QuU3ludGhldGljRXZlbnQpOiB2b2lkIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwcml2YXRlIGhhbmRsZURyb3AoZXZlbnQ6IFJlYWN0LkRyYWdFdmVudDxIVE1MSW5wdXRFbGVtZW50Pik6IHZvaWQge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICBjb25zdCBkcmFnZ2VkOiBEYXRhVHJhbnNmZXIgPSBldmVudC5kYXRhVHJhbnNmZXJcclxuXHJcbiAgICBpZiAoZHJhZ2dlZC5maWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGZvciAoY29uc3QgZmlsZSBvZiBkcmFnZ2VkLmZpbGVzKSB7XHJcbiAgICAgICAgaWYgKGZpbGUubmFtZS5lbmRzV2l0aCgnLnR4dCcpKSB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgXHJcbiAgICAgICAgICAgIHN0YXRlOiBMb2FkaW5nUGFnZVN0YXRlLkxPQURJTkcsXHJcbiAgICAgICAgICAgIGZpbGVcclxuICAgICAgICAgIH0sIHRoaXMuaGFuZGxlRmlsZVNlbGVjdGlvbi5iaW5kKHVuZGVmaW5lZCwgZmlsZSkpXHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBoYW5kbGVTY3JvbGwoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQsIFdoZWVsRXZlbnQ+KTogdm9pZCB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2Nyb2xsOiBldmVudC5jdXJyZW50VGFyZ2V0LnNjcm9sbFRvcCB9KVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBoYW5kbGVQcmVtYWRlU2VsZWN0aW9uIChpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKEFwcGxpY2F0aW9uRXZlbnQudXNlKHRoaXMuc3RhdGUucHJlbWFkZXNbaW5kZXhdKSlcclxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoQXBwbGljYXRpb25FdmVudC5zaG93SW52ZXN0aWdhdG9yUGFnZSgpKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBoYW5kbGVDbGljaygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLnN0YXRlICE9PSBMb2FkaW5nUGFnZVN0YXRlLklOSVRJQUwpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2VsZWN0ZWQ6IG51bWJlciA9IHRoaXMuZ2V0U2VsZWN0ZWQoKVxyXG5cclxuICAgIGlmIChzZWxlY3RlZCA8IDEpIHtcclxuICAgICAgdGhpcy5faW5wdXQuY3VycmVudC5jbGljaygpXHJcbiAgICB9IGVsc2UgaWYgKHNlbGVjdGVkID09PSAxKSB7XHJcbiAgICAgIGlmICh0aGlzLnByb3BzLmN1cnJlbnQpIHtcclxuICAgICAgICB0aGlzLmhhbmRsZUNhbmNlbGxhdGlvbigpXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaGFuZGxlUHJlbWFkZVNlbGVjdGlvbihzZWxlY3RlZCAtIDIpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwcml2YXRlIGhhbmRsZUNhbmNlbChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pOiB2b2lkIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKEFwcGxpY2F0aW9uRXZlbnQuc2hvd0ludmVzdGlnYXRvclBhZ2UoKSlcclxuICB9XHJcblxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gICBwcml2YXRlIGhhbmRsZUNhbmNlbGxhdGlvbiAoKSA6IHZvaWQge1xyXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShBcHBsaWNhdGlvbkV2ZW50LnNob3dJbnZlc3RpZ2F0b3JQYWdlKCkpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwcml2YXRlIGhhbmRsZUZpbGVWYWxpZGF0aW9uICh2YWxpZGF0aW9uOiBVbmlkb2NWYWxpZGF0aW9uRXZlbnQpIDogdm9pZCB7XHJcbiAgICAvLyBAVE9ETyBlcnJvci1jaGVja1xyXG4gICAgLy9jb25zb2xlLmxvZyh2YWxpZGF0aW9uLnRvU3RyaW5nKCkpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwcml2YXRlIGhhbmRsZUZpbGVSZWR1Y3Rpb24gKHZhbHVlOiBJbnZlc3RpZ2F0b3IpIDogdm9pZCB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgXHJcbiAgICAgIHN0YXRlOiBMb2FkaW5nUGFnZVN0YXRlLlJFU09MVkVEXHJcbiAgICB9KVxyXG5cclxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoQXBwbGljYXRpb25FdmVudC51c2UodmFsdWUpKVxyXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShBcHBsaWNhdGlvbkV2ZW50LnNob3dJbnZlc3RpZ2F0b3JQYWdlKCkpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwcml2YXRlIGhhbmRsZUZpbGVTZWxlY3Rpb24oZmlsZTogRmlsZSk6IHZvaWQge1xyXG4gICAgY29uc3Qgc291cmNlOiBVbmlkb2NGaWxlU3ltYm9sUHJvZHVjZXIgPSBVbmlkb2NGaWxlU3ltYm9sUHJvZHVjZXIuY3JlYXRlKGZpbGUpXHJcbiAgICBjb25zdCBldmVudHM6IFVuaWRvY1Byb2R1Y2VyPFVuaWRvY0V2ZW50PiA9IHBhcnNlKHRva2VuaXplKHNvdXJjZSkpXHJcbiAgICBjb25zdCB2YWxpZGF0b3I6IFVuaWRvY1ZhbGlkYXRvciA9IFVuaWRvY1ZhbGlkYXRvci5raXNzKFVuaWRvY0NvbW1hbmQudmFsaWRhdGVVbmlkb2MuZmFjdG9yeShJbnZlc3RpZ2F0b3JDb21tYW5kLnZhbGlkYXRlKSlcclxuXHJcbiAgICB2YWxpZGF0b3Iuc3Vic2NyaWJlKGV2ZW50cylcclxuXHJcbiAgICBjb25zdCByZWR1Y2VyOiBVbmlkb2NQcm9kdWNlcjxJbnZlc3RpZ2F0b3I+ID0gVW5pZG9jUmVkdWNlci5yZWR1Y2UudmFsaWRhdGlvbih2YWxpZGF0b3IsIFVuaWRvY0NvbW1hbmQucmVkdWNlLmZhY3RvcnkoSW52ZXN0aWdhdG9yQ29tbWFuZC5yZWR1Y2UpKVxyXG5cclxuICAgIHZhbGlkYXRvci5vbignbmV4dCcsIHRoaXMuaGFuZGxlRmlsZVZhbGlkYXRpb24pXHJcbiAgICByZWR1Y2VyLm9uKCduZXh0JywgdGhpcy5oYW5kbGVGaWxlUmVkdWN0aW9uKVxyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBcclxuICAgICAgc3RhdGU6IExvYWRpbmdQYWdlU3RhdGUuTE9BRElORyxcclxuICAgICAgZmlsZVxyXG4gICAgfSwgc291cmNlLnJlYWQuYmluZChzb3VyY2UpKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIGdldFNlbGVjdGVkKCk6IG51bWJlciB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5tb3VzZSA8IDApIHtcclxuICAgICAgcmV0dXJuICgoKHRoaXMuc3RhdGUuc2Nyb2xsICsgNTApIC8gMTAwKSA8PCAwKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuICgodGhpcy5zdGF0ZS5tb3VzZSAvIDEwMCkgPDwgMClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyBpc1NlbGVjdGVkKGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmdldFNlbGVjdGVkKCkgPT09IGluZGV4XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgaXNGaWxlTG9hZGluZ1NlbGVjdGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNTZWxlY3RlZCgwKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIGlzQ2FuY2VsbGF0aW9uU2VsZWN0ZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1NlbGVjdGVkKDEpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgaXNQcmVtYWRlU2VsZWN0ZWQoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNTZWxlY3RlZChpbmRleCArIDIpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgcmVuZGVyICgpIDogUmVhY3QuUmVhY3RFbGVtZW50IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgXHJcbiAgICAgICAgb25Ecm9wPXt0aGlzLmhhbmRsZURyb3B9IFxyXG4gICAgICAgIG9uRHJhZ0VudGVyPXt0aGlzLmhhbmRsZVNpbGVudEFjdGlvbn1cclxuICAgICAgICBvbkRyYWdPdmVyPXt0aGlzLmhhbmRsZVNpbGVudEFjdGlvbn1cclxuICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfVxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnbGF5b3V0IGxheW91dC1sb2FkaW5nLXBhZ2UnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9XHJcbiAgICAgID5cclxuICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgIHJlZj17dGhpcy5faW5wdXR9IFxyXG4gICAgICAgICAgdHlwZT0nZmlsZScgXHJcbiAgICAgICAgICBhY2NlcHQ9J3RleHQvcGxhaW4nIFxyXG4gICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgY2xhc3NOYW1lPSdsYXlvdXQtbG9hZGluZy1wYWdlLW9wdGlvbnMnXHJcbiAgICAgICAgICBvblNjcm9sbD17dGhpcy5oYW5kbGVTY3JvbGx9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgeyB0aGlzLnJlbmRlckZpbGUoKSB9XHJcbiAgICAgICAgICB7IHRoaXMucmVuZGVyQ2FuY2VsbGF0aW9uKCkgfVxyXG4gICAgICAgICAgeyB0aGlzLnJlbmRlclByZW1hZGVzKCkgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsYXlvdXQtbG9hZGluZy1wYWdlLWRpc3BsYXknPlxyXG4gICAgICAgICAgPFN0YXRpY1NsaWRlc2hvdyBpbmRleD17dGhpcy5nZXRTZWxlY3RlZCgpfT5cclxuICAgICAgICAgICAgeyB0aGlzLnJlbmRlckZpbGVTbGlkZSgpIH1cclxuICAgICAgICAgICAgeyB0aGlzLnJlbmRlckNhbmNlbGxhdGlvblNsaWRlKCkgfVxyXG4gICAgICAgICAgICB7IHRoaXMucmVuZGVyUHJlbWFkZVNsaWRlcygpIH1cclxuICAgICAgICAgIDwvU3RhdGljU2xpZGVzaG93PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyByZW5kZXJGaWxlKCk6IFJlYWN0LlJlYWN0Tm9kZSB7XHJcbiAgICBjb25zdCBzZWxlY3RlZDogYm9vbGVhbiA9IHRoaXMuaXNGaWxlTG9hZGluZ1NlbGVjdGVkKClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8YnV0dG9uIFxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnbG9hZGluZy1vcHRpb24nLCB7ICdpcy1hY3RpdmUnOiBzZWxlY3RlZCB9KX1cclxuICAgICAgICBhcmlhLXByZXNzZWQ9e3NlbGVjdGVkfVxyXG4gICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLnN0YXRlICE9PSBMb2FkaW5nUGFnZVN0YXRlLklOSVRJQUx9XHJcbiAgICAgICAgb25Nb3VzZUVudGVyPXt0aGlzLmhhbmRsZU1vdXNlRW50ZXJPcHRpb259XHJcbiAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVNb3VzZUNsaWNrT3B0aW9ufVxyXG4gICAgICAgIG9uTW91c2VMZWF2ZT17dGhpcy5oYW5kbGVNb3VzZUxlYXZlT3B0aW9ufVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvYWRpbmctb3B0aW9uLWljb24nPlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXVwbG9hZFwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvYWRpbmctb3B0aW9uLWluZm9ybWF0aW9uJz5cclxuICAgICAgICAgIDxoMT5DaGFyZ2VyIHVuIGRvY3VtZW50PC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICApXHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyByZW5kZXJDYW5jZWxsYXRpb24oKTogUmVhY3QuUmVhY3ROb2RlIHtcclxuICAgIGNvbnN0IHNlbGVjdGVkOiBib29sZWFuID0gdGhpcy5pc1NlbGVjdGVkKDEpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGJ1dHRvbiBcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ2xvYWRpbmctb3B0aW9uJywgeyAnaXMtYWN0aXZlJzogc2VsZWN0ZWQgfSl9XHJcbiAgICAgICAgYXJpYS1wcmVzc2VkPXtzZWxlY3RlZH1cclxuICAgICAgICBkaXNhYmxlZD17IXRoaXMucHJvcHMuY3VycmVudCB8fCB0aGlzLnN0YXRlLnN0YXRlICE9PSBMb2FkaW5nUGFnZVN0YXRlLklOSVRJQUx9XHJcbiAgICAgICAgb25Nb3VzZUVudGVyPXt0aGlzLmhhbmRsZU1vdXNlRW50ZXJPcHRpb259XHJcbiAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVNb3VzZUNsaWNrT3B0aW9ufVxyXG4gICAgICAgIG9uTW91c2VMZWF2ZT17dGhpcy5oYW5kbGVNb3VzZUxlYXZlT3B0aW9ufVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvYWRpbmctb3B0aW9uLWljb24nPlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXVuZG9cIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2FkaW5nLW9wdGlvbi1pbmZvcm1hdGlvbic+XHJcbiAgICAgICAgICA8aDE+UmV0b3VyPC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgcmVuZGVyUHJlbWFkZXMoKTogUmVhY3QuUmVhY3ROb2RlIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLnByZW1hZGVzKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLnByZW1hZGVzLm1hcCh0aGlzLmhhbmRsZVByZW1hZGVSZW5kZXJpbmcpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gPExvYWRlcj5DaGFyZ2VtZW50IGRlcyBwcsOpdGlyw6lzIGVuIGNvdXJzPC9Mb2FkZXI+XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgaGFuZGxlUHJlbWFkZVJlbmRlcmluZyhwcmVtYWRlOiBJbnZlc3RpZ2F0b3IsIGluZGV4OiBudW1iZXIpOiBSZWFjdC5SZWFjdE5vZGUge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWQ6IGJvb2xlYW4gPSB0aGlzLmlzU2VsZWN0ZWQoaW5kZXggKyAyKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxidXR0b24gXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdsb2FkaW5nLW9wdGlvbiBpcy1wcmVtYWRlJywgeyAnaXMtYWN0aXZlJzogc2VsZWN0ZWQgfSl9XHJcbiAgICAgICAgYXJpYS1wcmVzc2VkPXtzZWxlY3RlZH0gXHJcbiAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUuc3RhdGUgIT09IExvYWRpbmdQYWdlU3RhdGUuSU5JVElBTH0gXHJcbiAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICBvbk1vdXNlRW50ZXI9e3RoaXMuaGFuZGxlTW91c2VFbnRlck9wdGlvbn1cclxuICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZU1vdXNlQ2xpY2tPcHRpb259XHJcbiAgICAgICAgb25Nb3VzZUxlYXZlPXt0aGlzLmhhbmRsZU1vdXNlTGVhdmVPcHRpb259XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9hZGluZy1vcHRpb24taWNvbic+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3Nwcml0ZSBzcHJpdGUtZm9sZGVyIHNwcml0ZS12YXJpYXRpb24tJyArIChpbmRleCAlIDMpfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2FkaW5nLW9wdGlvbi1pbmZvcm1hdGlvbic+XHJcbiAgICAgICAgICA8aDE+eyBwcmVtYWRlLnN1bW1hcnkubmFtZS50b1N0cmluZygpIH08L2gxPlxyXG4gICAgICAgICAgPGgyPnsgcHJlbWFkZS5zdW1tYXJ5LmpvYiB9PC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICAgcHVibGljIHJlbmRlckZpbGVTbGlkZSgpOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFNsaWRlPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsYXlvdXQgbGF5b3V0LWNlbnRlcmVkJz5cclxuICAgICAgICAgIDxJbWFnZXMuSG9tZSBjbGFzc05hbWU9J2xvYWRpbmctbWF0dXJpbicgLz5cclxuICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgU8OpbGVjdGlvbm5lciB1bmUgZmV1aWxsZS5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9TbGlkZT5cclxuICAgIClcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIHJlbmRlckNhbmNlbGxhdGlvblNsaWRlKCk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5jdXJyZW50KSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPFNsaWRlPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xheW91dCBsYXlvdXQtYm90dG9tIHRleHQtY2VudGVyJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydzcHJpdGUgc3ByaXRlLWNoYXJhY3RlciBzcHJpdGUtdmFyaWF0aW9uLScgKyB0aGlzLnByb3BzLmN1cnJlbnQuc3VtbWFyeS5hbGlhcy50b0xvd2VyQ2FzZSgpLnJlcGxhY2VBbGwoJ8OpJywgJ2UnKX0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvU2xpZGU+XHJcbiAgICAgIClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPFNsaWRlPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xheW91dCBsYXlvdXQtY2VudGVyZWQnPlxyXG4gICAgICAgICAgICA8SW1hZ2VzLkhvbWUgY2xhc3NOYW1lPSdsb2FkaW5nLW1hdHVyaW4nIC8+XHJcbiAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIEF1Y3VuIGRvY3VtZW50IGNoYXJnw6kuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1NsaWRlPlxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgcmVuZGVyUHJlbWFkZVNsaWRlcygpOiBSZWFjdC5SZWFjdE5vZGUge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUucHJlbWFkZXMpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUucHJlbWFkZXMubWFwKHRoaXMuaGFuZGxlUHJlbWFkZVNsaWRlUmVuZGVyaW5nKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIDxMb2FkZXI+Q2hhcmdlbWVudCBkZXMgcHLDqXRpcsOpcyBlbiBjb3VyczwvTG9hZGVyPlxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIGhhbmRsZVByZW1hZGVTbGlkZVJlbmRlcmluZyhwcmVtYWRlOiBJbnZlc3RpZ2F0b3IsIGluZGV4OiBudW1iZXIpOiBSZWFjdC5SZWFjdE5vZGUge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFNsaWRlIGtleT17aW5kZXh9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsYXlvdXQgbGF5b3V0LWJvdHRvbSB0ZXh0LWNlbnRlcic+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3Nwcml0ZSBzcHJpdGUtY2hhcmFjdGVyIHNwcml0ZS12YXJpYXRpb24tJyArIHByZW1hZGUuc3VtbWFyeS5hbGlhcy50b0xvd2VyQ2FzZSgpLnJlcGxhY2VBbGwoJ8OpJywgJ2UnKX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9TbGlkZT5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcclxuICovXHJcbmV4cG9ydCBuYW1lc3BhY2UgTG9hZGluZ1BhZ2Uge1xyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIGV4cG9ydCB0eXBlIEFwcGxpY2F0aW9uQ2FsbGJhY2sgPSAoZXZlbnQ6IEFwcGxpY2F0aW9uRXZlbnQpID0+IHZvaWRcclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgZXhwb3J0IHR5cGUgUHJvcGVydGllcyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIGNsYXNzTmFtZT86IHN0cmluZyB8IHVuZGVmaW5lZCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBjdXJyZW50PzogSW52ZXN0aWdhdG9yIHwgdW5kZWZpbmVkLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIG9uQ2hhbmdlPzogQXBwbGljYXRpb25DYWxsYmFjayB8IHVuZGVmaW5lZFxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgZXhwb3J0IHR5cGUgU3RhdGUgPSB7XHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBwcmVtYWRlczogdW5kZWZpbmVkIHwgSW52ZXN0aWdhdG9yW10sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgZmlsZTogRmlsZSB8IHVuZGVmaW5lZCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBzdGF0ZTogTG9hZGluZ1BhZ2VTdGF0ZSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBzY3JvbGw6IG51bWJlcixcclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBtb3VzZTogbnVtYmVyXHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==
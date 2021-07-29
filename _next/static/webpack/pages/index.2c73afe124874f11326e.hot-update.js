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
          lineNumber: 295,
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
          lineNumber: 302,
          columnNumber: 9
        }
      }), __jsx("div", {
        className: "layout-loading-page-options",
        onScroll: this.handleScroll,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309,
          columnNumber: 9
        }
      }, this.renderFile(), this.renderCancellation(), this.renderPremades()), __jsx("div", {
        className: "layout-loading-page-display",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317,
          columnNumber: 9
        }
      }, __jsx(_StaticSlideshow__WEBPACK_IMPORTED_MODULE_17__["StaticSlideshow"], {
        index: this.getSelected(),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318,
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
          lineNumber: 335,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "loading-option-icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343,
          columnNumber: 9
        }
      }, __jsx("i", {
        className: "fas fa-upload",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344,
          columnNumber: 11
        }
      })), __jsx("div", {
        className: "loading-option-information",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346,
          columnNumber: 9
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 347,
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
          lineNumber: 360,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "loading-option-icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368,
          columnNumber: 9
        }
      }, __jsx("i", {
        className: "fas fa-undo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 369,
          columnNumber: 11
        }
      })), __jsx("div", {
        className: "loading-option-information",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 371,
          columnNumber: 9
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 372,
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
            lineNumber: 385,
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
          lineNumber: 396,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "loading-option-icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 405,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: 'sprite sprite-folder sprite-variation-' + index % 3,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 406,
          columnNumber: 11
        }
      })), __jsx("div", {
        className: "loading-option-information",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 408,
          columnNumber: 9
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 409,
          columnNumber: 11
        }
      }, premade.summary.name.toString()), __jsx("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 410,
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
          lineNumber: 421,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "layout layout-centered",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 422,
          columnNumber: 9
        }
      }, __jsx(_Images__WEBPACK_IMPORTED_MODULE_15__["Images"].Home, {
        className: "loading-maturin",
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
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 425,
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
            lineNumber: 438,
            columnNumber: 9
          }
        }, __jsx("div", {
          className: "layout layout-bottom text-center",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 439,
            columnNumber: 11
          }
        }, __jsx("div", {
          className: 'sprite sprite-character sprite-variation-' + this.props.current.summary.alias.toLowerCase().replaceAll('é', 'e'),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 440,
            columnNumber: 13
          }
        })));
      } else {
        return __jsx(_Slide__WEBPACK_IMPORTED_MODULE_20__["Slide"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 446,
            columnNumber: 9
          }
        }, __jsx("div", {
          className: "layout layout-centered",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 447,
            columnNumber: 11
          }
        }, __jsx(_Images__WEBPACK_IMPORTED_MODULE_15__["Images"].Home, {
          className: "loading-maturin",
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
        }), __jsx("br", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 450,
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
            lineNumber: 465,
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
          lineNumber: 474,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "layout layout-bottom text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 475,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: 'sprite sprite-character sprite-variation-' + premade.summary.alias.toLowerCase().replaceAll('é', 'e'),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 476,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlL2xvYWRpbmcvTG9hZGluZ1BhZ2UudHN4Il0sIm5hbWVzIjpbIkxvYWRpbmdQYWdlIiwicHJvcGVydGllcyIsIl9pbnB1dCIsInN0YXRlIiwicHJlbWFkZXMiLCJ1bmRlZmluZWQiLCJMb2FkaW5nUGFnZVN0YXRlIiwiSU5JVElBTCIsImZpbGUiLCJzY3JvbGwiLCJtb3VzZSIsImhhbmRsZVByZW1hZGVzTG9hZGluZyIsImJpbmQiLCJoYW5kbGVQcmVtYWRlUmVuZGVyaW5nIiwiaGFuZGxlUHJlbWFkZVNsaWRlUmVuZGVyaW5nIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJoYW5kbGVEcm9wIiwiaGFuZGxlU2lsZW50QWN0aW9uIiwiaGFuZGxlQ2FuY2VsIiwiaGFuZGxlRmlsZVNlbGVjdGlvbiIsImhhbmRsZUZpbGVWYWxpZGF0aW9uIiwiaGFuZGxlRmlsZVJlZHVjdGlvbiIsImhhbmRsZUNhbmNlbGxhdGlvbiIsImhhbmRsZUNsaWNrIiwiaGFuZGxlU2Nyb2xsIiwiaGFuZGxlTW91c2VFbnRlck9wdGlvbiIsImhhbmRsZU1vdXNlQ2xpY2tPcHRpb24iLCJoYW5kbGVNb3VzZUxlYXZlT3B0aW9uIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJQcmVtYWRlcyIsImxvYWQiLCJ0aGVuIiwiZXZlbnQiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiYmFzaXMiLCJwYXJlbnROb2RlIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJvZmZzZXRUb3AiLCJzZXRTdGF0ZSIsInNvcnQiLCJJbnZlc3RpZ2F0b3IiLCJjb21wYXJlQnlOYW1lIiwiZmlsZXMiLCJsZW5ndGgiLCJMT0FESU5HIiwic3RvcFByb3BhZ2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJkcmFnZ2VkIiwiZGF0YVRyYW5zZmVyIiwibmFtZSIsImVuZHNXaXRoIiwic2Nyb2xsVG9wIiwiaW5kZXgiLCJwcm9wcyIsIm9uQ2hhbmdlIiwiQXBwbGljYXRpb25FdmVudCIsInVzZSIsInNob3dJbnZlc3RpZ2F0b3JQYWdlIiwic2VsZWN0ZWQiLCJnZXRTZWxlY3RlZCIsImN1cnJlbnQiLCJjbGljayIsImhhbmRsZVByZW1hZGVTZWxlY3Rpb24iLCJ2YWxpZGF0aW9uIiwidmFsdWUiLCJSRVNPTFZFRCIsInNvdXJjZSIsIlVuaWRvY0ZpbGVTeW1ib2xQcm9kdWNlciIsImNyZWF0ZSIsImV2ZW50cyIsInBhcnNlIiwidG9rZW5pemUiLCJ2YWxpZGF0b3IiLCJVbmlkb2NWYWxpZGF0b3IiLCJraXNzIiwiVW5pZG9jQ29tbWFuZCIsInZhbGlkYXRlVW5pZG9jIiwiZmFjdG9yeSIsIkludmVzdGlnYXRvckNvbW1hbmQiLCJ2YWxpZGF0ZSIsInN1YnNjcmliZSIsInJlZHVjZXIiLCJVbmlkb2NSZWR1Y2VyIiwicmVkdWNlIiwib24iLCJyZWFkIiwiaXNTZWxlY3RlZCIsImNsYXNzbmFtZXMiLCJjbGFzc05hbWUiLCJkaXNwbGF5IiwicmVuZGVyRmlsZSIsInJlbmRlckNhbmNlbGxhdGlvbiIsInJlbmRlclByZW1hZGVzIiwicmVuZGVyRmlsZVNsaWRlIiwicmVuZGVyQ2FuY2VsbGF0aW9uU2xpZGUiLCJyZW5kZXJQcmVtYWRlU2xpZGVzIiwiaXNGaWxlTG9hZGluZ1NlbGVjdGVkIiwibWFwIiwicHJlbWFkZSIsInN1bW1hcnkiLCJ0b1N0cmluZyIsImpvYiIsImFsaWFzIiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlQWxsIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwiRW1wdHkiLCJjYWxsYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTs7QUFDTyxJQUFNQSxXQUFiO0FBQUE7O0FBQUE7O0FBQ0U7QUFDRjtBQUNBOztBQVFFO0FB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QTdhQTtBQUFBO0FBQUEsMENBOGFnRDtBQUM1QyxVQUFJLEtBQUt2RyxLQUFMLENBQVdDLFFBQWYsRUFBeUI7QUFDdkIsZUFBTyxLQUFLRCxLQUFMLENBQVdDLFFBQVgsQ0FBb0IrRixHQUFwQixDQUF3QixLQUFLckYsMkJBQTdCLENBQVA7QUFDRCxPQUZELE1BRU87QUFDTCxlQUFPLE1BQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvREFBUDtBQUNEO0FBQ0Y7QUFFRDtBQUNGO0FBQ0E7O0FBeGJBO0FBQUE7QUFBQSxnREF5YnFDc0YsT0F6YnJDLEVBeWI0RDlDLEtBemI1RCxFQXliNEY7QUFDeEYsYUFDRSxNQUFDLDZDQUFEO0FBQU8sV0FBRyxFQUFFQSxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFLLGlCQUFTLEVBQUMsa0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUssaUJBQVMsRUFBRSw4Q0FBOEM4QyxPQUFPLENBQUNDLE9BQVIsQ0FBZ0JHLEtBQWhCLENBQXNCQyxXQUF0QixHQUFvQ0MsVUFBcEMsQ0FBK0MsR0FBL0MsRUFBb0QsR0FBcEQsQ0FBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLENBREYsQ0FERjtBQU9EO0FBamNIOztBQUFBO0FBQUEsRUFBaUM5RSw0Q0FBSyxDQUFDK0UsU0FBdkM7QUFvY0E7QUFDQTtBQUNBOztBQXRjYTNHLFcsQ0FJWTRHLFksR0FBaUQ7QUFDdEU7QUFDSjtBQUNBO0FBQ0lwRCxVQUFRLEVBQUVxRCx1REFBSyxDQUFDQztBQUpzRCxDOzs2QkFtY3pEOUcsVyxLQUFBQSxXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjJjNzNhZmUxMjQ4NzRmMTEzMjZlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXHJcbmltcG9ydCB7IFxyXG4gIHRva2VuaXplLCBcclxuICBwYXJzZSxcclxuICBVbmlkb2NFdmVudCwgXHJcbiAgVW5pZG9jUHJvZHVjZXIsIFxyXG4gIFVuaWRvY1JlZHVjZXIsIFxyXG4gIFVuaWRvY1ZhbGlkYXRpb25FdmVudCxcclxuICBVbmlkb2NWYWxpZGF0b3IgXHJcbn0gZnJvbSAnQGNlZHJpYy1kZW1vbmdpdmVydC91bmlkb2MnXHJcblxyXG5pbXBvcnQgeyBFbXB0eSB9IGZyb20gJy4uLy4uLy4uL3R5cGVzY3JpcHQvdXRpbHMnXHJcbmltcG9ydCB7IFVuaWRvY0ZpbGVTeW1ib2xQcm9kdWNlciB9IGZyb20gJy4uLy4uLy4uL3R5cGVzY3JpcHQvdW5pZG9jL1VuaWRvY0ZpbGVTeW1ib2xQcm9kdWNlcidcclxuaW1wb3J0IHsgVW5pZG9jQ29tbWFuZCB9IGZyb20gJy4uLy4uLy4uL3R5cGVzY3JpcHQvdW5pZG9jL1VuaWRvY0NvbW1hbmQnXHJcbmltcG9ydCB7IEludmVzdGlnYXRvckNvbW1hbmQgfSBmcm9tICcuLi8uLi8uLi90eXBlc2NyaXB0L3VuaWRvYy9JbnZlc3RpZ2F0b3JDb21tYW5kJ1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvbkV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vdHlwZXNjcmlwdC9hcHBsaWNhdGlvbi9BcHBsaWNhdGlvbkV2ZW50J1xyXG5pbXBvcnQgeyBJbnZlc3RpZ2F0b3IgfSBmcm9tICcuLi8uLi8uLi90eXBlc2NyaXB0L0ludmVzdGlnYXRvcidcclxuXHJcbmltcG9ydCB7IEltYWdlcyB9IGZyb20gJy4uLy4uL0ltYWdlcydcclxuaW1wb3J0IHsgTG9hZGVyIH0gZnJvbSAnLi4vLi4vTG9hZGVyJ1xyXG5pbXBvcnQgeyBTdGF0aWNTbGlkZXNob3cgIH0gZnJvbSAnLi4vLi4vU3RhdGljU2xpZGVzaG93J1xyXG5pbXBvcnQgeyBQcmVtYWRlcyB9IGZyb20gJy4vUHJlbWFkZXMnXHJcbmltcG9ydCB7IExvYWRpbmdQYWdlU3RhdGUgfSBmcm9tICcuL0xvYWRpbmdQYWdlU3RhdGUnXHJcbmltcG9ydCB7IFNsaWRlIH0gZnJvbSAnLi4vLi4vU2xpZGUnXHJcblxyXG5cclxuLyoqXHJcbiAqIFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIExvYWRpbmdQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PExvYWRpbmdQYWdlLlByb3BlcnRpZXMsIExvYWRpbmdQYWdlLlN0YXRlPiB7XHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyByZWFkb25seSBkZWZhdWx0UHJvcHM6IFJlYWRvbmx5PExvYWRpbmdQYWdlLlByb3BlcnRpZXM+ID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgb25DaGFuZ2U6IEVtcHR5LmNhbGxiYWNrXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwcml2YXRlIHJlYWRvbmx5IF9pbnB1dDogUmVhY3QuUmVmT2JqZWN0PEhUTUxJbnB1dEVsZW1lbnQ+XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvciAocHJvcGVydGllczogTG9hZGluZ1BhZ2UuUHJvcGVydGllcykge1xyXG4gICAgc3VwZXIocHJvcGVydGllcylcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBwcmVtYWRlczogdW5kZWZpbmVkLFxyXG4gICAgICBzdGF0ZTogTG9hZGluZ1BhZ2VTdGF0ZS5JTklUSUFMLFxyXG4gICAgICBmaWxlOiB1bmRlZmluZWQsXHJcbiAgICAgIHNjcm9sbDogMCxcclxuICAgICAgbW91c2U6IC0xXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5oYW5kbGVQcmVtYWRlc0xvYWRpbmcgPSB0aGlzLmhhbmRsZVByZW1hZGVzTG9hZGluZy5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmhhbmRsZVByZW1hZGVSZW5kZXJpbmcgPSB0aGlzLmhhbmRsZVByZW1hZGVSZW5kZXJpbmcuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVQcmVtYWRlU2xpZGVSZW5kZXJpbmcgPSB0aGlzLmhhbmRsZVByZW1hZGVTbGlkZVJlbmRlcmluZy5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlID0gdGhpcy5oYW5kbGVJbnB1dENoYW5nZS5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmhhbmRsZURyb3AgPSB0aGlzLmhhbmRsZURyb3AuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVTaWxlbnRBY3Rpb24gPSB0aGlzLmhhbmRsZVNpbGVudEFjdGlvbi5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmhhbmRsZUNhbmNlbCA9IHRoaXMuaGFuZGxlQ2FuY2VsLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlRmlsZVNlbGVjdGlvbiA9IHRoaXMuaGFuZGxlRmlsZVNlbGVjdGlvbi5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmhhbmRsZUZpbGVWYWxpZGF0aW9uID0gdGhpcy5oYW5kbGVGaWxlVmFsaWRhdGlvbi5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmhhbmRsZUZpbGVSZWR1Y3Rpb24gPSB0aGlzLmhhbmRsZUZpbGVSZWR1Y3Rpb24uYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVDYW5jZWxsYXRpb24gPSB0aGlzLmhhbmRsZUNhbmNlbGxhdGlvbi5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmhhbmRsZVNjcm9sbCA9IHRoaXMuaGFuZGxlU2Nyb2xsLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlTW91c2VFbnRlck9wdGlvbiA9IHRoaXMuaGFuZGxlTW91c2VFbnRlck9wdGlvbi5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmhhbmRsZU1vdXNlQ2xpY2tPcHRpb24gPSB0aGlzLmhhbmRsZU1vdXNlQ2xpY2tPcHRpb24uYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVNb3VzZUxlYXZlT3B0aW9uID0gdGhpcy5oYW5kbGVNb3VzZUxlYXZlT3B0aW9uLmJpbmQodGhpcylcclxuXHJcbiAgICB0aGlzLl9pbnB1dCA9IFJlYWN0LmNyZWF0ZVJlZigpXHJcblxyXG4gICAgUHJlbWFkZXMubG9hZCgpLnRoZW4odGhpcy5oYW5kbGVQcmVtYWRlc0xvYWRpbmcpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgaGFuZGxlTW91c2VDbGlja09wdGlvbiAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KTogdm9pZCB7XHJcbiAgICB0aGlzLmhhbmRsZU1vdXNlRW50ZXJPcHRpb24oZXZlbnQpXHJcbiAgICB0aGlzLmhhbmRsZUNsaWNrKClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyBoYW5kbGVNb3VzZUVudGVyT3B0aW9uIChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pOiB2b2lkIHtcclxuICAgIGNvbnN0IHRhcmdldDogSFRNTEJ1dHRvbkVsZW1lbnQgPSBldmVudC5jdXJyZW50VGFyZ2V0XHJcbiAgICBjb25zdCBiYXNpczogbnVtYmVyID0gKHRhcmdldC5wYXJlbnROb2RlLmZpcnN0RWxlbWVudENoaWxkIGFzIGFueSkub2Zmc2V0VG9wXHJcbiAgICBcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBtb3VzZTogdGFyZ2V0Lm9mZnNldFRvcCAtIGJhc2lzIH0pXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgaGFuZGxlTW91c2VMZWF2ZU9wdGlvbiAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KTogdm9pZCB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbW91c2U6IC0xIH0pXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgaGFuZGxlUHJlbWFkZXNMb2FkaW5nKHByZW1hZGVzOiBJbnZlc3RpZ2F0b3JbXSk6IHZvaWQge1xyXG4gICAgcHJlbWFkZXMuc29ydChJbnZlc3RpZ2F0b3IuY29tcGFyZUJ5TmFtZSlcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBwcmVtYWRlcyB9KVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBoYW5kbGVJbnB1dENoYW5nZShldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pOiB2b2lkIHtcclxuICAgIGlmIChldmVudC50YXJnZXQuZmlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgXHJcbiAgICAgICAgc3RhdGU6IExvYWRpbmdQYWdlU3RhdGUuTE9BRElORyxcclxuICAgICAgICBmaWxlOiBldmVudC50YXJnZXQuZmlsZXNbMF0gXHJcbiAgICAgIH0sIHRoaXMuaGFuZGxlRmlsZVNlbGVjdGlvbi5iaW5kKHVuZGVmaW5lZCwgZXZlbnQudGFyZ2V0LmZpbGVzWzBdKSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHByaXZhdGUgaGFuZGxlU2lsZW50QWN0aW9uKGV2ZW50OiBSZWFjdC5TeW50aGV0aWNFdmVudCk6IHZvaWQge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHByaXZhdGUgaGFuZGxlRHJvcChldmVudDogUmVhY3QuRHJhZ0V2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KTogdm9pZCB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgIGNvbnN0IGRyYWdnZWQ6IERhdGFUcmFuc2ZlciA9IGV2ZW50LmRhdGFUcmFuc2ZlclxyXG5cclxuICAgIGlmIChkcmFnZ2VkLmZpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgZm9yIChjb25zdCBmaWxlIG9mIGRyYWdnZWQuZmlsZXMpIHtcclxuICAgICAgICBpZiAoZmlsZS5uYW1lLmVuZHNXaXRoKCcudHh0JykpIHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBcclxuICAgICAgICAgICAgc3RhdGU6IExvYWRpbmdQYWdlU3RhdGUuTE9BRElORyxcclxuICAgICAgICAgICAgZmlsZVxyXG4gICAgICAgICAgfSwgdGhpcy5oYW5kbGVGaWxlU2VsZWN0aW9uLmJpbmQodW5kZWZpbmVkLCBmaWxlKSlcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwcml2YXRlIGhhbmRsZVNjcm9sbChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudCwgV2hlZWxFdmVudD4pOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzY3JvbGw6IGV2ZW50LmN1cnJlbnRUYXJnZXQuc2Nyb2xsVG9wIH0pXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwcml2YXRlIGhhbmRsZVByZW1hZGVTZWxlY3Rpb24gKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoQXBwbGljYXRpb25FdmVudC51c2UodGhpcy5zdGF0ZS5wcmVtYWRlc1tpbmRleF0pKVxyXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShBcHBsaWNhdGlvbkV2ZW50LnNob3dJbnZlc3RpZ2F0b3JQYWdlKCkpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwcml2YXRlIGhhbmRsZUNsaWNrKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuc3RhdGUgIT09IExvYWRpbmdQYWdlU3RhdGUuSU5JVElBTCkge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZWxlY3RlZDogbnVtYmVyID0gdGhpcy5nZXRTZWxlY3RlZCgpXHJcblxyXG4gICAgaWYgKHNlbGVjdGVkIDwgMSkge1xyXG4gICAgICB0aGlzLl9pbnB1dC5jdXJyZW50LmNsaWNrKClcclxuICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWQgPT09IDEpIHtcclxuICAgICAgaWYgKHRoaXMucHJvcHMuY3VycmVudCkge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQ2FuY2VsbGF0aW9uKClcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5oYW5kbGVQcmVtYWRlU2VsZWN0aW9uKHNlbGVjdGVkIC0gMilcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHByaXZhdGUgaGFuZGxlQ2FuY2VsKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50Pik6IHZvaWQge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoQXBwbGljYXRpb25FdmVudC5zaG93SW52ZXN0aWdhdG9yUGFnZSgpKVxyXG4gIH1cclxuXHJcbiAgXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgIHByaXZhdGUgaGFuZGxlQ2FuY2VsbGF0aW9uICgpIDogdm9pZCB7XHJcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKEFwcGxpY2F0aW9uRXZlbnQuc2hvd0ludmVzdGlnYXRvclBhZ2UoKSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHByaXZhdGUgaGFuZGxlRmlsZVZhbGlkYXRpb24gKHZhbGlkYXRpb246IFVuaWRvY1ZhbGlkYXRpb25FdmVudCkgOiB2b2lkIHtcclxuICAgIC8vIEBUT0RPIGVycm9yLWNoZWNrXHJcbiAgICAvL2NvbnNvbGUubG9nKHZhbGlkYXRpb24udG9TdHJpbmcoKSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHByaXZhdGUgaGFuZGxlRmlsZVJlZHVjdGlvbiAodmFsdWU6IEludmVzdGlnYXRvcikgOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBcclxuICAgICAgc3RhdGU6IExvYWRpbmdQYWdlU3RhdGUuUkVTT0xWRURcclxuICAgIH0pXHJcblxyXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShBcHBsaWNhdGlvbkV2ZW50LnVzZSh2YWx1ZSkpXHJcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKEFwcGxpY2F0aW9uRXZlbnQuc2hvd0ludmVzdGlnYXRvclBhZ2UoKSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHByaXZhdGUgaGFuZGxlRmlsZVNlbGVjdGlvbihmaWxlOiBGaWxlKTogdm9pZCB7XHJcbiAgICBjb25zdCBzb3VyY2U6IFVuaWRvY0ZpbGVTeW1ib2xQcm9kdWNlciA9IFVuaWRvY0ZpbGVTeW1ib2xQcm9kdWNlci5jcmVhdGUoZmlsZSlcclxuICAgIGNvbnN0IGV2ZW50czogVW5pZG9jUHJvZHVjZXI8VW5pZG9jRXZlbnQ+ID0gcGFyc2UodG9rZW5pemUoc291cmNlKSlcclxuICAgIGNvbnN0IHZhbGlkYXRvcjogVW5pZG9jVmFsaWRhdG9yID0gVW5pZG9jVmFsaWRhdG9yLmtpc3MoVW5pZG9jQ29tbWFuZC52YWxpZGF0ZVVuaWRvYy5mYWN0b3J5KEludmVzdGlnYXRvckNvbW1hbmQudmFsaWRhdGUpKVxyXG5cclxuICAgIHZhbGlkYXRvci5zdWJzY3JpYmUoZXZlbnRzKVxyXG5cclxuICAgIGNvbnN0IHJlZHVjZXI6IFVuaWRvY1Byb2R1Y2VyPEludmVzdGlnYXRvcj4gPSBVbmlkb2NSZWR1Y2VyLnJlZHVjZS52YWxpZGF0aW9uKHZhbGlkYXRvciwgVW5pZG9jQ29tbWFuZC5yZWR1Y2UuZmFjdG9yeShJbnZlc3RpZ2F0b3JDb21tYW5kLnJlZHVjZSkpXHJcblxyXG4gICAgdmFsaWRhdG9yLm9uKCduZXh0JywgdGhpcy5oYW5kbGVGaWxlVmFsaWRhdGlvbilcclxuICAgIHJlZHVjZXIub24oJ25leHQnLCB0aGlzLmhhbmRsZUZpbGVSZWR1Y3Rpb24pXHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IFxyXG4gICAgICBzdGF0ZTogTG9hZGluZ1BhZ2VTdGF0ZS5MT0FESU5HLFxyXG4gICAgICBmaWxlXHJcbiAgICB9LCBzb3VyY2UucmVhZC5iaW5kKHNvdXJjZSkpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgZ2V0U2VsZWN0ZWQoKTogbnVtYmVyIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLm1vdXNlIDwgMCkge1xyXG4gICAgICByZXR1cm4gKCgodGhpcy5zdGF0ZS5zY3JvbGwgKyA1MCkgLyAxMDApIDw8IDApXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gKCh0aGlzLnN0YXRlLm1vdXNlIC8gMTAwKSA8PCAwKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIGlzU2VsZWN0ZWQoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0U2VsZWN0ZWQoKSA9PT0gaW5kZXhcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyBpc0ZpbGVMb2FkaW5nU2VsZWN0ZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1NlbGVjdGVkKDApXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgaXNDYW5jZWxsYXRpb25TZWxlY3RlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmlzU2VsZWN0ZWQoMSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyBpc1ByZW1hZGVTZWxlY3RlZChpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1NlbGVjdGVkKGluZGV4ICsgMilcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyByZW5kZXIgKCkgOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBcclxuICAgICAgICBvbkRyb3A9e3RoaXMuaGFuZGxlRHJvcH0gXHJcbiAgICAgICAgb25EcmFnRW50ZXI9e3RoaXMuaGFuZGxlU2lsZW50QWN0aW9ufVxyXG4gICAgICAgIG9uRHJhZ092ZXI9e3RoaXMuaGFuZGxlU2lsZW50QWN0aW9ufVxyXG4gICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdsYXlvdXQgbGF5b3V0LWxvYWRpbmctcGFnZScsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX1cclxuICAgICAgPlxyXG4gICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgcmVmPXt0aGlzLl9pbnB1dH0gXHJcbiAgICAgICAgICB0eXBlPSdmaWxlJyBcclxuICAgICAgICAgIGFjY2VwdD0ndGV4dC9wbGFpbicgXHJcbiAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXYgXHJcbiAgICAgICAgICBjbGFzc05hbWU9J2xheW91dC1sb2FkaW5nLXBhZ2Utb3B0aW9ucydcclxuICAgICAgICAgIG9uU2Nyb2xsPXt0aGlzLmhhbmRsZVNjcm9sbH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7IHRoaXMucmVuZGVyRmlsZSgpIH1cclxuICAgICAgICAgIHsgdGhpcy5yZW5kZXJDYW5jZWxsYXRpb24oKSB9XHJcbiAgICAgICAgICB7IHRoaXMucmVuZGVyUHJlbWFkZXMoKSB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xheW91dC1sb2FkaW5nLXBhZ2UtZGlzcGxheSc+XHJcbiAgICAgICAgICA8U3RhdGljU2xpZGVzaG93IGluZGV4PXt0aGlzLmdldFNlbGVjdGVkKCl9PlxyXG4gICAgICAgICAgICB7IHRoaXMucmVuZGVyRmlsZVNsaWRlKCkgfVxyXG4gICAgICAgICAgICB7IHRoaXMucmVuZGVyQ2FuY2VsbGF0aW9uU2xpZGUoKSB9XHJcbiAgICAgICAgICAgIHsgdGhpcy5yZW5kZXJQcmVtYWRlU2xpZGVzKCkgfVxyXG4gICAgICAgICAgPC9TdGF0aWNTbGlkZXNob3c+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIHJlbmRlckZpbGUoKTogUmVhY3QuUmVhY3ROb2RlIHtcclxuICAgIGNvbnN0IHNlbGVjdGVkOiBib29sZWFuID0gdGhpcy5pc0ZpbGVMb2FkaW5nU2VsZWN0ZWQoKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxidXR0b24gXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdsb2FkaW5nLW9wdGlvbicsIHsgJ2lzLWFjdGl2ZSc6IHNlbGVjdGVkIH0pfVxyXG4gICAgICAgIGFyaWEtcHJlc3NlZD17c2VsZWN0ZWR9XHJcbiAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUuc3RhdGUgIT09IExvYWRpbmdQYWdlU3RhdGUuSU5JVElBTH1cclxuICAgICAgICBvbk1vdXNlRW50ZXI9e3RoaXMuaGFuZGxlTW91c2VFbnRlck9wdGlvbn1cclxuICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZU1vdXNlQ2xpY2tPcHRpb259XHJcbiAgICAgICAgb25Nb3VzZUxlYXZlPXt0aGlzLmhhbmRsZU1vdXNlTGVhdmVPcHRpb259XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9hZGluZy1vcHRpb24taWNvbic+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdXBsb2FkXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9hZGluZy1vcHRpb24taW5mb3JtYXRpb24nPlxyXG4gICAgICAgICAgPGgxPkNoYXJnZXIgdW4gZG9jdW1lbnQ8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIClcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIHJlbmRlckNhbmNlbGxhdGlvbigpOiBSZWFjdC5SZWFjdE5vZGUge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWQ6IGJvb2xlYW4gPSB0aGlzLmlzU2VsZWN0ZWQoMSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8YnV0dG9uIFxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnbG9hZGluZy1vcHRpb24nLCB7ICdpcy1hY3RpdmUnOiBzZWxlY3RlZCB9KX1cclxuICAgICAgICBhcmlhLXByZXNzZWQ9e3NlbGVjdGVkfVxyXG4gICAgICAgIGRpc2FibGVkPXshdGhpcy5wcm9wcy5jdXJyZW50IHx8IHRoaXMuc3RhdGUuc3RhdGUgIT09IExvYWRpbmdQYWdlU3RhdGUuSU5JVElBTH1cclxuICAgICAgICBvbk1vdXNlRW50ZXI9e3RoaXMuaGFuZGxlTW91c2VFbnRlck9wdGlvbn1cclxuICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZU1vdXNlQ2xpY2tPcHRpb259XHJcbiAgICAgICAgb25Nb3VzZUxlYXZlPXt0aGlzLmhhbmRsZU1vdXNlTGVhdmVPcHRpb259XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9hZGluZy1vcHRpb24taWNvbic+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdW5kb1wiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvYWRpbmctb3B0aW9uLWluZm9ybWF0aW9uJz5cclxuICAgICAgICAgIDxoMT5SZXRvdXI8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyByZW5kZXJQcmVtYWRlcygpOiBSZWFjdC5SZWFjdE5vZGUge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUucHJlbWFkZXMpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUucHJlbWFkZXMubWFwKHRoaXMuaGFuZGxlUHJlbWFkZVJlbmRlcmluZylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiA8TG9hZGVyPkNoYXJnZW1lbnQgZGVzIHByw6l0aXLDqXMgZW4gY291cnM8L0xvYWRlcj5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyBoYW5kbGVQcmVtYWRlUmVuZGVyaW5nKHByZW1hZGU6IEludmVzdGlnYXRvciwgaW5kZXg6IG51bWJlcik6IFJlYWN0LlJlYWN0Tm9kZSB7XHJcbiAgICBjb25zdCBzZWxlY3RlZDogYm9vbGVhbiA9IHRoaXMuaXNTZWxlY3RlZChpbmRleCArIDIpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGJ1dHRvbiBcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ2xvYWRpbmctb3B0aW9uIGlzLXByZW1hZGUnLCB7ICdpcy1hY3RpdmUnOiBzZWxlY3RlZCB9KX1cclxuICAgICAgICBhcmlhLXByZXNzZWQ9e3NlbGVjdGVkfSBcclxuICAgICAgICBkaXNhYmxlZD17dGhpcy5zdGF0ZS5zdGF0ZSAhPT0gTG9hZGluZ1BhZ2VTdGF0ZS5JTklUSUFMfSBcclxuICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgIG9uTW91c2VFbnRlcj17dGhpcy5oYW5kbGVNb3VzZUVudGVyT3B0aW9ufVxyXG4gICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTW91c2VDbGlja09wdGlvbn1cclxuICAgICAgICBvbk1vdXNlTGVhdmU9e3RoaXMuaGFuZGxlTW91c2VMZWF2ZU9wdGlvbn1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2FkaW5nLW9wdGlvbi1pY29uJz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnc3ByaXRlIHNwcml0ZS1mb2xkZXIgc3ByaXRlLXZhcmlhdGlvbi0nICsgKGluZGV4ICUgMyl9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvYWRpbmctb3B0aW9uLWluZm9ybWF0aW9uJz5cclxuICAgICAgICAgIDxoMT57IHByZW1hZGUuc3VtbWFyeS5uYW1lLnRvU3RyaW5nKCkgfTwvaDE+XHJcbiAgICAgICAgICA8aDI+eyBwcmVtYWRlLnN1bW1hcnkuam9iIH08L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gICBwdWJsaWMgcmVuZGVyRmlsZVNsaWRlKCk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8U2xpZGU+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xheW91dCBsYXlvdXQtY2VudGVyZWQnPlxyXG4gICAgICAgICAgPEltYWdlcy5Ib21lIGNsYXNzTmFtZT0nbG9hZGluZy1tYXR1cmluJyAvPlxyXG4gICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICBTw6lsZWN0aW9ubmVyIHVuZSBmZXVpbGxlLlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1NsaWRlPlxyXG4gICAgKVxyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgcmVuZGVyQ2FuY2VsbGF0aW9uU2xpZGUoKTogUmVhY3QuUmVhY3RFbGVtZW50IHtcclxuICAgIGlmICh0aGlzLnByb3BzLmN1cnJlbnQpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8U2xpZGU+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGF5b3V0IGxheW91dC1ib3R0b20gdGV4dC1jZW50ZXInPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3Nwcml0ZSBzcHJpdGUtY2hhcmFjdGVyIHNwcml0ZS12YXJpYXRpb24tJyArIHRoaXMucHJvcHMuY3VycmVudC5zdW1tYXJ5LmFsaWFzLnRvTG93ZXJDYXNlKCkucmVwbGFjZUFsbCgnw6knLCAnZScpfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9TbGlkZT5cclxuICAgICAgKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8U2xpZGU+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGF5b3V0IGxheW91dC1jZW50ZXJlZCc+XHJcbiAgICAgICAgICAgIDxJbWFnZXMuSG9tZSBjbGFzc05hbWU9J2xvYWRpbmctbWF0dXJpbicgLz5cclxuICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgQXVjdW4gZG9jdW1lbnQgY2hhcmfDqS5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvU2xpZGU+XHJcbiAgICAgIClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyByZW5kZXJQcmVtYWRlU2xpZGVzKCk6IFJlYWN0LlJlYWN0Tm9kZSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5wcmVtYWRlcykge1xyXG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5wcmVtYWRlcy5tYXAodGhpcy5oYW5kbGVQcmVtYWRlU2xpZGVSZW5kZXJpbmcpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gPExvYWRlcj5DaGFyZ2VtZW50IGRlcyBwcsOpdGlyw6lzIGVuIGNvdXJzPC9Mb2FkZXI+XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgaGFuZGxlUHJlbWFkZVNsaWRlUmVuZGVyaW5nKHByZW1hZGU6IEludmVzdGlnYXRvciwgaW5kZXg6IG51bWJlcik6IFJlYWN0LlJlYWN0Tm9kZSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8U2xpZGUga2V5PXtpbmRleH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xheW91dCBsYXlvdXQtYm90dG9tIHRleHQtY2VudGVyJz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnc3ByaXRlIHNwcml0ZS1jaGFyYWN0ZXIgc3ByaXRlLXZhcmlhdGlvbi0nICsgcHJlbWFkZS5zdW1tYXJ5LmFsaWFzLnRvTG93ZXJDYXNlKCkucmVwbGFjZUFsbCgnw6knLCAnZScpfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1NsaWRlPlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFxyXG4gKi9cclxuZXhwb3J0IG5hbWVzcGFjZSBMb2FkaW5nUGFnZSB7XHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgZXhwb3J0IHR5cGUgQXBwbGljYXRpb25DYWxsYmFjayA9IChldmVudDogQXBwbGljYXRpb25FdmVudCkgPT4gdm9pZFxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBleHBvcnQgdHlwZSBQcm9wZXJ0aWVzID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nIHwgdW5kZWZpbmVkLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIGN1cnJlbnQ/OiBJbnZlc3RpZ2F0b3IgfCB1bmRlZmluZWQsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgb25DaGFuZ2U/OiBBcHBsaWNhdGlvbkNhbGxiYWNrIHwgdW5kZWZpbmVkXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBleHBvcnQgdHlwZSBTdGF0ZSA9IHtcclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIHByZW1hZGVzOiB1bmRlZmluZWQgfCBJbnZlc3RpZ2F0b3JbXSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBmaWxlOiBGaWxlIHwgdW5kZWZpbmVkLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIHN0YXRlOiBMb2FkaW5nUGFnZVN0YXRlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIHNjcm9sbDogbnVtYmVyLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIG1vdXNlOiBudW1iZXJcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9
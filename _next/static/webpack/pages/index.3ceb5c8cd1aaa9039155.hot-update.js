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
      scroll: 0
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
    _this._input = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();
    _Premades__WEBPACK_IMPORTED_MODULE_18__["Premades"].load().then(_this.handlePremadesLoading);
    return _this;
  }
  /**
   * 
   */


  Object(D_development_rpg_shubgath_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LoadingPage, [{
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
      var selected = this.getSelected();

      if (selected === 0) {
        this._input.current.click();
      } else if (this.props.cancellable) {
        if (selected === 1) {
          this.handleCancellation();
        } else {
          this.handlePremadeSelection(selected - 2);
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
          lineNumber: 260,
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
          lineNumber: 267,
          columnNumber: 9
        }
      }), __jsx("div", {
        className: "layout-loading-page-options",
        onScroll: this.handleScroll,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274,
          columnNumber: 9
        }
      }, this.renderFile(), this.renderCancellation(), this.renderPremades()), __jsx("div", {
        className: "layout-loading-page-display",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282,
          columnNumber: 9
        }
      }, __jsx(_StaticSlideshow__WEBPACK_IMPORTED_MODULE_17__["StaticSlideshow"], {
        index: this.getSelected(),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283,
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
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "loading-option-icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305,
          columnNumber: 9
        }
      }), __jsx("div", {
        className: "loading-option-information",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306,
          columnNumber: 9
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307,
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
        disabled: !this.props.cancellable,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "loading-option-icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325,
          columnNumber: 9
        }
      }), __jsx("div", {
        className: "loading-option-information",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326,
          columnNumber: 9
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327,
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
            lineNumber: 340,
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
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "loading-option-icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 357,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: 'sprite sprite-folder sprite-variation-' + index % 3,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358,
          columnNumber: 11
        }
      })), __jsx("div", {
        className: "loading-option-information",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360,
          columnNumber: 9
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 361,
          columnNumber: 11
        }
      }, premade.summary.name.toString()), __jsx("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 362,
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
          lineNumber: 373,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "layout layout-centered",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 374,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "container-fluid",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "row justify-content-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 376,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "col-8 text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 377,
          columnNumber: 15
        }
      }, __jsx(_Images__WEBPACK_IMPORTED_MODULE_15__["Images"].Home, {
        className: "img-fluid",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 378,
          columnNumber: 17
        }
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 379,
          columnNumber: 17
        }
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 380,
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
          lineNumber: 396,
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
            lineNumber: 409,
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
          lineNumber: 418,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "layout layout-bottom text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 419,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: 'sprite sprite-character sprite-variation-' + premade.summary.alias.toLowerCase().replaceAll('é', 'e'),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 420,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlL2xvYWRpbmcvTG9hZGluZ1BhZ2UudHN4Il0sIm5hbWVzIjpbIkxvYWRpbmdQYWdlIiwicHJvcGVydGllcyIsIl9pbnB1dCIsInN0YXRlIiwicHJlbWFkZXMiLCJ1bmRlZmluZWQiLCJMb2FkaW5nUGFnZVN0YXRlIiwiSU5JVElBTCIsImZpbGUiLCJzY3JvbGwiLCJoYW5kbGVQcmVtYWRlc0xvYWRpbmciLCJiaW5kIiwiaGFuZGxlUHJlbWFkZVJlbmRlcmluZyIsImhhbmRsZVByZW1hZGVTbGlkZVJlbmRlcmluZyIsImhhbmRsZUlucHV0Q2hhbmdlIiwiaGFuZGxlRHJvcCIsImhhbmRsZVNpbGVudEFjdGlvbiIsImhhbmRsZUNhbmNlbCIsImhhbmRsZUZpbGVTZWxlY3Rpb24iLCJoYW5kbGVGaWxlVmFsaWRhdGlvbiIsImhhbmRsZUZpbGVSZWR1Y3Rpb24iLCJoYW5kbGVDYW5jZWxsYXRpb24iLCJoYW5kbGVDbGljayIsImhhbmRsZVNjcm9sbCIsIlJlYWN0IiwiY3JlYXRlUmVmIiwiUHJlbWFkZXMiLCJsb2FkIiwidGhlbiIsInNvcnQiLCJJbnZlc3RpZ2F0b3IiLCJjb21wYXJlQnlOYW1lIiwic2V0U3RhdGUiLCJldmVudCIsInRhcmdldCIsImZpbGVzIiwibGVuZ3RoIiwiTE9BRElORyIsInN0b3BQcm9wYWdhdGlvbiIsInByZXZlbnREZWZhdWx0IiwiZHJhZ2dlZCIsImRhdGFUcmFuc2ZlciIsIm5hbWUiLCJlbmRzV2l0aCIsImN1cnJlbnRUYXJnZXQiLCJzY3JvbGxUb3AiLCJpbmRleCIsInByb3BzIiwib25DaGFuZ2UiLCJBcHBsaWNhdGlvbkV2ZW50IiwidXNlIiwic2hvd0ludmVzdGlnYXRvclBhZ2UiLCJzZWxlY3RlZCIsImdldFNlbGVjdGVkIiwiY3VycmVudCIsImNsaWNrIiwiY2FuY2VsbGFibGUiLCJoYW5kbGVQcmVtYWRlU2VsZWN0aW9uIiwidmFsaWRhdGlvbiIsInZhbHVlIiwiUkVTT0xWRUQiLCJzb3VyY2UiLCJVbmlkb2NGaWxlU3ltYm9sUHJvZHVjZXIiLCJjcmVhdGUiLCJldmVudHMiLCJwYXJzZSIsInRva2VuaXplIiwidmFsaWRhdG9yIiwiVW5pZG9jVmFsaWRhdG9yIiwia2lzcyIsIlVuaWRvY0NvbW1hbmQiLCJ2YWxpZGF0ZVVuaWRvYyIsImZhY3RvcnkiLCJJbnZlc3RpZ2F0b3JDb21tYW5kIiwidmFsaWRhdGUiLCJzdWJzY3JpYmUiLCJyZWR1Y2VyIiwiVW5pZG9jUmVkdWNlciIsInJlZHVjZSIsIm9uIiwicmVhZCIsImlzU2VsZWN0ZWQiLCJjbGFzc25hbWVzIiwiY2xhc3NOYW1lIiwiZGlzcGxheSIsInJlbmRlckZpbGUiLCJyZW5kZXJDYW5jZWxsYXRpb24iLCJyZW5kZXJQcmVtYWRlcyIsInJlbmRlckZpbGVTbGlkZSIsInJlbmRlckNhbmNlbGxhdGlvblNsaWRlIiwicmVuZGVyUHJlbWFkZVNsaWRlcyIsImlzRmlsZUxvYWRpbmdTZWxlY3RlZCIsIm1hcCIsInByZW1hZGUiLCJzdW1tYXJ5IiwidG9TdHJpbmciLCJqb2IiLCJhbGlhcyIsInRvTG93ZXJDYXNlIiwicmVwbGFjZUFsbCIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsIkVtcHR5IiwiY2FsbGJhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUEsV0FBYjtBQUFBOztBQUFBOztBQUNFO0FBQ0Y7QUFDQTs7QUFRRTtBQUNGO0FBQ0E7O0FBR0U7QUFDRjtBQUNBO0FBQ0UsdUJBQW9CQyxVQUFwQixFQUF3RDtBQUFBOztBQUFBOztBQUN0RCw4QkFBTUEsVUFBTjtBQURzRCxVQUx2Q0MsTUFLdUM7QUFHdEQsVUFBS0MsS0FBTCxHQUFhO0FB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LCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXHJcbmltcG9ydCB7IFxyXG4gIHRva2VuaXplLCBcclxuICBwYXJzZSxcclxuICBVbmlkb2NFdmVudCwgXHJcbiAgVW5pZG9jUHJvZHVjZXIsIFxyXG4gIFVuaWRvY1JlZHVjZXIsIFxyXG4gIFVuaWRvY1ZhbGlkYXRpb25FdmVudCxcclxuICBVbmlkb2NWYWxpZGF0b3IgXHJcbn0gZnJvbSAnQGNlZHJpYy1kZW1vbmdpdmVydC91bmlkb2MnXHJcblxyXG5pbXBvcnQgeyBFbXB0eSB9IGZyb20gJy4uLy4uLy4uL3R5cGVzY3JpcHQvdXRpbHMnXHJcbmltcG9ydCB7IFVuaWRvY0ZpbGVTeW1ib2xQcm9kdWNlciB9IGZyb20gJy4uLy4uLy4uL3R5cGVzY3JpcHQvdW5pZG9jL1VuaWRvY0ZpbGVTeW1ib2xQcm9kdWNlcidcclxuaW1wb3J0IHsgVW5pZG9jQ29tbWFuZCB9IGZyb20gJy4uLy4uLy4uL3R5cGVzY3JpcHQvdW5pZG9jL1VuaWRvY0NvbW1hbmQnXHJcbmltcG9ydCB7IEludmVzdGlnYXRvckNvbW1hbmQgfSBmcm9tICcuLi8uLi8uLi90eXBlc2NyaXB0L3VuaWRvYy9JbnZlc3RpZ2F0b3JDb21tYW5kJ1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvbkV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vdHlwZXNjcmlwdC9hcHBsaWNhdGlvbi9BcHBsaWNhdGlvbkV2ZW50J1xyXG5pbXBvcnQgeyBJbnZlc3RpZ2F0b3IgfSBmcm9tICcuLi8uLi8uLi90eXBlc2NyaXB0L0ludmVzdGlnYXRvcidcclxuXHJcbmltcG9ydCB7IEltYWdlcyB9IGZyb20gJy4uLy4uL0ltYWdlcydcclxuaW1wb3J0IHsgTG9hZGVyIH0gZnJvbSAnLi4vLi4vTG9hZGVyJ1xyXG5pbXBvcnQgeyBTdGF0aWNTbGlkZXNob3cgIH0gZnJvbSAnLi4vLi4vU3RhdGljU2xpZGVzaG93J1xyXG5pbXBvcnQgeyBQcmVtYWRlcyB9IGZyb20gJy4vUHJlbWFkZXMnXHJcbmltcG9ydCB7IExvYWRpbmdQYWdlU3RhdGUgfSBmcm9tICcuL0xvYWRpbmdQYWdlU3RhdGUnXHJcbmltcG9ydCB7IFNsaWRlIH0gZnJvbSAnLi4vLi4vU2xpZGUnXHJcblxyXG5cclxuLyoqXHJcbiAqIFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIExvYWRpbmdQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PExvYWRpbmdQYWdlLlByb3BlcnRpZXMsIExvYWRpbmdQYWdlLlN0YXRlPiB7XHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyByZWFkb25seSBkZWZhdWx0UHJvcHM6IFJlYWRvbmx5PExvYWRpbmdQYWdlLlByb3BlcnRpZXM+ID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgb25DaGFuZ2U6IEVtcHR5LmNhbGxiYWNrXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwcml2YXRlIHJlYWRvbmx5IF9pbnB1dDogUmVhY3QuUmVmT2JqZWN0PEhUTUxJbnB1dEVsZW1lbnQ+XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvciAocHJvcGVydGllczogTG9hZGluZ1BhZ2UuUHJvcGVydGllcykge1xyXG4gICAgc3VwZXIocHJvcGVydGllcylcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBwcmVtYWRlczogdW5kZWZpbmVkLFxyXG4gICAgICBzdGF0ZTogTG9hZGluZ1BhZ2VTdGF0ZS5JTklUSUFMLFxyXG4gICAgICBmaWxlOiB1bmRlZmluZWQsXHJcbiAgICAgIHNjcm9sbDogMFxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaGFuZGxlUHJlbWFkZXNMb2FkaW5nID0gdGhpcy5oYW5kbGVQcmVtYWRlc0xvYWRpbmcuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVQcmVtYWRlUmVuZGVyaW5nID0gdGhpcy5oYW5kbGVQcmVtYWRlUmVuZGVyaW5nLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlUHJlbWFkZVNsaWRlUmVuZGVyaW5nID0gdGhpcy5oYW5kbGVQcmVtYWRlU2xpZGVSZW5kZXJpbmcuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVJbnB1dENoYW5nZSA9IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVEcm9wID0gdGhpcy5oYW5kbGVEcm9wLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlU2lsZW50QWN0aW9uID0gdGhpcy5oYW5kbGVTaWxlbnRBY3Rpb24uYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVDYW5jZWwgPSB0aGlzLmhhbmRsZUNhbmNlbC5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmhhbmRsZUZpbGVTZWxlY3Rpb24gPSB0aGlzLmhhbmRsZUZpbGVTZWxlY3Rpb24uYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVGaWxlVmFsaWRhdGlvbiA9IHRoaXMuaGFuZGxlRmlsZVZhbGlkYXRpb24uYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVGaWxlUmVkdWN0aW9uID0gdGhpcy5oYW5kbGVGaWxlUmVkdWN0aW9uLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlQ2FuY2VsbGF0aW9uID0gdGhpcy5oYW5kbGVDYW5jZWxsYXRpb24uYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVTY3JvbGwgPSB0aGlzLmhhbmRsZVNjcm9sbC5iaW5kKHRoaXMpXHJcblxyXG4gICAgdGhpcy5faW5wdXQgPSBSZWFjdC5jcmVhdGVSZWYoKVxyXG5cclxuICAgIFByZW1hZGVzLmxvYWQoKS50aGVuKHRoaXMuaGFuZGxlUHJlbWFkZXNMb2FkaW5nKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIGhhbmRsZVByZW1hZGVzTG9hZGluZyhwcmVtYWRlczogSW52ZXN0aWdhdG9yW10pOiB2b2lkIHtcclxuICAgIHByZW1hZGVzLnNvcnQoSW52ZXN0aWdhdG9yLmNvbXBhcmVCeU5hbWUpXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgcHJlbWFkZXMgfSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHByaXZhdGUgaGFuZGxlSW5wdXRDaGFuZ2UoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KTogdm9pZCB7XHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmZpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IFxyXG4gICAgICAgIHN0YXRlOiBMb2FkaW5nUGFnZVN0YXRlLkxPQURJTkcsXHJcbiAgICAgICAgZmlsZTogZXZlbnQudGFyZ2V0LmZpbGVzWzBdIFxyXG4gICAgICB9LCB0aGlzLmhhbmRsZUZpbGVTZWxlY3Rpb24uYmluZCh1bmRlZmluZWQsIGV2ZW50LnRhcmdldC5maWxlc1swXSkpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwcml2YXRlIGhhbmRsZVNpbGVudEFjdGlvbihldmVudDogUmVhY3QuU3ludGhldGljRXZlbnQpOiB2b2lkIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwcml2YXRlIGhhbmRsZURyb3AoZXZlbnQ6IFJlYWN0LkRyYWdFdmVudDxIVE1MSW5wdXRFbGVtZW50Pik6IHZvaWQge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICBjb25zdCBkcmFnZ2VkOiBEYXRhVHJhbnNmZXIgPSBldmVudC5kYXRhVHJhbnNmZXJcclxuXHJcbiAgICBpZiAoZHJhZ2dlZC5maWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGZvciAoY29uc3QgZmlsZSBvZiBkcmFnZ2VkLmZpbGVzKSB7XHJcbiAgICAgICAgaWYgKGZpbGUubmFtZS5lbmRzV2l0aCgnLnR4dCcpKSB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgXHJcbiAgICAgICAgICAgIHN0YXRlOiBMb2FkaW5nUGFnZVN0YXRlLkxPQURJTkcsXHJcbiAgICAgICAgICAgIGZpbGVcclxuICAgICAgICAgIH0sIHRoaXMuaGFuZGxlRmlsZVNlbGVjdGlvbi5iaW5kKHVuZGVmaW5lZCwgZmlsZSkpXHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBoYW5kbGVTY3JvbGwoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQsIFdoZWVsRXZlbnQ+KTogdm9pZCB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2Nyb2xsOiBldmVudC5jdXJyZW50VGFyZ2V0LnNjcm9sbFRvcCB9KVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBoYW5kbGVQcmVtYWRlU2VsZWN0aW9uIChpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKEFwcGxpY2F0aW9uRXZlbnQudXNlKHRoaXMuc3RhdGUucHJlbWFkZXNbaW5kZXhdKSlcclxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoQXBwbGljYXRpb25FdmVudC5zaG93SW52ZXN0aWdhdG9yUGFnZSgpKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBoYW5kbGVDbGljayhldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pOiB2b2lkIHtcclxuICAgIGNvbnN0IHNlbGVjdGVkOiBudW1iZXIgPSB0aGlzLmdldFNlbGVjdGVkKClcclxuXHJcbiAgICBpZiAoc2VsZWN0ZWQgPT09IDApIHtcclxuICAgICAgdGhpcy5faW5wdXQuY3VycmVudC5jbGljaygpXHJcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMuY2FuY2VsbGFibGUpIHtcclxuICAgICAgaWYgKHNlbGVjdGVkID09PSAxKSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVDYW5jZWxsYXRpb24oKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlUHJlbWFkZVNlbGVjdGlvbihzZWxlY3RlZCAtIDIpXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaGFuZGxlUHJlbWFkZVNlbGVjdGlvbihzZWxlY3RlZCAtIDEpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwcml2YXRlIGhhbmRsZUNhbmNlbChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pOiB2b2lkIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKEFwcGxpY2F0aW9uRXZlbnQuc2hvd0ludmVzdGlnYXRvclBhZ2UoKSlcclxuICB9XHJcblxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gICBwcml2YXRlIGhhbmRsZUNhbmNlbGxhdGlvbiAoKSA6IHZvaWQge1xyXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShBcHBsaWNhdGlvbkV2ZW50LnNob3dJbnZlc3RpZ2F0b3JQYWdlKCkpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwcml2YXRlIGhhbmRsZUZpbGVWYWxpZGF0aW9uICh2YWxpZGF0aW9uOiBVbmlkb2NWYWxpZGF0aW9uRXZlbnQpIDogdm9pZCB7XHJcbiAgICAvLyBAVE9ETyBlcnJvci1jaGVja1xyXG4gICAgLy9jb25zb2xlLmxvZyh2YWxpZGF0aW9uLnRvU3RyaW5nKCkpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwcml2YXRlIGhhbmRsZUZpbGVSZWR1Y3Rpb24gKHZhbHVlOiBJbnZlc3RpZ2F0b3IpIDogdm9pZCB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgXHJcbiAgICAgIHN0YXRlOiBMb2FkaW5nUGFnZVN0YXRlLlJFU09MVkVEXHJcbiAgICB9KVxyXG5cclxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoQXBwbGljYXRpb25FdmVudC51c2UodmFsdWUpKVxyXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShBcHBsaWNhdGlvbkV2ZW50LnNob3dJbnZlc3RpZ2F0b3JQYWdlKCkpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwcml2YXRlIGhhbmRsZUZpbGVTZWxlY3Rpb24oZmlsZTogRmlsZSk6IHZvaWQge1xyXG4gICAgY29uc3Qgc291cmNlOiBVbmlkb2NGaWxlU3ltYm9sUHJvZHVjZXIgPSBVbmlkb2NGaWxlU3ltYm9sUHJvZHVjZXIuY3JlYXRlKGZpbGUpXHJcbiAgICBjb25zdCBldmVudHM6IFVuaWRvY1Byb2R1Y2VyPFVuaWRvY0V2ZW50PiA9IHBhcnNlKHRva2VuaXplKHNvdXJjZSkpXHJcbiAgICBjb25zdCB2YWxpZGF0b3I6IFVuaWRvY1ZhbGlkYXRvciA9IFVuaWRvY1ZhbGlkYXRvci5raXNzKFVuaWRvY0NvbW1hbmQudmFsaWRhdGVVbmlkb2MuZmFjdG9yeShJbnZlc3RpZ2F0b3JDb21tYW5kLnZhbGlkYXRlKSlcclxuXHJcbiAgICB2YWxpZGF0b3Iuc3Vic2NyaWJlKGV2ZW50cylcclxuXHJcbiAgICBjb25zdCByZWR1Y2VyOiBVbmlkb2NQcm9kdWNlcjxJbnZlc3RpZ2F0b3I+ID0gVW5pZG9jUmVkdWNlci5yZWR1Y2UudmFsaWRhdGlvbih2YWxpZGF0b3IsIFVuaWRvY0NvbW1hbmQucmVkdWNlLmZhY3RvcnkoSW52ZXN0aWdhdG9yQ29tbWFuZC5yZWR1Y2UpKVxyXG5cclxuICAgIHZhbGlkYXRvci5vbignbmV4dCcsIHRoaXMuaGFuZGxlRmlsZVZhbGlkYXRpb24pXHJcbiAgICByZWR1Y2VyLm9uKCduZXh0JywgdGhpcy5oYW5kbGVGaWxlUmVkdWN0aW9uKVxyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBcclxuICAgICAgc3RhdGU6IExvYWRpbmdQYWdlU3RhdGUuTE9BRElORyxcclxuICAgICAgZmlsZVxyXG4gICAgfSwgc291cmNlLnJlYWQuYmluZChzb3VyY2UpKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIGdldFNlbGVjdGVkKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gKCgodGhpcy5zdGF0ZS5zY3JvbGwgKyA1MCkgLyAxMDApIDw8IDApXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgaXNTZWxlY3RlZChpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRTZWxlY3RlZCgpID09PSBpbmRleFxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIGlzRmlsZUxvYWRpbmdTZWxlY3RlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmlzU2VsZWN0ZWQoMClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyBpc0NhbmNlbGxhdGlvblNlbGVjdGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvcHMuY2FuY2VsbGFibGUgJiYgdGhpcy5pc1NlbGVjdGVkKDEpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgaXNQcmVtYWRlU2VsZWN0ZWQoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNTZWxlY3RlZChpbmRleCArIDIpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgcmVuZGVyICgpIDogUmVhY3QuUmVhY3RFbGVtZW50IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgXHJcbiAgICAgICAgb25Ecm9wPXt0aGlzLmhhbmRsZURyb3B9IFxyXG4gICAgICAgIG9uRHJhZ0VudGVyPXt0aGlzLmhhbmRsZVNpbGVudEFjdGlvbn1cclxuICAgICAgICBvbkRyYWdPdmVyPXt0aGlzLmhhbmRsZVNpbGVudEFjdGlvbn1cclxuICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfVxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnbGF5b3V0IGxheW91dC1sb2FkaW5nLXBhZ2UnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9XHJcbiAgICAgID5cclxuICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgIHJlZj17dGhpcy5faW5wdXR9IFxyXG4gICAgICAgICAgdHlwZT0nZmlsZScgXHJcbiAgICAgICAgICBhY2NlcHQ9J3RleHQvcGxhaW4nIFxyXG4gICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgY2xhc3NOYW1lPSdsYXlvdXQtbG9hZGluZy1wYWdlLW9wdGlvbnMnXHJcbiAgICAgICAgICBvblNjcm9sbD17dGhpcy5oYW5kbGVTY3JvbGx9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgeyB0aGlzLnJlbmRlckZpbGUoKSB9XHJcbiAgICAgICAgICB7IHRoaXMucmVuZGVyQ2FuY2VsbGF0aW9uKCkgfVxyXG4gICAgICAgICAgeyB0aGlzLnJlbmRlclByZW1hZGVzKCkgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsYXlvdXQtbG9hZGluZy1wYWdlLWRpc3BsYXknPlxyXG4gICAgICAgICAgPFN0YXRpY1NsaWRlc2hvdyBpbmRleD17dGhpcy5nZXRTZWxlY3RlZCgpfT5cclxuICAgICAgICAgICAgeyB0aGlzLnJlbmRlckZpbGVTbGlkZSgpIH1cclxuICAgICAgICAgICAgeyB0aGlzLnJlbmRlckNhbmNlbGxhdGlvblNsaWRlKCkgfVxyXG4gICAgICAgICAgICB7IHRoaXMucmVuZGVyUHJlbWFkZVNsaWRlcygpIH1cclxuICAgICAgICAgIDwvU3RhdGljU2xpZGVzaG93PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyByZW5kZXJGaWxlKCk6IFJlYWN0LlJlYWN0Tm9kZSB7XHJcbiAgICBjb25zdCBzZWxlY3RlZDogYm9vbGVhbiA9IHRoaXMuaXNGaWxlTG9hZGluZ1NlbGVjdGVkKClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8YnV0dG9uIFxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnbG9hZGluZy1vcHRpb24nLCB7ICdpcy1hY3RpdmUnOiBzZWxlY3RlZCB9KX1cclxuICAgICAgICBhcmlhLXByZXNzZWQ9e3NlbGVjdGVkfVxyXG4gICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLnN0YXRlICE9PSBMb2FkaW5nUGFnZVN0YXRlLklOSVRJQUx9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9hZGluZy1vcHRpb24taWNvbicgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9hZGluZy1vcHRpb24taW5mb3JtYXRpb24nPlxyXG4gICAgICAgICAgPGgxPkNoYXJnZXIgdW4gZG9jdW1lbnQ8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIClcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIHJlbmRlckNhbmNlbGxhdGlvbigpOiBSZWFjdC5SZWFjdE5vZGUge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWQ6IGJvb2xlYW4gPSB0aGlzLmlzU2VsZWN0ZWQoMSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8YnV0dG9uIFxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnbG9hZGluZy1vcHRpb24nLCB7ICdpcy1hY3RpdmUnOiBzZWxlY3RlZCB9KX1cclxuICAgICAgICBhcmlhLXByZXNzZWQ9e3NlbGVjdGVkfVxyXG4gICAgICAgIGRpc2FibGVkPXshdGhpcy5wcm9wcy5jYW5jZWxsYWJsZX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2FkaW5nLW9wdGlvbi1pY29uJyAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2FkaW5nLW9wdGlvbi1pbmZvcm1hdGlvbic+XHJcbiAgICAgICAgICA8aDE+UmV0b3VyPC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgcmVuZGVyUHJlbWFkZXMoKTogUmVhY3QuUmVhY3ROb2RlIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLnByZW1hZGVzKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLnByZW1hZGVzLm1hcCh0aGlzLmhhbmRsZVByZW1hZGVSZW5kZXJpbmcpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gPExvYWRlcj5DaGFyZ2VtZW50IGRlcyBwcsOpdGlyw6lzIGVuIGNvdXJzPC9Mb2FkZXI+XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgaGFuZGxlUHJlbWFkZVJlbmRlcmluZyhwcmVtYWRlOiBJbnZlc3RpZ2F0b3IsIGluZGV4OiBudW1iZXIpOiBSZWFjdC5SZWFjdE5vZGUge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWQ6IGJvb2xlYW4gPSB0aGlzLmlzU2VsZWN0ZWQoaW5kZXggKyAyKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxidXR0b24gXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdsb2FkaW5nLW9wdGlvbiBpcy1wcmVtYWRlJywgeyAnaXMtYWN0aXZlJzogc2VsZWN0ZWQgfSl9XHJcbiAgICAgICAgYXJpYS1wcmVzc2VkPXtzZWxlY3RlZH0gXHJcbiAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUuc3RhdGUgIT09IExvYWRpbmdQYWdlU3RhdGUuSU5JVElBTH0gXHJcbiAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2FkaW5nLW9wdGlvbi1pY29uJz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnc3ByaXRlIHNwcml0ZS1mb2xkZXIgc3ByaXRlLXZhcmlhdGlvbi0nICsgKGluZGV4ICUgMyl9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvYWRpbmctb3B0aW9uLWluZm9ybWF0aW9uJz5cclxuICAgICAgICAgIDxoMT57IHByZW1hZGUuc3VtbWFyeS5uYW1lLnRvU3RyaW5nKCkgfTwvaDE+XHJcbiAgICAgICAgICA8aDI+eyBwcmVtYWRlLnN1bW1hcnkuam9iIH08L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gICBwdWJsaWMgcmVuZGVyRmlsZVNsaWRlKCk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8U2xpZGU+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xheW91dCBsYXlvdXQtY2VudGVyZWQnPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lci1mbHVpZCc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cganVzdGlmeS1jb250ZW50LWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC04IHRleHQtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgIDxJbWFnZXMuSG9tZSBjbGFzc05hbWU9J2ltZy1mbHVpZCcgLz5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgU8OpbGVjdGlvbm5lciBvdSBkw6lwb3NlciB1bmUgZmV1aWxsZSBkZSBwZXJzb25uYWdlLlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvU2xpZGU+XHJcbiAgICApXHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyByZW5kZXJDYW5jZWxsYXRpb25TbGlkZSgpOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFNsaWRlPlxyXG4gICAgICAgIFxyXG4gICAgICA8L1NsaWRlPlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgcHVibGljIHJlbmRlclByZW1hZGVTbGlkZXMoKTogUmVhY3QuUmVhY3ROb2RlIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLnByZW1hZGVzKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLnByZW1hZGVzLm1hcCh0aGlzLmhhbmRsZVByZW1hZGVTbGlkZVJlbmRlcmluZylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiA8TG9hZGVyPkNoYXJnZW1lbnQgZGVzIHByw6l0aXLDqXMgZW4gY291cnM8L0xvYWRlcj5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHB1YmxpYyBoYW5kbGVQcmVtYWRlU2xpZGVSZW5kZXJpbmcocHJlbWFkZTogSW52ZXN0aWdhdG9yLCBpbmRleDogbnVtYmVyKTogUmVhY3QuUmVhY3ROb2RlIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxTbGlkZSBrZXk9e2luZGV4fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGF5b3V0IGxheW91dC1ib3R0b20gdGV4dC1jZW50ZXInPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydzcHJpdGUgc3ByaXRlLWNoYXJhY3RlciBzcHJpdGUtdmFyaWF0aW9uLScgKyBwcmVtYWRlLnN1bW1hcnkuYWxpYXMudG9Mb3dlckNhc2UoKS5yZXBsYWNlQWxsKCfDqScsICdlJyl9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvU2xpZGU+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogXHJcbiAqL1xyXG5leHBvcnQgbmFtZXNwYWNlIExvYWRpbmdQYWdlIHtcclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBleHBvcnQgdHlwZSBBcHBsaWNhdGlvbkNhbGxiYWNrID0gKGV2ZW50OiBBcHBsaWNhdGlvbkV2ZW50KSA9PiB2b2lkXHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqL1xyXG4gIGV4cG9ydCB0eXBlIFByb3BlcnRpZXMgPSB7XHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmcgfCB1bmRlZmluZWQsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgY2FuY2VsbGFibGU/OiBib29sZWFuIHwgdW5kZWZpbmVkLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIG9uQ2hhbmdlPzogQXBwbGljYXRpb25DYWxsYmFjayB8IHVuZGVmaW5lZFxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgZXhwb3J0IHR5cGUgU3RhdGUgPSB7XHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBwcmVtYWRlczogdW5kZWZpbmVkIHwgSW52ZXN0aWdhdG9yW10sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgZmlsZTogRmlsZSB8IHVuZGVmaW5lZCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBzdGF0ZTogTG9hZGluZ1BhZ2VTdGF0ZSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBzY3JvbGw6IG51bWJlclxyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=
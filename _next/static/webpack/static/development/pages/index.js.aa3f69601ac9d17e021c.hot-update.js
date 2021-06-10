webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/InvestigatorPage.tsx":
/*!*****************************************!*\
  !*** ./components/InvestigatorPage.tsx ***!
  \*****************************************/
/*! exports provided: InvestigatorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestigatorPage", function() { return InvestigatorPage; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _SummaryDisplay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SummaryDisplay */ "./components/SummaryDisplay.tsx");
/* harmony import */ var _CharacteristicSetRenderer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CharacteristicSetRenderer */ "./components/CharacteristicSetRenderer.tsx");
/* harmony import */ var _StatusDisplay__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./StatusDisplay */ "./components/StatusDisplay.tsx");
/* harmony import */ var _AllSkillsDisplay__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./AllSkillsDisplay */ "./components/AllSkillsDisplay.tsx");
/* harmony import */ var _typescript_unidoc_reducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../typescript/unidoc/reducer */ "./typescript/unidoc/reducer/index.ts");






var _jsxFileName = "D:\\development\\rpg\\shubgath\\components\\InvestigatorPage.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









/**
 * 
 */
var InvestigatorPage = /*#__PURE__*/function (_PureComponent) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(InvestigatorPage, _PureComponent);

  var _super = _createSuper(InvestigatorPage);

  /**
   * 
   */
  function InvestigatorPage(properties) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, InvestigatorPage);

    _this = _super.call(this, properties);
    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handleSave = _this.handleSave.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }
  /**
   * 
   */


  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(InvestigatorPage, [{
    key: "handleChange",
    value: function handleChange(next, previous) {
      this.props.onChange(next, previous);
    }
    /**
     * 
     */

  }, {
    key: "handleSkillSelection",
    value: function handleSkillSelection(skill) {
      this.props.onChange(this.props.value.toggleForUpdate(skill), this.props.value);
    }
    /**
     * 
     */

  }, {
    key: "handleSave",
    value: function handleSave() {
      var href = document.createElement('a');
      href.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(_typescript_unidoc_reducer__WEBPACK_IMPORTED_MODULE_12__["UnidocInvestigatorReducer"].reduce(this.props.value)));
      href.setAttribute('download', this.props.value.summary.name.first.toLocaleLowerCase() + '-' + this.props.value.summary.name.last.toLocaleLowerCase() + '.sheet.unidoc');
      href.style.display = 'none';
      document.body.appendChild(href);
      href.click();
      document.body.removeChild(href);
      href.remove();
    }
    /**
     * 
     */

  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('page page-investigator', this.props.className)
      }, __jsx("div", {
        className: "layout layout-rotulus"
      }, __jsx("div", {
        className: "container"
      }, __jsx("div", {
        className: "row justify-content-center align-items-center"
      }, __jsx("div", {
        className: "col-8 col-md-4 order-md-1 col-lg-3 order-lg-1"
      }, __jsx("img", {
        className: "img-fluid",
        src: "/images/logo.svg"
      })), __jsx("div", {
        className: "col-12 d-block d-md-none"
      }, __jsx("br", null)), __jsx("div", {
        className: "col-12 col-md-8 order-md-1 col-lg-6 order-lg-1"
      }, __jsx("div", {
        className: "row"
      }, __jsx(_SummaryDisplay__WEBPACK_IMPORTED_MODULE_8__["SummaryDisplay"], {
        value: this.props.value
      }))), __jsx("div", {
        className: "col-12 d-block order-md-3"
      }, __jsx("br", null)), __jsx("div", {
        className: "col-12 col-md-6 order-md-3 col-lg-3 order-lg-1"
      }, __jsx("div", {
        className: "row"
      }, __jsx(_CharacteristicSetRenderer__WEBPACK_IMPORTED_MODULE_9__["CharacteristicSetRenderer"], {
        value: this.props.value,
        onChange: this.handleChange
      }))), __jsx("div", {
        className: "col-12 d-block d-md-none order-md-3 order-lg-1 d-lg-block"
      }, __jsx("br", null)), __jsx("div", {
        className: "col-12 col-md-6 order-md-3 col-lg order-lg-1"
      }, __jsx("div", {
        className: "row"
      }, __jsx(_StatusDisplay__WEBPACK_IMPORTED_MODULE_10__["StatusDisplay"], {
        value: this.props.value,
        onChange: this.handleChange
      }))), __jsx("div", {
        className: "col-12 d-block d-md-block order-md-3 order-lg-1"
      }, __jsx("br", null)), __jsx("div", {
        className: "col-12 order-md-3 order-lg-1"
      }, __jsx("div", {
        className: "row"
      }, __jsx(_AllSkillsDisplay__WEBPACK_IMPORTED_MODULE_11__["AllSkillsDisplay"], {
        value: this.props.value
      })))), __jsx("div", {
        className: "row"
      }, __jsx("div", {
        className: "col-12"
      }, __jsx("br", null), __jsx("button", {
        className: "btn btn-primary btn-block",
        onClick: this.handleSave
      }, "Sauvegarder la fiche"), __jsx("button", {
        className: "btn btn-link btn-block",
        onClick: this.props.onReload
      }, "Charger une nouvelle fiche"))))));
    }
  }]);

  return InvestigatorPage;
}(react__WEBPACK_IMPORTED_MODULE_6__["PureComponent"]);
/**
 * 
 */

(function (_InvestigatorPage) {})(InvestigatorPage || (InvestigatorPage = {}));

/***/ })

})
//# sourceMappingURL=index.js.aa3f69601ac9d17e021c.hot-update.js.map
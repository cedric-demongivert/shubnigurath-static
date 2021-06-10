webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/page/home/HomePage.tsx":
/*!*******************************************!*\
  !*** ./components/page/home/HomePage.tsx ***!
  \*******************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");
/* harmony import */ var _typescript_Investigator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../typescript/Investigator */ "./typescript/Investigator.ts");
/* harmony import */ var _InvestigatorPage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../InvestigatorPage */ "./components/InvestigatorPage.tsx");
/* harmony import */ var _loading_LoadingPage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../loading/LoadingPage */ "./components/page/loading/LoadingPage.tsx");
/* harmony import */ var _HomePageState__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./HomePageState */ "./components/page/home/HomePageState.tsx");






var _jsxFileName = "D:\\development\\rpg\\shubgath\\components\\page\\home\\HomePage.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







/**
 * 
 */

var HomePage = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(HomePage, _React$Component);

  var _super = _createSuper(HomePage);

  /**
   * 
   */
  function HomePage(properties) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HomePage);

    _this = _super.call(this, properties);
    _this.handleLoading = _this.handleLoading.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handleReload = _this.handleReload.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handleCancelling = _this.handleCancelling.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.state = {
      state: _HomePageState__WEBPACK_IMPORTED_MODULE_11__["HomePageState"].LOADING,
      investigator: _typescript_Investigator__WEBPACK_IMPORTED_MODULE_8__["Investigator"].empty()
    };
    return _this;
  }
  /**
   * 
   */


  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(HomePage, [{
    key: "handleCancelling",
    value: function handleCancelling() {
      this.setState({
        state: _HomePageState__WEBPACK_IMPORTED_MODULE_11__["HomePageState"].INVESTIGATOR
      });
    }
    /**
     * 
     */

  }, {
    key: "handleLoading",
    value: function handleLoading(investigator) {
      this.setState({
        state: _HomePageState__WEBPACK_IMPORTED_MODULE_11__["HomePageState"].INVESTIGATOR,
        investigator: investigator
      });
    }
    /**
     * 
     */

  }, {
    key: "handleReload",
    value: function handleReload() {
      this.setState({
        state: _HomePageState__WEBPACK_IMPORTED_MODULE_11__["HomePageState"].LOADING
      });
    }
    /**
     * 
     */

  }, {
    key: "handleChange",
    value: function handleChange(next) {
      this.setState({
        state: _HomePageState__WEBPACK_IMPORTED_MODULE_11__["HomePageState"].LOADING,
        investigator: next
      });
    }
    /**
     * 
     */

  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "layout layout-slider"
      }, __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_7__["CSSTransition"], {
        "in": this.state.state === _HomePageState__WEBPACK_IMPORTED_MODULE_11__["HomePageState"].LOADING,
        unmountOnExit: true,
        classNames: 'is',
        timeout: 400
      }, this.renderLoadingPage()), __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_7__["CSSTransition"], {
        "in": this.state.state === _HomePageState__WEBPACK_IMPORTED_MODULE_11__["HomePageState"].INVESTIGATOR,
        unmountOnExit: true,
        classNames: 'is',
        timeout: 400
      }, this.renderCharacterPage()));
    }
    /**
     * 
     */

  }, {
    key: "renderLoadingPage",
    value: function renderLoadingPage() {
      return __jsx(_loading_LoadingPage__WEBPACK_IMPORTED_MODULE_10__["LoadingPage"], {
        cancellable: this.state.investigator !== _typescript_Investigator__WEBPACK_IMPORTED_MODULE_8__["Investigator"].EMPTY,
        onLoad: this.handleLoading,
        onCancel: this.handleCancelling
      });
    }
    /**
     * 
     */

  }, {
    key: "renderCharacterPage",
    value: function renderCharacterPage() {
      return __jsx(_InvestigatorPage__WEBPACK_IMPORTED_MODULE_9__["InvestigatorPage"], {
        onReload: this.handleReload,
        value: this.state.investigator
      });
    }
  }]);

  return HomePage;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);
/**
 * 
 */

(function (_HomePage) {})(HomePage || (HomePage = {}));

/***/ })

})
//# sourceMappingURL=index.js.2c497688c0e420775694.hot-update.js.map
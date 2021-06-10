webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/StatusDisplay.tsx":
/*!**************************************!*\
  !*** ./components/StatusDisplay.tsx ***!
  \**************************************/
/*! exports provided: StatusDisplay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusDisplay", function() { return StatusDisplay; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Label */ "./components/Label.tsx");
/* harmony import */ var _MovementRenderer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MovementRenderer */ "./components/MovementRenderer.tsx");
/* harmony import */ var _form_BooleanField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./form/BooleanField */ "./components/form/BooleanField.tsx");
/* harmony import */ var _CopyField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./CopyField */ "./components/CopyField.tsx");
/* harmony import */ var _typescript_Investigator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../typescript/Investigator */ "./typescript/Investigator.ts");
/* harmony import */ var _typescript_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../typescript/utils */ "./typescript/utils/index.ts");
/* harmony import */ var _typescript_Mutables__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../typescript/Mutables */ "./typescript/Mutables.ts");
/* harmony import */ var _form_BoundStatisticField__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./form/BoundStatisticField */ "./components/form/BoundStatisticField.tsx");
/* harmony import */ var _typescript_redux__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../typescript/redux */ "./typescript/redux/index.ts");







var _jsxFileName = "D:\\development\\rpg\\shubgath\\components\\StatusDisplay.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }











/**
 * 
 */

var StatusDisplay = /*#__PURE__*/function (_PureComponent) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(StatusDisplay, _PureComponent);

  var _super = _createSuper(StatusDisplay);

  /**
   * 
   */

  /**
   * 
   */
  function StatusDisplay(properties) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, StatusDisplay);

    _this = _super.call(this, properties);
    _this.handleTemporaryInsaneChange = _this.handleTemporaryInsaneChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.handleIndefinitelyInsaneChange = _this.handleIndefinitelyInsaneChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.handleMajorWoundChange = _this.handleMajorWoundChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.handleHealthChange = _this.handleHealthChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.handleMagicChange = _this.handleMagicChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.handleMentalHealthChange = _this.handleMentalHealthChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    return _this;
  }
  /**
   * 
   */


  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(StatusDisplay, [{
    key: "handleTemporaryInsaneChange",
    value: function handleTemporaryInsaneChange(event) {
      this.props.onChange(_typescript_Investigator__WEBPACK_IMPORTED_MODULE_12__["Investigator"].create(_objectSpread({}, this.props.value, {
        mutables: _typescript_Mutables__WEBPACK_IMPORTED_MODULE_14__["Mutables"].create(_objectSpread({}, this.props.value.mutables, {
          temporaryInsane: _typescript_redux__WEBPACK_IMPORTED_MODULE_16__["DataReducer"].reduce(this.props.value.mutables.temporaryInsane, event)
        }))
      })), this.props.value);
    }
    /**
     * 
     */

  }, {
    key: "handleIndefinitelyInsaneChange",
    value: function handleIndefinitelyInsaneChange(event) {
      this.props.onChange(_typescript_Investigator__WEBPACK_IMPORTED_MODULE_12__["Investigator"].create(_objectSpread({}, this.props.value, {
        mutables: _typescript_Mutables__WEBPACK_IMPORTED_MODULE_14__["Mutables"].create(_objectSpread({}, this.props.value, {
          indefinitelyInsane: _typescript_redux__WEBPACK_IMPORTED_MODULE_16__["DataReducer"].reduce(this.props.value.mutables.indefinitelyInsane, event)
        }))
      })), this.props.value);
    }
    /**
     * 
     */

  }, {
    key: "handleMajorWoundChange",
    value: function handleMajorWoundChange(event) {
      this.props.onChange(_typescript_Investigator__WEBPACK_IMPORTED_MODULE_12__["Investigator"].create(_objectSpread({}, this.props.value, {
        mutables: _typescript_Mutables__WEBPACK_IMPORTED_MODULE_14__["Mutables"].create(_objectSpread({}, this.props.value, {
          majorWound: _typescript_redux__WEBPACK_IMPORTED_MODULE_16__["DataReducer"].reduce(this.props.value.mutables.majorWound, event)
        }))
      })), this.props.value);
    }
    /**
     * 
     */

  }, {
    key: "handleHealthChange",
    value: function handleHealthChange(event) {
      this.props.onChange(_typescript_Investigator__WEBPACK_IMPORTED_MODULE_12__["Investigator"].create(_objectSpread({}, this.props.value, {
        mutables: _typescript_Mutables__WEBPACK_IMPORTED_MODULE_14__["Mutables"].create(_objectSpread({}, this.props.value, {
          health: _typescript_redux__WEBPACK_IMPORTED_MODULE_16__["DataReducer"].reduce(this.props.value.mutables.health, event)
        }))
      })), this.props.value);
    }
    /**
     * 
     */

  }, {
    key: "handleMagicChange",
    value: function handleMagicChange(event) {
      this.props.onChange(_typescript_Investigator__WEBPACK_IMPORTED_MODULE_12__["Investigator"].create(_objectSpread({}, this.props.value, {
        mutables: _typescript_Mutables__WEBPACK_IMPORTED_MODULE_14__["Mutables"].create(_objectSpread({}, this.props.value, {
          magic: _typescript_redux__WEBPACK_IMPORTED_MODULE_16__["DataReducer"].reduce(this.props.value.mutables.magic, event)
        }))
      })), this.props.value);
    }
    /**
     * 
     */

  }, {
    key: "handleMentalHealthChange",
    value: function handleMentalHealthChange(event) {
      this.props.onChange(_typescript_Investigator__WEBPACK_IMPORTED_MODULE_12__["Investigator"].create(_objectSpread({}, this.props.value, {
        mutables: _typescript_Mutables__WEBPACK_IMPORTED_MODULE_14__["Mutables"].create(_objectSpread({}, this.props.value, {
          mentalHealth: _typescript_redux__WEBPACK_IMPORTED_MODULE_16__["DataReducer"].reduce(this.props.value.mutables.mentalHealth, event)
        }))
      })), this.props.value);
    }
    /**
     * 
     */

  }, {
    key: "render",
    value: function render() {
      var investigator = this.props.value;
      var mutables = this.props.value.mutables;
      var characteristics = investigator.characteristics;
      return __jsx("div", {
        className: "container-fluid"
      }, __jsx("div", {
        className: "row"
      }, __jsx("div", {
        className: "col-4 col-md-6 col-lg"
      }, __jsx(_form_BoundStatisticField__WEBPACK_IMPORTED_MODULE_15__["BoundStatisticField"], {
        onChange: this.handleHealthChange,
        value: mutables.health,
        maximum: investigator.maximumHP
      }, __jsx(_Label__WEBPACK_IMPORTED_MODULE_8__["Label"], null, "Points de vie"))), __jsx("div", {
        className: "col-4 col-md-6 col-lg"
      }, __jsx(_form_BoundStatisticField__WEBPACK_IMPORTED_MODULE_15__["BoundStatisticField"], {
        onChange: this.handleMentalHealthChange,
        value: mutables.mentalHealth,
        maximum: characteristics.power.sum()
      }, __jsx(_Label__WEBPACK_IMPORTED_MODULE_8__["Label"], null, "Sant\xE9 mentale"))), __jsx("div", {
        className: "col-4 col-md-6 col-lg"
      }, __jsx(_form_BoundStatisticField__WEBPACK_IMPORTED_MODULE_15__["BoundStatisticField"], {
        onChange: this.handleMagicChange,
        value: mutables.magic,
        maximum: investigator.maximumMP
      }, __jsx(_Label__WEBPACK_IMPORTED_MODULE_8__["Label"], null, "Points de magie"))), __jsx("div", {
        className: "col-4 col-md-6 col-lg"
      }, __jsx(_form_BooleanField__WEBPACK_IMPORTED_MODULE_10__["BooleanField"], {
        value: mutables.majorWound,
        onChange: this.handleMajorWoundChange
      }, __jsx(_Label__WEBPACK_IMPORTED_MODULE_8__["Label"], null, "Blessure grave"))), __jsx("div", {
        className: "col-4 col-md-6 col-lg"
      }, __jsx(_form_BooleanField__WEBPACK_IMPORTED_MODULE_10__["BooleanField"], {
        value: mutables.temporaryInsane,
        onChange: this.handleTemporaryInsaneChange
      }, __jsx(_Label__WEBPACK_IMPORTED_MODULE_8__["Label"], null, "Folie temporaire"))), __jsx("div", {
        className: "col-4 col-md-6 col-lg"
      }, __jsx(_form_BooleanField__WEBPACK_IMPORTED_MODULE_10__["BooleanField"], {
        value: mutables.indefinitelyInsane,
        onChange: this.handleIndefinitelyInsaneChange
      }, __jsx(_Label__WEBPACK_IMPORTED_MODULE_8__["Label"], null, "Folie persistante"))), __jsx("div", {
        className: "col-4 col-md-6 col-lg"
      }, __jsx(_CopyField__WEBPACK_IMPORTED_MODULE_11__["CopyField"], {
        value: investigator.impact,
        className: "align-items-center"
      }, __jsx(_Label__WEBPACK_IMPORTED_MODULE_8__["Label"], null, "Impact"), investigator.impact)), __jsx("div", {
        className: "col-4 col-md-6 col-lg"
      }, __jsx(_CopyField__WEBPACK_IMPORTED_MODULE_11__["CopyField"], {
        value: investigator.carrure.toString(),
        className: "align-items-center"
      }, __jsx(_Label__WEBPACK_IMPORTED_MODULE_8__["Label"], null, "Carrure"), investigator.carrure)), __jsx("div", {
        className: "col-4 col-md-6 col-lg"
      }, __jsx(_CopyField__WEBPACK_IMPORTED_MODULE_11__["CopyField"], {
        value: investigator.movement.toString(),
        className: "align-items-center"
      }, __jsx(_Label__WEBPACK_IMPORTED_MODULE_8__["Label"], null, "Mouvement"), __jsx(_MovementRenderer__WEBPACK_IMPORTED_MODULE_9__["MovementRenderer"], {
        value: investigator.carrure
      })))));
    }
  }]);

  return StatusDisplay;
}(react__WEBPACK_IMPORTED_MODULE_7__["PureComponent"]);
/**
 * 
 */

StatusDisplay.defaultProps = {
  /**
   * 
   */
  onChange: _typescript_utils__WEBPACK_IMPORTED_MODULE_13__["Empty"].callback
};

(function (_StatusDisplay) {})(StatusDisplay || (StatusDisplay = {}));

/***/ })

})
//# sourceMappingURL=index.js.2c48382e5b176f9c1669.hot-update.js.map
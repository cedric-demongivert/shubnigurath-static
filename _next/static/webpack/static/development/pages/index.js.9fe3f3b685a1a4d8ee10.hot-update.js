webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/CharacteristicSetRenderer.tsx":
/*!**************************************************!*\
  !*** ./components/CharacteristicSetRenderer.tsx ***!
  \**************************************************/
/*! exports provided: CharacteristicSetRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacteristicSetRenderer", function() { return CharacteristicSetRenderer; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _typescript_Investigator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../typescript/Investigator */ "./typescript/Investigator.ts");
/* harmony import */ var _form_ValueField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./form/ValueField */ "./components/form/ValueField.tsx");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Label */ "./components/Label.tsx");
/* harmony import */ var _ValueRenderer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ValueRenderer */ "./components/ValueRenderer.tsx");
/* harmony import */ var _CopyField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./CopyField */ "./components/CopyField.tsx");
/* harmony import */ var _typescript_Mutables__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../typescript/Mutables */ "./typescript/Mutables.ts");
/* harmony import */ var _typescript_redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../typescript/redux */ "./typescript/redux/index.ts");







var _jsxFileName = "D:\\development\\rpg\\shubgath\\components\\CharacteristicSetRenderer.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









/**
 * 
 */

var CharacteristicSetRenderer = /*#__PURE__*/function (_PureComponent) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(CharacteristicSetRenderer, _PureComponent);

  var _super = _createSuper(CharacteristicSetRenderer);

  /**
   * 
   */
  function CharacteristicSetRenderer(properties) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CharacteristicSetRenderer);

    _this = _super.call(this, properties);
    _this.handleLuckChange = _this.handleLuckChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.handleLuckIncrement = _this.handleLuckIncrement.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    return _this;
  }
  /**
   * 
   */


  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(CharacteristicSetRenderer, [{
    key: "handleLuckChange",
    value: function handleLuckChange(event) {
      if (this.props.onChange) {
        this.props.onChange(_typescript_Investigator__WEBPACK_IMPORTED_MODULE_8__["Investigator"].create(_objectSpread({}, this.props.value, {
          mutables: _typescript_Mutables__WEBPACK_IMPORTED_MODULE_13__["Mutables"].create(_objectSpread({}, this.props.value.mutables, {
            luck: _typescript_redux__WEBPACK_IMPORTED_MODULE_14__["DataReducer"].reduce(this.props.value.mutables.luck, event)
          }))
        })), this.props.value);
      }
    }
    /**
     * 
     */

  }, {
    key: "handleLuckIncrement",
    value: function handleLuckIncrement(event) {
      console.log(event);
    }
    /**
     * @see React.Component.render
     */

  }, {
    key: "render",
    value: function render() {
      var characteristics = this.props.value.characteristics;
      var mutables = this.props.value.mutables;
      return __jsx("div", {
        className: "container-fluid"
      }, __jsx("div", {
        className: "row"
      }, __jsx("div", {
        className: "col-4 col-md-6"
      }, __jsx(_CopyField__WEBPACK_IMPORTED_MODULE_12__["CopyField"], {
        value: characteristics.appearance.toString(),
        className: "align-items-center"
      }, __jsx(_Label__WEBPACK_IMPORTED_MODULE_10__["Label"], null, "Apparence"), __jsx(_ValueRenderer__WEBPACK_IMPORTED_MODULE_11__["ValueRenderer"], null, characteristics.appearance))), __jsx("div", {
        className: "col-4 col-md-6"
      }, __jsx(_CopyField__WEBPACK_IMPORTED_MODULE_12__["CopyField"], {
        value: characteristics.education.toString(),
        className: "align-items-center"
      }, __jsx(_Label__WEBPACK_IMPORTED_MODULE_10__["Label"], null, "\xC9ducation"), __jsx(_ValueRenderer__WEBPACK_IMPORTED_MODULE_11__["ValueRenderer"], null, characteristics.education))), __jsx("div", {
        className: "col-4 col-md-6"
      }, __jsx(_CopyField__WEBPACK_IMPORTED_MODULE_12__["CopyField"], {
        value: characteristics.power.toString(),
        className: "align-items-center"
      }, __jsx(_Label__WEBPACK_IMPORTED_MODULE_10__["Label"], null, "Pouvoir"), __jsx(_ValueRenderer__WEBPACK_IMPORTED_MODULE_11__["ValueRenderer"], null, characteristics.power))), __jsx("div", {
        className: "col-4 col-md-6"
      }, __jsx(_CopyField__WEBPACK_IMPORTED_MODULE_12__["CopyField"], {
        value: characteristics.constitution.toString(),
        className: "align-items-center"
      }, __jsx(_Label__WEBPACK_IMPORTED_MODULE_10__["Label"], null, "Constitution"), __jsx(_ValueRenderer__WEBPACK_IMPORTED_MODULE_11__["ValueRenderer"], null, characteristics.constitution))), __jsx("div", {
        className: "col-4 col-md-6"
      }, __jsx(_CopyField__WEBPACK_IMPORTED_MODULE_12__["CopyField"], {
        value: characteristics.strength.toString(),
        className: "align-items-center"
      }, __jsx(_Label__WEBPACK_IMPORTED_MODULE_10__["Label"], null, "Force"), __jsx(_ValueRenderer__WEBPACK_IMPORTED_MODULE_11__["ValueRenderer"], null, characteristics.strength))), __jsx("div", {
        className: "col-4 col-md-6"
      }, __jsx(_CopyField__WEBPACK_IMPORTED_MODULE_12__["CopyField"], {
        value: characteristics.size.toString(),
        className: "align-items-center"
      }, __jsx(_Label__WEBPACK_IMPORTED_MODULE_10__["Label"], null, "Taille"), __jsx(_ValueRenderer__WEBPACK_IMPORTED_MODULE_11__["ValueRenderer"], null, characteristics.size))), __jsx("div", {
        className: "col-4 col-md-6"
      }, __jsx(_CopyField__WEBPACK_IMPORTED_MODULE_12__["CopyField"], {
        value: characteristics.dexterity.toString(),
        className: "align-items-center"
      }, __jsx(_Label__WEBPACK_IMPORTED_MODULE_10__["Label"], null, "Dext\xE9rit\xE9"), __jsx(_ValueRenderer__WEBPACK_IMPORTED_MODULE_11__["ValueRenderer"], null, characteristics.dexterity))), __jsx("div", {
        className: "col-4 col-md-6"
      }, __jsx(_CopyField__WEBPACK_IMPORTED_MODULE_12__["CopyField"], {
        value: characteristics.intelligence.toString(),
        className: "align-items-center"
      }, __jsx(_Label__WEBPACK_IMPORTED_MODULE_10__["Label"], null, "Intelligence"), __jsx(_ValueRenderer__WEBPACK_IMPORTED_MODULE_11__["ValueRenderer"], null, characteristics.intelligence))), __jsx("div", {
        className: "col-4 col-md-6"
      }, __jsx(_form_ValueField__WEBPACK_IMPORTED_MODULE_9__["ValueField"], {
        maximum: 100,
        minimum: 0,
        onChange: this.handleLuckChange,
        value: mutables.luck
      }, __jsx(_Label__WEBPACK_IMPORTED_MODULE_10__["Label"], null, "Chance")))));
    }
  }]);

  return CharacteristicSetRenderer;
}(react__WEBPACK_IMPORTED_MODULE_7__["PureComponent"]);
/**
 * 
 */

(function (_CharacteristicSetRenderer) {})(CharacteristicSetRenderer || (CharacteristicSetRenderer = {}));

/***/ })

})
//# sourceMappingURL=index.js.9fe3f3b685a1a4d8ee10.hot-update.js.map
webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./typescript/Value.ts":
/*!*****************************!*\
  !*** ./typescript/Value.ts ***!
  \*****************************/
/*! exports provided: Value */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Value", function() { return Value; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var _Modifier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Modifier */ "./typescript/Modifier.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./typescript/utils/index.ts");




var _Symbol$toPrimitive;

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




/**
 * 
 */

var VANILLA_PROPERTIES = {
  base: 0
};

function vanilla(value) {
  VANILLA_PROPERTIES.base = value;
  return VANILLA_PROPERTIES;
}
/**
 * 
 */


_Symbol$toPrimitive = Symbol.toPrimitive;
var Value = /*#__PURE__*/function () {
  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Value, null, [{
    key: "create",

    /**
     * 
     */

    /**
     * 
     */

    /**
     * 
     */

    /**
     * 
     */

    /**
     * 
     */
    value: function create(properties) {
      if (properties == null) {
        return Value.EMPTY;
      } else if (typeof properties === 'number') {
        return properties === 0 ? Value.ZERO : new Value(vanilla(properties));
      } else {
        return new Value(properties);
      }
    }
    /**
     * 
     */

  }, {
    key: "zero",
    value: function zero() {
      return Value.ZERO;
    }
    /**
     * 
     */

  }, {
    key: "empty",
    value: function empty() {
      return Value.EMPTY;
    }
    /**
     * 
     */

  }]);

  function Value() {
    var properties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _utils__WEBPACK_IMPORTED_MODULE_5__["Empty"].OBJECT;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Value);

    this.base = void 0;
    this.modifiers = void 0;
    this.base = properties.base;
    this.modifiers = properties.modifiers || Object(immutable__WEBPACK_IMPORTED_MODULE_3__["List"])();
  }
  /**
   * 
   */


  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Value, [{
    key: "levelup",
    value: function levelup() {
      var sum = this.sum();

      if (sum >= 99) {
        return this;
      }

      var roll = Math.random() * 100 + 1 << 0;

      if (roll > sum) {
        var upgrade = Math.random() * 10 + 1 << 0;
        return Value.create({
          base: this.base,
          modifiers: immutable__WEBPACK_IMPORTED_MODULE_3__["List"].of.apply(immutable__WEBPACK_IMPORTED_MODULE_3__["List"], Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.modifiers).concat([_Modifier__WEBPACK_IMPORTED_MODULE_4__["Modifier"].create({
            value: Math.min(upgrade, 99 - sum),
            label: 'Gain d\'expérience (' + roll + ' vs ' + sum + ')'
          })]))
        });
      } else {
        return this;
      }
    }
    /**
     * 
     */

  }, {
    key: "sum",
    value: function sum() {
      var result = this.base || 0;

      var _iterator = _createForOfIteratorHelper(this.modifiers),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var modifier = _step.value;
          result += modifier.value;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return result;
    }
    /**
     * 
     */

  }, {
    key: "half",
    value: function half() {
      return this.sum() >> 1;
    }
    /**
     * 
     */

  }, {
    key: "fifth",
    value: function fifth() {
      return this.sum() / 5 << 0;
    }
    /**
     * 
     */

  }, {
    key: "toString",
    value: function toString() {
      return this.sum() + ' / ' + this.half() + ' / ' + this.fifth();
    }
    /**
     * 
     */

  }, {
    key: "equals",
    value: function equals(other) {
      if (other == null) return false;
      if (other === this) return true;

      if (other instanceof Value) {
        return other.base === this.base && other.modifiers.equals(this.modifiers);
      }
    }
    /**
     * 
     */

  }, {
    key: _Symbol$toPrimitive,
    value: function value() {
      return this.sum();
    }
  }]);

  return Value;
}();
/**
 * 
 */

Value.ZERO = new Value(vanilla(0));
Value.EMPTY = new Value();

(function (_Value) {})(Value || (Value = {}));

/***/ })

})
//# sourceMappingURL=index.js.52cc2a547ee1392b4aa5.hot-update.js.map
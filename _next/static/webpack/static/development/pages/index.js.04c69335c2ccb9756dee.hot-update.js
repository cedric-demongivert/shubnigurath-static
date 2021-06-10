webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./typescript/SkillSet.ts":
/*!********************************!*\
  !*** ./typescript/SkillSet.ts ***!
  \********************************/
/*! exports provided: SkillSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillSet", function() { return SkillSet; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var _data_Pair__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/Pair */ "./typescript/data/Pair.ts");
/* harmony import */ var _data_bissect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data/bissect */ "./typescript/data/bissect.ts");
/* harmony import */ var _Skill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Skill */ "./typescript/Skill.ts");
/* harmony import */ var _Value__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Value */ "./typescript/Value.ts");



function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }






/**
 * 
 */

function comparePair(left, right) {
  return _Skill__WEBPACK_IMPORTED_MODULE_5__["Skill"].compare(left.left, right.left);
}
/**
 * 
 */


function compareSkillWithPair(left, right) {
  return _Skill__WEBPACK_IMPORTED_MODULE_5__["Skill"].compare(left, right.left);
}
/**
 * 
 */


var SkillSet = /*#__PURE__*/function () {
  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SkillSet, null, [{
    key: "empty",

    /**
     * 
     */

    /**
     * 
     */

    /**
     * 
     */
    value: function empty() {
      return SkillSet.EMPTY;
    }
    /**
     * 
     */

  }, {
    key: "create",
    value: function create(entries) {
      var result = Object(immutable__WEBPACK_IMPORTED_MODULE_2__["List"])().asMutable();

      var _iterator = _createForOfIteratorHelper(entries),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var entry = _step.value;
          result.push(entry);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return result.size > 0 ? new SkillSet(result.sort(comparePair).asImmutable()) : SkillSet.EMPTY;
    }
    /**
     * 
     */

  }, {
    key: "wrap",
    value: function wrap(entries) {
      return new SkillSet(entries);
    }
    /**
     * 
     */

  }]);

  function SkillSet(entries) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SkillSet);

    this.entries = void 0;
    this.entries = entries;
  }
  /**
   * 
   */


  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SkillSet, [{
    key: "indexOf",
    value: function indexOf(skill) {
      return _data_bissect__WEBPACK_IMPORTED_MODULE_4__["bissect"].list(this.entries, skill, compareSkillWithPair);
    }
    /**
     * 
     */

  }, {
    key: "has",
    value: function has(skill) {
      return this.indexOf(skill) > -1;
    }
    /**
     * 
     */

  }, {
    key: "get",
    value: function get(skill) {
      var index = this.indexOf(skill);
      return index < 0 ? _Value__WEBPACK_IMPORTED_MODULE_6__["Value"].zero() : this.entries.get(index).right;
    }
    /**
     * 
     */

  }, {
    key: "delete",
    value: function _delete(skill) {
      var index = this.indexOf(skill);

      if (index < 0) {
        return this;
      } else {
        return new SkillSet(this.entries["delete"](index));
      }
    }
    /**
     * 
     */

  }, {
    key: "minus",
    value: function minus(other) {
      var result = Object(immutable__WEBPACK_IMPORTED_MODULE_2__["List"])().asMutable();
      var ourCursor = 0;
      var otherCursor = 0;
      var ourEntries = this.entries;
      var otherEntries = other.entries;

      while (ourCursor < ourEntries.size) {
        var ourEntry = ourEntries.get(ourCursor);

        while (otherCursor < otherEntries.size && comparePair(otherEntries.get(otherCursor), ourEntry) < 0) {
          otherCursor += 1;
        }

        if (otherCursor < otherEntries.size && comparePair(otherEntries.get(otherCursor), ourEntry) === 0) {
          otherCursor += 1;
        } else {
          result.push(ourEntry);
        }

        ourCursor += 1;
      }

      return new SkillSet(result.asImmutable());
    }
    /**
     * 
     */

  }, {
    key: "assign",
    value: function assign(other) {
      var result = Object(immutable__WEBPACK_IMPORTED_MODULE_2__["List"])().asMutable();
      var ourCursor = 0;
      var otherCursor = 0;
      var ourEntries = this.entries;
      var otherEntries = other.entries;

      while (ourCursor < ourEntries.size) {
        var ourEntry = ourEntries.get(ourCursor);

        while (otherCursor < otherEntries.size && comparePair(otherEntries.get(otherCursor), ourEntry) < 0) {
          result.push(otherEntries.get(otherCursor));
          otherCursor += 1;
        }

        if (otherCursor < otherEntries.size && comparePair(otherEntries.get(otherCursor), ourEntry) === 0) {
          result.push(otherEntries.get(otherCursor));
          otherCursor += 1;
        } else {
          result.push(ourEntry);
        }

        ourCursor += 1;
      }

      while (otherCursor < otherEntries.size) {
        result.push(otherEntries.get(otherCursor));
        otherCursor += 1;
      }

      return new SkillSet(result.asImmutable());
    }
    /**
     * 
     */

  }, {
    key: "inherit",
    value: function inherit(other) {
      var result = Object(immutable__WEBPACK_IMPORTED_MODULE_2__["List"])().asMutable();
      var ourCursor = 0;
      var otherCursor = 0;
      var ourEntries = this.entries;
      var otherEntries = other.entries;

      while (ourCursor < ourEntries.size) {
        var ourEntry = ourEntries.get(ourCursor);

        while (otherCursor < otherEntries.size && comparePair(otherEntries.get(otherCursor), ourEntry) < 0) {
          otherCursor += 1;
        }

        if (otherCursor < otherEntries.size && comparePair(otherEntries.get(otherCursor), ourEntry) === 0) {
          if (ourEntry.right.base == null) {
            result.push(_data_Pair__WEBPACK_IMPORTED_MODULE_3__["Pair"].create(ourEntry.left, _Value__WEBPACK_IMPORTED_MODULE_6__["Value"].create({
              base: otherEntries.get(otherCursor).right.base,
              modifiers: ourEntry.right.modifiers
            })));
          } else {
            result.push(ourEntry);
          }

          otherCursor += 1;
        } else {
          result.push(ourEntry);
        }

        ourCursor += 1;
      }

      return new SkillSet(result.asImmutable());
    }
    /**
     * 
     */

  }, {
    key: "equals",
    value: function equals(other) {
      if (other == null) return false;
      if (other === this) return true;

      if (other instanceof SkillSet) {
        return other.entries.equals(this.entries);
      }

      return false;
    }
  }]);

  return SkillSet;
}();
SkillSet.EMPTY = new SkillSet(Object(immutable__WEBPACK_IMPORTED_MODULE_2__["List"])());

/***/ })

})
//# sourceMappingURL=index.js.04c69335c2ccb9756dee.hot-update.js.map
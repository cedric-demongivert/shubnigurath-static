webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./typescript/Investigator.ts":
/*!************************************!*\
  !*** ./typescript/Investigator.ts ***!
  \************************************/
/*! exports provided: Investigator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Investigator", function() { return Investigator; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Summary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Summary */ "./typescript/Summary.ts");
/* harmony import */ var _CharacteristicSet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CharacteristicSet */ "./typescript/CharacteristicSet.ts");
/* harmony import */ var _SkillSet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SkillSet */ "./typescript/SkillSet.ts");
/* harmony import */ var _Value__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Value */ "./typescript/Value.ts");
/* harmony import */ var _Modifier__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Modifier */ "./typescript/Modifier.ts");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./data */ "./typescript/data/index.ts");
/* harmony import */ var _Skill__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Skill */ "./typescript/Skill.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils */ "./typescript/utils/index.ts");
/* harmony import */ var _Mutables__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Mutables */ "./typescript/Mutables.ts");












/**
 * 
 */

var Investigator = /*#__PURE__*/function () {
  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Investigator, [{
    key: "maximumHP",

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

    /**
     * 
     */
    get: function get() {
      var characteristics = this.characteristics;
      var size = characteristics.size.sum();
      var constitution = characteristics.constitution.sum();
      return (size + constitution) / 10 << 0;
    }
    /**
     * 
     */

  }, {
    key: "maximumMP",
    get: function get() {
      return this.characteristics.power.fifth();
    }
    /**
     * 
     */

  }, {
    key: "movement",
    get: function get() {
      var characteristics = this.characteristics;
      var size = characteristics.size.sum();
      var strength = characteristics.strength.sum();
      var dexterity = characteristics.dexterity.sum();
      var age = this.summary.age;
      var base = 0;

      if (strength < size && dexterity < size) {
        base = 7;
      } else if (strength > size && dexterity > size) {
        base = 9;
      } else {
        base = 8;
      }

      if (age > 39) {
        return _Value__WEBPACK_IMPORTED_MODULE_5__["Value"].create({
          base: base,
          modifiers: immutable__WEBPACK_IMPORTED_MODULE_7__["List"].of(_Modifier__WEBPACK_IMPORTED_MODULE_6__["Modifier"].create({
            value: Math.max((age / 10 << 0) - 3, 0),
            label: 'Âge supérieur à ' + (age / 10 << 0).toString() + ' ans'
          }))
        });
      } else {
        return _Value__WEBPACK_IMPORTED_MODULE_5__["Value"].create(base);
      }
    }
    /**
     * 
     */

  }, {
    key: "impact",
    get: function get() {
      var characteristics = this.characteristics;
      var size = characteristics.size.sum();
      var strength = characteristics.strength.sum();
      var score = size + strength;

      if (score < 65) {
        return '-2';
      } else if (score < 85) {
        return '-1';
      } else if (score < 125) {
        return '0';
      } else if (score < 165) {
        return '+1D4';
      } else if (score < 205) {
        return '+1D6';
      } else {
        return '+' + (2 + (score - 205) / 80 << 0) + 'D6';
      }
    }
    /**
     * 
     */

  }, {
    key: "carrure",
    get: function get() {
      var characteristics = this.characteristics;
      var size = characteristics.size.sum();
      var strength = characteristics.strength.sum();
      var score = size + strength;

      if (score < 65) {
        return -2;
      } else if (score < 85) {
        return -1;
      } else if (score < 125) {
        return 0;
      } else if (score < 165) {
        return +1;
      } else if (score < 205) {
        return +2;
      } else {
        return 2 + (score - 205) / 80 << 0;
      }
    }
    /**
     * 
     */

  }], [{
    key: "empty",

    /**
     * 
     */
    value: function empty() {
      return Investigator.EMPTY;
    }
    /**
     * 
     */

  }, {
    key: "create",
    value: function create() {
      var properties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _utils__WEBPACK_IMPORTED_MODULE_10__["Empty"].OBJECT;
      return properties === _utils__WEBPACK_IMPORTED_MODULE_10__["Empty"].OBJECT ? Investigator.EMPTY : new Investigator(properties);
    }
    /**
     * 
     */

  }]);

  function Investigator() {
    var properties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _utils__WEBPACK_IMPORTED_MODULE_10__["Empty"].OBJECT;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Investigator);

    this.summary = void 0;
    this.characteristics = void 0;
    this.skills = void 0;
    this.updates = void 0;
    this.mutables = void 0;
    this.summary = properties.summary || _Summary__WEBPACK_IMPORTED_MODULE_2__["Summary"].empty();
    this.characteristics = properties.characteristics || _CharacteristicSet__WEBPACK_IMPORTED_MODULE_3__["CharacteristicSet"].empty();
    this.skills = properties.skills || _SkillSet__WEBPACK_IMPORTED_MODULE_4__["SkillSet"].empty();
    this.mutables = properties.mutables || _Mutables__WEBPACK_IMPORTED_MODULE_11__["Mutables"].fromInvestigator(this);
    this.updates = properties.updates || _SkillSet__WEBPACK_IMPORTED_MODULE_4__["SkillSet"].empty();
  }
  /**
   * 
   */


  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Investigator, [{
    key: "computeDefaultSkills",
    value: function computeDefaultSkills() {
      return _SkillSet__WEBPACK_IMPORTED_MODULE_4__["SkillSet"].create([_data__WEBPACK_IMPORTED_MODULE_8__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_9__["Skill"].ACCOUNTING, _Value__WEBPACK_IMPORTED_MODULE_5__["Value"].create(5)), _data__WEBPACK_IMPORTED_MODULE_8__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_9__["Skill"].ANTHROPOLOGY, _Value__WEBPACK_IMPORTED_MODULE_5__["Value"].create(1)), _data__WEBPACK_IMPORTED_MODULE_8__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_9__["Skill"].APPRAISE, _Value__WEBPACK_IMPORTED_MODULE_5__["Value"].create(5)), _data__WEBPACK_IMPORTED_MODULE_8__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_9__["Skill"].ARCHAEOLOGY, _Value__WEBPACK_IMPORTED_MODULE_5__["Value"].create(1)), _data__WEBPACK_IMPORTED_MODULE_8__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_9__["Skill"].CRAFT, _Value__WEBPACK_IMPORTED_MODULE_5__["Value"].create(5)), _data__WEBPACK_IMPORTED_MODULE_8__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_9__["Skill"].CHARM, _Value__WEBPACK_IMPORTED_MODULE_5__["Value"].create(15)), _data__WEBPACK_IMPORTED_MODULE_8__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_9__["Skill"].CLIMB, _Value__WEBPACK_IMPORTED_MODULE_5__["Value"].create(20)), _data__WEBPACK_IMPORTED_MODULE_8__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_9__["Skill"].CREDIT_RATING, _Value__WEBPACK_IMPORTED_MODULE_5__["Value"].create(0)), _data__WEBPACK_IMPORTED_MODULE_8__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_9__["Skill"].CTHULHU_MYTHOS, _Value__WEBPACK_IMPORTED_MODULE_5__["Value"].create(0)), _data__WEBPACK_IMPORTED_MODULE_8__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_9__["Skill"].DISGUISE, _Value__WEBPACK_IMPORTED_MODULE_5__["Value"].create(5)), _data__WEBPACK_IMPORTED_MODULE_8__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_9__["Skill"].DODGE, _Value__WEBPACK_IMPORTED_MODULE_5__["Value"].create(this.characteristics.dexterity.half())), _data__WEBPACK_IMPORTED_MODULE_8__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_9__["Skill"].DRIVE_AUTO, _Value__WEBPACK_IMPORTED_MODULE_5__["Value"].create(20)), _data__WEBPACK_IMPORTED_MODULE_8__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_9__["Skill"].ELECTRIC_REPAIR, _Value__WEBPACK_IMPORTED_MODULE_5__["Value"].create(10)), _data__WEBPACK_IMPORTED_MODULE_8__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_9__["Skill"].FAST_TALK, _Value__WEBPACK_IMPORTED_MODULE_5__["Value"].create(5)), _data__WEBPACK_IMPORTED_MODULE_8__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_9__["Skill"].FIGHTING, _Value__WEBPACK_IMPORTED_MODULE_5__["Value"].create(25)), _data__WEBPACK_IMPORTED_MODULE_8__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_9__["Skill"].HANDGUNS, _Value__WEBPACK_IMPORTED_MODULE_5__["Value"].create(20)), _data__WEBPACK_IMPORTED_MODULE_8__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_9__["Skill"].GUNS, _Value__WEBPACK_IMPORTED_MODULE_5__["Value"].create(25)), _data__WEBPACK_IMPORTED_MODULE_8__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_9__["Skill"].SUBMACHINE_GUNS, _Value__WEBPACK_IMPORTED_MODULE_5__["Value"].create(15)), _data__WEBPACK_IMPORTED_MODULE_8__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_9__["Skill"].FIRST_AID, _Value__WEBPACK_IMPORTED_MODULE_5__["Value"].create(30)), _data__WEBPACK_IMPORTED_MODULE_8__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_9__["Skill"].HISTORY, _Value__WEBPACK_IMPORTED_MODULE_5__["Value"].create(5)), _data__WEBPACK_IMPORTED_MODULE_8__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_9__["Skill"].INTIMIDATE, _Value__WEBPACK_IMPORTED_MODULE_5__["Value"].create(15)), _data__WEBPACK_IMPORTED_MODULE_8__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_9__["Skill"].JUMP, _Value__WEBPACK_IMPORTED_MODULE_5__["Value"].create(20)), _data__WEBPACK_IMPORTED_MODULE_8__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_9__["Skill"].NATIVE_LANGUAGE, _Value__WEBPACK_IMPORTED_MODULE_5__["Value"].create(this.characteristics.education.sum())), _data__WEBPACK_IMPORTED_MODULE_8__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_9__["Skill"].OTHER_LANGUAGE, _Value__WEBPACK_IMPORTED_MODULE_5__["Value"].create(1)), _data__WEBPACK_IMPORTED_MODULE_8__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_9__["Skill"].LAW, _Value__WEBPACK_IMPORTED_MODULE_5__["Value"].create(5)), _data__WEBPACK_IMPORTED_MODULE_8__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_9__["Skill"].LIBRARY_USE, _Value__WEBPACK_IMPORTED_MODULE_5__["Value"].create(20)), _data__WEBPACK_IMPORTED_MODULE_8__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_9__["Skill"].LISTEN, _Value__WEBPACK_IMPORTED_MODULE_5__["Value"].create(20)), _data__WEBPACK_IMPORTED_MODULE_8__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_9__["Skill"].LOCKSMITH, _Value__WEBPACK_IMPORTED_MODULE_5__["Value"].create(1)), _data__WEBPACK_IMPORTED_MODULE_8__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_9__["Skill"].MECHANICAL_REPAIR, _Value__WEBPACK_IMPORTED_MODULE_5__["Value"].create(10)), _data__WEBPACK_IMPORTED_MODULE_8__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_9__["Skill"].MEDICINE, _Value__WEBPACK_IMPORTED_MODULE_5__["Value"].create(1)), _data__WEBPACK_IMPORTED_MODULE_8__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_9__["Skill"].NATURAL_WORLD, _Value__WEBPACK_IMPORTED_MODULE_5__["Value"].create(10)), _data__WEBPACK_IMPORTED_MODULE_8__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_9__["Skill"].NAVIGATE, _Value__WEBPACK_IMPORTED_MODULE_5__["Value"].create(10)), _data__WEBPACK_IMPORTED_MODULE_8__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_9__["Skill"].OCCULT, _Value__WEBPACK_IMPORTED_MODULE_5__["Value"].create(5)), _data__WEBPACK_IMPORTED_MODULE_8__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_9__["Skill"].OPERATE_HEAVY_MACHINERY, _Value__WEBPACK_IMPORTED_MODULE_5__["Value"].create(1)), _data__WEBPACK_IMPORTED_MODULE_8__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_9__["Skill"].PERSUADE, _Value__WEBPACK_IMPORTED_MODULE_5__["Value"].create(10)), _data__WEBPACK_IMPORTED_MODULE_8__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_9__["Skill"].PILOT, _Value__WEBPACK_IMPORTED_MODULE_5__["Value"].create(1)), _data__WEBPACK_IMPORTED_MODULE_8__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_9__["Skill"].PSYCHOLOGY, _Value__WEBPACK_IMPORTED_MODULE_5__["Value"].create(10)), _data__WEBPACK_IMPORTED_MODULE_8__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_9__["Skill"].PSYCHOANALYSIS, _Value__WEBPACK_IMPORTED_MODULE_5__["Value"].create(1)), _data__WEBPACK_IMPORTED_MODULE_8__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_9__["Skill"].RIDE, _Value__WEBPACK_IMPORTED_MODULE_5__["Value"].create(5)), _data__WEBPACK_IMPORTED_MODULE_8__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_9__["Skill"].SCIENCE, _Value__WEBPACK_IMPORTED_MODULE_5__["Value"].create(1)), _data__WEBPACK_IMPORTED_MODULE_8__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_9__["Skill"].SLEIGHT_OF_HAND, _Value__WEBPACK_IMPORTED_MODULE_5__["Value"].create(10)), _data__WEBPACK_IMPORTED_MODULE_8__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_9__["Skill"].SPOT_HIDDEN, _Value__WEBPACK_IMPORTED_MODULE_5__["Value"].create(25)), _data__WEBPACK_IMPORTED_MODULE_8__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_9__["Skill"].STEALTH, _Value__WEBPACK_IMPORTED_MODULE_5__["Value"].create(20)), _data__WEBPACK_IMPORTED_MODULE_8__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_9__["Skill"].SURVIVAL, _Value__WEBPACK_IMPORTED_MODULE_5__["Value"].create(10)), _data__WEBPACK_IMPORTED_MODULE_8__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_9__["Skill"].SWIM, _Value__WEBPACK_IMPORTED_MODULE_5__["Value"].create(20)), _data__WEBPACK_IMPORTED_MODULE_8__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_9__["Skill"].THROW, _Value__WEBPACK_IMPORTED_MODULE_5__["Value"].create(20)), _data__WEBPACK_IMPORTED_MODULE_8__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_9__["Skill"].TRACK, _Value__WEBPACK_IMPORTED_MODULE_5__["Value"].create(10))]);
    }
    /**
     * 
     */

  }, {
    key: "equals",
    value: function equals(other) {
      if (other == null) return false;
      if (other === this) return true;

      if (other instanceof Investigator) {
        return other.summary.equals(this.summary) && other.characteristics.equals(this.characteristics) && other.skills.equals(this.skills);
      }

      return false;
    }
  }]);

  return Investigator;
}();
Investigator.EMPTY = new Investigator();

(function (_Investigator) {})(Investigator || (Investigator = {}));

/***/ })

})
//# sourceMappingURL=index.js.b209cf49eadd9e75fc89.hot-update.js.map
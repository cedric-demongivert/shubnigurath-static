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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Summary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Summary */ "./typescript/Summary.ts");
/* harmony import */ var _CharacteristicSet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CharacteristicSet */ "./typescript/CharacteristicSet.ts");
/* harmony import */ var _SkillSet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SkillSet */ "./typescript/SkillSet.ts");
/* harmony import */ var _Value__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Value */ "./typescript/Value.ts");
/* harmony import */ var _Modifier__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Modifier */ "./typescript/Modifier.ts");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./data */ "./typescript/data/index.ts");
/* harmony import */ var _Skill__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Skill */ "./typescript/Skill.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils */ "./typescript/utils/index.ts");
/* harmony import */ var _Mutables__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Mutables */ "./typescript/Mutables.ts");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











/**
 * 
 */

var Investigator = /*#__PURE__*/function () {
  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Investigator, [{
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
        return _Value__WEBPACK_IMPORTED_MODULE_6__["Value"].create({
          base: base,
          modifiers: immutable__WEBPACK_IMPORTED_MODULE_8__["List"].of(_Modifier__WEBPACK_IMPORTED_MODULE_7__["Modifier"].create({
            value: Math.max((age / 10 << 0) - 3, 0),
            label: 'Âge supérieur à ' + (age / 10 << 0).toString() + ' ans'
          }))
        });
      } else {
        return _Value__WEBPACK_IMPORTED_MODULE_6__["Value"].create(base);
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
      var properties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _utils__WEBPACK_IMPORTED_MODULE_11__["Empty"].OBJECT;
      return properties === _utils__WEBPACK_IMPORTED_MODULE_11__["Empty"].OBJECT ? Investigator.EMPTY : new Investigator(properties);
    }
    /**
     * 
     */

  }]);

  function Investigator() {
    var properties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _utils__WEBPACK_IMPORTED_MODULE_11__["Empty"].OBJECT;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Investigator);

    this.summary = void 0;
    this.characteristics = void 0;
    this.skills = void 0;
    this.updates = void 0;
    this.mutables = void 0;
    this.summary = properties.summary || _Summary__WEBPACK_IMPORTED_MODULE_3__["Summary"].empty();
    this.characteristics = properties.characteristics || _CharacteristicSet__WEBPACK_IMPORTED_MODULE_4__["CharacteristicSet"].empty();
    this.skills = properties.skills || _SkillSet__WEBPACK_IMPORTED_MODULE_5__["SkillSet"].empty();
    this.mutables = properties.mutables || _Mutables__WEBPACK_IMPORTED_MODULE_12__["Mutables"].fromInvestigator(this);
    this.updates = properties.updates || _SkillSet__WEBPACK_IMPORTED_MODULE_5__["SkillSet"].empty();
  }
  /**
   * 
   */


  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Investigator, [{
    key: "computeDefaultSkills",
    value: function computeDefaultSkills() {
      return _SkillSet__WEBPACK_IMPORTED_MODULE_5__["SkillSet"].create([_data__WEBPACK_IMPORTED_MODULE_9__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_10__["Skill"].ACCOUNTING, _Value__WEBPACK_IMPORTED_MODULE_6__["Value"].create(5)), _data__WEBPACK_IMPORTED_MODULE_9__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_10__["Skill"].ANTHROPOLOGY, _Value__WEBPACK_IMPORTED_MODULE_6__["Value"].create(1)), _data__WEBPACK_IMPORTED_MODULE_9__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_10__["Skill"].APPRAISE, _Value__WEBPACK_IMPORTED_MODULE_6__["Value"].create(5)), _data__WEBPACK_IMPORTED_MODULE_9__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_10__["Skill"].ARCHAEOLOGY, _Value__WEBPACK_IMPORTED_MODULE_6__["Value"].create(1)), _data__WEBPACK_IMPORTED_MODULE_9__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_10__["Skill"].CRAFT, _Value__WEBPACK_IMPORTED_MODULE_6__["Value"].create(5)), _data__WEBPACK_IMPORTED_MODULE_9__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_10__["Skill"].CHARM, _Value__WEBPACK_IMPORTED_MODULE_6__["Value"].create(15)), _data__WEBPACK_IMPORTED_MODULE_9__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_10__["Skill"].CLIMB, _Value__WEBPACK_IMPORTED_MODULE_6__["Value"].create(20)), _data__WEBPACK_IMPORTED_MODULE_9__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_10__["Skill"].CREDIT_RATING, _Value__WEBPACK_IMPORTED_MODULE_6__["Value"].create(0)), _data__WEBPACK_IMPORTED_MODULE_9__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_10__["Skill"].CTHULHU_MYTHOS, _Value__WEBPACK_IMPORTED_MODULE_6__["Value"].create(0)), _data__WEBPACK_IMPORTED_MODULE_9__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_10__["Skill"].DISGUISE, _Value__WEBPACK_IMPORTED_MODULE_6__["Value"].create(5)), _data__WEBPACK_IMPORTED_MODULE_9__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_10__["Skill"].DODGE, _Value__WEBPACK_IMPORTED_MODULE_6__["Value"].create(this.characteristics.dexterity.half())), _data__WEBPACK_IMPORTED_MODULE_9__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_10__["Skill"].DRIVE_AUTO, _Value__WEBPACK_IMPORTED_MODULE_6__["Value"].create(20)), _data__WEBPACK_IMPORTED_MODULE_9__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_10__["Skill"].ELECTRIC_REPAIR, _Value__WEBPACK_IMPORTED_MODULE_6__["Value"].create(10)), _data__WEBPACK_IMPORTED_MODULE_9__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_10__["Skill"].FAST_TALK, _Value__WEBPACK_IMPORTED_MODULE_6__["Value"].create(5)), _data__WEBPACK_IMPORTED_MODULE_9__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_10__["Skill"].FIGHTING, _Value__WEBPACK_IMPORTED_MODULE_6__["Value"].create(25)), _data__WEBPACK_IMPORTED_MODULE_9__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_10__["Skill"].HANDGUNS, _Value__WEBPACK_IMPORTED_MODULE_6__["Value"].create(20)), _data__WEBPACK_IMPORTED_MODULE_9__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_10__["Skill"].GUNS, _Value__WEBPACK_IMPORTED_MODULE_6__["Value"].create(25)), _data__WEBPACK_IMPORTED_MODULE_9__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_10__["Skill"].SUBMACHINE_GUNS, _Value__WEBPACK_IMPORTED_MODULE_6__["Value"].create(15)), _data__WEBPACK_IMPORTED_MODULE_9__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_10__["Skill"].FIRST_AID, _Value__WEBPACK_IMPORTED_MODULE_6__["Value"].create(30)), _data__WEBPACK_IMPORTED_MODULE_9__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_10__["Skill"].HISTORY, _Value__WEBPACK_IMPORTED_MODULE_6__["Value"].create(5)), _data__WEBPACK_IMPORTED_MODULE_9__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_10__["Skill"].INTIMIDATE, _Value__WEBPACK_IMPORTED_MODULE_6__["Value"].create(15)), _data__WEBPACK_IMPORTED_MODULE_9__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_10__["Skill"].JUMP, _Value__WEBPACK_IMPORTED_MODULE_6__["Value"].create(20)), _data__WEBPACK_IMPORTED_MODULE_9__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_10__["Skill"].NATIVE_LANGUAGE, _Value__WEBPACK_IMPORTED_MODULE_6__["Value"].create(this.characteristics.education.sum())), _data__WEBPACK_IMPORTED_MODULE_9__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_10__["Skill"].OTHER_LANGUAGE, _Value__WEBPACK_IMPORTED_MODULE_6__["Value"].create(1)), _data__WEBPACK_IMPORTED_MODULE_9__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_10__["Skill"].LAW, _Value__WEBPACK_IMPORTED_MODULE_6__["Value"].create(5)), _data__WEBPACK_IMPORTED_MODULE_9__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_10__["Skill"].LIBRARY_USE, _Value__WEBPACK_IMPORTED_MODULE_6__["Value"].create(20)), _data__WEBPACK_IMPORTED_MODULE_9__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_10__["Skill"].LISTEN, _Value__WEBPACK_IMPORTED_MODULE_6__["Value"].create(20)), _data__WEBPACK_IMPORTED_MODULE_9__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_10__["Skill"].LOCKSMITH, _Value__WEBPACK_IMPORTED_MODULE_6__["Value"].create(1)), _data__WEBPACK_IMPORTED_MODULE_9__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_10__["Skill"].MECHANICAL_REPAIR, _Value__WEBPACK_IMPORTED_MODULE_6__["Value"].create(10)), _data__WEBPACK_IMPORTED_MODULE_9__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_10__["Skill"].MEDICINE, _Value__WEBPACK_IMPORTED_MODULE_6__["Value"].create(1)), _data__WEBPACK_IMPORTED_MODULE_9__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_10__["Skill"].NATURAL_WORLD, _Value__WEBPACK_IMPORTED_MODULE_6__["Value"].create(10)), _data__WEBPACK_IMPORTED_MODULE_9__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_10__["Skill"].NAVIGATE, _Value__WEBPACK_IMPORTED_MODULE_6__["Value"].create(10)), _data__WEBPACK_IMPORTED_MODULE_9__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_10__["Skill"].OCCULT, _Value__WEBPACK_IMPORTED_MODULE_6__["Value"].create(5)), _data__WEBPACK_IMPORTED_MODULE_9__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_10__["Skill"].OPERATE_HEAVY_MACHINERY, _Value__WEBPACK_IMPORTED_MODULE_6__["Value"].create(1)), _data__WEBPACK_IMPORTED_MODULE_9__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_10__["Skill"].PERSUADE, _Value__WEBPACK_IMPORTED_MODULE_6__["Value"].create(10)), _data__WEBPACK_IMPORTED_MODULE_9__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_10__["Skill"].PILOT, _Value__WEBPACK_IMPORTED_MODULE_6__["Value"].create(1)), _data__WEBPACK_IMPORTED_MODULE_9__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_10__["Skill"].PSYCHOLOGY, _Value__WEBPACK_IMPORTED_MODULE_6__["Value"].create(10)), _data__WEBPACK_IMPORTED_MODULE_9__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_10__["Skill"].PSYCHOANALYSIS, _Value__WEBPACK_IMPORTED_MODULE_6__["Value"].create(1)), _data__WEBPACK_IMPORTED_MODULE_9__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_10__["Skill"].RIDE, _Value__WEBPACK_IMPORTED_MODULE_6__["Value"].create(5)), _data__WEBPACK_IMPORTED_MODULE_9__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_10__["Skill"].SCIENCE, _Value__WEBPACK_IMPORTED_MODULE_6__["Value"].create(1)), _data__WEBPACK_IMPORTED_MODULE_9__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_10__["Skill"].SLEIGHT_OF_HAND, _Value__WEBPACK_IMPORTED_MODULE_6__["Value"].create(10)), _data__WEBPACK_IMPORTED_MODULE_9__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_10__["Skill"].SPOT_HIDDEN, _Value__WEBPACK_IMPORTED_MODULE_6__["Value"].create(25)), _data__WEBPACK_IMPORTED_MODULE_9__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_10__["Skill"].STEALTH, _Value__WEBPACK_IMPORTED_MODULE_6__["Value"].create(20)), _data__WEBPACK_IMPORTED_MODULE_9__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_10__["Skill"].SURVIVAL, _Value__WEBPACK_IMPORTED_MODULE_6__["Value"].create(10)), _data__WEBPACK_IMPORTED_MODULE_9__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_10__["Skill"].SWIM, _Value__WEBPACK_IMPORTED_MODULE_6__["Value"].create(20)), _data__WEBPACK_IMPORTED_MODULE_9__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_10__["Skill"].THROW, _Value__WEBPACK_IMPORTED_MODULE_6__["Value"].create(20)), _data__WEBPACK_IMPORTED_MODULE_9__["Pair"].create(_Skill__WEBPACK_IMPORTED_MODULE_10__["Skill"].TRACK, _Value__WEBPACK_IMPORTED_MODULE_6__["Value"].create(10))]);
    }
    /**
     * 
     */

  }, {
    key: "toggleForUpdate",
    value: function toggleForUpdate(skill) {
      if (this.updates.has(skill)) {
        return new Investigator(_objectSpread({}, this, {
          updates: this.updates["delete"](skill)
        }));
      } else {
        return new Investigator(_objectSpread({}, this, {
          updates: this.updates.set(skill, _Value__WEBPACK_IMPORTED_MODULE_6__["Value"].zero())
        }));
      }
    }
    /**
     * 
     */

  }, {
    key: "levelup",
    value: function levelup() {
      if (this.updates.entries.size > 0) {
        var oldSkills = this.skills.entries;
        var skillsToUpdate = this.updates.entries;
        var nextSkills = Object(immutable__WEBPACK_IMPORTED_MODULE_8__["List"])().asMutable();
        var defaultSkills = this.computeDefaultSkills();
        var skillsIndex = 0;

        for (var toUpdateIndex = 0; toUpdateIndex < skillsToUpdate.size; ++toUpdateIndex) {
          var currentSkillToUpdate = skillsToUpdate.get(toUpdateIndex).left;

          while (skillsIndex < oldSkills.size && _Skill__WEBPACK_IMPORTED_MODULE_10__["Skill"].compare(oldSkills.get(skillsIndex).left, currentSkillToUpdate) < 0) {
            nextSkills.push(oldSkills.get(skillsIndex));
            skillsIndex += 1;
          }

          if (skillsIndex < oldSkills.size && _Skill__WEBPACK_IMPORTED_MODULE_10__["Skill"].compare(oldSkills.get(skillsIndex).left, currentSkillToUpdate) === 0) {
            nextSkills.push(_data__WEBPACK_IMPORTED_MODULE_9__["Pair"].create(currentSkillToUpdate, oldSkills.get(skillsIndex).right.levelup()));
            skillsIndex += 1;
          } else {
            var base = defaultSkills.has(currentSkillToUpdate) ? defaultSkills.get(currentSkillToUpdate) : _Value__WEBPACK_IMPORTED_MODULE_6__["Value"].create(1);
            var levelup = base.levelup();

            if (base !== levelup) {
              nextSkills.push(_data__WEBPACK_IMPORTED_MODULE_9__["Pair"].create(currentSkillToUpdate, levelup));
            }
          }
        }

        while (skillsIndex < oldSkills.size) {
          nextSkills.push(oldSkills.get(skillsIndex));
          skillsIndex += 1;
        }

        return Investigator.create(_objectSpread({}, this, {
          skills: _SkillSet__WEBPACK_IMPORTED_MODULE_5__["SkillSet"].create(nextSkills),
          updates: _SkillSet__WEBPACK_IMPORTED_MODULE_5__["SkillSet"].empty()
        }));
      } else {
        return this;
      }
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
//# sourceMappingURL=index.js.bd051ed6f830cb38de32.hot-update.js.map
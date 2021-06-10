webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./typescript/unidoc/InvestigatorCommand.ts":
/*!**************************************************!*\
  !*** ./typescript/unidoc/InvestigatorCommand.ts ***!
  \**************************************************/
/*! exports provided: InvestigatorCommand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestigatorCommand", function() { return InvestigatorCommand; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cedric-demongivert/unidoc */ "./node_modules/@cedric-demongivert/unidoc/index.js");
/* harmony import */ var _cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Investigator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Investigator */ "./typescript/Investigator.ts");
/* harmony import */ var _CharacteristicSet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CharacteristicSet */ "./typescript/CharacteristicSet.ts");
/* harmony import */ var _Summary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Summary */ "./typescript/Summary.ts");
/* harmony import */ var _SkillSet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../SkillSet */ "./typescript/SkillSet.ts");
/* harmony import */ var _validator_command__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./validator/command */ "./typescript/unidoc/validator/command/index.ts");
/* harmony import */ var _NameCommand__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NameCommand */ "./typescript/unidoc/NameCommand.ts");
/* harmony import */ var _GenderCommand__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./GenderCommand */ "./typescript/unidoc/GenderCommand.ts");
/* harmony import */ var _AddressCommand__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AddressCommand */ "./typescript/unidoc/AddressCommand.ts");
/* harmony import */ var _CharacteristicSetCommand__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CharacteristicSetCommand */ "./typescript/unidoc/CharacteristicSetCommand.ts");
/* harmony import */ var _SkillSetCommand__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SkillSetCommand */ "./typescript/unidoc/SkillSetCommand.ts");
/* harmony import */ var _StateCommand__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./StateCommand */ "./typescript/unidoc/StateCommand.ts");

















/**
 * 
 */

var InvestigatorCommand;

(function (_InvestigatorCommand) {
  var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(reduce);

  /**
   * 
   */
  var COMMAND = _validator_command__WEBPACK_IMPORTED_MODULE_6__["CommandList"].capture(_validator_command__WEBPACK_IMPORTED_MODULE_6__["CommandListElement"].anywhere.requiredCommand('name', _NameCommand__WEBPACK_IMPORTED_MODULE_7__["NameCommand"].validate), _validator_command__WEBPACK_IMPORTED_MODULE_6__["CommandListElement"].anywhere.requiredCommand('alias', _cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocKissValidator"].requireText), _validator_command__WEBPACK_IMPORTED_MODULE_6__["CommandListElement"].anywhere.requiredCommand('job', _cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocKissValidator"].requireText), _validator_command__WEBPACK_IMPORTED_MODULE_6__["CommandListElement"].anywhere.requiredCommand('matricule', _cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocKissValidator"].requireText), _validator_command__WEBPACK_IMPORTED_MODULE_6__["CommandListElement"].anywhere.requiredCommand('gender', _GenderCommand__WEBPACK_IMPORTED_MODULE_8__["GenderCommand"].validate), _validator_command__WEBPACK_IMPORTED_MODULE_6__["CommandListElement"].anywhere.requiredCommand('age', _cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocKissValidator"].requireToken), _validator_command__WEBPACK_IMPORTED_MODULE_6__["CommandListElement"].anywhere.requiredCommand('birthdate', _cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocKissValidator"].requireText), _validator_command__WEBPACK_IMPORTED_MODULE_6__["CommandListElement"].anywhere.requiredCommand('hiringdate', _cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocKissValidator"].requireText), _validator_command__WEBPACK_IMPORTED_MODULE_6__["CommandListElement"].anywhere.requiredCommand('birthplace', _AddressCommand__WEBPACK_IMPORTED_MODULE_9__["AddressCommand"].validate), _validator_command__WEBPACK_IMPORTED_MODULE_6__["CommandListElement"].anywhere.requiredCommand('home', _AddressCommand__WEBPACK_IMPORTED_MODULE_9__["AddressCommand"].validate), _validator_command__WEBPACK_IMPORTED_MODULE_6__["CommandListElement"].anywhere.requiredCommand('characteristics', _CharacteristicSetCommand__WEBPACK_IMPORTED_MODULE_10__["CharacteristicSetCommand"].validate), _validator_command__WEBPACK_IMPORTED_MODULE_6__["CommandListElement"].anywhere.requiredCommand('skills', _SkillSetCommand__WEBPACK_IMPORTED_MODULE_11__["SkillSetCommand"].validate), _validator_command__WEBPACK_IMPORTED_MODULE_6__["CommandListElement"].anywhere.optionalCommand('state', _StateCommand__WEBPACK_IMPORTED_MODULE_12__["StateCommand"].validate), _validator_command__WEBPACK_IMPORTED_MODULE_6__["CommandListElement"].anywhere.optionalCommand('updates', _SkillSetCommand__WEBPACK_IMPORTED_MODULE_11__["SkillSetCommand"].validate));
  /**
   * 
   */

  function validate() {
    return Object(_validator_command__WEBPACK_IMPORTED_MODULE_6__["validateCommandList"])(COMMAND);
  }

  _InvestigatorCommand.validate = validate;

  function reduce() {
    var name, alias, job, matricule, gender, age, birthdate, hiringdate, birthplace, home, characteristics, skills, mutables, current;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function reduce$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            name = undefined;
            alias = undefined;
            job = undefined;
            matricule = undefined;
            gender = undefined;
            age = undefined;
            birthdate = undefined;
            hiringdate = undefined;
            birthplace = undefined;
            home = undefined;
            characteristics = _CharacteristicSet__WEBPACK_IMPORTED_MODULE_3__["CharacteristicSet"].empty();
            skills = _SkillSet__WEBPACK_IMPORTED_MODULE_5__["SkillSet"].empty();
            mutables = undefined;
            return _context.delegateYield(_cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocReducer"].skipStart(), "t0", 14);

          case 14:
            return _context.delegateYield(_cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocReducer"].skipWhitespaces(), "t1", 15);

          case 15:
            if (false) {}

            _context.next = 18;
            return _cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocReductionRequest"].CURRENT;

          case 18:
            current = _context.sent;

            if (!current.isStartOfAnyTag()) {
              _context.next = 88;
              break;
            }

            if (!current.isStartOfTag('name')) {
              _context.next = 25;
              break;
            }

            return _context.delegateYield(_cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocReducer"].reduceTag.content(_NameCommand__WEBPACK_IMPORTED_MODULE_7__["NameCommand"].reduce()), "t2", 22);

          case 22:
            name = _context.t2;
            _context.next = 86;
            break;

          case 25:
            if (!current.isStartOfTag('alias')) {
              _context.next = 30;
              break;
            }

            return _context.delegateYield(_cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocReducer"].reduceTag.content(_cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocReducer"].reduceText()), "t3", 27);

          case 27:
            alias = _context.t3;
            _context.next = 86;
            break;

          case 30:
            if (!current.isStartOfTag('state')) {
              _context.next = 35;
              break;
            }

            return _context.delegateYield(_cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocReducer"].reduceTag.content(_StateCommand__WEBPACK_IMPORTED_MODULE_12__["StateCommand"].reduce()), "t4", 32);

          case 32:
            mutables = _context.t4;
            _context.next = 86;
            break;

          case 35:
            if (!current.isStartOfTag('job')) {
              _context.next = 40;
              break;
            }

            return _context.delegateYield(_cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocReducer"].reduceTag.content(_cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocReducer"].reduceText()), "t5", 37);

          case 37:
            job = _context.t5;
            _context.next = 86;
            break;

          case 40:
            if (!current.isStartOfTag('matricule')) {
              _context.next = 45;
              break;
            }

            return _context.delegateYield(_cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocReducer"].reduceTag.content(_cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocReducer"].reduceText()), "t6", 42);

          case 42:
            matricule = _context.t6;
            _context.next = 86;
            break;

          case 45:
            if (!current.isStartOfTag('gender')) {
              _context.next = 50;
              break;
            }

            return _context.delegateYield(_cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocReducer"].reduceTag.content(_GenderCommand__WEBPACK_IMPORTED_MODULE_8__["GenderCommand"].reduce()), "t7", 47);

          case 47:
            gender = _context.t7;
            _context.next = 86;
            break;

          case 50:
            if (!current.isStartOfTag('age')) {
              _context.next = 55;
              break;
            }

            return _context.delegateYield(_cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocReducer"].reduceTag.content(_cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocReducer"].reduceText()), "t8", 52);

          case 52:
            age = _context.t8;
            _context.next = 86;
            break;

          case 55:
            if (!current.isStartOfTag('birthdate')) {
              _context.next = 60;
              break;
            }

            return _context.delegateYield(_cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocReducer"].reduceTag.content(_cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocReducer"].reduceText()), "t9", 57);

          case 57:
            birthdate = _context.t9;
            _context.next = 86;
            break;

          case 60:
            if (!current.isStartOfTag('hiringdate')) {
              _context.next = 65;
              break;
            }

            return _context.delegateYield(_cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocReducer"].reduceTag.content(_cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocReducer"].reduceText()), "t10", 62);

          case 62:
            hiringdate = _context.t10;
            _context.next = 86;
            break;

          case 65:
            if (!current.isStartOfTag('birthplace')) {
              _context.next = 70;
              break;
            }

            return _context.delegateYield(_cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocReducer"].reduceTag.content(_AddressCommand__WEBPACK_IMPORTED_MODULE_9__["AddressCommand"].reduce()), "t11", 67);

          case 67:
            birthplace = _context.t11;
            _context.next = 86;
            break;

          case 70:
            if (!current.isStartOfTag('home')) {
              _context.next = 75;
              break;
            }

            return _context.delegateYield(_cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocReducer"].reduceTag.content(_AddressCommand__WEBPACK_IMPORTED_MODULE_9__["AddressCommand"].reduce()), "t12", 72);

          case 72:
            home = _context.t12;
            _context.next = 86;
            break;

          case 75:
            if (!current.isStartOfTag('characteristics')) {
              _context.next = 80;
              break;
            }

            return _context.delegateYield(_cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocReducer"].reduceTag.content(_CharacteristicSetCommand__WEBPACK_IMPORTED_MODULE_10__["CharacteristicSetCommand"].reduce()), "t13", 77);

          case 77:
            characteristics = _context.t13;
            _context.next = 86;
            break;

          case 80:
            if (!current.isStartOfTag('skills')) {
              _context.next = 85;
              break;
            }

            return _context.delegateYield(_cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocReducer"].reduceTag.content(_SkillSetCommand__WEBPACK_IMPORTED_MODULE_11__["SkillSetCommand"].reduce()), "t14", 82);

          case 82:
            skills = _context.t14;
            _context.next = 86;
            break;

          case 85:
            return _context.delegateYield(_cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocReducer"].skipTag(), "t15", 86);

          case 86:
            _context.next = 95;
            break;

          case 88:
            if (!current.isEnd()) {
              _context.next = 92;
              break;
            }

            return _context.abrupt("return", _Investigator__WEBPACK_IMPORTED_MODULE_2__["Investigator"].create({
              summary: _Summary__WEBPACK_IMPORTED_MODULE_4__["Summary"].create({
                name: name,
                alias: alias,
                job: job,
                matricule: matricule,
                gender: gender,
                age: parseInt(age),
                birthdate: birthdate,
                hiringdate: hiringdate,
                birthplace: birthplace,
                home: home
              }),
              characteristics: characteristics,
              skills: skills,
              mutables: mutables
            }));

          case 92:
            _context.next = 94;
            return _cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocReductionRequest"].NEXT;

          case 94:
            current = _context.sent;

          case 95:
            _context.next = 15;
            break;

          case 97:
          case "end":
            return _context.stop();
        }
      }
    }, _marked);
  }

  _InvestigatorCommand.reduce = reduce;
})(InvestigatorCommand || (InvestigatorCommand = {}));

/***/ })

})
//# sourceMappingURL=index.js.ddc0f360c44c3bdd2974.hot-update.js.map
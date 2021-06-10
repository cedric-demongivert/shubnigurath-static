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
    var name, alias, job, matricule, gender, age, birthdate, hiringdate, birthplace, home, characteristics, skills, mutables, updates, current;
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
            updates = _SkillSet__WEBPACK_IMPORTED_MODULE_5__["SkillSet"].empty();
            return _context.delegateYield(_cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocReducer"].skipStart(), "t0", 15);

          case 15:
            return _context.delegateYield(_cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocReducer"].skipWhitespaces(), "t1", 16);

          case 16:
            if (false) {}

            _context.next = 19;
            return _cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocReductionRequest"].CURRENT;

          case 19:
            current = _context.sent;

            if (!current.isStartOfAnyTag()) {
              _context.next = 94;
              break;
            }

            if (!current.isStartOfTag('name')) {
              _context.next = 26;
              break;
            }

            return _context.delegateYield(_cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocReducer"].reduceTag.content(_NameCommand__WEBPACK_IMPORTED_MODULE_7__["NameCommand"].reduce()), "t2", 23);

          case 23:
            name = _context.t2;
            _context.next = 92;
            break;

          case 26:
            if (!current.isStartOfTag('alias')) {
              _context.next = 31;
              break;
            }

            return _context.delegateYield(_cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocReducer"].reduceTag.content(_cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocReducer"].reduceText()), "t3", 28);

          case 28:
            alias = _context.t3;
            _context.next = 92;
            break;

          case 31:
            if (!current.isStartOfTag('state')) {
              _context.next = 36;
              break;
            }

            return _context.delegateYield(_cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocReducer"].reduceTag.content(_StateCommand__WEBPACK_IMPORTED_MODULE_12__["StateCommand"].reduce()), "t4", 33);

          case 33:
            mutables = _context.t4;
            _context.next = 92;
            break;

          case 36:
            if (!current.isStartOfTag('job')) {
              _context.next = 41;
              break;
            }

            return _context.delegateYield(_cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocReducer"].reduceTag.content(_cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocReducer"].reduceText()), "t5", 38);

          case 38:
            job = _context.t5;
            _context.next = 92;
            break;

          case 41:
            if (!current.isStartOfTag('matricule')) {
              _context.next = 46;
              break;
            }

            return _context.delegateYield(_cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocReducer"].reduceTag.content(_cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocReducer"].reduceText()), "t6", 43);

          case 43:
            matricule = _context.t6;
            _context.next = 92;
            break;

          case 46:
            if (!current.isStartOfTag('gender')) {
              _context.next = 51;
              break;
            }

            return _context.delegateYield(_cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocReducer"].reduceTag.content(_GenderCommand__WEBPACK_IMPORTED_MODULE_8__["GenderCommand"].reduce()), "t7", 48);

          case 48:
            gender = _context.t7;
            _context.next = 92;
            break;

          case 51:
            if (!current.isStartOfTag('age')) {
              _context.next = 56;
              break;
            }

            return _context.delegateYield(_cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocReducer"].reduceTag.content(_cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocReducer"].reduceText()), "t8", 53);

          case 53:
            age = _context.t8;
            _context.next = 92;
            break;

          case 56:
            if (!current.isStartOfTag('birthdate')) {
              _context.next = 61;
              break;
            }

            return _context.delegateYield(_cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocReducer"].reduceTag.content(_cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocReducer"].reduceText()), "t9", 58);

          case 58:
            birthdate = _context.t9;
            _context.next = 92;
            break;

          case 61:
            if (!current.isStartOfTag('hiringdate')) {
              _context.next = 66;
              break;
            }

            return _context.delegateYield(_cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocReducer"].reduceTag.content(_cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocReducer"].reduceText()), "t10", 63);

          case 63:
            hiringdate = _context.t10;
            _context.next = 92;
            break;

          case 66:
            if (!current.isStartOfTag('birthplace')) {
              _context.next = 71;
              break;
            }

            return _context.delegateYield(_cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocReducer"].reduceTag.content(_AddressCommand__WEBPACK_IMPORTED_MODULE_9__["AddressCommand"].reduce()), "t11", 68);

          case 68:
            birthplace = _context.t11;
            _context.next = 92;
            break;

          case 71:
            if (!current.isStartOfTag('home')) {
              _context.next = 76;
              break;
            }

            return _context.delegateYield(_cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocReducer"].reduceTag.content(_AddressCommand__WEBPACK_IMPORTED_MODULE_9__["AddressCommand"].reduce()), "t12", 73);

          case 73:
            home = _context.t12;
            _context.next = 92;
            break;

          case 76:
            if (!current.isStartOfTag('characteristics')) {
              _context.next = 81;
              break;
            }

            return _context.delegateYield(_cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocReducer"].reduceTag.content(_CharacteristicSetCommand__WEBPACK_IMPORTED_MODULE_10__["CharacteristicSetCommand"].reduce()), "t13", 78);

          case 78:
            characteristics = _context.t13;
            _context.next = 92;
            break;

          case 81:
            if (!current.isStartOfTag('skills')) {
              _context.next = 86;
              break;
            }

            return _context.delegateYield(_cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocReducer"].reduceTag.content(_SkillSetCommand__WEBPACK_IMPORTED_MODULE_11__["SkillSetCommand"].reduce()), "t14", 83);

          case 83:
            skills = _context.t14;
            _context.next = 92;
            break;

          case 86:
            if (!current.isStartOfTag('updates')) {
              _context.next = 91;
              break;
            }

            return _context.delegateYield(_cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocReducer"].reduceTag.content(_SkillSetCommand__WEBPACK_IMPORTED_MODULE_11__["SkillSetCommand"].reduce()), "t15", 88);

          case 88:
            updates = _context.t15;
            _context.next = 92;
            break;

          case 91:
            return _context.delegateYield(_cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocReducer"].skipTag(), "t16", 92);

          case 92:
            _context.next = 101;
            break;

          case 94:
            if (!current.isEnd()) {
              _context.next = 98;
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

          case 98:
            _context.next = 100;
            return _cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocReductionRequest"].NEXT;

          case 100:
            current = _context.sent;

          case 101:
            _context.next = 16;
            break;

          case 103:
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
//# sourceMappingURL=index.js.d06347fb896bd902c74b.hot-update.js.map
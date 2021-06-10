webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./typescript/unidoc/StateCommand.ts":
/*!*******************************************!*\
  !*** ./typescript/unidoc/StateCommand.ts ***!
  \*******************************************/
/*! exports provided: StateCommand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateCommand", function() { return StateCommand; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cedric-demongivert/unidoc */ "./node_modules/@cedric-demongivert/unidoc/index.js");
/* harmony import */ var _cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _validator_command__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validator/command */ "./typescript/unidoc/validator/command/index.ts");
/* harmony import */ var _Mutables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Mutables */ "./typescript/Mutables.ts");








/**
 * 
 */

var StateCommand;

(function (_StateCommand) {
  var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(reduce);

  /**
   * 
   */
  var COMMAND = _validator_command__WEBPACK_IMPORTED_MODULE_2__["CommandList"].capture(_validator_command__WEBPACK_IMPORTED_MODULE_2__["CommandListElement"].anywhere.optionalCommand('health', _cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocKissValidator"].requireToken), _validator_command__WEBPACK_IMPORTED_MODULE_2__["CommandListElement"].anywhere.optionalCommand('mentalHealth', _cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocKissValidator"].requireToken), _validator_command__WEBPACK_IMPORTED_MODULE_2__["CommandListElement"].anywhere.optionalCommand('magic', _cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocKissValidator"].requireToken), _validator_command__WEBPACK_IMPORTED_MODULE_2__["CommandListElement"].anywhere.optionalCommand('luck', _cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocKissValidator"].requireToken), _validator_command__WEBPACK_IMPORTED_MODULE_2__["CommandListElement"].anywhere.optionalCommand('temporaryInsane', _cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocKissValidator"].validateManyWhitespace), _validator_command__WEBPACK_IMPORTED_MODULE_2__["CommandListElement"].anywhere.optionalCommand('indefinitelyInsane', _cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocKissValidator"].validateManyWhitespace), _validator_command__WEBPACK_IMPORTED_MODULE_2__["CommandListElement"].anywhere.optionalCommand('majorWound', _cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocKissValidator"].validateManyWhitespace));
  /**
   * 
   */

  function validate() {
    return Object(_validator_command__WEBPACK_IMPORTED_MODULE_2__["validateCommandList"])(COMMAND);
  }

  _StateCommand.validate = validate;

  function reduce() {
    var health, mentalHealth, magic, luck, temporaryInsane, indefinitelyInsane, majorWound, current;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function reduce$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            health = undefined;
            mentalHealth = undefined;
            magic = undefined;
            luck = undefined;
            temporaryInsane = false;
            indefinitelyInsane = false;
            majorWound = false;
            return _context.delegateYield(_cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocReducer"].skipStart(), "t0", 8);

          case 8:
            return _context.delegateYield(_cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocReducer"].skipWhitespaces(), "t1", 9);

          case 9:
            if (false) {}

            _context.next = 12;
            return _cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocReductionRequest"].CURRENT;

          case 12:
            current = _context.sent;

            if (!current.isStartOfAnyTag()) {
              _context.next = 52;
              break;
            }

            if (!current.isStartOfTag('health')) {
              _context.next = 19;
              break;
            }

            return _context.delegateYield(_cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocReducer"].reduceTag.content(_cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocReducer"].reduceToken()), "t2", 16);

          case 16:
            health = _context.t2;
            _context.next = 50;
            break;

          case 19:
            if (!current.isStartOfTag('luck')) {
              _context.next = 24;
              break;
            }

            return _context.delegateYield(_cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocReducer"].reduceTag.content(_cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocReducer"].reduceToken()), "t3", 21);

          case 21:
            luck = _context.t3;
            _context.next = 50;
            break;

          case 24:
            if (!current.isStartOfTag('mentalHealth')) {
              _context.next = 29;
              break;
            }

            return _context.delegateYield(_cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocReducer"].reduceTag.content(_cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocReducer"].reduceToken()), "t4", 26);

          case 26:
            mentalHealth = _context.t4;
            _context.next = 50;
            break;

          case 29:
            if (!current.isStartOfTag('magic')) {
              _context.next = 34;
              break;
            }

            return _context.delegateYield(_cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocReducer"].reduceTag.content(_cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocReducer"].reduceToken()), "t5", 31);

          case 31:
            magic = _context.t5;
            _context.next = 50;
            break;

          case 34:
            if (!current.isStartOfTag('temporaryInsane')) {
              _context.next = 39;
              break;
            }

            return _context.delegateYield(_cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocReducer"].skipTag(), "t6", 36);

          case 36:
            temporaryInsane = true;
            _context.next = 50;
            break;

          case 39:
            if (!current.isStartOfTag('indefinitelyInsane')) {
              _context.next = 44;
              break;
            }

            return _context.delegateYield(_cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocReducer"].skipTag(), "t7", 41);

          case 41:
            indefinitelyInsane = true;
            _context.next = 50;
            break;

          case 44:
            if (!current.isStartOfTag('majorWound')) {
              _context.next = 49;
              break;
            }

            return _context.delegateYield(_cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocReducer"].skipTag(), "t8", 46);

          case 46:
            majorWound = true;
            _context.next = 50;
            break;

          case 49:
            return _context.delegateYield(_cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocReducer"].skipTag(), "t9", 50);

          case 50:
            _context.next = 59;
            break;

          case 52:
            if (!current.isEnd()) {
              _context.next = 56;
              break;
            }

            return _context.abrupt("return", _Mutables__WEBPACK_IMPORTED_MODULE_3__["Mutables"].create({
              health: parseInt(health),
              mentalHealth: parseInt(mentalHealth),
              magic: parseInt(magic),
              luck: parseInt(luck),
              temporaryInsane: temporaryInsane,
              indefinitelyInsane: indefinitelyInsane,
              majorWound: majorWound
            }));

          case 56:
            _context.next = 58;
            return _cedric_demongivert_unidoc__WEBPACK_IMPORTED_MODULE_1__["UnidocReductionRequest"].NEXT;

          case 58:
            current = _context.sent;

          case 59:
            _context.next = 9;
            break;

          case 61:
          case "end":
            return _context.stop();
        }
      }
    }, _marked);
  }

  _StateCommand.reduce = reduce;
})(StateCommand || (StateCommand = {}));

/***/ })

})
//# sourceMappingURL=index.js.34cee7713cbd3938a3a5.hot-update.js.map
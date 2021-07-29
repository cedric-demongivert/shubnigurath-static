webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/extends.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var D_development_rpg_shubgath_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/extends */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_page_loading_LoadingPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/page/loading/LoadingPage */ "./components/page/loading/LoadingPage.tsx");
/* harmony import */ var _components_layout_VanillaLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout/VanillaLayout */ "./components/layout/VanillaLayout.tsx");

var _jsxFileName = "D:\\development\\rpg\\shubgath\\pages\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





/**
*
*/
function index(properties) {
  return __jsx(_components_layout_VanillaLayout__WEBPACK_IMPORTED_MODULE_4__["VanillaLayout"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, "Shubniggurath - Choisir un investigateur"), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  })), __jsx(_components_page_loading_LoadingPage__WEBPACK_IMPORTED_MODULE_3__["LoadingPage"], Object(D_development_rpg_shubgath_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    current: properties.investigator
  }, properties, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  })));
}

(function (_index) {})(index || (index = {}));

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJpbmRleCIsInByb3BlcnRpZXMiLCJpbnZlc3RpZ2F0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQWU7QUFDZjtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFHQTtBQUVBO0FBQ0E7O0FBSUE7QUFDQTtBQUNBO0FBQ2UsU0FBU0EsS0FBVCxDQUFnQkMsVUFBaEIsRUFBOEQ7QUFDM0UsU0FDRSxNQUFDLDhFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdEQURGLEVBRUU7QUFBTSxRQUFJLEVBQUMsVUFBWDtBQUFzQixXQUFPLEVBQUMsdUNBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLEVBTUUsTUFBQyxnRkFBRDtBQUFhLFdBQU8sRUFBRUEsVUFBVSxDQUFDQztBQUFqQyxLQUFtREQsVUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU5GLENBREY7QUFVRDs7dUJBR2dCRCxLLEtBQUFBLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTllOTkyN2E2OTE4MjMzMjY4NDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUmVhY3RFbGVtZW50IH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuaW1wb3J0IHsgTG9hZGluZ1BhZ2UgfSBmcm9tICcuLi9jb21wb25lbnRzL3BhZ2UvbG9hZGluZy9Mb2FkaW5nUGFnZSdcbmltcG9ydCB7IFZhbmlsbGFMYXlvdXQgfSBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9WYW5pbGxhTGF5b3V0J1xuaW1wb3J0IHsgSW52ZXN0aWdhdG9yIH0gZnJvbSAnLi4vdHlwZXNjcmlwdC9JbnZlc3RpZ2F0b3InXG5pbXBvcnQgeyBBcHBsaWNhdGlvbkV2ZW50IH0gZnJvbSAnLi4vdHlwZXNjcmlwdC9hcHBsaWNhdGlvbi9BcHBsaWNhdGlvbkV2ZW50J1xuXG4vKipcbipcbiovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbmRleCAocHJvcGVydGllcyA6IGluZGV4LlByb3BlcnRpZXMpIDogUmVhY3RFbGVtZW50IHtcbiAgcmV0dXJuIChcbiAgICA8VmFuaWxsYUxheW91dD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+U2h1Ym5pZ2d1cmF0aCAtIENob2lzaXIgdW4gaW52ZXN0aWdhdGV1cjwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSdpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoJyAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8TG9hZGluZ1BhZ2UgY3VycmVudD17cHJvcGVydGllcy5pbnZlc3RpZ2F0b3J9IHsuLi5wcm9wZXJ0aWVzfSAvPlxuICAgIDwvVmFuaWxsYUxheW91dD5cbiAgKVxufVxuXG5cbmV4cG9ydCBuYW1lc3BhY2UgaW5kZXgge1xuICAvKipcbiAgICogXG4gICAqL1xuICBleHBvcnQgdHlwZSBBcHBsaWNhdGlvbkNhbGxiYWNrID0gKGV2ZW50OiBBcHBsaWNhdGlvbkV2ZW50KSA9PiB2b2lkXG4gIFxuICAvKipcbiAgKlxuICAqL1xuICBleHBvcnQgdHlwZSBQcm9wZXJ0aWVzID0ge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqL1xuICAgIGludmVzdGlnYXRvcjogSW52ZXN0aWdhdG9yIHwgdW5kZWZpbmVkLFxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICovXG4gICAgb25DaGFuZ2U/OiBBcHBsaWNhdGlvbkNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
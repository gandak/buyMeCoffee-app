"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(auth)/signup/page",{

/***/ "(app-pages-browser)/./src/utils/checkUsername.ts":
/*!************************************!*\
  !*** ./src/utils/checkUsername.ts ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checkUsername: () => (/* binding */ checkUsername)\n/* harmony export */ });\n/* harmony import */ var _datas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datas */ \"(app-pages-browser)/./src/utils/datas.ts\");\n\nconst checkUsername = (username)=>{\n    const foundUser = _datas__WEBPACK_IMPORTED_MODULE_0__.users.find((user)=>{\n        if (user.username === username) return user;\n    });\n    console.log(foundUser);\n    if (!foundUser) {\n        return false;\n    } else return true;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy91dGlscy9jaGVja1VzZXJuYW1lLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWdDO0FBRXpCLE1BQU1DLGdCQUFnQixDQUFDQztJQUM1QixNQUFNQyxZQUFZSCx5Q0FBS0EsQ0FBQ0ksSUFBSSxDQUFDLENBQUNDO1FBQzVCLElBQUlBLEtBQUtILFFBQVEsS0FBS0EsVUFBVSxPQUFPRztJQUN6QztJQUNBQyxRQUFRQyxHQUFHLENBQUNKO0lBQ1osSUFBSSxDQUFDQSxXQUFXO1FBQ2QsT0FBTztJQUNULE9BQU8sT0FBTztBQUNoQixFQUFFIiwic291cmNlcyI6WyIvVXNlcnMvMjRMUDM1NDgvRGVza3RvcC9iYWNrZW5kL2J1eW1lY29mZmVlL2J1eW1lY29mZmVlLWFwcC9zcmMvdXRpbHMvY2hlY2tVc2VybmFtZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VycyB9IGZyb20gXCIuL2RhdGFzXCI7XG5cbmV4cG9ydCBjb25zdCBjaGVja1VzZXJuYW1lID0gKHVzZXJuYW1lOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgZm91bmRVc2VyID0gdXNlcnMuZmluZCgodXNlcikgPT4ge1xuICAgIGlmICh1c2VyLnVzZXJuYW1lID09PSB1c2VybmFtZSkgcmV0dXJuIHVzZXI7XG4gIH0pO1xuICBjb25zb2xlLmxvZyhmb3VuZFVzZXIpO1xuICBpZiAoIWZvdW5kVXNlcikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIHJldHVybiB0cnVlO1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VycyIsImNoZWNrVXNlcm5hbWUiLCJ1c2VybmFtZSIsImZvdW5kVXNlciIsImZpbmQiLCJ1c2VyIiwiY29uc29sZSIsImxvZyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/utils/checkUsername.ts\n"));

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/maindata/[[...slug]]/layout",{

/***/ "(app-pages-browser)/./src/app/components/Chapterslist.tsx":
/*!*********************************************!*\
  !*** ./src/app/components/Chapterslist.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Chapterslist; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _NewItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NewItem */ \"(app-pages-browser)/./src/app/components/NewItem.tsx\");\n/* harmony import */ var _barrel_optimize_names_RxCross2_react_icons_rx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=RxCross2!=!react-icons/rx */ \"(app-pages-browser)/./node_modules/react-icons/rx/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_FaArrowCircleRight_react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=FaArrowCircleRight!=!react-icons/fa */ \"(app-pages-browser)/./node_modules/react-icons/fa/index.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nasync function Chapterslist(param) {\n    let { data, contentData } = param;\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();\n    const urlarray = pathname.split(\"/\");\n    function togglebar() {\n        const element = document.querySelector(\".chapter-bar\");\n        const arrow = document.querySelector(\".arrow\");\n        element === null || element === void 0 ? void 0 : element.classList.toggle(\"-translate-x-[250px]\");\n        arrow === null || arrow === void 0 ? void 0 : arrow.classList.toggle(\"hidden\");\n        console.log(data.slug);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" border-r-2 h-[100vh] border-r-slate-700 overflow-scroll flex flex-col items-center -translate-x-[250px] md:translate-x-0 p-0 w md:relative absolute w-[250px] md:w-full bg-[#16171f] z-10 transition-transform chapter-bar\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex gap-8 items-cente \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"w-full  text-center py-2 uppercase font-bold\",\n                                children: data.slug && data.slug[0]\n                            }, void 0, false, {\n                                fileName: \"/run/media/ajay/allProjects/notesWeb/my-app/src/app/components/Chapterslist.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_RxCross2_react_icons_rx__WEBPACK_IMPORTED_MODULE_4__.RxCross2, {\n                                size: 40,\n                                onClick: togglebar,\n                                className: \"md:hidden [cursor:pointer]\"\n                            }, void 0, false, {\n                                fileName: \"/run/media/ajay/allProjects/notesWeb/my-app/src/app/components/Chapterslist.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/run/media/ajay/allProjects/notesWeb/my-app/src/app/components/Chapterslist.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"w-full mt-4 text-sm font-medium capitalize cursor-pointer mb-16 chapter-list\",\n                        children: [\n                            contentData === null || contentData === void 0 ? void 0 : contentData.map((e)=>{\n                                let isActive = urlarray && urlarray[urlarray.length - 1] == e.urlname ? \"text-blue-600\" : \"text-gray-400\";\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    href: \"/maindata/\".concat(data.slug && data.slug[0], \"/\").concat(e.urlname),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"hover:text-blue-600 p-1 \".concat(isActive),\n                                        children: e.chapter\n                                    }, e.id, false, {\n                                        fileName: \"/run/media/ajay/allProjects/notesWeb/my-app/src/app/components/Chapterslist.tsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 118\n                                    }, this)\n                                }, e.id, false, {\n                                    fileName: \"/run/media/ajay/allProjects/notesWeb/my-app/src/app/components/Chapterslist.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 39\n                                }, this);\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NewItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                data: data\n                            }, void 0, false, {\n                                fileName: \"/run/media/ajay/allProjects/notesWeb/my-app/src/app/components/Chapterslist.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/run/media/ajay/allProjects/notesWeb/my-app/src/app/components/Chapterslist.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/run/media/ajay/allProjects/notesWeb/my-app/src/app/components/Chapterslist.tsx\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaArrowCircleRight_react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaArrowCircleRight, {\n                size: 30,\n                className: \"absolute arrow z-10 -left-0 top-4 md:hidden [cursor:pointer]\",\n                onClick: togglebar\n            }, void 0, false, {\n                fileName: \"/run/media/ajay/allProjects/notesWeb/my-app/src/app/components/Chapterslist.tsx\",\n                lineNumber: 58,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Chapterslist, \"xbyQPtUVMO7MNj7WjJlpdWqRcTo=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname\n    ];\n});\n_c = Chapterslist;\nvar _c;\n$RefreshReg$(_c, \"Chapterslist\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9DaGFwdGVyc2xpc3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUM2QjtBQUNHO0FBQ1U7QUFDVTtBQUVOO0FBVS9CLGVBQWVLLGFBQWEsS0FLMUM7UUFMMEMsRUFDdkNDLElBQUksRUFBRUMsV0FBVyxFQUlwQixHQUwwQzs7SUFPM0MsTUFBTUMsV0FBV0osNERBQVdBO0lBQzVCLE1BQU1LLFdBQVdELFNBQVNFLEtBQUssQ0FBQztJQUs1QixTQUFTQztRQUNMLE1BQU1DLFVBQVVDLFNBQVNDLGFBQWEsQ0FBQztRQUN2QyxNQUFNQyxRQUFRRixTQUFTQyxhQUFhLENBQUM7UUFDckNGLG9CQUFBQSw4QkFBQUEsUUFBU0ksU0FBUyxDQUFDQyxNQUFNLENBQUM7UUFDMUJGLGtCQUFBQSw0QkFBQUEsTUFBT0MsU0FBUyxDQUFDQyxNQUFNLENBQUM7UUFDeEJDLFFBQVFDLEdBQUcsQ0FBQ2IsS0FBS2MsSUFBSTtJQUN6QjtJQUdBLHFCQUNJOzswQkFDSSw4REFBQ0M7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNDO2dDQUFHRCxXQUFVOzBDQUFnRGhCLEtBQUtjLElBQUksSUFBSWQsS0FBS2MsSUFBSSxDQUFDLEVBQUU7Ozs7OzswQ0FDdkYsOERBQUNsQixvRkFBUUE7Z0NBQUNzQixNQUFNO2dDQUFJQyxTQUFTZDtnQ0FBV1csV0FBVTs7Ozs7Ozs7Ozs7O2tDQUV0RCw4REFBQ0k7d0JBQUdKLFdBQVU7OzRCQUVUZix3QkFBQUEsa0NBQUFBLFlBQWFvQixHQUFHLENBQUMsQ0FBQ0M7Z0NBRVAsSUFBSUMsV0FBVyxZQUFZcEIsUUFBUSxDQUFDQSxTQUFTcUIsTUFBTSxHQUFDLEVBQUUsSUFBRUYsRUFBRUcsT0FBTyxHQUFHLGtCQUFnQjtnQ0FFckYscUJBQU8sOERBQUMvQixpREFBSUE7b0NBQUNnQyxNQUFNLGFBQTBDSixPQUE3QnRCLEtBQUtjLElBQUksSUFBSWQsS0FBS2MsSUFBSSxDQUFDLEVBQUUsRUFBQyxLQUFhLE9BQVZRLEVBQUVHLE9BQU87OENBQWdCLDRFQUFDRTt3Q0FBR1gsV0FBVywyQkFBb0MsT0FBVE87a0RBQXlCRCxFQUFFTSxPQUFPO3VDQUFqQk4sRUFBRU8sRUFBRTs7Ozs7bUNBQXRFUCxFQUFFTyxFQUFFOzs7Ozs0QkFDOUY7MENBRUEsOERBQUNsQyxnREFBT0E7Z0NBQUNLLE1BQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR3ZCLDhEQUFDSCx3R0FBa0JBO2dCQUFDcUIsTUFBTTtnQkFBSUYsV0FBVTtnQkFBK0RHLFNBQVNkOzs7Ozs7OztBQUc1SDtHQTVDOEJOOztRQU9iRCx3REFBV0E7OztLQVBFQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvQ2hhcHRlcnNsaXN0LnRzeD8yZTM3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgTmV3SXRlbSBmcm9tIFwiLi9OZXdJdGVtXCI7XG5pbXBvcnQgeyBSeENyb3NzMiB9IGZyb20gXCJyZWFjdC1pY29ucy9yeFwiO1xuaW1wb3J0IHsgRmFBcnJvd0NpcmNsZVJpZ2h0IH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5pbXBvcnQgeyB1c2UsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVBhdGhuYW1lIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuXG5cblxuaW50ZXJmYWNlIGRhdGEge1xuICAgIGNoYXB0ZXI6IHN0cmluZ1xuICAgIHVybG5hbWU6c3RyaW5nXG4gICAgaWQ6IG51bWJlclxufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBDaGFwdGVyc2xpc3Qoe1xuICAgIGRhdGEsIGNvbnRlbnREYXRhXG59OiB7XG4gICAgY29udGVudERhdGE6IGRhdGFbXVxuICAgIGRhdGE6IHsgc2x1Zz86IHN0cmluZ1tdIH1cbn0pIHtcblxuY29uc3QgcGF0aG5hbWUgPSB1c2VQYXRobmFtZSgpXG5jb25zdCB1cmxhcnJheSA9IHBhdGhuYW1lLnNwbGl0KCcvJylcblxuXG5cblxuICAgIGZ1bmN0aW9uIHRvZ2dsZWJhcigpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFwdGVyLWJhcicpXG4gICAgICAgIGNvbnN0IGFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFycm93JylcbiAgICAgICAgZWxlbWVudD8uY2xhc3NMaXN0LnRvZ2dsZShcIi10cmFuc2xhdGUteC1bMjUwcHhdXCIpXG4gICAgICAgIGFycm93Py5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEuc2x1ZylcbiAgICB9XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBib3JkZXItci0yIGgtWzEwMHZoXSBib3JkZXItci1zbGF0ZS03MDAgb3ZlcmZsb3ctc2Nyb2xsIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIC10cmFuc2xhdGUteC1bMjUwcHhdIG1kOnRyYW5zbGF0ZS14LTAgcC0wIHcgbWQ6cmVsYXRpdmUgYWJzb2x1dGUgdy1bMjUwcHhdIG1kOnctZnVsbCBiZy1bIzE2MTcxZl0gei0xMCB0cmFuc2l0aW9uLXRyYW5zZm9ybSBjaGFwdGVyLWJhclwiID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTggaXRlbXMtY2VudGUgXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ3LWZ1bGwgIHRleHQtY2VudGVyIHB5LTIgdXBwZXJjYXNlIGZvbnQtYm9sZFwiPntkYXRhLnNsdWcgJiYgZGF0YS5zbHVnWzBdfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxSeENyb3NzMiBzaXplPXs0MH0gb25DbGljaz17dG9nZ2xlYmFyfSBjbGFzc05hbWU9XCJtZDpoaWRkZW4gW2N1cnNvcjpwb2ludGVyXVwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInctZnVsbCBtdC00IHRleHQtc20gZm9udC1tZWRpdW0gY2FwaXRhbGl6ZSBjdXJzb3ItcG9pbnRlciBtYi0xNiBjaGFwdGVyLWxpc3RcIj5cblxuICAgICAgICAgICAgICAgICAgICB7Y29udGVudERhdGE/Lm1hcCgoZTogYW55KSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlzQWN0aXZlID0gKHVybGFycmF5JiYodXJsYXJyYXlbdXJsYXJyYXkubGVuZ3RoLTFdPT1lLnVybG5hbWUpKT9cInRleHQtYmx1ZS02MDBcIjpcInRleHQtZ3JheS00MDBcIjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8TGluayBocmVmPXtgL21haW5kYXRhLyR7ZGF0YS5zbHVnICYmIGRhdGEuc2x1Z1swXX0vJHtlLnVybG5hbWV9YH0ga2V5PXtlLmlkfSA+PGxpIGNsYXNzTmFtZT17YGhvdmVyOnRleHQtYmx1ZS02MDAgcC0xICR7aXNBY3RpdmV9YCB9a2V5PXtlLmlkfSA+e2UuY2hhcHRlcn08L2xpPjwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgfSl9XG5cbiAgICAgICAgICAgICAgICAgICAgPE5ld0l0ZW0gZGF0YT17ZGF0YX0gLz5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8RmFBcnJvd0NpcmNsZVJpZ2h0IHNpemU9ezMwfSBjbGFzc05hbWU9XCJhYnNvbHV0ZSBhcnJvdyB6LTEwIC1sZWZ0LTAgdG9wLTQgbWQ6aGlkZGVuIFtjdXJzb3I6cG9pbnRlcl1cIiBvbkNsaWNrPXt0b2dnbGViYXJ9IC8+XG4gICAgICAgIDwvPlxuICAgIClcbn1cbiJdLCJuYW1lcyI6WyJMaW5rIiwiTmV3SXRlbSIsIlJ4Q3Jvc3MyIiwiRmFBcnJvd0NpcmNsZVJpZ2h0IiwidXNlUGF0aG5hbWUiLCJDaGFwdGVyc2xpc3QiLCJkYXRhIiwiY29udGVudERhdGEiLCJwYXRobmFtZSIsInVybGFycmF5Iiwic3BsaXQiLCJ0b2dnbGViYXIiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYXJyb3ciLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJjb25zb2xlIiwibG9nIiwic2x1ZyIsImRpdiIsImNsYXNzTmFtZSIsImgzIiwic2l6ZSIsIm9uQ2xpY2siLCJ1bCIsIm1hcCIsImUiLCJpc0FjdGl2ZSIsImxlbmd0aCIsInVybG5hbWUiLCJocmVmIiwibGkiLCJjaGFwdGVyIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Chapterslist.tsx\n"));

/***/ })

});
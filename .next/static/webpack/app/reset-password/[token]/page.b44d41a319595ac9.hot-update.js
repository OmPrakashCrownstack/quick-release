"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/reset-password/[token]/page",{

/***/ "(app-pages-browser)/./src/app/reset-password/[token]/page.tsx":
/*!*************************************************!*\
  !*** ./src/app/reset-password/[token]/page.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_AuthForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/AuthForm */ \"(app-pages-browser)/./src/components/AuthForm.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var _components_ui_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/form */ \"(app-pages-browser)/./src/components/ui/form.tsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./src/components/ui/input.tsx\");\n/* harmony import */ var _components_ui_use_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/use-toast */ \"(app-pages-browser)/./src/components/ui/use-toast.ts\");\n/* harmony import */ var _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @hookform/resolvers/zod */ \"(app-pages-browser)/./node_modules/@hookform/resolvers/zod/dist/zod.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _barrel_optimize_names_Loader_lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=Loader!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/loader.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! zod */ \"(app-pages-browser)/./node_modules/zod/lib/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nconst ResetPassword = (param)=>{\n    let { params } = param;\n    _s();\n    const [verified, setVerified] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(null);\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(\"\");\n    const [loader, setLoader] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);\n    const { toast } = (0,_components_ui_use_toast__WEBPACK_IMPORTED_MODULE_5__.useToast)();\n    const formSchema = zod__WEBPACK_IMPORTED_MODULE_8__.z.object({\n        password: zod__WEBPACK_IMPORTED_MODULE_8__.z.string().min(1, {\n            message: \"Required\"\n        }).min(6, {\n            message: \"Password should be minimum 6 characters\"\n        })\n    });\n    const form = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_9__.useForm)({\n        resolver: (0,_hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_6__.zodResolver)(formSchema),\n        defaultValues: {\n            password: \"\"\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{\n        const verifyToken = async ()=>{\n            try {\n                const res = await axios__WEBPACK_IMPORTED_MODULE_10__[\"default\"].post(\"/api/verify-token\", {\n                    token: params.token\n                });\n                setVerified(true);\n                const userData = await res.data;\n                setUser(userData);\n            } catch (error) {\n                console.log(error);\n                setVerified(true);\n            }\n        };\n        verifyToken();\n    }, [\n        params.token\n    ]);\n    const ResetPassword = async (values, e)=>{\n        e.preventDefault();\n        const data = {\n            values,\n            email: user === null || user === void 0 ? void 0 : user.email\n        };\n        try {\n            const res = await axios__WEBPACK_IMPORTED_MODULE_10__[\"default\"].post(\"/api/reset-password\", data);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AuthForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_3__.Form, {\n            ...form,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: form.handleSubmit(forgetPassword),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid gap-2 pb-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_3__.FormField, {\n                            control: form.control,\n                            name: \"password\",\n                            render: (param)=>{\n                                let { field } = param;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_3__.FormItem, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {\n                                            children: \"Enter New Password\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/crownstack/quick-release/src/app/reset-password/[token]/page.tsx\",\n                                            lineNumber: 104,\n                                            columnNumber: 19\n                                        }, void 0),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_3__.FormControl, {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_4__.Input, {\n                                                placeholder: \"Password\",\n                                                ...field,\n                                                type: \"password\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/crownstack/quick-release/src/app/reset-password/[token]/page.tsx\",\n                                                lineNumber: 106,\n                                                columnNumber: 21\n                                            }, void 0)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/crownstack/quick-release/src/app/reset-password/[token]/page.tsx\",\n                                            lineNumber: 105,\n                                            columnNumber: 19\n                                        }, void 0),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_3__.FormMessage, {\n                                            className: \"text-red-600\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/crownstack/quick-release/src/app/reset-password/[token]/page.tsx\",\n                                            lineNumber: 108,\n                                            columnNumber: 19\n                                        }, void 0)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/crownstack/quick-release/src/app/reset-password/[token]/page.tsx\",\n                                    lineNumber: 103,\n                                    columnNumber: 17\n                                }, void 0);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/crownstack/quick-release/src/app/reset-password/[token]/page.tsx\",\n                            lineNumber: 99,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/crownstack/quick-release/src/app/reset-password/[token]/page.tsx\",\n                        lineNumber: 98,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        type: \"submit\",\n                        children: loader ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"px-2\",\n                                    children: \"Send Reset Link \"\n                                }, void 0, false, {\n                                    fileName: \"/Users/crownstack/quick-release/src/app/reset-password/[token]/page.tsx\",\n                                    lineNumber: 116,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Loader_lucide_react__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/crownstack/quick-release/src/app/reset-password/[token]/page.tsx\",\n                                    lineNumber: 117,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true) : \"Send Reset Link\"\n                    }, void 0, false, {\n                        fileName: \"/Users/crownstack/quick-release/src/app/reset-password/[token]/page.tsx\",\n                        lineNumber: 113,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/crownstack/quick-release/src/app/reset-password/[token]/page.tsx\",\n                lineNumber: 97,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/crownstack/quick-release/src/app/reset-password/[token]/page.tsx\",\n            lineNumber: 96,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/crownstack/quick-release/src/app/reset-password/[token]/page.tsx\",\n        lineNumber: 86,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ResetPassword, \"YZxnCKWvA415JW/hoZFpHueJCzA=\", false, function() {\n    return [\n        _components_ui_use_toast__WEBPACK_IMPORTED_MODULE_5__.useToast,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_9__.useForm\n    ];\n});\n_c = ResetPassword;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ResetPassword);\nvar _c;\n$RefreshReg$(_c, \"ResetPassword\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcmVzZXQtcGFzc3dvcmQvW3Rva2VuXS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQzZDO0FBQ0c7QUFRbEI7QUFDZ0I7QUFDTztBQUNDO0FBQzVCO0FBQ1k7QUFDTTtBQUNGO0FBQ2xCO0FBY3hCLE1BQU1pQixnQkFBZ0I7UUFBQyxFQUFFQyxNQUFNLEVBQU87O0lBQ3BDLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNPLE1BQU1DLFFBQVEsR0FBR1IsK0NBQVFBLENBQWM7SUFDOUMsTUFBTSxDQUFDUyxVQUFVQyxZQUFZLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1csUUFBUUMsVUFBVSxHQUFHWiwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLEVBQUVhLEtBQUssRUFBRSxHQUFHbEIsa0VBQVFBO0lBQzFCLE1BQU1tQixhQUFhWixrQ0FBQ0EsQ0FBQ2EsTUFBTSxDQUFDO1FBQzFCTixVQUFVUCxrQ0FBQ0EsQ0FDUmMsTUFBTSxHQUNOQyxHQUFHLENBQUMsR0FBRztZQUFFQyxTQUFTO1FBQVcsR0FDN0JELEdBQUcsQ0FBQyxHQUFHO1lBQUVDLFNBQVM7UUFBMEM7SUFDakU7SUFFQSxNQUFNQyxPQUFPbEIsd0RBQU9BLENBQTZCO1FBQy9DbUIsVUFBVXhCLG9FQUFXQSxDQUFDa0I7UUFDdEJPLGVBQWU7WUFDYlosVUFBVTtRQUNaO0lBQ0Y7SUFFQVYsZ0RBQVNBLENBQUM7UUFDUixNQUFNdUIsY0FBYztZQUNsQixJQUFJO2dCQUNGLE1BQU1DLE1BQU0sTUFBTTFCLDhDQUFLQSxDQUFDMkIsSUFBSSxDQUFDLHFCQUFxQjtvQkFDaERDLE9BQU9yQixPQUFPcUIsS0FBSztnQkFDckI7Z0JBQ0FuQixZQUFZO2dCQUNaLE1BQU1vQixXQUFXLE1BQU1ILElBQUlJLElBQUk7Z0JBRS9CbkIsUUFBUWtCO1lBQ1YsRUFBRSxPQUFPRSxPQUFPO2dCQUNkQyxRQUFRQyxHQUFHLENBQUNGO2dCQUNadEIsWUFBWTtZQUNkO1FBQ0Y7UUFDQWdCO0lBQ0YsR0FBRztRQUFDbEIsT0FBT3FCLEtBQUs7S0FBQztJQUVqQixNQUFNdEIsZ0JBQWdCLE9BQU80QixRQUFvQ0M7UUFDL0RBLEVBQUVDLGNBQWM7UUFFaEIsTUFBTU4sT0FBTztZQUNYSTtZQUNBRyxLQUFLLEVBQUUzQixpQkFBQUEsMkJBQUFBLEtBQU0yQixLQUFLO1FBQ3BCO1FBRUEsSUFBSTtZQUNGLE1BQU1YLE1BQU0sTUFBTTFCLDhDQUFLQSxDQUFDMkIsSUFBSSxDQUFDLHVCQUF1Qkc7UUFDdEQsRUFBRSxPQUFPQyxPQUFPO1lBQ2RDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDZDtJQUNGO0lBQ0EscUJBQ0UsOERBQUMxQyw0REFBUUE7a0JBVVAsNEVBQUNPLHFEQUFJQTtZQUFFLEdBQUcwQixJQUFJO3NCQUNaLDRFQUFDQTtnQkFBS2dCLFVBQVVoQixLQUFLaUIsWUFBWSxDQUFDQzs7a0NBQ2hDLDhEQUFDQzt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ25ELDBEQUFTQTs0QkFDUm9ELFNBQVNyQixLQUFLcUIsT0FBTzs0QkFDckJDLE1BQUs7NEJBQ0xDLFFBQVE7b0NBQUMsRUFBRUMsS0FBSyxFQUFFO3FEQUNoQiw4REFBQ3RELHlEQUFRQTs7c0RBQ1AsOERBQUNDLDBEQUFTQTtzREFBQzs7Ozs7O3NEQUNYLDhEQUFDQyw0REFBV0E7c0RBQ1YsNEVBQUNHLHVEQUFLQTtnREFBQ2tELGFBQVk7Z0RBQVksR0FBR0QsS0FBSztnREFBRUUsTUFBSzs7Ozs7Ozs7Ozs7c0RBRWhELDhEQUFDckQsNERBQVdBOzRDQUFDK0MsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSy9CLDhEQUFDcEQseURBQU1BO3dCQUFDMEQsTUFBSztrQ0FDVmxDLHVCQUNDOzs4Q0FDRSw4REFBQ21DO29DQUFLUCxXQUFVOzhDQUFPOzs7Ozs7OENBQ3ZCLDhEQUFDekMsbUZBQU1BOzs7Ozs7MkNBR1Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPZDtHQTlGTUs7O1FBS2NSLDhEQUFRQTtRQVFiTSxvREFBT0E7OztLQWJoQkU7QUFnR04sK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9yZXNldC1wYXNzd29yZC9bdG9rZW5dL3BhZ2UudHN4PzlkOGUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgQXV0aEZvcm0gZnJvbSBcIkAvY29tcG9uZW50cy9BdXRoRm9ybVwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCB7XG4gIEZvcm1GaWVsZCxcbiAgRm9ybUl0ZW0sXG4gIEZvcm1MYWJlbCxcbiAgRm9ybUNvbnRyb2wsXG4gIEZvcm1NZXNzYWdlLFxuICBGb3JtLFxufSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2Zvcm1cIjtcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9pbnB1dFwiO1xuaW1wb3J0IHsgdXNlVG9hc3QgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3VzZS10b2FzdFwiO1xuaW1wb3J0IHsgem9kUmVzb2x2ZXIgfSBmcm9tIFwiQGhvb2tmb3JtL3Jlc29sdmVycy96b2RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IExvYWRlciB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XG5pbXBvcnQgeyB6IH0gZnJvbSBcInpvZFwiO1xuXG5pbnRlcmZhY2UgVXNlciB7XG4gIGNyZWF0ZWRBdDogU3RyaW5nO1xuICBlbWFpbDogU3RyaW5nO1xuICBmaXJzdE5hbWU6IFN0cmluZztcbiAgaWQ6IFN0cmluZztcbiAgbGFzdE5hbWU6IFN0cmluZztcbiAgb3JnTmFtZTogU3RyaW5nO1xuICBwYXNzd29yZDogU3RyaW5nO1xuICByZXNldFRva2VuOiBTdHJpbmc7XG4gIHJlc2V0VG9rZW5FeHBpcnk6IFN0cmluZztcbn1cblxuY29uc3QgUmVzZXRQYXNzd29yZCA9ICh7IHBhcmFtcyB9OiBhbnkpID0+IHtcbiAgY29uc3QgW3ZlcmlmaWVkLCBzZXRWZXJpZmllZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPFVzZXIgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2xvYWRlciwgc2V0TG9hZGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgeyB0b2FzdCB9ID0gdXNlVG9hc3QoKTtcbiAgY29uc3QgZm9ybVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgICBwYXNzd29yZDogelxuICAgICAgLnN0cmluZygpXG4gICAgICAubWluKDEsIHsgbWVzc2FnZTogXCJSZXF1aXJlZFwiIH0pXG4gICAgICAubWluKDYsIHsgbWVzc2FnZTogXCJQYXNzd29yZCBzaG91bGQgYmUgbWluaW11bSA2IGNoYXJhY3RlcnNcIiB9KSxcbiAgfSk7XG5cbiAgY29uc3QgZm9ybSA9IHVzZUZvcm08ei5pbmZlcjx0eXBlb2YgZm9ybVNjaGVtYT4+KHtcbiAgICByZXNvbHZlcjogem9kUmVzb2x2ZXIoZm9ybVNjaGVtYSksXG4gICAgZGVmYXVsdFZhbHVlczoge1xuICAgICAgcGFzc3dvcmQ6IFwiXCIsXG4gICAgfSxcbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB2ZXJpZnlUb2tlbiA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoXCIvYXBpL3ZlcmlmeS10b2tlblwiLCB7XG4gICAgICAgICAgdG9rZW46IHBhcmFtcy50b2tlbixcbiAgICAgICAgfSk7XG4gICAgICAgIHNldFZlcmlmaWVkKHRydWUpO1xuICAgICAgICBjb25zdCB1c2VyRGF0YSA9IGF3YWl0IHJlcy5kYXRhO1xuXG4gICAgICAgIHNldFVzZXIodXNlckRhdGEpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICBzZXRWZXJpZmllZCh0cnVlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHZlcmlmeVRva2VuKCk7XG4gIH0sIFtwYXJhbXMudG9rZW5dKTtcblxuICBjb25zdCBSZXNldFBhc3N3b3JkID0gYXN5bmMgKHZhbHVlczogei5pbmZlcjx0eXBlb2YgZm9ybVNjaGVtYT4sIGU6IGFueSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICB2YWx1ZXMsXG4gICAgICBlbWFpbDogdXNlcj8uZW1haWwsXG4gICAgfTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KFwiL2FwaS9yZXNldC1wYXNzd29yZFwiLCBkYXRhKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8QXV0aEZvcm0+XG4gICAgICB7LyogPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLTIgYm9yZGVyLWJsYWNrXCJcbiAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlNVQk1JVDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPiAqL31cbiAgICAgIDxGb3JtIHsuLi5mb3JtfT5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2Zvcm0uaGFuZGxlU3VibWl0KGZvcmdldFBhc3N3b3JkKX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC0yIHBiLTRcIj5cbiAgICAgICAgICAgIDxGb3JtRmllbGRcbiAgICAgICAgICAgICAgY29udHJvbD17Zm9ybS5jb250cm9sfVxuICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkIH0pID0+IChcbiAgICAgICAgICAgICAgICA8Rm9ybUl0ZW0+XG4gICAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsPkVudGVyIE5ldyBQYXNzd29yZDwvRm9ybUxhYmVsPlxuICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sPlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIHsuLi5maWVsZH0gdHlwZT1cInBhc3N3b3JkXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgICAgICAgICA8Rm9ybU1lc3NhZ2UgY2xhc3NOYW1lPVwidGV4dC1yZWQtNjAwXCIgLz5cbiAgICAgICAgICAgICAgICA8L0Zvcm1JdGVtPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgIHtsb2FkZXIgPyAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHgtMlwiPlNlbmQgUmVzZXQgTGluayA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPExvYWRlciAvPlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIFwiU2VuZCBSZXNldCBMaW5rXCJcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvRm9ybT5cbiAgICA8L0F1dGhGb3JtPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVzZXRQYXNzd29yZDtcbiJdLCJuYW1lcyI6WyJBdXRoRm9ybSIsIkJ1dHRvbiIsIkZvcm1GaWVsZCIsIkZvcm1JdGVtIiwiRm9ybUxhYmVsIiwiRm9ybUNvbnRyb2wiLCJGb3JtTWVzc2FnZSIsIkZvcm0iLCJJbnB1dCIsInVzZVRvYXN0Iiwiem9kUmVzb2x2ZXIiLCJheGlvcyIsIkxvYWRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlRm9ybSIsInoiLCJSZXNldFBhc3N3b3JkIiwicGFyYW1zIiwidmVyaWZpZWQiLCJzZXRWZXJpZmllZCIsInVzZXIiLCJzZXRVc2VyIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImxvYWRlciIsInNldExvYWRlciIsInRvYXN0IiwiZm9ybVNjaGVtYSIsIm9iamVjdCIsInN0cmluZyIsIm1pbiIsIm1lc3NhZ2UiLCJmb3JtIiwicmVzb2x2ZXIiLCJkZWZhdWx0VmFsdWVzIiwidmVyaWZ5VG9rZW4iLCJyZXMiLCJwb3N0IiwidG9rZW4iLCJ1c2VyRGF0YSIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJ2YWx1ZXMiLCJlIiwicHJldmVudERlZmF1bHQiLCJlbWFpbCIsIm9uU3VibWl0IiwiaGFuZGxlU3VibWl0IiwiZm9yZ2V0UGFzc3dvcmQiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250cm9sIiwibmFtZSIsInJlbmRlciIsImZpZWxkIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/reset-password/[token]/page.tsx\n"));

/***/ })

});
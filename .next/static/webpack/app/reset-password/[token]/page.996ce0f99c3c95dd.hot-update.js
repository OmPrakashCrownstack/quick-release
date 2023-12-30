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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_AuthForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/AuthForm */ \"(app-pages-browser)/./src/components/AuthForm.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var _components_ui_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/form */ \"(app-pages-browser)/./src/components/ui/form.tsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./src/components/ui/input.tsx\");\n/* harmony import */ var _components_ui_use_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/use-toast */ \"(app-pages-browser)/./src/components/ui/use-toast.ts\");\n/* harmony import */ var _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @hookform/resolvers/zod */ \"(app-pages-browser)/./node_modules/@hookform/resolvers/zod/dist/zod.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _barrel_optimize_names_Loader_lucide_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! __barrel_optimize__?names=Loader!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/loader.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! zod */ \"(app-pages-browser)/./node_modules/zod/lib/index.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_8__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nconst ResetPassword = (param)=>{\n    let { params } = param;\n    _s();\n    const [verified, setVerified] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(null);\n    const [loader, setLoader] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_8__.useRouter)();\n    const { toast } = (0,_components_ui_use_toast__WEBPACK_IMPORTED_MODULE_5__.useToast)();\n    const formSchema = zod__WEBPACK_IMPORTED_MODULE_9__.z.object({\n        password: zod__WEBPACK_IMPORTED_MODULE_9__.z.string().min(1, {\n            message: \"Required\"\n        }).min(6, {\n            message: \"Password should be minimum 6 characters\"\n        })\n    });\n    const form = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_10__.useForm)({\n        resolver: (0,_hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_6__.zodResolver)(formSchema),\n        defaultValues: {\n            password: \"\"\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{\n        const verifyToken = async ()=>{\n            try {\n                const res = await axios__WEBPACK_IMPORTED_MODULE_11__[\"default\"].post(\"/api/verify-token\", {\n                    token: params.token\n                });\n                setVerified(true);\n                const userData = await res.data;\n                setUser(userData);\n            } catch (error) {\n                console.log(error);\n                setVerified(true);\n            }\n        };\n        verifyToken();\n    }, [\n        params.token\n    ]);\n    const resetPassword = async (values, e)=>{\n        e.preventDefault();\n        setLoader(true);\n        const data = {\n            ...values,\n            email: user === null || user === void 0 ? void 0 : user.email\n        };\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_11__[\"default\"].post(\"/api/reset-password\", data);\n            toast({\n                title: \"Reset Successfully\"\n            });\n            setLoader(false);\n            router.push(\"/\");\n        } catch (error) {\n            console.log(error);\n            setLoader(false);\n            toast({\n                title: error.response.data\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AuthForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        title: \"Enter Your New Password\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_3__.Form, {\n            ...form,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: form.handleSubmit(resetPassword),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid gap-2 pb-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_3__.FormField, {\n                            control: form.control,\n                            name: \"password\",\n                            render: (param)=>{\n                                let { field } = param;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_3__.FormItem, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {\n                                            children: \"Enter New Password\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/crownstack/quick-release/src/app/reset-password/[token]/page.tsx\",\n                                            lineNumber: 105,\n                                            columnNumber: 19\n                                        }, void 0),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_3__.FormControl, {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_4__.Input, {\n                                                placeholder: \"Password\",\n                                                ...field,\n                                                type: \"password\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/crownstack/quick-release/src/app/reset-password/[token]/page.tsx\",\n                                                lineNumber: 107,\n                                                columnNumber: 21\n                                            }, void 0)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/crownstack/quick-release/src/app/reset-password/[token]/page.tsx\",\n                                            lineNumber: 106,\n                                            columnNumber: 19\n                                        }, void 0),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_3__.FormMessage, {\n                                            className: \"text-red-600\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/crownstack/quick-release/src/app/reset-password/[token]/page.tsx\",\n                                            lineNumber: 109,\n                                            columnNumber: 19\n                                        }, void 0)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/crownstack/quick-release/src/app/reset-password/[token]/page.tsx\",\n                                    lineNumber: 104,\n                                    columnNumber: 17\n                                }, void 0);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/crownstack/quick-release/src/app/reset-password/[token]/page.tsx\",\n                            lineNumber: 100,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/crownstack/quick-release/src/app/reset-password/[token]/page.tsx\",\n                        lineNumber: 99,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        type: \"submit\",\n                        children: loader ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"px-2\",\n                                    children: \" Reset Password \"\n                                }, void 0, false, {\n                                    fileName: \"/Users/crownstack/quick-release/src/app/reset-password/[token]/page.tsx\",\n                                    lineNumber: 117,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Loader_lucide_react__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/crownstack/quick-release/src/app/reset-password/[token]/page.tsx\",\n                                    lineNumber: 118,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true) : \" Reset Password\"\n                    }, void 0, false, {\n                        fileName: \"/Users/crownstack/quick-release/src/app/reset-password/[token]/page.tsx\",\n                        lineNumber: 114,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/crownstack/quick-release/src/app/reset-password/[token]/page.tsx\",\n                lineNumber: 98,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/crownstack/quick-release/src/app/reset-password/[token]/page.tsx\",\n            lineNumber: 97,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/crownstack/quick-release/src/app/reset-password/[token]/page.tsx\",\n        lineNumber: 96,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ResetPassword, \"pNc95VXDCz87rma5YvaXVv8hLug=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_8__.useRouter,\n        _components_ui_use_toast__WEBPACK_IMPORTED_MODULE_5__.useToast,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_10__.useForm\n    ];\n});\n_c = ResetPassword;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ResetPassword);\nvar _c;\n$RefreshReg$(_c, \"ResetPassword\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcmVzZXQtcGFzc3dvcmQvW3Rva2VuXS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDNkM7QUFDRztBQVFsQjtBQUNnQjtBQUNPO0FBQ0M7QUFDNUI7QUFDWTtBQUNNO0FBQ0Y7QUFDbEI7QUFDb0I7QUFjNUMsTUFBTWtCLGdCQUFnQjtRQUFDLEVBQUVDLE1BQU0sRUFBTzs7SUFDcEMsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1EsTUFBTUMsUUFBUSxHQUFHVCwrQ0FBUUEsQ0FBYztJQUM5QyxNQUFNLENBQUNVLFFBQVFDLFVBQVUsR0FBR1gsK0NBQVFBLENBQUM7SUFDckMsTUFBTVksU0FBU1QsMERBQVNBO0lBQ3hCLE1BQU0sRUFBRVUsS0FBSyxFQUFFLEdBQUdsQixrRUFBUUE7SUFDMUIsTUFBTW1CLGFBQWFaLGtDQUFDQSxDQUFDYSxNQUFNLENBQUM7UUFDMUJDLFVBQVVkLGtDQUFDQSxDQUNSZSxNQUFNLEdBQ05DLEdBQUcsQ0FBQyxHQUFHO1lBQUVDLFNBQVM7UUFBVyxHQUM3QkQsR0FBRyxDQUFDLEdBQUc7WUFBRUMsU0FBUztRQUEwQztJQUNqRTtJQUVBLE1BQU1DLE9BQU9uQix5REFBT0EsQ0FBNkI7UUFDL0NvQixVQUFVekIsb0VBQVdBLENBQUNrQjtRQUN0QlEsZUFBZTtZQUNiTixVQUFVO1FBQ1o7SUFDRjtJQUVBakIsZ0RBQVNBLENBQUM7UUFDUixNQUFNd0IsY0FBYztZQUNsQixJQUFJO2dCQUNGLE1BQU1DLE1BQU0sTUFBTTNCLDhDQUFLQSxDQUFDNEIsSUFBSSxDQUFDLHFCQUFxQjtvQkFDaERDLE9BQU9yQixPQUFPcUIsS0FBSztnQkFDckI7Z0JBQ0FuQixZQUFZO2dCQUNaLE1BQU1vQixXQUFXLE1BQU1ILElBQUlJLElBQUk7Z0JBRS9CbkIsUUFBUWtCO1lBQ1YsRUFBRSxPQUFPRSxPQUFPO2dCQUNkQyxRQUFRQyxHQUFHLENBQUNGO2dCQUNadEIsWUFBWTtZQUNkO1FBQ0Y7UUFDQWdCO0lBQ0YsR0FBRztRQUFDbEIsT0FBT3FCLEtBQUs7S0FBQztJQUVqQixNQUFNTSxnQkFBZ0IsT0FBT0MsUUFBb0NDO1FBQy9EQSxFQUFFQyxjQUFjO1FBQ2hCeEIsVUFBVTtRQUNWLE1BQU1pQixPQUFPO1lBQ1gsR0FBR0ssTUFBTTtZQUNURyxLQUFLLEVBQUU1QixpQkFBQUEsMkJBQUFBLEtBQU00QixLQUFLO1FBQ3BCO1FBRUEsSUFBSTtZQUNGLE1BQU12Qyw4Q0FBS0EsQ0FBQzRCLElBQUksQ0FBQyx1QkFBdUJHO1lBQ3hDZixNQUFNO2dCQUNKd0IsT0FBTztZQUNUO1lBQ0ExQixVQUFVO1lBQ1ZDLE9BQU8wQixJQUFJLENBQUM7UUFDZCxFQUFFLE9BQU9ULE9BQVk7WUFDbkJDLFFBQVFDLEdBQUcsQ0FBQ0Y7WUFDWmxCLFVBQVU7WUFDVkUsTUFBTTtnQkFDSndCLE9BQU9SLE1BQU1VLFFBQVEsQ0FBQ1gsSUFBSTtZQUM1QjtRQUNGO0lBQ0Y7SUFDQSxxQkFDRSw4REFBQzFDLDREQUFRQTtRQUFDbUQsT0FBTTtrQkFDZCw0RUFBQzVDLHFEQUFJQTtZQUFFLEdBQUcyQixJQUFJO3NCQUNaLDRFQUFDQTtnQkFBS29CLFVBQVVwQixLQUFLcUIsWUFBWSxDQUFDVDs7a0NBQ2hDLDhEQUFDVTt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ3ZELDBEQUFTQTs0QkFDUndELFNBQVN4QixLQUFLd0IsT0FBTzs0QkFDckJDLE1BQUs7NEJBQ0xDLFFBQVE7b0NBQUMsRUFBRUMsS0FBSyxFQUFFO3FEQUNoQiw4REFBQzFELHlEQUFRQTs7c0RBQ1AsOERBQUNDLDBEQUFTQTtzREFBQzs7Ozs7O3NEQUNYLDhEQUFDQyw0REFBV0E7c0RBQ1YsNEVBQUNHLHVEQUFLQTtnREFBQ3NELGFBQVk7Z0RBQVksR0FBR0QsS0FBSztnREFBRUUsTUFBSzs7Ozs7Ozs7Ozs7c0RBRWhELDhEQUFDekQsNERBQVdBOzRDQUFDbUQsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSy9CLDhEQUFDeEQseURBQU1BO3dCQUFDOEQsTUFBSztrQ0FDVnZDLHVCQUNDOzs4Q0FDRSw4REFBQ3dDO29DQUFLUCxXQUFVOzhDQUFPOzs7Ozs7OENBQ3ZCLDhEQUFDN0MsbUZBQU1BOzs7Ozs7MkNBR1Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPZDtHQTlGTU07O1FBSVdELHNEQUFTQTtRQUNOUiw4REFBUUE7UUFRYk0scURBQU9BOzs7S0FiaEJHO0FBZ0dOLCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcmVzZXQtcGFzc3dvcmQvW3Rva2VuXS9wYWdlLnRzeD85ZDhlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IEF1dGhGb3JtIGZyb20gXCJAL2NvbXBvbmVudHMvQXV0aEZvcm1cIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5pbXBvcnQge1xuICBGb3JtRmllbGQsXG4gIEZvcm1JdGVtLFxuICBGb3JtTGFiZWwsXG4gIEZvcm1Db250cm9sLFxuICBGb3JtTWVzc2FnZSxcbiAgRm9ybSxcbn0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9mb3JtXCI7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvaW5wdXRcIjtcbmltcG9ydCB7IHVzZVRvYXN0IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS91c2UtdG9hc3RcIjtcbmltcG9ydCB7IHpvZFJlc29sdmVyIH0gZnJvbSBcIkBob29rZm9ybS9yZXNvbHZlcnMvem9kXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xuaW1wb3J0IHsgeiB9IGZyb20gXCJ6b2RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcblxuaW50ZXJmYWNlIFVzZXIge1xuICBjcmVhdGVkQXQ6IFN0cmluZztcbiAgZW1haWw6IFN0cmluZztcbiAgZmlyc3ROYW1lOiBTdHJpbmc7XG4gIGlkOiBTdHJpbmc7XG4gIGxhc3ROYW1lOiBTdHJpbmc7XG4gIG9yZ05hbWU6IFN0cmluZztcbiAgcGFzc3dvcmQ6IFN0cmluZztcbiAgcmVzZXRUb2tlbjogU3RyaW5nO1xuICByZXNldFRva2VuRXhwaXJ5OiBTdHJpbmc7XG59XG5cbmNvbnN0IFJlc2V0UGFzc3dvcmQgPSAoeyBwYXJhbXMgfTogYW55KSA9PiB7XG4gIGNvbnN0IFt2ZXJpZmllZCwgc2V0VmVyaWZpZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTxVc2VyIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtsb2FkZXIsIHNldExvYWRlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IHRvYXN0IH0gPSB1c2VUb2FzdCgpO1xuICBjb25zdCBmb3JtU2NoZW1hID0gei5vYmplY3Qoe1xuICAgIHBhc3N3b3JkOiB6XG4gICAgICAuc3RyaW5nKClcbiAgICAgIC5taW4oMSwgeyBtZXNzYWdlOiBcIlJlcXVpcmVkXCIgfSlcbiAgICAgIC5taW4oNiwgeyBtZXNzYWdlOiBcIlBhc3N3b3JkIHNob3VsZCBiZSBtaW5pbXVtIDYgY2hhcmFjdGVyc1wiIH0pLFxuICB9KTtcblxuICBjb25zdCBmb3JtID0gdXNlRm9ybTx6LmluZmVyPHR5cGVvZiBmb3JtU2NoZW1hPj4oe1xuICAgIHJlc29sdmVyOiB6b2RSZXNvbHZlcihmb3JtU2NoZW1hKSxcbiAgICBkZWZhdWx0VmFsdWVzOiB7XG4gICAgICBwYXNzd29yZDogXCJcIixcbiAgICB9LFxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHZlcmlmeVRva2VuID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChcIi9hcGkvdmVyaWZ5LXRva2VuXCIsIHtcbiAgICAgICAgICB0b2tlbjogcGFyYW1zLnRva2VuLFxuICAgICAgICB9KTtcbiAgICAgICAgc2V0VmVyaWZpZWQodHJ1ZSk7XG4gICAgICAgIGNvbnN0IHVzZXJEYXRhID0gYXdhaXQgcmVzLmRhdGE7XG5cbiAgICAgICAgc2V0VXNlcih1c2VyRGF0YSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIHNldFZlcmlmaWVkKHRydWUpO1xuICAgICAgfVxuICAgIH07XG4gICAgdmVyaWZ5VG9rZW4oKTtcbiAgfSwgW3BhcmFtcy50b2tlbl0pO1xuXG4gIGNvbnN0IHJlc2V0UGFzc3dvcmQgPSBhc3luYyAodmFsdWVzOiB6LmluZmVyPHR5cGVvZiBmb3JtU2NoZW1hPiwgZTogYW55KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldExvYWRlcih0cnVlKTtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgLi4udmFsdWVzLFxuICAgICAgZW1haWw6IHVzZXI/LmVtYWlsLFxuICAgIH07XG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgYXhpb3MucG9zdChcIi9hcGkvcmVzZXQtcGFzc3dvcmRcIiwgZGF0YSk7XG4gICAgICB0b2FzdCh7XG4gICAgICAgIHRpdGxlOiBcIlJlc2V0IFN1Y2Nlc3NmdWxseVwiLFxuICAgICAgfSk7XG4gICAgICBzZXRMb2FkZXIoZmFsc2UpO1xuICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIHNldExvYWRlcihmYWxzZSk7XG4gICAgICB0b2FzdCh7XG4gICAgICAgIHRpdGxlOiBlcnJvci5yZXNwb25zZS5kYXRhLFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gKFxuICAgIDxBdXRoRm9ybSB0aXRsZT1cIkVudGVyIFlvdXIgTmV3IFBhc3N3b3JkXCI+XG4gICAgICA8Rm9ybSB7Li4uZm9ybX0+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtmb3JtLmhhbmRsZVN1Ym1pdChyZXNldFBhc3N3b3JkKX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC0yIHBiLTRcIj5cbiAgICAgICAgICAgIDxGb3JtRmllbGRcbiAgICAgICAgICAgICAgY29udHJvbD17Zm9ybS5jb250cm9sfVxuICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkIH0pID0+IChcbiAgICAgICAgICAgICAgICA8Rm9ybUl0ZW0+XG4gICAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsPkVudGVyIE5ldyBQYXNzd29yZDwvRm9ybUxhYmVsPlxuICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sPlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIHsuLi5maWVsZH0gdHlwZT1cInBhc3N3b3JkXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgICAgICAgICA8Rm9ybU1lc3NhZ2UgY2xhc3NOYW1lPVwidGV4dC1yZWQtNjAwXCIgLz5cbiAgICAgICAgICAgICAgICA8L0Zvcm1JdGVtPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgIHtsb2FkZXIgPyAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHgtMlwiPiBSZXNldCBQYXNzd29yZCA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPExvYWRlciAvPlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIFwiIFJlc2V0IFBhc3N3b3JkXCJcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvRm9ybT5cbiAgICA8L0F1dGhGb3JtPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVzZXRQYXNzd29yZDtcbiJdLCJuYW1lcyI6WyJBdXRoRm9ybSIsIkJ1dHRvbiIsIkZvcm1GaWVsZCIsIkZvcm1JdGVtIiwiRm9ybUxhYmVsIiwiRm9ybUNvbnRyb2wiLCJGb3JtTWVzc2FnZSIsIkZvcm0iLCJJbnB1dCIsInVzZVRvYXN0Iiwiem9kUmVzb2x2ZXIiLCJheGlvcyIsIkxvYWRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlRm9ybSIsInoiLCJ1c2VSb3V0ZXIiLCJSZXNldFBhc3N3b3JkIiwicGFyYW1zIiwidmVyaWZpZWQiLCJzZXRWZXJpZmllZCIsInVzZXIiLCJzZXRVc2VyIiwibG9hZGVyIiwic2V0TG9hZGVyIiwicm91dGVyIiwidG9hc3QiLCJmb3JtU2NoZW1hIiwib2JqZWN0IiwicGFzc3dvcmQiLCJzdHJpbmciLCJtaW4iLCJtZXNzYWdlIiwiZm9ybSIsInJlc29sdmVyIiwiZGVmYXVsdFZhbHVlcyIsInZlcmlmeVRva2VuIiwicmVzIiwicG9zdCIsInRva2VuIiwidXNlckRhdGEiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwicmVzZXRQYXNzd29yZCIsInZhbHVlcyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImVtYWlsIiwidGl0bGUiLCJwdXNoIiwicmVzcG9uc2UiLCJvblN1Ym1pdCIsImhhbmRsZVN1Ym1pdCIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRyb2wiLCJuYW1lIiwicmVuZGVyIiwiZmllbGQiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/reset-password/[token]/page.tsx\n"));

/***/ })

});
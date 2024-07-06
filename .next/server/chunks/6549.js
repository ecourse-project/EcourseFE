"use strict";
exports.id = 6549;
exports.ids = [6549];
exports.modules = {

/***/ 6549:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57101);
/* harmony import */ var lodash_times__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4354);
/* harmony import */ var lodash_times__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_times__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54275);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53139);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2__, _emotion_react__WEBPACK_IMPORTED_MODULE_3__]);
([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2__, _emotion_react__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




function DocCourseItemSkeleton(props) {
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        css: _emotion_react__WEBPACK_IMPORTED_MODULE_3__.css`
        display: flex;
        isplay: flex;
        flex-wrap: wrap;
        gap: 25px;
        .doc-skeleton {
          padding-left: 8px;
          padding-right: 8px;
        }
      `,
        children: lodash_times__WEBPACK_IMPORTED_MODULE_1___default()(6).map((e, i)=>{
            return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "doc-skeleton",
                children: [
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        height: 130,
                        width: 200
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        height: 10,
                        width: 200
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        height: 10,
                        width: 200
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        height: 20,
                        width: 130
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        height: 30,
                        width: 200
                    })
                ]
            }, i);
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DocCourseItemSkeleton);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
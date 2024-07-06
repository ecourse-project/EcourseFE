"use strict";
exports.id = 8263;
exports.ids = [8263];
exports.modules = {

/***/ 68263:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57101);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53139);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_lib_api_course__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84626);
/* harmony import */ var src_lib_utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33264);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, _emotion_react__WEBPACK_IMPORTED_MODULE_1__, src_lib_api_course__WEBPACK_IMPORTED_MODULE_4__]);
([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, _emotion_react__WEBPACK_IMPORTED_MODULE_1__, src_lib_api_course__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const PostDetail = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { id } = router.query;
    const [content, setContent] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const [postDetail, setPostDetail] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const getPostDetail = async ()=>{
        try {
            const res = await src_lib_api_course__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getPostDetail(id);
            setContent(res.content || "");
            setPostDetail(res);
        } catch (error) {
            console.error(error);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        getPostDetail();
    }, []);
    return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        css: _emotion_react__WEBPACK_IMPORTED_MODULE_1__.css`
        padding: 30px;
        padding-top: 0;
        .create-date {
          text-align: right;
          font-weight: 500;
        }
        .author {
          font-weight: 700;
          font-size: 20px;
          text-align: right;
        }
        .topic {
          text-align: center;
        }
      `,
        children: [
            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: "create-date",
                children: [
                    "Ng\xe0y đăng: ",
                    (0,src_lib_utils_utils__WEBPACK_IMPORTED_MODULE_5__/* .getFormatDate */ .q8)(postDetail?.created)
                ]
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                dangerouslySetInnerHTML: {
                    __html: postDetail?.content || ""
                }
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostDetail);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
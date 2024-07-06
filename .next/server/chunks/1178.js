"use strict";
exports.id = 1178;
exports.ids = [1178];
exports.modules = {

/***/ 31178:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h2: () => (/* binding */ LoadingPage)
/* harmony export */ });
/* unused harmony exports NumPosition, LoadingContent, DivBlank */
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57101);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80261);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons_lib_icons_LoadingOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77529);
/* harmony import */ var _ant_design_icons_lib_icons_LoadingOutlined__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_LoadingOutlined__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53139);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4115);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, _emotion_react__WEBPACK_IMPORTED_MODULE_4__, _emotion_styled__WEBPACK_IMPORTED_MODULE_5__]);
([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, _emotion_react__WEBPACK_IMPORTED_MODULE_4__, _emotion_styled__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const LoadingPage = (props)=>{
    const { cssName, isLoading } = props;
    if (!isLoading) {
        return null;
    }
    const LoadingPageWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_5__["default"].div`
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background-color: #fff;
    z-index: 9999;
    display: grid;
    justify-content: center;
    align-items: center;
    .loader {
      width: 100vw;
      height: 100vh;
      border: 1px solid mistyrose;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-image: url('/loading.gif');
      background-position: center center;
      background-repeat: no-repeat;
    }
  `;
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LoadingPageWrapper, {
        className: `${cssName}`,
        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "loader",
            children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                id: "ld3"
            })
        })
    });
};
var NumPosition;
(function(NumPosition) {
    NumPosition["CENTER"] = "CENTER";
    NumPosition["TOP"] = "TOP";
})(NumPosition || (NumPosition = {}));
const LoadingContent = (props)=>{
    const { isLoading, children, className, position = NumPosition.CENTER } = props;
    const antIcon = /*#__PURE__*/ _jsx(LoadingOutlined, {
        style: {
            fontSize: 29
        },
        spin: true
    });
    return /*#__PURE__*/ _jsxs("div", {
        css: css`
        ${isLoading && "position: relative; opacity: .6;"}
      `,
        className: className ?? "",
        children: [
            isLoading && /*#__PURE__*/ _jsx("div", {
                className: "absolute w-full h-full flex justify-center items-center",
                css: css`
            position: absolute;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: ${position === NumPosition.CENTER ? "center" : "start"};
            z-index: 999;
            user-select: none;
            ${position === NumPosition.TOP && "padding-top:15%;"}
            .ant-spin {
              color: #000;
            }
          `,
                children: /*#__PURE__*/ _jsx(Spin, {
                    indicator: antIcon,
                    size: "large"
                })
            }),
            children ? children : /*#__PURE__*/ _jsx(DivBlank, {})
        ]
    });
};
const DivBlank = _emotion_styled__WEBPACK_IMPORTED_MODULE_5__["default"].div`
  min-height: 100px;
  height: 100%;
  background-color: #e7edf3;
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
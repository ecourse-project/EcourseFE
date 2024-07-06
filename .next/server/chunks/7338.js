"use strict";
exports.id = 7338;
exports.ids = [7338];
exports.modules = {

/***/ 63890:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57101);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__]);
_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// const IconChecked = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
const IconChecked = ()=>/*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "23",
        height: "22",
        id: "check",
        children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
            fill: "none",
            fillRule: "evenodd",
            stroke: "#3bb54a",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            children: [
                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M21 10.07V11a10 10 0 1 1-5.93-9.14"
                }),
                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M22 2 11 13l-3-3"
                })
            ]
        })
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconChecked);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 81591:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NP: () => (/* binding */ ItemDocCourseWrapper),
/* harmony export */   go: () => (/* binding */ DocCourseWrapper)
/* harmony export */ });
/* unused harmony exports PostWrapper, PostItemWrapper */
/* harmony import */ var src_lib_utils_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24519);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4115);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_styled__WEBPACK_IMPORTED_MODULE_1__]);
_emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const ItemDocCourseWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
  /* max-width: 210px; */
  min-width: 200px;
  min-height: 300px;
  &:hover {
    /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
    transition: all 1s ease;
  }

  .title,
  p {
    color: black;
    margin-bottom: 6px;
  }

  .title {
    display: block !important;
    display: -webkit-box !important;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    margin: 0.5rem 0;
    font-family: 'Montserrat';
    text-align: left;
    font-size: 14px;
    font-weight: 600;
    height: fit-content;
    text-decoration: none;
  }
  .author {
    font-family: 'Montserrat';
    text-align: left;
    font-size: 14px;
    font-weight: 500;
    font-style: italic;
  }

  .description {
    text-align: left;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    color: gray;
    white-space: normal;
  }

  @media only screen and (min-width: 1200px) {
    .ant-btn[disabled] {
      letter-spacing: 2px;
    }
  }

  @media only screen and (max-width: 1200px) {
    .ant-btn[disabled] {
      letter-spacing: 0px;
    }
  }

  .download {
    font-weight: 400;

    & .rate-score {
      color: #b4690e;
      font-weight: 700;
    }
  }

  .doc--image {
    max-width: 100%;
    margin-bottom: 10px;

    .doc-img,
    img {
      width: 200px;
      height: 130px;
      aspect-ratio: auto 240 / 135;
    }
  }

  .doc_info {
    margin: 0 10px;
  }

  .anticon {
    position: relative;
    bottom: 3px;
    right: 6px;
    color: ${src_lib_utils_enum__WEBPACK_IMPORTED_MODULE_0__/* .GlobalStyle */ .ZL.BROWN_YELLOW};
  }

  .anticon-star {
    color: unset;
    position: unset;
  }

  .card-btn {
    width: 100%;
    color: #000;
    border-color: #000;
    border-radius: 4px;
    font-weight: 700 !important;
  }

  .price-tag {
    display: flex;
    justify-content: space-evenly;
    font-weight: 600;
    font-size: 22px;
    margin-left: 10px;
    align-items: center;
  }
  .contact-us {
    text-align: center;
    margin: auto;
    display: block;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    gap: 10px;
    align-items: center;
    a {
      box-shadow: inset 0 0 0 0 #54b3d6;
      color: #54b3d6;
      margin: 0 -0.25rem;
      padding: 0 0.25rem;
      transition:
        color 0.3s ease-in-out,
        box-shadow 0.3s ease-in-out;
    }
    a:hover {
      box-shadow: inset 100px 0 0 0 #54b3d6;
      color: white;
    }
  }
  .doc-info {
    margin: 0 10px;
  }

  [ant-click-animating-without-extra-node='true']:after {
    display: none;
  }

  .ant-click-animating-node {
    display: none;
  }

  .ant-rate {
    font-size: 14px;
    margin: 0 10px;
    color: #ffa535;

    .ant-rate-star {
      margin: 0;
    }
  }

  button[disabled] {
    cursor: not-allowed;
  }
`;
const DocCourseWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  margin: 20px 0;
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  gap: 25px;
  justify-content: flex-start;
  /* .ant-col {
    padding: 0 5px 30px 5px;
  } */
  .item:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transition: all 1s ease;
  }
  .ant-empty {
    margin: auto;
  }
  .ant-col {
    flex: 0 0 calc(33.33% - 20px);
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 8px;
    padding: 8px;
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    transition: all 1s ease;
  }
  .search-course,
  .search-doc {
    flex: none;
    width: 100%;
    .detail {
      display: flex;
    }
  }
  .ant-card-head {
    background-color: #e8e8e8;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`;
const PostWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  margin: 20px 0;
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  gap: 25px;
  justify-content: flex-start;
  /* .ant-col {
    padding: 0 5px 30px 5px;
  } */
  .item:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transition: all 1s ease;
  }
  .ant-empty {
    margin: auto;
  }
`;
const PostItemWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
  min-width: 200px;
  min-height: 285px;

  img {
    width: 200px;
    height: 130px;
    aspect-ratio: auto 240/135;
  }
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
"use strict";
exports.id = 7595;
exports.ids = [7595];
exports.modules = {

/***/ 17595:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ HomeTopicCard)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57101);
/* harmony import */ var antd_lib_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18070);
/* harmony import */ var antd_lib_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4115);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70351);
/* harmony import */ var src_lib_utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33264);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, _emotion_styled__WEBPACK_IMPORTED_MODULE_2__]);
([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, _emotion_styled__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const HomeTopicCardWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 100%;
  max-width: ${(props)=>props.isSearch ? "" : "210px"};
  min-width: 200px;
  min-height: 300px;
  p {
    margin: 0;
  }
  .ant-image {
    float: left;
    margin-right: 15px;
    margin-bottom: 5px;
    min-height: 150px;
  }
  .post-name {
    font-weight: 700;
    min-height: ${(props)=>props.isSearch ? "" : ""};
    word-break: break-all;
  }
  .post-sumary {
    font-style: italic;
    font-weight: 500;
    min-height: 80px;
    /* text-align: left;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    color: gray;
    white-space: normal; */
  }
  .author {
    font-family: 'Montserrat';
    text-align: left;
    font-size: 14px;
    font-weight: 500;
    font-style: italic;
  }
  .post-create {
    margin: 10px;
    margin-bottom: 0;
    text-align: right;
  }
  .postItem {
    .post-detail {
      display: ${(props)=>props.isSearch ? "flex" : "grid"};
    }
    width: 100%;
    img {
      width: 200px;
      height: 130px;
      aspect-ratio: auto 240/135;
    }
  }
  .post-content {
    width: ${(props)=>props.isSearch ? "100%" : ""};
  }
`;
function HomeTopicCard(props) {
    const { post, isSideBar, isSearch } = props;
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HomeTopicCardWrapper, {
        isSearch: !!isSearch,
        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "postItem",
            children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                href: `${src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.POST}/${post.id}`,
                className: "post-detail",
                children: [
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                        src: post?.thumbnail?.image_path,
                        preview: false
                    }),
                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "post-content",
                        children: [
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "post-name",
                                children: post?.name
                            }),
                            post?.author && /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "author",
                                children: [
                                    "T\xe1c giả: ",
                                    post?.author
                                ]
                            }),
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "post-sumary",
                                children: post?.content_summary.length ? `${post?.content_summary?.slice(0, 160) + "..."}` : ""
                            }),
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "post-create",
                                children: (0,src_lib_utils_utils__WEBPACK_IMPORTED_MODULE_5__/* .getFormatDate */ .q8)(post?.created)
                            })
                        ]
                    })
                ]
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
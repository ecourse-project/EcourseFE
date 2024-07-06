"use strict";
exports.id = 9841;
exports.ids = [9841];
exports.modules = {

/***/ 19841:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ HomeSide)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57101);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22317);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30675);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons_lib_icons_RightOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11594);
/* harmony import */ var _ant_design_icons_lib_icons_RightOutlined__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_RightOutlined__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4115);
/* harmony import */ var antd_es_card_Meta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47029);
/* harmony import */ var antd_es_card_Meta__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_es_card_Meta__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_lib_api_course_query_hooks_useCourseHook__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9844);
/* harmony import */ var src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(70351);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, _emotion_styled__WEBPACK_IMPORTED_MODULE_4__, src_lib_api_course_query_hooks_useCourseHook__WEBPACK_IMPORTED_MODULE_7__]);
([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, _emotion_styled__WEBPACK_IMPORTED_MODULE_4__, src_lib_api_course_query_hooks_useCourseHook__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const { Search } = (antd_lib_input__WEBPACK_IMPORTED_MODULE_2___default());
const HomeSideWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].div`
  .side-item {
    margin-bottom: 10px;
  }
  a {
    text-decoration: none;
    font-weight: 600;
  }
  .fb-page {
    .ant-card-body {
      font-size: 20px;
      a {
        color: #0d8bf0 !important;
      }
    }
  }
  .topic {
    .topic-item {
      font-weight: 600;
      cursor: pointer;
      padding: 5px;
    }
  }
`;
function HomeSide(props) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const { search: searchTerm } = router.query;
    const { homeData } = (0,src_lib_api_course_query_hooks_useCourseHook__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    const onSearch = (value)=>{
        const url = `/search/${value}`;
        // Use router.push with shallow option to update URL without reloading the page
        router.push(url, undefined, {
            shallow: true
        });
    };
    return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(HomeSideWrapper, {
        children: [
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "side-item search-bar",
                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default()), {
                    title: "T\xecm kiếm",
                    style: {
                        width: 300
                    },
                    children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Search, {
                        placeholder: "Nhập để t\xecm",
                        onSearch: onSearch,
                        enterButton: true,
                        allowClear: true,
                        value: searchTerm
                    })
                })
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "side-item popular-content"
            }),
            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "side-item topic",
                children: [
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default()), {
                        title: "Chuy\xean mục",
                        style: {
                            width: 300
                        },
                        children: homeData?.category?.map((v)=>{
                            return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "topic-item",
                                onClick: ()=>onSearch(v),
                                children: [
                                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_RightOutlined__WEBPACK_IMPORTED_MODULE_3___default()), {}),
                                    v.toLocaleUpperCase()
                                ]
                            }, v);
                        })
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default()), {
                        title: "B\xe0i viết mới",
                        style: {
                            width: 300
                        },
                        children: homeData?.new_post?.map((v)=>{
                            return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "topic-item",
                                onClick: ()=>{
                                    router.push(`${src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.POST}/${v.id}`);
                                },
                                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    hoverable: true,
                                    style: {
                                        width: "100%"
                                    },
                                    cover: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: v?.thumbnail?.image_path || "",
                                        alt: "img",
                                        width: 200,
                                        height: 130
                                    }),
                                    children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_es_card_Meta__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        title: v?.name
                                    })
                                })
                            }, v.id);
                        })
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9844:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84626);
/* harmony import */ var src_lib_utils_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45354);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([___WEBPACK_IMPORTED_MODULE_1__]);
___WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const useCourseHook = ()=>{
    const { data: homeData, error: homeError } = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)("home", ___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getHome, {
        staleTime: src_lib_utils_constant__WEBPACK_IMPORTED_MODULE_2__/* .DEFAULT_STALE_TIME */ .ok,
        keepPreviousData: true,
        cacheTime: src_lib_utils_constant__WEBPACK_IMPORTED_MODULE_2__/* .ONE_DAY_CACHE_TIME */ .bQ,
        refetchOnWindowFocus: false
    });
    const { data: chatHistory, error: chatHistoryError, refetch: refetchChatList, isLoading: chatLoading } = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)("chat-history", ___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getChatHistory, {
        staleTime: src_lib_utils_constant__WEBPACK_IMPORTED_MODULE_2__/* .DEFAULT_STALE_TIME */ .ok,
        keepPreviousData: true,
        cacheTime: src_lib_utils_constant__WEBPACK_IMPORTED_MODULE_2__/* .ONE_DAY_CACHE_TIME */ .bQ,
        refetchOnWindowFocus: false
    });
    return {
        homeData,
        homeError,
        chatHistory,
        chatHistoryError,
        refetchChatList,
        chatLoading
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCourseHook);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
"use strict";
exports.id = 3431;
exports.ids = [3431];
exports.modules = {

/***/ 23431:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57101);
/* harmony import */ var _ant_design_icons_lib_icons_UnorderedListOutlined__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56612);
/* harmony import */ var _ant_design_icons_lib_icons_UnorderedListOutlined__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_UnorderedListOutlined__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53139);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22317);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28518);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_empty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14663);
/* harmony import */ var antd_lib_empty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_empty__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(27050);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(54275);
/* harmony import */ var src_components_course_course_item__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(12864);
/* harmony import */ var src_components_document_doc_item__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(57617);
/* harmony import */ var src_components_document_style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(81591);
/* harmony import */ var src_components_home_homeSide__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(19841);
/* harmony import */ var src_components_home_homeTopicCard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(17595);
/* harmony import */ var src_lib_api_course__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(84626);
/* harmony import */ var src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(34317);
/* harmony import */ var src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(70351);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, _emotion_react__WEBPACK_IMPORTED_MODULE_2__, react_loading_skeleton__WEBPACK_IMPORTED_MODULE_9__, src_components_course_course_item__WEBPACK_IMPORTED_MODULE_10__, src_components_document_doc_item__WEBPACK_IMPORTED_MODULE_11__, src_components_document_style__WEBPACK_IMPORTED_MODULE_12__, src_components_home_homeSide__WEBPACK_IMPORTED_MODULE_13__, src_components_home_homeTopicCard__WEBPACK_IMPORTED_MODULE_14__, src_lib_api_course__WEBPACK_IMPORTED_MODULE_15__]);
([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, _emotion_react__WEBPACK_IMPORTED_MODULE_2__, react_loading_skeleton__WEBPACK_IMPORTED_MODULE_9__, src_components_course_course_item__WEBPACK_IMPORTED_MODULE_10__, src_components_document_doc_item__WEBPACK_IMPORTED_MODULE_11__, src_components_document_style__WEBPACK_IMPORTED_MODULE_12__, src_components_home_homeSide__WEBPACK_IMPORTED_MODULE_13__, src_components_home_homeTopicCard__WEBPACK_IMPORTED_MODULE_14__, src_lib_api_course__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable prettier/prettier */ 

















var HomeActionKind;
(function(HomeActionKind) {
    HomeActionKind["LIST_DOC"] = "LIST_DOC";
    HomeActionKind["LIST_COURSE"] = "LIST_COURSE";
    HomeActionKind["UPDATE_DOC"] = "UPDATE_DOC";
    HomeActionKind["UPDATE_COURSE"] = "UPDATE_COURSE";
})(HomeActionKind || (HomeActionKind = {}));
const SearchPageUI = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const { search: searchTerm } = router.query;
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);
    const [searchResultData, setSearchResultData] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)([]);
    const getSearchData = async (searchTerm)=>{
        try {
            setLoading(true);
            const searchResult = await src_lib_api_course__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z.searchItems(searchTerm);
            setSearchResultData(searchResult);
        } catch (error) {
            console.log("error", error);
        } finally{
            setLoading(false);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{
        getSearchData(searchTerm || "");
    }, [
        searchTerm
    ]);
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "page-container",
        children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default()), {
            gutter: 16,
            style: {
                maxWidth: "100%"
            },
            children: [
                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default()), {
                    span: 18,
                    children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        css: _emotion_react__WEBPACK_IMPORTED_MODULE_2__.css`
              margin-bottom: 10px;
              .title {
                font-size: 14px;
                font-weight: 700;
                text-decoration: underline;
              }
              .ant-card-head-title {
                font-weight: 700;
              }
              .ant-card-body {
                display: grid;
                grid-template-columns: repeat(1, 1fr);
              }
              .ant-card-body::before {
                display: none;
              }
            `,
                        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_card__WEBPACK_IMPORTED_MODULE_3___default()), {
                            title: `Kết quả tìm kiếm của "${searchTerm || ""}"`,
                            extra: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                href: src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z.HOME,
                                children: [
                                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_UnorderedListOutlined__WEBPACK_IMPORTED_MODULE_1___default()), {}),
                                    "Xem tất cả"
                                ]
                            }),
                            children: loading ? /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_9__["default"], {
                                count: 10,
                                height: 120
                            }) : searchResultData?.length ? searchResultData.map((item)=>{
                                if (item.type === src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_16__/* .NavTypeEnum */ .pE.DOCUMENT) return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_document_style__WEBPACK_IMPORTED_MODULE_12__/* .DocCourseWrapper */ .go, {
                                    children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        className: "search-doc",
                                        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_document_doc_item__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                            document: item,
                                            isSearch: true
                                        })
                                    })
                                });
                                else if ([
                                    src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_16__/* .NavTypeEnum */ .pE.COURSE,
                                    src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_16__/* .NavTypeEnum */ .pE.CLASS
                                ].includes(item.type)) return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_document_style__WEBPACK_IMPORTED_MODULE_12__/* .DocCourseWrapper */ .go, {
                                    children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        className: "search-course",
                                        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_course_course_item__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                            course: item,
                                            isSearch: true
                                        })
                                    })
                                });
                                else if (item.type === src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_16__/* .NavTypeEnum */ .pE.POST) return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_document_style__WEBPACK_IMPORTED_MODULE_12__/* .DocCourseWrapper */ .go, {
                                    children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        className: "search-course",
                                        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_home_homeTopicCard__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                            post: {
                                                ...item
                                            },
                                            isSearch: true
                                        })
                                    })
                                });
                            }) : /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_empty__WEBPACK_IMPORTED_MODULE_5___default()), {
                                className: "empty-data",
                                image: (antd_lib_empty__WEBPACK_IMPORTED_MODULE_5___default().PRESENTED_IMAGE_SIMPLE)
                            })
                        })
                    })
                }),
                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default()), {
                    span: 6,
                    children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_home_homeSide__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {})
                })
            ]
        })
    });
};
const HomeSection = ()=>{
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SearchPageUI, {});
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeSection);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
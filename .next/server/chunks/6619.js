"use strict";
exports.id = 6619;
exports.ids = [6619];
exports.modules = {

/***/ 56619:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57101);
/* harmony import */ var antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20373);
/* harmony import */ var antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22317);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28518);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2278);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_empty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14663);
/* harmony import */ var antd_lib_empty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_empty__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14528);
/* harmony import */ var antd_lib_pagination__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_pagination__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(27050);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var src_components_document_doc_item__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(57617);
/* harmony import */ var src_components_document_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(81591);
/* harmony import */ var src_components_home_homeSide__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(19841);
/* harmony import */ var src_components_skeleton_document_skeleton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6549);
/* harmony import */ var src_lib_api_course__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(84626);
/* harmony import */ var src_lib_hooks_useQueryParam__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8443);
/* harmony import */ var src_lib_utils_enum__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(24519);
/* harmony import */ var src_lib_utils_format__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(90455);
/* harmony import */ var src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(70351);
/* harmony import */ var _ant_design_icons_lib_icons_HomeOutlined__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(95044);
/* harmony import */ var _ant_design_icons_lib_icons_HomeOutlined__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_HomeOutlined__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _ant_design_icons_lib_icons_SwapOutlined__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(5212);
/* harmony import */ var _ant_design_icons_lib_icons_SwapOutlined__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_SwapOutlined__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(53139);
/* harmony import */ var src_lib_utils_constant__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(45354);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_22__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, src_components_document_doc_item__WEBPACK_IMPORTED_MODULE_10__, src_components_document_style__WEBPACK_IMPORTED_MODULE_11__, src_components_home_homeSide__WEBPACK_IMPORTED_MODULE_12__, src_components_skeleton_document_skeleton__WEBPACK_IMPORTED_MODULE_13__, src_lib_api_course__WEBPACK_IMPORTED_MODULE_14__, src_lib_hooks_useQueryParam__WEBPACK_IMPORTED_MODULE_15__, _emotion_react__WEBPACK_IMPORTED_MODULE_21__]);
([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, src_components_document_doc_item__WEBPACK_IMPORTED_MODULE_10__, src_components_document_style__WEBPACK_IMPORTED_MODULE_11__, src_components_home_homeSide__WEBPACK_IMPORTED_MODULE_12__, src_components_skeleton_document_skeleton__WEBPACK_IMPORTED_MODULE_13__, src_lib_api_course__WEBPACK_IMPORTED_MODULE_14__, src_lib_hooks_useQueryParam__WEBPACK_IMPORTED_MODULE_15__, _emotion_react__WEBPACK_IMPORTED_MODULE_21__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable prettier/prettier */ 























const DocumentUI = ()=>{
    const header = (0,react_redux__WEBPACK_IMPORTED_MODULE_22__.useSelector)((state)=>state.app.header);
    const [listDoc, setListDoc] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)();
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const params = (0,src_lib_hooks_useQueryParam__WEBPACK_IMPORTED_MODULE_15__/* .useQueryParam */ .W)();
    const [pagination, setPagination] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)({
        page: params?.page || 1,
        limit: src_lib_utils_constant__WEBPACK_IMPORTED_MODULE_23__/* .DEFAULT_PAGE_SIZE */ .L8
    });
    const topicLabel = (0,react__WEBPACK_IMPORTED_MODULE_9__.useMemo)(()=>{
        const topic = header?.find((e)=>e.header === params.header)?.topic?.find((e)=>e.value === params.topic);
        return (0,src_lib_utils_format__WEBPACK_IMPORTED_MODULE_17__/* .UpperCaseFirstLetter */ .Rl)(params.topic === "ALL" ? "" : topic?.label ?? "");
    }, [
        params.topic,
        header
    ]);
    const fetchDocument = async (pagination)=>{
        const token = localStorage.getItem(src_lib_utils_enum__WEBPACK_IMPORTED_MODULE_16__/* .StorageKeys */ .BU.SESSION_KEY);
        try {
            setLoading(true);
            const newPagination = {
                ...pagination
            };
            // if (!params.page) pagination.page = 1;
            if (!token) {
                const homeDoc = await src_lib_api_course__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z.getHomeDocs(newPagination, params.topic === "ALL" ? "" : params.topic || "");
                setListDoc(homeDoc);
            } else {
                const homeDoc = await src_lib_api_course__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z.getAllDocs(newPagination, params.topic === "ALL" ? "" : params.topic || "");
                setListDoc(homeDoc);
            }
        } catch (error) {
            setLoading(false);
            console.log("Fetch Doc Fail :>> ", error);
        } finally{
            setLoading(false);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{
        fetchDocument(pagination);
    }, [
        pagination,
        params.topic
    ]);
    const onChangePage = (page)=>{
        setPagination({
            ...pagination,
            page
        });
        router.push(`${src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z.DOCUMENT}?topic=${params.topic}&page=${page}&header=${params.header}`);
    };
    return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_divider__WEBPACK_IMPORTED_MODULE_4___default()), {
                orientation: "left",
                children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_1___default()), {
                    separator: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_SwapOutlined__WEBPACK_IMPORTED_MODULE_20___default()), {}),
                    children: [
                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_1___default().Item), {
                            href: src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z.HOME,
                            children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_HomeOutlined__WEBPACK_IMPORTED_MODULE_19___default()), {
                                css: _emotion_react__WEBPACK_IMPORTED_MODULE_21__.css`
                font-size: 30px !important;
              `
                            })
                        }),
                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_1___default().Item), {
                            children: params?.header
                        }),
                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_1___default().Item), {
                            children: topicLabel
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((antd_lib_row__WEBPACK_IMPORTED_MODULE_7___default()), {
                gutter: 16,
                children: [
                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default()), {
                        span: 18,
                        children: [
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_card__WEBPACK_IMPORTED_MODULE_2___default()), {
                                children: loading ? /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_skeleton_document_skeleton__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {}) : /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_document_style__WEBPACK_IMPORTED_MODULE_11__/* .DocCourseWrapper */ .go, {
                                    children: listDoc?.results?.length ? (listDoc?.results?.map((e, i)=>{
                                        return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            className: "item",
                                            children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_document_doc_item__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                document: e
                                            })
                                        }, i);
                                    })) : /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_empty__WEBPACK_IMPORTED_MODULE_5___default()), {})
                                })
                            }),
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                css: _emotion_react__WEBPACK_IMPORTED_MODULE_21__.css`
              text-align: center;
            `,
                                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_pagination__WEBPACK_IMPORTED_MODULE_6___default()), {
                                    current: params.page || pagination.page,
                                    pageSize: pagination.limit,
                                    total: listDoc?.count || 0,
                                    showSizeChanger: false,
                                    hideOnSinglePage: true,
                                    onChange: onChangePage
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default()), {
                        span: 6,
                        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_home_homeSide__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {})
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DocumentUI);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
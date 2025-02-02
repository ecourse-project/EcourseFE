"use strict";
exports.id = 2170;
exports.ids = [2170];
exports.modules = {

/***/ 82170:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57101);
/* harmony import */ var _ant_design_icons_lib_icons_HomeOutlined__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95044);
/* harmony import */ var _ant_design_icons_lib_icons_HomeOutlined__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_HomeOutlined__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons_lib_icons_SwapOutlined__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5212);
/* harmony import */ var _ant_design_icons_lib_icons_SwapOutlined__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_SwapOutlined__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53139);
/* harmony import */ var antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20373);
/* harmony import */ var antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22317);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2278);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_empty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14663);
/* harmony import */ var antd_lib_empty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_empty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14528);
/* harmony import */ var antd_lib_pagination__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_pagination__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(28518);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(27050);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var src_components_home_homeSide__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(19841);
/* harmony import */ var src_components_home_homeTopicCard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(17595);
/* harmony import */ var src_lib_api_course__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(84626);
/* harmony import */ var src_lib_hooks_useQueryParam__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(8443);
/* harmony import */ var src_lib_utils_constant__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(45354);
/* harmony import */ var src_lib_utils_format__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(90455);
/* harmony import */ var src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(70351);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_19__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, _emotion_react__WEBPACK_IMPORTED_MODULE_3__, src_components_home_homeSide__WEBPACK_IMPORTED_MODULE_13__, src_components_home_homeTopicCard__WEBPACK_IMPORTED_MODULE_14__, src_lib_api_course__WEBPACK_IMPORTED_MODULE_15__, src_lib_hooks_useQueryParam__WEBPACK_IMPORTED_MODULE_16__]);
([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, _emotion_react__WEBPACK_IMPORTED_MODULE_3__, src_components_home_homeSide__WEBPACK_IMPORTED_MODULE_13__, src_components_home_homeTopicCard__WEBPACK_IMPORTED_MODULE_14__, src_lib_api_course__WEBPACK_IMPORTED_MODULE_15__, src_lib_hooks_useQueryParam__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





















const PostPage = ()=>{
    const header = (0,react_redux__WEBPACK_IMPORTED_MODULE_19__.useSelector)((state)=>state.app.header);
    const [listPost, setlistPost] = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)();
    const params = (0,src_lib_hooks_useQueryParam__WEBPACK_IMPORTED_MODULE_16__/* .useQueryParam */ .W)();
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(false);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter)();
    const [pagination, setPagination] = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)({
        page: params?.page || 1,
        limit: src_lib_utils_constant__WEBPACK_IMPORTED_MODULE_20__/* .DEFAULT_POST_PAGE_SIZE */ .Ag
    });
    const topicLabel = (0,react__WEBPACK_IMPORTED_MODULE_12__.useMemo)(()=>{
        const topic = header?.find((e)=>e.header === params.header)?.topic?.find((e)=>e.value === params.topic);
        return (0,src_lib_utils_format__WEBPACK_IMPORTED_MODULE_17__/* .UpperCaseFirstLetter */ .Rl)(params.topic === "ALL" ? "" : topic?.label ?? "");
    }, [
        params.topic,
        header
    ]);
    const getListPost = async (pagination)=>{
        try {
            setLoading(true);
            const res = await src_lib_api_course__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z.listPosts(pagination.limit, pagination.page, params.topic === "ALL" ? "" : params.topic || "", params.header);
            setlistPost(res);
        } catch (error) {
            console.error(error);
        } finally{
            setLoading(false);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_12__.useEffect)(()=>{
        setPagination({
            ...pagination,
            page: 1
        });
    }, [
        params.topic
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_12__.useEffect)(()=>{
        getListPost(pagination);
    }, [
        pagination,
        params.header,
        params.topic
    ]);
    const onChangePage = (page)=>{
        setPagination({
            ...pagination,
            page
        });
        router.push(`${src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z.POST}?topic=${params.topic}&header=${params.header}&page=${page}`);
    };
    return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_divider__WEBPACK_IMPORTED_MODULE_6___default()), {
                orientation: "left",
                children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_4___default()), {
                    separator: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_SwapOutlined__WEBPACK_IMPORTED_MODULE_2___default()), {}),
                    children: [
                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_4___default().Item), {
                            href: src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z.HOME,
                            children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_HomeOutlined__WEBPACK_IMPORTED_MODULE_1___default()), {
                                css: _emotion_react__WEBPACK_IMPORTED_MODULE_3__.css`
                font-size: 30px !important;
              `
                            })
                        }),
                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_4___default().Item), {
                            children: params.header
                        }),
                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_4___default().Item), {
                            children: topicLabel
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((antd_lib_row__WEBPACK_IMPORTED_MODULE_10___default()), {
                gutter: 16,
                children: [
                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((antd_lib_col__WEBPACK_IMPORTED_MODULE_9___default()), {
                        span: 18,
                        children: [
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "",
                                css: _emotion_react__WEBPACK_IMPORTED_MODULE_3__.css`
              .ant-card-body {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 10px;
                padding: 12px;
                &::before {
                  display: none !important;
                }
                .ant-card {
                  /* flex: 0 0 calc(25% - 20px); */
                  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
                  &:hover {
                    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
                  }
                  transition: all 1s ease;
                }
              }
              .ant-empty {
                grid-column: 1 / -1;
              }
            `,
                                children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((antd_lib_card__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    children: [
                                        !!listPost?.results?.length && listPost?.results?.map((v)=>/*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_card__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_home_homeTopicCard__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                                    post: v
                                                })
                                            }, v.id)),
                                        !listPost?.results?.length && /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_empty__WEBPACK_IMPORTED_MODULE_7___default()), {})
                                    ]
                                })
                            }),
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                css: _emotion_react__WEBPACK_IMPORTED_MODULE_3__.css`
              text-align: center;
            `,
                                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_pagination__WEBPACK_IMPORTED_MODULE_8___default()), {
                                    current: params.page || pagination.page,
                                    pageSize: pagination.limit,
                                    total: listPost?.count || 0,
                                    showSizeChanger: false,
                                    hideOnSinglePage: true,
                                    onChange: onChangePage
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_col__WEBPACK_IMPORTED_MODULE_9___default()), {
                        span: 6,
                        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_home_homeSide__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {})
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
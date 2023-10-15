"use strict";
exports.id = 2170;
exports.ids = [2170];
exports.modules = {

/***/ 2170:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7101);
/* harmony import */ var _ant_design_icons_lib_icons_HomeOutlined__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5044);
/* harmony import */ var _ant_design_icons_lib_icons_HomeOutlined__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_HomeOutlined__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons_lib_icons_SwapOutlined__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5212);
/* harmony import */ var _ant_design_icons_lib_icons_SwapOutlined__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_SwapOutlined__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3139);
/* harmony import */ var antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(373);
/* harmony import */ var antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2317);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2278);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_empty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4663);
/* harmony import */ var antd_lib_empty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_empty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4528);
/* harmony import */ var antd_lib_pagination__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_pagination__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var src_components_home_homeTopicCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7595);
/* harmony import */ var src_lib_api_course__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4626);
/* harmony import */ var src_lib_hooks_useQueryParam__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8443);
/* harmony import */ var src_lib_utils_constant__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5354);
/* harmony import */ var src_lib_utils_format__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(455);
/* harmony import */ var src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(351);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, _emotion_react__WEBPACK_IMPORTED_MODULE_3__, src_components_home_homeTopicCard__WEBPACK_IMPORTED_MODULE_11__, src_lib_api_course__WEBPACK_IMPORTED_MODULE_12__, src_lib_hooks_useQueryParam__WEBPACK_IMPORTED_MODULE_13__]);
([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, _emotion_react__WEBPACK_IMPORTED_MODULE_3__, src_components_home_homeTopicCard__WEBPACK_IMPORTED_MODULE_11__, src_lib_api_course__WEBPACK_IMPORTED_MODULE_12__, src_lib_hooks_useQueryParam__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















const Post = ()=>{
    const [listPost, setlistPost] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)();
    const params = (0,src_lib_hooks_useQueryParam__WEBPACK_IMPORTED_MODULE_13__/* .useQueryParam */ .W)();
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(false);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
    const [pagination, setPagination] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)({
        page: params?.page || 1,
        limit: src_lib_utils_constant__WEBPACK_IMPORTED_MODULE_14__/* .DEFAULT_PAGE_SIZE */ .L8 * 2
    });
    const getListPost = async (pagination)=>{
        try {
            setLoading(true);
            const res = await src_lib_api_course__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z.listPosts(pagination.limit, pagination.page, params.topic === "ALL" ? "" : params.topic || "", params.header);
            setlistPost(res);
        } catch (error) {
            console.error(error);
        } finally{
            setLoading(false);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(()=>{
        setPagination({
            ...pagination,
            page: 1
        });
    }, [
        params.topic
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(()=>{
        getListPost(pagination);
    }, [
        pagination,
        params.header
    ]);
    const onChangePage = (page)=>{
        console.log("page :==>>", page);
        setPagination({
            ...pagination,
            page
        });
        router.push(`${src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z.POST}?topic=${params.topic}&header=${params.header}&page=${page}`);
    };
    return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_divider__WEBPACK_IMPORTED_MODULE_6___default()), {
                orientation: "left",
                children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_4___default()), {
                    separator: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_SwapOutlined__WEBPACK_IMPORTED_MODULE_2___default()), {}),
                    children: [
                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_4___default().Item), {
                            href: src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z.HOME,
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
                            href: "",
                            children: (0,src_lib_utils_format__WEBPACK_IMPORTED_MODULE_15__/* .UpperCaseFirstLetter */ .Rl)(params.topic === "ALL" ? "" : params.topic || "")
                        })
                    ]
                })
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "",
                css: _emotion_react__WEBPACK_IMPORTED_MODULE_3__.css`
          .ant-card-body {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
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
                                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_home_homeTopicCard__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
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
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
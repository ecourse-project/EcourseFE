"use strict";
exports.id = 9408;
exports.ids = [9408];
exports.modules = {

/***/ 45160:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57101);
/* harmony import */ var antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20373);
/* harmony import */ var antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53800);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2278);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1788);
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10274);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(27050);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26216);
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(58168);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var src_lib_api_course__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(84626);
/* harmony import */ var src_lib_hooks_useQueryParam__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8443);
/* harmony import */ var src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(34317);
/* harmony import */ var src_lib_utils_format__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(90455);
/* harmony import */ var src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(70351);
/* harmony import */ var _ant_design_icons_lib_icons_CalendarOutlined__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(90411);
/* harmony import */ var _ant_design_icons_lib_icons_CalendarOutlined__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_CalendarOutlined__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _ant_design_icons_lib_icons_DownloadOutlined__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(9762);
/* harmony import */ var _ant_design_icons_lib_icons_DownloadOutlined__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_DownloadOutlined__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _ant_design_icons_lib_icons_FileSearchOutlined__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(9197);
/* harmony import */ var _ant_design_icons_lib_icons_FileSearchOutlined__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_FileSearchOutlined__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _ant_design_icons_lib_icons_MinusCircleOutlined__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(35734);
/* harmony import */ var _ant_design_icons_lib_icons_MinusCircleOutlined__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_MinusCircleOutlined__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _ant_design_icons_lib_icons_MoreOutlined__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(93460);
/* harmony import */ var _ant_design_icons_lib_icons_MoreOutlined__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_MoreOutlined__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _ant_design_icons_lib_icons_PlusCircleOutlined__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(79145);
/* harmony import */ var _ant_design_icons_lib_icons_PlusCircleOutlined__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_PlusCircleOutlined__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _ant_design_icons_lib_icons_SwapOutlined__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(5212);
/* harmony import */ var _ant_design_icons_lib_icons_SwapOutlined__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_SwapOutlined__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _ant_design_pro_layout_es_components_PageHeader__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(35729);
/* harmony import */ var _ant_design_pro_layout_es_components_PageHeader__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_ant_design_pro_layout_es_components_PageHeader__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(53139);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_24__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, src_lib_api_course__WEBPACK_IMPORTED_MODULE_10__, src_lib_hooks_useQueryParam__WEBPACK_IMPORTED_MODULE_11__, _emotion_react__WEBPACK_IMPORTED_MODULE_23__]);
([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, src_lib_api_course__WEBPACK_IMPORTED_MODULE_10__, src_lib_hooks_useQueryParam__WEBPACK_IMPORTED_MODULE_11__, _emotion_react__WEBPACK_IMPORTED_MODULE_23__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















/* eslint-disable react/prop-types */ 









const { Paragraph, Title } = (antd_lib_typography__WEBPACK_IMPORTED_MODULE_8___default());
const menu = /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default()), {
    items: [
        {
            key: "1",
            label: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                target: "_blank",
                rel: "noopener noreferrer",
                href: "http://www.alipay.com/",
                children: "1st menu item"
            })
        },
        {
            key: "2",
            label: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                target: "_blank",
                rel: "noopener noreferrer",
                href: "http://www.taobao.com/",
                children: "2nd menu item"
            })
        },
        {
            key: "3",
            label: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                target: "_blank",
                rel: "noopener noreferrer",
                href: "http://www.tmall.com/",
                children: "3rd menu item"
            })
        }
    ]
});
const DropdownMenu = ()=>/*#__PURE__*/ _jsx(Dropdown, {
        overlay: menu,
        placement: "bottomRight",
        children: /*#__PURE__*/ _jsx(Button, {
            type: "text",
            icon: /*#__PURE__*/ _jsx(MoreOutlined, {
                style: {
                    fontSize: 20
                }
            })
        })
    }, "more");
const separator = /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_SwapOutlined__WEBPACK_IMPORTED_MODULE_21___default()), {});
const IconLink = ({ src, text })=>/*#__PURE__*/ _jsxs("a", {
        className: "example-link",
        children: [
            /*#__PURE__*/ _jsx("img", {
                className: "example-link-icon",
                src: src,
                alt: text
            }),
            text
        ]
    });
const Content = ({ children, extraContent })=>/*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default()), {
        children: [
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    flex: 1
                },
                children: children
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "image",
                children: extraContent
            })
        ]
    });
var TagState;
(function(TagState) {
    TagState["SUCCESS"] = "SUCCESS";
    TagState["PROCESSING"] = "PROCESSING";
    TagState["ERROR"] = "ERROR";
    TagState["WARNING"] = "WARNING";
    TagState["WAITING"] = "WAITING";
    TagState["STOP"] = "STOP";
})(TagState || (TagState = {}));
const DocDetail = ()=>{
    const params = (0,src_lib_hooks_useQueryParam__WEBPACK_IMPORTED_MODULE_11__/* .useQueryParam */ .W)();
    const [doc, setDoc] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)({});
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_24__.useRouter)();
    const { id } = router.query;
    const fetchDocDetail = async (id)=>{
        try {
            const docDetail = await src_lib_api_course__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.getDocDetail(id);
            setDoc(docDetail);
        } catch (error) {
            console.log("error get detail", error);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{
        if (id) fetchDocDetail(id);
    }, [
        id
    ]);
    // useEffect(() => {
    // 	const document = listDoc?.filter((v) => v.id === doc.id)[0];
    // 	document && setDoc(document);
    // }, [listDoc]);
    // const rateDoc = async (document_id: string, rating: number, comment: string) => {
    //   try {
    //     if (rating === 1) rating = RatingEnum.ONE;
    //     if (rating === 2) rating = RatingEnum.TWO;
    //     if (rating === 3) rating = RatingEnum.THREE;
    //     if (rating === 4) rating = RatingEnum.FOUR;
    //     if (rating === 5) rating = RatingEnum.FIVE;
    //     const rate = await CourseService.rateDocument({
    //       document_id,
    //       rating,
    //       comment,
    //     } as RateDocArgs);
    //     setMyRate(rate);
    //     doc.rating_detail?.push(rate);
    //   } catch (error) {
    //     //console.log('error', error);
    //   }
    // };
    // const handleSaveRating = () => {
    //   rateDoc(params.id, star, feedback);
    //   setOpenRatingModal(false);
    // };
    const content = /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "content-wrapper",
        children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "content-detail",
            children: [
                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                    children: doc?.name
                }),
                /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Paragraph, {
                    children: [
                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_FileSearchOutlined__WEBPACK_IMPORTED_MODULE_17___default()), {}),
                        "  ",
                        doc?.description
                    ]
                }),
                /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_CalendarOutlined__WEBPACK_IMPORTED_MODULE_15___default()), {}),
                        `  Ngày cập nhật: ${(0,src_lib_utils_format__WEBPACK_IMPORTED_MODULE_13__/* .formatDate */ .p6)(doc?.created)}`
                    ]
                })
            ]
        })
    });
    const handleUpdateBtn = async ()=>{
        try {
            setLoading(true);
            if (doc.sale_status === src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_12__/* .SaleStatusEnum */ .NO.AVAILABLE) {
                const newDoc = await src_lib_api_course__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.moveDoc(doc.id, src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_12__/* .MoveEnum */ .vY.LIST, src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_12__/* .MoveEnum */ .vY.CART);
                setTimeout(()=>{
                    setDoc(newDoc);
                }, 1000);
            } else if (doc.sale_status === src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_12__/* .SaleStatusEnum */ .NO.IN_CART) {
                const newDoc = await src_lib_api_course__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.moveDoc(doc.id, src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_12__/* .MoveEnum */ .vY.CART, src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_12__/* .MoveEnum */ .vY.LIST);
                setTimeout(()=>{
                    setDoc(newDoc);
                }, 1000);
            }
        } catch (error) {
            console.log("error", error);
            setLoading(false);
        } finally{
            setTimeout(()=>{
                setLoading(false);
            }, 1000);
        }
    // if (doc.sale_status !== SaleStatusEnum.BOUGHT) {
    //   setLoading(true);
    //   dispatch(docActions.updateCart(doc));
    //   setTimeout(() => {
    //     if (doc.sale_status === SaleStatusEnum.AVAILABLE) {
    //       doc.sale_status = SaleStatusEnum.IN_CART;
    //     } else if (doc.sale_status === SaleStatusEnum.IN_CART) {
    //       doc.sale_status = SaleStatusEnum.AVAILABLE;
    //     }
    //     setLoading(false);
    //   }, 1000);
    // }
    };
    const items = [];
    return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "page-container",
        css: _emotion_react__WEBPACK_IMPORTED_MODULE_23__.css`
        max-width: 70%;
        text-align: left;
        .ant-breadcrumb {
          font-size: 20px;
          font-weight: 600;
          .ant-breadcrumb-link {
            cursor: pointer;
          }
        }

        .ant-btn-primary {
          width: 160px;
          height: 35px;
          border-radius: 2px;
          min-width: 175px;

          background-color: ${doc.sale_status === src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_12__/* .SaleStatusEnum */ .NO.AVAILABLE && "#17a2b8"};
          background-color: ${doc.sale_status === src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_12__/* .SaleStatusEnum */ .NO.IN_CART && "#ed5e68"};
          background-color: ${doc.sale_status === src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_12__/* .SaleStatusEnum */ .NO.PENDING && "#6c757d"};
          background-color: ${doc.sale_status === src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_12__/* .SaleStatusEnum */ .NO.BOUGHT && "#28a745"};
          border-color: unset;
          color: #fff;
          font-weight: 700;
          letter-spacing: 3px;
          height: 50px;
          border-radius: 4px;
          &:hover {
            letter-spacing: 4px;
            text-decoration: none;
            font-weight: 700;
          }
          .anticon {
            vertical-align: inherit;
            font-size: 16px;
            font-weight: 700;
          }
        }
        .content-wrapper {
          font-size: 15px;
          .anticon {
            font-size: 25px;
          }
          .content-detail {
            border: 1px solid #000;
            border-left: none;
            border-right: none;
            padding: 20px 5px;
          }
        }
        /* a.ant-btn {
          padding-top: 8px !important;
        } */
        .add-btn {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .ant-page-header {
        }
        .rating-btn {
          display: flex;
          align-item: baseline;
          .anticon-star {
            font-size: 18px;
            color: #faad14;
          }
          &:hover,
          &:active {
            border: 3px solid #faad14;
            color: #000;
            font-weight: 700;
          }
        }
        .ant-btn-disabled {
          opacity: 0.5;
        }
      `,
        children: [
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_divider__WEBPACK_IMPORTED_MODULE_3___default()), {
                orientation: "left",
                children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_1___default()), {
                    separator: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_SwapOutlined__WEBPACK_IMPORTED_MODULE_21___default()), {}),
                    children: [
                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_1___default().Item), {
                            href: src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z.HOME,
                            children: "Trang ch\xednh"
                        }),
                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_1___default().Item), {
                            children: "T\xe0i liệu"
                        }),
                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_1___default().Item), {
                            children: doc?.topic
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_ant_design_pro_layout_es_components_PageHeader__WEBPACK_IMPORTED_MODULE_22__.PageHeader, {
                title: doc?.topic,
                className: "site-page-header",
                // subTitle="This is a subtitle"
                // tags={
                //   <>
                //     {tags(TagState.SUCCESS, `${doc.sold} lượt mua`)}
                //     {tags(TagState.WAITING, 'Cập nhật gần đây')}
                //     {doc.sale_status === SaleStatusEnum.PENDING && tags(TagState.PROCESSING, 'Chờ thanh toán')}
                //     {doc.sale_status === SaleStatusEnum.BOUGHT && tags(TagState.SUCCESS, 'Đã mua')}
                //     {(doc.sale_status === SaleStatusEnum.AVAILABLE || doc.sale_status === SaleStatusEnum.IN_CART) &&
                //       tags(TagState.ERROR, `Bán chạy của chủ đề ${doc.title}`)}
                //   </>
                // }
                avatar: {
                    src: "https://avatars1.githubusercontent.com/u/8186664?s=460&v=4"
                },
                children: [
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Content, {
                        extraContent: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: doc?.thumbnail?.image_path || "",
                            alt: "content",
                            width: "200",
                            style: {
                                marginLeft: 40
                            }
                        }),
                        children: content
                    }),
                    doc.sale_status !== src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_12__/* .SaleStatusEnum */ .NO.PENDING ? /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default()), {
                        type: "primary",
                        className: "add-btn",
                        loading: loading,
                        onClick: handleUpdateBtn,
                        href: doc.sale_status === src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_12__/* .SaleStatusEnum */ .NO.BOUGHT ? doc?.file?.file_path : undefined,
                        target: "blank",
                        disabled: loading || !doc.download,
                        children: [
                            doc.sale_status === src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_12__/* .SaleStatusEnum */ .NO.AVAILABLE ? "TH\xcaM" : doc.sale_status === src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_12__/* .SaleStatusEnum */ .NO.IN_CART ? "XO\xc1" : doc.sale_status === src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_12__/* .SaleStatusEnum */ .NO.BOUGHT ? "ĐỌC" : "",
                            doc.sale_status === src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_12__/* .SaleStatusEnum */ .NO.AVAILABLE ? /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_PlusCircleOutlined__WEBPACK_IMPORTED_MODULE_20___default()), {}) : doc.sale_status === src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_12__/* .SaleStatusEnum */ .NO.IN_CART ? /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_MinusCircleOutlined__WEBPACK_IMPORTED_MODULE_18___default()), {}) : doc.sale_status === src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_12__/* .SaleStatusEnum */ .NO.BOUGHT ? /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_DownloadOutlined__WEBPACK_IMPORTED_MODULE_16___default()), {}) : ""
                        ]
                    }, "1") : /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default()), {
                        type: "primary",
                        className: "add-btn",
                        loading: loading,
                        onClick: handleUpdateBtn,
                        target: "blank",
                        disabled: true,
                        children: "Chờ xử l\xfd"
                    }, "2")
                ]
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_tabs__WEBPACK_IMPORTED_MODULE_7___default()), {
                items: items,
                className: "tab-section"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DocDetail);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 79408:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57101);
/* harmony import */ var src_components_document_doc_detail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45160);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, src_components_document_doc_detail__WEBPACK_IMPORTED_MODULE_1__]);
([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, src_components_document_doc_detail__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const DocumentDetailUI = ()=>{
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_document_doc_detail__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DocumentDetailUI);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
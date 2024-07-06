"use strict";
exports.id = 6901;
exports.ids = [6901];
exports.modules = {

/***/ 12179:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57101);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80261);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34317);
/* harmony import */ var _ant_design_icons_lib_icons_DeleteOutlined__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68909);
/* harmony import */ var _ant_design_icons_lib_icons_DeleteOutlined__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_DeleteOutlined__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(53139);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, _emotion_react__WEBPACK_IMPORTED_MODULE_5__]);
([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, _emotion_react__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


/* eslint-disable @next/next/no-img-element */ 



const CartItemRow = ({ document, course, isDeleteBtn = true, onDelete })=>{
    const [deleteLoading, setDeletetLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const deleteDoc = async ()=>{
        document && onDelete && onDelete(document?.id, src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_3__/* .NavTypeEnum */ .pE.DOCUMENT);
    };
    const deleteCourse = ()=>{
        course && onDelete && onDelete(course?.id, src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_3__/* .NavTypeEnum */ .pE.COURSE);
    };
    return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "container",
        css: _emotion_react__WEBPACK_IMPORTED_MODULE_5__.css`
        width: 100%;
        .document-item {
          display: flex;
          justify-content: space-between;
          flex-direction: row;
          .document-content {
            display: flex;
          }
        }
        .description {
          text-align: left;
          max-width: 80%;
          padding: 0 20px;
          .doc-name {
            font-size: 16px;
            text-decoration: underline;
          }
          .description-content {
            font-size: 15px;
            text-align: left;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
        .thumb {
          objectfit: 'cover';
          margin: 10px;
          border-radius: 5px;
        }

        .price-group {
          display: flex;
          align-items: center;
          justify-content: end;
          min-width: fit-content;
          position: relative;
          font-size: 20px;
          margin-bottom: 10px;

          .price {
            margin: 10px;
            .anticon-tag {
              position: absolute;

              left: -10%;
              bottom: 23%;
            }
          }
          .anticon-delete {
            &:hover {
              font-size: 22px;
              color: red;
            }
          }
        }
      `,
        children: [
            document && !course && /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "document-item",
                children: [
                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "document-content",
                        children: [
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                className: "thumb",
                                src: `${document?.thumbnail?.image_path}`,
                                // src="https://localhost:4000/media/2022/08/14/gdcd.png"
                                width: 80,
                                height: 80,
                                alt: "Product image.",
                                style: {
                                    objectFit: "cover"
                                }
                            }),
                            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "description",
                                children: [
                                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "doc-name",
                                        children: document?.name
                                    }),
                                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "description-content",
                                        children: document?.description
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "price-group",
                        children: [
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "price"
                            }),
                            deleteLoading ? /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_spin__WEBPACK_IMPORTED_MODULE_1___default()), {
                                size: "default"
                            }) : isDeleteBtn && /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_DeleteOutlined__WEBPACK_IMPORTED_MODULE_4___default()), {
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    e.preventDefault();
                                    setDeletetLoading(true);
                                    deleteDoc();
                                }
                            })
                        ]
                    })
                ]
            }),
            !document && course && /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "document-item",
                children: [
                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "document-content",
                        children: [
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                className: "thumb",
                                src: `${course?.thumbnail?.image_path}`,
                                // src="https://localhost:4000/media/2022/08/14/gdcd.png"
                                width: 80,
                                height: 80,
                                alt: "Product image.",
                                style: {
                                    objectFit: "cover"
                                }
                            }),
                            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "description",
                                children: [
                                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "doc-name",
                                        children: course.name
                                    }),
                                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "description-content",
                                        children: course.description
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "price-group",
                        children: [
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "price"
                            }),
                            deleteLoading ? /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_spin__WEBPACK_IMPORTED_MODULE_1___default()), {
                                size: "default"
                            }) : isDeleteBtn && /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_DeleteOutlined__WEBPACK_IMPORTED_MODULE_4___default()), {
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    e.preventDefault();
                                    deleteCourse();
                                }
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartItemRow);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2037:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57101);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28518);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27050);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53139);
/* harmony import */ var _components_cart_cart_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12179);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, _emotion_react__WEBPACK_IMPORTED_MODULE_4__, _components_cart_cart_item__WEBPACK_IMPORTED_MODULE_5__]);
([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, _emotion_react__WEBPACK_IMPORTED_MODULE_4__, _components_cart_cart_item__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable react/no-children-prop */ 





const CartOrderBill = ({ checkList, cartData })=>{
    const [docs, setDocs] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    const [courses, setCourses] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        const newDocs = cartData?.documents.filter((v)=>checkList.documents.includes(v.id));
        setDocs(newDocs || []);
        const newCourses = cartData?.courses.filter((v)=>checkList.courses.includes(v.id));
        setCourses(newCourses);
    }, [
        checkList
    ]);
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "modal-checkout-build",
        css: _emotion_react__WEBPACK_IMPORTED_MODULE_4__.css``,
        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default()), {
            gutter: [
                16,
                16
            ],
            className: "cart-list",
            children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default()), {
                className: "cart-list-item",
                children: [
                    docs?.length ? (docs?.map((v, i)=>{
                        return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cart_cart_item__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            document: v,
                            isDeleteBtn: false
                        }, i);
                    })) : /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                    courses?.length ? (courses?.map((v, i)=>{
                        return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cart_cart_item__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            course: v,
                            isDeleteBtn: false
                        }, i);
                    })) : /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {})
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartOrderBill);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 95996:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57101);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53800);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2278);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76418);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_components_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(59137);
/* harmony import */ var src_lib_api_course__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(84626);
/* harmony import */ var src_lib_utils_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24519);
/* harmony import */ var src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(70351);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20271);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(53139);
/* harmony import */ var src_lib_config_env__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(52284);
/* harmony import */ var _settings_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(21364);
/* harmony import */ var _cart_order_bill__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2037);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, src_components_button__WEBPACK_IMPORTED_MODULE_6__, src_lib_api_course__WEBPACK_IMPORTED_MODULE_7__, _emotion_react__WEBPACK_IMPORTED_MODULE_11__, _settings_tabs__WEBPACK_IMPORTED_MODULE_13__, _cart_order_bill__WEBPACK_IMPORTED_MODULE_14__]);
([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, src_components_button__WEBPACK_IMPORTED_MODULE_6__, src_lib_api_course__WEBPACK_IMPORTED_MODULE_7__, _emotion_react__WEBPACK_IMPORTED_MODULE_11__, _settings_tabs__WEBPACK_IMPORTED_MODULE_13__, _cart_order_bill__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const PricingCard = ({ docNum, checkoutList, cartData })=>{
    const [btnText, setBtnText] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("Thanh to\xe1n");
    const [openModal, setOpenModal] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const handleCharge = async ()=>{
        // setOpenModal(true);
        // AskForSave(
        //   'Thanh toán đơn hàng',
        //   ` Xác nhận đặt đơn hàng trị giá:
        //        <strong><u>${formatCurrencySymbol(checkoutList.total_price, 'VND')} </strong>`,
        //   'Thanh toán',
        //   'Huỷ',
        //   '',
        //   async (value) => {
        //     if (value.isConfirmed) {
        //       try {
        //         const order = CourseService.createOrder(checkoutList);
        //         Swal.fire('Đã đặt đơn thành công!', '', 'success').then((v) => {
        //           if (v.isConfirmed) router.push(`${RoutePaths.SETTINGS}?tab=${TabSettingKey.ORDER}`);
        //         });
        //       } catch (error) {
        //         //console.log('error', error);
        //         Swal.fire('Đã có lỗi xảy ra!', 'Xin thử lại sau', 'error');
        //       }
        //     }
        //   },
        // );
        try {
            await src_lib_api_course__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.createOrder(checkoutList);
            sweetalert2__WEBPACK_IMPORTED_MODULE_10___default().fire("Đ\xe3 đặt đơn th\xe0nh c\xf4ng!", "", "success").then((v)=>{
                if (v.isConfirmed) {
                    window.open(src_lib_config_env__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z.GMAIL_URL, "_blank");
                    router.push(`${src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z.SETTINGS}?tab=${_settings_tabs__WEBPACK_IMPORTED_MODULE_13__/* .TabSettingKey */ .gm.ORDER}`);
                }
            // if (v.isConfirmed) router.push(`${RoutePaths.SETTINGS}?tab=${TabSettingKey.ORDER}`);
            });
        } catch (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_10___default().fire("Đ\xe3 c\xf3 lỗi xảy ra!", "Xin thử lại sau", "error");
            console.log("error", error);
        } finally{
            setOpenModal(false);
        }
    };
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        if (docNum === 0) {
            setBtnText("Tiếp tục chọn t\xe0i liệu");
        } else {
            // setBtnText('Tạo đơn hàng');
            setBtnText("Li\xean hệ");
        }
    }, [
        docNum
    ]);
    const handleOk = async ()=>{
        try {
            await src_lib_api_course__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.createOrder(checkoutList);
            sweetalert2__WEBPACK_IMPORTED_MODULE_10___default().fire("Đ\xe3 đặt đơn th\xe0nh c\xf4ng!", "", "success").then((v)=>{
                if (v.isConfirmed) router.push(`${src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z.SETTINGS}?tab=${_settings_tabs__WEBPACK_IMPORTED_MODULE_13__/* .TabSettingKey */ .gm.ORDER}`);
            });
        } catch (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_10___default().fire("Đ\xe3 c\xf3 lỗi xảy ra!", "Xin thử lại sau", "error");
            console.log("error", error);
        } finally{
            setOpenModal(false);
        }
    };
    const handleCancel = ()=>{
        setOpenModal(false);
    };
    return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "xyz",
        css: _emotion_react__WEBPACK_IMPORTED_MODULE_11__.css`
        .ant-btn {
          letter-spacing: 0px;
          &:hover {
            letter-spacing: 1px;
          }
        }
        a.ant-btn {
          padding-top: 8px !important;
        }
        .total-price {
          display: flex;
          justify-content: space-between;
          font-size: 20px;
        }

        .ant-statistic {
          text-align: left;
        }
        .total-price {
          font-size: 18px;
          cursor: pointer;
          font-weight: 400;
        }
        .current-price {
          font-family: monospace;
          font-weight: 700;
          font-size: 36px;
          cursor: pointer;
          text-align: left;
          &:hover {
            color: ${src_lib_utils_enum__WEBPACK_IMPORTED_MODULE_8__/* .GlobalStyle */ .ZL.BROWN_YELLOW};
          }
        }
        .ant-divider {
          margin: 0;
        }
      `,
        children: [
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_divider__WEBPACK_IMPORTED_MODULE_2___default()), {}),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "current-price"
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_button__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                btnTextColor: "black",
                btnStyle: "outline",
                btnSize: "small",
                btnWidth: "full-w",
                onClick: handleCharge,
                disabled: checkoutList?.total_price === 0 && checkoutList?.documents?.length === 0 && checkoutList?.courses?.length === 0,
                children: btnText
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_modal__WEBPACK_IMPORTED_MODULE_3___default()), {
                className: "checkout-modal",
                title: "X\xe1c nhận đặt đơn",
                open: openModal,
                onOk: handleOk,
                // confirmLoading={confirmLoading}
                onCancel: handleCancel,
                css: _emotion_react__WEBPACK_IMPORTED_MODULE_11__.css`
          min-width: 800px;
          & .ant-modal-body {
            max-height: 700px;
            overflow-y: auto;
            overflow-x: hidden;
          }
          .ant-modal-footer {
            display: flex;
            justify-content: space-between;
          }
          .sum-price {
            font-weight: 700;
            font-size: 20px;
            font-style: italic;
          }
          .ant-modal-title {
            text-align: center;
            font-size: 23px;
            font-weight: 700;
          }
          .ant-btn {
            &:hover {
              background-color: #00aaff;
              color: #000;
              font-weight: 700;
              letter-spacing: 2px;
            }
            .confirm {
              min-width: 70px;
            }
            .cancel {
              min-width: 100px;
            }
          }
        `,
                footer: [
                    // <div key="1" className="sum-price">{`Tổng cộng ${formatCurrencySymbol(
                    //   checkoutList.total_price,
                    //   'VND',
                    //   true,
                    // )}`}</div>,
                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "right",
                        children: [
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default()), {
                                className: "confirm",
                                onClick: handleOk,
                                children: "OK"
                            }, "3"),
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default()), {
                                className: "cancel",
                                onClick: handleCancel,
                                children: "Cancel"
                            }, "4")
                        ]
                    }, "2")
                ],
                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_cart_order_bill__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                    checkList: checkoutList,
                    cartData: cartData,
                    totalPrice: checkoutList.total_price
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PricingCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 36901:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57101);
/* harmony import */ var antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20373);
/* harmony import */ var antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51489);
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28518);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2278);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_empty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14663);
/* harmony import */ var antd_lib_empty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_empty__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(27050);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80261);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var src_components_cart_cart_price__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(95996);
/* harmony import */ var src_lib_api_course__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(84626);
/* harmony import */ var src_lib_hooks_useDebouncedCallback__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(34573);
/* harmony import */ var src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(34317);
/* harmony import */ var src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(70351);
/* harmony import */ var _ant_design_icons_lib_icons_Loading3QuartersOutlined__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(58841);
/* harmony import */ var _ant_design_icons_lib_icons_Loading3QuartersOutlined__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_Loading3QuartersOutlined__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _ant_design_icons_lib_icons_SwapOutlined__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(5212);
/* harmony import */ var _ant_design_icons_lib_icons_SwapOutlined__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_SwapOutlined__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(53139);
/* harmony import */ var _components_cart_cart_item__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(12179);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, src_components_cart_cart_price__WEBPACK_IMPORTED_MODULE_10__, src_lib_api_course__WEBPACK_IMPORTED_MODULE_11__, _emotion_react__WEBPACK_IMPORTED_MODULE_17__, _components_cart_cart_item__WEBPACK_IMPORTED_MODULE_18__]);
([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, src_components_cart_cart_price__WEBPACK_IMPORTED_MODULE_10__, src_lib_api_course__WEBPACK_IMPORTED_MODULE_11__, _emotion_react__WEBPACK_IMPORTED_MODULE_17__, _components_cart_cart_item__WEBPACK_IMPORTED_MODULE_18__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable react/no-children-prop */ 


















const antIcon = /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_Loading3QuartersOutlined__WEBPACK_IMPORTED_MODULE_15___default()), {
    style: {
        fontSize: 40
    },
    spin: true
});
const CheckboxGroup = (antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2___default().Group);
const CartUI = ()=>{
    const [cartData, setCartData] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)();
    const [docCart, setDocCart] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)([]);
    const [courseCart, setCourseCart] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)([]);
    const [isModalVisible, setIsModalVisible] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(true);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);
    const [checkedListDoc, setCheckedListDoc] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)([]);
    const [checkedListCourse, setCheckedListCourse] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)([]);
    const [indeterminateDoc, setIndeterminateDoc] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);
    const [indeterminateCourse, setIndeterminateCourse] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);
    const [checkAllDoc, setCheckAllDoc] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);
    const [checkAllCourse, setCheckAllCourse] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);
    const [checkedList, setCheckedList] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)({});
    const [totalPrice, setTotalPrice] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(0);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useDispatch)();
    const getCart = async ()=>{
        try {
            setLoading(true);
            const cart = await src_lib_api_course__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.getCart();
            setCartData(cart);
            setDocCart(cart.documents);
            setCourseCart(cart.courses);
        } catch (error) {
            console.log("error", error);
        } finally{
            setLoading(false);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{
        getCart();
    }, []);
    const onChangeDoc = (list)=>{
        // setCheckedListDoc(list?.map((v) => v.id));
        setCheckedListDoc(list);
        setIndeterminateDoc(!!list.length && list.length < docCart.length);
        setCheckAllDoc(list.length === docCart.length);
    };
    const onCheckAllChangeDoc = (e)=>{
        setCheckedListDoc(// e.target.checked ? Array.from(Array(docCart?.length).keys()) : []
        e.target.checked ? docCart?.map((v)=>v.id) : []);
        setIndeterminateDoc(false);
        setCheckAllDoc(e.target.checked);
    };
    const onChangeCourse = (list)=>{
        // setCheckedListDoc(list?.map((v) => v.id));
        setCheckedListCourse(list);
        setIndeterminateCourse(!!list.length && list.length < courseCart.length);
        setCheckAllCourse(list.length === courseCart.length);
    };
    const onCheckAllChangeCourse = (e)=>{
        setCheckedListCourse(// e.target.checked ? Array.from(Array(courseCart?.length).keys()) : []
        e.target.checked ? courseCart?.map((v)=>v.id) : []);
        setIndeterminateCourse(false);
        setCheckAllCourse(e.target.checked);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{
        // //console.log('call debounce');
        // debounceSetCheckList(checkedListDoc, checkedListCourse);
        // setCheckAllCourse(Boolean(checkedListCourse.length));
        // setCheckAllDoc(Boolean(checkedListDoc.length));
        setCheckedList({
            documents: checkedListDoc?.map((v)=>v.toString()),
            courses: checkedListCourse?.map((v)=>v.toString())
        });
    }, [
        checkedListDoc,
        checkedListCourse
    ]);
    // const debounceSetCheckList = useCallback(
    // 	(checkedListDoc, checkedListCourse) => {
    // 		//console.log('before call debounce');
    // 		debounce((checkedListDoc, checkedListCourse) => {
    // 			//console.log('set again');
    // 			// setCheckedList({
    // 			// 	documents: checkedListDoc?.map((v) => v.toString()),
    // 			// 	courses: checkedListCourse?.map((v) => v.id),
    // 			// });
    // 		}, 1000);
    // 		setAgain();
    // 	}
    // );
    const debouncePrice = (0,src_lib_hooks_useDebouncedCallback__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(async (checkedList)=>{
        try {
            if (checkedList.courses?.length || checkedList.documents?.length) {
                const price = await src_lib_api_course__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.calculatePrice(checkedList);
                setTotalPrice(price.total_price);
            } else {
                setTotalPrice(0);
            }
        } catch (error) {
            console.log("error :>> ", error);
        }
    }, 500);
    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{
        debouncePrice(checkedList);
    }, [
        checkedList
    ]);
    const removeFromCart = async (id, type)=>{
        try {
            let newDoc = docCart.slice();
            let newCourse = courseCart.slice();
            if (type === src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_13__/* .NavTypeEnum */ .pE.COURSE) {
                const removeDoc = await src_lib_api_course__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.moveCourse(id, src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_13__/* .MoveEnum */ .vY.CART, src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_13__/* .MoveEnum */ .vY.LIST);
                // const idx = newCourse.findIndex((v) => v.id === removeDoc.id);
                // if (idx >= 0) {
                //   newCourse.splice(idx, 1);
                //   setCourseCart(newCourse);
                // }
                newCourse = newCourse.filter((v)=>v.id !== removeDoc.id);
                const newListCourseChecked = checkedListCourse.filter((v)=>v !== removeDoc.id);
                setCheckedListCourse(newListCourseChecked);
                setCourseCart(newCourse);
            } else if (type === src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_13__/* .NavTypeEnum */ .pE.DOCUMENT) {
                const removeDoc = await src_lib_api_course__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.moveDoc(id, src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_13__/* .MoveEnum */ .vY.CART, src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_13__/* .MoveEnum */ .vY.LIST);
                // const idx = newDoc.findIndex((v) => v.id === removeDoc.id);
                // if (idx >= 0) {
                //   newDoc.splice(idx, 1);
                //   setDocCart(newDoc);
                // }
                newDoc = newDoc.filter((v)=>v.id !== removeDoc.id);
                setDocCart(newDoc);
                const newListDocChecked = checkedListDoc.filter((v)=>v !== removeDoc.id);
                setCheckedListDoc(newListDocChecked);
            }
        } catch (error) {
            console.log(error);
        }
    };
    return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "page-container",
        css: _emotion_react__WEBPACK_IMPORTED_MODULE_17__.css`
        .empty-img {
          opacity: 0.6;
        }
        .ant-checkbox-group {
          display: flex;
          flex-direction: column;
        }
        .ant-checkbox {
          width: 19px;
          height: 19px;
          .ant-checkbox-inner {
            width: 19px;
            height: 19px;
            &:after {
              /* width: 6.714286px;
              height: 15.142857px; */

              border: 3px solid #fff;
              border-top: 0;
              border-left: 0;
            }
          }
        }
        .title {
          font-size: 20px;
          font-weight: 600;
          font-family: Montserrat;
          color: #ffa900;
        }
        .choose-all {
          font-size: 17px;
          font-family: 'Montserrat';
          margin: 0 8px;
        }
        .doc {
          opacity: ${checkAllDoc ? "1" : "0.7"};
          font-weight: ${checkAllDoc ? "700" : "500"};
          &:hover {
            opacity: 1;
            font-weight: 600;
          }
        }
        .course {
          opacity: ${checkAllCourse ? "1" : "0.7"};

          font-weight: ${checkAllCourse ? "700" : "500"};
          &:hover {
            opacity: 1;
            font-weight: 600;
          }
        }
        .checkbox-group {
          max-height: 40%;
          overflow: auto;
          .ant-checkbox-wrapper {
            align-items: start;
            & > span:not(:first-of-type) {
              width: 100%;
            }
          }
          .ant-checkbox-group-item {
            margin: 0;
          }
        }
        .ant-checkbox-indeterminate .ant-checkbox-inner:after {
          background-color: #1c1d1f;
        }
        .ant-checkbox-checked .ant-checkbox-inner {
          border-color: #1c1d1f;
          background-color: #1c1d1f;
        }
        .check-all {
          .ant-checkbox-indeterminate {
            .ant-checkbox-inner:after {
              width: 15px;
              height: 15px;
            }
          }
        }
        .ant-checkbox-wrapper {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
        }
        .cart-list {
          height: 85vh;
        }
        .cart-list-item {
          overflow: auto;
          max-height: 100vh;
        }
      `,
        children: [
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_divider__WEBPACK_IMPORTED_MODULE_4___default()), {
                orientation: "left",
                children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_1___default()), {
                    separator: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_SwapOutlined__WEBPACK_IMPORTED_MODULE_16___default()), {}),
                    children: [
                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_1___default().Item), {
                            href: src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z.HOME,
                            children: "Trang ch\xednh"
                        }),
                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_1___default().Item), {
                            href: "",
                            children: "Giỏ h\xe0ng"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "title",
                children: "Danh s\xe1ch t\xe0i liệu trong giỏ"
            }),
            loading ? /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    height: "72px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                },
                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_spin__WEBPACK_IMPORTED_MODULE_7___default()), {
                    indicator: antIcon
                })
            }) : /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default()), {
                gutter: [
                    16,
                    16
                ],
                className: "cart-list",
                children: [
                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default()), {
                        span: 18,
                        className: "cart-list-item",
                        children: [
                            docCart?.length ? /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        className: "check-all",
                                        indeterminate: indeterminateDoc,
                                        onChange: onCheckAllChangeDoc,
                                        checked: checkAllDoc,
                                        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "choose-all doc",
                                            children: "Chọn tất cả t\xe0i liệu"
                                        })
                                    }),
                                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_divider__WEBPACK_IMPORTED_MODULE_4___default()), {}),
                                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CheckboxGroup, {
                                        onChange: onChangeDoc,
                                        className: "checkbox-group",
                                        value: checkedListDoc,
                                        options: docCart?.map((v)=>({
                                                label: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cart_cart_item__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                                    document: v,
                                                    onDelete: removeFromCart
                                                }),
                                                value: v.id,
                                                Properties: null
                                            }))
                                    })
                                ]
                            }) : /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: " "
                            }),
                            courseCart?.length ? /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        className: "check-all",
                                        indeterminate: indeterminateCourse,
                                        onChange: onCheckAllChangeCourse,
                                        checked: checkAllCourse,
                                        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "choose-all course",
                                            children: "Chọn tất cả kho\xe1 học"
                                        })
                                    }),
                                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_divider__WEBPACK_IMPORTED_MODULE_4___default()), {}),
                                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CheckboxGroup, {
                                        onChange: onChangeCourse,
                                        className: "checkbox-group",
                                        value: checkedListCourse,
                                        options: courseCart?.map((v)=>({
                                                label: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cart_cart_item__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                                    course: v,
                                                    onDelete: removeFromCart
                                                }),
                                                value: v.id,
                                                Properties: null
                                            }))
                                    })
                                ]
                            }) : /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}),
                            !docCart?.length && !courseCart?.length && /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_empty__WEBPACK_IMPORTED_MODULE_5___default()), {
                                className: "empty-data",
                                image: (antd_lib_empty__WEBPACK_IMPORTED_MODULE_5___default().PRESENTED_IMAGE_SIMPLE)
                            })
                        ]
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default()), {
                        span: 6,
                        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "",
                            children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_cart_cart_price__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                docNum: docCart?.length || 0 + (courseCart?.length || 0),
                                children: null,
                                checkoutList: {
                                    ...checkedList,
                                    total_price: totalPrice
                                },
                                cartData: cartData || {}
                            })
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartUI);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
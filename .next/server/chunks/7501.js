"use strict";
exports.id = 7501;
exports.ids = [7501];
exports.modules = {

/***/ 77501:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57101);
/* harmony import */ var antd_lib_empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14663);
/* harmony import */ var antd_lib_empty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_empty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14528);
/* harmony import */ var antd_lib_pagination__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_pagination__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80261);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58168);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_components_order_order_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(58905);
/* harmony import */ var src_lib_api_course__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(84626);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20271);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ant_design_icons_lib_icons_Loading3QuartersOutlined__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(58841);
/* harmony import */ var _ant_design_icons_lib_icons_Loading3QuartersOutlined__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_Loading3QuartersOutlined__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(53139);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, src_components_order_order_item__WEBPACK_IMPORTED_MODULE_6__, src_lib_api_course__WEBPACK_IMPORTED_MODULE_7__, _emotion_react__WEBPACK_IMPORTED_MODULE_10__]);
([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, src_components_order_order_item__WEBPACK_IMPORTED_MODULE_6__, src_lib_api_course__WEBPACK_IMPORTED_MODULE_7__, _emotion_react__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





/* eslint-disable react/no-children-prop */ 





const { Title } = (antd_lib_typography__WEBPACK_IMPORTED_MODULE_4___default());
const antIcon = /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_Loading3QuartersOutlined__WEBPACK_IMPORTED_MODULE_9___default()), {
    style: {
        fontSize: 40
    },
    spin: true
});
const OrderUI = ()=>{
    const [pagination, setPagination] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({
        page: 1,
        limit: 10
    });
    const [listOrder, setListOrder] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)();
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const [paymentInfo, setPaymentInfo] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({});
    const getAllOrder = async ()=>{
        try {
            setLoading(true);
            const order = await src_lib_api_course__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getAllOrders(pagination);
            setListOrder(order);
        } catch (error) {
            console.log("error");
        } finally{
            setLoading(false);
        }
    };
    const getPaymentInfo = async ()=>{
        try {
            const info = await src_lib_api_course__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getPaymentInfo();
            setPaymentInfo(info);
        } catch (error) {
            console.error(error);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        getPaymentInfo();
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        getAllOrder();
    }, [
        pagination
    ]);
    const onChangePage = (page)=>{
        setPagination({
            ...pagination,
            page
        });
    };
    const cancelOrder = async (item)=>{
        try {
            const cancel = await src_lib_api_course__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.cancelOrder(item.id);
            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default().fire("Huỷ đơn h\xe0ng th\xe0nh c\xf4ng!", "", "success");
            await getAllOrder();
        } catch (error) {
            console.log("error", error);
        }
    };
    return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "order-wrapper page-container",
        css: _emotion_react__WEBPACK_IMPORTED_MODULE_10__.css`
        .ant-typography {
          padding: 0.5em 0;
          margin: 0;
          font-family: FiraSans;
        }
      `,
        children: [
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                children: "Danh s\xe1ch đơn h\xe0ng"
            }),
            loading ? /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    height: "72px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                },
                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_spin__WEBPACK_IMPORTED_MODULE_3___default()), {
                    indicator: antIcon
                })
            }) : listOrder?.results?.length ? (listOrder?.results?.map((v, i)=>/*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_order_order_item__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        orderItem: v,
                        cancelOrder: cancelOrder,
                        paymentInfo: paymentInfo
                    })
                }, i))) : /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_empty__WEBPACK_IMPORTED_MODULE_1___default()), {
                className: "empty-data",
                image: (antd_lib_empty__WEBPACK_IMPORTED_MODULE_1___default().PRESENTED_IMAGE_SIMPLE)
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                css: _emotion_react__WEBPACK_IMPORTED_MODULE_10__.css`
          text-align: center;
        `,
                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_pagination__WEBPACK_IMPORTED_MODULE_2___default()), {
                    current: pagination.page,
                    pageSize: pagination.limit,
                    total: listOrder?.count || 10,
                    showSizeChanger: false,
                    onChange: onChangePage,
                    hideOnSinglePage: true
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderUI);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
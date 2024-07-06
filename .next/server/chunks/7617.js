"use strict";
exports.id = 7617;
exports.ids = [7617];
exports.modules = {

/***/ 80886:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/docDefault.d021c6cb.jpg","height":612,"width":612,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAqAP/xAAcEAACAgIDAAAAAAAAAAAAAAABAgMSABEiMWH/2gAIAQEAAT8AQOk+yhsJjyt71XP/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 57617:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57101);
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55893);
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popover__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40113);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_lib_api_course__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(84626);
/* harmony import */ var src_lib_reducers_document_documentSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(62822);
/* harmony import */ var src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(34317);
/* harmony import */ var src_lib_utils_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(24519);
/* harmony import */ var src_lib_utils_format__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(90455);
/* harmony import */ var src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(70351);
/* harmony import */ var src_lib_utils_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(33264);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(53139);
/* harmony import */ var src_assets_icons_IconChecked__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(63890);
/* harmony import */ var src_assets_images_docDefault_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(80886);
/* harmony import */ var src_lib_config_env__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(52284);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(59137);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(81591);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, src_lib_api_course__WEBPACK_IMPORTED_MODULE_6__, _emotion_react__WEBPACK_IMPORTED_MODULE_13__, src_assets_icons_IconChecked__WEBPACK_IMPORTED_MODULE_14__, _button__WEBPACK_IMPORTED_MODULE_17__, _style__WEBPACK_IMPORTED_MODULE_18__]);
([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, src_lib_api_course__WEBPACK_IMPORTED_MODULE_6__, _emotion_react__WEBPACK_IMPORTED_MODULE_13__, src_assets_icons_IconChecked__WEBPACK_IMPORTED_MODULE_14__, _button__WEBPACK_IMPORTED_MODULE_17__, _style__WEBPACK_IMPORTED_MODULE_18__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable @next/next/no-img-element */ 












/* eslint-disable react/prop-types */ 





var BtnString;
(function(BtnString) {
    BtnString["AVAILABLE"] = "TH\xcaM";
    BtnString["IN_CART"] = "XO\xc1";
    BtnString["PENDING"] = "ĐANG DUYỆT";
    BtnString["BOUGHT"] = "Đ\xc3 DUYỆT";
})(BtnString || (BtnString = {}));
var Color;
(function(Color) {
    Color["AVAILABLE"] = "#0dcaf0";
    Color["IN_CART"] = "#ed5e68";
    Color["PENDING"] = "#8c8c8c";
    Color["BOUGHT"] = "#23c501";
})(Color || (Color = {}));
const DocItem = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_4__.memo)((props)=>{
    const { document, isMyLearn, className, isSearch } = props;
    const [btnString, setBtnString] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(BtnString.AVAILABLE);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const [currentDoc, setCurrentDoc] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(document);
    // const [isFav, setIsFav] = useState<boolean>(document?.is_favorite || false);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (currentDoc.sale_status === src_lib_utils_enum__WEBPACK_IMPORTED_MODULE_9__/* .SaleStatusEnum */ .NO.AVAILABLE) {
            setBtnString(BtnString.AVAILABLE);
        } else if (currentDoc.sale_status === src_lib_utils_enum__WEBPACK_IMPORTED_MODULE_9__/* .SaleStatusEnum */ .NO.IN_CART) {
            setBtnString(BtnString.IN_CART);
        } else if (currentDoc.sale_status === src_lib_utils_enum__WEBPACK_IMPORTED_MODULE_9__/* .SaleStatusEnum */ .NO.PENDING) {
            setBtnString(BtnString.PENDING);
        } else if (currentDoc.sale_status === src_lib_utils_enum__WEBPACK_IMPORTED_MODULE_9__/* .SaleStatusEnum */ .NO.BOUGHT) {
            setBtnString(BtnString.BOUGHT);
        }
    }, [
        currentDoc
    ]);
    const handleUpdateDoc = async ()=>{
        (0,src_lib_utils_utils__WEBPACK_IMPORTED_MODULE_12__/* .checkAccountPermission */ .$f)();
        setLoading(true);
        try {
            if (currentDoc.sale_status === src_lib_utils_enum__WEBPACK_IMPORTED_MODULE_9__/* .SaleStatusEnum */ .NO.AVAILABLE) {
                const addTo = await src_lib_api_course__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.moveDoc(currentDoc.id, src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_8__/* .MoveEnum */ .vY.LIST, src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_8__/* .MoveEnum */ .vY.CART);
                setTimeout(()=>{
                    setCurrentDoc(addTo);
                }, 300);
            } else if (currentDoc.sale_status === src_lib_utils_enum__WEBPACK_IMPORTED_MODULE_9__/* .SaleStatusEnum */ .NO.IN_CART) {
                const removeFrom = await src_lib_api_course__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.moveDoc(currentDoc.id, src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_8__/* .MoveEnum */ .vY.CART, src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_8__/* .MoveEnum */ .vY.LIST);
                setTimeout(()=>{
                    setCurrentDoc(removeFrom);
                }, 300);
            }
        } catch (error) {
            console.log("error update cart", error);
        } finally{
            setTimeout(()=>{
                setLoading(false);
            }, 300);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        setCurrentDoc(document);
    }, [
        document
    ]);
    const handleAddFav = async ()=>{
        try {
            setTimeout(async ()=>{
                if (currentDoc.is_favorite) {
                    const removeFromFav = await src_lib_api_course__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.moveDoc(currentDoc.id, src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_8__/* .MoveEnum */ .vY.FAVORITE, src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_8__/* .MoveEnum */ .vY.LIST);
                    dispatch(src_lib_reducers_document_documentSlice__WEBPACK_IMPORTED_MODULE_7__/* .docActions */ .e3.setIsFavourite(removeFromFav));
                    setCurrentDoc(removeFromFav);
                } else {
                    const addToFav = await src_lib_api_course__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.moveDoc(currentDoc.id, src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_8__/* .MoveEnum */ .vY.LIST, src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_8__/* .MoveEnum */ .vY.FAVORITE);
                    dispatch(src_lib_reducers_document_documentSlice__WEBPACK_IMPORTED_MODULE_7__/* .docActions */ .e3.setIsFavourite(addToFav));
                    setCurrentDoc(addToFav);
                }
            }, 500);
        } catch (error) {
            console.log("error", error);
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_18__/* .ItemDocCourseWrapper */ .NP, {
        css: _emotion_react__WEBPACK_IMPORTED_MODULE_13__.css`
        .card-btn {
          &:hover {
            border-color: ${btnString === BtnString.AVAILABLE ? Color.AVAILABLE : Color.IN_CART};
            color: ${btnString === BtnString.AVAILABLE ? Color.AVAILABLE : Color.IN_CART};
            letter-spacing: 8px;
            transition: all 0.5s ease;
          }
        }

        .anticon-loading {
          font-size: 18px;
          color: ${btnString === BtnString.AVAILABLE ? Color.AVAILABLE : Color.IN_CART};
        }
      `,
        className: className,
        children: [
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "pop-up",
                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_popover__WEBPACK_IMPORTED_MODULE_1___default()), {
                    placement: "right",
                    content: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        css: _emotion_react__WEBPACK_IMPORTED_MODULE_13__.css`
                max-width: 300px;
                min-width: 200px;
                .title {
                  font-weight: 700;
                  font-size: 15px;
                }
                .heart {
                  font-size: 40px;
                  margin-left: 10px;
                  .anticon {
                    color: ${currentDoc.is_favorite ? "red" : ""};
                  }
                  .anticon:hover {
                    color: red;
                    cursor: pointer;
                    transition: all 1s ease;
                  }
                }
              `,
                        children: [
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "title",
                                children: document.name
                            }),
                            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                children: [
                                    "Cập nhật: ",
                                    (0,src_lib_utils_format__WEBPACK_IMPORTED_MODULE_10__/* .formatDate */ .p6)(document?.modified)
                                ]
                            }),
                            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                children: [
                                    "Dung lượng: ",
                                    document?.file?.file_size,
                                    " KB"
                                ]
                            }),
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: document.description
                            })
                        ]
                    }),
                    trigger: "hover",
                    children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                        href: `${src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.DOCUMENT}/${document.id}`,
                        className: "detail",
                        children: [
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "doc--image",
                                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: "doc-img",
                                    src: `${document?.thumbnail?.image_path || src_assets_images_docDefault_jpg__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z.src}`,
                                    alt: "doc image."
                                })
                            }),
                            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "doc_info",
                                children: [
                                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "title",
                                        children: document.name
                                    }),
                                    isSearch && /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        children: [
                                            "Cập nhật: ",
                                            (0,src_lib_utils_format__WEBPACK_IMPORTED_MODULE_10__/* .formatDate */ .p6)(document?.modified)
                                        ]
                                    }),
                                    document?.author && /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "author",
                                        children: [
                                            "T\xe1c giả: ",
                                            document?.author
                                        ]
                                    }),
                                    isSearch && document.description
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "contact-us",
                        children: [
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                href: src_lib_config_env__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z.GMAIL_URL,
                                target: "_blank",
                                children: "Li\xean hệ"
                            }),
                            document.sale_status === src_lib_utils_enum__WEBPACK_IMPORTED_MODULE_9__/* .SaleStatusEnum */ .NO.BOUGHT && /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_assets_icons_IconChecked__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {})
                        ]
                    }),
                    !isMyLearn && !isSearch && /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_button__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                        className: "card-btn",
                        btnTextColor: "black",
                        btnStyle: "outline",
                        btnSize: "small",
                        btnWidth: "full-w",
                        loading: loading,
                        disabled: currentDoc.sale_status === src_lib_utils_enum__WEBPACK_IMPORTED_MODULE_9__/* .SaleStatusEnum */ .NO.PENDING || currentDoc.sale_status === src_lib_utils_enum__WEBPACK_IMPORTED_MODULE_9__/* .SaleStatusEnum */ .NO.BOUGHT || loading,
                        onClick: (e)=>{
                            e.stopPropagation();
                            handleUpdateDoc();
                        },
                        children: btnString
                    })
                ]
            })
        ]
    });
}, (lodash_isEqual__WEBPACK_IMPORTED_MODULE_2___default()));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DocItem);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
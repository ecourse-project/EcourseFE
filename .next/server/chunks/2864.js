"use strict";
exports.id = 2864;
exports.ids = [2864];
exports.modules = {

/***/ 23136:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/online-course.d5d68133.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAbklEQVR42g3BPQ7BYAAA0Lc4gHQwmBymg0n8BJEYfQstESEWTaQRCaYGmxs4Qa/Andr3iHTENvWutoi3nb+JgZ+vFys8nGQKM0sSNI0MtTSsyX1MBXtnwYFcJrawlRo7Upi7SCWugif0lW7uSj0qb7EZcY93GxQAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 12864:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57101);
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55893);
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popover__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_assets_images_online_course_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23136);
/* harmony import */ var src_lib_api_course__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(84626);
/* harmony import */ var src_lib_hooks_useQueryParam__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8443);
/* harmony import */ var src_lib_reducers_course_courseSlice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(46104);
/* harmony import */ var src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(34317);
/* harmony import */ var src_lib_utils_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(24519);
/* harmony import */ var src_lib_utils_format__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(90455);
/* harmony import */ var src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(70351);
/* harmony import */ var src_lib_utils_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(33264);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(53139);
/* harmony import */ var src_assets_icons_IconChecked__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(63890);
/* harmony import */ var src_lib_config_env__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(52284);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(59137);
/* harmony import */ var _document_style__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(81591);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, src_lib_api_course__WEBPACK_IMPORTED_MODULE_7__, src_lib_hooks_useQueryParam__WEBPACK_IMPORTED_MODULE_8__, _emotion_react__WEBPACK_IMPORTED_MODULE_15__, src_assets_icons_IconChecked__WEBPACK_IMPORTED_MODULE_16__, _button__WEBPACK_IMPORTED_MODULE_18__, _document_style__WEBPACK_IMPORTED_MODULE_19__]);
([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, src_lib_api_course__WEBPACK_IMPORTED_MODULE_7__, src_lib_hooks_useQueryParam__WEBPACK_IMPORTED_MODULE_8__, _emotion_react__WEBPACK_IMPORTED_MODULE_15__, src_assets_icons_IconChecked__WEBPACK_IMPORTED_MODULE_16__, _button__WEBPACK_IMPORTED_MODULE_18__, _document_style__WEBPACK_IMPORTED_MODULE_19__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




/* eslint-disable react/prop-types */ 















const CourseItem = (props)=>{
    // eslint-disable-next-line prefer-const
    const { course, isMyLearn, className, isSearch } = props;
    const [btnString, setBtnString] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(src_lib_utils_enum__WEBPACK_IMPORTED_MODULE_11__/* .BtnString */ .Im.AVAILABLE);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const [currentCourse, setCurrentCourse] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(course);
    const params = (0,src_lib_hooks_useQueryParam__WEBPACK_IMPORTED_MODULE_8__/* .useQueryParam */ .W)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
    const route = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (currentCourse.course_of_class && !currentCourse.request_status) {
            setBtnString(src_lib_utils_enum__WEBPACK_IMPORTED_MODULE_11__/* .BtnString */ .Im.AVAILABLE_REQUEST);
        } else if (currentCourse.request_status === src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_10__/* .RequestStatus */ .eE.REQUESTED) {
            setBtnString(src_lib_utils_enum__WEBPACK_IMPORTED_MODULE_11__/* .BtnString */ .Im.REQUESTED);
        } else if (currentCourse.request_status === src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_10__/* .RequestStatus */ .eE.AVAILABLE) {
            setBtnString(src_lib_utils_enum__WEBPACK_IMPORTED_MODULE_11__/* .BtnString */ .Im.AVAILABLE_REQUEST);
        } else if (currentCourse.request_status === src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_10__/* .RequestStatus */ .eE.ACCEPTED) {
            setBtnString(src_lib_utils_enum__WEBPACK_IMPORTED_MODULE_11__/* .BtnString */ .Im.BOUGHT);
        }
        // } else {
        if (currentCourse.sale_status === src_lib_utils_enum__WEBPACK_IMPORTED_MODULE_11__/* .SaleStatusEnum */ .NO.AVAILABLE) {
            setBtnString(src_lib_utils_enum__WEBPACK_IMPORTED_MODULE_11__/* .BtnString */ .Im.AVAILABLE);
        } else if (currentCourse.sale_status === src_lib_utils_enum__WEBPACK_IMPORTED_MODULE_11__/* .SaleStatusEnum */ .NO.IN_CART) {
            setBtnString(src_lib_utils_enum__WEBPACK_IMPORTED_MODULE_11__/* .BtnString */ .Im.IN_CART);
        } else if (currentCourse.sale_status === src_lib_utils_enum__WEBPACK_IMPORTED_MODULE_11__/* .SaleStatusEnum */ .NO.PENDING) {
            setBtnString(src_lib_utils_enum__WEBPACK_IMPORTED_MODULE_11__/* .BtnString */ .Im.PENDING);
        } else if (currentCourse.sale_status === src_lib_utils_enum__WEBPACK_IMPORTED_MODULE_11__/* .SaleStatusEnum */ .NO.BOUGHT) {
            setBtnString(src_lib_utils_enum__WEBPACK_IMPORTED_MODULE_11__/* .BtnString */ .Im.BOUGHT);
        }
    // }
    }, [
        currentCourse
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        setCurrentCourse(course);
    }, [
        course
    ]);
    const handleClick = async ()=>{
        if (currentCourse?.course_of_class && currentCourse.request_status === src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_10__/* .RequestStatus */ .eE.ACCEPTED || currentCourse.sale_status === src_lib_utils_enum__WEBPACK_IMPORTED_MODULE_11__/* .SaleStatusEnum */ .NO.BOUGHT) {
            route.push(`${src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z.COURSE_PROGRESS}?id=${currentCourse.id}&isClass=${params.isClass ? "true" : "false"}`);
        }
        (0,src_lib_utils_utils__WEBPACK_IMPORTED_MODULE_14__/* .checkAccountPermission */ .$f)();
        setLoading(true);
        try {
            if (currentCourse.request_status && currentCourse.request_status !== src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_10__/* .RequestStatus */ .eE.ACCEPTED) {
                const reuqestClass = await src_lib_api_course__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.requestJoinClass(currentCourse.id);
                setTimeout(()=>{
                    setCurrentCourse((prev)=>({
                            ...prev,
                            request_status: reuqestClass.request_status
                        }));
                }, 300);
                return;
            }
            if (currentCourse.sale_status && currentCourse.sale_status === src_lib_utils_enum__WEBPACK_IMPORTED_MODULE_11__/* .SaleStatusEnum */ .NO.AVAILABLE) {
                const addTo = await src_lib_api_course__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.moveCourse(currentCourse.id, src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_10__/* .MoveEnum */ .vY.LIST, src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_10__/* .MoveEnum */ .vY.CART);
                setCurrentCourse(addTo);
            } else if (currentCourse.sale_status && currentCourse.sale_status === src_lib_utils_enum__WEBPACK_IMPORTED_MODULE_11__/* .SaleStatusEnum */ .NO.IN_CART) {
                const removeFrom = await src_lib_api_course__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.moveCourse(currentCourse.id, src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_10__/* .MoveEnum */ .vY.CART, src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_10__/* .MoveEnum */ .vY.LIST);
                setCurrentCourse(removeFrom);
            }
        } catch (error) {
            console.log("error update cart", error);
        } finally{
            setTimeout(()=>{
                setLoading(false);
            }, 300);
        }
    };
    const handleAddFav = async (id)=>{
        setLoading(true);
        setTimeout(async ()=>{
            try {
                if (currentCourse.is_favorite) {
                    const removeFromFav = await src_lib_api_course__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.moveCourse(id, src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_10__/* .MoveEnum */ .vY.FAVORITE, src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_10__/* .MoveEnum */ .vY.LIST);
                    dispatch(src_lib_reducers_course_courseSlice__WEBPACK_IMPORTED_MODULE_9__/* .courseAction */ .tD.setIsFavourite(removeFromFav));
                    setCurrentCourse(removeFromFav);
                } else {
                    const addToFav = await src_lib_api_course__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.moveCourse(id, src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_10__/* .MoveEnum */ .vY.LIST, src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_10__/* .MoveEnum */ .vY.FAVORITE);
                    dispatch(src_lib_reducers_course_courseSlice__WEBPACK_IMPORTED_MODULE_9__/* .courseAction */ .tD.setIsFavourite(addToFav));
                    setCurrentCourse(addToFav);
                }
            } catch (error) {
                console.log("error :>> ", error);
                setLoading(false);
            }
        }, 300);
    };
    return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_document_style__WEBPACK_IMPORTED_MODULE_19__/* .ItemDocCourseWrapper */ .NP, {
        css: _emotion_react__WEBPACK_IMPORTED_MODULE_15__.css`
        .card-btn {
          &:hover {
            border-color: ${btnString === src_lib_utils_enum__WEBPACK_IMPORTED_MODULE_11__/* .BtnString */ .Im.AVAILABLE ? src_lib_utils_enum__WEBPACK_IMPORTED_MODULE_11__/* .Color */ .Il.AVAILABLE : src_lib_utils_enum__WEBPACK_IMPORTED_MODULE_11__/* .Color */ .Il.IN_CART};
            color: ${btnString === src_lib_utils_enum__WEBPACK_IMPORTED_MODULE_11__/* .BtnString */ .Im.AVAILABLE ? src_lib_utils_enum__WEBPACK_IMPORTED_MODULE_11__/* .Color */ .Il.AVAILABLE : src_lib_utils_enum__WEBPACK_IMPORTED_MODULE_11__/* .Color */ .Il.IN_CART};
            letter-spacing: 8px;
          }
        }
        .class-btn {
          letter-spacing: 0;
          &:hover {
            letter-spacing: 0.5px;
            font-weight: 600;
          }
          &:focus {
            letter-spacing: 0.5px;
            font-weight: 600;
          }
          &:active {
            letter-spacing: 0.5px;
            font-weight: 600;
          }
        }
        .anticon-loading {
          font-size: 18px;
          color: ${btnString === src_lib_utils_enum__WEBPACK_IMPORTED_MODULE_11__/* .BtnString */ .Im.AVAILABLE ? src_lib_utils_enum__WEBPACK_IMPORTED_MODULE_11__/* .Color */ .Il.AVAILABLE : src_lib_utils_enum__WEBPACK_IMPORTED_MODULE_11__/* .Color */ .Il.IN_CART};
        }
      `,
        className: className,
        children: [
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_popover__WEBPACK_IMPORTED_MODULE_1___default()), {
                placement: "right",
                content: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    css: _emotion_react__WEBPACK_IMPORTED_MODULE_15__.css`
              max-width: 300px;
              .title-popup {
                font-weight: 700;
                font-size: 15px;
              }
              .heart {
                font-size: 40px;
                margin-left: 10px;
                .anticon {
                  color: ${currentCourse.is_favorite ? "red" : ""};
                }
                .anticon:hover {
                  color: red;
                  cursor: pointer;
                }
              }
            `,
                    children: [
                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "title-popup",
                            children: currentCourse.name
                        }),
                        /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                "Cập nhật: ",
                                (0,src_lib_utils_format__WEBPACK_IMPORTED_MODULE_12__/* .formatDate */ .p6)(currentCourse?.modified)
                            ]
                        }),
                        /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                "Số b\xe0i học: ",
                                currentCourse?.lessons?.length
                            ]
                        }),
                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: currentCourse.description
                        })
                    ]
                }),
                trigger: "hover",
                children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: `${params.isClass ? src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z.CLASS : src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z.COURSE}/${currentCourse.id}`,
                    className: "detail",
                    children: [
                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "doc--image",
                            children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                className: "doc-img",
                                src: `${currentCourse?.thumbnail?.image_path || src_assets_images_online_course_png__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.src}`,
                                alt: "course_image"
                            })
                        }),
                        /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "doc_info",
                            children: [
                                /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                            className: "title",
                                            children: currentCourse.name
                                        }),
                                        isSearch && /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            children: [
                                                "Cập nhật: ",
                                                (0,src_lib_utils_format__WEBPACK_IMPORTED_MODULE_12__/* .formatDate */ .p6)(currentCourse?.modified)
                                            ]
                                        })
                                    ]
                                }),
                                currentCourse?.author && /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "author",
                                    children: [
                                        "T\xe1c giả: ",
                                        currentCourse?.author
                                    ]
                                }),
                                isSearch && currentCourse.description
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "contact-us",
                        children: [
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: src_lib_config_env__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z.GMAIL_URL,
                                target: "_blank",
                                children: "Li\xean hệ"
                            }),
                            currentCourse.sale_status === src_lib_utils_enum__WEBPACK_IMPORTED_MODULE_11__/* .SaleStatusEnum */ .NO.BOUGHT && /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_assets_icons_IconChecked__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {})
                        ]
                    }),
                    !isMyLearn && !isSearch && /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_button__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                        className: "card-btn class-btn",
                        btnTextColor: "black",
                        btnStyle: "outline",
                        btnSize: "small",
                        btnWidth: "full-w",
                        loading: loading,
                        disabled: loading || currentCourse.sale_status === src_lib_utils_enum__WEBPACK_IMPORTED_MODULE_11__/* .SaleStatusEnum */ .NO.PENDING,
                        onClick: handleClick,
                        children: btnString
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CourseItem);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
"use strict";
exports.id = 1364;
exports.ids = [1364];
exports.modules = {

/***/ 53862:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57101);
/* harmony import */ var antd_lib_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18070);
/* harmony import */ var antd_lib_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29538);
/* harmony import */ var antd_lib_upload__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_upload__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17369);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_img_crop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12367);
/* harmony import */ var antd_img_crop__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_img_crop__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_lib_api_course__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(84626);
/* harmony import */ var src_lib_utils_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(24519);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(34041);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(53139);
/* harmony import */ var src_lib_config_env__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(52284);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, src_lib_api_course__WEBPACK_IMPORTED_MODULE_6__, _emotion_react__WEBPACK_IMPORTED_MODULE_9__]);
([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, src_lib_api_course__WEBPACK_IMPORTED_MODULE_6__, _emotion_react__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const getBase64 = (file)=>new Promise((resolve, reject)=>{
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = ()=>resolve(reader.result);
        reader.onerror = (error)=>reject(error);
    });
const UploadImage = ({ setAvatar, avatar })=>{
    const [previewImage, setPreviewImage] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("");
    const [fileList, setFileList] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);
    const [uploading, setUploading] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const onChange = async (file)=>{
        const formData = new FormData();
        formData.append("image", file);
        formData.append("is_avatar", "True");
        setUploading(true);
        const token =  false ? 0 : {};
        fetch(src_lib_config_env__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.API_URL + src_lib_api_course__WEBPACK_IMPORTED_MODULE_6__/* .apiURL */ .Q.uploadImage(), {
            method: "POST",
            body: formData,
            headers: {
                Authorization: `Bearer ${token.access}`
            }
        }).then((res)=>res.json()).then((res)=>{
            setAvatar(res[0]);
            antd_lib_message__WEBPACK_IMPORTED_MODULE_3___default().success("upload successfully.");
        }).catch((error)=>{
            console.log("error :==>>", error);
            antd_lib_message__WEBPACK_IMPORTED_MODULE_3___default().error("upload failed.");
        }).finally(()=>{
            setUploading(false);
        });
    };
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_img_crop__WEBPACK_IMPORTED_MODULE_4___default()), {
            onModalOk: async (file)=>{
                if (!file) return;
                const isJpgOrPng = file?.type === "image/jpeg" || file?.type === "image/png";
                if (!isJpgOrPng) {
                    antd_lib_message__WEBPACK_IMPORTED_MODULE_3___default().error("You can only upload JPG/PNG file!");
                }
                const url = await getBase64(file);
                setPreviewImage(url);
                setFileList([
                    file
                ]);
                // return false;
                onChange(file);
            },
            onModalCancel: ()=>setFileList([]),
            showGrid: true,
            children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_upload__WEBPACK_IMPORTED_MODULE_2___default()), {
                listType: "picture-card",
                fileList: fileList,
                showUploadList: false,
                onRemove: ()=>setFileList([]),
                children: fileList.length < 1 && !avatar ? "+ Upload" : uploading ? "Loading" : /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                        src: previewImage || avatar,
                        alt: "avatar",
                        style: {
                            borderRadius: "5px"
                        },
                        preview: {
                            mask: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                css: _emotion_react__WEBPACK_IMPORTED_MODULE_9__.css`
                        display: flex;
                        align-items: center;
                        svg {
                          font-size: 32px;
                        }
                      `,
                                title: "Update Profile Picture",
                                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_8__.MdOutlineModeEditOutline, {})
                            }),
                            visible: false
                        }
                    })
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UploadImage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 45621:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57101);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2278);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_empty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14663);
/* harmony import */ var antd_lib_empty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_empty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80261);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58168);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_lib_utils_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(48019);
/* harmony import */ var _ant_design_icons_lib_icons_AppstoreAddOutlined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(48491);
/* harmony import */ var _ant_design_icons_lib_icons_AppstoreAddOutlined__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_AppstoreAddOutlined__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(53139);
/* harmony import */ var _learning_item__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(50987);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, src_lib_utils_animations__WEBPACK_IMPORTED_MODULE_6__, _emotion_react__WEBPACK_IMPORTED_MODULE_8__, _learning_item__WEBPACK_IMPORTED_MODULE_9__]);
([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, src_lib_utils_animations__WEBPACK_IMPORTED_MODULE_6__, _emotion_react__WEBPACK_IMPORTED_MODULE_8__, _learning_item__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const { Title } = (antd_lib_typography__WEBPACK_IMPORTED_MODULE_4___default());
const MyCourseUI = (props)=>{
    const { courses, docs, loading } = props;
    return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        css: _emotion_react__WEBPACK_IMPORTED_MODULE_8__.css`
        .list_item {
          margin: auto;
          display: flex;
          margin: auto;
          display: flex;
          flex-wrap: wrap;
          gap: 1.6rem 0;
          margin-left: -0.8rem;
          margin-right: -0.8rem;
          gap: 1.6rem 2rem;
          padding: 10px;
          justify-content: center;
        }
        .doc-title {
          font-size: 30px;
          font-weight: 500;
          text-decoration: overline;
          .anticon {
            vertical-align: baseline;
          }
        }
      `,
        children: [
            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "doc-title",
                children: [
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_AppstoreAddOutlined__WEBPACK_IMPORTED_MODULE_7___default()), {}),
                    "T\xe0i liệu"
                ]
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "course_list list_item",
                children: loading ? /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    style: {
                        height: "72px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    },
                    children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_spin__WEBPACK_IMPORTED_MODULE_3___default()), {
                        indicator: src_lib_utils_animations__WEBPACK_IMPORTED_MODULE_6__/* .antIcon */ .GK
                    })
                }) : docs.length ? (docs?.map((v, i)=>{
                    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_learning_item__WEBPACK_IMPORTED_MODULE_9__/* .LearningItem */ .E, {
                        doc: v
                    }, i);
                })) : /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_empty__WEBPACK_IMPORTED_MODULE_2___default()), {})
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_divider__WEBPACK_IMPORTED_MODULE_1___default()), {}),
            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "doc-title",
                children: [
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_AppstoreAddOutlined__WEBPACK_IMPORTED_MODULE_7___default()), {}),
                    "Kho\xe1 học"
                ]
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "doc_list list_item",
                children: loading ? /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    style: {
                        height: "72px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    },
                    children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_spin__WEBPACK_IMPORTED_MODULE_3___default()), {
                        indicator: src_lib_utils_animations__WEBPACK_IMPORTED_MODULE_6__/* .antIcon */ .GK
                    })
                }) : courses.length ? (courses?.map((v, i)=>{
                    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_learning_item__WEBPACK_IMPORTED_MODULE_9__/* .LearningItem */ .E, {
                        course: v
                    }, i);
                })) : /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_empty__WEBPACK_IMPORTED_MODULE_2___default()), {})
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyCourseUI);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 50987:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ LearningItem)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57101);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22317);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2278);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_progress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76429);
/* harmony import */ var antd_lib_progress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_progress__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(70351);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4115);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, _emotion_styled__WEBPACK_IMPORTED_MODULE_7__]);
([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, _emotion_styled__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








var ItemType;
(function(ItemType) {
    ItemType["DOC"] = "DOC";
    ItemType["COURESE"] = "COURSE";
})(ItemType || (ItemType = {}));
const { Meta } = (antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default());
const ItemWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_7__["default"].div`
  .ant-card {
    height: fit-content;
    width: 260px;
    cursor: pointer;
  }
  .ant-card-body {
    padding: 10px;
  }
  .ant-card-meta {
    height: 55px;
  }
  .ant-card-meta-title {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: unset;
    font-size: 15px;
  }
  .ant-card-cover img {
    border-radius: 3px;
  }
  .ant-progress-bg {
    height: 5px !important;
  }
  img {
    width: 99%;
    height: 250px;
    margin: auto;
  }
  .extra {
    display: flex;
    justify-content: space-between;
    .ant-rate {
      font-size: 14px;
      color: #ffa900;
    }
  }
  .status_text {
    font-weight: 500;
    &:hover {
      font-weight: 700;
      color: #ffa900;
      cursor: pointer;
    }
  }
  .rate {
    cursor: pointer;
    .anticon-star {
      cursor: pointer;
    }
  }
`;
const LearningItem = (props)=>{
    const { course, doc } = props;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    // const rateCourse = async (course_id: string, rating: number, comment: string) => {
    //   try {
    //     if (rating === 1) rating = RatingEnum.ONE;
    //     if (rating === 2) rating = RatingEnum.TWO;
    //     if (rating === 3) rating = RatingEnum.THREE;
    //     if (rating === 4) rating = RatingEnum.FOUR;
    //     if (rating === 5) rating = RatingEnum.FIVE;
    //     const rate = await CourseService.rateCourse({
    //       course_id,
    //       rating,
    //       comment,
    //     } as RateCourseArgs);
    //     setMyRate(rate);
    //     course?.rating_detail?.push(rate);
    //   } catch (error) {
    //     //console.log('error', error);
    //   }
    // };
    // const handleSaveRating = () => {
    //   rateCourse(course?.id || '', star, feedback);
    //   setOpenRatingModal(false);
    // };
    const handleLearn = (type)=>{
        if (type === ItemType.COURESE) router.push(`${src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.COURSE}/${course?.id}`);
        if (type === ItemType.DOC) router.push(`${src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.DOCUMENT}/${doc?.id}`);
    };
    return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            course ? /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ItemWrapper, {
                children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default()), {
                    hoverable: true,
                    cover: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        alt: "example",
                        src: course?.thumbnail?.image_path
                    }),
                    onClick: ()=>{
                        handleLearn(ItemType.COURESE);
                    },
                    children: [
                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Meta, {
                            title: course.name
                        }),
                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: "T\xean t\xe1c giả"
                        }),
                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_progress__WEBPACK_IMPORTED_MODULE_3___default()), {
                            percent: course.progress,
                            showInfo: false
                        }),
                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "extra",
                            children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "status_text",
                                children: course.progress === 100 ? "Đ\xe3 ho\xe0n th\xe0nh" : course.progress !== 0 ? `${course.progress}% đã hoàn thành` : "Bắt đầu học"
                            })
                        })
                    ]
                })
            }) : "",
            doc ? /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ItemWrapper, {
                children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default()), {
                    hoverable: true,
                    cover: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        alt: "example",
                        src: doc?.thumbnail?.image_path
                    }),
                    onClick: ()=>{
                        handleLearn(ItemType.DOC);
                    },
                    children: [
                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Meta, {
                            title: doc.name
                        }),
                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: "T\xean t\xe1c giả"
                        }),
                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_divider__WEBPACK_IMPORTED_MODULE_2___default()), {}),
                        /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "extra",
                            children: [
                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "status_text",
                                    children: "Đọc t\xe0i liệu"
                                }),
                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {})
                            ]
                        })
                    ]
                })
            }) : ""
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 21772:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57101);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28518);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2278);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_empty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14663);
/* harmony import */ var antd_lib_empty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_empty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_components_document_doc_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57617);
/* harmony import */ var _ant_design_icons_lib_icons_AppstoreAddOutlined__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(48491);
/* harmony import */ var _ant_design_icons_lib_icons_AppstoreAddOutlined__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_AppstoreAddOutlined__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(53139);
/* harmony import */ var _course_item__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12864);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, src_components_document_doc_item__WEBPACK_IMPORTED_MODULE_5__, _emotion_react__WEBPACK_IMPORTED_MODULE_7__, _course_item__WEBPACK_IMPORTED_MODULE_8__]);
([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, src_components_document_doc_item__WEBPACK_IMPORTED_MODULE_5__, _emotion_react__WEBPACK_IMPORTED_MODULE_7__, _course_item__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const WishListUI = (props)=>{
    const { favourite } = props;
    return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        css: _emotion_react__WEBPACK_IMPORTED_MODULE_7__.css`
        .list_item {
          display: flex;
          margin: auto;
          display: flex;
          flex-wrap: wrap;
          gap: 1.6rem 0;
          margin-left: -0.8rem;
          margin-right: -0.8rem;
          gap: 1.6rem 2rem;
          padding: 10px;
          justify-content: center;
        }
        .doc-title {
          font-size: 30px;
          font-weight: 500;
          text-decoration: overline;
          .anticon {
            vertical-align: baseline;
          }
        }
      `,
        children: [
            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "doc-title",
                children: [
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_AppstoreAddOutlined__WEBPACK_IMPORTED_MODULE_6___default()), {}),
                    "T\xe0i liệu"
                ]
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "course_list list_item",
                children: favourite?.documents?.length ? (favourite?.documents?.map((v, i)=>{
                    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default()), {
                        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_document_doc_item__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            document: v,
                            isMyLearn: true
                        })
                    }, i);
                })) : /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_empty__WEBPACK_IMPORTED_MODULE_3___default()), {})
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_divider__WEBPACK_IMPORTED_MODULE_2___default()), {}),
            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "doc-title",
                children: [
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_AppstoreAddOutlined__WEBPACK_IMPORTED_MODULE_6___default()), {}),
                    "Kho\xe1 học"
                ]
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "doc_list list_item",
                children: favourite?.courses?.length ? (favourite?.courses?.map((v, i)=>{
                    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default()), {
                        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_course_item__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            course: v,
                            isMyLearn: true
                        })
                    }, i);
                })) : /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_empty__WEBPACK_IMPORTED_MODULE_3___default()), {})
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WishListUI);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 55598:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ TabPaneSettingsSection)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57101);
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26216);
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20258);
/* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_fast_compare__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53139);
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21364);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, _emotion_react__WEBPACK_IMPORTED_MODULE_4__, _tabs__WEBPACK_IMPORTED_MODULE_5__]);
([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, _emotion_react__WEBPACK_IMPORTED_MODULE_4__, _tabs__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable react/display-name */ 





const { TabPane } = (antd_lib_tabs__WEBPACK_IMPORTED_MODULE_1___default());
const TabPaneSettingsSection = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().memo((props)=>{
    const { children, className, tabData, title, activeKey, btnAddDripCampaign, onChangeSwitchTabs } = props;
    const { setSwitchTabs } = react__WEBPACK_IMPORTED_MODULE_2___default().useContext(_tabs__WEBPACK_IMPORTED_MODULE_5__/* .SettingContext */ .Y7);
    if (!tabData) return null;
    return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: className ?? "",
        css: _emotion_react__WEBPACK_IMPORTED_MODULE_4__.css`
        margin-top: 15px;
        .flex {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
          .btn-add {
            width: 175px !important;
            background-color: #ffa535 !important;
          }
        }
        .title {
          .title-content {
            font-weight: 700;
            font-family: FiraSans;
            font-size: 32px;
          }
          .title-icon {
            font-size: 32px;
            font-family: 'Fa 300', sans-serif;
          }
        }
        .block {
          padding: 0 !important;
        }
        .ant-tabs {
          font-size: 16px;
          &.ant-tabs-card.ant-tabs-top > .ant-tabs-nav .ant-tabs-tab + .ant-tabs-tab {
            margin-left: 2px !important;
          }
          .ant-tabs-nav {
            /* border-bottom: 1px solid #00aaff; */
            .ant-tabs-nav-list {
              min-width: 200px;
              .ant-tabs-tab {
                background-color: transparent !important;
                border: none;
                padding: 10px 30px;
                border-radius: 0px;
                border-top-left-radius: 3px;
                border-top-right-radius: 3px;
                display: flex;
                justify-content: flex-end;
                :hover {
                  background-color: #666666 !important;
                  .ant-tabs-tab-btn {
                    color: #fff;
                  }
                }
                &.ant-tabs-tab-active {
                  background-color: #666666 !important;
                  .ant-tabs-tab-btn {
                    color: #fff;
                  }
                }
                .ant-tabs-tab-btn {
                  cursor: pointer;
                  color: #222222;
                  font-size: 16px;
                  font-weight: 700;
                }
              }
            }
          }
        }
      `,
        children: [
            title && /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex",
                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "title",
                    children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "title-content",
                        children: title
                    })
                })
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_tabs__WEBPACK_IMPORTED_MODULE_1___default()), {
                type: "card",
                onChange: async (tabs)=>{
                    if (onChangeSwitchTabs) {
                        onChangeSwitchTabs(tabs);
                        return;
                    }
                    setSwitchTabs && setSwitchTabs(tabs);
                },
                activeKey: activeKey,
                tabPosition: "left",
                children: tabData?.map((v)=>{
                    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TabPane, {
                        // tab={
                        //   <span className="user-icon">
                        //     {v.label}
                        //     <span>{v.icon}</span>
                        //   </span>
                        // }
                        tab: v.label,
                        children: v.content
                    }, v.key);
                })
            }),
            children
        ]
    });
}, (react_fast_compare__WEBPACK_IMPORTED_MODULE_3___default()));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 46609:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57101);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_components_alert_SweetAlert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20768);
/* harmony import */ var src_components_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59137);
/* harmony import */ var src_components_error_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(58801);
/* harmony import */ var src_components_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45561);
/* harmony import */ var src_lib_api_course__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(84626);
/* harmony import */ var src_lib_utils_regularExpression__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(92569);
/* harmony import */ var src_lib_utils_validation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(90768);
/* harmony import */ var src_styles_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(11278);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(75609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(53139);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, src_components_alert_SweetAlert__WEBPACK_IMPORTED_MODULE_3__, src_components_button__WEBPACK_IMPORTED_MODULE_4__, src_components_error_message__WEBPACK_IMPORTED_MODULE_5__, src_components_input__WEBPACK_IMPORTED_MODULE_6__, src_lib_api_course__WEBPACK_IMPORTED_MODULE_7__, _emotion_react__WEBPACK_IMPORTED_MODULE_12__]);
([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, src_components_alert_SweetAlert__WEBPACK_IMPORTED_MODULE_3__, src_components_button__WEBPACK_IMPORTED_MODULE_4__, src_components_error_message__WEBPACK_IMPORTED_MODULE_5__, src_components_input__WEBPACK_IMPORTED_MODULE_6__, src_lib_api_course__WEBPACK_IMPORTED_MODULE_7__, _emotion_react__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const ChangePasswordForm = ()=>{
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const validationSchema = react__WEBPACK_IMPORTED_MODULE_2___default().useRef(yup__WEBPACK_IMPORTED_MODULE_11__.object().shape({
        currentPassword: yup__WEBPACK_IMPORTED_MODULE_11__.string().required(src_lib_utils_validation__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z.changePassword.required),
        changePassword: yup__WEBPACK_IMPORTED_MODULE_11__.string().required(src_lib_utils_validation__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z.changePassword.required).matches(src_lib_utils_regularExpression__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.password, {
            message: src_lib_utils_validation__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z.password.invalidPwdRegex
        }),
        confirmPassword: yup__WEBPACK_IMPORTED_MODULE_11__.string().required(src_lib_utils_validation__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z.confirmPassword.required).oneOf([
            yup__WEBPACK_IMPORTED_MODULE_11__.ref("changePassword")
        ], src_lib_utils_validation__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z.confirmPassword.doesNotMatch)
    }));
    const formik = (0,formik__WEBPACK_IMPORTED_MODULE_1__.useFormik)({
        initialValues: {
            currentPassword: "",
            changePassword: "",
            confirmPassword: ""
        },
        validationSchema: validationSchema.current,
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit: async (values)=>{
            const { currentPassword, changePassword, confirmPassword } = values;
            try {
                (0,src_components_alert_SweetAlert__WEBPACK_IMPORTED_MODULE_3__/* .AskForSave */ .Y_)("Đổi mật khẩu", "", "Lưu thay đổi", "Huỷ", "", async (value)=>{
                    setIsLoading(true);
                    await src_lib_api_course__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.changePwd(currentPassword, changePassword, confirmPassword);
                    (0,src_components_alert_SweetAlert__WEBPACK_IMPORTED_MODULE_3__/* .AlertTextSuccess */ .DG)("Lưu Th\xe0nh C\xf4ng ", "Mật khẩu đ\xe3 được đổi");
                });
                // AlertTextSuccess('Save Changes Succeeded', 'Password was changed successfully');
                formik.resetForm();
            } catch (error) {
                console.log("error :>> ", error);
                formik.setFieldError("currentPassword", error);
            } finally{
                setIsLoading(false);
                formik.setSubmitting(false);
            }
        }
    });
    const hasError = (key)=>{
        return Object.keys(formik.errors).length > 0 && !!formik.errors[key] && formik.touched[key];
    };
    return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        css: _emotion_react__WEBPACK_IMPORTED_MODULE_12__.css`
        margin-top: 40px;
        > h2 {
          margin-top: 0px;
          margin-bottom: 10px;
          font-family: 'FiraSans', sans-serif;
          font-size: 34px;
          line-height: 36px;
          font-weight: 700;
          @media (max-width: ${src_styles_theme__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.media.tablets}px) {
            font-size: 24px;
          }
        }
        .form-wrapper {
          padding: 0 20px;
          .form-container {
            display: grid;
            margin-top: 40px;
            grid-auto-columns: 1fr;
            grid-column-gap: 20px;
            grid-row-gap: 12px;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
            grid-row-start: span 1;
            grid-row-end: span 1;
            grid-column-start: span 1;
            grid-column-end: span 1;
            align-self: end;
            margin-bottom: 10px;
            position: relative;
            height: 100%;
            /* .form-item-error {
                position: absolute;
              } */
            @media (max-width: ${src_styles_theme__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.media.tablets}px) {
              grid-column-start: span 2;
              grid-column-end: span 2;
            }
          }
          .form-item-full {
            grid-row-start: span 1;
            grid-row-end: span 1;
            grid-column-start: span 2;
            grid-column-end: span 2;
            margin-bottom: 10px;
            position: relative;
            height: 100%;
            /* .form-item-error {
                position: absolute;
              } */
          }
          .form-item-button {
            grid-row-start: span 1;
            grid-row-end: span 1;
            grid-column-start: span 2;
            grid-column-end: span 2;
            justify-self: stretch;
          }
          .ant-btn {
            min-width: 200px;
          }
        }
      `,
        children: [
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                children: "Đổi mật khẩu"
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                className: "form-wrapper",
                onSubmit: formik.handleSubmit,
                children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "form-container",
                    children: [
                        /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "form-item-full",
                            children: [
                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_input__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    showEye: true,
                                    className: "field name-field",
                                    label: "Mật khẩu hiện tại",
                                    name: "currentPassword",
                                    type: "password",
                                    placeholder: "Mật khẩu hiện tại",
                                    handleChange: formik.handleChange,
                                    handleBlur: formik.handleBlur,
                                    value: formik.values.currentPassword,
                                    hasError: hasError("currentPassword"),
                                    disabled: isLoading
                                }),
                                hasError("currentPassword") ? /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_error_message__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    className: "form-item-error",
                                    children: formik.errors.currentPassword
                                }) : null
                            ]
                        }),
                        /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "form-item-half",
                            children: [
                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_input__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    showEye: true,
                                    className: "field name-field",
                                    label: "Mật khẩu mới",
                                    name: "changePassword",
                                    type: "password",
                                    placeholder: "Mật khẩu mới",
                                    handleChange: formik.handleChange,
                                    handleBlur: formik.handleBlur,
                                    value: formik.values.changePassword,
                                    hasError: hasError("changePassword"),
                                    disabled: isLoading
                                }),
                                hasError("changePassword") ? /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_error_message__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    className: "form-item-error",
                                    children: formik.errors.changePassword
                                }) : null
                            ]
                        }),
                        /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "form-item-half",
                            children: [
                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_input__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    showEye: true,
                                    className: "field name-field",
                                    label: "Nhập lại mật khẩu mới",
                                    name: "confirmPassword",
                                    type: "password",
                                    placeholder: "Nhập lại mật khẩu mới",
                                    handleChange: formik.handleChange,
                                    handleBlur: formik.handleBlur,
                                    value: formik.values.confirmPassword,
                                    hasError: hasError("confirmPassword"),
                                    disabled: isLoading
                                }),
                                hasError("confirmPassword") ? /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_error_message__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    className: "form-item-error",
                                    children: formik.errors.confirmPassword
                                }) : null
                            ]
                        }),
                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "form-item-button",
                            children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                btnTextColor: "white",
                                btnSize: "large",
                                btnStyle: "solid",
                                btnWidth: "fix-content",
                                className: "btn-setting",
                                type: "primary",
                                htmlType: "submit",
                                nonBordered: true,
                                disabled: formik.isSubmitting,
                                children: "Lưu thay đổi"
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChangePasswordForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 43723:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57101);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_components_alert_SweetAlert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20768);
/* harmony import */ var src_components_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59137);
/* harmony import */ var src_components_error_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(58801);
/* harmony import */ var src_components_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45561);
/* harmony import */ var src_lib_api_course__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(84626);
/* harmony import */ var src_lib_reducers_app_appSlice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(70805);
/* harmony import */ var src_lib_utils_regularExpression__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(92569);
/* harmony import */ var src_lib_utils_validation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(90768);
/* harmony import */ var src_styles_theme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(11278);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(20271);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(75609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(53139);
/* harmony import */ var src_components_Upload__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(53862);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, src_components_alert_SweetAlert__WEBPACK_IMPORTED_MODULE_4__, src_components_button__WEBPACK_IMPORTED_MODULE_5__, src_components_error_message__WEBPACK_IMPORTED_MODULE_6__, src_components_input__WEBPACK_IMPORTED_MODULE_7__, src_lib_api_course__WEBPACK_IMPORTED_MODULE_8__, src_lib_reducers_app_appSlice__WEBPACK_IMPORTED_MODULE_9__, _emotion_react__WEBPACK_IMPORTED_MODULE_15__, src_components_Upload__WEBPACK_IMPORTED_MODULE_16__]);
([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, src_components_alert_SweetAlert__WEBPACK_IMPORTED_MODULE_4__, src_components_button__WEBPACK_IMPORTED_MODULE_5__, src_components_error_message__WEBPACK_IMPORTED_MODULE_6__, src_components_input__WEBPACK_IMPORTED_MODULE_7__, src_lib_api_course__WEBPACK_IMPORTED_MODULE_8__, src_lib_reducers_app_appSlice__WEBPACK_IMPORTED_MODULE_9__, _emotion_react__WEBPACK_IMPORTED_MODULE_15__, src_components_Upload__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















const dateFormat = "DD/MM/YYYY";
const ContactSettingForm = ()=>{
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const myProfile = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.app.user);
    const validationSchema = react__WEBPACK_IMPORTED_MODULE_2___default().useRef(yup__WEBPACK_IMPORTED_MODULE_14__.object().shape({
        // full_name: Yup.string().required(validation.firstName.required).matches(regex.alphabet, {
        //   message: 'First name cannot accept numeric and special characters.',
        // }),
        full_name: yup__WEBPACK_IMPORTED_MODULE_14__.string().required(src_lib_utils_validation__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.firstName.required),
        email: yup__WEBPACK_IMPORTED_MODULE_14__.string().required(src_lib_utils_validation__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.email.required),
        phone: yup__WEBPACK_IMPORTED_MODULE_14__.string().notRequired().matches(src_lib_utils_regularExpression__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.phoneNumberVN, {
            message: src_lib_utils_validation__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.phone.invalid
        })
    }));
    const formik = (0,formik__WEBPACK_IMPORTED_MODULE_1__.useFormik)({
        initialValues: {
            ...myProfile,
            phone: myProfile.phone || ""
        },
        validationSchema: validationSchema.current,
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit: async (values)=>{
            const { full_name, email, phone, avatar } = values;
            const obj = {
                full_name: full_name,
                email: email,
                phone: phone,
                avatar: avatar
            };
            (0,src_components_alert_SweetAlert__WEBPACK_IMPORTED_MODULE_4__/* .AskForSave */ .Y_)("Lưu Thay Đổi", "", "Lưu", "Huỷ", "", async (result)=>{
                if (result.isConfirmed) {
                    try {
                        const newInfo = await src_lib_api_course__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.updateInfo(phone, full_name, avatar);
                        dispatch(src_lib_reducers_app_appSlice__WEBPACK_IMPORTED_MODULE_9__/* .appActions */ .xZ.setMyProfile(newInfo));
                        sweetalert2__WEBPACK_IMPORTED_MODULE_13___default().fire("Đ\xe3 lưu thay đổi!", "", "success");
                    } catch (error) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_13___default().fire("Đ\xe3 c\xf3 lỗi xảy ra!", "Xin thử lại sau", "error");
                    }
                } else if (result.isDismissed) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_13___default().fire("Thay đổi kh\xf4ng được lưu!", "", "info");
                }
            });
        }
    });
    const hasError = (key)=>{
        return Object.keys(formik.errors).length > 0 && !!formik.errors[key] && formik.touched[key];
    };
    return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        css: _emotion_react__WEBPACK_IMPORTED_MODULE_15__.css`
        display: flex;
        flex-direction: column;
        gap: 10px;
        > h2 {
          margin-top: 0px;
          margin-bottom: 10px;
          font-family: 'FiraSans', sans-serif;
          font-size: 34px;
          line-height: 36px;
          font-weight: 700;
          @media (max-width: ${src_styles_theme__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z.media.tablets}px) {
            font-size: 24px;
          }
        }
        .form-container {
          padding: 0 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .form-item-button {
          margin-top: 10px;
        }
        .ant-picker {
          min-height: 48px;
          width: 100%;
        }
        .s-label {
          display: block;
          margin-bottom: 5px;
          font-weight: 700;
        }
        [ant-click-animating-without-extra-node='true']:after {
          display: none;
        }
        .ant-btn {
          min-width: 200px;
        }
      `,
        onSubmit: formik.handleSubmit,
        children: [
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                children: "Th\xf4ng tin c\xe1 nh\xe2n"
            }),
            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "form-container",
                children: [
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_Upload__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                        avatar: myProfile.avatar,
                        setAvatar: (avatar)=>formik.setFieldValue("avatar", avatar.image_short_path)
                    }),
                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "form-item-full",
                        children: [
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_input__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                className: "field name-field",
                                label: "Email",
                                name: "email",
                                type: "email",
                                placeholder: "Email của bạn",
                                handleChange: formik.handleChange,
                                handleBlur: formik.handleBlur,
                                value: formik.values.email,
                                hasError: hasError("email"),
                                readOnly: true,
                                disabled: true
                            }),
                            hasError("email") ? /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_error_message__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                className: "form-item-error",
                                children: formik.errors.email
                            }) : null
                        ]
                    }),
                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "form-item-half",
                        children: [
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_input__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                className: "field name-field",
                                label: "Họ v\xe0 T\xean",
                                name: "full_name",
                                type: "text",
                                placeholder: "Nhập t\xean của bạn",
                                handleChange: formik.handleChange,
                                handleBlur: formik.handleBlur,
                                value: formik.values.full_name,
                                hasError: hasError("full_name")
                            }),
                            hasError("full_name") ? /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_error_message__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                className: "form-item-error",
                                children: formik.errors.full_name
                            }) : null
                        ]
                    }),
                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "form-item-half",
                        children: [
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_input__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                className: "field name-field",
                                label: "Số điện thoại",
                                name: "phone",
                                type: "text",
                                placeholder: "Số điện thoại",
                                handleChange: formik.handleChange,
                                handleBlur: formik.handleBlur,
                                value: formik.values.phone,
                                hasError: hasError("phone"),
                                disabled: isLoading
                            }),
                            hasError("phone") ? /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_error_message__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                className: "form-item-error",
                                children: formik.errors.phone
                            }) : null
                        ]
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "form-item-button",
                        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            btnTextColor: "white",
                            btnSize: "large",
                            btnStyle: "solid",
                            btnWidth: "fix-content",
                            className: "btn-setting",
                            type: "primary",
                            htmlType: "submit",
                            nonBordered: true,
                            bgColor: "",
                            children: "Lưu thay đổi"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactSettingForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 74533:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57101);
/* harmony import */ var _ChangePasswordForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46609);
/* harmony import */ var _ContactInfoForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43723);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, _ChangePasswordForm__WEBPACK_IMPORTED_MODULE_1__, _ContactInfoForm__WEBPACK_IMPORTED_MODULE_2__]);
([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, _ChangePasswordForm__WEBPACK_IMPORTED_MODULE_1__, _ContactInfoForm__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const ContactInfo = ()=>{
    return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ContactInfoForm__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ChangePasswordForm__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactInfo);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 21364:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y7: () => (/* binding */ SettingContext),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   gm: () => (/* binding */ TabSettingKey)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57101);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20258);
/* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_fast_compare__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_lib_hooks_useQueryParam__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8443);
/* harmony import */ var src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70351);
/* harmony import */ var src_sections_order__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(77501);
/* harmony import */ var src_sections_Pages_MyLearning__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(89532);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(46555);
/* harmony import */ var _ant_design_icons_lib_icons_SettingOutlined__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(63221);
/* harmony import */ var _ant_design_icons_lib_icons_SettingOutlined__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_SettingOutlined__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(55598);
/* harmony import */ var _ContactInfo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(74533);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, src_lib_hooks_useQueryParam__WEBPACK_IMPORTED_MODULE_4__, src_sections_order__WEBPACK_IMPORTED_MODULE_6__, src_sections_Pages_MyLearning__WEBPACK_IMPORTED_MODULE_7__, uuid__WEBPACK_IMPORTED_MODULE_8__, ___WEBPACK_IMPORTED_MODULE_10__, _ContactInfo__WEBPACK_IMPORTED_MODULE_11__]);
([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, src_lib_hooks_useQueryParam__WEBPACK_IMPORTED_MODULE_4__, src_sections_order__WEBPACK_IMPORTED_MODULE_6__, src_sections_Pages_MyLearning__WEBPACK_IMPORTED_MODULE_7__, uuid__WEBPACK_IMPORTED_MODULE_8__, ___WEBPACK_IMPORTED_MODULE_10__, _ContactInfo__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









/* eslint-disable react/display-name */ 


var TabSettingKey;
(function(TabSettingKey) {
    TabSettingKey["INFORMATION"] = "INFORMATION";
    TabSettingKey["ORDER"] = "ORDER";
    TabSettingKey["LOGOUT"] = "LOGOUT";
    TabSettingKey["MY_LEARNING"] = "MY_LEARNING";
})(TabSettingKey || (TabSettingKey = {}));
const SettingContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createContext({});
const SettingTabs = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().memo(// eslint-disable-next-line react/prop-types
({ className })=>{
    const tabDataSetting = [
        {
            id: (0,uuid__WEBPACK_IMPORTED_MODULE_8__.v4)(),
            label: "Hồ sơ c\xe1 nh\xe2n",
            icon: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_SettingOutlined__WEBPACK_IMPORTED_MODULE_9___default()), {}),
            content: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ContactInfo__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {}),
            key: TabSettingKey.INFORMATION
        },
        {
            id: (0,uuid__WEBPACK_IMPORTED_MODULE_8__.v4)(),
            label: "Kho\xe1 học của t\xf4i",
            icon: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_SettingOutlined__WEBPACK_IMPORTED_MODULE_9___default()), {}),
            content: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_sections_Pages_MyLearning__WEBPACK_IMPORTED_MODULE_7__["default"], {}),
            key: TabSettingKey.MY_LEARNING
        },
        {
            id: (0,uuid__WEBPACK_IMPORTED_MODULE_8__.v4)(),
            label: "Đơn h\xe0ng",
            icon: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_SettingOutlined__WEBPACK_IMPORTED_MODULE_9___default()), {}),
            content: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_sections_order__WEBPACK_IMPORTED_MODULE_6__["default"], {}),
            key: TabSettingKey.ORDER
        }
    ];
    const [switchTabs, setSwitchTabs] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(TabSettingKey.INFORMATION);
    const [switchSubTabs, setSwitchSubTabs] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(src_sections_Pages_MyLearning__WEBPACK_IMPORTED_MODULE_7__.LearningTabsKey.MY_COURSES);
    const params = (0,src_lib_hooks_useQueryParam__WEBPACK_IMPORTED_MODULE_4__/* .useQueryParam */ .W)();
    const appContextValue = {
        switchTabs,
        switchSubTabs,
        setSwitchSubTabs: (tabsKey)=>{
            if (tabsKey === TabSettingKey.LOGOUT) return next_router__WEBPACK_IMPORTED_MODULE_1___default().push(`${src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.LOGOUT}`);
            next_router__WEBPACK_IMPORTED_MODULE_1___default().push(`${src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.SETTINGS}/?tab=${params.tab}&subtab=${tabsKey}`);
            setSwitchSubTabs(tabsKey);
        },
        setSwitchTabs: (tabsKey)=>{
            if (tabsKey === TabSettingKey.LOGOUT) return next_router__WEBPACK_IMPORTED_MODULE_1___default().push(`${src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.LOGOUT}`);
            next_router__WEBPACK_IMPORTED_MODULE_1___default().push(`${src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.SETTINGS}/?tab=${tabsKey}`);
            setSwitchTabs(tabsKey);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        params?.tab && setSwitchTabs(params?.tab);
    }, []);
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "",
        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SettingContext.Provider, {
            value: appContextValue,
            children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(___WEBPACK_IMPORTED_MODULE_10__/* .TabPaneSettingsSection */ .G, {
                tabData: tabDataSetting,
                activeKey: switchTabs || TabSettingKey.MY_LEARNING
            })
        })
    });
}, (react_fast_compare__WEBPACK_IMPORTED_MODULE_3___default()));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SettingTabs);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 42387:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57101);
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26216);
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20258);
/* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_fast_compare__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53139);
/* harmony import */ var _settings_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21364);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, _emotion_react__WEBPACK_IMPORTED_MODULE_4__, _settings_tabs__WEBPACK_IMPORTED_MODULE_5__]);
([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, _emotion_react__WEBPACK_IMPORTED_MODULE_4__, _settings_tabs__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable react/display-name */ 





const { TabPane } = (antd_lib_tabs__WEBPACK_IMPORTED_MODULE_1___default());
const TabPaneSection = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().memo((props)=>{
    const { children, className, tabData, title, activeKey, onChangeSwitchTabs } = props;
    const { switchSubTabs, setSwitchSubTabs } = react__WEBPACK_IMPORTED_MODULE_2___default().useContext(_settings_tabs__WEBPACK_IMPORTED_MODULE_5__/* .SettingContext */ .Y7);
    if (!tabData) return null;
    return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: className ?? "",
        css: _emotion_react__WEBPACK_IMPORTED_MODULE_4__.css`
        .flex {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
          .btn-add {
            width: 175px !important;
            background-color: #ffa535 !important;
          }
        }
        .title {
          .title-content {
            font-weight: 700;
            font-family: FiraSans;
            font-size: 32px;
          }
          .title-icon {
            font-size: 32px;
            font-family: 'Fa 300', sans-serif;
          }
        }
        .block {
          padding: 0 !important;
        }
        .ant-tabs {
          font-size: 16px;
          &.ant-tabs-card.ant-tabs-top > .ant-tabs-nav .ant-tabs-tab + .ant-tabs-tab {
            /* margin-left: 4px !important; */
          }
          .ant-tabs-nav {
            border-bottom: 1px solid #051d29;
            width: 100%;
            .ant-tabs-nav {
              /* border-bottom: 1px solid #00aaff; */
              .ant-tabs-nav-list {
                min-width: 200px;
                .ant-tabs-tab {
                  background-color: transparent !important;
                  border: none;
                  padding: 10px 30px;
                  border-radius: 0px;
                  border-top-left-radius: 3px;
                  border-top-right-radius: 3px;
                  display: flex;
                  justify-content: flex-end;
                  :hover {
                    background-color: #666666 !important;
                    .ant-tabs-tab-btn {
                      color: #fff;
                    }
                  }
                  &.ant-tabs-tab-active {
                    background-color: #666666 !important;
                    .ant-tabs-tab-btn {
                      color: #fff;
                    }
                  }
                  .ant-tabs-tab-btn {
                    cursor: pointer;
                    color: #222222;
                    font-size: 16px;
                    font-weight: 700;
                  }
                }
              }
            }
          }
        }
      `,
        children: [
            title && /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex",
                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "title",
                    children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "title-content",
                        children: title
                    })
                })
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_tabs__WEBPACK_IMPORTED_MODULE_1___default()), {
                type: "card",
                onChange: async (tabs)=>{
                    if (onChangeSwitchTabs) {
                        onChangeSwitchTabs(tabs);
                        return;
                    }
                    setSwitchSubTabs && setSwitchSubTabs(tabs);
                },
                activeKey: activeKey,
                children: tabData?.map((v)=>{
                    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TabPane, {
                        tab: v.label,
                        className: v.label === "Pass Orders" ? "past-orders-tab" : "",
                        children: v.content
                    }, v.key);
                })
            }),
            children
        ]
    });
}, (react_fast_compare__WEBPACK_IMPORTED_MODULE_3___default()));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TabPaneSection);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 48019:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GK: () => (/* binding */ antIcon)
/* harmony export */ });
/* unused harmony exports pageAnimation, slideAnimation, galleryAnimation, captionAnimation, cardAnimation */
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57101);
/* harmony import */ var _ant_design_icons_lib_icons_Loading3QuartersOutlined__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58841);
/* harmony import */ var _ant_design_icons_lib_icons_Loading3QuartersOutlined__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_Loading3QuartersOutlined__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__]);
_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const pageAnimation = {
    hide: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            duration: 1
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 1
        }
    }
};
const slideAnimation = {
    enter: (direction)=>{
        return {
            x: direction > 0 ? "100%" : "-100%",
            opacity: 0
        };
    },
    center: {
        x: "0%",
        opacity: 1
    },
    exit: (direction)=>{
        return {
            x: direction < 0 ? "100%" : "-100%",
            opacity: 0
        };
    }
};
const galleryAnimation = {
    hide: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.25,
            ease: "easeOut",
            delayChildren: 1.5
        }
    }
};
const captionAnimation = {
    hide: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            delay: 5.25,
            duration: 2
        }
    }
};
const cardAnimation = {
    hide: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            duration: 0.5
        }
    }
};
const antIcon = /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_Loading3QuartersOutlined__WEBPACK_IMPORTED_MODULE_1___default()), {
    style: {
        fontSize: 40
    },
    spin: true
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 92569:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const regex = {
    password: new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d[\]{};:=<>_+^#$@!%*?&]{8,}$/),
    // phoneNumber: new RegExp(/^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/),
    phoneNumber: new RegExp(/(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/),
    phoneNumberVN: new RegExp(/(84|0[3|5|7|8|9])+([0-9]{8})\b/),
    alphabet: new RegExp(/^[a-zA-Z ]*$/)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (regex);


/***/ }),

/***/ 89532:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LearningTabsKey: () => (/* binding */ LearningTabsKey),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57101);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_components_course_my_course__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45621);
/* harmony import */ var src_components_course_my_course_wish_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21772);
/* harmony import */ var src_components_settings_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21364);
/* harmony import */ var src_components_tab_pane_learning__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42387);
/* harmony import */ var src_lib_api_course__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(84626);
/* harmony import */ var src_lib_hooks_useQueryParam__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8443);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(46555);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(53139);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, src_components_course_my_course__WEBPACK_IMPORTED_MODULE_3__, src_components_course_my_course_wish_list__WEBPACK_IMPORTED_MODULE_4__, src_components_settings_tabs__WEBPACK_IMPORTED_MODULE_5__, src_components_tab_pane_learning__WEBPACK_IMPORTED_MODULE_6__, src_lib_api_course__WEBPACK_IMPORTED_MODULE_7__, src_lib_hooks_useQueryParam__WEBPACK_IMPORTED_MODULE_8__, uuid__WEBPACK_IMPORTED_MODULE_9__, _emotion_react__WEBPACK_IMPORTED_MODULE_10__]);
([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, src_components_course_my_course__WEBPACK_IMPORTED_MODULE_3__, src_components_course_my_course_wish_list__WEBPACK_IMPORTED_MODULE_4__, src_components_settings_tabs__WEBPACK_IMPORTED_MODULE_5__, src_components_tab_pane_learning__WEBPACK_IMPORTED_MODULE_6__, src_lib_api_course__WEBPACK_IMPORTED_MODULE_7__, src_lib_hooks_useQueryParam__WEBPACK_IMPORTED_MODULE_8__, uuid__WEBPACK_IMPORTED_MODULE_9__, _emotion_react__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











var LearningTabsKey;
(function(LearningTabsKey) {
    LearningTabsKey["MY_COURSES"] = "MY_COURSES";
    LearningTabsKey["WISH_LIST"] = "WISH_LIST";
})(LearningTabsKey || (LearningTabsKey = {}));
const MyLearning = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const params = (0,src_lib_hooks_useQueryParam__WEBPACK_IMPORTED_MODULE_8__/* .useQueryParam */ .W)();
    const { switchSubTabs, setSwitchSubTabs } = react__WEBPACK_IMPORTED_MODULE_2___default().useContext(src_components_settings_tabs__WEBPACK_IMPORTED_MODULE_5__/* .SettingContext */ .Y7);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [myCourses, setMyCourses] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const [myDocs, setMyDocs] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const [myFavor, setMyFavor] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        getMyCourse();
    }, []);
    const getMyCourse = async ()=>{
        try {
            setLoading(true);
            const mc = await src_lib_api_course__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getUserCourses({
                page: 1,
                limit: 20
            });
            const mw = await src_lib_api_course__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getFavoriteList();
            const md = await src_lib_api_course__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getUserDocs({
                page: 1,
                limit: 20
            });
            setMyCourses(mc.results);
            setMyDocs(md.results);
            setMyFavor(mw);
        } catch (error) {
            console.log("error.message :>> ", error.message);
        } finally{
            setLoading(false);
        }
    };
    const onChange = (key)=>{
    //console.log(key);
    };
    const tabDataLearning = [
        {
            id: (0,uuid__WEBPACK_IMPORTED_MODULE_9__.v4)(),
            label: "Kho\xe1 học của t\xf4i",
            content: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_course_my_course__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                courses: myCourses || [],
                docs: myDocs || [],
                loading: loading
            }),
            key: LearningTabsKey.MY_COURSES
        },
        {
            id: (0,uuid__WEBPACK_IMPORTED_MODULE_9__.v4)(),
            label: "Danh s\xe1ch th\xedch",
            content: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_course_my_course_wish_list__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                favourite: myFavor || {}
            }),
            key: LearningTabsKey.WISH_LIST
        }
    ];
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "account-tab ",
        css: _emotion_react__WEBPACK_IMPORTED_MODULE_10__.css`
        padding: 20px;
      `,
        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_tab_pane_learning__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            tabData: tabDataLearning,
            title: "Kho\xe1 học của t\xf4i",
            activeKey: switchSubTabs
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyLearning);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
"use strict";
exports.id = 2552;
exports.ids = [2552];
exports.modules = {

/***/ 608:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7101);
/* harmony import */ var antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(373);
/* harmony import */ var antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8518);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2278);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4779);
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_list__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7050);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6216);
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_tag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1886);
/* harmony import */ var antd_lib_tag__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tag__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8168);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var src_lib_api_course__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4626);
/* harmony import */ var src_lib_hooks_useQueryParam__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8443);
/* harmony import */ var src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4317);
/* harmony import */ var src_lib_utils_format__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(455);
/* harmony import */ var src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(351);
/* harmony import */ var _ant_design_icons_lib_icons_CalendarOutlined__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(411);
/* harmony import */ var _ant_design_icons_lib_icons_CalendarOutlined__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_CalendarOutlined__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _ant_design_icons_lib_icons_CheckCircleOutlined__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(3464);
/* harmony import */ var _ant_design_icons_lib_icons_CheckCircleOutlined__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_CheckCircleOutlined__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _ant_design_icons_lib_icons_ClockCircleOutlined__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(7923);
/* harmony import */ var _ant_design_icons_lib_icons_ClockCircleOutlined__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_ClockCircleOutlined__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _ant_design_icons_lib_icons_CloseCircleOutlined__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(2332);
/* harmony import */ var _ant_design_icons_lib_icons_CloseCircleOutlined__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_CloseCircleOutlined__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _ant_design_icons_lib_icons_ExclamationCircleOutlined__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(456);
/* harmony import */ var _ant_design_icons_lib_icons_ExclamationCircleOutlined__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_ExclamationCircleOutlined__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _ant_design_icons_lib_icons_FileSearchOutlined__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(9197);
/* harmony import */ var _ant_design_icons_lib_icons_FileSearchOutlined__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_FileSearchOutlined__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _ant_design_icons_lib_icons_MinusCircleOutlined__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(5734);
/* harmony import */ var _ant_design_icons_lib_icons_MinusCircleOutlined__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_MinusCircleOutlined__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _ant_design_icons_lib_icons_PlusCircleOutlined__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(9145);
/* harmony import */ var _ant_design_icons_lib_icons_PlusCircleOutlined__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_PlusCircleOutlined__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _ant_design_icons_lib_icons_SwapOutlined__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(5212);
/* harmony import */ var _ant_design_icons_lib_icons_SwapOutlined__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_SwapOutlined__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _ant_design_icons_lib_icons_SyncOutlined__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(3453);
/* harmony import */ var _ant_design_icons_lib_icons_SyncOutlined__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_SyncOutlined__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _ant_design_icons_lib_icons_VerticalLeftOutlined__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(3347);
/* harmony import */ var _ant_design_icons_lib_icons_VerticalLeftOutlined__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_VerticalLeftOutlined__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _ant_design_pro_layout__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(9312);
/* harmony import */ var _ant_design_pro_layout__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_ant_design_pro_layout__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(3139);
/* harmony import */ var _comment__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(5172);
/* harmony import */ var _course_progress_lesson_item__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(3795);
/* harmony import */ var src_lib_utils_enum__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(4519);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(9137);
/* harmony import */ var _alert_SweetAlert__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(768);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, src_lib_api_course__WEBPACK_IMPORTED_MODULE_12__, src_lib_hooks_useQueryParam__WEBPACK_IMPORTED_MODULE_13__, _emotion_react__WEBPACK_IMPORTED_MODULE_29__, _comment__WEBPACK_IMPORTED_MODULE_30__, _course_progress_lesson_item__WEBPACK_IMPORTED_MODULE_31__, _button__WEBPACK_IMPORTED_MODULE_33__, _alert_SweetAlert__WEBPACK_IMPORTED_MODULE_34__]);
([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, src_lib_api_course__WEBPACK_IMPORTED_MODULE_12__, src_lib_hooks_useQueryParam__WEBPACK_IMPORTED_MODULE_13__, _emotion_react__WEBPACK_IMPORTED_MODULE_29__, _comment__WEBPACK_IMPORTED_MODULE_30__, _course_progress_lesson_item__WEBPACK_IMPORTED_MODULE_31__, _button__WEBPACK_IMPORTED_MODULE_33__, _alert_SweetAlert__WEBPACK_IMPORTED_MODULE_34__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















/* eslint-disable react/prop-types */ 

















const { Paragraph, Title } = (antd_lib_typography__WEBPACK_IMPORTED_MODULE_8___default());
const separator = /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_SwapOutlined__WEBPACK_IMPORTED_MODULE_25___default()), {});
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
const Content = ({ children, extraContent })=>/*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((antd_lib_row__WEBPACK_IMPORTED_MODULE_5___default()), {
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
const tags = (tagState, text)=>{
    switch(tagState){
        case TagState.SUCCESS:
            return /*#__PURE__*/ _jsx(Tag, {
                icon: /*#__PURE__*/ _jsx(CheckCircleOutlined, {}),
                color: "success",
                children: text
            });
            break;
        case TagState.PROCESSING:
            return /*#__PURE__*/ _jsx(Tag, {
                icon: /*#__PURE__*/ _jsx(SyncOutlined, {
                    spin: true
                }),
                color: "processing",
                children: text
            });
            break;
        case TagState.ERROR:
            return /*#__PURE__*/ _jsx(Tag, {
                icon: /*#__PURE__*/ _jsx(CloseCircleOutlined, {}),
                color: "error",
                children: text
            });
            break;
        case TagState.WARNING:
            return /*#__PURE__*/ _jsx(Tag, {
                icon: /*#__PURE__*/ _jsx(ExclamationCircleOutlined, {}),
                color: "warning",
                children: text
            });
            break;
        case TagState.WAITING:
            return /*#__PURE__*/ _jsx(Tag, {
                icon: /*#__PURE__*/ _jsx(ClockCircleOutlined, {}),
                color: "default",
                children: text
            });
            break;
        case TagState.STOP:
            return /*#__PURE__*/ _jsx(Tag, {
                icon: /*#__PURE__*/ _jsx(MinusCircleOutlined, {}),
                color: "default",
                children: text
            });
            break;
        default:
            break;
    }
};
const CourseDetail = ()=>{
    const params = (0,src_lib_hooks_useQueryParam__WEBPACK_IMPORTED_MODULE_13__/* .useQueryParam */ .W)();
    const [course, setCourse] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)({});
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(false);
    const [comment, setComment] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)([]);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_11__.useDispatch)();
    const [openRatingModal, setOpenRatingModal] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(false);
    const [myRate, setMyRate] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)({});
    const [star, setStar] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(0);
    const [feedback, setFeedback] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)("");
    const listCourse = (0,react_redux__WEBPACK_IMPORTED_MODULE_11__.useSelector)((state)=>state.course.listCourse.results);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
    console.log("router :==>>", router);
    const courseId = router.query?.id?.toString?.() ?? "";
    console.log("courseId :==>>", courseId);
    const isClass = router.pathname.includes(src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z.CLASS);
    const userProfile = (0,react_redux__WEBPACK_IMPORTED_MODULE_11__.useSelector)((state)=>state.app.user);
    const [btnString, setBtnString] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(src_lib_utils_enum__WEBPACK_IMPORTED_MODULE_32__/* .BtnString */ .Im.AVAILABLE);
    const fetchCourseDetail = async (id)=>{
        try {
            if (isClass) {
                const course = await src_lib_api_course__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z.getClassDetail(id);
                setCourse(course);
            } else {
                const course = await src_lib_api_course__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z.getCourseDetail(id);
                setCourse(course);
            }
        } catch (error) {
            (0,_alert_SweetAlert__WEBPACK_IMPORTED_MODULE_34__/* .AlertTextError */ .lQ)("Error", error?.response?.data?.detail, ()=>router.back());
        }
    };
    // const fetchComment = async (id: string) => {
    //   try {
    //     const cmt: Pagination<CourseComment> = await CourseService.listComments(id, 1000, 1);
    //     cmt && setComment(cmt.results);
    //   } catch (error) {
    //     console.log('error get cmt', error);
    //   }
    // };
    (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(()=>{
        fetchCourseDetail(courseId);
    }, []);
    const content = /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "content-wrapper",
        children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "content-detail",
            children: [
                /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Paragraph, {
                    children: [
                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_FileSearchOutlined__WEBPACK_IMPORTED_MODULE_22___default()), {}),
                        course?.description
                    ]
                }),
                /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_CalendarOutlined__WEBPACK_IMPORTED_MODULE_17___default()), {}),
                        `  Ngày cập nhật: ${(0,src_lib_utils_format__WEBPACK_IMPORTED_MODULE_15__/* .formatDate */ .p6)(course?.modified)}`
                    ]
                })
            ]
        })
    });
    const handleUpdateBtn = async ()=>{
        if (course.sale_status !== src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_14__/* .SaleStatusEnum */ .NO.BOUGHT && course.request_status !== src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_14__/* .RequestStatus */ .eE.ACCEPTED) {
            setLoading(true);
            try {
                if (isClass) {
                    const request = await src_lib_api_course__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z.requestJoinClass(courseId);
                    setCourse((prev)=>({
                            ...prev,
                            request_status: request.request_status
                        }));
                } else {
                    let newCourse = {};
                    if (course.sale_status === src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_14__/* .SaleStatusEnum */ .NO.AVAILABLE) {
                        newCourse = await src_lib_api_course__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z.moveCourse(course.id, src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_14__/* .MoveEnum */ .vY.LIST, src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_14__/* .MoveEnum */ .vY.CART);
                    } else if (course.sale_status === src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_14__/* .SaleStatusEnum */ .NO.IN_CART) {
                        newCourse = await src_lib_api_course__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z.moveCourse(course.id, src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_14__/* .MoveEnum */ .vY.CART, src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_14__/* .MoveEnum */ .vY.LIST);
                    }
                    setCourse(newCourse);
                }
            } catch (error) {
                console.log("error", error);
                setLoading(false);
            } finally{
                setLoading(false);
            }
        } else {
            router.push(`${src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z.COURSE_PROGRESS}?id=${course.id}&isClass=${isClass}`);
        }
    };
    // const onAddComment = async (value) => {
    //   if (!value) return;
    //   try {
    //     const cmt = await CourseService.createComment('', course.id, userProfile.id, value);
    //     cmt && fetchComment(courseId);
    //   } catch (error) {
    //     console.log('error :>> ', error);
    //   }
    // };
    // const handleReply = async (content: string, item: CourseComment) => {
    //   try {
    //     const reply = await CourseService.createComment(item.id, course.id, userProfile.id, content);
    //     reply && fetchComment(courseId);
    //   } catch (error) {
    //     console.log('error :>> ', error);
    //   }
    // };
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
    //     course.rating_detail?.push(rate);
    //   } catch (error) {
    //     //console.log('error', error);
    //   }
    // };
    // const handleSaveRating = () => {
    //   rateCourse(params.id, star, feedback);
    //   setOpenRatingModal(false);
    // };
    (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(()=>{
        if (isClass) {
            if (course.request_status === src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_14__/* .RequestStatus */ .eE.REQUESTED) {
                setBtnString(src_lib_utils_enum__WEBPACK_IMPORTED_MODULE_32__/* .BtnString */ .Im.REQUESTED);
            } else if (course.request_status === src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_14__/* .RequestStatus */ .eE.AVAILABLE) {
                setBtnString(src_lib_utils_enum__WEBPACK_IMPORTED_MODULE_32__/* .BtnString */ .Im.AVAILABLE_REQUEST);
            } else if (course.request_status === src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_14__/* .RequestStatus */ .eE.ACCEPTED) {
                setBtnString(src_lib_utils_enum__WEBPACK_IMPORTED_MODULE_32__/* .BtnString */ .Im.BOUGHT);
            }
        } else {
            if (course.sale_status === src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_14__/* .SaleStatusEnum */ .NO.AVAILABLE) {
                setBtnString(src_lib_utils_enum__WEBPACK_IMPORTED_MODULE_32__/* .BtnString */ .Im.AVAILABLE);
            } else if (course.sale_status === src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_14__/* .SaleStatusEnum */ .NO.IN_CART) {
                setBtnString(src_lib_utils_enum__WEBPACK_IMPORTED_MODULE_32__/* .BtnString */ .Im.IN_CART);
            } else if (course.sale_status === src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_14__/* .SaleStatusEnum */ .NO.PENDING) {
                setBtnString(src_lib_utils_enum__WEBPACK_IMPORTED_MODULE_32__/* .BtnString */ .Im.PENDING);
            } else if (course.sale_status === src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_14__/* .SaleStatusEnum */ .NO.BOUGHT) {
                setBtnString(src_lib_utils_enum__WEBPACK_IMPORTED_MODULE_32__/* .BtnString */ .Im.BOUGHT);
            }
        }
    }, [
        course
    ]);
    const items = [
        {
            label: "B\xecnh luận",
            key: "comment",
            children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_comment__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, {})
        }
    ];
    return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "page-container",
        css: _emotion_react__WEBPACK_IMPORTED_MODULE_29__.css`
        // max-width: 70%;
        text-align: left;
        .ant-breadcrumb {
          font-size: 20px;
          font-weight: 600;
        }

        .ant-btn-primary,
        .class-btn {
          width: 180px;
          height: 45px !important;
          border-radius: 2px;
          background-color: ${course.sale_status === src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_14__/* .SaleStatusEnum */ .NO.AVAILABLE || course.request_status === src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_14__/* .RequestStatus */ .eE.AVAILABLE ? "#17a2b8" : ""} !important;
          background-color: ${course.sale_status === src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_14__/* .SaleStatusEnum */ .NO.IN_CART || course.request_status === src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_14__/* .RequestStatus */ .eE.REQUESTED ? "#ed5e68" : ""}!important;
          background-color: ${course.sale_status === src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_14__/* .SaleStatusEnum */ .NO.PENDING ? "#6c757d" : ""} !important;
          background-color: ${course.sale_status === src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_14__/* .SaleStatusEnum */ .NO.BOUGHT || course.request_status === src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_14__/* .RequestStatus */ .eE.ACCEPTED ? "#28a745" : ""} !important;
          color: #000 !important;
          font-weight: 700;
          letter-spacing: 3px;
          letter-spacing: ${isClass ? "0px" : "3px"};

          border-radius: 4px;
          &:hover {
            letter-spacing: ${isClass ? "1px" : "6px"};
            /* background-color: ${course.sale_status === src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_14__/* .SaleStatusEnum */ .NO.AVAILABLE || course.request_status === src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_14__/* .RequestStatus */ .eE.AVAILABLE ? "#17a2b8" : ""};
            background-color: ${course.sale_status === src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_14__/* .SaleStatusEnum */ .NO.IN_CART || course.request_status === src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_14__/* .RequestStatus */ .eE.REQUESTED ? "#ed5e68" : ""};
            background-color: ${course.sale_status === src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_14__/* .SaleStatusEnum */ .NO.PENDING && "#6c757d"};
            background-color: ${course.sale_status === src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_14__/* .SaleStatusEnum */ .NO.BOUGHT || course.request_status === src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_14__/* .RequestStatus */ .eE.ACCEPTED && "#28a745"}; */
          }

          .anticon-loading {
            font-size: 18px;
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
        a.ant-btn {
          padding-top: 8px !important;
        }
        .ant-page-header {
        }
        .course_info {
          height: 450px;
          margin: 10px 0;
          .ant-image {
            height: 450px;
            width: 100%;
            .thumbnail {
              height: 100%;
              border-radius: 10px;
            }
          }
          .lessons {
            max-height: 100%;
            overflow: auto;
          }
        }
        .list_lesson_header {
          text-align: center;
          font-size: 14px;
          font-weight: 550;
        }
        .list_lesson {
          padding: 0 15px;
        }
        @media (max-width: 992px) {
          .thumbnail_wrapper {
            display: none;
          }
        }
        // .comment-list {
        // 	max-height: 40vh;
        // 	overflow: auto;
        // }
        .ant-tooltip-content {
          min-width: 280px;
        }
        .add-btn {
          display: flex;
          align-items: center;
          justify-content: space-evenly;
        }
      `,
        children: [
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_divider__WEBPACK_IMPORTED_MODULE_3___default()), {
                orientation: "left",
                children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_1___default()), {
                    separator: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_SwapOutlined__WEBPACK_IMPORTED_MODULE_25___default()), {}),
                    children: [
                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_1___default().Item), {
                            href: src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z.HOME,
                            children: "Trang ch\xednh"
                        }),
                        isClass ? /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_1___default().Item), {
                            href: `${src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z.CLASS}?class=ALL`,
                            children: "Lớp học"
                        }) : /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_1___default().Item), {
                            href: `${src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z.COURSE}?course=ALL`,
                            children: "Kho\xe1 học"
                        }),
                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_1___default().Item), {
                            children: course?.topic?.name
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_ant_design_pro_layout__WEBPACK_IMPORTED_MODULE_28__.PageHeader, {
                title: course?.name,
                className: "site-page-header",
                avatar: {
                    src: `${course.thumbnail?.image_path}`,
                    shape: "square"
                },
                extra: [
                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_button__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .Z, {
                        className: "class-btn card-btn",
                        btnTextColor: "white",
                        btnStyle: "outline",
                        btnSize: "small",
                        btnWidth: "full-w",
                        loading: loading,
                        onClick: handleUpdateBtn,
                        children: [
                            btnString,
                            course.sale_status === src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_14__/* .SaleStatusEnum */ .NO.AVAILABLE ? /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_PlusCircleOutlined__WEBPACK_IMPORTED_MODULE_24___default()), {}) : course.sale_status === src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_14__/* .SaleStatusEnum */ .NO.IN_CART ? /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_MinusCircleOutlined__WEBPACK_IMPORTED_MODULE_23___default()), {}) : course.sale_status === src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_14__/* .SaleStatusEnum */ .NO.BOUGHT ? /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_VerticalLeftOutlined__WEBPACK_IMPORTED_MODULE_27___default()), {}) : ""
                        ]
                    }, 2)
                ],
                children: [
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Content, {
                        extraContent: undefined,
                        children: content
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_row__WEBPACK_IMPORTED_MODULE_5___default()), {
                        className: "course_info",
                        children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default()), {
                            lg: 24,
                            md: 24,
                            className: "lessons",
                            children: [
                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "list_lesson_header",
                                    children: "C\xe1c b\xe0i học trong kho\xe1"
                                }),
                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_list__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    className: "list_lesson",
                                    itemLayout: "horizontal",
                                    dataSource: course?.lessons,
                                    renderItem: (item, index)=>/*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_course_progress_lesson_item__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z, {
                                            lesson: item,
                                            isCourseDetail: true,
                                            index: index,
                                            isShowLessonDetail: course.sale_status === src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_14__/* .SaleStatusEnum */ .NO.BOUGHT || !!course.request_status
                                        })
                                })
                            ]
                        })
                    })
                ]
            }),
            (course.request_status === src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_14__/* .RequestStatus */ .eE.ACCEPTED || course.sale_status === src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_14__/* .SaleStatusEnum */ .NO.BOUGHT) && /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_tabs__WEBPACK_IMPORTED_MODULE_6___default()), {
                items: items,
                className: "tab-section"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CourseDetail); // {
 // 	actions: [<span key="comment-list-reply-to-0">Reply to</span>],
 // 	author: 'Han Solo',
 // 	avatar: 'https://joeschmoe.io/api/v1/random',
 // 	content: (
 // 		<p>
 // 			We supply a series of design principles, practical patterns and high
 // 			quality design resources (Sketch and Axure), to help people create their
 // 			product prototypes beautifully and efficiently.
 // 		</p>
 // 	),
 // 	datetime: (
 // 		<Tooltip title="2016-11-22 11:22:33">
 // 			<span>8 hours ago</span>
 // 		</Tooltip>
 // 	),
 // },

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2552:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7101);
/* harmony import */ var src_components_course_course_detail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(608);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, src_components_course_course_detail__WEBPACK_IMPORTED_MODULE_1__]);
([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, src_components_course_course_detail__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const CourseDetailUI = ()=>{
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_course_course_detail__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CourseDetailUI);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
"use strict";
exports.id = 443;
exports.ids = [443];
exports.modules = {

/***/ 2908:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ HomeData)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7101);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2317);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8518);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(261);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_lib_api_course__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4626);
/* harmony import */ var src_lib_utils_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4519);
/* harmony import */ var _ant_design_icons_lib_icons_Loading3QuartersOutlined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8841);
/* harmony import */ var _ant_design_icons_lib_icons_Loading3QuartersOutlined__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_Loading3QuartersOutlined__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ant_design_icons_lib_icons_UnorderedListOutlined__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6612);
/* harmony import */ var _ant_design_icons_lib_icons_UnorderedListOutlined__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_UnorderedListOutlined__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3139);
/* harmony import */ var _course_course_item__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2864);
/* harmony import */ var _document_doc_item__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7617);
/* harmony import */ var _document_style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1591);
/* harmony import */ var _homeTopicCard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7595);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, src_lib_api_course__WEBPACK_IMPORTED_MODULE_5__, _emotion_react__WEBPACK_IMPORTED_MODULE_9__, _course_course_item__WEBPACK_IMPORTED_MODULE_10__, _document_doc_item__WEBPACK_IMPORTED_MODULE_11__, _document_style__WEBPACK_IMPORTED_MODULE_12__, _homeTopicCard__WEBPACK_IMPORTED_MODULE_13__]);
([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, src_lib_api_course__WEBPACK_IMPORTED_MODULE_5__, _emotion_react__WEBPACK_IMPORTED_MODULE_9__, _course_course_item__WEBPACK_IMPORTED_MODULE_10__, _document_doc_item__WEBPACK_IMPORTED_MODULE_11__, _document_style__WEBPACK_IMPORTED_MODULE_12__, _homeTopicCard__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const antIcon = /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_Loading3QuartersOutlined__WEBPACK_IMPORTED_MODULE_7___default()), {
    style: {
        fontSize: 40
    },
    spin: true
});
function HomeData(props) {
    const { homeData } = props;
    const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_4__.useState(false);
    const [listDoc, setListDoc] = react__WEBPACK_IMPORTED_MODULE_4__.useState();
    const [listCourse, setListCourse] = react__WEBPACK_IMPORTED_MODULE_4__.useState();
    const [listClass, setListClass] = react__WEBPACK_IMPORTED_MODULE_4__.useState();
    const [listPost, setListPost] = react__WEBPACK_IMPORTED_MODULE_4__.useState();
    const getDocumentList = async (idList)=>{
        const token = localStorage.getItem(src_lib_utils_enum__WEBPACK_IMPORTED_MODULE_6__/* .StorageKeys */ .BU.SESSION_KEY);
        try {
            setLoading(true);
            if (!token) {
                const docs = await src_lib_api_course__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.getHomeDocs({
                    page: 1,
                    limit: 100
                }, "", idList);
                setListDoc(docs);
            } else {
                const docs = await src_lib_api_course__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.getAllDocs({
                    page: 1,
                    limit: 100
                }, "", idList);
                setListDoc(docs);
            }
        } catch (error) {
            console.log("error", error);
        } finally{
            setLoading(false);
        }
    };
    const getCourseList = async (idList)=>{
        const token = localStorage.getItem(src_lib_utils_enum__WEBPACK_IMPORTED_MODULE_6__/* .StorageKeys */ .BU.SESSION_KEY);
        try {
            setLoading(true);
            if (!token) {
                const docs = await src_lib_api_course__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.getHomeCourses({
                    page: 1,
                    limit: 100
                }, "", idList);
                setListCourse(docs);
            } else {
                const docs = await src_lib_api_course__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.getAllCourses({
                    page: 1,
                    limit: 100
                }, "", idList);
                setListCourse(docs);
            }
        } catch (error) {
            console.log("error", error);
        } finally{
            setLoading(false);
        }
    };
    const getHomeData = async (listId, type)=>{
        const token = localStorage.getItem(src_lib_utils_enum__WEBPACK_IMPORTED_MODULE_6__/* .StorageKeys */ .BU.SESSION_KEY);
        try {
            setLoading(true);
            switch(type){
                case "doc":
                    if (!token) {
                        const fetchedData = await src_lib_api_course__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.getHomeDocs({
                            page: 1,
                            limit: 100
                        }, "", listId);
                        setListDoc(fetchedData);
                    } else {
                        const fetchedData = await src_lib_api_course__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.getAllDocs({
                            page: 1,
                            limit: 100
                        }, "", listId);
                        setListDoc(fetchedData);
                    }
                    break;
                case "course":
                    if (!token) {
                        const fetchedData = await src_lib_api_course__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.getHomeCourses({
                            page: 1,
                            limit: 100
                        }, "", listId);
                        setListCourse(fetchedData);
                    } else {
                        const fetchedData = await src_lib_api_course__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.getAllCourses({
                            page: 1,
                            limit: 100
                        }, "", listId);
                        setListCourse(fetchedData);
                    }
                    break;
                case "class":
                    if (!token) {
                        const fetchedData = await src_lib_api_course__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.getHomeClasses(100, 1, "", listId);
                        setListClass(fetchedData);
                    } else {
                        const fetchedData = await src_lib_api_course__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.listClasses(100, 1, "", listId);
                        setListClass(fetchedData);
                    }
                    break;
                case "post":
                    const fetchedData = await src_lib_api_course__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.listPosts(100, 1, "", "", listId);
                    setListPost(fetchedData);
                    break;
                default:
                    console.log(`new type`);
            }
        } catch (error) {
            console.log("error", error);
        } finally{
            setLoading(false);
        }
    };
    react__WEBPACK_IMPORTED_MODULE_4__.useEffect(()=>{
        homeData?.detail?.document_id && getHomeData(homeData?.detail?.document_id, "doc");
        homeData?.detail?.course_id && getHomeData(homeData?.detail?.course_id, "course");
        homeData?.detail?.class_id && getHomeData(homeData?.detail?.class_id, "class");
        homeData?.detail?.post_id && getHomeData(homeData?.detail?.post_id, "post");
    }, [
        homeData
    ]);
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        css: _emotion_react__WEBPACK_IMPORTED_MODULE_9__.css`
        margin-bottom: 10px;
        .title {
          font-size: 14px;
          font-weight: 700;
          text-decoration: underline;
        }
        .ant-card-head-title {
          font-weight: 700;
        }
      `,
        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default()), {
            title: homeData.topic,
            extra: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                href: "#",
                children: [
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_UnorderedListOutlined__WEBPACK_IMPORTED_MODULE_8___default()), {}),
                    "Xem tất cả",
                    process.env.ECOURSE_API_URL
                ]
            }),
            children: loading ? /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    height: "72px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                },
                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_spin__WEBPACK_IMPORTED_MODULE_3___default()), {
                    indicator: antIcon
                })
            }) : /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_document_style__WEBPACK_IMPORTED_MODULE_12__/* .DocCourseWrapper */ .go, {
                    children: [
                        listDoc?.results?.length ? (listDoc?.results?.map((e, i)=>{
                            return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default()), {
                                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_document_doc_item__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                    document: e
                                })
                            }, i);
                        })) : /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}),
                        listCourse?.results?.length ? (listCourse?.results?.map((e, i)=>{
                            return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default()), {
                                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_course_course_item__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                    course: e
                                })
                            }, i);
                        })) : /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}),
                        listClass?.results?.length ? (listClass?.results?.map((e, i)=>{
                            return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default()), {
                                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_course_course_item__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                    course: e
                                })
                            }, i);
                        })) : /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}),
                        listPost?.results?.length ? (listPost?.results?.map((e, i)=>{
                            return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default()), {
                                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_homeTopicCard__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                    post: e
                                })
                            }, i);
                        })) : /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
                    ]
                })
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 443:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7101);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8518);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7050);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_components_home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2908);
/* harmony import */ var src_components_home_homeSide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9841);
/* harmony import */ var src_lib_api_course__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4626);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, src_components_home__WEBPACK_IMPORTED_MODULE_4__, src_components_home_homeSide__WEBPACK_IMPORTED_MODULE_5__, src_lib_api_course__WEBPACK_IMPORTED_MODULE_6__]);
([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, src_components_home__WEBPACK_IMPORTED_MODULE_4__, src_components_home_homeSide__WEBPACK_IMPORTED_MODULE_5__, src_lib_api_course__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable prettier/prettier */ 






var HomeActionKind;
(function(HomeActionKind) {
    HomeActionKind["LIST_DOC"] = "LIST_DOC";
    HomeActionKind["LIST_COURSE"] = "LIST_COURSE";
    HomeActionKind["UPDATE_DOC"] = "UPDATE_DOC";
    HomeActionKind["UPDATE_COURSE"] = "UPDATE_COURSE";
})(HomeActionKind || (HomeActionKind = {}));
const HomeUI = ()=>{
    const [homeData, setHomeData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    const fetchHomeData = async ()=>{
        try {
            const homes = await src_lib_api_course__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.getHome();
            setHomeData(homes);
        } catch (error) {
            console.log("error", error);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        fetchHomeData();
    }, []);
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "page-container",
        children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default()), {
            gutter: 16,
            style: {
                maxWidth: "100%"
            },
            children: [
                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default()), {
                    span: 18,
                    children: homeData?.map((v, i)=>{
                        return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_home__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            homeData: v
                        }, i);
                    })
                }),
                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default()), {
                    span: 6,
                    children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_home_homeSide__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                })
            ]
        })
    });
};
const HomeSection = ()=>{
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HomeUI, {});
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeSection);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
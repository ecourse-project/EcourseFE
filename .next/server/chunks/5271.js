"use strict";
exports.id = 5271;
exports.ids = [5271];
exports.modules = {

/***/ 85271:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57101);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89699);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_components_loading_loadingBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(31178);
/* harmony import */ var src_lib_api_course__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(84626);
/* harmony import */ var src_lib_api_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(66455);
/* harmony import */ var src_lib_reducers_app_appSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(70805);
/* harmony import */ var src_lib_utils_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(24519);
/* harmony import */ var src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(70351);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, src_components_loading_loadingBase__WEBPACK_IMPORTED_MODULE_5__, src_lib_api_course__WEBPACK_IMPORTED_MODULE_6__, src_lib_api_user__WEBPACK_IMPORTED_MODULE_7__, src_lib_reducers_app_appSlice__WEBPACK_IMPORTED_MODULE_8__]);
([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, src_components_loading_loadingBase__WEBPACK_IMPORTED_MODULE_5__, src_lib_api_course__WEBPACK_IMPORTED_MODULE_6__, src_lib_api_user__WEBPACK_IMPORTED_MODULE_7__, src_lib_reducers_app_appSlice__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const PublicProvider = ({ children })=>{
    const header = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.app.header);
    const myProfile = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.app.user);
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
    const getUserProfile = async ()=>{
        const token = localStorage.getItem(src_lib_utils_enum__WEBPACK_IMPORTED_MODULE_9__/* .StorageKeys */ .BU.SESSION_KEY);
        try {
            if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()(header)) {
                const header = await src_lib_api_course__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.listHeaders();
                dispatch(src_lib_reducers_app_appSlice__WEBPACK_IMPORTED_MODULE_8__/* .appActions */ .xZ.setAppHeader(header));
            }
            if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()(myProfile) && token) {
                const profile = await src_lib_api_user__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.myInfo();
                dispatch(src_lib_reducers_app_appSlice__WEBPACK_IMPORTED_MODULE_8__/* .appActions */ .xZ.setMyProfile(profile));
            }
        } catch (error) {
            setIsLoading(false);
        } finally{
            setIsLoading(false);
        }
    };
    const checkDenyAccess = ()=>{
        const token = localStorage.getItem(src_lib_utils_enum__WEBPACK_IMPORTED_MODULE_9__/* .StorageKeys */ .BU.SESSION_KEY);
        const pathname = window.location.pathname;
        if ((pathname.includes(src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.REGISTER) || pathname.includes(src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.LOGIN)) && token) {
            router.push(src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.DASHBOARD);
        }
    };
    react__WEBPACK_IMPORTED_MODULE_3___default().useEffect(()=>{
        getUserProfile();
        setTimeout(()=>setIsLoading(false), 1000);
    }, []);
    // React.useEffect(() => {
    //   const handleStart = () => setIsLoading(true);
    //   const handleComplete = () => setIsLoading(false);
    //   router.events.on('routeChangeStart', handleStart);
    //   router.events.on('routeChangeComplete', handleComplete);
    //   router.events.on('routeChangeError', handleComplete);
    //   return () => {
    //     router.events.off('routeChangeStart', handleStart);
    //     router.events.off('routeChangeComplete', handleComplete);
    //     router.events.off('routeChangeError', handleComplete);
    //   };
    // }, []);
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {
        children: !isLoading ? children : /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_loading_loadingBase__WEBPACK_IMPORTED_MODULE_5__/* .LoadingPage */ .h2, {
            isLoading: true
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PublicProvider);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
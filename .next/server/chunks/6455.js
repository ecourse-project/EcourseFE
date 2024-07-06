"use strict";
exports.id = 6455;
exports.ids = [6455];
exports.modules = {

/***/ 66455:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var src_lib_config_apiClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61980);
/* harmony import */ var _course__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84626);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_lib_config_apiClient__WEBPACK_IMPORTED_MODULE_0__, _course__WEBPACK_IMPORTED_MODULE_1__]);
([src_lib_config_apiClient__WEBPACK_IMPORTED_MODULE_0__, _course__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


class UserService {
    // static getMyProfile(): Promise<any> {
    // 	return apiClient.get(apiURL.me());
    // }
    // static register(params: IRegistration): Promise<ORegistration> {
    // 	return apiClient.post(apiURL.register(), {
    // 		...params,
    // 	});
    // }
    // static existsEmail(email: string): Promise<OIsExist> {
    // 	return apiClient.get(apiURL.existEmail(email));
    // }
    static myInfo() {
        return src_lib_config_apiClient__WEBPACK_IMPORTED_MODULE_0__/* .apiClient */ .x.get(_course__WEBPACK_IMPORTED_MODULE_1__/* .apiURL */ .Q.me());
    }
    static register(email, password1, password2, full_name) {
        return src_lib_config_apiClient__WEBPACK_IMPORTED_MODULE_0__/* .apiClient */ .x.post(_course__WEBPACK_IMPORTED_MODULE_1__/* .apiURL */ .Q.register(), {
            email: email,
            password1: password1,
            password2: password2,
            full_name: full_name
        });
    }
    static existEmail(email) {
        return src_lib_config_apiClient__WEBPACK_IMPORTED_MODULE_0__/* .apiClient */ .x.get(_course__WEBPACK_IMPORTED_MODULE_1__/* .apiURL */ .Q.existEmail(email));
    }
    static resetPwd(email) {
        return src_lib_config_apiClient__WEBPACK_IMPORTED_MODULE_0__/* .apiClient */ .x.post(_course__WEBPACK_IMPORTED_MODULE_1__/* .apiURL */ .Q.resetPwd(), {
            email: email
        });
    }
    static changePwd(old_password, password1, password2) {
        return src_lib_config_apiClient__WEBPACK_IMPORTED_MODULE_0__/* .apiClient */ .x.post(_course__WEBPACK_IMPORTED_MODULE_1__/* .apiURL */ .Q.changePwd(), {
            old_password: old_password,
            password1: password1,
            password2: password2
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserService);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
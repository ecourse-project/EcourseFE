"use strict";
exports.id = 2091;
exports.ids = [2091];
exports.modules = {

/***/ 30945:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57101);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_components_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59137);
/* harmony import */ var src_lib_hooks_useQueryParam__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8443);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(53139);
/* harmony import */ var _CreateNewPasswordForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(37670);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, src_components_button__WEBPACK_IMPORTED_MODULE_3__, src_lib_hooks_useQueryParam__WEBPACK_IMPORTED_MODULE_4__, _emotion_react__WEBPACK_IMPORTED_MODULE_5__, _CreateNewPasswordForm__WEBPACK_IMPORTED_MODULE_6__]);
([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, src_components_button__WEBPACK_IMPORTED_MODULE_3__, src_lib_hooks_useQueryParam__WEBPACK_IMPORTED_MODULE_4__, _emotion_react__WEBPACK_IMPORTED_MODULE_5__, _CreateNewPasswordForm__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const CreateNewPassword = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const [isRequestSent, setStateRequest] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { uid, token } = (0,src_lib_hooks_useQueryParam__WEBPACK_IMPORTED_MODULE_4__/* .useQueryParam */ .W)();
    // React.useEffect(() => {
    //   if (!token || !uid) {
    //     router.push(RoutePaths.LOGIN);
    //   }
    // }, []);
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        css: _emotion_react__WEBPACK_IMPORTED_MODULE_5__.css`
        min-height: 100vh;
        padding-top: 30px;
        padding-bottom: 0px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #e7edf3;
        width: 100%;
        padding: 30px 20px 30px;
        .wrapper {
          max-width: 522px;
          width: 100%;
          font-weight: 300;
          position: relative;
          .container {
            padding: 50px 35px;
            border-radius: 20px;
            background-color: #051d29;
            background-image: none;
            backdrop-filter: blur(14px);
            color: #fff;
            > h2 {
              font-family: FiraSans;
              color: #fff;
              text-align: center;
              margin-bottom: 20px;
              font-size: 30px;
              font-weight: 700;
            }
            > p {
              font-size: 17px;
              color: #fff;
              text-align: center;
            }
            .form-wrapper {
              display: grid;
              margin-top: 30px;
              grid-auto-columns: 1fr;
              grid-column-gap: 40px;
              grid-row-gap: 20px;
              grid-template-columns: 1fr;
              grid-template-rows: auto;
            }
          }
        }
      `,
        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "wrapper",
            children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: "Reset Password"
                    }),
                    !isRequestSent ? /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "Please create a new password."
                            }),
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CreateNewPasswordForm__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                uid: uid,
                                token: token,
                                sentSuccessfully: setStateRequest
                            })
                        ]
                    }) : /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "Your password has been reset successfully!"
                            }),
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                                className: "form-wrapper",
                                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "form-item",
                                    children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        btnTextColor: "black",
                                        btnSize: "large",
                                        btnStyle: "solid",
                                        btnWidth: "full-w",
                                        className: "btn-login",
                                        onClick: ()=>router.push("/login"),
                                        children: "Done"
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateNewPassword);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 37670:
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
/* harmony import */ var src_components_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59137);
/* harmony import */ var src_components_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45561);
/* harmony import */ var src_lib_utils_regularExpression__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92569);
/* harmony import */ var src_lib_utils_validation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90768);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(75609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(53139);
/* harmony import */ var _error_message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(58801);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, src_components_button__WEBPACK_IMPORTED_MODULE_3__, src_components_input__WEBPACK_IMPORTED_MODULE_4__, _emotion_react__WEBPACK_IMPORTED_MODULE_8__, _error_message__WEBPACK_IMPORTED_MODULE_9__]);
([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, src_components_button__WEBPACK_IMPORTED_MODULE_3__, src_components_input__WEBPACK_IMPORTED_MODULE_4__, _emotion_react__WEBPACK_IMPORTED_MODULE_8__, _error_message__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const CreateNewPasswordForm = ({ uid, token, sentSuccessfully })=>{
    const [isLoading, setIsLoading] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false);
    const validationSchema = react__WEBPACK_IMPORTED_MODULE_2___default().useRef(yup__WEBPACK_IMPORTED_MODULE_7__.object().shape({
        password: yup__WEBPACK_IMPORTED_MODULE_7__.string().required(src_lib_utils_validation__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.password.required).matches(src_lib_utils_regularExpression__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.password, {
            message: src_lib_utils_validation__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.password.invalidPwdRegex
        }),
        confirmPassword: yup__WEBPACK_IMPORTED_MODULE_7__.string().required(src_lib_utils_validation__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.password.required).oneOf([
            yup__WEBPACK_IMPORTED_MODULE_7__.ref("password")
        ], src_lib_utils_validation__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.confirmPassword.doesNotMatch)
    }));
    const formik = (0,formik__WEBPACK_IMPORTED_MODULE_1__.useFormik)({
        initialValues: {
            password: "",
            confirmPassword: ""
        },
        validationSchema: validationSchema.current,
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit: (values)=>{
            setIsLoading(true);
        // AuthService.resetPasswordConfirm(values.password, uid, token)
        // 	.then(() => {
        // 		sentSuccessfully(true);
        // 	})
        // 	.catch((error) => {
        // 		formik.setErrors({
        // 			password: error.message,
        // 		});
        // 	})
        // 	.finally(() => {
        // 		setIsLoading(false);
        // 		formik.setSubmitting(false);
        // 	});
        }
    });
    const hasError = (key)=>{
        return Object.keys(formik.errors).length > 0 && !!formik.errors[key] && formik.touched[key];
    };
    return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        css: _emotion_react__WEBPACK_IMPORTED_MODULE_8__.css`
        display: grid;
        margin-top: 30px;
        grid-auto-columns: 1fr;
        grid-column-gap: 40px;
        grid-row-gap: 20px;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
      `,
        className: "form-wrapper",
        onSubmit: formik.handleSubmit,
        children: [
            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "form-item",
                children: [
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_input__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        showEye: true,
                        className: "field password-field",
                        label: "Password*",
                        name: "password",
                        type: "password",
                        disabled: isLoading,
                        placeholder: "Password",
                        handleChange: formik.handleChange,
                        handleBlur: formik.handleBlur,
                        value: formik.values.password,
                        hasError: hasError("password")
                    }),
                    hasError("password") ? /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_error_message__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        children: formik.errors.password
                    }) : null
                ]
            }),
            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "form-item",
                children: [
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_input__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        showEye: true,
                        className: "field password-field",
                        label: "Confirm Password*",
                        name: "confirmPassword",
                        type: "password",
                        disabled: isLoading,
                        placeholder: "Confirm Password",
                        handleChange: formik.handleChange,
                        handleBlur: formik.handleBlur,
                        value: formik.values.confirmPassword,
                        hasError: hasError("confirmPassword")
                    }),
                    hasError("confirmPassword") ? /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_error_message__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        children: formik.errors.confirmPassword
                    }) : null
                ]
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "form-item",
                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    btnTextColor: "black",
                    btnSize: "large",
                    btnStyle: "solid",
                    btnWidth: "full-w",
                    className: "btn-login",
                    type: "primary",
                    htmlType: "submit",
                    disabled: formik.isSubmitting,
                    children: "Submit"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateNewPasswordForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 45729:
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
/* harmony import */ var src_components_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59137);
/* harmony import */ var src_components_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45561);
/* harmony import */ var src_lib_api_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1565);
/* harmony import */ var src_lib_utils_validation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90768);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(75609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(53139);
/* harmony import */ var _error_message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(58801);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, src_components_button__WEBPACK_IMPORTED_MODULE_3__, src_components_input__WEBPACK_IMPORTED_MODULE_4__, src_lib_api_auth__WEBPACK_IMPORTED_MODULE_5__, _emotion_react__WEBPACK_IMPORTED_MODULE_8__, _error_message__WEBPACK_IMPORTED_MODULE_9__]);
([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, src_components_button__WEBPACK_IMPORTED_MODULE_3__, src_components_input__WEBPACK_IMPORTED_MODULE_4__, src_lib_api_auth__WEBPACK_IMPORTED_MODULE_5__, _emotion_react__WEBPACK_IMPORTED_MODULE_8__, _error_message__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






// import UserService from 'src/lib/api/user';




const ResetPasswordForm = ({ setEmailSent })=>{
    const [isLoading, setIsLoading] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false);
    const validationSchema = react__WEBPACK_IMPORTED_MODULE_2___default().useRef(yup__WEBPACK_IMPORTED_MODULE_7__.object().shape({
        email: yup__WEBPACK_IMPORTED_MODULE_7__.string().trim().required(src_lib_utils_validation__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.email.required).email(src_lib_utils_validation__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.email.invalid).matches(/^[\w.-]+@([\w-]+\.)+[\w-]{1,4}$/, src_lib_utils_validation__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.email.invalid)
    }));
    const formik = (0,formik__WEBPACK_IMPORTED_MODULE_1__.useFormik)({
        initialValues: {
            email: ""
        },
        validationSchema: validationSchema.current,
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit: async (values)=>{
            const { email } = values;
            setIsLoading(true);
            src_lib_api_auth__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.resetPassword(email).then(()=>{
                setEmailSent && setEmailSent(email);
            }).catch((error)=>{
                console.log("error", error.response.data.detail);
                formik.setErrors({
                    email: error.response.data.detail
                });
            }).finally(()=>{
                setIsLoading(false);
                formik.setSubmitting(false);
            });
        }
    });
    const hasError = (key)=>{
        return Object.keys(formik.errors).length > 0 && !!formik.errors[key] && formik.touched[key];
    };
    return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        css: _emotion_react__WEBPACK_IMPORTED_MODULE_8__.css`
        display: grid;
        margin-top: 30px;
        grid-auto-columns: 1fr;
        grid-column-gap: 40px;
        grid-row-gap: 20px;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
      `,
        className: "form-wrapper",
        onSubmit: formik.handleSubmit,
        children: [
            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "form-item",
                children: [
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_input__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        className: "field login-field",
                        label: "Email*",
                        name: "email",
                        disabled: isLoading,
                        placeholder: "Email",
                        handleChange: formik.handleChange,
                        handleBlur: formik.handleBlur,
                        value: formik.values.email,
                        hasError: hasError("email")
                    }),
                    hasError("email") ? /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_error_message__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        children: formik.errors.email
                    }) : null
                ]
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "form-item",
                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    btnTextColor: "black",
                    btnSize: "large",
                    btnStyle: "solid",
                    btnWidth: "full-w",
                    className: "btn-login",
                    type: "primary",
                    htmlType: "submit",
                    disabled: formik.isSubmitting,
                    children: "X\xe1c nhận"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResetPasswordForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 59443:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57101);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70351);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53139);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59137);
/* harmony import */ var _ResetPassworForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45729);
/* harmony import */ var react_icons_ti__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41946);
/* harmony import */ var react_icons_ti__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_ti__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, _emotion_react__WEBPACK_IMPORTED_MODULE_4__, _button__WEBPACK_IMPORTED_MODULE_5__, _ResetPassworForm__WEBPACK_IMPORTED_MODULE_6__]);
([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, _emotion_react__WEBPACK_IMPORTED_MODULE_4__, _button__WEBPACK_IMPORTED_MODULE_5__, _ResetPassworForm__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const ResetPassword = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const [emailSent, setEmailSent] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        css: _emotion_react__WEBPACK_IMPORTED_MODULE_4__.css`
        min-height: 100vh;
        padding-top: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #e7edf3;
        width: 100%;
        padding: 30px 20px 30px;
        display: flex;
        min-height: 100vh;
        padding-top: 30px;
        padding-bottom: 0px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 0px;
        background-image: none;
        background: rgb(66, 103, 212);
        background: linear-gradient(
          207deg,
          rgba(66, 103, 212, 1) 20%,
          rgba(66, 146, 212, 1) 53%,
          rgba(0, 212, 255, 1) 100%
        );
        .wrapper {
          max-width: 522px;
          width: 100%;
          font-weight: 300;
          position: relative;
          .left-out {
            position: absolute;
            color: #000;
            z-index: 999;
            top: 20px;
            left: 28px;
            font-size: 20px;
            font-weight: 700;
            cursor: pointer;
          }
          .container {
            padding: 50px 35px;
            border-radius: 20px;
            background-color: #fff;
            box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
            background-image: none;
            backdrop-filter: blur(14px);
            color: #000;
            > h2 {
              font-family: FiraSans;
              color: #000;
              text-align: center;
              margin-bottom: 20px;
              font-size: 30px;
              font-weight: 700;
            }
            > p {
              font-size: 17px;
              color: #000;
              text-align: center;
              > span {
                font-weight: 700;
              }
            }
            .form-wrapper {
              display: grid;
              margin-top: 30px;
              grid-auto-columns: 1fr;
              grid-column-gap: 40px;
              grid-row-gap: 20px;
              grid-template-columns: 1fr;
              grid-template-rows: auto;
            }
          }
        }
      `,
        children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "wrapper",
            children: [
                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "left-out",
                    onClick: ()=>router.push(src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.HOME),
                    children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ti__WEBPACK_IMPORTED_MODULE_7__.TiArrowBack, {})
                }),
                /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            children: "Qu\xean mật khẩu"
                        }),
                        !emailSent ? /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "Nhập Email để nhận mật khẩu mới."
                                }),
                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ResetPassworForm__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    setEmailSent: setEmailSent
                                })
                            ]
                        }) : /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    children: [
                                        "A link to reset your password was sent to ",
                                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: emailSent
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                                    className: "form-wrapper",
                                    children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "form-item",
                                        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            btnTextColor: "black",
                                            btnSize: "large",
                                            btnStyle: "solid",
                                            btnWidth: "full-w",
                                            className: "btn-login",
                                            type: "primary",
                                            htmlType: "submit",
                                            // disabled={formik.isSubmitting}
                                            onClick: ()=>router.push(src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.LOGIN),
                                            children: "Done"
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResetPassword);

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

/***/ 92091:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57101);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_components_forgot_password_CreateNewPassword__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30945);
/* harmony import */ var src_components_forgot_password_ResetPassword__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59443);
/* harmony import */ var src_lib_hooks_useQueryParam__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8443);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, src_components_forgot_password_CreateNewPassword__WEBPACK_IMPORTED_MODULE_2__, src_components_forgot_password_ResetPassword__WEBPACK_IMPORTED_MODULE_3__, src_lib_hooks_useQueryParam__WEBPACK_IMPORTED_MODULE_4__]);
([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, src_components_forgot_password_CreateNewPassword__WEBPACK_IMPORTED_MODULE_2__, src_components_forgot_password_ResetPassword__WEBPACK_IMPORTED_MODULE_3__, src_lib_hooks_useQueryParam__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const ForgotPasswordSection = ()=>{
    const { uid, token } = (0,src_lib_hooks_useQueryParam__WEBPACK_IMPORTED_MODULE_4__/* .useQueryParam */ .W)();
    // return <CreateNewPassword />;
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: uid && token ? /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_forgot_password_CreateNewPassword__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}) : /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_forgot_password_ResetPassword__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForgotPasswordSection);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
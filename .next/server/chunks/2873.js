"use strict";
exports.id = 2873;
exports.ids = [2873];
exports.modules = {

/***/ 7226:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/arrow-left.faf42216.svg","height":17,"width":16,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 7524:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7101);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_components_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9137);
/* harmony import */ var src_components_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5561);
/* harmony import */ var src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(351);
/* harmony import */ var src_lib_utils_validation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(234);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3139);
/* harmony import */ var _error_message__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8801);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, src_components_button__WEBPACK_IMPORTED_MODULE_4__, src_components_input__WEBPACK_IMPORTED_MODULE_5__, _emotion_react__WEBPACK_IMPORTED_MODULE_9__, _error_message__WEBPACK_IMPORTED_MODULE_10__]);
([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, src_components_button__WEBPACK_IMPORTED_MODULE_4__, src_components_input__WEBPACK_IMPORTED_MODULE_5__, _emotion_react__WEBPACK_IMPORTED_MODULE_9__, _error_message__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



// import { navigate } from 'gatsby';



// import AuthService from 'src/lib/api/auth';





const ResendEmailForm = ({ setError })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const validationSchema = react__WEBPACK_IMPORTED_MODULE_3___default().useRef(yup__WEBPACK_IMPORTED_MODULE_8__.object().shape({
        email: yup__WEBPACK_IMPORTED_MODULE_8__.string().required(src_lib_utils_validation__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.email.required).email(src_lib_utils_validation__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.email.invalid).matches(/^[\w.-]+@([\w-]+\.)+[\w-]{1,4}$/, src_lib_utils_validation__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.email.invalid)
    }));
    const formik = (0,formik__WEBPACK_IMPORTED_MODULE_1__.useFormik)({
        initialValues: {
            email: ""
        },
        validationSchema: validationSchema.current,
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit: async (values)=>{
            try {
                // await AuthService.resendEmail(values?.email);
                localStorage.setItem("email_register", values?.email);
                setError();
                router.push(src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.VERIFY_ACCOUNT);
            } catch (error) {
                formik.setErrors({
                    email: "Email does not exist. Please contact admin."
                });
            }
        }
    });
    const hasError = (key)=>{
        return Object.keys(formik.errors).length > 0 && !!formik.errors[key] && formik.touched[key];
    };
    return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        css: _emotion_react__WEBPACK_IMPORTED_MODULE_9__.css`
        display: grid;
        margin-top: 30px;
        grid-auto-columns: 1fr;
        grid-column-gap: 40px;
        grid-row-gap: 20px;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        .form-item {
          .ant-btn {
            font-weight: 700;
          }
        }
      `,
        className: "form-wrapper",
        onSubmit: formik.handleSubmit,
        children: [
            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "form-item",
                children: [
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_input__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        className: "field email-field",
                        label: "Email*",
                        name: "email",
                        // disabled={isLoading}
                        placeholder: "Email",
                        handleChange: formik.handleChange,
                        handleBlur: formik.handleBlur,
                        value: formik.values.email,
                        hasError: hasError("email")
                    }),
                    hasError("email") ? /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_error_message__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        children: formik.errors.email
                    }) : null
                ]
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "form-item",
                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    btnTextColor: "black",
                    btnSize: "large",
                    btnStyle: "solid",
                    btnWidth: "full-w",
                    className: "btn-login",
                    type: "primary",
                    htmlType: "submit",
                    disabled: formik.isSubmitting,
                    children: "Resend"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResendEmailForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5228:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ getQueryParam)
/* harmony export */ });
/* unused harmony export createUrl */
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2194);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([query_string__WEBPACK_IMPORTED_MODULE_0__]);
query_string__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

function getQueryParam() {
    if (true) return {};
    return query_string__WEBPACK_IMPORTED_MODULE_0__["default"].parse(window.location.search);
}
function createUrl(urlData) {
    const keys = Object.keys(urlData);
    let search = "?";
    keys.forEach((key)=>{
        if (urlData[key] !== null && urlData[key] !== "") {
            search += `${key}=${urlData[key]}&`;
        }
    });
    return search.substring(0, search.length - 1);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2873:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7101);
/* harmony import */ var antd_lib_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8070);
/* harmony import */ var antd_lib_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_assets_images_arrow_left_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7226);
/* harmony import */ var src_components_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9137);
/* harmony import */ var src_components_verify_ResendForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7524);
/* harmony import */ var src_lib_utils_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5228);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3139);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, src_components_button__WEBPACK_IMPORTED_MODULE_5__, src_components_verify_ResendForm__WEBPACK_IMPORTED_MODULE_6__, src_lib_utils_query__WEBPACK_IMPORTED_MODULE_7__, _emotion_react__WEBPACK_IMPORTED_MODULE_8__]);
([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, src_components_button__WEBPACK_IMPORTED_MODULE_5__, src_components_verify_ResendForm__WEBPACK_IMPORTED_MODULE_6__, src_lib_utils_query__WEBPACK_IMPORTED_MODULE_7__, _emotion_react__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const VerifyUI = ()=>{
    const [isError, setIsError] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false);
    const params = (0,src_lib_utils_query__WEBPACK_IMPORTED_MODULE_7__/* .getQueryParam */ .P)();
    const emailRegister = localStorage.getItem("email_register");
    const verifyToken = async ()=>{
        try {
            if (params?.token) {
            // await AuthService.verifyEmail(params?.token);
            }
        } catch (error) {
            console.log(error);
            setIsError(true);
        }
    };
    react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(()=>{
        if (params?.token) {
            verifyToken();
        }
    }, []);
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        css: _emotion_react__WEBPACK_IMPORTED_MODULE_8__.css`
        min-height: 100vh;
        padding-top: 30px;
        padding-bottom: 0px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #e7edf3;
        position: relative;
        width: 100%;
        padding: 30px 20px 30px;
        .section-verify {
          max-width: 480px;
          width: 100%;
          font-weight: 300;
          .wrapper-verify {
            padding: 50px;
            border-radius: 20px;
            background-color: #051d29;
            background-image: none;
            backdrop-filter: blur(14px);
            color: #fff;

            .user-avatar {
              margin-top: -91px;
              .user-wrapper {
                display: flex;
                width: 80px;
                height: 80px;
                margin-right: auto;
                margin-left: auto;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
                background-color: #e7edf3;
                color: #051d29;
                > h2 {
                  font-size: 30px;
                }
                .left-out {
                  position: absolute;
                  color: #fff;
                  z-index: 999;
                  top: 20px;
                  left: 28px;
                  font-size: 20px;
                  font-weight: 700;
                  cursor: pointer;
                }
              }
            }
            .verify-header {
              font-family: FiraSans;
              margin-top: 20px;
              border-radius: 5px;
              color: #fff;
              text-align: center;
              margin-bottom: 30px;
              font-size: 34px;
              line-height: 36px;
              font-weight: 700;
            }
            .verify-content {
              p {
                width: 100%;
                max-width: 302px;
                margin: 0 auto;
                margin-bottom: 30px;
                text-align: center;
                span {
                  font-weight: 700;
                }
              }
            }
            .verify-btn {
              .ant-btn {
                font-weight: 700;
              }
            }
          }
        }
      `,
        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "section-verify",
            children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "wrapper-verify",
                children: [
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "user-avatar",
                        children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "user-wrapper",
                            children: [
                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "left-out",
                                    children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        src: src_assets_images_arrow_left_svg__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
                                        preview: false
                                    })
                                }),
                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaRegUser, {})
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "verify-header",
                        children: isError || params.resend ? "Resend Email" : params?.token ? "Email Confirmed" : "Verify Email"
                    }),
                    params?.resend ? /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "verify-content",
                        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_verify_ResendForm__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            setError: ()=>{
                                setIsError(false);
                            }
                        })
                    }) : !isError ? /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "verify-content",
                        children: [
                            !params?.token && emailRegister && /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                children: [
                                    "A link to verify your email was sent to ",
                                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: emailRegister
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: params?.token ? "Your email has been verified successfully and you can now login!" : "Please click the verification link in the email to activate your account."
                            })
                        ]
                    }) : /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "verify-content",
                        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_verify_ResendForm__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            setError: ()=>{
                                setIsError(false);
                            }
                        })
                    }),
                    params?.resend ? null : !isError && /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "verify-btn",
                        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            btnTextColor: "black",
                            btnSize: "large",
                            btnStyle: "solid",
                            btnWidth: "full-w",
                            className: "btn-login",
                            type: "primary",
                            onClick: ()=>{
                                localStorage.removeItem("email_register");
                            // router.push(RoutePaths.LOGIN);
                            },
                            children: params?.token ? "Continue to Login" : "Okay"
                        })
                    })
                ]
            })
        })
    });
};
const VerifySection = ()=>{
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(VerifyUI, {})
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VerifySection);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
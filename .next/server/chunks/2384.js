"use strict";
exports.id = 2384;
exports.ids = [2384];
exports.modules = {

/***/ 96583:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57101);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_components_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59137);
/* harmony import */ var src_components_error_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(58801);
/* harmony import */ var src_components_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45561);
/* harmony import */ var src_lib_api_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1565);
/* harmony import */ var src_lib_api_course__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(84626);
/* harmony import */ var src_lib_api_user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(66455);
/* harmony import */ var src_lib_reducers_app_appSlice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(70805);
/* harmony import */ var src_lib_utils_enum__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(24519);
/* harmony import */ var src_lib_utils_validation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(90768);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(75609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(53139);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, src_components_button__WEBPACK_IMPORTED_MODULE_5__, src_components_error_message__WEBPACK_IMPORTED_MODULE_6__, src_components_input__WEBPACK_IMPORTED_MODULE_7__, src_lib_api_auth__WEBPACK_IMPORTED_MODULE_8__, src_lib_api_course__WEBPACK_IMPORTED_MODULE_9__, src_lib_api_user__WEBPACK_IMPORTED_MODULE_10__, src_lib_reducers_app_appSlice__WEBPACK_IMPORTED_MODULE_11__, _emotion_react__WEBPACK_IMPORTED_MODULE_15__]);
([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, src_components_button__WEBPACK_IMPORTED_MODULE_5__, src_components_error_message__WEBPACK_IMPORTED_MODULE_6__, src_components_input__WEBPACK_IMPORTED_MODULE_7__, src_lib_api_auth__WEBPACK_IMPORTED_MODULE_8__, src_lib_api_course__WEBPACK_IMPORTED_MODULE_9__, src_lib_api_user__WEBPACK_IMPORTED_MODULE_10__, src_lib_reducers_app_appSlice__WEBPACK_IMPORTED_MODULE_11__, _emotion_react__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const LoginForm = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const validationSchema = react__WEBPACK_IMPORTED_MODULE_3___default().useRef(yup__WEBPACK_IMPORTED_MODULE_14__.object().shape({
        email: yup__WEBPACK_IMPORTED_MODULE_14__.string().required(src_lib_utils_validation__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z.email.required).email(src_lib_utils_validation__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z.email.invalid).matches(/^[\w.-]+@([\w-]+\.)+[\w-]{1,4}$/, src_lib_utils_validation__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z.email.invalid),
        password: yup__WEBPACK_IMPORTED_MODULE_14__.string().required(src_lib_utils_validation__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z.password.required)
    }));
    const queryParams = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [isLoading, setIsLoading] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(false);
    const [loginError, setLoginError] = react__WEBPACK_IMPORTED_MODULE_3___default().useState("");
    const [rememberMe, setRememberMe] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(localStorage.getItem(src_lib_utils_enum__WEBPACK_IMPORTED_MODULE_12__/* .StorageKeys */ .BU.REMEMBER_ME_KEY) === "true" ? true : false);
    const registerEmail = localStorage.getItem("email_register");
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
    const formik = (0,formik__WEBPACK_IMPORTED_MODULE_1__.useFormik)({
        initialValues: {
            email: registerEmail || "",
            password: ""
        },
        validationSchema: validationSchema.current,
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit: async (values)=>{
            const { email, password } = values;
            try {
                const response = await src_lib_api_auth__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.signIn(email, password);
                localStorage.setItem(src_lib_utils_enum__WEBPACK_IMPORTED_MODULE_12__/* .StorageKeys */ .BU.SESSION_KEY, JSON.stringify(response));
                const [profile, init] = await Promise.all([
                    src_lib_api_user__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.myInfo(),
                    src_lib_api_course__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z.initData()
                ]);
                dispatch(src_lib_reducers_app_appSlice__WEBPACK_IMPORTED_MODULE_11__/* .appActions */ .xZ.setMyProfile(profile));
                router.push(queryParams.asPath.split("?redirect_url=")[1] || "/");
            } catch (error) {
                if (error.response.data.detail?.includes("No active account found with the given credentials")) setLoginError("Email hoặc mật khẩu kh\xf4ng đ\xfang");
                else setLoginError(error.detail);
            } finally{
                setIsLoading(false);
                formik.setSubmitting(false);
            }
        }
    });
    react__WEBPACK_IMPORTED_MODULE_3___default().useEffect(()=>{
        localStorage.clear();
    }, []);
    const hasError = (key)=>{
        return Object.keys(formik.errors).length > 0 && !!formik.errors[key] && formik.touched[key];
    };
    const onRememberMeChange = (e)=>{
        localStorage.setItem(src_lib_utils_enum__WEBPACK_IMPORTED_MODULE_12__/* .StorageKeys */ .BU.REMEMBER_ME_KEY, `${e.target.checked}`);
        setRememberMe(e.target.checked);
    };
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
            css: _emotion_react__WEBPACK_IMPORTED_MODULE_15__.css`
          display: grid;
          margin-top: 40px;
          grid-auto-columns: 1fr;
          grid-column-gap: 40px;
          grid-row-gap: 20px;
          grid-template-columns: 1fr;
          grid-template-rows: auto;
          .form-item {
            width: 100%;
            .ant-btn {
              font-weight: 700;
            }
          }
        `,
            className: "login-form",
            onSubmit: formik.handleSubmit,
            children: [
                /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "form-item",
                    children: [
                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_input__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            className: "field login-field",
                            label: "Email",
                            name: "email",
                            disabled: isLoading,
                            placeholder: "Email",
                            handleChange: formik.handleChange,
                            handleBlur: formik.handleBlur,
                            value: formik.values.email,
                            hasError: hasError("email")
                        }),
                        hasError("email") ? /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_error_message__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            children: formik.errors.email
                        }) : null
                    ]
                }),
                /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "form-item",
                    children: [
                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_input__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            className: "field login-field",
                            label: "Mật khẩu",
                            type: "password",
                            name: "password",
                            placeholder: "Password",
                            showEye: true,
                            disabled: isLoading,
                            handleChange: formik.handleChange,
                            handleBlur: formik.handleBlur,
                            value: formik.values.password,
                            hasError: hasError("password")
                        }),
                        hasError("password") ? /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_error_message__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            children: formik.errors.password
                        }) : null,
                        loginError && loginError.length > 0 && !hasError("password") && !hasError("email") && /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_error_message__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            children: loginError
                        })
                    ]
                }),
                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "form-item",
                    children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        btnTextColor: "black",
                        btnSize: "large",
                        btnStyle: "solid",
                        btnWidth: "full-w",
                        className: "btn-login",
                        type: "primary",
                        htmlType: "submit",
                        disabled: formik.isSubmitting,
                        children: "Đăng nhập"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 52384:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57101);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2278);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_components_forms_LoginForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96583);
/* harmony import */ var src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70351);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(53139);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, src_components_forms_LoginForm__WEBPACK_IMPORTED_MODULE_4__, _emotion_react__WEBPACK_IMPORTED_MODULE_6__]);
([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, src_components_forms_LoginForm__WEBPACK_IMPORTED_MODULE_4__, _emotion_react__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const LoginUI = ()=>{
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        css: _emotion_react__WEBPACK_IMPORTED_MODULE_6__.css`
        min-height: 100vh;
        padding: 0px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #e7edf3;
        position: relative;
        width: 100%;
        background: rgb(66, 103, 212);
        background: linear-gradient(to bottom right, #38a2d7, #561139);

        a {
          text-decoration: none;
        }

        .section-login {
          max-width: 480px;
          width: 100%;
          font-weight: 300;
          box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
          border-radius: 20px;

          .wrapper-login {
            padding: 30px 50px;
            border-radius: 20px;
            background-color: #fff;
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
                  color: #ffa535;
                  font-size: 30px;
                }
              }
            }
            .login-header {
              font-family: FiraSans;
              margin-top: 20px;
              border-radius: 5px;
              color: #000;
              /* text-align: center; */
              margin-bottom: 10px;
              font-size: 34px;
              line-height: 36px;
              font-weight: 700;
            }
            .login-form {
              .form-item {
                .eyes {
                  top: 48px;
                }
              }
            }
          }
          .divider {
            height: 2px;
            margin-top: 20px;
            margin-bottom: 20px;
            background-color: #2e0249;
          }

          .form-item-bot {
            width: 100%;
            display: flex;
            flex-direction: column;
            margin-top: 10px;
            .forgot-pwd {
              width: 100%;
              color: #000;
              font-size: 18px;
              text-align: center;

              &:hover {
                text-decoration: underline;
              }
            }

            .login-text {
              color: #000;
              font-family: FiraSans;
              display: flex;
              justify-content: center;
              gap: 10px;
              .register-here {
                color: #000;
                font-weight: 600;
                margin: auto 0;
                &:hover {
                  font-weight: 700;
                }
              }
            }
          }
        }
        .back-home {
          color: #000;
          text-align: center;
          font-weight: 700;
          margin: 0;
          cursor: pointer;
          letter-spacing: 1px;
          opacity: 0.6;
          &:hover {
            letter-spacing: 2px;
            opacity: 1;
          }
          transition: all 400ms ease;
        }
      `,
        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "section-login",
            children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "wrapper-login",
                children: [
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "login-header",
                        children: "Đăng nhập"
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_forms_LoginForm__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_divider__WEBPACK_IMPORTED_MODULE_1___default()), {
                        className: "divider"
                    }),
                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "form-item-bot",
                        children: [
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                className: "forgot-pwd",
                                href: src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.FORGOT_PASSWORD,
                                children: "Qu\xean mật khẩu?"
                            }),
                            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "login-text",
                                children: [
                                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "Chưa c\xf3 t\xe0i khoản?"
                                    }),
                                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        className: "register-here",
                                        href: src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.REGISTER,
                                        children: "Đăng k\xfd"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                className: "back-home",
                                href: "/",
                                children: "Về trang chủ"
                            })
                        ]
                    })
                ]
            })
        })
    });
};
const LoginSection = ()=>{
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LoginUI, {})
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginSection);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
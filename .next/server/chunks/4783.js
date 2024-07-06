"use strict";
exports.id = 4783;
exports.ids = [4783];
exports.modules = {

/***/ 17976:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export YOUR_GOOGLE_MAPS_API_KEY */
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57101);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93908);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_components_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(59137);
/* harmony import */ var src_components_error_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(58801);
/* harmony import */ var src_components_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(45561);
/* harmony import */ var src_lib_api_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(66455);
/* harmony import */ var src_lib_utils_regularExpression__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(92569);
/* harmony import */ var src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(70351);
/* harmony import */ var src_lib_utils_validation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(90768);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(75609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(53139);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, src_components_button__WEBPACK_IMPORTED_MODULE_6__, src_components_error_message__WEBPACK_IMPORTED_MODULE_7__, src_components_input__WEBPACK_IMPORTED_MODULE_8__, src_lib_api_user__WEBPACK_IMPORTED_MODULE_9__, _emotion_react__WEBPACK_IMPORTED_MODULE_14__]);
([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, src_components_button__WEBPACK_IMPORTED_MODULE_6__, src_components_error_message__WEBPACK_IMPORTED_MODULE_7__, src_components_input__WEBPACK_IMPORTED_MODULE_8__, src_lib_api_user__WEBPACK_IMPORTED_MODULE_9__, _emotion_react__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














/* eslint-disable @typescript-eslint/no-explicit-any */ 
const YOUR_GOOGLE_MAPS_API_KEY = "AIzaSyAALCd4-WUGx4qZ3Zi0eCmBv2dKKbXhzVo";
const RegisterForm = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    // const avatarFile = React.useRef<File | null>(null);
    const [errorUploadImg, setErrorUploadImg] = react__WEBPACK_IMPORTED_MODULE_5___default().useState(false);
    const validationSchema = react__WEBPACK_IMPORTED_MODULE_5___default().useRef(yup__WEBPACK_IMPORTED_MODULE_13__.object().shape({
        full_name: yup__WEBPACK_IMPORTED_MODULE_13__.string().required(src_lib_utils_validation__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z.fullName.required),
        // .test('alphabet', validation.fullName.format, (value: any) => {
        //   if (value && value.length > 0) {
        //     return regex.alphabet.test(value.trim());
        //   }
        //   return false;
        // }),
        email: yup__WEBPACK_IMPORTED_MODULE_13__.string().required(src_lib_utils_validation__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z.email.required).email(src_lib_utils_validation__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z.email.invalid).matches(/^[\w.-]+@([\w-]+\.)+[\w-]{1,4}$/, src_lib_utils_validation__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z.email.invalid).test("existingEmail", src_lib_utils_validation__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z.email.format, async (value)=>{
            try {
                if (!value) return false;
                const isExist = await debouncedApi(value);
                return !isExist?.exists;
            } catch (error) {
                return false;
            }
        }),
        // email: Yup.string()
        //   .required(validation.email.required)
        //   .email(validation.email.invalid)
        //   .matches(/^[\w.-]+@([\w-]+\.)+[\w-]{1,4}$/, validation.email.invalid)
        //   .test('email', validation.email.format, async (value: any) => {
        //     try {
        //       const emailExist = await UserService.existEmail(value);
        //       return !emailExist.exists;
        //     } catch (error) {
        //       return false;
        //     }
        //   }),
        password1: yup__WEBPACK_IMPORTED_MODULE_13__.string().required(src_lib_utils_validation__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z.password.required).matches(src_lib_utils_regularExpression__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.password, {
            message: src_lib_utils_validation__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z.password.invalidPwdRegex
        }),
        password2: yup__WEBPACK_IMPORTED_MODULE_13__.string().required(src_lib_utils_validation__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z.confirm.required).test("passwords-match", src_lib_utils_validation__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z.confirmPassword.doesNotMatch, function(value) {
            return this.parent.password1 === value;
        })
    }));
    const [isLoading, setIsLoading] = react__WEBPACK_IMPORTED_MODULE_5___default().useState(false);
    const [generalError, setGeneralError] = react__WEBPACK_IMPORTED_MODULE_5___default().useState("");
    const formik = (0,formik__WEBPACK_IMPORTED_MODULE_1__.useFormik)({
        initialValues: {
            full_name: "",
            email: "",
            password1: "",
            password2: "",
            phone: ""
        },
        validationSchema: validationSchema.current,
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit: async (values)=>{
            const { full_name, password1, password2, email } = values;
            try {
                setIsLoading(true);
                await src_lib_api_user__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z.register(email, password1, password2, full_name);
                localStorage.setItem("email_register", values?.email);
                router.push(src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.LOGIN);
            } catch (error) {
                console.log(error);
                setGeneralError(error.message);
            } finally{
                setIsLoading(false);
            }
        }
    });
    const debouncedApi = lodash_debounce__WEBPACK_IMPORTED_MODULE_2___default()(src_lib_api_user__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z.existEmail, 500, {
        trailing: true
    });
    const hasError = (key)=>{
        return Object.keys(formik.errors).length > 0 && !!formik.errors[key] && formik.touched[key];
    };
    return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "register-header",
                children: "Tạo t\xe0i khoản"
            }),
            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                css: _emotion_react__WEBPACK_IMPORTED_MODULE_14__.css`
          display: flex;
          flex-direction: column;
          gap: 20px;

          .form-item {
            > span {
              text-decoration: underline;
              cursor: pointer;
            }
            width: 100%;
            .ant-checkbox + span {
              color: #fff;
              font-size: 16px;
              font-weight: 300;
            }
            .ant-btn {
              font-weight: 700;
            }
          }
          .half {
            width: fit-content;
            > button {
              width: 200px;
            }
          }
          .upload-avatar {
            .avatar {
              width: 100%;
              max-width: 152px;
              height: 152px;
              overflow: hidden;
              margin: 0 auto;
              border-radius: 50%;
              .ant-upload-picture-card-wrapper {
                height: 100%;
                .ant-upload {
                  border: none;
                  .non-image {
                    width: 100%;
                    height: 100%;
                    background-color: #ffa900;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    svg {
                      width: 22px;
                      height: 22px;
                    }
                    p {
                      max-width: 110px;
                      color: #fff;
                      font-weight: 700;
                    }
                  }
                }
              }
            }
            .avatar-error {
              text-align: center;
            }
          }
          .form-submit {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
          }
          .register-text {
            text-align: center;
            margin-bottom: 10px;
            font-family: FiraSans;
            color: #000;
            display: flex;
            gap: 15px;
            .login-here {
              transition: all 400ms ease;
              color: #333;
              font-weight: 700;
              text-decoration: none;
              text-transform: uppercase;
              margin: auto;
              &:hover {
                text-decoration: underline;
              }
            }
          }
        `,
                className: "register-form",
                onSubmit: formik.handleSubmit,
                children: [
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "upload-avatar",
                        children: !hasError("avatar") && errorUploadImg && /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_error_message__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            className: "avatar-error error",
                            children: "Cannot upload file. Please, choose another file."
                        })
                    }),
                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "form-item",
                        children: [
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_input__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                requiredMark: true,
                                className: "field login-field",
                                label: "Họ v\xe0 T\xean",
                                name: "full_name",
                                type: "string",
                                placeholder: "Full Name",
                                value: formik.values.full_name,
                                handleChange: formik.handleChange,
                                handleBlur: formik.handleBlur,
                                hasError: hasError("full_name")
                            }),
                            hasError("full_name") ? /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_error_message__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                className: "error",
                                children: formik.errors.full_name
                            }) : null
                        ]
                    }),
                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "form-item",
                        children: [
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_input__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                requiredMark: true,
                                className: "field login-field",
                                label: "Email",
                                name: "email",
                                type: "email",
                                disabled: isLoading,
                                placeholder: "Email",
                                handleChange: formik.handleChange,
                                handleBlur: formik.handleBlur,
                                value: formik.values.email,
                                hasError: hasError("email")
                            }),
                            hasError("email") ? /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_error_message__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                className: "error",
                                children: formik.errors.email
                            }) : null
                        ]
                    }),
                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "form-item",
                        children: [
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_input__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                className: "field login-field",
                                requiredMark: true,
                                label: "Mật khẩu",
                                type: "password",
                                name: "password1",
                                placeholder: "Password",
                                showEye: true,
                                disabled: isLoading,
                                handleChange: formik.handleChange,
                                handleBlur: formik.handleBlur,
                                value: formik.values.password1,
                                hasError: hasError("password1")
                            }),
                            hasError("password1") ? /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_error_message__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                className: "error",
                                children: formik.errors.password1
                            }) : null
                        ]
                    }),
                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "form-item",
                        children: [
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_input__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                className: "field login-field",
                                label: "Nhập lại mật khẩu",
                                requiredMark: true,
                                type: "password",
                                name: "password2",
                                placeholder: "Confirm Password",
                                showEye: true,
                                disabled: isLoading,
                                handleChange: formik.handleChange,
                                handleBlur: formik.handleBlur,
                                value: formik.values.password2,
                                hasError: hasError("password2")
                            }),
                            hasError("password2") ? /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_error_message__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                className: "error",
                                children: formik.errors.password2
                            }) : null
                        ]
                    }),
                    generalError && generalError.length > 0 && /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_error_message__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        children: generalError
                    }),
                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "form-submit",
                        children: [
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "form-item half",
                                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_button__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    btnTextColor: "black",
                                    btnSize: "large",
                                    btnStyle: "solid",
                                    btnWidth: "fix-content",
                                    className: "btn-login",
                                    borderRadius: "5px",
                                    type: "primary",
                                    htmlType: "submit",
                                    // disabled={!isTickAgree || formik.isSubmitting}
                                    onClick: ()=>{
                                        setTimeout(()=>{
                                            const errElement = document.querySelector(".error");
                                            if (errElement) {
                                                setTimeout(()=>{
                                                    errElement.scrollIntoView({
                                                        behavior: "smooth",
                                                        block: "center"
                                                    });
                                                }, 500);
                                            }
                                        }, 2000);
                                    },
                                    children: "Tạo t\xe0i khoản"
                                })
                            }),
                            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "register-text",
                                children: [
                                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        children: [
                                            "Đ\xe3 c\xf3 t\xe0i khoản?",
                                            "   "
                                        ]
                                    }),
                                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        className: "login-here",
                                        href: src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.LOGIN,
                                        children: "Đăng nhập"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegisterForm);

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

/***/ 24783:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57101);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_components_forms_RegisterForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17976);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53139);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, src_components_forms_RegisterForm__WEBPACK_IMPORTED_MODULE_2__, _emotion_react__WEBPACK_IMPORTED_MODULE_3__]);
([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, src_components_forms_RegisterForm__WEBPACK_IMPORTED_MODULE_2__, _emotion_react__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const RegisterSection = ()=>{
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        css: _emotion_react__WEBPACK_IMPORTED_MODULE_3__.css`
        display: flex;
        min-height: 100vh;
        padding: 0px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 0px;
        background-image: none;
        background: rgb(66, 103, 212);
        background: linear-gradient(to bottom right, #38a2d7, #561139);
        .section-register {
          max-width: 580px;
          color: #000;
          width: 100%;
          font-weight: 300;
          box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
          border-radius: 15px;

          .wrapper-register {
            padding: 40px;
            border-radius: 15px;
            background-color: #fff;
            position: relative;
            max-width: 100%;
            margin-right: auto;
            margin-left: auto;
            .user-avatar {
              /* margin-top: -80px; */
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
              }
            }
            .register-header {
              font-family: FiraSans;
              margin-top: 20px;
              border-radius: 5px;
              color: #000;
              text-align: center;
              margin-bottom: 10px;
              font-size: 34px;
              line-height: 36px;
              font-weight: 700;
            }
          }
          .divider {
            height: 2px;
            margin-top: 20px;
            margin-bottom: 20px;
            background-color: #051d29;
          }
        }
        a {
          text-decoration: none;
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
          width: 100%;
          display: block;
          margin-top: 20px;
        }
      `,
        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "section-register",
            children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "wrapper-register",
                children: [
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "user-avatar"
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_forms_RegisterForm__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                        className: "back-home",
                        href: "/",
                        children: "Về trang chủ"
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegisterSection);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
"use strict";
exports.id = 5561;
exports.ids = [5561];
exports.modules = {

/***/ 45561:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57101);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30675);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_input_number__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54503);
/* harmony import */ var antd_lib_input_number__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_number__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_styles_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11278);
/* harmony import */ var _ant_design_icons_lib_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74849);
/* harmony import */ var _ant_design_icons_lib_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(53139);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, _emotion_react__WEBPACK_IMPORTED_MODULE_6__]);
([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, _emotion_react__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const baseStyle = (isFocusing, isEmpty, hasError)=>{
    let isLabelAffected = isFocusing;
    if (!isEmpty) {
        isLabelAffected = true;
    }
    return _emotion_react__WEBPACK_IMPORTED_MODULE_6__.css`
    position: relative;
    z-index: 1;
    input {
      font-size: 20px;
      font-weight: 600;
      font-style: italic;
      color: #3f3939 !important;
      font-family: 'Montserrat';
    }
    .s-label {
      top: ${isLabelAffected ? "7px" : "-30px"};
      font-size: ${isLabelAffected ? "17px" : "17px"};
      opacity: 1;
      font-weight: 700;
      transition-property: top, font-size, opacity;
      transition-duration: 0.1s;
      transition-timing-function: linear;
      margin-bottom: 5px;
      display: inline-block;
    }
    .eyes {
      position: absolute;
      top: 50px;
      right: 15px;
      color: #051d29;
      .anticon {
        font-size: 24px;
      }
    }
    input {
      border-radius: 0;
      font-size: 14px;
      border: 1px solid;
      background-color: transparent;
      height: 100%;
      min-height: 46px;
      border-radius: 3px;
      &:hover {
        border-color: ${src_styles_theme__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.text.blackColor};
      }
      &:focus {
        // border: 1px solid ${src_styles_theme__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.text.blueColor};
        box-shadow: none;
      }
    }
    .forgot-pwd-input-base,
    .bg-input-base {
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus,
      &:-webkit-autofill:active {
        border: 1px solid rgba(255, 255, 255, 0.2) !important;
        -webkit-text-fill-color: #fff !important;
        -webkit-box-shadow: 0 0 0px 1000px #000 inset;
      }
    }

    .status {
      position: absolute;
      z-index: 2;
      top: 16px;
      right: 15px;
      width: 19px;
      height: 19px;
    }
    .tip {
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 22px;
      letter-spacing: 0.01em;
      color: #fff;
      opacity: 0.7;
    }
    &.login-field {
      input {
        font-size: 20px;
        font-weight: 600;
        font-style: italic;
        color: #3f3939 !important;
        font-family: 'Montserrat';
      }

      width: 100%;
      .s-label {
        margin: 0 0 0 10px;
        color: #000;
      }
      /* text-align: center; */
      border-bottom: 4px solid transparent;
      /* border-image: linear-gradient(0.25turn, rgba(255, 249, 34), rgba(255, 0, 128), rgba(56, 2, 155, 0)); */
      border-image: linear-gradient(
        207deg,
        rgba(66, 103, 212, 1) 20%,
        rgba(66, 146, 212, 1) 53%,
        rgba(197, 22, 240, 1) 84%,
        rgba(0, 212, 255, 1) 100%
      );
      border-image-slice: 1;
      min-height: 46px !important;
      input {
        border: none;
        &:-webkit-autofill,
        &:-webkit-autofill:hover,
        &:-webkit-autofill:focus,
        &:-webkit-autofill:active {
          -webkit-box-shadow: 0 0 0 30px white inset !important;
        }
      }
    }
    &.register-field {
      .s-label {
        margin: 0 0 0 10px;
      }
      width: 100%;
      /* text-align: center; */
      border-bottom: 4px solid transparent;
      /* border-image: linear-gradient(0.25turn, rgba(255, 249, 34), rgba(255, 0, 128), rgba(56, 2, 155, 0)); */
      border-image: linear-gradient(
        207deg,
        rgba(66, 103, 212, 1) 20%,
        rgba(66, 146, 212, 1) 53%,
        rgba(197, 22, 240, 1) 84%,
        rgba(0, 212, 255, 1) 100%
      );
      border-image-slice: 1;
      min-height: 46px !important;
      input {
        border: none;
        &:-webkit-autofill,
        &:-webkit-autofill:hover,
        &:-webkit-autofill:focus,
        &:-webkit-autofill:active {
          -webkit-box-shadow: 0 0 0 30px white inset !important;
        }
      }
    }
    &.company-field {
      input {
        background-color: #fff !important;
        min-height: 46px !important;
      }
    }
    &.email-field {
      input {
        background-color: #fff !important;
        min-height: 46px !important;
      }
    }
    &.password-field {
      input {
        background-color: #fff !important;
        min-height: 46px !important;
      }
    }
    &.firstName-field {
      input {
        background-color: #fff !important;
        min-height: 46px !important;
      }
    }
    &.lastName-field {
      input {
        background-color: #fff !important;
        min-height: 46px !important;
      }
    }
    &.confirm-field {
      input {
        background-color: #fff !important;
        min-height: 46px !important;
      }
    }
    &.name-field {
      input {
        background-color: #fff !important;
        min-height: 46px !important;
      }
    }
    &.market-field {
      input {
        background-color: #fff !important;
        min-height: 46px !important;
      }
    }
    &.dre-field {
      input {
        background-color: #fff !important;
        min-height: 46px !important;
      }
    }
    &.website-field {
      input {
        background-color: #fff !important;
        min-height: 40px !important;
      }
    }
    &.website-lookup-field {
      input {
        background-color: #fff !important;
        min-height: 46px !important;
      }
    }
    &.password-protected {
      .s-label {
        display: block;
        margin-bottom: 5px;
        font-weight: 700;
      }
      input {
        display: block;
        width: 100%;
        min-height: 38px;
        padding: 8px 12px;
        margin-bottom: 10px;
        font-size: 14px;
        line-height: 1.42857143;
        color: #333333;
        vertical-align: middle;
        background-color: #ffffff;
        border: 1px solid #cccccc;
        border-radius: 5px;
        &:focus {
          border: 1px solid ${src_styles_theme__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.text.blueColor};
          box-shadow: none;
        }
      }
    }
    .ant-input-affix-wrapper {
      input {
        &:focus {
          border: none;
        }
      }
    }
  `;
};
const AppInput = (props)=>{
    const { requiredMark, label, hasError, // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isSubmitting, // eslint-disable-next-line @typescript-eslint/no-unused-vars
    className, isForceFocus, handleChange, handleBlur, handleFocus, onInput, value, showEye, type, placeholder, handleChangeNumber, suffix, ...rest } = props;
    // const inputRef = React.useRef(null);
    const [isFocusing, setIsFocusing] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(!!value);
    const [isEmpty, setIsEmpty] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(!value);
    const [typeLocal, setTypeLocal] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(type);
    const onFocus = (e)=>{
        handleFocus && handleFocus(e);
        setIsFocusing(true);
    };
    const onBlur = (e)=>{
        handleBlur && handleBlur(e);
        setIsFocusing(false);
    };
    const onChange = (e)=>{
        handleChange && handleChange(e);
        if (type !== "number" && e.target.value && e.target.value.length > 0) {
            setIsEmpty(false);
        } else {
            setIsEmpty(true);
        }
    };
    // const onInputRefFocus = () => {
    // 	inputRef.current?.focus();
    // };
    return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: className,
        css: [
            baseStyle(isForceFocus || isFocusing, isEmpty, hasError)
        ],
        children: [
            label && /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: "s-label",
                children: `${label}${requiredMark ? `*` : ""}`
            }),
            type !== "number" ? /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default()), {
                ...rest,
                type: typeLocal,
                placeholder: placeholder,
                value: value,
                onBlur: onBlur,
                onFocus: onFocus,
                onChange: onChange,
                // ref={inputRef}
                onInput: onInput
            }) : /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_input_number__WEBPACK_IMPORTED_MODULE_2___default()), {
                    addonAfter: suffix,
                    ...rest,
                    type: typeLocal,
                    placeholder: placeholder,
                    value: value,
                    onBlur: onBlur,
                    onFocus: onFocus,
                    onChange: handleChangeNumber,
                    min: 0,
                    // ref={inputRef}
                    css: _emotion_react__WEBPACK_IMPORTED_MODULE_6__.css`
              &.ant-input-number-group-wrapper {
                width: 100%;
                .ant-input-number {
                  border-color: #cccccc !important;
                }
              }
            `
                })
            }),
            showEye && /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "eyes",
                children: typeLocal === "password" ? /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons_lib_icons__WEBPACK_IMPORTED_MODULE_5__.EyeOutlined, {
                    onClick: ()=>{
                        setTypeLocal("text");
                    }
                }) : /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons_lib_icons__WEBPACK_IMPORTED_MODULE_5__.EyeInvisibleOutlined, {
                    onClick: ()=>{
                        setTypeLocal("password");
                    }
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppInput);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
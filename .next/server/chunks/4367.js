"use strict";
exports.id = 4367;
exports.ids = [4367];
exports.modules = {

/***/ 8801:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7101);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(258);
/* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_fast_compare__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_styles_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1278);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3139);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, _emotion_react__WEBPACK_IMPORTED_MODULE_4__]);
([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, _emotion_react__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable react/prop-types */ /* eslint-disable react/display-name */ 




const ErrorMessage = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().memo(({ children, className })=>{
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: className,
        css: _emotion_react__WEBPACK_IMPORTED_MODULE_4__.css`
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        color: ${src_styles_theme__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.text.errorColor};
        text-align: left;
        margin-top: 5px;
      `,
        children: children
    });
}, (react_fast_compare__WEBPACK_IMPORTED_MODULE_2___default()));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorMessage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5561:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7101);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(675);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_styles_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1278);
/* harmony import */ var _ant_design_icons_lib_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4849);
/* harmony import */ var _ant_design_icons_lib_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3139);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4115);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, _emotion_react__WEBPACK_IMPORTED_MODULE_5__, _emotion_styled__WEBPACK_IMPORTED_MODULE_6__]);
([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, _emotion_react__WEBPACK_IMPORTED_MODULE_5__, _emotion_styled__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const baseStyle = (isFocusing, isEmpty, hasError)=>{
    let isLabelAffected = isFocusing;
    if (!isEmpty) {
        isLabelAffected = true;
    }
    return _emotion_react__WEBPACK_IMPORTED_MODULE_5__.css`
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
      border-color: ${hasError ? src_styles_theme__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.text.errorColor : src_styles_theme__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.text.grayColor}!important;
      height: 100%;
      min-height: 58px;
      border-radius: 3px;
      &:hover {
        border-color: ${src_styles_theme__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.text.blackColor};
      }
      &:focus {
        // border: 1px solid ${src_styles_theme__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.text.blueColor};
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
      min-height: 58px !important;
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
      min-height: 58px !important;
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
        min-height: 58px !important;
      }
    }
    &.email-field {
      input {
        background-color: #fff !important;
        min-height: 58px !important;
      }
    }
    &.password-field {
      input {
        background-color: #fff !important;
        min-height: 58px !important;
      }
    }
    &.firstName-field {
      input {
        background-color: #fff !important;
        min-height: 58px !important;
      }
    }
    &.lastName-field {
      input {
        background-color: #fff !important;
        min-height: 58px !important;
      }
    }
    &.confirm-field {
      input {
        background-color: #fff !important;
        min-height: 58px !important;
      }
    }
    &.name-field {
      input {
        background-color: #fff !important;
        min-height: 58px !important;
      }
    }
    &.market-field {
      input {
        background-color: #fff !important;
        min-height: 58px !important;
      }
    }
    &.dre-field {
      input {
        background-color: #fff !important;
        min-height: 58px !important;
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
        min-height: 58px !important;
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
          border: 1px solid ${src_styles_theme__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.text.blueColor};
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
const CustomInput = (0,_emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"])((antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default()))`
  height: 45px;
  width: 100%;
  border-radius: 5px;
`;
const AppInput = (props)=>{
    const { requiredMark, label, hasError, // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isSubmitting, // eslint-disable-next-line @typescript-eslint/no-unused-vars
    className, isForceFocus, handleChange, handleBlur, handleFocus, onInput, value, showEye, type, placeholder, ...rest } = props;
    // const inputRef = React.useRef(null);
    const [isFocusing, setIsFocusing] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(!!value);
    const [isEmpty, setIsEmpty] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(!value);
    const [typeLocal, setTypeLocal] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(type);
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
        if (e.target.value && e.target.value.length > 0) {
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
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: "s-label",
                children: `${label}${requiredMark ? `*` : ""}`
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomInput, {
                ...rest,
                type: typeLocal,
                placeholder: placeholder,
                value: value,
                onBlur: onBlur,
                onFocus: onFocus,
                onChange: onChange,
                // ref={inputRef}
                onInput: onInput
            }),
            showEye && /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "eyes",
                children: typeLocal === "password" ? /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons_lib_icons__WEBPACK_IMPORTED_MODULE_4__.EyeOutlined, {
                    onClick: ()=>{
                        setTypeLocal("text");
                    }
                }) : /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons_lib_icons__WEBPACK_IMPORTED_MODULE_4__.EyeInvisibleOutlined, {
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
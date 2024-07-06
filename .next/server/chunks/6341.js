"use strict";
exports.id = 6341;
exports.ids = [6341];
exports.modules = {

/***/ 58801:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57101);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20258);
/* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_fast_compare__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_styles_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11278);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53139);
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

/***/ 90768:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export MessageError */
const validation = {
    email: {
        required: "Vui l\xf2ng điền Email.",
        invalid: "Định dạng Email kh\xf4ng hợp lệ.",
        format: "Email n\xe0y đ\xe3 được đăng k\xfd.",
        exist: "Email does not exist/Email has not been registered."
    },
    username: {
        required: "Username is missing.",
        format: "Username is already associated with an existing account.",
        exist: "Username does not exist/Email has not been registered."
    },
    password: {
        required: "Vui l\xf2ng điền mật khẩu.",
        // invalidPwdRegex: 'The password must have a min. of eight characters, at least one letter and one number.',
        invalidPwdRegex: "Mật khẩu phải c\xf3 \xedt nhất 8 k\xfd tự bao gồm chữ v\xe0 số."
    },
    target: {
        required: "Vui l\xf2ng điền th\xf4ng tin."
    },
    homes: {
        required: "Vui l\xf2ng điền th\xf4ng tin."
    },
    farm: {
        required: "Vui l\xf2ng điền th\xf4ng tin."
    },
    interaction: {
        required: "Vui l\xf2ng điền th\xf4ng tin."
    },
    ratio: {
        required: "Vui l\xf2ng điền th\xf4ng tin."
    },
    events: {
        required: "Please select"
    },
    adoption: {
        required: "Please select"
    },
    avatar: {
        required: "Please upload a profile photo"
    },
    frequency: {
        required: "Vui l\xf2ng điền th\xf4ng tin."
    },
    company: {
        required: "Vui l\xf2ng điền th\xf4ng tin."
    },
    mailing: {
        required: "Please enter a mailing list."
    },
    role: {
        required: "Please select a role"
    },
    fullName: {
        required: "Vui l\xf2ng điền th\xf4ng tin",
        trim: "Full Name cannot include leading and trailing spaces.",
        // format: 'Full Name cannot include numeric and special characters.',
        format: "Họ v\xe0 t\xean kh\xf4ng được c\xf3 số v\xe0 k\xed tự đặc biệt."
    },
    firstName: {
        required: "Vui l\xf2ng điền th\xf4ng tin",
        trim: "First Name cannot include leading and trailing spaces.",
        format: "First name cannot include numeric and special characters."
    },
    lastName: {
        required: "Vui l\xf2ng điền th\xf4ng tin",
        trim: "Last Name cannot include leading and trailing spaces.",
        format: "Last name cannot include numeric and special characters."
    },
    confirm: {
        required: "Vui l\xf2ng điền mật khẩu.",
        invalidPwdRegex: "Your account info was entered incorrectly."
    },
    name: {
        required: "Name is missing.",
        NHrequired: "Please enter a mailing list name.",
        ExistingName: "Mailing list name already exists."
    },
    dre: {
        required: "Vui l\xf2ng điền th\xf4ng tin",
        trim: "DRE cannot include leading and trailing spaces.",
        format: "DRE number is already associated with an existing account."
    },
    market: {
        required: "Please select a market.",
        trim: "Market cannot include leading and trailing spaces."
    },
    website: {
        regWeb: /^((http|https):\/\/)?(www.)?(?!.*(http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+(\/)?.([\w?[a-zA-Z-_%/@?]+)*([^/\w?[a-zA-Z0-9_-]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/,
        url: "Your URL is invalid.",
        required: "Vui l\xf2ng điền th\xf4ng tin"
    },
    title: {
        required: "Vui l\xf2ng điền th\xf4ng tin."
    },
    changePassword: {
        required: "Vui l\xf2ng điền th\xf4ng tin."
    },
    confirmPassword: {
        required: "Vui l\xf2ng điền th\xf4ng tin",
        doesNotMatch: "Mật khẩu kh\xf4ng tr\xf9ng khớp."
    },
    address: {
        required: "Vui l\xf2ng điền th\xf4ng tin."
    },
    city: {
        required: "Vui l\xf2ng điền th\xf4ng tin."
    },
    state: {
        required: "Vui l\xf2ng điền th\xf4ng tin."
    },
    zipcode: {
        required: "Vui l\xf2ng điền th\xf4ng tin."
    },
    country: {
        required: "Vui l\xf2ng điền th\xf4ng tin."
    },
    payment: {
        required: "Vui l\xf2ng điền th\xf4ng tin"
    },
    phone: {
        required: "Vui l\xf2ng điền th\xf4ng tin",
        invalid: "Invalid phone number format"
    },
    campaign_target: {
        required: "Please select a target audience."
    },
    campaign_neighborhood: {
        required: "Please select a neighborhood."
    },
    campaign_mailing: {
        required: "Please select a mailing list."
    },
    campaign_interests: {
        required: "Please select an interest."
    },
    campaign_employer: {
        required: "Please select an employer."
    },
    campaign_type: {
        required: "Please select a type."
    },
    campaign_campaigns: {
        required: "Please select a campaign."
    },
    campaign_agent: {
        required: "Please select a agent."
    },
    modal_remove: {
        required: "Please choose a reason to remove the action."
    },
    nft_name: {
        required: "NFT name is required"
    },
    upload_file: {
        required: "Please select a file"
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validation);
const MessageError = {
    error_oops: "Oops! Something went wrong, please try again.",
    all_home_invalid: "Your total homes across all 3 neighborhoods exceeds 3,000",
    shape_invalid: "Some points are overlapping in the shape you drew. Please try again.",
    missing_market: "We do not detect any past transactions in the polygon you drew; this will result in missing market share data in your report. We recommend you redraw your polygon so that it includes one or more pins.",
    agent_not_found: "Agent not found",
    nh_not_found: "Neighborhood not found",
    no_nfts: "There are no campaign NFTs in your wallet",
    no_nfts_matched: "There are no matched campaign NFTs. Please try again"
};


/***/ })

};
;
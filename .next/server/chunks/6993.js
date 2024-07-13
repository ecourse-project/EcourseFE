"use strict";
exports.id = 6993;
exports.ids = [6993];
exports.modules = {

/***/ 19170:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1413);
/* harmony import */ var _ActionIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(59609);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98203);
/* harmony import */ var _components_Spotlight__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(75857);
/* harmony import */ var _ant_design_pro_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61526);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ant_design_pro_editor__WEBPACK_IMPORTED_MODULE_4__, _ActionIcon__WEBPACK_IMPORTED_MODULE_6__]);
([_ant_design_pro_editor__WEBPACK_IMPORTED_MODULE_4__, _ActionIcon__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









var ActionIconGroup = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(function(_ref) {
    var _ref$type = _ref.type, type = _ref$type === void 0 ? "block" : _ref$type, _ref$items = _ref.items, items = _ref$items === void 0 ? [] : _ref$items, placement = _ref.placement, _ref$spotlight = _ref.spotlight, spotlight = _ref$spotlight === void 0 ? false : _ref$spotlight, _ref$direction = _ref.direction, direction = _ref$direction === void 0 ? "row" : _ref$direction, _ref$dropdownMenu = _ref.dropdownMenu, dropdownMenu = _ref$dropdownMenu === void 0 ? null : _ref$dropdownMenu, onActionClick = _ref.onActionClick, className = _ref.className, style = _ref.style;
    var tooltipsPlacement = placement || (direction === "column" ? "right" : "top");
    var mergeDropDownList = dropdownMenu === null || dropdownMenu === void 0 ? void 0 : dropdownMenu.map(function(item) {
        return (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({}, item), {}, {
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_Icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                icon: item.icon,
                size: "small"
            }),
            onClick: onActionClick ? function(info) {
                return onActionClick({
                    item: item,
                    key: info.key,
                    keyPath: info.keyPath
                });
            } : undefined
        });
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_ant_design_pro_editor__WEBPACK_IMPORTED_MODULE_4__/* .ActionGroup */ .W, {
        className: className,
        direction: direction,
        type: type,
        dropdownProps: {
            placement: tooltipsPlacement
        },
        style: style,
        dropdownMenu: mergeDropDownList,
        render: function render() {
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
                children: [
                    spotlight && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_components_Spotlight__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                    (items === null || items === void 0 ? void 0 : items.length) > 0 && items.map(function(item) {
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_ActionIcon__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            icon: item.icon,
                            onClick: onActionClick ? function() {
                                return onActionClick === null || onActionClick === void 0 ? void 0 : onActionClick({
                                    item: item,
                                    key: item.key,
                                    keyPath: [
                                        item.key
                                    ]
                                });
                            } : undefined,
                            placement: tooltipsPlacement,
                            size: "small",
                            title: item.label
                        }, item.key);
                    })
                ]
            });
        }
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActionIconGroup);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 59609:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1413);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91);
/* harmony import */ var modularize_import_loader_name_Loader2_from_default_as_default_join_esm_icons_loader_2_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23217);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98203);
/* harmony import */ var _components_Spotlight__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(75857);
/* harmony import */ var _ant_design_pro_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(67148);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96063);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85893);


var _excluded = [
    "color",
    "fill",
    "className",
    "active",
    "icon",
    "size",
    "style",
    "glass",
    "spotlight",
    "onClick",
    "children",
    "loading",
    "title",
    "placement",
    "arrow",
    "tooltipDelay"
];









var calcSize = function calcSize(size) {
    var blockSize;
    var borderRadius;
    switch(size){
        case "large":
            {
                blockSize = 44;
                borderRadius = 8;
                break;
            }
        case "normal":
            {
                blockSize = 36;
                borderRadius = 5;
                break;
            }
        case "small":
            {
                blockSize = 24;
                borderRadius = 5;
                break;
            }
        case "site":
            {
                blockSize = 34;
                borderRadius = 5;
                break;
            }
        default:
            {
                blockSize = (size === null || size === void 0 ? void 0 : size.blockSize) || 36;
                borderRadius = (size === null || size === void 0 ? void 0 : size.borderRadius) || 5;
                break;
            }
    }
    return {
        blockSize: blockSize,
        borderRadius: borderRadius
    };
};
var ActionIcon = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function(props, ref) {
    var color = props.color, fill = props.fill, className = props.className, active = props.active, icon = props.icon, _props$size = props.size, size = _props$size === void 0 ? "normal" : _props$size, style = props.style, glass = props.glass, spotlight = props.spotlight, onClick = props.onClick, children = props.children, loading = props.loading, title = props.title, placement = props.placement, _props$arrow = props.arrow, arrow = _props$arrow === void 0 ? false : _props$arrow, _props$tooltipDelay = props.tooltipDelay, tooltipDelay = _props$tooltipDelay === void 0 ? 0.5 : _props$tooltipDelay, rest = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(props, _excluded);
    var _useStyles = (0,_style__WEBPACK_IMPORTED_MODULE_3__/* .useStyles */ .y)({
        active: Boolean(active),
        glass: Boolean(glass)
    }), styles = _useStyles.styles, cx = _useStyles.cx;
    var _useMemo = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function() {
        return calcSize(size);
    }, [
        size
    ]), blockSize = _useMemo.blockSize, borderRadius = _useMemo.borderRadius;
    var content = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [
            icon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_Icon__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                color: color,
                fill: fill,
                icon: icon,
                size: size === "site" ? "normal" : size
            }),
            children
        ]
    });
    var spin = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_Icon__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        color: color,
        icon: modularize_import_loader_name_Loader2_from_default_as_default_join_esm_icons_loader_2_lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
        size: size === "site" ? "normal" : size,
        spin: true
    });
    var actionIconBlock = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({
        className: cx(styles.block, className),
        onClick: loading ? undefined : onClick,
        ref: ref,
        style: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({
            borderRadius: borderRadius,
            height: blockSize,
            width: blockSize
        }, style)
    }, rest), {}, {
        children: [
            spotlight && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_components_Spotlight__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
            loading ? spin : content
        ]
    }));
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_ant_design_pro_editor__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({}, rest), {}, {
            arrow: arrow,
            tooltipDelay: tooltipDelay,
            placement: placement,
            title: title,
            icon: actionIconBlock,
            size: blockSize
        }))
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActionIcon);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 96063:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ useStyles)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30168);
/* harmony import */ var antd_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23061);
/* harmony import */ var antd_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_style__WEBPACK_IMPORTED_MODULE_0__);

var _templateObject;

var useStyles = (0,antd_style__WEBPACK_IMPORTED_MODULE_0__.createStyles)(function(_ref, _ref2) {
    var css = _ref.css, stylish = _ref.stylish, cx = _ref.cx;
    var glass = _ref2.glass;
    return {
        block: cx(glass && stylish.blur, css(_templateObject || (_templateObject = (0,_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)([
            "\n          cursor: pointer;\n\n          position: relative;\n\n          display: flex;\n          flex: none;\n          align-items: center;\n          justify-content: center;\n        "
        ]))))
    };
});


/***/ }),

/***/ 11703:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ es_BackBottom)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(86854);
// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__(53800);
var button_default = /*#__PURE__*/__webpack_require__.n(button_);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/list-end.js
var list_end = __webpack_require__(31535);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: ./src/components/prochat/pro-chat/es/Icon/index.js + 1 modules
var Icon = __webpack_require__(98203);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__(30168);
// EXTERNAL MODULE: external "antd-style"
var external_antd_style_ = __webpack_require__(23061);
;// CONCATENATED MODULE: ./src/components/prochat/pro-chat/es/BackBottom/style.js

var _templateObject;

var useStyles = (0,external_antd_style_.createStyles)(function(_ref, visible) {
    var token = _ref.token, css = _ref.css, stylish = _ref.stylish, cx = _ref.cx;
    return cx(stylish.blur, css(_templateObject || (_templateObject = (0,taggedTemplateLiteral/* default */.Z)([
        "\n      pointer-events: ",
        ";\n\n      transform: translateY(",
        ");\n\n      padding-inline: 12px !important;\n\n      opacity: ",
        ";\n      background: ",
        ";\n      border-color: ",
        " !important;\n      border-radius: 16px !important;\n      backdrop-filter: blur(16px);\n    "
    ])), visible ? "all" : "none", visible ? 0 : "16px", visible ? 1 : 0, token.colorFillSecondary, token.colorFillTertiary));
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/components/prochat/pro-chat/es/BackBottom/index.js








var BackBottom = function BackBottom(props) {
    var _ref = props || {}, _ref$visibilityHeight = _ref.visibilityHeight, visibilityHeight = _ref$visibilityHeight === void 0 ? 240 : _ref$visibilityHeight, target = _ref.target, onClick = _ref.onClick, style = _ref.style, className = _ref.className, text = _ref.text, render = _ref.render, onScroll = _ref.onScroll, _ref$alwaysShow = _ref.alwaysShow, alwaysShow = _ref$alwaysShow === void 0 ? false : _ref$alwaysShow;
    var _useState = (0,external_react_.useState)(alwaysShow), _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2), visible = _useState2[0], setVisible = _useState2[1];
    var _useStyles = useStyles(visible), styles = _useStyles.styles, cx = _useStyles.cx;
    var ref = (0,external_react_.useRef)(null);
    var _useState3 = (0,external_react_.useState)(false), _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2), isWindowAvailable = _useState4[0], setIsWindowAvailable = _useState4[1];
    (0,external_react_.useEffect)(function() {
        // 检查window对象是否已经可用
        if (false) {}
    }, []);
    var current = (0,external_react_.useMemo)(function() {
        if (target.current) {
            return target.current;
        }
        return document.body;
    }, [
        isWindowAvailable
    ]);
    var scrollHeight = (current === null || current === void 0 ? void 0 : current.scrollHeight) || 0;
    var clientHeight = (current === null || current === void 0 ? void 0 : current.clientHeight) || 0;
    var _useState5 = (0,external_react_.useState)({
        top: 0,
        left: 0
    }), _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2), scroll = _useState6[0], setScroll = _useState6[1];
    var timeRef = (0,external_react_.useRef)(null);
    (0,external_react_.useEffect)(function() {
        var _current$addEventList;
        if (true) return;
        if (typeof current === "undefined") return;
        var scroll = function scroll(event) {
            onScroll === null || onScroll === void 0 || onScroll(event);
            timeRef.current = window.setTimeout(function() {
                if (!alwaysShow) {
                    setVisible((current === null || current === void 0 ? void 0 : current.scrollTop) + clientHeight + visibilityHeight < scrollHeight);
                }
                setScroll({
                    top: current === null || current === void 0 ? void 0 : current.scrollTop,
                    left: current === null || current === void 0 ? void 0 : current.scrollLeft
                });
            }, 60);
        };
        current === null || current === void 0 || (_current$addEventList = current.addEventListener) === null || _current$addEventList === void 0 || _current$addEventList.call(current, "scroll", scroll, {
            passive: true
        });
        return function() {
            var _current$removeEventL;
            if (timeRef.current) {
                clearTimeout(timeRef.current);
            }
            current === null || current === void 0 || (_current$removeEventL = current.removeEventListener) === null || _current$removeEventL === void 0 || _current$removeEventL.call(current, "scroll", scroll);
        };
    }, [
        current
    ]);
    (0,external_react_.useEffect)(function() {
        if (!alwaysShow) {
            setVisible((scroll === null || scroll === void 0 ? void 0 : scroll.top) + clientHeight + visibilityHeight < scrollHeight);
        }
    }, [
        scrollHeight,
        scroll,
        visibilityHeight,
        current
    ]);
    var scrollToBottom = function scrollToBottom(e) {
        var _current;
        target === null || target === void 0 || (_current = target.current) === null || _current === void 0 || _current.scrollTo({
            behavior: "smooth",
            left: 0,
            top: scrollHeight
        });
        onClick === null || onClick === void 0 || onClick(e);
    };
    /**
   * @description
   * 为了解决在使用了 ProChatProvider 的情况下，BackBottom 无法正常工作的问题
   */ (0,external_react_.useEffect)(function() {
        setTimeout(function() {
            var _current2;
            target === null || target === void 0 || (_current2 = target.current) === null || _current2 === void 0 || _current2.scrollTo({
                behavior: "smooth",
                left: 0,
                top: scrollHeight
            });
        }, 16);
    }, []);
    var defauleDom = /*#__PURE__*/ jsx_runtime.jsx((button_default()), {
        className: cx(styles, className),
        icon: /*#__PURE__*/ jsx_runtime.jsx(Icon/* default */.Z, {
            icon: list_end/* default */.Z
        }),
        onClick: scrollToBottom,
        ref: ref,
        size: "small",
        style: (0,objectSpread2/* default */.Z)({
            bottom: 18,
            position: "absolute",
            right: 16
        }, style),
        children: text || "Back to bottom"
    });
    if (render) return render(defauleDom, scrollToBottom, props);
    return defauleDom;
};
/* harmony default export */ const es_BackBottom = (BackBottom);


/***/ }),

/***/ 72545:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_layout_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82823);
/* harmony import */ var react_layout_kit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_layout_kit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85893);



var Actions = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(function(_ref) {
    var actions = _ref.actions, className = _ref.className;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(react_layout_kit__WEBPACK_IMPORTED_MODULE_1__.Flexbox, {
        align: "flex-start",
        className: className,
        role: "menubar",
        children: actions
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Actions);


/***/ }),

/***/ 31532:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ ChatItem_components_Avatar)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "react-layout-kit"
var external_react_layout_kit_ = __webpack_require__(82823);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(91);
// EXTERNAL MODULE: external "antd/lib/avatar"
var avatar_ = __webpack_require__(45998);
var avatar_default = /*#__PURE__*/__webpack_require__.n(avatar_);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__(30168);
// EXTERNAL MODULE: external "antd-style"
var external_antd_style_ = __webpack_require__(23061);
;// CONCATENATED MODULE: ./src/components/prochat/pro-chat/es/Emoji/style.js

var _templateObject, _templateObject2;

var useStyles = (0,external_antd_style_.createStyles)(function(_ref) {
    var css = _ref.css, token = _ref.token;
    return {
        container: css(_templateObject || (_templateObject = (0,taggedTemplateLiteral/* default */.Z)([
            "\n      position: relative;\n\n      display: flex;\n      align-items: center;\n      justify-content: center;\n\n      line-height: 1;\n      text-align: center;\n    "
        ]))),
        loading: css(_templateObject2 || (_templateObject2 = (0,taggedTemplateLiteral/* default */.Z)([
            "\n      position: absolute;\n      inset: 0;\n\n      display: flex;\n      align-items: center;\n      justify-content: center;\n\n      width: 100%;\n      height: 100%;\n\n      color: ",
            ";\n    "
        ])), token.colorText)
    };
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/components/prochat/pro-chat/es/Emoji/index.js




var Emoji = /*#__PURE__*/ (0,external_react_.memo)(function(_ref) {
    var emoji = _ref.emoji, className = _ref.className, style = _ref.style, _ref$size = _ref.size, size = _ref$size === void 0 ? 40 : _ref$size;
    var _useStyles = useStyles(), cx = _useStyles.cx, styles = _useStyles.styles;
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: cx(styles.container, className),
        style: (0,objectSpread2/* default */.Z)({
            fontSize: size * 0.9,
            height: size,
            width: size
        }, style),
        children: emoji
    });
});
/* harmony default export */ const es_Emoji = (Emoji);

// EXTERNAL MODULE: ./src/components/prochat/pro-chat/node_modules/emoji-regex/index.js
var emoji_regex = __webpack_require__(57694);
var emoji_regex_default = /*#__PURE__*/__webpack_require__.n(emoji_regex);
;// CONCATENATED MODULE: ./src/components/prochat/pro-chat/es/components/Avatar/getEmojiByCharacter.js

var getEmoji = function getEmoji(emoji) {
    var _emoji$match;
    var regex = emoji_regex_default()();
    return (_emoji$match = emoji.match(regex)) === null || _emoji$match === void 0 ? void 0 : _emoji$match[0];
};

// EXTERNAL MODULE: external "polished"
var external_polished_ = __webpack_require__(42042);
;// CONCATENATED MODULE: ./src/components/prochat/pro-chat/es/components/Avatar/style.js

var style_templateObject;


var style_useStyles = (0,external_antd_style_.createStyles)(function(_ref, _ref2) {
    var css = _ref.css, token = _ref.token, prefixCls = _ref.prefixCls;
    var background = _ref2.background, size = _ref2.size, isEmoji = _ref2.isEmoji;
    var backgroundColor = background !== null && background !== void 0 ? background : token.colorBgContainer;
    var color = (0,external_polished_.readableColor)(backgroundColor);
    return {
        avatar: css(style_templateObject || (style_templateObject = (0,taggedTemplateLiteral/* default */.Z)([
            "\n        cursor: pointer;\n\n        display: flex;\n        align-items: center;\n        justify-content: center;\n\n        background: ",
            ";\n        border: 1px solid ",
            ";\n\n        > .",
            "-avatar-string {\n          font-size: ",
            "px;\n          font-weight: 700;\n          line-height: 1 !important;\n          color: ",
            ";\n        }\n\n        > * {\n          cursor: pointer;\n        }\n      "
        ])), backgroundColor, background ? "transparent" : token.colorSplit, prefixCls, size * (isEmoji ? 0.7 : 0.5), color)
    };
});

;// CONCATENATED MODULE: ./src/components/prochat/pro-chat/es/components/Avatar/index.js


var _excluded = [
    "className",
    "avatar",
    "title",
    "size",
    "shape",
    "background",
    "onClick",
    "style"
];






/**
 * @module Avatar
 * @description 头像组件，用于显示用户头像信息
 * @exports Avatar
 * @component
 *
 * @param {string} [avatar] - 头像图片的URL或base64数据
 * @param {string} [background] - 头像的背景颜色
 * @param {'circle' | 'square'} [shape='circle'] - 头像的形状，默认为圆形
 * @param {number} [size=40] - 头像的尺寸（像素）
 * @param {string} [title] - 如果未提供头像，则显示的标题文本
 * @param {string} [className] - 自定义的CSS类名
 * @param {Function} [onClick] - 点击头像时触发的回调函数
 * @param {Object} [style] - 自定义的行内样式
 * @param {Object} [props] - 其他传递给AntAvatar组件的属性
 *
 */ var Avatar = /*#__PURE__*/ (0,external_react_.memo)(function(_ref) {
    var className = _ref.className, avatar = _ref.avatar, title = _ref.title, _ref$size = _ref.size, size = _ref$size === void 0 ? 40 : _ref$size, _ref$shape = _ref.shape, shape = _ref$shape === void 0 ? "circle" : _ref$shape, _ref$background = _ref.background, background = _ref$background === void 0 ? "rgba(0,0,0,0)" : _ref$background, onClick = _ref.onClick, style = _ref.style, props = (0,objectWithoutProperties/* default */.Z)(_ref, _excluded);
    var isImage = Boolean(avatar && [
        "/",
        "http",
        "data:"
    ].some(function(index) {
        return avatar.startsWith(index);
    }));
    var isBase64 = Boolean(avatar === null || avatar === void 0 ? void 0 : avatar.startsWith("data"));
    var emoji = (0,external_react_.useMemo)(function() {
        return avatar && !isImage && getEmoji(avatar);
    }, [
        avatar
    ]);
    var _useStyles = style_useStyles({
        background: background,
        isEmoji: Boolean(emoji),
        size: size
    }), styles = _useStyles.styles, cx = _useStyles.cx;
    var text = String(isImage ? title : avatar);
    var avatarProps = {
        className: cx(styles.avatar, className),
        shape: shape,
        size: size,
        style: onClick ? style : (0,objectSpread2/* default */.Z)({
            cursor: "default"
        }, style)
    };
    return isImage ? /*#__PURE__*/ jsx_runtime.jsx((avatar_default()), (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
        src: isBase64 ? avatar : /*#__PURE__*/ jsx_runtime.jsx("img", {
            src: avatar,
            alt: "avatar"
        })
    }, avatarProps), props)) : /*#__PURE__*/ jsx_runtime.jsx((avatar_default()), (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, avatarProps), props), {}, {
        children: emoji ? /*#__PURE__*/ jsx_runtime.jsx(es_Emoji, {
            emoji: emoji,
            size: size * 0.8
        }) : text === null || text === void 0 ? void 0 : text.toUpperCase().slice(0, 2)
    }));
});
/* harmony default export */ const components_Avatar = (Avatar);

// EXTERNAL MODULE: ./src/components/prochat/pro-chat/es/ChatItem/style.js
var style = __webpack_require__(45590);
// EXTERNAL MODULE: ./src/components/prochat/pro-chat/es/ChatItem/components/Loading.js
var Loading = __webpack_require__(68895);
;// CONCATENATED MODULE: ./src/components/prochat/pro-chat/es/ChatItem/components/Avatar.js







var Avatar_Avatar = /*#__PURE__*/ (0,external_react_.memo)(function(_ref) {
    var loading = _ref.loading, _ref$avatar = _ref.avatar, avatar = _ref$avatar === void 0 ? {} : _ref$avatar, placement = _ref.placement, addon = _ref.addon, onClick = _ref.onClick, _ref$size = _ref.size, size = _ref$size === void 0 ? 40 : _ref$size;
    var _useStyles = (0,style/* useStyles */.y)({
        avatarSize: size
    }), styles = _useStyles.styles;
    var avatarContent = /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: styles.avatarContainer,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(components_Avatar, {
                avatar: avatar.avatar,
                background: avatar.backgroundColor,
                onClick: onClick,
                size: size,
                title: avatar.title
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Loading/* default */.Z, {
                loading: loading,
                placement: placement
            })
        ]
    });
    if (!addon) return avatarContent;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_react_layout_kit_.Flexbox, {
        align: "center",
        className: styles.avatarGroupContainer,
        gap: 8,
        children: [
            avatarContent,
            addon
        ]
    });
});
/* harmony default export */ const ChatItem_components_Avatar = (Avatar_Avatar);


/***/ }),

/***/ 95322:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85893);


var BorderSpacing = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(function(_ref) {
    var borderSpacing = _ref.borderSpacing;
    if (!borderSpacing) return null;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        style: {
            flex: "none",
            width: borderSpacing
        }
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BorderSpacing);


/***/ }),

/***/ 6010:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd_lib_alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27889);
/* harmony import */ var antd_lib_alert__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_alert__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_layout_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82823);
/* harmony import */ var react_layout_kit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_layout_kit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45590);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85893);





var ErrorContent = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function(_ref) {
    var message = _ref.message, placement = _ref.placement;
    var _useStyles = (0,_style__WEBPACK_IMPORTED_MODULE_4__/* .useStyles */ .y)({
        placement: placement
    }), styles = _useStyles.styles;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_layout_kit__WEBPACK_IMPORTED_MODULE_2__.Flexbox, {
        gap: 8,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((antd_lib_alert__WEBPACK_IMPORTED_MODULE_0___default()), {
            className: styles.alert,
            showIcon: true,
            type: "error",
            message: message
        })
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorContent);


/***/ }),

/***/ 68895:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var modularize_import_loader_name_Loader2_from_default_as_default_join_esm_icons_loader_2_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23217);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_layout_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82823);
/* harmony import */ var react_layout_kit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_layout_kit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98203);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45590);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85893);






var Loading = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(function(_ref) {
    var loading = _ref.loading, placement = _ref.placement;
    var _useStyles = (0,_style__WEBPACK_IMPORTED_MODULE_3__/* .useStyles */ .y)({
        placement: placement
    }), styles = _useStyles.styles;
    if (!loading) return null;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(react_layout_kit__WEBPACK_IMPORTED_MODULE_1__.Flexbox, {
        align: "center",
        className: styles.loading,
        justify: "center",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_Icon__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            icon: modularize_import_loader_name_Loader2_from_default_as_default_join_esm_icons_loader_2_lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
            size: {
                fontSize: 12,
                strokeWidth: 3
            },
            spin: true
        })
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loading);


/***/ }),

/***/ 32366:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23061);
/* harmony import */ var antd_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_layout_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82823);
/* harmony import */ var react_layout_kit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_layout_kit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _EditableMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12595);
/* harmony import */ var antd_lib_config_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92616);
/* harmony import */ var antd_lib_config_provider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_config_provider__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45590);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_EditableMessage__WEBPACK_IMPORTED_MODULE_6__]);
_EditableMessage__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








var MessageContent = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function(_ref) {
    var editing = _ref.editing, onChange = _ref.onChange, onEditingChange = _ref.onEditingChange, className = _ref.className, text = _ref.text, message = _ref.message, placement = _ref.placement, messageExtra = _ref.messageExtra, renderMessage = _ref.renderMessage, markdownProps = _ref.markdownProps, type = _ref.type, primary = _ref.primary, onDoubleClick = _ref.onDoubleClick;
    var _useStyles = (0,_style__WEBPACK_IMPORTED_MODULE_5__/* .useStyles */ .y)({
        editing: editing,
        placement: placement,
        primary: primary,
        type: type
    }), cx = _useStyles.cx, styles = _useStyles.styles;
    var _useResponsive = (0,antd_style__WEBPACK_IMPORTED_MODULE_0__.useResponsive)(), mobile = _useResponsive.mobile;
    var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)((antd_lib_config_provider__WEBPACK_IMPORTED_MODULE_3___default().ConfigContext)), getPrefixCls = _useContext.getPrefixCls;
    var prefixClass = getPrefixCls("pro-chat");
    var content = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_EditableMessage__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        classNames: {
            input: styles.editingInput
        },
        editButtonSize: "small",
        editing: editing,
        fullFeaturedCodeBlock: true,
        onChange: onChange,
        onEditingChange: onEditingChange,
        openModal: mobile ? editing : undefined,
        text: text,
        value: String(message || "..."),
        markdownProps: markdownProps
    });
    var messageContent = renderMessage ? renderMessage(content) : content;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_layout_kit__WEBPACK_IMPORTED_MODULE_2__.Flexbox, {
        className: cx(styles.message, className, editing && styles.editingContainer),
        onDoubleClick: onDoubleClick,
        children: [
            messageContent,
            messageExtra && !editing ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                className: "".concat(cx(styles.messageExtra, "".concat(prefixClass, "-message-extra"))),
                children: messageExtra
            }) : null
        ]
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MessageContent);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 41294:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ components_Title)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "react-layout-kit"
var external_react_layout_kit_ = __webpack_require__(82823);
// EXTERNAL MODULE: external "dayjs"
var external_dayjs_ = __webpack_require__(1635);
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_);
;// CONCATENATED MODULE: ./src/components/prochat/pro-chat/es/ChatItem/utils/formatTime.js

var formatTime = function formatTime(time) {
    if (typeof process !== "undefined" && "production" === "TEST") {}
    var now = external_dayjs_default()();
    var target = external_dayjs_default()(time);
    if (target.isSame(now, "day")) {
        return target.format("HH:mm:ss");
    } else if (target.isSame(now, "year")) {
        return target.format("MM-DD HH:mm:ss");
    } else {
        return target.format("YYYY-MM-DD HH:mm:ss");
    }
};

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/components/prochat/pro-chat/es/ChatItem/components/Title.js





var Title = /*#__PURE__*/ (0,external_react_.memo)(function(_ref) {
    var showTitle = _ref.showTitle, className = _ref.className, placement = _ref.placement, time = _ref.time, avatar = _ref.avatar;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_react_layout_kit_.Flexbox, {
        className: className,
        direction: placement === "left" ? "horizontal" : "horizontal-reverse",
        gap: 4,
        children: [
            showTitle ? avatar.title || "untitled" : undefined,
            time && /*#__PURE__*/ jsx_runtime.jsx("time", {
                children: formatTime(time)
            })
        ]
    });
});
/* harmony default export */ const components_Title = (Title);


/***/ }),

/***/ 33891:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1413);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(91);
/* harmony import */ var antd_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23061);
/* harmony import */ var antd_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_layout_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82823);
/* harmony import */ var react_layout_kit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_layout_kit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_config_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92616);
/* harmony import */ var antd_lib_config_provider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_config_provider__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(72545);
/* harmony import */ var _components_Avatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(31532);
/* harmony import */ var _components_BorderSpacing__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(95322);
/* harmony import */ var _components_ErrorContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6010);
/* harmony import */ var _components_MessageContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(32366);
/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(41294);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45590);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_MessageContent__WEBPACK_IMPORTED_MODULE_9__]);
_components_MessageContent__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


var _excluded = [
    "avatarAddon",
    "onAvatarClick",
    "actions",
    "className",
    "primary",
    "loading",
    "message",
    "placement",
    "type",
    "avatar",
    "error",
    "showTitle",
    "time",
    "editing",
    "onChange",
    "onEditingChange",
    "messageExtra",
    "renderMessage",
    "text",
    "chatItemRenderConfig",
    "renderErrorMessages",
    "markdownProps",
    "onDoubleClick",
    "originData"
];













var MOBILE_AVATAR_SIZE = 32;
var ChatItem = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function(props) {
    var _chatItemRenderConfig5;
    var avatarAddon = props.avatarAddon, onAvatarClick = props.onAvatarClick, actions = props.actions, className = props.className, primary = props.primary, loading = props.loading, message = props.message, _props$placement = props.placement, placement = _props$placement === void 0 ? "left" : _props$placement, _props$type = props.type, type = _props$type === void 0 ? "block" : _props$type, avatar = props.avatar, error = props.error, showTitle = props.showTitle, time = props.time, editing = props.editing, onChange = props.onChange, onEditingChange = props.onEditingChange, messageExtra = props.messageExtra, renderMessage = props.renderMessage, text = props.text, chatItemRenderConfig = props.chatItemRenderConfig, renderErrorMessages = props.renderErrorMessages, markdownProps = props.markdownProps, onDoubleClick = props.onDoubleClick, originData = props.originData, restProps = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(props, _excluded);
    var _useResponsive = (0,antd_style__WEBPACK_IMPORTED_MODULE_0__.useResponsive)(), mobile = _useResponsive.mobile;
    var _useStyles = (0,_style__WEBPACK_IMPORTED_MODULE_6__/* .useStyles */ .y)({
        editing: editing,
        placement: placement,
        primary: primary,
        showTitle: showTitle,
        title: avatar.title,
        type: type
    }), cx = _useStyles.cx, styles = _useStyles.styles;
    var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)((antd_lib_config_provider__WEBPACK_IMPORTED_MODULE_3___default().ConfigContext)), getPrefixCls = _useContext.getPrefixCls;
    var prefixClass = getPrefixCls("pro-chat");
    var errorMessage = error === null || error === void 0 ? void 0 : error.message;
    var avatarDom = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function() {
        var _chatItemRenderConfig;
        if ((chatItemRenderConfig === null || chatItemRenderConfig === void 0 ? void 0 : chatItemRenderConfig.avatarRender) === false) return null;
        var dom = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_Avatar__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            addon: avatarAddon,
            avatar: avatar,
            loading: loading,
            onClick: onAvatarClick,
            placement: placement,
            size: mobile ? MOBILE_AVATAR_SIZE : undefined
        });
        return (chatItemRenderConfig === null || chatItemRenderConfig === void 0 || (_chatItemRenderConfig = chatItemRenderConfig.avatarRender) === null || _chatItemRenderConfig === void 0 ? void 0 : _chatItemRenderConfig.call(chatItemRenderConfig, props, dom)) || dom;
    }, [
        avatar,
        placement,
        mobile,
        loading
    ]);
    var messageContentDom = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function() {
        var _chatItemRenderConfig2;
        if ((chatItemRenderConfig === null || chatItemRenderConfig === void 0 ? void 0 : chatItemRenderConfig.contentRender) === false) return null;
        var dom = error ? renderErrorMessages ? renderErrorMessages(error) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_ErrorContent__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            message: errorMessage,
            placement: placement
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_MessageContent__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            editing: editing,
            message: message,
            className: "".concat(prefixClass, "-list-item-message-content"),
            messageExtra: messageExtra,
            onChange: onChange,
            onDoubleClick: onDoubleClick,
            onEditingChange: onEditingChange,
            placement: placement,
            primary: primary,
            renderMessage: renderMessage,
            text: text,
            type: type,
            markdownProps: markdownProps
        });
        return (chatItemRenderConfig === null || chatItemRenderConfig === void 0 || (_chatItemRenderConfig2 = chatItemRenderConfig.contentRender) === null || _chatItemRenderConfig2 === void 0 ? void 0 : _chatItemRenderConfig2.call(chatItemRenderConfig, props, dom)) || dom;
    }, [
        error,
        message,
        messageExtra,
        renderMessage,
        placement,
        primary,
        text,
        type,
        editing,
        errorMessage,
        originData
    ]);
    var actionsDom = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function() {
        var _chatItemRenderConfig3;
        if ((chatItemRenderConfig === null || chatItemRenderConfig === void 0 ? void 0 : chatItemRenderConfig.actionsRender) === false) return null;
        if (error) return null;
        var dom = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_Actions__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
            actions: actions,
            className: "".concat(cx(styles.actions, "".concat(prefixClass, "-list-item-actions")))
        });
        return (chatItemRenderConfig === null || chatItemRenderConfig === void 0 || (_chatItemRenderConfig3 = chatItemRenderConfig.actionsRender) === null || _chatItemRenderConfig3 === void 0 ? void 0 : _chatItemRenderConfig3.call(chatItemRenderConfig, props, dom)) || dom;
    }, [
        actions
    ]);
    var titleDom = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function() {
        var _chatItemRenderConfig4;
        if ((chatItemRenderConfig === null || chatItemRenderConfig === void 0 ? void 0 : chatItemRenderConfig.titleRender) === false) return null;
        var dom = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_Title__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
            className: "".concat(cx(styles.name, "".concat(prefixClass, "-list-item-title"))),
            avatar: avatar,
            placement: placement,
            showTitle: showTitle,
            time: time
        });
        return (chatItemRenderConfig === null || chatItemRenderConfig === void 0 || (_chatItemRenderConfig4 = chatItemRenderConfig.titleRender) === null || _chatItemRenderConfig4 === void 0 ? void 0 : _chatItemRenderConfig4.call(chatItemRenderConfig, props, dom)) || dom;
    }, [
        time,
        avatar
    ]);
    if ((chatItemRenderConfig === null || chatItemRenderConfig === void 0 ? void 0 : chatItemRenderConfig.render) === false) return null;
    var itemDom = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_layout_kit__WEBPACK_IMPORTED_MODULE_2__.Flexbox, (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)({
        className: cx(styles.container, "".concat(prefixClass, "-list-item"), "".concat(prefixClass, "-list-item-").concat(placement), className),
        direction: placement === "left" ? "horizontal" : "horizontal-reverse",
        gap: mobile ? 6 : 12
    }, restProps), {}, {
        children: [
            avatarDom,
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_layout_kit__WEBPACK_IMPORTED_MODULE_2__.Flexbox, {
                align: placement === "left" ? "flex-start" : "flex-end",
                className: cx(styles.messageContainer, "".concat(prefixClass, "-list-item-message-container")),
                children: [
                    titleDom,
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_layout_kit__WEBPACK_IMPORTED_MODULE_2__.Flexbox, {
                        align: placement === "left" ? "flex-start" : "flex-end",
                        className: cx(styles.messageContent, "".concat(prefixClass, "-message-content")),
                        direction: type === "block" ? placement === "left" ? "horizontal" : "horizontal-reverse" : "vertical",
                        gap: 8,
                        children: [
                            messageContentDom,
                            actionsDom
                        ]
                    })
                ]
            }),
            mobile && type === "block" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_BorderSpacing__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                borderSpacing: MOBILE_AVATAR_SIZE
            })
        ]
    }));
    return (chatItemRenderConfig === null || chatItemRenderConfig === void 0 || (_chatItemRenderConfig5 = chatItemRenderConfig.render) === null || _chatItemRenderConfig5 === void 0 ? void 0 : _chatItemRenderConfig5.call(chatItemRenderConfig, props, {
        avatar: avatarDom,
        messageContent: messageContentDom,
        actions: actionsDom,
        title: titleDom,
        itemDom: itemDom
    }, itemDom)) || itemDom;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatItem);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 45590:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ useStyles)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30168);
/* harmony import */ var antd_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23061);
/* harmony import */ var antd_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_style__WEBPACK_IMPORTED_MODULE_0__);

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19;

var useStyles = (0,antd_style__WEBPACK_IMPORTED_MODULE_0__.createStyles)(function(_ref, _ref2) {
    var cx = _ref.cx, css = _ref.css, token = _ref.token, isDarkMode = _ref.isDarkMode, responsive = _ref.responsive;
    var placement = _ref2.placement, type = _ref2.type, title = _ref2.title, primary = _ref2.primary, avatarSize = _ref2.avatarSize, showTitle = _ref2.showTitle, editing = _ref2.editing;
    var blockStylish = css(_templateObject || (_templateObject = (0,_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)([
        "\n      padding: 8px 12px;\n      background-color: ",
        ";\n      border-radius: ",
        "px;\n      transition: background-color 100ms ",
        ";\n    "
    ])), primary ? isDarkMode ? token.colorFill : token.colorBgElevated : isDarkMode ? token.colorFillSecondary : token.colorBgContainer, token.borderRadiusLG, token.motionEaseOut);
    var pureStylish = css(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)([
        "\n      padding-top: ",
        ";\n    "
    ])), title ? 0 : "6px");
    var pureContainerStylish = css(_templateObject3 || (_templateObject3 = (0,_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)([
        "\n      margin-bottom: -16px;\n      transition: background-color 100ms ",
        ";\n    "
    ])), token.motionEaseOut);
    var typeStylish = type === "block" ? blockStylish : pureStylish;
    var editingStylish = editing && css(_templateObject4 || (_templateObject4 = (0,_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)([
        "\n        width: 100%;\n      "
    ])));
    return {
        actions: cx(css(_templateObject5 || (_templateObject5 = (0,_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)([
            "\n          align-self: ",
            ";\n          justify-content: ",
            ";\n        "
        ])), type === "block" ? "flex-end" : placement === "left" ? "flex-start" : "flex-end", placement === "left" ? "flex-end" : "flex-start"), editing && css(_templateObject6 || (_templateObject6 = (0,_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)([
            "\n            pointer-events: none !important;\n            opacity: 0 !important;\n          "
        ])))),
        alert: css(_templateObject7 || (_templateObject7 = (0,_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)([
            ""
        ]))),
        avatarContainer: css(_templateObject8 || (_templateObject8 = (0,_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)([
            "\n        position: relative;\n        flex: none;\n        width: ",
            "px;\n        height: ",
            "px;\n      "
        ])), avatarSize, avatarSize),
        avatarGroupContainer: css(_templateObject9 || (_templateObject9 = (0,_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)([
            "\n        width: ",
            "px;\n      "
        ])), avatarSize),
        container: cx(type === "pure" && pureContainerStylish, css(_templateObject10 || (_templateObject10 = (0,_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)([
            "\n          position: relative;\n          width: 100%;\n          max-width: 100vw;\n          padding: 16px;\n          content-visibility: auto;\n          contain-intrinsic-size: 100px;\n          time {\n            display: inline-block;\n            white-space: nowrap;\n          }\n\n          div[role='menubar'] {\n            display: flex;\n          }\n\n          time,\n          div[role='menubar'] {\n            pointer-events: none;\n            opacity: 0;\n            transition: opacity 200ms ",
            ";\n          }\n\n          &:hover {\n            time,\n            div[role='menubar'] {\n              pointer-events: unset;\n              opacity: 1;\n            }\n          }\n\n          ",
            " {\n            padding: 4px 16px;\n          }\n        "
        ])), token.motionEaseOut, responsive.mobile)),
        editingContainer: cx(editingStylish, css(_templateObject11 || (_templateObject11 = (0,_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)([
            "\n          padding: 8px 12px 12px;\n          border: 1px solid ",
            ";\n\n          &:active,\n          &:hover {\n            border-color: ",
            ";\n          }\n        "
        ])), token.colorBorderSecondary, token.colorBorder), type === "pure" && css(_templateObject12 || (_templateObject12 = (0,_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)([
            "\n            background: ",
            ";\n            border-radius: ",
            "px;\n          "
        ])), token.colorFillQuaternary, token.borderRadius)),
        editingInput: css(_templateObject13 || (_templateObject13 = (0,_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)([
            "\n        width: 100%;\n      "
        ]))),
        loading: css(_templateObject14 || (_templateObject14 = (0,_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)([
            "\n        position: absolute;\n        right: ",
            ";\n        bottom: 0;\n        left: ",
            ";\n\n        width: 16px;\n        height: 16px;\n\n        color: ",
            ";\n\n        background: ",
            ";\n        border-radius: 50%;\n      "
        ])), placement === "left" ? "-4px" : "unset", placement === "right" ? "-4px" : "unset", token.colorBgLayout, token.colorPrimary),
        message: cx(typeStylish, css(_templateObject15 || (_templateObject15 = (0,_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)([
            "\n          position: relative;\n        "
        ])))),
        messageContainer: cx(editingStylish, css(_templateObject16 || (_templateObject16 = (0,_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)([
            "\n          position: relative;\n        "
        ])))),
        messageContent: cx(editingStylish, css(_templateObject17 || (_templateObject17 = (0,_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)([
            "\n          position: relative;\n          overflow-x: hidden;\n\n          ",
            " {\n            flex-direction: column !important;\n          }\n        "
        ])), responsive.mobile)),
        messageExtra: css(_templateObject18 || (_templateObject18 = (0,_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)([
            ""
        ]))),
        name: css(_templateObject19 || (_templateObject19 = (0,_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)([
            "\n        position: ",
            ";\n        top: ",
            ";\n        right: ",
            ";\n        left: ",
            ";\n\n        margin-bottom: 6px;\n\n        font-size: 12px;\n        line-height: 1;\n        color: ",
            ";\n        text-align: ",
            ";\n      "
        ])), showTitle ? "relative" : "absolute", showTitle ? "unset" : "-16px", placement === "right" ? "0" : "unset", placement === "left" ? "0" : "unset", token.colorTextDescription, placement === "left" ? "left" : "right")
    };
});


/***/ }),

/***/ 14507:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1413);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ActionIconGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19170);
/* harmony import */ var _hooks_useChatListActionsBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15797);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ActionIconGroup__WEBPACK_IMPORTED_MODULE_4__]);
_ActionIconGroup__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


var _excluded = [
    "text"
];



/**
 * ActionsBar组件的属性类型定义
 */ 
/**
 * ActionsBar 组件
 * 用于渲染操作按钮组。
 */ var ActionsBar = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(function(_ref) {
    var text = _ref.text, rest = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref, _excluded);
    var _useChatListActionsBa = (0,_hooks_useChatListActionsBar__WEBPACK_IMPORTED_MODULE_3__/* .useChatListActionsBar */ .$)(text), regenerate = _useChatListActionsBa.regenerate, edit = _useChatListActionsBa.edit, copy = _useChatListActionsBa.copy, divider = _useChatListActionsBa.divider, del = _useChatListActionsBa.del;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_ActionIconGroup__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({
        dropdownMenu: [
            edit,
            copy,
            regenerate,
            divider,
            del
        ],
        items: [
            regenerate,
            edit
        ],
        type: "ghost"
    }, rest));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActionsBar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 59403:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1413);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(86854);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91);
/* harmony import */ var antd_lib_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80305);
/* harmony import */ var antd_lib_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68887);
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ChatItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(33891);
/* harmony import */ var _ProChat_hooks_useRefFunction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36567);
/* harmony import */ var _ActionsBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14507);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ActionsBar__WEBPACK_IMPORTED_MODULE_8__, _ChatItem__WEBPACK_IMPORTED_MODULE_9__]);
([_ActionsBar__WEBPACK_IMPORTED_MODULE_8__, _ChatItem__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



var _excluded = [
    "renderMessagesExtra",
    "showTitle",
    "onActionsClick",
    "onMessageChange",
    "originData",
    "type",
    "text",
    "renderMessages",
    "renderErrorMessages",
    "renderActions",
    "loading",
    "groupNav",
    "renderItems",
    "chatItemRenderConfig",
    "chatItemClassName",
    "markdownProps"
];






/**
 * 聊天列表项的属性。
 * @template T 聊天列表项的额外数据类型。
 */ /**
 * 聊天列表项的属性。
 * @template T 聊天列表项的额外数据类型。
 */ 
/**
 * 聊天列表项组件。
 * @param props 组件属性。
 * @returns 聊天列表项组件。
 */ var ChatListItem = function ChatListItem(props) {
    var renderMessagesExtra = props.renderMessagesExtra, showTitle = props.showTitle, onActionsClick = props.onActionsClick, onMessageChange = props.onMessageChange, originData = props.originData, type = props.type, text = props.text, renderMessages = props.renderMessages, renderErrorMessages = props.renderErrorMessages, renderActions = props.renderActions, loading = props.loading, groupNav = props.groupNav, renderItems = props.renderItems, chatItemRenderConfig = props.chatItemRenderConfig, chatItemClassName = props.chatItemClassName, markdownProps = props.markdownProps, item = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(props, _excluded);
    var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), _useState2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(_useState, 2), editing = _useState2[0], setEditing = _useState2[1];
    var _App$useApp = antd_lib_app__WEBPACK_IMPORTED_MODULE_0___default().useApp(), message = _App$useApp.message;
    /**
   * 渲染列表项的函数。
   * @returns 渲染列表项的函数。
   */ var RenderItem = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function() {
        if (!renderItems || !(item !== null && item !== void 0 && item.role)) return;
        var renderFunction;
        if (renderItems !== null && renderItems !== void 0 && renderItems[item.role]) renderFunction = renderItems[item.role];
        if (!renderFunction && renderItems !== null && renderItems !== void 0 && renderItems["default"]) renderFunction = renderItems["default"];
        if (!renderFunction) return;
        return renderFunction;
    }, [
        renderItems === null || renderItems === void 0 ? void 0 : renderItems[item.role]
    ]);
    /**
   * 渲染消息的函数。
   * @param editableContent 可编辑的内容。
   * @param data 聊天消息的数据。
   * @returns 渲染消息的组件。
   */ var RenderMessage = (0,_ProChat_hooks_useRefFunction__WEBPACK_IMPORTED_MODULE_6__/* .useRefFunction */ .J)(function(_ref) {
        var editableContent = _ref.editableContent, data = _ref.data;
        if (!renderMessages || !(item !== null && item !== void 0 && item.role)) return;
        var RenderFunction;
        if (renderMessages !== null && renderMessages !== void 0 && renderMessages[item.role]) RenderFunction = renderMessages[item.role];
        if (!RenderFunction && renderMessages !== null && renderMessages !== void 0 && renderMessages["default"]) RenderFunction = renderMessages["default"];
        if (!RenderFunction) return;
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(RenderFunction, (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)({}, data), {}, {
            editableContent: editableContent
        }));
    });
    /**
   * 渲染消息额外内容的函数。
   * @param data 聊天消息的数据。
   * @returns 渲染消息额外内容的组件。
   */ var MessageExtra = (0,_ProChat_hooks_useRefFunction__WEBPACK_IMPORTED_MODULE_6__/* .useRefFunction */ .J)(function(_ref2) {
        var data = _ref2.data;
        if (!renderMessagesExtra || !(item !== null && item !== void 0 && item.role)) return;
        var RenderFunction;
        if (renderMessagesExtra !== null && renderMessagesExtra !== void 0 && renderMessagesExtra[item.role]) RenderFunction = renderMessagesExtra[item.role];
        if (renderMessagesExtra !== null && renderMessagesExtra !== void 0 && renderMessagesExtra["default"]) RenderFunction = renderMessagesExtra["default"];
        if (!RenderFunction && !RenderFunction) return;
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(RenderFunction, (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)({}, data));
    });
    /**
   * 渲染操作按钮的函数。
   * @param data 聊天消息的数据。
   * @returns 渲染操作按钮的组件。
   */ var Actions = (0,_ProChat_hooks_useRefFunction__WEBPACK_IMPORTED_MODULE_6__/* .useRefFunction */ .J)(function(_ref3) {
        var data = _ref3.data;
        if (!renderActions || !(item !== null && item !== void 0 && item.role)) return;
        var RenderFunction;
        if (renderActions !== null && renderActions !== void 0 && renderActions[item.role]) RenderFunction = renderActions[item.role];
        if (renderActions !== null && renderActions !== void 0 && renderActions["default"]) RenderFunction = renderActions["default"];
        if (!RenderFunction) RenderFunction = _ActionsBar__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z;
        var handleActionClick = function handleActionClick(action, data) {
            switch(action.key){
                case "copy":
                    {
                        copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1___default()(data.content);
                        message.success((text === null || text === void 0 ? void 0 : text.copySuccess) || "Copy Success");
                        break;
                    }
                case "edit":
                    {
                        setEditing(true);
                    }
            }
            onActionsClick === null || onActionsClick === void 0 || onActionsClick(action, data);
        };
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(RenderFunction, (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)({}, data), {}, {
            onActionClick: function onActionClick(actionKey) {
                return handleActionClick === null || handleActionClick === void 0 ? void 0 : handleActionClick(actionKey, data);
            },
            text: text
        }));
    });
    /**
   * 错误信息。
   * @returns 错误信息对象。
   */ var error = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function() {
        if (!item.error) return;
        return item.error;
    }, [
        item.error
    ]);
    /**
   * @description memoize the chat item
   */ var memoItem = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function() {
        var dom = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_ChatItem__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            className: chatItemClassName,
            "data-id": item.id,
            actions: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(Actions, {
                data: item
            }),
            avatar: item.meta,
            avatarAddon: groupNav,
            editing: editing,
            originData: originData,
            error: error,
            renderErrorMessages: renderErrorMessages,
            loading: loading,
            message: item.content,
            messageExtra: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(MessageExtra, {
                data: item
            }),
            onChange: function onChange(value) {
                return onMessageChange === null || onMessageChange === void 0 ? void 0 : onMessageChange(item.id, value);
            },
            onDoubleClick: function onDoubleClick(e) {
                if (item.id === "default" || item.error) return;
                if (item.role && [
                    "assistant",
                    "user"
                ].includes(item.role) && e.altKey) {
                    setEditing(true);
                }
            },
            onEditingChange: setEditing,
            placement: type === "chat" ? item.role === "user" ? "right" : "left" : "left",
            primary: item.role === "user",
            renderMessage: function renderMessage(editableContent) {
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(RenderMessage, {
                    data: item,
                    editableContent: editableContent
                });
            },
            showTitle: showTitle,
            text: text,
            time: item.updateAt || item.createAt,
            type: type === "chat" ? "block" : "pure",
            chatItemRenderConfig: chatItemRenderConfig,
            markdownProps: markdownProps
        });
        return dom;
    }, [
        props.content,
        props.loading,
        props.id,
        item.meta,
        item.error,
        item.updateAt || item.createAt,
        editing
    ]);
    if (RenderItem) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(RenderItem, (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)({}, props), item.id);
    return memoItem;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatListItem);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 53546:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2278);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var modularize_import_loader_name_Timer_from_default_as_default_join_esm_icons_timer_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43777);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98203);
/* harmony import */ var _components_Tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93391);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85893);





/**
 * 历史记录分割线组件的属性。
 */ 
/**
 * 历史记录分割线组件。
 */ var HistoryDivider = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function(_ref) {
    var enable = _ref.enable, text = _ref.text;
    if (!enable) return null;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        style: {
            padding: "0 20px"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((antd_lib_divider__WEBPACK_IMPORTED_MODULE_0___default()), {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_components_Tag__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_Icon__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    icon: modularize_import_loader_name_Timer_from_default_as_default_join_esm_icons_timer_lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z
                }),
                children: text || "History Message"
            })
        })
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HistoryDivider);


/***/ }),

/***/ 91650:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15671);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43144);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32531);
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93450);
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12404);
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);






/**
 * 组件用于判断是否需要更新的辅助类。
 */ var ShouldUpdateItem = /*#__PURE__*/ function(_Component) {
    (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(ShouldUpdateItem, _Component);
    var _super = (0,_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(ShouldUpdateItem);
    function ShouldUpdateItem() {
        (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(this, ShouldUpdateItem);
        return _super.apply(this, arguments);
    }
    (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(ShouldUpdateItem, [
        {
            key: "shouldComponentUpdate",
            value: /**
     * 判断组件是否需要更新。
     * @param nextProps - 下一个属性对象。
     * @returns 如果需要更新则返回 true，否则返回 false。
     */ function shouldComponentUpdate(nextProps) {
                if (nextProps.shouldUpdate) {
                    return nextProps.shouldUpdate(this.props, nextProps);
                }
                try {
                    return !fast_deep_equal__WEBPACK_IMPORTED_MODULE_0___default()(this.props.content, nextProps === null || nextProps === void 0 ? void 0 : nextProps.content) || !fast_deep_equal__WEBPACK_IMPORTED_MODULE_0___default()(this.props.loading, nextProps === null || nextProps === void 0 ? void 0 : nextProps.loading) || !fast_deep_equal__WEBPACK_IMPORTED_MODULE_0___default()(this.props.chatItemRenderConfig, nextProps === null || nextProps === void 0 ? void 0 : nextProps.chatItemRenderConfig) || !fast_deep_equal__WEBPACK_IMPORTED_MODULE_0___default()(this.props.meta, nextProps === null || nextProps === void 0 ? void 0 : nextProps.meta);
                } catch (error) {
                    return true;
                }
            }
        },
        {
            key: "render",
            value: function render() {
                return this.props.children;
            }
        }
    ]);
    return ShouldUpdateItem;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShouldUpdateItem);


/***/ }),

/***/ 47984:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1413);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_config_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92616);
/* harmony import */ var antd_lib_config_provider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_config_provider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ChatListItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(59403);
/* harmony import */ var _HistoryDivider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(53546);
/* harmony import */ var _ShouldUpdateItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(91650);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93538);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ChatListItem__WEBPACK_IMPORTED_MODULE_8__]);
_ChatListItem__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


var _excluded = [
    "onActionsClick",
    "renderMessagesExtra",
    "className",
    "data",
    "type",
    "text",
    "showTitle",
    "itemShouldUpdate",
    "onMessageChange",
    "renderMessages",
    "renderErrorMessages",
    "loadingId",
    "renderItems",
    "enableHistoryCount",
    "renderActions",
    "historyCount",
    "chatItemRenderConfig",
    "markdownProps"
];








/**
 * ChatList组件用于显示聊天列表。
 *
 * @component
 * @param {Object} props - 组件属性
 * @param {Function} props.onActionsClick - 点击操作按钮时的回调函数
 * @param {Function} props.renderMessagesExtra - 渲染额外的消息内容的回调函数
 * @param {string} props.className - 自定义类名
 * @param {Array} props.data - 聊天数据数组
 * @param {string} [props.type='chat'] - 聊天类型，默认为'chat'
 * @param {string} props.text - 文本内容
 * @param {boolean} props.showTitle - 是否显示标题
 * @param {Function} props.itemShouldUpdate - 判断聊天项是否需要更新的回调函数
 * @param {Function} props.onMessageChange - 消息内容变化时的回调函数
 * @param {Function} props.renderMessages - 渲染消息内容的回调函数
 * @param {Function} props.renderErrorMessages - 渲染错误消息的回调函数
 * @param {string} props.loadingId - 正在加载的聊天项的ID
 * @param {Function} props.renderItems - 渲染聊天项的回调函数
 * @param {boolean} props.enableHistoryCount - 是否启用历史记录计数
 * @param {Function} props.renderActions - 渲染操作按钮的回调函数
 * @param {number} [props.historyCount=0] - 历史记录计数
 * @param {Object} props.chatItemRenderConfig - 聊天项渲染配置
 * @returns {JSX.Element} 聊天列表组件
 */ var ChatList = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(function(_ref) {
    var onActionsClick = _ref.onActionsClick, renderMessagesExtra = _ref.renderMessagesExtra, className = _ref.className, data = _ref.data, _ref$type = _ref.type, type = _ref$type === void 0 ? "chat" : _ref$type, text = _ref.text, showTitle = _ref.showTitle, itemShouldUpdate = _ref.itemShouldUpdate, onMessageChange = _ref.onMessageChange, renderMessages = _ref.renderMessages, renderErrorMessages = _ref.renderErrorMessages, loadingId = _ref.loadingId, renderItems = _ref.renderItems, enableHistoryCount = _ref.enableHistoryCount, renderActions = _ref.renderActions, _ref$historyCount = _ref.historyCount, historyCount = _ref$historyCount === void 0 ? 0 : _ref$historyCount, chatItemRenderConfig = _ref.chatItemRenderConfig, markdownProps = _ref.markdownProps, props = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(_ref, _excluded);
    var _useStyles = (0,_style__WEBPACK_IMPORTED_MODULE_4__/* .useStyles */ .y)(), cx = _useStyles.cx, styles = _useStyles.styles;
    var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)((antd_lib_config_provider__WEBPACK_IMPORTED_MODULE_1___default().ConfigContext)), getPrefixCls = _useContext.getPrefixCls;
    var prefixClass = getPrefixCls("pro-chat");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({
        className: cx(styles.container, "".concat(prefixClass, "-list"), className)
    }, props), {}, {
        children: data.map(function(item, index) {
            var itemProps = {
                loading: loadingId === item.id,
                onActionsClick: onActionsClick,
                onMessageChange: onMessageChange,
                renderActions: renderActions,
                renderErrorMessages: renderErrorMessages,
                renderItems: renderItems,
                renderMessages: renderMessages,
                renderMessagesExtra: renderMessagesExtra,
                showTitle: showTitle,
                text: text,
                type: type
            };
            var historyLength = data.length;
            var enableHistoryDivider = enableHistoryCount && historyLength > historyCount && historyCount === historyLength - index + 1;
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_ShouldUpdateItem__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({}, itemProps), item), {}, {
                shouldUpdate: itemShouldUpdate,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_HistoryDivider__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            enable: enableHistoryDivider,
                            text: text === null || text === void 0 ? void 0 : text.history
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_ChatListItem__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({}, itemProps), item), {}, {
                            originData: item,
                            chatItemRenderConfig: chatItemRenderConfig,
                            markdownProps: markdownProps
                        }))
                    ]
                })
            }), item.id);
        })
    }));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatList);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 93538:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ useStyles)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30168);
/* harmony import */ var antd_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23061);
/* harmony import */ var antd_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_style__WEBPACK_IMPORTED_MODULE_0__);

var _templateObject;

var useStyles = (0,antd_style__WEBPACK_IMPORTED_MODULE_0__.createStyles)(function(_ref) {
    var css = _ref.css;
    return {
        container: css(_templateObject || (_templateObject = (0,_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)([
            "\n      position: relative;\n    "
        ])))
    };
});


/***/ }),

/***/ 12595:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1413);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86854);
/* harmony import */ var rc_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11601);
/* harmony import */ var rc_util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rc_util__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MessageInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65667);
/* harmony import */ var _MessageModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(56307);
/* harmony import */ var _ant_design_pro_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5329);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ant_design_pro_editor__WEBPACK_IMPORTED_MODULE_5__, _MessageModal__WEBPACK_IMPORTED_MODULE_7__]);
([_ant_design_pro_editor__WEBPACK_IMPORTED_MODULE_5__, _MessageModal__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










var EditableMessage = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function(_ref) {
    var value = _ref.value, _onChange = _ref.onChange, _ref$classNames = _ref.classNames, classNames = _ref$classNames === void 0 ? {} : _ref$classNames, onEditingChange = _ref.onEditingChange, editing = _ref.editing, openModal = _ref.openModal, onOpenChange = _ref.onOpenChange, _ref$placeholder = _ref.placeholder, placeholder = _ref$placeholder === void 0 ? "Type something..." : _ref$placeholder, _ref$showEditWhenEmpt = _ref.showEditWhenEmpty, showEditWhenEmpty = _ref$showEditWhenEmpt === void 0 ? false : _ref$showEditWhenEmpt, styles = _ref.styles, height = _ref.height, inputType = _ref.inputType, editButtonSize = _ref.editButtonSize, text = _ref.text, model = _ref.model, markdownProps = _ref.markdownProps;
    var _useMergedState = (0,rc_util__WEBPACK_IMPORTED_MODULE_0__.useMergedState)(false, {
        onChange: onEditingChange,
        value: editing
    }), _useMergedState2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(_useMergedState, 2), isEdit = _useMergedState2[0], setTyping = _useMergedState2[1];
    var _useMergedState3 = (0,rc_util__WEBPACK_IMPORTED_MODULE_0__.useMergedState)(false, {
        onChange: onOpenChange,
        value: openModal
    }), _useMergedState4 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(_useMergedState3, 2), expand = _useMergedState4[0], setExpand = _useMergedState4[1];
    var isAutoSize = height === "auto";
    var input = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_MessageInput__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        className: classNames === null || classNames === void 0 ? void 0 : classNames.input,
        classNames: {
            textarea: classNames === null || classNames === void 0 ? void 0 : classNames.textarea
        },
        defaultValue: value,
        editButtonSize: editButtonSize,
        height: height,
        onCancel: function onCancel() {
            return setTyping(false);
        },
        onConfirm: function onConfirm(text) {
            _onChange === null || _onChange === void 0 || _onChange(text);
            setTyping(false);
        },
        placeholder: placeholder,
        style: styles === null || styles === void 0 ? void 0 : styles.input,
        text: text,
        textareaClassname: classNames === null || classNames === void 0 ? void 0 : classNames.input,
        type: inputType
    });
    if (!value && showEditWhenEmpty) return input;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
        children: [
            !expand && isEdit ? input : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_ant_design_pro_editor__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({}, markdownProps), {}, {
                style: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({
                    height: isAutoSize ? "unset" : height,
                    overflowX: "hidden",
                    overflowY: "auto"
                }, markdownProps === null || markdownProps === void 0 ? void 0 : markdownProps.style),
                children: value || placeholder
            })),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_MessageModal__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                editing: isEdit,
                extra: model === null || model === void 0 ? void 0 : model.extra,
                footer: model === null || model === void 0 ? void 0 : model.footer,
                height: height,
                onChange: function onChange(text) {
                    return _onChange === null || _onChange === void 0 ? void 0 : _onChange(text);
                },
                onEditingChange: setTyping,
                onOpenChange: function onOpenChange(e) {
                    setExpand(e);
                    setTyping(false);
                },
                markdownProps: markdownProps,
                open: expand,
                placeholder: placeholder,
                text: text,
                value: value
            })
        ]
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditableMessage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 98203:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ es_Icon)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(91);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__(30168);
// EXTERNAL MODULE: external "antd-style"
var external_antd_style_ = __webpack_require__(23061);
;// CONCATENATED MODULE: ./src/components/prochat/pro-chat/es/Icon/style.js

var _templateObject, _templateObject2;

var useStyles = (0,external_antd_style_.createStyles)(function(_ref) {
    var css = _ref.css;
    var spin = (0,external_antd_style_.keyframes)(_templateObject || (_templateObject = (0,taggedTemplateLiteral/* default */.Z)([
        "\n  0% {\n    rotate: 0deg;\n  }\n  100% {\n    rotate: 360deg;\n  }\n  "
    ])));
    return {
        spin: css(_templateObject2 || (_templateObject2 = (0,taggedTemplateLiteral/* default */.Z)([
            "\n      animation: ",
            " 1s linear infinite;\n    "
        ])), spin)
    };
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/components/prochat/pro-chat/es/Icon/index.js


var _excluded = [
    "icon",
    "size",
    "color",
    "fill",
    "className",
    "spin"
];



var calcSize = function calcSize(size) {
    var fontSize;
    var strokeWidth;
    switch(size){
        case "large":
            {
                fontSize = 24;
                strokeWidth = 2;
                break;
            }
        case "normal":
            {
                fontSize = 20;
                strokeWidth = 2;
                break;
            }
        case "small":
            {
                fontSize = 14;
                strokeWidth = 1.5;
                break;
            }
        default:
            {
                if (size) {
                    fontSize = (size === null || size === void 0 ? void 0 : size.fontSize) || 24;
                    strokeWidth = (size === null || size === void 0 ? void 0 : size.strokeWidth) || 2;
                } else {
                    fontSize = "1em";
                    strokeWidth = 2;
                }
                break;
            }
    }
    return {
        fontSize: fontSize,
        strokeWidth: strokeWidth
    };
};
var Icon = /*#__PURE__*/ (0,external_react_.memo)(function(_ref) {
    var icon = _ref.icon, size = _ref.size, color = _ref.color, fill = _ref.fill, className = _ref.className, spin = _ref.spin, props = (0,objectWithoutProperties/* default */.Z)(_ref, _excluded);
    var _useStyles = useStyles(), styles = _useStyles.styles, cx = _useStyles.cx;
    var SvgIcon = icon;
    var _useMemo = (0,external_react_.useMemo)(function() {
        return calcSize(size);
    }, [
        size
    ]), fontSize = _useMemo.fontSize, strokeWidth = _useMemo.strokeWidth;
    return /*#__PURE__*/ jsx_runtime.jsx("span", (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
        className: cx("anticon", spin && styles.spin, className),
        role: "img"
    }, props), {}, {
        children: /*#__PURE__*/ jsx_runtime.jsx(SvgIcon, {
            color: color,
            fill: fill !== null && fill !== void 0 ? fill : "transparent",
            focusable: false,
            height: fontSize,
            size: fontSize,
            strokeWidth: strokeWidth,
            width: fontSize
        })
    }));
});
/* harmony default export */ const es_Icon = (Icon);


/***/ }),

/***/ 65667:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ es_MessageInput)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(86854);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(91);
// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__(53800);
var button_default = /*#__PURE__*/__webpack_require__.n(button_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "react-layout-kit"
var external_react_layout_kit_ = __webpack_require__(82823);
// EXTERNAL MODULE: external "antd/lib/input"
var input_ = __webpack_require__(30675);
var input_default = /*#__PURE__*/__webpack_require__.n(input_);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__(30168);
// EXTERNAL MODULE: external "antd-style"
var external_antd_style_ = __webpack_require__(23061);
;// CONCATENATED MODULE: ./src/components/prochat/pro-chat/es/components/Input/style.js

var _templateObject, _templateObject2, _templateObject3;

var style_useStyles = (0,external_antd_style_.createStyles)(function(_ref, _ref2) {
    var cx = _ref.cx, css = _ref.css, token = _ref.token, prefixCls = _ref.prefixCls;
    var type = _ref2.type;
    var typeStylish = css(_templateObject || (_templateObject = (0,taggedTemplateLiteral/* default */.Z)([
        "\n      background-color: ",
        ";\n      border: 1px solid ",
        ";\n      transition:\n        background-color 100ms ",
        ",\n        border-color 200ms ",
        ";\n\n      &:hover {\n        background-color: ",
        ";\n      }\n\n      &:focus {\n        border-color: ",
        ";\n      }\n\n      &.",
        "-input-affix-wrapper-focused {\n        border-color: ",
        ";\n      }\n    "
    ])), type === "block" ? token.colorFillTertiary : "transparent", type === "block" ? "transparent" : token.colorBorder, token.motionEaseOut, token.motionEaseOut, token.colorFillTertiary, token.colorTextQuaternary, prefixCls, token.colorTextQuaternary);
    return {
        input: cx(type !== "pure" && typeStylish, css(_templateObject2 || (_templateObject2 = (0,taggedTemplateLiteral/* default */.Z)([
            "\n          position: relative;\n          max-width: 100%;\n          height: ",
            ";\n          padding: ",
            ";\n\n          input {\n            background: transparent;\n          }\n        "
        ])), type === "pure" ? "unset" : "36px", type === "pure" ? "0" : "0 12px")),
        textarea: cx(type !== "pure" && typeStylish, css(_templateObject3 || (_templateObject3 = (0,taggedTemplateLiteral/* default */.Z)([
            "\n          position: relative;\n          max-width: 100%;\n          padding: ",
            ";\n          border-radius: ",
            ";\n\n          textarea {\n            background: transparent;\n          }\n        "
        ])), type === "pure" ? "0" : "8px 12px", type === "pure" ? "0" : "".concat(token.borderRadius, "px")))
    };
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/components/prochat/pro-chat/es/components/Input/index.js


var _excluded = (/* unused pure expression or super */ null && ([
    "className",
    "type"
])), _excluded2 = [
    "className",
    "type",
    "resize",
    "style"
];




var Input = /*#__PURE__*/ (/* unused pure expression or super */ null && (forwardRef(function(_ref, reference) {
    var className = _ref.className, _ref$type = _ref.type, type = _ref$type === void 0 ? "ghost" : _ref$type, props = _objectWithoutProperties(_ref, _excluded);
    var _useStyles = useStyles({
        type: type
    }), styles = _useStyles.styles, cx = _useStyles.cx;
    return /*#__PURE__*/ _jsx(AntInput, _objectSpread({
        bordered: type !== "pure",
        className: cx(styles.input, className),
        ref: reference
    }, props));
})));
var TextArea = /*#__PURE__*/ (0,external_react_.forwardRef)(function(_ref2, reference) {
    var className = _ref2.className, _ref2$type = _ref2.type, type = _ref2$type === void 0 ? "ghost" : _ref2$type, _ref2$resize = _ref2.resize, resize = _ref2$resize === void 0 ? true : _ref2$resize, style = _ref2.style, props = (0,objectWithoutProperties/* default */.Z)(_ref2, _excluded2);
    var _useStyles2 = style_useStyles({
        type: type
    }), styles = _useStyles2.styles, cx = _useStyles2.cx;
    return /*#__PURE__*/ jsx_runtime.jsx((input_default()).TextArea, (0,objectSpread2/* default */.Z)({
        bordered: type !== "pure",
        className: cx(styles.textarea, className),
        ref: reference,
        style: resize ? style : (0,objectSpread2/* default */.Z)({
            resize: "none"
        }, style)
    }, props));
});

;// CONCATENATED MODULE: ./src/components/prochat/pro-chat/es/MessageInput/style.js

var style_templateObject;

var MessageInput_style_useStyles = (0,external_antd_style_.createStyles)(function(_ref) {
    var css = _ref.css, token = _ref.token;
    return css(style_templateObject || (style_templateObject = (0,taggedTemplateLiteral/* default */.Z)([
        "\n    position: relative;\n\n    height: 100%;\n\n    font-family: ",
        ";\n    font-size: 13px;\n    line-height: 1.8;\n  "
    ])), token.fontFamilyCode);
});

;// CONCATENATED MODULE: ./src/components/prochat/pro-chat/es/MessageInput/index.js



var MessageInput_excluded = [
    "text",
    "type",
    "onCancel",
    "defaultValue",
    "onConfirm",
    "renderButtons",
    "textareaStyle",
    "textareaClassname",
    "placeholder",
    "height",
    "style",
    "editButtonSize",
    "classNames"
];








var MessageInput = /*#__PURE__*/ (0,external_react_.memo)(function(_ref) {
    var text = _ref.text, _ref$type = _ref.type, type = _ref$type === void 0 ? "pure" : _ref$type, onCancel = _ref.onCancel, defaultValue = _ref.defaultValue, onConfirm = _ref.onConfirm, renderButtons = _ref.renderButtons, textareaStyle = _ref.textareaStyle, textareaClassname = _ref.textareaClassname, _ref$placeholder = _ref.placeholder, placeholder = _ref$placeholder === void 0 ? "Type something..." : _ref$placeholder, _ref$height = _ref.height, height = _ref$height === void 0 ? "auto" : _ref$height, style = _ref.style, _ref$editButtonSize = _ref.editButtonSize, editButtonSize = _ref$editButtonSize === void 0 ? "middle" : _ref$editButtonSize, classNames = _ref.classNames, props = (0,objectWithoutProperties/* default */.Z)(_ref, MessageInput_excluded);
    var _useState = (0,external_react_.useState)(defaultValue || ""), _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2), temporarySystemRole = _useState2[0], setRole = _useState2[1];
    var _useStyles = MessageInput_style_useStyles(), cx = _useStyles.cx, styles = _useStyles.styles;
    var isAutoSize = height === "auto";
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_react_layout_kit_.Flexbox, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
        gap: 16,
        style: (0,objectSpread2/* default */.Z)({
            flex: 1,
            width: "100%"
        }, style)
    }, props), {}, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(TextArea, {
                autoSize: isAutoSize,
                className: cx(styles, textareaClassname),
                classNames: classNames,
                onBlur: function onBlur(e) {
                    return setRole(e.target.value);
                },
                onChange: function onChange(e) {
                    return setRole(e.target.value);
                },
                placeholder: placeholder,
                resize: false,
                style: (0,objectSpread2/* default */.Z)({
                    height: isAutoSize ? "unset" : height,
                    minHeight: "100%"
                }, textareaStyle),
                type: type,
                value: temporarySystemRole
            }),
            /*#__PURE__*/ jsx_runtime.jsx(external_react_layout_kit_.Flexbox, {
                direction: "horizontal-reverse",
                gap: 8,
                children: renderButtons ? renderButtons(temporarySystemRole).map(function(buttonProps, index) {
                    return /*#__PURE__*/ jsx_runtime.jsx((button_default()), (0,objectSpread2/* default */.Z)({
                        size: "small"
                    }, buttonProps), index);
                }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx((button_default()), {
                            onClick: function onClick() {
                                onConfirm === null || onConfirm === void 0 || onConfirm(temporarySystemRole);
                            },
                            size: editButtonSize,
                            type: "primary",
                            children: (text === null || text === void 0 ? void 0 : text.confirm) || "Confirm"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx((button_default()), {
                            onClick: onCancel,
                            size: editButtonSize,
                            children: (text === null || text === void 0 ? void 0 : text.cancel) || "Cancel"
                        })
                    ]
                })
            })
        ]
    }));
});
/* harmony default export */ const es_MessageInput = (MessageInput);


/***/ }),

/***/ 56307:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1413);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(86854);
/* harmony import */ var antd_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23061);
/* harmony import */ var antd_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11601);
/* harmony import */ var rc_util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rc_util__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MessageInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65667);
/* harmony import */ var _ant_design_pro_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5329);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76418);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ant_design_pro_editor__WEBPACK_IMPORTED_MODULE_7__]);
_ant_design_pro_editor__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











var MessageModal = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(function(_ref) {
    var editing = _ref.editing, open = _ref.open, _ref$height = _ref.height, height = _ref$height === void 0 ? "auto" : _ref$height, onOpenChange = _ref.onOpenChange, onEditingChange = _ref.onEditingChange, placeholder = _ref.placeholder, value = _ref.value, onChange = _ref.onChange, text = _ref.text, footer = _ref.footer, extra = _ref.extra, markdownProps = _ref.markdownProps;
    var _useResponsive = (0,antd_style__WEBPACK_IMPORTED_MODULE_0__.useResponsive)(), mobile = _useResponsive.mobile;
    var _useMergedState = (0,rc_util__WEBPACK_IMPORTED_MODULE_1__.useMergedState)(false, {
        onChange: onEditingChange,
        value: editing
    }), _useMergedState2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(_useMergedState, 2), isEdit = _useMergedState2[0], setTyping = _useMergedState2[1];
    var _useMergedState3 = (0,rc_util__WEBPACK_IMPORTED_MODULE_1__.useMergedState)(false, {
        onChange: onOpenChange,
        value: open
    }), _useMergedState4 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(_useMergedState3, 2), expand = _useMergedState4[0], setExpand = _useMergedState4[1];
    var isAutoSize = height === "auto";
    var markdownStyle = {
        height: isAutoSize ? "unset" : height,
        overflowX: "hidden",
        overflowY: "auto"
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((antd_lib_modal__WEBPACK_IMPORTED_MODULE_3___default()), {
        cancelText: (text === null || text === void 0 ? void 0 : text.cancel) || "Cancel",
        footer: isEdit ? null : footer,
        okText: (text === null || text === void 0 ? void 0 : text.edit) || "Edit",
        onCancel: function onCancel() {
            return setExpand(false);
        },
        onOk: function onOk() {
            return setTyping(true);
        },
        open: expand,
        styles: mobile ? {
            body: {
                padding: 16
            }
        } : {},
        title: (text === null || text === void 0 ? void 0 : text.title) || "Prompt",
        children: isEdit ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_MessageInput__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            defaultValue: value,
            height: height,
            onCancel: function onCancel() {
                return setTyping(false);
            },
            onConfirm: function onConfirm(text) {
                setTyping(false);
                onChange === null || onChange === void 0 || onChange(text);
            },
            placeholder: placeholder,
            text: {
                cancel: text === null || text === void 0 ? void 0 : text.cancel,
                confirm: text === null || text === void 0 ? void 0 : text.confirm
            },
            type: "block"
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
            children: [
                extra,
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_ant_design_pro_editor__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)({}, markdownProps), {}, {
                    style: value ? (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)({}, markdownStyle), markdownProps === null || markdownProps === void 0 ? void 0 : markdownProps.style) : (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)({}, markdownStyle), markdownProps === null || markdownProps === void 0 ? void 0 : markdownProps.style), {}, {
                        opacity: 0.5
                    }),
                    children: String(value || placeholder)
                }))
            ]
        })
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MessageModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 25438:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ AssistantMessageExtra)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1413);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(86854);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91);
/* harmony import */ var _components_Tag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(93391);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_layout_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82823);
/* harmony import */ var react_layout_kit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_layout_kit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90800);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store__WEBPACK_IMPORTED_MODULE_4__]);
_store__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



var _excluded = [
    "extra"
];






var AssistantMessageExtra = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(function(_ref) {
    var extra = _ref.extra, rest = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(_ref, _excluded);
    var _useStore = (0,_store__WEBPACK_IMPORTED_MODULE_4__/* .useStore */ .oR)(function(s) {
        return [
            s.config.model,
            s.messageItemExtraRender
        ];
    }), _useStore2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(_useStore, 2), model = _useStore2[0], messageItemExtraRender = _useStore2[1];
    var showModelTag = (extra === null || extra === void 0 ? void 0 : extra.fromModel) && model !== (extra === null || extra === void 0 ? void 0 : extra.fromModel);
    var hasTranslate = !!(extra !== null && extra !== void 0 && extra.translate);
    var showExtra = showModelTag || hasTranslate;
    var dom = messageItemExtraRender === null || messageItemExtraRender === void 0 ? void 0 : messageItemExtraRender((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({
        extra: extra
    }, rest), "assistant");
    if (!showExtra && !dom) return;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_layout_kit__WEBPACK_IMPORTED_MODULE_1__.Flexbox, {
        gap: 8,
        style: {
            marginTop: 8
        },
        children: [
            showModelTag && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_components_Tag__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    children: extra === null || extra === void 0 ? void 0 : extra.fromModel
                })
            }),
            dom
        ]
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 60971:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ UserMessageExtra)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1413);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(86854);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2278);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_layout_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82823);
/* harmony import */ var react_layout_kit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_layout_kit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90800);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store__WEBPACK_IMPORTED_MODULE_5__]);
_store__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



var _excluded = [
    "extra"
];






var UserMessageExtra = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function(_ref) {
    var extra = _ref.extra, rest = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(_ref, _excluded);
    var hasTranslate = !!(extra !== null && extra !== void 0 && extra.translate);
    var _useStore = (0,_store__WEBPACK_IMPORTED_MODULE_5__/* .useStore */ .oR)(function(s) {
        return [
            s.messageItemExtraRender
        ];
    }), _useStore2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(_useStore, 1), messageItemExtraRender = _useStore2[0];
    var dom = messageItemExtraRender === null || messageItemExtraRender === void 0 ? void 0 : messageItemExtraRender((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)({
        extra: extra
    }, rest), "user");
    if (!dom) return;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_layout_kit__WEBPACK_IMPORTED_MODULE_2__.Flexbox, {
        gap: 8,
        style: {
            marginTop: hasTranslate ? 8 : 0
        },
        children: [
            (extra === null || extra === void 0 ? void 0 : extra.translate) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((antd_lib_divider__WEBPACK_IMPORTED_MODULE_0___default()), {
                    style: {
                        margin: "12px 0"
                    }
                })
            }),
            dom
        ]
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 15215:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ renderMessagesExtra)
/* harmony export */ });
/* harmony import */ var _Assistant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25438);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60971);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Assistant__WEBPACK_IMPORTED_MODULE_0__, _User__WEBPACK_IMPORTED_MODULE_1__]);
([_Assistant__WEBPACK_IMPORTED_MODULE_0__, _User__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


var renderMessagesExtra = {
    assistant: _Assistant__WEBPACK_IMPORTED_MODULE_0__/* .AssistantMessageExtra */ .R,
    user: _User__WEBPACK_IMPORTED_MODULE_1__/* .UserMessageExtra */ .P
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 95172:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  W: () => (/* binding */ renderMessages)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(91);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: ./src/components/prochat/pro-chat/es/ProChat/const/message.js
var message = __webpack_require__(83453);
// EXTERNAL MODULE: external "antd-style"
var external_antd_style_ = __webpack_require__(23061);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/components/prochat/pro-chat/es/ProChat/components/ChatList/Loading.js



var Svg = function Svg() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        viewBox: "0 0 32 24",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("circle", {
                cx: "0",
                cy: "12",
                r: "0",
                transform: "translate(8 0)",
                children: /*#__PURE__*/ jsx_runtime.jsx("animate", {
                    attributeName: "r",
                    begin: "0",
                    calcMode: "spline",
                    dur: "1.2s",
                    keySplines: "0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8",
                    keyTimes: "0;0.2;0.7;1",
                    repeatCount: "indefinite",
                    values: "0; 4; 0; 0"
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("circle", {
                cx: "0",
                cy: "12",
                r: "0",
                transform: "translate(16 0)",
                children: /*#__PURE__*/ jsx_runtime.jsx("animate", {
                    attributeName: "r",
                    begin: "0.3",
                    calcMode: "spline",
                    dur: "1.2s",
                    keySplines: "0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8",
                    keyTimes: "0;0.2;0.7;1",
                    repeatCount: "indefinite",
                    values: "0; 4; 0; 0"
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("circle", {
                cx: "0",
                cy: "12",
                r: "0",
                transform: "translate(24 0)",
                children: /*#__PURE__*/ jsx_runtime.jsx("animate", {
                    attributeName: "r",
                    begin: "0.6",
                    calcMode: "spline",
                    dur: "1.2s",
                    keySplines: "0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8",
                    keyTimes: "0;0.2;0.7;1",
                    repeatCount: "indefinite",
                    values: "0; 4; 0; 0"
                })
            })
        ]
    });
};
var BubblesLoading = function BubblesLoading() {
    var _useTheme = (0,external_antd_style_.useTheme)(), colorTextTertiary = _useTheme.colorTextTertiary;
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        style: {
            fill: colorTextTertiary,
            height: 24,
            width: 32
        },
        children: /*#__PURE__*/ jsx_runtime.jsx(Svg, {})
    });
};
/* harmony default export */ const Loading = (BubblesLoading);

;// CONCATENATED MODULE: ./src/components/prochat/pro-chat/es/ProChat/components/ChatList/Messages/Default.js




var DefaultMessage = /*#__PURE__*/ (0,external_react_.memo)(function(_ref) {
    var id = _ref.id, editableContent = _ref.editableContent, content = _ref.content;
    if (content === message/* LOADING_FLAT */.v) return /*#__PURE__*/ jsx_runtime.jsx(Loading, {});
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        id: id,
        children: editableContent
    });
});

;// CONCATENATED MODULE: ./src/components/prochat/pro-chat/es/ProChat/components/ChatList/Messages/Assistant.js


var _excluded = [
    "id",
    "content"
];



var AssistantMessage = /*#__PURE__*/ (0,external_react_.memo)(function(_ref) {
    var id = _ref.id, content = _ref.content, props = (0,objectWithoutProperties/* default */.Z)(_ref, _excluded);
    // todo: need a custom render
    return /*#__PURE__*/ jsx_runtime.jsx(DefaultMessage, (0,objectSpread2/* default */.Z)({
        content: content,
        id: id
    }, props));
});

;// CONCATENATED MODULE: ./src/components/prochat/pro-chat/es/ProChat/components/ChatList/Messages/Hello.js




var HelloMessage = /*#__PURE__*/ (0,external_react_.memo)(function(props) {
    var content = props.content;
    if (typeof content === "string") return /*#__PURE__*/ jsx_runtime.jsx(DefaultMessage, (0,objectSpread2/* default */.Z)({}, props));
    return content;
});

;// CONCATENATED MODULE: ./src/components/prochat/pro-chat/es/ProChat/components/ChatList/Messages/index.js



var renderMessages = {
    hello: HelloMessage,
    assistant: AssistantMessage,
    default: DefaultMessage
};


/***/ }),

/***/ 39935:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30168);
/* harmony import */ var antd_lib_skeleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71030);
/* harmony import */ var antd_lib_skeleton__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_skeleton__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23061);
/* harmony import */ var antd_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_layout_kit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82823);
/* harmony import */ var react_layout_kit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_layout_kit__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85893);

var _templateObject;






var useStyles = (0,antd_style__WEBPACK_IMPORTED_MODULE_1__.createStyles)(function(_ref) {
    var css = _ref.css, prefixCls = _ref.prefixCls;
    return {
        user: css(_templateObject || (_templateObject = (0,_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)([
            "\n    display: flex;\n    flex-direction: row-reverse;\n    gap: 16px;\n\n    .",
            "-skeleton-paragraph {\n      display: flex;\n      flex-direction: column;\n      align-items: flex-end;\n    }\n  "
        ])), prefixCls)
    };
});
var SkeletonList = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(function() {
    var _useStyles = useStyles(), styles = _useStyles.styles;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_layout_kit__WEBPACK_IMPORTED_MODULE_3__.Flexbox, {
        gap: 24,
        padding: 12,
        style: {
            marginTop: 24
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((antd_lib_skeleton__WEBPACK_IMPORTED_MODULE_0___default()), {
                active: true,
                avatar: {
                    size: 40
                },
                className: styles.user,
                paragraph: {
                    width: [
                        "50%",
                        "30%"
                    ]
                },
                title: false
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((antd_lib_skeleton__WEBPACK_IMPORTED_MODULE_0___default()), {
                active: true,
                avatar: {
                    size: 40
                },
                paragraph: {
                    width: [
                        "50%",
                        "30%"
                    ]
                },
                title: false
            })
        ]
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SkeletonList);


/***/ }),

/***/ 47413:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(86854);
/* harmony import */ var _ChatList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(47984);
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12404);
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90800);
/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11857);
/* harmony import */ var _hooks_useProChatLocale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26226);
/* harmony import */ var _hooks_useRefFunction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(36567);
/* harmony import */ var _Extras__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(15215);
/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(95172);
/* harmony import */ var _SkeletonList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(39935);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store__WEBPACK_IMPORTED_MODULE_3__, _hooks_useProChatLocale__WEBPACK_IMPORTED_MODULE_5__, _ChatList__WEBPACK_IMPORTED_MODULE_9__, _Extras__WEBPACK_IMPORTED_MODULE_11__]);
([_store__WEBPACK_IMPORTED_MODULE_3__, _hooks_useProChatLocale__WEBPACK_IMPORTED_MODULE_5__, _ChatList__WEBPACK_IMPORTED_MODULE_9__, _Extras__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













var List = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function(_ref) {
    var showTitle = _ref.showTitle, itemShouldUpdate = _ref.itemShouldUpdate, chatItemRenderConfig = _ref.chatItemRenderConfig, renderErrorMessages = _ref.renderErrorMessages, markdownProps = _ref.markdownProps;
    var data = (0,_store__WEBPACK_IMPORTED_MODULE_3__/* .useStore */ .oR)(_store_selectors__WEBPACK_IMPORTED_MODULE_4__/* .chatSelectors */ .X.currentChatsWithGuideMessage, (fast_deep_equal__WEBPACK_IMPORTED_MODULE_0___default()));
    var _useProChatLocale = (0,_hooks_useProChatLocale__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(), localeObj = _useProChatLocale.localeObject;
    var locale = (0,_store__WEBPACK_IMPORTED_MODULE_3__/* .useStore */ .oR)(function(s) {
        return s.locale;
    });
    var _useStore = (0,_store__WEBPACK_IMPORTED_MODULE_3__/* .useStore */ .oR)(function(s) {
        var config = s.config;
        return [
            s.init,
            s.displayMode,
            config.enableHistoryCount,
            config.historyCount,
            s.chatLoadingId,
            s.deleteMessage,
            s.resendMessage,
            s.dispatchMessage
        ];
    }), _useStore2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(_useStore, 8), init = _useStore2[0], displayMode = _useStore2[1], enableHistoryCount = _useStore2[2], historyCount = _useStore2[3], chatLoadingId = _useStore2[4], deleteMessage = _useStore2[5], resendMessage = _useStore2[6], dispatchMessage = _useStore2[7];
    var onActionsClick = (0,_hooks_useRefFunction__WEBPACK_IMPORTED_MODULE_7__/* .useRefFunction */ .J)(function(action, _ref2) {
        var id = _ref2.id, error = _ref2.error;
        switch(action.key){
            case "del":
                {
                    deleteMessage(id);
                    break;
                }
            case "regenerate":
                {
                    resendMessage(id);
                    // if this message is an error message, we need to delete it
                    if (error) deleteMessage(id);
                    break;
                }
        }
    // TODO: need a custom callback
    });
    var onMessageChange = (0,_hooks_useRefFunction__WEBPACK_IMPORTED_MODULE_7__/* .useRefFunction */ .J)(function(id, content) {
        return dispatchMessage({
            id: id,
            key: "content",
            type: "updateMessage",
            value: content
        });
    });
    var textObj = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function() {
        return {
            cancel: localeObj.cancel,
            confirm: localeObj.confirm,
            copy: localeObj.copy,
            copySuccess: localeObj.copySuccess,
            delete: localeObj.delete,
            edit: localeObj.edit,
            history: localeObj.history,
            regenerate: localeObj.regenerate
        };
    }, [
        locale
    ]);
    if (!init) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_SkeletonList__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {});
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_ChatList__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        showTitle: showTitle,
        data: data,
        itemShouldUpdate: itemShouldUpdate,
        enableHistoryCount: enableHistoryCount,
        historyCount: historyCount,
        loadingId: chatLoadingId,
        onActionsClick: onActionsClick,
        onMessageChange: onMessageChange,
        renderMessages: _Messages__WEBPACK_IMPORTED_MODULE_10__/* .renderMessages */ .W,
        renderErrorMessages: renderErrorMessages,
        renderMessagesExtra: _Extras__WEBPACK_IMPORTED_MODULE_11__/* .renderMessagesExtra */ .e,
        style: {
            marginTop: 24
        },
        chatItemRenderConfig: chatItemRenderConfig,
        text: textObj,
        type: displayMode || "chat",
        markdownProps: markdownProps
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (List);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 76100:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export ActionBar */
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1413);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(86854);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30168);
/* harmony import */ var antd_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23061);
/* harmony import */ var antd_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_layout_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82823);
/* harmony import */ var react_layout_kit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_layout_kit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ActionIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(59609);
/* harmony import */ var antd_lib_config_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92616);
/* harmony import */ var antd_lib_config_provider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_config_provider__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_popconfirm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93984);
/* harmony import */ var antd_lib_popconfirm__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popconfirm__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var modularize_import_loader_name_Trash2_from_default_as_default_join_esm_icons_trash_2_lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(13718);
/* harmony import */ var _hooks_useProChatLocale__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(26226);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90800);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store__WEBPACK_IMPORTED_MODULE_6__, _hooks_useProChatLocale__WEBPACK_IMPORTED_MODULE_8__, _ActionIcon__WEBPACK_IMPORTED_MODULE_9__]);
([_store__WEBPACK_IMPORTED_MODULE_6__, _hooks_useProChatLocale__WEBPACK_IMPORTED_MODULE_8__, _ActionIcon__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



var _templateObject;









var useStyles = (0,antd_style__WEBPACK_IMPORTED_MODULE_0__.createStyles)(function(_ref) {
    var css = _ref.css, token = _ref.token;
    return {
        extra: css(_templateObject || (_templateObject = (0,_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)([
            "\n    color: ",
            ";\n  "
        ])), token.colorTextTertiary)
    };
});
var ActionBar = function ActionBar(_ref2) {
    var _actionsRender;
    var className = _ref2.className;
    var _useStore = (0,_store__WEBPACK_IMPORTED_MODULE_6__/* .useStore */ .oR)(function(s) {
        var _s$actions, _s$actions2;
        return [
            s.clearMessage,
            (_s$actions = s.actions) === null || _s$actions === void 0 ? void 0 : _s$actions.render,
            (_s$actions2 = s.actions) === null || _s$actions2 === void 0 ? void 0 : _s$actions2.flexConfig
        ];
    }), _useStore2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(_useStore, 3), clearMessage = _useStore2[0], actionsRender = _useStore2[1], flexConfig = _useStore2[2];
    var _useProChatLocale = (0,_hooks_useProChatLocale__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(), localeObject = _useProChatLocale.localeObject;
    var _useStyles = useStyles(), styles = _useStyles.styles, theme = _useStyles.theme;
    var defaultDoms = [
        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((antd_lib_popconfirm__WEBPACK_IMPORTED_MODULE_3___default()), {
            title: localeObject.clearModalTitle,
            okButtonProps: {
                danger: true
            },
            okText: localeObject.clearDialogue,
            cancelText: localeObject.cancel,
            onConfirm: function onConfirm() {
                clearMessage();
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_ActionIcon__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                title: localeObject.clearCurrentDialogue,
                icon: modularize_import_loader_name_Trash2_from_default_as_default_join_esm_icons_trash_2_lucide_react__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z
            })
        }, "clear")
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((antd_lib_config_provider__WEBPACK_IMPORTED_MODULE_2___default()), {
        theme: {
            token: {
                colorText: theme.colorTextSecondary
            }
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_layout_kit__WEBPACK_IMPORTED_MODULE_1__.Flexbox, (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)({
            align: "center",
            direction: "horizontal-reverse",
            paddingInline: 12,
            className: (0,antd_style__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.extra, className),
            gap: 8
        }, flexConfig), {}, {
            children: (_actionsRender = actionsRender === null || actionsRender === void 0 ? void 0 : actionsRender(null)) !== null && _actionsRender !== void 0 ? _actionsRender : null
        }))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActionBar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 55715:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ AutoCompleteTextArea)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1413);
/* harmony import */ var _babel_runtime_helpers_esm_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(74165);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15861);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(91);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(86854);
/* harmony import */ var antd_lib_auto_complete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65224);
/* harmony import */ var antd_lib_auto_complete__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_auto_complete__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30675);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90800);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store__WEBPACK_IMPORTED_MODULE_4__]);
_store__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





var _excluded = [
    "disabled",
    "autoCompleteProps"
];





var AutoCompleteTextArea = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().forwardRef(function(props, ref) {
    var _useStore = (0,_store__WEBPACK_IMPORTED_MODULE_4__/* .useStore */ .oR)(function(s) {
        return [
            s.autocompleteRequest
        ];
    }), _useStore2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(_useStore, 1), autocompleteRequest = _useStore2[0];
    var disabled = props.disabled, _props$autoCompletePr = props.autoCompleteProps, autoCompleteProps = _props$autoCompletePr === void 0 ? {} : _props$autoCompletePr, rest = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(props, _excluded);
    var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), _useState2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(_useState, 2), options = _useState2[0], setOptions = _useState2[1];
    var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), _useState4 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(_useState3, 2), open = _useState4[0], setOpen = _useState4[1];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((antd_lib_auto_complete__WEBPACK_IMPORTED_MODULE_0___default()), (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)({
        className: props.className,
        options: options,
        style: {
            height: "max-content"
        },
        disabled: disabled,
        open: open,
        onDropdownVisibleChange: function onDropdownVisibleChange(open) {
            setOpen(open);
        },
        value: props.value,
        onSelect: function onSelect(value) {
            var _props$onChange;
            (_props$onChange = props.onChange) === null || _props$onChange === void 0 || _props$onChange.call(props, {
                target: {
                    value: value
                }
            });
            setOptions([]);
        },
        onSearch: /*#__PURE__*/ function() {
            var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(/*#__PURE__*/ (0,_babel_runtime_helpers_esm_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)().mark(function _callee(value) {
                var result;
                return (0,_babel_runtime_helpers_esm_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)().wrap(function _callee$(_context) {
                    while(1)switch(_context.prev = _context.next){
                        case 0:
                            _context.next = 2;
                            return autocompleteRequest === null || autocompleteRequest === void 0 ? void 0 : autocompleteRequest(value);
                        case 2:
                            result = _context.sent;
                            setOptions(result || []);
                        case 4:
                        case "end":
                            return _context.stop();
                    }
                }, _callee);
            }));
            return function(_x) {
                return _ref.apply(this, arguments);
            };
        }()
    }, autoCompleteProps), {}, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default().TextArea), (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)({
            size: "large"
        }, rest), {}, {
            ref: ref,
            disabled: disabled,
            className: "".concat(props.className, "-textarea"),
            onFocus: function onFocus(e) {
                var _props$onFocus;
                setOpen(false);
                (_props$onFocus = props.onFocus) === null || _props$onFocus === void 0 || _props$onFocus.call(props, e);
            },
            onPressEnter: function onPressEnter(e) {
                var _props$onPressEnter;
                if (open && options.length > 0) return;
                (_props$onPressEnter = props.onPressEnter) === null || _props$onPressEnter === void 0 || _props$onPressEnter.call(props, e);
            }
        }))
    }));
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 63218:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23061);
/* harmony import */ var antd_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85893);




var StopLoadingIcon = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function() {
    var theme = (0,antd_style__WEBPACK_IMPORTED_MODULE_0__.useTheme)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("svg", {
        className: "anticon",
        color: "currentColor",
        height: 16,
        viewBox: "0 0 1024 1024",
        width: 16,
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("g", {
            fill: "none",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("circle", {
                    cx: "512",
                    cy: "512",
                    fill: "none",
                    r: "426",
                    stroke: theme.colorBorder,
                    strokeWidth: "72"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("rect", {
                    fill: "currentColor",
                    height: "252",
                    rx: "24",
                    ry: "24",
                    width: "252",
                    x: "386",
                    y: "386"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("path", {
                    d: "M938.667 512C938.667 276.359 747.64 85.333 512 85.333",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeWidth: "73",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("animateTransform", {
                        attributeName: "transform",
                        dur: "1s",
                        from: "0 512 512",
                        repeatCount: "indefinite",
                        to: "360 512 512",
                        type: "rotate"
                    })
                })
            ]
        })
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StopLoadingIcon);


/***/ }),

/***/ 42415:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export ChatInputArea */
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1413);
/* harmony import */ var _babel_runtime_helpers_esm_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(74165);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(15861);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(86854);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(30168);
/* harmony import */ var _ant_design_icons_lib_icons_SendOutlined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97717);
/* harmony import */ var _ant_design_icons_lib_icons_SendOutlined__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_SendOutlined__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53800);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_config_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92616);
/* harmony import */ var antd_lib_config_provider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_config_provider__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23061);
/* harmony import */ var antd_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_layout_kit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82823);
/* harmony import */ var react_layout_kit__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_layout_kit__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(90800);
/* harmony import */ var _hooks_useProChatLocale__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(26226);
/* harmony import */ var _ActionBar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(76100);
/* harmony import */ var _AutoCompleteTextArea__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(55715);
/* harmony import */ var _StopLoading__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(63218);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store__WEBPACK_IMPORTED_MODULE_8__, _hooks_useProChatLocale__WEBPACK_IMPORTED_MODULE_10__, _AutoCompleteTextArea__WEBPACK_IMPORTED_MODULE_14__, _ActionBar__WEBPACK_IMPORTED_MODULE_16__]);
([_store__WEBPACK_IMPORTED_MODULE_8__, _hooks_useProChatLocale__WEBPACK_IMPORTED_MODULE_10__, _AutoCompleteTextArea__WEBPACK_IMPORTED_MODULE_14__, _ActionBar__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;













var useStyles = (0,antd_style__WEBPACK_IMPORTED_MODULE_3__.createStyles)(function(_ref) {
    var css = _ref.css, responsive = _ref.responsive, token = _ref.token;
    return {
        container: css(_templateObject || (_templateObject = (0,_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)([
            "\n    position: sticky;\n    z-index: ",
            ";\n    bottom: 0;\n\n    padding-top: 12px;\n    padding-bottom: 24px;\n\n    background-image: linear-gradient(to top, ",
            " 88%, transparent 100%);\n\n    ",
            " {\n      width: 100%;\n    }\n  "
        ])), token.zIndexPopupBase, token.colorBgLayout, responsive.mobile),
        boxShadow: css(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)([
            "\n    position: relative;\n    border-radius: 8px;\n    box-shadow: ",
            ";\n  "
        ])), token.boxShadowSecondary),
        input: css(_templateObject3 || (_templateObject3 = (0,_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)([
            "\n    width: 100%;\n    border: none;\n    outline: none;\n    border-radius: 8px;\n  "
        ]))),
        btn: css(_templateObject4 || (_templateObject4 = (0,_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)([
            "\n    position: absolute;\n    z-index: 10;\n    right: 8px;\n    bottom: 6px;\n\n    color: ",
            ";\n    &:hover {\n      color: ",
            ";\n    }\n  "
        ])), token.colorTextTertiary, token.colorTextSecondary),
        extra: css(_templateObject5 || (_templateObject5 = (0,_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)([
            "\n    color: ",
            ";\n  "
        ])), token.colorTextTertiary)
    };
});
var ChatInputArea = function ChatInputArea(props) {
    var _ref2 = props || {}, className = _ref2.className, onSend = _ref2.onSend, inputAreaRender = _ref2.inputAreaRender, inputRender = _ref2.inputRender, sendButtonRender = _ref2.sendButtonRender;
    var _useStore = (0,_store__WEBPACK_IMPORTED_MODULE_8__/* .useStore */ .oR)(function(s) {
        return [
            s.sendMessage,
            !!s.chatLoadingId,
            s.placeholder,
            s.inputAreaProps,
            s.clearMessage,
            s.stopGenerateMessage
        ];
    }), _useStore2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(_useStore, 6), sendMessage = _useStore2[0], isLoading = _useStore2[1], placeholder = _useStore2[2], inputAreaProps = _useStore2[3], clearMessage = _useStore2[4], stopGenerateMessage = _useStore2[5];
    var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)((antd_lib_config_provider__WEBPACK_IMPORTED_MODULE_2___default().ConfigContext)), getPrefixCls = _useContext.getPrefixCls;
    var isChineseInput = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(false);
    var _useStyles = useStyles(), styles = _useStyles.styles, theme = _useStyles.theme;
    var _useProChatLocale = (0,_hooks_useProChatLocale__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(), localeObject = _useProChatLocale.localeObject;
    var _ref3 = inputAreaProps || {}, value = _ref3.value, onChange = _ref3.onChange;
    var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(""), _useState2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(_useState, 2), message = _useState2[0], setMessage = _useState2[1];
    // 兼容中文的受控输入逻辑
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {
        if (!isChineseInput.current && onChange) {
            onChange(message);
        }
    }, [
        message
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {
        if (value) {
            setMessage(value);
        }
    }, [
        value
    ]);
    var send = /*#__PURE__*/ function() {
        var _ref4 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(/*#__PURE__*/ (0,_babel_runtime_helpers_esm_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)().mark(function _callee() {
            var success;
            return (0,_babel_runtime_helpers_esm_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)().wrap(function _callee$(_context) {
                while(1)switch(_context.prev = _context.next){
                    case 0:
                        if (!onSend) {
                            _context.next = 7;
                            break;
                        }
                        _context.next = 3;
                        return onSend(message);
                    case 3:
                        success = _context.sent;
                        if (success) {
                            sendMessage(message);
                            setMessage("");
                        }
                        _context.next = 9;
                        break;
                    case 7:
                        sendMessage(message);
                        setMessage("");
                    case 9:
                    case "end":
                        return _context.stop();
                }
            }, _callee);
        }));
        return function send() {
            return _ref4.apply(this, arguments);
        };
    }();
    var prefixClass = getPrefixCls("pro-chat-input-area");
    /**
   * 默认的自动完成文本区域属性
   *
   * @property {string} placeholder - 输入框的占位符
   * @property {Object} inputAreaProps - 输入框的其他属性
   * @property {string} inputAreaProps.className - 输入框的类名
   * @property {string} prefixClass - 输入框的前缀类名
   * @property {string} value - 输入框的值
   * @property {function} onChange - 输入框值改变时的回调函数
   * @property {Object} autoSize - 输入框的自动调整大小配置
   * @property {number} autoSize.maxRows - 输入框的最大行数
   * @property {function} onCompositionStart - 输入法开始输入时的回调函数
   * @property {function} onCompositionEnd - 输入法结束输入时的回调函数
   * @property {function} onPressEnter - 按下回车键时的回调函数
   */ var defaultAutoCompleteTextAreaProps = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)({
        placeholder: placeholder || localeObject.placeholder
    }, inputAreaProps), {}, {
        className: (0,antd_style__WEBPACK_IMPORTED_MODULE_3__.cx)(styles.input, inputAreaProps === null || inputAreaProps === void 0 ? void 0 : inputAreaProps.className, "".concat(prefixClass, "-component")),
        value: message,
        onChange: function onChange(e) {
            setMessage(e.target.value);
        },
        autoSize: {
            maxRows: 8
        },
        onCompositionStart: function onCompositionStart() {
            isChineseInput.current = true;
        },
        onCompositionEnd: function onCompositionEnd(e) {
            isChineseInput.current = false;
            setMessage(e.target.value);
        },
        onPressEnter: function onPressEnter(e) {
            if (!isLoading && !e.shiftKey && !isChineseInput.current) {
                e.preventDefault();
                send();
            }
        }
    });
    var defaultInput = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_AutoCompleteTextArea__WEBPACK_IMPORTED_MODULE_14__/* .AutoCompleteTextArea */ .s, (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)({}, defaultAutoCompleteTextAreaProps));
    /**
   * 支持下自定义输入框
   */ var inputDom = inputRender ? inputRender === null || inputRender === void 0 ? void 0 : inputRender(defaultInput, function(message) {
        sendMessage(message);
    }, defaultAutoCompleteTextAreaProps) : defaultInput;
    /**
   * 根据 isLoading 状态返回默认的按钮道具。
   * 如果 isLoading 为 true，则按钮将具有文本类型，即 stopGenerateMessage 点击处理程序，
   * 和 StopLoadingIcon 作为图标。
   * 如果 isLoading 为 false，则按钮将具有文本类型、发送点击处理程序、
   * 和 SendOutlined 图标作为图标。
   * @returns The default button props.
   */ var defaultButtonProps = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(function() {
        return isLoading ? {
            type: "text",
            className: styles.btn,
            onClick: function onClick() {
                return stopGenerateMessage();
            },
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_StopLoading__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {})
        } : {
            type: "text",
            className: styles.btn,
            onClick: function onClick() {
                return send();
            },
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((_ant_design_icons_lib_icons_SendOutlined__WEBPACK_IMPORTED_MODULE_0___default()), {})
        };
    }, [
        isLoading,
        message
    ]);
    var defaultButtonDom = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default()), (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)({}, defaultButtonProps));
    var buttonDom = sendButtonRender ? sendButtonRender(defaultButtonDom, defaultButtonProps) : defaultButtonDom;
    var defaultInputArea = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((antd_lib_config_provider__WEBPACK_IMPORTED_MODULE_2___default()), {
        theme: {
            token: {
                borderRadius: 4,
                colorBgContainer: theme.colorBgElevated,
                controlHeightLG: 48,
                colorBorder: "transparent",
                colorPrimaryHover: "transparent"
            }
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_layout_kit__WEBPACK_IMPORTED_MODULE_5__.Flexbox, {
            gap: 8,
            padding: 16,
            className: (0,antd_style__WEBPACK_IMPORTED_MODULE_3__.cx)(styles.container, "".concat(prefixClass), className),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_ActionBar__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                    className: "".concat(prefixClass, "-action-bar")
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_layout_kit__WEBPACK_IMPORTED_MODULE_5__.Flexbox, {
                    horizontal: true,
                    gap: 8,
                    align: "center",
                    className: (0,antd_style__WEBPACK_IMPORTED_MODULE_3__.cx)(styles.boxShadow, "".concat(prefixClass, "-text-container")),
                    children: [
                        inputDom,
                        buttonDom
                    ]
                })
            ]
        })
    });
    if (inputAreaRender) {
        return inputAreaRender(defaultInputArea, function(message) {
            sendMessage(message);
        }, clearMessage);
    }
    return defaultInputArea;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatInputArea);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 66591:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86854);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56623);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90800);
/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11857);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store__WEBPACK_IMPORTED_MODULE_2__]);
_store__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






var ChatScrollAnchor = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(function(_ref) {
    var target = _ref.target;
    var trackVisibility = (0,_store__WEBPACK_IMPORTED_MODULE_2__/* .useStore */ .oR)(function(s) {
        return !!s.chatLoadingId;
    });
    var str = (0,_store__WEBPACK_IMPORTED_MODULE_2__/* .useStore */ .oR)(_store_selectors__WEBPACK_IMPORTED_MODULE_3__/* .chatSelectors */ .X.currentChats);
    var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), _useState2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(_useState, 2), isWindowAvailable = _useState2[0], setIsWindowAvailable = _useState2[1];
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {
        // 检查window对象是否已经可用
        if (false) {}
    }, []);
    // 获取上方列表的实例化 ref，会传入给 useAtBottom 用于判断当前是否在滚动
    var current = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function() {
        if (target.current) {
            return target.current;
        }
        return document.body;
    }, [
        isWindowAvailable
    ]);
    var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0), _useState4 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(_useState3, 2), scrollOffset = _useState4[0], setScrollOffset = _useState4[1];
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {
        if (isWindowAvailable) {
            // 如果是移动端，可能100太多了，认为超过 1/3 即可，PC默认100
            setScrollOffset(window.innerHeight / 3 > 100 ? 100 : window.innerHeight / 4);
        }
    }, [
        isWindowAvailable
    ]);
    var _useInView = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__/* .useInView */ .YD)({
        root: target.current,
        delay: 100,
        rootMargin: "0px 0px ".concat(scrollOffset, "px 0px"),
        trackVisibility: trackVisibility
    }), ref = _useInView.ref, entry = _useInView.entry, inView = _useInView.inView;
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {
        if (trackVisibility && inView) {
            current === null || current === void 0 || current.scrollTo({
                behavior: "smooth",
                left: 0,
                top: (current === null || current === void 0 ? void 0 : current.scrollHeight) || 99999
            });
        }
    }, [
        inView,
        entry,
        trackVisibility,
        str
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        ref: ref,
        style: {
            height: 1,
            width: "100%"
        }
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatScrollAnchor);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 83453:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ FUNCTION_MESSAGE_FLAG),
/* harmony export */   v: () => (/* binding */ LOADING_FLAT)
/* harmony export */ });
var LOADING_FLAT = "...";
// 只要 start with 这个，就可以判断为 function message
var FUNCTION_MESSAGE_FLAG = '{"function';


/***/ }),

/***/ 71291:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1413);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(86854);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(30168);
/* harmony import */ var _BackBottom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(11703);
/* harmony import */ var antd_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23061);
/* harmony import */ var antd_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_resize_observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31493);
/* harmony import */ var rc_resize_observer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rc_resize_observer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_layout_kit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82823);
/* harmony import */ var react_layout_kit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_layout_kit__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_config_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92616);
/* harmony import */ var antd_lib_config_provider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_config_provider__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ChatList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(47413);
/* harmony import */ var _components_InputArea__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(42415);
/* harmony import */ var _components_ScrollAnchor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(66591);
/* harmony import */ var _hooks_useProChatLocale__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(26226);
/* harmony import */ var _OverrideStyle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(98286);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useProChatLocale__WEBPACK_IMPORTED_MODULE_9__, _components_ChatList__WEBPACK_IMPORTED_MODULE_11__, _components_ScrollAnchor__WEBPACK_IMPORTED_MODULE_12__, _components_InputArea__WEBPACK_IMPORTED_MODULE_14__]);
([_hooks_useProChatLocale__WEBPACK_IMPORTED_MODULE_9__, _components_ChatList__WEBPACK_IMPORTED_MODULE_11__, _components_ScrollAnchor__WEBPACK_IMPORTED_MODULE_12__, _components_InputArea__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



var _templateObject;














var useStyles = (0,antd_style__WEBPACK_IMPORTED_MODULE_0__.createStyles)(function(_ref) {
    var css = _ref.css, responsive = _ref.responsive, stylish = _ref.stylish;
    return css(_templateObject || (_templateObject = (0,_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)([
        "\n    overflow: hidden scroll;\n    height: 100%;\n    ",
        " {\n      ",
        "\n      width: 100%;\n    }\n  "
    ])), responsive.mobile, stylish.noScrollbar);
});
/**
 * 对话组件的属性接口
 */ var App = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(function(_ref2) {
    var _areaHtml$current;
    var renderInputArea = _ref2.renderInputArea, inputAreaRender = _ref2.inputAreaRender, className = _ref2.className, style = _ref2.style, showTitle = _ref2.showTitle, chatRef = _ref2.chatRef, itemShouldUpdate = _ref2.itemShouldUpdate, inputRender = _ref2.inputRender, chatItemRenderConfig = _ref2.chatItemRenderConfig, backToBottomConfig = _ref2.backToBottomConfig, renderErrorMessages = _ref2.renderErrorMessages, sendButtonRender = _ref2.sendButtonRender, onScroll = _ref2.onScroll, markdownProps = _ref2.markdownProps;
    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    var areaHtml = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    var _useStyles = useStyles(), styles = _useStyles.styles, cx = _useStyles.cx;
    var _useOverrideStyles = (0,_OverrideStyle__WEBPACK_IMPORTED_MODULE_7__/* .useOverrideStyles */ .K)(), override = _useOverrideStyles.styles;
    var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), _useState2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(_useState, 2), isRender = _useState2[0], setIsRender = _useState2[1];
    var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("100%"), _useState4 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(_useState3, 2), height = _useState4[0], setHeight = _useState4[1];
    var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)((antd_lib_config_provider__WEBPACK_IMPORTED_MODULE_4___default().ConfigContext)), getPrefixCls = _useContext.getPrefixCls;
    var _useProChatLocale = (0,_hooks_useProChatLocale__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(), localeObject = _useProChatLocale.localeObject;
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {
        // 保证 ref 永远存在
        setIsRender(true);
        if (chatRef !== null && chatRef !== void 0 && chatRef.current) {
            chatRef.current.scrollToBottom = function() {
                var _current, _ref$current;
                ref === null || ref === void 0 || (_current = ref.current) === null || _current === void 0 || _current.scrollTo({
                    behavior: "smooth",
                    left: 0,
                    top: ((_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.scrollHeight) || 99999
                });
            };
        }
    }, []);
    var prefixClass = getPrefixCls("pro-chat");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((rc_resize_observer__WEBPACK_IMPORTED_MODULE_1___default()), {
        onResize: function onResize(e) {
            if (e.height !== height) {
                setHeight(e.height);
            }
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_layout_kit__WEBPACK_IMPORTED_MODULE_3__.Flexbox, {
            className: cx(override.container, className, "".concat(prefixClass, "-container")),
            style: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)({
                maxHeight: "100vh",
                height: "100%"
            }, style),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                            ref: ref,
                            className: cx("".concat(prefixClass, "-chat-list-container"), styles),
                            style: {
                                height: height - (((_areaHtml$current = areaHtml.current) === null || _areaHtml$current === void 0 ? void 0 : _areaHtml$current.clientHeight) || 0) || "100%"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_ChatList__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                    showTitle: showTitle,
                                    itemShouldUpdate: itemShouldUpdate,
                                    chatItemRenderConfig: chatItemRenderConfig,
                                    markdownProps: markdownProps,
                                    renderErrorMessages: renderErrorMessages
                                }),
                                (ref === null || ref === void 0 ? void 0 : ref.current) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_ScrollAnchor__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                    target: ref
                                })
                            ]
                        }),
                        isRender && ref !== null && ref !== void 0 && ref.current ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_BackBottom__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)({
                            style: {
                                bottom: 138
                            },
                            onScroll: onScroll,
                            target: ref,
                            text: localeObject.backToBottom
                        }, backToBottomConfig)) : null
                    ]
                }),
                renderInputArea !== null && inputAreaRender !== null && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                    ref: areaHtml,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_InputArea__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                        sendButtonRender: sendButtonRender,
                        inputAreaRender: inputAreaRender || renderInputArea,
                        inputRender: inputRender
                    })
                })
            ]
        })
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 98286:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  K: () => (/* binding */ useOverrideStyles)
});

// EXTERNAL MODULE: external "antd-style"
var external_antd_style_ = __webpack_require__(23061);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__(30168);
;// CONCATENATED MODULE: ./src/components/prochat/pro-chat/es/ProChat/container/OverrideStyle/global.js

var _templateObject;

/* harmony default export */ function global(token, rootClassName) {
    return (0,external_antd_style_.css)(_templateObject || (_templateObject = (0,taggedTemplateLiteral/* default */.Z)([
        "\n    line-height: 1;\n    text-size-adjust: none;\n    text-rendering: optimizelegibility;\n    vertical-align: baseline;\n\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-overflow-scrolling: touch;\n    -webkit-tap-highlight-color: transparent;\n  }\n\n  .",
        " {\n    code {\n      font-family: ",
        " !important;\n\n      span {\n        font-family: ",
        " !important;\n      }\n    }\n\n    p {\n      word-wrap: break-word;\n    }\n\n    *::selection {\n      color: #000;\n      background: ",
        ";\n\n      -webkit-text-fill-color: unset !important;\n    }\n\n    * {\n      box-sizing: border-box;\n      vertical-align: baseline;\n    }\n  }\n"
    ])), rootClassName, token.fontFamilyCode, token.fontFamilyCode, token.blue3);
};

;// CONCATENATED MODULE: ./src/components/prochat/pro-chat/es/ProChat/container/OverrideStyle/index.js


var useOverrideStyles = (0,external_antd_style_.createStyles)(function(_ref) {
    var token = _ref.token, prefixCls = _ref.prefixCls, cx = _ref.cx;
    var rootClassName = "".concat(prefixCls, "-pro-chat");
    return {
        container: cx(rootClassName, global(token, rootClassName))
    };
});


/***/ }),

/***/ 51374:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ProChatProvider)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91);
/* harmony import */ var _StoreUpdater__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31390);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90800);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37611);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_StoreUpdater__WEBPACK_IMPORTED_MODULE_3__, _store__WEBPACK_IMPORTED_MODULE_4__, _store__WEBPACK_IMPORTED_MODULE_5__]);
([_StoreUpdater__WEBPACK_IMPORTED_MODULE_3__, _store__WEBPACK_IMPORTED_MODULE_4__, _store__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

var _excluded = [
    "children",
    "devtoolOptions",
    "chats",
    "onChatsChange",
    "loading",
    "helloMessage",
    "userMeta",
    "inputAreaProps",
    "assistantMeta",
    "actions",
    "transformToChatMessage",
    "request",
    "locale"
];






var ProChatProvider = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(function(_ref) {
    var children = _ref.children, devtoolOptions = _ref.devtoolOptions, chats = _ref.chats, onChatsChange = _ref.onChatsChange, loading = _ref.loading, helloMessage = _ref.helloMessage, userMeta = _ref.userMeta, inputAreaProps = _ref.inputAreaProps, assistantMeta = _ref.assistantMeta, actions = _ref.actions, transformToChatMessage = _ref.transformToChatMessage, request = _ref.request, locale = _ref.locale, props = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref, _excluded);
    var isWrapped = true;
    var Content = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [
            children,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_StoreUpdater__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                chatRef: props.chatRef,
                init: !loading,
                helloMessage: helloMessage,
                chats: chats,
                actions: actions,
                userMeta: userMeta,
                request: request,
                transformToChatMessage: transformToChatMessage,
                inputAreaProps: inputAreaProps,
                assistantMeta: assistantMeta,
                onChatsChange: onChatsChange,
                locale: locale
            })
        ]
    });
    try {
        (0,_store__WEBPACK_IMPORTED_MODULE_4__/* .useStoreApi */ .AC)();
    } catch (e) {
        isWrapped = false;
    }
    if (isWrapped) {
        return Content;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_store__WEBPACK_IMPORTED_MODULE_4__/* .Provider */ .zt, {
        createStore: function createStore() {
            return (0,_store__WEBPACK_IMPORTED_MODULE_5__/* .createStore */ .M)(props, devtoolOptions);
        },
        children: Content
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 31390:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var zustand_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96169);
/* harmony import */ var zustand_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(zustand_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useProChat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10455);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90800);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store__WEBPACK_IMPORTED_MODULE_2__, _hooks_useProChat__WEBPACK_IMPORTED_MODULE_3__]);
([_store__WEBPACK_IMPORTED_MODULE_2__, _hooks_useProChat__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




var StoreUpdater = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(function(_ref) {
    var init = _ref.init, onChatsChange = _ref.onChatsChange, chatRef = _ref.chatRef, request = _ref.request, userMeta = _ref.userMeta, assistantMeta = _ref.assistantMeta, helloMessage = _ref.helloMessage, transformToChatMessage = _ref.transformToChatMessage, actions = _ref.actions, inputAreaProps = _ref.inputAreaProps, chats = _ref.chats, config = _ref.config, locale = _ref.locale;
    var storeApi = (0,_store__WEBPACK_IMPORTED_MODULE_2__/* .useStoreApi */ .AC)();
    var useStoreUpdater = (0,zustand_utils__WEBPACK_IMPORTED_MODULE_1__.createStoreUpdater)(storeApi);
    useStoreUpdater("init", init);
    useStoreUpdater("userMeta", userMeta);
    useStoreUpdater("assistantMeta", assistantMeta);
    useStoreUpdater("inputAreaProps", inputAreaProps);
    useStoreUpdater("helloMessage", helloMessage);
    useStoreUpdater("config", config);
    useStoreUpdater("transformToChatMessage", transformToChatMessage);
    useStoreUpdater("actions", actions);
    useStoreUpdater("chats", chats);
    useStoreUpdater("onChatsChange", onChatsChange);
    useStoreUpdater("request", request);
    useStoreUpdater("locale", locale);
    var instance = (0,_hooks_useProChat__WEBPACK_IMPORTED_MODULE_3__/* .useProChat */ .b)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(chatRef, function() {
        return instance;
    });
    return null;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StoreUpdater);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 55063:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ ProChat)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1413);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91);
/* harmony import */ var antd_lib_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80305);
/* harmony import */ var antd_lib_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71291);
/* harmony import */ var _Provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51374);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Provider__WEBPACK_IMPORTED_MODULE_3__, _App__WEBPACK_IMPORTED_MODULE_5__]);
([_Provider__WEBPACK_IMPORTED_MODULE_3__, _App__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


var _excluded = [
    "renderInputArea",
    "__PRO_CHAT_STORE_DEVTOOLS__",
    "showTitle",
    "style",
    "className",
    "chatItemRenderConfig",
    "backToBottomConfig",
    "appStyle",
    "inputRender",
    "markdownProps",
    "renderErrorMessages",
    "inputAreaRender",
    "itemShouldUpdate",
    "onScroll",
    "sendButtonRender"
];



/**
 * ProChatProps 是 ProChat 组件的属性类型定义。
 * @template T - 聊天记录的数据类型
 */ 
function ProChat(_ref) {
    var renderInputArea = _ref.renderInputArea, __PRO_CHAT_STORE_DEVTOOLS__ = _ref.__PRO_CHAT_STORE_DEVTOOLS__, showTitle = _ref.showTitle, style = _ref.style, className = _ref.className, chatItemRenderConfig = _ref.chatItemRenderConfig, backToBottomConfig = _ref.backToBottomConfig, appStyle = _ref.appStyle, inputRender = _ref.inputRender, markdownProps = _ref.markdownProps, renderErrorMessages = _ref.renderErrorMessages, inputAreaRender = _ref.inputAreaRender, itemShouldUpdate = _ref.itemShouldUpdate, onScroll = _ref.onScroll, sendButtonRender = _ref.sendButtonRender, props = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref, _excluded);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_Provider__WEBPACK_IMPORTED_MODULE_3__/* .ProChatProvider */ .A, (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({}, props), {}, {
        devtoolOptions: __PRO_CHAT_STORE_DEVTOOLS__,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx((antd_lib_app__WEBPACK_IMPORTED_MODULE_0___default()), {
            style: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({
                height: "100%",
                width: "100%",
                position: "relative"
            }, appStyle),
            className: className,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_App__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                chatItemRenderConfig: chatItemRenderConfig,
                inputRender: inputRender,
                sendButtonRender: sendButtonRender,
                inputAreaRender: renderInputArea || inputAreaRender,
                chatRef: props.chatRef,
                showTitle: showTitle,
                style: style,
                onScroll: onScroll,
                itemShouldUpdate: itemShouldUpdate,
                renderErrorMessages: renderErrorMessages,
                backToBottomConfig: backToBottomConfig,
                className: className,
                markdownProps: markdownProps
            })
        })
    }));
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 10455:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ useProChat)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1413);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90800);
/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11857);
/* harmony import */ var _useRefFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36567);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store__WEBPACK_IMPORTED_MODULE_1__]);
_store__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





var useProChat = function useProChat() {
    var storeApi = (0,_store__WEBPACK_IMPORTED_MODULE_1__/* .useStoreApi */ .AC)();
    var _storeApi$getState = storeApi.getState(), resendMessage = _storeApi$getState.resendMessage, sendMessage = _storeApi$getState.sendMessage, stopGenerateMessage = _storeApi$getState.stopGenerateMessage, deleteMessage = _storeApi$getState.deleteMessage, clearMessage = _storeApi$getState.clearMessage, dispatchMessage = _storeApi$getState.dispatchMessage, getChatLoadingId = _storeApi$getState.getChatLoadingId;
    var getChats = (0,_useRefFunction__WEBPACK_IMPORTED_MODULE_2__/* .useRefFunction */ .J)(function() {
        return storeApi.getState().chats;
    });
    var pushChat = (0,_useRefFunction__WEBPACK_IMPORTED_MODULE_2__/* .useRefFunction */ .J)(function(chat) {
        return dispatchMessage((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({}, chat), {}, {
            type: "addMessage",
            message: chat === null || chat === void 0 ? void 0 : chat.content
        }));
    });
    var getChatMessages = (0,_useRefFunction__WEBPACK_IMPORTED_MODULE_2__/* .useRefFunction */ .J)(function() {
        return _store_selectors__WEBPACK_IMPORTED_MODULE_4__/* .chatSelectors */ .X.currentChats(storeApi.getState());
    });
    var setMessageContent = (0,_useRefFunction__WEBPACK_IMPORTED_MODULE_2__/* .useRefFunction */ .J)(function(id, content) {
        dispatchMessage({
            type: "updateMessage",
            id: id,
            key: "content",
            value: content
        });
    });
    var setMessageValue = (0,_useRefFunction__WEBPACK_IMPORTED_MODULE_2__/* .useRefFunction */ .J)(function(id, key, value) {
        dispatchMessage({
            type: "updateMessage",
            id: id,
            key: key,
            value: value
        });
    });
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function() {
        return {
            getChats: getChats,
            pushChat: pushChat,
            getChatMessages: getChatMessages,
            resendMessage: resendMessage,
            sendMessage: sendMessage,
            getChatLoadingId: getChatLoadingId,
            stopGenerateMessage: stopGenerateMessage,
            deleteMessage: deleteMessage,
            clearMessage: clearMessage,
            setMessageContent: setMessageContent,
            setMessageValue: setMessageValue
        };
    }, []);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 26226:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66073);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90800);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store__WEBPACK_IMPORTED_MODULE_1__]);
_store__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



var useProChatLocale = function useProChatLocale() {
    var locale = (0,_store__WEBPACK_IMPORTED_MODULE_1__/* .useStore */ .oR)(function(s) {
        return s.locale;
    });
    var localeObject = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function() {
        return (0,_locale__WEBPACK_IMPORTED_MODULE_2__/* .gLocaleObject */ .e)(locale);
    }, [
        locale
    ]);
    return {
        locale: locale,
        localeObject: localeObject
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useProChatLocale);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 36567:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ useRefFunction)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41451);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var useRefFunction = function useRefFunction(reFunction) {
    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    ref.current = reFunction;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function() {
        var _ref$current;
        for(var _len = arguments.length, rest = new Array(_len), _key = 0; _key < _len; _key++){
            rest[_key] = arguments[_key];
        }
        return (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.call.apply(_ref$current, [
            ref
        ].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(rest)));
    }, []);
};



/***/ }),

/***/ 57839:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  L: () => (/* binding */ chatAction)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(74165);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(15861);
// EXTERNAL MODULE: ./node_modules/lodash-es/merge.js + 44 modules
var merge = __webpack_require__(71399);
// EXTERNAL MODULE: ./node_modules/lodash-es/template.js + 20 modules
var template = __webpack_require__(95182);
// EXTERNAL MODULE: ./src/components/prochat/pro-chat/es/ProChat/const/message.js
var message = __webpack_require__(83453);
;// CONCATENATED MODULE: ./src/components/prochat/pro-chat/es/ProChat/utils/fetch.js


var getMessageError = /*#__PURE__*/ function() {
    var _ref = (0,asyncToGenerator/* default */.Z)(/*#__PURE__*/ (0,regeneratorRuntime/* default */.Z)().mark(function _callee(response) {
        var chatMessageError;
        return (0,regeneratorRuntime/* default */.Z)().wrap(function _callee$(_context) {
            while(1)switch(_context.prev = _context.next){
                case 0:
                    chatMessageError = {
                        message: "response error, status: ".concat(response.statusText),
                        type: response.status
                    };
                    return _context.abrupt("return", chatMessageError);
                case 2:
                case "end":
                    return _context.stop();
            }
        }, _callee);
    }));
    return function getMessageError(_x) {
        return _ref.apply(this, arguments);
    };
}();
/**
 * 使用流式方法获取数据
 * @param fetchFn
 * @param options
 */ var fetchSSE = /*#__PURE__*/ function() {
    var _ref2 = (0,asyncToGenerator/* default */.Z)(/*#__PURE__*/ (0,regeneratorRuntime/* default */.Z)().mark(function _callee2(fetchFn) {
        var options, response, _options$onErrorHandl, chatMessageError, returnRes, data, reader, decoder, done, _options$onMessageHan, _yield$reader$read, value, doneReading, chunkValue, _args2 = arguments;
        return (0,regeneratorRuntime/* default */.Z)().wrap(function _callee2$(_context2) {
            while(1)switch(_context2.prev = _context2.next){
                case 0:
                    options = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};
                    _context2.next = 3;
                    return fetchFn();
                case 3:
                    response = _context2.sent;
                    if (response.ok) {
                        _context2.next = 10;
                        break;
                    }
                    _context2.next = 7;
                    return getMessageError(response);
                case 7:
                    chatMessageError = _context2.sent;
                    (_options$onErrorHandl = options.onErrorHandle) === null || _options$onErrorHandl === void 0 || _options$onErrorHandl.call(options, chatMessageError);
                    return _context2.abrupt("return");
                case 10:
                    returnRes = response.clone();
                    data = response.body;
                    if (data) {
                        _context2.next = 14;
                        break;
                    }
                    return _context2.abrupt("return");
                case 14:
                    reader = data.getReader();
                    decoder = new TextDecoder();
                    done = false;
                case 17:
                    if (done) {
                        _context2.next = 28;
                        break;
                    }
                    _context2.next = 20;
                    return reader.read();
                case 20:
                    _yield$reader$read = _context2.sent;
                    value = _yield$reader$read.value;
                    doneReading = _yield$reader$read.done;
                    done = doneReading;
                    chunkValue = decoder.decode(value, {
                        stream: !doneReading
                    });
                    (_options$onMessageHan = options.onMessageHandle) === null || _options$onMessageHan === void 0 || _options$onMessageHan.call(options, chunkValue, returnRes);
                    _context2.next = 17;
                    break;
                case 28:
                    return _context2.abrupt("return", returnRes);
                case 29:
                case "end":
                    return _context2.stop();
            }
        }, _callee2);
    }));
    return function fetchSSE(_x2) {
        return _ref2.apply(this, arguments);
    };
}();

// EXTERNAL MODULE: ./src/components/prochat/pro-chat/es/ProChat/utils/message.js
var utils_message = __webpack_require__(65111);
;// CONCATENATED MODULE: ./src/components/prochat/pro-chat/es/ProChat/utils/storeDebug.js
var setNamespace = function setNamespace(namespace) {
    return function(type, payload) {
        var name = [
            namespace,
            type
        ].filter(Boolean).join("/");
        return payload ? {
            payload: payload,
            type: name
        } : name;
    };
};

// EXTERNAL MODULE: ./src/components/prochat/pro-chat/node_modules/nanoid/non-secure/index.js
var non_secure = __webpack_require__(14181);
;// CONCATENATED MODULE: ./src/components/prochat/pro-chat/es/ProChat/utils/uuid.js
// generate('1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', 16); //=> "4f90d13a42"

var nanoid = (0,non_secure/* customAlphabet */.k)("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", 8);

// EXTERNAL MODULE: ./src/components/prochat/pro-chat/es/ProChat/store/initialState.js + 1 modules
var initialState = __webpack_require__(6798);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./src/components/prochat/pro-chat/node_modules/immer/dist/immer.mjs
var immer = __webpack_require__(29146);
;// CONCATENATED MODULE: ./src/components/prochat/pro-chat/es/ProChat/store/reducers/message.js



var messagesReducer = function messagesReducer(state, payload) {
    switch(payload.type){
        case "addMessage":
            {
                return (0,immer/* produce */.Uy)(state, function(draftState) {
                    var mid = payload.id || nanoid();
                    draftState.push({
                        content: payload.message,
                        createAt: Date.now(),
                        id: mid,
                        parentId: payload.parentId,
                        role: payload.role,
                        updateAt: Date.now()
                    });
                });
            }
        case "deleteMessage":
            {
                return state.map(function(m) {
                    if (m.id !== payload.id) return m;
                    return false;
                }).filter(Boolean);
            }
        case "updateMessage":
            {
                return (0,immer/* produce */.Uy)(state, function(draftState) {
                    var id = payload.id, key = payload.key, value = payload.value;
                    var message = draftState.find(function(m) {
                        return m.id === id;
                    });
                    if (!message) return;
                    // @ts-ignore
                    message[key] = value;
                    message.updateAt = Date.now();
                });
            }
        case "updateMessageExtra":
            {
                return (0,immer/* produce */.Uy)(state, function(draftState) {
                    var id = payload.id, key = payload.key, value = payload.value;
                    var message = draftState.find(function(m) {
                        return m.id === id;
                    });
                    if (!message) return;
                    if (!message.extra) {
                        message.extra = (0,defineProperty/* default */.Z)({}, key, value);
                    } else {
                        message.extra[key] = value;
                    }
                    message.updateAt = Date.now();
                });
            }
        case "resetMessages":
            {
                return [];
            }
        default:
            {
                throw new Error("暂未实现的 type，请检查 reducer");
            }
    }
};

// EXTERNAL MODULE: ./src/components/prochat/pro-chat/es/ProChat/store/selectors/index.js + 1 modules
var selectors = __webpack_require__(11857);
;// CONCATENATED MODULE: ./src/components/prochat/pro-chat/es/ProChat/store/action.js














var t = setNamespace("chat/message");
/**
 * 聊天操作
 */ var chatAction = function chatAction(set, get) {
    return {
        clearMessage: function() {
            var _clearMessage = (0,asyncToGenerator/* default */.Z)(/*#__PURE__*/ (0,regeneratorRuntime/* default */.Z)().mark(function _callee() {
                var _get, dispatchMessage, onResetMessage;
                return (0,regeneratorRuntime/* default */.Z)().wrap(function _callee$(_context) {
                    while(1)switch(_context.prev = _context.next){
                        case 0:
                            _get = get(), dispatchMessage = _get.dispatchMessage, onResetMessage = _get.onResetMessage; // 重置消息，清空聊天记录，等待 onResetMessage 完成后再清空
                            if (!onResetMessage) {
                                _context.next = 4;
                                break;
                            }
                            _context.next = 4;
                            return onResetMessage();
                        case 4:
                            dispatchMessage({
                                type: "resetMessages"
                            });
                        // TODO: need callback after reset
                        case 5:
                        case "end":
                            return _context.stop();
                    }
                }, _callee);
            }));
            function clearMessage() {
                return;
                return _clearMessage.apply(this, arguments);
            }
            return clearMessage;
        }(),
        deleteMessage: function deleteMessage(id) {
            return;
            get().dispatchMessage({
                id: id,
                type: "deleteMessage"
            });
        },
        updateMessageContent: function() {
            var _updateMessageContent = (0,asyncToGenerator/* default */.Z)(/*#__PURE__*/ (0,regeneratorRuntime/* default */.Z)().mark(function _callee2(id, content) {
                var _get2, dispatchMessage, updateMessageContent;
                return (0,regeneratorRuntime/* default */.Z)().wrap(function _callee2$(_context2) {
                    while(1)switch(_context2.prev = _context2.next){
                        case 0:
                            _get2 = get(), dispatchMessage = _get2.dispatchMessage, updateMessageContent = _get2.updateMessageContent;
                            dispatchMessage({
                                id: id,
                                key: "content",
                                type: "updateMessage",
                                value: content
                            });
                            updateMessageContent(id, content);
                        case 3:
                        case "end":
                            return _context2.stop();
                    }
                }, _callee2);
            }));
            function updateMessageContent(_x, _x2) {
                return _updateMessageContent.apply(this, arguments);
            }
            return updateMessageContent;
        }(),
        dispatchMessage: function dispatchMessage(payload) {
            var _get3 = get(), chats = _get3.chats, onChatsChange = _get3.onChatsChange;
            var nextChats = messagesReducer(chats, payload);
            set({
                chats: nextChats
            }, false, t("dispatchMessage"));
            onChatsChange === null || onChatsChange === void 0 || onChatsChange(nextChats);
        },
        generateMessage: function() {
            var _generateMessage = (0,asyncToGenerator/* default */.Z)(/*#__PURE__*/ (0,regeneratorRuntime/* default */.Z)().mark(function _callee6(messages, assistantId) {
                var _get4, dispatchMessage, toggleChatLoading, config, defaultModelFetcher, createSmoothMessage, transformToChatMessage, updateMessageContent, abortController, slicedMessages, compilerMessages, postMessages, fetcher, output, isFunctionCall, _createSmoothMessage, startAnimation, stopAnimation, outputQueue, isAnimationActive, timeoutId, checkAndToggleChatLoading;
                return (0,regeneratorRuntime/* default */.Z)().wrap(function _callee6$(_context6) {
                    while(1)switch(_context6.prev = _context6.next){
                        case 0:
                            _get4 = get(), dispatchMessage = _get4.dispatchMessage, toggleChatLoading = _get4.toggleChatLoading, config = _get4.config, defaultModelFetcher = _get4.defaultModelFetcher, createSmoothMessage = _get4.createSmoothMessage, transformToChatMessage = _get4.transformToChatMessage, updateMessageContent = _get4.updateMessageContent;
                            abortController = toggleChatLoading(true, assistantId, t("generateMessage(start)", {
                                assistantId: assistantId,
                                messages: messages
                            })); // ========================== //
                            //   对 messages 做统一预处理    //
                            // ========================== //
                            // 1. 按参数设定截断长度
                            slicedMessages = (0,utils_message/* getSlicedMessagesWithConfig */.Z)(messages, config); // 2. 替换 inputMessage 模板
                            compilerMessages = function compilerMessages(slicedMessages) {
                                var compiler = (0,template/* default */.Z)(config.inputTemplate, {
                                    interpolate: /{{([\S\s]+?)}}/g
                                });
                                return slicedMessages.map(function(m) {
                                    if (m.role === "user") {
                                        try {
                                            return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, m), {}, {
                                                content: compiler({
                                                    text: m.content
                                                })
                                            });
                                        } catch (error) {
                                            console.error(error);
                                            return m;
                                        }
                                    }
                                    return m;
                                });
                            };
                            postMessages = !config.inputTemplate ? slicedMessages : compilerMessages(slicedMessages); // 3. 添加 systemRole
                            if (config.systemRole) {
                                postMessages.unshift({
                                    content: config.systemRole,
                                    role: "system"
                                });
                            }
                            fetcher = function fetcher() {
                                return defaultModelFetcher((0,objectSpread2/* default */.Z)({
                                    messages: postMessages,
                                    model: config.model
                                }, config.params), {
                                    signal: abortController === null || abortController === void 0 ? void 0 : abortController.signal
                                });
                            };
                            output = "";
                            isFunctionCall = false;
                            _createSmoothMessage = createSmoothMessage(assistantId), startAnimation = _createSmoothMessage.startAnimation, stopAnimation = _createSmoothMessage.stopAnimation, outputQueue = _createSmoothMessage.outputQueue, isAnimationActive = _createSmoothMessage.isAnimationActive;
                            _context6.next = 12;
                            return fetchSSE(fetcher, {
                                onErrorHandle: function onErrorHandle(error) {
                                    dispatchMessage({
                                        id: assistantId,
                                        key: "error",
                                        type: "updateMessage",
                                        value: error
                                    });
                                },
                                onAbort: function() {
                                    var _onAbort = (0,asyncToGenerator/* default */.Z)(/*#__PURE__*/ (0,regeneratorRuntime/* default */.Z)().mark(function _callee3() {
                                        return (0,regeneratorRuntime/* default */.Z)().wrap(function _callee3$(_context3) {
                                            while(1)switch(_context3.prev = _context3.next){
                                                case 0:
                                                    stopAnimation();
                                                case 1:
                                                case "end":
                                                    return _context3.stop();
                                            }
                                        }, _callee3);
                                    }));
                                    function onAbort() {
                                        return _onAbort.apply(this, arguments);
                                    }
                                    return onAbort;
                                }(),
                                onFinish: function() {
                                    var _onFinish = (0,asyncToGenerator/* default */.Z)(/*#__PURE__*/ (0,regeneratorRuntime/* default */.Z)().mark(function _callee4(content) {
                                        return (0,regeneratorRuntime/* default */.Z)().wrap(function _callee4$(_context4) {
                                            while(1)switch(_context4.prev = _context4.next){
                                                case 0:
                                                    stopAnimation();
                                                    if (!(outputQueue.length > 0 && !isFunctionCall)) {
                                                        _context4.next = 4;
                                                        break;
                                                    }
                                                    _context4.next = 4;
                                                    return startAnimation(15);
                                                case 4:
                                                    _context4.next = 6;
                                                    return updateMessageContent(assistantId, content);
                                                case 6:
                                                case "end":
                                                    return _context4.stop();
                                            }
                                        }, _callee4);
                                    }));
                                    function onFinish(_x5) {
                                        return _onFinish.apply(this, arguments);
                                    }
                                    return onFinish;
                                }(),
                                onMessageHandle: function() {
                                    var _onMessageHandle = (0,asyncToGenerator/* default */.Z)(/*#__PURE__*/ (0,regeneratorRuntime/* default */.Z)().mark(function _callee5(text) {
                                        return (0,regeneratorRuntime/* default */.Z)().wrap(function _callee5$(_context5) {
                                            while(1)switch(_context5.prev = _context5.next){
                                                case 0:
                                                    output += text;
                                                    if (!isAnimationActive && !isFunctionCall) startAnimation();
                                                    if (!(abortController !== null && abortController !== void 0 && abortController.signal.aborted)) {
                                                        _context5.next = 6;
                                                        break;
                                                    }
                                                    return _context5.abrupt("return");
                                                case 6:
                                                    _context5.t0 = outputQueue;
                                                    if (!transformToChatMessage) {
                                                        _context5.next = 13;
                                                        break;
                                                    }
                                                    _context5.next = 10;
                                                    return transformToChatMessage(text, output);
                                                case 10:
                                                    _context5.t1 = _context5.sent;
                                                    _context5.next = 14;
                                                    break;
                                                case 13:
                                                    _context5.t1 = text;
                                                case 14:
                                                    _context5.t2 = _context5.t1;
                                                    _context5.t0.push.call(_context5.t0, _context5.t2);
                                                case 16:
                                                    // TODO: need a function call judge callback
                                                    // 如果是 function call
                                                    if ((0,utils_message/* isFunctionMessage */.n)(output)) {
                                                        isFunctionCall = true;
                                                    }
                                                case 17:
                                                case "end":
                                                    return _context5.stop();
                                            }
                                        }, _callee5);
                                    }));
                                    function onMessageHandle(_x6) {
                                        return _onMessageHandle.apply(this, arguments);
                                    }
                                    return onMessageHandle;
                                }()
                            });
                        case 12:
                            // 用于存储轮询队列的计时器id
                            checkAndToggleChatLoading = function checkAndToggleChatLoading() {
                                clearTimeout(timeoutId); // 清除任何现有的计时器
                                // 等待队列内容输出完毕
                                if (outputQueue === undefined || outputQueue.length === 0 || outputQueue.toString() === "") {
                                    // 当队列为空时
                                    toggleChatLoading(false, undefined, t("generateMessage(end)"));
                                    clearTimeout(timeoutId);
                                } else {
                                    // 如果队列不为空，则设置一个延迟或者使用某种形式的轮询来再次检查队列
                                    timeoutId = setTimeout(checkAndToggleChatLoading, 30); // CHECK_INTERVAL 是毫秒数，代表检查间隔时间
                                }
                            };
                            checkAndToggleChatLoading();
                            return _context6.abrupt("return", {
                                isFunctionCall: isFunctionCall
                            });
                        case 15:
                        case "end":
                            return _context6.stop();
                    }
                }, _callee6);
            }));
            function generateMessage(_x3, _x4) {
                return _generateMessage.apply(this, arguments);
            }
            return generateMessage;
        }(),
        realFetchAIResponse: function() {
            var _realFetchAIResponse = (0,asyncToGenerator/* default */.Z)(/*#__PURE__*/ (0,regeneratorRuntime/* default */.Z)().mark(function _callee7(messages, userMessageId) {
                var _get5, dispatchMessage, generateMessage, config, getMessageId, mid;
                return (0,regeneratorRuntime/* default */.Z)().wrap(function _callee7$(_context7) {
                    while(1)switch(_context7.prev = _context7.next){
                        case 0:
                            _get5 = get(), dispatchMessage = _get5.dispatchMessage, generateMessage = _get5.generateMessage, config = _get5.config, getMessageId = _get5.getMessageId; // 添加一个空的信息用于放置 ai 响应，注意顺序不能反
                            // 因为如果顺序反了，messages 中将包含新增的 ai message
                            _context7.next = 3;
                            return getMessageId(messages, userMessageId);
                        case 3:
                            mid = _context7.sent;
                            dispatchMessage({
                                id: mid,
                                message: message/* LOADING_FLAT */.v,
                                parentId: userMessageId,
                                role: "assistant",
                                type: "addMessage"
                            });
                            // TODO: need a callback before generate message
                            // 为模型添加 fromModel 的额外信息
                            // TODO: 此处需要model 信息
                            dispatchMessage({
                                id: mid,
                                key: "fromModel",
                                type: "updateMessageExtra",
                                value: config.model
                            });
                            // 生成 ai message
                            _context7.next = 8;
                            return generateMessage(messages, mid);
                        case 8:
                        case "end":
                            return _context7.stop();
                    }
                }, _callee7);
            }));
            function realFetchAIResponse(_x7, _x8) {
                return _realFetchAIResponse.apply(this, arguments);
            }
            return realFetchAIResponse;
        }(),
        resendMessage: function() {
            var _resendMessage = (0,asyncToGenerator/* default */.Z)(/*#__PURE__*/ (0,regeneratorRuntime/* default */.Z)().mark(function _callee8(messageId) {
                var chats, currentIndex, currentMessage, contextMessages, userId, userIndex, _get6, realFetchAIResponse, latestMsg;
                return (0,regeneratorRuntime/* default */.Z)().wrap(function _callee8$(_context8) {
                    while(1)switch(_context8.prev = _context8.next){
                        case 0:
                            // 1. 构造所有相关的历史记录
                            chats = selectors/* chatSelectors */.X.currentChats(get());
                            currentIndex = chats.findIndex(function(c) {
                                return c.id === messageId;
                            });
                            if (!(currentIndex < 0)) {
                                _context8.next = 4;
                                break;
                            }
                            return _context8.abrupt("return");
                        case 4:
                            currentMessage = chats[currentIndex];
                            contextMessages = [];
                            _context8.t0 = currentMessage.role;
                            _context8.next = _context8.t0 === "function" ? 9 : _context8.t0 === "user" ? 9 : _context8.t0 === "assistant" ? 11 : 15;
                            break;
                        case 9:
                            contextMessages = chats.slice(0, currentIndex + 1);
                            return _context8.abrupt("break", 15);
                        case 11:
                            // 消息是 AI 发出的因此需要找到它的 user 消息
                            userId = currentMessage.parentId;
                            userIndex = chats.findIndex(function(c) {
                                return c.id === userId;
                            }); // 如果消息没有 parentId，那么同 user/function 模式
                            contextMessages = chats.slice(0, userIndex < 0 ? currentIndex + 1 : userIndex + 1);
                            return _context8.abrupt("break", 15);
                        case 15:
                            if (!(contextMessages.length <= 0)) {
                                _context8.next = 17;
                                break;
                            }
                            return _context8.abrupt("return");
                        case 17:
                            _get6 = get(), realFetchAIResponse = _get6.realFetchAIResponse;
                            latestMsg = contextMessages.filter(function(s) {
                                return s.role === "user";
                            }).at(-1);
                            if (latestMsg) {
                                _context8.next = 21;
                                break;
                            }
                            return _context8.abrupt("return");
                        case 21:
                            _context8.next = 23;
                            return realFetchAIResponse(contextMessages, latestMsg.id);
                        case 23:
                        case "end":
                            return _context8.stop();
                    }
                }, _callee8);
            }));
            function resendMessage(_x9) {
                return _resendMessage.apply(this, arguments);
            }
            return resendMessage;
        }(),
        sendMessage: function() {
            var _sendMessage = (0,asyncToGenerator/* default */.Z)(/*#__PURE__*/ (0,regeneratorRuntime/* default */.Z)().mark(function _callee9(message) {
                var _get7, dispatchMessage, realFetchAIResponse, userId, messages;
                return (0,regeneratorRuntime/* default */.Z)().wrap(function _callee9$(_context9) {
                    while(1)switch(_context9.prev = _context9.next){
                        case 0:
                            _get7 = get(), dispatchMessage = _get7.dispatchMessage, realFetchAIResponse = _get7.realFetchAIResponse;
                            if (message) {
                                _context9.next = 3;
                                break;
                            }
                            return _context9.abrupt("return");
                        case 3:
                            userId = nanoid();
                            dispatchMessage({
                                id: userId,
                                message: message,
                                role: "user",
                                type: "addMessage"
                            });
                            // Todo: need a callback before send message
                            // Get the current messages to generate AI response
                            messages = selectors/* chatSelectors */.X.currentChats(get());
                            _context9.next = 8;
                            return realFetchAIResponse(messages, userId);
                        case 8:
                        case "end":
                            return _context9.stop();
                    }
                }, _callee9);
            }));
            function sendMessage(_x10) {
                return _sendMessage.apply(this, arguments);
            }
            return sendMessage;
        }(),
        stopGenerateMessage: function stopGenerateMessage() {
            var _get8 = get(), abortController = _get8.abortController, toggleChatLoading = _get8.toggleChatLoading, chatLoadingId = _get8.chatLoadingId, chats = _get8.chats, dispatchMessage = _get8.dispatchMessage;
            // 如果当前 最后一条为 chatLoadingId 停止前需要清空
            if (chats && chats.length > 0) {
                var lastChat = chats[chats.length - 1];
                if (lastChat.content === message/* LOADING_FLAT */.v) {
                    dispatchMessage({
                        id: chatLoadingId,
                        key: "content",
                        type: "updateMessage",
                        value: ""
                    });
                }
            }
            if (!abortController) return;
            abortController.abort();
            toggleChatLoading(false);
        },
        toggleChatLoading: function toggleChatLoading(loading, id, action) {
            if (loading) {
                var _abortController = new AbortController();
                set({
                    abortController: _abortController,
                    chatLoadingId: id
                }, false, action);
                return _abortController;
            } else {
                set({
                    abortController: undefined,
                    chatLoadingId: undefined
                }, false, action);
            }
        },
        defaultModelFetcher: function defaultModelFetcher(params, options) {
            var _get9 = get(), request = _get9.request;
            var payload = (0,merge/* default */.Z)((0,objectSpread2/* default */.Z)({
                model: initialState/* initialModelConfig */.Q.model,
                stream: true
            }, initialState/* initialModelConfig */.Q.params), params);
            if (typeof request === "function") return request(payload.messages, payload, options === null || options === void 0 ? void 0 : options.signal);
            var url = typeof request === "string" ? request : "/api/openai/chat";
            return fetch(url, {
                body: JSON.stringify(payload),
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST",
                signal: options === null || options === void 0 ? void 0 : options.signal
            });
        },
        getMessageId: function() {
            var _getMessageId = (0,asyncToGenerator/* default */.Z)(/*#__PURE__*/ (0,regeneratorRuntime/* default */.Z)().mark(function _callee10(messages, parentId) {
                var _get10, genMessageId;
                return (0,regeneratorRuntime/* default */.Z)().wrap(function _callee10$(_context10) {
                    while(1)switch(_context10.prev = _context10.next){
                        case 0:
                            _get10 = get(), genMessageId = _get10.genMessageId;
                            if (!(typeof genMessageId === "function")) {
                                _context10.next = 3;
                                break;
                            }
                            return _context10.abrupt("return", genMessageId(messages, parentId));
                        case 3:
                            return _context10.abrupt("return", nanoid());
                        case 4:
                        case "end":
                            return _context10.stop();
                    }
                }, _callee10);
            }));
            function getMessageId(_x11, _x12) {
                return _getMessageId.apply(this, arguments);
            }
            return getMessageId;
        }(),
        createSmoothMessage: function createSmoothMessage(id) {
            var _get11 = get(), dispatchMessage = _get11.dispatchMessage;
            var buffer = "";
            // why use queue: https://shareg.pt/GLBrjpK
            var outputQueue = [];
            // eslint-disable-next-line no-undef
            var animationTimeoutId = null;
            var isAnimationActive = false;
            // when you need to stop the animation, call this function
            var stopAnimation = function stopAnimation() {
                isAnimationActive = false;
                if (animationTimeoutId !== null) {
                    clearTimeout(animationTimeoutId);
                    animationTimeoutId = null;
                }
            };
            // define startAnimation function to display the text in buffer smooth
            // when you need to start the animation, call this function
            var startAnimation = function startAnimation() {
                var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
                return new Promise(function(resolve) {
                    if (isAnimationActive) {
                        resolve();
                        return;
                    }
                    isAnimationActive = true;
                    var updateText = function updateText() {
                        // 如果动画已经不再激活，则停止更新文本
                        if (!isAnimationActive) {
                            clearTimeout(animationTimeoutId);
                            animationTimeoutId = null;
                            resolve();
                        }
                        // 如果还有文本没有显示
                        // 检查队列中是否有字符待显示
                        if (outputQueue.length > 0) {
                            // 从队列中获取前两个字符（如果存在）
                            var charsToAdd = outputQueue.splice(0, speed).join("");
                            buffer += charsToAdd;
                            // 更新消息内容，这里可能需要结合实际情况调整
                            dispatchMessage({
                                id: id,
                                key: "content",
                                type: "updateMessage",
                                value: buffer
                            });
                            // 设置下一个字符的延迟
                            animationTimeoutId = setTimeout(updateText, 16); // 16 毫秒的延迟模拟打字机效果
                        } else {
                            // 当所有字符都显示完毕时，清除动画状态
                            isAnimationActive = false;
                            animationTimeoutId = null;
                            resolve();
                        }
                    };
                    updateText();
                });
            };
            return {
                startAnimation: startAnimation,
                stopAnimation: stopAnimation,
                outputQueue: outputQueue,
                isAnimationActive: isAnimationActive
            };
        },
        getChatLoadingId: function getChatLoadingId() {
            var _get12 = get(), chatLoadingId = _get12.chatLoadingId;
            return chatLoadingId;
        }
    };
};


/***/ }),

/***/ 90800:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AC: () => (/* binding */ useStoreApi),
/* harmony export */   oR: () => (/* binding */ useStore),
/* harmony export */   zt: () => (/* binding */ Provider)
/* harmony export */ });
/* harmony import */ var zustand_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96169);
/* harmony import */ var zustand_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zustand_utils__WEBPACK_IMPORTED_MODULE_0__);


var _createContext = (0,zustand_utils__WEBPACK_IMPORTED_MODULE_0__.createContext)(), useStore = _createContext.useStore, useStoreApi = _createContext.useStoreApi, Provider = _createContext.Provider;


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6798:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Q: () => (/* binding */ initialModelConfig),
  E: () => (/* binding */ initialState)
});

;// CONCATENATED MODULE: ./src/components/prochat/pro-chat/es/ProChat/const/meta.js
// export var DEFAULT_AVATAR = '🍠';
// export var DEFAULT_USER_AVATAR = '🤵';
// export declare const DEFAULT_AVATAR = "\uD83E\uDD16";
var DEFAULT_AVATAR = "https://static.vecteezy.com/system/resources/previews/021/059/827/non_2x/chatgpt-logo-chat-gpt-icon-on-white-background-free-vector.jpg";
// export declare const DEFAULT_USER_AVATAR = "\uD83D\uDE00";
var DEFAULT_USER_AVATAR = "https://static.vecteezy.com/system/resources/previews/022/123/337/original/user-icon-profile-icon-account-icon-login-sign-line-vector.jpg";

;// CONCATENATED MODULE: ./src/components/prochat/pro-chat/es/ProChat/store/initialState.js

var initialModelConfig = {
    historyCount: 1,
    model: "gpt-3.5-turbo",
    params: {
        frequency_penalty: 0,
        presence_penalty: 0,
        temperature: 0.6,
        top_p: 1
    },
    systemRole: ""
};
var initialState = {
    chats: [],
    init: true,
    displayMode: "chat",
    userMeta: {
        avatar: DEFAULT_USER_AVATAR
    },
    assistantMeta: {
        avatar: DEFAULT_AVATAR
    },
    config: initialModelConfig
};


/***/ }),

/***/ 11857:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  X: () => (/* binding */ chatSelectors)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js
var createForOfIteratorHelper = __webpack_require__(37762);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(91);
// EXTERNAL MODULE: ./src/components/prochat/pro-chat/es/locale/index.js + 3 modules
var locale = __webpack_require__(66073);
// EXTERNAL MODULE: ./src/components/prochat/pro-chat/es/ProChat/utils/message.js
var message = __webpack_require__(65111);
;// CONCATENATED MODULE: ./src/components/prochat/pro-chat/es/ProChat/store/selectors/chat.js



var _excluded = [
    "avatar",
    "title",
    "backgroundColor"
];


// 当前激活的消息列表
var currentChats = function currentChats(s) {
    if (Object.keys(s.chats).length === 0) return [];
    var getMeta = function getMeta(message) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        var _s$userMeta = s.userMeta, avatar = _s$userMeta.avatar, title = _s$userMeta.title, backgroundColor = _s$userMeta.backgroundColor, rest = (0,objectWithoutProperties/* default */.Z)(_s$userMeta, _excluded);
        var assistant = s.assistantMeta;
        switch(message === null || message === void 0 ? void 0 : message.role){
            case "user":
                {
                    return (0,objectSpread2/* default */.Z)({
                        avatar: avatar,
                        title: title
                    }, rest);
                }
            case "system":
                {
                    return assistant;
                }
            case "assistant":
                {
                    return {
                        avatar: assistant === null || assistant === void 0 ? void 0 : assistant.avatar,
                        backgroundColor: assistant === null || assistant === void 0 ? void 0 : assistant.backgroundColor,
                        title: assistant === null || assistant === void 0 ? void 0 : assistant.title
                    };
                }
        }
        return (0,objectSpread2/* default */.Z)({}, message);
    };
    var basic = s.chats// 映射头像关系
    .map(function(m) {
        return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, m), {}, {
            meta: getMeta(m)
        });
    });
    var finalList = [];
    var addItem = function addItem(item) {
        var isExist = finalList.findIndex(function(i) {
            return item.id === i.id;
        }) > -1;
        if (!isExist) {
            finalList.push(item);
        }
    };
    // 基于添加逻辑进行重排序
    var _iterator = (0,createForOfIteratorHelper/* default */.Z)(basic), _step;
    try {
        for(_iterator.s(); !(_step = _iterator.n()).done;){
            var item = _step.value;
            // 先判存在与否，不存在就加入
            addItem(item);
            var _iterator2 = (0,createForOfIteratorHelper/* default */.Z)(basic), _step2;
            try {
                for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
                    var another = _step2.value;
                    if (another.parentId === item.id) {
                        addItem(another);
                    }
                }
            } catch (err) {
                _iterator2.e(err);
            } finally{
                _iterator2.f();
            }
        }
    } catch (err) {
        _iterator.e(err);
    } finally{
        _iterator.f();
    }
    return finalList;
};
// 针对新助手添加初始化时的自定义消息
var currentChatsWithGuideMessage = function currentChatsWithGuideMessage(s) {
    var _s$helloMessage;
    var data = currentChats(s);
    // TODO: need topic inject
    var isBrandNewChat = data.length === 0;
    if (!isBrandNewChat) return data;
    var emptyInboxGuideMessage = (0,objectSpread2/* default */.Z)({
        content: (_s$helloMessage = s.helloMessage) !== null && _s$helloMessage !== void 0 ? _s$helloMessage : (0,locale/* gLocaleObject */.e)(s.locale).defaultHelloMessage,
        createAt: Date.now(),
        extra: {},
        id: "default",
        meta: s.assistantMeta,
        role: "hello",
        updateAt: Date.now()
    }, data);
    return [
        emptyInboxGuideMessage
    ];
};
var currentChatsWithHistoryConfig = function currentChatsWithHistoryConfig(s) {
    var chats = currentChats(s);
    return (0,message/* getSlicedMessagesWithConfig */.Z)(chats, s.config);
};
var chatsMessageString = function chatsMessageString(s) {
    var chats = currentChatsWithHistoryConfig(s);
    return chats.map(function(m) {
        return m.content;
    }).join("");
};

;// CONCATENATED MODULE: ./src/components/prochat/pro-chat/es/ProChat/store/selectors/index.js

var chatSelectors = {
    chatsMessageString: chatsMessageString,
    currentChats: currentChats,
    currentChatsWithGuideMessage: currentChatsWithGuideMessage,
    currentChatsWithHistoryConfig: currentChatsWithHistoryConfig
};


/***/ }),

/***/ 37611:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ createStore)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1413);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91);
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12404);
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es_merge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71399);
/* harmony import */ var zustand_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96169);
/* harmony import */ var zustand_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(zustand_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var zustand_traditional__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50274);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57839);
/* harmony import */ var _initialState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6798);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zustand_traditional__WEBPACK_IMPORTED_MODULE_2__]);
zustand_traditional__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


var _excluded = [
    "loading",
    "initialChats",
    "chats"
];






//  ===============  聚合 createStoreFn ============ //
var vanillaStore = function vanillaStore(_ref) {
    var loading = _ref.loading, initialChats = _ref.initialChats, chats = _ref.chats, props = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(_ref, _excluded);
    return function() {
        // initState = innerState + props
        var finalInitChats = chats !== null && chats !== void 0 ? chats : initialChats;
        var state = (0,lodash_es_merge__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({}, _initialState__WEBPACK_IMPORTED_MODULE_5__/* .initialState */ .E, (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({
            init: !loading,
            chats: Array.isArray(finalInitChats) ? finalInitChats : Object.values(finalInitChats || {})
        }, props));
        return (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({}, state), _action__WEBPACK_IMPORTED_MODULE_7__/* .chatAction */ .L.apply(void 0, arguments));
    };
};
//
// ===============  封装 createStore ============ //
var PRO_CHAT = "PRO_CHAT";
var isDev = "production" === "development";
var createStore = function createStore(props) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var devtools = (0,zustand_utils__WEBPACK_IMPORTED_MODULE_1__.optionalDevtools)(options !== false);
    var devtoolOptions = options === false ? undefined : options === true ? {
        name: PRO_CHAT + (isDev ? "_DEV" : "")
    } : options;
    return (0,zustand_traditional__WEBPACK_IMPORTED_MODULE_2__.createWithEqualityFn)()(devtools(vanillaStore(props), devtoolOptions), (fast_deep_equal__WEBPACK_IMPORTED_MODULE_0___default()));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 65111:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ getSlicedMessagesWithConfig),
/* harmony export */   n: () => (/* binding */ isFunctionMessage)
/* harmony export */ });
/* harmony import */ var _const_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83453);

var isFunctionMessage = function isFunctionMessage(content) {
    return content.startsWith(_const_message__WEBPACK_IMPORTED_MODULE_0__/* .FUNCTION_MESSAGE_FLAG */ .s);
};
var getSlicedMessagesWithConfig = function getSlicedMessagesWithConfig(messages, config) {
    // 如果没有开启历史消息数限制，或者限制为 0，则直接返回
    if (!config.enableHistoryCount || !config.historyCount) return messages;
    // 如果开启了，则返回尾部的N条消息
    return messages.reverse().slice(0, config.historyCount).reverse();
};


/***/ }),

/***/ 75857:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ components_Spotlight)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(91);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(86854);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__(30168);
// EXTERNAL MODULE: external "antd-style"
var external_antd_style_ = __webpack_require__(23061);
;// CONCATENATED MODULE: ./src/components/prochat/pro-chat/es/components/Spotlight/style.js

var _templateObject;

var useStyles = (0,external_antd_style_.createStyles)(function(_ref, _ref2) {
    var _offset$x, _offset$y;
    var css = _ref.css, token = _ref.token, isDarkMode = _ref.isDarkMode;
    var offset = _ref2.offset, outside = _ref2.outside, size = _ref2.size;
    var spotlightX = ((_offset$x = offset === null || offset === void 0 ? void 0 : offset.x) !== null && _offset$x !== void 0 ? _offset$x : 0) + "px";
    var spotlightY = ((_offset$y = offset === null || offset === void 0 ? void 0 : offset.y) !== null && _offset$y !== void 0 ? _offset$y : 0) + "px";
    var spotlightOpacity = outside ? "0" : ".1";
    var spotlightSize = size + "px";
    return css(_templateObject || (_templateObject = (0,taggedTemplateLiteral/* default */.Z)([
        "\n      pointer-events: none;\n\n      position: absolute;\n      z-index: 1;\n      inset: 0;\n\n      opacity: ",
        ";\n      background: radial-gradient(\n        ",
        " circle at ",
        " ",
        ",\n        ",
        ",\n        ",
        "\n      );\n      border-radius: inherit;\n\n      transition: all 0.2s;\n    "
    ])), spotlightOpacity, spotlightSize, spotlightX, spotlightY, isDarkMode ? token.colorText : "#fff", isDarkMode ? "transparent" : token.colorTextQuaternary);
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/components/prochat/pro-chat/es/components/Spotlight/index.js



var _excluded = [
    "className",
    "size"
];



var useMouseOffset = function useMouseOffset() {
    var _useState = (0,external_react_.useState)(), _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2), offset = _useState2[0], setOffset = _useState2[1];
    var _useState3 = (0,external_react_.useState)(true), _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2), outside = _useState4[0], setOutside = _useState4[1];
    var reference = (0,external_react_.useRef)();
    (0,external_react_.useEffect)(function() {
        if (reference.current && reference.current.parentElement) {
            var element = reference.current.parentElement;
            // debounce?
            var onMouseMove = function onMouseMove(e) {
                var bound = element.getBoundingClientRect();
                setOffset({
                    x: e.clientX - bound.x,
                    y: e.clientY - bound.y
                });
                setOutside(false);
            };
            var onMouseLeave = function onMouseLeave() {
                setOutside(true);
            };
            element.addEventListener("mousemove", onMouseMove);
            element.addEventListener("mouseleave", onMouseLeave);
            return function() {
                element.removeEventListener("mousemove", onMouseMove);
                element.removeEventListener("mouseleave", onMouseLeave);
            };
        }
    }, []);
    return [
        offset,
        outside,
        reference
    ];
};
var Spotlight = /*#__PURE__*/ (0,external_react_.memo)(function(_ref) {
    var className = _ref.className, _ref$size = _ref.size, size = _ref$size === void 0 ? 64 : _ref$size, properties = (0,objectWithoutProperties/* default */.Z)(_ref, _excluded);
    var _useMouseOffset = useMouseOffset(), _useMouseOffset2 = (0,slicedToArray/* default */.Z)(_useMouseOffset, 3), offset = _useMouseOffset2[0], outside = _useMouseOffset2[1], reference = _useMouseOffset2[2];
    var _useStyles = useStyles({
        offset: offset,
        outside: outside,
        size: size
    }), styles = _useStyles.styles, cx = _useStyles.cx;
    return /*#__PURE__*/ jsx_runtime.jsx("div", (0,objectSpread2/* default */.Z)({
        className: cx(styles, className),
        ref: reference
    }, properties));
});
/* harmony default export */ const components_Spotlight = (Spotlight);


/***/ }),

/***/ 93391:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1413);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(91);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30168);
/* harmony import */ var antd_lib_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51886);
/* harmony import */ var antd_lib_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tag__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23061);
/* harmony import */ var antd_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_layout_kit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82823);
/* harmony import */ var react_layout_kit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_layout_kit__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85893);



var _excluded = [
    "icon",
    "children",
    "size"
];
var _templateObject, _templateObject2;






var useStyles = (0,antd_style__WEBPACK_IMPORTED_MODULE_1__.createStyles)(function(_ref) {
    var cx = _ref.cx, css = _ref.css, token = _ref.token;
    return {
        small: css(_templateObject || (_templateObject = (0,_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)([
            "\n    padding: 2px 6px;\n    line-height: 1;\n  "
        ]))),
        tag: cx(css(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)([
            "\n    color: ",
            " !important;\n    background: ",
            ";\n    border: ",
            "px;\n\n    &:hover {\n      color: ",
            ";\n      background: ",
            ";\n    }\n  "
        ])), token.colorTextSecondary, token.colorFillSecondary, token.borderRadius, token.colorText, token.colorFill))
    };
});
var Tag = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(function(_ref2) {
    var icon = _ref2.icon, children = _ref2.children, _ref2$size = _ref2.size, size = _ref2$size === void 0 ? "default" : _ref2$size, props = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(_ref2, _excluded);
    var _useStyles = useStyles(), styles = _useStyles.styles, cx = _useStyles.cx;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((antd_lib_tag__WEBPACK_IMPORTED_MODULE_0___default()), (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)({
        bordered: false,
        className: cx(styles.tag, size === "small" && styles.small)
    }, props), {}, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_layout_kit__WEBPACK_IMPORTED_MODULE_3__.Flexbox, {
            align: "center",
            gap: 4,
            horizontal: true,
            children: [
                icon,
                children
            ]
        })
    }));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tag);


/***/ }),

/***/ 15797:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ useChatListActionsBar)
/* harmony export */ });
/* harmony import */ var modularize_import_loader_name_Copy_from_default_as_default_join_esm_icons_copy_lucide_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76915);
/* harmony import */ var modularize_import_loader_name_Edit_from_default_as_default_join_esm_icons_pen_square_lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96895);
/* harmony import */ var modularize_import_loader_name_RotateCw_from_default_as_default_join_esm_icons_rotate_cw_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62888);
/* harmony import */ var modularize_import_loader_name_Trash_from_default_as_default_join_esm_icons_trash_lucide_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13671);




var useChatListActionsBar = function useChatListActionsBar(text) {
    return {
        copy: {
            icon: modularize_import_loader_name_Copy_from_default_as_default_join_esm_icons_copy_lucide_react__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z,
            key: "copy",
            label: (text === null || text === void 0 ? void 0 : text.copy) || "Copy"
        },
        del: {
            icon: modularize_import_loader_name_Trash_from_default_as_default_join_esm_icons_trash_lucide_react__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
            key: "del",
            label: (text === null || text === void 0 ? void 0 : text.delete) || "Delete"
        },
        divider: {
            type: "divider"
        },
        edit: {
            icon: modularize_import_loader_name_Edit_from_default_as_default_join_esm_icons_pen_square_lucide_react__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
            key: "edit",
            label: (text === null || text === void 0 ? void 0 : text.edit) || "Edit"
        },
        regenerate: {
            icon: modularize_import_loader_name_RotateCw_from_default_as_default_join_esm_icons_rotate_cw_lucide_react__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
            key: "regenerate",
            label: (text === null || text === void 0 ? void 0 : text.regenerate) || "Regenerate"
        }
    };
};


/***/ }),

/***/ 66073:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  e: () => (/* binding */ gLocaleObject)
});

;// CONCATENATED MODULE: ./src/components/prochat/pro-chat/es/locale/en-US.js
/* harmony default export */ const en_US = ({
    placeholder: "Please enter a message...",
    backToBottom: "Back to bottom",
    clearCurrentDialogue: "Clear current dialogue",
    clearDialogue: "Clear dialogue",
    clearModalTitle: "You are about to clear the session, and you will not be able to retrieve it after clearing. Do you want to clear the current session?",
    defaultHelloMessage: "Let us start chatting",
    cancel: "Cancel",
    confirm: "Confirm",
    copy: "Copy",
    copySuccess: "Copy Success",
    delete: "Delete",
    edit: "Edit",
    history: "History",
    regenerate: "Regenerate"
});

;// CONCATENATED MODULE: ./src/components/prochat/pro-chat/es/locale/zh-CN.js
/* harmony default export */ const zh_CN = ({
    placeholder: "Nhập c\xe2u hỏi",
    backToBottom: "Quay lại",
    clearCurrentDialogue: "Xo\xe1 cuộc tr\xf2 chuyện hiện tại",
    clearDialogue: "Xo\xe1 to\xe0n bộ cuộc tr\xf2 chuyện",
    clearModalTitle: "Bạn sắp x\xf3a phi\xean của m\xecnh. Sau khi x\xf3a, bạn sẽ kh\xf4ng thể truy xuất phi\xean đ\xf3. X\xf3a phi\xean hiện tại?",
    defaultHelloMessage: "Xin ch\xe0o!",
    cancel: "Huỷ",
    confirm: "X\xe1c nhận",
    copy: "Copy",
    copySuccess: "Copy th\xe0nh c\xf4ng",
    delete: "Xo\xe1",
    edit: "Sửa",
    history: "Lịch sử",
    regenerate: "T\xe1i tạo"
});

;// CONCATENATED MODULE: ./src/components/prochat/pro-chat/es/locale/zh-HK.js
/* harmony default export */ const zh_HK = ({
    placeholder: "請輸入訊息...",
    backToBottom: "回到底部",
    clearCurrentDialogue: "清除當前對話",
    clearDialogue: "清除對話",
    clearModalTitle: "您即將清除會話，清除後將無法恢復。您確定要清除當前會話嗎？",
    defaultHelloMessage: "讓我們開始聊天吧",
    cancel: "取消",
    confirm: "確認",
    copy: "複製",
    copySuccess: "複製成功",
    delete: "刪除",
    edit: "編輯",
    history: "歷史",
    regenerate: "重新生成"
});

;// CONCATENATED MODULE: ./src/components/prochat/pro-chat/es/locale/index.js



var locales = {
    "en-US": en_US,
    "zh-CN": zh_CN,
    "zh-HK": zh_HK,
    en: en_US
};
var gLocaleObject = function gLocaleObject(gLocale) {
    return locales[gLocale] || locales["en-US"];
};


/***/ }),

/***/ 65532:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84626);
/* harmony import */ var src_lib_utils_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45354);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([___WEBPACK_IMPORTED_MODULE_1__]);
___WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const useChatHistory = ()=>{
    const { data: chatHistory, error: chatHistoryError, refetch: refetchChatList, isLoading: chatLoading } = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)("chat-history", ___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getChatHistory, {
        staleTime: src_lib_utils_constant__WEBPACK_IMPORTED_MODULE_2__/* .DEFAULT_STALE_TIME */ .ok,
        keepPreviousData: true,
        cacheTime: src_lib_utils_constant__WEBPACK_IMPORTED_MODULE_2__/* .ONE_DAY_CACHE_TIME */ .bQ,
        refetchOnWindowFocus: false
    });
    return {
        chatHistory,
        chatHistoryError,
        refetchChatList,
        chatLoading
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useChatHistory);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 16993:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57101);
/* harmony import */ var antd_lib_float_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98766);
/* harmony import */ var antd_lib_float_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_float_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30675);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_lib_api_course__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84626);
/* harmony import */ var antd_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23061);
/* harmony import */ var antd_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_components_prochat_pro_chat__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(55063);
/* harmony import */ var src_components_prochat_pro_chat_es_ChatItem_components_Loading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(68895);
/* harmony import */ var src_lib_api_course_query_hooks_useChatHistory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65532);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_icons_tb__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(44152);
/* harmony import */ var react_icons_tb__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_tb__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4115);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, src_lib_api_course__WEBPACK_IMPORTED_MODULE_4__, src_lib_api_course_query_hooks_useChatHistory__WEBPACK_IMPORTED_MODULE_6__, _emotion_styled__WEBPACK_IMPORTED_MODULE_9__, src_components_prochat_pro_chat__WEBPACK_IMPORTED_MODULE_11__]);
([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, src_lib_api_course__WEBPACK_IMPORTED_MODULE_4__, src_lib_api_course_query_hooks_useChatHistory__WEBPACK_IMPORTED_MODULE_6__, _emotion_styled__WEBPACK_IMPORTED_MODULE_9__, src_components_prochat_pro_chat__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable prettier/prettier */ 




// import { ProChat } from '@ant-design/pro-chat';





const { Search } = (antd_lib_input__WEBPACK_IMPORTED_MODULE_2___default());


const GPTPageUI = ()=>{
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const theme = (0,antd_style__WEBPACK_IMPORTED_MODULE_5__.useTheme)();
    const route = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const getSearchData = async (searchTerm)=>{
        try {
            setLoading(true);
            const searchResult = await src_lib_api_course__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.chat(searchTerm);
            return searchResult.content;
        } catch (error) {
            console.log("error", error);
        } finally{
            setLoading(false);
        }
    };
    const delay = async (text)=>{
        const res = await getSearchData(text);
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(res || "");
            }, 2000);
        });
    };
    const { chatHistory, chatLoading } = (0,src_lib_api_course_query_hooks_useChatHistory__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "side-item search-bar",
        children: chatLoading ? /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_prochat_pro_chat_es_ChatItem_components_Loading__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}) : /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            style: {
                background: theme.colorBgLayout
            },
            children: [
                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_prochat_pro_chat__WEBPACK_IMPORTED_MODULE_11__/* .ProChat */ .j, {
                    request: async (messages)=>{
                        const text = await delay(messages?.[messages?.length - 1]?.content);
                        return new Response(text);
                    },
                    style: {
                        height: "100vh"
                    },
                    initialChats: chatHistory?.map((v)=>({
                            ...v,
                            createAt: v.created_at,
                            updateAt: v.created_at,
                            role: v.owner === "user" ? "user" : "system",
                            error: undefined
                        })) || []
                }),
                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FloatButtonStyled, {
                    children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_float_button__WEBPACK_IMPORTED_MODULE_1___default()), {
                        shape: "circle",
                        type: "primary",
                        style: {
                            top: 15,
                            bottom: "100vh",
                            left: 10,
                            backgroundColor: "transparent"
                        },
                        icon: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_tb__WEBPACK_IMPORTED_MODULE_8__.TbDoorEnter, {}),
                        tooltip: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: "Trang chủ"
                        }),
                        onClick: ()=>{
                            route.push("/");
                        }
                    })
                })
            ]
        })
    });
};
const GPTSection = ()=>{
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GPTPageUI, {});
};
const FloatButtonStyled = _emotion_styled__WEBPACK_IMPORTED_MODULE_9__["default"].div`
  .ant-float-btn > div {
    background: #252525;
    svg {
      fill: #fff;
    }
    &:hover {
      background-color: #252525;
    }
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GPTSection);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
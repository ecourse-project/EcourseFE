"use strict";
exports.id = 3583;
exports.ids = [3583];
exports.modules = {

/***/ 6865:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/banner.98dff1ca.png","height":267,"width":2000,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAIAAABsYngUAAAAI0lEQVR42mN88/zpdxZufk5mpv8Mf/78/v/n59c/jN8/fwAArI0PjwZH39cAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":1});

/***/ }),

/***/ 9661:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo.65cdd530.png","height":579,"width":2084,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAANUlEQVR42g3FwQ2AIBAAsA7gaaIfg0bWM8wHzMc9muqUQU3fz4m42bGRd55UJ2/jQpSEA7EACn4Gfn79CxkAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":2});

/***/ }),

/***/ 3208:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7101);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__]);
_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const Footer = ()=>/*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
        children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    href: "/",
                    className: "logo-font",
                    children: "conduit"
                }),
                /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    className: "attribution",
                    children: [
                        "An interactive learning project from ",
                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "https://thinkster.io",
                            children: "Thinkster"
                        }),
                        ". Code & design licensed under MIT."
                    ]
                })
            ]
        })
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3583:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7101);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _navbar_banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8109);
/* harmony import */ var _navbar_nav_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7152);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3208);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, _navbar_banner__WEBPACK_IMPORTED_MODULE_2__, _navbar_nav_bar__WEBPACK_IMPORTED_MODULE_3__, _Footer__WEBPACK_IMPORTED_MODULE_4__]);
([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, _navbar_banner__WEBPACK_IMPORTED_MODULE_2__, _navbar_nav_bar__WEBPACK_IMPORTED_MODULE_3__, _Footer__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const Layout = ({ children, isNoneHeader = false, isNoneFooter = true })=>/*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: !isNoneHeader && /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_navbar_banner__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: !isNoneHeader && /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_navbar_nav_bar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
            }),
            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "page-container",
                children: [
                    children,
                    !isNoneFooter && /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Footer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                ]
            })
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8109:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7101);
/* harmony import */ var antd_lib_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8070);
/* harmony import */ var antd_lib_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_assets_images_banner_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6865);
/* harmony import */ var src_assets_images_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9661);
/* harmony import */ var src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(351);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4115);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, _emotion_styled__WEBPACK_IMPORTED_MODULE_6__]);
([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, _emotion_styled__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const BannerWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"].div`
  width: 100%;
  display: flex;
  justify-content: center;

  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 5px;
  --bs-gutter-x: 5rem;
  --bs-gutter-y: 0;
  .app-logo,
  .app-banner {
    height: 100px;
  }
  .app-banner {
    height: 100px;
  }
`;
const Banner = ()=>{
    return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(BannerWrapper, {
        children: [
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "app-logo",
                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.HOME,
                    children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                        src: src_assets_images_logo_png__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.src,
                        preview: false,
                        height: 100
                    })
                })
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "app-banner",
                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                    src: src_assets_images_banner_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.src,
                    preview: false,
                    height: 100
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Banner);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7152:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7101);
/* harmony import */ var _ant_design_icons_lib_icons_HomeFilled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8252);
/* harmony import */ var _ant_design_icons_lib_icons_HomeFilled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_HomeFilled__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons_lib_icons_LogoutOutlined__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6076);
/* harmony import */ var _ant_design_icons_lib_icons_LogoutOutlined__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_LogoutOutlined__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons_lib_icons_SettingOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3221);
/* harmony import */ var _ant_design_icons_lib_icons_SettingOutlined__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_SettingOutlined__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ant_design_icons_lib_icons_ShoppingCartOutlined__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2756);
/* harmony import */ var _ant_design_icons_lib_icons_ShoppingCartOutlined__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_ShoppingCartOutlined__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ant_design_icons_lib_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2127);
/* harmony import */ var _ant_design_icons_lib_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3139);
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2974);
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2278);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1788);
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_space__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7374);
/* harmony import */ var antd_lib_space__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_space__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9699);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(4317);
/* harmony import */ var src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(351);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(4115);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, _emotion_react__WEBPACK_IMPORTED_MODULE_6__, _emotion_styled__WEBPACK_IMPORTED_MODULE_18__]);
([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, _emotion_react__WEBPACK_IMPORTED_MODULE_6__, _emotion_styled__WEBPACK_IMPORTED_MODULE_18__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



















const Nav = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_14___default().memo(()=>{
    const header = (0,react_redux__WEBPACK_IMPORTED_MODULE_15__.useSelector)((state)=>state.app.header);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_13__.useRouter)();
    const myProfile = (0,react_redux__WEBPACK_IMPORTED_MODULE_15__.useSelector)((state)=>state.app.user);
    const goToPage = (type, topicValue, navHeader)=>{
        return type === src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_16__/* .NavTypeEnum */ .pE.DOCUMENT ? `${src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z.DOCUMENT}?topic=${topicValue}&header=${navHeader}&page=1` : type === src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_16__/* .NavTypeEnum */ .pE.COURSE ? `${src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z.COURSE}?topic=${topicValue}&header=${navHeader}&page=1` : type === src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_16__/* .NavTypeEnum */ .pE.CLASS ? `${src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z.CLASS}?topic=${topicValue}&header=${navHeader}&page=1&isClass=true` : type === src_lib_types_backend_modal__WEBPACK_IMPORTED_MODULE_16__/* .NavTypeEnum */ .pE.POST ? `${src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z.POST}?topic=${topicValue}&header=${navHeader}&page=1` : "";
    };
    const generateItem = (navItem)=>{
        return navItem.topic.map((v, i)=>({
                key: i,
                label: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_12___default()), {
                    href: `${goToPage(navItem.type?.toLocaleUpperCase(), v.value || "ALL", navItem.header)}`,
                    css: _emotion_react__WEBPACK_IMPORTED_MODULE_6__.css`
            background-color: ${router.query?.[navItem.type?.toLocaleLowerCase()] === v.label ? "#cdcdcd" : ""};
          `,
                    children: v.label
                }),
                icon: "",
                title: v.label
            }));
    };
    const accountItems = [
        {
            key: "1",
            label: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_12___default()), {
                href: src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z.SETTINGS,
                children: "C\xe0i đặt"
            }),
            icon: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_SettingOutlined__WEBPACK_IMPORTED_MODULE_3___default()), {})
        },
        {
            key: "2",
            label: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_12___default()), {
                href: src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z.LOGOUT,
                children: "Đăng xuất"
            }),
            icon: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_LogoutOutlined__WEBPACK_IMPORTED_MODULE_2___default()), {})
        }
    ];
    return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(NavStyle, {
        id: "menu-nav",
        router: router,
        children: [
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "home",
                children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_12___default()), {
                    href: src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z.HOME,
                    className: "logo",
                    css: _emotion_react__WEBPACK_IMPORTED_MODULE_6__.css`
            opacity: ${router.pathname === src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z.HOME ? 1 : 0.6};
          `,
                    children: [
                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_HomeFilled__WEBPACK_IMPORTED_MODULE_1___default()), {}),
                        "TRANG CHỦ"
                    ]
                })
            }),
            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "menu-container",
                children: [
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "menu-left",
                        children: header.map((v, index)=>{
                            const items = generateItem(v);
                            return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_9___default()), {
                                menu: {
                                    items
                                },
                                getPopupContainer: ()=>document.getElementById("menu-nav"),
                                dropdownRender: (menues)=>{
                                    if (!menues) return;
                                    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "dropdown-Cuong",
                                        css: _emotion_react__WEBPACK_IMPORTED_MODULE_6__.css`
                        max-width: 200px;
                        margin-top: 12px;
                        .ant-dropdown-menu {
                          span {
                            width: 100%;
                            cursor: pointer;
                            a {
                              color: #000 !important;
                              font-weight: 400;
                              text-overflow: ellipsis;
                              text-overflow: nowrap;
                              overflow: hidden;
                              max-width: 100%;
                              display: block;
                            }
                          }
                        }
                      `,
                                        children: menues
                                    });
                                },
                                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_12___default()), {
                                    href: goToPage(v.type?.toLocaleUpperCase(), "ALL", v.header),
                                    css: _emotion_react__WEBPACK_IMPORTED_MODULE_6__.css`
                    opacity: ${router.pathname.includes(v.type?.toLocaleLowerCase()) && v.header.includes(router.query?.header) ? 1 : 0.6};
                  `,
                                    children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_space__WEBPACK_IMPORTED_MODULE_10___default()), {
                                        children: v.header
                                    })
                                })
                            }, index);
                        })
                    }),
                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "menu-right",
                        children: [
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_12___default()), {
                                href: src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z.CART,
                                className: "cart-btn",
                                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_ShoppingCartOutlined__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    className: "cart-icon"
                                })
                            }),
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_divider__WEBPACK_IMPORTED_MODULE_8___default()), {
                                type: "vertical",
                                style: {
                                    height: "100%"
                                }
                            }),
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "account-group",
                                id: "account-dropdown",
                                children: !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_11___default()(myProfile) ? /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_9___default()), {
                                    menu: {
                                        items: accountItems
                                    },
                                    placement: "bottomRight",
                                    arrow: true,
                                    className: "cuongDropdown",
                                    // open={true}
                                    overlayClassName: "account-overlay",
                                    overlayStyle: {
                                        minWidth: 130
                                    },
                                    children: myProfile.avatar ? /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_avatar__WEBPACK_IMPORTED_MODULE_7___default()), {
                                        shape: "square",
                                        src: myProfile.avatar,
                                        icon: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_5___default()), {})
                                    }) : /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        className: "setting-icon"
                                    })
                                }) : /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_12___default()), {
                                    href: src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z.LOGIN,
                                    className: "login-btn",
                                    children: "Đăng nhập"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);
const NavStyle = _emotion_styled__WEBPACK_IMPORTED_MODULE_18__["default"].div`
  display: flex;
  justify-content: flex-start;
  border-radius: 5px;
  font-size: 13px;
  height: 47px;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;

  border-radius: 5px;

  --bs-gutter-x: 5rem;
  --bs-gutter-y: 0;
  .ant-dropdown {
    margin-top: 12px;
  }
  .menu-left,
  .home {
    a {
      font-weight: 700;
      color: #fff !important;
    }
  }
  .home {
    border-radius: 3px 0 0 5px;
    padding: 0 10px;
    background-color: #3a3a3a;
    a {
      height: 100%;
      display: flex;
      align-items: center;
    }
  }
  .ant-space,
  .account-group,
  .menu-right .anticon {
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  }
  .menu-container {
    background-color: #4c4c4c;
    border-radius: 0 5px 5px 0;
    padding: 0 10px;
    flex: 1;
    display: flex;
    gap: 15px;
    align-items: center;
    justify-content: space-between;
    .menu-left {
      display: flex;
      gap: 15px;
    }
    .ant-dropdown-trigger {
      height: 100%;
      display: flex;
      align-items: center;
      cursor: pointer;
    }
  }
  .menu-right {
    display: flex;
    height: 100%;
    align-items: center;
    gap: 10px;
    padding-right: 20px;
    .ant-divider {
      height: 50% !important;
      color: #fff;
      background-color: #fff;
      width: 2px;
    }
    .anticon-shopping-cart,
    .anticon-user {
      color: #fff !important;
      font-size: 17px;
      font-weight: 700;
    }
    .anticon-shopping-cart {
      opacity: ${(props)=>props.router.pathname.includes(src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z.CART) ? 1 : 0.6};
    }
    .anticon-user {
      opacity: ${(props)=>props.router.pathname.includes(src_lib_utils_routes__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z.SETTINGS) ? 1 : 0.6};
    }
    .account-overlay {
      margin-left: 24px;
    }
  }
  .login-btn {
    color: #fff !important;
    font-weight: 700;
  }
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
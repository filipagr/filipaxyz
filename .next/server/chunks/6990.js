exports.id = 6990;
exports.ids = [6990];
exports.modules = {

/***/ 48031:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 31232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 52987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 56926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 44282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 16505, 23))

/***/ }),

/***/ 48944:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50954, 23))

/***/ }),

/***/ 54784:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 38545));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50954, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2746))

/***/ }),

/***/ 38545:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppContext: () => (/* binding */ AppContext),
/* harmony export */   Providers: () => (/* binding */ Providers)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57114);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71072);
/* __next_internal_client_entry_do_not_use__ AppContext,Providers auto */ 



function usePrevious(value) {
    let ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        ref.current = value;
    }, [
        value
    ]);
    return ref.current;
}
function ThemeWatcher() {
    let { resolvedTheme, setTheme } = (0,next_themes__WEBPACK_IMPORTED_MODULE_3__/* .useTheme */ .F)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let media = window.matchMedia("(prefers-color-scheme: dark)");
        function onMediaChange() {
            let systemTheme = media.matches ? "dark" : "light";
            if (resolvedTheme === systemTheme) {
                setTheme("system");
            }
        }
        onMediaChange();
        media.addEventListener("change", onMediaChange);
        return ()=>{
            media.removeEventListener("change", onMediaChange);
        };
    }, [
        resolvedTheme,
        setTheme
    ]);
    return null;
}
const AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
function Providers({ children }) {
    let pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();
    let previousPathname = usePrevious(pathname);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AppContext.Provider, {
        value: {
            previousPathname
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_themes__WEBPACK_IMPORTED_MODULE_3__/* .ThemeProvider */ .f, {
            attribute: "class",
            disableTransitionOnChange: true,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ThemeWatcher, {}),
                children
            ]
        })
    });
}


/***/ }),

/***/ 26664:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W2: () => (/* binding */ Container)
/* harmony export */ });
/* unused harmony exports ContainerOuter, ContainerInner */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80391);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);



const ContainerOuter = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function OuterContainer({ className, children, ...props }, ref) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: ref,
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("sm:px-8", className),
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "mx-auto w-full max-w-7xl lg:px-8",
            children: children
        })
    });
});
const ContainerInner = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function InnerContainer({ className, children, ...props }, ref) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: ref,
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("relative px-4 sm:px-8 lg:px-12", className),
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "mx-auto max-w-2xl lg:max-w-5xl",
            children: children
        })
    });
});
const Container = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function Container({ children, ...props }, ref) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ContainerOuter, {
        ref: ref,
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ContainerInner, {
            children: children
        })
    });
});


/***/ }),

/***/ 2746:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Header: () => (/* binding */ Header)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(52451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(11440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(57114);
// EXTERNAL MODULE: ./node_modules/next-themes/dist/index.js
var dist = __webpack_require__(71072);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/popover/popover.js + 17 modules
var popover = __webpack_require__(43602);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/transitions/transition.js + 7 modules
var transition = __webpack_require__(58469);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.js
var clsx = __webpack_require__(80391);
var clsx_default = /*#__PURE__*/__webpack_require__.n(clsx);
// EXTERNAL MODULE: ./src/components/Container.jsx
var Container = __webpack_require__(26664);
;// CONCATENATED MODULE: ./src/images/avatar.jpg
/* harmony default export */ const avatar = ({"src":"/_next/static/media/avatar.7f9317c6.jpg","height":617,"width":617,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAeEAABAQkAAAAAAAAAAAAAAAAAERMVFiYxRGGhsv/EABUBAQEAAAAAAAAAAAAAAAAAAAQF/8QAHhEAAQQBBQAAAAAAAAAAAAAAAQADERICBCEiMUH/2gAMAwEAAhEDEQA/AJJii25erfK140gAL+rfrTiDI9CC1hM7ntf/2Q==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/components/Header.jsx
/* __next_internal_client_entry_do_not_use__ Header auto */ 









function CloseIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    });
}
function ChevronDownIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 8 6",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M1.75 1.75 4 4.25l2.25-2.5",
            fill: "none",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    });
}
function SunIcon(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        viewBox: "0 0 24 24",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061",
                fill: "none"
            })
        ]
    });
}
function MoonIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    });
}
function MobileNavItem({ href, children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/ jsx_runtime_.jsx(popover/* Popover */.J.Button, {
            as: (link_default()),
            href: href,
            className: "block py-2",
            children: children
        })
    });
}
function MobileNavigation(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(popover/* Popover */.J, {
        ...props,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(popover/* Popover */.J.Button, {
                className: "group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20",
                children: [
                    "Menu",
                    /*#__PURE__*/ jsx_runtime_.jsx(ChevronDownIcon, {
                        className: "ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(transition/* Transition */.u.Root, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(transition/* Transition */.u.Child, {
                        as: react_.Fragment,
                        enter: "duration-150 ease-out",
                        enterFrom: "opacity-0",
                        enterTo: "opacity-100",
                        leave: "duration-150 ease-in",
                        leaveFrom: "opacity-100",
                        leaveTo: "opacity-0",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(popover/* Popover */.J.Overlay, {
                            className: "fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(transition/* Transition */.u.Child, {
                        as: react_.Fragment,
                        enter: "duration-150 ease-out",
                        enterFrom: "opacity-0 scale-95",
                        enterTo: "opacity-100 scale-100",
                        leave: "duration-150 ease-in",
                        leaveFrom: "opacity-100 scale-100",
                        leaveTo: "opacity-0 scale-95",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(popover/* Popover */.J.Panel, {
                            focus: true,
                            className: "fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex flex-row-reverse items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(popover/* Popover */.J.Button, {
                                            "aria-label": "Close menu",
                                            className: "-m-1 p-1",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(CloseIcon, {
                                                className: "h-6 w-6 text-zinc-500 dark:text-zinc-400"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "text-sm font-medium text-zinc-600 dark:text-zinc-400",
                                            children: "Navigation"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                                    className: "mt-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(MobileNavItem, {
                                                href: "/projects",
                                                children: "Projects"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(MobileNavItem, {
                                                href: "/about",
                                                children: "About"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(MobileNavItem, {
                                                href: "/articles",
                                                children: "Articles"
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
function NavItem({ href, children }) {
    let isActive = (0,navigation.usePathname)().startsWith(href);
    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
            href: href,
            className: clsx_default()("relative block px-3 py-2 transition", isActive ? "text-blue-700 dark:text-blue-400" : "hover:text-blue-800 dark:hover:text-blue-500"),
            children: [
                children,
                isActive && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-blue-600/0 via-blue-600/40 to-blue-600/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"
                })
            ]
        })
    });
}
function DesktopNavigation(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
            className: "flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(NavItem, {
                    href: "/projects",
                    children: "Projects"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(NavItem, {
                    href: "/about",
                    children: "About"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(NavItem, {
                    href: "/articles",
                    children: "Articles"
                })
            ]
        })
    });
}
function ThemeToggle() {
    let { resolvedTheme, setTheme } = (0,dist/* useTheme */.F)();
    let otherTheme = resolvedTheme === "dark" ? "light" : "dark";
    let [mounted, setMounted] = (0,react_.useState)(false);
    (0,react_.useEffect)(()=>{
        setMounted(true);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
        type: "button",
        "aria-label": mounted ? `Switch to ${otherTheme} theme` : "Toggle theme",
        className: "group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20",
        onClick: ()=>setTheme(otherTheme),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(SunIcon, {
                className: "h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-blue-50 [@media(prefers-color-scheme:dark)]:stroke-blue-400 [@media(prefers-color-scheme:dark)]:group-hover:fill-blue-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-blue-600"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(MoonIcon, {
                className: "hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-blue-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-blue-400"
            })
        ]
    });
}
function clamp(number, a, b) {
    let min = Math.min(a, b);
    let max = Math.max(a, b);
    return Math.min(Math.max(number, min), max);
}
function AvatarContainer({ className, ...props }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: clsx_default()(className, "h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10"),
        ...props
    });
}
function Avatar({ large = false, className, ...props }) {
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: "/",
        "aria-label": "Home",
        className: clsx_default()(className, "pointer-events-auto"),
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
            src: avatar,
            alt: "",
            sizes: large ? "4rem" : "2.25rem",
            className: clsx_default()("rounded-full bg-zinc-100 object-cover dark:bg-zinc-800", large ? "h-16 w-16" : "h-9 w-9"),
            priority: true
        })
    });
}
function Header() {
    let isHomePage = (0,navigation.usePathname)() === "/";
    let headerRef = (0,react_.useRef)(null);
    let avatarRef = (0,react_.useRef)(null);
    let isInitial = (0,react_.useRef)(true);
    (0,react_.useEffect)(()=>{
        let downDelay = avatarRef.current?.offsetTop ?? 0;
        let upDelay = 64;
        function setProperty(property, value) {
            document.documentElement.style.setProperty(property, value);
        }
        function removeProperty(property) {
            document.documentElement.style.removeProperty(property);
        }
        function updateHeaderStyles() {
            if (!headerRef.current) {
                return;
            }
            let { top, height } = headerRef.current.getBoundingClientRect();
            let scrollY = clamp(window.scrollY, 0, document.body.scrollHeight - window.innerHeight);
            if (isInitial.current) {
                setProperty("--header-position", "sticky");
            }
            setProperty("--content-offset", `${downDelay}px`);
            if (isInitial.current || scrollY < downDelay) {
                setProperty("--header-height", `${downDelay + height}px`);
                setProperty("--header-mb", `${-downDelay}px`);
            } else if (top + height < -upDelay) {
                let offset = Math.max(height, scrollY - upDelay);
                setProperty("--header-height", `${offset}px`);
                setProperty("--header-mb", `${height - offset}px`);
            } else if (top === 0) {
                setProperty("--header-height", `${scrollY + height}px`);
                setProperty("--header-mb", `${-scrollY}px`);
            }
            if (top === 0 && scrollY > 0 && scrollY >= downDelay) {
                setProperty("--header-inner-position", "fixed");
                removeProperty("--header-top");
                removeProperty("--avatar-top");
            } else {
                removeProperty("--header-inner-position");
                setProperty("--header-top", "0px");
                setProperty("--avatar-top", "0px");
            }
        }
        function updateAvatarStyles() {
            if (!isHomePage) {
                return;
            }
            let fromScale = 1;
            let toScale = 36 / 64;
            let fromX = 0;
            let toX = 2 / 16;
            let scrollY = downDelay - window.scrollY;
            let scale = scrollY * (fromScale - toScale) / downDelay + toScale;
            scale = clamp(scale, fromScale, toScale);
            let x = scrollY * (fromX - toX) / downDelay + toX;
            x = clamp(x, fromX, toX);
            setProperty("--avatar-image-transform", `translate3d(${x}rem, 0, 0) scale(${scale})`);
            let borderScale = 1 / (toScale / scale);
            let borderX = (-toX + x) * borderScale;
            let borderTransform = `translate3d(${borderX}rem, 0, 0) scale(${borderScale})`;
            setProperty("--avatar-border-transform", borderTransform);
            setProperty("--avatar-border-opacity", scale === toScale ? "1" : "0");
        }
        function updateStyles() {
            updateHeaderStyles();
            updateAvatarStyles();
            isInitial.current = false;
        }
        updateStyles();
        window.addEventListener("scroll", updateStyles, {
            passive: true
        });
        window.addEventListener("resize", updateStyles);
        return ()=>{
            window.removeEventListener("scroll", updateStyles);
            window.removeEventListener("resize", updateStyles);
        };
    }, [
        isHomePage
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                className: "pointer-events-none relative z-50 flex flex-none flex-col",
                style: {
                    height: "var(--header-height)",
                    marginBottom: "var(--header-mb)"
                },
                children: [
                    isHomePage && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                ref: avatarRef,
                                className: "order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Container/* Container */.W2, {
                                className: "top-0 order-last -mb-3 pt-3",
                                style: {
                                    position: "var(--header-position)"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "top-[var(--avatar-top,theme(spacing.3))] w-full",
                                    style: {
                                        position: "var(--header-inner-position)"
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(AvatarContainer, {
                                                className: "absolute left-0 top-3 origin-left transition-opacity",
                                                style: {
                                                    opacity: "var(--avatar-border-opacity, 0)",
                                                    transform: "var(--avatar-border-transform)"
                                                }
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Avatar, {
                                                large: true,
                                                className: "block h-16 w-16 origin-left",
                                                style: {
                                                    transform: "var(--avatar-image-transform)"
                                                }
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        ref: headerRef,
                        className: "top-0 z-10 h-16 pt-6",
                        style: {
                            position: "var(--header-position)"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Container/* Container */.W2, {
                            className: "top-[var(--header-top,theme(spacing.6))] w-full",
                            style: {
                                position: "var(--header-inner-position)"
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "relative flex gap-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "flex flex-1",
                                        children: !isHomePage && /*#__PURE__*/ jsx_runtime_.jsx(AvatarContainer, {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Avatar, {})
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex flex-1 justify-end md:justify-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(MobileNavigation, {
                                                className: "pointer-events-auto md:hidden"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(DesktopNavigation, {
                                                className: "pointer-events-auto hidden md:block"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "flex justify-end md:flex-1",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "pointer-events-auto",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(ThemeToggle, {})
                                        })
                                    })
                                ]
                            })
                        })
                    })
                ]
            }),
            isHomePage && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex-none",
                style: {
                    height: "var(--content-offset)"
                }
            })
        ]
    });
}


/***/ }),

/***/ 34859:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./src/app/providers.jsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/filiparibeiro/filipaxyz/src/app/providers.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["AppContext"];

const e1 = proxy["Providers"];

;// CONCATENATED MODULE: ./src/components/SocialIcons.jsx

function TwitterIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M20.055 7.983c.011.174.011.347.011.523 0 5.338-3.92 11.494-11.09 11.494v-.003A10.755 10.755 0 0 1 3 18.186c.308.038.618.057.928.058a7.655 7.655 0 0 0 4.841-1.733c-1.668-.032-3.13-1.16-3.642-2.805a3.753 3.753 0 0 0 1.76-.07C5.07 13.256 3.76 11.6 3.76 9.676v-.05a3.77 3.77 0 0 0 1.77.505C3.816 8.945 3.288 6.583 4.322 4.737c1.98 2.524 4.9 4.058 8.034 4.22a4.137 4.137 0 0 1 1.128-3.86A3.807 3.807 0 0 1 19 5.274a7.657 7.657 0 0 0 2.475-.98c-.29.934-.9 1.729-1.713 2.233A7.54 7.54 0 0 0 22 5.89a8.084 8.084 0 0 1-1.945 2.093Z"
        })
    });
}
function InstagramIcon(props) {
    return /*#__PURE__*/ _jsxs("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ _jsx("path", {
                d: "M12 3c-2.444 0-2.75.01-3.71.054-.959.044-1.613.196-2.185.418A4.412 4.412 0 0 0 4.51 4.511c-.5.5-.809 1.002-1.039 1.594-.222.572-.374 1.226-.418 2.184C3.01 9.25 3 9.556 3 12s.01 2.75.054 3.71c.044.959.196 1.613.418 2.185.23.592.538 1.094 1.039 1.595.5.5 1.002.808 1.594 1.038.572.222 1.226.374 2.184.418C9.25 20.99 9.556 21 12 21s2.75-.01 3.71-.054c.959-.044 1.613-.196 2.185-.419a4.412 4.412 0 0 0 1.595-1.038c.5-.5.808-1.002 1.038-1.594.222-.572.374-1.226.418-2.184.044-.96.054-1.267.054-3.711s-.01-2.75-.054-3.71c-.044-.959-.196-1.613-.419-2.185A4.412 4.412 0 0 0 19.49 4.51c-.5-.5-1.002-.809-1.594-1.039-.572-.222-1.226-.374-2.184-.418C14.75 3.01 14.444 3 12 3Zm0 1.622c2.403 0 2.688.009 3.637.052.877.04 1.354.187 1.67.31.421.163.72.358 1.036.673.315.315.51.615.673 1.035.123.317.27.794.31 1.671.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.67-.163.421-.358.72-.673 1.036a2.79 2.79 0 0 1-1.035.673c-.317.123-.794.27-1.671.31-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052c-.877-.04-1.354-.187-1.67-.31a2.789 2.789 0 0 1-1.036-.673 2.79 2.79 0 0 1-.673-1.035c-.123-.317-.27-.794-.31-1.671-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637c.04-.877.187-1.354.31-1.67.163-.421.358-.72.673-1.036.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.671-.31.95-.043 1.234-.052 3.637-.052Z"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-7.622a4.622 4.622 0 1 0 0 9.244 4.622 4.622 0 0 0 0-9.244Zm5.884-.182a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0Z"
            })
        ]
    });
}
function GitHubIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"
        })
    });
}
function LinkedInIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"
        })
    });
}

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(25124);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/Container.jsx
var Container = __webpack_require__(41392);
;// CONCATENATED MODULE: ./src/components/Footer.jsx




function NavLink({ href, children }) {
    return /*#__PURE__*/ _jsx(Link, {
        href: href,
        className: "transition hover:text-blue-500 dark:hover:text-blue-400",
        children: children
    });
}
function SocialLink({ icon: Icon, ...props }) {
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        className: "group -m-1 p-1",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
            className: "h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
        })
    });
}
function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "mt-32",
        children: /*#__PURE__*/ jsx_runtime_.jsx(Container/* ContainerOuter */.Zb, {
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Container/* ContainerInner */.le, {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        class: "flex flex-col md:flex-row items-center md:items-end justify-between",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "w-full md:w-1/2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                        className: "text-sm font-medium text-zinc-400 dark:text-zinc-500 mb-2",
                                        children: "Colophon"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "text-xs font-regular text-zinc-400 dark:text-zinc-500",
                                        children: "This website was designed and developed in 2023 by Filipa Ribeiro, using the Spotlight Tailwind Template as a base and with the help of Cursor. All assets are hosted on Netlify. Text is set in Manrope, designed by Mikhail Sharanda in 2018 and available through the Google Fonts library. Last updated on May 27, 2025 :)"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex gap-6 mt-4 md:mt-0 md:items-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(SocialLink, {
                                        href: "https://twitter.com/heyitsfilipa",
                                        "aria-label": "Follow on Twitter",
                                        icon: TwitterIcon
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(SocialLink, {
                                        href: "https://github.com/filipagr",
                                        "aria-label": "Follow on GitHub",
                                        icon: GitHubIcon
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(SocialLink, {
                                        href: "https://www.linkedin.com/in/filipagribeiro/",
                                        "aria-label": "Follow on LinkedIn",
                                        icon: LinkedInIcon
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        })
    });
}

;// CONCATENATED MODULE: ./src/components/Header.jsx

const Header_proxy = (0,module_proxy.createProxy)(String.raw`/Users/filiparibeiro/filipaxyz/src/components/Header.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: Header_esModule, $$typeof: Header_$$typeof } = Header_proxy;
const Header_default_ = Header_proxy.default;

const Header_e0 = Header_proxy["Header"];

;// CONCATENATED MODULE: ./src/components/Layout.jsx



function Layout({ children }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "fixed inset-0 flex justify-center sm:px-8",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex w-full max-w-7xl lg:px-8"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative flex w-full flex-col",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Header_e0, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("main", {
                        className: "flex-auto",
                        children: children
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/styles/tailwind.css
var tailwind = __webpack_require__(66092);
;// CONCATENATED MODULE: ./src/app/layout.jsx




const metadata = {
    title: {
        template: "%s - Filipa Ribeiro",
        default: "Filipa Ribeiro - Product designer"
    },
    description: "A designer passionate about people, technology, and building meaningful products.",
    alternates: {
        types: {
            "application/rss+xml": `${"https://filipa.xyz"}/feed.xml`
        }
    }
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        className: "h-full antialiased",
        suppressHydrationWarning: true,
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            className: "flex h-full bg-zinc-50 dark:bg-black",
            children: /*#__PURE__*/ jsx_runtime_.jsx(e1, {
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex w-full",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
                        children: children
                    })
                })
            })
        })
    });
}


/***/ }),

/***/ 29653:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NotFound)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50732);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41392);



function NotFound() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Container__WEBPACK_IMPORTED_MODULE_2__/* .Container */ .W2, {
        className: "flex h-full items-center pt-16 sm:pt-32",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-col items-center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "text-base font-semibold text-zinc-400 dark:text-zinc-500",
                    children: "404"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "mt-4 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl",
                    children: "Page not found"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "mt-4 text-base text-zinc-600 dark:text-zinc-400",
                    children: "Sorry, we couldn’t find the page you’re looking for."
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .z, {
                    href: "/",
                    variant: "secondary",
                    className: "mt-4",
                    children: "Go back home"
                })
            ]
        })
    });
}


/***/ }),

/***/ 50732:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25124);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77369);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);



const variantStyles = {
    primary: "bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70",
    secondary: "bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70"
};
function Button({ variant = "primary", className, ...props }) {
    className = clsx__WEBPACK_IMPORTED_MODULE_2___default()("inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none", variantStyles[variant], className);
    return typeof props.href === "undefined" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: className,
        ...props
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        className: className,
        ...props
    });
}


/***/ }),

/***/ 90563:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80085);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"40x40"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 66092:
/***/ (() => {



/***/ })

};
;
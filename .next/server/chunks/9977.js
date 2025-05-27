exports.id = 9977;
exports.ids = [9977];
exports.modules = {

/***/ 88816:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./[slug]/layout": [
		14054,
		4054
	],
	"./[slug]/layout.jsx": [
		14054,
		4054
	],
	"./[slug]/page": [
		46,
		46
	],
	"./[slug]/page.jsx": [
		46,
		46
	],
	"./astralscan/page.mdx": [
		11457,
		4178,
		1457
	],
	"./coffeeline/page.mdx": [
		85059,
		4178,
		5059
	],
	"./ethlisbon/page.mdx": [
		86186,
		4178,
		6186
	],
	"./fiptracker/page.mdx": [
		46858,
		4178,
		6858
	],
	"./impactevaluator/page.mdx": [
		43342,
		4178,
		3342
	],
	"./page": [
		34560,
		4178,
		158,
		9173,
		4560
	],
	"./page.jsx": [
		34560,
		4178,
		158,
		9173,
		4560
	],
	"./saturn/page.mdx": [
		75804,
		4178,
		5804
	],
	"./usdfc/page.mdx": [
		39693,
		4178,
		9693
	],
	"./voicedeck/page.mdx": [
		59725,
		4178,
		9725
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 88816;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 4713:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57114);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38545);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26664);
/* harmony import */ var _components_Prose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67756);
/* __next_internal_client_entry_do_not_use__ default auto */ 





function ArrowLeftIcon(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        viewBox: "0 0 16 16",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    });
}
function ProjectLayout({ project, children }) {
    let router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    let { previousPathname } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_app_providers__WEBPACK_IMPORTED_MODULE_3__.AppContext);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Container__WEBPACK_IMPORTED_MODULE_4__/* .Container */ .W2, {
        className: "mt-16 lg:mt-32",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "xl:relative",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mx-auto max-w-2xl",
                children: [
                    previousPathname && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "button",
                        onClick: ()=>router.back(),
                        "aria-label": "Go back to projects",
                        className: "group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ArrowLeftIcon, {
                            className: "h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            " ",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "text-4xl font-regular tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl",
                                        children: project.title
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "mt-8 flex flex-col text-sm text-zinc-600 dark:text-zinc-400 md:flex-row md:justify-between",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                        className: "text-xs",
                                                        children: "Client"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "font-medium",
                                                        children: project.client
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                        className: "text-xs mt-4 md:mt-0",
                                                        children: "Role"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "font-medium",
                                                        children: project.role
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                        className: "text-xs mt-4 md:mt-0",
                                                        children: "Duration"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "font-medium",
                                                        children: project.duration
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Prose__WEBPACK_IMPORTED_MODULE_5__/* .Prose */ .M, {
                                className: "mt-8",
                                "data-mdx-content": true,
                                children: children
                            })
                        ]
                    })
                ]
            })
        })
    });
}


/***/ }),

/***/ 67756:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ Prose)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80391);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);


function Prose({ className, ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(className, "prose dark:prose-invert"),
        ...props
    });
}


/***/ }),

/***/ 9987:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ getAllProjects)
/* harmony export */ });
/* harmony import */ var fast_glob__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77161);
/* harmony import */ var fast_glob__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fast_glob__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);


async function importProject(projectFilename) {
    try {
        console.log("Attempting to import project:", projectFilename);
        // Import the project module
        const { project } = await __webpack_require__(88816)(`./${projectFilename}`);
        if (!project) {
            console.warn(`No project data found in ${projectFilename}`);
            return null;
        }
        // Get the directory name from the path
        const parts = projectFilename.split("/");
        const slug = parts[0] // Always get the first directory name as the slug
        ;
        console.log("Imported project:", {
            filename: projectFilename,
            slug,
            title: project.title
        });
        // Return the project with its slug
        return {
            ...project,
            slug
        };
    } catch (error) {
        console.error(`Error importing project ${projectFilename}:`, error);
        return null;
    }
}
async function getAllProjects() {
    try {
        // Get all MDX files in both root and [slug] directories
        const projectFilenames = await fast_glob__WEBPACK_IMPORTED_MODULE_0___default()([
            "*/page.mdx",
            "[slug]/*/page.mdx"
        ], {
            cwd: path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), "src/app/projects")
        });
        console.log("Found project files:", projectFilenames);
        // Import all projects
        const projects = await Promise.all(projectFilenames.filter((filename)=>!filename.startsWith("[slug]/[")) // Only exclude dynamic route template files
        .map(importProject));
        // Debug log
        console.log("Processed projects:", projects.map((p)=>({
                title: p?.title,
                slug: p?.slug
            })));
        // Filter out any null projects and sort by date
        const sortedProjects = projects.filter(Boolean).sort((a, z)=>new Date(z.date) - new Date(a.date));
        console.log("Final sorted projects:", sortedProjects.map((p)=>({
                title: p.title,
                slug: p.slug
            })));
        return sortedProjects;
    } catch (error) {
        console.error("Error getting all projects:", error);
        return [];
    }
}


/***/ })

};
;
exports.id = 46;
exports.ids = [46];
exports.modules = {

/***/ 44729:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
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
webpackAsyncContext.id = 44729;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 46:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectPage),
/* harmony export */   generateMetadata: () => (/* binding */ generateMetadata),
/* harmony export */   generateStaticParams: () => (/* binding */ generateStaticParams)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9987);




async function generateStaticParams() {
    const projectDir = path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), "src/app/projects");
    const slugDir = path__WEBPACK_IMPORTED_MODULE_2___default().join(projectDir, "[slug]");
    // Get projects from root directory
    const rootFiles = fs__WEBPACK_IMPORTED_MODULE_1___default().readdirSync(projectDir);
    const rootProjects = rootFiles.filter((file)=>fs__WEBPACK_IMPORTED_MODULE_1___default().statSync(path__WEBPACK_IMPORTED_MODULE_2___default().join(projectDir, file)).isDirectory()).filter((dir)=>dir !== "[slug]") // Exclude the [slug] directory itself
    .map((folderName)=>({
            slug: folderName
        }));
    // Get projects from [slug] directory
    const slugFiles = fs__WEBPACK_IMPORTED_MODULE_1___default().readdirSync(slugDir);
    const slugProjects = slugFiles.filter((file)=>fs__WEBPACK_IMPORTED_MODULE_1___default().statSync(path__WEBPACK_IMPORTED_MODULE_2___default().join(slugDir, file)).isDirectory()).map((folderName)=>({
            slug: folderName
        }));
    // Combine both sets of projects
    return [
        ...rootProjects,
        ...slugProjects
    ];
}
async function generateMetadata({ params }) {
    try {
        const projects = await (0,_lib_projects__WEBPACK_IMPORTED_MODULE_3__/* .getAllProjects */ .Y)();
        const project = projects.find((p)=>p?.slug === params.slug);
        if (!project) {
            return {
                title: "Project Not Found",
                description: "This project could not be found."
            };
        }
        return {
            title: project.title,
            description: project.description
        };
    } catch (error) {
        console.error(`Error loading project metadata for ${params.slug}:`, error);
        return {
            title: "Project Not Found",
            description: "This project could not be found."
        };
    }
}
async function ProjectPage({ params }) {
    try {
        // Debug log
        console.log("Rendering project page for slug:", params.slug);
        // Import both the Content and project data
        const { default: Content, project } = await __webpack_require__(44729)(`./${params.slug}/page.mdx`);
        // Debug log
        console.log("Successfully loaded MDX content and project data for:", params.slug);
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Content, {});
    } catch (error) {
        console.error(`Error loading project content for ${params.slug}:`, error);
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: "Project not found"
        });
    }
}


/***/ })

};
;
"use strict";
exports.id = 4560;
exports.ids = [4560];
exports.modules = {

/***/ 34560:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectsIndex),
/* harmony export */   metadata: () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20158);
/* harmony import */ var _components_SimpleLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79173);
/* harmony import */ var _lib_projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9987);




function Project({ project }) {
    if (!project?.title || !project?.slug) {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Card__WEBPACK_IMPORTED_MODULE_1__/* .Card */ .Z, {
        as: "project",
        children: [
            project.thumbnail && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card__WEBPACK_IMPORTED_MODULE_1__/* .Card */ .Z.Image, {
                className: "rounded-2xl",
                src: project.thumbnail,
                alt: project.title || "Project thumbnail"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card__WEBPACK_IMPORTED_MODULE_1__/* .Card */ .Z.Title, {
                href: `/projects/${project.slug}`,
                children: project.title
            }),
            project.description && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card__WEBPACK_IMPORTED_MODULE_1__/* .Card */ .Z.Description, {
                children: project.description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card__WEBPACK_IMPORTED_MODULE_1__/* .Card */ .Z.Cta, {
                children: "Read case study"
            })
        ]
    });
}
const metadata = {
    title: "Projects",
    description: "A collection of my recent work."
};
async function ProjectsIndex() {
    const projects = await (0,_lib_projects__WEBPACK_IMPORTED_MODULE_3__/* .getAllProjects */ .Y)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SimpleLayout__WEBPACK_IMPORTED_MODULE_2__/* .SimpleLayout */ .X, {
        title: "A collection of my recent work.",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "flex flex-col gap-16",
            children: projects.map((project)=>project && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Project, {
                    project: project
                }, project.slug))
        })
    });
}


/***/ })

};
;
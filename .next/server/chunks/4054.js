"use strict";
exports.id = 4054;
exports.ids = [4054];
exports.modules = {

/***/ 14054:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./src/components/ProjectLayout.jsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/filiparibeiro/filipaxyz/src/components/ProjectLayout.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const ProjectLayout = (__default__);
// EXTERNAL MODULE: ./src/lib/projects.js
var lib_projects = __webpack_require__(9987);
;// CONCATENATED MODULE: ./src/app/projects/[slug]/layout.jsx



async function Layout({ children, params }) {
    try {
        console.log("Layout rendering for slug:", params.slug);
        // Get all projects and find the matching one
        const projects = await (0,lib_projects/* getAllProjects */.Y)();
        console.log("Available projects in layout:", projects.map((p)=>({
                title: p.title,
                slug: p.slug
            })));
        const project = projects.find((p)=>p?.slug === params.slug);
        console.log("Found project for layout:", project ? {
            title: project.title,
            slug: project.slug
        } : "Not found");
        if (!project) {
            console.error("No project data found for slug:", params.slug);
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container mx-auto px-4 py-8",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "text-2xl font-bold mb-4",
                        children: "Project Not Found"
                    }),
                    children
                ]
            });
        }
        // Debug log
        console.log("Applying layout to project:", project.title, "with slug:", params.slug);
        return /*#__PURE__*/ jsx_runtime_.jsx(ProjectLayout, {
            project: project,
            children: children
        });
    } catch (error) {
        console.error(`Error loading project ${params.slug}:`, error);
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container mx-auto px-4 py-8",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: "text-2xl font-bold mb-4",
                    children: "Error Loading Project"
                }),
                children
            ]
        });
    }
}


/***/ })

};
;
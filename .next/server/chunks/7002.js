exports.id = 7002;
exports.ids = [7002];
exports.modules = {

/***/ 88616:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./thoughts-designing-web3/page.mdx": [
		57198,
		7198
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
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 88616;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 67002:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
;// CONCATENATED MODULE: ./src/components/ArticleLayout.jsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/filiparibeiro/filipaxyz/src/components/ArticleLayout.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["ArticleLayout"];

;// CONCATENATED MODULE: ./src/app/articles/[slug]/layout.jsx


async function Layout({ children, params }) {
    try {
        // Import the article data directly from the MDX file
        const { article } = await __webpack_require__(88616)(`./${params.slug}/page.mdx`);
        if (!article) {
            console.error("No article data found for slug:", params.slug);
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container mx-auto px-4 py-8",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "text-2xl font-bold mb-4",
                        children: "Article Not Found"
                    }),
                    children
                ]
            });
        }
        // Add the slug to the article data
        const articleWithSlug = {
            ...article,
            slug: params.slug
        };
        // Debug log
        console.log("Found article:", articleWithSlug.title, "for slug:", params.slug);
        return /*#__PURE__*/ jsx_runtime_.jsx(e0, {
            article: articleWithSlug,
            children: children
        });
    } catch (error) {
        console.error(`Error loading article ${params.slug}:`, error);
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container mx-auto px-4 py-8",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: "text-2xl font-bold mb-4",
                    children: "Error Loading Article"
                }),
                children
            ]
        });
    }
}


/***/ })

};
;
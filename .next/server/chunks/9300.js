exports.id = 9300;
exports.ids = [9300];
exports.modules = {

/***/ 40329:
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
webpackAsyncContext.id = 40329;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 19300:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ArticlePage),
/* harmony export */   generateMetadata: () => (/* binding */ generateMetadata),
/* harmony export */   generateStaticParams: () => (/* binding */ generateStaticParams)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_articles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71510);


async function generateStaticParams() {
    const articles = await (0,_lib_articles__WEBPACK_IMPORTED_MODULE_1__/* .getAllArticles */ .z)();
    return articles.map((article)=>({
            slug: article.slug
        }));
}
async function generateMetadata({ params }) {
    const articles = await (0,_lib_articles__WEBPACK_IMPORTED_MODULE_1__/* .getAllArticles */ .z)();
    const article = articles.find((article)=>article.slug === params.slug);
    if (!article) {
        return {
            title: "Article Not Found",
            description: "The article you are looking for does not exist."
        };
    }
    return {
        title: article.title,
        description: article.description
    };
}
async function ArticlePage({ params }) {
    try {
        // Debug log
        console.log("Rendering article page for slug:", params.slug);
        // Import both the Content and article data
        const { default: Content, article } = await __webpack_require__(40329)(`./${params.slug}/page.mdx`);
        // Debug log
        console.log("Successfully loaded MDX content and article data for:", params.slug);
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Content, {});
    } catch (error) {
        console.error(`Error loading article content for ${params.slug}:`, error);
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: "Article not found"
        });
    }
}


/***/ })

};
;
exports.id = 1510;
exports.ids = [1510];
exports.modules = {

/***/ 43347:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./[slug]/layout": [
		67002,
		1363,
		7002
	],
	"./[slug]/layout.jsx": [
		67002,
		1363,
		7002
	],
	"./[slug]/page": [
		19300,
		9300
	],
	"./[slug]/page.jsx": [
		19300,
		9300
	],
	"./page": [
		64216,
		4178,
		1363,
		3478,
		1392,
		158,
		9173,
		4216
	],
	"./page.jsx": [
		64216,
		4178,
		1363,
		3478,
		1392,
		158,
		9173,
		4216
	],
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
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 43347;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 71510:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ getAllArticles)
/* harmony export */ });
/* harmony import */ var fast_glob__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77161);
/* harmony import */ var fast_glob__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fast_glob__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);


async function importArticle(articleFilename) {
    try {
        const { article } = await __webpack_require__(43347)(`./${articleFilename}`);
        if (!article) {
            console.warn(`No article data found in ${articleFilename}`);
            return null;
        }
        return {
            slug: articleFilename.replace(/(\/page)?\.mdx$/, ""),
            ...article
        };
    } catch (error) {
        console.error(`Error importing article ${articleFilename}:`, error);
        return null;
    }
}
async function getAllArticles() {
    try {
        const articleFilenames = await fast_glob__WEBPACK_IMPORTED_MODULE_0___default()("*/page.mdx", {
            cwd: path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), "src/app/articles"),
            ignore: [
                "[slug]/**"
            ]
        });
        const articles = await Promise.all(articleFilenames.map(importArticle));
        // Filter out any null articles and sort by date
        return articles.filter(Boolean).sort((a, z)=>+new Date(z.date) - +new Date(a.date));
    } catch (error) {
        console.error("Error getting all articles:", error);
        return [];
    }
}


/***/ })

};
;
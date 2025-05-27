"use strict";
(() => {
var exports = {};
exports.id = 6246;
exports.ids = [6246];
exports.modules = {

/***/ 56786:
/***/ ((module) => {

module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ }),

/***/ 82361:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 57147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 71017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 12781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 71576:
/***/ ((module) => {

module.exports = require("string_decoder");

/***/ }),

/***/ 73837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 17356:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./src/app/feed.xml/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (GET)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(42394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(69692);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(19513);
;// CONCATENATED MODULE: external "assert"
const external_assert_namespaceObject = require("assert");
// EXTERNAL MODULE: ./node_modules/cheerio/lib/esm/index.js + 67 modules
var esm = __webpack_require__(8850);
// EXTERNAL MODULE: ./node_modules/feed/lib/feed.js
var lib_feed = __webpack_require__(5965);
// EXTERNAL MODULE: ./src/lib/articles.js
var lib_articles = __webpack_require__(71510);
;// CONCATENATED MODULE: ./src/app/feed.xml/route.js




async function GET() {
    let siteUrl = "https://filipa.xyz" || 0;
    let author = {
        name: "Filipa Ribeiro",
        email: "hello@filipa.xyz"
    };
    let feed = new lib_feed/* Feed */.f({
        title: author.name,
        description: "Some thoughts on design, product, web3, or life in general.",
        author,
        id: siteUrl,
        link: siteUrl,
        image: `${siteUrl}/favicon.ico`,
        favicon: `${siteUrl}/favicon.ico`,
        copyright: `All rights reserved ${new Date().getFullYear()}`,
        feedLinks: {
            rss2: `${siteUrl}/feed.xml`
        }
    });
    const articles = await (0,lib_articles/* getAllArticles */.z)();
    for (let article of articles){
        let publicUrl = `${siteUrl}/articles/${article.slug}`;
        feed.addItem({
            title: article.title,
            id: publicUrl,
            link: publicUrl,
            content: article.description,
            author: [
                author
            ],
            contributor: [
                author
            ],
            date: new Date(article.date)
        });
    }
    return new Response(feed.rss2(), {
        status: 200,
        headers: {
            "content-type": "application/xml",
            "cache-control": "s-maxage=31556952"
        }
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Ffeed.xml%2Froute&name=app%2Ffeed.xml%2Froute&pagePath=private-next-app-dir%2Ffeed.xml%2Froute.js&appDir=%2FUsers%2Ffiliparibeiro%2Ffilipaxyz%2Fsrc%2Fapp&appPaths=%2Ffeed.xml%2Froute&pageExtensions=js&pageExtensions=jsx&pageExtensions=mdx&pageExtensions=ts&pageExtensions=tsx&basePath=&assetPrefix=&nextConfigOutput=export&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = "export"
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/feed.xml/route",
        pathname: "/feed.xml",
        filename: "route",
        bundlePath: "app/feed.xml/route"
    },
    resolvedPagePath: "/Users/filiparibeiro/filipaxyz/src/app/feed.xml/route.js",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/feed.xml/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3587,7161,5501,2128,1510], () => (__webpack_exec__(17356)));
module.exports = __webpack_exports__;

})();
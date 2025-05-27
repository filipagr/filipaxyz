"use strict";
exports.id = 4216;
exports.ids = [4216];
exports.modules = {

/***/ 64216:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ArticlesIndex),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./src/components/Card.jsx
var Card = __webpack_require__(20158);
// EXTERNAL MODULE: ./src/components/SimpleLayout.jsx
var SimpleLayout = __webpack_require__(79173);
// EXTERNAL MODULE: ./src/lib/articles.js
var lib_articles = __webpack_require__(71510);
;// CONCATENATED MODULE: ./src/lib/formatDate.js
function formatDate(dateString) {
    return new Date(`${dateString}T00:00:00Z`).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "UTC"
    });
}

;// CONCATENATED MODULE: ./src/app/articles/page.jsx





function Article({ article }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
        className: "md:grid md:grid-cols-4 md:items-baseline",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* Card */.Z, {
                className: "md:col-span-3",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Card/* Card */.Z.Title, {
                        href: `/articles/${article.slug}`,
                        children: article.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Card/* Card */.Z.Eyebrow, {
                        as: "time",
                        dateTime: article.date,
                        className: "md:hidden",
                        decorate: true,
                        children: formatDate(article.date)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Card/* Card */.Z.Description, {
                        children: article.description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Card/* Card */.Z.Cta, {
                        children: "Read article"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Card/* Card */.Z.Eyebrow, {
                as: "time",
                dateTime: article.date,
                className: "mt-1 hidden md:block",
                children: formatDate(article.date)
            })
        ]
    });
}
const metadata = {
    title: "Articles",
    description: "Some thoughts on design, product, web3, or life in general."
};
async function ArticlesIndex() {
    let articles = await (0,lib_articles/* getAllArticles */.z)();
    return /*#__PURE__*/ jsx_runtime_.jsx(SimpleLayout/* SimpleLayout */.X, {
        title: "Some thoughts on design, product, web3, or life in general.",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex max-w-3xl flex-col space-y-16",
                children: articles.map((article)=>/*#__PURE__*/ jsx_runtime_.jsx(Article, {
                        article: article
                    }, article.slug))
            })
        })
    });
}


/***/ })

};
;
"use strict";
exports.id = 3342;
exports.ids = [3342];
exports.modules = {

/***/ 80141:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ useMDXComponents)
/* harmony export */ });
function useMDXComponents(components) {
    return {
        ...components
    };
}


/***/ }),

/***/ 43342:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ page),
  metadata: () => (/* binding */ metadata),
  project: () => (/* binding */ project)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./mdx-components.jsx
var mdx_components = __webpack_require__(80141);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(14178);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/images/impactevaluator/impactevaluator_banner.webp
/* harmony default export */ const impactevaluator_banner = ({"src":"/_next/static/media/impactevaluator_banner.c5ce5b90.webp","height":2254,"width":4334,"blurDataURL":"data:image/webp;base64,UklGRlwAAABXRUJQVlA4IFAAAADwAQCdASoIAAQAAkA4JbACdEcAAeGuIYAA/vQXITeePd6qz2SdIDParX+7k4V4i8YGBXGYX26UdceMh/gmvO/d0d8ZH0KLC/txJ8k9/ugAAA==","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./src/images/impactevaluator/impactevaluator_1.webp
/* harmony default export */ const impactevaluator_1 = ({"src":"/_next/static/media/impactevaluator_1.e07dd75d.webp","height":1111,"width":2000,"blurDataURL":"data:image/webp;base64,UklGRiwAAABXRUJQVlA4ICAAAAAwAQCdASoIAAQAAkA4JaQAA3AA/vpU4K4wSq0ulAAAAA==","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./src/images/impactevaluator/impactevaluator_2.webp
/* harmony default export */ const impactevaluator_2 = ({"src":"/_next/static/media/impactevaluator_2.4b98a960.webp","height":1017,"width":2000,"blurDataURL":"data:image/webp;base64,UklGRiYAAABXRUJQVlA4IBoAAAAwAQCdASoIAAQAAkA4JaQAA3AA/vpAQLkAAA==","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./src/images/impactevaluator/impactevaluator_3.webp
/* harmony default export */ const impactevaluator_3 = ({"src":"/_next/static/media/impactevaluator_3.23367d3a.webp","height":1288,"width":2000,"blurDataURL":"data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAADQAQCdASoIAAUAAkA4JZwCdAD0W/SkIAD+4pg/if9m32LJtW4b3Hev9RwA90JMcYIUAAAA","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./src/images/impactevaluator/impactevaluator_4.webp
/* harmony default export */ const impactevaluator_4 = ({"src":"/_next/static/media/impactevaluator_4.7f3b88ed.webp","height":1017,"width":2000,"blurDataURL":"data:image/webp;base64,UklGRiYAAABXRUJQVlA4IBoAAAAwAQCdASoIAAQAAkA4JaQAA3AA/vpRkAAAAA==","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./src/images/impactevaluator/impactevaluator_5.webp
/* harmony default export */ const impactevaluator_5 = ({"src":"/_next/static/media/impactevaluator_5.7fd94f8e.webp","height":1198,"width":2000,"blurDataURL":"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoIAAUAAkA4JaQAA3AA/voogAA=","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./src/app/projects/impactevaluator/page.mdx
/*@jsxRuntime automatic @jsxImportSource react*/ 








const project = {
    author: "Filipa Ribeiro",
    date: "2023-10-30",
    title: "Impact Evaluator",
    description: "A platform to facilitate the evaluation and the retroactive funding of vital public goods.",
    thumbnail: {
        src: impactevaluator_banner.src,
        width: 1200,
        height: 400
    },
    client: "Protocol Labs (through Subvisual)",
    duration: "Feb 2022 - Dec 2022",
    role: "Product Design"
};
const metadata = {
    title: project.title,
    description: project.description,
    client: project.client,
    duration: project.duration,
    role: project.role,
    project
};
function _createMdxContent(props) {
    const _components = Object.assign({
        h2: "h2",
        p: "p",
        a: "a",
        strong: "strong"
    }, (0,mdx_components/* useMDXComponents */.a)(), props.components);
    return (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            jsx_runtime_.jsx((image_default()), {
                src: impactevaluator_banner,
                alt: ""
            }),
            "\n",
            jsx_runtime_.jsx(_components.h2, {
                children: "Problem"
            }),
            "\n",
            (0,jsx_runtime_.jsxs)(_components.p, {
                children: [
                    jsx_runtime_.jsx(_components.a, {
                        href: "https://protocol.ai/",
                        children: "Protocol Labs"
                    }),
                    " is a research, development, and deployment lab for various decentralized protocols and technologies. One of their projects is the Impact Evaluator, a funding mechanism designed for public goods, using Quadratic Funding."
                ]
            }),
            "\n",
            (0,jsx_runtime_.jsxs)(_components.p, {
                children: [
                    "The team at Protocol Labs was already ",
                    jsx_runtime_.jsx(_components.strong, {
                        children: "using an Excel file to perform the impact evaluations, but it was a very long and tedious process"
                    }),
                    ". Our goal was to provide an easier way for a community of evaluators to assess the impact of each outcome and its specific participants, in order for them to decide which projects would be retroactively funded and the amount of money they would receive."
                ]
            }),
            "\n",
            jsx_runtime_.jsx((image_default()), {
                src: impactevaluator_1,
                alt: ""
            }),
            "\n",
            jsx_runtime_.jsx(_components.h2, {
                children: "Solution"
            }),
            "\n",
            (0,jsx_runtime_.jsxs)(_components.p, {
                children: [
                    "In order to define and validate the problem and to develop a solution that met those needs, our team — one product designer, one product manager and one software developer — did an ",
                    jsx_runtime_.jsx(_components.strong, {
                        children: "event storming"
                    }),
                    " exercise, mapped out the ",
                    jsx_runtime_.jsx(_components.strong, {
                        children: "user journey"
                    }),
                    ", identified ",
                    jsx_runtime_.jsx(_components.strong, {
                        children: "pain points"
                    }),
                    ", and proceeded to create some quick sketches of what the product could be."
                ]
            }),
            "\n",
            jsx_runtime_.jsx((image_default()), {
                src: impactevaluator_2,
                alt: ""
            }),
            "\n",
            (0,jsx_runtime_.jsxs)(_components.p, {
                children: [
                    "These first ",
                    jsx_runtime_.jsx(_components.strong, {
                        children: "wireframes"
                    }),
                    " allowed the team to iterate on the design and come to a user-friendly and technically feasible solution, validating it through ",
                    jsx_runtime_.jsx(_components.strong, {
                        children: "user testing"
                    }),
                    " and feedback with the Protocol Labs team."
                ]
            }),
            "\n",
            (0,jsx_runtime_.jsxs)(_components.p, {
                children: [
                    "From this continuous process of testing and iterating, we finally got to the ",
                    jsx_runtime_.jsx(_components.strong, {
                        children: "high fidelity prototypes"
                    }),
                    " of the MVP."
                ]
            }),
            "\n",
            jsx_runtime_.jsx((image_default()), {
                src: impactevaluator_3,
                alt: ""
            }),
            "\n",
            jsx_runtime_.jsx(_components.h2, {
                children: "Outcomes and future developments"
            }),
            "\n",
            (0,jsx_runtime_.jsxs)(_components.p, {
                children: [
                    "The Impact Evaluator not only provides an easier to use platform for the impact evaluation and funding of public goods projects but also streamlined the evaluation process for the evaluators’ team. With this new platform, ",
                    jsx_runtime_.jsx(_components.strong, {
                        children: "the average time to complete the impact evaluation process was reduced to around 1 hour"
                    }),
                    ". These significant time savings were very important for the evaluators’ team."
                ]
            }),
            "\n",
            jsx_runtime_.jsx((image_default()), {
                src: impactevaluator_4,
                alt: ""
            }),
            "\n",
            jsx_runtime_.jsx(_components.p, {
                children: "Some of the planned future developments include a better mobile experience to allow evaluators to share their inputs on the go (the website is currently responsive, but a mobile focus is now required); integrating additional evaluation methods, and adding new features that would improve the overall user experience."
            }),
            "\n",
            jsx_runtime_.jsx((image_default()), {
                src: impactevaluator_5,
                alt: ""
            })
        ]
    });
}
function MDXContent(props = {}) {
    const { wrapper: MDXLayout } = Object.assign({}, (0,mdx_components/* useMDXComponents */.a)(), props.components);
    return MDXLayout ? jsx_runtime_.jsx(MDXLayout, Object.assign({}, props, {
        children: jsx_runtime_.jsx(_createMdxContent, props)
    })) : _createMdxContent(props);
}
/* harmony default export */ const page = (MDXContent);


/***/ })

};
;
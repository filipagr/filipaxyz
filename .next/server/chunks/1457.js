"use strict";
exports.id = 1457;
exports.ids = [1457];
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

/***/ 11457:
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
;// CONCATENATED MODULE: ./src/images/astralscan/astralscan_banner.webp
/* harmony default export */ const astralscan_banner = ({"src":"/_next/static/media/astralscan_banner.cad7aa97.webp","height":4508,"width":8668,"blurDataURL":"data:image/webp;base64,UklGRlgAAABXRUJQVlA4IEwAAACwAQCdASoIAAQAAkA4JbACdAD0gbJgAP72f2M/6bTXWO6N/8P6kdlBBluy5Yj57H9dgqg6iAP4NbhiyNkOL4+0ng2a3uWC5ObmAAAA","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./src/images/astralscan/astralscan_1.webp
/* harmony default export */ const astralscan_1 = ({"src":"/_next/static/media/astralscan_1.137cfb0f.webp","height":2576,"width":4000,"blurDataURL":"data:image/webp;base64,UklGRiwAAABXRUJQVlA4ICAAAAAwAQCdASoIAAUAAkA4JaQAA3AA/voK+bZSm+uCWLAAAA==","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./src/images/astralscan/astralscan_2.webp
/* harmony default export */ const astralscan_2 = ({"src":"/_next/static/media/astralscan_2.f8f84feb.webp","height":3308,"width":4000,"blurDataURL":"data:image/webp;base64,UklGRjYAAABXRUJQVlA4ICoAAACwAQCdASoIAAcAAkA4JZwAAu18scAAAP79wAYkfx19Kic0wsCl56dAAAA=","blurWidth":8,"blurHeight":7});
;// CONCATENATED MODULE: ./src/images/astralscan/astralscan_3.webp
/* harmony default export */ const astralscan_3 = ({"src":"/_next/static/media/astralscan_3.860bde94.webp","height":2600,"width":4000,"blurDataURL":"data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAADQAQCdASoIAAUAAkA4JZwCdAERHrOAgAD+/b+WpNmQ0ZBCgOifxnZnAFzgAA==","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./src/app/projects/astralscan/page.mdx
/*@jsxRuntime automatic @jsxImportSource react*/ 






const project = {
    author: "Filipa Ribeiro",
    date: "2025-03-06",
    title: "Astralscan",
    description: "A block explorer for the Astral Protocol.",
    thumbnail: {
        src: astralscan_banner.src,
        width: 1200,
        height: 400
    },
    client: "Astral",
    duration: "March 2025 - ongoing",
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
        em: "em",
        ul: "ul",
        li: "li"
    }, (0,mdx_components/* useMDXComponents */.a)(), props.components);
    return (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            jsx_runtime_.jsx((image_default()), {
                src: astralscan_banner,
                alt: ""
            }),
            "\n",
            jsx_runtime_.jsx(_components.h2, {
                children: "Overview"
            }),
            "\n",
            (0,jsx_runtime_.jsxs)(_components.p, {
                children: [
                    "Astralscan is a block explorer built for the ",
                    jsx_runtime_.jsx(_components.a, {
                        href: "https://www.astral.global/",
                        children: "Astral Protocol"
                    }),
                    ", a spatial extension of the decentralized web. It allows users to explore, verify, and interact with location-based attestations recorded onchain. The goal is to make the ",
                    jsx_runtime_.jsx(_components.em, {
                        children: "where"
                    }),
                    " of web3 as verifiable and accessible as the ",
                    jsx_runtime_.jsx(_components.em, {
                        children: "what"
                    }),
                    " and ",
                    jsx_runtime_.jsx(_components.em, {
                        children: "when"
                    }),
                    "."
                ]
            }),
            "\n",
            (0,jsx_runtime_.jsxs)(_components.p, {
                children: [
                    "This project was born from a serendipitous collaboration during my time at ",
                    jsx_runtime_.jsx(_components.a, {
                        href: "https://www.kernel.community/",
                        children: "Kernel"
                    }),
                    ", a community of web3 builders. There I met John from the Astral team, became fascinated with their vision, and volunteered to help bring spatial attestations to life through a better user experience."
                ]
            }),
            "\n",
            jsx_runtime_.jsx(_components.h2, {
                children: "Problem"
            }),
            "\n",
            jsx_runtime_.jsx(_components.p, {
                children: "Astral had already developed a prototype called Logbook, which allowed users to create spatial attestations directly on the app. However, it lacked the ability to:"
            }),
            "\n",
            (0,jsx_runtime_.jsxs)(_components.ul, {
                children: [
                    "\n",
                    jsx_runtime_.jsx(_components.li, {
                        children: "Visualize attestations across time, space, or chain"
                    }),
                    "\n",
                    jsx_runtime_.jsx(_components.li, {
                        children: "Filter or browse attestations in a meaningful way"
                    }),
                    "\n"
                ]
            }),
            "\n",
            jsx_runtime_.jsx(_components.p, {
                children: "There was a clear need for a new interface designed to both visualize and organize spatial attestations and support future development through a unified component system."
            }),
            "\n",
            jsx_runtime_.jsx(_components.h2, {
                children: "Goals"
            }),
            "\n",
            (0,jsx_runtime_.jsxs)(_components.ul, {
                children: [
                    "\n",
                    jsx_runtime_.jsx(_components.li, {
                        children: "Design a map-based and list-based explorer for attestations across different chains"
                    }),
                    "\n",
                    jsx_runtime_.jsx(_components.li, {
                        children: "Build a reusable and scalable component library"
                    }),
                    "\n",
                    jsx_runtime_.jsx(_components.li, {
                        children: "Enable users to explore, add, and verify entries with location, media, and metadata"
                    }),
                    "\n",
                    jsx_runtime_.jsx(_components.li, {
                        children: "Improve visual hierarchy and usability"
                    }),
                    "\n",
                    jsx_runtime_.jsx(_components.li, {
                        children: "Lay the groundwork for features like filters, tags, and sharing"
                    }),
                    "\n"
                ]
            }),
            "\n",
            jsx_runtime_.jsx((image_default()), {
                src: astralscan_1,
                alt: ""
            }),
            "\n",
            jsx_runtime_.jsx(_components.h2, {
                children: "Solution"
            }),
            "\n",
            jsx_runtime_.jsx(_components.p, {
                children: "The new app, Astralscan, will allow people to:"
            }),
            "\n",
            (0,jsx_runtime_.jsxs)(_components.ul, {
                children: [
                    "\n",
                    jsx_runtime_.jsx(_components.li, {
                        children: "View all attestations on a global map"
                    }),
                    "\n",
                    jsx_runtime_.jsx(_components.li, {
                        children: "Browse entries in a sortable and filterable list view"
                    }),
                    "\n",
                    (0,jsx_runtime_.jsxs)(_components.li, {
                        children: [
                            "Click on entries to see details, including:",
                            "\n",
                            (0,jsx_runtime_.jsxs)(_components.ul, {
                                children: [
                                    "\n",
                                    jsx_runtime_.jsx(_components.li, {
                                        children: "Location, date/time"
                                    }),
                                    "\n",
                                    jsx_runtime_.jsx(_components.li, {
                                        children: "Media (e.g. image proofs)"
                                    }),
                                    "\n",
                                    jsx_runtime_.jsx(_components.li, {
                                        children: "Description or memo"
                                    }),
                                    "\n",
                                    jsx_runtime_.jsx(_components.li, {
                                        children: "Chain metadata"
                                    }),
                                    "\n"
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    jsx_runtime_.jsx(_components.li, {
                        children: "Create new attestations with a smoother, more guided UX"
                    }),
                    "\n"
                ]
            }),
            "\n",
            jsx_runtime_.jsx((image_default()), {
                src: astralscan_2,
                alt: ""
            }),
            "\n",
            jsx_runtime_.jsx(_components.h2, {
                children: "Current Status & Next Steps"
            }),
            "\n",
            jsx_runtime_.jsx(_components.p, {
                children: "This is an ongoing project. I’m currently:"
            }),
            "\n",
            (0,jsx_runtime_.jsxs)(_components.ul, {
                children: [
                    "\n",
                    jsx_runtime_.jsx(_components.li, {
                        children: "Expanding the entry detail view to show additional metadata"
                    }),
                    "\n",
                    jsx_runtime_.jsx(_components.li, {
                        children: "Improving loading/empty states"
                    }),
                    "\n",
                    jsx_runtime_.jsx(_components.li, {
                        children: "Finalizing and documenting the component library"
                    }),
                    "\n"
                ]
            }),
            "\n",
            jsx_runtime_.jsx((image_default()), {
                src: astralscan_3,
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
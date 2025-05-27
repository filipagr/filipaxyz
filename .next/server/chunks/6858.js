"use strict";
exports.id = 6858;
exports.ids = [6858];
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

/***/ 46858:
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
;// CONCATENATED MODULE: ./src/images/fiptracker/fiptracker_banner.webp
/* harmony default export */ const fiptracker_banner = ({"src":"/_next/static/media/fiptracker_banner.b610096f.webp","height":4508,"width":8668,"blurDataURL":"data:image/webp;base64,UklGRmAAAABXRUJQVlA4IFQAAABQAgCdASoIAAQAAkA4JbACdEcAfqAB9ogIfAAA/vkJUVCKXU1USyThngd34tKRiP/JY90xym8fyLQsh+fVPEftSzplfpBgNu9v7FjUHYRDX47AAAA=","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./src/images/fiptracker/fiptracker_1.webp
/* harmony default export */ const fiptracker_1 = ({"src":"/_next/static/media/fiptracker_1.7d330287.webp","height":2222,"width":4000,"blurDataURL":"data:image/webp;base64,UklGRiYAAABXRUJQVlA4IBoAAAAwAQCdASoIAAQAAkA4JaQAA3AA/vo/wAAAAA==","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./src/images/fiptracker/fiptracker_2.webp
/* harmony default export */ const fiptracker_2 = ({"src":"/_next/static/media/fiptracker_2.4f77c43d.webp","height":2396,"width":4000,"blurDataURL":"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoIAAUAAkA4JaQAA3AA/vo6gAA=","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./src/images/fiptracker/fiptracker_3.webp
/* harmony default export */ const fiptracker_3 = ({"src":"/_next/static/media/fiptracker_3.af880c57.webp","height":2222,"width":4000,"blurDataURL":"data:image/webp;base64,UklGRioAAABXRUJQVlA4IB4AAAAwAQCdASoIAAQAAkA4JaQAA3AA/vpUPbjg7NoAAAA=","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./src/images/fiptracker/fiptracker_4.webp
/* harmony default export */ const fiptracker_4 = ({"src":"/_next/static/media/fiptracker_4.bcffe495.webp","height":2396,"width":4000,"blurDataURL":"data:image/webp;base64,UklGRigAAABXRUJQVlA4IBwAAAAwAQCdASoIAAUAAkA4JaQAA3AA/vo9TjYqAAAA","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./src/images/fiptracker/fiptracker_5.webp
/* harmony default export */ const fiptracker_5 = ({"src":"/_next/static/media/fiptracker_5.d5da80f0.webp","height":2222,"width":4000,"blurDataURL":"data:image/webp;base64,UklGRiYAAABXRUJQVlA4IBoAAAAwAQCdASoIAAQAAkA4JaQAA3AA/vo/wAAAAA==","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./src/app/projects/fiptracker/page.mdx
/*@jsxRuntime automatic @jsxImportSource react*/ 








const project = {
    author: "Filipa Ribeiro",
    date: "2023-11-10",
    title: "FIP Tracker Tool",
    description: "A Filecoin Improvement Proposals tracker tool for the broader Filecoin community.",
    thumbnail: {
        src: fiptracker_banner.src,
        width: 1200,
        height: 400
    },
    client: "Filecoin Foundation",
    duration: "May 2024 - Jun 2024",
    role: "Product Designer"
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
        strong: "strong",
        ul: "ul",
        li: "li"
    }, (0,mdx_components/* useMDXComponents */.a)(), props.components);
    return (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            jsx_runtime_.jsx((image_default()), {
                src: fiptracker_banner,
                alt: "FIP Tracker Banner",
                className: "rounded-xl mb-10"
            }),
            "\n",
            jsx_runtime_.jsx(_components.h2, {
                children: "Problem"
            }),
            "\n",
            (0,jsx_runtime_.jsxs)(_components.p, {
                children: [
                    jsx_runtime_.jsx(_components.a, {
                        href: "https://filecoin.io/",
                        children: "Filecoin"
                    }),
                    " is a decentralized storage network designed to store humanity's most important information. To continuously improve and evolve the network, the Filecoin community follows a structured governance process through ",
                    jsx_runtime_.jsx(_components.strong, {
                        children: "Filecoin Improvement Proposals (FIPs)"
                    }),
                    "."
                ]
            }),
            "\n",
            (0,jsx_runtime_.jsxs)(_components.p, {
                children: [
                    "Currently, FIPs are managed primarily on ",
                    jsx_runtime_.jsx(_components.a, {
                        href: "https://github.com/filecoin-project/FIPs",
                        children: "GitHub"
                    }),
                    ", which serves as the source of truth. However, relying solely on GitHub, non-technical users and broader community members find it difficult to engage with and track FIP progress."
                ]
            }),
            "\n",
            jsx_runtime_.jsx(_components.p, {
                children: "To address this issue, a dedicated and user-friendly FIP Tracker was needed. Rather than creating a standalone tool, the idea was to integrate the tracker into Metropolis, an existing tool originally designed as a no-binding sentiment check platform for the Filecoin community. Centralizing the FIP tracker within Metropolis would streamline governance participation, ensuring that all relevant discussions, updates, and sentiment checks exist in one place."
            }),
            "\n",
            jsx_runtime_.jsx((image_default()), {
                src: fiptracker_5,
                alt: "Screenshot of FIP Tracker filtering UI",
                className: "rounded-xl my-8"
            }),
            "\n",
            jsx_runtime_.jsx(_components.p, {
                children: "This FIP Tracker would need to:"
            }),
            "\n",
            (0,jsx_runtime_.jsxs)(_components.ul, {
                children: [
                    "\n",
                    (0,jsx_runtime_.jsxs)(_components.li, {
                        children: [
                            jsx_runtime_.jsx(_components.strong, {
                                children: "Provide a structured, easy-to-navigate dashboard"
                            }),
                            " for tracking FIP status."
                        ]
                    }),
                    "\n",
                    (0,jsx_runtime_.jsxs)(_components.li, {
                        children: [
                            jsx_runtime_.jsx(_components.strong, {
                                children: "Automatically sync with GitHub"
                            }),
                            ", ensuring real-time updates while keeping GitHub as the source of truth."
                        ]
                    }),
                    "\n",
                    (0,jsx_runtime_.jsxs)(_components.li, {
                        children: [
                            jsx_runtime_.jsx(_components.strong, {
                                children: "Improve accessibility"
                            }),
                            " for both technical and non-technical users by offering a clear and intuitive interface."
                        ]
                    }),
                    "\n",
                    (0,jsx_runtime_.jsxs)(_components.li, {
                        children: [
                            jsx_runtime_.jsx(_components.strong, {
                                children: "Enhance engagement"
                            }),
                            " by enabling notifications and filtering."
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            jsx_runtime_.jsx(_components.h2, {
                children: "Process"
            }),
            "\n",
            jsx_runtime_.jsx(_components.p, {
                children: "I worked closely with the Filecoin head of governance, a governance project manager, and an engineer to define the core requirements for this tool. Together, we outlined the essential information that needed to be displayed for each FIP:"
            }),
            "\n",
            (0,jsx_runtime_.jsxs)(_components.ul, {
                children: [
                    "\n",
                    jsx_runtime_.jsx(_components.li, {
                        children: jsx_runtime_.jsx(_components.strong, {
                            children: "Title"
                        })
                    }),
                    "\n",
                    jsx_runtime_.jsx(_components.li, {
                        children: jsx_runtime_.jsx(_components.strong, {
                            children: "Authors"
                        })
                    }),
                    "\n",
                    jsx_runtime_.jsx(_components.li, {
                        children: jsx_runtime_.jsx(_components.strong, {
                            children: "Creation Date"
                        })
                    }),
                    "\n",
                    jsx_runtime_.jsx(_components.li, {
                        children: jsx_runtime_.jsx(_components.strong, {
                            children: "Status"
                        })
                    }),
                    "\n",
                    jsx_runtime_.jsx(_components.li, {
                        children: jsx_runtime_.jsx(_components.strong, {
                            children: "Type"
                        })
                    }),
                    "\n",
                    jsx_runtime_.jsx(_components.li, {
                        children: jsx_runtime_.jsx(_components.strong, {
                            children: "Link to GitHub"
                        })
                    }),
                    "\n",
                    jsx_runtime_.jsx(_components.li, {
                        children: jsx_runtime_.jsx(_components.strong, {
                            children: "Additional proposal details"
                        })
                    }),
                    "\n"
                ]
            }),
            "\n",
            jsx_runtime_.jsx(_components.p, {
                children: 'We also identified that if a FIP reached the "Last Call" stage, the tool needed to display a countdown timer indicating how many days were left before the proposal was finalized.'
            }),
            "\n",
            jsx_runtime_.jsx(_components.h2, {
                children: "Challenges & Solutions"
            }),
            "\n",
            (0,jsx_runtime_.jsxs)(_components.p, {
                children: [
                    "The biggest challenge was accommodating the ",
                    jsx_runtime_.jsx(_components.strong, {
                        children: "eight different FIP statuses"
                    }),
                    " while ensuring ",
                    jsx_runtime_.jsx(_components.strong, {
                        children: "clarity and ease of use"
                    }),
                    ". We tackled this by implementing color-coded status labels, making it easy for users to distinguish between different proposal stages at a glance."
                ]
            }),
            "\n",
            (0,jsx_runtime_.jsxs)(_components.p, {
                children: [
                    "We also ",
                    jsx_runtime_.jsx(_components.strong, {
                        children: "prioritized search and filtering capabilities to enhance usability"
                    }),
                    ". Users needed to:"
                ]
            }),
            "\n",
            (0,jsx_runtime_.jsxs)(_components.ul, {
                children: [
                    "\n",
                    jsx_runtime_.jsx(_components.li, {
                        children: "Search FIPs by keywords."
                    }),
                    "\n",
                    jsx_runtime_.jsx(_components.li, {
                        children: "Filter FIPs by Authors, Status, Date, and Type."
                    }),
                    "\n",
                    jsx_runtime_.jsx(_components.li, {
                        children: "Sort FIPs by Newest to Oldest, Oldest to Newest, Status, and Authors (alphabetical order)."
                    }),
                    "\n"
                ]
            }),
            "\n",
            (0,jsx_runtime_.jsxs)(_components.p, {
                children: [
                    "Since the dashboard contained a high density of information, we introduced customization features allowing users to ",
                    jsx_runtime_.jsx(_components.strong, {
                        children: "show or hide specific details"
                    }),
                    ", such as:"
                ]
            }),
            "\n",
            (0,jsx_runtime_.jsxs)(_components.ul, {
                children: [
                    "\n",
                    jsx_runtime_.jsx(_components.li, {
                        children: "Authors"
                    }),
                    "\n",
                    jsx_runtime_.jsx(_components.li, {
                        children: "Creation Date"
                    }),
                    "\n",
                    jsx_runtime_.jsx(_components.li, {
                        children: "Type"
                    }),
                    "\n",
                    jsx_runtime_.jsx(_components.li, {
                        children: "Category"
                    }),
                    "\n"
                ]
            }),
            "\n",
            jsx_runtime_.jsx((image_default()), {
                src: fiptracker_3,
                alt: "Customization options UI",
                className: "rounded-xl my-8"
            }),
            "\n",
            jsx_runtime_.jsx(_components.p, {
                children: "This level of personalization ensured that users could customize the tool to their needs, improving their overall experience."
            }),
            "\n",
            jsx_runtime_.jsx(_components.p, {
                children: "To prevent information overload while maintaining necessary details, I explored multiple ways to visualize the data."
            }),
            "\n",
            jsx_runtime_.jsx((image_default()), {
                src: fiptracker_2,
                alt: "Design explorations",
                className: "rounded-xl my-8"
            }),
            "\n",
            jsx_runtime_.jsx(_components.p, {
                children: "The final solution presented a clean, structured layout, allowing users to expand a proposal card for more details when needed. Each status was color-coded, ensuring quick recognition and differentiation between proposal stages."
            }),
            "\n",
            jsx_runtime_.jsx((image_default()), {
                src: fiptracker_4,
                alt: "Final dashboard UI",
                className: "rounded-xl my-8"
            }),
            "\n",
            jsx_runtime_.jsx(_components.h2, {
                children: "Implementation & Current Status"
            }),
            "\n",
            jsx_runtime_.jsx(_components.p, {
                children: "The tool has since been developed by an external contractor and renamed to FIL Poll. An MVP is currently in progress and being tested with various ecosystem participants to refine its usability and effectiveness."
            }),
            "\n",
            jsx_runtime_.jsx((image_default()), {
                src: fiptracker_1,
                alt: "FIL Poll interface",
                className: "rounded-xl my-8"
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
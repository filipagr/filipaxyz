"use strict";
exports.id = 5804;
exports.ids = [5804];
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

/***/ 75804:
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
;// CONCATENATED MODULE: ./src/images/saturnportal/saturnportal_banner.webp
/* harmony default export */ const saturnportal_banner = ({"src":"/_next/static/media/saturnportal_banner.fe032b33.webp","height":1040,"width":2000,"blurDataURL":"data:image/webp;base64,UklGRl4AAABXRUJQVlA4IFIAAADwAQCdASoIAAQAAkA4JbACdEcAAeGuIYAA/cf44fPr9f/0ke1J6Tb53+KKu3jf0oPhfQ++3c6hc3L77ZT5o9537lO4Wld8ZHLY98G501smAAAA","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./src/images/saturnportal/saturnportal_1.webp
/* harmony default export */ const saturnportal_1 = ({"src":"/_next/static/media/saturnportal_1.725f6eee.webp","height":1111,"width":2000,"blurDataURL":"data:image/webp;base64,UklGRiwAAABXRUJQVlA4ICAAAAAwAQCdASoIAAQAAkA4JaQAA3AA/vpmI5ARcVWl0oAAAA==","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./src/images/saturnportal/saturnportal_2.webp
/* harmony default export */ const saturnportal_2 = ({"src":"/_next/static/media/saturnportal_2.06d68f47.webp","height":1111,"width":2000,"blurDataURL":"data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAACQAQCdASoIAAQAAkA4JZwAApz92sAA/vm6Dva/dT/27bUvecXf70XOMHSg+c6SgAA=","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./src/images/saturnportal/saturnportal_3.webp
/* harmony default export */ const saturnportal_3 = ({"src":"/_next/static/media/saturnportal_3.d5e91629.webp","height":1288,"width":2000,"blurDataURL":"data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAACwAQCdASoIAAUAAkA4JZwAAxfk3sAAAP74RkNvFf3/0p6XHfpD1fMOuOKLmye24AAAAA==","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./src/images/saturnportal/saturnportal_4.webp
/* harmony default export */ const saturnportal_4 = ({"src":"/_next/static/media/saturnportal_4.3ddb117a.webp","height":1288,"width":2000,"blurDataURL":"data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAADQAQCdASoIAAUAAkA4JZQC7AD0Pnu4AAD+2HXfbH7zLaxS2rcN7hx36s5DYS+M+jexWetUAAA=","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./src/images/saturnportal/saturnportal_5.webp
/* harmony default export */ const saturnportal_5 = ({"src":"/_next/static/media/saturnportal_5.03acf378.webp","height":1017,"width":2000,"blurDataURL":"data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAACwAQCdASoIAAQAAkA4JZwAAxf8B0IAAP73bE3A91f/7AGLV5uTTlIcHlL15HxOAAA=","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./src/app/projects/saturn/page.mdx
/*@jsxRuntime automatic @jsxImportSource react*/ 








const project = {
    author: "Filipa Ribeiro",
    date: "2023-11-10",
    title: "Saturn Portal",
    description: "A platform for Filecoin Saturn CDN users to manage their subscription plans and track their consumption of the network.",
    thumbnail: {
        src: saturnportal_banner.src,
        width: 1200,
        height: 400
    },
    client: "Protocol Labs (through Subvisual)",
    duration: "Aug 2023 - Oct 2023",
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
                src: saturnportal_banner,
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
                        href: "https://saturn.tech/",
                        children: "Filecoin Saturn"
                    }),
                    " is a CDN that accelerates data stored on the Filecoin Network and IPFS. The Saturn network launched in Q4 2022 and by August 2023 — when this project began — there were over 2000 points of presence serving content."
                ]
            }),
            "\n",
            (0,jsx_runtime_.jsxs)(_components.p, {
                children: [
                    "However, the onboarding process for new customers wanting to use the Saturn network to accelerate their content lacked a seamless and user-friendly experience. Customers faced challenges in ",
                    jsx_runtime_.jsx(_components.strong, {
                        children: "setting up"
                    }),
                    ", ",
                    jsx_runtime_.jsx(_components.strong, {
                        children: "understanding cost"
                    }),
                    ", and ",
                    jsx_runtime_.jsx(_components.strong, {
                        children: "analyzing network usage"
                    }),
                    ". Additionally, a registration process for customers was necessary to ",
                    jsx_runtime_.jsx(_components.strong, {
                        children: "generate a UCAN keypair for network metering"
                    }),
                    "."
                ]
            }),
            "\n",
            jsx_runtime_.jsx((image_default()), {
                src: saturnportal_1,
                alt: ""
            }),
            "\n",
            jsx_runtime_.jsx(_components.h2, {
                children: "Solution"
            }),
            "\n",
            (0,jsx_runtime_.jsxs)(_components.p, {
                children: [
                    "Recognizing the need for an improved customer experience, ",
                    jsx_runtime_.jsx(_components.a, {
                        href: "https://protocol.ai/",
                        children: "Protocol Labs"
                    }),
                    " hired Subvisual to help them develop Saturn Portal — a platform aiming to address these pain points by enabling customers to easily set up their clients, and monitor their usage and costs. Our team for this project consisted of one product designer and two software developers who worked closely with the PL team."
                ]
            }),
            "\n",
            jsx_runtime_.jsx((image_default()), {
                src: saturnportal_2,
                alt: ""
            }),
            "\n",
            (0,jsx_runtime_.jsxs)(_components.p, {
                children: [
                    "We first started by going through the requirements list to grasp the project's scope and assess the need of each requirement. To facilitate this, we organized the requirements into different categories. This process generated a set of initial questions, some of which required further consideration. The helpful answers we got allowed us to delve into shaping the ",
                    jsx_runtime_.jsx(_components.strong, {
                        children: "Information Architecture"
                    }),
                    " and primary ",
                    jsx_runtime_.jsx(_components.strong, {
                        children: "user flows"
                    }),
                    " of the product."
                ]
            }),
            "\n",
            jsx_runtime_.jsx((image_default()), {
                src: saturnportal_3,
                alt: ""
            }),
            "\n",
            (0,jsx_runtime_.jsxs)(_components.p, {
                children: [
                    "Once the Information Architecture and main user flows were established, we transitioned to the ",
                    jsx_runtime_.jsx(_components.strong, {
                        children: "wireframing"
                    }),
                    " stage, subsequently ",
                    jsx_runtime_.jsx(_components.strong, {
                        children: "testing the wireframes"
                    }),
                    " with the Protocol Labs team. Through various tests and tweaks, we finally got to a more polished version of the MVP."
                ]
            }),
            "\n",
            jsx_runtime_.jsx((image_default()), {
                src: saturnportal_4,
                alt: ""
            }),
            "\n",
            jsx_runtime_.jsx(_components.p, {
                children: "In this first version of the product, users are already able to:"
            }),
            "\n",
            (0,jsx_runtime_.jsxs)(_components.ul, {
                children: [
                    "\n",
                    (0,jsx_runtime_.jsxs)(_components.li, {
                        children: [
                            "Easily view information regarding their consumption and requests on the ",
                            jsx_runtime_.jsx(_components.strong, {
                                children: "Dashboard"
                            }),
                            ";"
                        ]
                    }),
                    "\n",
                    (0,jsx_runtime_.jsxs)(_components.li, {
                        children: [
                            "Change their overage limit, alter or cancel their plan, and download receipts on the ",
                            jsx_runtime_.jsx(_components.strong, {
                                children: "Manage Subscription"
                            }),
                            " page;"
                        ]
                    }),
                    "\n",
                    (0,jsx_runtime_.jsxs)(_components.li, {
                        children: [
                            "Quickly check the details of their integrations and the status of the service worker for each integration, and add new integrations on the ",
                            jsx_runtime_.jsx(_components.strong, {
                                children: "Integrations"
                            }),
                            " page;"
                        ]
                    }),
                    "\n",
                    (0,jsx_runtime_.jsxs)(_components.li, {
                        children: [
                            "Edit their personal information, set up a 2FA mechanism, change their preferred payment method, and customize the portal theme on the ",
                            jsx_runtime_.jsx(_components.strong, {
                                children: "Settings"
                            }),
                            " page."
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            jsx_runtime_.jsx((image_default()), {
                src: saturnportal_5,
                alt: ""
            }),
            "\n",
            jsx_runtime_.jsx(_components.h2, {
                children: "Outcome"
            }),
            "\n",
            jsx_runtime_.jsx(_components.p, {
                children: "The Protocol Labs team was very happy with the MVP of Saturn Portal, unveiling its first version during Lab Week 23 at Devconnect in Istanbul, Turkey, in November 2023. The initial release was invite-only, allowing for testing with a small group of users."
            }),
            "\n",
            (0,jsx_runtime_.jsxs)(_components.p, {
                children: [
                    "Since then, Saturn has been deprecated, as its team has joined forces with web3.storage to develop ",
                    jsx_runtime_.jsx(_components.a, {
                        href: "https://storacha.network/",
                        children: "Storacha Network"
                    }),
                    "."
                ]
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
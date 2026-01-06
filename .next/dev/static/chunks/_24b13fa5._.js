(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Navbar() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleScroll = {
                "Navbar.useEffect.handleScroll": ()=>{
                    setScrolled(window.scrollY > 50);
                }
            }["Navbar.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll);
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    const toggleMenu = ()=>setIsOpen(!isOpen);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md py-4 border-b border-white/10" : "bg-transparent py-6"}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 flex justify-between items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "text-2xl font-bold tracking-tighter text-white",
                    children: [
                        "ORVOX",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-cyan-400",
                            children: "AI"
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 30,
                            columnNumber: 26
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Navbar.tsx",
                    lineNumber: 29,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden lg:flex items-center gap-6 xl:gap-8",
                    children: [
                        [
                            {
                                name: "About",
                                path: "/about-us"
                            },
                            {
                                name: "Services",
                                path: "/services"
                            },
                            {
                                name: "Portfolio",
                                path: "/portfolio"
                            },
                            {
                                name: "Projects",
                                path: "/key-projects"
                            },
                            {
                                name: "Stories",
                                path: "/testimonials"
                            },
                            {
                                name: "Contact",
                                path: "/contact-us"
                            }
                        ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: item.path,
                                className: "text-sm font-medium text-gray-300 hover:text-white transition-colors uppercase tracking-widest relative group",
                                children: [
                                    item.name,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 49,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, item.name, true, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 43,
                                columnNumber: 25
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/pricing",
                            className: "px-6 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-cyan-400 transition-colors",
                            children: "PRICING"
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 52,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Navbar.tsx",
                    lineNumber: 34,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: toggleMenu,
                    className: "md:hidden text-white",
                    children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {}, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 62,
                        columnNumber: 31
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {}, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 62,
                        columnNumber: 39
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Navbar.tsx",
                    lineNumber: 61,
                    columnNumber: 17
                }, this),
                isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 p-8 flex flex-col gap-6 md:hidden",
                    children: [
                        {
                            name: "About",
                            path: "/about-us"
                        },
                        {
                            name: "Services",
                            path: "/services"
                        },
                        {
                            name: "Portfolio",
                            path: "/portfolio"
                        },
                        {
                            name: "Projects",
                            path: "/key-projects"
                        },
                        {
                            name: "Testimonials",
                            path: "/testimonials"
                        },
                        {
                            name: "Pricing",
                            path: "/pricing"
                        },
                        {
                            name: "Contact",
                            path: "/contact-us"
                        }
                    ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: item.path,
                            className: "text-xl font-bold text-white hover:text-cyan-400 transition-colors",
                            onClick: ()=>setIsOpen(false),
                            children: item.name
                        }, item.name, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 77,
                            columnNumber: 29
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/Navbar.tsx",
                    lineNumber: 67,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Navbar.tsx",
            lineNumber: 28,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Navbar.tsx",
        lineNumber: 24,
        columnNumber: 9
    }, this);
}
_s(Navbar, "E9hQXvWoSqP64D0yGnqXyHKCBFc=");
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-black border-t border-white/10 pt-20 pb-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-4 gap-12 mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-span-1 md:col-span-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold mb-6 text-white",
                                    children: [
                                        "ORVOX",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-cyan-400",
                                            children: "AI"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 8,
                                            columnNumber: 34
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 7,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-400 text-sm leading-relaxed",
                                    children: "Transforming complexity into clarity. We deliver secure, intelligent solutions that help industries unlock growth beyond borders."
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 10,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Footer.tsx",
                            lineNumber: 6,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-white font-bold mb-6 uppercase tracking-wider text-sm",
                                    children: "Services"
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 16,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-4 text-sm text-gray-400",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "hover:text-cyan-400 transition-colors",
                                                children: "Blockchain Solutions"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 18,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 18,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "hover:text-cyan-400 transition-colors",
                                                children: "AI & ML Solutions"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 19,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 19,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "hover:text-cyan-400 transition-colors",
                                                children: "Web Development"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 20,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 20,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "hover:text-cyan-400 transition-colors",
                                                children: "Data Analysis"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 21,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 21,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 17,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Footer.tsx",
                            lineNumber: 15,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-white font-bold mb-6 uppercase tracking-wider text-sm",
                                    children: "Company"
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 26,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-4 text-sm text-gray-400",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "hover:text-cyan-400 transition-colors",
                                                children: "About Us"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 28,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 28,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "hover:text-cyan-400 transition-colors",
                                                children: "Portfolio"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 29,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 29,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "hover:text-cyan-400 transition-colors",
                                                children: "Careers"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 30,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 30,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "hover:text-cyan-400 transition-colors",
                                                children: "Contact"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 31,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 31,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 27,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Footer.tsx",
                            lineNumber: 25,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-white font-bold mb-6 uppercase tracking-wider text-sm",
                                    children: "Contact"
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 36,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-4 text-sm text-gray-400",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Lahore, Pakistan"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 38,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Sharjah, UAE"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 39,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "mailto:info@orvoxai.com",
                                                className: "hover:text-cyan-400 transition-colors",
                                                children: "info@orvoxai.com"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 40,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 40,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 37,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Footer.tsx",
                            lineNumber: 35,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Footer.tsx",
                    lineNumber: 5,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-500 text-xs",
                            children: "© 2025 Orvox AI. All rights reserved."
                        }, void 0, false, {
                            fileName: "[project]/components/Footer.tsx",
                            lineNumber: 46,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "text-gray-500 hover:text-white transition-colors text-xs",
                                    children: "Privacy Policy"
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 48,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "text-gray-500 hover:text-white transition-colors text-xs",
                                    children: "Terms of Service"
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 49,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Footer.tsx",
                            lineNumber: 47,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Footer.tsx",
                    lineNumber: 45,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Footer.tsx",
            lineNumber: 4,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Footer.tsx",
        lineNumber: 3,
        columnNumber: 9
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/NeuralBackground.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NeuralBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-1eccaf1c.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Points$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Points.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$PointMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/PointMaterial.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// Detect if mobile for performance optimization
const useIsMobile = ()=>{
    _s();
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useIsMobile.useEffect": ()=>{
            const checkMobile = {
                "useIsMobile.useEffect.checkMobile": ()=>{
                    setIsMobile(window.innerWidth < 768);
                }
            }["useIsMobile.useEffect.checkMobile"];
            checkMobile();
            window.addEventListener('resize', checkMobile);
            return ({
                "useIsMobile.useEffect": ()=>window.removeEventListener('resize', checkMobile)
            })["useIsMobile.useEffect"];
        }
    }["useIsMobile.useEffect"], []);
    return isMobile;
};
_s(useIsMobile, "0VTTNJATKABQPGLm9RVT0tKGUgU=");
function NeuralNetwork() {
    _s1();
    const linesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const nodesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [mousePos, setMousePos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const isMobile = useIsMobile();
    // Reduce nodes for a cleaner, minimal aesthetic
    const nodeCount = isMobile ? 20 : 35;
    // Create neural nodes
    const nodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "NeuralNetwork.useMemo[nodes]": ()=>{
            const nodeArray = [];
            for(let i = 0; i < nodeCount; i++){
                nodeArray.push({
                    position: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]((Math.random() - 0.5) * 25, (Math.random() - 0.5) * 25, (Math.random() - 0.5) * 10),
                    velocity: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]((Math.random() - 0.5) * 0.008, (Math.random() - 0.5) * 0.008, 0)
                });
            }
            return nodeArray;
        }
    }["NeuralNetwork.useMemo[nodes]"], [
        nodeCount
    ]);
    // Create positions array for Points
    const positions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "NeuralNetwork.useMemo[positions]": ()=>{
            const pos = new Float32Array(nodes.length * 3);
            nodes.forEach({
                "NeuralNetwork.useMemo[positions]": (node, i)=>{
                    pos[i * 3] = node.position.x;
                    pos[i * 3 + 1] = node.position.y;
                    pos[i * 3 + 2] = node.position.z;
                }
            }["NeuralNetwork.useMemo[positions]"]);
            return pos;
        }
    }["NeuralNetwork.useMemo[positions]"], [
        nodes
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NeuralNetwork.useEffect": ()=>{
            // Disable mouse tracking on mobile
            if (isMobile) return;
            const handleMouseMove = {
                "NeuralNetwork.useEffect.handleMouseMove": (e)=>{
                    setMousePos({
                        x: e.clientX / window.innerWidth * 2 - 1,
                        y: -(e.clientY / window.innerHeight) * 2 + 1
                    });
                }
            }["NeuralNetwork.useEffect.handleMouseMove"];
            window.addEventListener("mousemove", handleMouseMove);
            return ({
                "NeuralNetwork.useEffect": ()=>window.removeEventListener("mousemove", handleMouseMove)
            })["NeuralNetwork.useEffect"];
        }
    }["NeuralNetwork.useEffect"], [
        isMobile
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "NeuralNetwork.useFrame": (state)=>{
            // Animate nodes
            nodes.forEach({
                "NeuralNetwork.useFrame": (node)=>{
                    node.position.add(node.velocity);
                    // Boundary check
                    if (Math.abs(node.position.x) > 10) node.velocity.x *= -1;
                    if (Math.abs(node.position.y) > 10) node.velocity.y *= -1;
                }
            }["NeuralNetwork.useFrame"]);
            // Update node positions with NaN check
            if (nodesRef.current && nodesRef.current.geometry.attributes.position) {
                const positions = nodesRef.current.geometry.attributes.position.array;
                nodes.forEach({
                    "NeuralNetwork.useFrame": (node, i)=>{
                        // Ensure no NaN values
                        const x = isNaN(node.position.x) ? 0 : node.position.x;
                        const y = isNaN(node.position.y) ? 0 : node.position.y;
                        const z = isNaN(node.position.z) ? 0 : node.position.z;
                        positions[i * 3] = x;
                        positions[i * 3 + 1] = y;
                        positions[i * 3 + 2] = z;
                    }
                }["NeuralNetwork.useFrame"]);
                nodesRef.current.geometry.attributes.position.needsUpdate = true;
            }
            // Update connections based on proximity and mouse
            if (linesRef.current) {
                const linePositions = [];
                const lineColors = [];
                const maxDistance = 3.5;
                const mouseInfluence = isMobile ? 0 : 5; // Disable mouse on mobile
                const mousePos3D = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](mousePos.x * 10, mousePos.y * 10, 0);
                for(let i = 0; i < nodes.length; i++){
                    for(let j = i + 1; j < nodes.length; j++){
                        const distance = nodes[i].position.distanceTo(nodes[j].position);
                        // Check distance to mouse
                        const distToMouse = Math.min(nodes[i].position.distanceTo(mousePos3D), nodes[j].position.distanceTo(mousePos3D));
                        if (distance < maxDistance || distToMouse < mouseInfluence) {
                            linePositions.push(nodes[i].position.x, nodes[i].position.y, nodes[i].position.z, nodes[j].position.x, nodes[j].position.y, nodes[j].position.z);
                            // Color based on distance to mouse - professional cyan/blue only
                            const intensity = distToMouse < mouseInfluence ? 1 - distToMouse / mouseInfluence : 0.2;
                            // Consistent cyan-blue tones for professional look
                            const r = 0.0;
                            const g = 0.7 * intensity;
                            const b = 1.0 * intensity;
                            lineColors.push(r, g, b, r, g, b);
                        }
                    }
                }
                // Only update if we have valid line positions
                if (linePositions.length > 0) {
                    const geometry = linesRef.current.geometry;
                    geometry.setAttribute('position', new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Float32BufferAttribute"](linePositions, 3));
                    geometry.setAttribute('color', new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Float32BufferAttribute"](lineColors, 3));
                    geometry.attributes.position.needsUpdate = true;
                    geometry.attributes.color.needsUpdate = true;
                }
            }
        }
    }["NeuralNetwork.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Points$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Points"], {
                ref: nodesRef,
                positions: positions,
                stride: 3,
                frustumCulled: false,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$PointMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointMaterial"], {
                    transparent: true,
                    color: "#00d4ff",
                    size: 0.08,
                    sizeAttenuation: true,
                    depthWrite: false,
                    opacity: 0.3
                }, void 0, false, {
                    fileName: "[project]/components/NeuralBackground.tsx",
                    lineNumber: 175,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/NeuralBackground.tsx",
                lineNumber: 174,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("lineSegments", {
                ref: linesRef,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferGeometry", {}, void 0, false, {
                        fileName: "[project]/components/NeuralBackground.tsx",
                        lineNumber: 187,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("lineBasicMaterial", {
                        vertexColors: true,
                        transparent: true,
                        opacity: 0.15,
                        blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdditiveBlending"]
                    }, void 0, false, {
                        fileName: "[project]/components/NeuralBackground.tsx",
                        lineNumber: 188,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/NeuralBackground.tsx",
                lineNumber: 186,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/NeuralBackground.tsx",
        lineNumber: 172,
        columnNumber: 9
    }, this);
}
_s1(NeuralNetwork, "fKfmwFTBfobk7kPA/0ffswkCt48=", false, function() {
    return [
        useIsMobile,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = NeuralNetwork;
function FloatingParticles() {
    _s2();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isMobile = useIsMobile();
    // Reduce particles on mobile
    const particleCount = isMobile ? 50 : 100;
    const particles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FloatingParticles.useMemo[particles]": ()=>{
            const pos = new Float32Array(particleCount * 3);
            for(let i = 0; i < particleCount; i++){
                pos[i * 3] = (Math.random() - 0.5) * 25;
                pos[i * 3 + 1] = (Math.random() - 0.5) * 25;
                pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
            }
            return pos;
        }
    }["FloatingParticles.useMemo[particles]"], [
        particleCount
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "FloatingParticles.useFrame": (state, delta)=>{
            if (ref.current) {
                const speed = isMobile ? 0.02 : 0.03;
                ref.current.rotation.y += delta * speed;
                ref.current.rotation.x += delta * (speed / 3);
            }
        }
    }["FloatingParticles.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Points$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Points"], {
        ref: ref,
        positions: particles,
        stride: 3,
        frustumCulled: false,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$PointMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointMaterial"], {
            transparent: true,
            color: "#60a5fa",
            size: 0.03,
            sizeAttenuation: true,
            depthWrite: false,
            opacity: 0.3
        }, void 0, false, {
            fileName: "[project]/components/NeuralBackground.tsx",
            lineNumber: 226,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/NeuralBackground.tsx",
        lineNumber: 225,
        columnNumber: 9
    }, this);
}
_s2(FloatingParticles, "wn78hOFaFrTQ4TKV3N1PW/FJd9A=", false, function() {
    return [
        useIsMobile,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c1 = FloatingParticles;
function NeuralBackground() {
    _s3();
    const isMobile = useIsMobile();
    const [scrollY, setScrollY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NeuralBackground.useEffect": ()=>{
            // Only on mobile, add slight parallax effect
            if (!isMobile) return;
            const handleScroll = {
                "NeuralBackground.useEffect.handleScroll": ()=>{
                    setScrollY(window.scrollY);
                }
            }["NeuralBackground.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll, {
                passive: true
            });
            return ({
                "NeuralBackground.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["NeuralBackground.useEffect"];
        }
    }["NeuralBackground.useEffect"], [
        isMobile
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-0 pointer-events-none",
        style: isMobile ? {
            transform: `translateY(${scrollY * 0.3}px)`
        } : undefined,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
            camera: {
                position: [
                    0,
                    0,
                    12
                ],
                fov: 60
            },
            gl: {
                alpha: true,
                antialias: !isMobile
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NeuralNetwork, {}, void 0, false, {
                    fileName: "[project]/components/NeuralBackground.tsx",
                    lineNumber: 263,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FloatingParticles, {}, void 0, false, {
                    fileName: "[project]/components/NeuralBackground.tsx",
                    lineNumber: 264,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/NeuralBackground.tsx",
            lineNumber: 259,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/NeuralBackground.tsx",
        lineNumber: 255,
        columnNumber: 9
    }, this);
}
_s3(NeuralBackground, "Ld67f4sjCCgen134yQk0HNAx3Dw=", false, function() {
    return [
        useIsMobile
    ];
});
_c2 = NeuralBackground;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "NeuralNetwork");
__turbopack_context__.k.register(_c1, "FloatingParticles");
__turbopack_context__.k.register(_c2, "NeuralBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/teamData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAllProjects",
    ()=>getAllProjects,
    "getAllTeamMembers",
    ()=>getAllTeamMembers,
    "getTeamMemberBySlug",
    ()=>getTeamMemberBySlug,
    "teamGroups",
    ()=>teamGroups
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-client] (ecmascript) <export default as Code2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
;
const teamGroups = [
    {
        title: "Leadership",
        description: "Guiding the vision and strategy of Orvox AI.",
        members: [
            {
                name: "Atizaz Abid",
                role: "CEO & Founder",
                slug: "atizaz-abid",
                image: "/team/ceo.png",
                skills: [
                    "Visionary Leadership",
                    "AI Strategy",
                    "Product Innovation",
                    "Business Development"
                ],
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"],
                color: "text-amber-400",
                bio: "Leading Orvox AI with a vision to revolutionize the digital landscape through artificial intelligence. With extensive experience in tech leadership and strategic planning, Atizaz drives innovation and growth across all company initiatives.",
                projects: [
                    {
                        title: "Orvox AI Platform",
                        category: "AI Strategy",
                        description: "Leading the development of Orvox AI's flagship platform, revolutionizing how businesses leverage artificial intelligence.",
                        status: "featured",
                        technologies: [
                            "AI Strategy",
                            "Product Design",
                            "Business Intelligence"
                        ],
                        year: "2024"
                    },
                    {
                        title: "Global Expansion Initiative",
                        category: "Business Growth",
                        description: "Spearheading Orvox AI's expansion into international markets with strategic partnerships.",
                        status: "ongoing",
                        technologies: [
                            "Market Analysis",
                            "Partnership Development"
                        ],
                        year: "2025"
                    }
                ]
            }
        ]
    },
    {
        title: "Development",
        description: "The engineers building the core of our technology.",
        members: [
            {
                name: "Muhammad Musaddaq Abbas",
                role: "Senior Software Engineer",
                slug: "musaddaq-abbas",
                image: "/team/musaddaq.jpeg",
                skills: [
                    "Python",
                    "Django",
                    "Django Rest Framework",
                    "Github",
                    "GitLab",
                    "Bitbucket",
                    "Node.js",
                    "AWS",
                    "SaaS"
                ],
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"],
                color: "text-cyan-400",
                bio: "Expert in building scalable web applications and system foundations. With years of experience in full-stack development, Musaddaq specializes in creating robust backend systems and cloud infrastructure.",
                projects: [
                    {
                        title: "Campaign Automation",
                        category: "SaaS Platform",
                        description: "Developed a comprehensive campaign automation platform enabling businesses to manage multi-channel marketing campaigns efficiently.",
                        status: "featured",
                        technologies: [
                            "Django",
                            "Python",
                            "AWS",
                            "PostgreSQL"
                        ],
                        year: "2024"
                    },
                    {
                        title: "Pronto Mobile",
                        category: "Mobile Backend",
                        description: "Built scalable backend infrastructure for a real-time mobile communication platform.",
                        status: "completed",
                        technologies: [
                            "Node.js",
                            "MongoDB",
                            "WebSocket"
                        ],
                        year: "2023"
                    },
                    {
                        title: "Solivox",
                        category: "Voice Technology",
                        description: "Developed voice-powered communication solutions with advanced NLP capabilities.",
                        status: "ongoing",
                        technologies: [
                            "Python",
                            "Django Rest Framework",
                            "AWS Lambda"
                        ],
                        year: "2025"
                    }
                ]
            },
            {
                name: "Abdullah Aftab",
                role: "Senior AI Engineer",
                slug: "abdullah-aftab",
                image: "/team/Abdullah.JPG",
                skills: [
                    "Python",
                    "JavaScript",
                    "TensorFlow",
                    "PyTorch",
                    "Scikit-learn",
                    "spaCy",
                    "n8n",
                    "SQL",
                    "MongoDB",
                    "PostgreSQL",
                    "AWS",
                    "Docker",
                    "Digital Ocean",
                    "BeautifulSoup",
                    "Scrapy",
                    "Selenium"
                ],
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"],
                color: "text-cyan-400",
                bio: "A dedicated and results-driven AI Engineer with over 1.5 years of hands-on experience in developing cutting-edge AI agents, implementing Retrieval-Augmented Generation (RAG) techniques, and optimizing intelligent workflows using tools like n8n. My expertise spans across AI model development, training, and deploying automation systems, as well as web scraping for data extraction and analysis. I am passionate about pushing the boundaries of AI and automation, continually improving model performance, and creating scalable solutions to solve complex challenges.",
                projects: [
                    {
                        title: "Campaign Automation AI",
                        category: "AI Automation",
                        description: "Implemented intelligent automation systems using RAG techniques and AI agents for campaign optimization.",
                        status: "featured",
                        technologies: [
                            "Python",
                            "TensorFlow",
                            "n8n",
                            "MongoDB"
                        ],
                        year: "2024"
                    },
                    {
                        title: "Pronto Mobile Intelligence",
                        category: "Machine Learning",
                        description: "Developed ML models for user behavior prediction and personalized content delivery.",
                        status: "completed",
                        technologies: [
                            "PyTorch",
                            "Scikit-learn",
                            "AWS"
                        ],
                        year: "2023"
                    },
                    {
                        title: "Solivox NLP Engine",
                        category: "Natural Language Processing",
                        description: "Building advanced NLP capabilities using spaCy and custom models for voice processing.",
                        status: "ongoing",
                        technologies: [
                            "spaCy",
                            "Python",
                            "Docker"
                        ],
                        year: "2025"
                    },
                    {
                        title: "Web Intelligence Scraper",
                        category: "Data Engineering",
                        description: "Created robust web scraping systems for large-scale data extraction and analysis.",
                        status: "featured",
                        technologies: [
                            "Scrapy",
                            "BeautifulSoup",
                            "Selenium",
                            "PostgreSQL"
                        ],
                        year: "2024"
                    }
                ]
            },
            {
                name: "Zaryab Anwar",
                role: "Senior Full Stack Engineer",
                slug: "zaryab-anwar",
                image: "/team/Zaryab.jpeg",
                skills: [
                    "React.js",
                    "Next.js",
                    "Django",
                    "Node.js",
                    "NestJS",
                    "Flask",
                    "FastAPI",
                    "AI/ML/DL",
                    "RAG/AGENTS",
                    "MICROSERVICES",
                    "Express.js",
                    "Kafka",
                    "Redis",
                    "RabbitMQ",
                    "Kubernetes"
                ],
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"],
                color: "text-cyan-400",
                bio: "A Senior Full-Stack Engineer and AI Systems Architect with over 5 years of professional experience building highly scalable, distributed, and intelligent applications. I specialize in combining modern full-stack development with advanced AI/ML/DL, RAG pipelines, and Agentic AI systems to deliver end-to-end solutions that are fast, reliable, and production-ready. My expertise spans frontend engineering with React and Next.js, backend development with Node.js, NestJS, and microservice-driven architectures, and event-driven pipelines powered by Kafka, Redis, RabbitMQ, and Celery.",
                projects: [
                    {
                        title: "Client Dashboard V2",
                        category: "Full Stack",
                        description: "Architected and developed a comprehensive client dashboard with real-time analytics, microservices architecture, and AI-powered insights.",
                        status: "featured",
                        technologies: [
                            "Next.js",
                            "NestJS",
                            "Kubernetes",
                            "Redis",
                            "PostgreSQL"
                        ],
                        year: "2024"
                    },
                    {
                        title: "AI Agent Platform",
                        category: "AI Systems",
                        description: "Building multi-agent automation systems with RAG pipelines and LLM integration.",
                        status: "ongoing",
                        technologies: [
                            "FastAPI",
                            "LangChain",
                            "Vector DB",
                            "Kafka"
                        ],
                        year: "2025"
                    },
                    {
                        title: "Microservices Infrastructure",
                        category: "DevOps",
                        description: "Designed cloud-native microservices architecture with event-driven patterns and automated deployment.",
                        status: "featured",
                        technologies: [
                            "Docker",
                            "Kubernetes",
                            "AWS",
                            "RabbitMQ"
                        ],
                        year: "2024"
                    }
                ]
            },
            {
                name: "Sufyan",
                role: "Senior Full Stack Engineer",
                slug: "sufyan",
                image: "/team/Sufiyan.png",
                skills: [
                    "React.js",
                    "Next.js",
                    "Django",
                    "Node.js",
                    "NestJS",
                    "Flask",
                    "FastAPI",
                    "AI/ML/DL",
                    "RAG/AGENTS",
                    "MICROSERVICES",
                    "Express.js"
                ],
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"],
                color: "text-cyan-400",
                bio: "A Senior Full-Stack Engineer and AI Systems Architect with over 5 years of professional experience building highly scalable, distributed, and intelligent applications. I specialize in combining modern full-stack development with advanced AI/ML/DL, RAG pipelines, and Agentic AI systems to deliver end-to-end solutions that are fast, reliable, and production-ready.",
                projects: [
                    {
                        title: "Enterprise SaaS Platform",
                        category: "Full Stack",
                        description: "Developed enterprise-grade SaaS solution with advanced authentication, billing, and multi-tenancy.",
                        status: "featured",
                        technologies: [
                            "Next.js",
                            "NestJS",
                            "PostgreSQL",
                            "Redis"
                        ],
                        year: "2024"
                    },
                    {
                        title: "AI-Powered Analytics",
                        category: "AI/ML",
                        description: "Built intelligent analytics platform with machine learning insights and predictive modeling.",
                        status: "ongoing",
                        technologies: [
                            "Python",
                            "FastAPI",
                            "TensorFlow",
                            "React"
                        ],
                        year: "2025"
                    }
                ]
            },
            {
                name: "Haroon Sajid",
                role: "AI Engineer",
                slug: "haroon-sajid",
                image: "/team/Haroon.jpg",
                skills: [
                    "Python",
                    "Django",
                    "FastAPI",
                    "React",
                    "AI/ML",
                    "RAG Agent",
                    "n8n automations",
                    "Node.js",
                    "MICROSERVICES",
                    "Express.js",
                    "PostgreSQL",
                    "MongoDB",
                    "LangChain"
                ],
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"],
                color: "text-cyan-400",
                bio: "AI graduate with one year of experience in Python, machine learning, and backend development. Skilled in FastAPI, Django, React, and modern AI tools like LangChain and LangGraph. Specializes in backend systems, automation workflows, and building complete AI pipelines.",
                projects: [
                    {
                        title: "Scalable Infrastructure",
                        category: "Backend",
                        description: "Designed and implemented scalable backend infrastructure with microservices architecture.",
                        status: "featured",
                        technologies: [
                            "FastAPI",
                            "PostgreSQL",
                            "Docker",
                            "Redis"
                        ],
                        year: "2024"
                    },
                    {
                        title: "AI Workflow Automation",
                        category: "AI/Automation",
                        description: "Created automated AI workflows using LangChain and n8n for business process optimization.",
                        status: "ongoing",
                        technologies: [
                            "LangChain",
                            "n8n",
                            "Python",
                            "MongoDB"
                        ],
                        year: "2025"
                    },
                    {
                        title: "RAG Agent System",
                        category: "AI",
                        description: "Developed Retrieval-Augmented Generation system for intelligent document processing.",
                        status: "ongoing",
                        technologies: [
                            "LangGraph",
                            "FastAPI",
                            "Vector DB"
                        ],
                        year: "2025"
                    }
                ]
            },
            {
                name: "Muhammad Hamza Sajid",
                role: "Software Engineer",
                slug: "hamza-sajid",
                image: "/team/Hamza.jpeg",
                skills: [
                    "Python",
                    "JavaScript",
                    "Node.js",
                    "NestJS",
                    "Django",
                    "Angular",
                    "React",
                    "Pandas",
                    "NumPy",
                    "MongoDB",
                    "PostgreSQL",
                    "AWS",
                    "Docker",
                    "Git",
                    "BeautifulSoup",
                    "Scrapy",
                    "Selenium"
                ],
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"],
                color: "text-cyan-400",
                bio: "A software engineer with experience in Python, JavaScript, and modern web frameworks. Specialized in building scalable, secure, and efficient software solutions with a focus on data processing and automation.",
                projects: [
                    {
                        title: "HomeEnergy",
                        category: "IoT Platform",
                        description: "Developed energy monitoring and management platform for smart homes with real-time analytics.",
                        status: "featured",
                        technologies: [
                            "NestJS",
                            "Angular",
                            "MongoDB",
                            "AWS IoT"
                        ],
                        year: "2024"
                    },
                    {
                        title: "IoT Data Migrations",
                        category: "Data Engineering",
                        description: "Implemented large-scale data migration system for IoT devices with zero downtime.",
                        status: "completed",
                        technologies: [
                            "Python",
                            "Pandas",
                            "PostgreSQL",
                            "Docker"
                        ],
                        year: "2023"
                    },
                    {
                        title: "Bailey Time Series",
                        category: "Data Analytics",
                        description: "Built time series analysis platform for financial data with predictive capabilities.",
                        status: "ongoing",
                        technologies: [
                            "Python",
                            "NumPy",
                            "React",
                            "MongoDB"
                        ],
                        year: "2025"
                    }
                ]
            }
        ]
    },
    {
        title: "Business & Growth",
        description: "Driving partnerships and market expansion.",
        members: [
            {
                name: "Muhammad Sajid",
                role: "Business Development Executive",
                slug: "muhammad-sajid",
                image: "/team/Sajid.png",
                skills: [
                    "Growth Strategy",
                    "Client Acquisition",
                    "Software Quality Assurance",
                    "CRM Management"
                ],
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"],
                color: "text-emerald-400",
                bio: "Business Development Executive at OrvoxAI, focusing on identifying growth opportunities, managing client acquisition through digital platforms, and fostering long-term partnerships. With a strong foundation in Software Quality Assurance, I bring a unique perspective to understanding client needs and delivering tailored solutions.",
                projects: [
                    {
                        title: "Global Client Acquisition",
                        category: "Business Development",
                        description: "Leading client acquisition initiatives across multiple digital platforms, securing partnerships with enterprise clients.",
                        status: "featured",
                        technologies: [
                            "CRM",
                            "Sales Strategy",
                            "Client Relations"
                        ],
                        year: "2024"
                    },
                    {
                        title: "Partnership Development Program",
                        category: "Strategic Partnerships",
                        description: "Developing strategic partnerships with technology companies to expand service offerings.",
                        status: "ongoing",
                        technologies: [
                            "Business Strategy",
                            "Networking"
                        ],
                        year: "2025"
                    }
                ]
            },
            {
                name: "Fiza Sardar",
                role: "Senior Sales Executive",
                slug: "fiza-sardar",
                image: "/team/Fiza.jpeg",
                skills: [
                    "Business Development",
                    "Lead Generation",
                    "Strategic Planning",
                    "LinkedIn Optimization",
                    "B2B Sales",
                    "Upwork",
                    "Client Relationship Management",
                    "Team Management"
                ],
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"],
                color: "text-emerald-400",
                bio: "Business Developer Lead with extensive experience in lead generation, strategic planning, and B2B sales. With over 6.7k followers on LinkedIn and expertise in profile optimization, I specialize in expanding market presence and managing key client relationships.",
                projects: [
                    {
                        title: "North America Market Expansion",
                        category: "Market Growth",
                        description: "Leading market expansion initiatives in North America, establishing key partnerships and client relationships.",
                        status: "featured",
                        technologies: [
                            "B2B Sales",
                            "Market Analysis",
                            "LinkedIn"
                        ],
                        year: "2024"
                    },
                    {
                        title: "Upwork Growth Strategy",
                        category: "Digital Sales",
                        description: "Developing and executing growth strategies on Upwork platform to increase client acquisition.",
                        status: "ongoing",
                        technologies: [
                            "Upwork",
                            "Client Relations",
                            "Proposal Writing"
                        ],
                        year: "2025"
                    },
                    {
                        title: "LinkedIn Lead Generation",
                        category: "Digital Marketing",
                        description: "Creating and managing high-impact LinkedIn campaigns for B2B lead generation.",
                        status: "featured",
                        technologies: [
                            "LinkedIn",
                            "Content Strategy",
                            "Lead Generation"
                        ],
                        year: "2024"
                    }
                ]
            },
            {
                name: "Anum",
                role: "Business Analyst",
                slug: "anum",
                image: "/team/anum.jpeg",
                skills: [
                    "Business Development",
                    "Email Marketing",
                    "B2B Sales",
                    "Client Relationship Management",
                    "LinkedIn Expert",
                    "Meeting Coordination",
                    "Team Management"
                ],
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"],
                color: "text-emerald-400",
                bio: "Business Developer with experience in email marketing, B2B sales, and client relationship management. Specialized in LinkedIn expertise, meeting coordination, and managing client relationships to drive business growth.",
                projects: [
                    {
                        title: "Growth Strategy 2026",
                        category: "Strategic Planning",
                        description: "Developing comprehensive growth strategy for 2026 with focus on market expansion and client retention.",
                        status: "ongoing",
                        technologies: [
                            "Business Analysis",
                            "Market Research",
                            "CRM"
                        ],
                        year: "2025"
                    },
                    {
                        title: "Email Marketing Automation",
                        category: "Digital Marketing",
                        description: "Implemented automated email marketing campaigns with high conversion rates.",
                        status: "featured",
                        technologies: [
                            "Email Marketing",
                            "Marketing Automation",
                            "Analytics"
                        ],
                        year: "2024"
                    },
                    {
                        title: "Client Success Program",
                        category: "Client Relations",
                        description: "Established client success program to improve retention and satisfaction rates.",
                        status: "ongoing",
                        technologies: [
                            "Client Management",
                            "Customer Success"
                        ],
                        year: "2025"
                    }
                ]
            }
        ]
    }
];
const getAllProjects = ()=>{
    const allProjects = [];
    const projectMap = new Map();
    teamGroups.forEach((group)=>{
        group.members.forEach((member)=>{
            member.projects.forEach((project)=>{
                const projectKey = `${project.title}-${project.category}`;
                if (!projectMap.has(projectKey)) {
                    projectMap.set(projectKey, {
                        ...project,
                        memberName: member.name,
                        memberRole: member.role,
                        memberSlug: member.slug,
                        allMembers: [
                            {
                                name: member.name,
                                role: member.role,
                                slug: member.slug
                            }
                        ]
                    });
                } else {
                    // Project already exists, add this member to allMembers
                    const existingProject = projectMap.get(projectKey);
                    const memberExists = existingProject.allMembers.some((m)=>m.slug === member.slug);
                    if (!memberExists) {
                        existingProject.allMembers.push({
                            name: member.name,
                            role: member.role,
                            slug: member.slug
                        });
                    }
                }
            });
        });
    });
    return Array.from(projectMap.values());
};
const getTeamMemberBySlug = (slug)=>{
    for (const group of teamGroups){
        const member = group.members.find((m)=>m.slug === slug);
        if (member) return member;
    }
    return undefined;
};
const getAllTeamMembers = ()=>{
    return teamGroups.flatMap((group)=>group.members);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/portfolio/[slug]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TeamMemberPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/twitter.js [app-client] (ecmascript) <export default as Twitter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NeuralBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/NeuralBackground.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$teamData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/teamData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
function TeamMemberPage({ params }) {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { slug } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(params);
    const member = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$teamData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTeamMemberBySlug"])(slug);
    if (!member) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notFound"])();
    }
    const featuredProjects = member.projects.filter((p)=>p.status === "featured");
    const ongoingProjects = member.projects.filter((p)=>p.status === "ongoing");
    const completedProjects = member.projects.filter((p)=>p.status === "completed");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "TeamMemberPage.useGSAP": ()=>{
            // Hero Animation
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".hero-section", {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: "power3.out"
            });
            // About section
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".about-section", {
                scrollTrigger: {
                    trigger: ".about-section",
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                },
                opacity: 0,
                y: 30,
                duration: 0.8,
                ease: "power2.out"
            });
            // Skills animation
            const skills = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.toArray(".skill-tag");
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(skills, {
                scrollTrigger: {
                    trigger: ".skills-section",
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                },
                opacity: 0,
                y: 20,
                stagger: 0.05,
                duration: 0.5,
                ease: "power2.out"
            });
            // Projects animation
            const projectCards = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.toArray(".project-card");
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].batch(projectCards, {
                onEnter: {
                    "TeamMemberPage.useGSAP": (batch)=>{
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(batch, {
                            opacity: 1,
                            y: 0,
                            stagger: 0.15,
                            duration: 0.8,
                            ease: "power2.out"
                        });
                    }
                }["TeamMemberPage.useGSAP"],
                start: "top 85%"
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(projectCards, {
                opacity: 0,
                y: 50
            });
        }
    }["TeamMemberPage.useGSAP"], {
        scope: containerRef
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        ref: containerRef,
        className: "bg-black min-h-screen text-white pt-20 relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NeuralBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/portfolio/[slug]/page.tsx",
                lineNumber: 94,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/portfolio/[slug]/page.tsx",
                lineNumber: 95,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "hero-section relative py-20 overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/portfolio",
                            className: "inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/app/portfolio/[slug]/page.tsx",
                                    lineNumber: 101,
                                    columnNumber: 25
                                }, this),
                                "Back to Team"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/portfolio/[slug]/page.tsx",
                            lineNumber: 100,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative aspect-square max-w-md mx-auto lg:mx-0 rounded-3xl overflow-hidden border-2 border-cyan-500/30",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: member.image,
                                            alt: member.name,
                                            fill: true,
                                            className: "object-cover",
                                            priority: true
                                        }, void 0, false, {
                                            fileName: "[project]/app/portfolio/[slug]/page.tsx",
                                            lineNumber: 108,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"
                                        }, void 0, false, {
                                            fileName: "[project]/app/portfolio/[slug]/page.tsx",
                                            lineNumber: 115,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/portfolio/[slug]/page.tsx",
                                    lineNumber: 107,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-zinc-950 border border-zinc-800 ${member.color}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(member.icon, {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/portfolio/[slug]/page.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-bold uppercase tracking-wider",
                                                    children: member.role
                                                }, void 0, false, {
                                                    fileName: "[project]/app/portfolio/[slug]/page.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/portfolio/[slug]/page.tsx",
                                            lineNumber: 120,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-5xl md:text-7xl font-bold mb-6",
                                            children: member.name
                                        }, void 0, false, {
                                            fileName: "[project]/app/portfolio/[slug]/page.tsx",
                                            lineNumber: 125,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-4 mb-8",
                                            children: [
                                                member.linkedin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: member.linkedin,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "p-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-cyan-500 hover:bg-zinc-800 transition-all",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/portfolio/[slug]/page.tsx",
                                                        lineNumber: 131,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/portfolio/[slug]/page.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 37
                                                }, this),
                                                member.github && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: member.github,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "p-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-cyan-500 hover:bg-zinc-800 transition-all",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/portfolio/[slug]/page.tsx",
                                                        lineNumber: 136,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/portfolio/[slug]/page.tsx",
                                                    lineNumber: 135,
                                                    columnNumber: 37
                                                }, this),
                                                member.twitter && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: member.twitter,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "p-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-cyan-500 hover:bg-zinc-800 transition-all",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/portfolio/[slug]/page.tsx",
                                                        lineNumber: 141,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/portfolio/[slug]/page.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/portfolio/[slug]/page.tsx",
                                            lineNumber: 128,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-cyan-400 font-semibold",
                                                        children: [
                                                            member.projects.length,
                                                            " Projects"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/portfolio/[slug]/page.tsx",
                                                        lineNumber: 148,
                                                        columnNumber: 37
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/portfolio/[slug]/page.tsx",
                                                    lineNumber: 147,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-emerald-400 font-semibold",
                                                        children: [
                                                            member.skills.length,
                                                            "+ Skills"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/portfolio/[slug]/page.tsx",
                                                        lineNumber: 151,
                                                        columnNumber: 37
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/portfolio/[slug]/page.tsx",
                                                    lineNumber: 150,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/portfolio/[slug]/page.tsx",
                                            lineNumber: 146,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/portfolio/[slug]/page.tsx",
                                    lineNumber: 119,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/portfolio/[slug]/page.tsx",
                            lineNumber: 105,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/portfolio/[slug]/page.tsx",
                    lineNumber: 99,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/portfolio/[slug]/page.tsx",
                lineNumber: 98,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "about-section py-20 relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-4xl mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-l-4 border-cyan-500 pl-6 mb-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl font-bold mb-4",
                                    children: "About"
                                }, void 0, false, {
                                    fileName: "[project]/app/portfolio/[slug]/page.tsx",
                                    lineNumber: 164,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/portfolio/[slug]/page.tsx",
                                lineNumber: 163,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl text-gray-300 leading-relaxed",
                                children: member.bio
                            }, void 0, false, {
                                fileName: "[project]/app/portfolio/[slug]/page.tsx",
                                lineNumber: 166,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/portfolio/[slug]/page.tsx",
                        lineNumber: 162,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/portfolio/[slug]/page.tsx",
                    lineNumber: 161,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/portfolio/[slug]/page.tsx",
                lineNumber: 160,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "skills-section py-20 relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-4xl mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-l-4 border-cyan-500 pl-6 mb-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl font-bold mb-4",
                                    children: "Expertise & Skills"
                                }, void 0, false, {
                                    fileName: "[project]/app/portfolio/[slug]/page.tsx",
                                    lineNumber: 176,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/portfolio/[slug]/page.tsx",
                                lineNumber: 175,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-3",
                                children: member.skills.map((skill, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "skill-tag px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-cyan-500 transition-colors text-gray-300 font-medium",
                                        children: skill
                                    }, index, false, {
                                        fileName: "[project]/app/portfolio/[slug]/page.tsx",
                                        lineNumber: 180,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/portfolio/[slug]/page.tsx",
                                lineNumber: 178,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/portfolio/[slug]/page.tsx",
                        lineNumber: 174,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/portfolio/[slug]/page.tsx",
                    lineNumber: 173,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/portfolio/[slug]/page.tsx",
                lineNumber: 172,
                columnNumber: 13
            }, this),
            featuredProjects.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-20 relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-l-4 border-amber-500 pl-6 mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl font-bold mb-2",
                                    children: "Featured Projects"
                                }, void 0, false, {
                                    fileName: "[project]/app/portfolio/[slug]/page.tsx",
                                    lineNumber: 197,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-400",
                                    children: "Showcasing the most impactful work"
                                }, void 0, false, {
                                    fileName: "[project]/app/portfolio/[slug]/page.tsx",
                                    lineNumber: 198,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/portfolio/[slug]/page.tsx",
                            lineNumber: 196,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                            children: featuredProjects.map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "project-card group relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start justify-between mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider",
                                                        children: "Featured"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/portfolio/[slug]/page.tsx",
                                                        lineNumber: 209,
                                                        columnNumber: 45
                                                    }, this),
                                                    project.year && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-500 text-sm",
                                                        children: project.year
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/portfolio/[slug]/page.tsx",
                                                        lineNumber: 213,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/portfolio/[slug]/page.tsx",
                                                lineNumber: 208,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors",
                                                children: project.title
                                            }, void 0, false, {
                                                fileName: "[project]/app/portfolio/[slug]/page.tsx",
                                                lineNumber: 217,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-cyan-400 text-sm font-medium mb-4",
                                                children: project.category
                                            }, void 0, false, {
                                                fileName: "[project]/app/portfolio/[slug]/page.tsx",
                                                lineNumber: 221,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-400 mb-6 line-clamp-3",
                                                children: project.description
                                            }, void 0, false, {
                                                fileName: "[project]/app/portfolio/[slug]/page.tsx",
                                                lineNumber: 223,
                                                columnNumber: 41
                                            }, this),
                                            project.technologies && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-2",
                                                children: project.technologies.map((tech, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-2 py-1 rounded-lg bg-zinc-950 border border-zinc-800 text-gray-400 text-xs",
                                                        children: tech
                                                    }, i, false, {
                                                        fileName: "[project]/app/portfolio/[slug]/page.tsx",
                                                        lineNumber: 228,
                                                        columnNumber: 53
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/portfolio/[slug]/page.tsx",
                                                lineNumber: 226,
                                                columnNumber: 45
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/portfolio/[slug]/page.tsx",
                                        lineNumber: 207,
                                        columnNumber: 37
                                    }, this)
                                }, index, false, {
                                    fileName: "[project]/app/portfolio/[slug]/page.tsx",
                                    lineNumber: 203,
                                    columnNumber: 33
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/portfolio/[slug]/page.tsx",
                            lineNumber: 201,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/portfolio/[slug]/page.tsx",
                    lineNumber: 195,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/portfolio/[slug]/page.tsx",
                lineNumber: 194,
                columnNumber: 17
            }, this),
            ongoingProjects.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-20 relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-l-4 border-emerald-500 pl-6 mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl font-bold mb-2",
                                    children: "Ongoing Projects"
                                }, void 0, false, {
                                    fileName: "[project]/app/portfolio/[slug]/page.tsx",
                                    lineNumber: 247,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-400",
                                    children: "Currently working on these initiatives"
                                }, void 0, false, {
                                    fileName: "[project]/app/portfolio/[slug]/page.tsx",
                                    lineNumber: 248,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/portfolio/[slug]/page.tsx",
                            lineNumber: 246,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                            children: ongoingProjects.map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "project-card group relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-3xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start justify-between mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-2 h-2 rounded-full bg-emerald-500 animate-pulse"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/portfolio/[slug]/page.tsx",
                                                                lineNumber: 260,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider",
                                                                children: "Ongoing"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/portfolio/[slug]/page.tsx",
                                                                lineNumber: 261,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/portfolio/[slug]/page.tsx",
                                                        lineNumber: 259,
                                                        columnNumber: 45
                                                    }, this),
                                                    project.year && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-500 text-sm",
                                                        children: project.year
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/portfolio/[slug]/page.tsx",
                                                        lineNumber: 266,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/portfolio/[slug]/page.tsx",
                                                lineNumber: 258,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-bold mb-2 group-hover:text-emerald-400 transition-colors",
                                                children: project.title
                                            }, void 0, false, {
                                                fileName: "[project]/app/portfolio/[slug]/page.tsx",
                                                lineNumber: 270,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-emerald-400 text-sm font-medium mb-4",
                                                children: project.category
                                            }, void 0, false, {
                                                fileName: "[project]/app/portfolio/[slug]/page.tsx",
                                                lineNumber: 274,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-400 mb-6 line-clamp-3",
                                                children: project.description
                                            }, void 0, false, {
                                                fileName: "[project]/app/portfolio/[slug]/page.tsx",
                                                lineNumber: 276,
                                                columnNumber: 41
                                            }, this),
                                            project.technologies && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-2",
                                                children: project.technologies.map((tech, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-2 py-1 rounded-lg bg-zinc-950 border border-zinc-800 text-gray-400 text-xs",
                                                        children: tech
                                                    }, i, false, {
                                                        fileName: "[project]/app/portfolio/[slug]/page.tsx",
                                                        lineNumber: 281,
                                                        columnNumber: 53
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/portfolio/[slug]/page.tsx",
                                                lineNumber: 279,
                                                columnNumber: 45
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/portfolio/[slug]/page.tsx",
                                        lineNumber: 257,
                                        columnNumber: 37
                                    }, this)
                                }, index, false, {
                                    fileName: "[project]/app/portfolio/[slug]/page.tsx",
                                    lineNumber: 253,
                                    columnNumber: 33
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/portfolio/[slug]/page.tsx",
                            lineNumber: 251,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/portfolio/[slug]/page.tsx",
                    lineNumber: 245,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/portfolio/[slug]/page.tsx",
                lineNumber: 244,
                columnNumber: 17
            }, this),
            completedProjects.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-20 relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-l-4 border-zinc-500 pl-6 mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl font-bold mb-2",
                                    children: "Completed Projects"
                                }, void 0, false, {
                                    fileName: "[project]/app/portfolio/[slug]/page.tsx",
                                    lineNumber: 300,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-400",
                                    children: "Successfully delivered"
                                }, void 0, false, {
                                    fileName: "[project]/app/portfolio/[slug]/page.tsx",
                                    lineNumber: 301,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/portfolio/[slug]/page.tsx",
                            lineNumber: 299,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                            children: completedProjects.map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "project-card group relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-600 transition-all duration-300",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start justify-between mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-2 py-1 rounded-full bg-zinc-800 text-gray-400 text-xs font-bold",
                                                        children: "Completed"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/portfolio/[slug]/page.tsx",
                                                        lineNumber: 312,
                                                        columnNumber: 45
                                                    }, this),
                                                    project.year && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-500 text-xs",
                                                        children: project.year
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/portfolio/[slug]/page.tsx",
                                                        lineNumber: 316,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/portfolio/[slug]/page.tsx",
                                                lineNumber: 311,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl font-bold mb-2",
                                                children: project.title
                                            }, void 0, false, {
                                                fileName: "[project]/app/portfolio/[slug]/page.tsx",
                                                lineNumber: 320,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-500 text-sm mb-3",
                                                children: project.category
                                            }, void 0, false, {
                                                fileName: "[project]/app/portfolio/[slug]/page.tsx",
                                                lineNumber: 321,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-400 text-sm line-clamp-2",
                                                children: project.description
                                            }, void 0, false, {
                                                fileName: "[project]/app/portfolio/[slug]/page.tsx",
                                                lineNumber: 322,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/portfolio/[slug]/page.tsx",
                                        lineNumber: 310,
                                        columnNumber: 37
                                    }, this)
                                }, index, false, {
                                    fileName: "[project]/app/portfolio/[slug]/page.tsx",
                                    lineNumber: 306,
                                    columnNumber: 33
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/portfolio/[slug]/page.tsx",
                            lineNumber: 304,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/portfolio/[slug]/page.tsx",
                    lineNumber: 298,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/portfolio/[slug]/page.tsx",
                lineNumber: 297,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-20 relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-4xl mx-auto text-center bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 border border-cyan-500/30 rounded-3xl p-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl md:text-4xl font-bold mb-4",
                                children: "Interested in Working Together?"
                            }, void 0, false, {
                                fileName: "[project]/app/portfolio/[slug]/page.tsx",
                                lineNumber: 335,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-400 mb-8",
                                children: "Let's discuss how we can help bring your ideas to life."
                            }, void 0, false, {
                                fileName: "[project]/app/portfolio/[slug]/page.tsx",
                                lineNumber: 336,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/contact-us",
                                className: "inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-black font-bold rounded-full transition-colors",
                                children: [
                                    "Get in Touch",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/app/portfolio/[slug]/page.tsx",
                                        lineNumber: 339,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/portfolio/[slug]/page.tsx",
                                lineNumber: 337,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/portfolio/[slug]/page.tsx",
                        lineNumber: 334,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/portfolio/[slug]/page.tsx",
                    lineNumber: 333,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/portfolio/[slug]/page.tsx",
                lineNumber: 332,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/portfolio/[slug]/page.tsx",
                lineNumber: 345,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/portfolio/[slug]/page.tsx",
        lineNumber: 93,
        columnNumber: 9
    }, this);
}
_s(TeamMemberPage, "R5+5KjrXQ5+JB5wCKyyreNNaUX8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c = TeamMemberPage;
var _c;
__turbopack_context__.k.register(_c, "TeamMemberPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_24b13fa5._.js.map
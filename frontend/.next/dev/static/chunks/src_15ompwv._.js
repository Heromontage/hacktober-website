(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/leaderboard/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Leaderboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GradientWaves$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/GradientWaves.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Leaderboard() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(41);
    if ($[0] !== "fffce7ff4e289fb3301da44a5b6514127ed2641052cd6573c2c082b85c39e9c7") {
        for(let $i = 0; $i < 41; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "fffce7ff4e289fb3301da44a5b6514127ed2641052cd6573c2c082b85c39e9c7";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [contributors, setContributors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [myRank, setMyRank] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "Leaderboard[useEffect()]": ()=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLeaderboard"])().then({
                    "Leaderboard[useEffect() > (anonymous)()]": (data)=>setContributors(data.users)
                }["Leaderboard[useEffect() > (anonymous)()]"]).catch({
                    "Leaderboard[useEffect() > (anonymous)()]": (err)=>setError(err.message)
                }["Leaderboard[useEffect() > (anonymous)()]"]).finally({
                    "Leaderboard[useEffect() > (anonymous)()]": ()=>setLoading(false)
                }["Leaderboard[useEffect() > (anonymous)()]"]);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMyRank"])().then(setMyRank).catch({
                    "Leaderboard[useEffect() > (anonymous)()]": ()=>setMyRank(null)
                }["Leaderboard[useEffect() > (anonymous)()]"]);
            }
        })["Leaderboard[useEffect()]"];
        t2 = [];
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "page-waves",
            "aria-hidden": "true",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GradientWaves$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                horizonColor: "#1C3A33",
                waveColor: "#4E846D",
                crestColor: "#AAD8B6",
                speed: 0.3,
                amplitude: 2.5,
                waveScale: 0.6,
                swell: 35,
                turbulence: 20,
                detail: "medium",
                fogDepth: 38,
                brightness: 0.75,
                opacity: 0.65,
                mouseInteraction: true,
                parallaxStrength: 0.25,
                grain: false
            }, void 0, false, {
                fileName: "[project]/src/app/leaderboard/page.tsx",
                lineNumber: 56,
                columnNumber: 57
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/leaderboard/page.tsx",
            lineNumber: 56,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/app/leaderboard/page.tsx",
            lineNumber: 57,
            columnNumber: 10
        }, this);
        $[4] = t3;
        $[5] = t4;
    } else {
        t3 = $[4];
        t4 = $[5];
    }
    let t5;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "leaderboard-decor leaderboard-decor-left",
            children: "✦"
        }, void 0, false, {
            fileName: "[project]/src/app/leaderboard/page.tsx",
            lineNumber: 70,
            columnNumber: 10
        }, this);
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "leaderboard-decor leaderboard-decor-right",
            children: "+"
        }, void 0, false, {
            fileName: "[project]/src/app/leaderboard/page.tsx",
            lineNumber: 71,
            columnNumber: 10
        }, this);
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "leaderboard-tag",
            "data-scroll-reveal": "pop",
            children: "HACKTOBERFEST 26"
        }, void 0, false, {
            fileName: "[project]/src/app/leaderboard/page.tsx",
            lineNumber: 72,
            columnNumber: 10
        }, this);
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "leaderboard-title",
            "data-scroll-reveal": "pop",
            children: "LEADERBOARD"
        }, void 0, false, {
            fileName: "[project]/src/app/leaderboard/page.tsx",
            lineNumber: 73,
            columnNumber: 10
        }, this);
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "leaderboard-subtitle",
            "data-scroll-reveal": "pop",
            children: "WHO'S MAKING THE MOST NOISE?"
        }, void 0, false, {
            fileName: "[project]/src/app/leaderboard/page.tsx",
            lineNumber: 74,
            columnNumber: 10
        }, this);
        $[6] = t5;
        $[7] = t6;
        $[8] = t7;
        $[9] = t8;
        $[10] = t9;
    } else {
        t5 = $[6];
        t6 = $[7];
        t7 = $[8];
        t8 = $[9];
        t9 = $[10];
    }
    let t10;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "leaderboard-lede",
            "data-scroll-reveal": "pop",
            children: [
                "Top contributors powering Hacktoberfest.",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: "[project]/src/app/leaderboard/page.tsx",
                    lineNumber: 89,
                    columnNumber: 108
                }, this),
                "More PRs. A bigger impact."
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/leaderboard/page.tsx",
            lineNumber: 89,
            columnNumber: 11
        }, this);
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    let t11;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            id: "top-contributors",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    "aria-hidden": "true",
                    children: "♛"
                }, void 0, false, {
                    fileName: "[project]/src/app/leaderboard/page.tsx",
                    lineNumber: 96,
                    columnNumber: 37
                }, this),
                "TOP CONTRIBUTORS"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/leaderboard/page.tsx",
            lineNumber: 96,
            columnNumber: 11
        }, this);
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    let t12;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "leaderboard-card-header",
            "data-scroll-reveal": "pop",
            children: [
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "leaderboard-live",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/src/app/leaderboard/page.tsx",
                            lineNumber: 103,
                            columnNumber: 117
                        }, this),
                        "Live stats will appear here"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/leaderboard/page.tsx",
                    lineNumber: 103,
                    columnNumber: 82
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/leaderboard/page.tsx",
            lineNumber: 103,
            columnNumber: 11
        }, this);
        $[13] = t12;
    } else {
        t12 = $[13];
    }
    let t13;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "leaderboard-row leaderboard-header",
            "data-scroll-reveal": "pop",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "#"
                }, void 0, false, {
                    fileName: "[project]/src/app/leaderboard/page.tsx",
                    lineNumber: 110,
                    columnNumber: 88
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "CONTRIBUTOR"
                }, void 0, false, {
                    fileName: "[project]/src/app/leaderboard/page.tsx",
                    lineNumber: 110,
                    columnNumber: 102
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "PRs"
                }, void 0, false, {
                    fileName: "[project]/src/app/leaderboard/page.tsx",
                    lineNumber: 110,
                    columnNumber: 126
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "POINTS"
                }, void 0, false, {
                    fileName: "[project]/src/app/leaderboard/page.tsx",
                    lineNumber: 110,
                    columnNumber: 142
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/leaderboard/page.tsx",
            lineNumber: 110,
            columnNumber: 11
        }, this);
        $[14] = t13;
    } else {
        t13 = $[14];
    }
    let t14;
    if ($[15] !== loading) {
        t14 = loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "leaderboard-row",
            "data-scroll-reveal": "pop",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                    fileName: "[project]/src/app/leaderboard/page.tsx",
                    lineNumber: 117,
                    columnNumber: 80
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Loading..."
                }, void 0, false, {
                    fileName: "[project]/src/app/leaderboard/page.tsx",
                    lineNumber: 117,
                    columnNumber: 88
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                    fileName: "[project]/src/app/leaderboard/page.tsx",
                    lineNumber: 117,
                    columnNumber: 111
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                    fileName: "[project]/src/app/leaderboard/page.tsx",
                    lineNumber: 117,
                    columnNumber: 119
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/leaderboard/page.tsx",
            lineNumber: 117,
            columnNumber: 22
        }, this);
        $[15] = loading;
        $[16] = t14;
    } else {
        t14 = $[16];
    }
    let t15;
    if ($[17] !== error || $[18] !== loading) {
        t15 = error && !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "leaderboard-row",
            "data-scroll-reveal": "pop",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                    fileName: "[project]/src/app/leaderboard/page.tsx",
                    lineNumber: 125,
                    columnNumber: 90
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: error
                }, void 0, false, {
                    fileName: "[project]/src/app/leaderboard/page.tsx",
                    lineNumber: 125,
                    columnNumber: 98
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                    fileName: "[project]/src/app/leaderboard/page.tsx",
                    lineNumber: 125,
                    columnNumber: 118
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                    fileName: "[project]/src/app/leaderboard/page.tsx",
                    lineNumber: 125,
                    columnNumber: 126
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/leaderboard/page.tsx",
            lineNumber: 125,
            columnNumber: 32
        }, this);
        $[17] = error;
        $[18] = loading;
        $[19] = t15;
    } else {
        t15 = $[19];
    }
    let t16;
    if ($[20] !== contributors || $[21] !== error || $[22] !== loading) {
        t16 = !loading && !error && contributors.map(_LeaderboardContributorsMap);
        $[20] = contributors;
        $[21] = error;
        $[22] = loading;
        $[23] = t16;
    } else {
        t16 = $[23];
    }
    let t17;
    if ($[24] !== t14 || $[25] !== t15 || $[26] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "leaderboard-card",
            "aria-labelledby": "top-contributors",
            children: [
                t12,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "leaderboard-table",
                    children: [
                        t13,
                        t14,
                        t15,
                        t16
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/leaderboard/page.tsx",
                    lineNumber: 144,
                    columnNumber: 89
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/leaderboard/page.tsx",
            lineNumber: 144,
            columnNumber: 11
        }, this);
        $[24] = t14;
        $[25] = t15;
        $[26] = t16;
        $[27] = t17;
    } else {
        t17 = $[27];
    }
    let t18;
    if ($[28] !== loading || $[29] !== myRank) {
        t18 = !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "leaderboard-your-rank",
            "aria-labelledby": "your-rank",
            "data-scroll-reveal": "pop",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    id: "your-rank",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            "aria-hidden": "true",
                            children: "♟"
                        }, void 0, false, {
                            fileName: "[project]/src/app/leaderboard/page.tsx",
                            lineNumber: 154,
                            columnNumber: 138
                        }, this),
                        "YOUR RANK"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/leaderboard/page.tsx",
                    lineNumber: 154,
                    columnNumber: 119
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "leaderboard-rank-card",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "leaderboard-big-rank",
                            children: myRank?.rank ? `#${myRank.rank}` : "\u2014"
                        }, void 0, false, {
                            fileName: "[project]/src/app/leaderboard/page.tsx",
                            lineNumber: 154,
                            columnNumber: 224
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "leaderboard-profile",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "leaderboard-avatar leaderboard-avatar-profile",
                                    children: myRank?.username?.charAt(0).toUpperCase() ?? "?"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/leaderboard/page.tsx",
                                    lineNumber: 154,
                                    columnNumber: 350
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: myRank?.username ?? "Not signed in"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/leaderboard/page.tsx",
                                            lineNumber: 154,
                                            columnNumber: 476
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Keep going! You're making a difference."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/leaderboard/page.tsx",
                                            lineNumber: 154,
                                            columnNumber: 530
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/leaderboard/page.tsx",
                                    lineNumber: 154,
                                    columnNumber: 471
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/leaderboard/page.tsx",
                            lineNumber: 154,
                            columnNumber: 313
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "leaderboard-profile-stat",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: myRank?.prCount ?? 0
                                }, void 0, false, {
                                    fileName: "[project]/src/app/leaderboard/page.tsx",
                                    lineNumber: 154,
                                    columnNumber: 630
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "PRs"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/leaderboard/page.tsx",
                                    lineNumber: 154,
                                    columnNumber: 669
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/leaderboard/page.tsx",
                            lineNumber: 154,
                            columnNumber: 588
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "leaderboard-profile-stat",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: myRank?.totalScore ?? 0
                                }, void 0, false, {
                                    fileName: "[project]/src/app/leaderboard/page.tsx",
                                    lineNumber: 154,
                                    columnNumber: 733
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Points"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/leaderboard/page.tsx",
                                    lineNumber: 154,
                                    columnNumber: 775
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/leaderboard/page.tsx",
                            lineNumber: 154,
                            columnNumber: 691
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/leaderboard/page.tsx",
                    lineNumber: 154,
                    columnNumber: 185
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/leaderboard/page.tsx",
            lineNumber: 154,
            columnNumber: 23
        }, this);
        $[28] = loading;
        $[29] = myRank;
        $[30] = t18;
    } else {
        t18 = $[30];
    }
    let t19;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "leaderboard-stair-group",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "leaderboard-stair leaderboard-stair-amber"
                }, void 0, false, {
                    fileName: "[project]/src/app/leaderboard/page.tsx",
                    lineNumber: 163,
                    columnNumber: 52
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "leaderboard-stair leaderboard-stair-salmon"
                }, void 0, false, {
                    fileName: "[project]/src/app/leaderboard/page.tsx",
                    lineNumber: 163,
                    columnNumber: 114
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "leaderboard-stair leaderboard-stair-sky"
                }, void 0, false, {
                    fileName: "[project]/src/app/leaderboard/page.tsx",
                    lineNumber: 163,
                    columnNumber: 177
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "leaderboard-stair leaderboard-stair-cream"
                }, void 0, false, {
                    fileName: "[project]/src/app/leaderboard/page.tsx",
                    lineNumber: 163,
                    columnNumber: 237
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "leaderboard-stair leaderboard-stair-maroon"
                }, void 0, false, {
                    fileName: "[project]/src/app/leaderboard/page.tsx",
                    lineNumber: 163,
                    columnNumber: 299
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/leaderboard/page.tsx",
            lineNumber: 163,
            columnNumber: 11
        }, this);
        $[31] = t19;
    } else {
        t19 = $[31];
    }
    let t20;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "leaderboard-staircase",
            "aria-hidden": "true",
            children: [
                t19,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "leaderboard-stair-group leaderboard-stair-group-right",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "leaderboard-stair leaderboard-stair-maroon"
                        }, void 0, false, {
                            fileName: "[project]/src/app/leaderboard/page.tsx",
                            lineNumber: 170,
                            columnNumber: 145
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "leaderboard-stair leaderboard-stair-cream"
                        }, void 0, false, {
                            fileName: "[project]/src/app/leaderboard/page.tsx",
                            lineNumber: 170,
                            columnNumber: 208
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "leaderboard-stair leaderboard-stair-sky"
                        }, void 0, false, {
                            fileName: "[project]/src/app/leaderboard/page.tsx",
                            lineNumber: 170,
                            columnNumber: 270
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "leaderboard-stair leaderboard-stair-salmon"
                        }, void 0, false, {
                            fileName: "[project]/src/app/leaderboard/page.tsx",
                            lineNumber: 170,
                            columnNumber: 330
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "leaderboard-stair leaderboard-stair-amber"
                        }, void 0, false, {
                            fileName: "[project]/src/app/leaderboard/page.tsx",
                            lineNumber: 170,
                            columnNumber: 393
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/leaderboard/page.tsx",
                    lineNumber: 170,
                    columnNumber: 74
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/leaderboard/page.tsx",
            lineNumber: 170,
            columnNumber: 11
        }, this);
        $[32] = t20;
    } else {
        t20 = $[32];
    }
    let t21;
    if ($[33] !== t17 || $[34] !== t18) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "leaderboard-hero",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "leaderboard-inner",
                    children: [
                        t5,
                        t6,
                        t7,
                        t8,
                        t9,
                        t10,
                        t17,
                        t18,
                        t20
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/leaderboard/page.tsx",
                    lineNumber: 177,
                    columnNumber: 55
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/leaderboard/page.tsx",
                lineNumber: 177,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/leaderboard/page.tsx",
            lineNumber: 177,
            columnNumber: 11
        }, this);
        $[33] = t17;
        $[34] = t18;
        $[35] = t21;
    } else {
        t21 = $[35];
    }
    let t22;
    if ($[36] !== loading) {
        t22 = !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/app/leaderboard/page.tsx",
            lineNumber: 186,
            columnNumber: 23
        }, this);
        $[36] = loading;
        $[37] = t22;
    } else {
        t22 = $[37];
    }
    let t23;
    if ($[38] !== t21 || $[39] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "leaderboard-page",
            children: [
                t3,
                t4,
                t21,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/leaderboard/page.tsx",
            lineNumber: 194,
            columnNumber: 11
        }, this);
        $[38] = t21;
        $[39] = t22;
        $[40] = t23;
    } else {
        t23 = $[40];
    }
    return t23;
}
_s(Leaderboard, "uoi6POGD7K1BxFT3sTi7c0HfAS0=");
_c = Leaderboard;
function _LeaderboardContributorsMap(contributor) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `leaderboard-row ${contributor.rank === 1 ? "leaderboard-rank-amber" : contributor.rank === 2 ? "leaderboard-rank-sky" : contributor.rank === 3 ? "leaderboard-rank-salmon" : ""}`,
        "data-scroll-reveal": "pop",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `leaderboard-rank ${contributor.rank === 1 ? "leaderboard-rank-badge leaderboard-rank-badge-amber" : contributor.rank === 2 ? "leaderboard-rank-badge leaderboard-rank-badge-sky" : contributor.rank === 3 ? "leaderboard-rank-badge leaderboard-rank-badge-salmon" : ""}`,
                children: contributor.rank
            }, void 0, false, {
                fileName: "[project]/src/app/leaderboard/page.tsx",
                lineNumber: 204,
                columnNumber: 258
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "leaderboard-user",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "leaderboard-avatar",
                        "aria-hidden": "true",
                        children: contributor.username.charAt(0).toUpperCase()
                    }, void 0, false, {
                        fileName: "[project]/src/app/leaderboard/page.tsx",
                        lineNumber: 204,
                        columnNumber: 603
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: contributor.username
                    }, void 0, false, {
                        fileName: "[project]/src/app/leaderboard/page.tsx",
                        lineNumber: 204,
                        columnNumber: 712
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/leaderboard/page.tsx",
                lineNumber: 204,
                columnNumber: 568
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: contributor.prCount
            }, void 0, false, {
                fileName: "[project]/src/app/leaderboard/page.tsx",
                lineNumber: 204,
                columnNumber: 758
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                className: contributor.rank === 1 ? "leaderboard-points-amber" : contributor.rank === 2 ? "leaderboard-points-sky" : contributor.rank === 3 ? "leaderboard-points-salmon" : "",
                children: contributor.totalScore
            }, void 0, false, {
                fileName: "[project]/src/app/leaderboard/page.tsx",
                lineNumber: 204,
                columnNumber: 792
            }, this)
        ]
    }, contributor.username, true, {
        fileName: "[project]/src/app/leaderboard/page.tsx",
        lineNumber: 204,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "Leaderboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
;
;
function Footer() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "0959fa366d5b120df33ba9b161545ff819d23724aa354d93dbb01a030f120dc7") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0959fa366d5b120df33ba9b161545ff819d23724aa354d93dbb01a030f120dc7";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "footer-stripe",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "footer-stripe-forest"
                }, void 0, false, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 13,
                    columnNumber: 41
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "footer-stripe-maroon"
                }, void 0, false, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 13,
                    columnNumber: 82
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "footer-stripe-salmon"
                }, void 0, false, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 13,
                    columnNumber: 123
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "footer-stripe-amber"
                }, void 0, false, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 13,
                    columnNumber: 164
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "footer-stripe-sky"
                }, void 0, false, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 13,
                    columnNumber: 204
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "footer-stripe-forest"
                }, void 0, false, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 13,
                    columnNumber: 242
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 13,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "footer-branding",
            "data-scroll-reveal": "pop",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "footer-brand",
                    children: "HACKTOBERFEST"
                }, void 0, false, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 20,
                    columnNumber: 68
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "footer-organizer",
                    children: "Google Developer Groups IIT Mandi"
                }, void 0, false, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 20,
                    columnNumber: 119
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 20,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
            id: "Footer",
            className: "site-footer",
            children: [
                t0,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "footer-content",
                    children: [
                        t1,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "footer-links",
                            "data-scroll-reveal": "pop",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/about",
                                    children: "About"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 27,
                                    columnNumber: 149
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "·"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 27,
                                    columnNumber: 181
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/rules",
                                    children: "Rules"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 27,
                                    columnNumber: 195
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "·"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 27,
                                    columnNumber: 227
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/#faq",
                                    children: "FAQ"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 27,
                                    columnNumber: 241
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 27,
                            columnNumber: 94
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "footer-copyright",
                            "data-scroll-reveal": "pop",
                            children: "© 2026"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 27,
                            columnNumber: 276
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 27,
                    columnNumber: 58
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 27,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    return t2;
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/GradientWaves.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Renderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/core/Renderer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Program$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/core/Program.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/core/Mesh.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$extras$2f$Triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/extras/Triangle.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const hexToRgb = (hex)=>{
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result) return [
        1,
        1,
        1
    ];
    return [
        parseInt(result[1], 16) / 255,
        parseInt(result[2], 16) / 255,
        parseInt(result[3], 16) / 255
    ];
};
const detailToSteps = (detail)=>{
    if (detail === 'low') return 40.0;
    if (detail === 'high') return 110.0;
    return 70.0;
};
const vertex = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;
const fragment = `#version 300 es
precision highp float;
uniform vec2 iResolution;
uniform float iTime;
uniform float uSpeed;
uniform float uAmplitude;
uniform float uWaveScale;
uniform float uWaveRatio;
uniform float uSwell;
uniform float uTurbulence;
uniform float uTilt;
uniform float uZoom;
uniform float uHeight;
uniform float uFogDepth;
uniform float uSteps;
uniform float uBrightness;
uniform float uOpacity;
uniform float uGrain;
uniform float uGrainIntensity;
uniform vec2 uMouse;
uniform float uParallax;
uniform bool uEnableMouse;
uniform vec3 uHorizonColor;
uniform vec3 uWaveColor;
uniform vec3 uCrestColor;
out vec4 fragColor;

const float MAX_DIST = 20000.0;

float hash21(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

float plasma(vec3 r, vec2 freq, vec4 tc) {
  float mx = r.x + tc.x;
  mx += uSwell * sin((r.y + mx) / 20.0 + tc.y);
  float my = r.y - tc.z;
  my += uTurbulence * cos(r.x / 23.0 + tc.w);
  return r.z - (sin(mx * freq.x) * uAmplitude + sin(my * freq.y) * uAmplitude + uHeight);
}

float raymarch(vec3 pos, vec3 dir, vec2 freq, vec4 tc) {
  float dist = 0.0;
  for (int i = 0; i < 128; i++) {
    if (float(i) >= uSteps) break;
    float dscene = plasma(pos + dist * dir, freq, tc);
    if (abs(dscene) < 0.1) break;
    dist += 0.9 * dscene;
    if (!(abs(dist) < MAX_DIST)) return MAX_DIST;
  }
  return dist;
}

void main() {
  float T = iTime * uSpeed;
  vec2 freq = vec2(uWaveScale / 7.0, (uWaveScale * uWaveRatio) / 3.0);
  vec4 tc = vec4(T / 0.130, T / 0.810, T / 0.200, T / 0.710);
  float c, s;
  float vfov = (3.14159 / 2.3) / max(uZoom, 0.05);
  vec3 cam = vec3(0.0, 0.0, 30.0);
  vec2 uv = (gl_FragCoord.xy / iResolution.xy) - 0.5;
  uv.x *= iResolution.x / iResolution.y;
  uv.y *= -1.0;

  vec3 dir = vec3(0.0, 0.0, -1.0);
  float ulen = length(uv);
  float xrot = vfov * ulen;
  c = cos(xrot); s = sin(xrot);
  dir = mat3(1.0, 0.0, 0.0, 0.0, c, -s, 0.0, s, c) * dir;
  vec2 nuv = ulen > 1e-5 ? uv / ulen : vec2(1.0, 0.0);
  c = nuv.x; s = nuv.y;
  dir = mat3(c, -s, 0.0, s, c, 0.0, 0.0, 0.0, 1.0) * dir;
  c = cos(uTilt); s = sin(uTilt);
  dir = mat3(c, 0.0, s, 0.0, 1.0, 0.0, -s, 0.0, c) * dir;

  if (uEnableMouse) {
    float yaw = (uMouse.x - 0.5) * uParallax * 0.4;
    float pitch = (uMouse.y - 0.5) * uParallax * 0.4;
    c = cos(yaw); s = sin(yaw);
    dir = mat3(c, 0.0, s, 0.0, 1.0, 0.0, -s, 0.0, c) * dir;
    c = cos(pitch); s = sin(pitch);
    dir = mat3(1.0, 0.0, 0.0, 0.0, c, -s, 0.0, s, c) * dir;
  }

  float dist = raymarch(cam, dir, freq, tc);
  vec3 pos = cam + dist * dir;

  float t = clamp(uFogDepth / max(dist, 0.001), 0.0, 1.0);
  vec3 body = mix(uWaveColor, uCrestColor, clamp(pos.z * 0.08 + 0.5, 0.0, 1.0));
  vec3 col = mix(uHorizonColor, body, t);
  col *= uBrightness;
  col = clamp(col, 0.0, 1.0);

  float alpha = clamp(t, 0.0, 1.0) * uOpacity;
  if (uGrain > 0.5) {
    float g = hash21(gl_FragCoord.xy + mod(iTime, 64.0) * 11.0);
    alpha += (g - 0.5) * uGrainIntensity;
  }
  alpha = clamp(alpha, 0.0, 1.0);
  fragColor = vec4(col * alpha, alpha);
}
`;
const ctxMap = new WeakMap();
const GradientWaves = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(29);
    if ($[0] !== "5e1b0502ae33df27f62796f46a514c7d5e1ea214ae3eca48cbcc01ce6f40ac81") {
        for(let $i = 0; $i < 29; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5e1b0502ae33df27f62796f46a514c7d5e1ea214ae3eca48cbcc01ce6f40ac81";
    }
    const { horizonColor: t1, waveColor: t2, crestColor: t3, speed: t4, amplitude: t5, waveScale: t6, waveRatio: t7, swell: t8, turbulence: t9, tilt: t10, zoom: t11, height: t12, fogDepth: t13, detail: t14, brightness: t15, opacity: t16, mouseInteraction: t17, parallaxStrength: t18, grain: t19, grainIntensity: t20, className: t21 } = t0;
    const horizonColor = t1 === undefined ? "#5227FF" : t1;
    const waveColor = t2 === undefined ? "#FF9FFC" : t2;
    const crestColor = t3 === undefined ? "#FFFFFF" : t3;
    const speed = t4 === undefined ? 0.4 : t4;
    const amplitude = t5 === undefined ? 2.5 : t5;
    const waveScale = t6 === undefined ? 0.6 : t6;
    const waveRatio = t7 === undefined ? 0.9 : t7;
    const swell = t8 === undefined ? 35 : t8;
    const turbulence = t9 === undefined ? 20 : t9;
    const tilt = t10 === undefined ? 1.11 : t10;
    const zoom = t11 === undefined ? 1 : t11;
    const height = t12 === undefined ? 5.5 : t12;
    const fogDepth = t13 === undefined ? 15 : t13;
    const detail = t14 === undefined ? "medium" : t14;
    const brightness = t15 === undefined ? 1 : t15;
    const opacity = t16 === undefined ? 1 : t16;
    const mouseInteraction = t17 === undefined ? true : t17;
    const parallaxStrength = t18 === undefined ? 0.5 : t18;
    const grain = t19 === undefined ? true : t19;
    const grainIntensity = t20 === undefined ? 0.05 : t20;
    const className = t21 === undefined ? "" : t21;
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const enableMouseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(mouseInteraction);
    let t22;
    let t23;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = ()=>{
            const container = containerRef.current;
            if (!container) {
                return;
            }
            const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Renderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Renderer"]({
                webgl: 2,
                alpha: true,
                premultipliedAlpha: true,
                antialias: false,
                dpr: 1
            });
            const gl = renderer.gl;
            gl.clearColor(0, 0, 0, 0);
            const canvas = gl.canvas;
            canvas.style.width = "100%";
            canvas.style.height = "100%";
            canvas.style.display = "block";
            container.appendChild(canvas);
            const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$extras$2f$Triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Triangle"](gl);
            const program = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Program$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Program"](gl, {
                vertex,
                fragment,
                uniforms: {
                    iTime: {
                        value: 0
                    },
                    iResolution: {
                        value: new Float32Array([
                            1,
                            1
                        ])
                    },
                    uSpeed: {
                        value: 0.4
                    },
                    uAmplitude: {
                        value: 2.5
                    },
                    uWaveScale: {
                        value: 0.6
                    },
                    uWaveRatio: {
                        value: 0.9
                    },
                    uSwell: {
                        value: 35
                    },
                    uTurbulence: {
                        value: 20
                    },
                    uTilt: {
                        value: 1.11
                    },
                    uZoom: {
                        value: 1
                    },
                    uHeight: {
                        value: 5.5
                    },
                    uFogDepth: {
                        value: 15
                    },
                    uSteps: {
                        value: 70
                    },
                    uBrightness: {
                        value: 1
                    },
                    uOpacity: {
                        value: 1
                    },
                    uGrain: {
                        value: 1
                    },
                    uGrainIntensity: {
                        value: 0.05
                    },
                    uMouse: {
                        value: new Float32Array([
                            0.5,
                            0.5
                        ])
                    },
                    uParallax: {
                        value: 0.5
                    },
                    uEnableMouse: {
                        value: true
                    },
                    uHorizonColor: {
                        value: new Float32Array([
                            1,
                            1,
                            1
                        ])
                    },
                    uWaveColor: {
                        value: new Float32Array([
                            1,
                            1,
                            1
                        ])
                    },
                    uCrestColor: {
                        value: new Float32Array([
                            1,
                            1,
                            1
                        ])
                    }
                }
            });
            const mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](gl, {
                geometry,
                program
            });
            ctxMap.set(container, {
                renderer,
                program,
                mesh
            });
            const setSize = ()=>{
                const rect = container.getBoundingClientRect();
                const w = Math.max(1, Math.floor(rect.width));
                const h = Math.max(1, Math.floor(rect.height));
                renderer.setSize(w, h);
                const res = program.uniforms.iResolution.value;
                res[0] = gl.drawingBufferWidth;
                res[1] = gl.drawingBufferHeight;
                renderer.render({
                    scene: mesh
                });
            };
            const ro = new ResizeObserver(setSize);
            ro.observe(container);
            setSize();
            const currentMouse = [
                0.5,
                0.5
            ];
            const targetMouse = [
                0.5,
                0.5
            ];
            const onPointerMove = (e)=>{
                if (e.pointerType !== "mouse" && e.pointerType !== "pen") {
                    return;
                }
                const rect_0 = container.getBoundingClientRect();
                targetMouse[0] = Math.min(1, Math.max(0, (e.clientX - rect_0.left) / rect_0.width));
                targetMouse[1] = Math.min(1, Math.max(0, 1 - (e.clientY - rect_0.top) / rect_0.height));
            };
            const onPointerLeave = ()=>{
                targetMouse[0] = 0.5;
                targetMouse[1] = 0.5;
            };
            window.addEventListener("pointermove", onPointerMove, {
                passive: true
            });
            document.addEventListener("mouseleave", onPointerLeave);
            window.addEventListener("blur", onPointerLeave);
            let raf = 0;
            let isVisible = true;
            let isPageVisible = !document.hidden;
            const t0$0 = performance.now();
            const loop = (t)=>{
                program.uniforms.iTime.value = (t - t0$0) * 0.001;
                const tx = enableMouseRef.current ? targetMouse[0] : 0.5;
                const ty = enableMouseRef.current ? targetMouse[1] : 0.5;
                currentMouse[0] = currentMouse[0] + 0.05 * (tx - currentMouse[0]);
                currentMouse[1] = currentMouse[1] + 0.05 * (ty - currentMouse[1]);
                program.uniforms.uMouse.value[0] = currentMouse[0];
                program.uniforms.uMouse.value[1] = currentMouse[1];
                renderer.render({
                    scene: mesh
                });
                raf = requestAnimationFrame(loop);
            };
            const tryStart = ()=>{
                if (isVisible && isPageVisible && raf === 0) {
                    raf = requestAnimationFrame(loop);
                }
            };
            const tryStop = ()=>{
                if (raf !== 0) {
                    cancelAnimationFrame(raf);
                    raf = 0;
                }
            };
            const io = new IntersectionObserver((t24)=>{
                const [entry] = t24;
                isVisible = entry.isIntersecting;
                if (isVisible) {
                    tryStart();
                } else {
                    tryStop();
                }
            }, {
                threshold: 0
            });
            io.observe(container);
            const onVisibility = ()=>{
                isPageVisible = !document.hidden;
                if (isPageVisible) {
                    tryStart();
                } else {
                    tryStop();
                }
            };
            document.addEventListener("visibilitychange", onVisibility);
            tryStart();
            return ()=>{
                tryStop();
                ro.disconnect();
                io.disconnect();
                document.removeEventListener("visibilitychange", onVisibility);
                window.removeEventListener("pointermove", onPointerMove);
                document.removeEventListener("mouseleave", onPointerLeave);
                window.removeEventListener("blur", onPointerLeave);
                ctxMap.delete(container);
                try {
                    container.removeChild(canvas);
                } catch  {}
                gl.getExtension("WEBGL_lose_context")?.loseContext();
            };
        };
        t23 = [];
        $[1] = t22;
        $[2] = t23;
    } else {
        t22 = $[1];
        t23 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t22, t23);
    let t24;
    let t25;
    if ($[3] !== amplitude || $[4] !== brightness || $[5] !== crestColor || $[6] !== detail || $[7] !== fogDepth || $[8] !== grain || $[9] !== grainIntensity || $[10] !== height || $[11] !== horizonColor || $[12] !== mouseInteraction || $[13] !== opacity || $[14] !== parallaxStrength || $[15] !== speed || $[16] !== swell || $[17] !== tilt || $[18] !== turbulence || $[19] !== waveColor || $[20] !== waveRatio || $[21] !== waveScale || $[22] !== zoom) {
        t24 = ()=>{
            const container_0 = containerRef.current;
            if (!container_0) {
                return;
            }
            const ctx = ctxMap.get(container_0);
            if (!ctx) {
                return;
            }
            const { program: program_0 } = ctx;
            const u = program_0.uniforms;
            enableMouseRef.current = mouseInteraction;
            u.uSpeed.value = speed;
            u.uAmplitude.value = amplitude;
            u.uWaveScale.value = waveScale;
            u.uWaveRatio.value = waveRatio;
            u.uSwell.value = swell;
            u.uTurbulence.value = turbulence;
            u.uTilt.value = tilt;
            u.uZoom.value = zoom;
            u.uHeight.value = height;
            u.uFogDepth.value = fogDepth;
            u.uSteps.value = detailToSteps(detail);
            u.uBrightness.value = brightness;
            u.uOpacity.value = opacity;
            u.uGrain.value = grain ? 1 : 0;
            u.uGrainIntensity.value = grainIntensity;
            u.uParallax.value = parallaxStrength;
            u.uEnableMouse.value = mouseInteraction;
            const hc = u.uHorizonColor.value;
            const wc = u.uWaveColor.value;
            const cc = u.uCrestColor.value;
            const h_0 = hexToRgb(horizonColor);
            const w_0 = hexToRgb(waveColor);
            const cr = hexToRgb(crestColor);
            hc[0] = h_0[0];
            hc[1] = h_0[1];
            hc[2] = h_0[2];
            wc[0] = w_0[0];
            wc[1] = w_0[1];
            wc[2] = w_0[2];
            cc[0] = cr[0];
            cc[1] = cr[1];
            cc[2] = cr[2];
        };
        t25 = [
            horizonColor,
            waveColor,
            crestColor,
            speed,
            amplitude,
            waveScale,
            waveRatio,
            swell,
            turbulence,
            tilt,
            zoom,
            height,
            fogDepth,
            detail,
            brightness,
            opacity,
            grain,
            grainIntensity,
            mouseInteraction,
            parallaxStrength
        ];
        $[3] = amplitude;
        $[4] = brightness;
        $[5] = crestColor;
        $[6] = detail;
        $[7] = fogDepth;
        $[8] = grain;
        $[9] = grainIntensity;
        $[10] = height;
        $[11] = horizonColor;
        $[12] = mouseInteraction;
        $[13] = opacity;
        $[14] = parallaxStrength;
        $[15] = speed;
        $[16] = swell;
        $[17] = tilt;
        $[18] = turbulence;
        $[19] = waveColor;
        $[20] = waveRatio;
        $[21] = waveScale;
        $[22] = zoom;
        $[23] = t24;
        $[24] = t25;
    } else {
        t24 = $[23];
        t25 = $[24];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t24, t25);
    const t26 = `gradient-waves-container ${className}`;
    let t27;
    if ($[25] !== t26) {
        t27 = t26.trim();
        $[25] = t26;
        $[26] = t27;
    } else {
        t27 = $[26];
    }
    let t28;
    if ($[27] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: containerRef,
            className: t27
        }, void 0, false, {
            fileName: "[project]/src/components/GradientWaves.jsx",
            lineNumber: 485,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[27] = t27;
        $[28] = t28;
    } else {
        t28 = $[28];
    }
    return t28;
};
_s(GradientWaves, "Fx5IoTgqWqaC+t2fyJQKLPKVPyY=");
_c = GradientWaves;
const __TURBOPACK__default__export__ = GradientWaves;
var _c;
__turbopack_context__.k.register(_c, "GradientWaves");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/AuthContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const links = [
    "About",
    "Rules",
    "Leaderboard"
];
const API_URL = ("TURBOPACK compile-time value", "https://hactoberfest-api.onrender.com");
function Navbar() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "e65320343769ddc92f763c6c7d3f876d690e687c8340ff093a73a5332c7e2033") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e65320343769ddc92f763c6c7d3f876d690e687c8340ff093a73a5332c7e2033";
    }
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { user, authLoading, logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [dropdownOpen, setDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "Navbar[useEffect()]": ()=>{
                const handleClickOutside = function handleClickOutside(event) {
                    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                        setDropdownOpen(false);
                    }
                };
                document.addEventListener("mousedown", handleClickOutside);
                return ()=>{
                    document.removeEventListener("mousedown", handleClickOutside);
                };
            }
        })["Navbar[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[3] !== logout) {
        t2 = async function handleLogout() {
            ;
            try {
                await logout();
                setDropdownOpen(false);
            } catch (t3) {
                const error = t3;
                console.error("Logout failed:", error);
            }
        };
        $[3] = logout;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const handleLogout = t2;
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: "wordmark",
            href: "/",
            "aria-label": "Hacktoberfest home",
            children: "HACKTOBERFEST"
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.tsx",
            lineNumber: 70,
            columnNumber: 10
        }, this);
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== pathname) {
        t4 = links.map({
            "Navbar[links.map()]": (link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: link === "About" && pathname === "/about" || link === "Rules" && pathname === "/rules" || link === "Leaderboard" && pathname === "/leaderboard" ? "active" : "",
                        href: link === "About" ? "/about" : link === "Rules" ? "/rules" : link === "Leaderboard" ? "/leaderboard" : `/#${link.toLowerCase()}`,
                        children: link
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 78,
                        columnNumber: 53
                    }, this)
                }, link, false, {
                    fileName: "[project]/src/components/Navbar.tsx",
                    lineNumber: 78,
                    columnNumber: 38
                }, this)
        }["Navbar[links.map()]"]);
        $[6] = pathname;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "nav-links",
            children: t4
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.tsx",
            lineNumber: 87,
            columnNumber: 10
        }, this);
        $[8] = t4;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== authLoading || $[11] !== dropdownOpen || $[12] !== handleLogout || $[13] !== user) {
        t6 = authLoading ? null : user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "nav-user-dropdown",
            ref: dropdownRef,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: "nav-user",
                    onClick: {
                        "Navbar[<button>.onClick]": ()=>{
                            setDropdownOpen(_NavbarButtonOnClickSetDropdownOpen);
                        }
                    }["Navbar[<button>.onClick]"],
                    "aria-expanded": dropdownOpen,
                    "aria-haspopup": "true",
                    children: user.username
                }, void 0, false, {
                    fileName: "[project]/src/components/Navbar.tsx",
                    lineNumber: 95,
                    columnNumber: 91
                }, this),
                dropdownOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "nav-dropdown-menu",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: handleLogout,
                        children: "Log out"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 99,
                        columnNumber: 164
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Navbar.tsx",
                    lineNumber: 99,
                    columnNumber: 129
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.tsx",
            lineNumber: 95,
            columnNumber: 38
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            className: "button button-primary nav-join",
            href: `${API_URL}/auth/github`,
            children: "Join Now"
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.tsx",
            lineNumber: 99,
            columnNumber: 241
        }, this);
        $[10] = authLoading;
        $[11] = dropdownOpen;
        $[12] = handleLogout;
        $[13] = user;
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    let t7;
    if ($[15] !== t5 || $[16] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "site-header",
            "data-scroll-reveal": "pop",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "site-nav",
                "aria-label": "Main navigation",
                children: [
                    t3,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "nav-right",
                        children: [
                            t5,
                            t6
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 110,
                        columnNumber: 126
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 110,
                columnNumber: 67
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.tsx",
            lineNumber: 110,
            columnNumber: 10
        }, this);
        $[15] = t5;
        $[16] = t6;
        $[17] = t7;
    } else {
        t7 = $[17];
    }
    return t7;
}
_s(Navbar, "r4LDnek3Z0v5Bt2GbhvP6U1WEVg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = Navbar;
function _NavbarButtonOnClickSetDropdownOpen(open) {
    return !open;
}
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_15ompwv._.js.map
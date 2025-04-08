import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_Bb5fpZC9.mjs';
import { manifest } from './manifest_iHMpzdVi.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/api/feedback.astro.mjs');
const _page4 = () => import('./pages/api/keystatic/_---params_.astro.mjs');
const _page5 = () => import('./pages/contact.astro.mjs');
const _page6 = () => import('./pages/downloads/datanova-core.astro.mjs');
const _page7 = () => import('./pages/downloads/editions.astro.mjs');
const _page8 = () => import('./pages/downloads/license-options.astro.mjs');
const _page9 = () => import('./pages/downloads/request-quote.astro.mjs');
const _page10 = () => import('./pages/downloads/subscription-licensing.astro.mjs');
const _page11 = () => import('./pages/keystatic/_---params_.astro.mjs');
const _page12 = () => import('./pages/platform.astro.mjs');
const _page13 = () => import('./pages/robots.txt.astro.mjs');
const _page14 = () => import('./pages/support/articles/_id_.astro.mjs');
const _page15 = () => import('./pages/support/articles.astro.mjs');
const _page16 = () => import('./pages/support/knowledge-base.astro.mjs');
const _page17 = () => import('./pages/support/reference/_id_.astro.mjs');
const _page18 = () => import('./pages/support/reference.astro.mjs');
const _page19 = () => import('./pages/support/sample-spreadsheets.astro.mjs');
const _page20 = () => import('./pages/support/whitepapers.astro.mjs');
const _page21 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/api/feedback.ts", _page3],
    ["node_modules/@keystatic/astro/internal/keystatic-api.js", _page4],
    ["src/pages/contact.astro", _page5],
    ["src/pages/downloads/datanova-core.astro", _page6],
    ["src/pages/downloads/editions.astro", _page7],
    ["src/pages/downloads/license-options.astro", _page8],
    ["src/pages/downloads/request-quote.astro", _page9],
    ["src/pages/downloads/subscription-licensing.astro", _page10],
    ["node_modules/@keystatic/astro/internal/keystatic-astro-page.astro", _page11],
    ["src/pages/platform/index.astro", _page12],
    ["src/pages/robots.txt.ts", _page13],
    ["src/pages/support/articles/[id].astro", _page14],
    ["src/pages/support/articles/index.astro", _page15],
    ["src/pages/support/knowledge-base.astro", _page16],
    ["src/pages/support/reference/[id].astro", _page17],
    ["src/pages/support/reference/index.astro", _page18],
    ["src/pages/support/sample-spreadsheets.astro", _page19],
    ["src/pages/support/whitepapers.astro", _page20],
    ["src/pages/index.astro", _page21]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "1fd47256-cc30-449e-996d-bc6fd7737ee4",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };

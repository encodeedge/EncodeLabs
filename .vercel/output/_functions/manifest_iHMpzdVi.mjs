import 'kleur/colors';
import { f as decodeKey } from './chunks/astro/server_EGT2XxWd.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_BQZrjvPI.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///workspaces/DataNova/","cacheDir":"file:///workspaces/DataNova/node_modules/.astro/","outDir":"file:///workspaces/DataNova/dist/","srcDir":"file:///workspaces/DataNova/src/","publicDir":"file:///workspaces/DataNova/public/","buildClientDir":"file:///workspaces/DataNova/dist/client/","buildServerDir":"file:///workspaces/DataNova/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"never"}}},{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"api/feedback","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/feedback","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/feedback$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"feedback","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/feedback.ts","pathname":"/api/feedback","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"downloads/datanova-core/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/downloads/datanova-core","isIndex":false,"type":"page","pattern":"^\\/downloads\\/datanova-core$","segments":[[{"content":"downloads","dynamic":false,"spread":false}],[{"content":"datanova-core","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/downloads/datanova-core.astro","pathname":"/downloads/datanova-core","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"downloads/editions/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/downloads/editions","isIndex":false,"type":"page","pattern":"^\\/downloads\\/editions$","segments":[[{"content":"downloads","dynamic":false,"spread":false}],[{"content":"editions","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/downloads/editions.astro","pathname":"/downloads/editions","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"downloads/license-options/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/downloads/license-options","isIndex":false,"type":"page","pattern":"^\\/downloads\\/license-options$","segments":[[{"content":"downloads","dynamic":false,"spread":false}],[{"content":"license-options","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/downloads/license-options.astro","pathname":"/downloads/license-options","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"downloads/request-quote/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/downloads/request-quote","isIndex":false,"type":"page","pattern":"^\\/downloads\\/request-quote$","segments":[[{"content":"downloads","dynamic":false,"spread":false}],[{"content":"request-quote","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/downloads/request-quote.astro","pathname":"/downloads/request-quote","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"downloads/subscription-licensing/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/downloads/subscription-licensing","isIndex":false,"type":"page","pattern":"^\\/downloads\\/subscription-licensing$","segments":[[{"content":"downloads","dynamic":false,"spread":false}],[{"content":"subscription-licensing","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/downloads/subscription-licensing.astro","pathname":"/downloads/subscription-licensing","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"platform/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/platform","isIndex":true,"type":"page","pattern":"^\\/platform$","segments":[[{"content":"platform","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/platform/index.astro","pathname":"/platform","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"robots.txt","links":[],"scripts":[],"styles":[],"routeData":{"route":"/robots.txt","isIndex":false,"type":"endpoint","pattern":"^\\/robots\\.txt\\/?$","segments":[[{"content":"robots.txt","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/robots.txt.ts","pathname":"/robots.txt","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"support/articles/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/support/articles","isIndex":true,"type":"page","pattern":"^\\/support\\/articles$","segments":[[{"content":"support","dynamic":false,"spread":false}],[{"content":"articles","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/support/articles/index.astro","pathname":"/support/articles","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"support/knowledge-base/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/support/knowledge-base","isIndex":false,"type":"page","pattern":"^\\/support\\/knowledge-base$","segments":[[{"content":"support","dynamic":false,"spread":false}],[{"content":"knowledge-base","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/support/knowledge-base.astro","pathname":"/support/knowledge-base","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"support/reference/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/support/reference","isIndex":true,"type":"page","pattern":"^\\/support\\/reference$","segments":[[{"content":"support","dynamic":false,"spread":false}],[{"content":"reference","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/support/reference/index.astro","pathname":"/support/reference","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"support/sample-spreadsheets/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/support/sample-spreadsheets","isIndex":false,"type":"page","pattern":"^\\/support\\/sample-spreadsheets$","segments":[[{"content":"support","dynamic":false,"spread":false}],[{"content":"sample-spreadsheets","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/support/sample-spreadsheets.astro","pathname":"/support/sample-spreadsheets","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"support/whitepapers/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/support/whitepapers","isIndex":false,"type":"page","pattern":"^\\/support\\/whitepapers$","segments":[[{"content":"support","dynamic":false,"spread":false}],[{"content":"whitepapers","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/support/whitepapers.astro","pathname":"/support/whitepapers","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.CJRj5HRh.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.CJRj5HRh.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/api/keystatic/[...params]","pattern":"^\\/api\\/keystatic(?:\\/(.*?))?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"keystatic","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/@keystatic/astro/internal/keystatic-api.js","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"external","_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.CJRj5HRh.js"}],"styles":[],"routeData":{"type":"page","isIndex":false,"route":"/keystatic/[...params]","pattern":"^\\/keystatic(?:\\/(.*?))?$","segments":[[{"content":"keystatic","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/@keystatic/astro/internal/keystatic-astro-page.astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"external","_meta":{"trailingSlash":"never"}}}],"site":"https://www.encodeedge.com","base":"/","trailingSlash":"never","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/workspaces/DataNova/src/pages/support/articles/[id].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/support/articles/[id]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/workspaces/DataNova/src/pages/support/articles/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/support/articles/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/DataNova/src/pages/support/reference/[id].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/support/reference/[id]@_@astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/DataNova/src/pages/support/reference/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/support/reference/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/DataNova/src/pages/support/sample-spreadsheets.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/support/sample-spreadsheets@_@astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/DataNova/src/pages/support/whitepapers.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/support/whitepapers@_@astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/DataNova/node_modules/@astrojs/markdoc/components/Renderer.astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/DataNova/node_modules/@astrojs/markdoc/components/index.ts",{"propagation":"in-tree","containsHead":false}],["/workspaces/DataNova/src/content/articles/advanced-data-cleaning-techniques-in-excel.mdoc",{"propagation":"in-tree","containsHead":false}],["/workspaces/DataNova/src/content/articles/advanced-data-cleaning-techniques-in-excel.mdoc?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["/workspaces/DataNova/.astro/content-modules.mjs",{"propagation":"in-tree","containsHead":false}],["/workspaces/DataNova/node_modules/astro/dist/content/runtime.js",{"propagation":"in-tree","containsHead":false}],["/workspaces/DataNova/src/content/articles/analyzing-financial-data-using-data-nova-for-business-strategy.mdoc",{"propagation":"in-tree","containsHead":false}],["/workspaces/DataNova/src/content/articles/analyzing-financial-data-using-data-nova-for-business-strategy.mdoc?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["/workspaces/DataNova/src/content/articles/creating-custom-dashboards-in-excel-with-data-nova.mdoc",{"propagation":"in-tree","containsHead":false}],["/workspaces/DataNova/src/content/articles/creating-custom-dashboards-in-excel-with-data-nova.mdoc?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["/workspaces/DataNova/src/content/articles/how-to-automate-reporting-with-data-nova-s-integration-tools.mdoc",{"propagation":"in-tree","containsHead":false}],["/workspaces/DataNova/src/content/articles/how-to-automate-reporting-with-data-nova-s-integration-tools.mdoc?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["/workspaces/DataNova/src/content/articles/integrating-data-nova-with-google-sheets-for-seamless-collaboration.mdoc",{"propagation":"in-tree","containsHead":false}],["/workspaces/DataNova/src/content/articles/integrating-data-nova-with-google-sheets-for-seamless-collaboration.mdoc?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["/workspaces/DataNova/src/content/articles/mastering-ai-powered-insights-with-data-nova-s-smart-analysis-tools.mdoc",{"propagation":"in-tree","containsHead":false}],["/workspaces/DataNova/src/content/articles/mastering-ai-powered-insights-with-data-nova-s-smart-analysis-tools.mdoc?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["/workspaces/DataNova/src/content/articles/transforming-raw-data-into-actionable-insights.mdoc",{"propagation":"in-tree","containsHead":false}],["/workspaces/DataNova/src/content/articles/transforming-raw-data-into-actionable-insights.mdoc?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["/workspaces/DataNova/src/content/articles/unlocking-the-power-of-predictive-analytics.mdoc",{"propagation":"in-tree","containsHead":false}],["/workspaces/DataNova/src/content/articles/unlocking-the-power-of-predictive-analytics.mdoc?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["/workspaces/DataNova/src/content/reference/data-nova-advanced-analytics-reference.mdoc",{"propagation":"in-tree","containsHead":false}],["/workspaces/DataNova/src/content/reference/data-nova-advanced-analytics-reference.mdoc?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["/workspaces/DataNova/src/content/reference/data-nova-quick-start-guide.mdoc",{"propagation":"in-tree","containsHead":false}],["/workspaces/DataNova/src/content/reference/data-nova-quick-start-guide.mdoc?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["/workspaces/DataNova/src/content/reference/data-nova-user-manual.mdoc",{"propagation":"in-tree","containsHead":false}],["/workspaces/DataNova/src/content/reference/data-nova-user-manual.mdoc?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["/workspaces/DataNova/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/workspaces/DataNova/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/workspaces/DataNova/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/workspaces/DataNova/src/pages/downloads/datanova-core.astro",{"propagation":"none","containsHead":true}],["/workspaces/DataNova/src/pages/downloads/editions.astro",{"propagation":"none","containsHead":true}],["/workspaces/DataNova/src/pages/downloads/license-options.astro",{"propagation":"none","containsHead":true}],["/workspaces/DataNova/src/pages/downloads/request-quote.astro",{"propagation":"none","containsHead":true}],["/workspaces/DataNova/src/pages/downloads/subscription-licensing.astro",{"propagation":"none","containsHead":true}],["/workspaces/DataNova/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/workspaces/DataNova/src/pages/platform/index.astro",{"propagation":"none","containsHead":true}],["/workspaces/DataNova/src/pages/support/knowledge-base.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/api/feedback@_@ts":"pages/api/feedback.astro.mjs","\u0000@astro-page:src/pages/downloads/datanova-core@_@astro":"pages/downloads/datanova-core.astro.mjs","\u0000@astro-page:src/pages/downloads/editions@_@astro":"pages/downloads/editions.astro.mjs","\u0000@astro-page:src/pages/downloads/license-options@_@astro":"pages/downloads/license-options.astro.mjs","\u0000@astro-page:src/pages/downloads/subscription-licensing@_@astro":"pages/downloads/subscription-licensing.astro.mjs","\u0000@astro-page:node_modules/@keystatic/astro/internal/keystatic-astro-page@_@astro":"pages/keystatic/_---params_.astro.mjs","\u0000@astro-page:src/pages/robots.txt@_@ts":"pages/robots.txt.astro.mjs","\u0000@astro-page:src/pages/support/articles/[id]@_@astro":"pages/support/articles/_id_.astro.mjs","\u0000@astro-page:src/pages/support/articles/index@_@astro":"pages/support/articles.astro.mjs","\u0000@astro-page:src/pages/support/knowledge-base@_@astro":"pages/support/knowledge-base.astro.mjs","\u0000@astro-page:src/pages/support/reference/[id]@_@astro":"pages/support/reference/_id_.astro.mjs","\u0000@astro-page:src/pages/support/reference/index@_@astro":"pages/support/reference.astro.mjs","\u0000@astro-page:src/pages/support/sample-spreadsheets@_@astro":"pages/support/sample-spreadsheets.astro.mjs","\u0000@astro-page:src/pages/support/whitepapers@_@astro":"pages/support/whitepapers.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/downloads/request-quote@_@astro":"pages/downloads/request-quote.astro.mjs","\u0000@astro-page:src/pages/platform/index@_@astro":"pages/platform.astro.mjs","\u0000@astro-page:node_modules/@keystatic/astro/internal/keystatic-api@_@js":"pages/api/keystatic/_---params_.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","/workspaces/DataNova/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DMe2j7ja.mjs","/workspaces/DataNova/.astro/content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","/workspaces/DataNova/.astro/content-modules.mjs":"chunks/content-modules_BR5C7L5R.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_DGsB6pW_.mjs","/workspaces/DataNova/src/content/reference/data-nova-advanced-analytics-reference.mdoc?astroPropagatedAssets":"chunks/data-nova-advanced-analytics-reference_DWNjFfZt.mjs","/workspaces/DataNova/src/content/reference/data-nova-quick-start-guide.mdoc?astroPropagatedAssets":"chunks/data-nova-quick-start-guide_DBKZpJMI.mjs","/workspaces/DataNova/src/content/reference/data-nova-user-manual.mdoc?astroPropagatedAssets":"chunks/data-nova-user-manual_BFP-Emxf.mjs","/workspaces/DataNova/src/content/articles/advanced-data-cleaning-techniques-in-excel.mdoc?astroPropagatedAssets":"chunks/advanced-data-cleaning-techniques-in-excel_C2jbqP87.mjs","/workspaces/DataNova/src/content/articles/analyzing-financial-data-using-data-nova-for-business-strategy.mdoc?astroPropagatedAssets":"chunks/analyzing-financial-data-using-data-nova-for-business-strategy_DdEW6C5C.mjs","/workspaces/DataNova/src/content/articles/creating-custom-dashboards-in-excel-with-data-nova.mdoc?astroPropagatedAssets":"chunks/creating-custom-dashboards-in-excel-with-data-nova_CWXcIaSM.mjs","/workspaces/DataNova/src/content/articles/how-to-automate-reporting-with-data-nova-s-integration-tools.mdoc?astroPropagatedAssets":"chunks/how-to-automate-reporting-with-data-nova-s-integration-tools_DvfbeDWD.mjs","/workspaces/DataNova/src/content/articles/integrating-data-nova-with-google-sheets-for-seamless-collaboration.mdoc?astroPropagatedAssets":"chunks/integrating-data-nova-with-google-sheets-for-seamless-collaboration_CWy1ey2a.mjs","/workspaces/DataNova/src/content/articles/mastering-ai-powered-insights-with-data-nova-s-smart-analysis-tools.mdoc?astroPropagatedAssets":"chunks/mastering-ai-powered-insights-with-data-nova-s-smart-analysis-tools_DJd3whGP.mjs","/workspaces/DataNova/src/content/articles/transforming-raw-data-into-actionable-insights.mdoc?astroPropagatedAssets":"chunks/transforming-raw-data-into-actionable-insights_KU815X4j.mjs","/workspaces/DataNova/src/content/articles/unlocking-the-power-of-predictive-analytics.mdoc?astroPropagatedAssets":"chunks/unlocking-the-power-of-predictive-analytics_b-rC22GP.mjs","/workspaces/DataNova/src/content/reference/data-nova-advanced-analytics-reference.mdoc":"chunks/data-nova-advanced-analytics-reference_q4o0xeRn.mjs","/workspaces/DataNova/src/content/reference/data-nova-quick-start-guide.mdoc":"chunks/data-nova-quick-start-guide_x58D69Za.mjs","/workspaces/DataNova/src/content/reference/data-nova-user-manual.mdoc":"chunks/data-nova-user-manual_CjgynaXe.mjs","/workspaces/DataNova/src/content/articles/advanced-data-cleaning-techniques-in-excel.mdoc":"chunks/advanced-data-cleaning-techniques-in-excel_dn83LeEj.mjs","/workspaces/DataNova/src/content/articles/analyzing-financial-data-using-data-nova-for-business-strategy.mdoc":"chunks/analyzing-financial-data-using-data-nova-for-business-strategy_m4iZSAtW.mjs","/workspaces/DataNova/src/content/articles/creating-custom-dashboards-in-excel-with-data-nova.mdoc":"chunks/creating-custom-dashboards-in-excel-with-data-nova_BLn7OdVM.mjs","/workspaces/DataNova/src/content/articles/how-to-automate-reporting-with-data-nova-s-integration-tools.mdoc":"chunks/how-to-automate-reporting-with-data-nova-s-integration-tools_CBJ06Bin.mjs","/workspaces/DataNova/src/content/articles/integrating-data-nova-with-google-sheets-for-seamless-collaboration.mdoc":"chunks/integrating-data-nova-with-google-sheets-for-seamless-collaboration_DfSx3IKu.mjs","/workspaces/DataNova/src/content/articles/mastering-ai-powered-insights-with-data-nova-s-smart-analysis-tools.mdoc":"chunks/mastering-ai-powered-insights-with-data-nova-s-smart-analysis-tools_CA5ccWLo.mjs","/workspaces/DataNova/src/content/articles/transforming-raw-data-into-actionable-insights.mdoc":"chunks/transforming-raw-data-into-actionable-insights_BgI-0KTv.mjs","/workspaces/DataNova/src/content/articles/unlocking-the-power-of-predictive-analytics.mdoc":"chunks/unlocking-the-power-of-predictive-analytics_DEDnCvzl.mjs","\u0000@astrojs-manifest":"manifest_iHMpzdVi.mjs","/workspaces/DataNova/node_modules/@keystatic/astro/internal/keystatic-page.js":"_astro/keystatic-page.DjSnioq3.js","@astrojs/react/client.js":"_astro/client.HW20lDqW.js","/workspaces/DataNova/src/pages/404.astro?astro&type=script&index=0&lang.ts":"_astro/404.astro_astro_type_script_index_0_lang.DhccD8Bk.js","/workspaces/DataNova/src/pages/contact.astro?astro&type=script&index=0&lang.ts":"_astro/contact.astro_astro_type_script_index_0_lang.DLClm-2i.js","/workspaces/DataNova/src/pages/downloads/request-quote.astro?astro&type=script&index=0&lang.ts":"_astro/request-quote.astro_astro_type_script_index_0_lang.DLClm-2i.js","/workspaces/DataNova/src/pages/support/articles/[id].astro?astro&type=script&index=0&lang.ts":"_astro/_id_.astro_astro_type_script_index_0_lang.BxMVd-R4.js","/workspaces/DataNova/src/pages/support/reference/[id].astro?astro&type=script&index=0&lang.ts":"_astro/_id_.astro_astro_type_script_index_0_lang.Bqe0-Ut5.js","/workspaces/DataNova/src/layout/BaseLayout.astro?astro&type=script&index=0&lang.ts":"_astro/BaseLayout.astro_astro_type_script_index_0_lang.BGfjo5mV.js","/workspaces/DataNova/src/components/sections/Navbar.astro?astro&type=script&index=0&lang.ts":"_astro/Navbar.astro_astro_type_script_index_0_lang.DDy9udnV.js","/workspaces/DataNova/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.PKae0Lse.js","astro:scripts/page.js":"_astro/page.CJRj5HRh.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/workspaces/DataNova/src/pages/404.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"astro:page-load\",async()=>{document.getElementById(\"go-back\").addEventListener(\"click\",()=>{history.back()})});"],["/workspaces/DataNova/src/pages/contact.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"astro:page-load\",()=>{function n(t,a=0){t.style.height=\"auto\",t.style.height=`${t.scrollHeight+a}px`}[\"#input-message\"].forEach(a=>{const e=document.querySelector(a);if(!e)return;const o=e.closest(\".hs-overlay\");if(o){const s=window.HSOverlay.getInstance(o,!0);s&&s.element.on(\"open\",()=>n(e,3))}else n(e,3);e.addEventListener(\"input\",()=>{n(e,3)})})});"],["/workspaces/DataNova/src/pages/downloads/request-quote.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"astro:page-load\",()=>{function n(t,a=0){t.style.height=\"auto\",t.style.height=`${t.scrollHeight+a}px`}[\"#input-message\"].forEach(a=>{const e=document.querySelector(a);if(!e)return;const o=e.closest(\".hs-overlay\");if(o){const s=window.HSOverlay.getInstance(o,!0);s&&s.element.on(\"open\",()=>n(e,3))}else n(e,3);e.addEventListener(\"input\",()=>{n(e,3)})})});"],["/workspaces/DataNova/src/pages/support/articles/[id].astro?astro&type=script&index=0&lang.ts","let n=null;function l(){\"requestIdleCallback\"in window?requestIdleCallback(s):setTimeout(s,200)}function s(){const i=document.querySelectorAll(\"[data-toc-link]\"),c=document.querySelectorAll(\"h2[id]\");!i.length||!c.length||(i.forEach(t=>t.classList.remove(\"text-slate-600\",\"font-medium\")),n=new IntersectionObserver(t=>{let o=null;if(t.forEach(e=>{e.target instanceof HTMLElement&&e.isIntersecting&&(o=e.target)}),o){const e=o.getAttribute(\"id\");e&&document.querySelector(`[data-toc-link][href=\"#${e}\"]`)?.classList.add(\"text-slate-600\",\"font-medium\")}},{threshold:.3,rootMargin:\"-20% 0px -55% 0px\"}),c.forEach(t=>n?.observe(t)))}function r(){n?.disconnect(),n=null}l();document.addEventListener(\"astro:page-load\",l);document.addEventListener(\"astro:before-swap\",r);"],["/workspaces/DataNova/src/pages/support/reference/[id].astro?astro&type=script&index=0&lang.ts","let n=null;function l(){\"requestIdleCallback\"in window?requestIdleCallback(s):setTimeout(s,200)}function s(){const i=document.querySelectorAll(\"[data-toc-link]\"),c=document.querySelectorAll(\"h2[id]\");!i.length||!c.length||(i.forEach(t=>t.classList.remove(\"text-slate-600\",\"font-medium\")),n=new IntersectionObserver(t=>{let o=null;if(t.forEach(e=>{e.target instanceof HTMLElement&&e.isIntersecting&&(o=e.target)}),o){const e=o.getAttribute(\"id\");e&&document.querySelector(`[data-toc-link][href=\"#${e}\"]`)?.classList.add(\"text-slate-600\",\"font-medium\")}},{threshold:.3,rootMargin:\"-20% 0px -55% 0px\"}),c.forEach(t=>n?.observe(t)))}function r(){n?.disconnect(),n=null}l();document.addEventListener(\"astro:page-load\",l);document.addEventListener(\"astro:before-swap\",r);"],["/workspaces/DataNova/src/layout/BaseLayout.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"astro:before-swap\",e=>[...e.newDocument.head.querySelectorAll('link[as=\"font\"]')].forEach(o=>o.remove()));"]],"assets":["/_astro/toolbar.DYsNXJ6Q.webp","/_astro/graph.BH5jW4vV.webp","/_astro/dashboard.CD1B024V.webp","/_astro/chart.B3SdqTC1.webp","/_astro/datanova.e46lFY4_.webp","/_astro/if_cloud.BcQ7DpBg.webp","/_astro/if_planner.CWKxSgGI.webp","/_astro/if_visualizer.DoryUgty.webp","/_astro/dashboard.pRHZdsw2.webp","/_astro/analytics.CuvZabfn.png","/_astro/latency.B6GQ5Pua.webp","/_astro/about.yKmW_Xrd.css","/apple-touch-icon.png","/favicon.ico","/guilloche.svg","/icon-192.png","/icon-512.png","/icon.svg","/manifest.webmanifest","/social.png","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.PKae0Lse.js","/_astro/Navbar.astro_astro_type_script_index_0_lang.DDy9udnV.js","/_astro/_commonjsHelpers.Cpj98o6Y.js","/_astro/client.HW20lDqW.js","/_astro/index.BzouROdb.js","/_astro/index.DpPA5kfL.js","/_astro/keystatic-page.DjSnioq3.js","/_astro/page.CJRj5HRh.js","/_astro/preline.BdFJWp5M.js","/_astro/page.CJRj5HRh.js","/404.html","/about/index.html","/api/feedback","/contact/index.html","/downloads/datanova-core/index.html","/downloads/editions/index.html","/downloads/license-options/index.html","/downloads/request-quote/index.html","/downloads/subscription-licensing/index.html","/platform/index.html","/robots.txt","/support/articles/index.html","/support/knowledge-base/index.html","/support/reference/index.html","/support/sample-spreadsheets/index.html","/support/whitepapers/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"yS11QUKzqSeDLz532EbRRJQ2T8nZp94GXfuOeWYtCGc="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };

if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return r[e]||(a=new Promise(async a=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=a}else importScripts(e),a()})),a.then(()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]})},a=(a,r)=>{Promise.all(a.map(e)).then(e=>r(1===e.length?e[0]:e))},r={require:Promise.resolve(a)};self.define=(a,s,n)=>{r[a]||(r[a]=Promise.resolve().then(()=>{let r={};const i={uri:location.origin+a.slice(1)};return Promise.all(s.map(a=>{switch(a){case"exports":return r;case"module":return i;default:return e(a)}})).then(e=>{const a=n(...e);return r.default||(r.default=a),r})}))}}define("./sw.js",["./workbox-8778d57b"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/1bfc9850.1021e6b86382f6fc798a.js",revision:"xva-VSSmvOrYmX5RJzY0r"},{url:"/_next/static/chunks/7989c093b81d86ddb0abfb342d5bc2e84730435d.602c02e1f2b94e4e381f.js",revision:"xva-VSSmvOrYmX5RJzY0r"},{url:"/_next/static/chunks/abdff2279140a6c2aeab4e16d26643391d1d0504.75ebb8c9099121c29ecf.js",revision:"xva-VSSmvOrYmX5RJzY0r"},{url:"/_next/static/chunks/ee795ea26ef608f7cab6ec075af59b51ddb6285f.1511e031f90c93220cab.js",revision:"xva-VSSmvOrYmX5RJzY0r"},{url:"/_next/static/chunks/framework.cb05d56be993eb6b088a.js",revision:"xva-VSSmvOrYmX5RJzY0r"},{url:"/_next/static/chunks/main-abbbe762ec866bbe1aff.js",revision:"xva-VSSmvOrYmX5RJzY0r"},{url:"/_next/static/chunks/pages/_app-d0fc7b1374342341b155.js",revision:"xva-VSSmvOrYmX5RJzY0r"},{url:"/_next/static/chunks/pages/_error-689173f830b7af3917c3.js",revision:"xva-VSSmvOrYmX5RJzY0r"},{url:"/_next/static/chunks/pages/index-10375961b3a8650eab9a.js",revision:"xva-VSSmvOrYmX5RJzY0r"},{url:"/_next/static/chunks/pages/posts/%5Bid%5D-995ba18d1d709807cd96.js",revision:"xva-VSSmvOrYmX5RJzY0r"},{url:"/_next/static/chunks/pages/posts/404-7fe0bec3320a78ada4b3.js",revision:"xva-VSSmvOrYmX5RJzY0r"},{url:"/_next/static/chunks/pages/resume-140dddfc36593d6434f8.js",revision:"xva-VSSmvOrYmX5RJzY0r"},{url:"/_next/static/chunks/polyfills-83732ebf2ed7f8a1b2c7.js",revision:"xva-VSSmvOrYmX5RJzY0r"},{url:"/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js",revision:"xva-VSSmvOrYmX5RJzY0r"},{url:"/_next/static/css/02adcfbfa740fc8a09a9.css",revision:"xva-VSSmvOrYmX5RJzY0r"},{url:"/_next/static/css/50d7d540e784225d07a5.css",revision:"xva-VSSmvOrYmX5RJzY0r"},{url:"/_next/static/css/56277dbdf1c72afd6a14.css",revision:"xva-VSSmvOrYmX5RJzY0r"},{url:"/_next/static/xva-VSSmvOrYmX5RJzY0r/_buildManifest.js",revision:"xva-VSSmvOrYmX5RJzY0r"},{url:"/_next/static/xva-VSSmvOrYmX5RJzY0r/_ssgManifest.js",revision:"xva-VSSmvOrYmX5RJzY0r"},{url:"/android-icon-144x144.png",revision:"53b28dfe14477fabc6f550a32f1638b1"},{url:"/android-icon-192x192.png",revision:"229665fdda743542993e2a2191f08821"},{url:"/android-icon-36x36.png",revision:"576fcddcbebfc2da7adb53d58e670594"},{url:"/android-icon-48x48.png",revision:"def9994cbd42fea3f0d50f77bf0edfd3"},{url:"/android-icon-72x72.png",revision:"6808e427f4e73c3c335c12f1429a0835"},{url:"/android-icon-96x96.png",revision:"f54340cd2344edf43aec8f07ae537751"},{url:"/apple-icon-114x114.png",revision:"af30dc9cac5e5a1fa429d95beed7152f"},{url:"/apple-icon-120x120.png",revision:"543d0fdff41da2aa29f0a593f004b35f"},{url:"/apple-icon-144x144.png",revision:"53b28dfe14477fabc6f550a32f1638b1"},{url:"/apple-icon-152x152.png",revision:"e72ae54e5dd22e5bd94afdf54aa3e7d7"},{url:"/apple-icon-180x180.png",revision:"cc7f19fb1aa850083dbf928072bac561"},{url:"/apple-icon-57x57.png",revision:"c8088a73015c08c695d199219ec5baff"},{url:"/apple-icon-60x60.png",revision:"bab61fc003714738cbdccbe282a40e46"},{url:"/apple-icon-72x72.png",revision:"6808e427f4e73c3c335c12f1429a0835"},{url:"/apple-icon-76x76.png",revision:"23d6ed16c4715293ac6bb8e8f39c8c4b"},{url:"/apple-icon-precomposed.png",revision:"6d6b8ee56a38da190c23d6f184b47d46"},{url:"/apple-icon.png",revision:"6d6b8ee56a38da190c23d6f184b47d46"},{url:"/favicon-16x16.png",revision:"65eb193a3878459251622a00ca4901e5"},{url:"/favicon-32x32.png",revision:"0e8822a75e3f30a94d2ea580496e12a8"},{url:"/favicon-96x96.png",revision:"f54340cd2344edf43aec8f07ae537751"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/images/atlantis.png",revision:"7c0a23caecd83cb1dadbe1c7c818292e"},{url:"/images/echo.png",revision:"f4ed74f1a4140b2144eef4e8c56a301a"},{url:"/images/iaso.png",revision:"29b99cf1335868c4b1027d3bd4e85c56"},{url:"/images/mercury.png",revision:"41067595e82311242191b32fae07c860"},{url:"/images/profile.jpg",revision:"750cd6eb6cf25817e591a6598940bec7"},{url:"/manifest.json",revision:"30c365b6d264f99907c24d6073dc94cb"},{url:"/ms-icon-144x144.png",revision:"53b28dfe14477fabc6f550a32f1638b1"},{url:"/ms-icon-150x150.png",revision:"c45ca88c5bc673aa7180b5827aae2c00"},{url:"/ms-icon-310x310.png",revision:"6b33b8708df4cc7a371765743268ba9d"},{url:"/ms-icon-512x512.png",revision:"7dbeadebce78a975bfd6aa53ee12a099"},{url:"/ms-icon-70x70.png",revision:"3b520fe53173245d4b6e33b8a2a39ed4"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));

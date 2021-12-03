(()=>{"use strict";var e={191:(e,r,t)=>{t.d(r,{Z:()=>p});var i=t(156),n=t(375),a=t(697),o=t.n(a),c=t(252),_=t(893),s=["children","isExternalLink","isSameTab","to"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,i.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var l=function Link(e){var r=e.children,t=e.isExternalLink,i=e.isSameTab,a=e.to,o=(0,n.Z)(e,s);return t?(0,_.jsx)("a",_objectSpread(_objectSpread({href:a,target:"_blank",rel:"noopener noreferrer"},o),{},{children:r})):i?(0,_.jsx)("a",_objectSpread(_objectSpread({href:a},o),{},{children:r})):(0,_.jsx)(c.rU,_objectSpread(_objectSpread({to:a},o),{},{children:r}))};l.propTypes={children:o().node.isRequired,className:o().string,isExternalLink:o().bool.isRequired,isSameTab:o().bool,to:o().string.isRequired};const p=l},530:(e,r,t)=>{t.d(r,{Z:()=>a});var i=t(391),n=t(294);const a=function useCheckMobileScreen(){var e=(0,n.useState)(window.innerWidth),r=(0,i.Z)(e,2),t=r[0],a=r[1],o=function handleWindowSizeChange(){a(window.innerWidth)};return(0,n.useEffect)((function(){return window.addEventListener("resize",o),function(){window.removeEventListener("resize",o)}}),[]),t<=768}},454:(e,r,t)=>{var i=t(935),n=t(294),a=t(381),o=t(191),c=t(530),_=t(10),s=t(434),l=t(583),p=t(750),u=t(585),d=t(893),b=[{text:"Privacy",path:"privacy",icon:s.CJb},{text:"FAQ",path:"faq",icon:l.g_g},{text:"Support",path:"https://discord.gg/PkfXzyhgTx",external:!0,icon:p.KpZ},{text:"Random",path:"random",icon:u.F0o}];const x=function Navbar(){var e=(0,c.Z)();return(0,d.jsxs)("nav",{className:"flex items-center justify-evenly py-3 bg-gray-900",children:[(0,d.jsx)("div",{className:(0,_.Z)("text-white font-semibold",{flex:e,"space-x-5":!e}),children:b.slice(0,b.length/2).map((function(r){return e?(0,d.jsx)(o.Z,{className:"px-5 py-2 text-lg hover:bg-gray-600 rounded-xl",to:r.path,isExternalLink:!!r.external,children:(0,d.jsx)(r.icon,{})},r.text):(0,d.jsx)(o.Z,{className:"px-10 py-2 text-lg hover:bg-gray-600 rounded-xl",to:r.path,isExternalLink:!!r.external,children:r.text},r.text)}))}),(0,d.jsx)(o.Z,{to:"/",isExternalLink:!1,children:(0,d.jsx)("img",{src:a,alt:"YPN_LOGO",width:e?30:40,height:e?30:40})}),(0,d.jsx)("div",{className:(0,_.Z)("text-white font-semibold",{flex:e,"space-x-5":!e}),children:b.slice(b.length/2,b.length).map((function(r){return e?(0,d.jsx)(o.Z,{className:"px-5 py-2 text-lg hover:bg-gray-600 rounded-xl",to:r.path,isExternalLink:!!r.external,children:(0,d.jsx)(r.icon,{})},r.text):(0,d.jsx)(o.Z,{className:"px-10 py-2 text-lg hover:bg-gray-600 rounded-xl",to:r.path,isExternalLink:!!r.external,children:r.text},r.text)}))})]})};var f=[{title:"About",links:[{label:"Home",to:"/"},{label:"Privacy",to:"privacy"},{label:"faq",to:"faq"}]},{title:"Community",links:[{label:"Support' server",to:"https://discord.gg/PkfXzyhgTx",external:!0},{label:"Invite",to:"https://discord.com/oauth2/authorize?client_id=815662828253347881&scope=bot%20applications.commands&permissions=2684365824",external:!0}]}];const h=function Footer(){return(0,d.jsxs)("div",{className:"flex flex-col justify-around px-10 py-16 bg-ebony-500 lg:flex-row",children:[(0,d.jsxs)("div",{className:"flex flex-col mb-10",children:[(0,d.jsx)("p",{className:"max-w-xs text-conifer text-4xl font-black opacity-95",children:"Imagine having nitro"}),(0,d.jsx)("p",{className:"mt-2 text-white text-lg opacity-90",children:"@YPN Inc."})]}),f.map((function(e){return(0,d.jsxs)("div",{className:"flex flex-col mb-10",children:[(0,d.jsx)("h2",{className:"mb-2 text-conifer text-2xl font-semibold",children:e.title}),(0,d.jsx)("div",{className:"flex flex-col items-start justify-start space-y-2",children:e.links.map((function(e){return(0,d.jsx)(o.Z,{className:"text-white hover:underline text-sm font-medium",isExternalLink:!!e.external,to:e.to,children:e.label},e.label)}))})]},e.title)}))]})};var m=t(252),w=t(990);const v=function Loading(){return(0,d.jsx)("div",{className:"flex items-center justify-center min-h-screen text-white",children:(0,d.jsx)(w.IDg,{size:"100"})})};var g=(0,n.lazy)((function(){return Promise.all([t.e(709),t.e(723)]).then(t.bind(t,179))}));const k=function App(){return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(n.Suspense,{fallback:(0,d.jsx)(v,{}),children:[(0,d.jsxs)("div",{className:"flex flex-col flex-grow",children:[(0,d.jsx)(x,{}),(0,d.jsx)(m.F0,{children:(0,d.jsx)(g,{path:"/"})})]}),(0,d.jsx)(h,{})]})})};i.render((0,d.jsx)(n.StrictMode,{children:(0,d.jsx)(k,{})}),document.getElementById("root"))},381:(e,r,t)=>{e.exports=t.p+"608283b65510fe86b7e7.svg"}},r={};function __webpack_require__(t){var i=r[t];if(void 0!==i)return i.exports;var n=r[t]={exports:{}};return e[t](n,n.exports,__webpack_require__),n.exports}__webpack_require__.m=e,(()=>{var e=[];__webpack_require__.O=(r,t,i,n)=>{if(!t){var a=1/0;for(s=0;s<e.length;s++){for(var[t,i,n]=e[s],o=!0,c=0;c<t.length;c++)(!1&n||a>=n)&&Object.keys(__webpack_require__.O).every((e=>__webpack_require__.O[e](t[c])))?t.splice(c--,1):(o=!1,n<a&&(a=n));if(o){e.splice(s--,1);var _=i();void 0!==_&&(r=_)}}return r}n=n||0;for(var s=e.length;s>0&&e[s-1][2]>n;s--)e[s]=e[s-1];e[s]=[t,i,n]}})(),__webpack_require__.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(r,{a:r}),r},__webpack_require__.d=(e,r)=>{for(var t in r)__webpack_require__.o(r,t)&&!__webpack_require__.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},__webpack_require__.f={},__webpack_require__.e=e=>Promise.all(Object.keys(__webpack_require__.f).reduce(((r,t)=>(__webpack_require__.f[t](e,r),r)),[])),__webpack_require__.u=e=>({709:"964effefb12f8cb5e0d0",723:"f3e61cc0016160a5990e"}[e]+".js"),__webpack_require__.miniCssF=e=>{},__webpack_require__.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),__webpack_require__.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={},r="YPN:";__webpack_require__.l=(t,i,n,a)=>{if(e[t])e[t].push(i);else{var o,c;if(void 0!==n)for(var _=document.getElementsByTagName("script"),s=0;s<_.length;s++){var l=_[s];if(l.getAttribute("src")==t||l.getAttribute("data-webpack")==r+n){o=l;break}}o||(c=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,__webpack_require__.nc&&o.setAttribute("nonce",__webpack_require__.nc),o.setAttribute("data-webpack",r+n),o.src=t),e[t]=[i];var onScriptComplete=(r,i)=>{o.onerror=o.onload=null,clearTimeout(p);var n=e[t];if(delete e[t],o.parentNode&&o.parentNode.removeChild(o),n&&n.forEach((e=>e(i))),r)return r(i)},p=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=onScriptComplete.bind(null,o.onerror),o.onload=onScriptComplete.bind(null,o.onload),c&&document.head.appendChild(o)}}})(),__webpack_require__.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;__webpack_require__.g.importScripts&&(e=__webpack_require__.g.location+"");var r=__webpack_require__.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),__webpack_require__.p=e})(),(()=>{var e={179:0};__webpack_require__.f.j=(r,t)=>{var i=__webpack_require__.o(e,r)?e[r]:void 0;if(0!==i)if(i)t.push(i[2]);else{var n=new Promise(((t,n)=>i=e[r]=[t,n]));t.push(i[2]=n);var a=__webpack_require__.p+__webpack_require__.u(r),o=new Error;__webpack_require__.l(a,(t=>{if(__webpack_require__.o(e,r)&&(0!==(i=e[r])&&(e[r]=void 0),i)){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;o.message="Loading chunk "+r+" failed.\n("+n+": "+a+")",o.name="ChunkLoadError",o.type=n,o.request=a,i[1](o)}}),"chunk-"+r,r)}},__webpack_require__.O.j=r=>0===e[r];var webpackJsonpCallback=(r,t)=>{var i,n,[a,o,c]=t,_=0;for(i in o)__webpack_require__.o(o,i)&&(__webpack_require__.m[i]=o[i]);if(c)var s=c(__webpack_require__);for(r&&r(t);_<a.length;_++)n=a[_],__webpack_require__.o(e,n)&&e[n]&&e[n][0](),e[a[_]]=0;return __webpack_require__.O(s)},r=self.webpackChunkYPN=self.webpackChunkYPN||[];r.forEach(webpackJsonpCallback.bind(null,0)),r.push=webpackJsonpCallback.bind(null,r.push.bind(r))})();var t=__webpack_require__.O(void 0,[973],(()=>__webpack_require__(454)));t=__webpack_require__.O(t)})();
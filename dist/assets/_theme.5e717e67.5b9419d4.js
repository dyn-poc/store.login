import{K as r}from"./index.1ff42c00.js";const n=(...o)=>{const e=globalThis.__vite_pages_use_static_data;return e(...o)},i=({loadedData:o,loadState:e})=>{const t=n();if(console.log("#Theme",t,o,e),e.type==="404")return r("p",{children:"Page not found."});if(e.type==="load-error")return r("p",{children:"Load error!"});if(e.type==="loading")return r("p",{children:"Loading..."});const a=o[e.routePath].main.default;return r(a,{})};export{i as default};
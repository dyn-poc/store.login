import{c as m}from"./InputIcon.964e8a9c.d3fa944d.js";import{q as $,K as o,J as f,Y as b,Q as w,a as v,V as n,N as x,b as k,G as B,n as y,S,t as I,W as g,r as C,z as O,Z as T,d as D,X as A,H as z}from"./index.1ff42c00.js";import"./InputBase.cbbef4d1.0ed61293.js";const G=$(o("path",{d:"M20 9V7c0-1.1-.9-2-2-2h-3c0-1.66-1.34-3-3-3S9 3.34 9 5H6c-1.1 0-2 .9-2 2v2c-1.66 0-3 1.34-3 3s1.34 3 3 3v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4c1.66 0 3-1.34 3-3s-1.34-3-3-3zm-2 10H6V7h12v12zm-9-6c-.83 0-1.5-.67-1.5-1.5S8.17 10 9 10s1.5.67 1.5 1.5S9.83 13 9 13zm7.5-1.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zM8 15h8v2H8v-2z"}),"SmartToyOutlined");function M(t){return z("MuiAppBar",t)}f("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent"]);const N=["className","color","enableColorOnDark","position"],R=t=>{const{color:e,position:r,classes:a}=t,i={root:["root",`color${v(e)}`,`position${v(r)}`]};return A(i,M,a)},u=(t,e)=>`${t==null?void 0:t.replace(")","")}, ${e})`,H=b(w,{name:"MuiAppBar",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,e[`position${v(r.position)}`],e[`color${v(r.color)}`]]}})(({theme:t,ownerState:e})=>{const r=t.palette.mode==="light"?t.palette.grey[100]:t.palette.grey[900];return n({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},e.position==="fixed"&&{position:"fixed",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},e.position==="absolute"&&{position:"absolute",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0},e.position==="sticky"&&{position:"sticky",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0},e.position==="static"&&{position:"static"},e.position==="relative"&&{position:"relative"},!t.vars&&n({},e.color==="default"&&{backgroundColor:r,color:t.palette.getContrastText(r)},e.color&&e.color!=="default"&&e.color!=="inherit"&&e.color!=="transparent"&&{backgroundColor:t.palette[e.color].main,color:t.palette[e.color].contrastText},e.color==="inherit"&&{color:"inherit"},t.palette.mode==="dark"&&!e.enableColorOnDark&&{backgroundColor:null,color:null},e.color==="transparent"&&n({backgroundColor:"transparent",color:"inherit"},t.palette.mode==="dark"&&{backgroundImage:"none"})),t.vars&&n({},e.color==="default"&&{"--AppBar-background":e.enableColorOnDark?t.vars.palette.AppBar.defaultBg:u(t.vars.palette.AppBar.darkBg,t.vars.palette.AppBar.defaultBg),"--AppBar-color":e.enableColorOnDark?t.vars.palette.text.primary:u(t.vars.palette.AppBar.darkColor,t.vars.palette.text.primary)},e.color&&!e.color.match(/^(default|inherit|transparent)$/)&&{"--AppBar-background":e.enableColorOnDark?t.vars.palette[e.color].main:u(t.vars.palette.AppBar.darkBg,t.vars.palette[e.color].main),"--AppBar-color":e.enableColorOnDark?t.vars.palette[e.color].contrastText:u(t.vars.palette.AppBar.darkColor,t.vars.palette[e.color].contrastText)},{backgroundColor:"var(--AppBar-background)",color:e.color==="inherit"?"inherit":"var(--AppBar-color)"},e.color==="transparent"&&{backgroundImage:"none",backgroundColor:"transparent",color:"inherit"}))}),V=x.exports.forwardRef(function(t,e){const r=k({props:t,name:"MuiAppBar"}),{className:a,color:i="primary",enableColorOnDark:s=!1,position:c="fixed"}=r,d=B(r,N),p=n({},r,{color:i,position:c,enableColorOnDark:s}),l=R(p);return o(H,n({square:!0,component:"header",ownerState:p,elevation:4,className:y(l.root,a,c==="fixed"&&"mui-fixed"),ref:e},d))}),W=V;function q(t){return z("MuiToolbar",t)}f("MuiToolbar",["root","gutters","regular","dense"]);const E=["className","component","disableGutters","variant"],F=t=>{const{classes:e,disableGutters:r,variant:a}=t;return A({root:["root",!r&&"gutters",a]},q,e)},L=b("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,!r.disableGutters&&e.gutters,e[r.variant]]}})(({theme:t,ownerState:e})=>n({position:"relative",display:"flex",alignItems:"center"},!e.disableGutters&&{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}},e.variant==="dense"&&{minHeight:48}),({theme:t,ownerState:e})=>e.variant==="regular"&&t.mixins.toolbar),J=x.exports.forwardRef(function(t,e){const r=k({props:t,name:"MuiToolbar"}),{className:a,component:i="div",disableGutters:s=!1,variant:c="regular"}=r,d=B(r,E),p=n({},r,{component:i,disableGutters:s,variant:c}),l=F(p);return o(L,n({as:i,className:y(l.root,a),ref:e,ownerState:p},d))}),K=J,P="/assets/favicon.687c0ed2.png";function Q(t){return t.toStrings().reverse()[0]}const X=({service:t})=>{const[e]=S(t);return g(m.Container,{children:[o(m.Icon,{children:o(G,{})}),o(m.Input,{placeholder:"...",value:Q(e)})]})},_=({authService:t})=>{const[e]=S(t),r=t.send;return o(I,{sx:{flexGrow:1},children:o(W,{color:"transparent",variant:"outlined",position:"fixed",children:g(K,{children:[o(C,{variant:"h5",children:"SSO Login"}),o(O,{sx:{display:{xs:"none",md:"flex"},mr:2},children:o("img",{src:P})}),e.nextEvents.filter(a=>!a.startsWith("done.")&&!a.startsWith("error.")).map(a=>o(U,{state:e,send:r,type:a},a)),o(X,{service:t})]})})})},U=t=>{var e,r;const{state:a,send:i,type:s}=t,c=((r=(e=a.meta)==null?void 0:e.eventPayloads)==null?void 0:r[s])||{},d=T();return o(D,{onClick:()=>{i({...c,type:s})},style:{margin:2},children:o(C,{children:s.split(".").map((p,l,h)=>g("span",{className:`transition-colors py-1 ${l===0&&"pl-2"} ${l===h.length-1&&"pr-2"} ${a.nextEvents.includes(s)?d.palette.secondary.contrastText:d.palette.primary.main}`,children:[p,l!==h.length-1&&"."]},l))})})};export{U as Event,_ as default};

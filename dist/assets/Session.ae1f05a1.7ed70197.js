import{Y as u,V as s,C as W,N as v,b as R,G as A,K as d,n as B,aj as D,W as g,p as x,r as w,ak as S,X as N,al as k,am as f,an as L,R as j,ao as T,ap as V}from"./index.1ff42c00.js";import{m as y}from"./useSelector.3d9e906e.d0f7ea52.js";import{s as M}from"./dividerClasses.fa2f672c.6322bc51.js";const O=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],E=t=>{const{absolute:e,children:i,classes:a,flexItem:c,light:o,orientation:l,textAlign:n,variant:r}=t;return N({root:["root",e&&"absolute",r,o&&"light",l==="vertical"&&"vertical",c&&"flexItem",i&&"withChildren",i&&l==="vertical"&&"withChildrenVertical",n==="right"&&l!=="vertical"&&"textAlignRight",n==="left"&&l!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",l==="vertical"&&"wrapperVertical"]},M,a)},K=u("div",{name:"MuiDivider",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:i}=t;return[e.root,i.absolute&&e.absolute,e[i.variant],i.light&&e.light,i.orientation==="vertical"&&e.vertical,i.flexItem&&e.flexItem,i.children&&e.withChildren,i.children&&i.orientation==="vertical"&&e.withChildrenVertical,i.textAlign==="right"&&i.orientation!=="vertical"&&e.textAlignRight,i.textAlign==="left"&&i.orientation!=="vertical"&&e.textAlignLeft]}})(({theme:t,ownerState:e})=>s({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin"},e.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},e.light&&{borderColor:t.vars?`rgba(${t.vars.palette.dividerChannel} / 0.08)`:W(t.palette.divider,.08)},e.variant==="inset"&&{marginLeft:72},e.variant==="middle"&&e.orientation==="horizontal"&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},e.variant==="middle"&&e.orientation==="vertical"&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},e.orientation==="vertical"&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},e.flexItem&&{alignSelf:"stretch",height:"auto"}),({theme:t,ownerState:e})=>s({},e.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${(t.vars||t).palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}}),({theme:t,ownerState:e})=>s({},e.children&&e.orientation==="vertical"&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${(t.vars||t).palette.divider}`,transform:"translateX(0%)"}}),({ownerState:t})=>s({},t.textAlign==="right"&&t.orientation!=="vertical"&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},t.textAlign==="left"&&t.orientation!=="vertical"&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),X=u("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(t,e)=>{const{ownerState:i}=t;return[e.wrapper,i.orientation==="vertical"&&e.wrapperVertical]}})(({theme:t,ownerState:e})=>s({display:"inline-block",paddingLeft:`calc(${t.spacing(1)} * 1.2)`,paddingRight:`calc(${t.spacing(1)} * 1.2)`},e.orientation==="vertical"&&{paddingTop:`calc(${t.spacing(1)} * 1.2)`,paddingBottom:`calc(${t.spacing(1)} * 1.2)`})),Y=v.exports.forwardRef(function(t,e){const i=R({props:t,name:"MuiDivider"}),{absolute:a=!1,children:c,className:o,component:l=c?"div":"hr",flexItem:n=!1,light:r=!1,orientation:h="horizontal",role:p=l!=="hr"?"separator":void 0,textAlign:$="center",variant:C="fullWidth"}=i,I=A(i,O),m=s({},i,{absolute:a,component:l,flexItem:n,light:r,orientation:h,role:p,textAlign:$,variant:C}),b=E(m);return d(K,s({as:l,className:B(b.root,o),role:p,ref:e,ownerState:m},I,{children:c?d(X,{className:b.wrapper,ownerState:m,children:c}):null}))}),z=Y,G=["component","direction","spacing","divider","children"];function J(t,e){const i=v.exports.Children.toArray(t).filter(Boolean);return i.reduce((a,c,o)=>(a.push(c),o<i.length-1&&a.push(v.exports.cloneElement(e,{key:`separator-${o}`})),a),[])}const q=t=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[t],F=({ownerState:t,theme:e})=>{let i=s({display:"flex",flexDirection:"column"},k({theme:e},f({values:t.direction,breakpoints:e.breakpoints.values}),a=>({flexDirection:a})));if(t.spacing){const a=L(e),c=Object.keys(e.breakpoints.values).reduce((n,r)=>((typeof t.spacing=="object"&&t.spacing[r]!=null||typeof t.direction=="object"&&t.direction[r]!=null)&&(n[r]=!0),n),{}),o=f({values:t.direction,base:c}),l=f({values:t.spacing,base:c});typeof o=="object"&&Object.keys(o).forEach((n,r,h)=>{if(!o[n]){const p=r>0?o[h[r-1]]:"column";o[n]=p}}),i=j(i,k({theme:e},l,(n,r)=>({"& > :not(style) + :not(style)":{margin:0,[`margin${q(r?o[r]:t.direction)}`]:V(a,n)}})))}return i=T(e.breakpoints,i),i},H=u("div",{name:"MuiStack",slot:"Root",overridesResolver:(t,e)=>[e.root]})(F),Q=v.exports.forwardRef(function(t,e){const i=R({props:t,name:"MuiStack"}),a=D(i),{component:c="div",direction:o="column",spacing:l=0,divider:n,children:r}=a,h=A(a,G);return d(H,s({as:c,ownerState:{direction:o,spacing:l},ref:e},h,{children:n?J(r,n):r}))}),U=Q,Z=t=>{var e,i;return(i=(e=t==null?void 0:t.context)==null?void 0:e.token)==null?void 0:i.id_token},_=t=>{var e;return(e=t==null?void 0:t.context)==null?void 0:e.devices};function it({authService:t}){const e=y(t,Z)||{},i=y(t,_)||{};return g(U,{direction:"column",divider:d(z,{orientation:"vertical",flexItem:!0}),spacing:2,sx:{width:"100%"},children:[g(x,{sx:{direction:"row"},children:[d(w,{left:"10",component:"h2",variant:"h6",color:"primary",gutterBottom:!0,children:"Id Token"}),e&&e.details&&d(S,{data:e.details})]}),g(x,{sx:{direction:"row"},children:[d(w,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0,children:"Devices"}),i&&d(S,{data:i})]})]})}export{it as default};

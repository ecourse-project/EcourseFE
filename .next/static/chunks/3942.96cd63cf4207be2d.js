(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3942],{46256:function(e,t,r){"use strict";var n=r(67294),l=r(93967),a=r.n(l),o=r(53124),i=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)0>t.indexOf(n[l])&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(r[n[l]]=e[n[l]]);return r};t.Z=e=>{let{prefixCls:t,className:r,avatar:l,title:u,description:c}=e,s=i(e,["prefixCls","className","avatar","title","description"]),{getPrefixCls:f}=n.useContext(o.E_),p=f("card",t),d=a()(`${p}-meta`,r),m=l?n.createElement("div",{className:`${p}-meta-avatar`},l):null,b=u?n.createElement("div",{className:`${p}-meta-title`},u):null,v=c?n.createElement("div",{className:`${p}-meta-description`},c):null,g=b||v?n.createElement("div",{className:`${p}-meta-detail`},b,v):null;return n.createElement("div",Object.assign({},s,{className:d}),m,g)}},1808:function(e,t,r){"use strict";var n=r(64836).default,l=r(75263).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(r(67294)),o=n(r(93967)),i=n(r(45598)),u=n(r(30339)),c=r(47419);r(13594);var s=r(31929),f=l(r(73757)),p=n(r(32117)),d=n(r(60101)),m=n(r(65964)),b=n(r(15379)),v=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)0>t.indexOf(n[l])&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(r[n[l]]=e[n[l]]);return r};let g=(e,t)=>{if(void 0===t)return t;let r=(t||"").replace(/^\//,"");return Object.keys(e).forEach(t=>{r=r.replace(`:${t}`,e[t])}),r},y=e=>{let t;let{prefixCls:r,separator:n="/",style:l,className:y,rootClassName:O,routes:j,items:x,children:C,itemRender:h,params:S={}}=e,E=v(e,["prefixCls","separator","style","className","rootClassName","routes","items","children","itemRender","params"]),{getPrefixCls:k,direction:$,breadcrumb:_}=a.useContext(s.ConfigContext),I=k("breadcrumb",r),[N,P,w]=(0,d.default)(I),M=(0,b.default)(x,j),T=(0,m.default)(I,h);if(M&&M.length>0){let e=[],r=x||j;t=M.map((t,l)=>{let{path:o,key:i,type:c,menu:s,overlay:d,onClick:m,className:b,separator:v,dropdownProps:y}=t,O=g(S,o);void 0!==O&&e.push(O);let j=null!=i?i:l;if("separator"===c)return a.createElement(p.default,{key:j},v);let x={},C=l===M.length-1;s?x.menu=s:d&&(x.overlay=d);let{href:h}=t;return e.length&&void 0!==O&&(h=`#/${e.join("/")}`),a.createElement(f.InternalBreadcrumbItem,Object.assign({key:j},x,(0,u.default)(t,{data:!0,aria:!0}),{className:b,dropdownProps:y,href:h,separator:C?"":n,onClick:m,prefixCls:I}),T(t,S,r,e,h))})}else if(C){let e=(0,i.default)(C).length;t=(0,i.default)(C).map((t,r)=>t?(0,c.cloneElement)(t,{separator:r===e-1?"":n,key:r}):t)}let X=(0,o.default)(I,null==_?void 0:_.className,{[`${I}-rtl`]:"rtl"===$},y,O,P,w),R=Object.assign(Object.assign({},null==_?void 0:_.style),l);return N(a.createElement("nav",Object.assign({className:X,style:R},E),a.createElement("ol",null,t)))};y.Item=f.default,y.Separator=p.default,t.default=y},73757:function(e,t,r){"use strict";var n=r(64836).default,l=r(75263).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.InternalBreadcrumbItem=void 0;var a=l(r(67294)),o=n(r(5085));r(13594);var i=r(31929),u=n(r(48301)),c=n(r(32117)),s=r(65964),f=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)0>t.indexOf(n[l])&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(r[n[l]]=e[n[l]]);return r};let p=e=>{let{prefixCls:t,separator:r="/",children:n,menu:l,overlay:i,dropdownProps:s,href:p}=e,d=(e=>{if(l||i){let r=Object.assign({},s);if(l){let e=l||{},{items:t}=e,n=f(e,["items"]);r.menu=Object.assign(Object.assign({},n),{items:null==t?void 0:t.map((e,t)=>{var{key:r,title:n,label:l,path:o}=e,i=f(e,["key","title","label","path"]);let u=null!=l?l:n;return o&&(u=a.createElement("a",{href:`${p}${o}`},u)),Object.assign(Object.assign({},i),{key:null!=r?r:t,label:u})})})}else i&&(r.overlay=i);return a.createElement(u.default,Object.assign({placement:"bottom"},r),a.createElement("span",{className:`${t}-overlay-link`},e,a.createElement(o.default,null)))}return e})(n);return null!=d?a.createElement(a.Fragment,null,a.createElement("li",null,d),r&&a.createElement(c.default,null,r)):null};t.InternalBreadcrumbItem=p;let d=e=>{let{prefixCls:t,children:r,href:n}=e,l=f(e,["prefixCls","children","href"]),{getPrefixCls:o}=a.useContext(i.ConfigContext),u=o("breadcrumb",t);return a.createElement(p,Object.assign({},l,{prefixCls:u}),(0,s.renderItem)(u,l,r,n))};d.__ANT_BREADCRUMB_ITEM=!0,t.default=d},32117:function(e,t,r){"use strict";var n=r(75263).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(r(67294)),a=r(31929);let o=e=>{let{children:t}=e,{getPrefixCls:r}=l.useContext(a.ConfigContext),n=r("breadcrumb");return l.createElement("li",{className:`${n}-separator`,"aria-hidden":"true"},""===t?t:t||"/")};o.__ANT_BREADCRUMB_SEPARATOR=!0,t.default=o},36407:function(e,t,r){"use strict";var n=r(64836).default;t.Z=void 0;var l=n(r(1808));t.Z=l.default},60101:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.prepareComponentToken=t.default=void 0;var n=r(54548),l=r(98078),a=r(3184);let o=e=>{let{componentCls:t,iconCls:r,calc:a}=e;return{[t]:Object.assign(Object.assign({},(0,l.resetComponent)(e)),{color:e.itemColor,fontSize:e.fontSize,[r]:{fontSize:e.iconFontSize},ol:{display:"flex",flexWrap:"wrap",margin:0,padding:0,listStyle:"none"},a:Object.assign({color:e.linkColor,transition:`color ${e.motionDurationMid}`,padding:`0 ${(0,n.unit)(e.paddingXXS)}`,borderRadius:e.borderRadiusSM,height:e.fontHeight,display:"inline-block",marginInline:a(e.marginXXS).mul(-1).equal(),"&:hover":{color:e.linkHoverColor,backgroundColor:e.colorBgTextHover}},(0,l.genFocusStyle)(e)),"li:last-child":{color:e.lastItemColor},[`${t}-separator`]:{marginInline:e.separatorMargin,color:e.separatorColor},[`${t}-link`]:{[`
          > ${r} + span,
          > ${r} + a
        `]:{marginInlineStart:e.marginXXS}},[`${t}-overlay-link`]:{borderRadius:e.borderRadiusSM,height:e.fontHeight,display:"inline-block",padding:`0 ${(0,n.unit)(e.paddingXXS)}`,marginInline:a(e.marginXXS).mul(-1).equal(),[`> ${r}`]:{marginInlineStart:e.marginXXS,fontSize:e.fontSizeIcon},"&:hover":{color:e.linkHoverColor,backgroundColor:e.colorBgTextHover,a:{color:e.linkHoverColor}},a:{"&:hover":{backgroundColor:"transparent"}}},[`&${e.componentCls}-rtl`]:{direction:"rtl"}})}},i=e=>({itemColor:e.colorTextDescription,lastItemColor:e.colorText,iconFontSize:e.fontSize,linkColor:e.colorTextDescription,linkHoverColor:e.colorText,separatorColor:e.colorTextDescription,separatorMargin:e.marginXS});t.prepareComponentToken=i,t.default=(0,a.genStyleHooks)("Breadcrumb",e=>{let t=(0,a.mergeToken)(e,{});return o(t)},i)},65964:function(e,t,r){"use strict";var n=r(64836).default,l=r(75263).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return(r,n,l,a,o)=>{if(t)return t(r,n,l,a);let i=function(e,t){if(void 0===e.title||null===e.title)return null;let r=Object.keys(t).join("|");return"object"==typeof e.title?e.title:String(e.title).replace(RegExp(`:(${r})`,"g"),(e,r)=>t[r]||e)}(r,n);return c(e,r,i,o)}},t.renderItem=c;var a=l(r(67294)),o=n(r(93967)),i=n(r(30339)),u=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)0>t.indexOf(n[l])&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(r[n[l]]=e[n[l]]);return r};function c(e,t,r,n){if(null==r)return null;let{className:l,onClick:c}=t,s=u(t,["className","onClick"]),f=Object.assign(Object.assign({},(0,i.default)(s,{data:!0,aria:!0})),{onClick:c});return void 0!==n?a.createElement("a",Object.assign({},f,{className:(0,o.default)(`${e}-link`,l),href:n}),r):a.createElement("span",Object.assign({},f,{className:(0,o.default)(`${e}-link`,l)}),r)}},15379:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return(0,n.useMemo)(()=>e||(t?t.map(a):null),[e,t])};var n=r(67294),l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)0>t.indexOf(n[l])&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(r[n[l]]=e[n[l]]);return r};function a(e){let{breadcrumbName:t,children:r}=e,n=l(e,["breadcrumbName","children"]),a=Object.assign({title:t},n);return r&&(a.menu={items:r.map(e=>{var{breadcrumbName:t}=e;return Object.assign(Object.assign({},l(e,["breadcrumbName"])),{title:t})})}),a}},27561:function(e,t,r){var n=r(67990),l=/^\s+/;e.exports=function(e){return e?e.slice(0,n(e)+1).replace(l,""):e}},54290:function(e,t,r){var n=r(6557);e.exports=function(e){return"function"==typeof e?e:n}},67990:function(e){var t=/\s/;e.exports=function(e){for(var r=e.length;r--&&t.test(e.charAt(r)););return r}},6557:function(e){e.exports=function(e){return e}},33448:function(e,t,r){var n=r(44239),l=r(37005);e.exports=function(e){return"symbol"==typeof e||l(e)&&"[object Symbol]"==n(e)}},98913:function(e,t,r){var n=r(22545),l=r(54290),a=r(40554),o=Math.min;e.exports=function(e,t){if((e=a(e))<1||e>9007199254740991)return[];var r=4294967295,i=o(e,4294967295);t=l(t),e-=4294967295;for(var u=n(i,t);++r<e;)t(r);return u}},18601:function(e,t,r){var n=r(14841),l=1/0;e.exports=function(e){return e?(e=n(e))===l||e===-l?(e<0?-1:1)*17976931348623157e292:e==e?e:0:0===e?e:0}},40554:function(e,t,r){var n=r(18601);e.exports=function(e){var t=n(e),r=t%1;return t==t?r?t-r:t:0}},14841:function(e,t,r){var n=r(27561),l=r(13218),a=r(33448),o=0/0,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(a(e))return o;if(l(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=l(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=n(e);var r=u.test(e);return r||c.test(e)?s(e.slice(2),r?2:8):i.test(e)?o:+e}}}]);
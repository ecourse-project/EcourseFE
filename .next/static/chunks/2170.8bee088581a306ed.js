"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2170],{46256:function(e,t,n){var r=n(67294),l=n(93967),a=n.n(l),i=n(53124),o=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)0>t.indexOf(r[l])&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(n[r[l]]=e[r[l]]);return n};t.Z=e=>{let{prefixCls:t,className:n,avatar:l,title:c,description:s}=e,u=o(e,["prefixCls","className","avatar","title","description"]),{getPrefixCls:d}=r.useContext(i.E_),p=d("card",t),f=a()(`${p}-meta`,n),m=l?r.createElement("div",{className:`${p}-meta-avatar`},l):null,h=c?r.createElement("div",{className:`${p}-meta-title`},c):null,g=s?r.createElement("div",{className:`${p}-meta-description`},s):null,v=h||g?r.createElement("div",{className:`${p}-meta-detail`},h,g):null;return r.createElement("div",Object.assign({},u,{className:f}),m,v)}},1808:function(e,t,n){var r=n(64836).default,l=n(75263).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(67294)),i=r(n(93967)),o=r(n(45598)),c=r(n(30339)),s=n(47419);n(13594);var u=n(31929),d=l(n(73757)),p=r(n(32117)),f=r(n(60101)),m=r(n(65964)),h=r(n(15379)),g=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)0>t.indexOf(r[l])&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(n[r[l]]=e[r[l]]);return n};let v=(e,t)=>{if(void 0===t)return t;let n=(t||"").replace(/^\//,"");return Object.keys(e).forEach(t=>{n=n.replace(`:${t}`,e[t])}),n},b=e=>{let t;let{prefixCls:n,separator:r="/",style:l,className:b,rootClassName:y,routes:O,items:x,children:Z,itemRender:j,params:C={}}=e,w=g(e,["prefixCls","separator","style","className","rootClassName","routes","items","children","itemRender","params"]),{getPrefixCls:S,direction:k,breadcrumb:E}=a.useContext(u.ConfigContext),N=S("breadcrumb",n),[_,P,I]=(0,f.default)(N),$=(0,h.default)(x,O),X=(0,m.default)(N,j);if($&&$.length>0){let e=[],n=x||O;t=$.map((t,l)=>{let{path:i,key:o,type:s,menu:u,overlay:f,onClick:m,className:h,separator:g,dropdownProps:b}=t,y=v(C,i);void 0!==y&&e.push(y);let O=null!=o?o:l;if("separator"===s)return a.createElement(p.default,{key:O},g);let x={},Z=l===$.length-1;u?x.menu=u:f&&(x.overlay=f);let{href:j}=t;return e.length&&void 0!==y&&(j=`#/${e.join("/")}`),a.createElement(d.InternalBreadcrumbItem,Object.assign({key:O},x,(0,c.default)(t,{data:!0,aria:!0}),{className:h,dropdownProps:b,href:j,separator:Z?"":r,onClick:m,prefixCls:N}),X(t,C,n,e,j))})}else if(Z){let e=(0,o.default)(Z).length;t=(0,o.default)(Z).map((t,n)=>t?(0,s.cloneElement)(t,{separator:n===e-1?"":r,key:n}):t)}let B=(0,i.default)(N,null==E?void 0:E.className,{[`${N}-rtl`]:"rtl"===k},b,y,P,I),T=Object.assign(Object.assign({},null==E?void 0:E.style),l);return _(a.createElement("nav",Object.assign({className:B,style:T},w),a.createElement("ol",null,t)))};b.Item=d.default,b.Separator=p.default,t.default=b},73757:function(e,t,n){var r=n(64836).default,l=n(75263).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.InternalBreadcrumbItem=void 0;var a=l(n(67294)),i=r(n(5085));n(13594);var o=n(31929),c=r(n(48301)),s=r(n(32117)),u=n(65964),d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)0>t.indexOf(r[l])&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(n[r[l]]=e[r[l]]);return n};let p=e=>{let{prefixCls:t,separator:n="/",children:r,menu:l,overlay:o,dropdownProps:u,href:p}=e,f=(e=>{if(l||o){let n=Object.assign({},u);if(l){let e=l||{},{items:t}=e,r=d(e,["items"]);n.menu=Object.assign(Object.assign({},r),{items:null==t?void 0:t.map((e,t)=>{var{key:n,title:r,label:l,path:i}=e,o=d(e,["key","title","label","path"]);let c=null!=l?l:r;return i&&(c=a.createElement("a",{href:`${p}${i}`},c)),Object.assign(Object.assign({},o),{key:null!=n?n:t,label:c})})})}else o&&(n.overlay=o);return a.createElement(c.default,Object.assign({placement:"bottom"},n),a.createElement("span",{className:`${t}-overlay-link`},e,a.createElement(i.default,null)))}return e})(r);return null!=f?a.createElement(a.Fragment,null,a.createElement("li",null,f),n&&a.createElement(s.default,null,n)):null};t.InternalBreadcrumbItem=p;let f=e=>{let{prefixCls:t,children:n,href:r}=e,l=d(e,["prefixCls","children","href"]),{getPrefixCls:i}=a.useContext(o.ConfigContext),c=i("breadcrumb",t);return a.createElement(p,Object.assign({},l,{prefixCls:c}),(0,u.renderItem)(c,l,n,r))};f.__ANT_BREADCRUMB_ITEM=!0,t.default=f},32117:function(e,t,n){var r=n(75263).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(n(67294)),a=n(31929);let i=e=>{let{children:t}=e,{getPrefixCls:n}=l.useContext(a.ConfigContext),r=n("breadcrumb");return l.createElement("li",{className:`${r}-separator`,"aria-hidden":"true"},""===t?t:t||"/")};i.__ANT_BREADCRUMB_SEPARATOR=!0,t.default=i},36407:function(e,t,n){var r=n(64836).default;t.Z=void 0;var l=r(n(1808));t.Z=l.default},60101:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.prepareComponentToken=t.default=void 0;var r=n(54548),l=n(98078),a=n(3184);let i=e=>{let{componentCls:t,iconCls:n,calc:a}=e;return{[t]:Object.assign(Object.assign({},(0,l.resetComponent)(e)),{color:e.itemColor,fontSize:e.fontSize,[n]:{fontSize:e.iconFontSize},ol:{display:"flex",flexWrap:"wrap",margin:0,padding:0,listStyle:"none"},a:Object.assign({color:e.linkColor,transition:`color ${e.motionDurationMid}`,padding:`0 ${(0,r.unit)(e.paddingXXS)}`,borderRadius:e.borderRadiusSM,height:e.fontHeight,display:"inline-block",marginInline:a(e.marginXXS).mul(-1).equal(),"&:hover":{color:e.linkHoverColor,backgroundColor:e.colorBgTextHover}},(0,l.genFocusStyle)(e)),"li:last-child":{color:e.lastItemColor},[`${t}-separator`]:{marginInline:e.separatorMargin,color:e.separatorColor},[`${t}-link`]:{[`
          > ${n} + span,
          > ${n} + a
        `]:{marginInlineStart:e.marginXXS}},[`${t}-overlay-link`]:{borderRadius:e.borderRadiusSM,height:e.fontHeight,display:"inline-block",padding:`0 ${(0,r.unit)(e.paddingXXS)}`,marginInline:a(e.marginXXS).mul(-1).equal(),[`> ${n}`]:{marginInlineStart:e.marginXXS,fontSize:e.fontSizeIcon},"&:hover":{color:e.linkHoverColor,backgroundColor:e.colorBgTextHover,a:{color:e.linkHoverColor}},a:{"&:hover":{backgroundColor:"transparent"}}},[`&${e.componentCls}-rtl`]:{direction:"rtl"}})}},o=e=>({itemColor:e.colorTextDescription,lastItemColor:e.colorText,iconFontSize:e.fontSize,linkColor:e.colorTextDescription,linkHoverColor:e.colorText,separatorColor:e.colorTextDescription,separatorMargin:e.marginXS});t.prepareComponentToken=o,t.default=(0,a.genStyleHooks)("Breadcrumb",e=>{let t=(0,a.mergeToken)(e,{});return i(t)},o)},65964:function(e,t,n){var r=n(64836).default,l=n(75263).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return(n,r,l,a,i)=>{if(t)return t(n,r,l,a);let o=function(e,t){if(void 0===e.title||null===e.title)return null;let n=Object.keys(t).join("|");return"object"==typeof e.title?e.title:String(e.title).replace(RegExp(`:(${n})`,"g"),(e,n)=>t[n]||e)}(n,r);return s(e,n,o,i)}},t.renderItem=s;var a=l(n(67294)),i=r(n(93967)),o=r(n(30339)),c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)0>t.indexOf(r[l])&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(n[r[l]]=e[r[l]]);return n};function s(e,t,n,r){if(null==n)return null;let{className:l,onClick:s}=t,u=c(t,["className","onClick"]),d=Object.assign(Object.assign({},(0,o.default)(u,{data:!0,aria:!0})),{onClick:s});return void 0!==r?a.createElement("a",Object.assign({},d,{className:(0,i.default)(`${e}-link`,l),href:r}),n):a.createElement("span",Object.assign({},d,{className:(0,i.default)(`${e}-link`,l)}),n)}},15379:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return(0,r.useMemo)(()=>e||(t?t.map(a):null),[e,t])};var r=n(67294),l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)0>t.indexOf(r[l])&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(n[r[l]]=e[r[l]]);return n};function a(e){let{breadcrumbName:t,children:n}=e,r=l(e,["breadcrumbName","children"]),a=Object.assign({title:t},r);return n&&(a.menu={items:n.map(e=>{var{breadcrumbName:t}=e;return Object.assign(Object.assign({},l(e,["breadcrumbName"])),{title:t})})}),a}},19841:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(82729),l=n(35944),a=n(70302),i=n(51024),o=n(86994),c=n(16829),s=n(46256),u=n(11163),d=n(9844),p=n(70351);function f(){let e=(0,r._)(["\n  .side-item {\n    margin-bottom: 10px;\n  }\n  a {\n    text-decoration: none;\n    font-weight: 600;\n  }\n  .fb-page {\n    .ant-card-body {\n      font-size: 20px;\n      a {\n        color: #0d8bf0 !important;\n      }\n    }\n  }\n  .topic {\n    .topic-item {\n      font-weight: 600;\n      cursor: pointer;\n      padding: 5px;\n    }\n  }\n"]);return f=function(){return e},e}let{Search:m}=i.default,h=c.Z.div(f());function g(e){var t,n;let r=(0,u.useRouter)(),{search:i}=r.query,{homeData:c}=(0,d.Z)(),f=e=>{let t="/search/".concat(e);r.push(t,void 0,{shallow:!0})};return(0,l.BX)(h,{children:[(0,l.tZ)("div",{className:"side-item search-bar",children:(0,l.tZ)(a.default,{title:"T\xecm kiếm",style:{width:300},children:(0,l.tZ)(m,{placeholder:"Nhập để t\xecm",onSearch:f,enterButton:!0,allowClear:!0,value:i})})}),(0,l.tZ)("div",{className:"side-item popular-content"}),(0,l.BX)("div",{className:"side-item topic",children:[(0,l.tZ)(a.default,{title:"Chuy\xean mục",style:{width:300},children:null==c?void 0:null===(t=c.category)||void 0===t?void 0:t.map(e=>(0,l.BX)("div",{className:"topic-item",onClick:()=>f(e),children:[(0,l.tZ)(o.default,{}),e.toLocaleUpperCase()]},e))}),(0,l.tZ)(a.default,{title:"B\xe0i viết mới",style:{width:300},children:null==c?void 0:null===(n=c.new_post)||void 0===n?void 0:n.map(e=>{var t;return(0,l.tZ)("div",{className:"topic-item",onClick:()=>{r.push("".concat(p.Z.POST,"/").concat(e.id))},children:(0,l.tZ)(a.default,{hoverable:!0,style:{width:"100%"},cover:(0,l.tZ)("img",{src:(null==e?void 0:null===(t=e.thumbnail)||void 0===t?void 0:t.image_path)||"",alt:"img",width:200,height:130}),children:(0,l.tZ)(s.Z,{title:null==e?void 0:e.name})})},e.id)})})]})]})}},17595:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(82729),l=n(35944),a=n(91633),i=n(16829),o=n(41664),c=n.n(o),s=n(70351),u=n(33264);function d(){let e=(0,r._)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  min-height: 100%;\n  max-width: ",";\n  min-width: 200px;\n  min-height: 300px;\n  p {\n    margin: 0;\n  }\n  .ant-image {\n    float: left;\n    margin-right: 15px;\n    margin-bottom: 5px;\n    min-height: 150px;\n  }\n  .post-name {\n    font-weight: 700;\n    min-height: ",";\n    word-break: break-all;\n  }\n  .post-sumary {\n    font-style: italic;\n    font-weight: 500;\n    min-height: 80px;\n    /* text-align: left;\n    display: -webkit-box;\n    -webkit-line-clamp: 6;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    color: gray;\n    white-space: normal; */\n  }\n  .author {\n    font-family: 'Montserrat';\n    text-align: left;\n    font-size: 14px;\n    font-weight: 500;\n    font-style: italic;\n  }\n  .post-create {\n    margin: 10px;\n    margin-bottom: 0;\n    text-align: right;\n  }\n  .postItem {\n    .post-detail {\n      display: ",";\n    }\n    width: 100%;\n    img {\n      width: 200px;\n      height: 130px;\n      aspect-ratio: auto 240/135;\n    }\n  }\n  .post-content {\n    width: ",";\n  }\n"]);return d=function(){return e},e}let p=i.Z.div(d(),e=>e.isSearch?"":"210px",e=>(e.isSearch,""),e=>e.isSearch?"flex":"grid",e=>e.isSearch?"100%":"");function f(e){var t,n;let{post:r,isSideBar:i,isSearch:o}=e;return(0,l.tZ)(p,{isSearch:!!o,children:(0,l.tZ)("div",{className:"postItem",children:(0,l.BX)(c(),{href:"".concat(s.Z.POST,"/").concat(r.id),className:"post-detail",children:[(0,l.tZ)(a.Z,{src:null==r?void 0:null===(t=r.thumbnail)||void 0===t?void 0:t.image_path,preview:!1}),(0,l.BX)("div",{className:"post-content",children:[(0,l.tZ)("p",{className:"post-name",children:null==r?void 0:r.name}),(null==r?void 0:r.author)&&(0,l.BX)("div",{className:"author",children:["T\xe1c giả: ",null==r?void 0:r.author]}),(0,l.tZ)("p",{className:"post-sumary",children:(null==r?void 0:r.content_summary.length)?"".concat((null==r?void 0:null===(n=r.content_summary)||void 0===n?void 0:n.slice(0,160))+"..."):""}),(0,l.tZ)("p",{className:"post-create",children:(0,u.q8)(null==r?void 0:r.created)})]})]})})})}},9844:function(e,t,n){var r=n(88767),l=n(84626),a=n(45354);t.Z=()=>{let{data:e,error:t}=(0,r.useQuery)("home",l.Z.getHome,{staleTime:a.ok,keepPreviousData:!0,cacheTime:a.bQ,refetchOnWindowFocus:!1});return{homeData:e,homeError:t}}},90455:function(e,t,n){n.d(t,{Rl:function(){return i},p6:function(){return a}});var r=n(30381),l=n.n(r);let a=e=>l()(e).format("DD/MM/YYYY"),i=e=>{if(!e)return;let t=e.toLocaleLowerCase().split(" "),n="";for(let e of t)n+=e[0].toUpperCase()+e.slice(1)+" ";return n.trim()}},82170:function(e,t,n){n.r(t);var r=n(82729),l=n(35944),a=n(5005),i=n(49031),o=n(70917),c=n(36407),s=n(70302),u=n(74253),d=n(36671),p=n(69843),f=n(5789),m=n(55673),h=n(11163),g=n(67294),v=n(19841),b=n(17595),y=n(84626),O=n(96507),x=n(45354),Z=n(90455),j=n(70351);function C(){let e=(0,r._)(["\n                font-size: 30px !important;\n              "]);return C=function(){return e},e}function w(){let e=(0,r._)(["\n              .ant-card-body {\n                display: grid;\n                grid-template-columns: repeat(3, 1fr);\n                gap: 10px;\n                padding: 12px;\n                &::before {\n                  display: none !important;\n                }\n                .ant-card {\n                  /* flex: 0 0 calc(25% - 20px); */\n                  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n                  &:hover {\n                    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n                  }\n                  transition: all 1s ease;\n                }\n              }\n              .ant-empty {\n                grid-column: 1 / -1;\n              }\n            "]);return w=function(){return e},e}function S(){let e=(0,r._)(["\n              text-align: center;\n            "]);return S=function(){return e},e}t.default=()=>{var e,t,n;let[r,k]=(0,g.useState)(),E=(0,O.W)(),[N,_]=(0,g.useState)(!1),P=(0,h.useRouter)(),[I,$]=(0,g.useState)({page:(null==E?void 0:E.page)||1,limit:x.Ag}),X=async e=>{try{_(!0);let t=await y.Z.listPosts(e.limit,e.page,"ALL"===E.topic?"":E.topic||"",E.header);k(t)}catch(e){console.error(e)}finally{_(!1)}};return(0,g.useEffect)(()=>{$({...I,page:1})},[E.topic]),(0,g.useEffect)(()=>{X(I)},[I,E.header]),(0,l.BX)("div",{children:[(0,l.tZ)(u.Z,{orientation:"left",children:(0,l.BX)(c.Z,{separator:(0,l.tZ)(i.default,{}),children:[(0,l.tZ)(c.Z.Item,{href:j.Z.HOME,children:(0,l.tZ)(a.default,{css:(0,o.iv)(C())})}),(0,l.tZ)(c.Z.Item,{children:E.header}),(0,l.tZ)(c.Z.Item,{href:"",children:(0,Z.Rl)("ALL"===E.topic?"":E.topic||"")})]})}),(0,l.BX)(m.Z,{gutter:16,children:[(0,l.BX)(f.Z,{span:18,children:[(0,l.tZ)("div",{className:"",css:(0,o.iv)(w()),children:(0,l.BX)(s.default,{children:[!!(null==r?void 0:null===(e=r.results)||void 0===e?void 0:e.length)&&(null==r?void 0:null===(t=r.results)||void 0===t?void 0:t.map(e=>(0,l.tZ)(s.default,{children:(0,l.tZ)(b.Z,{post:e})},e.id))),!(null==r?void 0:null===(n=r.results)||void 0===n?void 0:n.length)&&(0,l.tZ)(d.default,{})]})}),(0,l.tZ)("div",{css:(0,o.iv)(S()),children:(0,l.tZ)(p.default,{current:E.page||I.page,pageSize:I.limit,total:(null==r?void 0:r.count)||0,showSizeChanger:!1,hideOnSinglePage:!0,onChange:e=>{$({...I,page:e}),P.push("".concat(j.Z.POST,"?topic=").concat(E.topic,"&header=").concat(E.header,"&page=").concat(e))}})})]}),(0,l.tZ)(f.Z,{span:6,children:(0,l.tZ)(v.Z,{})})]})]})}}}]);
"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3431],{88591:function(t,e,n){n.d(e,{Z:function(){return S}});var i,a,l,c,r=n(82729),o=n(35944),s=n(62443),d=n(18446),u=n.n(d),h=n(41664),m=n.n(h),p=n(67294),f=n(9473),v=n(84626);n(62822);var Z=n(34317),g=n(24519),N=n(90455),A=n(70351),x=n(33264),_=n(70917),T=n(63890),E={src:"/_next/static/media/docDefault.d021c6cb.jpg"},w=n(52284),B=n(59137),y=n(81591);function I(){let t=(0,r._)(["\n        .card-btn {\n          &:hover {\n            border-color: ",";\n            color: ",";\n            letter-spacing: 8px;\n            transition: all 0.5s ease;\n          }\n        }\n\n        .anticon-loading {\n          font-size: 18px;\n          color: ",";\n        }\n      "]);return I=function(){return t},t}function b(){let t=(0,r._)(["\n                max-width: 300px;\n                min-width: 200px;\n                .title {\n                  font-weight: 700;\n                  font-size: 15px;\n                }\n                .heart {\n                  font-size: 40px;\n                  margin-left: 10px;\n                  .anticon {\n                    color: ",";\n                  }\n                  .anticon:hover {\n                    color: red;\n                    cursor: pointer;\n                    transition: all 1s ease;\n                  }\n                }\n              "]);return b=function(){return t},t}(i=l||(l={})).AVAILABLE="TH\xcaM",i.IN_CART="XO\xc1",i.PENDING="ĐANG DUYỆT",i.BOUGHT="Đ\xc3 DUYỆT",(a=c||(c={})).AVAILABLE="#0dcaf0",a.IN_CART="#ed5e68",a.PENDING="#8c8c8c",a.BOUGHT="#23c501";let L=(0,p.memo)(t=>{var e,n;let{document:i,isMyLearn:a,className:r,isSearch:d}=t,[u,h]=(0,p.useState)(l.AVAILABLE),[L,S]=(0,p.useState)(!1),[C,O]=(0,p.useState)(i);(0,f.I0)(),(0,p.useEffect)(()=>{C.sale_status===g.NO.AVAILABLE?h(l.AVAILABLE):C.sale_status===g.NO.IN_CART?h(l.IN_CART):C.sale_status===g.NO.PENDING?h(l.PENDING):C.sale_status===g.NO.BOUGHT&&h(l.BOUGHT)},[C]);let D=async()=>{(0,x.$f)(),S(!0);try{if(C.sale_status===g.NO.AVAILABLE){let t=await v.Z.moveDoc(C.id,Z.vY.LIST,Z.vY.CART);setTimeout(()=>{O(t)},300)}else if(C.sale_status===g.NO.IN_CART){let t=await v.Z.moveDoc(C.id,Z.vY.CART,Z.vY.LIST);setTimeout(()=>{O(t)},300)}}catch(t){console.log("error update cart",t)}finally{setTimeout(()=>{S(!1)},300)}};return(0,p.useEffect)(()=>{O(i)},[i]),(0,o.BX)(y.NP,{css:(0,_.iv)(I(),u===l.AVAILABLE?c.AVAILABLE:c.IN_CART,u===l.AVAILABLE?c.AVAILABLE:c.IN_CART,u===l.AVAILABLE?c.AVAILABLE:c.IN_CART),className:r,children:[(0,o.tZ)("div",{className:"pop-up",children:(0,o.tZ)(s.default,{placement:"right",content:(0,o.BX)("div",{css:(0,_.iv)(b(),C.is_favorite?"red":""),children:[(0,o.tZ)("p",{className:"title",children:i.name}),(0,o.BX)("p",{children:["Cập nhật: ",(0,N.p6)(null==i?void 0:i.modified)]}),(0,o.BX)("p",{children:["Dung lượng: ",null==i?void 0:null===(e=i.file)||void 0===e?void 0:e.file_size," KB"]}),(0,o.tZ)("p",{children:i.description})]}),trigger:"hover",children:(0,o.BX)(m(),{href:"".concat(A.Z.DOCUMENT,"/").concat(i.id),className:"detail",children:[(0,o.tZ)("div",{className:"doc--image",children:(0,o.tZ)("img",{className:"doc-img",src:"".concat((null==i?void 0:null===(n=i.thumbnail)||void 0===n?void 0:n.image_path)||E.src),alt:"doc image."})}),(0,o.BX)("div",{className:"doc_info",children:[(0,o.tZ)("div",{className:"title",children:i.name}),d&&(0,o.BX)("p",{children:["Cập nhật: ",(0,N.p6)(null==i?void 0:i.modified)]}),(null==i?void 0:i.author)&&(0,o.BX)("div",{className:"author",children:["T\xe1c giả: ",null==i?void 0:i.author]}),d&&i.description]})]})})}),(0,o.BX)("div",{children:[(0,o.BX)("div",{className:"contact-us",children:[(0,o.tZ)(m(),{href:w.Z.GMAIL_URL,target:"_blank",children:"Li\xean hệ"}),i.sale_status===g.NO.BOUGHT&&(0,o.tZ)(T.Z,{})]}),!a&&!d&&(0,o.tZ)(B.Z,{className:"card-btn",btnTextColor:"black",btnStyle:"outline",btnSize:"small",btnWidth:"full-w",loading:L,disabled:C.sale_status===g.NO.PENDING||C.sale_status===g.NO.BOUGHT||L,onClick:t=>{t.stopPropagation(),D()},children:u})]})]})},u());var S=L},19841:function(t,e,n){n.d(e,{Z:function(){return v}});var i=n(82729),a=n(35944),l=n(70302),c=n(51024),r=n(86994),o=n(16829),s=n(46256),d=n(11163),u=n(9844),h=n(70351);function m(){let t=(0,i._)(["\n  .side-item {\n    margin-bottom: 10px;\n  }\n  a {\n    text-decoration: none;\n    font-weight: 600;\n  }\n  .fb-page {\n    .ant-card-body {\n      font-size: 20px;\n      a {\n        color: #0d8bf0 !important;\n      }\n    }\n  }\n  .topic {\n    .topic-item {\n      font-weight: 600;\n      cursor: pointer;\n      padding: 5px;\n    }\n  }\n"]);return m=function(){return t},t}let{Search:p}=c.default,f=o.Z.div(m());function v(t){var e,n;let i=(0,d.useRouter)(),{search:c}=i.query,{homeData:o}=(0,u.Z)(),m=t=>{let e="/search/".concat(t);i.push(e,void 0,{shallow:!0})};return(0,a.BX)(f,{children:[(0,a.tZ)("div",{className:"side-item search-bar",children:(0,a.tZ)(l.default,{title:"T\xecm kiếm",style:{width:300},children:(0,a.tZ)(p,{placeholder:"Nhập để t\xecm",onSearch:m,enterButton:!0,allowClear:!0,value:c})})}),(0,a.tZ)("div",{className:"side-item popular-content"}),(0,a.BX)("div",{className:"side-item topic",children:[(0,a.tZ)(l.default,{title:"Chuy\xean mục",style:{width:300},children:null==o?void 0:null===(e=o.category)||void 0===e?void 0:e.map(t=>(0,a.BX)("div",{className:"topic-item",onClick:()=>m(t),children:[(0,a.tZ)(r.default,{}),t.toLocaleUpperCase()]},t))}),(0,a.tZ)(l.default,{title:"B\xe0i viết mới",style:{width:300},children:null==o?void 0:null===(n=o.new_post)||void 0===n?void 0:n.map(t=>{var e;return(0,a.tZ)("div",{className:"topic-item",onClick:()=>{i.push("".concat(h.Z.POST,"/").concat(t.id))},children:(0,a.tZ)(l.default,{hoverable:!0,style:{width:"100%"},cover:(0,a.tZ)("img",{src:(null==t?void 0:null===(e=t.thumbnail)||void 0===e?void 0:e.image_path)||"",alt:"img",width:200,height:130}),children:(0,a.tZ)(s.Z,{title:null==t?void 0:t.name})})},t.id)})})]})]})}},17595:function(t,e,n){n.d(e,{Z:function(){return m}});var i=n(82729),a=n(35944),l=n(91633),c=n(16829),r=n(41664),o=n.n(r),s=n(70351),d=n(33264);function u(){let t=(0,i._)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  min-height: 100%;\n  max-width: ",";\n  min-width: 200px;\n  min-height: 300px;\n  p {\n    margin: 0;\n  }\n  .ant-image {\n    float: left;\n    margin-right: 15px;\n    margin-bottom: 5px;\n    min-height: 150px;\n  }\n  .post-name {\n    font-weight: 700;\n    min-height: ",";\n    word-break: break-all;\n  }\n  .post-sumary {\n    font-style: italic;\n    font-weight: 500;\n    min-height: 80px;\n    /* text-align: left;\n    display: -webkit-box;\n    -webkit-line-clamp: 6;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    color: gray;\n    white-space: normal; */\n  }\n  .author {\n    font-family: 'Montserrat';\n    text-align: left;\n    font-size: 14px;\n    font-weight: 500;\n    font-style: italic;\n  }\n  .post-create {\n    margin: 10px;\n    margin-bottom: 0;\n    text-align: right;\n  }\n  .postItem {\n    .post-detail {\n      display: ",";\n    }\n    width: 100%;\n    img {\n      width: 200px;\n      height: 130px;\n      aspect-ratio: auto 240/135;\n    }\n  }\n  .post-content {\n    width: ",";\n  }\n"]);return u=function(){return t},t}let h=c.Z.div(u(),t=>t.isSearch?"":"210px",t=>(t.isSearch,""),t=>t.isSearch?"flex":"grid",t=>t.isSearch?"100%":"");function m(t){var e,n;let{post:i,isSideBar:c,isSearch:r}=t;return(0,a.tZ)(h,{isSearch:!!r,children:(0,a.tZ)("div",{className:"postItem",children:(0,a.BX)(o(),{href:"".concat(s.Z.POST,"/").concat(i.id),className:"post-detail",children:[(0,a.tZ)(l.Z,{src:null==i?void 0:null===(e=i.thumbnail)||void 0===e?void 0:e.image_path,preview:!1}),(0,a.BX)("div",{className:"post-content",children:[(0,a.tZ)("p",{className:"post-name",children:null==i?void 0:i.name}),(null==i?void 0:i.author)&&(0,a.BX)("div",{className:"author",children:["T\xe1c giả: ",null==i?void 0:i.author]}),(0,a.tZ)("p",{className:"post-sumary",children:(null==i?void 0:i.content_summary.length)?"".concat((null==i?void 0:null===(n=i.content_summary)||void 0===n?void 0:n.slice(0,160))+"..."):""}),(0,a.tZ)("p",{className:"post-create",children:(0,d.q8)(null==i?void 0:i.created)})]})]})})})}},9844:function(t,e,n){var i=n(88767),a=n(84626),l=n(45354);e.Z=()=>{let{data:t,error:e}=(0,i.useQuery)("home",a.Z.getHome,{staleTime:l.ok,keepPreviousData:!0,cacheTime:l.bQ,refetchOnWindowFocus:!1});return{homeData:t,homeError:e}}},23431:function(t,e,n){n.r(e);var i,a,l=n(82729),c=n(35944),r=n(15737),o=n(70917),s=n(70302),d=n(5789),u=n(36671),h=n(55673),m=n(11163),p=n(67294),f=n(50549),v=n(73541),Z=n(88591),g=n(81591),N=n(19841),A=n(17595),x=n(84626),_=n(34317),T=n(70351);function E(){let t=(0,l._)(["\n              margin-bottom: 10px;\n              .title {\n                font-size: 14px;\n                font-weight: 700;\n                text-decoration: underline;\n              }\n              .ant-card-head-title {\n                font-weight: 700;\n              }\n              .ant-card-body {\n                display: grid;\n                grid-template-columns: repeat(1, 1fr);\n              }\n              .ant-card-body::before {\n                display: none;\n              }\n            "]);return E=function(){return t},t}(i=a||(a={})).LIST_DOC="LIST_DOC",i.LIST_COURSE="LIST_COURSE",i.UPDATE_DOC="UPDATE_DOC",i.UPDATE_COURSE="UPDATE_COURSE";let w=()=>{let t=(0,m.useRouter)(),{search:e}=t.query,[n,i]=(0,p.useState)(!1),[a,l]=(0,p.useState)([]),w=async t=>{try{i(!0);let e=await x.Z.searchItems(t);l(e)}catch(t){console.log("error",t)}finally{i(!1)}};return(0,p.useEffect)(()=>{w(e||"")},[e]),(0,c.tZ)("div",{className:"page-container",children:(0,c.BX)(h.Z,{gutter:16,style:{maxWidth:"100%"},children:[(0,c.tZ)(d.Z,{span:18,children:(0,c.tZ)("div",{css:(0,o.iv)(E()),children:(0,c.tZ)(s.default,{title:'Kết quả t\xecm kiếm của "'.concat(e||"",'"'),extra:(0,c.BX)("a",{href:T.Z.HOME,children:[(0,c.tZ)(r.default,{}),"Xem tất cả"]}),children:n?(0,c.tZ)(f.Z,{count:10,height:120}):(null==a?void 0:a.length)?a.map(t=>t.type===_.pE.DOCUMENT?(0,c.tZ)(g.go,{children:(0,c.tZ)(d.Z,{className:"search-doc",children:(0,c.tZ)(Z.Z,{document:t,isSearch:!0})})}):[_.pE.COURSE,_.pE.CLASS].includes(t.type)?(0,c.tZ)(g.go,{children:(0,c.tZ)(d.Z,{className:"search-course",children:(0,c.tZ)(v.Z,{course:t,isSearch:!0})})}):t.type===_.pE.POST?(0,c.tZ)(g.go,{children:(0,c.tZ)(d.Z,{className:"search-course",children:(0,c.tZ)(A.Z,{post:{...t},isSearch:!0})})}):void 0):(0,c.tZ)(u.default,{className:"empty-data",image:u.default.PRESENTED_IMAGE_SIMPLE})})})}),(0,c.tZ)(d.Z,{span:6,children:(0,c.tZ)(N.Z,{})})]})})};e.default=()=>(0,c.tZ)(w,{})}}]);
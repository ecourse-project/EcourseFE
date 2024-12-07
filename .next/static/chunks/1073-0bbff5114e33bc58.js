              ${t}-handler-up-inner,
              ${t}-handler-down-inner
            `]:{marginInlineEnd:0,fontSize:e.handleFontSize}}},[`${t}-handler`]:{height:"50%",overflow:"hidden",color:j,fontWeight:"bold",lineHeight:0,textAlign:"center",cursor:"pointer",borderInlineStart:`${(0,n.unit)(r)} ${a} ${E}`,transition:`all ${g} linear`,"&:active":{background:_},"&:hover":{height:"60%",[`
              ${t}-handler-up-inner,
              ${t}-handler-down-inner
            `]:{color:P}},"&-up-inner, &-down-inner":Object.assign(Object.assign({},(0,u.resetIcon)()),{color:j,transition:`all ${g} linear`,userSelect:"none"})},[`${t}-handler-up`]:{borderStartEndRadius:f},[`${t}-handler-down`]:{borderEndEndRadius:f}},i(e,"lg")),i(e,"sm")),{"&-disabled, &-readonly":{[`${t}-handler-wrap`]:{display:"none"},[`${t}-input`]:{color:"inherit"}},[`
          ${t}-handler-up-disabled,
          ${t}-handler-down-disabled
        `]:{cursor:"not-allowed"},[`
          ${t}-handler-up-disabled:hover &-handler-up-inner,
          ${t}-handler-down-disabled:hover &-handler-down-inner
        `]:{color:M}})}]},O=e=>{let{componentCls:t,paddingBlock:r,paddingInline:c,inputAffixPadding:u,controlWidth:a,borderRadiusLG:f,borderRadiusSM:l,paddingInlineLG:i,paddingInlineSM:p,paddingBlockLG:O,paddingBlockSM:b}=e;return{[`${t}-affix-wrapper`]:Object.assign(Object.assign({[`input${t}-input`]:{padding:`${(0,n.unit)(r)} 0`}},(0,o.genBasicInputStyle)(e)),{position:"relative",display:"inline-flex",width:a,padding:0,paddingInlineStart:c,"&-lg":{borderRadius:f,paddingInlineStart:i,[`input${t}-input`]:{padding:`${(0,n.unit)(O)} 0`}},"&-sm":{borderRadius:l,paddingInlineStart:p,[`input${t}-input`]:{padding:`${(0,n.unit)(b)} 0`}},[`&:not(${t}-disabled):hover`]:{zIndex:1},"&-focused, &:focus":{zIndex:1},[`&-disabled > ${t}-disabled`]:{background:"transparent"},[`> div${t}`]:{width:"100%",border:"none",outline:"none",[`&${t}-focused`]:{boxShadow:"none !important"}},"&::before":{display:"inline-block",width:0,visibility:"hidden",content:'"\\a0"'},[`${t}-handler-wrap`]:{zIndex:2},[t]:{color:"inherit","&-prefix, &-suffix":{display:"flex",flex:"none",alignItems:"center",pointerEvents:"none"},"&-prefix":{marginInlineEnd:u},"&-suffix":{position:"absolute",insetBlockStart:0,insetInlineEnd:0,zIndex:1,height:"100%",marginInlineEnd:c,marginInlineStart:u}}})}};t.default=(0,f.genStyleHooks)("InputNumber",e=>{let t=(0,f.mergeToken)(e,(0,o.initInputToken)(e));return[p(t),O(t),(0,a.genCompactItemStyle)(t)]},l.prepareComponentToken,{unitless:{handleOpacity:!0}})},23487:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.prepareComponentToken=void 0;var n=r(131),o=r(25735);t.prepareComponentToken=e=>{var t;let r=null!==(t=e.handleVisible)&&void 0!==t?t:"auto";return Object.assign(Object.assign({},(0,o.initComponentToken)(e)),{controlWidth:90,handleWidth:e.controlHeightSM-2*e.lineWidth,handleFontSize:e.fontSize/2,handleVisible:r,handleActiveBg:e.colorFillAlter,handleBg:e.colorBgContainer,filledHandleBg:new n.TinyColor(e.colorFillSecondary).onBackground(e.colorBgContainer).toHexString(),handleHoverColor:e.colorPrimary,handleBorderColor:e.colorBorder,handleOpacity:!0===r?1:0})}},41408:function(e,t,r){r.r(t),r.d(t,{default:function(){return F}});var n=r(87462),o=r(4942),c=r(71002),u=r(97685),a=r(45987),f=r(15671),l=r(43144);function i(){return"function"==typeof BigInt}function p(e){return!e&&0!==e&&!Number.isNaN(e)||!String(e).trim()}function O(e){var t=e.trim(),r=t.startsWith("-");r&&(t=t.slice(1)),(t=t.replace(/(\.\d*[^0])0*$/,"$1").replace(/\.0*$/,"").replace(/^0+/,"")).startsWith(".")&&(t="0".concat(t));var n=t||"0",o=n.split("."),c=o[0]||"0",u=o[1]||"0";"0"===c&&"0"===u&&(r=!1);var a=r?"-":"";return{negative:r,negativeStr:a,trimStr:n,integerStr:c,decimalStr:u,fullStr:"".concat(a).concat(n)}}function b(e){var t=String(e);return!Number.isNaN(Number(t))&&t.includes("e")}function s(e){var t=String(e);if(b(e)){var r=Number(t.slice(t.indexOf("e-")+2)),n=t.match(/\.(\d+)/);return null!=n&&n[1]&&(r+=n[1].length),r}return t.includes(".")&&d(t)?t.length-t.indexOf(".")-1:0}function y(e){var t=String(e);if(b(e)){if(e>Number.MAX_SAFE_INTEGER)return String(i()?BigInt(e).toString():Number.MAX_SAFE_INTEGER);if(e<Number.MIN_SAFE_INTEGER)return String(i()?BigInt(e).toString():Number.MIN_SAFE_INTEGER);t=e.toFixed(s(t))}return O(t).fullStr}function d(e){return"number"==typeof e?!Number.isNaN(e):!!e&&(/^\s*-?\d+(\.\d+)?\s*$/.test(e)||/^\s*-?\d+\.\s*$/.test(e)||/^\s*-?\.\d+\s*$/.test(e))}var v=function(){function e(t){if((0,f.Z)(this,e),(0,o.Z)(this,"origin",""),(0,o.Z)(this,"negative",void 0),(0,o.Z)(this,"integer",void 0),(0,o.Z)(this,"decimal",void 0),(0,o.Z)(this,"decimalLen",void 0),(0,o.Z)(this,"empty",void 0),(0,o.Z)(this,"nan",void 0),p(t)){this.empty=!0;return}if(this.origin=String(t),"-"===t||Number.isNaN(t)){this.nan=!0;return}var r=t;if(b(r)&&(r=Number(r)),d(r="string"==typeof r?r:y(r))){var n=O(r);this.negative=n.negative;var c=n.trimStr.split(".");this.integer=BigInt(c[0]);var u=c[1]||"0";this.decimal=BigInt(u),this.decimalLen=u.length}else this.nan=!0}return(0,l.Z)(e,[{key:"getMark",value:function(){return this.negative?"-":""}},{key:"getIntegerStr",value:function(){return this.integer.toString()}},{key:"getDecimalStr",value:function(){return this.decimal.toString().padStart(this.decimalLen,"0")}},{key:"alignDecimal",value:function(e){return BigInt("".concat(this.getMark()).concat(this.getIntegerStr()).concat(this.getDecimalStr().padEnd(e,"0")))}},{key:"negate",value:function(){var t=new e(this.toString());return t.negative=!t.negative,t}},{key:"cal",value:function(t,r,n){var o=Math.max(this.getDecimalStr().length,t.getDecimalStr().length),c=r(this.alignDecimal(o),t.alignDecimal(o)).toString(),u=n(o),a=O(c),f=a.negativeStr,l=a.trimStr,i="".concat(f).concat(l.padStart(u+1,"0"));return new e("".concat(i.slice(0,-u),".").concat(i.slice(-u)))}},{key:"add",value:function(t){if(this.isInvalidate())return new e(t);var r=new e(t);return r.isInvalidate()?this:this.cal(r,function(e,t){return e+t},function(e){return e})}},{key:"multi",value:function(t){var r=new e(t);return this.isInvalidate()||r.isInvalidate()?new e(NaN):this.cal(r,function(e,t){return e*t},function(e){return 2*e})}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return this.nan}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(e){return this.toString()===(null==e?void 0:e.toString())}},{key:"lessEquals",value:function(e){return 0>=this.add(e.negate().toString()).toNumber()}},{key:"toNumber",value:function(){return this.isNaN()?NaN:Number(this.toString())}},{key:"toString",value:function(){var e=!(arguments.length>0)||void 0===arguments[0]||arguments[0];return e?this.isInvalidate()?"":O("".concat(this.getMark()).concat(this.getIntegerStr(),".").concat(this.getDecimalStr())).fullStr:this.origin}}]),e}(),j=function(){function e(t){if((0,f.Z)(this,e),(0,o.Z)(this,"origin",""),(0,o.Z)(this,"number",void 0),(0,o.Z)(this,"empty",void 0),p(t)){this.empty=!0;return}this.origin=String(t),this.number=Number(t)}return(0,l.Z)(e,[{key:"negate",value:function(){return new e(-this.toNumber())}},{key:"add",value:function(t){if(this.isInvalidate())return new e(t);var r=Number(t);if(Number.isNaN(r))return this;var n=this.number+r;if(n>Number.MAX_SAFE_INTEGER)return new e(Number.MAX_SAFE_INTEGER);if(n<Number.MIN_SAFE_INTEGER)return new e(Number.MIN_SAFE_INTEGER);var o=Math.max(s(this.number),s(r));return new e(n.toFixed(o))}},{key:"multi",value:function(t){var r=Number(t);if(this.isInvalidate()||Number.isNaN(r))return new e(NaN);var n=this.number*r;if(n>Number.MAX_SAFE_INTEGER)return new e(Number.MAX_SAFE_INTEGER);if(n<Number.MIN_SAFE_INTEGER)return new e(Number.MIN_SAFE_INTEGER);var o=Math.max(s(this.number),s(r));return new e(n.toFixed(o))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return Number.isNaN(this.number)}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(e){return this.toNumber()===(null==e?void 0:e.toNumber())}},{key:"lessEquals",value:function(e){return 0>=this.add(e.negate().toString()).toNumber()}},{key:"toNumber",value:function(){return this.number}},{key:"toString",value:function(){var e=!(arguments.length>0)||void 0===arguments[0]||arguments[0];return e?this.isInvalidate()?"":y(this.number):this.origin}}]),e}();function g(e){return i()?new v(e):new j(e)}function P(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(""===e)return"";var o=O(e),c=o.negativeStr,u=o.integerStr,a=o.decimalStr,f="".concat(t).concat(a),l="".concat(c).concat(u);if(r>=0){var i=Number(a[r]);return i>=5&&!n?P(g(e).add("".concat(c,"0.").concat("0".repeat(r)).concat(10-i)).toString(),t,r,n):0===r?l:"".concat(l).concat(t).concat(a.padEnd(r,"0").slice(0,r))}return".0"===f?l:"".concat(l).concat(f)}var w=r(93967),h=r.n(w),m=r(67656),_=r(8410),M=r(42550),D=r(67294),k=r(80334),S=r(31131),z=function(){var e=(0,D.useState)(!1),t=(0,u.Z)(e,2),r=t[0],n=t[1];return(0,_.Z)(function(){n((0,S.Z)())},[]),r},E=r(75164);function W(e){var t=e.prefixCls,r=e.upNode,c=e.downNode,u=e.upDisabled,a=e.downDisabled,f=e.onStep,l=D.useRef(),i=D.useRef([]),p=D.useRef();p.current=f;var O=function(){clearTimeout(l.current)},b=function(e,t){e.preventDefault(),O(),p.current(t),l.current=setTimeout(function e(){p.current(t),l.current=setTimeout(e,200)},600)};if(D.useEffect(function(){return function(){O(),i.current.forEach(function(e){return E.Z.cancel(e)})}},[]),z())return null;var s="".concat(t,"-handler"),y=h()(s,"".concat(s,"-up"),(0,o.Z)({},"".concat(s,"-up-disabled"),u)),d=h()(s,"".concat(s,"-down"),(0,o.Z)({},"".concat(s,"-down-disabled"),a)),v=function(){return i.current.push((0,E.Z)(O))},j={unselectable:"on",role:"button",onMouseUp:v,onMouseLeave:v};return D.createElement("div",{className:"".concat(s,"-wrap")},D.createElement("span",(0,n.Z)({},j,{onMouseDown:function(e){b(e,!0)},"aria-label":"Increase Value","aria-disabled":u,className:y}),r||D.createElement("span",{unselectable:"on",className:"".concat(t,"-handler-up-inner")})),D.createElement("span",(0,n.Z)({},j,{onMouseDown:function(e){b(e,!1)},"aria-label":"Decrease Value","aria-disabled":a,className:d}),c||D.createElement("span",{unselectable:"on",className:"".concat(t,"-handler-down-inner")})))}function H(e){var t="number"==typeof e?y(e):O(e).fullStr;return t.includes(".")?O(t.replace(/(\d)\.(\d)/g,"$1$2.")).fullStr:e+"0"}var V=r(87887),L=function(){var e=(0,D.useRef)(0),t=function(){E.Z.cancel(e.current)};return(0,D.useEffect)(function(){return t},[]),function(r){t(),e.current=(0,E.Z)(function(){r()})}},x=["prefixCls","className","style","min","max","step","defaultValue","value","disabled","readOnly","upHandler","downHandler","keyboard","changeOnWheel","controls","classNames","stringMode","parser","formatter","precision","decimalSeparator","onChange","onInput","onPressEnter","onStep","changeOnBlur","domRef"],R=["disabled","style","prefixCls","value","prefix","suffix","addonBefore","addonAfter","className","classNames"],B=function(e,t){return e||t.isEmpty()?t.toString():t.toNumber()},C=function(e){var t=g(e);return t.isInvalidate()?null:t},T=D.forwardRef(function(e,t){var r,f,l=e.prefixCls,i=e.className,p=e.style,O=e.min,b=e.max,v=e.step,j=void 0===v?1:v,w=e.defaultValue,m=e.value,S=e.disabled,z=e.readOnly,E=e.upHandler,V=e.downHandler,R=e.keyboard,T=e.changeOnWheel,F=void 0!==T&&T,A=e.controls,q=void 0===A||A,N=(e.classNames,e.stringMode),I=e.parser,$=e.formatter,Z=e.precision,U=e.decimalSeparator,G=e.onChange,Q=e.onInput,X=e.onPressEnter,Y=e.onStep,K=e.changeOnBlur,J=void 0===K||K,ee=e.domRef,et=(0,a.Z)(e,x),er="".concat(l,"-input"),en=D.useRef(null),eo=D.useState(!1),ec=(0,u.Z)(eo,2),eu=ec[0],ea=ec[1],ef=D.useRef(!1),el=D.useRef(!1),ei=D.useRef(!1),ep=D.useState(function(){return g(null!=m?m:w)}),eO=(0,u.Z)(ep,2),eb=eO[0],es=eO[1],ey=D.useCallback(function(e,t){return t?void 0:Z>=0?Z:Math.max(s(e),s(j))},[Z,j]),ed=D.useCallback(function(e){var t=String(e);if(I)return I(t);var r=t;return U&&(r=r.replace(U,".")),r.replace(/[^\w.-]+/g,"")},[I,U]),ev=D.useRef(""),ej=D.useCallback(function(e,t){if($)return $(e,{userTyping:t,input:String(ev.current)});var r="number"==typeof e?y(e):e;if(!t){var n=ey(r,t);d(r)&&(U||n>=0)&&(r=P(r,U||".",n))}return r},[$,ey,U]),eg=D.useState(function(){var e=null!=w?w:m;return eb.isInvalidate()&&["string","number"].includes((0,c.Z)(e))?Number.isNaN(e)?"":e:ej(eb.toString(),!1)}),eP=(0,u.Z)(eg,2),ew=eP[0],eh=eP[1];function em(e,t){eh(ej(e.isInvalidate()?e.toString(!1):e.toString(!t),t))}ev.current=ew;var e_=D.useMemo(function(){return C(b)},[b,Z]),eM=D.useMemo(function(){return C(O)},[O,Z]),eD=D.useMemo(function(){return!(!e_||!eb||eb.isInvalidate())&&e_.lessEquals(eb)},[e_,eb]),ek=D.useMemo(function(){return!(!eM||!eb||eb.isInvalidate())&&eb.lessEquals(eM)},[eM,eb]),eS=(r=en.current,f=(0,D.useRef)(null),[function(){try{var e=r.selectionStart,t=r.selectionEnd,n=r.value,o=n.substring(0,e),c=n.substring(t);f.current={start:e,end:t,value:n,beforeTxt:o,afterTxt:c}}catch(e){}},function(){if(r&&f.current&&eu)try{var e=r.value,t=f.current,n=t.beforeTxt,o=t.afterTxt,c=t.start,u=e.length;if(e.endsWith(o))u=e.length-f.current.afterTxt.length;else if(e.startsWith(n))u=n.length;else{var a=n[c-1],l=e.indexOf(a,c-1);-1!==l&&(u=l+1)}r.setSelectionRange(u,u)}catch(e){(0,k.ZP)(!1,"Something warning of cursor restore. Please fire issue about this: ".concat(e.message))}}]),ez=(0,u.Z)(eS,2),eE=ez[0],eW=ez[1],eH=function(e){return e_&&!e.lessEquals(e_)?e_:eM&&!eM.lessEquals(e)?eM:null},eV=function(e){return!eH(e)},eL=function(e,t){var r=e,n=eV(r)||r.isEmpty();if(r.isEmpty()||t||(r=eH(r)||r,n=!0),!z&&!S&&n){var o,c=r.toString(),u=ey(c,t);return u>=0&&!eV(r=g(P(c,".",u)))&&(r=g(P(c,".",u,!0))),r.equals(eb)||(o=r,void 0===m&&es(o),null==G||G(r.isEmpty()?null:B(N,r)),void 0===m&&em(r,t)),r}return eb},ex=L(),eR=function e(t){if(eE(),ev.current=t,eh(t),!el.current){var r=g(ed(t));r.isNaN()||eL(r,!0)}null==Q||Q(t),ex(function(){var r=t;I||(r=t.replace(/。/g,".")),r!==t&&e(r)})},eB=function(e){if((!e||!eD)&&(e||!ek)){ef.current=!1;var t,r=g(ei.current?H(j):j);e||(r=r.negate());var n=eL((eb||g(0)).add(r.toString()),!1);null==Y||Y(B(N,n),{offset:ei.current?H(j):j,type:e?"up":"down"}),null===(t=en.current)||void 0===t||t.focus()}},eC=function(e){var t,r=g(ed(ew));t=r.isNaN()?eL(eb,e):eL(r,e),void 0!==m?em(eb,!1):t.isNaN()||em(t,!1)};return D.useEffect(function(){if(F&&eu){var e=function(e){eB(e.deltaY<0),e.preventDefault()},t=en.current;if(t)return t.addEventListener("wheel",e,{passive:!1}),function(){return t.removeEventListener("wheel",e)}}}),(0,_.o)(function(){eb.isInvalidate()||em(eb,!1)},[Z,$]),(0,_.o)(function(){var e=g(m);es(e);var t=g(ed(ew));e.equals(t)&&ef.current&&!$||em(e,ef.current)},[m]),(0,_.o)(function(){$&&eW()},[ew]),D.createElement("div",{ref:ee,className:h()(l,i,(0,o.Z)((0,o.Z)((0,o.Z)((0,o.Z)((0,o.Z)({},"".concat(l,"-focused"),eu),"".concat(l,"-disabled"),S),"".concat(l,"-readonly"),z),"".concat(l,"-not-a-number"),eb.isNaN()),"".concat(l,"-out-of-range"),!eb.isInvalidate()&&!eV(eb))),style:p,onFocus:function(){ea(!0)},onBlur:function(){J&&eC(!1),ea(!1),ef.current=!1},onKeyDown:function(e){var t=e.key,r=e.shiftKey;ef.current=!0,ei.current=r,"Enter"===t&&(el.current||(ef.current=!1),eC(!1),null==X||X(e)),!1!==R&&!el.current&&["Up","ArrowUp","Down","ArrowDown"].includes(t)&&(eB("Up"===t||"ArrowUp"===t),e.preventDefault())},onKeyUp:function(){ef.current=!1,ei.current=!1},onCompositionStart:function(){el.current=!0},onCompositionEnd:function(){el.current=!1,eR(en.current.value)},onBeforeInput:function(){ef.current=!0}},q&&D.createElement(W,{prefixCls:l,upNode:E,downNode:V,upDisabled:eD,downDisabled:ek,onStep:eB}),D.createElement("div",{className:"".concat(er,"-wrap")},D.createElement("input",(0,n.Z)({autoComplete:"off",role:"spinbutton","aria-valuemin":O,"aria-valuemax":b,"aria-valuenow":eb.isInvalidate()?null:eb.toString(),step:j},et,{ref:(0,M.sQ)(en,t),className:er,value:ew,onChange:function(e){eR(e.target.value)},disabled:S,readOnly:z}))))}),F=D.forwardRef(function(e,t){var r=e.disabled,o=e.style,c=e.prefixCls,u=void 0===c?"rc-input-number":c,f=e.value,l=e.prefix,i=e.suffix,p=e.addonBefore,O=e.addonAfter,b=e.className,s=e.classNames,y=(0,a.Z)(e,R),d=D.useRef(null),v=D.useRef(null),j=D.useRef(null);return D.useImperativeHandle(t,function(){var e,t;return e=j.current,t={nativeElement:d.current.nativeElement||v.current},"undefined"!=typeof Proxy&&e?new Proxy(e,{get:function(e,r){if(t[r])return t[r];var n=e[r];return"function"==typeof n?n.bind(e):n}}):e}),D.createElement(m.BaseInput,{className:b,triggerFocus:function(e){j.current&&(0,V.nH)(j.current,e)},prefixCls:u,value:f,disabled:r,style:o,prefix:l,suffix:i,addonAfter:O,addonBefore:p,classNames:s,components:{affixWrapper:"div",groupWrapper:"div",wrapper:"div",groupAddon:"div"},ref:d},D.createElement(T,(0,n.Z)({prefixCls:u,disabled:r,ref:j,domRef:v,className:null==s?void 0:s.input},y)))})}}]);
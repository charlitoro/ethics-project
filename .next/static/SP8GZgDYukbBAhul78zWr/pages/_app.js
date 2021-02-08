/*! For license information please see _app.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/0+H":function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=r(n("q1tI")),o=n("lwAK");function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,a=void 0!==r&&r,o=t.hasQuery;return n||a&&(void 0!==o&&o)}e.isInAmpMode=i,e.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))}},0:function(t,e,n){n("paUU"),t.exports=n("nOHt")},"5fIB":function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},"8Bbg":function(t,e,n){t.exports=n("B5Ud")},"8Kt/":function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=r(n("q1tI")),o=r(n("Xuae")),i=n("lwAK"),c=n("FYa8"),u=n("/0+H");function s(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[a.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function l(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===a.default.Fragment?t.concat(a.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}e.defaultHead=s;var f=["name","httpEquiv","charSet","itemProp"];function p(t,e){return t.reduce((function(t,e){var n=a.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(l,[]).reverse().concat(s(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var i=a.key.slice(a.key.indexOf("$")+1);t.has(i)?o=!1:t.add(i)}switch(a.type){case"title":case"base":e.has(a.type)?o=!1:e.add(a.type);break;case"meta":for(var c=0,u=f.length;c<u;c++){var s=f[c];if(a.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?o=!1:n.add(s);else{var l=a.props[s],p=r[s]||new Set;p.has(l)?o=!1:(p.add(l),r[s]=p)}}}return o}}()).reverse().map((function(t,e){var n=t.key||e;return a.default.cloneElement(t,{key:n})}))}var d=o.default();function m(t){var e=t.children;return a.default.createElement(i.AmpStateContext.Consumer,null,(function(t){return a.default.createElement(c.HeadManagerContext.Consumer,null,(function(n){return a.default.createElement(d,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:u.isInAmpMode(t)},e)}))}))}m.rewind=d.rewind,e.default=m},B5Ud:function(t,e,n){"use strict";var r=n("/GRZ"),a=n("i2R6"),o=n("48fX"),i=n("tCBg"),c=n("T0f4"),u=n("vJKn");function s(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return i(this,n)}}var l=n("AroE");e.__esModule=!0,e.Container=function(t){0;return t.children},e.createUrl=v,e.default=void 0;var f=l(n("q1tI")),p=n("g/15");function d(t){var e,n,r;return u.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e=t.Component,n=t.ctx,a.next=3,u.awrap((0,p.loadGetInitialProps)(e,n));case 3:return r=a.sent,a.abrupt("return",{pageProps:r});case 5:case"end":return a.stop()}}),null,null,null,Promise)}e.AppInitialProps=p.AppInitialProps;var m=function(t){o(n,t);var e=s(n);function n(){return r(this,n),e.apply(this,arguments)}return a(n,[{key:"componentDidCatch",value:function(t,e){throw t}},{key:"render",value:function(){var t=this.props,e=t.router,n=t.Component,r=t.pageProps,a=t.__N_SSG,o=t.__N_SSP;return f.default.createElement(n,Object.assign({},r,a||o?{}:{url:v(e)}))}}]),n}(f.default.Component);function v(t){var e=t.pathname,n=t.asPath,r=t.query;return{get query(){return r},get pathname(){return e},get asPath(){return n},back:function(){t.back()},push:function(e,n){return t.push(e,n)},pushTo:function(e,n){var r=n?e:"",a=n||e;return t.push(r,a)},replace:function(e,n){return t.replace(e,n)},replaceTo:function(e,n){var r=n?e:"",a=n||e;return t.replace(r,a)}}}e.default=m,m.origGetInitialProps=d,m.getInitialProps=d},FYa8:function(t,e,n){"use strict";var r=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var a=r(n("q1tI"));e.HeadManagerContext=a.createContext(null)},Ji7U:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("s4An");function a(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Object(r.a)(t,e)}},Xuae:function(t,e,n){"use strict";var r=n("/GRZ"),a=n("i2R6"),o=n("qXWd"),i=n("48fX"),c=n("tCBg"),u=n("T0f4"),s=n("mPvQ");function l(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var a=u(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return c(this,n)}}Object.defineProperty(e,"__esModule",{value:!0});var f=n("q1tI"),p=!1;e.default=function(){var t,e=new Set;function n(n){t=n.props.reduceComponentsToState(s(e),n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return(function(c){i(s,c);var u=l(s);function s(t){var a;return r(this,s),a=u.call(this,t),p&&(e.add(o(a)),n(o(a))),a}return a(s,[{key:"componentDidMount",value:function(){e.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),n(this)}},{key:"render",value:function(){return null}}],[{key:"rewind",value:function(){var n=t;return t=void 0,e.clear(),n}}]),s}(f.Component))}},YNMu:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return I}));var r=n("o0o1"),a=n.n(r),o=n("1OyB"),i=n("vuIU"),c=n("Ji7U"),u=n("md7G"),s=n("foSv"),l=n("q1tI"),f=n.n(l),p=n("i8i4"),d=n.n(p),m=n("8Bbg"),v=n.n(m),h=n("8Kt/"),y=n.n(h),b=n("nOHt"),g=n.n(b),O=n("rePB"),w=n("R/WZ"),x=n("iae6"),k=n("eDSW"),P=f.a.createElement;function j(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var _=Object(w.a)({progress:{color:k.i,width:"6rem !important",height:"6rem !important"},wrapperDiv:{margin:"100px auto",padding:"0px",maxWidth:"360px",textAlign:"center",position:"relative",zIndex:"9999",top:"0"},iconWrapper:{display:"block"},title:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?j(Object(n),!0).forEach((function(e){Object(O.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},k.m,{color:"#FFFFFF"})});function S(t){var e=_();return P("div",null,P("div",{className:e.wrapperDiv},P("div",{className:e.iconWrapper},P(x.a,{className:e.progress})),P("h4",{className:e.title},"Loading page contents for: ",t.path)))}n("qAP/");var C=f.a.createElement;function D(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(s.a)(t);if(e){var a=Object(s.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(u.a)(this,n)}}g.a.events.on("routeChangeStart",(function(t){console.log("Loading: ".concat(t)),document.body.classList.add("body-page-transition"),d.a.render(C(S,{path:t}),document.getElementById("page-transition"))})),g.a.events.on("routeChangeComplete",(function(){d.a.unmountComponentAtNode(document.getElementById("page-transition")),document.body.classList.remove("body-page-transition")})),g.a.events.on("routeChangeError",(function(){d.a.unmountComponentAtNode(document.getElementById("page-transition")),document.body.classList.remove("body-page-transition")}));var I=function(t){Object(c.a)(n,t);var e=D(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=document.createComment("\n\n=========================================================\n* NextJS Material Kit v1.1.0 based on Material Kit Free - v2.0.2 (Bootstrap 4.0.0 Final Edition) and Material Kit React v1.8.0\n=========================================================\n\n* Product Page: https://www.creative-tim.com/product/nextjs-material-kit\n* Copyright 2020 Creative Tim (https://www.creative-tim.com)\n* Licensed under MIT (https://github.com/creativetimofficial/nextjs-material-kit/blob/master/LICENSE.md)\n\n* Coded by Creative Tim\n\n=========================================================\n\n* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\n");document.insertBefore(t,document.documentElement)}},{key:"render",value:function(){var t=this.props,e=t.Component,n=t.pageProps;return C(f.a.Fragment,null,C(y.a,null,C("title",null,"Ley 843 Ingenieria")),C(e,n))}}],[{key:"getInitialProps",value:function(t){var e,n,r;return a.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(e=t.Component,t.router,n=t.ctx,r={},!e.getInitialProps){o.next=6;break}return o.next=5,a.a.awrap(e.getInitialProps(n));case 5:r=o.sent;case 6:return o.abrupt("return",{pageProps:r});case 7:case"end":return o.stop()}}),null,null,null,Promise)}}]),n}(v.a)},foSv:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return r}))},iae6:function(t,e,n){"use strict";var r=n("wx14"),a=n("Ff2n"),o=n("q1tI"),i=(n("17x9"),n("iuhU")),c=n("H2TA"),u=n("NqtD");function s(t){var e,n,r;return e=t,n=0,r=1,t=(Math.min(Math.max(n,e),r)-n)/(r-n),t=(t-=1)*t*t+1}var l=o.forwardRef((function(t,e){var n,c=t.classes,l=t.className,f=t.color,p=void 0===f?"primary":f,d=t.disableShrink,m=void 0!==d&&d,v=t.size,h=void 0===v?40:v,y=t.style,b=t.thickness,g=void 0===b?3.6:b,O=t.value,w=void 0===O?0:O,x=t.variant,k=void 0===x?"indeterminate":x,P=Object(a.a)(t,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),j={},_={},S={};if("determinate"===k||"static"===k){var C=2*Math.PI*((44-g)/2);j.strokeDasharray=C.toFixed(3),S["aria-valuenow"]=Math.round(w),"static"===k?(j.strokeDashoffset="".concat(((100-w)/100*C).toFixed(3),"px"),_.transform="rotate(-90deg)"):(j.strokeDashoffset="".concat((n=(100-w)/100,n*n*C).toFixed(3),"px"),_.transform="rotate(".concat((270*s(w/70)).toFixed(3),"deg)"))}return(o.createElement("div",Object(r.a)({className:Object(i.a)(c.root,l,"inherit"!==p&&c["color".concat(Object(u.a)(p))],{indeterminate:c.indeterminate,static:c.static}[k]),style:Object(r.a)(Object(r.a)({width:h,height:h},_),y),ref:e,role:"progressbar"},S,P),o.createElement("svg",{className:c.svg,viewBox:"".concat(22," ").concat(22," ").concat(44," ").concat(44)},o.createElement("circle",{className:Object(i.a)(c.circle,m&&c.circleDisableShrink,{indeterminate:c.circleIndeterminate,static:c.circleStatic}[k]),style:j,cx:44,cy:44,r:(44-g)/2,fill:"none",strokeWidth:g}))))}));e.a=Object(c.a)((function(t){return{root:{display:"inline-block"},static:{transition:t.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},colorPrimary:{color:t.palette.primary.main},colorSecondary:{color:t.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:t.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},"@keyframes circular-rotate":{"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}}),{name:"MuiCircularProgress",flip:!1})(l)},kG2m:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},lwAK:function(t,e,n){"use strict";var r=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var a=r(n("q1tI"));e.AmpStateContext=a.createContext({})},mPvQ:function(t,e,n){var r=n("5fIB"),a=n("rlHP"),o=n("kG2m");t.exports=function(t){return r(t)||a(t)||o()}},md7G:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("U8pU"),a=n("JX7q");function o(t,e){return!e||"object"!==Object(r.a)(e)&&"function"!==typeof e?Object(a.a)(t):e}},o0o1:function(t,e,n){t.exports=n("ls82")},paUU:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("YNMu")}])},rlHP:function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}}},[[0,0,2,1,3,16]]]);
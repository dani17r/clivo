import{m as St,Q as jt,a as Ot,b as Et,c as Tt,d as Lt}from"./dark-Bb1-akLc.js";import{c as wt,h as kt,o as mt,T as Mt,r as lt,a as xt,s as bt,g as zt,b as Ct,e as gt,f as $,i as dt,w as nt,j,n as it,u as M,k as I,l as ft,F as ot,m as st,p as At,q as C,Q as vt,t as W,v as $t,x as Nt,y as qt,z as yt}from"./index-Cwexi9cs.js";import{s as Dt}from"./super-Do5m-1RW.js";import{g as Pt}from"./index-DaYL4gH5.js";import{u as Ht}from"./vue-i18n.runtime-BwMtLJpk.js";import"./use-quasar-DCYiJMqq.js";const Qt=wt({name:"QSpace",setup(){const D=kt("div",{class:"q-space"});return()=>D}}),Bt=wt({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(D,{slots:F,emit:h}){let s=!1,o,e,i=null,d=null,p,n;function c(){o&&o(),o=null,s=!1,i!==null&&(clearTimeout(i),i=null),d!==null&&(clearTimeout(d),d=null),e!==void 0&&e.removeEventListener("transitionend",p),p=null}function a(l,b,y){b!==void 0&&(l.style.height=`${b}px`),l.style.transition=`height ${D.duration}ms cubic-bezier(.25, .8, .50, 1)`,s=!0,o=y}function m(l,b){l.style.overflowY=null,l.style.height=null,l.style.transition=null,c(),b!==n&&h(b)}function f(l,b){let y=0;e=l,s===!0?(c(),y=l.offsetHeight===l.scrollHeight?0:void 0):(n="hide",l.style.overflowY="hidden"),a(l,y,b),i=setTimeout(()=>{i=null,l.style.height=`${l.scrollHeight}px`,p=L=>{d=null,(Object(L)!==L||L.target===l)&&m(l,"show")},l.addEventListener("transitionend",p),d=setTimeout(p,D.duration*1.1)},100)}function g(l,b){let y;e=l,s===!0?c():(n="show",l.style.overflowY="hidden",y=l.scrollHeight),a(l,y,b),i=setTimeout(()=>{i=null,l.style.height=0,p=L=>{d=null,(Object(L)!==L||L.target===l)&&m(l,"hide")},l.addEventListener("transitionend",p),d=setTimeout(p,D.duration*1.1)},100)}return mt(()=>{s===!0&&c()}),()=>kt(Mt,{css:!1,appear:D.appear,onEnter:f,onLeave:g},F.default)}}),Vt="/assets/logo-dark-DeD5CBN3.png",_t="/assets/logo-light-Bv3o0A7a.png",It=D=>{const{offset:F=70,duration:h=0,sectionIds:s,init:o=""}=D,e=lt(""),i=p=>{const n=document.getElementById(p);if(!n)return;e.value=p;const c=bt.getScrollTarget(n),a=n.offsetTop-F;bt.setVerticalScrollPosition(c,a,h)},d=()=>{const p=window.scrollY+F+100,n=s.findLast(c=>{const a=document.getElementById(c);return a&&a.offsetTop<=p});n&&(e.value=n)};return xt(()=>{window.addEventListener("scroll",d,{passive:!0}),i(o)}),mt(()=>{window.removeEventListener("scroll",d)}),{activeSection:e,scrollToSection:i}};var ut={exports:{}},Ft=ut.exports,ht;function Yt(){return ht||(ht=1,function(D,F){(function(h,s){D.exports=s()})(Ft,function(){return function(h){function s(e){if(o[e])return o[e].exports;var i=o[e]={exports:{},id:e,loaded:!1};return h[e].call(i.exports,i,i.exports,s),i.loaded=!0,i.exports}var o={};return s.m=h,s.c=o,s.p="dist/",s(0)}([function(h,s,o){function e(u){return u&&u.__esModule?u:{default:u}}var i=Object.assign||function(u){for(var T=1;T<arguments.length;T++){var H=arguments[T];for(var K in H)Object.prototype.hasOwnProperty.call(H,K)&&(u[K]=H[K])}return u},d=o(1),p=(e(d),o(6)),n=e(p),c=o(7),a=e(c),m=o(8),f=e(m),g=o(9),l=e(g),b=o(10),y=e(b),L=o(11),Z=e(L),k=o(14),N=e(k),O=[],U=!1,x={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},P=function(){var u=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(u&&(U=!0),U)return O=(0,Z.default)(O,x),(0,y.default)(O,x.once),O},R=function(){O=(0,N.default)(),P()},r=function(){O.forEach(function(u,T){u.node.removeAttribute("data-aos"),u.node.removeAttribute("data-aos-easing"),u.node.removeAttribute("data-aos-duration"),u.node.removeAttribute("data-aos-delay")})},t=function(u){return u===!0||u==="mobile"&&l.default.mobile()||u==="phone"&&l.default.phone()||u==="tablet"&&l.default.tablet()||typeof u=="function"&&u()===!0},v=function(u){x=i(x,u),O=(0,N.default)();var T=document.all&&!window.atob;return t(x.disable)||T?r():(x.disableMutationObserver||f.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),x.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",x.easing),document.querySelector("body").setAttribute("data-aos-duration",x.duration),document.querySelector("body").setAttribute("data-aos-delay",x.delay),x.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?P(!0):x.startEvent==="load"?window.addEventListener(x.startEvent,function(){P(!0)}):document.addEventListener(x.startEvent,function(){P(!0)}),window.addEventListener("resize",(0,a.default)(P,x.debounceDelay,!0)),window.addEventListener("orientationchange",(0,a.default)(P,x.debounceDelay,!0)),window.addEventListener("scroll",(0,n.default)(function(){(0,y.default)(O,x.once)},x.throttleDelay)),x.disableMutationObserver||f.default.ready("[data-aos]",R),O)};h.exports={init:v,refresh:P,refreshHard:R}},function(h,s){},,,,,function(h,s){(function(o){function e(t,v,u){function T(w){var z=q,X=B;return q=B=void 0,G=w,E=t.apply(X,z)}function H(w){return G=w,S=setTimeout(et,v),J?T(w):E}function K(w){var z=w-A,X=w-G,pt=v-z;return Y?R(pt,V-X):pt}function tt(w){var z=w-A,X=w-G;return A===void 0||z>=v||z<0||Y&&X>=V}function et(){var w=r();return tt(w)?rt(w):void(S=setTimeout(et,K(w)))}function rt(w){return S=void 0,_&&q?T(w):(q=B=void 0,E)}function ct(){S!==void 0&&clearTimeout(S),G=0,q=A=B=S=void 0}function at(){return S===void 0?E:rt(r())}function Q(){var w=r(),z=tt(w);if(q=arguments,B=this,A=w,z){if(S===void 0)return H(A);if(Y)return S=setTimeout(et,v),T(A)}return S===void 0&&(S=setTimeout(et,v)),E}var q,B,V,E,S,A,G=0,J=!1,Y=!1,_=!0;if(typeof t!="function")throw new TypeError(m);return v=c(v)||0,d(u)&&(J=!!u.leading,Y="maxWait"in u,V=Y?P(c(u.maxWait)||0,v):V,_="trailing"in u?!!u.trailing:_),Q.cancel=ct,Q.flush=at,Q}function i(t,v,u){var T=!0,H=!0;if(typeof t!="function")throw new TypeError(m);return d(u)&&(T="leading"in u?!!u.leading:T,H="trailing"in u?!!u.trailing:H),e(t,v,{leading:T,maxWait:v,trailing:H})}function d(t){var v=typeof t>"u"?"undefined":a(t);return!!t&&(v=="object"||v=="function")}function p(t){return!!t&&(typeof t>"u"?"undefined":a(t))=="object"}function n(t){return(typeof t>"u"?"undefined":a(t))=="symbol"||p(t)&&x.call(t)==g}function c(t){if(typeof t=="number")return t;if(n(t))return f;if(d(t)){var v=typeof t.valueOf=="function"?t.valueOf():t;t=d(v)?v+"":v}if(typeof t!="string")return t===0?t:+t;t=t.replace(l,"");var u=y.test(t);return u||L.test(t)?Z(t.slice(2),u?2:8):b.test(t)?f:+t}var a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m="Expected a function",f=NaN,g="[object Symbol]",l=/^\s+|\s+$/g,b=/^[-+]0x[0-9a-f]+$/i,y=/^0b[01]+$/i,L=/^0o[0-7]+$/i,Z=parseInt,k=(typeof o>"u"?"undefined":a(o))=="object"&&o&&o.Object===Object&&o,N=(typeof self>"u"?"undefined":a(self))=="object"&&self&&self.Object===Object&&self,O=k||N||Function("return this")(),U=Object.prototype,x=U.toString,P=Math.max,R=Math.min,r=function(){return O.Date.now()};h.exports=i}).call(s,function(){return this}())},function(h,s){(function(o){function e(r,t,v){function u(_){var w=Q,z=q;return Q=q=void 0,A=_,V=r.apply(z,w)}function T(_){return A=_,E=setTimeout(tt,t),G?u(_):V}function H(_){var w=_-S,z=_-A,X=t-w;return J?P(X,B-z):X}function K(_){var w=_-S,z=_-A;return S===void 0||w>=t||w<0||J&&z>=B}function tt(){var _=R();return K(_)?et(_):void(E=setTimeout(tt,H(_)))}function et(_){return E=void 0,Y&&Q?u(_):(Q=q=void 0,V)}function rt(){E!==void 0&&clearTimeout(E),A=0,Q=S=q=E=void 0}function ct(){return E===void 0?V:et(R())}function at(){var _=R(),w=K(_);if(Q=arguments,q=this,S=_,w){if(E===void 0)return T(S);if(J)return E=setTimeout(tt,t),u(S)}return E===void 0&&(E=setTimeout(tt,t)),V}var Q,q,B,V,E,S,A=0,G=!1,J=!1,Y=!0;if(typeof r!="function")throw new TypeError(a);return t=n(t)||0,i(v)&&(G=!!v.leading,J="maxWait"in v,B=J?x(n(v.maxWait)||0,t):B,Y="trailing"in v?!!v.trailing:Y),at.cancel=rt,at.flush=ct,at}function i(r){var t=typeof r>"u"?"undefined":c(r);return!!r&&(t=="object"||t=="function")}function d(r){return!!r&&(typeof r>"u"?"undefined":c(r))=="object"}function p(r){return(typeof r>"u"?"undefined":c(r))=="symbol"||d(r)&&U.call(r)==f}function n(r){if(typeof r=="number")return r;if(p(r))return m;if(i(r)){var t=typeof r.valueOf=="function"?r.valueOf():r;r=i(t)?t+"":t}if(typeof r!="string")return r===0?r:+r;r=r.replace(g,"");var v=b.test(r);return v||y.test(r)?L(r.slice(2),v?2:8):l.test(r)?m:+r}var c=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},a="Expected a function",m=NaN,f="[object Symbol]",g=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,b=/^0b[01]+$/i,y=/^0o[0-7]+$/i,L=parseInt,Z=(typeof o>"u"?"undefined":c(o))=="object"&&o&&o.Object===Object&&o,k=(typeof self>"u"?"undefined":c(self))=="object"&&self&&self.Object===Object&&self,N=Z||k||Function("return this")(),O=Object.prototype,U=O.toString,x=Math.max,P=Math.min,R=function(){return N.Date.now()};h.exports=e}).call(s,function(){return this}())},function(h,s){function o(c){var a=void 0,m=void 0;for(a=0;a<c.length;a+=1)if(m=c[a],m.dataset&&m.dataset.aos||m.children&&o(m.children))return!0;return!1}function e(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function i(){return!!e()}function d(c,a){var m=window.document,f=e(),g=new f(p);n=a,g.observe(m.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function p(c){c&&c.forEach(function(a){var m=Array.prototype.slice.call(a.addedNodes),f=Array.prototype.slice.call(a.removedNodes),g=m.concat(f);if(o(g))return n()})}Object.defineProperty(s,"__esModule",{value:!0});var n=function(){};s.default={isSupported:i,ready:d}},function(h,s){function o(m,f){if(!(m instanceof f))throw new TypeError("Cannot call a class as a function")}function e(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(s,"__esModule",{value:!0});var i=function(){function m(f,g){for(var l=0;l<g.length;l++){var b=g[l];b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(f,b.key,b)}}return function(f,g,l){return g&&m(f.prototype,g),l&&m(f,l),f}}(),d=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,p=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,n=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,a=function(){function m(){o(this,m)}return i(m,[{key:"phone",value:function(){var f=e();return!(!d.test(f)&&!p.test(f.substr(0,4)))}},{key:"mobile",value:function(){var f=e();return!(!n.test(f)&&!c.test(f.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),m}();s.default=new a},function(h,s){Object.defineProperty(s,"__esModule",{value:!0});var o=function(i,d,p){var n=i.node.getAttribute("data-aos-once");d>i.position?i.node.classList.add("aos-animate"):typeof n<"u"&&(n==="false"||!p&&n!=="true")&&i.node.classList.remove("aos-animate")},e=function(i,d){var p=window.pageYOffset,n=window.innerHeight;i.forEach(function(c,a){o(c,n+p,d)})};s.default=e},function(h,s,o){function e(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(s,"__esModule",{value:!0});var i=o(12),d=e(i),p=function(n,c){return n.forEach(function(a,m){a.node.classList.add("aos-init"),a.position=(0,d.default)(a.node,c.offset)}),n};s.default=p},function(h,s,o){function e(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(s,"__esModule",{value:!0});var i=o(13),d=e(i),p=function(n,c){var a=0,m=0,f=window.innerHeight,g={offset:n.getAttribute("data-aos-offset"),anchor:n.getAttribute("data-aos-anchor"),anchorPlacement:n.getAttribute("data-aos-anchor-placement")};switch(g.offset&&!isNaN(g.offset)&&(m=parseInt(g.offset)),g.anchor&&document.querySelectorAll(g.anchor)&&(n=document.querySelectorAll(g.anchor)[0]),a=(0,d.default)(n).top,g.anchorPlacement){case"top-bottom":break;case"center-bottom":a+=n.offsetHeight/2;break;case"bottom-bottom":a+=n.offsetHeight;break;case"top-center":a+=f/2;break;case"bottom-center":a+=f/2+n.offsetHeight;break;case"center-center":a+=f/2+n.offsetHeight/2;break;case"top-top":a+=f;break;case"bottom-top":a+=n.offsetHeight+f;break;case"center-top":a+=n.offsetHeight/2+f}return g.anchorPlacement||g.offset||isNaN(c)||(m=c),a+m};s.default=p},function(h,s){Object.defineProperty(s,"__esModule",{value:!0});var o=function(e){for(var i=0,d=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)i+=e.offsetLeft-(e.tagName!="BODY"?e.scrollLeft:0),d+=e.offsetTop-(e.tagName!="BODY"?e.scrollTop:0),e=e.offsetParent;return{top:d,left:i}};s.default=o},function(h,s){Object.defineProperty(s,"__esModule",{value:!0});var o=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,function(i){return{node:i}})};s.default=o}])})}(ut)),ut.exports}var Wt=Yt();const Ut=zt(Wt),Rt={key:0,src:Vt,alt:"Logo",class:"t-h-8 md:t-h-10"},Kt={key:1,src:_t,alt:"Logo",class:"t-h-8 md:t-h-10"},Gt={key:0,class:"t-hidden lg:t-flex t-gap-6 t-items-center t-mr-6"},Jt={class:"xl:t-hidden t-ml-2"},Xt={class:"t-hidden xl:t-flex t-gap-4 t-items-center"},Zt={class:"t-absolute t-inset-x-0 md:t-inset-x-20 t-top-full bg-gradient-personal t-shadow-lg lg:t-hidden flex t-justify-center t-content-center"},te={class:"t-container t-px-4 t-py-6"},ee={class:"t-flex t-flex-col t-gap-4"},ne={class:"t-bg-secondary t-text-dark-page t-py-12 md:t-py-20"},oe={class:"t-container t-mx-auto t-px-4 t-grid t-grid-cols-1 sm:t-grid-cols-2 lg:t-grid-cols-5 t-gap-8"},ae={class:"t-text-base md:t-text-lg t-font-bold t-mb-4 md:t-mb-6"},re={class:"t-space-y-2 md:t-space-y-3"},ie={href:"#",class:"t-text-sm md:t-text-base"},me=Ct({__name:"PublicLayout",setup(D){const{isDark:F,val:h,toggle:s,init:o}=St(),{store:e,route:i}=Dt(),d=lt(!1),p=lt(!1),n=[{label:"Inicio",scroll:"inicio"},{label:"Clientes",scroll:"nuestros-clientes"},{label:"Sobre Nosotros",scroll:"servicios"},{label:"Contactanos",scroll:"contactanos"}],{locale:c}=Ht({useScope:"global"}),a=lt([{value:"es-LAT",label:"ES"},{value:"en-US",label:"IN"}]),m=[{title:"Producto",links:["Características","Aplicación móvil","Integraciones","Seguridad"]},{title:"Recursos",links:["Casos de éxito","Centro de ayuda","Developers"]},{title:"Empresa",links:["Sobre nosotros","Contactanos"]}],{activeSection:f,scrollToSection:g}=It({sectionIds:n.map(b=>b.scroll),offset:40,init:String(n[0]?.scroll)}),l=()=>{d.value=window.scrollY>50};return xt(()=>{o(),document.body.style.overflow="",Ut.init({duration:800,once:!0,easing:"ease-out-quad"}),Pt.from(".q-header",{duration:1,y:-50,opacity:0,ease:"power4.out"}),window.addEventListener("scroll",l)}),mt(()=>window.removeEventListener("scroll",l)),(b,y)=>{const L=gt("router-link"),Z=gt("router-view");return $(),dt(Lt,{view:"lHh Lpr lFf"},{default:nt(()=>[j(Et,{class:it(["bg-gradient-personal t-sticky t-top-0 t-z-50 t-transition-all t-duration-300 !-t-mb-10",{"t-shadow-md":d.value}])},{default:nt(()=>[j(jt,{class:it(["t-container t-mx-auto t-px-4 t-py-7 t-transition-all",{"!t-py-1.5":d.value}])},{default:nt(()=>[j(L,{class:"t-mr-4",to:{name:"init"}},{default:nt(()=>[M(F)?($(),I("img",Rt)):($(),I("img",Kt))]),_:1}),j(Ot,{modelValue:M(c),"onUpdate:modelValue":y[0]||(y[0]=k=>ft(c)?c.value=k:null),options:a.value,dense:"",borderless:"","emit-value":"","map-options":"","options-dense":"",style:{"min-width":"50px","padding-right":"30px"},color:"secondary"},null,8,["modelValue","options"]),j(Qt),M(i).path=="/"?($(),I("div",Gt,[($(),I(ot,null,st(n,(k,N)=>j(W,{key:N,flat:"",label:k.label,class:it(["hover:t-text-secondary t-font-medium t-text-sm lg:t-text-base t-text-gray-dark t-rounded-full t-transition-all t-duration-300",[M(f)===k.scroll?"t-bg-secondary t-bg-opacity-10 t-text-secondary":""]]),onClick:O=>M(g)(k.scroll)},null,8,["label","onClick","class"])),64))])):At("",!0),C("div",Jt,[j(vt,{"onUpdate:modelValue":[y[1]||(y[1]=k=>M(s)()),y[2]||(y[2]=k=>ft(h)?h.value=k:null)],modelValue:M(h),icon:M(F)?"dark_mode":"light_mode",color:"secondary","keep-color":!0},null,8,["modelValue","icon"])]),j(W,{flat:"",round:"",icon:"menu",class:"xl:t-hidden t-ml-2 text-modedark",onClick:y[3]||(y[3]=k=>p.value=!p.value)}),C("div",Xt,[M(e).auth.$state.current?.id?($(),dt(W,{key:1,to:{name:"panel"},unelevated:"",color:"primary",label:b.$t("pages.panel.link"),class:"t-rounded-full t-px-4 lg:t-px-6 t-py-1 lg:t-py-2 t-text-sm lg:t-text-base !t-text-gray-dark"},null,8,["label"])):($(),I(ot,{key:0},[j(W,{to:{name:"login"},flat:"",label:b.$t("pages.login.link"),class:"hover:t-text-third t-text-sm lg:t-text-base t-text-gray-neutral t-rounded-full"},null,8,["label"]),j(W,{to:{name:"register"},unelevated:"",color:"primary",label:b.$t("pages.register.link"),class:"t-rounded-full t-px-4 lg:t-px-6 t-py-1 lg:t-py-2 t-text-sm lg:t-text-base !t-text-gray-dark"},null,8,["label"])],64)),j(vt,{"onUpdate:modelValue":[y[4]||(y[4]=k=>M(s)()),y[5]||(y[5]=k=>ft(h)?h.value=k:null)],modelValue:M(h),icon:M(F)?"dark_mode":"light_mode",color:"secondary","keep-color":!0},null,8,["modelValue","icon"])])]),_:1},8,["class"]),j(Bt,null,{default:nt(()=>[$t(C("div",Zt,[C("div",te,[C("div",ee,[($(),I(ot,null,st(n,(k,N)=>j(W,{key:N,flat:"",label:k.label,class:it(["t-justify-start hover:t-text-secondary lg:t-hidden t-rounded-full t-text-gray-dark",[M(f)===k.scroll?"t-bg-secondary t-bg-opacity-10 t-text-secondary":""]]),onClick:O=>M(g)(k.scroll)},null,8,["label","onClick","class"])),64)),j(qt,{class:"t-my-2 md:t-hidden"}),M(e).auth.$state.current?.id?($(),dt(W,{key:1,to:{name:"panel"},unelevated:"",color:"primary",label:b.$t("pages.panel.link"),class:"t-rounded-full t-px-4 lg:t-px-6 t-py-1 lg:t-py-2 t-text-sm lg:t-text-base !t-text-gray-dark"},null,8,["label"])):($(),I(ot,{key:0},[j(W,{to:{name:"login"},flat:"",label:b.$t("pages.login.link"),class:"hover:t-text-third t-text-sm lg:t-text-base t-text-gray-neutral t-rounded-full"},null,8,["label"]),j(W,{to:{name:"register"},unelevated:"",color:"primary",label:b.$t("pages.register.link"),class:"t-rounded-full t-px-4 lg:t-px-6 t-py-1 lg:t-py-2 t-text-sm lg:t-text-base !t-text-gray-dark"},null,8,["label"])],64))])])],512),[[Nt,p.value]])]),_:1})]),_:1},8,["class"]),j(Tt,{class:"!t-pt-0"},{default:nt(()=>[j(Z)]),_:1}),C("footer",ne,[C("div",oe,[y[6]||(y[6]=C("div",{class:"sm:t-col-span-2 lg:t-col-span-2"},[C("img",{src:_t,alt:"Logo",class:"t-h-6 md:t-h-8 t-mb-4 md:t-mb-6"}),C("p",{class:"t-text-dark-page t-text-sm md:t-text-base"}," La plataforma de marketing conversacional líder para WhatsApp, Instagram y Facebook. ")],-1)),($(),I(ot,null,st(m,(k,N)=>C("div",{key:N,class:"sm:t-col-span-1"},[C("h4",ae,yt(k.title),1),C("ul",re,[($(!0),I(ot,null,st(k.links,(O,U)=>($(),I("li",{key:U,class:"t-text-dark-page hover:t-text-gray-light t-transition-colors"},[C("a",ie,yt(O),1)]))),128))])])),64))])])]),_:1})}}});export{me as default};

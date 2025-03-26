(()=>{"use strict";var e={56:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},72:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=n.base?s[0]+n.base:s[0],p=a[d]||0,u="".concat(d," ").concat(p);a[d]=p+1;var l=r(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)t[l].references++,t[l].updater(f);else{var g=o(f,n);n.byIndex=c,t.splice(c,0,{identifier:u,updater:g,references:1})}i.push(u)}return i}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=r(a[i]);t[c].references--}for(var s=n(e,o),d=0;d<a.length;d++){var p=r(a[d]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}a=s}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},197:(e,t,r)=>{r.d(t,{A:()=>c});var n=r(601),o=r.n(n),a=r(314),i=r.n(a)()(o());i.push([e.id,'*,:after,:before{box-sizing:border-box}.input__container{color:#fff;display:grid;font-family:Montserrat;font-weight:900;justify-content:center}input{all:unset;border:2px solid #8f8dff;border-radius:4px;font-size:16px;margin:5px 0;padding:8px}input[type=file]{border:2px solid #8f8dff;cursor:pointer;padding:5px}.input__description{height:60px}#addButton{background-color:#42a546;border:none;border-radius:4px;color:#fff;cursor:pointer;left:25%;padding:10px 20px;position:relative;width:50%}#addButton:hover{background-color:#306b33}#warning{color:red;display:none;font-size:14px}.page:after{background:linear-gradient(36deg,#f0a,#a200ff);background-repeat:no-repeat;content:"";height:100vh;left:0;position:fixed;top:0;width:100vw;z-index:-1}.cards__main-container{display:grid;grid-template-columns:1fr 1fr;justify-content:space-between}',""]);const c=i},262:(e,t,r)=>{e.exports=r.p+"75fe0dedee7ea39c5e4d.png"},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(n)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var p=[].concat(e[d]);n&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),r&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=r):p[2]=r),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),t.push(p))}},t}},379:(e,t,r)=>{r.d(t,{A:()=>b});var n=r(601),o=r.n(n),a=r(314),i=r.n(a),c=r(417),s=r.n(c),d=new URL(r(638),r.b),p=new URL(r(697),r.b),u=new URL(r(262),r.b),l=i()(o()),f=s()(d),g=s()(p),h=s()(u);l.push([e.id,`.card__container{background:linear-gradient(#c300ff,#9198e5);border-radius:20px 10px;height:200px;margin:20px;padding:20px;width:300px}.card__top-side{border-bottom:1px solid #a200ff;border-radius:5px;display:grid;grid-template-columns:1fr 1fr}.card__bottom-side{display:grid;grid-template-columns:1fr 30px 30px}.card__image{border-radius:5px;height:auto;max-width:250px;position:relative;top:5px;width:50px}.card__description{font-size:90%;text-wrap:wrap;word-wrap:break-word;overflow-wrap:break-word}.card__heading{text-align:start;width:200px}.like-pressed{background-image:url(${f})}.like-unpressed{background-image:url(${g})}.card__button-static{background-color:rgba(244,165,96,0);height:30px;right:-33px;top:80px;width:30px}.card__button-static,.delete-button{background-size:cover;border:none;position:relative}.delete-button{background-color:#c300ff00;background-image:url(${h});height:15px;left:14px;top:3px;width:15px}`,""]);const b=l},417:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},601:e=>{e.exports=function(e){return e[1]}},638:(e,t,r)=>{e.exports=r.p+"40ad3f4d11f2841f789a.png"},659:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},697:(e,t,r)=>{e.exports=r.p+"21a8bb7485e368ffeb61.png"},782:(e,t,r)=>{r.d(t,{A:()=>p});var n=r(601),o=r.n(n),a=r(314),i=r.n(a),c=r(379),s=r(197),d=i()(o());d.i(c.A),d.i(s.A),d.push([e.id,"",""]);const p=d},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,exports:{}};return e[n](a,a.exports,r),a.exports}r.m=e,r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var o=n.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=n[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/^blob:/,"").replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),r.b=document.baseURI||self.location.href,r.nc=void 0;var n,o,a=r(72),i=r.n(a),c=r(825),s=r.n(c),d=r(659),p=r.n(d),u=r(56),l=r.n(u),f=r(540),g=r.n(f),h=r(113),b=r.n(h),v=r(782),m={};m.styleTagTransform=b(),m.setAttributes=l(),m.insert=p().bind(null,"head"),m.domAPI=s(),m.insertStyleElement=g(),i()(v.A,m),v.A&&v.A.locals&&v.A.locals,document.querySelector("body"),n=cardTemplate,o=cardParent,[{title:"Напоминание",imageSrc:"/assets/images/NotifApp.png",description:"Данное приложение напоминает про работы, которые вы должны сдать преподавателям в заданные дедлайны"},{title:"Ага",imageSrc:"/assets/images/Aga.png",description:"Данное приложение просто бесполезно, оно ничего не делает, лишь занимает место в памяти"}].forEach((function(e){var t=n.cloneNode(!0);t.querySelector(".card__heading").textContent=e.title,t.querySelector(".card__image").src=e.imageSrc,t.querySelector(".card__description").textContent=e.description;var r=t.querySelector(".card__button-static");r.addEventListener("click",(function(){r.classList.toggle("like-pressed"),r.classList.toggle("like-unpressed")})),t.querySelector(".delete-button").addEventListener("click",(function(){this.closest(".card__container").remove()})),o.appendChild(t)})),addButton.addEventListener("click",(function(){var e=addObjectToArray();if(e.length<1)alert("Заполните все поля");else{var t=cloneCardWithData(e[0].title,e[0].imageSrc,e[0].description);cardParent.appendChild(t)}}))})();
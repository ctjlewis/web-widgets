(function(){/*
 MIT  MIT
*/
'use strict';function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function k(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}function n(a){if(!(a instanceof Array)){a=k(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
var ba="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},p="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var q=ca(this);function t(a,b){if(b)a:{var c=q;a=a.split(".");for(var d=0;d<a.length-1;d++){var h=a[d];if(!(h in c))break a;c=c[h]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&p(c,a,{configurable:!0,writable:!0,value:b})}}var da;
if("function"==typeof Object.setPrototypeOf)da=Object.setPrototypeOf;else{var ea;a:{var fa={s:!0},ha={};try{ha.__proto__=fa;ea=ha.s;break a}catch(a){}ea=!1}da=ea?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ia=da;
function u(a,b){a.prototype=ba(b.prototype);a.prototype.constructor=a;if(ia)ia(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c]}
t("Symbol",function(a){function b(h){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(h||"")+"_"+d++,h)}function c(h,l){this.b=h;p(this,"description",{configurable:!0,writable:!0,value:l})}if(a)return a;c.prototype.toString=function(){return this.b};var d=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=q[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&p(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ja(aa(this))}})}return a});function ja(a){a={next:a};a[Symbol.iterator]=function(){return this};return a}
function v(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
t("WeakMap",function(a){function b(e){this.b=(f+=Math.random()+1).toString();if(e){e=k(e);for(var g;!(g=e.next()).done;)g=g.value,this.set(g[0],g[1])}}function c(){}function d(e){var g=typeof e;return"object"===g&&null!==e||"function"===g}function h(e){if(!v(e,r)){var g=new c;p(e,r,{value:g})}}function l(e){var g=Object[e];g&&(Object[e]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&h(m);return g(m)})}if(function(){if(!a||!Object.seal)return!1;try{var e=Object.seal({}),g=Object.seal({}),
m=new a([[e,2],[g,3]]);if(2!=m.get(e)||3!=m.get(g))return!1;m.delete(e);m.set(g,4);return!m.has(e)&&4==m.get(g)}catch(H){return!1}}())return a;var r="$jscomp_hidden_"+Math.random();l("freeze");l("preventExtensions");l("seal");var f=0;b.prototype.set=function(e,g){if(!d(e))throw Error("Invalid WeakMap key");h(e);if(!v(e,r))throw Error("WeakMap key fail: "+e);e[r][this.b]=g;return this};b.prototype.get=function(e){return d(e)&&v(e,r)?e[r][this.b]:void 0};b.prototype.has=function(e){return d(e)&&v(e,
r)&&v(e[r],this.b)};b.prototype.delete=function(e){return d(e)&&v(e,r)&&v(e[r],this.b)?delete e[r][this.b]:!1};return b});
t("Map",function(a){function b(){var f={};return f.i=f.next=f.head=f}function c(f,e){var g=f.b;return ja(function(){if(g){for(;g.head!=f.b;)g=g.i;for(;g.next!=g.head;)return g=g.next,{done:!1,value:e(g)};g=null}return{done:!0,value:void 0}})}function d(f,e){var g=e&&typeof e;"object"==g||"function"==g?l.has(e)?g=l.get(e):(g=""+ ++r,l.set(e,g)):g="p_"+e;var m=f.h[g];if(m&&v(f.h,g))for(f=0;f<m.length;f++){var H=m[f];if(e!==e&&H.key!==H.key||e===H.key)return{id:g,list:m,index:f,g:H}}return{id:g,list:m,
index:-1,g:void 0}}function h(f){this.h={};this.b=b();this.size=0;if(f){f=k(f);for(var e;!(e=f.next()).done;)e=e.value,this.set(e[0],e[1])}}if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var f=Object.seal({x:4}),e=new a(k([[f,"s"]]));if("s"!=e.get(f)||1!=e.size||e.get({x:4})||e.set({x:4},"t")!=e||2!=e.size)return!1;var g=e.entries(),m=g.next();if(m.done||m.value[0]!=f||"s"!=m.value[1])return!1;m=g.next();return m.done||4!=m.value[0].x||
"t"!=m.value[1]||!g.next().done?!1:!0}catch(H){return!1}}())return a;var l=new WeakMap;h.prototype.set=function(f,e){f=0===f?0:f;var g=d(this,f);g.list||(g.list=this.h[g.id]=[]);g.g?g.g.value=e:(g.g={next:this.b,i:this.b.i,head:this.b,key:f,value:e},g.list.push(g.g),this.b.i.next=g.g,this.b.i=g.g,this.size++);return this};h.prototype.delete=function(f){f=d(this,f);return f.g&&f.list?(f.list.splice(f.index,1),f.list.length||delete this.h[f.id],f.g.i.next=f.g.next,f.g.next.i=f.g.i,f.g.head=null,this.size--,
!0):!1};h.prototype.clear=function(){this.h={};this.b=this.b.i=b();this.size=0};h.prototype.has=function(f){return!!d(this,f).g};h.prototype.get=function(f){return(f=d(this,f).g)&&f.value};h.prototype.entries=function(){return c(this,function(f){return[f.key,f.value]})};h.prototype.keys=function(){return c(this,function(f){return f.key})};h.prototype.values=function(){return c(this,function(f){return f.value})};h.prototype.forEach=function(f,e){for(var g=this.entries(),m;!(m=g.next()).done;)m=m.value,
f.call(e,m[1],m[0],this)};h.prototype[Symbol.iterator]=h.prototype.entries;var r=0;return h});
t("Set",function(a){function b(c){this.b=new Map;if(c){c=k(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.b.size}if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(k([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var h=d.entries(),l=h.next();if(l.done||l.value[0]!=c||l.value[1]!=c)return!1;l=h.next();return l.done||l.value[0]==c||4!=l.value[0].x||
l.value[1]!=l.value[0]?!1:h.next().done}catch(r){return!1}}())return a;b.prototype.add=function(c){c=0===c?0:c;this.b.set(c,c);this.size=this.b.size;return this};b.prototype.delete=function(c){c=this.b.delete(c);this.size=this.b.size;return c};b.prototype.clear=function(){this.b.clear();this.size=0};b.prototype.has=function(c){return this.b.has(c)};b.prototype.entries=function(){return this.b.entries()};b.prototype.values=function(){return this.b.values()};b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=
b.prototype.values;b.prototype.forEach=function(c,d){var h=this;this.b.forEach(function(l){return c.call(d,l,l,h)})};return b});var ka="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var h in d)v(d,h)&&(a[h]=d[h])}return a};t("Object.assign",function(a){return a||ka});t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var h=d.length;c=c||0;for(0>c&&(c=Math.max(c+h,0));c<h;c++){var l=d[c];if(l===b||Object.is(l,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return-1!==this.indexOf(b,c||0)}});
t("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(f){return f};var h=[],l="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof l){b=l.call(b);for(var r=0;!(l=b.next()).done;)h.push(c.call(d,l.value,r++))}else for(l=b.length,r=0;r<l;r++)h.push(c.call(d,b[r],r));return h}});t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)v(b,d)&&c.push([d,b[d]]);return c}});
if("undefined"===typeof goog){var la={define:function(a,b){return b}};"undefined"!==typeof global?global.v=la:"undefined"!==typeof window&&(window.v=la)}var ma=[];document.createElement("style").id="ww-stylesheet";var na=[];function oa(a,b){if(b.name)return b.name;for(var c in a)if(a[c]===b)return c;return null}function w(){this.tag=this.constructor.tag;this.b=Object.assign({},this.constructor.b);this.h=n(this.constructor.l).concat()}
q.Object.defineProperties(w,{tag:{configurable:!0,enumerable:!0,get:function(){return""}},b:{configurable:!0,enumerable:!0,get:function(){return{}}},h:{configurable:!0,enumerable:!0,get:function(){return Object.getPrototypeOf(this).o||[]}},o:{configurable:!0,enumerable:!0,get:function(){var a=new Set([this].concat(n(this.h)));a=n(a).concat().filter(function(b){return b!==w});return n(a).concat()}},l:{configurable:!0,enumerable:!0,get:function(){var a=new Set(this.o.map(function(b){return b.name}));
return n(a).concat()}}});function x(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];w.call(this);this.constructor.name in window||(window[this.constructor.name]=this.constructor);this.l=b;this.tag=this.constructor.tag||"w";this.f=""}u(x,w);x.a=function(){var a=this.name,b=this.f||"";na.includes(a)||(b&&(ma.push("."+a+" {"+b+"}"),na.push(a)),this.h.forEach(function(c){return c.a()}))};
x.from=function(a){var b=new this,c={},d=["class","style"];b.element=a;b.tag=a.tagName.toLowerCase();b.h=Array.from(a.classList);a=k(a.attributes);for(var h=a.next();!h.done;h=a.next()){h=h.value;var l=k([h.name,h.value]);h=l.next().value;l=l.next().value;d.includes(h)||(c[h]=l)}y(b,c);return b};function pa(a,b){switch(typeof b){case "string":b=new z(b)}var c=qa(a).element;b=qa(b).element;c.appendChild(b);return a}
function ra(a){if(a.b)for(var b=k(Object.entries(a.b)),c=b.next();!c.done;c=b.next()){var d=k(c.value);c=d.next().value;d=d.next().value;window.b&&"constructor"===c||a.element.setAttribute(c,d)}return a}function sa(a){var b=a.h;b.length&&(a.element.className=b.join(" "));return a}function ta(a){var b=a.f.replace(/(\s{2,}|\n+)/g," ").trim();a.f&&a.element.setAttribute("style",b)}function qa(a){a.element||a.c();return a}
x.prototype.c=function(){var a=this;this.constructor.a();ta(sa(ra(ua(this,document.createElement(this.tag)))));this.l.length&&this.l.forEach(function(b){return pa(a,b)});return this};x.prototype.freeze=function(){return"<!DOCTYPE html>"+this.c().u};x.prototype.m=function(){};function ua(a,b){a.element?a.element.replaceWith(b):a.element=b;return a}function y(a,b){b=void 0===b?{}:b;Object.assign(a.b||{},b)}
x.prototype.j=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];b=k(b);for(c=b.next();!c.done;c=b.next())this.f+=c.value;return this};q.Object.defineProperties(x.prototype,{u:{configurable:!0,enumerable:!0,get:function(){return this.element.outerHTML}}});q.Object.defineProperties(x,{f:{configurable:!0,enumerable:!0,get:function(){return"\n    transition: all 1s ease-in-out;\n    box-sizing: border-box;\n  "}}});
function A(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];x.apply(this,n(b).concat());this.state={}}u(A,x);A.from=x.from;A.a=x.a;
A.prototype.c=function(){x.prototype.c.call(this);var a=document.createElement("script"),b=this.constructor;b="(function(){var el=document.currentScript.parentNode;requestAnimationFrame(function(){"+b.name+("."+oa(b,b.from)+"(el).")+(oa(b.prototype,b.prototype.m)+"();});})();");a.setAttribute("async",!0);a.appendChild(document.createTextNode(b));this.element.appendChild(a);return this};A.prototype.m=function(){};function z(a){x.call(this);this.text=a}u(z,x);z.from=x.from;z.a=x.a;
z.prototype.c=function(){return ua(this,document.createTextNode(this.text))};function B(){x.apply(this,arguments)}u(B,x);B.from=x.from;B.a=x.a;q.Object.defineProperties(B,{f:{configurable:!0,enumerable:!0,get:function(){return"display: block;"}}});function C(){x.apply(this,arguments)}u(C,x);C.from=x.from;C.a=x.a;function D(){C.apply(this,arguments)}u(D,C);D.from=C.from;D.a=C.a;
q.Object.defineProperties(D,{tag:{configurable:!0,enumerable:!0,get:function(){return"h1"}},f:{configurable:!0,enumerable:!0,get:function(){return"font-size: 2rem"}}});function E(){C.apply(this,arguments)}u(E,C);E.from=C.from;E.a=C.a;q.Object.defineProperties(E,{tag:{configurable:!0,enumerable:!0,get:function(){return"h2"}},f:{configurable:!0,enumerable:!0,get:function(){return"font-size: 1rem"}}});function F(){x.apply(this,arguments)}u(F,x);F.from=x.from;F.a=x.a;
q.Object.defineProperties(F,{f:{configurable:!0,enumerable:!0,get:function(){return"\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n        "}}});function G(){F.apply(this,arguments)}u(G,F);G.from=F.from;G.a=F.a;q.Object.defineProperties(G,{f:{configurable:!0,enumerable:!0,get:function(){return"\n            margin: auto;\n            align-items: center;\n            justify-content: center;\n            text-align: center;\n        "}}});
function I(){F.apply(this,arguments)}u(I,F);I.from=F.from;I.a=F.a;q.Object.defineProperties(I,{f:{configurable:!0,enumerable:!0,get:function(){return"\n      flex-basis: 0;\n      flex-grow: 1;\n      flex-shrink: 0;\n\n      width: 100%;\n      height: 100%;\n\n      max-height: 100%;\n      max-height: -moz-available;\n      max-height: -webkit-fill-available;\n      max-height: fill-available;\n\n      margin: 0px;\n      padding: 0px;\n    "}}});function J(){x.apply(this,arguments)}u(J,x);
J.from=x.from;J.a=x.a;J.prototype.c=function(){this.h=[];x.prototype.c.call(this);return this};function K(){J.apply(this,arguments)}u(K,J);K.from=J.from;K.a=J.a;K.prototype.c=function(){J.prototype.c.call(this);pa(this,new L("exports/exe.namespace.js","dist/exe.namespace.js"));return this};q.Object.defineProperties(K,{tag:{configurable:!0,enumerable:!0,get:function(){return"head"}}});function M(){J.apply(this,arguments)}u(M,J);M.from=J.from;M.a=J.a;
q.Object.defineProperties(M,{tag:{configurable:!0,enumerable:!0,get:function(){return"title"}}});function N(a){a=void 0===a?{}:a;J.call(this);y(this,a)}u(N,J);N.from=J.from;N.a=J.a;q.Object.defineProperties(N,{tag:{configurable:!0,enumerable:!0,get:function(){return"link"}},b:{configurable:!0,enumerable:!0,get:function(){return{rel:"stylesheet"}}}});function O(a){y((J.call(this),this),a)}u(O,J);O.from=J.from;O.a=J.a;q.Object.defineProperties(O,{tag:{configurable:!0,enumerable:!0,get:function(){return"meta"}}});
function P(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];x.apply(this,n(b).concat())}u(P,x);P.from=x.from;P.a=x.a;P.prototype.c=function(){x.prototype.c.call(this);var a=document.createElement("style");a.setAttribute("defer",!0);a.appendChild(document.createTextNode(ma.join("\n")));this.element.querySelector("head").appendChild(a);return this};q.Object.defineProperties(P,{tag:{configurable:!0,enumerable:!0,get:function(){return"html"}},f:{configurable:!0,enumerable:!0,get:function(){return"\n    -webkit-font-smoothing: antialiased;\n    scroll-behavior: smooth;\n    font-size: 100%;\n    height: 100%;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n"}}});
function Q(){x.apply(this,arguments)}u(Q,x);Q.from=x.from;Q.a=x.a;q.Object.defineProperties(Q,{tag:{configurable:!0,enumerable:!0,get:function(){return"body"}},f:{configurable:!0,enumerable:!0,get:function(){return"\n    -webkit-font-smoothing: antialiased;\n    scroll-behavior: smooth;\n    font-size: 100%;\n    height: 100%;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n"}}});function R(a){a=void 0===a?{href:""}:a;x.call(this);this.b=a}u(R,x);R.from=x.from;R.a=x.a;
R.prototype.c=function(){x.prototype.c.call(this);this.element=document.createDocumentFragment();var a=new N(Object.assign({},{rel:"preload",as:"style",onload:"this.onload=null;this.rel='stylesheet'"},this.b)),b=new S(new N(Object.assign({},this.b)));this.element.appendChild(a.c().element);this.element.appendChild(b.c().element);return this};
function T(a,b){b=void 0===b?[300,400,700]:b;R.call(this,{href:"https://fonts.googleapis.com/css2?family="+(void 0===a?"Lato":a).replace(" ","+")+":wght@"+b.join(";")+"&display=swap"})}u(T,R);T.from=R.from;T.a=R.a;function S(){J.apply(this,arguments)}u(S,J);S.from=J.from;S.a=J.a;q.Object.defineProperties(S,{tag:{configurable:!0,enumerable:!0,get:function(){return"NoScript"}}});function U(){J.apply(this,arguments)}u(U,J);U.from=J.from;U.a=J.a;
q.Object.defineProperties(U,{tag:{configurable:!0,enumerable:!0,get:function(){return"script"}},b:{configurable:!0,enumerable:!0,get:function(){return{async:!0}}}});function V(){U.apply(this,arguments)}u(V,U);V.from=U.from;V.a=U.a;q.Object.defineProperties(V,{b:{configurable:!0,enumerable:!0,get:function(){return{inline:!0}}}});function L(a,b){V.call(this);y(this,{src:b,async:!0})}u(L,V);L.from=V.from;L.a=V.a;
var va=[new O({"http-equiv":"Content-Type",content:"text/html; charset=UTF-8"}),new O({"http-equiv":"X-UA-Compatible",content:"IE=edge,chrome=1"}),new O({name:"viewport",content:"width=device-width, initial-scale=1.0"})];function W(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];K.apply(this,n(va).concat(n(b)))}u(W,K);W.from=K.from;W.a=K.a;function X(){A.apply(this,arguments)}u(X,A);X.from=A.from;X.a=A.a;
X.prototype.m=function(){var a=this,b=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight),c=Math.max(document.body.clientHeight,document.documentElement.clientHeight),d=!1,h=0;document.addEventListener("scroll",function(){h=100*window.pageYOffset/(b-c);d||(d=!0,requestAnimationFrame(function(){a.element.style.setProperty("--scroll",h+"%");d=!1}))},
{passive:!0})};q.Object.defineProperties(X,{f:{configurable:!0,enumerable:!0,get:function(){return"\n      position: fixed;\n      height: 24px;\n      width: 100%;\n      \n      top: 0;\n      left: 0;\n\n      will-change: transform;\n      transform: translateZ(0);\n      -webkit-transform-style: preserve-3d;\n      -webkit-backface-visibility: hidden;\n      -webkit-transform:translate3d(0,0,0);\n      -webkit-transform-style: preserve-3d;\n      -webkit-perspective: 1000;\n      -webkit-transform: translateZ(0);\n\n      background: linear-gradient(to right, #bbdefb var(--scroll), transparent 0);\n    "}}});
function Y(){B.apply(this,arguments)}u(Y,B);Y.from=B.from;Y.a=B.a;q.Object.defineProperties(Y,{f:{configurable:!0,enumerable:!0,get:function(){return"\n    height: 100%;\n    max-width: 768px;\n    margin: 0 auto;\n  "}}});function Z(a){A.call(this);this.state.counter=a}u(Z,A);Z.from=A.from;Z.a=A.a;Z.prototype.c=function(){A.prototype.c.call(this);return new D("test")};
new P(new W(new M("Web Widgets Demo"),new T("Work Sans",[800]),new T("Public Sans",[400]),new R({href:"https://fonts.googleapis.com/icon?family=Material+Icons&display=block"})),new Q(new X,(new I(new G(new Y((new D("Welcome to Web Widgets")).j("\n                        color: white;\n                        font-family: 'Work Sans', sans-serif;\n                        font-weight: 800;\n                    "),(new E("This stateful layout was shipped as 7kB of static, gzipped data from the edge with Google Cloud CDN.")).j("\n                        color: white;\n                        font-family: 'Public Sans', sans-serif;\n                        font-weight: 400;\n                    "))))).j("\n            background: linear-gradient(to top left, #003c8f, #5e92f3); padding: 2rem;\n        "),
(new I(new G(new Y((new D("Thanks for checking it out!")).j("\n                        font-family: 'Work Sans', sans-serif;\n                        font-weight: 800;\n                    "),new Z(0))))).j("padding:2rem")));}).call(this);

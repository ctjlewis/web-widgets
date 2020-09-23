(function(){/*
 MIT */
var k;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function n(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}function p(a){if(!(a instanceof Array)){a=n(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
var ba="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},ca="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function da(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var q=da(this);function t(a,b){if(b)a:{var c=q;a=a.split(".");for(var d=0;d<a.length-1;d++){var f=a[d];if(!(f in c))break a;c=c[f]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ca(c,a,{configurable:!0,writable:!0,value:b})}}var ea;
if("function"==typeof Object.setPrototypeOf)ea=Object.setPrototypeOf;else{var fa;a:{var ha={A:!0},ia={};try{ia.__proto__=ha;fa=ia.A;break a}catch(a){}fa=!1}ea=fa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ja=ea;
function u(a,b){a.prototype=ba(b.prototype);a.prototype.constructor=a;if(ja)ja(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c]}
t("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(f||"")+"_"+d++,f)}function c(f,l){this.a=f;ca(this,"description",{configurable:!0,writable:!0,value:l})}if(a)return a;c.prototype.toString=function(){return this.a};var d=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=q[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ca(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ka(aa(this))}})}return a});function ka(a){a={next:a};a[Symbol.iterator]=function(){return this};return a}
function v(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
t("WeakMap",function(a){function b(e){this.a=(g+=Math.random()+1).toString();if(e){e=n(e);for(var h;!(h=e.next()).done;)h=h.value,this.set(h[0],h[1])}}function c(){}function d(e){var h=typeof e;return"object"===h&&null!==e||"function"===h}function f(e){if(!v(e,r)){var h=new c;ca(e,r,{value:h})}}function l(e){var h=Object[e];h&&(Object[e]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&f(m);return h(m)})}if(function(){if(!a||!Object.seal)return!1;try{var e=Object.seal({}),h=Object.seal({}),
m=new a([[e,2],[h,3]]);if(2!=m.get(e)||3!=m.get(h))return!1;m.delete(e);m.set(h,4);return!m.has(e)&&4==m.get(h)}catch(K){return!1}}())return a;var r="$jscomp_hidden_"+Math.random();l("freeze");l("preventExtensions");l("seal");var g=0;b.prototype.set=function(e,h){if(!d(e))throw Error("Invalid WeakMap key");f(e);if(!v(e,r))throw Error("WeakMap key fail: "+e);e[r][this.a]=h;return this};b.prototype.get=function(e){return d(e)&&v(e,r)?e[r][this.a]:void 0};b.prototype.has=function(e){return d(e)&&v(e,
r)&&v(e[r],this.a)};b.prototype.delete=function(e){return d(e)&&v(e,r)&&v(e[r],this.a)?delete e[r][this.a]:!1};return b});
t("Map",function(a){function b(){var g={};return g.i=g.next=g.head=g}function c(g,e){var h=g.a;return ka(function(){if(h){for(;h.head!=g.a;)h=h.i;for(;h.next!=h.head;)return h=h.next,{done:!1,value:e(h)};h=null}return{done:!0,value:void 0}})}function d(g,e){var h=e&&typeof e;"object"==h||"function"==h?l.has(e)?h=l.get(e):(h=""+ ++r,l.set(e,h)):h="p_"+e;var m=g.f[h];if(m&&v(g.f,h))for(g=0;g<m.length;g++){var K=m[g];if(e!==e&&K.key!==K.key||e===K.key)return{id:h,list:m,index:g,g:K}}return{id:h,list:m,
index:-1,g:void 0}}function f(g){this.f={};this.a=b();this.size=0;if(g){g=n(g);for(var e;!(e=g.next()).done;)e=e.value,this.set(e[0],e[1])}}if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var g=Object.seal({x:4}),e=new a(n([[g,"s"]]));if("s"!=e.get(g)||1!=e.size||e.get({x:4})||e.set({x:4},"t")!=e||2!=e.size)return!1;var h=e.entries(),m=h.next();if(m.done||m.value[0]!=g||"s"!=m.value[1])return!1;m=h.next();return m.done||4!=m.value[0].x||
"t"!=m.value[1]||!h.next().done?!1:!0}catch(K){return!1}}())return a;var l=new WeakMap;f.prototype.set=function(g,e){g=0===g?0:g;var h=d(this,g);h.list||(h.list=this.f[h.id]=[]);h.g?h.g.value=e:(h.g={next:this.a,i:this.a.i,head:this.a,key:g,value:e},h.list.push(h.g),this.a.i.next=h.g,this.a.i=h.g,this.size++);return this};f.prototype.delete=function(g){g=d(this,g);return g.g&&g.list?(g.list.splice(g.index,1),g.list.length||delete this.f[g.id],g.g.i.next=g.g.next,g.g.next.i=g.g.i,g.g.head=null,this.size--,
!0):!1};f.prototype.clear=function(){this.f={};this.a=this.a.i=b();this.size=0};f.prototype.has=function(g){return!!d(this,g).g};f.prototype.get=function(g){return(g=d(this,g).g)&&g.value};f.prototype.entries=function(){return c(this,function(g){return[g.key,g.value]})};f.prototype.keys=function(){return c(this,function(g){return g.key})};f.prototype.values=function(){return c(this,function(g){return g.value})};f.prototype.forEach=function(g,e){for(var h=this.entries(),m;!(m=h.next()).done;)m=m.value,
g.call(e,m[1],m[0],this)};f.prototype[Symbol.iterator]=f.prototype.entries;var r=0;return f});
t("Set",function(a){function b(c){this.a=new Map;if(c){c=n(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.a.size}if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(n([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var f=d.entries(),l=f.next();if(l.done||l.value[0]!=c||l.value[1]!=c)return!1;l=f.next();return l.done||l.value[0]==c||4!=l.value[0].x||
l.value[1]!=l.value[0]?!1:f.next().done}catch(r){return!1}}())return a;b.prototype.add=function(c){c=0===c?0:c;this.a.set(c,c);this.size=this.a.size;return this};b.prototype.delete=function(c){c=this.a.delete(c);this.size=this.a.size;return c};b.prototype.clear=function(){this.a.clear();this.size=0};b.prototype.has=function(c){return this.a.has(c)};b.prototype.entries=function(){return this.a.entries()};b.prototype.values=function(){return this.a.values()};b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=
b.prototype.values;b.prototype.forEach=function(c,d){var f=this;this.a.forEach(function(l){return c.call(d,l,l,f)})};return b});t("Array.prototype.flat",function(a){return a?a:function(b){b=void 0===b?1:b;for(var c=[],d=0;d<this.length;d++){var f=this[d];Array.isArray(f)&&0<b?(f=Array.prototype.flat.call(f,b-1),c.push.apply(c,f)):c.push(f)}return c}});
var la="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var f in d)v(d,f)&&(a[f]=d[f])}return a};t("Object.assign",function(a){return a||la});t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var f=d.length;c=c||0;for(0>c&&(c=Math.max(c+f,0));c<f;c++){var l=d[c];if(l===b||Object.is(l,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return-1!==this.indexOf(b,c||0)}});
t("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(g){return g};var f=[],l="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof l){b=l.call(b);for(var r=0;!(l=b.next()).done;)f.push(c.call(d,l.value,r++))}else for(l=b.length,r=0;r<l;r++)f.push(c.call(d,b[r],r));return f}});t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)v(b,d)&&c.push([d,b[d]]);return c}});
if("undefined"===typeof goog){var ma={define:function(a,b){return b}};"undefined"!==typeof global?global.F=ma:"undefined"!==typeof window&&(window.F=ma)}function na(){var a=document.createElement("style");a.id="ww-stylesheet";return a}var oa=na(),pa=[];function w(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];console.log.apply(console,p(b))};/*
 MIT
*/
function x(a){function b(){y.apply(this,arguments)}for(var c=[],d=0;d<arguments.length;++d)c[d]=arguments[d];u(b,y);q.Object.defineProperties(b,{l:{configurable:!0,enumerable:!0,get:function(){var f=new Set(p(c.map(function(l){return l.l}).flat()).concat(p(y.l)));return p(f).concat()}},c:{configurable:!0,enumerable:!0,get:function(){return c.map(function(f){return f.c}).join("\n")}},attributes:{configurable:!0,enumerable:!0,get:function(){var f={};c.forEach(function(l){return Object.assign(f,l.attributes)})}}})}
function qa(){this.j=this.constructor.f;this.attributes=Object.assign({},this.constructor.attributes);this.f=p(this.constructor.m).concat()}
q.Object.defineProperties(qa,{f:{configurable:!0,enumerable:!0,get:function(){return this.name}},attributes:{configurable:!0,enumerable:!0,get:function(){return{}}},j:{configurable:!0,enumerable:!0,get:function(){return Object.getPrototypeOf(this).l||[]}},l:{configurable:!0,enumerable:!0,get:function(){var a=new Set([this].concat(p(this.j)));a=p(a).concat().filter(function(b){return b!==qa});return p(a).concat()}},m:{configurable:!0,enumerable:!0,get:function(){var a=new Set(this.l.map(function(b){return b.name}));
return p(a).concat()}}});function y(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];qa.call(this);this.m=b;this.j=this.constructor.f||this.constructor.name;this.c=""}u(y,qa);y.b=function(){var a=this.name,b=this.c||"";w("exportStyles for",a);oa.sheet||document.head.appendChild(oa);if(pa.includes(a))return w("Styles for",a,"already exported. Skipping.");b&&(w("exporting styles for",a,b),oa.sheet.insertRule("."+a+" {"+b+"}"),pa.push(a),this.j.forEach(function(c){return c.b()}))};
y.a=function(a){w("generating widget from DOM",this.name,a);var b=new this,c={},d=["class","style"];b.element=a;b.j=a.tagName.toLowerCase();b.f=Array.from(a.classList);a=n(a.attributes);for(var f=a.next();!f.done;f=a.next()){f=f.value;var l=n([f.name,f.value]);f=l.next().value;l=l.next().value;d.includes(f)||(c[f]=l)}b.o(c);return b};k=y.prototype;k.u=function(a){w("append",arguments);switch(typeof a){case "string":a=new z(a)}this.element.appendChild(ra(a).element);return this};
k.B=function(){w("applyAttributes",arguments);if(this.attributes)for(var a=n(Object.entries(this.attributes)),b=a.next();!b.done;b=a.next()){var c=n(b.value);b=c.next().value;c=c.next().value;this.element.setAttribute(b,c)}return this};k.C=function(){w("applyClasses",arguments);var a=this.f;a.length&&(this.element.className=a.join(" "));return this};k.D=function(){w("applyStyles",arguments);this.c&&this.element.setAttribute("style",this.c)};function ra(a){a.element||a.h();return a}
k.h=function(){var a=this;this.constructor.b();w("build",this.constructor.name);this.v().B().C().D();this.m.length&&this.m.forEach(function(b){return a.u(b)});return this};k.v=function(){w("createElement",arguments);return this.s(document.createElement(this.j))};k.freeze=function(){console.log("<!DOCTYPE html>"+ra(this).G);return this};k.s=function(a){w("replaceElement",arguments);this.element?this.element.replaceWith(a):this.element=a;return this};k.H=function(a){w("setTextNode",arguments);return this.s(document.createTextNode(a))};
k.o=function(a){a=void 0===a?{}:a;w("setAttributes",arguments);Object.assign(this.attributes||{},a)};k.I=function(a){w("setStyles",arguments);this.c+=a;return this};q.Object.defineProperties(y.prototype,{G:{configurable:!0,enumerable:!0,get:function(){return this.element.outerHTML}}});q.Object.defineProperties(y,{c:{configurable:!0,enumerable:!0,get:function(){return"\n      box-sizing: border-box;\n    "}}});function z(a){y.call(this);this.text=a}u(z,y);z.a=y.a;z.b=y.b;z.prototype.h=function(){return this.H(this.text)};function A(){y.apply(this,arguments)}u(A,y);A.a=y.a;A.b=y.b;q.Object.defineProperties(A,{c:{configurable:!0,enumerable:!0,get:function(){return"box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),0 2px 1px -1px rgba(0, 0, 0, 0.12),0 1px 3px 0 rgba(0, 0, 0, 0.20);"}}});function B(){y.apply(this,arguments)}u(B,y);B.a=y.a;B.b=y.b;q.Object.defineProperties(B,{c:{configurable:!0,enumerable:!0,get:function(){return"\n            display: block;\n        "}}});function C(){y.apply(this,arguments)}u(C,y);C.a=y.a;
C.b=y.b;q.Object.defineProperties(C,{c:{configurable:!0,enumerable:!0,get:function(){return"width: 100%;"}}});function D(){y.apply(this,arguments)}u(D,y);D.a=y.a;D.b=y.b;q.Object.defineProperties(D,{c:{configurable:!0,enumerable:!0,get:function(){return"height: 100%;"}}});function E(){y.apply(this,arguments)}u(E,y);E.a=y.a;E.b=y.b;function F(){E.apply(this,arguments)}u(F,E);F.a=E.a;F.b=E.b;
q.Object.defineProperties(F,{f:{configurable:!0,enumerable:!0,get:function(){return"h1"}},c:{configurable:!0,enumerable:!0,get:function(){}}});function G(){E.apply(this,arguments)}u(G,E);G.a=E.a;G.b=E.b;q.Object.defineProperties(G,{f:{configurable:!0,enumerable:!0,get:function(){return"h2"}},c:{configurable:!0,enumerable:!0,get:function(){}}});function H(){y.apply(this,arguments)}u(H,y);H.a=y.a;H.b=y.b;q.Object.defineProperties(H,{c:{configurable:!0,enumerable:!0,get:function(){return"\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n        "}}});
function I(){H.apply(this,arguments)}u(I,H);I.a=H.a;I.b=H.b;q.Object.defineProperties(I,{c:{configurable:!0,enumerable:!0,get:function(){return"\n            align-items: center;\n            justify-content: center;\n            text-align: center;\n        "}}});x(F,I);x(G,I);function J(){H.apply(this,arguments)}u(J,H);J.a=H.a;J.b=H.b;q.Object.defineProperties(J,{c:{configurable:!0,enumerable:!0,get:function(){return"\n      flex-basis: 0;\n      flex-grow: 1;\n      flex-shrink: 0;\n\n      width: 100%;\n      height: 100%;\n\n      max-height: 100%;\n      max-height: -moz-available;\n      max-height: -webkit-fill-available;\n      max-height: fill-available;\n\n      margin: 0px;\n      padding: 0px;\n    "}}});
function L(){J.apply(this,arguments)}u(L,J);L.a=J.a;L.b=J.b;q.Object.defineProperties(L,{c:{configurable:!0,enumerable:!0,get:function(){return"\n            flex-direction: column !important;\n        "}}});function M(){J.apply(this,arguments)}u(M,J);M.a=J.a;M.b=J.b;q.Object.defineProperties(M,{c:{configurable:!0,enumerable:!0,get:function(){return"\n            flex-direction: row !important;\n        "}}});function N(){H.apply(this,arguments)}u(N,H);N.a=H.a;N.b=H.b;
q.Object.defineProperties(N,{c:{configurable:!0,enumerable:!0,get:function(){return"\n            background: rgba(255, 255, 255, 0.1);\n            border: 4px solid white;\n            margin: 10px;\n        "}}});x(I,N,C);x(C,M);x(D,L);function O(){y.apply(this,arguments)}u(O,y);O.a=y.a;O.b=y.b;
O.prototype.h=function(){var a=this;y.prototype.h.call(this);requestAnimationFrame(function(){var b=a.constructor.name+".from(document.currentScript.parentNode).initState();",c=document.createElement("script");c.setAttribute("defer",!0);c.appendChild(document.createTextNode(b));a.element.appendChild(c)});requestAnimationFrame(function(){return a.a()});return this};O.prototype.a=function(){};function P(){O.apply(this,arguments)}u(P,O);P.a=O.a;P.b=O.b;
P.prototype.a=function(){O.prototype.a.call(this);this.element.style.opacity=1};q.Object.defineProperties(P,{c:{configurable:!0,enumerable:!0,get:function(){return"\n            opacity: 0;\n            transition: opacity 0.5s ease-in-out;\n        "}}});x(M,A);function Q(){y.apply(this,arguments)}u(Q,y);Q.a=y.a;Q.b=y.b;Q.prototype.h=function(){this.f=[];y.prototype.h.call(this);return this};function R(){Q.apply(this,arguments)}u(R,Q);R.a=Q.a;R.b=Q.b;
q.Object.defineProperties(R,{f:{configurable:!0,enumerable:!0,get:function(){return"head"}}});function S(){Q.apply(this,arguments)}u(S,Q);S.a=Q.a;S.b=Q.b;q.Object.defineProperties(S,{f:{configurable:!0,enumerable:!0,get:function(){return"title"}}});function T(a){a=void 0===a?{}:a;Q.call(this);this.o(a)}u(T,Q);T.a=Q.a;T.b=Q.b;q.Object.defineProperties(T,{f:{configurable:!0,enumerable:!0,get:function(){return"link"}},attributes:{configurable:!0,enumerable:!0,get:function(){return{rel:"stylesheet"}}}});
function U(a){(Q.call(this),this).o(a)}u(U,Q);U.a=Q.a;U.b=Q.b;q.Object.defineProperties(U,{f:{configurable:!0,enumerable:!0,get:function(){return"meta"}}});function V(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];y.apply(this,p(b).concat())}u(V,y);V.a=y.a;V.b=y.b;V.prototype.h=function(){y.prototype.h.call(this);for(var a=na(),b=n(oa.sheet.cssRules),c=b.next();!c.done;c=b.next())a.textContent+=c.value.cssText;this.element.querySelector("head").appendChild(a);return this};
q.Object.defineProperties(V,{f:{configurable:!0,enumerable:!0,get:function(){return"html"}},c:{configurable:!0,enumerable:!0,get:function(){return"\n    -webkit-font-smoothing: antialiased;\n    scroll-behavior: smooth;\n    font-size: 100%;\n    height: 100%;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n"}}});function W(){P.apply(this,arguments)}u(W,P);W.a=P.a;W.b=P.b;
W.prototype.h=function(){P.prototype.h.call(this);var a=document.createElement("script");a.type="module";a.src="exports/exe.initState.js";return this};q.Object.defineProperties(W,{f:{configurable:!0,enumerable:!0,get:function(){return"body"}},c:{configurable:!0,enumerable:!0,get:function(){return"\n    -webkit-font-smoothing: antialiased;\n    scroll-behavior: smooth;\n    font-size: 100%;\n    height: 100%;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n"}}});
function X(a){a=void 0===a?{href:""}:a;y.call(this);this.attributes=a}u(X,y);X.a=y.a;X.b=y.b;X.prototype.h=function(){y.prototype.h.call(this);this.element=document.createDocumentFragment();var a=new T(Object.assign({},{rel:"preload",as:"style",onload:"this.onload=null;this.rel='stylesheet'"},this.attributes)),b=new sa(new T(Object.assign({},this.attributes)));this.element.appendChild(a.h().element);this.element.appendChild(b.h().element);return this};
function Y(a,b){b=void 0===b?[300,400,700]:b;X.call(this,{href:"https://fonts.googleapis.com/css2?family="+(void 0===a?"Lato":a).replace(" ","+")+":wght@"+b.join(";")+"&display=swap"})}u(Y,X);Y.a=X.a;Y.b=X.b;function sa(){Q.apply(this,arguments)}u(sa,Q);sa.a=Q.a;sa.b=Q.b;q.Object.defineProperties(sa,{f:{configurable:!0,enumerable:!0,get:function(){return"NoScript"}}});var ta=[new U({"http-equiv":"Content-Type",content:"text/html; charset=UTF-8"}),new U({"http-equiv":"X-UA-Compatible",content:"IE=edge,chrome=1"}),new U({name:"viewport",content:"width=device-width, initial-scale=1.0"})];function ua(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];R.apply(this,p(ta).concat(p(b)))}u(ua,R);ua.a=R.a;ua.b=R.b;function Z(){O.apply(this,arguments)}u(Z,O);Z.a=O.a;Z.b=O.b;
Z.prototype.a=function(){var a=this,b=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight),c=Math.max(document.body.clientHeight,document.documentElement.clientHeight),d=!1;document.addEventListener("scroll",function(){if(!d){d=!0;var f=window.pageYOffset;requestAnimationFrame(function(){a.element.style.setProperty("width",100*f/(b-c)+"%");setTimeout(function(){return d=
!1},0)})}},{passive:!0})};q.Object.defineProperties(Z,{c:{configurable:!0,enumerable:!0,get:function(){return"\n      will-change: transform;\n      transform: translateZ(0);\n      -webkit-transform-style: preserve-3d;\n      -webkit-backface-visibility: hidden;\n\n      position: fixed;\n      background: #009688;\n      height: 24px;\n      width: 0%;\n      max-width: 100%;\n      \n      top: 0;\n      left: 0;\n    "}}});function va(){B.apply(this,arguments)}u(va,B);va.a=B.a;va.b=B.b;
q.Object.defineProperties(va,{c:{configurable:!0,enumerable:!0,get:function(){return"\n      height: 100%;\n      max-width: 768px;\n      margin: 0 auto;\n    "}}});new V(new ua(new S("Test Title"),new Y("Playfair Display",[900]),new Y("Libre Baskerville",[700]),new Y("Raleway",[700]),new X({href:"https://fonts.googleapis.com/icon?family=Material+Icons&display=block"})),new W(new Z,new va((new J).I("background: #555"),new J)));var wa=W.a(document.currentScript.parentElement);requestAnimationFrame(function(){return wa.a()});}).call(this);

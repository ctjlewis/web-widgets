(function(){/*
 MIT */
'use strict';function k(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function p(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:k(a)}}function q(a){if(!(a instanceof Array)){a=p(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
var aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},r="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ba(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var t=ba(this);function u(a,b){if(b)a:{var c=t;a=a.split(".");for(var d=0;d<a.length-1;d++){var g=a[d];if(!(g in c))break a;c=c[g]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&r(c,a,{configurable:!0,writable:!0,value:b})}}var v;
if("function"==typeof Object.setPrototypeOf)v=Object.setPrototypeOf;else{var w;a:{var ca={o:!0},x={};try{x.__proto__=ca;w=x.o;break a}catch(a){}w=!1}v=w?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var y=v;
function z(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(y)y(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c]}
u("Symbol",function(a){function b(g){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(g||"")+"_"+d++,g)}function c(g,l){this.a=g;r(this,"description",{configurable:!0,writable:!0,value:l})}if(a)return a;c.prototype.toString=function(){return this.a};var d=0;return b});
u("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=t[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&r(d.prototype,a,{configurable:!0,writable:!0,value:function(){return A(k(this))}})}return a});function A(a){a={next:a};a[Symbol.iterator]=function(){return this};return a}
function B(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
u("WeakMap",function(a){function b(e){this.a=(f+=Math.random()+1).toString();if(e){e=p(e);for(var h;!(h=e.next()).done;)h=h.value,this.set(h[0],h[1])}}function c(){}function d(e){var h=typeof e;return"object"===h&&null!==e||"function"===h}function g(e){if(!B(e,n)){var h=new c;r(e,n,{value:h})}}function l(e){var h=Object[e];h&&(Object[e]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&g(m);return h(m)})}if(function(){if(!a||!Object.seal)return!1;try{var e=Object.seal({}),h=Object.seal({}),
m=new a([[e,2],[h,3]]);if(2!=m.get(e)||3!=m.get(h))return!1;m.delete(e);m.set(h,4);return!m.has(e)&&4==m.get(h)}catch(E){return!1}}())return a;var n="$jscomp_hidden_"+Math.random();l("freeze");l("preventExtensions");l("seal");var f=0;b.prototype.set=function(e,h){if(!d(e))throw Error("Invalid WeakMap key");g(e);if(!B(e,n))throw Error("WeakMap key fail: "+e);e[n][this.a]=h;return this};b.prototype.get=function(e){return d(e)&&B(e,n)?e[n][this.a]:void 0};b.prototype.has=function(e){return d(e)&&B(e,
n)&&B(e[n],this.a)};b.prototype.delete=function(e){return d(e)&&B(e,n)&&B(e[n],this.a)?delete e[n][this.a]:!1};return b});
u("Map",function(a){function b(){var f={};return f.h=f.next=f.head=f}function c(f,e){var h=f.a;return A(function(){if(h){for(;h.head!=f.a;)h=h.h;for(;h.next!=h.head;)return h=h.next,{done:!1,value:e(h)};h=null}return{done:!0,value:void 0}})}function d(f,e){var h=e&&typeof e;"object"==h||"function"==h?l.has(e)?h=l.get(e):(h=""+ ++n,l.set(e,h)):h="p_"+e;var m=f.f[h];if(m&&B(f.f,h))for(f=0;f<m.length;f++){var E=m[f];if(e!==e&&E.key!==E.key||e===E.key)return{id:h,list:m,index:f,g:E}}return{id:h,list:m,
index:-1,g:void 0}}function g(f){this.f={};this.a=b();this.size=0;if(f){f=p(f);for(var e;!(e=f.next()).done;)e=e.value,this.set(e[0],e[1])}}if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var f=Object.seal({x:4}),e=new a(p([[f,"s"]]));if("s"!=e.get(f)||1!=e.size||e.get({x:4})||e.set({x:4},"t")!=e||2!=e.size)return!1;var h=e.entries(),m=h.next();if(m.done||m.value[0]!=f||"s"!=m.value[1])return!1;m=h.next();return m.done||4!=m.value[0].x||
"t"!=m.value[1]||!h.next().done?!1:!0}catch(E){return!1}}())return a;var l=new WeakMap;g.prototype.set=function(f,e){f=0===f?0:f;var h=d(this,f);h.list||(h.list=this.f[h.id]=[]);h.g?h.g.value=e:(h.g={next:this.a,h:this.a.h,head:this.a,key:f,value:e},h.list.push(h.g),this.a.h.next=h.g,this.a.h=h.g,this.size++);return this};g.prototype.delete=function(f){f=d(this,f);return f.g&&f.list?(f.list.splice(f.index,1),f.list.length||delete this.f[f.id],f.g.h.next=f.g.next,f.g.next.h=f.g.h,f.g.head=null,this.size--,
!0):!1};g.prototype.clear=function(){this.f={};this.a=this.a.h=b();this.size=0};g.prototype.has=function(f){return!!d(this,f).g};g.prototype.get=function(f){return(f=d(this,f).g)&&f.value};g.prototype.entries=function(){return c(this,function(f){return[f.key,f.value]})};g.prototype.keys=function(){return c(this,function(f){return f.key})};g.prototype.values=function(){return c(this,function(f){return f.value})};g.prototype.forEach=function(f,e){for(var h=this.entries(),m;!(m=h.next()).done;)m=m.value,
f.call(e,m[1],m[0],this)};g.prototype[Symbol.iterator]=g.prototype.entries;var n=0;return g});
u("Set",function(a){function b(c){this.a=new Map;if(c){c=p(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.a.size}if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(p([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var g=d.entries(),l=g.next();if(l.done||l.value[0]!=c||l.value[1]!=c)return!1;l=g.next();return l.done||l.value[0]==c||4!=l.value[0].x||
l.value[1]!=l.value[0]?!1:g.next().done}catch(n){return!1}}())return a;b.prototype.add=function(c){c=0===c?0:c;this.a.set(c,c);this.size=this.a.size;return this};b.prototype.delete=function(c){c=this.a.delete(c);this.size=this.a.size;return c};b.prototype.clear=function(){this.a.clear();this.size=0};b.prototype.has=function(c){return this.a.has(c)};b.prototype.entries=function(){return this.a.entries()};b.prototype.values=function(){return this.a.values()};b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=
b.prototype.values;b.prototype.forEach=function(c,d){var g=this;this.a.forEach(function(l){return c.call(d,l,l,g)})};return b});u("Array.prototype.flat",function(a){return a?a:function(b){b=void 0===b?1:b;for(var c=[],d=0;d<this.length;d++){var g=this[d];Array.isArray(g)&&0<b?(g=Array.prototype.flat.call(g,b-1),c.push.apply(c,g)):c.push(g)}return c}});
var da="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var g in d)B(d,g)&&(a[g]=d[g])}return a};u("Object.assign",function(a){return a||da});u("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
u("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var g=d.length;c=c||0;for(0>c&&(c=Math.max(c+g,0));c<g;c++){var l=d[c];if(l===b||Object.is(l,b))return!0}return!1}});
u("String.prototype.includes",function(a){return a?a:function(b,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return-1!==this.indexOf(b,c||0)}});
u("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(f){return f};var g=[],l="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof l){b=l.call(b);for(var n=0;!(l=b.next()).done;)g.push(c.call(d,l.value,n++))}else for(l=b.length,n=0;n<l;n++)g.push(c.call(d,b[n],n));return g}});u("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)B(b,d)&&c.push([d,b[d]]);return c}});
if("undefined"===typeof goog){var C={define:function(a,b){return b}};"undefined"!==typeof global?global.s=C:"undefined"!==typeof window&&(window.s=C)}var D=document.createElement("style");D.id="ww-stylesheet";var ea=[];function fa(a){for(var b=0;b<arguments.length;++b);};/*
 MIT
*/
function F(a){function b(){G.apply(this,arguments)}for(var c=[],d=0;d<arguments.length;++d)c[d]=arguments[d];z(b,G);t.Object.defineProperties(b,{j:{configurable:!0,enumerable:!0,get:function(){var g=new Set(q(c.map(function(l){return l.j}).flat()).concat(q(G.j)));return q(g).concat()}},c:{configurable:!0,enumerable:!0,get:function(){return c.map(function(g){return g.c}).join("\n")}},attributes:{configurable:!0,enumerable:!0,get:function(){var g={};c.forEach(function(l){return Object.assign(g,l.attributes)})}}})}
function H(){this.l=this.constructor.f;this.attributes=Object.assign({},this.constructor.attributes);this.i=q(this.constructor.l).concat()}
t.Object.defineProperties(H,{f:{configurable:!0,enumerable:!0,get:function(){return this.name}},attributes:{configurable:!0,enumerable:!0,get:function(){return{}}},i:{configurable:!0,enumerable:!0,get:function(){return Object.getPrototypeOf(this).j||[]}},j:{configurable:!0,enumerable:!0,get:function(){var a=new Set([this].concat(q(this.i)));a=q(a).concat().filter(function(b){return b!==H});return q(a).concat()}},l:{configurable:!0,enumerable:!0,get:function(){var a=new Set(this.j.map(function(b){return b.name}));
return q(a).concat()}}});function G(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];H.call(this);this.m=b;this.l=this.constructor.f||"w";this.c=""}z(G,H);G.b=function(){var a=this.name,b=this.c||"";D.sheet||document.head.appendChild(D);if(ea.includes(a))return fa("Styles for",a,"already exported. Skipping.");b&&(D.sheet.insertRule("."+a+" {"+b+"}"),ea.push(a),this.i.forEach(function(c){return c.b()}))};
G.a=function(a){var b=new this,c={},d=["class","style"];b.element=a;b.l=a.tagName.toLowerCase();b.i=Array.from(a.classList);a=p(a.attributes);for(var g=a.next();!g.done;g=a.next()){g=g.value;var l=p([g.name,g.value]);g=l.next().value;l=l.next().value;d.includes(g)||(c[g]=l)}ha(b,c);return b};G.prototype.append=function(a){a.a();this.element.appendChild(a.element);return this};
function ia(a){if(a.attributes)for(var b=p(Object.entries(a.attributes)),c=b.next();!c.done;c=b.next()){var d=p(c.value);c=d.next().value;d=d.next().value;a.element.setAttribute(c,d)}return a}function ja(a){var b=a.i;b.length&&(a.element.className=b.join(" "));return a}function ka(a){a.c&&a.element.setAttribute("style",a.c)}function la(a){a.element||a.a();return a}
G.prototype.a=function(){var a=this;this.constructor.b();ka(ja(ia(ma(this,document.createElement(this.l)))));this.m.length&&this.m.forEach(function(b){a.append("string"!==typeof b?b:new I(b))})};G.prototype.freeze=function(){console.log("<!DOCTYPE html>"+la(this).u);return this};function ma(a,b){a.element?a.element.replaceWith(b):a.element=b;return a}function ha(a,b){b=void 0===b?{}:b;Object.assign(a.attributes||{},b)}t.Object.defineProperties(G.prototype,{u:{configurable:!0,enumerable:!0,get:function(){return this.element.outerHTML}}});
t.Object.defineProperties(G,{c:{configurable:!0,enumerable:!0,get:function(){return"\n      box-sizing: border-box;\n    "}}});function I(a){G.call(this);this.text=a}z(I,G);I.a=G.a;I.b=G.b;I.prototype.a=function(){ma(this,document.createTextNode(this.text))};function J(){G.apply(this,arguments)}z(J,G);J.a=G.a;J.b=G.b;t.Object.defineProperties(J,{c:{configurable:!0,enumerable:!0,get:function(){return"box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),0 2px 1px -1px rgba(0, 0, 0, 0.12),0 1px 3px 0 rgba(0, 0, 0, 0.20);"}}});function K(){G.apply(this,arguments)}z(K,G);K.a=G.a;K.b=G.b;t.Object.defineProperties(K,{c:{configurable:!0,enumerable:!0,get:function(){return"width: 100%;"}}});function L(){G.apply(this,arguments)}z(L,G);L.a=G.a;L.b=G.b;
t.Object.defineProperties(L,{c:{configurable:!0,enumerable:!0,get:function(){return"height: 100%;"}}});function M(){G.apply(this,arguments)}z(M,G);M.a=G.a;M.b=G.b;function N(){M.apply(this,arguments)}z(N,M);N.a=M.a;N.b=M.b;t.Object.defineProperties(N,{f:{configurable:!0,enumerable:!0,get:function(){return"h1"}},c:{configurable:!0,enumerable:!0,get:function(){}}});function O(){M.apply(this,arguments)}z(O,M);O.a=M.a;O.b=M.b;
t.Object.defineProperties(O,{f:{configurable:!0,enumerable:!0,get:function(){return"h2"}},c:{configurable:!0,enumerable:!0,get:function(){}}});function P(){G.apply(this,arguments)}z(P,G);P.a=G.a;P.b=G.b;t.Object.defineProperties(P,{c:{configurable:!0,enumerable:!0,get:function(){return"\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n        "}}});function Q(){P.apply(this,arguments)}z(Q,P);Q.a=P.a;Q.b=P.b;
t.Object.defineProperties(Q,{c:{configurable:!0,enumerable:!0,get:function(){return"\n            align-items: center;\n            justify-content: center;\n            text-align: center;\n        "}}});F(N,Q);F(O,Q);function R(){P.apply(this,arguments)}z(R,P);R.a=P.a;R.b=P.b;t.Object.defineProperties(R,{c:{configurable:!0,enumerable:!0,get:function(){return"\n      flex-basis: 0;\n      flex-grow: 1;\n      flex-shrink: 0;\n\n      width: 100%;\n      height: 100%;\n\n      max-height: 100%;\n      max-height: -moz-available;\n      max-height: -webkit-fill-available;\n      max-height: fill-available;\n\n      margin: 0px;\n      padding: 0px;\n    "}}});
function S(){R.apply(this,arguments)}z(S,R);S.a=R.a;S.b=R.b;t.Object.defineProperties(S,{c:{configurable:!0,enumerable:!0,get:function(){return"\n            flex-direction: column !important;\n        "}}});function T(){R.apply(this,arguments)}z(T,R);T.a=R.a;T.b=R.b;t.Object.defineProperties(T,{c:{configurable:!0,enumerable:!0,get:function(){return"\n            flex-direction: row !important;\n        "}}});function U(){P.apply(this,arguments)}z(U,P);U.a=P.a;U.b=P.b;
t.Object.defineProperties(U,{c:{configurable:!0,enumerable:!0,get:function(){return"\n            background: rgba(255, 255, 255, 0.1);\n            border: 4px solid white;\n            margin: 10px;\n        "}}});F(Q,U,K);F(K,T);F(L,S);function V(){G.apply(this,arguments)}z(V,G);V.a=G.a;V.b=G.b;V.prototype.a=function(){var a=this;G.prototype.a.call(this);requestAnimationFrame(function(){return a.f()})};V.prototype.f=function(){};function W(){V.apply(this,arguments)}z(W,V);W.a=V.a;W.b=V.b;
W.prototype.f=function(){V.prototype.f.call(this);this.element.style.opacity=1};t.Object.defineProperties(W,{c:{configurable:!0,enumerable:!0,get:function(){return"\n            opacity: 0;\n            transition: opacity 0.5s ease-in-out;\n        "}}});F(T,J);function X(){G.apply(this,arguments)}z(X,G);X.a=G.a;X.b=G.b;X.prototype.a=function(){this.i=[];G.prototype.a.call(this)};function Y(a){ha((X.call(this),this),a)}z(Y,X);Y.a=X.a;Y.b=X.b;
t.Object.defineProperties(Y,{f:{configurable:!0,enumerable:!0,get:function(){return"meta"}}});function Z(){W.apply(this,arguments)}z(Z,W);Z.a=W.a;Z.b=W.b;Z.prototype.a=function(){W.prototype.a.call(this);var a=document.createElement("script");a.type="module";a.src="dist/exe.initState.js";this.element.append(a)};t.Object.defineProperties(Z,{f:{configurable:!0,enumerable:!0,get:function(){return"body"}},c:{configurable:!0,enumerable:!0,get:function(){return"\n    -webkit-font-smoothing: antialiased;\n    scroll-behavior: smooth;\n    font-size: 100%;\n    height: 100%;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n"}}});
new Y({"http-equiv":"Content-Type",content:"text/html; charset=UTF-8"});new Y({"http-equiv":"X-UA-Compatible",content:"IE=edge,chrome=1"});new Y({name:"viewport",content:"width=device-width, initial-scale=1.0"});var na=Z.a(document.body);requestAnimationFrame(function(){return na.f()});}).call(this);

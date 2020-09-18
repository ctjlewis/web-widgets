(function(){/*
 MIT */
'use strict';function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function h(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}function l(a){if(!(a instanceof Array)){a=h(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
var ba="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},n="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var q=ca(this);function t(a,b){if(b)a:{var c=q;a=a.split(".");for(var d=0;d<a.length-1;d++){var k=a[d];if(!(k in c))break a;c=c[k]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&n(c,a,{configurable:!0,writable:!0,value:b})}}var da;
if("function"==typeof Object.setPrototypeOf)da=Object.setPrototypeOf;else{var ea;a:{var fa={o:!0},ha={};try{ha.__proto__=fa;ea=ha.o;break a}catch(a){}ea=!1}da=ea?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ia=da;
function u(a,b){a.prototype=ba(b.prototype);a.prototype.constructor=a;if(ia)ia(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c]}
t("Symbol",function(a){function b(k){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(k||"")+"_"+d++,k)}function c(k,p){this.b=k;n(this,"description",{configurable:!0,writable:!0,value:p})}if(a)return a;c.prototype.toString=function(){return this.b};var d=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=q[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&n(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ja(aa(this))}})}return a});function ja(a){a={next:a};a[Symbol.iterator]=function(){return this};return a}
function v(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
t("WeakMap",function(a){function b(e){this.b=(f+=Math.random()+1).toString();if(e){e=h(e);for(var g;!(g=e.next()).done;)g=g.value,this.set(g[0],g[1])}}function c(){}function d(e){var g=typeof e;return"object"===g&&null!==e||"function"===g}function k(e){if(!v(e,r)){var g=new c;n(e,r,{value:g})}}function p(e){var g=Object[e];g&&(Object[e]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&k(m);return g(m)})}if(function(){if(!a||!Object.seal)return!1;try{var e=Object.seal({}),g=Object.seal({}),
m=new a([[e,2],[g,3]]);if(2!=m.get(e)||3!=m.get(g))return!1;m.delete(e);m.set(g,4);return!m.has(e)&&4==m.get(g)}catch(D){return!1}}())return a;var r="$jscomp_hidden_"+Math.random();p("freeze");p("preventExtensions");p("seal");var f=0;b.prototype.set=function(e,g){if(!d(e))throw Error("Invalid WeakMap key");k(e);if(!v(e,r))throw Error("WeakMap key fail: "+e);e[r][this.b]=g;return this};b.prototype.get=function(e){return d(e)&&v(e,r)?e[r][this.b]:void 0};b.prototype.has=function(e){return d(e)&&v(e,
r)&&v(e[r],this.b)};b.prototype.delete=function(e){return d(e)&&v(e,r)&&v(e[r],this.b)?delete e[r][this.b]:!1};return b});
t("Map",function(a){function b(){var f={};return f.h=f.next=f.head=f}function c(f,e){var g=f.b;return ja(function(){if(g){for(;g.head!=f.b;)g=g.h;for(;g.next!=g.head;)return g=g.next,{done:!1,value:e(g)};g=null}return{done:!0,value:void 0}})}function d(f,e){var g=e&&typeof e;"object"==g||"function"==g?p.has(e)?g=p.get(e):(g=""+ ++r,p.set(e,g)):g="p_"+e;var m=f.g[g];if(m&&v(f.g,g))for(f=0;f<m.length;f++){var D=m[f];if(e!==e&&D.key!==D.key||e===D.key)return{id:g,list:m,index:f,f:D}}return{id:g,list:m,
index:-1,f:void 0}}function k(f){this.g={};this.b=b();this.size=0;if(f){f=h(f);for(var e;!(e=f.next()).done;)e=e.value,this.set(e[0],e[1])}}if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var f=Object.seal({x:4}),e=new a(h([[f,"s"]]));if("s"!=e.get(f)||1!=e.size||e.get({x:4})||e.set({x:4},"t")!=e||2!=e.size)return!1;var g=e.entries(),m=g.next();if(m.done||m.value[0]!=f||"s"!=m.value[1])return!1;m=g.next();return m.done||4!=m.value[0].x||
"t"!=m.value[1]||!g.next().done?!1:!0}catch(D){return!1}}())return a;var p=new WeakMap;k.prototype.set=function(f,e){f=0===f?0:f;var g=d(this,f);g.list||(g.list=this.g[g.id]=[]);g.f?g.f.value=e:(g.f={next:this.b,h:this.b.h,head:this.b,key:f,value:e},g.list.push(g.f),this.b.h.next=g.f,this.b.h=g.f,this.size++);return this};k.prototype.delete=function(f){f=d(this,f);return f.f&&f.list?(f.list.splice(f.index,1),f.list.length||delete this.g[f.id],f.f.h.next=f.f.next,f.f.next.h=f.f.h,f.f.head=null,this.size--,
!0):!1};k.prototype.clear=function(){this.g={};this.b=this.b.h=b();this.size=0};k.prototype.has=function(f){return!!d(this,f).f};k.prototype.get=function(f){return(f=d(this,f).f)&&f.value};k.prototype.entries=function(){return c(this,function(f){return[f.key,f.value]})};k.prototype.keys=function(){return c(this,function(f){return f.key})};k.prototype.values=function(){return c(this,function(f){return f.value})};k.prototype.forEach=function(f,e){for(var g=this.entries(),m;!(m=g.next()).done;)m=m.value,
f.call(e,m[1],m[0],this)};k.prototype[Symbol.iterator]=k.prototype.entries;var r=0;return k});
t("Set",function(a){function b(c){this.b=new Map;if(c){c=h(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.b.size}if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(h([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var k=d.entries(),p=k.next();if(p.done||p.value[0]!=c||p.value[1]!=c)return!1;p=k.next();return p.done||p.value[0]==c||4!=p.value[0].x||
p.value[1]!=p.value[0]?!1:k.next().done}catch(r){return!1}}())return a;b.prototype.add=function(c){c=0===c?0:c;this.b.set(c,c);this.size=this.b.size;return this};b.prototype.delete=function(c){c=this.b.delete(c);this.size=this.b.size;return c};b.prototype.clear=function(){this.b.clear();this.size=0};b.prototype.has=function(c){return this.b.has(c)};b.prototype.entries=function(){return this.b.entries()};b.prototype.values=function(){return this.b.values()};b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=
b.prototype.values;b.prototype.forEach=function(c,d){var k=this;this.b.forEach(function(p){return c.call(d,p,p,k)})};return b});t("Array.prototype.flat",function(a){return a?a:function(b){b=void 0===b?1:b;for(var c=[],d=0;d<this.length;d++){var k=this[d];Array.isArray(k)&&0<b?(k=Array.prototype.flat.call(k,b-1),c.push.apply(c,k)):c.push(k)}return c}});
var ka="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var k in d)v(d,k)&&(a[k]=d[k])}return a};t("Object.assign",function(a){return a||ka});t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var k=d.length;c=c||0;for(0>c&&(c=Math.max(c+k,0));c<k;c++){var p=d[c];if(p===b||Object.is(p,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return-1!==this.indexOf(b,c||0)}});t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)v(b,d)&&c.push([d,b[d]]);return c}});
if("undefined"===typeof goog){var la={define:function(a,b){return b}};"undefined"!==typeof global?global.s=la:"undefined"!==typeof window&&(window.s=la)}function ma(){var a=document.createElement("style");a.id="ww-stylesheet";return a}var w=ma(),na=[];function oa(a){for(var b=0;b<arguments.length;++b);};/*
 MIT
*/
function x(a){function b(){y.apply(this,arguments)}for(var c=[],d=0;d<arguments.length;++d)c[d]=arguments[d];u(b,y);q.Object.defineProperties(b,{i:{configurable:!0,enumerable:!0,get:function(){var k=new Set(l(c.map(function(p){return p.i}).flat()).concat(l(y.i)));return l(k).concat()}},c:{configurable:!0,enumerable:!0,get:function(){return c.map(function(k){return k.c}).join("\n")}},attributes:{configurable:!0,enumerable:!0,get:function(){var k={};c.forEach(function(p){return Object.assign(k,p.attributes)})}}})}
function z(){this.l=this.constructor.b;this.attributes=Object.assign({},this.constructor.attributes);this.j=l(this.constructor.j).concat()}
q.Object.defineProperties(z,{b:{configurable:!0,enumerable:!0,get:function(){}},attributes:{configurable:!0,enumerable:!0,get:function(){return{}}},g:{configurable:!0,enumerable:!0,get:function(){return Object.getPrototypeOf(this).i||[]}},i:{configurable:!0,enumerable:!0,get:function(){var a=new Set([this].concat(l(this.g)));a=l(a).concat().filter(function(b){return b!==z});return l(a).concat()}},j:{configurable:!0,enumerable:!0,get:function(){var a=new Set(this.i.map(function(b){return b.name}));
return l(a).concat()}}});function y(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];z.call(this);this.m=b;this.l=this.constructor.b||"w";this.c=""}u(y,z);y.a=function(){var a=this.name,b=this.c||"";w.sheet||document.head.appendChild(w);if(na.includes(a))return oa("Styles for",a,"already exported. Skipping.");b&&(w.sheet.insertRule("."+a+" {"+b+"}"),na.push(a),this.g.forEach(function(c){return c.a()}))};y.prototype.append=function(a){a.b();this.element.appendChild(a.element);return this};
function pa(a){if(a.attributes)for(var b=h(Object.entries(a.attributes)),c=b.next();!c.done;c=b.next()){var d=h(c.value);c=d.next().value;d=d.next().value;a.element.setAttribute(c,d)}return a}function qa(a){var b=a.j;b.length&&(a.element.className=b.join(" "));return a}function ra(a){a.c&&a.element.setAttribute("style",a.c)}function sa(a){a.element||a.b();return a}
y.prototype.b=function(){var a=this;this.constructor.a();ra(qa(pa(ta(this,document.createElement(this.l)))));this.m.length&&this.m.forEach(function(b){a.append("string"!==typeof b?b:new A(b))});return this};y.prototype.freeze=function(){console.log("<!DOCTYPE html>"+sa(this).u);return this};function ta(a,b){a.element?a.element.replaceWith(b):a.element=b;return a}function ua(a,b){b=void 0===b?{}:b;Object.assign(a.attributes||{},b)}
q.Object.defineProperties(y.prototype,{u:{configurable:!0,enumerable:!0,get:function(){return this.element.outerHTML}}});q.Object.defineProperties(y,{c:{configurable:!0,enumerable:!0,get:function(){return"\n      box-sizing: border-box;\n    "}}});function A(a){y.call(this);this.text=a}u(A,y);A.a=y.a;A.prototype.b=function(){return ta(this,document.createTextNode(this.text))};function B(){y.apply(this,arguments)}u(B,y);B.a=y.a;q.Object.defineProperties(B,{c:{configurable:!0,enumerable:!0,get:function(){return"box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),0 2px 1px -1px rgba(0, 0, 0, 0.12),0 1px 3px 0 rgba(0, 0, 0, 0.20);"}}});function C(){y.apply(this,arguments)}u(C,y);C.a=y.a;q.Object.defineProperties(C,{c:{configurable:!0,enumerable:!0,get:function(){return"\n            display: block;\n        "}}});function E(){y.apply(this,arguments)}u(E,y);E.a=y.a;
q.Object.defineProperties(E,{c:{configurable:!0,enumerable:!0,get:function(){return"position: fixed;"}}});function F(){y.apply(this,arguments)}u(F,y);F.a=y.a;q.Object.defineProperties(F,{c:{configurable:!0,enumerable:!0,get:function(){return"width: 100%;"}}});function G(){y.apply(this,arguments)}u(G,y);G.a=y.a;q.Object.defineProperties(G,{c:{configurable:!0,enumerable:!0,get:function(){return"height: 100%;"}}});function H(){y.apply(this,arguments)}u(H,y);H.a=y.a;
function I(){H.apply(this,arguments)}u(I,H);I.a=H.a;q.Object.defineProperties(I,{b:{configurable:!0,enumerable:!0,get:function(){return"h1"}},c:{configurable:!0,enumerable:!0,get:function(){}}});function J(){H.apply(this,arguments)}u(J,H);J.a=H.a;q.Object.defineProperties(J,{b:{configurable:!0,enumerable:!0,get:function(){return"h2"}},c:{configurable:!0,enumerable:!0,get:function(){}}});function K(){y.apply(this,arguments)}u(K,y);K.a=y.a;
q.Object.defineProperties(K,{c:{configurable:!0,enumerable:!0,get:function(){return"\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n        "}}});function L(){K.apply(this,arguments)}u(L,K);L.a=K.a;q.Object.defineProperties(L,{c:{configurable:!0,enumerable:!0,get:function(){return"\n            align-items: center;\n            justify-content: center;\n            text-align: center;\n        "}}});x(I,L);x(J,L);
function M(){K.apply(this,arguments)}u(M,K);M.a=K.a;q.Object.defineProperties(M,{c:{configurable:!0,enumerable:!0,get:function(){return"\n      flex-basis: 0;\n      flex-grow: 1;\n      flex-shrink: 0;\n\n      width: 100%;\n      height: 100%;\n\n      max-height: 100%;\n      max-height: -moz-available;\n      max-height: -webkit-fill-available;\n      max-height: fill-available;\n\n      margin: 0px;\n      padding: 0px;\n    "}}});function N(){M.apply(this,arguments)}u(N,M);N.a=M.a;
q.Object.defineProperties(N,{c:{configurable:!0,enumerable:!0,get:function(){return"\n            flex-direction: column !important;\n        "}}});function O(){M.apply(this,arguments)}u(O,M);O.a=M.a;q.Object.defineProperties(O,{c:{configurable:!0,enumerable:!0,get:function(){return"\n            flex-direction: row !important;\n        "}}});function P(){K.apply(this,arguments)}u(P,K);P.a=K.a;q.Object.defineProperties(P,{c:{configurable:!0,enumerable:!0,get:function(){return"\n            background: rgba(255, 255, 255, 0.1);\n            border: 4px solid white;\n            margin: 10px;\n        "}}});
x(L,P,F);x(F,O);x(G,N);function Q(){y.apply(this,arguments)}u(Q,y);Q.a=y.a;Q.prototype.b=function(){var a=this;y.prototype.b.call(this);requestAnimationFrame(function(){return a.g()});return this};Q.prototype.g=function(){};function R(){Q.apply(this,arguments)}u(R,Q);R.a=Q.a;R.prototype.g=function(){Q.prototype.g.call(this);this.element.style.opacity=1};q.Object.defineProperties(R,{c:{configurable:!0,enumerable:!0,get:function(){return"\n            opacity: 0;\n            transition: opacity 0.5s ease-in-out;\n        "}}});
x(O,B);function S(){y.apply(this,arguments)}u(S,y);S.a=y.a;S.prototype.b=function(){this.j=[];y.prototype.b.call(this);return this};function T(){S.apply(this,arguments)}u(T,S);T.a=S.a;q.Object.defineProperties(T,{b:{configurable:!0,enumerable:!0,get:function(){return"head"}}});function va(){S.apply(this,arguments)}u(va,S);va.a=S.a;q.Object.defineProperties(va,{b:{configurable:!0,enumerable:!0,get:function(){return"title"}}});function U(a){a=void 0===a?{}:a;S.call(this);ua(this,a)}u(U,S);U.a=S.a;
q.Object.defineProperties(U,{b:{configurable:!0,enumerable:!0,get:function(){return"link"}},attributes:{configurable:!0,enumerable:!0,get:function(){return{rel:"stylesheet"}}}});function V(a){ua((S.call(this),this),a)}u(V,S);V.a=S.a;q.Object.defineProperties(V,{b:{configurable:!0,enumerable:!0,get:function(){return"meta"}}});function W(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];y.apply(this,l(b).concat())}u(W,y);W.a=y.a;
W.prototype.b=function(){y.prototype.b.call(this);for(var a=ma(),b=h(w.sheet.cssRules),c=b.next();!c.done;c=b.next())a.textContent+=c.value.cssText;this.element.firstChild.appendChild(a);return this};q.Object.defineProperties(W,{b:{configurable:!0,enumerable:!0,get:function(){return"html"}},c:{configurable:!0,enumerable:!0,get:function(){return"\n    -webkit-font-smoothing: antialiased;\n    scroll-behavior: smooth;\n    font-size: 100%;\n    height: 100%;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n"}}});
function X(){R.apply(this,arguments)}u(X,R);X.a=R.a;X.prototype.b=function(){R.prototype.b.call(this);var a=document.createElement("script");a.src="dist/exe.initState.js";this.element.append(a);return this};q.Object.defineProperties(X,{b:{configurable:!0,enumerable:!0,get:function(){return"body"}},c:{configurable:!0,enumerable:!0,get:function(){return"\n    -webkit-font-smoothing: antialiased;\n    scroll-behavior: smooth;\n    font-size: 100%;\n    height: 100%;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n"}}});
function Y(a){a=void 0===a?{href:""}:a;y.call(this);this.attributes=a}u(Y,y);Y.a=y.a;Y.prototype.b=function(){y.prototype.b.call(this);this.element=document.createDocumentFragment();var a=new U(Object.assign({},{rel:"preload",as:"style",onload:"this.onload=null;this.rel='stylesheet'"},this.attributes)),b=new wa(new U(Object.assign({},this.attributes)));this.element.appendChild(a.b().element);this.element.appendChild(b.b().element);return this};
function Z(a,b){b=void 0===b?[300,400,700]:b;Y.call(this,{href:"https://fonts.googleapis.com/css2?family="+(void 0===a?"Lato":a).replace(" ","+")+":wght@"+b.join(";")+"&display=swap"})}u(Z,Y);Z.a=Y.a;function wa(){S.apply(this,arguments)}u(wa,S);wa.a=S.a;q.Object.defineProperties(wa,{b:{configurable:!0,enumerable:!0,get:function(){return"NoScript"}}});var xa=[new V({"http-equiv":"Content-Type",content:"text/html; charset=UTF-8"}),new V({"http-equiv":"X-UA-Compatible",content:"IE=edge,chrome=1"}),new V({name:"viewport",content:"width=device-width, initial-scale=1.0"})];function ya(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];T.apply(this,l(xa).concat(l(b)))}u(ya,T);ya.a=T.a;function za(){E.apply(this,arguments)}u(za,E);za.a=E.a;
q.Object.defineProperties(za,{b:{configurable:!0,enumerable:!0,get:function(){return"progress"}},c:{configurable:!0,enumerable:!0,get:function(){return"\n      background: #009688;\n      height: 24px;\n      width: 0%;\n    "}}});function Aa(){C.apply(this,arguments)}u(Aa,C);Aa.a=C.a;q.Object.defineProperties(Aa,{c:{configurable:!0,enumerable:!0,get:function(){return"\n      height: 100%;\n      max-width: 768px;\n      margin: 0 auto;\n    "}}});(new W(new ya(new va("Test Title"),new Z("Playfair Display",[900]),new Z("Libre Baskerville",[700]),new Z("Raleway",[700]),new Y({href:"https://fonts.googleapis.com/icon?family=Material+Icons&display=block"})),new X(new za,new Aa(function(){var a=new M;a.c+="background: #555";return a}(),new M)))).freeze();}).call(this);

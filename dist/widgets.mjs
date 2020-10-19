if("undefined"===typeof goog){let a={define:(b,d)=>d};"undefined"!==typeof global?global.goog=a:"undefined"!==typeof window&&(window.goog=a)}let c=(a,b)=>{a=document.createElement(a);a.id=b;return a},f=c("style","ww-stylesheet"),g=[];function h(a,b){if(b.name)return b.name;for(let d in a)if(a[d]===b)return d;return null}let k=()=>{f.sheet||document.head.appendChild(f)};
function l(...a){return class extends m{static get classes(){return[...new Set([...a.map(a=>a.classes).flat(),...super.classes])]}static get styles(){return a.map(a=>a.styles).join("\n")}static get attributes(){let b={};for(let d of a)Object.assign(b,d.attributes);return b}}}
class n{constructor(){this.tag=this.constructor.tag;this.attributes={...this.constructor.attributes};this.classNames=[...this.constructor.classNames]}static get tag(){return""}static get attributes(){return{}}static get inheritedClasses(){return Object.getPrototypeOf(this).classes||[]}static get classes(){return[...[...new Set([this,...this.inheritedClasses])].filter(a=>a!==n)]}static get classNames(){return[...new Set(this.classes.map(a=>a.name))]}}
class m extends n{constructor(...a){super();this.constructor.name in window||(window[this.constructor.name]=this.constructor);this.children=a;this.tag=this.constructor.tag||"w";this.styles=""}get html(){return this.element.outerHTML}static get styles(){return"\n    transition: all 1s ease-in-out;\n    box-sizing: border-box;\n  "}static exportStyles(){let a=this.name,b=this.styles||"";k();!g.includes(a)&&b&&(f.sheet.insertRule(`.${a} {${b}}`),g.push(a),this.inheritedClasses.forEach(a=>a.exportStyles()))}static from(a){var b=
this.name,d=a.getAttribute("constructor");if(d&&b!==d){var e=window[d];b=h(e,e.from);return e[b](a)}b=new this;d={};let na=["class","style"];b.element=a;b.tag=a.tagName.toLowerCase();b.classNames=Array.from(a.classList);for(e of a.attributes){let [a,b]=[e.name,e.value];na.includes(a)||(d[a]=b)}b.setAttributes(d);return b}async animate(a,b,d="0.2s ease-in"){await new Promise(e=>{requestAnimationFrame(()=>{this.element.style.setProperty("transform",`${a} ${d}`);this.element.style.setProperty(a,b);e()})});
return this}append(a){switch(typeof a){case "string":a=new p(a)}let b=this.maybeBuild().element;a=a.maybeBuild().element;b.appendChild(a);return this}applyAttributes(){if(this.attributes)for(let [a,b]of Object.entries(this.attributes))window.FREEZE_MODE&&"constructor"===a||this.element.setAttribute(a,b);return this}applyClasses(){let a=this.classNames;a.length&&(this.element.className=a.join(" "));return this}applyStyles(){let a=this.styles.replace(/(\s{2,}|\n+)/g," ").trim();this.styles&&this.element.setAttribute("style",
a);return this}maybeBuild(){this.element||this.build();return this}build(){this.constructor.exportStyles();this.createElement().applyAttributes().applyClasses().applyStyles();this.children.length&&this.children.forEach(a=>this.append(a));return this}createElement(){let a=document.createElement(this.tag);return this.replaceElement(a)}freeze(){return`<!DOCTYPE html>${this.build().html}`}initState(){}render(a=this.element){this.maybeBuild();a.replaceWith(this.element);return this}replaceElement(a){this.element?
this.element.replaceWith(a):this.element=a;return this}replaceText(a){a=document.createTextNode(a);return this.replaceElement(a)}setAttributes(a={}){for(let b of Object.keys(a)){let d=a[b];null===d?delete this.attributes[b]:this.attributes[b]=d}return this}setClasses(...a){this.classNames.push(...a);return this}setStyles(...a){for(let b of a)this.styles+=b;return this}}
class q extends m{build(){super.build();let a=document.createElement("script");var b=this.constructor;b="(function(){var el=document.currentScript.parentNode;requestAnimationFrame(function(){"+`${b.name}`+`.${h(b,b.from)}(el)`+`.${h(b.prototype,b.prototype.initState)}();});})();`;a.setAttribute("async",!0);a.appendChild(document.createTextNode(b));this.element.appendChild(a);return this}initState(){}}
class p extends m{constructor(a){super();this.text=a}build(){return this.replaceText(this.text)}}class r extends m{static get styles(){return"box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),0 2px 1px -1px rgba(0, 0, 0, 0.12),0 1px 3px 0 rgba(0, 0, 0, 0.20);"}}class t extends m{static get styles(){return"box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),0 3px 1px -2px rgba(0, 0, 0, 0.12),0 1px 5px 0 rgba(0, 0, 0, 0.20);"}}class u extends m{static get styles(){return"display: block;"}}
class v extends m{static get styles(){return"padding: 16px;"}}class w extends m{static get styles(){return"position: relative;"}}class x extends m{static get styles(){return"position: absolute;"}}class y extends m{static get styles(){return"position: fixed;"}}class z extends m{static get styles(){return"width: 100%;"}}class A extends m{static get styles(){return"height: 100%;"}}class B extends m{}class C extends B{static get tag(){return"h1"}static get styles(){return"font-size: 2rem"}}
class D extends B{static get tag(){return"h2"}static get styles(){return"font-size: 1rem"}}class E extends m{static get styles(){return"\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n        "}setFlex(a=1){return this.setStyles(`flex-grow: ${a};`)}}class F extends E{static get styles(){return"\n            margin: auto;\n            align-items: center;\n            justify-content: center;\n            text-align: center;\n        "}}
class G extends E{static get styles(){return"\n      flex-basis: 0;\n      flex-grow: 1;\n      flex-shrink: 0;\n\n      width: 100%;\n      height: 100%;\n\n      max-height: 100%;\n      max-height: -moz-available;\n      max-height: -webkit-fill-available;\n      max-height: fill-available;\n\n      margin: 0px;\n      padding: 0px;\n    "}}class H extends G{static get styles(){return"flex-direction: column !important;"}}
class I extends G{static get styles(){return"flex-direction: row !important;"}}class J extends G{}class K extends E{static get styles(){return"\n            background: rgba(255, 255, 255, 0.1);\n            border: 4px solid white;\n            margin: 10px;\n        "}}class L extends B{static get styles(){return"color: black;"}}class M extends B{static get styles(){return"font-weight: bold;"}}class N extends m{static get tag(){return"img"}constructor(a){super();this.setAttributes({src:a})}}
class O extends G{constructor(a){super();this.setStyles(`background-image: url(${a});`)}}class P extends m{static get styles(){return"height: 80px;"}}class Q extends L{static get styles(){return"opacity: 0.5;"}}class R extends q{static get styles(){return"\n            opacity: 0;\n            transition: opacity 0.5s ease-in-out;\n        "}initState(){super.initState();this.element.style.opacity=1}}
class aa extends m{static get tag(){return"i"}static get styles(){return"\n            font-size: 36px;\n            user-select: none;\n        "}constructor(a){super(a);this.setClasses("material-icons")}}class ba extends z{static get styles(){return"\n            display: table;\n            overflow: scroll;\n        "}}class S extends m{build(){this.classNames=[];super.build();return this}}
class ca extends S{static get tag(){return"head"}build(){super.build();this.append(new T("exports/exe.namespace.js","dist/exe.namespace.js"));return this}}class da extends S{static get tag(){return"title"}}class U extends S{static get tag(){return"link"}static get attributes(){return{rel:"stylesheet"}}constructor(a={}){super();this.setAttributes(a)}}class ea extends S{static get tag(){return"meta"}constructor(a){super().setAttributes(a)}}
class fa extends m{static get tag(){return"html"}static get styles(){return"\n    -webkit-font-smoothing: antialiased;\n    scroll-behavior: smooth;\n    font-size: 100%;\n    height: 100%;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n"}constructor(...a){super(...a)}exportStylesheet(){let a=c("style","ww-stylesheet");a.setAttribute("defer",!0);for(let b of f.sheet.cssRules)a.textContent+=b.cssText;this.element.querySelector("head").appendChild(a);return this}build(){super.build();return this.exportStylesheet()}render(){document.documentElement.replaceWith(this.maybeBuild().element||
"ERROR");return this}}class ha extends m{static get tag(){return"body"}static get styles(){return"\n    -webkit-font-smoothing: antialiased;\n    scroll-behavior: smooth;\n    font-size: 100%;\n    height: 100%;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n"}}
class V extends m{constructor(a={href:""}){super();this.attributes=a}build(){super.build();this.element=document.createDocumentFragment();let a=new U({rel:"preload",as:"style",onload:"this.onload=null;this.rel='stylesheet'",...this.attributes}),b=new W(new U({...this.attributes}));this.element.appendChild(a.build().element);this.element.appendChild(b.build().element);return this}}
class ia extends V{constructor(a="Lato",b=[300,400,700]){super({href:`https://fonts.googleapis.com/css2?family=${a.replace(" ","+")}:wght@${b.join(";")}&display=swap`})}}class X extends m{static get tag(){return"input"}}class ja extends X{static get attributes(){return{type:"email"}}}class ka extends m{static get tag(){return"button"}}class la extends X{static get attributes(){return{type:"submit"}}}class ma extends G{static get styles(){return"justify-content: space-evenly;"}}
class W extends S{static get tag(){return"NoScript"}}class Y extends S{static get tag(){return"script"}static get attributes(){return{async:!0}}}class Z extends Y{static get attributes(){return{inline:!0}}}class T extends Z{constructor(a,b){super();this.setAttributes({src:b,async:!0})}}
export default {Absolute:x,AsyncStylesheet:V,Block:u,BodyWidget:ha,BoldText:M,BottomBar:P,Button:ka,Card:K,Center:F,Column:H,DarkText:L,DebugScript:T,Elevation1:r,Elevation2:t,EmailInput:ja,Expanded:G,FadeIn:R,Fixed:y,Flex:E,FlexImg:O,FullHeight:A,FullWidth:z,GoogleFont:ia,GreyText:Q,HTMLWidget:fa,Head:ca,Heading1:C,Heading2:D,Img:N,Inheritable:n,InlineScript:Z,InputWidget:X,Link:U,List:ba,MaterialIcon:aa,Meta:ea,Mix:l,NoScript:W,Padding:v,Relative:w,Row:I,Script:Y,Slide:J,SpaceEvenly:ma,StatefulWidget:q,
SubmitButton:la,TextNode:p,TextWidget:B,Title:da,UnstyledWidget:S,Widget:m,WidgetLike:void 0,maybeInstallStylesheet:k};
var WidgetLike=void 0;export{x as Absolute,V as AsyncStylesheet,u as Block,ha as BodyWidget,M as BoldText,P as BottomBar,ka as Button,K as Card,F as Center,H as Column,L as DarkText,T as DebugScript,r as Elevation1,t as Elevation2,ja as EmailInput,G as Expanded,R as FadeIn,y as Fixed,E as Flex,O as FlexImg,A as FullHeight,z as FullWidth,ia as GoogleFont,Q as GreyText,fa as HTMLWidget,ca as Head,C as Heading1,D as Heading2,N as Img,n as Inheritable,Z as InlineScript,X as InputWidget,U as Link,ba as List,aa as MaterialIcon,ea as Meta,l as Mix,W as NoScript,v as Padding,w as Relative,I as Row,Y as Script,J as Slide,ma as SpaceEvenly,q as StatefulWidget,la as SubmitButton,p as TextNode,B as TextWidget,da as Title,S as UnstyledWidget,m as Widget,WidgetLike,k as maybeInstallStylesheet}

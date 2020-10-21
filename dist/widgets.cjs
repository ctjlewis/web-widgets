Object.defineProperty(exports,"__esModule",{value:!0});if("undefined"===typeof goog){let a={define:(b,d)=>d};"undefined"!==typeof global?global.goog=a:"undefined"!==typeof window&&(window.goog=a)}let c=(a,b)=>{a=document.createElement(a);a.id=b;return a},e=c("style","ww-stylesheet"),f=[];function g(a,b){if(b.name)return b.name;for(let d in a)if(a[d]===b)return d;return null}let h=()=>{e.sheet||document.head.appendChild(e)};
function k(...a){return class extends l{static get classes(){return[...new Set([...a.map(a=>a.classes).flat(),...super.classes])]}static get styles(){return a.map(a=>a.styles).join("\n")}static get attributes(){let b={};for(let d of a)Object.assign(b,d.attributes);return b}}}
class m{constructor(){this.tag=this.constructor.tag;this.attributes={...this.constructor.attributes};this.classNames=[...this.constructor.classNames]}static get tag(){return""}static get attributes(){return{}}static get inheritedClasses(){return Object.getPrototypeOf(this).classes||[]}static get classes(){return[...[...new Set([this,...this.inheritedClasses])].filter(a=>a!==m)]}static get classNames(){return[...new Set(this.classes.map(a=>a.name))]}}
class l extends m{constructor(...a){super();this.constructor.name in window||(window[this.constructor.name]=this.constructor);this.children=a;this.tag=this.constructor.tag||"w";this.styles=""}get html(){return this.element.outerHTML}static get styles(){return"\n    transition: all 1s ease-in-out;\n    box-sizing: border-box;\n  "}static exportStyles(){let a=this.name,b=this.styles||"";h();f.includes(a)||(b&&(e.sheet.insertRule(`.${a} {${b}}`),f.push(a)),this.inheritedClasses.forEach(a=>a.exportStyles()))}static from(a){let b=
new this,d={},q=["class","style"];b.element=a;b.tag=a.tagName.toLowerCase();b.classNames=Array.from(a.classList);for(let b of a.attributes){let [a,oa]=[b.name,b.value];q.includes(a)||(d[a]=oa)}b.setAttributes(d);return b}async animate(a,b,d="0.2s ease-in"){await new Promise(q=>{requestAnimationFrame(()=>{this.element.style.setProperty("transform",`${a} ${d}`);this.element.style.setProperty(a,b);q()})});return this}append(a){switch(typeof a){case "string":a=new n(a)}let b=this.maybeBuild().element;
a=a.maybeBuild().element;b.appendChild(a);return this}applyAttributes(){if(this.attributes)for(let [a,b]of Object.entries(this.attributes))window.FREEZE_MODE&&"constructor"===a||this.element.setAttribute(a,b);return this}applyClasses(){let a=this.classNames;a.length&&(this.element.className=a.join(" "));return this}applyStyles(){let a=this.styles.replace(/(\s{2,}|\n+)/g," ").trim();this.styles&&this.element.setAttribute("style",a);return this}maybeBuild(){this.element||this.build();return this}build(){this.constructor.exportStyles();
this.createElement().applyAttributes().applyClasses().applyStyles();this.children.length&&this.children.forEach(a=>this.append(a));return this}buildTest(){return this}createElement(){let a=document.createElement(this.tag);return this.replaceElement(a)}freeze(){return`<!DOCTYPE html>${this.build().html}`}initState(){}render(a=this.element){this.maybeBuild();a.replaceWith(this.element);return this}replaceElement(a){this.element?this.element.replaceWith(a):this.element=a;return this}replaceText(a){a=
document.createTextNode(a);return this.replaceElement(a)}setAttributes(a={}){Object.assign(this.attributes||{},a);return this}setClasses(...a){this.classNames.push(...a);return this}setStyles(...a){for(let b of a)this.styles+=b;return this}}
class p extends l{constructor(...a){super(...a);this.state={}}build(){super.build();let a=document.createElement("script");var b=this.constructor;b="(function(){var el=document.currentScript.parentNode;requestAnimationFrame(function(){"+`${b.name}`+`.${g(b,b.from)}(el)`+`.${g(b.prototype,b.prototype.initState)}();});})();`;a.setAttribute("async",!0);a.appendChild(document.createTextNode(b));this.element.appendChild(a);return this}initState(){}}
class n extends l{constructor(a){super();this.text=a}build(){return this.replaceText(this.text)}}class r extends l{constructor(a){super();this.text=a}renderElement(){return document.createTextNode(this.text)}}class t extends l{static get styles(){return"box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),0 2px 1px -1px rgba(0, 0, 0, 0.12),0 1px 3px 0 rgba(0, 0, 0, 0.20);"}}
class u extends l{static get styles(){return"box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),0 3px 1px -2px rgba(0, 0, 0, 0.12),0 1px 5px 0 rgba(0, 0, 0, 0.20);"}}class v extends l{static get styles(){return"display: block;"}}class w extends l{static get styles(){return"padding: 16px;"}}class x extends l{static get styles(){return"position: relative;"}}class y extends l{static get styles(){return"position: absolute;"}}class z extends l{static get styles(){return"position: fixed;"}}
class A extends l{static get styles(){return"width: 100%;"}}class B extends l{static get styles(){return"height: 100%;"}}class C extends l{}class D extends C{static get tag(){return"h1"}static get styles(){return"font-size: 2rem"}}class E extends C{static get tag(){return"h2"}static get styles(){return"font-size: 1rem"}}
class F extends l{static get styles(){return"\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n        "}setFlex(a=1){return this.setStyles(`flex-grow: ${a};`)}}class G extends F{static get styles(){return"\n            margin: auto;\n            align-items: center;\n            justify-content: center;\n            text-align: center;\n        "}}
class H extends F{static get styles(){return"\n      flex-basis: 0;\n      flex-grow: 1;\n      flex-shrink: 0;\n\n      width: 100%;\n      height: 100%;\n\n      max-height: 100%;\n      max-height: -moz-available;\n      max-height: -webkit-fill-available;\n      max-height: fill-available;\n\n      margin: 0px;\n      padding: 0px;\n    "}}class I extends H{static get styles(){return"flex-direction: column !important;"}}
class J extends H{static get styles(){return"flex-direction: row !important;"}}class K extends H{}class L extends F{static get styles(){return"\n            background: rgba(255, 255, 255, 0.1);\n            border: 4px solid white;\n            margin: 10px;\n        "}}class M extends C{static get styles(){return"color: black;"}}class N extends C{static get styles(){return"font-weight: bold;"}}class O extends l{static get tag(){return"img"}constructor(a){super();this.setAttributes({src:a})}}
class P extends H{constructor(a){super();this.setStyles(`background-image: url(${a});`)}}class Q extends l{static get styles(){return"height: 80px;"}}class R extends M{static get styles(){return"opacity: 0.5;"}}class aa extends p{static get styles(){return"\n            opacity: 0;\n            transition: opacity 0.5s ease-in-out;\n        "}initState(){super.initState();this.element.style.opacity=1}}
class ba extends l{static get tag(){return"i"}static get styles(){return"\n            font-size: 36px;\n            user-select: none;\n        "}constructor(a){super(a);this.setClasses("material-icons")}}class ca extends A{static get styles(){return"\n            display: table;\n            overflow: scroll;\n        "}}class S extends l{build(){this.classNames=[];super.build();return this}}
class da extends S{static get tag(){return"head"}build(){super.build();this.append(new T("exports/exe.namespace.js","dist/exe.namespace.js"));return this}}class ea extends S{static get tag(){return"title"}}class U extends S{static get tag(){return"link"}static get attributes(){return{rel:"stylesheet"}}constructor(a={}){super();this.setAttributes(a)}}class fa extends S{static get tag(){return"meta"}constructor(a){super().setAttributes(a)}}
class ha extends l{static get tag(){return"html"}static get styles(){return"\n    -webkit-font-smoothing: antialiased;\n    scroll-behavior: smooth;\n    font-size: 100%;\n    height: 100%;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n"}constructor(...a){super(...a)}exportStylesheet(){let a=c("style","ww-stylesheet");a.setAttribute("defer",!0);for(let b of e.sheet.cssRules)a.textContent+=b.cssText;this.element.querySelector("head").appendChild(a);return this}build(){super.build();return this.exportStylesheet()}render(){document.documentElement.replaceWith(this.maybeBuild().element||
"ERROR");return this}}class ia extends l{static get tag(){return"body"}static get styles(){return"\n    -webkit-font-smoothing: antialiased;\n    scroll-behavior: smooth;\n    font-size: 100%;\n    height: 100%;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n"}}
class V extends l{constructor(a={href:""}){super();this.attributes=a}build(){super.build();this.element=document.createDocumentFragment();let a=new U({rel:"preload",as:"style",onload:"this.onload=null;this.rel='stylesheet'",...this.attributes}),b=new W(new U({...this.attributes}));this.element.appendChild(a.build().element);this.element.appendChild(b.build().element);return this}}
class ja extends V{constructor(a="Lato",b=[300,400,700]){super({href:`https://fonts.googleapis.com/css2?family=${a.replace(" ","+")}:wght@${b.join(";")}&display=swap`})}}class X extends l{static get tag(){return"input"}}class ka extends X{static get attributes(){return{type:"email"}}}class la extends l{static get tag(){return"button"}}class ma extends X{static get attributes(){return{type:"submit"}}}class na extends H{static get styles(){return"justify-content: space-evenly;"}}
class W extends S{static get tag(){return"NoScript"}}class Y extends S{static get tag(){return"script"}static get attributes(){return{async:!0}}}class Z extends Y{static get attributes(){return{inline:!0}}}class T extends Z{constructor(a,b){super();this.setAttributes({src:b,async:!0})}}
var pa={Absolute:y,AsyncStylesheet:V,Block:v,BodyWidget:ia,BoldText:N,BottomBar:Q,Button:la,Card:L,Center:G,Column:I,DarkText:M,DebugScript:T,Elevation1:t,Elevation2:u,EmailInput:ka,Expanded:H,FadeIn:aa,Fixed:z,Flex:F,FlexImg:P,FullHeight:B,FullWidth:A,GoogleFont:ja,GreyText:R,HTMLWidget:ha,Head:da,Heading1:D,Heading2:E,Img:O,Inheritable:m,InlineScript:Z,InputWidget:X,Link:U,List:ca,MaterialIcon:ba,Meta:fa,Mix:k,NoScript:W,Padding:w,Relative:x,Row:J,Script:Y,Slide:K,SpaceEvenly:na,StatefulWidget:p,
SubmitButton:ma,TextNode:n,TextNodeTest:r,TextWidget:C,Title:ea,UnstyledWidget:S,Widget:l,WidgetLike:void 0,maybeInstallStylesheet:h};exports.Absolute=y;exports.AsyncStylesheet=V;exports.Block=v;exports.BodyWidget=ia;exports.BoldText=N;exports.BottomBar=Q;exports.Button=la;exports.Card=L;exports.Center=G;exports.Column=I;exports.DarkText=M;exports.DebugScript=T;exports.Elevation1=t;exports.Elevation2=u;exports.EmailInput=ka;exports.Expanded=H;exports.FadeIn=aa;exports.Fixed=z;exports.Flex=F;
exports.FlexImg=P;exports.FullHeight=B;exports.FullWidth=A;exports.GoogleFont=ja;exports.GreyText=R;exports.HTMLWidget=ha;exports.Head=da;exports.Heading1=D;exports.Heading2=E;exports.Img=O;exports.Inheritable=m;exports.InlineScript=Z;exports.InputWidget=X;exports.Link=U;exports.List=ca;exports.MaterialIcon=ba;exports.Meta=fa;exports.Mix=k;exports.NoScript=W;exports.Padding=w;exports.Relative=x;exports.Row=J;exports.Script=Y;exports.Slide=K;exports.SpaceEvenly=na;exports.StatefulWidget=p;
exports.SubmitButton=ma;exports.TextNode=n;exports.TextNodeTest=r;exports.TextWidget=C;exports.Title=ea;exports.UnstyledWidget=S;exports.Widget=l;exports.WidgetLike=void 0;exports.default=pa;exports.maybeInstallStylesheet=h

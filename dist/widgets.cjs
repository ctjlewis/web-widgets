Object.defineProperty(exports,"__esModule",{value:!0});if("undefined"===typeof goog){let a={define:(b,d)=>d};"undefined"!==typeof global?global.goog=a:"undefined"!==typeof window&&(window.goog=a)}let c=(a,b)=>{a=document.createElement(a);a.id=b;return a},e=c("style","ww-stylesheet"),f=[];
function g(...a){return class extends h{static get classes(){return[...new Set([...a.map(a=>a.classes).flat(),...super.classes])]}static get styles(){return a.map(a=>a.styles).join("\n")}static get attributes(){let b={};a.forEach(a=>Object.assign(b,a.attributes))}}}
class k{constructor(){this.tag=this.constructor.tag;this.attributes={...this.constructor.attributes};this.classNames=[...this.constructor.classNames]}static get tag(){return""}static get attributes(){return{}}static get inheritedClasses(){return Object.getPrototypeOf(this).classes||[]}static get classes(){return[...[...new Set([this,...this.inheritedClasses])].filter(a=>a!==k)]}static get classNames(){return[...new Set(this.classes.map(a=>a.name))]}static exportStyles(){let a=this.name,b=this.styles||
"";e.sheet||document.head.appendChild(e);!f.includes(a)&&b&&(e.sheet.insertRule(`.${a} {${b}}`),f.push(a),this.inheritedClasses.forEach(a=>a.exportStyles()))}build(){this.constructor.exportStyles();return this}}
class h extends k{constructor(...a){super();this.children=a;this.tag=this.constructor.tag||"w";this.classNames=this.constructor.classNames.slice(0)||[];this.attributes={...this.constructor.attributes};this.styles=""}get html(){return this.element.outerHTML}static get styles(){return"\n      box-sizing: border-box;\n    "}static from(a){let b=new this,d={},t=["class","style"];b.element=a;b.tag=a.tagName.toLowerCase();b.classNames=Array.from(a.classList);for(let b of a.attributes){let [a,ha]=[b.name,
b.value];t.includes(a)||(d[a]=ha)}b.setAttributes(d);return b}animate(a,b,d="0.2s ease-in"){requestAnimationFrame(()=>{this.element.style.setProperty("transition",`${a} ${d}`);this.element.style.setProperty(a,b)});return this}append(a){a.build();this.element.appendChild(a.element);return this}applyAttributes(){if(this.attributes)for(let [a,b]of Object.entries(this.attributes))this.element.setAttribute(a,b);return this}applyClasses(){let a=this.classNames;a.length&&(this.element.className=a.join(" "));
return this}applyStyles(){this.styles&&this.element.setAttribute("style",this.styles);return this}maybeBuild(){this.element||this.build();return this}build(){super.build();this.createElement().applyAttributes().applyClasses().applyStyles();this.children.length&&this.children.forEach(a=>{this.append("string"!==typeof a?a:new aa(a))});return this}createElement(){let a=document.createElement(this.tag);return this.replaceElement(a)}freeze(){console.log(`<!DOCTYPE html>${this.maybeBuild().html}`);return this}render(a){this.maybeBuild();
a||(a=this.element);console.log("target:",a);a.replaceWith(this.element);return this}replaceElement(a){this.element?this.element.replaceWith(a):this.element=a;return this}replaceText(a){a=document.createTextNode(a);return this.replaceElement(a)}setAttributes(a={}){Object.assign(this.attributes||{},a);return this}setClasses(...a){this.classNames.push(...a);return this}setStyles(a){this.styles+=a;return this}}
class aa extends h{constructor(a){super();this.text=a}build(){return this.replaceText(this.text)}}class l extends h{static get styles(){return"box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),0 2px 1px -1px rgba(0, 0, 0, 0.12),0 1px 3px 0 rgba(0, 0, 0, 0.20);"}}class m extends h{static get styles(){return"box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),0 3px 1px -2px rgba(0, 0, 0, 0.12),0 1px 5px 0 rgba(0, 0, 0, 0.20);"}}
class n extends h{static get styles(){return"\n            display: block;\n        "}}class p extends h{static get styles(){return"\n            padding: 16px;\n        "}}class q extends h{static get styles(){return"\n            position: relative;\n         "}}class r extends h{static get styles(){return"position: absolute;"}}class u extends h{static get styles(){return"position: fixed;"}}class v extends h{static get styles(){return"width: 100%;"}}
class w extends h{static get styles(){return"height: 100%;"}}class x extends h{}class y extends x{static get tag(){return"h1"}static get styles(){}}class z extends x{static get tag(){return"h2"}static get styles(){}}class A extends h{static get styles(){return"\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n        "}setFlex(a=1){return this.setStyles(`flex-grow: ${a};`)}}
class B extends A{static get styles(){return"\n            align-items: center;\n            justify-content: center;\n            text-align: center;\n        "}}class C extends g(y,B){}class D extends g(z,B){}
class E extends A{static get styles(){return"\n      flex-basis: 0;\n      flex-grow: 1;\n      flex-shrink: 0;\n\n      width: 100%;\n      height: 100%;\n\n      max-height: 100%;\n      max-height: -moz-available;\n      max-height: -webkit-fill-available;\n      max-height: fill-available;\n\n      margin: 0px;\n      padding: 0px;\n    "}}class F extends E{static get styles(){return"\n            flex-direction: column !important;\n        "}}
class G extends E{static get styles(){return"\n            flex-direction: row !important;\n        "}}class H extends E{}class I extends A{static get styles(){return"\n            background: rgba(255, 255, 255, 0.1);\n            border: 4px solid white;\n            margin: 10px;\n        "}}class J extends g(B,I,v){}class K extends x{static get styles(){return"\n            color: black;\n        "}}class L extends x{static get styles(){return"\n            font-weight: bold;\n        "}}
class M extends h{static get tag(){return"img"}constructor(a){super();this.setAttributes({src:a})}}class N extends E{constructor(a){super();this.setStyles(`
            background-image: url(${a});
        `)}}class O extends g(v,G){static get styles(){return"justify-content: space-around;"}}class P extends g(w,F){static get styles(){return"justify-content: space-around;"}}class Q extends h{static get styles(){return"\n            height: 80px;\n        "}}class R extends K{static get styles(){return"opacity: 0.5;"}}class S extends h{build(){super.build();requestAnimationFrame(()=>this.initState());return this}initState(){}}
class T extends S{static get styles(){return"\n            opacity: 0;\n            transition: opacity 0.5s ease-in-out;\n        "}initState(){super.initState();this.element.style.opacity=1}}class U extends h{constructor(a){super(a);this.setClasses("material-icons")}static get styles(){return"\n            font-size: 36px;\n            user-select: none;\n        "}static get tag(){return"i"}}
class V extends v{static get styles(){return"\n            display: table;\n            overflow: scroll;\n        "}}class W extends P{static get styles(){return"\n            align-items: start !important;\n            justify-content: center;\n        "}}
class X extends g(G,l){constructor({left:a,title:b,subtitle:d,right:t}){super(a,new W(new L(b),new R(d)),t)}static get styles(){return"\n            margin: 4px 0;\n            width: 100%;\n            height: 80px;\n            padding: 24px;\n        "}}class Y extends h{build(){this.classNames=[];super.build();return this}}class ba extends Y{static get tag(){return"head"}}class ca extends Y{static get tag(){return"title"}}
class da extends Y{constructor(a={}){super();this.setAttributes(a)}static get tag(){return"link"}static get attributes(){return{rel:"stylesheet"}}}class Z extends Y{constructor(a){super().setAttributes(a)}static get tag(){return"meta"}}
class ea extends h{constructor(...a){super(...a)}static get tag(){return"html"}static get styles(){return"\n    -webkit-font-smoothing: antialiased;\n    scroll-behavior: smooth;\n    font-size: 100%;\n    height: 100%;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n"}exportStylesheet(){let a=c("style","ww-stylesheet");for(let b of e.sheet.cssRules)a.textContent+=b.cssText;this.element.firstChild.appendChild(a);return this}build(){super.build();return this.exportStylesheet()}render(){document.documentElement.replaceWith(this.maybeBuild().element||
"ERROR");return this}}class fa extends T{static get tag(){return"body"}static get styles(){return"\n    -webkit-font-smoothing: antialiased;\n    scroll-behavior: smooth;\n    font-size: 100%;\n    height: 100%;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n"}build(){super.build();let a=document.createElement("script");a.type="module";a.src="dist/exe.initState.js";this.element.append(a);return this}}
let ia=[new Z({"http-equiv":"Content-Type",content:"text/html; charset=UTF-8"}),new Z({"http-equiv":"X-UA-Compatible",content:"IE=edge,chrome=1"}),new Z({name:"viewport",content:"width=device-width, initial-scale=1.0"})];
var ja={Absolute:r,Block:n,BoldText:L,BottomBar:Q,Card:I,Center:B,CenteredCard:J,CenteredHeading1:C,CenteredHeading2:D,Column:F,DarkText:K,Elevation1:l,Elevation2:m,FadeIn:T,Fixed:u,Flex:A,FlexImg:N,FullHeight:w,FullWidth:v,GreyText:R,HEADER_FLAGS:ia,Head:ba,Heading1:y,Heading2:z,Horizontal:O,Img:M,Inflate:E,Inheritable:k,Link:da,List:V,ListItem:X,ListItemContent:W,MaterialIcon:U,Meta:Z,Mix:g,Padding:p,PageBody:fa,Relative:q,Row:G,Slide:H,StatefulWidget:S,TextWidget:x,Title:ca,UnstyledWidget:Y,Vertical:P,
WebPage:ea,Widget:h};exports.Absolute=r;exports.Block=n;exports.BoldText=L;exports.BottomBar=Q;exports.Card=I;exports.Center=B;exports.CenteredCard=J;exports.CenteredHeading1=C;exports.CenteredHeading2=D;exports.Column=F;exports.DarkText=K;exports.Elevation1=l;exports.Elevation2=m;exports.FadeIn=T;exports.Fixed=u;exports.Flex=A;exports.FlexImg=N;exports.FullHeight=w;exports.FullWidth=v;exports.GreyText=R;exports.HEADER_FLAGS=ia;exports.Head=ba;exports.Heading1=y;exports.Heading2=z;
exports.Horizontal=O;exports.Img=M;exports.Inflate=E;exports.Inheritable=k;exports.Link=da;exports.List=V;exports.ListItem=X;exports.ListItemContent=W;exports.MaterialIcon=U;exports.Meta=Z;exports.Mix=g;exports.Padding=p;exports.PageBody=fa;exports.Relative=q;exports.Row=G;exports.Slide=H;exports.StatefulWidget=S;exports.TextWidget=x;exports.Title=ca;exports.UnstyledWidget=Y;exports.Vertical=P;exports.WebPage=ea;exports.Widget=h;exports.default=ja

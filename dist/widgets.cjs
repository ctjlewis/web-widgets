Object.defineProperty(exports,"__esModule",{value:!0});"undefined"!==typeof goog||"undefined"===typeof global&&"undefined"===typeof window||((window||global).goog={define:(a,b)=>b});let c=document.createElement("style"),e=[],f={};console.log(...["Adding Stylesheet..."]);document.head.appendChild(c);
function g(...a){let b=class extends h{static inheritClasses(...a){this.classesToInherit.push(...a)}static get classNames(){super.cacheStyles();return[this.name,...this.classesToInherit]}};b.classesToInherit=[];for(let d of a)b.inheritClasses(...d.classNames);return b}
class k{constructor(){this.tag=this.constructor.tag;this.attributes={...this.constructor.attributes};this.classNames=[...this.constructor.classNames]}static get tag(){return""}static get attributes(){return{}}static get classNames(){let a=this.name;if(a in f)return console.log(...["Hit cache for",a]),f[a];let b=[a],d=Object.getPrototypeOf(this).classNames;d&&b.push(...d);this.cacheStyles();return f[a]=b}static cacheStyles(){let a=this.name,b=this.styles||"";console.log(...["inside Inheritable cacheStyles for",
this]);b&&c.sheet&&!e.includes(a)&&(console.log(...["caching styles for",a,b]),c.sheet.insertRule(`.${a} {${b}}`),e.push(a));return this}}
class h extends k{constructor(...a){super();this.children=a;this.tag=this.constructor.tag||"w";this.classNames=this.constructor.classNames.slice(0)||[];this.attributes={...this.constructor.attributes};this.styles=""}get html(){return this.element.outerHTML}static get styles(){return"\n            box-sizing: border-box;\n        \n            background-position: center center;\n            background-repeat: no-repeat;\n            background-size: contain;\n            background-attachment: scroll;\n        "}static from(a){console.log("INSIDE FROM()",this.name);
let b=new this,d={},u=["class","style"];b.element=a;b.tag=a.tagName.toLowerCase();b.classNames=Array.from(a.classList);for(let b of a.attributes){let [a,ha]=[b.name,b.value];u.includes(a)||(d[a]=ha)}b.setAttributes(d);return b}animate(a,b,d="0.2s ease-in"){this.element.style.setProperty("transition",`${a} ${d}`);this.element.style.setProperty(a,b);return this}append(a){console.log(...["append",arguments]);a.build();this.element.appendChild(a.element);return this}applyAttributes(){console.log(...["applyAttributes",
arguments]);if(this.attributes)for(let [a,b]of Object.entries(this.attributes))this.element.setAttribute(a,b);return this}applyClasses(){console.log(...["applyClasses",arguments]);let a=this.classNames;a.length&&(this.element.className=a.join(" "));return this}applyStyles(){console.log(...["applyStyles",arguments]);this.styles&&this.element.setAttribute("style",this.styles);return this}maybeBuild(){this.element||this.build();return this}build(){console.log(...["build",arguments]);this.createElement().applyAttributes().applyClasses().applyStyles();
this.children.length&&this.children.forEach(a=>{this.append("string"!==typeof a?a:new aa(a))});return this}createElement(){console.log(...["createElement",arguments]);let a=document.createElement(this.tag);return this.replaceElement(a)}freeze(){console.log(`<!DOCTYPE html>${this.maybeBuild().html}`);return this}render(a=this.element){console.log(...["render",arguments]);this.element||this.build();a.replaceWith(this.element);return this}replaceElement(a){console.log(...["replaceElement",arguments]);
this.element?this.element.replaceWith(a):this.element=a;return this}replaceText(a){console.log(...["setTextNode",arguments]);let b=document.createTextNode(a);return this.replaceElement(b)}setAttributes(a={}){console.log(...["setAttributes",arguments]);Object.assign(this.attributes||{},a);return this}setClasses(...a){console.log(...["setClass",arguments]);this.classNames.push(...a);return this}setStyles(a){console.log(...["setStyles",arguments]);this.styles+=a;return this}}
class aa extends h{constructor(a){super();this.text=a}build(){return this.replaceText(this.text)}}class l extends h{static get styles(){return"box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),0 2px 1px -1px rgba(0, 0, 0, 0.12),0 1px 3px 0 rgba(0, 0, 0, 0.20);"}}class m extends h{static get styles(){return"box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),0 3px 1px -2px rgba(0, 0, 0, 0.12),0 1px 5px 0 rgba(0, 0, 0, 0.20);"}}
class n extends h{static get styles(){return"\n            display: block;\n        "}}class p extends h{static get styles(){return"\n            padding: 16px;\n        "}}class q extends h{static get styles(){return"\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            text-align: center;\n        "}}class r extends h{static get styles(){return"\n            position: relative;\n         "}}
class t extends h{static get styles(){return"position: absolute;"}}class v extends h{static get styles(){return"position: fixed;"}}class w extends h{static get styles(){return"width: 100%;"}}class x extends h{static get styles(){return"height: 100%;"}}class y extends h{static get styles(){return"\n            font-family: Lato, Arial, Helvetica, sans-serif;\n            color: black;\n        "}}class z extends y{static get tag(){return"h1"}}class A extends y{static get tag(){return"h2"}}
class B extends g(z,q){}class C extends g(A,q){}class D extends h{static get styles(){return"\n            display: flex;\n            flex-shrink: 0;\n            flex-basis: 0;\n            flex-grow: 1;\n            flex-direction: column;\n            align-items: center;\n        "}setFlex(a=1){return this.setStyles(`flex-grow: ${a};`)}}
class E extends D{static get styles(){return"\n            width: 100%;\n            height: 100%;\n\n            max-height: 100%;\n            max-height: -moz-available;\n            max-height: -webkit-fill-available;\n            max-height: fill-available;\n\n            margin: 0px;\n            padding: 0px;\n        "}}class F extends D{static get styles(){return"\n            flex-direction: column !important;\n        "}}
class G extends D{static get styles(){return"\n            flex-direction: row !important;\n        "}}class H extends E{}class I extends D{static get styles(){return"\n            background: rgba(255, 255, 255, 0.1);\n            border: 4px solid white;\n            margin: 10px;\n        "}}class J extends g(q,I,w){}class K extends y{static get styles(){return"\n            color: black;\n        "}}class L extends y{static get styles(){return"\n            font-weight: bold;\n        "}}
class M extends h{static get tag(){return"img"}constructor(a){super();this.setAttributes({src:a})}}class N extends E{constructor(a){super();this.setStyles(`
            background-image: url(${a});
        `)}}class O extends g(w,G){static get styles(){return"justify-content: space-around;"}}class P extends g(x,F){static get styles(){return"justify-content: space-around;"}}class Q extends h{static get styles(){return"\n            height: 80px;\n        "}}class R extends K{static get styles(){return"opacity: 0.5;"}}class S extends h{build(){super.build();requestAnimationFrame(()=>this.initState());return this}initState(){}}
class T extends S{static get styles(){return"\n            opacity: 0;\n            transition: opacity 0.2s ease-in;\n        "}initState(){super.initState();this.element.style.opacity=1}}class U extends h{constructor(a){super(a);this.setClasses("material-icons")}static get styles(){return"\n            font-size: 36px;\n            user-select: none;\n        "}static get tag(){return"i"}}
class V extends w{static get styles(){return"\n            display: table;\n            overflow: scroll;\n        "}}class W extends P{static get styles(){return"\n            align-items: start !important;\n            justify-content: center;\n        "}}
class X extends g(G,l){constructor({left:a,title:b,subtitle:d,right:u}){super(a,new W(new L(b),new R(d)),u)}static get styles(){return"\n            margin: 4px 0;\n            width: 100%;\n            height: 80px;\n            padding: 24px;\n        "}}class Y extends h{build(){this.classNames=[];super.build();return this}}class ba extends Y{static get tag(){return"head"}}class ca extends Y{static get tag(){return"title"}}
class da extends Y{constructor(a={}){super();this.setAttributes(a)}static get tag(){return"link"}static get attributes(){return{rel:"stylesheet"}}}class Z extends Y{constructor(a){super().setAttributes(a)}static get tag(){return"meta"}}
class ea extends Y{constructor(...a){super(...a);this.attributes.id="root"}static get tag(){return"html"}static get styles(){return"\n    -webkit-font-smoothing: antialiased;\n    scroll-behavior: smooth;\n    font-size: 100%;\n    height: 100%;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n"}initState(){console.log("initState for WebPage called!","got id:",this.attributes.id)}exportStylesheet(){let a=document.createElement("style"),b=c.sheet;if(b)for(let d of b.cssRules)a.textContent+=d.cssText;
else return this;this.element.firstChild.appendChild(a);return this}build(){super.build();return this.exportStylesheet()}render(){this.element||this.build();document.documentElement.replaceWith(this.element);return this}}
class fa extends T{static get tag(){return"body"}static get styles(){return"\n    -webkit-font-smoothing: antialiased;\n    scroll-behavior: smooth;\n    font-size: 100%;\n    height: 100%;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n"}build(){super.build();let a=document.createElement("script");a.type="module";a.src="dist/exe.initState.js";this.element.append(a);return this}}
let ia=[new Z({"http-equiv":"Content-Type",content:"text/html; charset=UTF-8"}),new Z({"http-equiv":"X-UA-Compatible",content:"IE=edge,chrome=1"}),new Z({name:"viewport",content:"width=device-width, initial-scale=1.0"})];
var ja={Absolute:t,Block:n,BoldText:L,BottomBar:Q,Card:I,Center:q,CenteredCard:J,CenteredHeading1:B,CenteredHeading2:C,Column:F,DarkText:K,Elevation1:l,Elevation2:m,FadeIn:T,Fixed:v,Flex:D,FlexImg:N,FullHeight:x,FullWidth:w,GreyText:R,HEADER_FLAGS:ia,Head:ba,Heading1:z,Heading2:A,Horizontal:O,Img:M,Inflate:E,Inheritable:k,Link:da,List:V,ListItem:X,ListItemContent:W,MaterialIcon:U,Meta:Z,Padding:p,PageBody:fa,Relative:r,Row:G,Slide:H,StatefulWidget:S,TextWidget:y,Title:ca,UnstyledWidget:Y,Vertical:P,
WebPage:ea,Widget:h};exports.Absolute=t;exports.Block=n;exports.BoldText=L;exports.BottomBar=Q;exports.Card=I;exports.Center=q;exports.CenteredCard=J;exports.CenteredHeading1=B;exports.CenteredHeading2=C;exports.Column=F;exports.DarkText=K;exports.Elevation1=l;exports.Elevation2=m;exports.FadeIn=T;exports.Fixed=v;exports.Flex=D;exports.FlexImg=N;exports.FullHeight=x;exports.FullWidth=w;exports.GreyText=R;exports.HEADER_FLAGS=ia;exports.Head=ba;exports.Heading1=z;exports.Heading2=A;
exports.Horizontal=O;exports.Img=M;exports.Inflate=E;exports.Inheritable=k;exports.Link=da;exports.List=V;exports.ListItem=X;exports.ListItemContent=W;exports.MaterialIcon=U;exports.Meta=Z;exports.Padding=p;exports.PageBody=fa;exports.Relative=r;exports.Row=G;exports.Slide=H;exports.StatefulWidget=S;exports.TextWidget=y;exports.Title=ca;exports.UnstyledWidget=Y;exports.Vertical=P;exports.WebPage=ea;exports.Widget=h;exports.default=ja

#!/usr/bin/env node
import require$$0 from'events';import require$$1 from'child_process';import path from'path';import fs from'fs';var u=function(l,h,m){return m={path:h,exports:{},require:function(){throw Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");}},l(m,m.exports),m.exports}(function(l,h){function m(a){return a.split("-").reduce((a,c)=>a+c[0].toUpperCase()+c.slice(1))}function p(a,b){return a+Array(Math.max(0,b-a.length)+1).join(" ")}function v(a,b,c){return(a.match(new RegExp(".{1,"+(b-1)+"}([\\s\u200b]|$)|[^\\s\u200b]+?([\\s\u200b]|$)","g"))||[]).map((a,b)=>{"\n"===a.slice(-1)&&
(a=a.slice(0,a.length-1));return(0<b&&c?Array(c+1).join(" "):"")+a.trimRight()}).join("\n")}function w(a,b,c){return a.match(/[\n]\s+/)||40>b?a:v(a,b,c)}function x(a,b){b.find(b=>b===a._helpLongFlag||b===a._helpShortFlag)&&(a.outputHelp(),a._exit(0,"commander.helpDisplayed","(outputHelp)"))}function y(a){let b=a.name+(!0===a.variadic?"...":"");return a.required?"<"+b+">":"["+b+"]"}function z(a){let b;a=a.split(/[ |,]+/);1<a.length&&!/^[[<]/.test(a[1])&&(b=a.shift());a=a.shift();!b&&/^-[^-]$/.test(a)&&
(b=a,a=void 0);return{shortFlag:b,longFlag:a}}function A(a){return a.map(a=>{if(!a.startsWith("--inspect"))return a;let b,d="127.0.0.1",g="9229",e;null!==(e=a.match(/^(--inspect(-brk)?)$/))?b=e[1]:null!==(e=a.match(/^(--inspect(-brk|-port)?)=([^:]+)$/))?(b=e[1],/^\d+$/.test(e[3])?g=e[3]:d=e[3]):null!==(e=a.match(/^(--inspect(-brk|-port)?)=([^:]+):(\d+)$/))&&(b=e[1],d=e[3],g=e[4]);return b&&"0"!==g?`${b}=${d}:${parseInt(g)+1}`:a})}h=require$$0.EventEmitter;let q=require$$1.spawn;class r{constructor(a,
b){this.flags=a;this.required=a.includes("<");this.optional=a.includes("[");this.variadic=/\w\.\.\.[>\]]$/.test(a);this.mandatory=!1;a=z(a);this.short=a.shortFlag;this.long=a.longFlag;this.negate=!1;this.long&&(this.negate=this.long.startsWith("--no-"));this.description=b||"";this.defaultValue=void 0}name(){return this.long?this.long.replace(/^--/,""):this.short.replace(/^-/,"")}attributeName(){return m(this.name().replace(/^no-/,""))}is(a){return this.short===a||this.long===a}}class n extends Error{constructor(a,
b,c){super(c);Error.captureStackTrace(this,this.constructor);this.name=this.constructor.name;this.code=b;this.exitCode=a;this.nestedError=void 0}}class t extends h{constructor(a){super();this.commands=[];this.options=[];this.parent=null;this._allowUnknownOption=!1;this._args=[];this._scriptPath=this.rawArgs=null;this._name=a||"";this._optionValues={};this._storeOptionsAsProperties=!0;this._storeOptionsAsPropertiesCalled=!1;this._passCommandToAction=!0;this._actionResults=[];this._actionHandler=null;
this._executableHandler=!1;this._exitCallback=this._defaultCommandName=this._executableFile=null;this._aliases=[];this._hidden=!1;this._helpFlags="-h, --help";this._helpDescription="display help for command";this._helpShortFlag="-h";this._helpLongFlag="--help";this._hasImplicitHelpCommand=void 0;this._helpCommandName="help";this._helpCommandnameAndArgs="help [command]";this._helpCommandDescription="display help for command"}command(a,b,c){"object"===typeof b&&null!==b&&(c=b,b=null);c=c||{};a=a.split(/ +/);
let d=this.createCommand(a.shift());b&&(d.description(b),d._executableHandler=!0);c.isDefault&&(this._defaultCommandName=d._name);d._hidden=!(!c.noHelp&&!c.hidden);d._helpFlags=this._helpFlags;d._helpDescription=this._helpDescription;d._helpShortFlag=this._helpShortFlag;d._helpLongFlag=this._helpLongFlag;d._helpCommandName=this._helpCommandName;d._helpCommandnameAndArgs=this._helpCommandnameAndArgs;d._helpCommandDescription=this._helpCommandDescription;d._exitCallback=this._exitCallback;d._storeOptionsAsProperties=
this._storeOptionsAsProperties;d._passCommandToAction=this._passCommandToAction;d._executableFile=c.executableFile||null;this.commands.push(d);d._parseExpectedArgs(a);d.parent=this;return b?this:d}createCommand(a){return new t(a)}addCommand(a,b){function c(a){a.forEach(a=>{if(a._executableHandler&&!a._executableFile)throw Error(`Must specify executableFile for deeply nested executable: ${a.name()}`);c(a.commands)})}if(!a._name)throw Error("Command passed to .addCommand() must have a name");c(a.commands);
b=b||{};b.isDefault&&(this._defaultCommandName=a._name);if(b.noHelp||b.hidden)a._hidden=!0;this.commands.push(a);a.parent=this;return this}arguments(a){return this._parseExpectedArgs(a.split(/ +/))}addHelpCommand(a,b){!1===a?this._hasImplicitHelpCommand=!1:(this._hasImplicitHelpCommand=!0,"string"===typeof a&&(this._helpCommandName=a.split(" ")[0],this._helpCommandnameAndArgs=a),this._helpCommandDescription=b||this._helpCommandDescription);return this}_lazyHasImplicitHelpCommand(){void 0===this._hasImplicitHelpCommand&&
(this._hasImplicitHelpCommand=this.commands.length&&!this._actionHandler&&!this._findCommand("help"));return this._hasImplicitHelpCommand}_parseExpectedArgs(a){if(a.length)return a.forEach(a=>{let b={required:!1,name:"",variadic:!1};switch(a[0]){case "<":b.required=!0;b.name=a.slice(1,-1);break;case "[":b.name=a.slice(1,-1)}3<b.name.length&&"..."===b.name.slice(-3)&&(b.variadic=!0,b.name=b.name.slice(0,-3));b.name&&this._args.push(b)}),this._args.forEach((a,c)=>{if(a.variadic&&c<this._args.length-
1)throw Error(`only the last argument can be variadic '${a.name}'`);}),this}exitOverride(a){this._exitCallback=a?a:a=>{if("commander.executeSubCommandAsync"!==a.code)throw a;};return this}_exit(a,b,c){this._exitCallback&&this._exitCallback(new n(a,b,c));process.exit(a)}action(a){this._actionHandler=b=>{var c=this._args.length;let d=b.slice(0,c);d[c]=this._passCommandToAction?this:this.opts();b.length>c&&d.push(b.slice(c));b=a.apply(this,d);for(c=this;c.parent;)c=c.parent;c._actionResults.push(b)};
return this}_checkForOptionNameClash(a){if(this._storeOptionsAsProperties&&!this._storeOptionsAsPropertiesCalled&&"help"!==a.name()&&void 0!==this._getOptionValue(a.attributeName())){var b=!0;a.negate?(b=a.long.replace(/^--no-/,"--"),b=!this._findOption(b)):a.long&&(b=a.long.replace(/^--/,"--no-"),b=!this._findOption(b));if(b)throw Error(`option '${a.name()}' clashes with existing property '${a.attributeName()}' on Command
- call storeOptionsAsProperties(false) to store option values safely,
- or call storeOptionsAsProperties(true) to suppress this check,
- or change option name`);}}_optionEx(a,b,c,d,g){let e=new r(b,c);b=e.name();let f=e.attributeName();e.mandatory=!!a.mandatory;this._checkForOptionNameClash(e);if("function"!==typeof d)if(d instanceof RegExp){let a=d;d=(b,c)=>(b=a.exec(b))?b[0]:c}else g=d,d=null;if(e.negate||e.optional||e.required||"boolean"===typeof g)e.negate&&(a=e.long.replace(/^--no-/,"--"),g=this._findOption(a)?this._getOptionValue(f):!0),void 0!==g&&(this._setOptionValue(f,g),e.defaultValue=g);this.options.push(e);this.on("option:"+
b,a=>{let b=this._getOptionValue(f);null!==a&&d?a=d(a,void 0===b?g:b):null!==a&&e.variadic&&(a=b!==g&&Array.isArray(b)?b.concat(a):[a]);"boolean"===typeof b||"undefined"===typeof b?null==a?this._setOptionValue(f,e.negate?!1:g||!0):this._setOptionValue(f,a):null!==a&&this._setOptionValue(f,e.negate?!1:a)});return this}option(a,b,c,d){return this._optionEx({},a,b,c,d)}requiredOption(a,b,c,d){return this._optionEx({mandatory:!0},a,b,c,d)}allowUnknownOption(a){this._allowUnknownOption=void 0===a||a;return this}storeOptionsAsProperties(a){this._storeOptionsAsPropertiesCalled=
!0;this._storeOptionsAsProperties=void 0===a||a;if(this.options.length)throw Error("call .storeOptionsAsProperties() before adding options");return this}passCommandToAction(a){this._passCommandToAction=void 0===a||a;return this}_setOptionValue(a,b){this._storeOptionsAsProperties?this[a]=b:this._optionValues[a]=b}_getOptionValue(a){return this._storeOptionsAsProperties?this[a]:this._optionValues[a]}parse(a,b){if(void 0!==a&&!Array.isArray(a))throw Error("first parameter to parse must be array or undefined");
b=b||{};void 0===a&&(a=process.argv,process.versions&&process.versions.electron&&(b.from="electron"));this.rawArgs=a.slice();switch(b.from){case void 0:case "node":this._scriptPath=a[1];a=a.slice(2);break;case "electron":process.defaultApp?(this._scriptPath=a[1],a=a.slice(2)):a=a.slice(1);break;case "user":a=a.slice(0);break;default:throw Error(`unexpected parse option { from: '${b.from}' }`);}!this._scriptPath&&process.mainModule&&(this._scriptPath=process.mainModule.filename);this._name=this._name||
this._scriptPath&&path.basename(this._scriptPath,path.extname(this._scriptPath));this._parseCommand([],a);return this}parseAsync(a,b){this.parse(a,b);return Promise.all(this._actionResults).then(()=>this)}_executeSubCommand(a,b){b=b.slice();var c=!1;c=[".js",".ts",".mjs"];this._checkForMissingMandatoryOptions();let d=this._scriptPath,g;try{let a=fs.realpathSync(d);g=path.dirname(a)}catch(B){g="."}let e=path.basename(d,path.extname(d))+"-"+a._name;a._executableFile&&(e=a._executableFile);let f=path.join(g,
e);fs.existsSync(f)?e=f:c.forEach(a=>{fs.existsSync(`${f}${a}`)&&(e=`${f}${a}`)});c=c.includes(path.extname(e));let k;"win32"!==process.platform?c?(b.unshift(e),b=A(process.execArgv).concat(b),k=q(process.argv[0],b,{stdio:"inherit"})):k=q(e,b,{stdio:"inherit"}):(b.unshift(e),b=A(process.execArgv).concat(b),k=q(process.execPath,b,{stdio:"inherit"}));["SIGUSR1","SIGUSR2","SIGTERM","SIGINT","SIGHUP"].forEach(a=>{process.on(a,()=>{!1===k.killed&&null===k.exitCode&&k.kill(a)})});let h=this._exitCallback;
if(h)k.on("close",()=>{h(new n(process.exitCode||0,"commander.executeSubCommandAsync","(close)"))});else k.on("close",process.exit.bind(process));k.on("error",b=>{if("ENOENT"===b.code)throw Error(`'${e}' does not exist
 - if '${a._name}' is not meant to be an executable command, remove description parameter from '.command()' and use '.description()' instead
 - if the default executable name is not suitable, use the executableFile option to supply a custom name`);if("EACCES"===b.code)throw Error(`'${e}' not executable`);if(h){let a=new n(1,"commander.executeSubCommandAsync","(error)");a.nestedError=b;h(a)}else process.exit(1)});this.runningCommand=k}_dispatchSubcommand(a,b,c){(a=this._findCommand(a))||this._helpAndError();a._executableHandler?this._executeSubCommand(a,b.concat(c)):a._parseCommand(b,c)}_parseCommand(a,b){let c=this.parseOptions(b);a=a.concat(c.operands);
b=c.unknown;this.args=a.concat(b);if(a&&this._findCommand(a[0]))this._dispatchSubcommand(a[0],a.slice(1),b);else if(this._lazyHasImplicitHelpCommand()&&a[0]===this._helpCommandName)1===a.length?this.help():this._dispatchSubcommand(a[1],[],[this._helpLongFlag]);else if(this._defaultCommandName)x(this,b),this._dispatchSubcommand(this._defaultCommandName,a,b);else if(!this.commands.length||0!==this.args.length||this._actionHandler||this._defaultCommandName||this._helpAndError(),x(this,c.unknown),this._checkForMissingMandatoryOptions(),
0<c.unknown.length&&this.unknownOption(c.unknown[0]),this._actionHandler){let c=this.args.slice();this._args.forEach((a,b)=>{a.required&&null==c[b]?this.missingArgument(a.name):a.variadic&&(c[b]=c.splice(b))});this._actionHandler(c);this.emit("command:"+this.name(),a,b)}else a.length?this._findCommand("*")?this._dispatchSubcommand("*",a,b):this.listenerCount("command:*")?this.emit("command:*",a,b):this.commands.length&&this.unknownCommand():this.commands.length&&this._helpAndError()}_findCommand(a){if(a)return this.commands.find(b=>
b._name===a||b._aliases.includes(a))}_findOption(a){return this.options.find(b=>b.is(a))}_checkForMissingMandatoryOptions(){for(let a=this;a;a=a.parent)a.options.forEach(b=>{b.mandatory&&void 0===a._getOptionValue(b.attributeName())&&a.missingMandatoryOptionValue(b)})}parseOptions(a){function b(a){return 1<a.length&&"-"===a[0]}let c=[],d=[],g=c;a=a.slice();for(var e=null;a.length;){let c=a.shift();if("--"===c){g===d&&g.push(c);g.push(...a);break}if(e&&!b(c))this.emit(`option:${e.name()}`,c);else{e=
null;if(b(c)){var f=this._findOption(c);if(f){f.required?(e=a.shift(),void 0===e&&this.optionMissingArgument(f),this.emit(`option:${f.name()}`,e)):f.optional?(e=null,0<a.length&&!b(a[0])&&(e=a.shift()),this.emit(`option:${f.name()}`,e)):this.emit(`option:${f.name()}`);e=f.variadic?f:null;continue}}if(2<c.length&&"-"===c[0]&&"-"!==c[1]&&(f=this._findOption(`-${c[1]}`)))f.required||f.optional?this.emit(`option:${f.name()}`,c.slice(2)):(this.emit(`option:${f.name()}`),a.unshift(`-${c.slice(2)}`));else{if(/^--[^=]+=/.test(c)){f=
c.indexOf("=");let a=this._findOption(c.slice(0,f));if(a&&(a.required||a.optional)){this.emit(`option:${a.name()}`,c.slice(f+1));continue}}1<c.length&&"-"===c[0]&&(g=d);g.push(c)}}}return{operands:c,unknown:d}}opts(){if(this._storeOptionsAsProperties){let a={},b=this.options.length;for(let c=0;c<b;c++){let b=this.options[c].attributeName();a[b]=b===this._versionOptionName?this._version:this[b]}return a}return this._optionValues}missingArgument(a){a=`error: missing required argument '${a}'`;console.error(a);
this._exit(1,"commander.missingArgument",a)}optionMissingArgument(a,b){a=b?`error: option '${a.flags}' argument missing, got '${b}'`:`error: option '${a.flags}' argument missing`;console.error(a);this._exit(1,"commander.optionMissingArgument",a)}missingMandatoryOptionValue(a){a=`error: required option '${a.flags}' not specified`;console.error(a);this._exit(1,"commander.missingMandatoryOptionValue",a)}unknownOption(a){this._allowUnknownOption||(a=`error: unknown option '${a}'`,console.error(a),this._exit(1,
"commander.unknownOption",a))}unknownCommand(){var a=[this.name()];for(let b=this.parent;b;b=b.parent)a.unshift(b.name());a=a.join(" ");a=`error: unknown command '${this.args[0]}'. See '${a} ${this._helpLongFlag}'.`;console.error(a);this._exit(1,"commander.unknownCommand",a)}version(a,b,c){if(void 0===a)return this._version;this._version=a;b=new r(b||"-V, --version",c||"output the version number");this._versionOptionName=b.attributeName();this.options.push(b);this.on("option:"+b.name(),()=>{process.stdout.write(a+
"\n");this._exit(0,"commander.version",a)});return this}description(a,b){if(void 0===a&&void 0===b)return this._description;this._description=a;this._argsDescription=b;return this}alias(a){if(void 0===a)return this._aliases[0];let b=this;0!==this.commands.length&&this.commands[this.commands.length-1]._executableHandler&&(b=this.commands[this.commands.length-1]);if(a===b._name)throw Error("Command alias can't be the same as its name");b._aliases.push(a);return this}aliases(a){if(void 0===a)return this._aliases;
a.forEach(a=>this.alias(a));return this}usage(a){if(void 0===a){if(this._usage)return this._usage;a=this._args.map(a=>y(a));return"[options]"+(this.commands.length?" [command]":"")+(this._args.length?" "+a.join(" "):"")}this._usage=a;return this}name(a){if(void 0===a)return this._name;this._name=a;return this}prepareCommands(){let a=this.commands.filter(a=>!a._hidden).map(a=>{let b=a._args.map(a=>y(a)).join(" ");return[a._name+(a._aliases[0]?"|"+a._aliases[0]:"")+(a.options.length?" [options]":"")+
(b?" "+b:""),a._description]});this._lazyHasImplicitHelpCommand()&&a.push([this._helpCommandnameAndArgs,this._helpCommandDescription]);return a}largestCommandLength(){return this.prepareCommands().reduce((a,b)=>Math.max(a,b[0].length),0)}largestOptionLength(){let a=[].slice.call(this.options);a.push({flags:this._helpFlags});return a.reduce((a,c)=>Math.max(a,c.flags.length),0)}largestArgLength(){return this._args.reduce((a,b)=>Math.max(a,b.name.length),0)}padWidth(){let a=this.largestOptionLength();
this._argsDescription&&this._args.length&&this.largestArgLength()>a&&(a=this.largestArgLength());this.commands&&this.commands.length&&this.largestCommandLength()>a&&(a=this.largestCommandLength());return a}optionHelp(){function a(a,d){return p(a,b)+"  "+w(d,c,b+2)}let b=this.padWidth(),c=(process.stdout.columns||80)-b-4,d=this.options.map(b=>{let c=b.description+(b.negate||void 0===b.defaultValue?"":" (default: "+JSON.stringify(b.defaultValue)+")");return a(b.flags,c)}),g=this._helpShortFlag&&!this._findOption(this._helpShortFlag),
e=!this._findOption(this._helpLongFlag);if(g||e){let b=this._helpFlags;g?e||(b=this._helpShortFlag):b=this._helpLongFlag;d.push(a(b,this._helpDescription))}return d.join("\n")}commandHelp(){if(!this.commands.length&&!this._lazyHasImplicitHelpCommand())return"";let a=this.prepareCommands(),b=this.padWidth(),c=(process.stdout.columns||80)-b-4;return["Commands:",a.map(a=>{let d=a[1]?"  "+a[1]:"";return(d?p(a[0],b):a[0])+w(d,c,b+2)}).join("\n").replace(/^/gm,"  "),""].join("\n")}helpInformation(){let a=
[];if(this._description){a=[this._description,""];let b=this._argsDescription;if(b&&this._args.length){let c=this.padWidth(),d=(process.stdout.columns||80)-c-5;a.push("Arguments:");a.push("");this._args.forEach(e=>{a.push("  "+p(e.name,c)+"  "+v(b[e.name],d,c+4))});a.push("")}}var b=this._name;this._aliases[0]&&(b=b+"|"+this._aliases[0]);for(var c="",d=this.parent;d;d=d.parent)c=d.name()+" "+c;b=["Usage: "+c+b+" "+this.usage(),""];c=[];(d=this.commandHelp())&&(c=[d]);d=["Options:",""+this.optionHelp().replace(/^/gm,
"  "),""];return b.concat(a).concat(d).concat(c).join("\n")}outputHelp(a){a||(a=a=>a);a=a(this.helpInformation());if("string"!==typeof a&&!Buffer.isBuffer(a))throw Error("outputHelp callback must return a string or a Buffer");process.stdout.write(a);this.emit(this._helpLongFlag)}helpOption(a,b){this._helpFlags=a||this._helpFlags;this._helpDescription=b||this._helpDescription;a=z(this._helpFlags);this._helpShortFlag=a.shortFlag;this._helpLongFlag=a.longFlag;return this}help(a){this.outputHelp(a);this._exit(process.exitCode||
0,"commander.help","(outputHelp)")}_helpAndError(){this.outputHelp();this._exit(1,"commander.help","(outputHelp)")}}h=l.exports=new t;h.program=h;h.Command=t;h.Option=r;h.CommanderError=n});u.command("say-hello [msg]").description("Say hello, or provide a special message instead.").action((l="Hello world!")=>console.log(l));try{u.exitOverride(),u.parse(process.argv)}catch(l){console.log("\n")}

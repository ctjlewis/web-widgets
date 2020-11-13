import fs from 'fs';
import path from 'path';
import require$$1 from 'child_process';
import require$$0 from 'events';
/*
MIT
*/

var f = f || {};
f.scope = {};

f.createTemplateTagFirstArg = function (c) {
  return c.raw = c;
};

f.createTemplateTagFirstArgWithRaw = function (c, d) {
  c.raw = d;
  return c;
};

f.arrayIteratorImpl = function (c) {
  var d = 0;
  return function () {
    return d < c.length ? {
      done: !1,
      value: c[d++]
    } : {
      done: !0
    };
  };
};

f.arrayIterator = function (c) {
  return {
    next: f.arrayIteratorImpl(c)
  };
};

f.makeIterator = function (c) {
  var d = "undefined" != typeof Symbol && Symbol.iterator && c[Symbol.iterator];
  return d ? d.call(c) : f.arrayIterator(c);
};

f.arrayFromIterator = function (c) {
  for (var d, b = []; !(d = c.next()).done;) b.push(d.value);

  return b;
};

f.arrayFromIterable = function (c) {
  return c instanceof Array ? c : f.arrayFromIterator(f.makeIterator(c));
};

f.ASSUME_ES5 = !1;
f.ASSUME_NO_NATIVE_MAP = !1;
f.ASSUME_NO_NATIVE_SET = !1;
f.SIMPLE_FROUND_POLYFILL = !1;
f.ISOLATE_POLYFILLS = !1;
f.objectCreate = f.ASSUME_ES5 || "function" == typeof Object.create ? Object.create : function (c) {
  function d() {}

  d.prototype = c;
  return new d();
};
f.defineProperty = f.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (c, d, b) {
  if (c == Array.prototype || c == Object.prototype) return c;
  c[d] = b.value;
  return c;
};

f.getGlobal = function (c) {
  c = ["object" == typeof globalThis && globalThis, c, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];

  for (var d = 0; d < c.length; ++d) {
    var b = c[d];
    if (b && b.Math == Math) return b;
  }

  throw Error("Cannot find global object");
};

f.global = f.getGlobal(this);
f.IS_SYMBOL_NATIVE = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
f.TRUST_ES6_POLYFILLS = !f.ISOLATE_POLYFILLS || f.IS_SYMBOL_NATIVE;
f.polyfills = {};
f.propertyToPolyfillSymbol = {};
f.POLYFILL_PREFIX = "$jscp$";

f.polyfill = function (c, d, b, g) {
  d && (f.ISOLATE_POLYFILLS ? f.polyfillIsolated(c, d, b, g) : f.polyfillUnisolated(c, d, b, g));
};

f.polyfillUnisolated = function (c, d) {
  var b = f.global;
  c = c.split(".");

  for (var g = 0; g < c.length - 1; g++) {
    var h = c[g];
    h in b || (b[h] = {});
    b = b[h];
  }

  c = c[c.length - 1];
  g = b[c];
  d = d(g);
  d != g && null != d && f.defineProperty(b, c, {
    configurable: !0,
    writable: !0,
    value: d
  });
};

f.polyfillIsolated = function (c, d, b) {
  var g = c.split(".");
  c = 1 === g.length;
  var h = g[0];
  h = !c && h in f.polyfills ? f.polyfills : f.global;

  for (var l = 0; l < g.length - 1; l++) {
    var m = g[l];
    m in h || (h[m] = {});
    h = h[m];
  }

  g = g[g.length - 1];
  b = f.IS_SYMBOL_NATIVE && "es6" === b ? h[g] : null;
  d = d(b);
  null != d && (c ? f.defineProperty(f.polyfills, g, {
    configurable: !0,
    writable: !0,
    value: d
  }) : d !== b && (f.propertyToPolyfillSymbol[g] = f.IS_SYMBOL_NATIVE ? f.global.Symbol(g) : f.POLYFILL_PREFIX + g, g = f.propertyToPolyfillSymbol[g], f.defineProperty(h, g, {
    configurable: !0,
    writable: !0,
    value: d
  })));
};

f.underscoreProtoCanBeSet = function () {
  var c = {
    a: !0
  },
      d = {};

  try {
    return d.__proto__ = c, d.a;
  } catch (b) {}

  return !1;
};

f.setPrototypeOf = f.TRUST_ES6_POLYFILLS && "function" == typeof Object.setPrototypeOf ? Object.setPrototypeOf : f.underscoreProtoCanBeSet() ? function (c, d) {
  c.__proto__ = d;
  if (c.__proto__ !== d) throw new TypeError(c + " is not extensible");
  return c;
} : null;

f.inherits = function (c, d) {
  c.prototype = f.objectCreate(d.prototype);
  c.prototype.constructor = c;

  if (f.setPrototypeOf) {
    var b = f.setPrototypeOf;
    b(c, d);
  } else for (b in d) if ("prototype" != b) if (Object.defineProperties) {
    var g = Object.getOwnPropertyDescriptor(d, b);
    g && Object.defineProperty(c, b, g);
  } else c[b] = d[b];

  c.superClass_ = d.prototype;
};

f.polyfill("Object.is", function (c) {
  return c ? c : function (d, b) {
    return d === b ? 0 !== d || 1 / d === 1 / b : d !== d && b !== b;
  };
}, "es6", "es3");
f.polyfill("Array.prototype.includes", function (c) {
  return c ? c : function (d, b) {
    var c = this;
    c instanceof String && (c = String(c));
    var h = c.length;
    b = b || 0;

    for (0 > b && (b = Math.max(b + h, 0)); b < h; b++) {
      var l = c[b];
      if (l === d || Object.is(l, d)) return !0;
    }

    return !1;
  };
}, "es7", "es3");

f.checkStringArgs = function (c, d, b) {
  if (null == c) throw new TypeError("The 'this' value for String.prototype." + b + " must not be null or undefined");
  if (d instanceof RegExp) throw new TypeError("First argument to String.prototype." + b + " must not be a regular expression");
  return c + "";
};

f.polyfill("String.prototype.includes", function (c) {
  return c ? c : function (c, b) {
    return -1 !== f.checkStringArgs(this, c, "includes").indexOf(c, b || 0);
  };
}, "es6", "es3");
f.polyfill("String.prototype.startsWith", function (c) {
  return c ? c : function (c, b) {
    var d = f.checkStringArgs(this, c, "startsWith");
    c += "";
    var h = d.length,
        l = c.length;
    b = Math.max(0, Math.min(b | 0, d.length));

    for (var m = 0; m < l && b < h;) if (d[b++] != c[m++]) return !1;

    return m >= l;
  };
}, "es6", "es3");
f.FORCE_POLYFILL_PROMISE = !1;
f.polyfill("Promise", function (c) {
  function d(b) {
    this.state_ = 0;
    this.result_ = void 0;
    this.onSettledCallbacks_ = [];
    var c = this.createResolveAndReject_();

    try {
      b(c.resolve, c.reject);
    } catch (n) {
      c.reject(n);
    }
  }

  function b() {
    this.batch_ = null;
  }

  function g(b) {
    return b instanceof d ? b : new d(function (c) {
      c(b);
    });
  }

  if (c && !f.FORCE_POLYFILL_PROMISE) return c;

  b.prototype.asyncExecute = function (b) {
    if (null == this.batch_) {
      this.batch_ = [];
      var c = this;
      this.asyncExecuteFunction(function () {
        c.executeBatch_();
      });
    }

    this.batch_.push(b);
  };

  var h = f.global.setTimeout;

  b.prototype.asyncExecuteFunction = function (b) {
    h(b, 0);
  };

  b.prototype.executeBatch_ = function () {
    for (; this.batch_ && this.batch_.length;) {
      var b = this.batch_;
      this.batch_ = [];

      for (var c = 0; c < b.length; ++c) {
        var d = b[c];
        b[c] = null;

        try {
          d();
        } catch (p) {
          this.asyncThrow_(p);
        }
      }
    }

    this.batch_ = null;
  };

  b.prototype.asyncThrow_ = function (b) {
    this.asyncExecuteFunction(function () {
      throw b;
    });
  };

  d.prototype.createResolveAndReject_ = function () {
    function b(b) {
      return function (m) {
        d || (d = !0, b.call(c, m));
      };
    }

    var c = this,
        d = !1;
    return {
      resolve: b(this.resolveTo_),
      reject: b(this.reject_)
    };
  };

  d.prototype.resolveTo_ = function (b) {
    if (b === this) this.reject_(new TypeError("A Promise cannot resolve to itself"));else if (b instanceof d) this.settleSameAsPromise_(b);else {
      a: switch (typeof b) {
        case "object":
          var c = null != b;
          break a;

        case "function":
          c = !0;
          break a;

        default:
          c = !1;
      }

      c ? this.resolveToNonPromiseObj_(b) : this.fulfill_(b);
    }
  };

  d.prototype.resolveToNonPromiseObj_ = function (b) {
    var c = void 0;

    try {
      c = b.then;
    } catch (n) {
      this.reject_(n);
      return;
    }

    "function" == typeof c ? this.settleSameAsThenable_(c, b) : this.fulfill_(b);
  };

  d.prototype.reject_ = function (b) {
    this.settle_(2, b);
  };

  d.prototype.fulfill_ = function (b) {
    this.settle_(1, b);
  };

  d.prototype.settle_ = function (b, c) {
    if (0 != this.state_) throw Error("Cannot settle(" + b + ", " + c + "): Promise already settled in state" + this.state_);
    this.state_ = b;
    this.result_ = c;
    this.executeOnSettledCallbacks_();
  };

  d.prototype.executeOnSettledCallbacks_ = function () {
    if (null != this.onSettledCallbacks_) {
      for (var b = 0; b < this.onSettledCallbacks_.length; ++b) l.asyncExecute(this.onSettledCallbacks_[b]);

      this.onSettledCallbacks_ = null;
    }
  };

  var l = new b();

  d.prototype.settleSameAsPromise_ = function (b) {
    var c = this.createResolveAndReject_();
    b.callWhenSettled_(c.resolve, c.reject);
  };

  d.prototype.settleSameAsThenable_ = function (b, c) {
    var d = this.createResolveAndReject_();

    try {
      b.call(c, d.resolve, d.reject);
    } catch (p) {
      d.reject(p);
    }
  };

  d.prototype.then = function (b, c) {
    function g(b, c) {
      return "function" == typeof b ? function (c) {
        try {
          h(b(c));
        } catch (a) {
          m(a);
        }
      } : c;
    }

    var h,
        m,
        l = new d(function (b, c) {
      h = b;
      m = c;
    });
    this.callWhenSettled_(g(b, h), g(c, m));
    return l;
  };

  d.prototype.catch = function (b) {
    return this.then(void 0, b);
  };

  d.prototype.callWhenSettled_ = function (b, c) {
    function d() {
      switch (g.state_) {
        case 1:
          b(g.result_);
          break;

        case 2:
          c(g.result_);
          break;

        default:
          throw Error("Unexpected state: " + g.state_);
      }
    }

    var g = this;
    null == this.onSettledCallbacks_ ? l.asyncExecute(d) : this.onSettledCallbacks_.push(d);
  };

  d.resolve = g;

  d.reject = function (b) {
    return new d(function (c, d) {
      d(b);
    });
  };

  d.race = function (b) {
    return new d(function (c, d) {
      for (var h = f.makeIterator(b), l = h.next(); !l.done; l = h.next()) g(l.value).callWhenSettled_(c, d);
    });
  };

  d.all = function (b) {
    var c = f.makeIterator(b),
        h = c.next();
    return h.done ? g([]) : new d(function (b, d) {
      function l(c) {
        return function (a) {
          m[c] = a;
          n--;
          0 == n && b(m);
        };
      }

      var m = [],
          n = 0;

      do m.push(void 0), n++, g(h.value).callWhenSettled_(l(m.length - 1), d), h = c.next(); while (!h.done);
    });
  };

  return d;
}, "es6", "es3");

f.findInternal = function (c, d, b) {
  c instanceof String && (c = String(c));

  for (var g = c.length, h = 0; h < g; h++) {
    var l = c[h];
    if (d.call(b, l, h, c)) return {
      i: h,
      v: l
    };
  }

  return {
    i: -1,
    v: void 0
  };
};

f.polyfill("Array.prototype.find", function (c) {
  return c ? c : function (c, b) {
    return f.findInternal(this, c, b).v;
  };
}, "es6", "es3");
f.polyfill("String.prototype.trimRight", function (c) {
  function d() {
    return this.replace(/[\s\xa0]+$/, "");
  }

  return c || d;
}, "es_2019", "es3");

var u = function (c, d, b) {
  return b = {
    path: d,
    exports: {},
    require: function () {
      throw Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
    }
  }, c(b, b.exports), b.exports;
}(function (c, d) {
  function b(a) {
    var e = y.call(this) || this;
    e.commands = [];
    e.options = [];
    e.parent = null;
    e._allowUnknownOption = !1;
    e._args = [];
    e.rawArgs = null;
    e._scriptPath = null;
    e._name = a || "";
    e._optionValues = {};
    e._storeOptionsAsProperties = !0;
    e._storeOptionsAsPropertiesCalled = !1;
    e._passCommandToAction = !0;
    e._actionResults = [];
    e._actionHandler = null;
    e._executableHandler = !1;
    e._executableFile = null;
    e._defaultCommandName = null;
    e._exitCallback = null;
    e._aliases = [];
    e._hidden = !1;
    e._helpFlags = "-h, --help";
    e._helpDescription = "display help for command";
    e._helpShortFlag = "-h";
    e._helpLongFlag = "--help";
    e._hasImplicitHelpCommand = void 0;
    e._helpCommandName = "help";
    e._helpCommandnameAndArgs = "help [command]";
    e._helpCommandDescription = "display help for command";
    return e;
  }

  function g(a, e, b) {
    b = Error.call(this, b);
    this.message = b.message;
    "stack" in b && (this.stack = b.stack);
    Error.captureStackTrace(this, this.constructor);
    this.name = this.constructor.name;
    this.code = e;
    this.exitCode = a;
    this.nestedError = void 0;
  }

  function h(a, e) {
    this.flags = a;
    this.required = a.includes("<");
    this.optional = a.includes("[");
    this.variadic = /\w\.\.\.[>\]]$/.test(a);
    this.mandatory = !1;
    a = z(a);
    this.short = a.shortFlag;
    this.long = a.longFlag;
    this.negate = !1;
    this.long && (this.negate = this.long.startsWith("--no-"));
    this.description = e || "";
    this.defaultValue = void 0;
  }

  function l(a) {
    return a.split("-").reduce(function (a, b) {
      return a + b[0].toUpperCase() + b.slice(1);
    });
  }

  function m(a, e) {
    return a + Array(Math.max(0, e - a.length) + 1).join(" ");
  }

  function v(a, e, b) {
    return (a.match(new RegExp(".{1," + (e - 1) + "}([\\s\u200b]|$)|[^\\s\u200b]+?([\\s\u200b]|$)", "g")) || []).map(function (a, e) {
      "\n" === a.slice(-1) && (a = a.slice(0, a.length - 1));
      return (0 < e && b ? Array(b + 1).join(" ") : "") + a.trimRight();
    }).join("\n");
  }

  function n(a, e, b) {
    return a.match(/[\n]\s+/) || 40 > e ? a : v(a, e, b);
  }

  function p(a, e) {
    e.find(function (e) {
      return e === a._helpLongFlag || e === a._helpShortFlag;
    }) && (a.outputHelp(), a._exit(0, "commander.helpDisplayed", "(outputHelp)"));
  }

  function w(a) {
    var e = a.name + (!0 === a.variadic ? "..." : "");
    return a.required ? "<" + e + ">" : "[" + e + "]";
  }

  function z(a) {
    var e;
    a = a.split(/[ |,]+/);
    1 < a.length && !/^[[<]/.test(a[1]) && (e = a.shift());
    a = a.shift();
    !e && /^-[^-]$/.test(a) && (e = a, a = void 0);
    return {
      shortFlag: e,
      longFlag: a
    };
  }

  function x(a) {
    return a.map(function (a) {
      if (!a.startsWith("--inspect")) return a;
      var b = "127.0.0.1",
          e = "9229",
          c;
      if (null !== (c = a.match(/^(--inspect(-brk)?)$/))) var d = c[1];else null !== (c = a.match(/^(--inspect(-brk|-port)?)=([^:]+)$/)) ? (d = c[1], /^\d+$/.test(c[3]) ? e = c[3] : b = c[3]) : null !== (c = a.match(/^(--inspect(-brk|-port)?)=([^:]+):(\d+)$/)) && (d = c[1], b = c[3], e = c[4]);
      return d && "0" !== e ? d + "=" + b + ":" + (parseInt(e) + 1) : a;
    });
  }

  var y = require$$0.EventEmitter,
      t = require$$1.spawn;

  h.prototype.name = function () {
    return this.long ? this.long.replace(/^--/, "") : this.short.replace(/^-/, "");
  };

  h.prototype.attributeName = function () {
    return l(this.name().replace(/^no-/, ""));
  };

  h.prototype.is = function (a) {
    return this.short === a || this.long === a;
  };

  f.inherits(g, Error);
  f.inherits(b, y);

  b.prototype.command = function (a, b, c) {
    "object" === typeof b && null !== b && (c = b, b = null);
    c = c || {};
    a = a.split(/ +/);
    var e = this.createCommand(a.shift());
    b && (e.description(b), e._executableHandler = !0);
    c.isDefault && (this._defaultCommandName = e._name);
    e._hidden = !(!c.noHelp && !c.hidden);
    e._helpFlags = this._helpFlags;
    e._helpDescription = this._helpDescription;
    e._helpShortFlag = this._helpShortFlag;
    e._helpLongFlag = this._helpLongFlag;
    e._helpCommandName = this._helpCommandName;
    e._helpCommandnameAndArgs = this._helpCommandnameAndArgs;
    e._helpCommandDescription = this._helpCommandDescription;
    e._exitCallback = this._exitCallback;
    e._storeOptionsAsProperties = this._storeOptionsAsProperties;
    e._passCommandToAction = this._passCommandToAction;
    e._executableFile = c.executableFile || null;
    this.commands.push(e);

    e._parseExpectedArgs(a);

    e.parent = this;
    return b ? this : e;
  };

  b.prototype.createCommand = function (a) {
    return new b(a);
  };

  b.prototype.addCommand = function (a, e) {
    function b(a) {
      a.forEach(function (a) {
        if (a._executableHandler && !a._executableFile) throw Error("Must specify executableFile for deeply nested executable: " + a.name());
        b(a.commands);
      });
    }

    if (!a._name) throw Error("Command passed to .addCommand() must have a name");
    b(a.commands);
    e = e || {};
    e.isDefault && (this._defaultCommandName = a._name);
    if (e.noHelp || e.hidden) a._hidden = !0;
    this.commands.push(a);
    a.parent = this;
    return this;
  };

  b.prototype.arguments = function (a) {
    return this._parseExpectedArgs(a.split(/ +/));
  };

  b.prototype.addHelpCommand = function (a, b) {
    !1 === a ? this._hasImplicitHelpCommand = !1 : (this._hasImplicitHelpCommand = !0, "string" === typeof a && (this._helpCommandName = a.split(" ")[0], this._helpCommandnameAndArgs = a), this._helpCommandDescription = b || this._helpCommandDescription);
    return this;
  };

  b.prototype._lazyHasImplicitHelpCommand = function () {
    void 0 === this._hasImplicitHelpCommand && (this._hasImplicitHelpCommand = this.commands.length && !this._actionHandler && !this._findCommand("help"));
    return this._hasImplicitHelpCommand;
  };

  b.prototype._parseExpectedArgs = function (a) {
    var b = this;
    if (a.length) return a.forEach(function (a) {
      var e = {
        required: !1,
        name: "",
        variadic: !1
      };

      switch (a[0]) {
        case "<":
          e.required = !0;
          e.name = a.slice(1, -1);
          break;

        case "[":
          e.name = a.slice(1, -1);
      }

      3 < e.name.length && "..." === e.name.slice(-3) && (e.variadic = !0, e.name = e.name.slice(0, -3));
      e.name && b._args.push(e);
    }), this._args.forEach(function (a, e) {
      if (a.variadic && e < b._args.length - 1) throw Error("only the last argument can be variadic '" + a.name + "'");
    }), this;
  };

  b.prototype.exitOverride = function (a) {
    this._exitCallback = a ? a : function (a) {
      if ("commander.executeSubCommandAsync" !== a.code) throw a;
    };
    return this;
  };

  b.prototype._exit = function (a, b, c) {
    this._exitCallback && this._exitCallback(new g(a, b, c));
    process.exit(a);
  };

  b.prototype.action = function (a) {
    var b = this;

    this._actionHandler = function (e) {
      var c = b._args.length,
          d = e.slice(0, c);
      d[c] = b._passCommandToAction ? b : b.opts();
      e.length > c && d.push(e.slice(c));
      e = a.apply(b, d);

      for (c = b; c.parent;) c = c.parent;

      c._actionResults.push(e);
    };

    return this;
  };

  b.prototype._checkForOptionNameClash = function (a) {
    if (this._storeOptionsAsProperties && !this._storeOptionsAsPropertiesCalled && "help" !== a.name() && void 0 !== this._getOptionValue(a.attributeName())) {
      var b = !0;
      a.negate ? (b = a.long.replace(/^--no-/, "--"), b = !this._findOption(b)) : a.long && (b = a.long.replace(/^--/, "--no-"), b = !this._findOption(b));
      if (b) throw Error("option '" + a.name() + "' clashes with existing property '" + a.attributeName() + "' on Command\n- call storeOptionsAsProperties(false) to store option values safely,\n- or call storeOptionsAsProperties(true) to suppress this check,\n- or change option name");
    }
  };

  b.prototype._optionEx = function (a, b, c, d, g) {
    var e = this,
        k = new h(b, c);
    b = k.name();
    var q = k.attributeName();
    k.mandatory = !!a.mandatory;

    this._checkForOptionNameClash(k);

    if ("function" !== typeof d) if (d instanceof RegExp) {
      var A = d;

      d = function (a, b) {
        return (a = A.exec(a)) ? a[0] : b;
      };
    } else g = d, d = null;
    if (k.negate || k.optional || k.required || "boolean" === typeof g) k.negate && (a = k.long.replace(/^--no-/, "--"), g = this._findOption(a) ? this._getOptionValue(q) : !0), void 0 !== g && (this._setOptionValue(q, g), k.defaultValue = g);
    this.options.push(k);
    this.on("option:" + b, function (a) {
      var b = e._getOptionValue(q);

      null !== a && d ? a = d(a, void 0 === b ? g : b) : null !== a && k.variadic && (a = b !== g && Array.isArray(b) ? b.concat(a) : [a]);
      "boolean" === typeof b || "undefined" === typeof b ? null == a ? e._setOptionValue(q, k.negate ? !1 : g || !0) : e._setOptionValue(q, a) : null !== a && e._setOptionValue(q, k.negate ? !1 : a);
    });
    return this;
  };

  b.prototype.option = function (a, b, c, d) {
    return this._optionEx({}, a, b, c, d);
  };

  b.prototype.requiredOption = function (a, b, c, d) {
    return this._optionEx({
      mandatory: !0
    }, a, b, c, d);
  };

  b.prototype.allowUnknownOption = function (a) {
    this._allowUnknownOption = void 0 === a || a;
    return this;
  };

  b.prototype.storeOptionsAsProperties = function (a) {
    this._storeOptionsAsPropertiesCalled = !0;
    this._storeOptionsAsProperties = void 0 === a || a;
    if (this.options.length) throw Error("call .storeOptionsAsProperties() before adding options");
    return this;
  };

  b.prototype.passCommandToAction = function (a) {
    this._passCommandToAction = void 0 === a || a;
    return this;
  };

  b.prototype._setOptionValue = function (a, b) {
    this._storeOptionsAsProperties ? this[a] = b : this._optionValues[a] = b;
  };

  b.prototype._getOptionValue = function (a) {
    return this._storeOptionsAsProperties ? this[a] : this._optionValues[a];
  };

  b.prototype.parse = function (a, b) {
    if (void 0 !== a && !Array.isArray(a)) throw Error("first parameter to parse must be array or undefined");
    b = b || {};
    void 0 === a && (a = process.argv, process.versions && process.versions.electron && (b.from = "electron"));
    this.rawArgs = a.slice();

    switch (b.from) {
      case void 0:
      case "node":
        this._scriptPath = a[1];
        a = a.slice(2);
        break;

      case "electron":
        process.defaultApp ? (this._scriptPath = a[1], a = a.slice(2)) : a = a.slice(1);
        break;

      case "user":
        a = a.slice(0);
        break;

      default:
        throw Error("unexpected parse option { from: '" + b.from + "' }");
    }

    !this._scriptPath && process.mainModule && (this._scriptPath = process.mainModule.filename);
    this._name = this._name || this._scriptPath && path.basename(this._scriptPath, path.extname(this._scriptPath));

    this._parseCommand([], a);

    return this;
  };

  b.prototype.parseAsync = function (a, b) {
    var c = this;
    this.parse(a, b);
    return Promise.all(this._actionResults).then(function () {
      return c;
    });
  };

  b.prototype._executeSubCommand = function (a, b) {
    b = b.slice();
    var c = !1;
    c = [".js", ".ts", ".mjs"];

    this._checkForMissingMandatoryOptions();

    var e = this._scriptPath;

    try {
      var d = fs.realpathSync(e);
      var h = path.dirname(d);
    } catch (B) {
      h = ".";
    }

    var k = path.basename(e, path.extname(e)) + "-" + a._name;

    a._executableFile && (k = a._executableFile);
    var r = path.join(h, k);
    fs.existsSync(r) ? k = r : c.forEach(function (a) {
      fs.existsSync("" + r + a) && (k = "" + r + a);
    });
    c = c.includes(path.extname(k));
    if ("win32" !== process.platform) {
      if (c) {
        b.unshift(k);
        b = x(process.execArgv).concat(b);
        var l = t(process.argv[0], b, {
          stdio: "inherit"
        });
      } else l = t(k, b, {
        stdio: "inherit"
      });
    } else b.unshift(k), b = x(process.execArgv).concat(b), l = t(process.execPath, b, {
      stdio: "inherit"
    });
    ["SIGUSR1", "SIGUSR2", "SIGTERM", "SIGINT", "SIGHUP"].forEach(function (a) {
      process.on(a, function () {
        !1 === l.killed && null === l.exitCode && l.kill(a);
      });
    });
    var m = this._exitCallback;
    if (m) l.on("close", function () {
      m(new g(process.exitCode || 0, "commander.executeSubCommandAsync", "(close)"));
    });else l.on("close", process.exit.bind(process));
    l.on("error", function (b) {
      if ("ENOENT" === b.code) throw Error("'" + k + "' does not exist\n - if '" + a._name + "' is not meant to be an executable command, remove description parameter from '.command()' and use '.description()' instead\n - if the default executable name is not suitable, use the executableFile option to supply a custom name");
      if ("EACCES" === b.code) throw Error("'" + k + "' not executable");

      if (m) {
        var c = new g(1, "commander.executeSubCommandAsync", "(error)");
        c.nestedError = b;
        m(c);
      } else process.exit(1);
    });
    this.runningCommand = l;
  };

  b.prototype._dispatchSubcommand = function (a, b, c) {
    (a = this._findCommand(a)) || this._helpAndError();
    a._executableHandler ? this._executeSubCommand(a, b.concat(c)) : a._parseCommand(b, c);
  };

  b.prototype._parseCommand = function (a, b) {
    var c = this,
        e = this.parseOptions(b);
    a = a.concat(e.operands);
    b = e.unknown;
    this.args = a.concat(b);
    if (a && this._findCommand(a[0])) this._dispatchSubcommand(a[0], a.slice(1), b);else if (this._lazyHasImplicitHelpCommand() && a[0] === this._helpCommandName) 1 === a.length ? this.help() : this._dispatchSubcommand(a[1], [], [this._helpLongFlag]);else if (this._defaultCommandName) p(this, b), this._dispatchSubcommand(this._defaultCommandName, a, b);else if (!this.commands.length || 0 !== this.args.length || this._actionHandler || this._defaultCommandName || this._helpAndError(), p(this, e.unknown), this._checkForMissingMandatoryOptions(), 0 < e.unknown.length && this.unknownOption(e.unknown[0]), this._actionHandler) {
      var d = this.args.slice();

      this._args.forEach(function (a, b) {
        a.required && null == d[b] ? c.missingArgument(a.name) : a.variadic && (d[b] = d.splice(b));
      });

      this._actionHandler(d);

      this.emit("command:" + this.name(), a, b);
    } else a.length ? this._findCommand("*") ? this._dispatchSubcommand("*", a, b) : this.listenerCount("command:*") ? this.emit("command:*", a, b) : this.commands.length && this.unknownCommand() : this.commands.length && this._helpAndError();
  };

  b.prototype._findCommand = function (a) {
    if (a) return this.commands.find(function (b) {
      return b._name === a || b._aliases.includes(a);
    });
  };

  b.prototype._findOption = function (a) {
    return this.options.find(function (b) {
      return b.is(a);
    });
  };

  b.prototype._checkForMissingMandatoryOptions = function () {
    for (var a = {
      $jscomp$loop$prop$cmd$4: this
    }; a.$jscomp$loop$prop$cmd$4; a = {
      $jscomp$loop$prop$cmd$4: a.$jscomp$loop$prop$cmd$4
    }, a.$jscomp$loop$prop$cmd$4 = a.$jscomp$loop$prop$cmd$4.parent) a.$jscomp$loop$prop$cmd$4.options.forEach(function (a) {
      return function (b) {
        b.mandatory && void 0 === a.$jscomp$loop$prop$cmd$4._getOptionValue(b.attributeName()) && a.$jscomp$loop$prop$cmd$4.missingMandatoryOptionValue(b);
      };
    }(a));
  };

  b.prototype.parseOptions = function (a) {
    function b(a) {
      return 1 < a.length && "-" === a[0];
    }

    var c = [],
        d = [],
        g = c;
    a = a.slice();

    for (var h = null; a.length;) {
      var k = a.shift();

      if ("--" === k) {
        g === d && g.push(k);
        g.push.apply(g, f.arrayFromIterable(a));
        break;
      }

      if (h && !b(k)) this.emit("option:" + h.name(), k);else {
        h = null;

        if (b(k)) {
          var l = this._findOption(k);

          if (l) {
            l.required ? (h = a.shift(), void 0 === h && this.optionMissingArgument(l), this.emit("option:" + l.name(), h)) : l.optional ? (h = null, 0 < a.length && !b(a[0]) && (h = a.shift()), this.emit("option:" + l.name(), h)) : this.emit("option:" + l.name());
            h = l.variadic ? l : null;
            continue;
          }
        }

        if (2 < k.length && "-" === k[0] && "-" !== k[1] && (l = this._findOption("-" + k[1]))) {
          l.required || l.optional ? this.emit("option:" + l.name(), k.slice(2)) : (this.emit("option:" + l.name()), a.unshift("-" + k.slice(2)));
          continue;
        }

        if (/^--[^=]+=/.test(k)) {
          l = k.indexOf("=");

          var m = this._findOption(k.slice(0, l));

          if (m && (m.required || m.optional)) {
            this.emit("option:" + m.name(), k.slice(l + 1));
            continue;
          }
        }

        1 < k.length && "-" === k[0] && (g = d);
        g.push(k);
      }
    }

    return {
      operands: c,
      unknown: d
    };
  };

  b.prototype.opts = function () {
    if (this._storeOptionsAsProperties) {
      for (var a = {}, b = this.options.length, c = 0; c < b; c++) {
        var d = this.options[c].attributeName();
        a[d] = d === this._versionOptionName ? this._version : this[d];
      }

      return a;
    }

    return this._optionValues;
  };

  b.prototype.missingArgument = function (a) {
    a = "error: missing required argument '" + a + "'";
    console.error(a);

    this._exit(1, "commander.missingArgument", a);
  };

  b.prototype.optionMissingArgument = function (a, b) {
    a = b ? "error: option '" + a.flags + "' argument missing, got '" + b + "'" : "error: option '" + a.flags + "' argument missing";
    console.error(a);

    this._exit(1, "commander.optionMissingArgument", a);
  };

  b.prototype.missingMandatoryOptionValue = function (a) {
    a = "error: required option '" + a.flags + "' not specified";
    console.error(a);

    this._exit(1, "commander.missingMandatoryOptionValue", a);
  };

  b.prototype.unknownOption = function (a) {
    this._allowUnknownOption || (a = "error: unknown option '" + a + "'", console.error(a), this._exit(1, "commander.unknownOption", a));
  };

  b.prototype.unknownCommand = function () {
    for (var a = [this.name()], b = this.parent; b; b = b.parent) a.unshift(b.name());

    a = a.join(" ");
    a = "error: unknown command '" + this.args[0] + "'. See '" + a + " " + this._helpLongFlag + "'.";
    console.error(a);

    this._exit(1, "commander.unknownCommand", a);
  };

  b.prototype.version = function (a, b, c) {
    var e = this;
    if (void 0 === a) return this._version;
    this._version = a;
    b = new h(b || "-V, --version", c || "output the version number");
    this._versionOptionName = b.attributeName();
    this.options.push(b);
    this.on("option:" + b.name(), function () {
      process.stdout.write(a + "\n");

      e._exit(0, "commander.version", a);
    });
    return this;
  };

  b.prototype.description = function (a, b) {
    if (void 0 === a && void 0 === b) return this._description;
    this._description = a;
    this._argsDescription = b;
    return this;
  };

  b.prototype.alias = function (a) {
    if (void 0 === a) return this._aliases[0];
    var b = this;
    0 !== this.commands.length && this.commands[this.commands.length - 1]._executableHandler && (b = this.commands[this.commands.length - 1]);
    if (a === b._name) throw Error("Command alias can't be the same as its name");

    b._aliases.push(a);

    return this;
  };

  b.prototype.aliases = function (a) {
    var b = this;
    if (void 0 === a) return this._aliases;
    a.forEach(function (a) {
      return b.alias(a);
    });
    return this;
  };

  b.prototype.usage = function (a) {
    if (void 0 === a) {
      if (this._usage) return this._usage;
      a = this._args.map(function (a) {
        return w(a);
      });
      return "[options]" + (this.commands.length ? " [command]" : "") + (this._args.length ? " " + a.join(" ") : "");
    }

    this._usage = a;
    return this;
  };

  b.prototype.name = function (a) {
    if (void 0 === a) return this._name;
    this._name = a;
    return this;
  };

  b.prototype.prepareCommands = function () {
    var a = this.commands.filter(function (a) {
      return !a._hidden;
    }).map(function (a) {
      var b = a._args.map(function (a) {
        return w(a);
      }).join(" ");

      return [a._name + (a._aliases[0] ? "|" + a._aliases[0] : "") + (a.options.length ? " [options]" : "") + (b ? " " + b : ""), a._description];
    });
    this._lazyHasImplicitHelpCommand() && a.push([this._helpCommandnameAndArgs, this._helpCommandDescription]);
    return a;
  };

  b.prototype.largestCommandLength = function () {
    return this.prepareCommands().reduce(function (a, b) {
      return Math.max(a, b[0].length);
    }, 0);
  };

  b.prototype.largestOptionLength = function () {
    var a = [].slice.call(this.options);
    a.push({
      flags: this._helpFlags
    });
    return a.reduce(function (a, b) {
      return Math.max(a, b.flags.length);
    }, 0);
  };

  b.prototype.largestArgLength = function () {
    return this._args.reduce(function (a, b) {
      return Math.max(a, b.name.length);
    }, 0);
  };

  b.prototype.padWidth = function () {
    var a = this.largestOptionLength();
    this._argsDescription && this._args.length && this.largestArgLength() > a && (a = this.largestArgLength());
    this.commands && this.commands.length && this.largestCommandLength() > a && (a = this.largestCommandLength());
    return a;
  };

  b.prototype.optionHelp = function () {
    function a(a, d) {
      return m(a, b) + "  " + n(d, c, b + 2);
    }

    var b = this.padWidth(),
        c = (process.stdout.columns || 80) - b - 4,
        d = this.options.map(function (b) {
      var c = b.description + (b.negate || void 0 === b.defaultValue ? "" : " (default: " + JSON.stringify(b.defaultValue) + ")");
      return a(b.flags, c);
    }),
        g = this._helpShortFlag && !this._findOption(this._helpShortFlag),
        h = !this._findOption(this._helpLongFlag);

    if (g || h) {
      var k = this._helpFlags;
      g ? h || (k = this._helpShortFlag) : k = this._helpLongFlag;
      d.push(a(k, this._helpDescription));
    }

    return d.join("\n");
  };

  b.prototype.commandHelp = function () {
    if (!this.commands.length && !this._lazyHasImplicitHelpCommand()) return "";
    var a = this.prepareCommands(),
        b = this.padWidth(),
        c = (process.stdout.columns || 80) - b - 4;
    return ["Commands:", a.map(function (a) {
      var d = a[1] ? "  " + a[1] : "";
      return (d ? m(a[0], b) : a[0]) + n(d, c, b + 2);
    }).join("\n").replace(/^/gm, "  "), ""].join("\n");
  };

  b.prototype.helpInformation = function () {
    var a = [];

    if (this._description) {
      a = [this._description, ""];
      var b = this._argsDescription;

      if (b && this._args.length) {
        var c = this.padWidth(),
            d = (process.stdout.columns || 80) - c - 5;
        a.push("Arguments:");
        a.push("");

        this._args.forEach(function (e) {
          a.push("  " + m(e.name, c) + "  " + v(b[e.name], d, c + 4));
        });

        a.push("");
      }
    }

    var g = this._name;
    this._aliases[0] && (g = g + "|" + this._aliases[0]);

    for (var h = "", k = this.parent; k; k = k.parent) h = k.name() + " " + h;

    g = ["Usage: " + h + g + " " + this.usage(), ""];
    h = [];
    (k = this.commandHelp()) && (h = [k]);
    k = ["Options:", "" + this.optionHelp().replace(/^/gm, "  "), ""];
    return g.concat(a).concat(k).concat(h).join("\n");
  };

  b.prototype.outputHelp = function (a) {
    a || (a = function (a) {
      return a;
    });
    a = a(this.helpInformation());
    if ("string" !== typeof a && !Buffer.isBuffer(a)) throw Error("outputHelp callback must return a string or a Buffer");
    process.stdout.write(a);
    this.emit(this._helpLongFlag);
  };

  b.prototype.helpOption = function (a, b) {
    this._helpFlags = a || this._helpFlags;
    this._helpDescription = b || this._helpDescription;
    a = z(this._helpFlags);
    this._helpShortFlag = a.shortFlag;
    this._helpLongFlag = a.longFlag;
    return this;
  };

  b.prototype.help = function (a) {
    this.outputHelp(a);

    this._exit(process.exitCode || 0, "commander.help", "(outputHelp)");
  };

  b.prototype._helpAndError = function () {
    this.outputHelp();

    this._exit(1, "commander.help", "(outputHelp)");
  };

  d = c.exports = new b();
  d.program = d;
  d.Command = b;
  d.Option = h;
  d.CommanderError = g;
});

u.command("say-hello [msg]").description("Say hello, or provide a special message instead.").action(function (c) {
  return console.log(void 0 === c ? "Hello world!" : c);
});

try {
  u.exitOverride(), u.parse(process.argv);
} catch (c) {
  console.log("\n");
}

export default {};

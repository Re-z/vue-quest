"use strict";

function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
}

function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
}

function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
}

function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
}! function(e, t) {
    "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : void 0, function(C, e) {
    function t(e, t) {
        return t.toUpperCase()
    }
    var n = [],
        T = C.document,
        c = n.slice,
        g = n.concat,
        a = n.push,
        r = n.indexOf,
        i = {},
        s = i.toString,
        f = i.hasOwnProperty,
        m = {},
        o = "2.2.3",
        $ = function e(t, n) {
            return new e.fn.init(t, n)
        },
        l = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        u = /^-ms-/,
        d = /-([\da-z])/gi;

    function h(e) {
        var t = !!e && "length" in e && e.length,
            n = $.type(e);
        return "function" !== n && !$.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    $.fn = $.prototype = {
        jquery: o,
        constructor: $,
        selector: "",
        length: 0,
        toArray: function() {
            return c.call(this)
        },
        get: function(e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : c.call(this)
        },
        pushStack: function(e) {
            var t = $.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e) {
            return $.each(this, e)
        },
        map: function(n) {
            return this.pushStack($.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(c.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: a,
        sort: n.sort,
        splice: n.splice
    }, $.extend = $.fn.extend = function() {
        var e, t, n, i, r, s, o = arguments[0] || {},
            a = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof o && (u = o, o = arguments[a] || {}, a++), "object" == _typeof(o) || $.isFunction(o) || (o = {}), a === l && (o = this, a--); a < l; a++)
            if (null != (e = arguments[a]))
                for (t in e) n = o[t], o !== (i = e[t]) && (u && i && ($.isPlainObject(i) || (r = $.isArray(i))) ? (s = r ? (r = !1, n && $.isArray(n) ? n : []) : n && $.isPlainObject(n) ? n : {}, o[t] = $.extend(u, s, i)) : void 0 !== i && (o[t] = i));
        return o
    }, $.extend({
        expando: "jQuery" + (o + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === $.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var t = e && e.toString();
            return !$.isArray(e) && 0 <= t - parseFloat(t) + 1
        },
        isPlainObject: function(e) {
            var t;
            if ("object" !== $.type(e) || e.nodeType || $.isWindow(e)) return !1;
            if (e.constructor && !f.call(e, "constructor") && !f.call(e.constructor.prototype || {}, "isPrototypeOf")) return !1;
            for (t in e);
            return void 0 === t || f.call(e, t)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == _typeof(e) || "function" == typeof e ? i[s.call(e)] || "object" : _typeof(e)
        },
        globalEval: function(e) {
            var t, n = eval;
            (e = $.trim(e)) && (1 === e.indexOf("use strict") ? ((t = T.createElement("script")).text = e, T.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function(e) {
            return e.replace(u, "ms-").replace(d, t)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var n, i = 0;
            if (h(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break; return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(l, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (h(Object(e)) ? $.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : r.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
            return e.length = r, e
        },
        grep: function(e, t, n) {
            for (var i = [], r = 0, s = e.length, o = !n; r < s; r++) !t(e[r], r) != o && i.push(e[r]);
            return i
        },
        map: function(e, t, n) {
            var i, r, s = 0,
                o = [];
            if (h(e))
                for (i = e.length; s < i; s++) null != (r = t(e[s], s, n)) && o.push(r);
            else
                for (s in e) null != (r = t(e[s], s, n)) && o.push(r);
            return g.apply([], o)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, r;
            return "string" == typeof t && (n = e[t], t = e, e = n), $.isFunction(e) ? (i = c.call(arguments, 2), (r = function() {
                return e.apply(t || this, i.concat(c.call(arguments)))
            }).guid = e.guid = e.guid || $.guid++, r) : void 0
        },
        now: Date.now,
        support: m
    }), "function" == typeof Symbol && ($.fn[Symbol.iterator] = n[Symbol.iterator]), $.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        i["[object " + t + "]"] = t.toLowerCase()
    });
    var p = function(n) {
        function d(e, t, n) {
            var i = "0x" + t - 65536;
            return i != i || n ? t : i < 0 ? String.fromCharCode(65536 + i) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        }

        function r() {
            x()
        }
        var e, f, _, s, o, g, h, m, b, l, u, x, C, a, T, v, c, p, y, $ = "sizzle" + 1 * new Date,
            w = n.document,
            E = 0,
            i = 0,
            S = re(),
            A = re(),
            k = re(),
            L = function(e, t) {
                return e === t && (u = !0), 0
            },
            D = {}.hasOwnProperty,
            t = [],
            j = t.pop,
            q = t.push,
            N = t.push,
            O = t.slice,
            I = function(e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1
            },
            P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            z = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            R = "\\[" + M + "*(" + z + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + z + "))|)" + M + "*\\]",
            H = ":(" + z + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)",
            F = new RegExp(M + "+", "g"),
            W = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            B = new RegExp("^" + M + "*," + M + "*"),
            U = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            G = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
            V = new RegExp(H),
            K = new RegExp("^" + z + "$"),
            Y = {
                ID: new RegExp("^#(" + z + ")"),
                CLASS: new RegExp("^\\.(" + z + ")"),
                TAG: new RegExp("^(" + z + "|[*])"),
                ATTR: new RegExp("^" + R),
                PSEUDO: new RegExp("^" + H),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + P + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            },
            Z = /^(?:input|select|textarea|button)$/i,
            X = /^h\d$/i,
            Q = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = /'|\\/g,
            ne = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig");
        try {
            N.apply(t = O.call(w.childNodes), w.childNodes), t[w.childNodes.length].nodeType
        } catch (e) {
            N = {
                apply: t.length ? function(e, t) {
                    q.apply(e, O.call(t))
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }

        function ie(e, t, n, i) {
            var r, s, o, a, l, u, c, d, h = t && t.ownerDocument,
                p = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!i && ((t ? t.ownerDocument || t : w) !== C && x(t), t = t || C, T)) {
                if (11 !== p && (u = J.exec(e)))
                    if (r = u[1]) {
                        if (9 === p) {
                            if (!(o = t.getElementById(r))) return n;
                            if (o.id === r) return n.push(o), n
                        } else if (h && (o = h.getElementById(r)) && y(t, o) && o.id === r) return n.push(o), n
                    } else {
                        if (u[2]) return N.apply(n, t.getElementsByTagName(e)), n;
                        if ((r = u[3]) && f.getElementsByClassName && t.getElementsByClassName) return N.apply(n, t.getElementsByClassName(r)), n
                    }
                if (f.qsa && !k[e + " "] && (!v || !v.test(e))) {
                    if (1 !== p) h = t, d = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(te, "\\$&") : t.setAttribute("id", a = $), s = (c = g(e)).length, l = K.test(a) ? "#" + a : "[id='" + a + "']"; s--;) c[s] = l + " " + fe(c[s]);
                        d = c.join(","), h = ee.test(e) && he(t.parentNode) || t
                    }
                    if (d) try {
                        return N.apply(n, h.querySelectorAll(d)), n
                    } catch (e) {} finally {
                        a === $ && t.removeAttribute("id")
                    }
                }
            }
            return m(e.replace(W, "$1"), t, n, i)
        }

        function re() {
            var i = [];
            return function e(t, n) {
                return i.push(t + " ") > _.cacheLength && delete e[i.shift()], e[t + " "] = n
            }
        }

        function se(e) {
            return e[$] = !0, e
        }

        function oe(e) {
            var t = C.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function ae(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) _.attrHandle[n[i]] = t
        }

        function le(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function ue(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function ce(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function de(o) {
            return se(function(s) {
                return s = +s, se(function(e, t) {
                    for (var n, i = o([], e.length, s), r = i.length; r--;) e[n = i[r]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function he(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (e in f = ie.support = {}, o = ie.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, x = ie.setDocument = function(e) {
                var t, n, i = e ? e.ownerDocument || e : w;
                return i !== C && 9 === i.nodeType && i.documentElement && (a = (C = i).documentElement, T = !o(C), (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", r, !1) : n.attachEvent && n.attachEvent("onunload", r)), f.attributes = oe(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), f.getElementsByTagName = oe(function(e) {
                    return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
                }), f.getElementsByClassName = Q.test(C.getElementsByClassName), f.getById = oe(function(e) {
                    return a.appendChild(e).id = $, !C.getElementsByName || !C.getElementsByName($).length
                }), f.getById ? (_.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && T) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }, _.filter.ID = function(e) {
                    var t = e.replace(ne, d);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete _.find.ID, _.filter.ID = function(e) {
                    var n = e.replace(ne, d);
                    return function(e) {
                        var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return t && t.value === n
                    }
                }), _.find.TAG = f.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : f.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, i = [],
                        r = 0,
                        s = t.getElementsByTagName(e);
                    if ("*" !== e) return s;
                    for (; n = s[r++];) 1 === n.nodeType && i.push(n);
                    return i
                }, _.find.CLASS = f.getElementsByClassName && function(e, t) {
                    return void 0 !== t.getElementsByClassName && T ? t.getElementsByClassName(e) : void 0
                }, c = [], v = [], (f.qsa = Q.test(C.querySelectorAll)) && (oe(function(e) {
                    a.appendChild(e).innerHTML = "<a id='" + $ + "'></a><select id='" + $ + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + $ + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + $ + "+*").length || v.push(".#.+[+~]")
                }), oe(function(e) {
                    var t = C.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                })), (f.matchesSelector = Q.test(p = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && oe(function(e) {
                    f.disconnectedMatch = p.call(e, "div"), p.call(e, "[s!='']:x"), c.push("!=", H)
                }), v = v.length && new RegExp(v.join("|")), c = c.length && new RegExp(c.join("|")), t = Q.test(a.compareDocumentPosition), y = t || Q.test(a.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, L = t ? function(e, t) {
                    if (e === t) return u = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !f.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === w && y(w, e) ? -1 : t === C || t.ownerDocument === w && y(w, t) ? 1 : l ? I(l, e) - I(l, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return u = !0, 0;
                    var n, i = 0,
                        r = e.parentNode,
                        s = t.parentNode,
                        o = [e],
                        a = [t];
                    if (!r || !s) return e === C ? -1 : t === C ? 1 : r ? -1 : s ? 1 : l ? I(l, e) - I(l, t) : 0;
                    if (r === s) return le(e, t);
                    for (n = e; n = n.parentNode;) o.unshift(n);
                    for (n = t; n = n.parentNode;) a.unshift(n);
                    for (; o[i] === a[i];) i++;
                    return i ? le(o[i], a[i]) : o[i] === w ? -1 : a[i] === w ? 1 : 0
                }), C
            }, ie.matches = function(e, t) {
                return ie(e, null, null, t)
            }, ie.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== C && x(e), t = t.replace(G, "='$1']"), f.matchesSelector && T && !k[t + " "] && (!c || !c.test(t)) && (!v || !v.test(t))) try {
                    var n = p.call(e, t);
                    if (n || f.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {}
                return 0 < ie(t, C, null, [e]).length
            }, ie.contains = function(e, t) {
                return (e.ownerDocument || e) !== C && x(e), y(e, t)
            }, ie.attr = function(e, t) {
                (e.ownerDocument || e) !== C && x(e);
                var n = _.attrHandle[t.toLowerCase()],
                    i = n && D.call(_.attrHandle, t.toLowerCase()) ? n(e, t, !T) : void 0;
                return void 0 !== i ? i : f.attributes || !T ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }, ie.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, ie.uniqueSort = function(e) {
                var t, n = [],
                    i = 0,
                    r = 0;
                if (u = !f.detectDuplicates, l = !f.sortStable && e.slice(0), e.sort(L), u) {
                    for (; t = e[r++];) t === e[r] && (i = n.push(r));
                    for (; i--;) e.splice(n[i], 1)
                }
                return l = null, e
            }, s = ie.getText = function(e) {
                var t, n = "",
                    i = 0,
                    r = e.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += s(e)
                    } else if (3 === r || 4 === r) return e.nodeValue
                } else
                    for (; t = e[i++];) n += s(t);
                return n
            }, (_ = ie.selectors = {
                cacheLength: 50,
                createPseudo: se,
                match: Y,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(ne, d), e[3] = (e[3] || e[4] || e[5] || "").replace(ne, d), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ie.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ie.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return Y.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && V.test(n) && (t = g(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(ne, d).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = S[e + " "];
                        return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && S(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, i, r) {
                        return function(e) {
                            var t = ie.attr(e, n);
                            return null == t ? "!=" === i : !i || (t += "", "=" === i ? t === r : "!=" === i ? t !== r : "^=" === i ? r && 0 === t.indexOf(r) : "*=" === i ? r && -1 < t.indexOf(r) : "$=" === i ? r && t.slice(-r.length) === r : "~=" === i ? -1 < (" " + t.replace(F, " ") + " ").indexOf(r) : "|=" === i && (t === r || t.slice(0, r.length + 1) === r + "-"))
                        }
                    },
                    CHILD: function(f, e, t, g, m) {
                        var v = "nth" !== f.slice(0, 3),
                            y = "last" !== f.slice(-4),
                            w = "of-type" === e;
                        return 1 === g && 0 === m ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, n) {
                            var i, r, s, o, a, l, u = v != y ? "nextSibling" : "previousSibling",
                                c = e.parentNode,
                                d = w && e.nodeName.toLowerCase(),
                                h = !n && !w,
                                p = !1;
                            if (c) {
                                if (v) {
                                    for (; u;) {
                                        for (o = e; o = o[u];)
                                            if (w ? o.nodeName.toLowerCase() === d : 1 === o.nodeType) return !1;
                                        l = u = "only" === f && !l && "nextSibling"
                                    }
                                    return !0
                                }
                                if (l = [y ? c.firstChild : c.lastChild], y && h) {
                                    for (p = (a = (i = (r = (s = (o = c)[$] || (o[$] = {}))[o.uniqueID] || (s[o.uniqueID] = {}))[f] || [])[0] === E && i[1]) && i[2], o = a && c.childNodes[a]; o = ++a && o && o[u] || (p = a = 0) || l.pop();)
                                        if (1 === o.nodeType && ++p && o === e) {
                                            r[f] = [E, a, p];
                                            break
                                        }
                                } else if (h && (p = a = (i = (r = (s = (o = e)[$] || (o[$] = {}))[o.uniqueID] || (s[o.uniqueID] = {}))[f] || [])[0] === E && i[1]), !1 === p)
                                    for (;
                                        (o = ++a && o && o[u] || (p = a = 0) || l.pop()) && ((w ? o.nodeName.toLowerCase() !== d : 1 !== o.nodeType) || !++p || (h && ((r = (s = o[$] || (o[$] = {}))[o.uniqueID] || (s[o.uniqueID] = {}))[f] = [E, p]), o !== e)););
                                return (p -= m) === g || p % g == 0 && 0 <= p / g
                            }
                        }
                    },
                    PSEUDO: function(e, s) {
                        var t, o = _.pseudos[e] || _.setFilters[e.toLowerCase()] || ie.error("unsupported pseudo: " + e);
                        return o[$] ? o(s) : 1 < o.length ? (t = [e, e, "", s], _.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function(e, t) {
                            for (var n, i = o(e, s), r = i.length; r--;) e[n = I(e, i[r])] = !(t[n] = i[r])
                        }) : function(e) {
                            return o(e, 0, t)
                        }) : o
                    }
                },
                pseudos: {
                    not: se(function(e) {
                        var i = [],
                            r = [],
                            a = h(e.replace(W, "$1"));
                        return a[$] ? se(function(e, t, n, i) {
                            for (var r, s = a(e, null, i, []), o = e.length; o--;)(r = s[o]) && (e[o] = !(t[o] = r))
                        }) : function(e, t, n) {
                            return i[0] = e, a(i, null, n, r), i[0] = null, !r.pop()
                        }
                    }),
                    has: se(function(t) {
                        return function(e) {
                            return 0 < ie(t, e).length
                        }
                    }),
                    contains: se(function(t) {
                        return t = t.replace(ne, d),
                            function(e) {
                                return -1 < (e.textContent || e.innerText || s(e)).indexOf(t)
                            }
                    }),
                    lang: se(function(n) {
                        return K.test(n || "") || ie.error("unsupported lang: " + n), n = n.replace(ne, d).toLowerCase(),
                            function(e) {
                                var t;
                                do {
                                    if (t = T ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === a
                    },
                    focus: function(e) {
                        return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return !1 === e.disabled
                    },
                    disabled: function(e) {
                        return !0 === e.disabled
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !_.pseudos.empty(e)
                    },
                    header: function(e) {
                        return X.test(e.nodeName)
                    },
                    input: function(e) {
                        return Z.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: de(function() {
                        return [0]
                    }),
                    last: de(function(e, t) {
                        return [t - 1]
                    }),
                    eq: de(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: de(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: de(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: de(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; 0 <= --i;) e.push(i);
                        return e
                    }),
                    gt: de(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                        return e
                    })
                }
            }).pseudos.nth = _.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) _.pseudos[e] = ue(e);
        for (e in {
                submit: !0,
                reset: !0
            }) _.pseudos[e] = ce(e);

        function pe() {}

        function fe(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function ge(a, e, t) {
            var l = e.dir,
                u = t && "parentNode" === l,
                c = i++;
            return e.first ? function(e, t, n) {
                for (; e = e[l];)
                    if (1 === e.nodeType || u) return a(e, t, n)
            } : function(e, t, n) {
                var i, r, s, o = [E, c];
                if (n) {
                    for (; e = e[l];)
                        if ((1 === e.nodeType || u) && a(e, t, n)) return !0
                } else
                    for (; e = e[l];)
                        if (1 === e.nodeType || u) {
                            if ((i = (r = (s = e[$] || (e[$] = {}))[e.uniqueID] || (s[e.uniqueID] = {}))[l]) && i[0] === E && i[1] === c) return o[2] = i[2];
                            if ((r[l] = o)[2] = a(e, t, n)) return !0
                        }
            }
        }

        function me(r) {
            return 1 < r.length ? function(e, t, n) {
                for (var i = r.length; i--;)
                    if (!r[i](e, t, n)) return !1;
                return !0
            } : r[0]
        }

        function ve(e, t, n, i, r) {
            for (var s, o = [], a = 0, l = e.length, u = null != t; a < l; a++)(s = e[a]) && (n && !n(s, i, r) || (o.push(s), u && t.push(a)));
            return o
        }

        function ye(p, f, g, m, v, e) {
            return m && !m[$] && (m = ye(m)), v && !v[$] && (v = ye(v, e)), se(function(e, t, n, i) {
                var r, s, o, a = [],
                    l = [],
                    u = t.length,
                    c = e || function(e, t, n) {
                        for (var i = 0, r = t.length; i < r; i++) ie(e, t[i], n);
                        return n
                    }(f || "*", n.nodeType ? [n] : n, []),
                    d = !p || !e && f ? c : ve(c, a, p, n, i),
                    h = g ? v || (e ? p : u || m) ? [] : t : d;
                if (g && g(d, h, n, i), m)
                    for (r = ve(h, l), m(r, [], n, i), s = r.length; s--;)(o = r[s]) && (h[l[s]] = !(d[l[s]] = o));
                if (e) {
                    if (v || p) {
                        if (v) {
                            for (r = [], s = h.length; s--;)(o = h[s]) && r.push(d[s] = o);
                            v(null, h = [], r, i)
                        }
                        for (s = h.length; s--;)(o = h[s]) && -1 < (r = v ? I(e, o) : a[s]) && (e[r] = !(t[r] = o))
                    }
                } else h = ve(h === t ? h.splice(u, h.length) : h), v ? v(null, t, h, i) : N.apply(t, h)
            })
        }

        function we(e) {
            for (var r, t, n, i = e.length, s = _.relative[e[0].type], o = s || _.relative[" "], a = s ? 1 : 0, l = ge(function(e) {
                    return e === r
                }, o, !0), u = ge(function(e) {
                    return -1 < I(r, e)
                }, o, !0), c = [function(e, t, n) {
                    var i = !s && (n || t !== b) || ((r = t).nodeType ? l(e, t, n) : u(e, t, n));
                    return r = null, i
                }]; a < i; a++)
                if (t = _.relative[e[a].type]) c = [ge(me(c), t)];
                else {
                    if ((t = _.filter[e[a].type].apply(null, e[a].matches))[$]) {
                        for (n = ++a; n < i && !_.relative[e[n].type]; n++);
                        return ye(1 < a && me(c), 1 < a && fe(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(W, "$1"), t, a < n && we(e.slice(a, n)), n < i && we(e = e.slice(n)), n < i && fe(e))
                    }
                    c.push(t)
                }
            return me(c)
        }
        return pe.prototype = _.filters = _.pseudos, _.setFilters = new pe, g = ie.tokenize = function(e, t) {
            var n, i, r, s, o, a, l, u = A[e + " "];
            if (u) return t ? 0 : u.slice(0);
            for (o = e, a = [], l = _.preFilter; o;) {
                for (s in n && !(i = B.exec(o)) || (i && (o = o.slice(i[0].length) || o), a.push(r = [])), n = !1, (i = U.exec(o)) && (n = i.shift(), r.push({
                        value: n,
                        type: i[0].replace(W, " ")
                    }), o = o.slice(n.length)), _.filter) !(i = Y[s].exec(o)) || l[s] && !(i = l[s](i)) || (n = i.shift(), r.push({
                    value: n,
                    type: s,
                    matches: i
                }), o = o.slice(n.length));
                if (!n) break
            }
            return t ? o.length : o ? ie.error(e) : A(e, a).slice(0)
        }, h = ie.compile = function(e, t) {
            var n, i = [],
                r = [],
                s = k[e + " "];
            if (!s) {
                for (n = (t = t || g(e)).length; n--;)(s = we(t[n]))[$] ? i.push(s) : r.push(s);
                (s = k(e, function(m, v) {
                    function e(e, t, n, i, r) {
                        var s, o, a, l = 0,
                            u = "0",
                            c = e && [],
                            d = [],
                            h = b,
                            p = e || w && _.find.TAG("*", r),
                            f = E += null == h ? 1 : Math.random() || .1,
                            g = p.length;
                        for (r && (b = t === C || t || r); u !== g && null != (s = p[u]); u++) {
                            if (w && s) {
                                for (o = 0, t || s.ownerDocument === C || (x(s), n = !T); a = m[o++];)
                                    if (a(s, t || C, n)) {
                                        i.push(s);
                                        break
                                    }
                                r && (E = f)
                            }
                            y && ((s = !a && s) && l--, e && c.push(s))
                        }
                        if (l += u, y && u !== l) {
                            for (o = 0; a = v[o++];) a(c, d, t, n);
                            if (e) {
                                if (0 < l)
                                    for (; u--;) c[u] || d[u] || (d[u] = j.call(i));
                                d = ve(d)
                            }
                            N.apply(i, d), r && !e && 0 < d.length && 1 < l + v.length && ie.uniqueSort(i)
                        }
                        return r && (E = f, b = h), c
                    }
                    var y = 0 < v.length,
                        w = 0 < m.length;
                    return y ? se(e) : e
                }(r, i))).selector = e
            }
            return s
        }, m = ie.select = function(e, t, n, i) {
            var r, s, o, a, l, u = "function" == typeof e && e,
                c = !i && g(e = u.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (s = c[0] = c[0].slice(0)).length && "ID" === (o = s[0]).type && f.getById && 9 === t.nodeType && T && _.relative[s[1].type]) {
                    if (!(t = (_.find.ID(o.matches[0].replace(ne, d), t) || [])[0])) return n;
                    u && (t = t.parentNode), e = e.slice(s.shift().value.length)
                }
                for (r = Y.needsContext.test(e) ? 0 : s.length; r-- && (o = s[r], !_.relative[a = o.type]);)
                    if ((l = _.find[a]) && (i = l(o.matches[0].replace(ne, d), ee.test(s[0].type) && he(t.parentNode) || t))) {
                        if (s.splice(r, 1), !(e = i.length && fe(s))) return N.apply(n, i), n;
                        break
                    }
            }
            return (u || h(e, c))(i, t, !T, n, !t || ee.test(e) && he(t.parentNode) || t), n
        }, f.sortStable = $.split("").sort(L).join("") === $, f.detectDuplicates = !!u, x(), f.sortDetached = oe(function(e) {
            return 1 & e.compareDocumentPosition(C.createElement("div"))
        }), oe(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || ae("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), f.attributes && oe(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || ae("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), oe(function(e) {
            return null == e.getAttribute("disabled")
        }) || ae(P, function(e, t, n) {
            var i;
            return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), ie
    }(C);
    $.find = p, $.expr = p.selectors, $.expr[":"] = $.expr.pseudos, $.uniqueSort = $.unique = p.uniqueSort, $.text = p.getText, $.isXMLDoc = p.isXML, $.contains = p.contains;

    function v(e, t, n) {
        for (var i = [], r = void 0 !== n;
            (e = e[t]) && 9 !== e.nodeType;)
            if (1 === e.nodeType) {
                if (r && $(e).is(n)) break;
                i.push(e)
            }
        return i
    }

    function y(e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
    }
    var w = $.expr.match.needsContext,
        _ = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        b = /^.[^:#\[\.,]*$/;

    function x(e, n, i) {
        if ($.isFunction(n)) return $.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== i
        });
        if (n.nodeType) return $.grep(e, function(e) {
            return e === n !== i
        });
        if ("string" == typeof n) {
            if (b.test(n)) return $.filter(n, e, i);
            n = $.filter(n, e)
        }
        return $.grep(e, function(e) {
            return -1 < r.call(n, e) !== i
        })
    }
    $.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? $.find.matchesSelector(i, e) ? [i] : [] : $.find.matches(e, $.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, $.fn.extend({
        find: function(e) {
            var t, n = this.length,
                i = [],
                r = this;
            if ("string" != typeof e) return this.pushStack($(e).filter(function() {
                for (t = 0; t < n; t++)
                    if ($.contains(r[t], this)) return !0
            }));
            for (t = 0; t < n; t++) $.find(e, r[t], i);
            return (i = this.pushStack(1 < n ? $.unique(i) : i)).selector = this.selector ? this.selector + " " + e : e, i
        },
        filter: function(e) {
            return this.pushStack(x(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(x(this, e || [], !0))
        },
        is: function(e) {
            return !!x(this, "string" == typeof e && w.test(e) ? $(e) : e || [], !1).length
        }
    });
    var E, S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    ($.fn.init = function(e, t, n) {
        var i, r;
        if (!e) return this;
        if (n = n || E, "string" != typeof e) return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : $.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e($) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), $.makeArray(e, this));
        if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : S.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (i[1]) {
            if (t = t instanceof $ ? t[0] : t, $.merge(this, $.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : T, !0)), _.test(i[1]) && $.isPlainObject(t))
                for (i in t) $.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
            return this
        }
        return (r = T.getElementById(i[2])) && r.parentNode && (this.length = 1, this[0] = r), this.context = T, this.selector = e, this
    }).prototype = $.fn, E = $(T);
    var A = /^(?:parents|prev(?:Until|All))/,
        k = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function L(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    $.fn.extend({
        has: function(e) {
            var t = $(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if ($.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, i = 0, r = this.length, s = [], o = w.test(e) || "string" != typeof e ? $(e, t || this.context) : 0; i < r; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (o ? -1 < o.index(n) : 1 === n.nodeType && $.find.matchesSelector(n, e))) {
                        s.push(n);
                        break
                    }
            return this.pushStack(1 < s.length ? $.uniqueSort(s) : s)
        },
        index: function(e) {
            return e ? "string" == typeof e ? r.call($(e), this[0]) : r.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack($.uniqueSort($.merge(this.get(), $(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), $.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return v(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return v(e, "parentNode", n)
        },
        next: function(e) {
            return L(e, "nextSibling")
        },
        prev: function(e) {
            return L(e, "previousSibling")
        },
        nextAll: function(e) {
            return v(e, "nextSibling")
        },
        prevAll: function(e) {
            return v(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return v(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return v(e, "previousSibling", n)
        },
        siblings: function(e) {
            return y((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return y(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || $.merge([], e.childNodes)
        }
    }, function(i, r) {
        $.fn[i] = function(e, t) {
            var n = $.map(this, r, e);
            return "Until" !== i.slice(-5) && (t = e), t && "string" == typeof t && (n = $.filter(t, n)), 1 < this.length && (k[i] || $.uniqueSort(n), A.test(i) && n.reverse()), this.pushStack(n)
        }
    });
    var D, j = /\S+/g;

    function q() {
        T.removeEventListener("DOMContentLoaded", q), C.removeEventListener("load", q), $.ready()
    }
    $.Callbacks = function(i) {
        i = "string" == typeof i ? function(e) {
            var n = {};
            return $.each(e.match(j) || [], function(e, t) {
                n[t] = !0
            }), n
        }(i) : $.extend({}, i);

        function n() {
            for (s = i.once, t = r = !0; a.length; l = -1)
                for (e = a.shift(); ++l < o.length;) !1 === o[l].apply(e[0], e[1]) && i.stopOnFalse && (l = o.length, e = !1);
            i.memory || (e = !1), r = !1, s && (o = e ? [] : "")
        }
        var r, e, t, s, o = [],
            a = [],
            l = -1,
            u = {
                add: function() {
                    return o && (e && !r && (l = o.length - 1, a.push(e)), function n(e) {
                        $.each(e, function(e, t) {
                            $.isFunction(t) ? i.unique && u.has(t) || o.push(t) : t && t.length && "string" !== $.type(t) && n(t)
                        })
                    }(arguments), e && !r && n()), this
                },
                remove: function() {
                    return $.each(arguments, function(e, t) {
                        for (var n; - 1 < (n = $.inArray(t, o, n));) o.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < $.inArray(e, o) : 0 < o.length
                },
                empty: function() {
                    return o = o && [], this
                },
                disable: function() {
                    return s = a = [], o = e = "", this
                },
                disabled: function() {
                    return !o
                },
                lock: function() {
                    return s = a = [], e || (o = e = ""), this
                },
                locked: function() {
                    return !!s
                },
                fireWith: function(e, t) {
                    return s || (t = [e, (t = t || []).slice ? t.slice() : t], a.push(t), r || n()), this
                },
                fire: function() {
                    return u.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!t
                }
            };
        return u
    }, $.extend({
        Deferred: function(e) {
            var s = [
                    ["resolve", "done", $.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", $.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", $.Callbacks("memory")]
                ],
                r = "pending",
                o = {
                    state: function() {
                        return r
                    },
                    always: function() {
                        return a.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var r = arguments;
                        return $.Deferred(function(i) {
                            $.each(s, function(e, t) {
                                var n = $.isFunction(r[e]) && r[e];
                                a[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && $.isFunction(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[t[0] + "With"](this === o ? i.promise() : this, n ? [e] : arguments)
                                })
                            }), r = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? $.extend(e, o) : o
                    }
                },
                a = {};
            return o.pipe = o.then, $.each(s, function(e, t) {
                var n = t[2],
                    i = t[3];
                o[t[1]] = n.add, i && n.add(function() {
                    r = i
                }, s[1 ^ e][2].disable, s[2][2].lock), a[t[0]] = function() {
                    return a[t[0] + "With"](this === a ? o : this, arguments), this
                }, a[t[0] + "With"] = n.fireWith
            }), o.promise(a), e && e.call(a, a), a
        },
        when: function(e) {
            function t(t, n, i) {
                return function(e) {
                    n[t] = this, i[t] = 1 < arguments.length ? c.call(arguments) : e, i === r ? u.notifyWith(n, i) : --l || u.resolveWith(n, i)
                }
            }
            var r, n, i, s = 0,
                o = c.call(arguments),
                a = o.length,
                l = 1 !== a || e && $.isFunction(e.promise) ? a : 0,
                u = 1 === l ? e : $.Deferred();
            if (1 < a)
                for (r = new Array(a), n = new Array(a), i = new Array(a); s < a; s++) o[s] && $.isFunction(o[s].promise) ? o[s].promise().progress(t(s, n, r)).done(t(s, i, o)).fail(u.reject) : --l;
            return l || u.resolveWith(i, o), u.promise()
        }
    }), $.fn.ready = function(e) {
        return $.ready.promise().done(e), this
    }, $.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? $.readyWait++ : $.ready(!0)
        },
        ready: function(e) {
            (!0 === e ? --$.readyWait : $.isReady) || (($.isReady = !0) !== e && 0 < --$.readyWait || (D.resolveWith(T, [$]), $.fn.triggerHandler && ($(T).triggerHandler("ready"), $(T).off("ready"))))
        }
    }), $.ready.promise = function(e) {
        return D || (D = $.Deferred(), "complete" === T.readyState || "loading" !== T.readyState && !T.documentElement.doScroll ? C.setTimeout($.ready) : (T.addEventListener("DOMContentLoaded", q), C.addEventListener("load", q))), D.promise(e)
    }, $.ready.promise();

    function N(e, t, n, i, r, s, o) {
        var a = 0,
            l = e.length,
            u = null == n;
        if ("object" === $.type(n))
            for (a in r = !0, n) N(e, t, a, n[a], !0, s, o);
        else if (void 0 !== i && (r = !0, $.isFunction(i) || (o = !0), u && (t = o ? (t.call(e, i), null) : (u = t, function(e, t, n) {
                return u.call($(e), n)
            })), t))
            for (; a < l; a++) t(e[a], n, o ? i : i.call(e[a], a, t(e[a], n)));
        return r ? e : u ? t.call(e) : l ? t(e[0], n) : s
    }

    function O(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }

    function I() {
        this.expando = $.expando + I.uid++
    }
    I.uid = 1, I.prototype = {
        register: function(e, t) {
            var n = t || {};
            return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
                value: n,
                writable: !0,
                configurable: !0
            }), e[this.expando]
        },
        cache: function(e) {
            if (!O(e)) return {};
            var t = e[this.expando];
            return t || (t = {}, O(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var i, r = this.cache(e);
            if ("string" == typeof t) r[t] = n;
            else
                for (i in t) r[i] = t[i];
            return r
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
        },
        access: function(e, t, n) {
            var i;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? void 0 !== (i = this.get(e, t)) ? i : this.get(e, $.camelCase(t)) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i, r, s = e[this.expando];
            if (void 0 !== s) {
                if (void 0 === t) this.register(e);
                else {
                    n = (i = $.isArray(t) ? t.concat(t.map($.camelCase)) : (r = $.camelCase(t), t in s ? [t, r] : (i = r) in s ? [i] : i.match(j) || [])).length;
                    for (; n--;) delete s[i[n]]
                }
                void 0 !== t && !$.isEmptyObject(s) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !$.isEmptyObject(t)
        }
    };
    var P = new I,
        M = new I,
        z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        R = /[A-Z]/g;

    function H(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(R, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : z.test(n) ? $.parseJSON(n) : n)
                } catch (e) {}
                M.set(e, t, n)
            } else n = void 0;
        return n
    }
    $.extend({
        hasData: function(e) {
            return M.hasData(e) || P.hasData(e)
        },
        data: function(e, t, n) {
            return M.access(e, t, n)
        },
        removeData: function(e, t) {
            M.remove(e, t)
        },
        _data: function(e, t, n) {
            return P.access(e, t, n)
        },
        _removeData: function(e, t) {
            P.remove(e, t)
        }
    }), $.fn.extend({
        data: function(i, e) {
            var t, n, r, s = this[0],
                o = s && s.attributes;
            if (void 0 !== i) return "object" == _typeof(i) ? this.each(function() {
                M.set(this, i)
            }) : N(this, function(t) {
                var e, n;
                if (s && void 0 === t) {
                    if (void 0 !== (e = M.get(s, i) || M.get(s, i.replace(R, "-$&").toLowerCase()))) return e;
                    if (n = $.camelCase(i), void 0 !== (e = M.get(s, n))) return e;
                    if (void 0 !== (e = H(s, n, void 0))) return e
                } else n = $.camelCase(i), this.each(function() {
                    var e = M.get(this, n);
                    M.set(this, n, t), -1 < i.indexOf("-") && void 0 !== e && M.set(this, i, t)
                })
            }, null, e, 1 < arguments.length, null, !0);
            if (this.length && (r = M.get(s), 1 === s.nodeType && !P.get(s, "hasDataAttrs"))) {
                for (t = o.length; t--;) o[t] && (0 === (n = o[t].name).indexOf("data-") && (n = $.camelCase(n.slice(5)), H(s, n, r[n])));
                P.set(s, "hasDataAttrs", !0)
            }
            return r
        },
        removeData: function(e) {
            return this.each(function() {
                M.remove(this, e)
            })
        }
    }), $.extend({
        queue: function(e, t, n) {
            var i;
            return e ? (t = (t || "fx") + "queue", i = P.get(e, t), n && (!i || $.isArray(n) ? i = P.access(e, t, $.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = $.queue(e, t),
                i = n.length,
                r = n.shift(),
                s = $._queueHooks(e, t);
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete s.stop, r.call(e, function() {
                $.dequeue(e, t)
            }, s)), !i && s && s.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return P.get(e, n) || P.access(e, n, {
                empty: $.Callbacks("once memory").add(function() {
                    P.remove(e, [t + "queue", n])
                })
            })
        }
    }), $.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? $.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = $.queue(this, t, n);
                $._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && $.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                $.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            function n() {
                --r || s.resolveWith(o, [o])
            }
            var i, r = 1,
                s = $.Deferred(),
                o = this,
                a = this.length;
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(i = P.get(o[a], e + "queueHooks")) && i.empty && (r++, i.empty.add(n));
            return n(), s.promise(t)
        }
    });

    function F(e, t) {
        return e = t || e, "none" === $.css(e, "display") || !$.contains(e.ownerDocument, e)
    }
    var W = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        B = new RegExp("^(?:([+-])=|)(" + W + ")([a-z%]*)$", "i"),
        U = ["Top", "Right", "Bottom", "Left"];

    function G(e, t, n, i) {
        var r, s = 1,
            o = 20,
            a = i ? function() {
                return i.cur()
            } : function() {
                return $.css(e, t, "")
            },
            l = a(),
            u = n && n[3] || ($.cssNumber[t] ? "" : "px"),
            c = ($.cssNumber[t] || "px" !== u && +l) && B.exec($.css(e, t));
        if (c && c[3] !== u)
            for (u = u || c[3], n = n || [], c = +l || 1; c /= s = s || ".5", $.style(e, t, c + u), s !== (s = a() / l) && 1 !== s && --o;);
        return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r
    }
    var V = /^(?:checkbox|radio)$/i,
        K = /<([\w:-]+)/,
        Y = /^$|\/(?:java|ecma)script/i,
        Z = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function X(e, t) {
        var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && $.nodeName(e, t) ? $.merge([e], n) : n
    }

    function Q(e, t) {
        for (var n = 0, i = e.length; n < i; n++) P.set(e[n], "globalEval", !t || P.get(t[n], "globalEval"))
    }
    Z.optgroup = Z.option, Z.tbody = Z.tfoot = Z.colgroup = Z.caption = Z.thead, Z.th = Z.td;
    var J, ee, te = /<|&#?\w+;/;

    function ne(e, t, n, i, r) {
        for (var s, o, a, l, u, c, d = t.createDocumentFragment(), h = [], p = 0, f = e.length; p < f; p++)
            if ((s = e[p]) || 0 === s)
                if ("object" === $.type(s)) $.merge(h, s.nodeType ? [s] : s);
                else if (te.test(s)) {
            for (o = o || d.appendChild(t.createElement("div")), a = (K.exec(s) || ["", ""])[1].toLowerCase(), l = Z[a] || Z._default, o.innerHTML = l[1] + $.htmlPrefilter(s) + l[2], c = l[0]; c--;) o = o.lastChild;
            $.merge(h, o.childNodes), (o = d.firstChild).textContent = ""
        } else h.push(t.createTextNode(s));
        for (d.textContent = "", p = 0; s = h[p++];)
            if (i && -1 < $.inArray(s, i)) r && r.push(s);
            else if (u = $.contains(s.ownerDocument, s), o = X(d.appendChild(s), "script"), u && Q(o), n)
            for (c = 0; s = o[c++];) Y.test(s.type || "") && n.push(s);
        return d
    }
    J = T.createDocumentFragment().appendChild(T.createElement("div")), (ee = T.createElement("input")).setAttribute("type", "radio"), ee.setAttribute("checked", "checked"), ee.setAttribute("name", "t"), J.appendChild(ee), m.checkClone = J.cloneNode(!0).cloneNode(!0).lastChild.checked, J.innerHTML = "<textarea>x</textarea>", m.noCloneChecked = !!J.cloneNode(!0).lastChild.defaultValue;
    var ie = /^key/,
        re = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        se = /^([^.]*)(?:\.(.+)|)/;

    function oe() {
        return !0
    }

    function ae() {
        return !1
    }

    function le() {
        try {
            return T.activeElement
        } catch (e) {}
    }

    function ue(e, t, n, i, r, s) {
        var o, a;
        if ("object" == _typeof(t)) {
            for (a in "string" != typeof n && (i = i || n, n = void 0), t) ue(e, a, n, i, t[a], s);
            return e
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = ae;
        else if (!r) return e;
        return 1 === s && (o = r, (r = function(e) {
            return $().off(e), o.apply(this, arguments)
        }).guid = o.guid || (o.guid = $.guid++)), e.each(function() {
            $.event.add(this, t, r, i, n)
        })
    }
    $.event = {
        global: {},
        add: function(t, e, n, i, r) {
            var s, o, a, l, u, c, d, h, p, f, g, m = P.get(t);
            if (m)
                for (n.handler && (n = (s = n).handler, r = s.selector), n.guid || (n.guid = $.guid++), (l = m.events) || (l = m.events = {}), (o = m.handle) || (o = m.handle = function(e) {
                        return void 0 !== $ && $.event.triggered !== e.type ? $.event.dispatch.apply(t, arguments) : void 0
                    }), u = (e = (e || "").match(j) || [""]).length; u--;) p = g = (a = se.exec(e[u]) || [])[1], f = (a[2] || "").split(".").sort(), p && (d = $.event.special[p] || {}, p = (r ? d.delegateType : d.bindType) || p, d = $.event.special[p] || {}, c = $.extend({
                    type: p,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && $.expr.match.needsContext.test(r),
                    namespace: f.join(".")
                }, s), (h = l[p]) || ((h = l[p] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(t, i, f, o) || t.addEventListener && t.addEventListener(p, o)), d.add && (d.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, c) : h.push(c), $.event.global[p] = !0)
        },
        remove: function(e, t, n, i, r) {
            var s, o, a, l, u, c, d, h, p, f, g, m = P.hasData(e) && P.get(e);
            if (m && (l = m.events)) {
                for (u = (t = (t || "").match(j) || [""]).length; u--;)
                    if (p = g = (a = se.exec(t[u]) || [])[1], f = (a[2] || "").split(".").sort(), p) {
                        for (d = $.event.special[p] || {}, h = l[p = (i ? d.delegateType : d.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = s = h.length; s--;) c = h[s], !r && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (h.splice(s, 1), c.selector && h.delegateCount--, d.remove && d.remove.call(e, c));
                        o && !h.length && (d.teardown && !1 !== d.teardown.call(e, f, m.handle) || $.removeEvent(e, p, m.handle), delete l[p])
                    } else
                        for (p in l) $.event.remove(e, p + t[u], n, i, !0);
                $.isEmptyObject(l) && P.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            e = $.event.fix(e);
            var t, n, i, r, s, o = [],
                a = c.call(arguments),
                l = (P.get(this, "events") || {})[e.type] || [],
                u = $.event.special[e.type] || {};
            if ((a[0] = e).delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, e)) {
                for (o = $.event.handlers.call(this, e, l), t = 0;
                    (r = o[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = r.elem, n = 0;
                        (s = r.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(s.namespace) || (e.handleObj = s, e.data = s.data, void 0 !== (i = (($.event.special[s.origType] || {}).handle || s.handler).apply(r.elem, a)) && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, i, r, s, o = [],
                a = t.delegateCount,
                l = e.target;
            if (a && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                        for (i = [], n = 0; n < a; n++) void 0 === i[r = (s = t[n]).selector + " "] && (i[r] = s.needsContext ? -1 < $(r, this).index(l) : $.find(r, this, null, [l]).length), i[r] && i.push(s);
                        i.length && o.push({
                            elem: l,
                            handlers: i
                        })
                    }
            return a < t.length && o.push({
                elem: this,
                handlers: t.slice(a)
            }), o
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, i, r, s = t.button;
                return null == e.pageX && null != t.clientX && (i = (n = e.target.ownerDocument || T).documentElement, r = n.body, e.pageX = t.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), e.which || void 0 === s || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
            }
        },
        fix: function(e) {
            if (e[$.expando]) return e;
            var t, n, i, r = e.type,
                s = e,
                o = this.fixHooks[r];
            for (o || (this.fixHooks[r] = o = re.test(r) ? this.mouseHooks : ie.test(r) ? this.keyHooks : {}), i = o.props ? this.props.concat(o.props) : this.props, e = new $.Event(s), t = i.length; t--;) e[n = i[t]] = s[n];
            return e.target || (e.target = T), 3 === e.target.nodeType && (e.target = e.target.parentNode), o.filter ? o.filter(e, s) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== le() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === le() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && $.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return $.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, $.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, $.Event = function(e, t) {
        return this instanceof $.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? oe : ae) : this.type = e, t && $.extend(this, t), this.timeStamp = e && e.timeStamp || $.now(), void(this[$.expando] = !0)) : new $.Event(e, t)
    }, $.Event.prototype = {
        constructor: $.Event,
        isDefaultPrevented: ae,
        isPropagationStopped: ae,
        isImmediatePropagationStopped: ae,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = oe, e && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = oe, e && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = oe, e && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, $.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, r) {
        $.event.special[e] = {
            delegateType: r,
            bindType: r,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    i = e.handleObj;
                return n && (n === this || $.contains(this, n)) || (e.type = i.origType, t = i.handler.apply(this, arguments), e.type = r), t
            }
        }
    }), $.fn.extend({
        on: function(e, t, n, i) {
            return ue(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return ue(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, $(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" != _typeof(e)) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ae), this.each(function() {
                $.event.remove(this, e, n, t)
            });
            for (r in e) this.off(r, t, e[r]);
            return this
        }
    });
    var ce = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        de = /<script|<style|<link/i,
        he = /checked\s*(?:[^=]|=\s*.checked.)/i,
        pe = /^true\/(.*)/,
        fe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function ge(e, t) {
        return $.nodeName(e, "table") && $.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function me(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function ve(e) {
        var t = pe.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function ye(e, t) {
        var n, i, r, s, o, a, l, u;
        if (1 === t.nodeType) {
            if (P.hasData(e) && (s = P.access(e), o = P.set(t, s), u = s.events))
                for (r in delete o.handle, o.events = {}, u)
                    for (n = 0, i = u[r].length; n < i; n++) $.event.add(t, r, u[r][n]);
            M.hasData(e) && (a = M.access(e), l = $.extend({}, a), M.set(t, l))
        }
    }

    function we(n, i, r, s) {
        i = g.apply([], i);
        var e, t, o, a, l, u, c = 0,
            d = n.length,
            h = d - 1,
            p = i[0],
            f = $.isFunction(p);
        if (f || 1 < d && "string" == typeof p && !m.checkClone && he.test(p)) return n.each(function(e) {
            var t = n.eq(e);
            f && (i[0] = p.call(this, e, t.html())), we(t, i, r, s)
        });
        if (d && (t = (e = ne(i, n[0].ownerDocument, !1, n, s)).firstChild, 1 === e.childNodes.length && (e = t), t || s)) {
            for (a = (o = $.map(X(e, "script"), me)).length; c < d; c++) l = e, c !== h && (l = $.clone(l, !0, !0), a && $.merge(o, X(l, "script"))), r.call(n[c], l, c);
            if (a)
                for (u = o[o.length - 1].ownerDocument, $.map(o, ve), c = 0; c < a; c++) l = o[c], Y.test(l.type || "") && !P.access(l, "globalEval") && $.contains(u, l) && (l.src ? $._evalUrl && $._evalUrl(l.src) : $.globalEval(l.textContent.replace(fe, "")))
        }
        return n
    }

    function _e(e, t, n) {
        for (var i, r = t ? $.filter(t, e) : e, s = 0; null != (i = r[s]); s++) n || 1 !== i.nodeType || $.cleanData(X(i)), i.parentNode && (n && $.contains(i.ownerDocument, i) && Q(X(i, "script")), i.parentNode.removeChild(i));
        return e
    }
    $.extend({
        htmlPrefilter: function(e) {
            return e.replace(ce, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var i, r, s, o, a, l, u, c = e.cloneNode(!0),
                d = $.contains(e.ownerDocument, e);
            if (!(m.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || $.isXMLDoc(e)))
                for (o = X(c), i = 0, r = (s = X(e)).length; i < r; i++) a = s[i], l = o[i], void 0, "input" === (u = l.nodeName.toLowerCase()) && V.test(a.type) ? l.checked = a.checked : "input" !== u && "textarea" !== u || (l.defaultValue = a.defaultValue);
            if (t)
                if (n)
                    for (s = s || X(e), o = o || X(c), i = 0, r = s.length; i < r; i++) ye(s[i], o[i]);
                else ye(e, c);
            return 0 < (o = X(c, "script")).length && Q(o, !d && X(e, "script")), c
        },
        cleanData: function(e) {
            for (var t, n, i, r = $.event.special, s = 0; void 0 !== (n = e[s]); s++)
                if (O(n)) {
                    if (t = n[P.expando]) {
                        if (t.events)
                            for (i in t.events) r[i] ? $.event.remove(n, i) : $.removeEvent(n, i, t.handle);
                        n[P.expando] = void 0
                    }
                    n[M.expando] && (n[M.expando] = void 0)
                }
        }
    }), $.fn.extend({
        domManip: we,
        detach: function(e) {
            return _e(this, e, !0)
        },
        remove: function(e) {
            return _e(this, e)
        },
        text: function(e) {
            return N(this, function(e) {
                return void 0 === e ? $.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return we(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || ge(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return we(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = ge(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return we(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return we(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && ($.cleanData(X(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return $.clone(this, e, t)
            })
        },
        html: function(e) {
            return N(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !de.test(e) && !Z[(K.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = $.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && ($.cleanData(X(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return we(this, arguments, function(e) {
                var t = this.parentNode;
                $.inArray(this, n) < 0 && ($.cleanData(X(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), $.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, o) {
        $.fn[e] = function(e) {
            for (var t, n = [], i = $(e), r = i.length - 1, s = 0; s <= r; s++) t = s === r ? this : this.clone(!0), $(i[s])[o](t), a.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var be, xe = {
        HTML: "block",
        BODY: "block"
    };

    function Ce(e, t) {
        var n = $(t.createElement(e)).appendTo(t.body),
            i = $.css(n[0], "display");
        return n.detach(), i
    }

    function Te(e) {
        var t = T,
            n = xe[e];
        return n || ("none" !== (n = Ce(e, t)) && n || ((t = (be = (be || $("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(), t.close(), n = Ce(e, t), be.detach()), xe[e] = n), n
    }

    function $e(e, t, n, i) {
        var r, s, o = {};
        for (s in t) o[s] = e.style[s], e.style[s] = t[s];
        for (s in r = n.apply(e, i || []), t) e.style[s] = o[s];
        return r
    }
    var Ee = /^margin/,
        Se = new RegExp("^(" + W + ")(?!px)[a-z%]+$", "i"),
        Ae = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = C), t.getComputedStyle(e)
        },
        ke = T.documentElement;

    function Le(e, t, n) {
        var i, r, s, o, a = e.style;
        return "" !== (o = (n = n || Ae(e)) ? n.getPropertyValue(t) || n[t] : void 0) && void 0 !== o || $.contains(e.ownerDocument, e) || (o = $.style(e, t)), n && !m.pixelMarginRight() && Se.test(o) && Ee.test(t) && (i = a.width, r = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = o, o = n.width, a.width = i, a.minWidth = r, a.maxWidth = s), void 0 !== o ? o + "" : o
    }

    function De(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }! function() {
        var t, n, i, r, s = T.createElement("div"),
            o = T.createElement("div");
        if (o.style) {
            var e = function() {
                o.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", o.innerHTML = "", ke.appendChild(s);
                var e = C.getComputedStyle(o);
                t = "1%" !== e.top, r = "2px" === e.marginLeft, n = "4px" === e.width, o.style.marginRight = "50%", i = "4px" === e.marginRight, ke.removeChild(s)
            };
            o.style.backgroundClip = "content-box", o.cloneNode(!0).style.backgroundClip = "", m.clearCloneStyle = "content-box" === o.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(o), $.extend(m, {
                pixelPosition: function() {
                    return e(), t
                },
                boxSizingReliable: function() {
                    return null == n && e(), n
                },
                pixelMarginRight: function() {
                    return null == n && e(), i
                },
                reliableMarginLeft: function() {
                    return null == n && e(), r
                },
                reliableMarginRight: function() {
                    var e, t = o.appendChild(T.createElement("div"));
                    return t.style.cssText = o.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", o.style.width = "1px", ke.appendChild(s), e = !parseFloat(C.getComputedStyle(t).marginRight), ke.removeChild(s), o.removeChild(t), e
                }
            })
        }
    }();
    var je = /^(none|table(?!-c[ea]).+)/,
        qe = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ne = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Oe = ["Webkit", "O", "Moz", "ms"],
        Ie = T.createElement("div").style;

    function Pe(e) {
        if (e in Ie) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = Oe.length; n--;)
            if ((e = Oe[n] + t) in Ie) return e
    }

    function Me(e, t, n) {
        var i = B.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function ze(e, t, n, i, r) {
        for (var s = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; s < 4; s += 2) "margin" === n && (o += $.css(e, n + U[s], !0, r)), i ? ("content" === n && (o -= $.css(e, "padding" + U[s], !0, r)), "margin" !== n && (o -= $.css(e, "border" + U[s] + "Width", !0, r))) : (o += $.css(e, "padding" + U[s], !0, r), "padding" !== n && (o += $.css(e, "border" + U[s] + "Width", !0, r)));
        return o
    }

    function Re(e, t, n) {
        var i = !0,
            r = "width" === t ? e.offsetWidth : e.offsetHeight,
            s = Ae(e),
            o = "border-box" === $.css(e, "boxSizing", !1, s);
        if (T.msFullscreenElement && C.top !== C && e.getClientRects().length && (r = Math.round(100 * e.getBoundingClientRect()[t])), r <= 0 || null == r) {
            if (((r = Le(e, t, s)) < 0 || null == r) && (r = e.style[t]), Se.test(r)) return r;
            i = o && (m.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
        }
        return r + ze(e, t, n || (o ? "border" : "content"), i, s) + "px"
    }

    function He(e, t) {
        for (var n, i, r, s = [], o = 0, a = e.length; o < a; o++)(i = e[o]).style && (s[o] = P.get(i, "olddisplay"), n = i.style.display, t ? (s[o] || "none" !== n || (i.style.display = ""), "" === i.style.display && F(i) && (s[o] = P.access(i, "olddisplay", Te(i.nodeName)))) : (r = F(i), "none" === n && r || P.set(i, "olddisplay", r ? n : $.css(i, "display"))));
        for (o = 0; o < a; o++)(i = e[o]).style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? s[o] || "" : "none"));
        return e
    }

    function Fe(e, t, n, i, r) {
        return new Fe.prototype.init(e, t, n, i, r)
    }
    $.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Le(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, s, o, a = $.camelCase(t),
                    l = e.style;
                return t = $.cssProps[a] || ($.cssProps[a] = Pe(a) || a), o = $.cssHooks[t] || $.cssHooks[a], void 0 === n ? o && "get" in o && void 0 !== (r = o.get(e, !1, i)) ? r : l[t] : ("string" === (s = _typeof(n)) && (r = B.exec(n)) && r[1] && (n = G(e, t, r), s = "number"), void(null != n && n == n && ("number" === s && (n += r && r[3] || ($.cssNumber[a] ? "" : "px")), m.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), o && "set" in o && void 0 === (n = o.set(e, n, i)) || (l[t] = n))))
            }
        },
        css: function(e, t, n, i) {
            var r, s, o, a = $.camelCase(t);
            return t = $.cssProps[a] || ($.cssProps[a] = Pe(a) || a), (o = $.cssHooks[t] || $.cssHooks[a]) && "get" in o && (r = o.get(e, !0, n)), void 0 === r && (r = Le(e, t, i)), "normal" === r && t in Ne && (r = Ne[t]), "" === n || n ? (s = parseFloat(r), !0 === n || isFinite(s) ? s || 0 : r) : r
        }
    }), $.each(["height", "width"], function(e, o) {
        $.cssHooks[o] = {
            get: function(e, t, n) {
                return t ? je.test($.css(e, "display")) && 0 === e.offsetWidth ? $e(e, qe, function() {
                    return Re(e, o, n)
                }) : Re(e, o, n) : void 0
            },
            set: function(e, t, n) {
                var i, r = n && Ae(e),
                    s = n && ze(e, o, n, "border-box" === $.css(e, "boxSizing", !1, r), r);
                return s && (i = B.exec(t)) && "px" !== (i[3] || "px") && (e.style[o] = t, t = $.css(e, o)), Me(0, t, s)
            }
        }
    }), $.cssHooks.marginLeft = De(m.reliableMarginLeft, function(e, t) {
        return t ? (parseFloat(Le(e, "marginLeft")) || e.getBoundingClientRect().left - $e(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px" : void 0
    }), $.cssHooks.marginRight = De(m.reliableMarginRight, function(e, t) {
        return t ? $e(e, {
            display: "inline-block"
        }, Le, [e, "marginRight"]) : void 0
    }), $.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(r, s) {
        $.cssHooks[r + s] = {
            expand: function(e) {
                for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[r + U[t] + s] = i[t] || i[t - 2] || i[0];
                return n
            }
        }, Ee.test(r) || ($.cssHooks[r + s].set = Me)
    }), $.fn.extend({
        css: function(e, t) {
            return N(this, function(e, t, n) {
                var i, r, s = {},
                    o = 0;
                if ($.isArray(t)) {
                    for (i = Ae(e), r = t.length; o < r; o++) s[t[o]] = $.css(e, t[o], !1, i);
                    return s
                }
                return void 0 !== n ? $.style(e, t, n) : $.css(e, t)
            }, e, t, 1 < arguments.length)
        },
        show: function() {
            return He(this, !0)
        },
        hide: function() {
            return He(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                F(this) ? $(this).show() : $(this).hide()
            })
        }
    }), (($.Tween = Fe).prototype = {
        constructor: Fe,
        init: function(e, t, n, i, r, s) {
            this.elem = e, this.prop = n, this.easing = r || $.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = s || ($.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Fe.propHooks[this.prop];
            return e && e.get ? e.get(this) : Fe.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Fe.propHooks[this.prop];
            return this.options.duration ? this.pos = t = $.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Fe.propHooks._default.set(this), this
        }
    }).init.prototype = Fe.prototype, (Fe.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = $.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                $.fx.step[e.prop] ? $.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[$.cssProps[e.prop]] && !$.cssHooks[e.prop] ? e.elem[e.prop] = e.now : $.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = Fe.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, $.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, $.fx = Fe.prototype.init, $.fx.step = {};
    var We, Be, Ue, Ge, Ve, Ke = /^(?:toggle|show|hide)$/,
        Ye = /queueHooks$/;

    function Ze() {
        return C.setTimeout(function() {
            We = void 0
        }), We = $.now()
    }

    function Xe(e, t) {
        var n, i = 0,
            r = {
                height: e
            };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = U[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function Qe(e, t, n) {
        for (var i, r = (Je.tweeners[t] || []).concat(Je.tweeners["*"]), s = 0, o = r.length; s < o; s++)
            if (i = r[s].call(n, t, e)) return i
    }

    function Je(s, e, t) {
        var n, o, i = 0,
            r = Je.prefilters.length,
            a = $.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (o) return !1;
                for (var e = We || Ze(), t = Math.max(0, u.startTime + u.duration - e), n = 1 - (t / u.duration || 0), i = 0, r = u.tweens.length; i < r; i++) u.tweens[i].run(n);
                return a.notifyWith(s, [u, n, t]), n < 1 && r ? t : (a.resolveWith(s, [u]), !1)
            },
            u = a.promise({
                elem: s,
                props: $.extend({}, e),
                opts: $.extend(!0, {
                    specialEasing: {},
                    easing: $.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: We || Ze(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var n = $.Tween(s, u.opts, e, t, u.opts.specialEasing[e] || u.opts.easing);
                    return u.tweens.push(n), n
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? u.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; t < n; t++) u.tweens[t].run(1);
                    return e ? (a.notifyWith(s, [u, 1, 0]), a.resolveWith(s, [u, e])) : a.rejectWith(s, [u, e]), this
                }
            }),
            c = u.props;
        for (function(e, t) {
                var n, i, r, s, o;
                for (n in e)
                    if (r = t[i = $.camelCase(n)], s = e[n], $.isArray(s) && (r = s[1], s = e[n] = s[0]), n !== i && (e[i] = s, delete e[n]), (o = $.cssHooks[i]) && "expand" in o)
                        for (n in s = o.expand(s), delete e[i], s) n in e || (e[n] = s[n], t[n] = r);
                    else t[i] = r
            }(c, u.opts.specialEasing); i < r; i++)
            if (n = Je.prefilters[i].call(u, s, c, u.opts)) return $.isFunction(n.stop) && ($._queueHooks(u.elem, u.opts.queue).stop = $.proxy(n.stop, n)), n;
        return $.map(c, Qe, u), $.isFunction(u.opts.start) && u.opts.start.call(s, u), $.fx.timer($.extend(l, {
            elem: s,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }
    $.Animation = $.extend(Je, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return G(n.elem, e, B.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            for (var n, i = 0, r = (e = $.isFunction(e) ? (t = e, ["*"]) : e.match(j)).length; i < r; i++) n = e[i], Je.tweeners[n] = Je.tweeners[n] || [], Je.tweeners[n].unshift(t)
        },
        prefilters: [function(t, e, n) {
            var i, r, s, o, a, l, u, c = this,
                d = {},
                h = t.style,
                p = t.nodeType && F(t),
                f = P.get(t, "fxshow");
            for (i in n.queue || (null == (a = $._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || l()
                }), a.unqueued++, c.always(function() {
                    c.always(function() {
                        a.unqueued--, $.queue(t, "fx").length || a.empty.fire()
                    })
                })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], "inline" === ("none" === (u = $.css(t, "display")) ? P.get(t, "olddisplay") || Te(t.nodeName) : u) && "none" === $.css(t, "float") && (h.display = "inline-block")), n.overflow && (h.overflow = "hidden", c.always(function() {
                    h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                })), e)
                if (r = e[i], Ke.exec(r)) {
                    if (delete e[i], s = s || "toggle" === r, r === (p ? "hide" : "show")) {
                        if ("show" !== r || !f || void 0 === f[i]) continue;
                        p = !0
                    }
                    d[i] = f && f[i] || $.style(t, i)
                } else u = void 0;
            if ($.isEmptyObject(d)) "inline" === ("none" === u ? Te(t.nodeName) : u) && (h.display = u);
            else
                for (i in f ? "hidden" in f && (p = f.hidden) : f = P.access(t, "fxshow", {}), s && (f.hidden = !p), p ? $(t).show() : c.done(function() {
                        $(t).hide()
                    }), c.done(function() {
                        var e;
                        for (e in P.remove(t, "fxshow"), d) $.style(t, e, d[e])
                    }), d) o = Qe(p ? f[i] : 0, i, c), i in f || (f[i] = o.start, p && (o.end = o.start, o.start = "width" === i || "height" === i ? 1 : 0))
        }],
        prefilter: function(e, t) {
            t ? Je.prefilters.unshift(e) : Je.prefilters.push(e)
        }
    }), $.speed = function(e, t, n) {
        var i = e && "object" == _typeof(e) ? $.extend({}, e) : {
            complete: n || !n && t || $.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !$.isFunction(t) && t
        };
        return i.duration = $.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in $.fx.speeds ? $.fx.speeds[i.duration] : $.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            $.isFunction(i.old) && i.old.call(this), i.queue && $.dequeue(this, i.queue)
        }, i
    }, $.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(F).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(t, e, n, i) {
            function r() {
                var e = Je(this, $.extend({}, t), o);
                (s || P.get(this, "finish")) && e.stop(!0)
            }
            var s = $.isEmptyObject(t),
                o = $.speed(e, n, i);
            return r.finish = r, s || !1 === o.queue ? this.each(r) : this.queue(o.queue, r)
        },
        stop: function(r, e, s) {
            function o(e) {
                var t = e.stop;
                delete e.stop, t(s)
            }
            return "string" != typeof r && (s = e, e = r, r = void 0), e && !1 !== r && this.queue(r || "fx", []), this.each(function() {
                var e = !0,
                    t = null != r && r + "queueHooks",
                    n = $.timers,
                    i = P.get(this);
                if (t) i[t] && i[t].stop && o(i[t]);
                else
                    for (t in i) i[t] && i[t].stop && Ye.test(t) && o(i[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != r && n[t].queue !== r || (n[t].anim.stop(s), e = !1, n.splice(t, 1));
                !e && s || $.dequeue(this, r)
            })
        },
        finish: function(o) {
            return !1 !== o && (o = o || "fx"), this.each(function() {
                var e, t = P.get(this),
                    n = t[o + "queue"],
                    i = t[o + "queueHooks"],
                    r = $.timers,
                    s = n ? n.length : 0;
                for (t.finish = !0, $.queue(this, o, []), i && i.stop && i.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === o && (r[e].anim.stop(!0), r.splice(e, 1));
                for (e = 0; e < s; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), $.each(["toggle", "show", "hide"], function(e, i) {
        var r = $.fn[i];
        $.fn[i] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? r.apply(this, arguments) : this.animate(Xe(i, !0), e, t, n)
        }
    }), $.each({
        slideDown: Xe("show"),
        slideUp: Xe("hide"),
        slideToggle: Xe("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, i) {
        $.fn[e] = function(e, t, n) {
            return this.animate(i, e, t, n)
        }
    }), $.timers = [], $.fx.tick = function() {
        var e, t = 0,
            n = $.timers;
        for (We = $.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || $.fx.stop(), We = void 0
    }, $.fx.timer = function(e) {
        $.timers.push(e), e() ? $.fx.start() : $.timers.pop()
    }, $.fx.interval = 13, $.fx.start = function() {
        Be = Be || C.setInterval($.fx.tick, $.fx.interval)
    }, $.fx.stop = function() {
        C.clearInterval(Be), Be = null
    }, $.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, $.fn.delay = function(i, e) {
        return i = $.fx && $.fx.speeds[i] || i, e = e || "fx", this.queue(e, function(e, t) {
            var n = C.setTimeout(e, i);
            t.stop = function() {
                C.clearTimeout(n)
            }
        })
    }, Ue = T.createElement("input"), Ge = T.createElement("select"), Ve = Ge.appendChild(T.createElement("option")), Ue.type = "checkbox", m.checkOn = "" !== Ue.value, m.optSelected = Ve.selected, Ge.disabled = !0, m.optDisabled = !Ve.disabled, (Ue = T.createElement("input")).value = "t", Ue.type = "radio", m.radioValue = "t" === Ue.value;
    var et, tt = $.expr.attrHandle;
    $.fn.extend({
        attr: function(e, t) {
            return N(this, $.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                $.removeAttr(this, e)
            })
        }
    }), $.extend({
        attr: function(e, t, n) {
            var i, r, s = e.nodeType;
            if (3 !== s && 8 !== s && 2 !== s) return void 0 === e.getAttribute ? $.prop(e, t, n) : (1 === s && $.isXMLDoc(e) || (t = t.toLowerCase(), r = $.attrHooks[t] || ($.expr.match.bool.test(t) ? et : void 0)), void 0 !== n ? null === n ? void $.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = $.find.attr(e, t)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!m.radioValue && "radio" === t && $.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i, r = 0,
                s = t && t.match(j);
            if (s && 1 === e.nodeType)
                for (; n = s[r++];) i = $.propFix[n] || n, $.expr.match.bool.test(n) && (e[i] = !1), e.removeAttribute(n)
        }
    }), et = {
        set: function(e, t, n) {
            return !1 === t ? $.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, $.each($.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var s = tt[t] || $.find.attr;
        tt[t] = function(e, t, n) {
            var i, r;
            return n || (r = tt[t], tt[t] = i, i = null != s(e, t, n) ? t.toLowerCase() : null, tt[t] = r), i
        }
    });
    var nt = /^(?:input|select|textarea|button)$/i,
        it = /^(?:a|area)$/i;
    $.fn.extend({
        prop: function(e, t) {
            return N(this, $.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[$.propFix[e] || e]
            })
        }
    }), $.extend({
        prop: function(e, t, n) {
            var i, r, s = e.nodeType;
            if (3 !== s && 8 !== s && 2 !== s) return 1 === s && $.isXMLDoc(e) || (t = $.propFix[t] || t, r = $.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = $.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : nt.test(e.nodeName) || it.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), m.optSelected || ($.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), $.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        $.propFix[this.toLowerCase()] = this
    });
    var rt = /[\t\r\n\f]/g;

    function st(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    $.fn.extend({
        addClass: function(t) {
            var e, n, i, r, s, o, a, l = 0;
            if ($.isFunction(t)) return this.each(function(e) {
                $(this).addClass(t.call(this, e, st(this)))
            });
            if ("string" == typeof t && t)
                for (e = t.match(j) || []; n = this[l++];)
                    if (r = st(n), i = 1 === n.nodeType && (" " + r + " ").replace(rt, " ")) {
                        for (o = 0; s = e[o++];) i.indexOf(" " + s + " ") < 0 && (i += s + " ");
                        r !== (a = $.trim(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, i, r, s, o, a, l = 0;
            if ($.isFunction(t)) return this.each(function(e) {
                $(this).removeClass(t.call(this, e, st(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t)
                for (e = t.match(j) || []; n = this[l++];)
                    if (r = st(n), i = 1 === n.nodeType && (" " + r + " ").replace(rt, " ")) {
                        for (o = 0; s = e[o++];)
                            for (; - 1 < i.indexOf(" " + s + " ");) i = i.replace(" " + s + " ", " ");
                        r !== (a = $.trim(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(r, t) {
            var s = _typeof(r);
            return "boolean" == typeof t && "string" === s ? t ? this.addClass(r) : this.removeClass(r) : $.isFunction(r) ? this.each(function(e) {
                $(this).toggleClass(r.call(this, e, st(this), t), t)
            }) : this.each(function() {
                var e, t, n, i;
                if ("string" === s)
                    for (t = 0, n = $(this), i = r.match(j) || []; e = i[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else void 0 !== r && "boolean" !== s || ((e = st(this)) && P.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === r ? "" : P.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && -1 < (" " + st(n) + " ").replace(rt, " ").indexOf(t)) return !0;
            return !1
        }
    });
    var ot = /\r/g,
        at = /[\x20\t\r\n\f]+/g;
    $.fn.extend({
        val: function(n) {
            var i, e, r, t = this[0];
            return arguments.length ? (r = $.isFunction(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = r ? n.call(this, e, $(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : $.isArray(t) && (t = $.map(t, function(e) {
                    return null == e ? "" : e + ""
                })), (i = $.valHooks[this.type] || $.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, t, "value") || (this.value = t))
            })) : t ? (i = $.valHooks[t.type] || $.valHooks[t.nodeName.toLowerCase()]) && "get" in i && void 0 !== (e = i.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(ot, "") : null == e ? "" : e : void 0
        }
    }), $.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = $.find.attr(e, "value");
                    return null != t ? t : $.trim($.text(e)).replace(at, " ")
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, i = e.options, r = e.selectedIndex, s = "select-one" === e.type || r < 0, o = s ? null : [], a = s ? r + 1 : i.length, l = r < 0 ? a : s ? r : 0; l < a; l++)
                        if (((n = i[l]).selected || l === r) && (m.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !$.nodeName(n.parentNode, "optgroup"))) {
                            if (t = $(n).val(), s) return t;
                            o.push(t)
                        }
                    return o
                },
                set: function(e, t) {
                    for (var n, i, r = e.options, s = $.makeArray(t), o = r.length; o--;)((i = r[o]).selected = -1 < $.inArray($.valHooks.option.get(i), s)) && (n = !0);
                    return n || (e.selectedIndex = -1), s
                }
            }
        }
    }), $.each(["radio", "checkbox"], function() {
        $.valHooks[this] = {
            set: function(e, t) {
                return $.isArray(t) ? e.checked = -1 < $.inArray($(e).val(), t) : void 0
            }
        }, m.checkOn || ($.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var lt = /^(?:focusinfocus|focusoutblur)$/;
    $.extend($.event, {
        trigger: function(e, t, n, i) {
            var r, s, o, a, l, u, c, d = [n || T],
                h = f.call(e, "type") ? e.type : e,
                p = f.call(e, "namespace") ? e.namespace.split(".") : [];
            if (s = o = n = n || T, 3 !== n.nodeType && 8 !== n.nodeType && !lt.test(h + $.event.triggered) && (-1 < h.indexOf(".") && (h = (p = h.split(".")).shift(), p.sort()), l = h.indexOf(":") < 0 && "on" + h, (e = e[$.expando] ? e : new $.Event(h, "object" == _typeof(e) && e)).isTrigger = i ? 2 : 3, e.namespace = p.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : $.makeArray(t, [e]), c = $.event.special[h] || {}, i || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!i && !c.noBubble && !$.isWindow(n)) {
                    for (a = c.delegateType || h, lt.test(a + h) || (s = s.parentNode); s; s = s.parentNode) d.push(s), o = s;
                    o === (n.ownerDocument || T) && d.push(o.defaultView || o.parentWindow || C)
                }
                for (r = 0;
                    (s = d[r++]) && !e.isPropagationStopped();) e.type = 1 < r ? a : c.bindType || h, (u = (P.get(s, "events") || {})[e.type] && P.get(s, "handle")) && u.apply(s, t), (u = l && s[l]) && u.apply && O(s) && (e.result = u.apply(s, t), !1 === e.result && e.preventDefault());
                return e.type = h, i || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(d.pop(), t) || !O(n) || l && $.isFunction(n[h]) && !$.isWindow(n) && ((o = n[l]) && (n[l] = null), n[$.event.triggered = h](), $.event.triggered = void 0, o && (n[l] = o)), e.result
            }
        },
        simulate: function(e, t, n) {
            var i = $.extend(new $.Event, n, {
                type: e,
                isSimulated: !0
            });
            $.event.trigger(i, null, t), i.isDefaultPrevented() && n.preventDefault()
        }
    }), $.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                $.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? $.event.trigger(e, t, n, !0) : void 0
        }
    }), $.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, n) {
        $.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }), $.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), m.focusin = "onfocusin" in C, m.focusin || $.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, i) {
        function r(e) {
            $.event.simulate(i, e.target, $.event.fix(e))
        }
        $.event.special[i] = {
            setup: function() {
                var e = this.ownerDocument || this,
                    t = P.access(e, i);
                t || e.addEventListener(n, r, !0), P.access(e, i, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this,
                    t = P.access(e, i) - 1;
                t ? P.access(e, i, t) : (e.removeEventListener(n, r, !0), P.remove(e, i))
            }
        }
    });
    var ut = C.location,
        ct = $.now(),
        dt = /\?/;
    $.parseJSON = function(e) {
        return JSON.parse(e + "")
    }, $.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || $.error("Invalid XML: " + e), t
    };
    var ht = /#.*$/,
        pt = /([?&])_=[^&]*/,
        ft = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        gt = /^(?:GET|HEAD)$/,
        mt = /^\/\//,
        vt = {},
        yt = {},
        wt = "*/".concat("*"),
        _t = T.createElement("a");

    function bt(s) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, i = 0,
                r = e.toLowerCase().match(j) || [];
            if ($.isFunction(t))
                for (; n = r[i++];) "+" === n[0] ? (n = n.slice(1) || "*", (s[n] = s[n] || []).unshift(t)) : (s[n] = s[n] || []).push(t)
        }
    }

    function xt(t, r, s, o) {
        var a = {},
            l = t === yt;

        function u(e) {
            var i;
            return a[e] = !0, $.each(t[e] || [], function(e, t) {
                var n = t(r, s, o);
                return "string" != typeof n || l || a[n] ? l ? !(i = n) : void 0 : (r.dataTypes.unshift(n), u(n), !1)
            }), i
        }
        return u(r.dataTypes[0]) || !a["*"] && u("*")
    }

    function Ct(e, t) {
        var n, i, r = $.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : i = i || {})[n] = t[n]);
        return i && $.extend(!0, e, i), e
    }
    _t.href = ut.href, $.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ut.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ut.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": wt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": $.parseJSON,
                "text xml": $.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Ct(Ct(e, $.ajaxSettings), t) : Ct($.ajaxSettings, e)
        },
        ajaxPrefilter: bt(vt),
        ajaxTransport: bt(yt),
        ajax: function(e, t) {
            "object" == _typeof(e) && (t = e, e = void 0), t = t || {};
            var c, d, h, n, p, i, f, r, g = $.ajaxSetup({}, t),
                m = g.context || g,
                v = g.context && (m.nodeType || m.jquery) ? $(m) : $.event,
                y = $.Deferred(),
                w = $.Callbacks("once memory"),
                _ = g.statusCode || {},
                s = {},
                o = {},
                b = 0,
                a = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === b) {
                            if (!n)
                                for (n = {}; t = ft.exec(h);) n[t[1].toLowerCase()] = t[2];
                            t = n[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? h : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return b || (e = o[n] = o[n] || e, s[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return b || (g.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (b < 2)
                                for (t in e) _[t] = [_[t], e[t]];
                            else x.always(e[x.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || a;
                        return c && c.abort(t), l(0, t), this
                    }
                };
            if (y.promise(x).complete = w.add, x.success = x.done, x.error = x.fail, g.url = ((e || g.url || ut.href) + "").replace(ht, "").replace(mt, ut.protocol + "//"), g.type = t.method || t.type || g.method || g.type, g.dataTypes = $.trim(g.dataType || "*").toLowerCase().match(j) || [""], null == g.crossDomain) {
                i = T.createElement("a");
                try {
                    i.href = g.url, i.href = i.href, g.crossDomain = _t.protocol + "//" + _t.host != i.protocol + "//" + i.host
                } catch (e) {
                    g.crossDomain = !0
                }
            }
            if (g.data && g.processData && "string" != typeof g.data && (g.data = $.param(g.data, g.traditional)), xt(vt, g, t, x), 2 === b) return x;
            for (r in (f = $.event && g.global) && 0 == $.active++ && $.event.trigger("ajaxStart"), g.type = g.type.toUpperCase(), g.hasContent = !gt.test(g.type), d = g.url, g.hasContent || (g.data && (d = g.url += (dt.test(d) ? "&" : "?") + g.data, delete g.data), !1 === g.cache && (g.url = pt.test(d) ? d.replace(pt, "$1_=" + ct++) : d + (dt.test(d) ? "&" : "?") + "_=" + ct++)), g.ifModified && ($.lastModified[d] && x.setRequestHeader("If-Modified-Since", $.lastModified[d]), $.etag[d] && x.setRequestHeader("If-None-Match", $.etag[d])), (g.data && g.hasContent && !1 !== g.contentType || t.contentType) && x.setRequestHeader("Content-Type", g.contentType), x.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + wt + "; q=0.01" : "") : g.accepts["*"]), g.headers) x.setRequestHeader(r, g.headers[r]);
            if (g.beforeSend && (!1 === g.beforeSend.call(m, x, g) || 2 === b)) return x.abort();
            for (r in a = "abort", {
                    success: 1,
                    error: 1,
                    complete: 1
                }) x[r](g[r]);
            if (c = xt(yt, g, t, x)) {
                if (x.readyState = 1, f && v.trigger("ajaxSend", [x, g]), 2 === b) return x;
                g.async && 0 < g.timeout && (p = C.setTimeout(function() {
                    x.abort("timeout")
                }, g.timeout));
                try {
                    b = 1, c.send(s, l)
                } catch (e) {
                    if (!(b < 2)) throw e;
                    l(-1, e)
                }
            } else l(-1, "No Transport");

            function l(e, t, n, i) {
                var r, s, o, a, l, u = t;
                2 !== b && (b = 2, p && C.clearTimeout(p), c = void 0, h = i || "", x.readyState = 0 < e ? 4 : 0, r = 200 <= e && e < 300 || 304 === e, n && (a = function(e, t, n) {
                    for (var i, r, s, o, a = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                        for (r in a)
                            if (a[r] && a[r].test(i)) {
                                l.unshift(r);
                                break
                            }
                    if (l[0] in n) s = l[0];
                    else {
                        for (r in n) {
                            if (!l[0] || e.converters[r + " " + l[0]]) {
                                s = r;
                                break
                            }
                            o = o || r
                        }
                        s = s || o
                    }
                    return s ? (s !== l[0] && l.unshift(s), n[s]) : void 0
                }(g, x, n)), a = function(e, t, n, i) {
                    var r, s, o, a, l, u = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (o in e.converters) u[o.toLowerCase()] = e.converters[o];
                    for (s = c.shift(); s;)
                        if (e.responseFields[s] && (n[e.responseFields[s]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = s, s = c.shift())
                            if ("*" === s) s = l;
                            else if ("*" !== l && l !== s) {
                        if (!(o = u[l + " " + s] || u["* " + s]))
                            for (r in u)
                                if ((a = r.split(" "))[1] === s && (o = u[l + " " + a[0]] || u["* " + a[0]])) {
                                    !0 === o ? o = u[r] : !0 !== u[r] && (s = a[0], c.unshift(a[1]));
                                    break
                                }
                        if (!0 !== o)
                            if (o && e.throws) t = o(t);
                            else try {
                                t = o(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: o ? e : "No conversion from " + l + " to " + s
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(g, a, x, r), r ? (g.ifModified && ((l = x.getResponseHeader("Last-Modified")) && ($.lastModified[d] = l), (l = x.getResponseHeader("etag")) && ($.etag[d] = l)), 204 === e || "HEAD" === g.type ? u = "nocontent" : 304 === e ? u = "notmodified" : (u = a.state, s = a.data, r = !(o = a.error))) : (o = u, !e && u || (u = "error", e < 0 && (e = 0))), x.status = e, x.statusText = (t || u) + "", r ? y.resolveWith(m, [s, u, x]) : y.rejectWith(m, [x, u, o]), x.statusCode(_), _ = void 0, f && v.trigger(r ? "ajaxSuccess" : "ajaxError", [x, g, r ? s : o]), w.fireWith(m, [x, u]), f && (v.trigger("ajaxComplete", [x, g]), --$.active || $.event.trigger("ajaxStop")))
            }
            return x
        },
        getJSON: function(e, t, n) {
            return $.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return $.get(e, void 0, t, "script")
        }
    }), $.each(["get", "post"], function(e, r) {
        $[r] = function(e, t, n, i) {
            return $.isFunction(t) && (i = i || n, n = t, t = void 0), $.ajax($.extend({
                url: e,
                type: r,
                dataType: i,
                data: t,
                success: n
            }, $.isPlainObject(e) && e))
        }
    }), $._evalUrl = function(e) {
        return $.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }, $.fn.extend({
        wrapAll: function(t) {
            var e;
            return $.isFunction(t) ? this.each(function(e) {
                $(this).wrapAll(t.call(this, e))
            }) : (this[0] && (e = $(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function(n) {
            return $.isFunction(n) ? this.each(function(e) {
                $(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = $(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = $.isFunction(t);
            return this.each(function(e) {
                $(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                $.nodeName(this, "body") || $(this).replaceWith(this.childNodes)
            }).end()
        }
    }), $.expr.filters.hidden = function(e) {
        return !$.expr.filters.visible(e)
    }, $.expr.filters.visible = function(e) {
        return 0 < e.offsetWidth || 0 < e.offsetHeight || 0 < e.getClientRects().length
    };
    var Tt = /%20/g,
        $t = /\[\]$/,
        Et = /\r?\n/g,
        St = /^(?:submit|button|image|reset|file)$/i,
        At = /^(?:input|select|textarea|keygen)/i;

    function kt(n, e, i, r) {
        var t;
        if ($.isArray(e)) $.each(e, function(e, t) {
            i || $t.test(n) ? r(n, t) : kt(n + "[" + ("object" == _typeof(t) && null != t ? e : "") + "]", t, i, r)
        });
        else if (i || "object" !== $.type(e)) r(n, e);
        else
            for (t in e) kt(n + "[" + t + "]", e[t], i, r)
    }
    $.param = function(e, t) {
        function n(e, t) {
            t = $.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        }
        var i, r = [];
        if (void 0 === t && (t = $.ajaxSettings && $.ajaxSettings.traditional), $.isArray(e) || e.jquery && !$.isPlainObject(e)) $.each(e, function() {
            n(this.name, this.value)
        });
        else
            for (i in e) kt(i, e[i], t, n);
        return r.join("&").replace(Tt, "+")
    }, $.fn.extend({
        serialize: function() {
            return $.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = $.prop(this, "elements");
                return e ? $.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !$(this).is(":disabled") && At.test(this.nodeName) && !St.test(e) && (this.checked || !V.test(e))
            }).map(function(e, t) {
                var n = $(this).val();
                return null == n ? null : $.isArray(n) ? $.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Et, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Et, "\r\n")
                }
            }).get()
        }
    }), $.ajaxSettings.xhr = function() {
        try {
            return new C.XMLHttpRequest
        } catch (e) {}
    };
    var Lt = {
            0: 200,
            1223: 204
        },
        Dt = $.ajaxSettings.xhr();
    m.cors = !!Dt && "withCredentials" in Dt, m.ajax = Dt = !!Dt, $.ajaxTransport(function(r) {
        var s, o;
        return m.cors || Dt && !r.crossDomain ? {
            send: function(e, t) {
                var n, i = r.xhr();
                if (i.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields)
                    for (n in r.xhrFields) i[n] = r.xhrFields[n];
                for (n in r.mimeType && i.overrideMimeType && i.overrideMimeType(r.mimeType), r.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) i.setRequestHeader(n, e[n]);
                s = function(e) {
                    return function() {
                        s && (s = o = i.onload = i.onerror = i.onabort = i.onreadystatechange = null, "abort" === e ? i.abort() : "error" === e ? "number" != typeof i.status ? t(0, "error") : t(i.status, i.statusText) : t(Lt[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? {
                            binary: i.response
                        } : {
                            text: i.responseText
                        }, i.getAllResponseHeaders()))
                    }
                }, i.onload = s(), o = i.onerror = s("error"), void 0 !== i.onabort ? i.onabort = o : i.onreadystatechange = function() {
                    4 === i.readyState && C.setTimeout(function() {
                        s && o()
                    })
                }, s = s("abort");
                try {
                    i.send(r.hasContent && r.data || null)
                } catch (e) {
                    if (s) throw e
                }
            },
            abort: function() {
                s && s()
            }
        } : void 0
    }), $.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return $.globalEval(e), e
            }
        }
    }), $.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), $.ajaxTransport("script", function(n) {
        var i, r;
        if (n.crossDomain) return {
            send: function(e, t) {
                i = $("<script>").prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", r = function(e) {
                    i.remove(), r = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), T.head.appendChild(i[0])
            },
            abort: function() {
                r && r()
            }
        }
    });
    var jt = [],
        qt = /(=)\?(?=&|$)|\?\?/;
    $.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = jt.pop() || $.expando + "_" + ct++;
            return this[e] = !0, e
        }
    }), $.ajaxPrefilter("json jsonp", function(e, t, n) {
        var i, r, s, o = !1 !== e.jsonp && (qt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && qt.test(e.data) && "data");
        return o || "jsonp" === e.dataTypes[0] ? (i = e.jsonpCallback = $.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, o ? e[o] = e[o].replace(qt, "$1" + i) : !1 !== e.jsonp && (e.url += (dt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
            return s || $.error(i + " was not called"), s[0]
        }, e.dataTypes[0] = "json", r = C[i], C[i] = function() {
            s = arguments
        }, n.always(function() {
            void 0 === r ? $(C).removeProp(i) : C[i] = r, e[i] && (e.jsonpCallback = t.jsonpCallback, jt.push(i)), s && $.isFunction(r) && r(s[0]), s = r = void 0
        }), "script") : void 0
    }), $.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || T;
        var i = _.exec(e),
            r = !n && [];
        return i ? [t.createElement(i[1])] : (i = ne([e], t, r), r && r.length && $(r).remove(), $.merge([], i.childNodes))
    };
    var Nt = $.fn.load;

    function Ot(e) {
        return $.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    $.fn.load = function(e, t, n) {
        if ("string" != typeof e && Nt) return Nt.apply(this, arguments);
        var i, r, s, o = this,
            a = e.indexOf(" ");
        return -1 < a && (i = $.trim(e.slice(a)), e = e.slice(0, a)), $.isFunction(t) ? (n = t, t = void 0) : t && "object" == _typeof(t) && (r = "POST"), 0 < o.length && $.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            s = arguments, o.html(i ? $("<div>").append($.parseHTML(e)).find(i) : e)
        }).always(n && function(e, t) {
            o.each(function() {
                n.apply(this, s || [e.responseText, t, e])
            })
        }), this
    }, $.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        $.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), $.expr.filters.animated = function(t) {
        return $.grep($.timers, function(e) {
            return t === e.elem
        }).length
    }, $.offset = {
        setOffset: function(e, t, n) {
            var i, r, s, o, a, l, u = $.css(e, "position"),
                c = $(e),
                d = {};
            "static" === u && (e.style.position = "relative"), a = c.offset(), s = $.css(e, "top"), l = $.css(e, "left"), r = ("absolute" === u || "fixed" === u) && -1 < (s + l).indexOf("auto") ? (o = (i = c.position()).top, i.left) : (o = parseFloat(s) || 0, parseFloat(l) || 0), $.isFunction(t) && (t = t.call(e, n, $.extend({}, a))), null != t.top && (d.top = t.top - a.top + o), null != t.left && (d.left = t.left - a.left + r), "using" in t ? t.using.call(e, d) : c.css(d)
        }
    }, $.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                $.offset.setOffset(this, t, e)
            });
            var e, n, i = this[0],
                r = {
                    top: 0,
                    left: 0
                },
                s = i && i.ownerDocument;
            return s ? (e = s.documentElement, $.contains(e, i) ? (r = i.getBoundingClientRect(), n = Ot(s), {
                top: r.top + n.pageYOffset - e.clientTop,
                left: r.left + n.pageXOffset - e.clientLeft
            }) : r) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === $.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), $.nodeName(e[0], "html") || (i = e.offset()), i.top += $.css(e[0], "borderTopWidth", !0), i.left += $.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - i.top - $.css(n, "marginTop", !0),
                    left: t.left - i.left - $.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === $.css(e, "position");) e = e.offsetParent;
                return e || ke
            })
        }
    }), $.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, r) {
        var s = "pageYOffset" === r;
        $.fn[t] = function(e) {
            return N(this, function(e, t, n) {
                var i = Ot(e);
                return void 0 === n ? i ? i[r] : e[t] : void(i ? i.scrollTo(s ? i.pageXOffset : n, s ? n : i.pageYOffset) : e[t] = n)
            }, t, e, arguments.length)
        }
    }), $.each(["top", "left"], function(e, n) {
        $.cssHooks[n] = De(m.pixelPosition, function(e, t) {
            return t ? (t = Le(e, n), Se.test(t) ? $(e).position()[n] + "px" : t) : void 0
        })
    }), $.each({
        Height: "height",
        Width: "width"
    }, function(s, o) {
        $.each({
            padding: "inner" + s,
            content: o,
            "": "outer" + s
        }, function(i, e) {
            $.fn[e] = function(e, t) {
                var n = arguments.length && (i || "boolean" != typeof e),
                    r = i || (!0 === e || !0 === t ? "margin" : "border");
                return N(this, function(e, t, n) {
                    var i;
                    return $.isWindow(e) ? e.document.documentElement["client" + s] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + s], i["scroll" + s], e.body["offset" + s], i["offset" + s], i["client" + s])) : void 0 === n ? $.css(e, t, r) : $.style(e, t, n, r)
                }, o, n ? e : void 0, n, null)
            }
        })
    }), $.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        size: function() {
            return this.length
        }
    }), $.fn.andSelf = $.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return $
    });
    var It = C.jQuery,
        Pt = C.$;
    return $.noConflict = function(e) {
        return C.$ === $ && (C.$ = Pt), e && C.jQuery === $ && (C.jQuery = It), $
    }, e || (C.jQuery = C.$ = $), $
}),
function(l, n, r, s) {
    function u(e, t) {
        this.settings = null, this.options = l.extend({}, u.Defaults, t), this.$element = l(e), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null
        }, this._states = {
            current: {},
            tags: {
                initializing: ["busy"],
                animating: ["busy"],
                dragging: ["interacting"]
            }
        }, l.each(["onResize", "onThrottledResize"], l.proxy(function(e, t) {
            this._handlers[t] = l.proxy(this[t], this)
        }, this)), l.each(u.Plugins, l.proxy(function(e, t) {
            this._plugins[e.charAt(0).toLowerCase() + e.slice(1)] = new t(this)
        }, this)), l.each(u.Workers, l.proxy(function(e, t) {
            this._pipe.push({
                filter: t.filter,
                run: l.proxy(t.run, this)
            })
        }, this)), this.setup(), this.initialize()
    }
    u.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: n,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    }, u.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    }, u.Type = {
        Event: "event",
        State: "state"
    }, u.Plugins = {}, u.Workers = [{
        filter: ["width", "settings"],
        run: function() {
            this._width = this.$element.width()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(e) {
            e.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            this.$stage.children(".cloned").remove()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(e) {
            var t = this.settings.margin || "",
                n = !this.settings.autoWidth,
                i = this.settings.rtl,
                r = {
                    width: "auto",
                    "margin-left": i ? t : "",
                    "margin-right": i ? "" : t
                };
            n || this.$stage.children().css(r), e.css = r
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(e) {
            var t = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                n = null,
                i = this._items.length,
                r = !this.settings.autoWidth,
                s = [];
            for (e.items = {
                    merge: !1,
                    width: t
                }; i--;) n = this._mergers[i], n = this.settings.mergeFit && Math.min(n, this.settings.items) || n, e.items.merge = 1 < n || e.items.merge, s[i] = r ? t * n : this._items[i].width();
            this._widths = s
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var e = [],
                t = this._items,
                n = this.settings,
                i = Math.max(2 * n.items, 4),
                r = 2 * Math.ceil(t.length / 2),
                s = n.loop && t.length ? n.rewind ? i : Math.max(i, r) : 0,
                o = "",
                a = "";
            for (s /= 2; s--;) e.push(this.normalize(e.length / 2, !0)), o += t[e[e.length - 1]][0].outerHTML, e.push(this.normalize(t.length - 1 - (e.length - 1) / 2, !0)), a = t[e[e.length - 1]][0].outerHTML + a;
            this._clones = e, l(o).addClass("cloned").appendTo(this.$stage), l(a).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            for (var e = this.settings.rtl ? 1 : -1, t = this._clones.length + this._items.length, n = -1, i = 0, r = 0, s = []; ++n < t;) i = s[n - 1] || 0, r = this._widths[this.relative(n)] + this.settings.margin, s.push(i + r * e);
            this._coordinates = s
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var e = this.settings.stagePadding,
                t = this._coordinates,
                n = {
                    width: Math.ceil(Math.abs(t[t.length - 1])) + 2 * e,
                    "padding-left": e || "",
                    "padding-right": e || ""
                };
            this.$stage.css(n)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(e) {
            var t = this._coordinates.length,
                n = !this.settings.autoWidth,
                i = this.$stage.children();
            if (n && e.items.merge)
                for (; t--;) e.css.width = this._widths[this.relative(t)], i.eq(t).css(e.css);
            else n && (e.css.width = e.items.width, i.css(e.css))
        }
    }, {
        filter: ["items"],
        run: function() {
            this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(e) {
            e.current = e.current ? this.$stage.children().index(e.current) : 0, e.current = Math.max(this.minimum(), Math.min(this.maximum(), e.current)), this.reset(e.current)
        }
    }, {
        filter: ["position"],
        run: function() {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            var e, t, n, i, r = this.settings.rtl ? 1 : -1,
                s = 2 * this.settings.stagePadding,
                o = this.coordinates(this.current()) + s,
                a = o + this.width() * r,
                l = [];
            for (n = 0, i = this._coordinates.length; n < i; n++) e = this._coordinates[n - 1] || 0, t = Math.abs(this._coordinates[n]) + s * r, (this.op(e, "<=", o) && this.op(e, ">", a) || this.op(t, "<", o) && this.op(t, ">", a)) && l.push(n);
            this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
        }
    }], u.prototype.initialize = function() {
        var e, t, n;
        this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading") && (e = this.$element.find("img"), t = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : s, n = this.$element.children(t).width(), e.length && n <= 0 && this.preloadAutoWidthImages(e));
        this.$element.addClass(this.options.loadingClass), this.$stage = l("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
    }, u.prototype.setup = function() {
        var t = this.viewport(),
            e = this.options.responsive,
            n = -1,
            i = null;
        e ? (l.each(e, function(e) {
            e <= t && n < e && (n = Number(e))
        }), delete(i = l.extend({}, this.options, e[n])).responsive, i.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + n))) : i = l.extend({}, this.options), null !== this.settings && this._breakpoint === n || (this.trigger("change", {
            property: {
                name: "settings",
                value: i
            }
        }), this._breakpoint = n, this.settings = i, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        }))
    }, u.prototype.optionsLogic = function() {
        this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, u.prototype.prepare = function(e) {
        var t = this.trigger("prepare", {
            content: e
        });
        return t.data || (t.data = l("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(e)), this.trigger("prepared", {
            content: t.data
        }), t.data
    }, u.prototype.update = function() {
        for (var e = 0, t = this._pipe.length, n = l.proxy(function(e) {
                return this[e]
            }, this._invalidated), i = {}; e < t;)(this._invalidated.all || 0 < l.grep(this._pipe[e].filter, n).length) && this._pipe[e].run(i), e++;
        this._invalidated = {}, this.is("valid") || this.enter("valid")
    }, u.prototype.width = function(e) {
        switch (e = e || u.Width.Default) {
            case u.Width.Inner:
            case u.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, u.prototype.refresh = function() {
        this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
    }, u.prototype.onThrottledResize = function() {
        n.clearTimeout(this.resizeTimer), this.resizeTimer = n.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    }, u.prototype.onResize = function() {
        return !!this._items.length && (this._width !== this.$element.width() && (!!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))))
    }, u.prototype.registerEventHandlers = function() {
        l.support.transition && this.$stage.on(l.support.transition.end + ".owl.core", l.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(n, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", l.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
            return !1
        })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", l.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", l.proxy(this.onDragEnd, this)))
    }, u.prototype.onDragStart = function(e) {
        var t = null;
        3 !== e.which && (t = l.support.transform ? {
            x: (t = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","))[16 === t.length ? 12 : 4],
            y: t[16 === t.length ? 13 : 5]
        } : (t = this.$stage.position(), {
            x: this.settings.rtl ? t.left + this.$stage.width() - this.width() + this.settings.margin : t.left,
            y: t.top
        }), this.is("animating") && (l.support.transform ? this.animate(t.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === e.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = l(e.target), this._drag.stage.start = t, this._drag.stage.current = t, this._drag.pointer = this.pointer(e), l(r).on("mouseup.owl.core touchend.owl.core", l.proxy(this.onDragEnd, this)), l(r).one("mousemove.owl.core touchmove.owl.core", l.proxy(function(e) {
            var t = this.difference(this._drag.pointer, this.pointer(e));
            l(r).on("mousemove.owl.core touchmove.owl.core", l.proxy(this.onDragMove, this)), Math.abs(t.x) < Math.abs(t.y) && this.is("valid") || (e.preventDefault(), this.enter("dragging"), this.trigger("drag"))
        }, this)))
    }, u.prototype.onDragMove = function(e) {
        var t = null,
            n = null,
            i = null,
            r = this.difference(this._drag.pointer, this.pointer(e)),
            s = this.difference(this._drag.stage.start, r);
        this.is("dragging") && (e.preventDefault(), this.settings.loop ? (t = this.coordinates(this.minimum()), n = this.coordinates(this.maximum() + 1) - t, s.x = ((s.x - t) % n + n) % n + t) : (t = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), n = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), i = this.settings.pullDrag ? -1 * r.x / 5 : 0, s.x = Math.max(Math.min(s.x, t + i), n + i)), this._drag.stage.current = s, this.animate(s.x))
    }, u.prototype.onDragEnd = function(e) {
        var t = this.difference(this._drag.pointer, this.pointer(e)),
            n = this._drag.stage.current,
            i = 0 < t.x ^ this.settings.rtl ? "left" : "right";
        l(r).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== t.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(n.x, 0 !== t.x ? i : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = i, (3 < Math.abs(t.x) || 300 < (new Date).getTime() - this._drag.time) && this._drag.target.one("click.owl.core", function() {
            return !1
        })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
    }, u.prototype.closest = function(n, i) {
        var r = -1,
            s = this.width(),
            o = this.coordinates();
        return this.settings.freeDrag || l.each(o, l.proxy(function(e, t) {
            return t - 30 < n && n < t + 30 ? r = e : this.op(n, "<", t) && this.op(n, ">", o[e + 1] || t - s) && (r = "left" === i ? e + 1 : e), -1 === r
        }, this)), this.settings.loop || (this.op(n, ">", o[this.minimum()]) ? r = n = this.minimum() : this.op(n, "<", o[this.maximum()]) && (r = n = this.maximum())), r
    }, u.prototype.animate = function(e) {
        var t = 0 < this.speed();
        this.is("animating") && this.onTransitionEnd(), t && (this.enter("animating"), this.trigger("translate")), l.support.transform3d && l.support.transition ? this.$stage.css({
            transform: "translate3d(" + e + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s"
        }) : t ? this.$stage.animate({
            left: e + "px"
        }, this.speed(), this.settings.fallbackEasing, l.proxy(this.onTransitionEnd, this)) : this.$stage.css({
            left: e + "px"
        })
    }, u.prototype.is = function(e) {
        return this._states.current[e] && 0 < this._states.current[e]
    }, u.prototype.current = function(e) {
        if (e === s) return this._current;
        if (0 === this._items.length) return s;
        if (e = this.normalize(e), this._current !== e) {
            var t = this.trigger("change", {
                property: {
                    name: "position",
                    value: e
                }
            });
            t.data !== s && (e = this.normalize(t.data)), this._current = e, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }, u.prototype.invalidate = function(e) {
        return "string" === l.type(e) && (this._invalidated[e] = !0, this.is("valid") && this.leave("valid")), l.map(this._invalidated, function(e, t) {
            return t
        })
    }, u.prototype.reset = function(e) {
        (e = this.normalize(e)) !== s && (this._speed = 0, this._current = e, this.suppress(["translate", "translated"]), this.animate(this.coordinates(e)), this.release(["translate", "translated"]))
    }, u.prototype.normalize = function(e, t) {
        var n = this._items.length,
            i = t ? 0 : this._clones.length;
        return !l.isNumeric(e) || n < 1 ? e = s : (e < 0 || n + i <= e) && (e = ((e - i / 2) % n + n) % n + i / 2), e
    }, u.prototype.relative = function(e) {
        return e -= this._clones.length / 2, this.normalize(e, !0)
    }, u.prototype.maximum = function(e) {
        var t, n = this.settings,
            i = this._coordinates.length,
            r = Math.abs(this._coordinates[i - 1]) - this._width,
            s = -1;
        if (n.loop) i = this._clones.length / 2 + this._items.length - 1;
        else if (n.autoWidth || n.merge)
            for (; 1 < i - s;) Math.abs(this._coordinates[t = i + s >> 1]) < r ? s = t : i = t;
        else i = n.center ? this._items.length - 1 : this._items.length - n.items;
        return e && (i -= this._clones.length / 2), Math.max(i, 0)
    }, u.prototype.minimum = function(e) {
        return e ? 0 : this._clones.length / 2
    }, u.prototype.items = function(e) {
        return e === s ? this._items.slice() : (e = this.normalize(e, !0), this._items[e])
    }, u.prototype.mergers = function(e) {
        return e === s ? this._mergers.slice() : (e = this.normalize(e, !0), this._mergers[e])
    }, u.prototype.clones = function(n) {
        function i(e) {
            return e % 2 == 0 ? r + e / 2 : t - (e + 1) / 2
        }
        var t = this._clones.length / 2,
            r = t + this._items.length;
        return n === s ? l.map(this._clones, function(e, t) {
            return i(t)
        }) : l.map(this._clones, function(e, t) {
            return e === n ? i(t) : null
        })
    }, u.prototype.speed = function(e) {
        return e !== s && (this._speed = e), this._speed
    }, u.prototype.coordinates = function(e) {
        var t = null;
        return e === s ? l.map(this._coordinates, l.proxy(function(e, t) {
            return this.coordinates(t)
        }, this)) : (this.settings.center ? (t = this._coordinates[e], t += (this.width() - t + (this._coordinates[e - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : t = this._coordinates[e - 1] || 0, t)
    }, u.prototype.duration = function(e, t, n) {
        return Math.min(Math.max(Math.abs(t - e), 1), 6) * Math.abs(n || this.settings.smartSpeed)
    }, u.prototype.to = function(e, t) {
        var n = this.current(),
            i = null,
            r = e - this.relative(n),
            s = (0 < r) - (r < 0),
            o = this._items.length,
            a = this.minimum(),
            l = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(r) > o / 2 && (r += -1 * s * o), (i = (((e = n + r) - a) % o + o) % o + a) !== e && i - r <= l && 0 < i - r && (n = i - r, e = i, this.reset(n))) : e = this.settings.rewind ? (e % (l += 1) + l) % l : Math.max(a, Math.min(l, e)), this.speed(this.duration(n, e, t)), this.current(e), this.$element.is(":visible") && this.update()
    }, u.prototype.next = function(e) {
        e = e || !1, this.to(this.relative(this.current()) + 1, e)
    }, u.prototype.prev = function(e) {
        e = e || !1, this.to(this.relative(this.current()) - 1, e)
    }, u.prototype.onTransitionEnd = function(e) {
        if (e !== s && (e.stopPropagation(), (e.target || e.srcElement || e.originalTarget) !== this.$stage.get(0))) return !1;
        this.leave("animating"), this.trigger("translated")
    }, u.prototype.viewport = function() {
        var e;
        if (this.options.responsiveBaseElement !== n) e = l(this.options.responsiveBaseElement).width();
        else if (n.innerWidth) e = n.innerWidth;
        else {
            if (!r.documentElement || !r.documentElement.clientWidth) throw "Can not detect viewport width.";
            e = r.documentElement.clientWidth
        }
        return e
    }, u.prototype.replace = function(e) {
        this.$stage.empty(), this._items = [], e = e && (e instanceof jQuery ? e : l(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function() {
            return 1 === this.nodeType
        }).each(l.proxy(function(e, t) {
            t = this.prepare(t), this.$stage.append(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(l.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, u.prototype.add = function(e, t) {
        var n = this.relative(this._current);
        t = t === s ? this._items.length : this.normalize(t, !0), e = e instanceof jQuery ? e : l(e), this.trigger("add", {
            content: e,
            position: t
        }), e = this.prepare(e), 0 === this._items.length || t === this._items.length ? (0 === this._items.length && this.$stage.append(e), 0 !== this._items.length && this._items[t - 1].after(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[t].before(e), this._items.splice(t, 0, e), this._mergers.splice(t, 0, 1 * e.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)), this._items[n] && this.reset(this._items[n].index()), this.invalidate("items"), this.trigger("added", {
            content: e,
            position: t
        })
    }, u.prototype.remove = function(e) {
        (e = this.normalize(e, !0)) !== s && (this.trigger("remove", {
            content: this._items[e],
            position: e
        }), this._items[e].remove(), this._items.splice(e, 1), this._mergers.splice(e, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: e
        }))
    }, u.prototype.preloadAutoWidthImages = function(e) {
        e.each(l.proxy(function(e, t) {
            this.enter("pre-loading"), t = l(t), l(new Image).one("load", l.proxy(function(e) {
                t.attr("src", e.target.src), t.css("opacity", 1), this.leave("pre-loading"), this.is("pre-loading") || this.is("initializing") || this.refresh()
            }, this)).attr("src", t.attr("src") || t.attr("data-src") || t.attr("data-src-retina"))
        }, this))
    }, u.prototype.destroy = function() {
        for (var e in this.$element.off(".owl.core"), this.$stage.off(".owl.core"), l(r).off(".owl.core"), !1 !== this.settings.responsive && (n.clearTimeout(this.resizeTimer), this.off(n, "resize", this._handlers.onThrottledResize)), this._plugins) this._plugins[e].destroy();
        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
    }, u.prototype.op = function(e, t, n) {
        var i = this.settings.rtl;
        switch (t) {
            case "<":
                return i ? n < e : e < n;
            case ">":
                return i ? e < n : n < e;
            case ">=":
                return i ? e <= n : n <= e;
            case "<=":
                return i ? n <= e : e <= n
        }
    }, u.prototype.on = function(e, t, n, i) {
        e.addEventListener ? e.addEventListener(t, n, i) : e.attachEvent && e.attachEvent("on" + t, n)
    }, u.prototype.off = function(e, t, n, i) {
        e.removeEventListener ? e.removeEventListener(t, n, i) : e.detachEvent && e.detachEvent("on" + t, n)
    }, u.prototype.trigger = function(e, t, n, i, r) {
        var s = {
                item: {
                    count: this._items.length,
                    index: this.current()
                }
            },
            o = l.camelCase(l.grep(["on", e, n], function(e) {
                return e
            }).join("-").toLowerCase()),
            a = l.Event([e, "owl", n || "carousel"].join(".").toLowerCase(), l.extend({
                relatedTarget: this
            }, s, t));
        return this._supress[e] || (l.each(this._plugins, function(e, t) {
            t.onTrigger && t.onTrigger(a)
        }), this.register({
            type: u.Type.Event,
            name: e
        }), this.$element.trigger(a), this.settings && "function" == typeof this.settings[o] && this.settings[o].call(this, a)), a
    }, u.prototype.enter = function(e) {
        l.each([e].concat(this._states.tags[e] || []), l.proxy(function(e, t) {
            this._states.current[t] === s && (this._states.current[t] = 0), this._states.current[t]++
        }, this))
    }, u.prototype.leave = function(e) {
        l.each([e].concat(this._states.tags[e] || []), l.proxy(function(e, t) {
            this._states.current[t]--
        }, this))
    }, u.prototype.register = function(n) {
        if (n.type === u.Type.Event) {
            if (l.event.special[n.name] || (l.event.special[n.name] = {}), !l.event.special[n.name].owl) {
                var t = l.event.special[n.name]._default;
                l.event.special[n.name]._default = function(e) {
                    return !t || !t.apply || e.namespace && -1 !== e.namespace.indexOf("owl") ? e.namespace && -1 < e.namespace.indexOf("owl") : t.apply(this, arguments)
                }, l.event.special[n.name].owl = !0
            }
        } else n.type === u.Type.State && (this._states.tags[n.name] ? this._states.tags[n.name] = this._states.tags[n.name].concat(n.tags) : this._states.tags[n.name] = n.tags, this._states.tags[n.name] = l.grep(this._states.tags[n.name], l.proxy(function(e, t) {
            return l.inArray(e, this._states.tags[n.name]) === t
        }, this)))
    }, u.prototype.suppress = function(e) {
        l.each(e, l.proxy(function(e, t) {
            this._supress[t] = !0
        }, this))
    }, u.prototype.release = function(e) {
        l.each(e, l.proxy(function(e, t) {
            delete this._supress[t]
        }, this))
    }, u.prototype.pointer = function(e) {
        var t = {
            x: null,
            y: null
        };
        return (e = (e = e.originalEvent || e || n.event).touches && e.touches.length ? e.touches[0] : e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : e).pageX ? (t.x = e.pageX, t.y = e.pageY) : (t.x = e.clientX, t.y = e.clientY), t
    }, u.prototype.difference = function(e, t) {
        return {
            x: e.x - t.x,
            y: e.y - t.y
        }
    }, l.fn.owlCarousel = function(t) {
        var i = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            var e = l(this),
                n = e.data("owl.carousel");
            n || (n = new u(this, "object" == _typeof(t) && t), e.data("owl.carousel", n), l.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(e, t) {
                n.register({
                    type: u.Type.Event,
                    name: t
                }), n.$element.on(t + ".owl.carousel.core", l.proxy(function(e) {
                    e.namespace && e.relatedTarget !== this && (this.suppress([t]), n[t].apply(this, [].slice.call(arguments, 1)), this.release([t]))
                }, n))
            })), "string" == typeof t && "_" !== t.charAt(0) && n[t].apply(n, i)
        })
    }, l.fn.owlCarousel.Constructor = u
}(window.Zepto || window.jQuery, window, document),
function(t, n) {
    function i(e) {
        this._core = e, this._interval = null, this._visible = null, this._handlers = {
            "initialized.owl.carousel": t.proxy(function(e) {
                e.namespace && this._core.settings.autoRefresh && this.watch()
            }, this)
        }, this._core.options = t.extend({}, i.Defaults, this._core.options), this._core.$element.on(this._handlers)
    }
    i.Defaults = {
        autoRefresh: !0,
        autoRefreshInterval: 500
    }, i.prototype.watch = function() {
        this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = n.setInterval(t.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    }, i.prototype.refresh = function() {
        this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
    }, i.prototype.destroy = function() {
        var e, t;
        for (e in n.clearInterval(this._interval), this._handlers) this._core.$element.off(e, this._handlers[e]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = i
}(window.Zepto || window.jQuery, window, document),
function(a, s) {
    function t(e) {
        this._core = e, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel": a.proxy(function(e) {
                if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type))
                    for (var t = this._core.settings, n = t.center && Math.ceil(t.items / 2) || t.items, i = t.center && -1 * n || 0, r = (e.property && e.property.value || this._core.current()) + i, s = this._core.clones().length, o = a.proxy(function(e, t) {
                            this.load(t)
                        }, this); i++ < n;) this.load(s / 2 + this._core.relative(r)), s && a.each(this._core.clones(this._core.relative(r)), o), r++
            }, this)
        }, this._core.options = a.extend({}, t.Defaults, this._core.options), this._core.$element.on(this._handlers)
    }
    t.Defaults = {
        lazyLoad: !1
    }, t.prototype.load = function(e) {
        var t = this._core.$stage.children().eq(e),
            n = t && t.find(".owl-lazy");
        !n || -1 < a.inArray(t.get(0), this._loaded) || (n.each(a.proxy(function(e, t) {
            var n, i = a(t),
                r = 1 < s.devicePixelRatio && i.attr("data-src-retina") || i.attr("data-src");
            this._core.trigger("load", {
                element: i,
                url: r
            }, "lazy"), i.is("img") ? i.one("load.owl.lazy", a.proxy(function() {
                i.css("opacity", 1), this._core.trigger("loaded", {
                    element: i,
                    url: r
                }, "lazy")
            }, this)).attr("src", r) : ((n = new Image).onload = a.proxy(function() {
                i.css({
                    "background-image": "url(" + r + ")",
                    opacity: "1"
                }), this._core.trigger("loaded", {
                    element: i,
                    url: r
                }, "lazy")
            }, this), n.src = r)
        }, this)), this._loaded.push(t.get(0)))
    }, t.prototype.destroy = function() {
        var e, t;
        for (e in this.handlers) this._core.$element.off(e, this.handlers[e]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Lazy = t
}(window.Zepto || window.jQuery, window, document),
function(i) {
    function t(e) {
        this._core = e, this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": i.proxy(function(e) {
                e.namespace && this._core.settings.autoHeight && this.update()
            }, this),
            "changed.owl.carousel": i.proxy(function(e) {
                e.namespace && this._core.settings.autoHeight && "position" == e.property.name && this.update()
            }, this),
            "loaded.owl.lazy": i.proxy(function(e) {
                e.namespace && this._core.settings.autoHeight && e.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
            }, this)
        }, this._core.options = i.extend({}, t.Defaults, this._core.options), this._core.$element.on(this._handlers)
    }
    t.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    }, t.prototype.update = function() {
        var e = this._core._current,
            t = e + this._core.settings.items,
            n = this._core.$stage.children().toArray().slice(e, t);
        heights = [], maxheight = 0, i.each(n, function(e, t) {
            heights.push(i(t).height())
        }), maxheight = Math.max.apply(null, heights), this._core.$stage.parent().height(maxheight).addClass(this._core.settings.autoHeightClass)
    }, t.prototype.destroy = function() {
        var e, t;
        for (e in this._handlers) this._core.$element.off(e, this._handlers[e]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    }, i.fn.owlCarousel.Constructor.Plugins.AutoHeight = t
}(window.Zepto || window.jQuery, window, document),
function(c, e, t) {
    function n(e) {
        this._core = e, this._videos = {}, this._playing = null, this._handlers = {
            "initialized.owl.carousel": c.proxy(function(e) {
                e.namespace && this._core.register({
                    type: "state",
                    name: "playing",
                    tags: ["interacting"]
                })
            }, this),
            "resize.owl.carousel": c.proxy(function(e) {
                e.namespace && this._core.settings.video && this.isInFullScreen() && e.preventDefault()
            }, this),
            "refreshed.owl.carousel": c.proxy(function(e) {
                e.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
            }, this),
            "changed.owl.carousel": c.proxy(function(e) {
                e.namespace && "position" === e.property.name && this._playing && this.stop()
            }, this),
            "prepared.owl.carousel": c.proxy(function(e) {
                if (e.namespace) {
                    var t = c(e.content).find(".owl-video");
                    t.length && (t.css("display", "none"), this.fetch(t, c(e.content)))
                }
            }, this)
        }, this._core.options = c.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", c.proxy(function(e) {
            this.play(e)
        }, this))
    }
    n.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    }, n.prototype.fetch = function(e, t) {
        var n = e.attr("data-vimeo-id") ? "vimeo" : "youtube",
            i = e.attr("data-vimeo-id") || e.attr("data-youtube-id"),
            r = e.attr("data-width") || this._core.settings.videoWidth,
            s = e.attr("data-height") || this._core.settings.videoHeight,
            o = e.attr("href");
        if (!o) throw new Error("Missing video URL.");
        if (-1 < (i = o.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu")) n = "youtube";
        else {
            if (!(-1 < i[3].indexOf("vimeo"))) throw new Error("Video URL not supported.");
            n = "vimeo"
        }
        i = i[6], this._videos[o] = {
            type: n,
            id: i,
            width: r,
            height: s
        }, t.attr("data-video", o), this.thumbnail(e, this._videos[o])
    }, n.prototype.thumbnail = function(t, e) {
        function n(e) {
            '<div class="owl-video-play-icon"></div>', i = u.lazyLoad ? '<div class="owl-video-tn ' + l + '" ' + a + '="' + e + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + e + ')"></div>', t.after(i), t.after('<div class="owl-video-play-icon"></div>')
        }
        var i, r, s = e.width && e.height ? 'style="width:' + e.width + "px;height:" + e.height + 'px;"' : "",
            o = t.find("img"),
            a = "src",
            l = "",
            u = this._core.settings;
        if (t.wrap('<div class="owl-video-wrapper"' + s + "></div>"), this._core.settings.lazyLoad && (a = "data-src", l = "owl-lazy"), o.length) return n(o.attr(a)), o.remove(), !1;
        "youtube" === e.type ? (r = "http://img.youtube.com/vi/" + e.id + "/hqdefault.jpg", n(r)) : "vimeo" === e.type && c.ajax({
            type: "GET",
            url: "http://vimeo.com/api/v2/video/" + e.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(e) {
                r = e[0].thumbnail_large, n(r)
            }
        })
    }, n.prototype.stop = function() {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
    }, n.prototype.play = function(e) {
        var t, n = c(e.target).closest("." + this._core.settings.itemClass),
            i = this._videos[n.attr("data-video")],
            r = i.width || "100%",
            s = i.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), n = this._core.items(this._core.relative(n.index())), this._core.reset(n.index()), "youtube" === i.type ? t = '<iframe width="' + r + '" height="' + s + '" src="http://www.youtube.com/embed/' + i.id + "?autoplay=1&v=" + i.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === i.type && (t = '<iframe src="http://player.vimeo.com/video/' + i.id + '?autoplay=1" width="' + r + '" height="' + s + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), c('<div class="owl-video-frame">' + t + "</div>").insertAfter(n.find(".owl-video")), this._playing = n.addClass("owl-video-playing"))
    }, n.prototype.isInFullScreen = function() {
        var e = t.fullscreenElement || t.mozFullScreenElement || t.webkitFullscreenElement;
        return e && c(e).parent().hasClass("owl-video-frame")
    }, n.prototype.destroy = function() {
        var e, t;
        for (e in this._core.$element.off("click.owl.video"), this._handlers) this._core.$element.off(e, this._handlers[e]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    }, c.fn.owlCarousel.Constructor.Plugins.Video = n
}(window.Zepto || window.jQuery, window, document),
function(o) {
    function t(e) {
        this.core = e, this.core.options = o.extend({}, t.Defaults, this.core.options), this.swapping = !0, this.previous = void 0, this.next = void 0, this.handlers = {
            "change.owl.carousel": o.proxy(function(e) {
                e.namespace && "position" == e.property.name && (this.previous = this.core.current(), this.next = e.property.value)
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": o.proxy(function(e) {
                e.namespace && (this.swapping = "translated" == e.type)
            }, this),
            "translate.owl.carousel": o.proxy(function(e) {
                e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    }
    t.Defaults = {
        animateOut: !1,
        animateIn: !1
    }, t.prototype.swap = function() {
        if (1 === this.core.settings.items && o.support.animation && o.support.transition) {
            this.core.speed(0);
            var e, t = o.proxy(this.clear, this),
                n = this.core.$stage.children().eq(this.previous),
                i = this.core.$stage.children().eq(this.next),
                r = this.core.settings.animateIn,
                s = this.core.settings.animateOut;
            this.core.current() !== this.previous && (s && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), n.one(o.support.animation.end, t).css({
                left: e + "px"
            }).addClass("animated owl-animated-out").addClass(s)), r && i.one(o.support.animation.end, t).addClass("animated owl-animated-in").addClass(r))
        }
    }, t.prototype.clear = function(e) {
        o(e.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
    }, t.prototype.destroy = function() {
        var e, t;
        for (e in this.handlers) this.core.$element.off(e, this.handlers[e]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    }, o.fn.owlCarousel.Constructor.Plugins.Animate = t
}(window.Zepto || window.jQuery, window, document),
function(n, i, r) {
    function t(e) {
        this._core = e, this._interval = null, this._paused = !1, this._handlers = {
            "changed.owl.carousel": n.proxy(function(e) {
                e.namespace && "settings" === e.property.name && (this._core.settings.autoplay ? this.play() : this.stop())
            }, this),
            "initialized.owl.carousel": n.proxy(function(e) {
                e.namespace && this._core.settings.autoplay && this.play()
            }, this),
            "play.owl.autoplay": n.proxy(function(e, t, n) {
                e.namespace && this.play(t, n)
            }, this),
            "stop.owl.autoplay": n.proxy(function(e) {
                e.namespace && this.stop()
            }, this),
            "mouseover.owl.autoplay": n.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "mouseleave.owl.autoplay": n.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            }, this)
        }, this._core.$element.on(this._handlers), this._core.options = n.extend({}, t.Defaults, this._core.options)
    }
    t.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, t.prototype.play = function(e, t) {
        this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._interval = i.setInterval(n.proxy(function() {
            this._paused || this._core.is("busy") || this._core.is("interacting") || r.hidden || this._core.next(t || this._core.settings.autoplaySpeed)
        }, this), e || this._core.settings.autoplayTimeout))
    }, t.prototype.stop = function() {
        this._core.is("rotating") && (i.clearInterval(this._interval), this._core.leave("rotating"))
    }, t.prototype.pause = function() {
        this._core.is("rotating") && (this._paused = !0)
    }, t.prototype.destroy = function() {
        var e, t;
        for (e in this.stop(), this._handlers) this._core.$element.off(e, this._handlers[e]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    }, n.fn.owlCarousel.Constructor.Plugins.autoplay = t
}(window.Zepto || window.jQuery, window, document),
function(s) {
    function t(e) {
        this._core = e, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": s.proxy(function(e) {
                e.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + s(e.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot") + "</div>")
            }, this),
            "added.owl.carousel": s.proxy(function(e) {
                e.namespace && this._core.settings.dotsData && this._templates.splice(e.position, 0, this._templates.pop())
            }, this),
            "remove.owl.carousel": s.proxy(function(e) {
                e.namespace && this._core.settings.dotsData && this._templates.splice(e.position, 1)
            }, this),
            "changed.owl.carousel": s.proxy(function(e) {
                e.namespace && "position" == e.property.name && this.draw()
            }, this),
            "initialized.owl.carousel": s.proxy(function(e) {
                e.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
            }, this),
            "refreshed.owl.carousel": s.proxy(function(e) {
                e.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
            }, this)
        }, this._core.options = s.extend({}, t.Defaults, this._core.options), this.$element.on(this._handlers)
    }
    t.Defaults = {
        nav: !1,
        navText: ["prev", "next"],
        navSpeed: !1,
        navElement: "div",
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1
    }, t.prototype.initialize = function() {
        var e, n = this._core.settings;
        for (e in this._controls.$relative = (n.navContainer ? s(n.navContainer) : s("<div>").addClass(n.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = s("<" + n.navElement + ">").addClass(n.navClass[0]).html(n.navText[0]).prependTo(this._controls.$relative).on("click", s.proxy(function(e) {
                this.prev(n.navSpeed)
            }, this)), this._controls.$next = s("<" + n.navElement + ">").addClass(n.navClass[1]).html(n.navText[1]).appendTo(this._controls.$relative).on("click", s.proxy(function(e) {
                this.next(n.navSpeed)
            }, this)), n.dotsData || (this._templates = [s("<div>").addClass(n.dotClass).append(s("<span>")).prop("outerHTML")]), this._controls.$absolute = (n.dotsContainer ? s(n.dotsContainer) : s("<div>").addClass(n.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", s.proxy(function(e) {
                var t = s(e.target).parent().is(this._controls.$absolute) ? s(e.target).index() : s(e.target).parent().index();
                e.preventDefault(), this.to(t, n.dotsSpeed)
            }, this)), this._overrides) this._core[e] = s.proxy(this[e], this)
    }, t.prototype.destroy = function() {
        var e, t, n, i;
        for (e in this._handlers) this.$element.off(e, this._handlers[e]);
        for (t in this._controls) this._controls[t].remove();
        for (i in this.overides) this._core[i] = this._overrides[i];
        for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
    }, t.prototype.update = function() {
        var e, t, n = this._core.clones().length / 2,
            i = n + this._core.items().length,
            r = this._core.maximum(!0),
            s = this._core.settings,
            o = s.center || s.autoWidth || s.dotsData ? 1 : s.dotsEach || s.items;
        if ("page" !== s.slideBy && (s.slideBy = Math.min(s.slideBy, s.items)), s.dots || "page" == s.slideBy)
            for (this._pages = [], e = n, t = 0; e < i; e++) {
                if (o <= t || 0 === t) {
                    if (this._pages.push({
                            start: Math.min(r, e - n),
                            end: e - n + o - 1
                        }), Math.min(r, e - n) === r) break;
                    t = 0, 0
                }
                t += this._core.mergers(this._core.relative(e))
            }
    }, t.prototype.draw = function() {
        var e, t = this._core.settings,
            n = this._core.items().length <= t.items,
            i = this._core.relative(this._core.current()),
            r = t.loop || t.rewind;
        this._controls.$relative.toggleClass("disabled", !t.nav || n), t.nav && (this._controls.$previous.toggleClass("disabled", !r && i <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !r && i >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !t.dots || n), t.dots && (e = this._pages.length - this._controls.$absolute.children().length, t.dotsData && 0 != e ? this._controls.$absolute.html(this._templates.join("")) : 0 < e ? this._controls.$absolute.append(new Array(1 + e).join(this._templates[0])) : e < 0 && this._controls.$absolute.children().slice(e).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(s.inArray(this.current(), this._pages)).addClass("active"))
    }, t.prototype.onTrigger = function(e) {
        var t = this._core.settings;
        e.page = {
            index: s.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: t && (t.center || t.autoWidth || t.dotsData ? 1 : t.dotsEach || t.items)
        }
    }, t.prototype.current = function() {
        var n = this._core.relative(this._core.current());
        return s.grep(this._pages, s.proxy(function(e, t) {
            return e.start <= n && e.end >= n
        }, this)).pop()
    }, t.prototype.getPosition = function(e) {
        var t, n, i = this._core.settings;
        return "page" == i.slideBy ? (t = s.inArray(this.current(), this._pages), n = this._pages.length, e ? ++t : --t, t = this._pages[(t % n + n) % n].start) : (t = this._core.relative(this._core.current()), n = this._core.items().length, e ? t += i.slideBy : t -= i.slideBy), t
    }, t.prototype.next = function(e) {
        s.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
    }, t.prototype.prev = function(e) {
        s.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
    }, t.prototype.to = function(e, t, n) {
        var i;
        n ? s.proxy(this._overrides.to, this._core)(e, t) : (i = this._pages.length, s.proxy(this._overrides.to, this._core)(this._pages[(e % i + i) % i].start, t))
    }, s.fn.owlCarousel.Constructor.Plugins.Navigation = t
}(window.Zepto || window.jQuery, window, document),
function(i, r) {
    function t(e) {
        this._core = e, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": i.proxy(function(e) {
                e.namespace && "URLHash" === this._core.settings.startPosition && i(r).trigger("hashchange.owl.navigation")
            }, this),
            "prepared.owl.carousel": i.proxy(function(e) {
                if (e.namespace) {
                    var t = i(e.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");
                    if (!t) return;
                    this._hashes[t] = e.content
                }
            }, this),
            "changed.owl.carousel": i.proxy(function(e) {
                if (e.namespace && "position" === e.property.name) {
                    var n = this._core.items(this._core.relative(this._core.current())),
                        t = i.map(this._hashes, function(e, t) {
                            return e === n ? t : null
                        }).join();
                    if (!t || r.location.hash.slice(1) === t) return;
                    r.location.hash = t
                }
            }, this)
        }, this._core.options = i.extend({}, t.Defaults, this._core.options), this.$element.on(this._handlers), i(r).on("hashchange.owl.navigation", i.proxy(function(e) {
            var t = r.location.hash.substring(1),
                n = this._core.$stage.children(),
                i = this._hashes[t] && n.index(this._hashes[t]);
            void 0 !== i && i !== this._core.current() && this._core.to(this._core.relative(i), !1, !0)
        }, this))
    }
    t.Defaults = {
        URLhashListener: !1
    }, t.prototype.destroy = function() {
        var e, t;
        for (e in i(r).off("hashchange.owl.navigation"), this._handlers) this._core.$element.off(e, this._handlers[e]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    }, i.fn.owlCarousel.Constructor.Plugins.Hash = t
}(window.Zepto || window.jQuery, window, document),
function(r, e, t, s) {
    var o = r("<support>").get(0).style,
        a = "Webkit Moz O ms".split(" "),
        n = {
            transition: {
                end: {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd",
                    transition: "transitionend"
                }
            },
            animation: {
                end: {
                    WebkitAnimation: "webkitAnimationEnd",
                    MozAnimation: "animationend",
                    OAnimation: "oAnimationEnd",
                    animation: "animationend"
                }
            }
        },
        i = function() {
            return !!c("transform")
        },
        l = function() {
            return !!c("perspective")
        },
        u = function() {
            return !!c("animation")
        };

    function c(e, n) {
        var i = !1,
            t = e.charAt(0).toUpperCase() + e.slice(1);
        return r.each((e + " " + a.join(t + " ") + t).split(" "), function(e, t) {
            if (o[t] !== s) return i = !n || t, !1
        }), i
    }

    function d(e) {
        return c(e, !0)
    }! function() {
        return !!c("transition")
    }() || (r.support.transition = new String(d("transition")), r.support.transition.end = n.transition.end[r.support.transition]), u() && (r.support.animation = new String(d("animation")), r.support.animation.end = n.animation.end[r.support.animation]), i() && (r.support.transform = new String(d("transform")), r.support.transform3d = l())
}(window.Zepto || window.jQuery, window, document),
function(n) {
    "function" == typeof define && define.amd ? define(["jquery"], n) : "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = function(e, t) {
        return void 0 === t && (t = "undefined" != typeof window ? require("jquery") : require("jquery")(e)), n(t), t
    } : n(jQuery)
}(function(c) {
    var e = function() {
            if (c && c.fn && c.fn.select2 && c.fn.select2.amd) var e = c.fn.select2.amd;
            var t, n, i, p, s, o, f, g, m, v, y, w, r, a, _;
            return e && e.requirejs || (e ? n = e : e = {}, m = {}, v = {}, y = {}, w = {}, r = Object.prototype.hasOwnProperty, a = [].slice, _ = /\.js$/, f = function(e, t) {
                var n, i = u(e),
                    r = i[0],
                    s = t[1];
                return e = i[1], r && (n = T(r = l(r, s))), r ? e = n && n.normalize ? n.normalize(e, function(t) {
                    return function(e) {
                        return l(e, t)
                    }
                }(s)) : l(e, s) : (r = (i = u(e = l(e, s)))[0], e = i[1], r && (n = T(r))), {
                    f: r ? r + "!" + e : e,
                    n: e,
                    pr: r,
                    p: n
                }
            }, g = {
                require: function(e) {
                    return x(e)
                },
                exports: function(e) {
                    var t = m[e];
                    return void 0 !== t ? t : m[e] = {}
                },
                module: function(e) {
                    return {
                        id: e,
                        uri: "",
                        exports: m[e],
                        config: function(e) {
                            return function() {
                                return y && y.config && y.config[e] || {}
                            }
                        }(e)
                    }
                }
            }, s = function(e, t, n, i) {
                var r, s, o, a, l, u, c, d = [],
                    h = _typeof(n);
                if (u = E(i = i || e), "undefined" === h || "function" === h) {
                    for (t = !t.length && n.length ? ["require", "exports", "module"] : t, l = 0; l < t.length; l += 1)
                        if (a = f(t[l], u), "require" === (s = a.f)) d[l] = g.require(e);
                        else if ("exports" === s) d[l] = g.exports(e), c = !0;
                    else if ("module" === s) r = d[l] = g.module(e);
                    else if (b(m, s) || b(v, s) || b(w, s)) d[l] = T(s);
                    else {
                        if (!a.p) throw new Error(e + " missing " + s);
                        a.p.load(a.n, x(i, !0), C(s), {}), d[l] = m[s]
                    }
                    o = n ? n.apply(m[e], d) : void 0, e && (r && r.exports !== p && r.exports !== m[e] ? m[e] = r.exports : o === p && c || (m[e] = o))
                } else e && (m[e] = n)
            }, t = n = o = function(e, t, n, i, r) {
                if ("string" == typeof e) return g[e] ? g[e](t) : T(f(e, E(t)).f);
                if (!e.splice) {
                    if ((y = e).deps && o(y.deps, y.callback), !t) return;
                    t.splice ? (e = t, t = n, n = null) : e = p
                }
                return t = t || function() {}, "function" == typeof n && (n = i, i = r), i ? s(p, e, t, n) : setTimeout(function() {
                    s(p, e, t, n)
                }, 4), o
            }, o.config = function(e) {
                return o(e)
            }, t._defined = m, (i = function(e, t, n) {
                if ("string" != typeof e) throw new Error("See almond README: incorrect module build, no module name");
                t.splice || (n = t, t = []), b(m, e) || b(v, e) || (v[e] = [e, t, n])
            }).amd = {
                jQuery: !0
            }, e.requirejs = t, e.require = n, e.define = i), e.define("almond", function() {}), e.define("jquery", [], function() {
                var e = c || $;
                return null == e && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), e
            }), e.define("select2/utils", ["jquery"], function(s) {
                function c(e) {
                    var t = e.prototype,
                        n = [];
                    for (var i in t) "function" == typeof t[i] && "constructor" !== i && n.push(i);
                    return n
                }

                function e() {
                    this.listeners = {}
                }
                var t = {
                    Extend: function(e, t) {
                        function n() {
                            this.constructor = e
                        }
                        var i = {}.hasOwnProperty;
                        for (var r in t) i.call(t, r) && (e[r] = t[r]);
                        return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
                    },
                    Decorate: function(i, r) {
                        function s() {
                            var e = Array.prototype.unshift,
                                t = r.prototype.constructor.length,
                                n = i.prototype.constructor;
                            0 < t && (e.call(arguments, i.prototype.constructor), n = r.prototype.constructor), n.apply(this, arguments)
                        }
                        var e = c(r),
                            t = c(i);
                        r.displayName = i.displayName, s.prototype = new function() {
                            this.constructor = s
                        };
                        for (var n = 0; n < t.length; n++) {
                            var o = t[n];
                            s.prototype[o] = i.prototype[o]
                        }
                        for (var a = function(e) {
                                var t = function() {};
                                e in s.prototype && (t = s.prototype[e]);
                                var n = r.prototype[e];
                                return function() {
                                    return Array.prototype.unshift.call(arguments, t), n.apply(this, arguments)
                                }
                            }, l = 0; l < e.length; l++) {
                            var u = e[l];
                            s.prototype[u] = a(u)
                        }
                        return s
                    }
                };
                return e.prototype.on = function(e, t) {
                    this.listeners = this.listeners || {}, e in this.listeners ? this.listeners[e].push(t) : this.listeners[e] = [t]
                }, e.prototype.trigger = function(e) {
                    var t = Array.prototype.slice,
                        n = t.call(arguments, 1);
                    this.listeners = this.listeners || {}, null == n && (n = []), 0 === n.length && n.push({}), (n[0]._type = e) in this.listeners && this.invoke(this.listeners[e], t.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments)
                }, e.prototype.invoke = function(e, t) {
                    for (var n = 0, i = e.length; n < i; n++) e[n].apply(this, t)
                }, t.Observable = e, t.generateChars = function(e) {
                    for (var t = "", n = 0; n < e; n++) t += Math.floor(36 * Math.random()).toString(36);
                    return t
                }, t.bind = function(e, t) {
                    return function() {
                        e.apply(t, arguments)
                    }
                }, t._convertData = function(e) {
                    for (var t in e) {
                        var n = t.split("-"),
                            i = e;
                        if (1 !== n.length) {
                            for (var r = 0; r < n.length; r++) {
                                var s = n[r];
                                (s = s.substring(0, 1).toLowerCase() + s.substring(1)) in i || (i[s] = {}), r == n.length - 1 && (i[s] = e[t]), i = i[s]
                            }
                            delete e[t]
                        }
                    }
                    return e
                }, t.hasScroll = function(e, t) {
                    var n = s(t),
                        i = t.style.overflowX,
                        r = t.style.overflowY;
                    return (i !== r || "hidden" !== r && "visible" !== r) && ("scroll" === i || "scroll" === r || n.innerHeight() < t.scrollHeight || n.innerWidth() < t.scrollWidth)
                }, t.escapeMarkup = function(e) {
                    var t = {
                        "\\": "&#92;",
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        '"': "&quot;",
                        "'": "&#39;",
                        "/": "&#47;"
                    };
                    return "string" != typeof e ? e : String(e).replace(/[&<>"'\/\\]/g, function(e) {
                        return t[e]
                    })
                }, t.appendMany = function(e, t) {
                    if ("1.7" === s.fn.jquery.substr(0, 3)) {
                        var n = s();
                        s.map(t, function(e) {
                            n = n.add(e)
                        }), t = n
                    }
                    e.append(t)
                }, t
            }), e.define("select2/results", ["jquery", "./utils"], function(h, e) {
                function i(e, t, n) {
                    this.$element = e, this.data = n, this.options = t, i.__super__.constructor.call(this)
                }
                return e.Extend(i, e.Observable), i.prototype.render = function() {
                    var e = h('<ul class="select2-results__options" role="tree"></ul>');
                    return this.options.get("multiple") && e.attr("aria-multiselectable", "true"), this.$results = e
                }, i.prototype.clear = function() {
                    this.$results.empty()
                }, i.prototype.displayMessage = function(e) {
                    var t = this.options.get("escapeMarkup");
                    this.clear(), this.hideLoading();
                    var n = h('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),
                        i = this.options.get("translations").get(e.message);
                    n.append(t(i(e.args))), n[0].className += " select2-results__message", this.$results.append(n)
                }, i.prototype.hideMessages = function() {
                    this.$results.find(".select2-results__message").remove()
                }, i.prototype.append = function(e) {
                    this.hideLoading();
                    var t = [];
                    if (null != e.results && 0 !== e.results.length) {
                        e.results = this.sort(e.results);
                        for (var n = 0; n < e.results.length; n++) {
                            var i = e.results[n],
                                r = this.option(i);
                            t.push(r)
                        }
                        this.$results.append(t)
                    } else 0 === this.$results.children().length && this.trigger("results:message", {
                        message: "noResults"
                    })
                }, i.prototype.position = function(e, t) {
                    t.find(".select2-results").append(e)
                }, i.prototype.sort = function(e) {
                    return this.options.get("sorter")(e)
                }, i.prototype.highlightFirstItem = function() {
                    var e = this.$results.find(".select2-results__option[aria-selected]"),
                        t = e.filter("[aria-selected=true]");
                    0 < t.length ? t.first().trigger("mouseenter") : e.first().trigger("mouseenter"), this.ensureHighlightVisible()
                }, i.prototype.setClasses = function() {
                    var t = this;
                    this.data.current(function(e) {
                        var i = h.map(e, function(e) {
                            return e.id.toString()
                        });
                        t.$results.find(".select2-results__option[aria-selected]").each(function() {
                            var e = h(this),
                                t = h.data(this, "data"),
                                n = "" + t.id;
                            null != t.element && t.element.selected || null == t.element && -1 < h.inArray(n, i) ? e.attr("aria-selected", "true") : e.attr("aria-selected", "false")
                        })
                    })
                }, i.prototype.showLoading = function(e) {
                    this.hideLoading();
                    var t = {
                            disabled: !0,
                            loading: !0,
                            text: this.options.get("translations").get("searching")(e)
                        },
                        n = this.option(t);
                    n.className += " loading-results", this.$results.prepend(n)
                }, i.prototype.hideLoading = function() {
                    this.$results.find(".loading-results").remove()
                }, i.prototype.option = function(e) {
                    var t = document.createElement("li");
                    t.className = "select2-results__option";
                    var n = {
                        role: "treeitem",
                        "aria-selected": "false"
                    };
                    for (var i in e.disabled && (delete n["aria-selected"], n["aria-disabled"] = "true"), null == e.id && delete n["aria-selected"], null != e._resultId && (t.id = e._resultId), e.title && (t.title = e.title), e.children && (n.role = "group", n["aria-label"] = e.text, delete n["aria-selected"]), n) {
                        var r = n[i];
                        t.setAttribute(i, r)
                    }
                    if (e.children) {
                        var s = h(t),
                            o = document.createElement("strong");
                        o.className = "select2-results__group", h(o), this.template(e, o);
                        for (var a = [], l = 0; l < e.children.length; l++) {
                            var u = e.children[l],
                                c = this.option(u);
                            a.push(c)
                        }
                        var d = h("<ul></ul>", {
                            class: "select2-results__options select2-results__options--nested"
                        });
                        d.append(a), s.append(o), s.append(d)
                    } else this.template(e, t);
                    return h.data(t, "data", e), t
                }, i.prototype.bind = function(t, e) {
                    var l = this,
                        n = t.id + "-results";
                    this.$results.attr("id", n), t.on("results:all", function(e) {
                        l.clear(), l.append(e.data), t.isOpen() && (l.setClasses(), l.highlightFirstItem())
                    }), t.on("results:append", function(e) {
                        l.append(e.data), t.isOpen() && l.setClasses()
                    }), t.on("query", function(e) {
                        l.hideMessages(), l.showLoading(e)
                    }), t.on("select", function() {
                        t.isOpen() && (l.setClasses(), l.highlightFirstItem())
                    }), t.on("unselect", function() {
                        t.isOpen() && (l.setClasses(), l.highlightFirstItem())
                    }), t.on("open", function() {
                        l.$results.attr("aria-expanded", "true"), l.$results.attr("aria-hidden", "false"), l.setClasses(), l.ensureHighlightVisible()
                    }), t.on("close", function() {
                        l.$results.attr("aria-expanded", "false"), l.$results.attr("aria-hidden", "true"), l.$results.removeAttr("aria-activedescendant")
                    }), t.on("results:toggle", function() {
                        var e = l.getHighlightedResults();
                        0 !== e.length && e.trigger("mouseup")
                    }), t.on("results:select", function() {
                        var e = l.getHighlightedResults();
                        if (0 !== e.length) {
                            var t = e.data("data");
                            "true" == e.attr("aria-selected") ? l.trigger("close", {}) : l.trigger("select", {
                                data: t
                            })
                        }
                    }), t.on("results:previous", function() {
                        var e = l.getHighlightedResults(),
                            t = l.$results.find("[aria-selected]"),
                            n = t.index(e);
                        if (0 !== n) {
                            var i = n - 1;
                            0 === e.length && (i = 0);
                            var r = t.eq(i);
                            r.trigger("mouseenter");
                            var s = l.$results.offset().top,
                                o = r.offset().top,
                                a = l.$results.scrollTop() + (o - s);
                            0 === i ? l.$results.scrollTop(0) : o - s < 0 && l.$results.scrollTop(a)
                        }
                    }), t.on("results:next", function() {
                        var e = l.getHighlightedResults(),
                            t = l.$results.find("[aria-selected]"),
                            n = t.index(e) + 1;
                        if (!(n >= t.length)) {
                            var i = t.eq(n);
                            i.trigger("mouseenter");
                            var r = l.$results.offset().top + l.$results.outerHeight(!1),
                                s = i.offset().top + i.outerHeight(!1),
                                o = l.$results.scrollTop() + s - r;
                            0 === n ? l.$results.scrollTop(0) : r < s && l.$results.scrollTop(o)
                        }
                    }), t.on("results:focus", function(e) {
                        e.element.addClass("select2-results__option--highlighted")
                    }), t.on("results:message", function(e) {
                        l.displayMessage(e)
                    }), h.fn.mousewheel && this.$results.on("mousewheel", function(e) {
                        var t = l.$results.scrollTop(),
                            n = l.$results.get(0).scrollHeight - t + e.deltaY,
                            i = 0 < e.deltaY && t - e.deltaY <= 0,
                            r = e.deltaY < 0 && n <= l.$results.height();
                        i ? (l.$results.scrollTop(0), e.preventDefault(), e.stopPropagation()) : r && (l.$results.scrollTop(l.$results.get(0).scrollHeight - l.$results.height()), e.preventDefault(), e.stopPropagation())
                    }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function(e) {
                        var t = h(this),
                            n = t.data("data");
                        "true" !== t.attr("aria-selected") ? l.trigger("select", {
                            originalEvent: e,
                            data: n
                        }) : l.options.get("multiple") ? l.trigger("unselect", {
                            originalEvent: e,
                            data: n
                        }) : l.trigger("close", {})
                    }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function(e) {
                        var t = h(this).data("data");
                        l.getHighlightedResults().removeClass("select2-results__option--highlighted"), l.trigger("results:focus", {
                            data: t,
                            element: h(this)
                        })
                    })
                }, i.prototype.getHighlightedResults = function() {
                    return this.$results.find(".select2-results__option--highlighted")
                }, i.prototype.destroy = function() {
                    this.$results.remove()
                }, i.prototype.ensureHighlightVisible = function() {
                    var e = this.getHighlightedResults();
                    if (0 !== e.length) {
                        var t = this.$results.find("[aria-selected]").index(e),
                            n = this.$results.offset().top,
                            i = e.offset().top,
                            r = this.$results.scrollTop() + (i - n),
                            s = i - n;
                        r -= 2 * e.outerHeight(!1), t <= 2 ? this.$results.scrollTop(0) : (s > this.$results.outerHeight() || s < 0) && this.$results.scrollTop(r)
                    }
                }, i.prototype.template = function(e, t) {
                    var n = this.options.get("templateResult"),
                        i = this.options.get("escapeMarkup"),
                        r = n(e, t);
                    null == r ? t.style.display = "none" : "string" == typeof r ? t.innerHTML = i(r) : h(t).append(r)
                }, i
            }), e.define("select2/keys", [], function() {
                return {
                    BACKSPACE: 8,
                    TAB: 9,
                    ENTER: 13,
                    SHIFT: 16,
                    CTRL: 17,
                    ALT: 18,
                    ESC: 27,
                    SPACE: 32,
                    PAGE_UP: 33,
                    PAGE_DOWN: 34,
                    END: 35,
                    HOME: 36,
                    LEFT: 37,
                    UP: 38,
                    RIGHT: 39,
                    DOWN: 40,
                    DELETE: 46
                }
            }), e.define("select2/selection/base", ["jquery", "../utils", "../keys"], function(n, e, r) {
                function i(e, t) {
                    this.$element = e, this.options = t, i.__super__.constructor.call(this)
                }
                return e.Extend(i, e.Observable), i.prototype.render = function() {
                    var e = n('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
                    return this._tabindex = 0, null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), e.attr("title", this.$element.attr("title")), e.attr("tabindex", this._tabindex), this.$selection = e
                }, i.prototype.bind = function(e, t) {
                    var n = this,
                        i = (e.id, e.id + "-results");
                    this.container = e, this.$selection.on("focus", function(e) {
                        n.trigger("focus", e)
                    }), this.$selection.on("blur", function(e) {
                        n._handleBlur(e)
                    }), this.$selection.on("keydown", function(e) {
                        n.trigger("keypress", e), e.which === r.SPACE && e.preventDefault()
                    }), e.on("results:focus", function(e) {
                        n.$selection.attr("aria-activedescendant", e.data._resultId)
                    }), e.on("selection:update", function(e) {
                        n.update(e.data)
                    }), e.on("open", function() {
                        n.$selection.attr("aria-expanded", "true"), n.$selection.attr("aria-owns", i), n._attachCloseHandler(e)
                    }), e.on("close", function() {
                        n.$selection.attr("aria-expanded", "false"), n.$selection.removeAttr("aria-activedescendant"), n.$selection.removeAttr("aria-owns"), n.$selection.focus(), n._detachCloseHandler(e)
                    }), e.on("enable", function() {
                        n.$selection.attr("tabindex", n._tabindex)
                    }), e.on("disable", function() {
                        n.$selection.attr("tabindex", "-1")
                    })
                }, i.prototype._handleBlur = function(e) {
                    var t = this;
                    window.setTimeout(function() {
                        document.activeElement == t.$selection[0] || n.contains(t.$selection[0], document.activeElement) || t.trigger("blur", e)
                    }, 1)
                }, i.prototype._attachCloseHandler = function(e) {
                    n(document.body).on("mousedown.select2." + e.id, function(e) {
                        var t = n(e.target).closest(".select2");
                        n(".select2.select2-container--open").each(function() {
                            var e = n(this);
                            this != t[0] && e.data("element").select2("close")
                        })
                    })
                }, i.prototype._detachCloseHandler = function(e) {
                    n(document.body).off("mousedown.select2." + e.id)
                }, i.prototype.position = function(e, t) {
                    t.find(".selection").append(e)
                }, i.prototype.destroy = function() {
                    this._detachCloseHandler(this.container)
                }, i.prototype.update = function(e) {
                    throw new Error("The `update` method must be defined in child classes.")
                }, i
            }), e.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function(e, t, n, i) {
                function r() {
                    r.__super__.constructor.apply(this, arguments)
                }
                return n.Extend(r, t), r.prototype.render = function() {
                    var e = r.__super__.render.call(this);
                    return e.addClass("select2-selection--single"), e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), e
                }, r.prototype.bind = function(t, e) {
                    var n = this;
                    r.__super__.bind.apply(this, arguments);
                    var i = t.id + "-container";
                    this.$selection.find(".select2-selection__rendered").attr("id", i), this.$selection.attr("aria-labelledby", i), this.$selection.on("mousedown", function(e) {
                        1 === e.which && n.trigger("toggle", {
                            originalEvent: e
                        })
                    }), this.$selection.on("focus", function(e) {}), this.$selection.on("blur", function(e) {}), t.on("focus", function(e) {
                        t.isOpen() || n.$selection.focus()
                    }), t.on("selection:update", function(e) {
                        n.update(e.data)
                    })
                }, r.prototype.clear = function() {
                    this.$selection.find(".select2-selection__rendered").empty()
                }, r.prototype.display = function(e, t) {
                    var n = this.options.get("templateSelection");
                    return this.options.get("escapeMarkup")(n(e, t))
                }, r.prototype.selectionContainer = function() {
                    return e("<span></span>")
                }, r.prototype.update = function(e) {
                    if (0 !== e.length) {
                        var t = e[0],
                            n = this.$selection.find(".select2-selection__rendered"),
                            i = this.display(t, n);
                        n.empty().append(i), n.prop("title", t.title || t.text)
                    } else this.clear()
                }, r
            }), e.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function(i, e, a) {
                function r(e, t) {
                    r.__super__.constructor.apply(this, arguments)
                }
                return a.Extend(r, e), r.prototype.render = function() {
                    var e = r.__super__.render.call(this);
                    return e.addClass("select2-selection--multiple"), e.html('<ul class="select2-selection__rendered"></ul>'), e
                }, r.prototype.bind = function(e, t) {
                    var n = this;
                    r.__super__.bind.apply(this, arguments), this.$selection.on("click", function(e) {
                        n.trigger("toggle", {
                            originalEvent: e
                        })
                    }), this.$selection.on("click", ".select2-selection__choice__remove", function(e) {
                        if (!n.options.get("disabled")) {
                            var t = i(this).parent().data("data");
                            n.trigger("unselect", {
                                originalEvent: e,
                                data: t
                            })
                        }
                    })
                }, r.prototype.clear = function() {
                    this.$selection.find(".select2-selection__rendered").empty()
                }, r.prototype.display = function(e, t) {
                    var n = this.options.get("templateSelection");
                    return this.options.get("escapeMarkup")(n(e, t))
                }, r.prototype.selectionContainer = function() {
                    return i('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')
                }, r.prototype.update = function(e) {
                    if (this.clear(), 0 !== e.length) {
                        for (var t = [], n = 0; n < e.length; n++) {
                            var i = e[n],
                                r = this.selectionContainer(),
                                s = this.display(i, r);
                            r.append(s), r.prop("title", i.title || i.text), r.data("data", i), t.push(r)
                        }
                        var o = this.$selection.find(".select2-selection__rendered");
                        a.appendMany(o, t)
                    }
                }, r
            }), e.define("select2/selection/placeholder", ["../utils"], function(e) {
                function t(e, t, n) {
                    this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n)
                }
                return t.prototype.normalizePlaceholder = function(e, t) {
                    return "string" == typeof t && (t = {
                        id: "",
                        text: t
                    }), t
                }, t.prototype.createPlaceholder = function(e, t) {
                    var n = this.selectionContainer();
                    return n.html(this.display(t)), n.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), n
                }, t.prototype.update = function(e, t) {
                    var n = 1 == t.length && t[0].id != this.placeholder.id;
                    if (1 < t.length || n) return e.call(this, t);
                    this.clear();
                    var i = this.createPlaceholder(this.placeholder);
                    this.$selection.find(".select2-selection__rendered").append(i)
                }, t
            }), e.define("select2/selection/allowClear", ["jquery", "../keys"], function(i, r) {
                function e() {}
                return e.prototype.bind = function(e, t, n) {
                    var i = this;
                    e.call(this, t, n), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function(e) {
                        i._handleClear(e)
                    }), t.on("keypress", function(e) {
                        i._handleKeyboardClear(e, t)
                    })
                }, e.prototype._handleClear = function(e, t) {
                    if (!this.options.get("disabled")) {
                        var n = this.$selection.find(".select2-selection__clear");
                        if (0 !== n.length) {
                            t.stopPropagation();
                            for (var i = n.data("data"), r = 0; r < i.length; r++) {
                                var s = {
                                    data: i[r]
                                };
                                if (this.trigger("unselect", s), s.prevented) return
                            }
                            this.$element.val(this.placeholder.id).trigger("change"), this.trigger("toggle", {})
                        }
                    }
                }, e.prototype._handleKeyboardClear = function(e, t, n) {
                    n.isOpen() || t.which != r.DELETE && t.which != r.BACKSPACE || this._handleClear(t)
                }, e.prototype.update = function(e, t) {
                    if (e.call(this, t), !(0 < this.$selection.find(".select2-selection__placeholder").length || 0 === t.length)) {
                        var n = i('<span class="select2-selection__clear">&times;</span>');
                        n.data("data", t), this.$selection.find(".select2-selection__rendered").prepend(n)
                    }
                }, e
            }), e.define("select2/selection/search", ["jquery", "../utils", "../keys"], function(i, e, o) {
                function t(e, t, n) {
                    e.call(this, t, n)
                }
                return t.prototype.render = function(e) {
                    var t = i('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');
                    this.$searchContainer = t, this.$search = t.find("input");
                    var n = e.call(this);
                    return this._transferTabIndex(), n
                }, t.prototype.bind = function(e, t, n) {
                    var i = this;
                    e.call(this, t, n), t.on("open", function() {
                        i.$search.trigger("focus")
                    }), t.on("close", function() {
                        i.$search.val(""), i.$search.removeAttr("aria-activedescendant"), i.$search.trigger("focus")
                    }), t.on("enable", function() {
                        i.$search.prop("disabled", !1), i._transferTabIndex()
                    }), t.on("disable", function() {
                        i.$search.prop("disabled", !0)
                    }), t.on("focus", function(e) {
                        i.$search.trigger("focus")
                    }), t.on("results:focus", function(e) {
                        i.$search.attr("aria-activedescendant", e.id)
                    }), this.$selection.on("focusin", ".select2-search--inline", function(e) {
                        i.trigger("focus", e)
                    }), this.$selection.on("focusout", ".select2-search--inline", function(e) {
                        i._handleBlur(e)
                    }), this.$selection.on("keydown", ".select2-search--inline", function(e) {
                        if (e.stopPropagation(), i.trigger("keypress", e), i._keyUpPrevented = e.isDefaultPrevented(), e.which === o.BACKSPACE && "" === i.$search.val()) {
                            var t = i.$searchContainer.prev(".select2-selection__choice");
                            if (0 < t.length) {
                                var n = t.data("data");
                                i.searchRemoveChoice(n), e.preventDefault()
                            }
                        }
                    });
                    var r = document.documentMode,
                        s = r && r <= 11;
                    this.$selection.on("input.searchcheck", ".select2-search--inline", function(e) {
                        s ? i.$selection.off("input.search input.searchcheck") : i.$selection.off("keyup.search")
                    }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function(e) {
                        if (s && "input" === e.type) i.$selection.off("input.search input.searchcheck");
                        else {
                            var t = e.which;
                            t != o.SHIFT && t != o.CTRL && t != o.ALT && t != o.TAB && i.handleSearch(e)
                        }
                    })
                }, t.prototype._transferTabIndex = function(e) {
                    this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1")
                }, t.prototype.createPlaceholder = function(e, t) {
                    this.$search.attr("placeholder", t.text)
                }, t.prototype.update = function(e, t) {
                    var n = this.$search[0] == document.activeElement;
                    this.$search.attr("placeholder", ""), e.call(this, t), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), n && this.$search.focus()
                }, t.prototype.handleSearch = function() {
                    if (this.resizeSearch(), !this._keyUpPrevented) {
                        var e = this.$search.val();
                        this.trigger("query", {
                            term: e
                        })
                    }
                    this._keyUpPrevented = !1
                }, t.prototype.searchRemoveChoice = function(e, t) {
                    this.trigger("unselect", {
                        data: t
                    }), this.$search.val(t.text), this.handleSearch()
                }, t.prototype.resizeSearch = function() {
                    this.$search.css("width", "25px");
                    var e = "";
                    e = "" !== this.$search.attr("placeholder") ? this.$selection.find(".select2-selection__rendered").innerWidth() : .75 * (this.$search.val().length + 1) + "em", this.$search.css("width", e)
                }, t
            }), e.define("select2/selection/eventRelay", ["jquery"], function(o) {
                function e() {}
                return e.prototype.bind = function(e, t, n) {
                    var i = this,
                        r = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"],
                        s = ["opening", "closing", "selecting", "unselecting"];
                    e.call(this, t, n), t.on("*", function(e, t) {
                        if (-1 !== o.inArray(e, r)) {
                            t = t || {};
                            var n = o.Event("select2:" + e, {
                                params: t
                            });
                            i.$element.trigger(n), -1 !== o.inArray(e, s) && (t.prevented = n.isDefaultPrevented())
                        }
                    })
                }, e
            }), e.define("select2/translation", ["jquery", "require"], function(t, n) {
                function i(e) {
                    this.dict = e || {}
                }
                return i.prototype.all = function() {
                    return this.dict
                }, i.prototype.get = function(e) {
                    return this.dict[e]
                }, i.prototype.extend = function(e) {
                    this.dict = t.extend({}, e.all(), this.dict)
                }, i._cache = {}, i.loadPath = function(e) {
                    if (!(e in i._cache)) {
                        var t = n(e);
                        i._cache[e] = t
                    }
                    return new i(i._cache[e])
                }, i
            }), e.define("select2/diacritics", [], function() {
                return {
                    "Ⓐ": "A",
                    "Ａ": "A",
                    "À": "A",
                    "Á": "A",
                    "Â": "A",
                    "Ầ": "A",
                    "Ấ": "A",
                    "Ẫ": "A",
                    "Ẩ": "A",
                    "Ã": "A",
                    "Ā": "A",
                    "Ă": "A",
                    "Ằ": "A",
                    "Ắ": "A",
                    "Ẵ": "A",
                    "Ẳ": "A",
                    "Ȧ": "A",
                    "Ǡ": "A",
                    "Ä": "A",
                    "Ǟ": "A",
                    "Ả": "A",
                    "Å": "A",
                    "Ǻ": "A",
                    "Ǎ": "A",
                    "Ȁ": "A",
                    "Ȃ": "A",
                    "Ạ": "A",
                    "Ậ": "A",
                    "Ặ": "A",
                    "Ḁ": "A",
                    "Ą": "A",
                    "Ⱥ": "A",
                    "Ɐ": "A",
                    "Ꜳ": "AA",
                    "Æ": "AE",
                    "Ǽ": "AE",
                    "Ǣ": "AE",
                    "Ꜵ": "AO",
                    "Ꜷ": "AU",
                    "Ꜹ": "AV",
                    "Ꜻ": "AV",
                    "Ꜽ": "AY",
                    "Ⓑ": "B",
                    "Ｂ": "B",
                    "Ḃ": "B",
                    "Ḅ": "B",
                    "Ḇ": "B",
                    "Ƀ": "B",
                    "Ƃ": "B",
                    "Ɓ": "B",
                    "Ⓒ": "C",
                    "Ｃ": "C",
                    "Ć": "C",
                    "Ĉ": "C",
                    "Ċ": "C",
                    "Č": "C",
                    "Ç": "C",
                    "Ḉ": "C",
                    "Ƈ": "C",
                    "Ȼ": "C",
                    "Ꜿ": "C",
                    "Ⓓ": "D",
                    "Ｄ": "D",
                    "Ḋ": "D",
                    "Ď": "D",
                    "Ḍ": "D",
                    "Ḑ": "D",
                    "Ḓ": "D",
                    "Ḏ": "D",
                    "Đ": "D",
                    "Ƌ": "D",
                    "Ɗ": "D",
                    "Ɖ": "D",
                    "Ꝺ": "D",
                    "Ǳ": "DZ",
                    "Ǆ": "DZ",
                    "ǲ": "Dz",
                    "ǅ": "Dz",
                    "Ⓔ": "E",
                    "Ｅ": "E",
                    "È": "E",
                    "É": "E",
                    "Ê": "E",
                    "Ề": "E",
                    "Ế": "E",
                    "Ễ": "E",
                    "Ể": "E",
                    "Ẽ": "E",
                    "Ē": "E",
                    "Ḕ": "E",
                    "Ḗ": "E",
                    "Ĕ": "E",
                    "Ė": "E",
                    "Ë": "E",
                    "Ẻ": "E",
                    "Ě": "E",
                    "Ȅ": "E",
                    "Ȇ": "E",
                    "Ẹ": "E",
                    "Ệ": "E",
                    "Ȩ": "E",
                    "Ḝ": "E",
                    "Ę": "E",
                    "Ḙ": "E",
                    "Ḛ": "E",
                    "Ɛ": "E",
                    "Ǝ": "E",
                    "Ⓕ": "F",
                    "Ｆ": "F",
                    "Ḟ": "F",
                    "Ƒ": "F",
                    "Ꝼ": "F",
                    "Ⓖ": "G",
                    "Ｇ": "G",
                    "Ǵ": "G",
                    "Ĝ": "G",
                    "Ḡ": "G",
                    "Ğ": "G",
                    "Ġ": "G",
                    "Ǧ": "G",
                    "Ģ": "G",
                    "Ǥ": "G",
                    "Ɠ": "G",
                    "Ꞡ": "G",
                    "Ᵹ": "G",
                    "Ꝿ": "G",
                    "Ⓗ": "H",
                    "Ｈ": "H",
                    "Ĥ": "H",
                    "Ḣ": "H",
                    "Ḧ": "H",
                    "Ȟ": "H",
                    "Ḥ": "H",
                    "Ḩ": "H",
                    "Ḫ": "H",
                    "Ħ": "H",
                    "Ⱨ": "H",
                    "Ⱶ": "H",
                    "Ɥ": "H",
                    "Ⓘ": "I",
                    "Ｉ": "I",
                    "Ì": "I",
                    "Í": "I",
                    "Î": "I",
                    "Ĩ": "I",
                    "Ī": "I",
                    "Ĭ": "I",
                    "İ": "I",
                    "Ï": "I",
                    "Ḯ": "I",
                    "Ỉ": "I",
                    "Ǐ": "I",
                    "Ȉ": "I",
                    "Ȋ": "I",
                    "Ị": "I",
                    "Į": "I",
                    "Ḭ": "I",
                    "Ɨ": "I",
                    "Ⓙ": "J",
                    "Ｊ": "J",
                    "Ĵ": "J",
                    "Ɉ": "J",
                    "Ⓚ": "K",
                    "Ｋ": "K",
                    "Ḱ": "K",
                    "Ǩ": "K",
                    "Ḳ": "K",
                    "Ķ": "K",
                    "Ḵ": "K",
                    "Ƙ": "K",
                    "Ⱪ": "K",
                    "Ꝁ": "K",
                    "Ꝃ": "K",
                    "Ꝅ": "K",
                    "Ꞣ": "K",
                    "Ⓛ": "L",
                    "Ｌ": "L",
                    "Ŀ": "L",
                    "Ĺ": "L",
                    "Ľ": "L",
                    "Ḷ": "L",
                    "Ḹ": "L",
                    "Ļ": "L",
                    "Ḽ": "L",
                    "Ḻ": "L",
                    "Ł": "L",
                    "Ƚ": "L",
                    "Ɫ": "L",
                    "Ⱡ": "L",
                    "Ꝉ": "L",
                    "Ꝇ": "L",
                    "Ꞁ": "L",
                    "Ǉ": "LJ",
                    "ǈ": "Lj",
                    "Ⓜ": "M",
                    "Ｍ": "M",
                    "Ḿ": "M",
                    "Ṁ": "M",
                    "Ṃ": "M",
                    "Ɱ": "M",
                    "Ɯ": "M",
                    "Ⓝ": "N",
                    "Ｎ": "N",
                    "Ǹ": "N",
                    "Ń": "N",
                    "Ñ": "N",
                    "Ṅ": "N",
                    "Ň": "N",
                    "Ṇ": "N",
                    "Ņ": "N",
                    "Ṋ": "N",
                    "Ṉ": "N",
                    "Ƞ": "N",
                    "Ɲ": "N",
                    "Ꞑ": "N",
                    "Ꞥ": "N",
                    "Ǌ": "NJ",
                    "ǋ": "Nj",
                    "Ⓞ": "O",
                    "Ｏ": "O",
                    "Ò": "O",
                    "Ó": "O",
                    "Ô": "O",
                    "Ồ": "O",
                    "Ố": "O",
                    "Ỗ": "O",
                    "Ổ": "O",
                    "Õ": "O",
                    "Ṍ": "O",
                    "Ȭ": "O",
                    "Ṏ": "O",
                    "Ō": "O",
                    "Ṑ": "O",
                    "Ṓ": "O",
                    "Ŏ": "O",
                    "Ȯ": "O",
                    "Ȱ": "O",
                    "Ö": "O",
                    "Ȫ": "O",
                    "Ỏ": "O",
                    "Ő": "O",
                    "Ǒ": "O",
                    "Ȍ": "O",
                    "Ȏ": "O",
                    "Ơ": "O",
                    "Ờ": "O",
                    "Ớ": "O",
                    "Ỡ": "O",
                    "Ở": "O",
                    "Ợ": "O",
                    "Ọ": "O",
                    "Ộ": "O",
                    "Ǫ": "O",
                    "Ǭ": "O",
                    "Ø": "O",
                    "Ǿ": "O",
                    "Ɔ": "O",
                    "Ɵ": "O",
                    "Ꝋ": "O",
                    "Ꝍ": "O",
                    "Ƣ": "OI",
                    "Ꝏ": "OO",
                    "Ȣ": "OU",
                    "Ⓟ": "P",
                    "Ｐ": "P",
                    "Ṕ": "P",
                    "Ṗ": "P",
                    "Ƥ": "P",
                    "Ᵽ": "P",
                    "Ꝑ": "P",
                    "Ꝓ": "P",
                    "Ꝕ": "P",
                    "Ⓠ": "Q",
                    "Ｑ": "Q",
                    "Ꝗ": "Q",
                    "Ꝙ": "Q",
                    "Ɋ": "Q",
                    "Ⓡ": "R",
                    "Ｒ": "R",
                    "Ŕ": "R",
                    "Ṙ": "R",
                    "Ř": "R",
                    "Ȑ": "R",
                    "Ȓ": "R",
                    "Ṛ": "R",
                    "Ṝ": "R",
                    "Ŗ": "R",
                    "Ṟ": "R",
                    "Ɍ": "R",
                    "Ɽ": "R",
                    "Ꝛ": "R",
                    "Ꞧ": "R",
                    "Ꞃ": "R",
                    "Ⓢ": "S",
                    "Ｓ": "S",
                    "ẞ": "S",
                    "Ś": "S",
                    "Ṥ": "S",
                    "Ŝ": "S",
                    "Ṡ": "S",
                    "Š": "S",
                    "Ṧ": "S",
                    "Ṣ": "S",
                    "Ṩ": "S",
                    "Ș": "S",
                    "Ş": "S",
                    "Ȿ": "S",
                    "Ꞩ": "S",
                    "Ꞅ": "S",
                    "Ⓣ": "T",
                    "Ｔ": "T",
                    "Ṫ": "T",
                    "Ť": "T",
                    "Ṭ": "T",
                    "Ț": "T",
                    "Ţ": "T",
                    "Ṱ": "T",
                    "Ṯ": "T",
                    "Ŧ": "T",
                    "Ƭ": "T",
                    "Ʈ": "T",
                    "Ⱦ": "T",
                    "Ꞇ": "T",
                    "Ꜩ": "TZ",
                    "Ⓤ": "U",
                    "Ｕ": "U",
                    "Ù": "U",
                    "Ú": "U",
                    "Û": "U",
                    "Ũ": "U",
                    "Ṹ": "U",
                    "Ū": "U",
                    "Ṻ": "U",
                    "Ŭ": "U",
                    "Ü": "U",
                    "Ǜ": "U",
                    "Ǘ": "U",
                    "Ǖ": "U",
                    "Ǚ": "U",
                    "Ủ": "U",
                    "Ů": "U",
                    "Ű": "U",
                    "Ǔ": "U",
                    "Ȕ": "U",
                    "Ȗ": "U",
                    "Ư": "U",
                    "Ừ": "U",
                    "Ứ": "U",
                    "Ữ": "U",
                    "Ử": "U",
                    "Ự": "U",
                    "Ụ": "U",
                    "Ṳ": "U",
                    "Ų": "U",
                    "Ṷ": "U",
                    "Ṵ": "U",
                    "Ʉ": "U",
                    "Ⓥ": "V",
                    "Ｖ": "V",
                    "Ṽ": "V",
                    "Ṿ": "V",
                    "Ʋ": "V",
                    "Ꝟ": "V",
                    "Ʌ": "V",
                    "Ꝡ": "VY",
                    "Ⓦ": "W",
                    "Ｗ": "W",
                    "Ẁ": "W",
                    "Ẃ": "W",
                    "Ŵ": "W",
                    "Ẇ": "W",
                    "Ẅ": "W",
                    "Ẉ": "W",
                    "Ⱳ": "W",
                    "Ⓧ": "X",
                    "Ｘ": "X",
                    "Ẋ": "X",
                    "Ẍ": "X",
                    "Ⓨ": "Y",
                    "Ｙ": "Y",
                    "Ỳ": "Y",
                    "Ý": "Y",
                    "Ŷ": "Y",
                    "Ỹ": "Y",
                    "Ȳ": "Y",
                    "Ẏ": "Y",
                    "Ÿ": "Y",
                    "Ỷ": "Y",
                    "Ỵ": "Y",
                    "Ƴ": "Y",
                    "Ɏ": "Y",
                    "Ỿ": "Y",
                    "Ⓩ": "Z",
                    "Ｚ": "Z",
                    "Ź": "Z",
                    "Ẑ": "Z",
                    "Ż": "Z",
                    "Ž": "Z",
                    "Ẓ": "Z",
                    "Ẕ": "Z",
                    "Ƶ": "Z",
                    "Ȥ": "Z",
                    "Ɀ": "Z",
                    "Ⱬ": "Z",
                    "Ꝣ": "Z",
                    "ⓐ": "a",
                    "ａ": "a",
                    "ẚ": "a",
                    "à": "a",
                    "á": "a",
                    "â": "a",
                    "ầ": "a",
                    "ấ": "a",
                    "ẫ": "a",
                    "ẩ": "a",
                    "ã": "a",
                    "ā": "a",
                    "ă": "a",
                    "ằ": "a",
                    "ắ": "a",
                    "ẵ": "a",
                    "ẳ": "a",
                    "ȧ": "a",
                    "ǡ": "a",
                    "ä": "a",
                    "ǟ": "a",
                    "ả": "a",
                    "å": "a",
                    "ǻ": "a",
                    "ǎ": "a",
                    "ȁ": "a",
                    "ȃ": "a",
                    "ạ": "a",
                    "ậ": "a",
                    "ặ": "a",
                    "ḁ": "a",
                    "ą": "a",
                    "ⱥ": "a",
                    "ɐ": "a",
                    "ꜳ": "aa",
                    "æ": "ae",
                    "ǽ": "ae",
                    "ǣ": "ae",
                    "ꜵ": "ao",
                    "ꜷ": "au",
                    "ꜹ": "av",
                    "ꜻ": "av",
                    "ꜽ": "ay",
                    "ⓑ": "b",
                    "ｂ": "b",
                    "ḃ": "b",
                    "ḅ": "b",
                    "ḇ": "b",
                    "ƀ": "b",
                    "ƃ": "b",
                    "ɓ": "b",
                    "ⓒ": "c",
                    "ｃ": "c",
                    "ć": "c",
                    "ĉ": "c",
                    "ċ": "c",
                    "č": "c",
                    "ç": "c",
                    "ḉ": "c",
                    "ƈ": "c",
                    "ȼ": "c",
                    "ꜿ": "c",
                    "ↄ": "c",
                    "ⓓ": "d",
                    "ｄ": "d",
                    "ḋ": "d",
                    "ď": "d",
                    "ḍ": "d",
                    "ḑ": "d",
                    "ḓ": "d",
                    "ḏ": "d",
                    "đ": "d",
                    "ƌ": "d",
                    "ɖ": "d",
                    "ɗ": "d",
                    "ꝺ": "d",
                    "ǳ": "dz",
                    "ǆ": "dz",
                    "ⓔ": "e",
                    "ｅ": "e",
                    "è": "e",
                    "é": "e",
                    "ê": "e",
                    "ề": "e",
                    "ế": "e",
                    "ễ": "e",
                    "ể": "e",
                    "ẽ": "e",
                    "ē": "e",
                    "ḕ": "e",
                    "ḗ": "e",
                    "ĕ": "e",
                    "ė": "e",
                    "ë": "e",
                    "ẻ": "e",
                    "ě": "e",
                    "ȅ": "e",
                    "ȇ": "e",
                    "ẹ": "e",
                    "ệ": "e",
                    "ȩ": "e",
                    "ḝ": "e",
                    "ę": "e",
                    "ḙ": "e",
                    "ḛ": "e",
                    "ɇ": "e",
                    "ɛ": "e",
                    "ǝ": "e",
                    "ⓕ": "f",
                    "ｆ": "f",
                    "ḟ": "f",
                    "ƒ": "f",
                    "ꝼ": "f",
                    "ⓖ": "g",
                    "ｇ": "g",
                    "ǵ": "g",
                    "ĝ": "g",
                    "ḡ": "g",
                    "ğ": "g",
                    "ġ": "g",
                    "ǧ": "g",
                    "ģ": "g",
                    "ǥ": "g",
                    "ɠ": "g",
                    "ꞡ": "g",
                    "ᵹ": "g",
                    "ꝿ": "g",
                    "ⓗ": "h",
                    "ｈ": "h",
                    "ĥ": "h",
                    "ḣ": "h",
                    "ḧ": "h",
                    "ȟ": "h",
                    "ḥ": "h",
                    "ḩ": "h",
                    "ḫ": "h",
                    "ẖ": "h",
                    "ħ": "h",
                    "ⱨ": "h",
                    "ⱶ": "h",
                    "ɥ": "h",
                    "ƕ": "hv",
                    "ⓘ": "i",
                    "ｉ": "i",
                    "ì": "i",
                    "í": "i",
                    "î": "i",
                    "ĩ": "i",
                    "ī": "i",
                    "ĭ": "i",
                    "ï": "i",
                    "ḯ": "i",
                    "ỉ": "i",
                    "ǐ": "i",
                    "ȉ": "i",
                    "ȋ": "i",
                    "ị": "i",
                    "į": "i",
                    "ḭ": "i",
                    "ɨ": "i",
                    "ı": "i",
                    "ⓙ": "j",
                    "ｊ": "j",
                    "ĵ": "j",
                    "ǰ": "j",
                    "ɉ": "j",
                    "ⓚ": "k",
                    "ｋ": "k",
                    "ḱ": "k",
                    "ǩ": "k",
                    "ḳ": "k",
                    "ķ": "k",
                    "ḵ": "k",
                    "ƙ": "k",
                    "ⱪ": "k",
                    "ꝁ": "k",
                    "ꝃ": "k",
                    "ꝅ": "k",
                    "ꞣ": "k",
                    "ⓛ": "l",
                    "ｌ": "l",
                    "ŀ": "l",
                    "ĺ": "l",
                    "ľ": "l",
                    "ḷ": "l",
                    "ḹ": "l",
                    "ļ": "l",
                    "ḽ": "l",
                    "ḻ": "l",
                    "ſ": "l",
                    "ł": "l",
                    "ƚ": "l",
                    "ɫ": "l",
                    "ⱡ": "l",
                    "ꝉ": "l",
                    "ꞁ": "l",
                    "ꝇ": "l",
                    "ǉ": "lj",
                    "ⓜ": "m",
                    "ｍ": "m",
                    "ḿ": "m",
                    "ṁ": "m",
                    "ṃ": "m",
                    "ɱ": "m",
                    "ɯ": "m",
                    "ⓝ": "n",
                    "ｎ": "n",
                    "ǹ": "n",
                    "ń": "n",
                    "ñ": "n",
                    "ṅ": "n",
                    "ň": "n",
                    "ṇ": "n",
                    "ņ": "n",
                    "ṋ": "n",
                    "ṉ": "n",
                    "ƞ": "n",
                    "ɲ": "n",
                    "ŉ": "n",
                    "ꞑ": "n",
                    "ꞥ": "n",
                    "ǌ": "nj",
                    "ⓞ": "o",
                    "ｏ": "o",
                    "ò": "o",
                    "ó": "o",
                    "ô": "o",
                    "ồ": "o",
                    "ố": "o",
                    "ỗ": "o",
                    "ổ": "o",
                    "õ": "o",
                    "ṍ": "o",
                    "ȭ": "o",
                    "ṏ": "o",
                    "ō": "o",
                    "ṑ": "o",
                    "ṓ": "o",
                    "ŏ": "o",
                    "ȯ": "o",
                    "ȱ": "o",
                    "ö": "o",
                    "ȫ": "o",
                    "ỏ": "o",
                    "ő": "o",
                    "ǒ": "o",
                    "ȍ": "o",
                    "ȏ": "o",
                    "ơ": "o",
                    "ờ": "o",
                    "ớ": "o",
                    "ỡ": "o",
                    "ở": "o",
                    "ợ": "o",
                    "ọ": "o",
                    "ộ": "o",
                    "ǫ": "o",
                    "ǭ": "o",
                    "ø": "o",
                    "ǿ": "o",
                    "ɔ": "o",
                    "ꝋ": "o",
                    "ꝍ": "o",
                    "ɵ": "o",
                    "ƣ": "oi",
                    "ȣ": "ou",
                    "ꝏ": "oo",
                    "ⓟ": "p",
                    "ｐ": "p",
                    "ṕ": "p",
                    "ṗ": "p",
                    "ƥ": "p",
                    "ᵽ": "p",
                    "ꝑ": "p",
                    "ꝓ": "p",
                    "ꝕ": "p",
                    "ⓠ": "q",
                    "ｑ": "q",
                    "ɋ": "q",
                    "ꝗ": "q",
                    "ꝙ": "q",
                    "ⓡ": "r",
                    "ｒ": "r",
                    "ŕ": "r",
                    "ṙ": "r",
                    "ř": "r",
                    "ȑ": "r",
                    "ȓ": "r",
                    "ṛ": "r",
                    "ṝ": "r",
                    "ŗ": "r",
                    "ṟ": "r",
                    "ɍ": "r",
                    "ɽ": "r",
                    "ꝛ": "r",
                    "ꞧ": "r",
                    "ꞃ": "r",
                    "ⓢ": "s",
                    "ｓ": "s",
                    "ß": "s",
                    "ś": "s",
                    "ṥ": "s",
                    "ŝ": "s",
                    "ṡ": "s",
                    "š": "s",
                    "ṧ": "s",
                    "ṣ": "s",
                    "ṩ": "s",
                    "ș": "s",
                    "ş": "s",
                    "ȿ": "s",
                    "ꞩ": "s",
                    "ꞅ": "s",
                    "ẛ": "s",
                    "ⓣ": "t",
                    "ｔ": "t",
                    "ṫ": "t",
                    "ẗ": "t",
                    "ť": "t",
                    "ṭ": "t",
                    "ț": "t",
                    "ţ": "t",
                    "ṱ": "t",
                    "ṯ": "t",
                    "ŧ": "t",
                    "ƭ": "t",
                    "ʈ": "t",
                    "ⱦ": "t",
                    "ꞇ": "t",
                    "ꜩ": "tz",
                    "ⓤ": "u",
                    "ｕ": "u",
                    "ù": "u",
                    "ú": "u",
                    "û": "u",
                    "ũ": "u",
                    "ṹ": "u",
                    "ū": "u",
                    "ṻ": "u",
                    "ŭ": "u",
                    "ü": "u",
                    "ǜ": "u",
                    "ǘ": "u",
                    "ǖ": "u",
                    "ǚ": "u",
                    "ủ": "u",
                    "ů": "u",
                    "ű": "u",
                    "ǔ": "u",
                    "ȕ": "u",
                    "ȗ": "u",
                    "ư": "u",
                    "ừ": "u",
                    "ứ": "u",
                    "ữ": "u",
                    "ử": "u",
                    "ự": "u",
                    "ụ": "u",
                    "ṳ": "u",
                    "ų": "u",
                    "ṷ": "u",
                    "ṵ": "u",
                    "ʉ": "u",
                    "ⓥ": "v",
                    "ｖ": "v",
                    "ṽ": "v",
                    "ṿ": "v",
                    "ʋ": "v",
                    "ꝟ": "v",
                    "ʌ": "v",
                    "ꝡ": "vy",
                    "ⓦ": "w",
                    "ｗ": "w",
                    "ẁ": "w",
                    "ẃ": "w",
                    "ŵ": "w",
                    "ẇ": "w",
                    "ẅ": "w",
                    "ẘ": "w",
                    "ẉ": "w",
                    "ⱳ": "w",
                    "ⓧ": "x",
                    "ｘ": "x",
                    "ẋ": "x",
                    "ẍ": "x",
                    "ⓨ": "y",
                    "ｙ": "y",
                    "ỳ": "y",
                    "ý": "y",
                    "ŷ": "y",
                    "ỹ": "y",
                    "ȳ": "y",
                    "ẏ": "y",
                    "ÿ": "y",
                    "ỷ": "y",
                    "ẙ": "y",
                    "ỵ": "y",
                    "ƴ": "y",
                    "ɏ": "y",
                    "ỿ": "y",
                    "ⓩ": "z",
                    "ｚ": "z",
                    "ź": "z",
                    "ẑ": "z",
                    "ż": "z",
                    "ž": "z",
                    "ẓ": "z",
                    "ẕ": "z",
                    "ƶ": "z",
                    "ȥ": "z",
                    "ɀ": "z",
                    "ⱬ": "z",
                    "ꝣ": "z",
                    "Ά": "Α",
                    "Έ": "Ε",
                    "Ή": "Η",
                    "Ί": "Ι",
                    "Ϊ": "Ι",
                    "Ό": "Ο",
                    "Ύ": "Υ",
                    "Ϋ": "Υ",
                    "Ώ": "Ω",
                    "ά": "α",
                    "έ": "ε",
                    "ή": "η",
                    "ί": "ι",
                    "ϊ": "ι",
                    "ΐ": "ι",
                    "ό": "ο",
                    "ύ": "υ",
                    "ϋ": "υ",
                    "ΰ": "υ",
                    "ω": "ω",
                    "ς": "σ"
                }
            }), e.define("select2/data/base", ["../utils"], function(i) {
                function n(e, t) {
                    n.__super__.constructor.call(this)
                }
                return i.Extend(n, i.Observable), n.prototype.current = function(e) {
                    throw new Error("The `current` method must be defined in child classes.")
                }, n.prototype.query = function(e, t) {
                    throw new Error("The `query` method must be defined in child classes.")
                }, n.prototype.bind = function(e, t) {}, n.prototype.destroy = function() {}, n.prototype.generateResultId = function(e, t) {
                    var n = e.id + "-result-";
                    return n += i.generateChars(4), null != t.id ? n += "-" + t.id.toString() : n += "-" + i.generateChars(4), n
                }, n
            }), e.define("select2/data/select", ["./base", "../utils", "jquery"], function(e, t, a) {
                function n(e, t) {
                    this.$element = e, this.options = t, n.__super__.constructor.call(this)
                }
                return t.Extend(n, e), n.prototype.current = function(e) {
                    var n = [],
                        i = this;
                    this.$element.find(":selected").each(function() {
                        var e = a(this),
                            t = i.item(e);
                        n.push(t)
                    }), e(n)
                }, n.prototype.select = function(r) {
                    var s = this;
                    if (r.selected = !0, a(r.element).is("option")) return r.element.selected = !0, void this.$element.trigger("change");
                    if (this.$element.prop("multiple")) this.current(function(e) {
                        var t = [];
                        (r = [r]).push.apply(r, e);
                        for (var n = 0; n < r.length; n++) {
                            var i = r[n].id; - 1 === a.inArray(i, t) && t.push(i)
                        }
                        s.$element.val(t), s.$element.trigger("change")
                    });
                    else {
                        var e = r.id;
                        this.$element.val(e), this.$element.trigger("change")
                    }
                }, n.prototype.unselect = function(r) {
                    var s = this;
                    if (this.$element.prop("multiple")) {
                        if (r.selected = !1, a(r.element).is("option")) return r.element.selected = !1, void this.$element.trigger("change");
                        this.current(function(e) {
                            for (var t = [], n = 0; n < e.length; n++) {
                                var i = e[n].id;
                                i !== r.id && -1 === a.inArray(i, t) && t.push(i)
                            }
                            s.$element.val(t), s.$element.trigger("change")
                        })
                    }
                }, n.prototype.bind = function(e, t) {
                    var n = this;
                    (this.container = e).on("select", function(e) {
                        n.select(e.data)
                    }), e.on("unselect", function(e) {
                        n.unselect(e.data)
                    })
                }, n.prototype.destroy = function() {
                    this.$element.find("*").each(function() {
                        a.removeData(this, "data")
                    })
                }, n.prototype.query = function(i, e) {
                    var r = [],
                        s = this;
                    this.$element.children().each(function() {
                        var e = a(this);
                        if (e.is("option") || e.is("optgroup")) {
                            var t = s.item(e),
                                n = s.matches(i, t);
                            null !== n && r.push(n)
                        }
                    }), e({
                        results: r
                    })
                }, n.prototype.addOptions = function(e) {
                    t.appendMany(this.$element, e)
                }, n.prototype.option = function(e) {
                    var t;
                    e.children ? (t = document.createElement("optgroup")).label = e.text : void 0 !== (t = document.createElement("option")).textContent ? t.textContent = e.text : t.innerText = e.text, void 0 !== e.id && (t.value = e.id), e.disabled && (t.disabled = !0), e.selected && (t.selected = !0), e.title && (t.title = e.title);
                    var n = a(t),
                        i = this._normalizeItem(e);
                    return i.element = t, a.data(t, "data", i), n
                }, n.prototype.item = function(e) {
                    var t = {};
                    if (null != (t = a.data(e[0], "data"))) return t;
                    if (e.is("option")) t = {
                        id: e.val(),
                        text: e.text(),
                        disabled: e.prop("disabled"),
                        selected: e.prop("selected"),
                        title: e.prop("title")
                    };
                    else if (e.is("optgroup")) {
                        t = {
                            text: e.prop("label"),
                            children: [],
                            title: e.prop("title")
                        };
                        for (var n = e.children("option"), i = [], r = 0; r < n.length; r++) {
                            var s = a(n[r]),
                                o = this.item(s);
                            i.push(o)
                        }
                        t.children = i
                    }
                    return (t = this._normalizeItem(t)).element = e[0], a.data(e[0], "data", t), t
                }, n.prototype._normalizeItem = function(e) {
                    a.isPlainObject(e) || (e = {
                        id: e,
                        text: e
                    });
                    return null != (e = a.extend({}, {
                        text: ""
                    }, e)).id && (e.id = e.id.toString()), null != e.text && (e.text = e.text.toString()), null == e._resultId && e.id && null != this.container && (e._resultId = this.generateResultId(this.container, e)), a.extend({}, {
                        selected: !1,
                        disabled: !1
                    }, e)
                }, n.prototype.matches = function(e, t) {
                    return this.options.get("matcher")(e, t)
                }, n
            }), e.define("select2/data/array", ["./select", "../utils", "jquery"], function(e, f, g) {
                function i(e, t) {
                    var n = t.get("data") || [];
                    i.__super__.constructor.call(this, e, t), this.addOptions(this.convertToOptions(n))
                }
                return f.Extend(i, e), i.prototype.select = function(n) {
                    var e = this.$element.find("option").filter(function(e, t) {
                        return t.value == n.id.toString()
                    });
                    0 === e.length && (e = this.option(n), this.addOptions(e)), i.__super__.select.call(this, n)
                }, i.prototype.convertToOptions = function(e) {
                    function t(e) {
                        return function() {
                            return g(this).val() == e.id
                        }
                    }
                    for (var n = this, i = this.$element.find("option"), r = i.map(function() {
                            return n.item(g(this)).id
                        }).get(), s = [], o = 0; o < e.length; o++) {
                        var a = this._normalizeItem(e[o]);
                        if (0 <= g.inArray(a.id, r)) {
                            var l = i.filter(t(a)),
                                u = this.item(l),
                                c = g.extend(!0, {}, a, u),
                                d = this.option(c);
                            l.replaceWith(d)
                        } else {
                            var h = this.option(a);
                            if (a.children) {
                                var p = this.convertToOptions(a.children);
                                f.appendMany(h, p)
                            }
                            s.push(h)
                        }
                    }
                    return s
                }, i
            }), e.define("select2/data/ajax", ["./array", "../utils", "jquery"], function(e, t, s) {
                function n(e, t) {
                    this.ajaxOptions = this._applyDefaults(t.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), n.__super__.constructor.call(this, e, t)
                }
                return t.Extend(n, e), n.prototype._applyDefaults = function(e) {
                    var t = {
                        data: function(e) {
                            return s.extend({}, e, {
                                q: e.term
                            })
                        },
                        transport: function(e, t, n) {
                            var i = s.ajax(e);
                            return i.then(t), i.fail(n), i
                        }
                    };
                    return s.extend({}, t, e, !0)
                }, n.prototype.processResults = function(e) {
                    return e
                }, n.prototype.query = function(n, i) {
                    function e() {
                        var e = t.transport(t, function(e) {
                            var t = r.processResults(e, n);
                            r.options.get("debug") && window.console && console.error && (t && t.results && s.isArray(t.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), i(t)
                        }, function() {
                            e.status && "0" === e.status || r.trigger("results:message", {
                                message: "errorLoading"
                            })
                        });
                        r._request = e
                    }
                    var r = this;
                    null != this._request && (s.isFunction(this._request.abort) && this._request.abort(), this._request = null);
                    var t = s.extend({
                        type: "GET"
                    }, this.ajaxOptions);
                    "function" == typeof t.url && (t.url = t.url.call(this.$element, n)), "function" == typeof t.data && (t.data = t.data.call(this.$element, n)), this.ajaxOptions.delay && null != n.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(e, this.ajaxOptions.delay)) : e()
                }, n
            }), e.define("select2/data/tags", ["jquery"], function(c) {
                function e(e, t, n) {
                    var i = n.get("tags"),
                        r = n.get("createTag");
                    void 0 !== r && (this.createTag = r);
                    var s = n.get("insertTag");
                    if (void 0 !== s && (this.insertTag = s), e.call(this, t, n), c.isArray(i))
                        for (var o = 0; o < i.length; o++) {
                            var a = i[o],
                                l = this._normalizeItem(a),
                                u = this.option(l);
                            this.$element.append(u)
                        }
                }
                return e.prototype.query = function(e, u, c) {
                    var d = this;
                    this._removeOldTags(), null != u.term && null == u.page ? e.call(this, u, function e(t, n) {
                        for (var i = t.results, r = 0; r < i.length; r++) {
                            var s = i[r],
                                o = null != s.children && !e({
                                    results: s.children
                                }, !0);
                            if ((s.text || "").toUpperCase() === (u.term || "").toUpperCase() || o) return !n && (t.data = i, void c(t))
                        }
                        if (n) return !0;
                        var a = d.createTag(u);
                        if (null != a) {
                            var l = d.option(a);
                            l.attr("data-select2-tag", !0), d.addOptions([l]), d.insertTag(i, a)
                        }
                        t.results = i, c(t)
                    }) : e.call(this, u, c)
                }, e.prototype.createTag = function(e, t) {
                    var n = c.trim(t.term);
                    return "" === n ? null : {
                        id: n,
                        text: n
                    }
                }, e.prototype.insertTag = function(e, t, n) {
                    t.unshift(n)
                }, e.prototype._removeOldTags = function(e) {
                    this._lastTag, this.$element.find("option[data-select2-tag]").each(function() {
                        this.selected || c(this).remove()
                    })
                }, e
            }), e.define("select2/data/tokenizer", ["jquery"], function(d) {
                function e(e, t, n) {
                    var i = n.get("tokenizer");
                    void 0 !== i && (this.tokenizer = i), e.call(this, t, n)
                }
                return e.prototype.bind = function(e, t, n) {
                    e.call(this, t, n), this.$search = t.dropdown.$search || t.selection.$search || n.find(".select2-search__field")
                }, e.prototype.query = function(e, t, n) {
                    var i = this;
                    t.term = t.term || "";
                    var r = this.tokenizer(t, this.options, function(e) {
                        var t = i._normalizeItem(e);
                        if (!i.$element.find("option").filter(function() {
                                return d(this).val() === t.id
                            }).length) {
                            var n = i.option(t);
                            n.attr("data-select2-tag", !0), i._removeOldTags(), i.addOptions([n])
                        }! function(e) {
                            i.trigger("select", {
                                data: e
                            })
                        }(t)
                    });
                    r.term !== t.term && (this.$search.length && (this.$search.val(r.term), this.$search.focus()), t.term = r.term), e.call(this, t, n)
                }, e.prototype.tokenizer = function(e, t, n, i) {
                    for (var r = n.get("tokenSeparators") || [], s = t.term, o = 0, a = this.createTag || function(e) {
                            return {
                                id: e.term,
                                text: e.term
                            }
                        }; o < s.length;) {
                        var l = s[o];
                        if (-1 !== d.inArray(l, r)) {
                            var u = s.substr(0, o),
                                c = a(d.extend({}, t, {
                                    term: u
                                }));
                            null != c ? (i(c), s = s.substr(o + 1) || "", o = 0) : o++
                        } else o++
                    }
                    return {
                        term: s
                    }
                }, e
            }), e.define("select2/data/minimumInputLength", [], function() {
                function e(e, t, n) {
                    this.minimumInputLength = n.get("minimumInputLength"), e.call(this, t, n)
                }
                return e.prototype.query = function(e, t, n) {
                    t.term = t.term || "", t.term.length < this.minimumInputLength ? this.trigger("results:message", {
                        message: "inputTooShort",
                        args: {
                            minimum: this.minimumInputLength,
                            input: t.term,
                            params: t
                        }
                    }) : e.call(this, t, n)
                }, e
            }), e.define("select2/data/maximumInputLength", [], function() {
                function e(e, t, n) {
                    this.maximumInputLength = n.get("maximumInputLength"), e.call(this, t, n)
                }
                return e.prototype.query = function(e, t, n) {
                    t.term = t.term || "", 0 < this.maximumInputLength && t.term.length > this.maximumInputLength ? this.trigger("results:message", {
                        message: "inputTooLong",
                        args: {
                            maximum: this.maximumInputLength,
                            input: t.term,
                            params: t
                        }
                    }) : e.call(this, t, n)
                }, e
            }), e.define("select2/data/maximumSelectionLength", [], function() {
                function e(e, t, n) {
                    this.maximumSelectionLength = n.get("maximumSelectionLength"), e.call(this, t, n)
                }
                return e.prototype.query = function(n, i, r) {
                    var s = this;
                    this.current(function(e) {
                        var t = null != e ? e.length : 0;
                        0 < s.maximumSelectionLength && t >= s.maximumSelectionLength ? s.trigger("results:message", {
                            message: "maximumSelected",
                            args: {
                                maximum: s.maximumSelectionLength
                            }
                        }) : n.call(s, i, r)
                    })
                }, e
            }), e.define("select2/dropdown", ["jquery", "./utils"], function(t, e) {
                function n(e, t) {
                    this.$element = e, this.options = t, n.__super__.constructor.call(this)
                }
                return e.Extend(n, e.Observable), n.prototype.render = function() {
                    var e = t('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                    return e.attr("dir", this.options.get("dir")), this.$dropdown = e
                }, n.prototype.bind = function() {}, n.prototype.position = function(e, t) {}, n.prototype.destroy = function() {
                    this.$dropdown.remove()
                }, n
            }), e.define("select2/dropdown/search", ["jquery", "../utils"], function(r, e) {
                function t() {}
                return t.prototype.render = function(e) {
                    var t = e.call(this),
                        n = r('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" /></span>');
                    return this.$searchContainer = n, this.$search = n.find("input"), t.prepend(n), t
                }, t.prototype.bind = function(e, t, n) {
                    var i = this;
                    e.call(this, t, n), this.$search.on("keydown", function(e) {
                        i.trigger("keypress", e), i._keyUpPrevented = e.isDefaultPrevented()
                    }), this.$search.on("input", function(e) {
                        r(this).off("keyup")
                    }), this.$search.on("keyup input", function(e) {
                        i.handleSearch(e)
                    }), t.on("open", function() {
                        i.$search.attr("tabindex", 0), i.$search.focus(), window.setTimeout(function() {
                            i.$search.focus()
                        }, 0)
                    }), t.on("close", function() {
                        i.$search.attr("tabindex", -1), i.$search.val("")
                    }), t.on("focus", function() {
                        t.isOpen() || i.$search.focus()
                    }), t.on("results:all", function(e) {
                        null != e.query.term && "" !== e.query.term || (i.showSearch(e) ? i.$searchContainer.removeClass("select2-search--hide") : i.$searchContainer.addClass("select2-search--hide"))
                    })
                }, t.prototype.handleSearch = function(e) {
                    if (!this._keyUpPrevented) {
                        var t = this.$search.val();
                        this.trigger("query", {
                            term: t
                        })
                    }
                    this._keyUpPrevented = !1
                }, t.prototype.showSearch = function(e, t) {
                    return !0
                }, t
            }), e.define("select2/dropdown/hidePlaceholder", [], function() {
                function e(e, t, n, i) {
                    this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n, i)
                }
                return e.prototype.append = function(e, t) {
                    t.results = this.removePlaceholder(t.results), e.call(this, t)
                }, e.prototype.normalizePlaceholder = function(e, t) {
                    return "string" == typeof t && (t = {
                        id: "",
                        text: t
                    }), t
                }, e.prototype.removePlaceholder = function(e, t) {
                    for (var n = t.slice(0), i = t.length - 1; 0 <= i; i--) {
                        var r = t[i];
                        this.placeholder.id === r.id && n.splice(i, 1)
                    }
                    return n
                }, e
            }), e.define("select2/dropdown/infiniteScroll", ["jquery"], function(r) {
                function e(e, t, n, i) {
                    this.lastParams = {}, e.call(this, t, n, i), this.$loadingMore = this.createLoadingMore(), this.loading = !1
                }
                return e.prototype.append = function(e, t) {
                    this.$loadingMore.remove(), this.loading = !1, e.call(this, t), this.showLoadingMore(t) && this.$results.append(this.$loadingMore)
                }, e.prototype.bind = function(e, t, n) {
                    var i = this;
                    e.call(this, t, n), t.on("query", function(e) {
                        i.lastParams = e, i.loading = !0
                    }), t.on("query:append", function(e) {
                        i.lastParams = e, i.loading = !0
                    }), this.$results.on("scroll", function() {
                        var e = r.contains(document.documentElement, i.$loadingMore[0]);
                        !i.loading && e && i.$results.offset().top + i.$results.outerHeight(!1) + 50 >= i.$loadingMore.offset().top + i.$loadingMore.outerHeight(!1) && i.loadMore()
                    })
                }, e.prototype.loadMore = function() {
                    this.loading = !0;
                    var e = r.extend({}, {
                        page: 1
                    }, this.lastParams);
                    e.page++, this.trigger("query:append", e)
                }, e.prototype.showLoadingMore = function(e, t) {
                    return t.pagination && t.pagination.more
                }, e.prototype.createLoadingMore = function() {
                    var e = r('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),
                        t = this.options.get("translations").get("loadingMore");
                    return e.html(t(this.lastParams)), e
                }, e
            }), e.define("select2/dropdown/attachBody", ["jquery", "../utils"], function(f, a) {
                function e(e, t, n) {
                    this.$dropdownParent = n.get("dropdownParent") || f(document.body), e.call(this, t, n)
                }
                return e.prototype.bind = function(e, t, n) {
                    var i = this,
                        r = !1;
                    e.call(this, t, n), t.on("open", function() {
                        i._showDropdown(), i._attachPositioningHandler(t), r || (r = !0, t.on("results:all", function() {
                            i._positionDropdown(), i._resizeDropdown()
                        }), t.on("results:append", function() {
                            i._positionDropdown(), i._resizeDropdown()
                        }))
                    }), t.on("close", function() {
                        i._hideDropdown(), i._detachPositioningHandler(t)
                    }), this.$dropdownContainer.on("mousedown", function(e) {
                        e.stopPropagation()
                    })
                }, e.prototype.destroy = function(e) {
                    e.call(this), this.$dropdownContainer.remove()
                }, e.prototype.position = function(e, t, n) {
                    t.attr("class", n.attr("class")), t.removeClass("select2"), t.addClass("select2-container--open"), t.css({
                        position: "absolute",
                        top: -999999
                    }), this.$container = n
                }, e.prototype.render = function(e) {
                    var t = f("<span></span>"),
                        n = e.call(this);
                    return t.append(n), this.$dropdownContainer = t
                }, e.prototype._hideDropdown = function(e) {
                    this.$dropdownContainer.detach()
                }, e.prototype._attachPositioningHandler = function(e, t) {
                    var n = this,
                        i = "scroll.select2." + t.id,
                        r = "resize.select2." + t.id,
                        s = "orientationchange.select2." + t.id,
                        o = this.$container.parents().filter(a.hasScroll);
                    o.each(function() {
                        f(this).data("select2-scroll-position", {
                            x: f(this).scrollLeft(),
                            y: f(this).scrollTop()
                        })
                    }), o.on(i, function(e) {
                        var t = f(this).data("select2-scroll-position");
                        f(this).scrollTop(t.y)
                    }), f(window).on(i + " " + r + " " + s, function(e) {
                        n._positionDropdown(), n._resizeDropdown()
                    })
                }, e.prototype._detachPositioningHandler = function(e, t) {
                    var n = "scroll.select2." + t.id,
                        i = "resize.select2." + t.id,
                        r = "orientationchange.select2." + t.id;
                    this.$container.parents().filter(a.hasScroll).off(n), f(window).off(n + " " + i + " " + r)
                }, e.prototype._positionDropdown = function() {
                    var e = f(window),
                        t = this.$dropdown.hasClass("select2-dropdown--above"),
                        n = this.$dropdown.hasClass("select2-dropdown--below"),
                        i = null,
                        r = this.$container.offset();
                    r.bottom = r.top + this.$container.outerHeight(!1);
                    var s = {
                        height: this.$container.outerHeight(!1)
                    };
                    s.top = r.top, s.bottom = r.top + s.height;
                    var o = this.$dropdown.outerHeight(!1),
                        a = e.scrollTop(),
                        l = e.scrollTop() + e.height(),
                        u = a < r.top - o,
                        c = l > r.bottom + o,
                        d = {
                            left: r.left,
                            top: s.bottom
                        },
                        h = this.$dropdownParent;
                    "static" === h.css("position") && (h = h.offsetParent());
                    var p = h.offset();
                    d.top -= p.top, d.left -= p.left, t || n || (i = "below"), c || !u || t ? !u && c && t && (i = "below") : i = "above", ("above" == i || t && "below" !== i) && (d.top = s.top - p.top - o), null != i && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + i), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + i)), this.$dropdownContainer.css(d)
                }, e.prototype._resizeDropdown = function() {
                    var e = {
                        width: this.$container.outerWidth(!1) + "px"
                    };
                    this.options.get("dropdownAutoWidth") && (e.minWidth = e.width, e.position = "relative", e.width = "auto"), this.$dropdown.css(e)
                }, e.prototype._showDropdown = function(e) {
                    this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown()
                }, e
            }), e.define("select2/dropdown/minimumResultsForSearch", [], function() {
                function e(e, t, n, i) {
                    this.minimumResultsForSearch = n.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), e.call(this, t, n, i)
                }
                return e.prototype.showSearch = function(e, t) {
                    return !(function e(t) {
                        for (var n = 0, i = 0; i < t.length; i++) {
                            var r = t[i];
                            r.children ? n += e(r.children) : n++
                        }
                        return n
                    }(t.data.results) < this.minimumResultsForSearch) && e.call(this, t)
                }, e
            }), e.define("select2/dropdown/selectOnClose", [], function() {
                function e() {}
                return e.prototype.bind = function(e, t, n) {
                    var i = this;
                    e.call(this, t, n), t.on("close", function(e) {
                        i._handleSelectOnClose(e)
                    })
                }, e.prototype._handleSelectOnClose = function(e, t) {
                    if (t && null != t.originalSelect2Event) {
                        var n = t.originalSelect2Event;
                        if ("select" === n._type || "unselect" === n._type) return
                    }
                    var i = this.getHighlightedResults();
                    if (!(i.length < 1)) {
                        var r = i.data("data");
                        null != r.element && r.element.selected || null == r.element && r.selected || this.trigger("select", {
                            data: r
                        })
                    }
                }, e
            }), e.define("select2/dropdown/closeOnSelect", [], function() {
                function e() {}
                return e.prototype.bind = function(e, t, n) {
                    var i = this;
                    e.call(this, t, n), t.on("select", function(e) {
                        i._selectTriggered(e)
                    }), t.on("unselect", function(e) {
                        i._selectTriggered(e)
                    })
                }, e.prototype._selectTriggered = function(e, t) {
                    var n = t.originalEvent;
                    n && n.ctrlKey || this.trigger("close", {
                        originalEvent: n,
                        originalSelect2Event: t
                    })
                }, e
            }), e.define("select2/i18n/en", [], function() {
                return {
                    errorLoading: function() {
                        return "The results could not be loaded."
                    },
                    inputTooLong: function(e) {
                        var t = e.input.length - e.maximum,
                            n = "Please delete " + t + " character";
                        return 1 != t && (n += "s"), n
                    },
                    inputTooShort: function(e) {
                        return "Please enter " + (e.minimum - e.input.length) + " or more characters"
                    },
                    loadingMore: function() {
                        return "Loading more results…"
                    },
                    maximumSelected: function(e) {
                        var t = "You can only select " + e.maximum + " item";
                        return 1 != e.maximum && (t += "s"), t
                    },
                    noResults: function() {
                        return "No results found"
                    },
                    searching: function() {
                        return "Searching…"
                    }
                }
            }), e.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function(f, g, m, v, y, w, _, b, x, C, T, t, $, E, S, A, k, L, D, j, q, N, O, I, P, M, z, R, e) {
                function n() {
                    this.reset()
                }
                return n.prototype.apply = function(t) {
                    if (null == (t = f.extend(!0, {}, this.defaults, t)).dataAdapter) {
                        if (null != t.ajax ? t.dataAdapter = S : null != t.data ? t.dataAdapter = E : t.dataAdapter = $, 0 < t.minimumInputLength && (t.dataAdapter = C.Decorate(t.dataAdapter, L)), 0 < t.maximumInputLength && (t.dataAdapter = C.Decorate(t.dataAdapter, D)), 0 < t.maximumSelectionLength && (t.dataAdapter = C.Decorate(t.dataAdapter, j)), t.tags && (t.dataAdapter = C.Decorate(t.dataAdapter, A)), null == t.tokenSeparators && null == t.tokenizer || (t.dataAdapter = C.Decorate(t.dataAdapter, k)), null != t.query) {
                            var e = g(t.amdBase + "compat/query");
                            t.dataAdapter = C.Decorate(t.dataAdapter, e)
                        }
                        if (null != t.initSelection) {
                            var n = g(t.amdBase + "compat/initSelection");
                            t.dataAdapter = C.Decorate(t.dataAdapter, n)
                        }
                    }
                    if (null == t.resultsAdapter && (t.resultsAdapter = m, null != t.ajax && (t.resultsAdapter = C.Decorate(t.resultsAdapter, I)), null != t.placeholder && (t.resultsAdapter = C.Decorate(t.resultsAdapter, O)), t.selectOnClose && (t.resultsAdapter = C.Decorate(t.resultsAdapter, z))), null == t.dropdownAdapter) {
                        if (t.multiple) t.dropdownAdapter = q;
                        else {
                            var i = C.Decorate(q, N);
                            t.dropdownAdapter = i
                        }
                        if (0 !== t.minimumResultsForSearch && (t.dropdownAdapter = C.Decorate(t.dropdownAdapter, M)), t.closeOnSelect && (t.dropdownAdapter = C.Decorate(t.dropdownAdapter, R)), null != t.dropdownCssClass || null != t.dropdownCss || null != t.adaptDropdownCssClass) {
                            var r = g(t.amdBase + "compat/dropdownCss");
                            t.dropdownAdapter = C.Decorate(t.dropdownAdapter, r)
                        }
                        t.dropdownAdapter = C.Decorate(t.dropdownAdapter, P)
                    }
                    if (null == t.selectionAdapter) {
                        if (t.multiple ? t.selectionAdapter = y : t.selectionAdapter = v, null != t.placeholder && (t.selectionAdapter = C.Decorate(t.selectionAdapter, w)), t.allowClear && (t.selectionAdapter = C.Decorate(t.selectionAdapter, _)), t.multiple && (t.selectionAdapter = C.Decorate(t.selectionAdapter, b)), null != t.containerCssClass || null != t.containerCss || null != t.adaptContainerCssClass) {
                            var s = g(t.amdBase + "compat/containerCss");
                            t.selectionAdapter = C.Decorate(t.selectionAdapter, s)
                        }
                        t.selectionAdapter = C.Decorate(t.selectionAdapter, x)
                    }
                    if ("string" == typeof t.language)
                        if (0 < t.language.indexOf("-")) {
                            var o = t.language.split("-")[0];
                            t.language = [t.language, o]
                        } else t.language = [t.language];
                    if (f.isArray(t.language)) {
                        var a = new T;
                        t.language.push("en");
                        for (var l = t.language, u = 0; u < l.length; u++) {
                            var c = l[u],
                                d = {};
                            try {
                                d = T.loadPath(c)
                            } catch (e) {
                                try {
                                    c = this.defaults.amdLanguageBase + c, d = T.loadPath(c)
                                } catch (e) {
                                    t.debug && window.console && console.warn && console.warn('Select2: The language file for "' + c + '" could not be automatically loaded. A fallback will be used instead.');
                                    continue
                                }
                            }
                            a.extend(d)
                        }
                        t.translations = a
                    } else {
                        var h = T.loadPath(this.defaults.amdLanguageBase + "en"),
                            p = new T(t.language);
                        p.extend(h), t.translations = p
                    }
                    return t
                }, n.prototype.reset = function() {
                    function a(e) {
                        return e.replace(/[^\u0000-\u007E]/g, function(e) {
                            return t[e] || e
                        })
                    }
                    this.defaults = {
                        amdBase: "./",
                        amdLanguageBase: "./i18n/",
                        closeOnSelect: !0,
                        debug: !1,
                        dropdownAutoWidth: !1,
                        escapeMarkup: C.escapeMarkup,
                        language: e,
                        matcher: function e(t, n) {
                            if ("" === f.trim(t.term)) return n;
                            if (n.children && 0 < n.children.length) {
                                for (var i = f.extend(!0, {}, n), r = n.children.length - 1; 0 <= r; r--) null == e(t, n.children[r]) && i.children.splice(r, 1);
                                return 0 < i.children.length ? i : e(t, i)
                            }
                            var s = a(n.text).toUpperCase(),
                                o = a(t.term).toUpperCase();
                            return -1 < s.indexOf(o) ? n : null
                        },
                        minimumInputLength: 0,
                        maximumInputLength: 0,
                        maximumSelectionLength: 0,
                        minimumResultsForSearch: 0,
                        selectOnClose: !1,
                        sorter: function(e) {
                            return e
                        },
                        templateResult: function(e) {
                            return e.text
                        },
                        templateSelection: function(e) {
                            return e.text
                        },
                        theme: "default",
                        width: "resolve"
                    }
                }, n.prototype.set = function(e, t) {
                    var n = {};
                    n[f.camelCase(e)] = t;
                    var i = C._convertData(n);
                    f.extend(this.defaults, i)
                }, new n
            }), e.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function(i, s, r, o) {
                function e(e, t) {
                    if (this.options = e, null != t && this.fromElement(t), this.options = r.apply(this.options), t && t.is("input")) {
                        var n = i(this.get("amdBase") + "compat/inputData");
                        this.options.dataAdapter = o.Decorate(this.options.dataAdapter, n)
                    }
                }
                return e.prototype.fromElement = function(e) {
                    var t = ["select2"];
                    null == this.options.multiple && (this.options.multiple = e.prop("multiple")), null == this.options.disabled && (this.options.disabled = e.prop("disabled")), null == this.options.language && (e.prop("lang") ? this.options.language = e.prop("lang").toLowerCase() : e.closest("[lang]").prop("lang") && (this.options.language = e.closest("[lang]").prop("lang"))), null == this.options.dir && (e.prop("dir") ? this.options.dir = e.prop("dir") : e.closest("[dir]").prop("dir") ? this.options.dir = e.closest("[dir]").prop("dir") : this.options.dir = "ltr"), e.prop("disabled", this.options.disabled), e.prop("multiple", this.options.multiple), e.data("select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), e.data("data", e.data("select2Tags")), e.data("tags", !0)), e.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), e.attr("ajax--url", e.data("ajaxUrl")), e.data("ajax--url", e.data("ajaxUrl")));
                    var n;
                    n = s.fn.jquery && "1." == s.fn.jquery.substr(0, 2) && e[0].dataset ? s.extend(!0, {}, e[0].dataset, e.data()) : e.data();
                    var i = s.extend(!0, {}, n);
                    for (var r in i = o._convertData(i)) - 1 < s.inArray(r, t) || (s.isPlainObject(this.options[r]) ? s.extend(this.options[r], i[r]) : this.options[r] = i[r]);
                    return this
                }, e.prototype.get = function(e) {
                    return this.options[e]
                }, e.prototype.set = function(e, t) {
                    this.options[e] = t
                }, e
            }), e.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function(r, u, n, i) {
                function c(e, t) {
                    null != e.data("select2") && e.data("select2").destroy(), this.$element = e, this.id = this._generateId(e), t = t || {}, this.options = new u(t, e), c.__super__.constructor.call(this);
                    var n = e.attr("tabindex") || 0;
                    e.data("old-tabindex", n), e.attr("tabindex", "-1");
                    var i = this.options.get("dataAdapter");
                    this.dataAdapter = new i(e, this.options);
                    var r = this.render();
                    this._placeContainer(r);
                    var s = this.options.get("selectionAdapter");
                    this.selection = new s(e, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, r);
                    var o = this.options.get("dropdownAdapter");
                    this.dropdown = new o(e, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, r);
                    var a = this.options.get("resultsAdapter");
                    this.results = new a(e, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
                    var l = this;
                    this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function(e) {
                        l.trigger("selection:update", {
                            data: e
                        })
                    }), e.addClass("select2-hidden-accessible"), e.attr("aria-hidden", "true"), this._syncAttributes(), e.data("select2", this)
                }
                return n.Extend(c, n.Observable), c.prototype._generateId = function(e) {
                    return "select2-" + (null != e.attr("id") ? e.attr("id") : null != e.attr("name") ? e.attr("name") + "-" + n.generateChars(2) : n.generateChars(4)).replace(/(:|\.|\[|\]|,)/g, "")
                }, c.prototype._placeContainer = function(e) {
                    e.insertAfter(this.$element);
                    var t = this._resolveWidth(this.$element, this.options.get("width"));
                    null != t && e.css("width", t)
                }, c.prototype._resolveWidth = function(e, t) {
                    var n = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                    if ("resolve" == t) {
                        var i = this._resolveWidth(e, "style");
                        return null != i ? i : this._resolveWidth(e, "element")
                    }
                    if ("element" == t) {
                        var r = e.outerWidth(!1);
                        return r <= 0 ? "auto" : r + "px"
                    }
                    if ("style" != t) return t;
                    var s = e.attr("style");
                    if ("string" != typeof s) return null;
                    for (var o = s.split(";"), a = 0, l = o.length; a < l; a += 1) {
                        var u = o[a].replace(/\s/g, "").match(n);
                        if (null !== u && 1 <= u.length) return u[1]
                    }
                    return null
                }, c.prototype._bindAdapters = function() {
                    this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container)
                }, c.prototype._registerDomEvents = function() {
                    var t = this;
                    this.$element.on("change.select2", function() {
                        t.dataAdapter.current(function(e) {
                            t.trigger("selection:update", {
                                data: e
                            })
                        })
                    }), this.$element.on("focus.select2", function(e) {
                        t.trigger("focus", e)
                    }), this._syncA = n.bind(this._syncAttributes, this), this._syncS = n.bind(this._syncSubtree, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
                    var e = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                    null != e ? (this._observer = new e(function(e) {
                        r.each(e, t._syncA), r.each(e, t._syncS)
                    }), this._observer.observe(this.$element[0], {
                        attributes: !0,
                        childList: !0,
                        subtree: !1
                    })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", t._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", t._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", t._syncS, !1))
                }, c.prototype._registerDataEvents = function() {
                    var n = this;
                    this.dataAdapter.on("*", function(e, t) {
                        n.trigger(e, t)
                    })
                }, c.prototype._registerSelectionEvents = function() {
                    var n = this,
                        i = ["toggle", "focus"];
                    this.selection.on("toggle", function() {
                        n.toggleDropdown()
                    }), this.selection.on("focus", function(e) {
                        n.focus(e)
                    }), this.selection.on("*", function(e, t) {
                        -1 === r.inArray(e, i) && n.trigger(e, t)
                    })
                }, c.prototype._registerDropdownEvents = function() {
                    var n = this;
                    this.dropdown.on("*", function(e, t) {
                        n.trigger(e, t)
                    })
                }, c.prototype._registerResultsEvents = function() {
                    var n = this;
                    this.results.on("*", function(e, t) {
                        n.trigger(e, t)
                    })
                }, c.prototype._registerEvents = function() {
                    var n = this;
                    this.on("open", function() {
                        n.$container.addClass("select2-container--open")
                    }), this.on("close", function() {
                        n.$container.removeClass("select2-container--open")
                    }), this.on("enable", function() {
                        n.$container.removeClass("select2-container--disabled")
                    }), this.on("disable", function() {
                        n.$container.addClass("select2-container--disabled")
                    }), this.on("blur", function() {
                        n.$container.removeClass("select2-container--focus")
                    }), this.on("query", function(t) {
                        n.isOpen() || n.trigger("open", {}), this.dataAdapter.query(t, function(e) {
                            n.trigger("results:all", {
                                data: e,
                                query: t
                            })
                        })
                    }), this.on("query:append", function(t) {
                        this.dataAdapter.query(t, function(e) {
                            n.trigger("results:append", {
                                data: e,
                                query: t
                            })
                        })
                    }), this.on("keypress", function(e) {
                        var t = e.which;
                        n.isOpen() ? t === i.ESC || t === i.TAB || t === i.UP && e.altKey ? (n.close(), e.preventDefault()) : t === i.ENTER ? (n.trigger("results:select", {}), e.preventDefault()) : t === i.SPACE && e.ctrlKey ? (n.trigger("results:toggle", {}), e.preventDefault()) : t === i.UP ? (n.trigger("results:previous", {}), e.preventDefault()) : t === i.DOWN && (n.trigger("results:next", {}), e.preventDefault()) : (t === i.ENTER || t === i.SPACE || t === i.DOWN && e.altKey) && (n.open(), e.preventDefault())
                    })
                }, c.prototype._syncAttributes = function() {
                    this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {})
                }, c.prototype._syncSubtree = function(e, t) {
                    var n = !1,
                        i = this;
                    if (!e || !e.target || "OPTION" === e.target.nodeName || "OPTGROUP" === e.target.nodeName) {
                        if (t)
                            if (t.addedNodes && 0 < t.addedNodes.length)
                                for (var r = 0; r < t.addedNodes.length; r++) {
                                    t.addedNodes[r].selected && (n = !0)
                                } else t.removedNodes && 0 < t.removedNodes.length && (n = !0);
                            else n = !0;
                        n && this.dataAdapter.current(function(e) {
                            i.trigger("selection:update", {
                                data: e
                            })
                        })
                    }
                }, c.prototype.trigger = function(e, t) {
                    var n = c.__super__.trigger,
                        i = {
                            open: "opening",
                            close: "closing",
                            select: "selecting",
                            unselect: "unselecting"
                        };
                    if (void 0 === t && (t = {}), e in i) {
                        var r = i[e],
                            s = {
                                prevented: !1,
                                name: e,
                                args: t
                            };
                        if (n.call(this, r, s), s.prevented) return void(t.prevented = !0)
                    }
                    n.call(this, e, t)
                }, c.prototype.toggleDropdown = function() {
                    this.options.get("disabled") || (this.isOpen() ? this.close() : this.open())
                }, c.prototype.open = function() {
                    this.isOpen() || this.trigger("query", {})
                }, c.prototype.close = function() {
                    this.isOpen() && this.trigger("close", {})
                }, c.prototype.isOpen = function() {
                    return this.$container.hasClass("select2-container--open")
                }, c.prototype.hasFocus = function() {
                    return this.$container.hasClass("select2-container--focus")
                }, c.prototype.focus = function(e) {
                    this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}))
                }, c.prototype.enable = function(e) {
                    this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), null != e && 0 !== e.length || (e = [!0]);
                    var t = !e[0];
                    this.$element.prop("disabled", t)
                }, c.prototype.data = function() {
                    this.options.get("debug") && 0 < arguments.length && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                    var t = [];
                    return this.dataAdapter.current(function(e) {
                        t = e
                    }), t
                }, c.prototype.val = function(e) {
                    if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == e || 0 === e.length) return this.$element.val();
                    var t = e[0];
                    r.isArray(t) && (t = r.map(t, function(e) {
                        return e.toString()
                    })), this.$element.val(t).trigger("change")
                }, c.prototype.destroy = function() {
                    this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)), this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", this.$element.data("old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null
                }, c.prototype.render = function() {
                    var e = r('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                    return e.attr("dir", this.options.get("dir")), this.$container = e, this.$container.addClass("select2-container--" + this.options.get("theme")), e.data("element", this.$element), e
                }, c
            }), e.define("jquery-mousewheel", ["jquery"], function(e) {
                return e
            }), e.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults"], function(r, e, s, t) {
                if (null == r.fn.select2) {
                    var o = ["open", "close", "destroy"];
                    r.fn.select2 = function(t) {
                        if ("object" == _typeof(t = t || {})) return this.each(function() {
                            var e = r.extend(!0, {}, t);
                            new s(r(this), e)
                        }), this;
                        if ("string" != typeof t) throw new Error("Invalid arguments for Select2: " + t);
                        var n, i = Array.prototype.slice.call(arguments, 1);
                        return this.each(function() {
                            var e = r(this).data("select2");
                            null == e && window.console && console.error && console.error("The select2('" + t + "') method was called on an element that is not using Select2."), n = e[t].apply(e, i)
                        }), -1 < r.inArray(t, o) ? this : n
                    }
                }
                return null == r.fn.select2.defaults && (r.fn.select2.defaults = t), s
            }), {
                define: e.define,
                require: e.require
            };

            function b(e, t) {
                return r.call(e, t)
            }

            function l(e, t) {
                var n, i, r, s, o, a, l, u, c, d, h, p = t && t.split("/"),
                    f = y.map,
                    g = f && f["*"] || {};
                if (e) {
                    for (o = (e = e.split("/")).length - 1, y.nodeIdCompat && _.test(e[o]) && (e[o] = e[o].replace(_, "")), "." === e[0].charAt(0) && p && (e = p.slice(0, p.length - 1).concat(e)), c = 0; c < e.length; c++)
                        if ("." === (h = e[c])) e.splice(c, 1), c -= 1;
                        else if (".." === h) {
                        if (0 === c || 1 === c && ".." === e[2] || ".." === e[c - 1]) continue;
                        0 < c && (e.splice(c - 1, 2), c -= 2)
                    }
                    e = e.join("/")
                }
                if ((p || g) && f) {
                    for (c = (n = e.split("/")).length; 0 < c; c -= 1) {
                        if (i = n.slice(0, c).join("/"), p)
                            for (d = p.length; 0 < d; d -= 1)
                                if ((r = f[p.slice(0, d).join("/")]) && (r = r[i])) {
                                    s = r, a = c;
                                    break
                                }
                        if (s) break;
                        !l && g && g[i] && (l = g[i], u = c)
                    }!s && l && (s = l, a = u), s && (n.splice(0, a, s), e = n.join("/"))
                }
                return e
            }

            function x(t, n) {
                return function() {
                    var e = a.call(arguments, 0);
                    return "string" != typeof e[0] && 1 === e.length && e.push(null), o.apply(p, e.concat([t, n]))
                }
            }

            function C(t) {
                return function(e) {
                    m[t] = e
                }
            }

            function T(e) {
                if (b(v, e)) {
                    var t = v[e];
                    delete v[e], w[e] = !0, s.apply(p, t)
                }
                if (!b(m, e) && !b(w, e)) throw new Error("No " + e);
                return m[e]
            }

            function u(e) {
                var t, n = e ? e.indexOf("!") : -1;
                return -1 < n && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
            }

            function E(e) {
                return e ? u(e) : []
            }
        }(),
        t = e.require("jquery.select2");
    return c.fn.select2.amd = e, t
}),
function() {
    var f, g, e = (f = window, g = document, function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        for (var s = [
                ["Afghanistan (‫افغانستان‬‎)", "af", "93"],
                ["Albania (Shqipëri)", "al", "355"],
                ["Algeria (‫الجزائر‬‎)", "dz", "213"],
                ["American Samoa", "as", "1684"],
                ["Andorra", "ad", "376"],
                ["Angola", "ao", "244"],
                ["Anguilla", "ai", "1264"],
                ["Antigua and Barbuda", "ag", "1268"],
                ["Argentina", "ar", "54"],
                ["Armenia (Հայաստան)", "am", "374"],
                ["Aruba", "aw", "297"],
                ["Australia", "au", "61", 0],
                ["Austria (Österreich)", "at", "43"],
                ["Azerbaijan (Azərbaycan)", "az", "994"],
                ["Bahamas", "bs", "1242"],
                ["Bahrain (‫البحرين‬‎)", "bh", "973"],
                ["Bangladesh (বাংলাদেশ)", "bd", "880"],
                ["Barbados", "bb", "1246"],
                ["Belarus (Беларусь)", "by", "375"],
                ["Belgium (België)", "be", "32"],
                ["Belize", "bz", "501"],
                ["Benin (Bénin)", "bj", "229"],
                ["Bermuda", "bm", "1441"],
                ["Bhutan (འབྲུག)", "bt", "975"],
                ["Bolivia", "bo", "591"],
                ["Bosnia and Herzegovina (Босна и Херцеговина)", "ba", "387"],
                ["Botswana", "bw", "267"],
                ["Brazil (Brasil)", "br", "55"],
                ["British Indian Ocean Territory", "io", "246"],
                ["British Virgin Islands", "vg", "1284"],
                ["Brunei", "bn", "673"],
                ["Bulgaria (България)", "bg", "359"],
                ["Burkina Faso", "bf", "226"],
                ["Burundi (Uburundi)", "bi", "257"],
                ["Cambodia (កម្ពុជា)", "kh", "855"],
                ["Cameroon (Cameroun)", "cm", "237"],
                ["Canada", "ca", "1", 1, ["204", "226", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]],
                ["Cape Verde (Kabu Verdi)", "cv", "238"],
                ["Caribbean Netherlands", "bq", "599", 1],
                ["Cayman Islands", "ky", "1345"],
                ["Central African Republic (République centrafricaine)", "cf", "236"],
                ["Chad (Tchad)", "td", "235"],
                ["Chile", "cl", "56"],
                ["China (中国)", "cn", "86"],
                ["Christmas Island", "cx", "61", 2],
                ["Cocos (Keeling) Islands", "cc", "61", 1],
                ["Colombia", "co", "57"],
                ["Comoros (‫جزر القمر‬‎)", "km", "269"],
                ["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243"],
                ["Congo (Republic) (Congo-Brazzaville)", "cg", "242"],
                ["Cook Islands", "ck", "682"],
                ["Costa Rica", "cr", "506"],
                ["Côte d’Ivoire", "ci", "225"],
                ["Croatia (Hrvatska)", "hr", "385"],
                ["Cuba", "cu", "53"],
                ["Curaçao", "cw", "599", 0],
                ["Cyprus (Κύπρος)", "cy", "357"],
                ["Czech Republic (Česká republika)", "cz", "420"],
                ["Denmark (Danmark)", "dk", "45"],
                ["Djibouti", "dj", "253"],
                ["Dominica", "dm", "1767"],
                ["Dominican Republic (República Dominicana)", "do", "1", 2, ["809", "829", "849"]],
                ["Ecuador", "ec", "593"],
                ["Egypt (‫مصر‬‎)", "eg", "20"],
                ["El Salvador", "sv", "503"],
                ["Equatorial Guinea (Guinea Ecuatorial)", "gq", "240"],
                ["Eritrea", "er", "291"],
                ["Estonia (Eesti)", "ee", "372"],
                ["Ethiopia", "et", "251"],
                ["Falkland Islands (Islas Malvinas)", "fk", "500"],
                ["Faroe Islands (Føroyar)", "fo", "298"],
                ["Fiji", "fj", "679"],
                ["Finland (Suomi)", "fi", "358", 0],
                ["France", "fr", "33"],
                ["French Guiana (Guyane française)", "gf", "594"],
                ["French Polynesia (Polynésie française)", "pf", "689"],
                ["Gabon", "ga", "241"],
                ["Gambia", "gm", "220"],
                ["Georgia (საქართველო)", "ge", "995"],
                ["Germany (Deutschland)", "de", "49"],
                ["Ghana (Gaana)", "gh", "233"],
                ["Gibraltar", "gi", "350"],
                ["Greece (Ελλάδα)", "gr", "30"],
                ["Greenland (Kalaallit Nunaat)", "gl", "299"],
                ["Grenada", "gd", "1473"],
                ["Guadeloupe", "gp", "590", 0],
                ["Guam", "gu", "1671"],
                ["Guatemala", "gt", "502"],
                ["Guernsey", "gg", "44", 1],
                ["Guinea (Guinée)", "gn", "224"],
                ["Guinea-Bissau (Guiné Bissau)", "gw", "245"],
                ["Guyana", "gy", "592"],
                ["Haiti", "ht", "509"],
                ["Honduras", "hn", "504"],
                ["Hong Kong (香港)", "hk", "852"],
                ["Hungary (Magyarország)", "hu", "36"],
                ["Iceland (Ísland)", "is", "354"],
                ["India (भारत)", "in", "91"],
                ["Indonesia", "id", "62"],
                ["Iran (‫ایران‬‎)", "ir", "98"],
                ["Iraq (‫العراق‬‎)", "iq", "964"],
                ["Ireland", "ie", "353"],
                ["Isle of Man", "im", "44", 2],
                ["Israel (‫ישראל‬‎)", "il", "972"],
                ["Italy (Italia)", "it", "39", 0],
                ["Jamaica", "jm", "1", 4, ["876", "658"]],
                ["Japan (日本)", "jp", "81"],
                ["Jersey", "je", "44", 3],
                ["Jordan (‫الأردن‬‎)", "jo", "962"],
                ["Kazakhstan (Казахстан)", "kz", "7", 1],
                ["Kenya", "ke", "254"],
                ["Kiribati", "ki", "686"],
                ["Kosovo", "xk", "383"],
                ["Kuwait (‫الكويت‬‎)", "kw", "965"],
                ["Kyrgyzstan (Кыргызстан)", "kg", "996"],
                ["Laos (ລາວ)", "la", "856"],
                ["Latvia (Latvija)", "lv", "371"],
                ["Lebanon (‫لبنان‬‎)", "lb", "961"],
                ["Lesotho", "ls", "266"],
                ["Liberia", "lr", "231"],
                ["Libya (‫ليبيا‬‎)", "ly", "218"],
                ["Liechtenstein", "li", "423"],
                ["Lithuania (Lietuva)", "lt", "370"],
                ["Luxembourg", "lu", "352"],
                ["Macau (澳門)", "mo", "853"],
                ["Macedonia (FYROM) (Македонија)", "mk", "389"],
                ["Madagascar (Madagasikara)", "mg", "261"],
                ["Malawi", "mw", "265"],
                ["Malaysia", "my", "60"],
                ["Maldives", "mv", "960"],
                ["Mali", "ml", "223"],
                ["Malta", "mt", "356"],
                ["Marshall Islands", "mh", "692"],
                ["Martinique", "mq", "596"],
                ["Mauritania (‫موريتانيا‬‎)", "mr", "222"],
                ["Mauritius (Moris)", "mu", "230"],
                ["Mayotte", "yt", "262", 1],
                ["Mexico (México)", "mx", "52"],
                ["Micronesia", "fm", "691"],
                ["Moldova (Republica Moldova)", "md", "373"],
                ["Monaco", "mc", "377"],
                ["Mongolia (Монгол)", "mn", "976"],
                ["Montenegro (Crna Gora)", "me", "382"],
                ["Montserrat", "ms", "1664"],
                ["Morocco (‫المغرب‬‎)", "ma", "212", 0],
                ["Mozambique (Moçambique)", "mz", "258"],
                ["Myanmar (Burma) (မြန်မာ)", "mm", "95"],
                ["Namibia (Namibië)", "na", "264"],
                ["Nauru", "nr", "674"],
                ["Nepal (नेपाल)", "np", "977"],
                ["Netherlands (Nederland)", "nl", "31"],
                ["New Caledonia (Nouvelle-Calédonie)", "nc", "687"],
                ["New Zealand", "nz", "64"],
                ["Nicaragua", "ni", "505"],
                ["Niger (Nijar)", "ne", "227"],
                ["Nigeria", "ng", "234"],
                ["Niue", "nu", "683"],
                ["Norfolk Island", "nf", "672"],
                ["North Korea (조선 민주주의 인민 공화국)", "kp", "850"],
                ["Northern Mariana Islands", "mp", "1670"],
                ["Norway (Norge)", "no", "47", 0],
                ["Oman (‫عُمان‬‎)", "om", "968"],
                ["Pakistan (‫پاکستان‬‎)", "pk", "92"],
                ["Palau", "pw", "680"],
                ["Palestine (‫فلسطين‬‎)", "ps", "970"],
                ["Panama (Panamá)", "pa", "507"],
                ["Papua New Guinea", "pg", "675"],
                ["Paraguay", "py", "595"],
                ["Peru (Perú)", "pe", "51"],
                ["Philippines", "ph", "63"],
                ["Poland (Polska)", "pl", "48"],
                ["Portugal", "pt", "351"],
                ["Puerto Rico", "pr", "1", 3, ["787", "939"]],
                ["Qatar (‫قطر‬‎)", "qa", "974"],
                ["Réunion (La Réunion)", "re", "262", 0],
                ["Romania (România)", "ro", "40"],
                ["Russia (Россия)", "ru", "7", 0],
                ["Rwanda", "rw", "250"],
                ["Saint Barthélemy", "bl", "590", 1],
                ["Saint Helena", "sh", "290"],
                ["Saint Kitts and Nevis", "kn", "1869"],
                ["Saint Lucia", "lc", "1758"],
                ["Saint Martin (Saint-Martin (partie française))", "mf", "590", 2],
                ["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "pm", "508"],
                ["Saint Vincent and the Grenadines", "vc", "1784"],
                ["Samoa", "ws", "685"],
                ["San Marino", "sm", "378"],
                ["São Tomé and Príncipe (São Tomé e Príncipe)", "st", "239"],
                ["Saudi Arabia (‫المملكة العربية السعودية‬‎)", "sa", "966"],
                ["Senegal (Sénégal)", "sn", "221"],
                ["Serbia (Србија)", "rs", "381"],
                ["Seychelles", "sc", "248"],
                ["Sierra Leone", "sl", "232"],
                ["Singapore", "sg", "65"],
                ["Sint Maarten", "sx", "1721"],
                ["Slovakia (Slovensko)", "sk", "421"],
                ["Slovenia (Slovenija)", "si", "386"],
                ["Solomon Islands", "sb", "677"],
                ["Somalia (Soomaaliya)", "so", "252"],
                ["South Africa", "za", "27"],
                ["South Korea (대한민국)", "kr", "82"],
                ["South Sudan (‫جنوب السودان‬‎)", "ss", "211"],
                ["Spain (España)", "es", "34"],
                ["Sri Lanka (ශ්‍රී ලංකාව)", "lk", "94"],
                ["Sudan (‫السودان‬‎)", "sd", "249"],
                ["Suriname", "sr", "597"],
                ["Svalbard and Jan Mayen", "sj", "47", 1],
                ["Swaziland", "sz", "268"],
                ["Sweden (Sverige)", "se", "46"],
                ["Switzerland (Schweiz)", "ch", "41"],
                ["Syria (‫سوريا‬‎)", "sy", "963"],
                ["Taiwan (台灣)", "tw", "886"],
                ["Tajikistan", "tj", "992"],
                ["Tanzania", "tz", "255"],
                ["Thailand (ไทย)", "th", "66"],
                ["Timor-Leste", "tl", "670"],
                ["Togo", "tg", "228"],
                ["Tokelau", "tk", "690"],
                ["Tonga", "to", "676"],
                ["Trinidad and Tobago", "tt", "1868"],
                ["Tunisia (‫تونس‬‎)", "tn", "216"],
                ["Turkey (Türkiye)", "tr", "90"],
                ["Turkmenistan", "tm", "993"],
                ["Turks and Caicos Islands", "tc", "1649"],
                ["Tuvalu", "tv", "688"],
                ["U.S. Virgin Islands", "vi", "1340"],
                ["Uganda", "ug", "256"],
                ["Ukraine (Україна)", "ua", "380"],
                ["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", "ae", "971"],
                ["United Kingdom", "gb", "44", 0],
                ["United States", "us", "1", 0],
                ["Uruguay", "uy", "598"],
                ["Uzbekistan (Oʻzbekiston)", "uz", "998"],
                ["Vanuatu", "vu", "678"],
                ["Vatican City (Città del Vaticano)", "va", "39", 1],
                ["Venezuela", "ve", "58"],
                ["Vietnam (Việt Nam)", "vn", "84"],
                ["Wallis and Futuna (Wallis-et-Futuna)", "wf", "681"],
                ["Western Sahara (‫الصحراء الغربية‬‎)", "eh", "212", 1],
                ["Yemen (‫اليمن‬‎)", "ye", "967"],
                ["Zambia", "zm", "260"],
                ["Zimbabwe", "zw", "263"],
                ["Åland Islands", "ax", "358", 1]
            ], t = 0; t < s.length; t++) {
            var n = s[t];
            s[t] = {
                name: n[0],
                iso2: n[1],
                dialCode: n[2],
                priority: n[3] || 0,
                areaCodes: n[4] || null
            }
        }
        f.intlTelInputGlobals = {
            getInstance: function(e) {
                var t = e.getAttribute("data-intl-tel-input-id");
                return f.intlTelInputGlobals.instances[t]
            },
            instances: {}
        };
        var r = 0,
            o = {
                allowDropdown: !0,
                autoHideDialCode: !0,
                autoPlaceholder: "polite",
                customContainer: "",
                customPlaceholder: null,
                dropdownContainer: null,
                excludeCountries: [],
                formatOnDisplay: !0,
                geoIpLookup: null,
                hiddenInput: "",
                initialCountry: "",
                localizedCountries: null,
                nationalMode: !0,
                onlyCountries: [],
                placeholderNumberType: "MOBILE",
                preferredCountries: ["us", "gb"],
                separateDialCode: !1,
                utilsScript: ""
            },
            i = ["800", "822", "833", "844", "855", "866", "877", "880", "881", "882", "883", "884", "885", "886", "887", "888", "889"];

        function a(e, t) {
            for (var n = Object.keys(e), i = 0; i < n.length; i++) t(n[i], e[n[i]])
        }

        function l(t) {
            a(f.intlTelInputGlobals.instances, function(e) {
                f.intlTelInputGlobals.instances[e][t]()
            })
        }
        f.addEventListener("load", function() {
            f.intlTelInputGlobals.windowLoaded = !0
        });
        var u, c, d = (e((u = h).prototype, [{
            key: "_init",
            value: function() {
                var n = this;
                if (this.d.nationalMode && (this.d.autoHideDialCode = !1), this.d.separateDialCode && (this.d.autoHideDialCode = this.d.nationalMode = !1), this.g = /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), this.g && (g.body.classList.add("iti-mobile"), this.d.dropdownContainer || (this.d.dropdownContainer = g.body)), "undefined" != typeof Promise) {
                    var e = new Promise(function(e, t) {
                            n.h = e, n.i = t
                        }),
                        t = new Promise(function(e, t) {
                            n.i0 = e, n.i1 = t
                        });
                    this.promise = Promise.all([e, t])
                } else this.h = this.i = function() {}, this.i0 = this.i1 = function() {};
                this.s = {}, this._b(), this._f(), this._h(), this._i(), this._i3()
            }
        }, {
            key: "_b",
            value: function() {
                this._d(), this._d2(), this._e(), this.d.localizedCountries && this._d0(), (this.d.onlyCountries.length || this.d.localizedCountries) && this.p.sort(this._d1)
            }
        }, {
            key: "_c",
            value: function(e, t, n) {
                this.q.hasOwnProperty(t) || (this.q[t] = []);
                var i = n || 0;
                this.q[t][i] = e
            }
        }, {
            key: "_d",
            value: function() {
                if (this.d.onlyCountries.length) {
                    var t = this.d.onlyCountries.map(function(e) {
                        return e.toLowerCase()
                    });
                    this.p = s.filter(function(e) {
                        return -1 < t.indexOf(e.iso2)
                    })
                } else if (this.d.excludeCountries.length) {
                    var n = this.d.excludeCountries.map(function(e) {
                        return e.toLowerCase()
                    });
                    this.p = s.filter(function(e) {
                        return -1 === n.indexOf(e.iso2)
                    })
                } else this.p = s
            }
        }, {
            key: "_d0",
            value: function() {
                for (var e = 0; e < this.p.length; e++) {
                    var t = this.p[e].iso2.toLowerCase();
                    this.d.localizedCountries.hasOwnProperty(t) && (this.p[e].name = this.d.localizedCountries[t])
                }
            }
        }, {
            key: "_d1",
            value: function(e, t) {
                return e.name.localeCompare(t.name)
            }
        }, {
            key: "_d2",
            value: function() {
                this.q = {};
                for (var e = 0; e < this.p.length; e++) {
                    var t = this.p[e];
                    if (this._c(t.iso2, t.dialCode, t.priority), t.areaCodes)
                        for (var n = 0; n < t.areaCodes.length; n++) this._c(t.iso2, t.dialCode + t.areaCodes[n])
                }
            }
        }, {
            key: "_e",
            value: function() {
                this.preferredCountries = [];
                for (var e = 0; e < this.d.preferredCountries.length; e++) {
                    var t = this.d.preferredCountries[e].toLowerCase(),
                        n = this._y(t, !1, !0);
                    n && this.preferredCountries.push(n)
                }
            }
        }, {
            key: "_e2",
            value: function(e, t, n) {
                var i = g.createElement(e);
                return t && a(t, function(e, t) {
                    return i.setAttribute(e, t)
                }), n && n.appendChild(i), i
            }
        }, {
            key: "_f",
            value: function() {
                this.a.setAttribute("autocomplete", "off");
                var e = "intl-tel-input";
                this.d.allowDropdown && (e += " allow-dropdown"), this.d.separateDialCode && (e += " separate-dial-code"), this.d.customContainer && (e += " ", e += this.d.customContainer);
                var t = this._e2("div", {
                    class: e
                });
                if (this.a.parentNode.insertBefore(t, this.a), this.k = this._e2("div", {
                        class: "flag-container"
                    }, t), t.appendChild(this.a), this.selectedFlag = this._e2("div", {
                        class: "selected-flag",
                        role: "combobox",
                        "aria-owns": "country-listbox"
                    }, this.k), this.l = this._e2("div", {
                        class: "iti-flag"
                    }, this.selectedFlag), this.d.separateDialCode && (this.t = this._e2("div", {
                        class: "selected-dial-code"
                    }, this.selectedFlag)), this.d.allowDropdown && (this.selectedFlag.setAttribute("tabindex", "0"), this.u = this._e2("div", {
                        class: "iti-arrow"
                    }, this.selectedFlag), this.m = this._e2("ul", {
                        class: "country-list hide",
                        id: "country-listbox",
                        "aria-expanded": "false",
                        role: "listbox"
                    }), this.preferredCountries.length && (this._g(this.preferredCountries, "preferred"), this._e2("li", {
                        class: "divider",
                        role: "separator",
                        "aria-disabled": "true"
                    }, this.m)), this._g(this.p, "standard"), this.d.dropdownContainer ? (this.dropdown = this._e2("div", {
                        class: "intl-tel-input iti-container"
                    }), this.dropdown.appendChild(this.m)) : this.k.appendChild(this.m)), this.d.hiddenInput) {
                    var n = this.d.hiddenInput,
                        i = this.a.getAttribute("name");
                    if (i) {
                        var r = i.lastIndexOf("["); - 1 !== r && (n = "".concat(i.substr(0, r), "[").concat(n, "]"))
                    }
                    this.hiddenInput = this._e2("input", {
                        type: "hidden",
                        name: n
                    }), t.appendChild(this.hiddenInput)
                }
            }
        }, {
            key: "_g",
            value: function(e, t) {
                for (var n = "", i = 0; i < e.length; i++) {
                    var r = e[i];
                    n += "<li class='country ".concat(t, "' tabIndex='-1' id='iti-item-").concat(r.iso2, "' role='option' data-dial-code='").concat(r.dialCode, "' data-country-code='").concat(r.iso2, "'>"), n += "<div class='flag-box'><div class='iti-flag ".concat(r.iso2, "'></div></div>"), n += "<span class='country-name'>".concat(r.name, "</span>"), n += "<span class='dial-code'>+".concat(r.dialCode, "</span>"), n += "</li>"
                }
                this.m.insertAdjacentHTML("beforeend", n)
            }
        }, {
            key: "_h",
            value: function() {
                var e = this.a.value,
                    t = this._5(e),
                    n = this._w(e),
                    i = this.d,
                    r = i.initialCountry,
                    s = i.nationalMode,
                    o = i.autoHideDialCode,
                    a = i.separateDialCode;
                t && !n ? this._v(e) : "auto" !== r && (r ? this._z(r.toLowerCase()) : t && n ? this._z("us") : (this.j = this.preferredCountries.length ? this.preferredCountries[0].iso2 : this.p[0].iso2, e || this._z(this.j)), e || s || o || a || (this.a.value = "+".concat(this.s.dialCode))), e && this._u(e)
            }
        }, {
            key: "_i",
            value: function() {
                this._j(), this.d.autoHideDialCode && this._l(), this.d.allowDropdown && this._i2(), this.hiddenInput && this._i0()
            }
        }, {
            key: "_i0",
            value: function() {
                var e = this;
                this._a14 = function() {
                    e.hiddenInput.value = e.getNumber()
                }, this.a.form && this.a.form.addEventListener("submit", this._a14)
            }
        }, {
            key: "_i1",
            value: function() {
                for (var e = this.a; e && "LABEL" !== e.tagName;) e = e.parentNode;
                return e
            }
        }, {
            key: "_i2",
            value: function() {
                var t = this;
                this._a9 = function(e) {
                    t.m.classList.contains("hide") ? t.a.focus() : e.preventDefault()
                };
                var e = this._i1();
                e && e.addEventListener("click", this._a9), this._a10 = function() {
                    !t.m.classList.contains("hide") || t.a.disabled || t.a.readOnly || t._n()
                }, this.selectedFlag.addEventListener("click", this._a10), this._a11 = function(e) {
                    t.m.classList.contains("hide") && -1 !== ["ArrowUp", "ArrowDown", " ", "Enter"].indexOf(e.key) && (e.preventDefault(), e.stopPropagation(), t._n()), "Tab" === e.key && t._2()
                }, this.k.addEventListener("keydown", this._a11)
            }
        }, {
            key: "_i3",
            value: function() {
                var e = this;
                this.d.utilsScript && !f.intlTelInputUtils ? f.intlTelInputGlobals.windowLoaded ? f.intlTelInputGlobals.loadUtils(this.d.utilsScript) : f.addEventListener("load", function() {
                    f.intlTelInputGlobals.loadUtils(e.d.utilsScript)
                }) : this.i0(), "auto" === this.d.initialCountry ? this._i4() : this.h()
            }
        }, {
            key: "_i4",
            value: function() {
                f.intlTelInputGlobals.autoCountry ? this.handleAutoCountry() : f.intlTelInputGlobals.startedLoadingAutoCountry || (f.intlTelInputGlobals.startedLoadingAutoCountry = !0, "function" == typeof this.d.geoIpLookup && this.d.geoIpLookup(function(e) {
                    f.intlTelInputGlobals.autoCountry = e.toLowerCase(), setTimeout(function() {
                        return l("handleAutoCountry")
                    })
                }, function() {
                    return l("rejectAutoCountryPromise")
                }))
            }
        }, {
            key: "_j",
            value: function() {
                var e = this;
                this._a12 = function() {
                    e._v(e.a.value) && e._8()
                }, this.a.addEventListener("keyup", this._a12), this._a13 = function() {
                    setTimeout(e._a12)
                }, this.a.addEventListener("cut", this._a13), this.a.addEventListener("paste", this._a13)
            }
        }, {
            key: "_j2",
            value: function(e) {
                var t = this.a.getAttribute("maxlength");
                return t && e.length > t ? e.substr(0, t) : e
            }
        }, {
            key: "_l",
            value: function() {
                var e = this;
                this._a8 = function() {
                    e._l2()
                }, this.a.form && this.a.form.addEventListener("submit", this._a8), this.a.addEventListener("blur", this._a8)
            }
        }, {
            key: "_l2",
            value: function() {
                if ("+" === this.a.value.charAt(0)) {
                    var e = this._m(this.a.value);
                    e && this.s.dialCode !== e || (this.a.value = "")
                }
            }
        }, {
            key: "_m",
            value: function(e) {
                return e.replace(/\D/g, "")
            }
        }, {
            key: "_m2",
            value: function(e) {
                var t = g.createEvent("Event");
                t.initEvent(e, !0, !0), this.a.dispatchEvent(t)
            }
        }, {
            key: "_n",
            value: function() {
                this.m.classList.remove("hide"), this.m.setAttribute("aria-expanded", "true"), this._o(), this.b && (this._x(this.b, !1), this._3(this.b, !0)), this._p(), this.u.classList.add("up"), this._m2("open:countrydropdown")
            }
        }, {
            key: "_n2",
            value: function(e, t, n) {
                n && !e.classList.contains(t) ? e.classList.add(t) : !n && e.classList.contains(t) && e.classList.remove(t)
            }
        }, {
            key: "_o",
            value: function() {
                var e = this;
                if (this.d.dropdownContainer && this.d.dropdownContainer.appendChild(this.dropdown), !this.g) {
                    var t = this.a.getBoundingClientRect(),
                        n = f.pageYOffset || g.documentElement.scrollTop,
                        i = t.top + n,
                        r = this.m.offsetHeight,
                        s = i + this.a.offsetHeight + r < n + f.innerHeight,
                        o = n < i - r;
                    if (this._n2(this.m, "dropup", !s && o), this.d.dropdownContainer) {
                        var a = !s && o ? 0 : this.a.offsetHeight;
                        this.dropdown.style.top = "".concat(i + a, "px"), this.dropdown.style.left = "".concat(t.left + g.body.scrollLeft, "px"), this._a4 = function() {
                            return e._2()
                        }, f.addEventListener("scroll", this._a4)
                    }
                }
            }
        }, {
            key: "_o2",
            value: function(e) {
                for (var t = e; t && t !== this.m && !t.classList.contains("country");) t = t.parentNode;
                return t === this.m ? null : t
            }
        }, {
            key: "_p",
            value: function() {
                var n = this;
                this._a0 = function(e) {
                    var t = n._o2(e.target);
                    t && n._x(t, !1)
                }, this.m.addEventListener("mouseover", this._a0), this._a1 = function(e) {
                    var t = n._o2(e.target);
                    t && n._1(t)
                }, this.m.addEventListener("click", this._a1);
                var e = !0;
                this._a2 = function() {
                    e || n._2(), e = !1
                }, g.documentElement.addEventListener("click", this._a2);
                var t = "",
                    i = null;
                this._a3 = function(e) {
                    e.preventDefault(), "ArrowUp" === e.key || "ArrowDown" === e.key ? n._q(e.key) : "Enter" === e.key ? n._r() : "Escape" === e.key ? n._2() : /^[a-zA-ZÀ-ÿ ]$/.test(e.key) && (i && clearTimeout(i), t += e.key.toLowerCase(), n._s(t), i = setTimeout(function() {
                        t = ""
                    }, 1e3))
                }, g.addEventListener("keydown", this._a3)
            }
        }, {
            key: "_q",
            value: function(e) {
                var t = "ArrowUp" === e ? this.c.previousElementSibling : this.c.nextElementSibling;
                t && (t.classList.contains("divider") && (t = "ArrowUp" === e ? t.previousElementSibling : t.nextElementSibling), this._x(t, !0))
            }
        }, {
            key: "_r",
            value: function() {
                this.c && this._1(this.c)
            }
        }, {
            key: "_s",
            value: function(e) {
                for (var t = 0; t < this.p.length; t++)
                    if (this._t(this.p[t].name, e)) {
                        var n = this.m.querySelector("#iti-item-".concat(this.p[t].iso2));
                        this._x(n, !1), this._3(n, !0);
                        break
                    }
            }
        }, {
            key: "_t",
            value: function(e, t) {
                return e.substr(0, t.length).toLowerCase() === t
            }
        }, {
            key: "_u",
            value: function(e) {
                var t = e;
                if (this.d.formatOnDisplay && f.intlTelInputUtils && this.s) {
                    var n = !this.d.separateDialCode && (this.d.nationalMode || "+" !== t.charAt(0)),
                        i = intlTelInputUtils.numberFormat,
                        r = i.NATIONAL,
                        s = i.INTERNATIONAL,
                        o = n ? r : s;
                    t = intlTelInputUtils.formatNumber(t, this.s.iso2, o)
                }
                t = this._7(t), this.a.value = t
            }
        }, {
            key: "_v",
            value: function(e) {
                var t = e,
                    n = "1" === this.s.dialCode;
                t && this.d.nationalMode && n && "+" !== t.charAt(0) && ("1" !== t.charAt(0) && (t = "1".concat(t)), t = "+".concat(t));
                var i = this._5(t),
                    r = this._m(t),
                    s = null;
                if (i) {
                    var o = this.q[this._m(i)],
                        a = -1 !== o.indexOf(this.s.iso2),
                        l = "+1" === i && 4 <= r.length;
                    if (!("1" === this.s.dialCode && this._w(r) || a && !l))
                        for (var u = 0; u < o.length; u++)
                            if (o[u]) {
                                s = o[u];
                                break
                            }
                } else "+" === t.charAt(0) && r.length ? s = "" : t && "+" !== t || (s = this.j);
                return null !== s && this._z(s)
            }
        }, {
            key: "_w",
            value: function(e) {
                var t = this._m(e);
                if ("1" !== t.charAt(0)) return !1;
                var n = t.substr(1, 3);
                return -1 !== i.indexOf(n)
            }
        }, {
            key: "_x",
            value: function(e, t) {
                var n = this.c;
                n && n.classList.remove("highlight"), this.c = e, this.c.classList.add("highlight"), t && this.c.focus()
            }
        }, {
            key: "_y",
            value: function(e, t, n) {
                for (var i = t ? s : this.p, r = 0; r < i.length; r++)
                    if (i[r].iso2 === e) return i[r];
                if (n) return null;
                throw new Error("No country data for '".concat(e, "'"))
            }
        }, {
            key: "_z",
            value: function(e) {
                var t = this.s.iso2 ? this.s : {};
                this.s = e ? this._y(e, !1, !1) : {}, this.s.iso2 && (this.j = this.s.iso2), this.l.setAttribute("class", "iti-flag ".concat(e));
                var n = e ? "".concat(this.s.name, ": +").concat(this.s.dialCode) : "Unknown";
                if (this.selectedFlag.setAttribute("title", n), this.d.separateDialCode) {
                    var i = this.s.dialCode ? "+".concat(this.s.dialCode) : "";
                    this.t.innerHTML = i, this.a.style.paddingLeft = "".concat(this.selectedFlag.offsetWidth + 6, "px")
                }
                if (this._0(), this.d.allowDropdown) {
                    var r = this.b;
                    if (r && (r.classList.remove("active"), r.setAttribute("aria-selected", "false")), e) {
                        var s = this.m.querySelector("#iti-item-".concat(e));
                        s.setAttribute("aria-selected", "true"), s.classList.add("active"), this.b = s, this.m.setAttribute("aria-activedescendant", s.getAttribute("id"))
                    }
                }
                return t.iso2 !== e
            }
        }, {
            key: "_0",
            value: function() {
                var e = "aggressive" === this.d.autoPlaceholder || !this.e && "polite" === this.d.autoPlaceholder;
                if (f.intlTelInputUtils && e) {
                    var t = intlTelInputUtils.numberType[this.d.placeholderNumberType],
                        n = this.s.iso2 ? intlTelInputUtils.getExampleNumber(this.s.iso2, this.d.nationalMode, t) : "";
                    n = this._7(n), "function" == typeof this.d.customPlaceholder && (n = this.d.customPlaceholder(n, this.s)), this.a.setAttribute("placeholder", n)
                }
            }
        }, {
            key: "_1",
            value: function(e) {
                var t = this._z(e.getAttribute("data-country-code"));
                this._2(), this._4(e.getAttribute("data-dial-code"), !0), this.a.focus();
                var n = this.a.value.length;
                this.a.setSelectionRange(n, n), t && this._8()
            }
        }, {
            key: "_2",
            value: function() {
                this.m.classList.add("hide"), this.m.setAttribute("aria-expanded", "false"), this.u.classList.remove("up"), g.removeEventListener("keydown", this._a3), g.documentElement.removeEventListener("click", this._a2), this.m.removeEventListener("mouseover", this._a0), this.m.removeEventListener("click", this._a1), this.d.dropdownContainer && (this.g || f.removeEventListener("scroll", this._a4), this.dropdown.parentNode && this.dropdown.parentNode.removeChild(this.dropdown)), this._m2("close:countrydropdown")
            }
        }, {
            key: "_3",
            value: function(e, t) {
                var n = this.m,
                    i = f.pageYOffset || g.documentElement.scrollTop,
                    r = n.offsetHeight,
                    s = n.getBoundingClientRect().top + i,
                    o = s + r,
                    a = e.offsetHeight,
                    l = e.getBoundingClientRect().top + i,
                    u = l + a,
                    c = l - s + n.scrollTop,
                    d = r / 2 - a / 2;
                if (l < s) t && (c -= d), n.scrollTop = c;
                else if (o < u) {
                    t && (c += d);
                    var h = r - a;
                    n.scrollTop = c - h
                }
            }
        }, {
            key: "_4",
            value: function(e, t) {
                var n, i = this.a.value,
                    r = "+".concat(e);
                if ("+" === i.charAt(0)) {
                    var s = this._5(i);
                    n = s ? i.replace(s, r) : r
                } else {
                    if (this.d.nationalMode || this.d.separateDialCode) return;
                    if (i) n = r + i;
                    else {
                        if (!t && this.d.autoHideDialCode) return;
                        n = r
                    }
                }
                this.a.value = n
            }
        }, {
            key: "_5",
            value: function(e) {
                var t = "";
                if ("+" === e.charAt(0))
                    for (var n = "", i = 0; i < e.length; i++) {
                        var r = e.charAt(i);
                        if (!isNaN(parseInt(r, 10)) && (n += r, this.q[n] && (t = e.substr(0, i + 1)), 4 === n.length)) break
                    }
                return t
            }
        }, {
            key: "_6",
            value: function() {
                var e = this.a.value.trim(),
                    t = this.s.dialCode,
                    n = this._m(e),
                    i = "1" === n.charAt(0) ? n : "1".concat(n);
                return (this.d.separateDialCode && "+" !== e.charAt(0) ? "+".concat(t) : e && "+" !== e.charAt(0) && "1" !== e.charAt(0) && t && "1" === t.charAt(0) && 4 === t.length && t !== i.substr(0, 4) ? t.substr(1) : "") + e
            }
        }, {
            key: "_7",
            value: function(e) {
                var t = e;
                if (this.d.separateDialCode) {
                    var n = this._5(t);
                    if (n) {
                        null !== this.s.areaCodes && (n = "+".concat(this.s.dialCode));
                        var i = " " === t[n.length] || "-" === t[n.length] ? n.length + 1 : n.length;
                        t = t.substr(i)
                    }
                }
                return this._j2(t)
            }
        }, {
            key: "_8",
            value: function() {
                this._m2("countrychange")
            }
        }, {
            key: "handleAutoCountry",
            value: function() {
                "auto" === this.d.initialCountry && (this.j = f.intlTelInputGlobals.autoCountry, this.a.value || this.setCountry(this.j), this.h())
            }
        }, {
            key: "handleUtils",
            value: function() {
                f.intlTelInputUtils && (this.a.value && this._u(this.a.value), this._0()), this.i0()
            }
        }, {
            key: "destroy",
            value: function() {
                var e = this.a.form;
                if (this.d.allowDropdown) {
                    this._2(), this.selectedFlag.removeEventListener("click", this._a10), this.k.removeEventListener("keydown", this._a11);
                    var t = this._i1();
                    t && t.removeEventListener("click", this._a9)
                }
                this.hiddenInput && e && e.removeEventListener("submit", this._a14), this.d.autoHideDialCode && (e && e.removeEventListener("submit", this._a8), this.a.removeEventListener("blur", this._a8)), this.a.removeEventListener("keyup", this._a12), this.a.removeEventListener("cut", this._a13), this.a.removeEventListener("paste", this._a13), this.a.removeAttribute("data-intl-tel-input-id");
                var n = this.a.parentNode;
                n.parentNode.insertBefore(this.a, n), n.parentNode.removeChild(n), delete f.intlTelInputGlobals.instances[this.id]
            }
        }, {
            key: "getExtension",
            value: function() {
                return f.intlTelInputUtils ? intlTelInputUtils.getExtension(this._6(), this.s.iso2) : ""
            }
        }, {
            key: "getNumber",
            value: function(e) {
                if (f.intlTelInputUtils) {
                    var t = this.s.iso2;
                    return intlTelInputUtils.formatNumber(this._6(), t, e)
                }
                return ""
            }
        }, {
            key: "getNumberType",
            value: function() {
                return f.intlTelInputUtils ? intlTelInputUtils.getNumberType(this._6(), this.s.iso2) : -99
            }
        }, {
            key: "getSelectedCountryData",
            value: function() {
                return this.s
            }
        }, {
            key: "getValidationError",
            value: function() {
                if (f.intlTelInputUtils) {
                    var e = this.s.iso2;
                    return intlTelInputUtils.getValidationError(this._6(), e)
                }
                return -99
            }
        }, {
            key: "isValidNumber",
            value: function() {
                var e = this._6().trim(),
                    t = this.d.nationalMode ? this.s.iso2 : "";
                return f.intlTelInputUtils ? intlTelInputUtils.isValidNumber(e, t) : null
            }
        }, {
            key: "setCountry",
            value: function(e) {
                var t = e.toLowerCase();
                this.l.classList.contains(t) || (this._z(t), this._4(this.s.dialCode, !1), this._8())
            }
        }, {
            key: "setNumber",
            value: function(e) {
                var t = this._v(e);
                this._u(e), t && this._8()
            }
        }, {
            key: "setPlaceholderNumberType",
            value: function(e) {
                this.d.placeholderNumberType = e, this._0()
            }
        }]), c && e(u, c), h);

        function h(e, t) {
            var n = this;
            (function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            })(this, h), this.id = r++, this.a = e, this.b = null, this.c = null;
            var i = t || {};
            this.d = {}, a(o, function(e, t) {
                n.d[e] = i.hasOwnProperty(e) ? i[e] : t
            }), this.e = Boolean(e.getAttribute("placeholder"))
        }

        function p(e, t, n) {
            var i = g.createElement("script");
            i.onload = function() {
                l("handleUtils"), t && t()
            }, i.onerror = function() {
                l("rejectUtilsScriptPromise"), n && n()
            }, i.className = "iti-load-utils", i.async = !0, i.src = e, g.body.appendChild(i)
        }
        return f.intlTelInputGlobals.getCountryData = function() {
                return s
            }, f.intlTelInputGlobals.loadUtils = function(n) {
                if (!f.intlTelInputUtils && !f.intlTelInputGlobals.startedLoadingUtilsScript) {
                    if (f.intlTelInputGlobals.startedLoadingUtilsScript = !0, "undefined" != typeof Promise) return new Promise(function(e, t) {
                        return p(n, e, t)
                    });
                    p(n)
                }
                return null
            }, f.intlTelInputGlobals.defaults = o, f.intlTelInputGlobals.version = "15.1.0",
            function(e, t) {
                var n = new d(e, t);
                return n._init(), e.setAttribute("data-intl-tel-input-id", n.id), f.intlTelInputGlobals.instances[n.id] = n
            }
    }());
    "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = e : window.intlTelInput = e
}();
var popup = function() {
        var e = document.querySelector("body"),
            t = document.querySelector(".popup");
        t || (t = document.createElement("div"), t.classList.add("popup"), t.innerHTML = '\n      <div class="popup-wrapper">\n        <div class="popup-btn-close"></div>\n        <div class="popup-content"></div>\n      </div>\n    ', e.appendChild(t));

        function n(e) {
            e && e.stopPropagation(), t.classList.remove("opened")
        }
        var i = t.querySelector(".popup-wrapper"),
            r = t.querySelector(".popup-btn-close"),
            s = t.querySelector(".popup-content");
        return r.addEventListener("click", n), t.addEventListener("click", n), i.addEventListener("click", function(e) {
                e.stopPropagation()
            }),
            function(e) {
                e && (s.innerHTML = '\n        <div class="popup-text">\n          <p>\n            '.concat(e, "\n          </p>\n        </div>\n      ")), t.classList.add("opened")
            }
    },
    settingRegisterForm = function(n, i) {
        function r(e) {
            return "" !== e.value.trim()
        }

        function s(e) {
            e.classList.add("error"), e.addEventListener("input", t), e.addEventListener("changeSelect", t), e.classList.contains("select-country") && $(e).on("select2:select", t)
        }

        function o(e, t) {
            for (var n = e; !n.classList.contains("form-input");) n = n.parentElement;
            var i = n.querySelector(".errors-block");
            i || ((i = document.createElement("div")).classList.add("errors-block"), n.appendChild(i)), i.textContent = t
        }

        function e(e) {
            var t = document.cookie.match(new RegExp("(?:^|; )" + e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
            return t ? decodeURIComponent(t[1]) : void 0
        }
        var t = function(e) {
                ! function(e) {
                    e.classList.contains("error") && (e.classList.remove("error"), e.removeEventListener("input", t))
                }(e.currentTarget), a(e.currentTarget)
            },
            a = function(e) {
                for (var t = e; !t.classList.contains("form-input");) t = t.parentElement;
                var n = t.querySelector(".errors-block");
                n && "" !== n.textContent && (n.textContent = "")
            },
            l = popup(),
            u = n.querySelector('input[name="first_name"]'),
            c = n.querySelector('input[name="password"]'),
            d = n.querySelector('input[name="email"]'),
            h = n.querySelector('input[name="country"]'),
            p = n.querySelector('select[name="select-country"]'),
            f = n.querySelector('input[name="phone"]'),
            g = n.querySelector('input[name="phone-code"]'),
            m = n.querySelector('input[name="phone-num"]'),
            v = n.querySelector('input[name="terms"]'),
            y = n.querySelector('input[name="ga_cid"]'),
            w = n.querySelector('input[name="affiliate_code"]'),
            _ = n.querySelector('input[name="partner_link"]'),
            b = n.querySelector('input[name="uri_query"]'),
            x = /^(|[a-zA-Z\-\s]+)$/,
            C = /^[-.+_a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/i,
            T = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/;
        if (y) {
            var E = document.cookie.match("(?:^|;)\\s*_ga=([^;]*)"),
                S = E ? decodeURIComponent(E[1]) : null;
            S && (E = S.match(/(\d+\.\d+)$/)), y.value = E ? E[1] : null
        }
        if (w || _)
            for (var A = window.location.search.slice(1).split("&"), k = 0; k < A.length; k++) {
                var L = A[k].split("=");
                "partner_link" === L[0] && _ ? _.value = L[1] : "affiliate_code" === L[0] && w && (w.value = L[1])
            }
        if (w && "" === w.value) {
            var D = e("jamcom");
            D && (w.value = D)
        }
        if (_ && "" === _.value) {
            var j = e("partner_link");
            j && (_.value = j)
        }
        var q = n.querySelector(".form-input-password-toggle");
        q && q.addEventListener("click", function() {
            "password" === c.getAttribute("type") ? c.setAttribute("type", "text") : c.setAttribute("type", "password")
        });
        var N, O = n.querySelector(".form-btn");
        b && (b.value = window.location.search.slice(1)), g && (g.readOnly = !0), m && window.intlTelInput && (N = window.intlTelInput(m, {
            utilsScript: srcUtils
        }));

        function I() {
            var e = "";
            if (r(m)) {
                if (!N.isValidNumber()) {
                    var t = N.getValidationError();
                    e = P[t]
                }
            } else e = window.translations && translations.fieldRequired ? translations.fieldRequired : "Field is required.";
            return "" !== e && (s(m), o(m, e)), "" !== e
        }
        var P = [window.translations && translations.invalidNumber ? translations.invalidNumber : "Invalid number", window.translations && translations.invalidCountryCode ? translations.invalidCountryCode : "Invalid country code", window.translations && translations.tooShort ? translations.tooShort : "Too short", window.translations && translations.tooLong ? translations.tooLong : "Too long", window.translations && translations.invalidNumber ? translations.invalidNumber : "Invalid number", window.translations && translations.invalidNumber ? translations.invalidNumber : "Invalid number"];
        p && ($.ajax({
            type: "GET",
            url: "https://www.monfex.com/api/location/countries",
            dataType: "json",
            success: function(e) {
                var t = document.createDocumentFragment(),
                    n = document.createElement("option");
                t.appendChild(n);
                for (var i = 0; i < e.length; i++) {
                    var r = e[i],
                        s = document.createElement("option");
                    s.value = r.country_code, s.setAttribute("data-code", r.dial_code), s.setAttribute("data-country", r.name), s.innerHTML = r.name, window.defaultСountry && r.name === defaultСountry && (s.selected = !0, h.value = r.name, g && (g.value = "+" + r.dial_code, g.classList.add("valid"), N.setCountry(r.country_code))), t.appendChild(s)
                }
                p.appendChild(t), $(p).select2({
                    placeholder: window.translations && translations.selectCountry ? translations.selectCountry : "Select country"
                })
            },
            error: function(e) {}
        }), $(p).on("select2:select", function(e) {
            e.currentTarget.classList.add("valid"), N.setCountry(e.params.data.id), h.value = e.params.data.element.dataset.country, g && (g.value = "+" + e.params.data.element.dataset.code, g.classList.add("valid")), m && (N.isValidNumber() ? m.classList.add("valid") : m.classList.remove("valid"))
        }), m && (m.addEventListener("input", function(e) {
            var t = e.currentTarget.value;
            t && !t.match(/^[\d]+$/) && (t = t.replace(/\D/g, "")), e.currentTarget.value = t.slice(0, 13), N.isValidNumber() ? m.classList.add("valid") : m.classList.remove("valid")
        }), m.addEventListener("blur", I)));

        function M() {
            var e = "";
            return r(u) ? (u.value.trim().length < 2 || 80 < u.value.trim().length || !x.test(u.value)) && (e = window.translations && translations.invalidFormat ? translations.invalidFormat : "Invalid format.") : e = window.translations && translations.fieldRequired ? translations.fieldRequired : "Field is required.", "" !== e && (s(u), o(u, e)), "" !== e
        }
        u && (u.addEventListener("input", function() {
            var e = u.value;
            e.match(/[^a-zA-Z\-\s]/) ? o(u, window.translations && translations.onlyLatinLetters ? translations.onlyLatinLetters : "Only latin letters (A-Z) and hyphens (-) are allowed.") : a(u);
            var t = e.match(/[^a-zA-Z\-\s]/) ? u.value.replace(/[^a-zA-Z\-\s]/, "").slice(0, 80) : e.slice(0, 80);
            u.value = t, r(u) && 2 <= t.trim().length && t.trim().length <= 80 && x.test(t) ? u.classList.add("valid") : u.classList.contains("valid") && u.classList.remove("valid")
        }), u.addEventListener("blur", M));

        function z() {
            var e = "";
            return r(d) ? 0 <= d.value.indexOf("+") ? e = window.translations && translations.invalidFormat ? translations.invalidFormat : "Invalid format." : C.test(d.value) || (e = window.translations && translations.invalidFormat ? translations.invalidFormat : "Invalid format.") : e = window.translations && translations.fieldRequired ? translations.fieldRequired : "Field is required.", "" !== e && (s(d), o(d, e)), "" !== e
        }
        d && (d.addEventListener("input", function() {
            r(d) && d.value.indexOf("+") < 0 && C.test(d.value) ? d.classList.add("valid") : d.classList.contains("valid") && d.classList.remove("valid")
        }), d.addEventListener("blur", z));

        function R() {
            var e = "";
            return r(c) ? c.value.trim().length < 6 && (e = window.translations && translations.weak ? translations.weak : "Weak - Please enter a stronger password.") : e = window.translations && translations.fieldRequired ? translations.fieldRequired : "Field is required.", "" !== e && (s(c), o(c, e)), "" !== e
        }
        c && (c.addEventListener("input", function(e) {
            var t = e.currentTarget.value,
                n = e.currentTarget.parentElement;
            "" === t.trim() ? n.setAttribute("class", "form-input-password-wrapper low") : t.trim().length < 6 ? n.setAttribute("class", "form-input-password-wrapper low") : !0 === T.test(t.trim()) ? n.setAttribute("class", "form-input-password-wrapper high") : 6 <= t.trim().length && n.setAttribute("class", "form-input-password-wrapper medium"), r(c) && 6 <= c.value.trim().length ? c.classList.add("valid") : c.classList.contains("valid") && c.classList.remove("valid")
        }), c.addEventListener("blur", R));
        n.addEventListener("submit", function(e) {
            if (e.preventDefault(), !O || !O.classList.contains("waiting")) {
                var t = !0;
                u && M() && (t = !1), p && function() {
                    var e = "";
                    return r(p) || (e = window.translations && translations.fieldRequired ? translations.fieldRequired : "Field is required."), "" !== e && (s(p), o(p, e)), "" !== e
                }() && (t = !1), d && z() && (t = !1), c && R() && (t = !1), m && I() && (t = !1), v && function() {
                    var e = "";
                    return v.checked || (e = window.translations && translations.acceptTerms ? translations.acceptTerms : 'You must accept "Terms of Service" and "Privacy Policy" in order to complete registration.'), "" !== e && (s(v), o(v, e)), "" !== e
                }() && (t = !1), t && (f && (f.value = g.value + m.value), $.ajax({
                    type: "POST",
                    url: n.getAttribute("action"),
                    dataType: "json",
                    data: $(n).serialize(),
                    beforeSend: function() {
                        O && O.classList.add("waiting")
                    },
                    complete: function() {
                        O && O.classList.remove("waiting")
                    },
                    success: function(e) {
                        "success" === e.status ? (i(e), window._mgq && setTimeout(function() {
                            _mgq.push(["MgSensorInvoke", "click01"])
                        }, 500)) : "error" === e.status && (15001 === e.error_code ? d && (s(d), o(d, window.translations && translations.emailAlreadyExists ? translations.emailAlreadyExists : "Email already exists.")) : 15002 === e.error_code ? m && (s(m), o(m, window.translations && translations.phoneAlreadyUse ? translations.phoneAlreadyUse : "This phone number is already in use.")) : (e.error_code, l(window.translations && translations.somethingWentWrong ? translations.somethingWentWrong : "Something Went Wrong. Please try again later.")))
                    },
                    error: function(e) {
                        l(window.translations && translations.somethingWentWrong ? translations.somethingWentWrong : "Something Went Wrong. Please try again later.")
                    }
                }))
            }
        })
    };
document.addEventListener("DOMContentLoaded", function() {
    var e = document.querySelectorAll(".form");
    if (0 < e.length)
        for (var t = function() {
                window.location.replace("https://www.monfex.com/ru/register/success")
            }, n = 0; n < e.length; n++) settingRegisterForm(e[n], t);
    var i = document.querySelector(".reviews-slider");
    i && $(i).owlCarousel({
        items: 3,
        loop: !0,
        margin: 10,
        nav: !0,
        responsive: {
            0: {
                items: 1
            },
            700: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    }), $(".btn-scroll-to").click(function(e) {
        e.preventDefault();
        var t = $(this).attr("href"),
            n = $(t).offset().top;
        $("html, body").animate({
            scrollTop: n
        }, 500)
    })
});
//# sourceMappingURL=all.min.js.map
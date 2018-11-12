/*! ecostyle version: 3.10.1*/
/*! ecostyle version: 3.10.1*/
/**
 *
 * Copyright 2013 LinkedIn Corp. All rights reserved.

 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 *     http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!function (t, e) {
    var n, a, i, o, s, r, l, c, u, d, h = window.Sizzle || null, f = t[e], p = "undefined", m = !1,
        g = typeof window.jQuery !== p, v = !1, y = window.document;
    try {
        v = typeof window.sessionStorage !== p
    } catch (b) {
    }
    d = {
        smoothScroll: !0,
        scrollDuration: 1e3,
        scrollTopMargin: 200,
        showCloseButton: !0,
        showPrevButton: !1,
        showNextButton: !0,
        bubbleWidth: 280,
        bubblePadding: 15,
        arrowWidth: 20,
        skipIfNoElement: !0,
        cookieName: "hopscotch.tour.state"
    }, f || (Array.isArray || (Array.isArray = function (t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }), u = function () {
        m && f.startTour()
    }, r = {
        addClass: function (t, e) {
            var n, a, i, o;
            if (t.className) {
                for (a = e.split(/\s+/), n = " " + t.className + " ", i = 0, o = a.length; o > i; ++i) n.indexOf(" " + a[i] + " ") < 0 && (n += a[i] + " ");
                t.className = n.replace(/^\s+|\s+$/g, "")
            } else t.className = e
        }, removeClass: function (t, e) {
            var n, a, i, o;
            for (a = e.split(/\s+/), n = " " + t.className + " ", i = 0, o = a.length; o > i; ++i) n = n.replace(" " + a[i] + " ", " ");
            t.className = n.replace(/^\s+|\s+$/g, "")
        }, getPixelValue: function (t) {
            var e = typeof t;
            return "number" === e ? t : "string" === e ? parseInt(t, 10) : 0
        }, valOrDefault: function (t, e) {
            return typeof t !== p ? t : e
        }, invokeCallbackArrayHelper: function (t) {
            var e;
            return Array.isArray(t) && (e = c[t[0]], "function" == typeof e) ? e.apply(this, t.slice(1)) : void 0
        }, invokeCallbackArray: function (t) {
            var e, n;
            if (Array.isArray(t)) {
                if ("string" == typeof t[0]) return r.invokeCallbackArrayHelper(t);
                for (e = 0, n = t.length; n > e; ++e) r.invokeCallback(t[e])
            }
        }, invokeCallback: function (t) {
            return "function" == typeof t ? t() : "string" == typeof t && c[t] ? c[t]() : r.invokeCallbackArray(t)
        }, invokeEventCallbacks: function (t, e) {
            var n, a, i = l[t];
            if (e) return this.invokeCallback(e);
            for (n = 0, a = i.length; a > n; ++n) this.invokeCallback(i[n].cb)
        }, getScrollTop: function () {
            var t;
            return t = typeof window.pageYOffset !== p ? window.pageYOffset : y.documentElement.scrollTop
        }, getScrollLeft: function () {
            var t;
            return t = typeof window.pageXOffset !== p ? window.pageXOffset : y.documentElement.scrollLeft
        }, getWindowHeight: function () {
            return window.innerHeight || y.documentElement.clientHeight
        }, getWindowWidth: function () {
            return window.innerWidth || y.documentElement.clientWidth
        }, addEvtListener: function (t, e, n) {
            return t.addEventListener ? t.addEventListener(e, n, !1) : t.attachEvent("on" + e, n)
        }, removeEvtListener: function (t, e, n) {
            return t.removeEventListener ? t.removeEventListener(e, n, !1) : t.detachEvent("on" + e, n)
        }, documentIsReady: function () {
            return "complete" === y.readyState || "interactive" === y.readyState
        }, evtPreventDefault: function (t) {
            t.preventDefault ? t.preventDefault() : event && (event.returnValue = !1)
        }, extend: function (t, e) {
            var n;
            for (n in e) e.hasOwnProperty(n) && (t[n] = e[n])
        }, getStepTargetHelper: function (t) {
            var e;
            return /^[#\.]/.test(t) ? y.querySelector ? y.querySelector(t) : g ? (e = jQuery(t), e.length ? e[0] : null) : h ? (e = new h(t), e.length ? e[0] : null) : /^#[a-zA-Z][\w-_:.]*$/.test(t) ? y.getElementById(t.substring(1)) : null : y.getElementById(t)
        }, getStepTarget: function (t) {
            var e;
            if (!t || !t.target) return null;
            if ("string" == typeof t.target) return t.target = r.getStepTargetHelper(t.target), t.target;
            if (Array.isArray(t.target)) {
                var n, a;
                for (n = 0, a = t.target.length; a > n; n++) if ("string" == typeof t.target[n] && (e = r.getStepTargetHelper(t.target[n]))) return t.target = e, e;
                return null
            }
            return t.target
        }, getI18NString: function (t) {
            return s[t] || o[t]
        }, setState: function (t, e, n) {
            var a, i = "";
            v ? sessionStorage.setItem(t, e) : (n && (a = new Date, a.setTime(a.getTime() + 24 * n * 60 * 60 * 1e3), i = "; expires=" + a.toGMTString()), y.cookie = t + "=" + e + i + "; path=/")
        }, getState: function (t) {
            var e, n, a, i = t + "=", o = y.cookie.split(";");
            if (v) a = sessionStorage.getItem(t); else for (e = 0; e < o.length; e++) {
                for (n = o[e]; " " === n.charAt(0);) n = n.substring(1, n.length);
                if (0 === n.indexOf(i)) {
                    a = n.substring(i.length, n.length);
                    break
                }
            }
            return a
        }, clearState: function (t) {
            v ? sessionStorage.removeItem(t) : this.setState(t, "", -1)
        }
    }, r.addEvtListener(window, "load", u), l = {
        next: [],
        prev: [],
        start: [],
        end: [],
        show: [],
        error: [],
        close: []
    }, c = {}, o = {
        stepNums: null,
        nextBtn: "Next",
        prevBtn: "Back",
        doneBtn: "Done",
        skipBtn: "Skip",
        closeTooltip: "Close"
    }, s = {}, a = function (t) {
        this.init(t)
    }, a.prototype = {
        isShowing: !1, currStep: void 0, _createButton: function (t, e) {
            var n = y.createElement("button"), a = "hopscotch-nav-button";
            return n.id = t, e && (n.innerHTML = e), a += t.indexOf("prev") >= 0 ? " prev" : " next", r.addClass(n, a), n
        }, setPosition: function (t) {
            var e, n, a, i, o, s, l, c = 6, u = r.getStepTarget(t), d = this.element, h = this.arrowEl;
            e = r.getPixelValue(t.width) || this.opt.bubbleWidth, a = r.valOrDefault(t.padding, this.opt.bubblePadding), r.removeClass(d, "fade-in-down fade-in-up fade-in-left fade-in-right"), !t.placement && t.orientation && (t.placement = t.orientation), i = u.getBoundingClientRect(), "top" === t.placement ? (n = d.offsetHeight, o = i.top - n - this.opt.arrowWidth, s = i.left) : "bottom" === t.placement ? (o = i.bottom + this.opt.arrowWidth, s = i.left) : "left" === t.placement ? (o = i.top, s = i.left - e - 2 * a - 2 * c - this.opt.arrowWidth) : "right" === t.placement && (o = i.top, s = i.right + this.opt.arrowWidth), l = "center" !== t.arrowOffset ? r.getPixelValue(t.arrowOffset) : t.arrowOffset, l ? "top" === t.placement || "bottom" === t.placement ? (h.style.top = "", "center" === l ? h.style.left = e / 2 + a - h.offsetWidth / 2 + "px" : h.style.left = l + "px") : ("left" === t.placement || "right" === t.placement) && (h.style.left = "", "center" === l ? (n = n || d.offsetHeight, h.style.top = n / 2 + a - h.offsetHeight / 2 + "px") : h.style.top = l + "px") : (h.style.top = "", h.style.left = ""), "center" === t.xOffset ? s = i.left + u.offsetWidth / 2 - e / 2 - a : s += r.getPixelValue(t.xOffset), "center" === t.yOffset ? (n = n || d.offsetHeight, o = i.top + u.offsetHeight / 2 - n / 2 - a) : o += r.getPixelValue(t.yOffset), t.fixedElement || (o += r.getScrollTop(), s += r.getScrollLeft()), d.style.position = t.fixedElement ? "fixed" : "absolute", d.style.top = o + "px", d.style.left = s + "px"
        }, _initNavButtons: function () {
            var t = y.createElement("div");
            return this.prevBtnEl = this._createButton("hopscotch-prev", r.getI18NString("prevBtn")), this.nextBtnEl = this._createButton("hopscotch-next", r.getI18NString("nextBtn")), this.doneBtnEl = this._createButton("hopscotch-done", r.getI18NString("doneBtn")), this.ctaBtnEl = this._createButton("hopscotch-cta"), r.addClass(this.doneBtnEl, "hide"), t.appendChild(this.prevBtnEl), t.appendChild(this.ctaBtnEl), t.appendChild(this.nextBtnEl), t.appendChild(this.doneBtnEl), r.addEvtListener(this.prevBtnEl, "click", function (t) {
                f.prevStep(!0)
            }), r.addEvtListener(this.nextBtnEl, "click", function (t) {
                f.nextStep(!0)
            }), r.addEvtListener(this.doneBtnEl, "click", function (t) {
                f.endTour()
            }), t.className = "hopscotch-actions", this.buttonsEl = t, this.containerEl.appendChild(t), this
        }, _getCloseFn: function () {
            var t = this;
            return this.closeFn || (this.closeFn = function (e) {
                t.opt.onClose && r.invokeCallback(t.opt.onClose), t.opt.id && !t.opt.isTourBubble ? f.getCalloutManager().removeCallout(t.opt.id) : t.destroy(), r.evtPreventDefault(e)
            }), this.closeFn
        }, initCloseButton: function () {
            var t = y.createElement("a");
            return t.className = "hopscotch-bubble-close", t.href = "#", t.title = r.getI18NString("closeTooltip"), t.innerHTML = r.getI18NString("closeTooltip"), this.opt.isTourBubble ? r.addEvtListener(t, "click", function (t) {
                var e = f.getCurrStepNum(), n = f.getCurrTour(), a = e === n.steps.length - 1;
                r.invokeEventCallbacks("close"), f.endTour(!0, a), t.preventDefault ? t.preventDefault() : event && (event.returnValue = !1)
            }) : r.addEvtListener(t, "click", this._getCloseFn()), r.valOrDefault(this.opt.showCloseButton, !0) || r.addClass(t, "hide"), this.closeBtnEl = t, this.containerEl.appendChild(t), this
        }, _initArrow: function () {
            var t, e;
            return this.arrowEl = y.createElement("div"), this.arrowEl.className = "hopscotch-bubble-arrow-container", e = y.createElement("div"), e.className = "hopscotch-bubble-arrow-border", t = y.createElement("div"), t.className = "hopscotch-bubble-arrow", this.arrowEl.appendChild(e), this.arrowEl.appendChild(t), this.element.appendChild(this.arrowEl), this
        }, _setupCTAButton: function (t) {
            var e = this;
            this._showButton(this.ctaBtnEl, !!t.showCTAButton), t.showCTAButton && t.ctaLabel && (this.ctaBtnEl.innerHTML = t.ctaLabel, this._ctaFn = function () {
                e.opt.isTourBubble || f.getCalloutManager().removeCallout(t.id), t.onCTA && "function" == typeof t.onCTA && t.onCTA()
            }, r.addEvtListener(this.ctaBtnEl, "click", this._ctaFn))
        }, _removeCTACallback: function () {
            this.ctaBtnEl && this._ctaFn && (r.removeEvtListener(this.ctaBtnEl, "click", this._ctaFn), this._ctaFn = null)
        }, render: function (t, e, n, a) {
            var i, o, s, l, c = this.element;
            return t ? this.currStep = t : this.currStep && (t = this.currStep), !t.placement && t.orientation && (t.placement = t.orientation), i = r.valOrDefault(t.showNextButton, this.opt.showNextButton), o = r.valOrDefault(t.showPrevButton, this.opt.showPrevButton), this.setTitle(t.title || ""), this.setContent(t.content || ""), this.opt.isTourBubble && this.setNum(e), this.placement = t.placement, this.showPrevButton(this.prevBtnEl && o && e > 0), this.showNextButton(this.nextBtnEl && i && !n), this.nextBtnEl.innerHTML = t.showSkip ? r.getI18NString("skipBtn") : r.getI18NString("nextBtn"), n ? r.removeClass(this.doneBtnEl, "hide") : r.addClass(this.doneBtnEl, "hide"), this._setupCTAButton(t), this._setArrow(t.placement), s = r.getPixelValue(t.width) || this.opt.bubbleWidth, l = r.valOrDefault(t.padding, this.opt.bubblePadding), this.containerEl.style.width = s + "px", this.containerEl.style.padding = l + "px", c.style.zIndex = t.zindex || "", "top" === t.placement ? (c.style.top = "-9999px", c.style.left = "-9999px", r.removeClass(c, "hide"), this.setPosition(t), r.addClass(c, "hide")) : this.setPosition(t), a && a(!t.fixedElement), this
        }, setTitle: function (t) {
            return t ? (this.titleEl.innerHTML = t, r.removeClass(this.titleEl, "hide")) : r.addClass(this.titleEl, "hide"), this
        }, setContent: function (t) {
            return t ? (this.contentEl.innerHTML = t, r.removeClass(this.contentEl, "hide")) : r.addClass(this.contentEl, "hide"), this
        }, setNum: function (t) {
            var e = r.getI18NString("stepNums");
            e && t < e.length ? t = e[t] : t += 1, this.numberEl.innerHTML = t
        }, _setArrow: function (t) {
            r.removeClass(this.arrowEl, "down up right left"), "top" === t ? r.addClass(this.arrowEl, "down") : "bottom" === t ? r.addClass(this.arrowEl, "up") : "left" === t ? r.addClass(this.arrowEl, "right") : "right" === t && r.addClass(this.arrowEl, "left")
        }, _getArrowDirection: function () {
            return "top" === this.placement ? "down" : "bottom" === this.placement ? "up" : "left" === this.placement ? "right" : "right" === this.placement ? "left" : void 0
        }, show: function () {
            var t = this, e = "fade-in-" + this._getArrowDirection(), n = 1e3;
            return r.removeClass(this.element, "hide"), r.addClass(this.element, e), setTimeout(function () {
                r.removeClass(t.element, "invisible")
            }, 50), setTimeout(function () {
                r.removeClass(t.element, e)
            }, n), this.isShowing = !0, this
        }, hide: function (t) {
            var e = this.element;
            return t = r.valOrDefault(t, !0), e.style.top = "", e.style.left = "", t ? (r.addClass(e, "hide"), r.removeClass(e, "invisible")) : (r.removeClass(e, "hide"), r.addClass(e, "invisible")), r.removeClass(e, "animate fade-in-up fade-in-down fade-in-right fade-in-left"), this.isShowing = !1, this
        }, _showButton: function (t, e, n) {
            var a = "hide";
            n && (a = "hide-all"), typeof e === p && (e = !0), e ? r.removeClass(t, a) : r.addClass(t, a)
        }, showPrevButton: function (t) {
            this._showButton(this.prevBtnEl, t)
        }, showNextButton: function (t) {
            this._showButton(this.nextBtnEl, t)
        }, showCloseButton: function (t) {
            this._showButton(this.closeBtnEl, t)
        }, destroy: function () {
            var t = this.element;
            t && t.parentNode.removeChild(t), this.closeBtnEl && r.removeEvtListener(this.closeBtnEl, "click", this._getCloseFn()), this.ctaBtnEl && this.onCTA && this._removeCTACallback()
        }, updateButtons: function () {
            this.showPrevButton(this.opt.showPrevButton), this.showNextButton(this.opt.showNextButton), this.showCloseButton(this.opt.showCloseButton), this.prevBtnEl.innerHTML = r.getI18NString("prevBtn"), this.nextBtnEl.innerHTML = r.getI18NString("nextBtn"), this.doneBtnEl.innerHTML = r.getI18NString("doneBtn")
        }, init: function (t) {
            var e, n, a, i = y.createElement("div"), o = y.createElement("div"), s = y.createElement("div"), l = this,
                c = !1;
            this.element = i, this.containerEl = o, this.titleEl = y.createElement("h3"), this.contentEl = y.createElement("div"), r.addClass(this.titleEl, "hopscotch-title"), r.addClass(this.contentEl, "hopscotch-content"), a = {
                showPrevButton: d.showPrevButton,
                showNextButton: d.showNextButton,
                bubbleWidth: d.bubbleWidth,
                bubblePadding: d.bubblePadding,
                arrowWidth: d.arrowWidth,
                showNumber: !0,
                isTourBubble: !0
            }, t = typeof t === p ? {} : t, r.extend(a, t), this.opt = a, i.className = "hopscotch-bubble animated", o.className = "hopscotch-bubble-container", a.isTourBubble || (i.className += " hopscotch-callout"), a.isTourBubble ? (this.numberEl = y.createElement("span"), this.numberEl.className = "hopscotch-bubble-number", o.appendChild(this.numberEl)) : r.addClass(i, "no-number"), s.appendChild(this.titleEl), s.appendChild(this.contentEl), s.className = "hopscotch-bubble-content", o.appendChild(s), i.appendChild(o), this._initNavButtons(), this.initCloseButton(), this._initArrow(), e = function () {
                !c && l.isShowing && (c = !0, setTimeout(function () {
                    l.setPosition(l.currStep), c = !1
                }, 100))
            }, r.addEvtListener(window, "resize", e), this.hide(), r.documentIsReady() ? y.body.appendChild(i) : (y.addEventListener ? (n = function () {
                y.removeEventListener("DOMContentLoaded", n), window.removeEventListener("load", n), y.body.appendChild(i)
            }, y.addEventListener("DOMContentLoaded", n, !1)) : (n = function () {
                "complete" === y.readyState && (y.detachEvent("onreadystatechange", n), window.detachEvent("onload", n), y.body.appendChild(i))
            }, y.attachEvent("onreadystatechange", n)), r.addEvtListener(window, "load", n))
        }
    }, i = function () {
        var t = {};
        this.createCallout = function (e) {
            var n;
            if (!e.id) throw"Must specify a callout id.";
            if (t[e.id]) throw"Callout by that id already exists. Please choose a unique id.";
            return e.showNextButton = e.showPrevButton = !1, e.isTourBubble = !1, n = new a(e), t[e.id] = n, e.target && n.render(e, null, null, function () {
                n.show()
            }), n
        }, this.getCallout = function (e) {
            return t[e]
        }, this.removeAllCallouts = function () {
            var e;
            for (e in t) t.hasOwnProperty(e) && this.removeCallout(e)
        }, this.removeCallout = function (e) {
            var n = t[e];
            t[e] = null, n && n.destroy()
        }
    }, n = function (t) {
        var e, n, o, u, h, f, v, b, w = this, _ = function (t) {
            return e || (e = new a(o)), t && (r.extend(e.opt, {
                bubblePadding: x("bubblePadding"),
                bubbleWidth: x("bubbleWidth"),
                showNextButton: x("showNextButton"),
                showPrevButton: x("showPrevButton"),
                showCloseButton: x("showCloseButton"),
                arrowWidth: x("arrowWidth")
            }), e.updateButtons()), e
        }, x = function (t) {
            return "undefined" == typeof o ? d[t] : r.valOrDefault(o[t], d[t])
        }, k = function () {
            var t;
            return t = 0 > h || h >= u.steps.length ? null : u.steps[h]
        }, C = function () {
            w.nextStep()
        }, $ = function (t) {
            var e, n, a, i, o, s, l = _(), c = l.element, u = r.getPixelValue(c.style.top),
                d = u + r.getPixelValue(c.offsetHeight), h = r.getStepTarget(k()), f = h.getBoundingClientRect(),
                m = f.top + r.getScrollTop(), v = f.bottom + r.getScrollTop(), b = m > u ? u : m, w = d > v ? d : v,
                C = r.getScrollTop(), $ = C + r.getWindowHeight(), T = b - x("scrollTopMargin");
            b >= C && (b <= C + x("scrollTopMargin") || $ >= w) ? t && t() : x("smoothScroll") ? typeof YAHOO !== p && typeof YAHOO.env !== p && typeof YAHOO.env.ua !== p && typeof YAHOO.util !== p && typeof YAHOO.util.Scroll !== p ? (e = YAHOO.env.ua.webkit ? y.body : y.documentElement, a = YAHOO.util.Easing ? YAHOO.util.Easing.easeOut : void 0, n = new YAHOO.util.Scroll(e, {scroll: {to: [0, T]}}, x("scrollDuration") / 1e3, a), n.onComplete.subscribe(t), n.animate()) : g ? jQuery("body, html").animate({scrollTop: T}, x("scrollDuration"), t) : (0 > T && (T = 0), i = C > b ? -1 : 1, o = Math.abs(C - T) / (x("scrollDuration") / 10), (s = function () {
                var e = r.getScrollTop(), n = e + i * o;
                return i > 0 && n >= T || 0 > i && T >= n ? (n = T, t && t(), void window.scrollTo(0, n)) : (window.scrollTo(0, n), r.getScrollTop() === e ? void(t && t()) : void setTimeout(s, 10))
            })()) : (window.scrollTo(0, T), t && t())
        }, T = function (t, e) {
            var n, a, i;
            h + t >= 0 && h + t < u.steps.length ? (h += t, a = k(), i = function () {
                n = r.getStepTarget(a), n ? e(h) : (r.invokeEventCallbacks("error"), T(t, e))
            }, a.delay ? setTimeout(i, a.delay) : i()) : e(-1)
        }, S = function (t, e) {
            var n, a, i, o, s = _(), l = this;
            if (s.hide()._removeCTACallback(), t = r.valOrDefault(t, !0), n = k(), a = n, i = e > 0 ? a.multipage : h > 0 && u.steps[h - 1].multipage, o = function (n) {
                var o;
                return -1 === n ? this.endTour(!0) : (t && (o = e > 0 ? r.invokeEventCallbacks("next", a.onNext) : r.invokeEventCallbacks("prev", a.onPrev)), i ? void r.setState(x("cookieName"), u.id + ":" + h, 1) : (o = r.valOrDefault(o, !0), void(o ? this.showStep(n) : this.endTour(!1))))
            }, !i && x("skipIfNoElement")) T(e, function (t) {
                o.call(l, t)
            }); else if (h + e >= 0 && h + e < u.steps.length) {
                if (h += e, n = k(), !r.getStepTarget(n) && !i) return r.invokeEventCallbacks("error"), this.endTour(!0, !1);
                o.call(this, h)
            }
            return this
        }, D = function (t) {
            var e, n, a, i = {};
            for (e in t) t.hasOwnProperty(e) && "id" !== e && "steps" !== e && (i[e] = t[e]);
            return b.call(this, i, !0), n = r.getState(x("cookieName")), n && (a = n.split(":"), f = a[0], v = a[1], v = parseInt(v, 10)), this
        }, E = function (t, e) {
            var n, a;
            if (h = t || 0, n = k(), a = r.getStepTarget(n)) return void e(h);
            if (!a) {
                if (r.invokeEventCallbacks("error"), x("skipIfNoElement")) return void T(1, e);
                h = -1, e(h)
            }
        }, M = function (t) {
            var e, n, a = u.steps[t], i = u.steps, o = i.length, s = u.id + ":" + t, l = _(), c = r.getStepTarget(a);
            n = function () {
                l.show(), r.invokeEventCallbacks("show", a.onShow)
            }, h = t, l.hide(!1), e = t === o - 1, l.render(a, t, e, function (t) {
                t ? $(n) : n(), a.nextOnTargetClick && r.addEvtListener(c, "click", C)
            }), r.setState(x("cookieName"), s, 1)
        }, O = function (t) {
            t && this.configure(t)
        };
        this.getCalloutManager = function () {
            return typeof n === p && (n = new i), n
        }, this.startTour = function (t, e) {
            var n, a = this;
            if (u || (u = t, D.call(this, t)), typeof e !== p) {
                if (e >= u.steps.length) throw"Specified step number out of bounds.";
                h = e
            }
            return r.documentIsReady() ? (h || u.id !== f || typeof v === p ? h || (h = 0) : h = v, E(h, function (t) {
                var e = -1 !== t && r.getStepTarget(u.steps[t]);
                return e ? (r.invokeEventCallbacks("start"), n = _(), n.hide(!1), a.isActive = !0, void(r.getStepTarget(k()) ? a.showStep(t) : (r.invokeEventCallbacks("error"), x("skipIfNoElement") && a.nextStep(!1)))) : void a.endTour(!1, !1)
            }), this) : (m = !0, this)
        }, this.showStep = function (t) {
            var e = u.steps[t];
            return e.delay ? setTimeout(function () {
                M(t)
            }, e.delay) : M(t), this
        }, this.prevStep = function (t) {
            return S.call(this, t, -1), this
        }, this.nextStep = function (t) {
            var e = k(), n = r.getStepTarget(e);
            return e.nextOnTargetClick && r.removeEvtListener(n, "click", C), S.call(this, t, 1), this
        }, this.endTour = function (t, e) {
            var n = _();
            return t = r.valOrDefault(t, !0), e = r.valOrDefault(e, !0), h = 0, v = void 0, n.hide(), t && r.clearState(x("cookieName")), this.isActive && (this.isActive = !1, u && e && r.invokeEventCallbacks("end")), this.removeCallbacks(null, !0), this.resetDefaultOptions(), u = null, this
        }, this.getCurrTour = function () {
            return u
        }, this.getCurrTarget = function () {
            return r.getStepTarget(k())
        }, this.getCurrStepNum = function () {
            return h
        }, this.listen = function (t, e, n) {
            return t && l[t].push({cb: e, fromTour: n}), this
        }, this.unlisten = function (t, e) {
            var n, a, i = l[t];
            for (n = 0, a = i.length; a > n; ++n) i[n] === e && i.splice(n, 1);
            return this
        }, this.removeCallbacks = function (t, e) {
            var n, a, i, o;
            for (o in l) if (!t || t === o) if (e) for (n = l[o], a = 0, i = n.length; i > a; ++a) n[a].fromTour && (n.splice(a--, 1), --i); else l[o] = [];
            return this
        }, this.registerHelper = function (t, e) {
            "string" == typeof t && "function" == typeof e && (c[t] = e)
        }, this.unregisterHelper = function (t) {
            c[t] = null
        }, this.invokeHelper = function (t) {
            var e, n, a = [];
            for (e = 1, n = arguments.length; n > e; ++e) a.push(arguments[e]);
            c[t] && c[t].call(null, a)
        }, this.setCookieName = function (t) {
            return o.cookieName = t, this
        }, this.resetDefaultOptions = function () {
            return o = {}, this
        }, this.resetDefaultI18N = function () {
            return s = {}, this
        }, this.getState = function () {
            return r.getState(x("cookieName"))
        }, b = function (t, e) {
            var n, a, i, l, c = ["next", "prev", "start", "end", "show", "error", "close"];
            for (o || this.resetDefaultOptions(), r.extend(o, t), t && r.extend(s, t.i18n), i = 0, l = c.length; l > i; ++i) a = "on" + c[i].charAt(0).toUpperCase() + c[i].substring(1), t[a] && this.listen(c[i], t[a], e);
            return n = _(!0), this
        }, this.configure = function (t) {
            return b.call(this, t, !1)
        }, O.call(this, t)
    }, f = new n, t[e] = f)
}(window, "hopscotch"), /*!
 * jQuery Cookie Plugin v1.4.0
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
    }(function (t) {
        function e(t) {
            return r.raw ? t : encodeURIComponent(t)
        }

        function n(t) {
            return r.raw ? t : decodeURIComponent(t)
        }

        function a(t) {
            return e(r.json ? JSON.stringify(t) : String(t))
        }

        function i(t) {
            0 === t.indexOf('"') && (t = t.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
                return t = decodeURIComponent(t.replace(s, " ")), r.json ? JSON.parse(t) : t
            } catch (e) {
            }
        }

        function o(e, n) {
            var a = r.raw ? e : i(e);
            return t.isFunction(n) ? n(a) : a
        }

        var s = /\+/g, r = t.cookie = function (i, s, l) {
            if (void 0 !== s && !t.isFunction(s)) {
                if (l = t.extend({}, r.defaults, l), "number" == typeof l.expires) {
                    var c = l.expires, u = l.expires = new Date;
                    u.setTime(+u + 864e5 * c)
                }
                return document.cookie = [e(i), "=", a(s), l.expires ? "; expires=" + l.expires.toUTCString() : "", l.path ? "; path=" + l.path : "", l.domain ? "; domain=" + l.domain : "", l.secure ? "; secure" : ""].join("")
            }
            for (var d = i ? void 0 : {}, h = document.cookie ? document.cookie.split("; ") : [], f = 0, p = h.length; p > f; f++) {
                var m = h[f].split("="), g = n(m.shift()), v = m.join("=");
                if (i && i === g) {
                    d = o(v, s);
                    break
                }
                i || void 0 === (v = o(v)) || (d[g] = v)
            }
            return d
        };
        r.defaults = {}, t.removeCookie = function (e, n) {
            return void 0 === t.cookie(e) ? !1 : (t.cookie(e, "", t.extend({}, n, {expires: -1})), !t.cookie(e))
        }
    }), /**
 * jquery.mask.js
 * @version: v1.6.4
 * @author: Igor Escobar
 *
 * Created by Igor Escobar on 2012-03-10. Please report any bug at http://blog.igorescobar.com
 *
 * Copyright (c) 2012 Igor Escobar http://blog.igorescobar.com
 *
 * The MIT License (http://www.opensource.org/licenses/mit-license.php)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t(window.jQuery || window.Zepto)
    }(function (t) {
        "use strict";
        var e = function (e, n, a) {
            var i, o = this;
            e = t(e), n = "function" == typeof n ? n(e.val(), void 0, e, a) : n, o.init = function () {
                a = a || {}, o.byPassKeys = [9, 16, 17, 18, 36, 37, 38, 39, 40, 91], o.translation = {
                    0: {pattern: /\d/},
                    9: {pattern: /\d/, optional: !0},
                    "#": {pattern: /\d/, recursive: !0},
                    A: {pattern: /[a-zA-Z0-9]/},
                    S: {pattern: /[a-zA-Z]/}
                }, o.translation = t.extend({}, o.translation, a.translation), o = t.extend(!0, {}, o, a), e.each(function () {
                    a.maxlength !== !1 && e.attr("maxlength", n.length), a.placeholder && e.attr("placeholder", a.placeholder), e.attr("autocomplete", "off"), s.destroyEvents(), s.events();
                    var t = s.getCaret();
                    s.val(s.getMasked()), s.setCaret(t + s.getMaskCharactersBeforeCount(t, !0))
                })
            };
            var s = {
                getCaret: function () {
                    var t, n = 0, a = e.get(0), i = document.selection, o = a.selectionStart;
                    return i && !~navigator.appVersion.indexOf("MSIE 10") ? (t = i.createRange(), t.moveStart("character", e.is("input") ? -e.val().length : -e.text().length), n = t.text.length) : (o || "0" === o) && (n = o), n
                }, setCaret: function (t) {
                    if (e.is(":focus")) {
                        var n, a = e.get(0);
                        a.setSelectionRange ? a.setSelectionRange(t, t) : a.createTextRange && (n = a.createTextRange(), n.collapse(!0), n.moveEnd("character", t), n.moveStart("character", t), n.select())
                    }
                }, events: function () {
                    e.on("keydown.mask", function () {
                        i = s.val()
                    }), e.on("keyup.mask", s.behaviour), e.on("paste.mask drop.mask", function () {
                        setTimeout(function () {
                            e.keydown().keyup()
                        }, 100)
                    }), e.on("change.mask", function () {
                        e.data("changeCalled", !0)
                    }), e.on("blur.mask", function (e) {
                        var n = t(e.target);
                        n.prop("defaultValue") !== n.val() && (n.prop("defaultValue", n.val()), n.data("changeCalled") || n.trigger("change")), n.data("changeCalled", !1)
                    }), e.on("focusout.mask", function () {
                        a.clearIfNotMatch && s.val().length < n.length && s.val("")
                    })
                }, destroyEvents: function () {
                    e.off("keydown.mask keyup.mask paste.mask drop.mask change.mask blur.mask focusout.mask").removeData("changeCalled")
                }, val: function (t) {
                    var n = e.is("input");
                    return arguments.length > 0 ? n ? e.val(t) : e.text(t) : n ? e.val() : e.text()
                }, getMaskCharactersBeforeCount: function (t, e) {
                    for (var a = 0, i = 0, s = n.length; s > i && t > i; i++) o.translation[n.charAt(i)] || (t = e ? t + 1 : t, a++);
                    return a
                }, determineCaretPos: function (t, e, a, i) {
                    var r = o.translation[n.charAt(Math.min(t - 1, n.length - 1))];
                    return r ? Math.min(t + a - e - i, a) : s.determineCaretPos(t + 1, e, a, i)
                }, behaviour: function (e) {
                    e = e || window.event;
                    var n = e.keyCode || e.which;
                    if (-1 === t.inArray(n, o.byPassKeys)) {
                        var a = s.getCaret(), i = s.val(), r = i.length, l = r > a, c = s.getMasked(), u = c.length,
                            d = s.getMaskCharactersBeforeCount(u - 1) - s.getMaskCharactersBeforeCount(r - 1);
                        return c !== i && s.val(c), !l || 65 === n && e.ctrlKey || (8 !== n && 46 !== n && (a = s.determineCaretPos(a, r, u, d)), s.setCaret(a)), s.callbacks(e)
                    }
                }, getMasked: function (t) {
                    var e, i, r = [], l = s.val(), c = 0, u = n.length, d = 0, h = l.length, f = 1, p = "push", m = -1;
                    for (a.reverse ? (p = "unshift", f = -1, e = 0, c = u - 1, d = h - 1, i = function () {
                        return c > -1 && d > -1
                    }) : (e = u - 1, i = function () {
                        return u > c && h > d
                    }); i();) {
                        var g = n.charAt(c), v = l.charAt(d), y = o.translation[g];
                        y ? (v.match(y.pattern) ? (r[p](v), y.recursive && (-1 === m ? m = c : c === e && (c = m - f), e === m && (c -= f)), c += f) : y.optional && (c += f, d -= f), d += f) : (t || r[p](g), v === g && (d += f), c += f)
                    }
                    var b = n.charAt(e);
                    return u !== h + 1 || o.translation[b] || r.push(b), r.join("")
                }, callbacks: function (t) {
                    var o = s.val(), r = s.val() !== i;
                    r === !0 && "function" == typeof a.onChange && a.onChange(o, t, e, a), r === !0 && "function" == typeof a.onKeyPress && a.onKeyPress(o, t, e, a), "function" == typeof a.onComplete && o.length === n.length && a.onComplete(o, t, e, a)
                }
            };
            o.remove = function () {
                var t = s.getCaret(), e = s.getMaskCharactersBeforeCount(t);
                s.destroyEvents(), s.val(o.getCleanVal()).removeAttr("maxlength"), s.setCaret(t - e)
            }, o.getCleanVal = function () {
                return s.getMasked(!0)
            }, o.init()
        };
        t.fn.mask = function (n, a) {
            return this.unmask(), this.each(function () {
                t(this).data("mask", new e(this, n, a))
            })
        }, t.fn.unmask = function () {
            return this.each(function () {
                try {
                    t(this).data("mask").remove()
                } catch (e) {
                }
            })
        }, t.fn.cleanVal = function () {
            return t(this).data("mask").getCleanVal()
        }, t("*[data-mask]").each(function () {
            var e = t(this), n = {}, a = "data-mask-";
            "true" === e.attr(a + "reverse") && (n.reverse = !0), "false" === e.attr(a + "maxlength") && (n.maxlength = !1), "true" === e.attr(a + "clearifnotmatch") && (n.clearIfNotMatch = !0), e.mask(e.attr("data-mask"), n)
        })
    }),
//! moment.js
//! version : 2.5.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
    function (t) {
        function e() {
            return {
                empty: !1,
                unusedTokens: [],
                unusedInput: [],
                overflow: -2,
                charsLeftOver: 0,
                nullInput: !1,
                invalidMonth: null,
                invalidFormat: !1,
                userInvalidated: !1,
                iso: !1
            }
        }

        function n(t, e) {
            return function (n) {
                return u(t.call(this, n), e)
            }
        }

        function a(t, e) {
            return function (n) {
                return this.lang().ordinal(t.call(this, n), e)
            }
        }

        function i() {
        }

        function o(t) {
            x(t), r(this, t)
        }

        function s(t) {
            var e = g(t), n = e.year || 0, a = e.month || 0, i = e.week || 0, o = e.day || 0, s = e.hour || 0,
                r = e.minute || 0, l = e.second || 0, c = e.millisecond || 0;
            this._milliseconds = +c + 1e3 * l + 6e4 * r + 36e5 * s, this._days = +o + 7 * i, this._months = +a + 12 * n, this._data = {}, this._bubble()
        }

        function r(t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            return e.hasOwnProperty("toString") && (t.toString = e.toString), e.hasOwnProperty("valueOf") && (t.valueOf = e.valueOf), t
        }

        function l(t) {
            var e, n = {};
            for (e in t) t.hasOwnProperty(e) && gt.hasOwnProperty(e) && (n[e] = t[e]);
            return n
        }

        function c(t) {
            return 0 > t ? Math.ceil(t) : Math.floor(t)
        }

        function u(t, e, n) {
            for (var a = "" + Math.abs(t), i = t >= 0; a.length < e;) a = "0" + a;
            return (i ? n ? "+" : "" : "-") + a
        }

        function d(t, e, n, a) {
            var i, o, s = e._milliseconds, r = e._days, l = e._months;
            s && t._d.setTime(+t._d + s * n), (r || l) && (i = t.minute(), o = t.hour()), r && t.date(t.date() + r * n), l && t.month(t.month() + l * n), s && !a && at.updateOffset(t), (r || l) && (t.minute(i), t.hour(o))
        }

        function h(t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        }

        function f(t) {
            return "[object Date]" === Object.prototype.toString.call(t) || t instanceof Date
        }

        function p(t, e, n) {
            var a, i = Math.min(t.length, e.length), o = Math.abs(t.length - e.length), s = 0;
            for (a = 0; i > a; a++) (n && t[a] !== e[a] || !n && y(t[a]) !== y(e[a])) && s++;
            return s + o
        }

        function m(t) {
            if (t) {
                var e = t.toLowerCase().replace(/(.)s$/, "$1");
                t = Ut[t] || Gt[e] || e
            }
            return t
        }

        function g(t) {
            var e, n, a = {};
            for (n in t) t.hasOwnProperty(n) && (e = m(n), e && (a[e] = t[n]));
            return a
        }

        function v(e) {
            var n, a;
            if (0 === e.indexOf("week")) n = 7, a = "day"; else {
                if (0 !== e.indexOf("month")) return;
                n = 12, a = "month"
            }
            at[e] = function (i, o) {
                var s, r, l = at.fn._lang[e], c = [];
                if ("number" == typeof i && (o = i, i = t), r = function (t) {
                    var e = at().utc().set(a, t);
                    return l.call(at.fn._lang, e, i || "")
                }, null != o) return r(o);
                for (s = 0; n > s; s++) c.push(r(s));
                return c
            }
        }

        function y(t) {
            var e = +t, n = 0;
            return 0 !== e && isFinite(e) && (n = e >= 0 ? Math.floor(e) : Math.ceil(e)), n
        }

        function b(t, e) {
            return new Date(Date.UTC(t, e + 1, 0)).getUTCDate()
        }

        function w(t) {
            return _(t) ? 366 : 365
        }

        function _(t) {
            return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0
        }

        function x(t) {
            var e;
            t._a && -2 === t._pf.overflow && (e = t._a[ct] < 0 || t._a[ct] > 11 ? ct : t._a[ut] < 1 || t._a[ut] > b(t._a[lt], t._a[ct]) ? ut : t._a[dt] < 0 || t._a[dt] > 23 ? dt : t._a[ht] < 0 || t._a[ht] > 59 ? ht : t._a[ft] < 0 || t._a[ft] > 59 ? ft : t._a[pt] < 0 || t._a[pt] > 999 ? pt : -1, t._pf._overflowDayOfYear && (lt > e || e > ut) && (e = ut), t._pf.overflow = e)
        }

        function k(t) {
            return null == t._isValid && (t._isValid = !isNaN(t._d.getTime()) && t._pf.overflow < 0 && !t._pf.empty && !t._pf.invalidMonth && !t._pf.nullInput && !t._pf.invalidFormat && !t._pf.userInvalidated, t._strict && (t._isValid = t._isValid && 0 === t._pf.charsLeftOver && 0 === t._pf.unusedTokens.length)), t._isValid
        }

        function C(t) {
            return t ? t.toLowerCase().replace("_", "-") : t
        }

        function $(t, e) {
            return e._isUTC ? at(t).zone(e._offset || 0) : at(t).local()
        }

        function T(t, e) {
            return e.abbr = t, mt[t] || (mt[t] = new i), mt[t].set(e), mt[t]
        }

        function S(t) {
            delete mt[t]
        }

        function D(t) {
            var e, n, a, i, o = 0, s = function (t) {
                if (!mt[t] && vt) try {
                    require("./lang/" + t)
                } catch (e) {
                }
                return mt[t]
            };
            if (!t) return at.fn._lang;
            if (!h(t)) {
                if (n = s(t)) return n;
                t = [t]
            }
            for (; o < t.length;) {
                for (i = C(t[o]).split("-"), e = i.length, a = C(t[o + 1]), a = a ? a.split("-") : null; e > 0;) {
                    if (n = s(i.slice(0, e).join("-"))) return n;
                    if (a && a.length >= e && p(i, a, !0) >= e - 1) break;
                    e--
                }
                o++
            }
            return at.fn._lang
        }

        function E(t) {
            return t.match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "")
        }

        function M(t) {
            var e, n, a = t.match(_t);
            for (e = 0, n = a.length; n > e; e++) a[e] = Zt[a[e]] ? Zt[a[e]] : E(a[e]);
            return function (i) {
                var o = "";
                for (e = 0; n > e; e++) o += a[e] instanceof Function ? a[e].call(i, t) : a[e];
                return o
            }
        }

        function O(t, e) {
            return t.isValid() ? (e = A(e, t.lang()), qt[e] || (qt[e] = M(e)), qt[e](t)) : t.lang().invalidDate()
        }

        function A(t, e) {
            function n(t) {
                return e.longDateFormat(t) || t
            }

            var a = 5;
            for (xt.lastIndex = 0; a >= 0 && xt.test(t);) t = t.replace(xt, n), xt.lastIndex = 0, a -= 1;
            return t
        }

        function B(t, e) {
            var n, a = e._strict;
            switch (t) {
                case"DDDD":
                    return Nt;
                case"YYYY":
                case"GGGG":
                case"gggg":
                    return a ? Lt : $t;
                case"Y":
                case"G":
                case"g":
                    return Yt;
                case"YYYYYY":
                case"YYYYY":
                case"GGGGG":
                case"ggggg":
                    return a ? Pt : Tt;
                case"S":
                    if (a) return At;
                case"SS":
                    if (a) return Bt;
                case"SSS":
                    if (a) return Nt;
                case"DDD":
                    return Ct;
                case"MMM":
                case"MMMM":
                case"dd":
                case"ddd":
                case"dddd":
                    return Dt;
                case"a":
                case"A":
                    return D(e._l)._meridiemParse;
                case"X":
                    return Ot;
                case"Z":
                case"ZZ":
                    return Et;
                case"T":
                    return Mt;
                case"SSSS":
                    return St;
                case"MM":
                case"DD":
                case"YY":
                case"GG":
                case"gg":
                case"HH":
                case"hh":
                case"mm":
                case"ss":
                case"ww":
                case"WW":
                    return a ? Bt : kt;
                case"M":
                case"D":
                case"d":
                case"H":
                case"h":
                case"m":
                case"s":
                case"w":
                case"W":
                case"e":
                case"E":
                    return kt;
                default:
                    return n = new RegExp(R(W(t.replace("\\", "")), "i"))
            }
        }

        function N(t) {
            t = t || "";
            var e = t.match(Et) || [], n = e[e.length - 1] || [], a = (n + "").match(zt) || ["-", 0, 0],
                i = +(60 * a[1]) + y(a[2]);
            return "+" === a[0] ? -i : i
        }

        function L(t, e, n) {
            var a, i = n._a;
            switch (t) {
                case"M":
                case"MM":
                    null != e && (i[ct] = y(e) - 1);
                    break;
                case"MMM":
                case"MMMM":
                    a = D(n._l).monthsParse(e), null != a ? i[ct] = a : n._pf.invalidMonth = e;
                    break;
                case"D":
                case"DD":
                    null != e && (i[ut] = y(e));
                    break;
                case"DDD":
                case"DDDD":
                    null != e && (n._dayOfYear = y(e));
                    break;
                case"YY":
                    i[lt] = y(e) + (y(e) > 68 ? 1900 : 2e3);
                    break;
                case"YYYY":
                case"YYYYY":
                case"YYYYYY":
                    i[lt] = y(e);
                    break;
                case"a":
                case"A":
                    n._isPm = D(n._l).isPM(e);
                    break;
                case"H":
                case"HH":
                case"h":
                case"hh":
                    i[dt] = y(e);
                    break;
                case"m":
                case"mm":
                    i[ht] = y(e);
                    break;
                case"s":
                case"ss":
                    i[ft] = y(e);
                    break;
                case"S":
                case"SS":
                case"SSS":
                case"SSSS":
                    i[pt] = y(1e3 * ("0." + e));
                    break;
                case"X":
                    n._d = new Date(1e3 * parseFloat(e));
                    break;
                case"Z":
                case"ZZ":
                    n._useUTC = !0, n._tzm = N(e);
                    break;
                case"w":
                case"ww":
                case"W":
                case"WW":
                case"d":
                case"dd":
                case"ddd":
                case"dddd":
                case"e":
                case"E":
                    t = t.substr(0, 1);
                case"gg":
                case"gggg":
                case"GG":
                case"GGGG":
                case"GGGGG":
                    t = t.substr(0, 2), e && (n._w = n._w || {}, n._w[t] = e)
            }
        }

        function P(t) {
            var e, n, a, i, o, s, r, l, c, u, d = [];
            if (!t._d) {
                for (a = H(t), t._w && null == t._a[ut] && null == t._a[ct] && (o = function (e) {
                    var n = parseInt(e, 10);
                    return e ? e.length < 3 ? n > 68 ? 1900 + n : 2e3 + n : n : null == t._a[lt] ? at().weekYear() : t._a[lt]
                }, s = t._w, null != s.GG || null != s.W || null != s.E ? r = J(o(s.GG), s.W || 1, s.E, 4, 1) : (l = D(t._l), c = null != s.d ? q(s.d, l) : null != s.e ? parseInt(s.e, 10) + l._week.dow : 0, u = parseInt(s.w, 10) || 1, null != s.d && c < l._week.dow && u++, r = J(o(s.gg), u, c, l._week.doy, l._week.dow)), t._a[lt] = r.year, t._dayOfYear = r.dayOfYear), t._dayOfYear && (i = null == t._a[lt] ? a[lt] : t._a[lt], t._dayOfYear > w(i) && (t._pf._overflowDayOfYear = !0), n = G(i, 0, t._dayOfYear), t._a[ct] = n.getUTCMonth(), t._a[ut] = n.getUTCDate()), e = 0; 3 > e && null == t._a[e]; ++e) t._a[e] = d[e] = a[e];
                for (; 7 > e; e++) t._a[e] = d[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
                d[dt] += y((t._tzm || 0) / 60), d[ht] += y((t._tzm || 0) % 60), t._d = (t._useUTC ? G : U).apply(null, d)
            }
        }

        function Y(t) {
            var e;
            t._d || (e = g(t._i), t._a = [e.year, e.month, e.day, e.hour, e.minute, e.second, e.millisecond], P(t))
        }

        function H(t) {
            var e = new Date;
            return t._useUTC ? [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()] : [e.getFullYear(), e.getMonth(), e.getDate()]
        }

        function I(t) {
            t._a = [], t._pf.empty = !0;
            var e, n, a, i, o, s = D(t._l), r = "" + t._i, l = r.length, c = 0;
            for (a = A(t._f, s).match(_t) || [], e = 0; e < a.length; e++) i = a[e], n = (r.match(B(i, t)) || [])[0], n && (o = r.substr(0, r.indexOf(n)), o.length > 0 && t._pf.unusedInput.push(o), r = r.slice(r.indexOf(n) + n.length), c += n.length), Zt[i] ? (n ? t._pf.empty = !1 : t._pf.unusedTokens.push(i), L(i, n, t)) : t._strict && !n && t._pf.unusedTokens.push(i);
            t._pf.charsLeftOver = l - c, r.length > 0 && t._pf.unusedInput.push(r), t._isPm && t._a[dt] < 12 && (t._a[dt] += 12), t._isPm === !1 && 12 === t._a[dt] && (t._a[dt] = 0), P(t), x(t)
        }

        function W(t) {
            return t.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (t, e, n, a, i) {
                return e || n || a || i
            })
        }

        function R(t) {
            return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
        }

        function z(t) {
            var n, a, i, o, s;
            if (0 === t._f.length) return t._pf.invalidFormat = !0, void(t._d = new Date(NaN));
            for (o = 0; o < t._f.length; o++) s = 0, n = r({}, t), n._pf = e(), n._f = t._f[o], I(n), k(n) && (s += n._pf.charsLeftOver, s += 10 * n._pf.unusedTokens.length, n._pf.score = s, (null == i || i > s) && (i = s, a = n));
            r(t, a || n)
        }

        function j(t) {
            var e, n, a = t._i, i = Ht.exec(a);
            if (i) {
                for (t._pf.iso = !0, e = 0, n = Wt.length; n > e; e++) if (Wt[e][1].exec(a)) {
                    t._f = Wt[e][0] + (i[6] || " ");
                    break
                }
                for (e = 0, n = Rt.length; n > e; e++) if (Rt[e][1].exec(a)) {
                    t._f += Rt[e][0];
                    break
                }
                a.match(Et) && (t._f += "Z"), I(t)
            } else t._d = new Date(a)
        }

        function F(e) {
            var n = e._i, a = yt.exec(n);
            n === t ? e._d = new Date : a ? e._d = new Date(+a[1]) : "string" == typeof n ? j(e) : h(n) ? (e._a = n.slice(0), P(e)) : f(n) ? e._d = new Date(+n) : "object" == typeof n ? Y(e) : e._d = new Date(n)
        }

        function U(t, e, n, a, i, o, s) {
            var r = new Date(t, e, n, a, i, o, s);
            return 1970 > t && r.setFullYear(t), r
        }

        function G(t) {
            var e = new Date(Date.UTC.apply(null, arguments));
            return 1970 > t && e.setUTCFullYear(t), e
        }

        function q(t, e) {
            if ("string" == typeof t) if (isNaN(t)) {
                if (t = e.weekdaysParse(t), "number" != typeof t) return null
            } else t = parseInt(t, 10);
            return t
        }

        function V(t, e, n, a, i) {
            return i.relativeTime(e || 1, !!n, t, a)
        }

        function Q(t, e, n) {
            var a = rt(Math.abs(t) / 1e3), i = rt(a / 60), o = rt(i / 60), s = rt(o / 24), r = rt(s / 365),
                l = 45 > a && ["s", a] || 1 === i && ["m"] || 45 > i && ["mm", i] || 1 === o && ["h"] || 22 > o && ["hh", o] || 1 === s && ["d"] || 25 >= s && ["dd", s] || 45 >= s && ["M"] || 345 > s && ["MM", rt(s / 30)] || 1 === r && ["y"] || ["yy", r];
            return l[2] = e, l[3] = t > 0, l[4] = n, V.apply({}, l)
        }

        function Z(t, e, n) {
            var a, i = n - e, o = n - t.day();
            return o > i && (o -= 7), i - 7 > o && (o += 7), a = at(t).add("d", o), {
                week: Math.ceil(a.dayOfYear() / 7),
                year: a.year()
            }
        }

        function J(t, e, n, a, i) {
            var o, s, r = G(t, 0, 1).getUTCDay();
            return n = null != n ? n : i, o = i - r + (r > a ? 7 : 0) - (i > r ? 7 : 0), s = 7 * (e - 1) + (n - i) + o + 1, {
                year: s > 0 ? t : t - 1,
                dayOfYear: s > 0 ? s : w(t - 1) + s
            }
        }

        function X(t) {
            var e = t._i, n = t._f;
            return null === e ? at.invalid({nullInput: !0}) : ("string" == typeof e && (t._i = e = D().preparse(e)), at.isMoment(e) ? (t = l(e), t._d = new Date(+e._d)) : n ? h(n) ? z(t) : I(t) : F(t), new o(t))
        }

        function K(t, e) {
            at.fn[t] = at.fn[t + "s"] = function (t) {
                var n = this._isUTC ? "UTC" : "";
                return null != t ? (this._d["set" + n + e](t), at.updateOffset(this), this) : this._d["get" + n + e]()
            }
        }

        function tt(t) {
            at.duration.fn[t] = function () {
                return this._data[t]
            }
        }

        function et(t, e) {
            at.duration.fn["as" + t] = function () {
                return +this / e
            }
        }

        function nt(t) {
            var e = !1, n = at;
            "undefined" == typeof ender && (t ? (st.moment = function () {
                return !e && console && console.warn && (e = !0, console.warn("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.")), n.apply(null, arguments)
            }, r(st.moment, n)) : st.moment = at)
        }

        for (var at, it, ot = "2.5.1", st = this, rt = Math.round, lt = 0, ct = 1, ut = 2, dt = 3, ht = 4, ft = 5, pt = 6, mt = {}, gt = {
            _isAMomentObject: null,
            _i: null,
            _f: null,
            _l: null,
            _strict: null,
            _isUTC: null,
            _offset: null,
            _pf: null,
            _lang: null
        }, vt = "undefined" != typeof module && module.exports && "undefined" != typeof require, yt = /^\/?Date\((\-?\d+)/i, bt = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, wt = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, _t = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g, xt = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g, kt = /\d\d?/, Ct = /\d{1,3}/, $t = /\d{1,4}/, Tt = /[+\-]?\d{1,6}/, St = /\d+/, Dt = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, Et = /Z|[\+\-]\d\d:?\d\d/gi, Mt = /T/i, Ot = /[\+\-]?\d+(\.\d{1,3})?/, At = /\d/, Bt = /\d\d/, Nt = /\d{3}/, Lt = /\d{4}/, Pt = /[+-]?\d{6}/, Yt = /[+-]?\d+/, Ht = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, It = "YYYY-MM-DDTHH:mm:ssZ", Wt = [["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/], ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/], ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/], ["GGGG-[W]WW", /\d{4}-W\d{2}/], ["YYYY-DDD", /\d{4}-\d{3}/]], Rt = [["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d{1,3}/], ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/], ["HH:mm", /(T| )\d\d:\d\d/], ["HH", /(T| )\d\d/]], zt = /([\+\-]|\d\d)/gi, jt = "Date|Hours|Minutes|Seconds|Milliseconds".split("|"), Ft = {
            Milliseconds: 1,
            Seconds: 1e3,
            Minutes: 6e4,
            Hours: 36e5,
            Days: 864e5,
            Months: 2592e6,
            Years: 31536e6
        }, Ut = {
            ms: "millisecond",
            s: "second",
            m: "minute",
            h: "hour",
            d: "day",
            D: "date",
            w: "week",
            W: "isoWeek",
            M: "month",
            y: "year",
            DDD: "dayOfYear",
            e: "weekday",
            E: "isoWeekday",
            gg: "weekYear",
            GG: "isoWeekYear"
        }, Gt = {
            dayofyear: "dayOfYear",
            isoweekday: "isoWeekday",
            isoweek: "isoWeek",
            weekyear: "weekYear",
            isoweekyear: "isoWeekYear"
        }, qt = {}, Vt = "DDD w W M D d".split(" "), Qt = "M D H h m s w W".split(" "), Zt = {
            M: function () {
                return this.month() + 1
            }, MMM: function (t) {
                return this.lang().monthsShort(this, t)
            }, MMMM: function (t) {
                return this.lang().months(this, t)
            }, D: function () {
                return this.date()
            }, DDD: function () {
                return this.dayOfYear()
            }, d: function () {
                return this.day()
            }, dd: function (t) {
                return this.lang().weekdaysMin(this, t)
            }, ddd: function (t) {
                return this.lang().weekdaysShort(this, t)
            }, dddd: function (t) {
                return this.lang().weekdays(this, t)
            }, w: function () {
                return this.week()
            }, W: function () {
                return this.isoWeek()
            }, YY: function () {
                return u(this.year() % 100, 2)
            }, YYYY: function () {
                return u(this.year(), 4)
            }, YYYYY: function () {
                return u(this.year(), 5)
            }, YYYYYY: function () {
                var t = this.year(), e = t >= 0 ? "+" : "-";
                return e + u(Math.abs(t), 6)
            }, gg: function () {
                return u(this.weekYear() % 100, 2)
            }, gggg: function () {
                return u(this.weekYear(), 4)
            }, ggggg: function () {
                return u(this.weekYear(), 5)
            }, GG: function () {
                return u(this.isoWeekYear() % 100, 2)
            }, GGGG: function () {
                return u(this.isoWeekYear(), 4)
            }, GGGGG: function () {
                return u(this.isoWeekYear(), 5)
            }, e: function () {
                return this.weekday()
            }, E: function () {
                return this.isoWeekday()
            }, a: function () {
                return this.lang().meridiem(this.hours(), this.minutes(), !0)
            }, A: function () {
                return this.lang().meridiem(this.hours(), this.minutes(), !1)
            }, H: function () {
                return this.hours()
            }, h: function () {
                return this.hours() % 12 || 12
            }, m: function () {
                return this.minutes()
            }, s: function () {
                return this.seconds()
            }, S: function () {
                return y(this.milliseconds() / 100)
            }, SS: function () {
                return u(y(this.milliseconds() / 10), 2)
            }, SSS: function () {
                return u(this.milliseconds(), 3)
            }, SSSS: function () {
                return u(this.milliseconds(), 3)
            }, Z: function () {
                var t = -this.zone(), e = "+";
                return 0 > t && (t = -t, e = "-"), e + u(y(t / 60), 2) + ":" + u(y(t) % 60, 2)
            }, ZZ: function () {
                var t = -this.zone(), e = "+";
                return 0 > t && (t = -t, e = "-"), e + u(y(t / 60), 2) + u(y(t) % 60, 2)
            }, z: function () {
                return this.zoneAbbr()
            }, zz: function () {
                return this.zoneName()
            }, X: function () {
                return this.unix()
            }, Q: function () {
                return this.quarter()
            }
        }, Jt = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"]; Vt.length;) it = Vt.pop(), Zt[it + "o"] = a(Zt[it], it);
        for (; Qt.length;) it = Qt.pop(), Zt[it + it] = n(Zt[it], 2);
        for (Zt.DDDD = n(Zt.DDD, 3), r(i.prototype, {
            set: function (t) {
                var e, n;
                for (n in t) e = t[n], "function" == typeof e ? this[n] = e : this["_" + n] = e
            },
            _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            months: function (t) {
                return this._months[t.month()]
            },
            _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            monthsShort: function (t) {
                return this._monthsShort[t.month()]
            },
            monthsParse: function (t) {
                var e, n, a;
                for (this._monthsParse || (this._monthsParse = []), e = 0; 12 > e; e++) if (this._monthsParse[e] || (n = at.utc([2e3, e]), a = "^" + this.months(n, "") + "|^" + this.monthsShort(n, ""), this._monthsParse[e] = new RegExp(a.replace(".", ""), "i")), this._monthsParse[e].test(t)) return e
            },
            _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdays: function (t) {
                return this._weekdays[t.day()]
            },
            _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysShort: function (t) {
                return this._weekdaysShort[t.day()]
            },
            _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            weekdaysMin: function (t) {
                return this._weekdaysMin[t.day()]
            },
            weekdaysParse: function (t) {
                var e, n, a;
                for (this._weekdaysParse || (this._weekdaysParse = []), e = 0; 7 > e; e++) if (this._weekdaysParse[e] || (n = at([2e3, 1]).day(e), a = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""), this._weekdaysParse[e] = new RegExp(a.replace(".", ""), "i")), this._weekdaysParse[e].test(t)) return e
            },
            _longDateFormat: {
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D YYYY",
                LLL: "MMMM D YYYY LT",
                LLLL: "dddd, MMMM D YYYY LT"
            },
            longDateFormat: function (t) {
                var e = this._longDateFormat[t];
                return !e && this._longDateFormat[t.toUpperCase()] && (e = this._longDateFormat[t.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (t) {
                    return t.slice(1)
                }), this._longDateFormat[t] = e), e
            },
            isPM: function (t) {
                return "p" === (t + "").toLowerCase().charAt(0)
            },
            _meridiemParse: /[ap]\.?m?\.?/i,
            meridiem: function (t, e, n) {
                return t > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
            },
            _calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            calendar: function (t, e) {
                var n = this._calendar[t];
                return "function" == typeof n ? n.apply(e) : n
            },
            _relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            relativeTime: function (t, e, n, a) {
                var i = this._relativeTime[n];
                return "function" == typeof i ? i(t, e, n, a) : i.replace(/%d/i, t)
            },
            pastFuture: function (t, e) {
                var n = this._relativeTime[t > 0 ? "future" : "past"];
                return "function" == typeof n ? n(e) : n.replace(/%s/i, e)
            },
            ordinal: function (t) {
                return this._ordinal.replace("%d", t)
            },
            _ordinal: "%d",
            preparse: function (t) {
                return t
            },
            postformat: function (t) {
                return t
            },
            week: function (t) {
                return Z(t, this._week.dow, this._week.doy).week
            },
            _week: {dow: 0, doy: 6},
            _invalidDate: "Invalid date",
            invalidDate: function () {
                return this._invalidDate
            }
        }), at = function (n, a, i, o) {
            var s;
            return "boolean" == typeof i && (o = i, i = t), s = {}, s._isAMomentObject = !0, s._i = n, s._f = a, s._l = i, s._strict = o, s._isUTC = !1, s._pf = e(), X(s)
        }, at.utc = function (n, a, i, o) {
            var s;
            return "boolean" == typeof i && (o = i, i = t), s = {}, s._isAMomentObject = !0, s._useUTC = !0, s._isUTC = !0, s._l = i, s._i = n, s._f = a, s._strict = o, s._pf = e(), X(s).utc()
        }, at.unix = function (t) {
            return at(1e3 * t)
        }, at.duration = function (t, e) {
            var n, a, i, o = t, r = null;
            return at.isDuration(t) ? o = {
                ms: t._milliseconds,
                d: t._days,
                M: t._months
            } : "number" == typeof t ? (o = {}, e ? o[e] = t : o.milliseconds = t) : (r = bt.exec(t)) ? (n = "-" === r[1] ? -1 : 1, o = {
                y: 0,
                d: y(r[ut]) * n,
                h: y(r[dt]) * n,
                m: y(r[ht]) * n,
                s: y(r[ft]) * n,
                ms: y(r[pt]) * n
            }) : (r = wt.exec(t)) && (n = "-" === r[1] ? -1 : 1, i = function (t) {
                var e = t && parseFloat(t.replace(",", "."));
                return (isNaN(e) ? 0 : e) * n
            }, o = {
                y: i(r[2]),
                M: i(r[3]),
                d: i(r[4]),
                h: i(r[5]),
                m: i(r[6]),
                s: i(r[7]),
                w: i(r[8])
            }), a = new s(o), at.isDuration(t) && t.hasOwnProperty("_lang") && (a._lang = t._lang), a
        }, at.version = ot, at.defaultFormat = It, at.updateOffset = function () {
        }, at.lang = function (t, e) {
            var n;
            return t ? (e ? T(C(t), e) : null === e ? (S(t), t = "en") : mt[t] || D(t), n = at.duration.fn._lang = at.fn._lang = D(t), n._abbr) : at.fn._lang._abbr
        }, at.langData = function (t) {
            return t && t._lang && t._lang._abbr && (t = t._lang._abbr), D(t)
        }, at.isMoment = function (t) {
            return t instanceof o || null != t && t.hasOwnProperty("_isAMomentObject")
        }, at.isDuration = function (t) {
            return t instanceof s
        }, it = Jt.length - 1; it >= 0; --it) v(Jt[it]);
        for (at.normalizeUnits = function (t) {
            return m(t)
        }, at.invalid = function (t) {
            var e = at.utc(NaN);
            return null != t ? r(e._pf, t) : e._pf.userInvalidated = !0, e
        }, at.parseZone = function (t) {
            return at(t).parseZone()
        }, r(at.fn = o.prototype, {
            clone: function () {
                return at(this)
            }, valueOf: function () {
                return +this._d + 6e4 * (this._offset || 0)
            }, unix: function () {
                return Math.floor(+this / 1e3)
            }, toString: function () {
                return this.clone().lang("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
            }, toDate: function () {
                return this._offset ? new Date(+this) : this._d
            }, toISOString: function () {
                var t = at(this).utc();
                return 0 < t.year() && t.year() <= 9999 ? O(t, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : O(t, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
            }, toArray: function () {
                var t = this;
                return [t.year(), t.month(), t.date(), t.hours(), t.minutes(), t.seconds(), t.milliseconds()]
            }, isValid: function () {
                return k(this)
            }, isDSTShifted: function () {
                return this._a ? this.isValid() && p(this._a, (this._isUTC ? at.utc(this._a) : at(this._a)).toArray()) > 0 : !1
            }, parsingFlags: function () {
                return r({}, this._pf)
            }, invalidAt: function () {
                return this._pf.overflow
            }, utc: function () {
                return this.zone(0)
            }, local: function () {
                return this.zone(0), this._isUTC = !1, this
            }, format: function (t) {
                var e = O(this, t || at.defaultFormat);
                return this.lang().postformat(e)
            }, add: function (t, e) {
                var n;
                return n = "string" == typeof t ? at.duration(+e, t) : at.duration(t, e), d(this, n, 1), this
            }, subtract: function (t, e) {
                var n;
                return n = "string" == typeof t ? at.duration(+e, t) : at.duration(t, e), d(this, n, -1), this
            }, diff: function (t, e, n) {
                var a, i, o = $(t, this), s = 6e4 * (this.zone() - o.zone());
                return e = m(e), "year" === e || "month" === e ? (a = 432e5 * (this.daysInMonth() + o.daysInMonth()), i = 12 * (this.year() - o.year()) + (this.month() - o.month()), i += (this - at(this).startOf("month") - (o - at(o).startOf("month"))) / a, i -= 6e4 * (this.zone() - at(this).startOf("month").zone() - (o.zone() - at(o).startOf("month").zone())) / a, "year" === e && (i /= 12)) : (a = this - o, i = "second" === e ? a / 1e3 : "minute" === e ? a / 6e4 : "hour" === e ? a / 36e5 : "day" === e ? (a - s) / 864e5 : "week" === e ? (a - s) / 6048e5 : a), n ? i : c(i)
            }, from: function (t, e) {
                return at.duration(this.diff(t)).lang(this.lang()._abbr).humanize(!e)
            }, fromNow: function (t) {
                return this.from(at(), t)
            }, calendar: function () {
                var t = $(at(), this).startOf("day"), e = this.diff(t, "days", !0),
                    n = -6 > e ? "sameElse" : -1 > e ? "lastWeek" : 0 > e ? "lastDay" : 1 > e ? "sameDay" : 2 > e ? "nextDay" : 7 > e ? "nextWeek" : "sameElse";
                return this.format(this.lang().calendar(n, this))
            }, isLeapYear: function () {
                return _(this.year())
            }, isDST: function () {
                return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone()
            }, day: function (t) {
                var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                return null != t ? (t = q(t, this.lang()), this.add({d: t - e})) : e
            }, month: function (t) {
                var e, n = this._isUTC ? "UTC" : "";
                return null != t ? "string" == typeof t && (t = this.lang().monthsParse(t), "number" != typeof t) ? this : (e = this.date(), this.date(1), this._d["set" + n + "Month"](t), this.date(Math.min(e, this.daysInMonth())), at.updateOffset(this), this) : this._d["get" + n + "Month"]()
            }, startOf: function (t) {
                switch (t = m(t)) {
                    case"year":
                        this.month(0);
                    case"month":
                        this.date(1);
                    case"week":
                    case"isoWeek":
                    case"day":
                        this.hours(0);
                    case"hour":
                        this.minutes(0);
                    case"minute":
                        this.seconds(0);
                    case"second":
                        this.milliseconds(0)
                }
                return "week" === t ? this.weekday(0) : "isoWeek" === t && this.isoWeekday(1), this
            }, endOf: function (t) {
                return t = m(t), this.startOf(t).add("isoWeek" === t ? "week" : t, 1).subtract("ms", 1)
            }, isAfter: function (t, e) {
                return e = "undefined" != typeof e ? e : "millisecond", +this.clone().startOf(e) > +at(t).startOf(e)
            }, isBefore: function (t, e) {
                return e = "undefined" != typeof e ? e : "millisecond", +this.clone().startOf(e) < +at(t).startOf(e)
            }, isSame: function (t, e) {
                return e = e || "ms", +this.clone().startOf(e) === +$(t, this).startOf(e)
            }, min: function (t) {
                return t = at.apply(null, arguments), this > t ? this : t
            }, max: function (t) {
                return t = at.apply(null, arguments), t > this ? this : t
            }, zone: function (t) {
                var e = this._offset || 0;
                return null == t ? this._isUTC ? e : this._d.getTimezoneOffset() : ("string" == typeof t && (t = N(t)), Math.abs(t) < 16 && (t = 60 * t), this._offset = t, this._isUTC = !0, e !== t && d(this, at.duration(e - t, "m"), 1, !0), this)
            }, zoneAbbr: function () {
                return this._isUTC ? "UTC" : ""
            }, zoneName: function () {
                return this._isUTC ? "Coordinated Universal Time" : ""
            }, parseZone: function () {
                return this._tzm ? this.zone(this._tzm) : "string" == typeof this._i && this.zone(this._i), this
            }, hasAlignedHourOffset: function (t) {
                return t = t ? at(t).zone() : 0, (this.zone() - t) % 60 === 0
            }, daysInMonth: function () {
                return b(this.year(), this.month())
            }, dayOfYear: function (t) {
                var e = rt((at(this).startOf("day") - at(this).startOf("year")) / 864e5) + 1;
                return null == t ? e : this.add("d", t - e)
            }, quarter: function () {
                return Math.ceil((this.month() + 1) / 3)
            }, weekYear: function (t) {
                var e = Z(this, this.lang()._week.dow, this.lang()._week.doy).year;
                return null == t ? e : this.add("y", t - e)
            }, isoWeekYear: function (t) {
                var e = Z(this, 1, 4).year;
                return null == t ? e : this.add("y", t - e)
            }, week: function (t) {
                var e = this.lang().week(this);
                return null == t ? e : this.add("d", 7 * (t - e))
            }, isoWeek: function (t) {
                var e = Z(this, 1, 4).week;
                return null == t ? e : this.add("d", 7 * (t - e))
            }, weekday: function (t) {
                var e = (this.day() + 7 - this.lang()._week.dow) % 7;
                return null == t ? e : this.add("d", t - e)
            }, isoWeekday: function (t) {
                return null == t ? this.day() || 7 : this.day(this.day() % 7 ? t : t - 7)
            }, get: function (t) {
                return t = m(t), this[t]()
            }, set: function (t, e) {
                return t = m(t), "function" == typeof this[t] && this[t](e), this
            }, lang: function (e) {
                return e === t ? this._lang : (this._lang = D(e), this)
            }
        }), it = 0; it < jt.length; it++) K(jt[it].toLowerCase().replace(/s$/, ""), jt[it]);
        K("year", "FullYear"), at.fn.days = at.fn.day, at.fn.months = at.fn.month, at.fn.weeks = at.fn.week, at.fn.isoWeeks = at.fn.isoWeek, at.fn.toJSON = at.fn.toISOString, r(at.duration.fn = s.prototype, {
            _bubble: function () {
                var t, e, n, a, i = this._milliseconds, o = this._days, s = this._months, r = this._data;
                r.milliseconds = i % 1e3, t = c(i / 1e3), r.seconds = t % 60, e = c(t / 60), r.minutes = e % 60, n = c(e / 60), r.hours = n % 24, o += c(n / 24), r.days = o % 30, s += c(o / 30), r.months = s % 12, a = c(s / 12), r.years = a
            }, weeks: function () {
                return c(this.days() / 7)
            }, valueOf: function () {
                return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * y(this._months / 12)
            }, humanize: function (t) {
                var e = +this, n = Q(e, !t, this.lang());
                return t && (n = this.lang().pastFuture(e, n)), this.lang().postformat(n)
            }, add: function (t, e) {
                var n = at.duration(t, e);
                return this._milliseconds += n._milliseconds, this._days += n._days, this._months += n._months, this._bubble(), this
            }, subtract: function (t, e) {
                var n = at.duration(t, e);
                return this._milliseconds -= n._milliseconds, this._days -= n._days, this._months -= n._months, this._bubble(), this
            }, get: function (t) {
                return t = m(t), this[t.toLowerCase() + "s"]()
            }, as: function (t) {
                return t = m(t), this["as" + t.charAt(0).toUpperCase() + t.slice(1) + "s"]()
            }, lang: at.fn.lang, toIsoString: function () {
                var t = Math.abs(this.years()), e = Math.abs(this.months()), n = Math.abs(this.days()),
                    a = Math.abs(this.hours()), i = Math.abs(this.minutes()),
                    o = Math.abs(this.seconds() + this.milliseconds() / 1e3);
                return this.asSeconds() ? (this.asSeconds() < 0 ? "-" : "") + "P" + (t ? t + "Y" : "") + (e ? e + "M" : "") + (n ? n + "D" : "") + (a || i || o ? "T" : "") + (a ? a + "H" : "") + (i ? i + "M" : "") + (o ? o + "S" : "") : "P0D"
            }
        });
        for (it in Ft) Ft.hasOwnProperty(it) && (et(it, Ft[it]), tt(it.toLowerCase()));
        et("Weeks", 6048e5), at.duration.fn.asMonths = function () {
            return (+this - 31536e6 * this.years()) / 2592e6 + 12 * this.years()
        }, at.lang("en", {
            ordinal: function (t) {
                var e = t % 10,
                    n = 1 === y(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th";
                return t + n
            }
        }), vt ? (module.exports = at, nt(!0)) : "function" == typeof define && define.amd ? define("moment", function (e, n, a) {
            return a.config && a.config() && a.config().noGlobal !== !0 && nt(a.config().noGlobal === t), at
        }) : nt()
    }.call(this), /*!
 * Pikaday
 *
 * Copyright © 2014 David Bushell | BSD & MIT license | https://github.com/dbushell/Pikaday
 */
    function (t, e) {
        "use strict";
        var n;
        if ("object" == typeof exports) {
            try {
                n = require("moment")
            } catch (a) {
            }
            module.exports = e(n)
        } else "function" == typeof define && define.amd ? define(function (t) {
            var a = "moment";
            return n = t.defined && t.defined(a) ? t(a) : void 0, e(n)
        }) : t.Pikaday = e(t.moment)
    }(this, function (t) {
        "use strict";
        var e = "function" == typeof t, n = !!window.addEventListener, a = window.document, i = window.setTimeout,
            o = function (t, e, a, i) {
                n ? t.addEventListener(e, a, !!i) : t.attachEvent("on" + e, a)
            }, s = function (t, e, a, i) {
                n ? t.removeEventListener(e, a, !!i) : t.detachEvent("on" + e, a)
            }, r = function (t, e, n) {
                var i;
                a.createEvent ? (i = a.createEvent("HTMLEvents"), i.initEvent(e, !0, !1), i = y(i, n), t.dispatchEvent(i)) : a.createEventObject && (i = a.createEventObject(), i = y(i, n), t.fireEvent("on" + e, i))
            }, l = function (t) {
                return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
            }, c = function (t, e) {
                return -1 !== (" " + t.className + " ").indexOf(" " + e + " ")
            }, u = function (t, e) {
                c(t, e) || (t.className = "" === t.className ? e : t.className + " " + e)
            }, d = function (t, e) {
                t.className = l((" " + t.className + " ").replace(" " + e + " ", " "))
            }, h = function (t) {
                return /Array/.test(Object.prototype.toString.call(t))
            }, f = function (t) {
                return /Date/.test(Object.prototype.toString.call(t)) && !isNaN(t.getTime())
            }, p = function (t) {
                return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0
            }, m = function (t, e) {
                return [31, p(t) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][e]
            }, g = function (t) {
                f(t) && t.setHours(0, 0, 0, 0)
            }, v = function (t, e) {
                return t.getTime() === e.getTime()
            }, y = function (t, e, n) {
                var a, i;
                for (a in e) i = void 0 !== t[a], i && "object" == typeof e[a] && void 0 === e[a].nodeName ? f(e[a]) ? n && (t[a] = new Date(e[a].getTime())) : h(e[a]) ? n && (t[a] = e[a].slice(0)) : t[a] = y({}, e[a], n) : (n || !i) && (t[a] = e[a]);
                return t
            }, b = function (t) {
                return t.month < 0 && (t.year -= Math.ceil(Math.abs(t.month) / 12), t.month += 12), t.month > 11 && (t.year += Math.floor(Math.abs(t.month) / 12), t.month -= 12), t
            }, w = {
                field: null,
                bound: void 0,
                position: "bottom left",
                format: "YYYY-MM-DD",
                defaultDate: null,
                setDefaultDate: !1,
                firstDay: 0,
                minDate: null,
                maxDate: null,
                yearRange: 10,
                minYear: 0,
                maxYear: 9999,
                minMonth: void 0,
                maxMonth: void 0,
                isRTL: !1,
                yearSuffix: "",
                showMonthAfterYear: !1,
                numberOfMonths: 1,
                mainCalendar: "left",
                i18n: {
                    previousMonth: "Previous Month",
                    nextMonth: "Next Month",
                    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
                },
                onSelect: null,
                onOpen: null,
                onClose: null,
                onDraw: null
            }, _ = function (t, e, n) {
                for (e += t.firstDay; e >= 7;) e -= 7;
                return n ? t.i18n.weekdaysShort[e] : t.i18n.weekdays[e]
            }, x = function (t, e, n, a, i, o, s) {
                if (s) return '<td class="is-empty"></td>';
                var r = [];
                return o && r.push("is-disabled"), i && r.push("is-today"), a && r.push("is-selected"), '<td data-day="' + t + '" class="' + r.join(" ") + '"><button class="pika-button pika-day" type="button" data-pika-year="' + n + '" data-pika-month="' + e + '" data-pika-day="' + t + '">' + t + "</button></td>"
            }, k = function (t, e) {
                return "<tr>" + (e ? t.reverse() : t).join("") + "</tr>"
            }, C = function (t) {
                return "<tbody>" + t.join("") + "</tbody>"
            }, $ = function (t) {
                var e, n = [];
                for (e = 0; 7 > e; e++) n.push('<th scope="col"><abbr title="' + _(t, e) + '">' + _(t, e, !0) + "</abbr></th>");
                return "<thead>" + (t.isRTL ? n.reverse() : n).join("") + "</thead>"
            }, T = function (t, e, n, a, i) {
                var o, s, r, l, c, u = t._o, d = n === u.minYear, f = n === u.maxYear, p = '<div class="pika-title">',
                    m = !0, g = !0;
                for (r = [], o = 0; 12 > o; o++) r.push('<option value="' + (n === i ? o - e : 12 + o - e) + '"' + (o === a ? " selected" : "") + (d && o < u.minMonth || f && o > u.maxMonth ? "disabled" : "") + ">" + u.i18n.months[o] + "</option>");
                for (l = '<div class="pika-label">' + u.i18n.months[a] + '<select class="pika-select pika-select-month">' + r.join("") + "</select></div>", h(u.yearRange) ? (o = u.yearRange[0], s = u.yearRange[1] + 1) : (o = n - u.yearRange, s = 1 + n + u.yearRange), r = []; s > o && o <= u.maxYear; o++) o >= u.minYear && r.push('<option value="' + o + '"' + (o === n ? " selected" : "") + ">" + o + "</option>");
                return c = '<div class="pika-label">' + n + u.yearSuffix + '<select class="pika-select pika-select-year">' + r.join("") + "</select></div>", p += u.showMonthAfterYear ? c + l : l + c, d && (0 === a || u.minMonth >= a) && (m = !1), f && (11 === a || u.maxMonth <= a) && (g = !1), 0 === e && (p += '<button class="pika-prev' + (m ? "" : " is-disabled") + '" type="button">' + u.i18n.previousMonth + "</button>"), e === t._o.numberOfMonths - 1 && (p += '<button class="pika-next' + (g ? "" : " is-disabled") + '" type="button">' + u.i18n.nextMonth + "</button>"), p += "</div>"
            }, S = function (t, e) {
                return '<table cellpadding="0" cellspacing="0" class="pika-table">' + $(t) + C(e) + "</table>"
            }, D = function (s) {
                var r = this, l = r.config(s);
                r._onMouseDown = function (t) {
                    if (r._v) {
                        t = t || window.event;
                        var e = t.target || t.srcElement;
                        if (e) {
                            if (!c(e, "is-disabled")) {
                                if (c(e, "pika-button") && !c(e, "is-empty")) return r.setDate(new Date(e.getAttribute("data-pika-year"), e.getAttribute("data-pika-month"), e.getAttribute("data-pika-day"))), void(l.bound && i(function () {
                                    r.hide()
                                }, 100));
                                c(e, "pika-prev") ? r.prevMonth() : c(e, "pika-next") && r.nextMonth()
                            }
                            if (c(e, "pika-select")) r._c = !0; else {
                                if (!t.preventDefault) return t.returnValue = !1, !1;
                                t.preventDefault()
                            }
                        }
                    }
                }, r._onChange = function (t) {
                    t = t || window.event;
                    var e = t.target || t.srcElement;
                    e && (c(e, "pika-select-month") ? r.gotoMonth(e.value) : c(e, "pika-select-year") && r.gotoYear(e.value))
                }, r._onInputChange = function (n) {
                    var a;
                    n.firedBy !== r && (e ? (a = t(l.field.value, l.format), a = a && a.isValid() ? a.toDate() : null) : a = new Date(Date.parse(l.field.value)), r.setDate(f(a) ? a : null), r._v || r.show())
                }, r._onInputFocus = function () {
                    r.show()
                }, r._onInputClick = function () {
                    r.show()
                }, r._onInputBlur = function () {
                    r._c || (r._b = i(function () {
                        r.hide()
                    }, 50)), r._c = !1
                }, r._onClick = function (t) {
                    t = t || window.event;
                    var e = t.target || t.srcElement, a = e;
                    if (e) {
                        !n && c(e, "pika-select") && (e.onchange || (e.setAttribute("onchange", "return;"), o(e, "change", r._onChange)));
                        do if (c(a, "pika-single")) return; while (a = a.parentNode);
                        r._v && e !== l.trigger && r.hide()
                    }
                }, r.el = a.createElement("div"), r.el.className = "pika-single" + (l.isRTL ? " is-rtl" : ""), o(r.el, "mousedown", r._onMouseDown, !0), o(r.el, "change", r._onChange), l.field && (l.bound ? a.body.appendChild(r.el) : l.field.parentNode.insertBefore(r.el, l.field.nextSibling), o(l.field, "change", r._onInputChange), l.defaultDate || (e && l.field.value ? l.defaultDate = t(l.field.value, l.format).toDate() : l.defaultDate = new Date(Date.parse(l.field.value)), l.setDefaultDate = !0));
                var u = l.defaultDate;
                f(u) ? l.setDefaultDate ? r.setDate(u, !0) : r.gotoDate(u) : r.gotoDate(new Date), l.bound ? (this.hide(), r.el.className += " is-bound", o(l.trigger, "click", r._onInputClick), o(l.trigger, "focus", r._onInputFocus), o(l.trigger, "blur", r._onInputBlur)) : this.show()
            };
        return D.prototype = {
            config: function (t) {
                this._o || (this._o = y({}, w, !0));
                var e = y(this._o, t, !0);
                e.isRTL = !!e.isRTL, e.field = e.field && e.field.nodeName ? e.field : null, e.bound = !!(void 0 !== e.bound ? e.field && e.bound : e.field), e.trigger = e.trigger && e.trigger.nodeName ? e.trigger : e.field;
                var n = parseInt(e.numberOfMonths, 10) || 1;
                if (e.numberOfMonths = n > 4 ? 4 : n, f(e.minDate) || (e.minDate = !1), f(e.maxDate) || (e.maxDate = !1), e.minDate && e.maxDate && e.maxDate < e.minDate && (e.maxDate = e.minDate = !1), e.minDate && (g(e.minDate), e.minYear = e.minDate.getFullYear(), e.minMonth = e.minDate.getMonth()), e.maxDate && (g(e.maxDate), e.maxYear = e.maxDate.getFullYear(), e.maxMonth = e.maxDate.getMonth()), h(e.yearRange)) {
                    var a = (new Date).getFullYear() - 10;
                    e.yearRange[0] = parseInt(e.yearRange[0], 10) || a, e.yearRange[1] = parseInt(e.yearRange[1], 10) || a
                } else e.yearRange = Math.abs(parseInt(e.yearRange, 10)) || w.yearRange, e.yearRange > 100 && (e.yearRange = 100);
                return e
            }, toString: function (n) {
                return f(this._d) ? e ? t(this._d).format(n || this._o.format) : this._d.toDateString() : ""
            }, getMoment: function () {
                return e ? t(this._d) : null
            }, setMoment: function (n, a) {
                e && t.isMoment(n) && this.setDate(n.toDate(), a)
            }, getDate: function () {
                return f(this._d) ? new Date(this._d.getTime()) : null
            }, setDate: function (t, e) {
                if (!t) return this._d = null, this.draw();
                if ("string" == typeof t && (t = new Date(Date.parse(t))), f(t)) {
                    var n = this._o.minDate, a = this._o.maxDate;
                    f(n) && n > t ? t = n : f(a) && t > a && (t = a), this._d = new Date(t.getTime()), g(this._d), this.gotoDate(this._d), this._o.field && (this._o.field.value = this.toString(), r(this._o.field, "change", {firedBy: this})), e || "function" != typeof this._o.onSelect || this._o.onSelect.call(this, this.getDate())
                }
            }, gotoDate: function (t) {
                var e = !0;
                if (f(t)) {
                    if (this.calendars) {
                        var n = new Date(this.calendars[0].year, this.calendars[0].month, 1),
                            a = new Date(this.calendars[this.calendars.length - 1].year, this.calendars[this.calendars.length - 1].month, 1),
                            i = t.getTime();
                        a.setMonth(a.getMonth() + 1), a.setDate(a.getDate() - 1), e = i < n.getTime() || a.getTime() < i
                    }
                    e && (this.calendars = [{
                        month: t.getMonth(),
                        year: t.getFullYear()
                    }], "right" === this._o.mainCalendar && (this.calendars[0].month += 1 - this._o.numberOfMonths)), this.adjustCalendars()
                }
            }, adjustCalendars: function () {
                this.calendars[0] = b(this.calendars[0]);
                for (var t = 1; t < this._o.numberOfMonths; t++) this.calendars[t] = b({
                    month: this.calendars[0].month + t,
                    year: this.calendars[0].year
                });
                this.draw()
            }, gotoToday: function () {
                this.gotoDate(new Date)
            }, gotoMonth: function (t) {
                isNaN(t) || (this.calendars[0].month = parseInt(t, 10), this.adjustCalendars())
            }, nextMonth: function () {
                this.calendars[0].month++, this.adjustCalendars()
            }, prevMonth: function () {
                this.calendars[0].month--, this.adjustCalendars()
            }, gotoYear: function (t) {
                isNaN(t) || (this.calendars[0].year = parseInt(t, 10), this.adjustCalendars())
            }, setMinDate: function (t) {
                this._o.minDate = t
            }, setMaxDate: function (t) {
                this._o.maxDate = t
            }, draw: function (t) {
                if (this._v || t) {
                    var e = this._o, n = e.minYear, a = e.maxYear, o = e.minMonth, s = e.maxMonth, r = "";
                    this._y <= n && (this._y = n, !isNaN(o) && this._m < o && (this._m = o)), this._y >= a && (this._y = a, !isNaN(s) && this._m > s && (this._m = s));
                    for (var l = 0; l < e.numberOfMonths; l++) r += '<div class="pika-lendar">' + T(this, l, this.calendars[l].year, this.calendars[l].month, this.calendars[0].year) + this.render(this.calendars[l].year, this.calendars[l].month) + "</div>";
                    if (this.el.innerHTML = r, e.bound && "hidden" !== e.field.type && i(function () {
                        e.trigger.focus()
                    }, 1), "function" == typeof this._o.onDraw) {
                        var c = this;
                        i(function () {
                            c._o.onDraw.call(c)
                        }, 0)
                    }
                }
            }, adjustPosition: function () {
                var t, e, n, i = this._o.trigger, o = i, s = this.el.offsetWidth, r = this.el.offsetHeight,
                    l = window.innerWidth || a.documentElement.clientWidth,
                    c = window.innerHeight || a.documentElement.clientHeight,
                    u = window.pageYOffset || a.body.scrollTop || a.documentElement.scrollTop;
                if ("function" == typeof i.getBoundingClientRect) n = i.getBoundingClientRect(), t = n.left + window.pageXOffset, e = n.bottom + window.pageYOffset; else for (t = o.offsetLeft, e = o.offsetTop + o.offsetHeight; o = o.offsetParent;) t += o.offsetLeft, e += o.offsetTop;
                (t + s > l || this._o.position.indexOf("right") > -1 && t - s + i.offsetWidth > 0) && (t = t - s + i.offsetWidth), (e + r > c + u || this._o.position.indexOf("top") > -1 && e - r - i.offsetHeight > 0) && (e = e - r - i.offsetHeight), this.el.style.cssText = ["position: absolute", "left: " + t + "px", "top: " + e + "px"].join(";")
            }, render: function (t, e) {
                var n = this._o, a = new Date, i = m(t, e), o = new Date(t, e, 1).getDay(), s = [], r = [];
                g(a), n.firstDay > 0 && (o -= n.firstDay, 0 > o && (o += 7));
                for (var l = i + o, c = l; c > 7;) c -= 7;
                l += 7 - c;
                for (var u = 0, d = 0; l > u; u++) {
                    var h = new Date(t, e, 1 + (u - o)), p = n.minDate && h < n.minDate || n.maxDate && h > n.maxDate,
                        y = f(this._d) ? v(h, this._d) : !1, b = v(h, a), w = o > u || u >= i + o;
                    r.push(x(1 + (u - o), e, t, y, b, p, w)), 7 === ++d && (s.push(k(r, n.isRTL)), r = [], d = 0)
                }
                return S(n, s)
            }, isVisible: function () {
                return this._v
            }, show: function () {
                this._v || (d(this.el, "is-hidden"), this._v = !0, this.draw(), this._o.bound && (o(a, "click", this._onClick), this.adjustPosition()), "function" == typeof this._o.onOpen && this._o.onOpen.call(this))
            }, hide: function () {
                var t = this._v;
                t !== !1 && (this._o.bound && s(a, "click", this._onClick), this.el.style.cssText = "", u(this.el, "is-hidden"), this._v = !1, void 0 !== t && "function" == typeof this._o.onClose && this._o.onClose.call(this))
            }, destroy: function () {
                this.hide(), s(this.el, "mousedown", this._onMouseDown, !0), s(this.el, "change", this._onChange), this._o.field && (s(this._o.field, "change", this._onInputChange), this._o.bound && (s(this._o.trigger, "click", this._onInputClick), s(this._o.trigger, "focus", this._onInputFocus), s(this._o.trigger, "blur", this._onInputBlur))), this.el.parentNode && this.el.parentNode.removeChild(this.el)
            }
        }, D
    }), /*!
 * Pikaday jQuery plugin.
 *
 * Copyright © 2013 David Bushell | BSD & MIT license | https://github.com/dbushell/Pikaday
 */
    function (t, e) {
        "use strict";
        "object" == typeof exports ? e(require("jquery"), require("../pikaday")) : "function" == typeof define && define.amd ? define(["jquery", "pikaday"], e) : e(t.jQuery, t.Pikaday)
    }(this, function (t, e) {
        "use strict";
        t.fn.pikaday = function () {
            var n = arguments;
            return n && n.length || (n = [{}]), this.each(function () {
                var a = t(this), i = a.data("pikaday");
                if (i instanceof e) "string" == typeof n[0] && "function" == typeof i[n[0]] && i[n[0]].apply(i, Array.prototype.slice.call(n, 1)); else if ("object" == typeof n[0]) {
                    var o = t.extend({}, n[0]);
                    o.field = a[0], a.data("pikaday", new e(o))
                }
            })
        }
    }), function () {
    this.JST || (this.JST = {}), this.JST["ecostyle/templates/_popover"] = function (t) {
        t || (t = {});
        var e, n = [], a = function (t) {
            return t && t.ecoSafe ? t : "undefined" != typeof t && null != t ? o(t) : ""
        }, i = t.safe, o = t.escape;
        return e = t.safe = function (t) {
            if (t && t.ecoSafe) return t;
            ("undefined" == typeof t || null == t) && (t = "");
            var e = new String(t);
            return e.ecoSafe = !0, e
        }, o || (o = t.escape = function (t) {
            return ("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }), function () {
            (function () {
                n.push('<div id="ls-popover-'), n.push(a(this.index)), n.push('" class="ls-popover ls-popover-'), n.push(a(this.placement || "top")), n.push(" "), n.push(a(this.customClasses)), n.push('">\n  '), this.title && (n.push('\n  <div class="ls-popover-header">\n    <h3 class="title-3"> '), n.push(a(this.title)), n.push(" </h3>\n  </div>\n  ")), n.push("\n  "), this.content && n.push("\n  "), n.push('\n  <div class="ls-popover-content"> '), n.push(this.content), n.push(" </div>\n</div>\n")
            }).call(this)
        }.call(t), t.safe = i, t.escape = o, n.join("")
    }
}.call(this), function () {
    this.JST || (this.JST = {}), this.JST["ecostyle/templates/_modal"] = function (t) {
        t || (t = {});
        var e, n = [], a = function (t) {
            return t && t.ecoSafe ? t : "undefined" != typeof t && null != t ? o(t) : ""
        }, i = t.safe, o = t.escape;
        return e = t.safe = function (t) {
            if (t && t.ecoSafe) return t;
            ("undefined" == typeof t || null == t) && (t = "");
            var e = new String(t);
            return e.ecoSafe = !0, e
        }, o || (o = t.escape = function (t) {
            return ("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }), function () {
            (function () {
                n.push('<div class="ls-modal ls-modal-template '), n.push(a(this.lsModule)), n.push('" tabindex="-1" aria-labelledby="lsModal" role="dialog">\n  '), "link" !== this.actionType ? (n.push('\n    <form action="'), n.push(a(this.action)), n.push('" class="ls-modal-box ls-form" method="post">\n  ')) : n.push('\n    <div class="ls-modal-box">\n  '), n.push('\n    <div class="ls-modal-header">\n      <button type="button" data-dismiss="modal" class="close">&times;</button>\n      <h4 class="ls-modal-title" id="lsModal">'), n.push(a(this.title)), n.push('</h4>\n    </div>\n    <div class="ls-modal-body">\n      <p>'), n.push(this.content), n.push('</p>\n    </div>\n    <div class="ls-modal-footer">\n      <button type="button" class="ls-btn ls-float-right" data-dismiss="modal">\n        '), n.push(a(this.close)), n.push("\n      </button>\n      "), "link" !== this.actionType ? (n.push("\n        <button "), n.push(a(this.customAttrs)), n.push(' type="submit" class=" ls-btn '), n.push(a(this["class"])), n.push('">'), n.push(a(this.save)), n.push("</button>\n      ")) : (n.push('\n        <a href="'), n.push(a(this.action)), n.push('" '), n.push(a(this.customAttrs)), n.push(' class=" ls-btn '), n.push(a(this["class"])), n.push('">'), n.push(a(this.save)), n.push("</a>\n      ")), n.push("\n    </div>\n  "), "link" !== this.actionType ? n.push("\n    </form>\n  ") : n.push("\n    </div>\n  "), n.push("\n</div>\n")
            }).call(this)
        }.call(t), t.safe = i, t.escape = o, n.join("")
    }
}.call(this), function () {
    this.JST || (this.JST = {}), this.JST["ecostyle/templates/_dropdown"] = function (t) {
        t || (t = {});
        var e, n = [], a = t.safe, i = t.escape;
        return e = t.safe = function (t) {
            if (t && t.ecoSafe) return t;
            ("undefined" == typeof t || null == t) && (t = "");
            var e = new String(t);
            return e.ecoSafe = !0, e
        }, i || (i = t.escape = function (t) {
            return ("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }), function () {
            (function () {
                var t, e, a, i;
                for (n.push('<div data-ls-module="dropdown" class="ls-dropdown">\n  <a href="#" class="ls-btn"></a>\n  <ul class="ls-dropdown-nav">\n    '), i = this.elements, e = 0, a = i.length; a > e; e++) t = i[e], n.push("\n      "), "" !== t.text && (n.push("\n        <li>"), n.push(t.outerHTML), n.push("</li>\n      ")), n.push("\n    ");
                n.push("\n  </ul>\n</div>\n")
            }).call(this)
        }.call(t), t.safe = a, t.escape = i, n.join("")
    }
}.call(this), function () {
    this.JST || (this.JST = {}), this.JST["ecostyle/templates/_browser-unsupported-bar"] = function (t) {
        t || (t = {});
        var e, n = [], a = t.safe, i = t.escape;
        return e = t.safe = function (t) {
            if (t && t.ecoSafe) return t;
            ("undefined" == typeof t || null == t) && (t = "");
            var e = new String(t);
            return e.ecoSafe = !0, e
        }, i || (i = t.escape = function (t) {
            return ("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }), function () {
            (function () {
                n.push('<div class="ls-unsupported-bar ls-alert-blocker ls-alert-warning ls-alert-fixed-top">\n  <span class="ls-dismiss" data-ls-module="dismiss">&times</span>\n  <strong>Atualize seu navegador!</strong><br>Baixe a vers\xe3o mais recente:<br>\n   <a href="//www.mozilla.org/en-US/firefox" target="_blank">Firefox</a>, <a href="//www.google.com/intl/en-BR/chrome/browser/" target="_blank">Chrome</a>,\n   <a href="//windows.microsoft.com/en-us/internet-explorer/download-ie" class="hidden-sm hidden-xs" target="_blank">Internet Explorer</a> ou\n   <a href="//www.apple.com/safari/" target="_blank">Safari</a>\n</div>\n')
            }).call(this)
        }.call(t), t.safe = a, t.escape = i, n.join("")
    }
}.call(this);
var ecostyle = function () {
    "use strict";

    function t() {
        ecostyle.sidebarToggle.init(), ecostyle.sidebars.init()
    }

    function e() {
        ecostyle.breakpoints.init(), n(), ecostyle.general.init(), ecostyle.btnGroup.init(), ecostyle.alert.init(), ecostyle.datepicker.init(), ecostyle.form.togglePasswordField(), ecostyle.form.triggerCalendar(), a(), ecostyle.browserDetect.init()
    }

    function n() {
        var t = i();
        for (var e in t) t.hasOwnProperty(e) && (ecostyle[t[e]].init(), console.info("ecostyle: module [" + t[e] + "] successfully initialized."), $.event.trigger(t[e] + ":ready"))
    }

    function a() {
        $("html").hasClass("ls-trackevent-on") && ecostyle.trackEvents.init()
    }

    function i() {
        var t = [];
        return $("[data-ls-module]").each(function () {
            var e = $(this).data("ls-module");
            -1 === t.indexOf(e) && t.push(e)
        }), t
    }

    return {init: e, fastInit: t}
}(), ls = ecostyle;
$(window).on("load", function () {
    "use strict";
    ls.init()
}), $(document).ready(function () {
    "use strict";
    ls.fastInit()
});
var ecostyle = ecostyle || {};
ecostyle.breakpoints = function () {
    "use strict";

    function t(t) {
        i.html = $("html"), e(t), n(t), a()
    }

    function e(t) {
        var e;
        e = t ? t.documentWidth : $(document).width(), e < i.sm ? (i.html.addClass("ls-window-xs"), ecostyle.breakpointClass = "ls-window-xs") : e >= i.sm && e < i.md ? (i.html.addClass("ls-window-sm").removeClass("ls-sidebar-visible ls-notifications-visible "), ecostyle.breakpointClass = "ls-window-sm") : e >= i.md && e < i.lg ? (i.html.addClass("ls-window-md").removeClass("ls-sidebar-visible ls-notifications-visible "), ecostyle.breakpointClass = "ls-window-md") : (i.html.addClass("ls-window-lg").removeClass("ls-sidebar-visible ls-notifications-visible "), ecostyle.breakpointClass = "ls-window-lg")
    }

    function n(t) {
        var e;
        e = t ? t.documentWidth : screen.width, e < i.sm ? (i.html.addClass("ls-screen-xs"), ecostyle.breakpointScreenClass = "ls-screen-xs") : e >= i.sm && e < i.md ? (i.html.addClass("ls-screen-sm"), ecostyle.breakpointScreenClass = "ls-screen-sm") : e >= i.md && e < i.lg ? (i.html.addClass("ls-screen-md"), ecostyle.breakpointScreenClass = "ls-screen-md") : (i.html.addClass("ls-screen-lg"), ecostyle.breakpointScreenClass = "ls-screen-lg")
    }

    function a() {
        var t;
        $(window).resize(function () {
            clearTimeout(t), t = setTimeout(function () {
                var a = i.html.attr("class").replace(/(^|\s)(ls-window-\S+)|(ls-screen-\S+)/g, "");
                i.html.attr("class", $.trim(a)), e(), n(), $.event.trigger("breakpoint-updated"), clearTimeout(t)
            }, 300)
        })
    }

    var i = {sm: "768", md: "992", lg: "1200", html: null};
    return {init: t}
}();
var ecostyle = ecostyle || {};
ecostyle.sidebars = function () {
    "use strict";

    function t() {
        g(), s(), e(), n(), o(), r(), l(), d(), h(), f(), p(), m()
    }

    function e() {
        $(".ls-show-sidebar").on("touchstart.ls click.ls", function (t) {
            t.preventDefault(), a()
        })
    }

    function n() {
        $(".ls-show-notifications").on("touchstart.ls click.ls", function (t) {
            t.preventDefault(), i()
        })
    }

    function a() {
        $("html").toggleClass("ls-sidebar-visible")
    }

    function i() {
        $("html").toggleClass("ls-notifications-visible")
    }

    function o() {
        1 === $(".ls-sidebar .ls-area-account").length && $(".ls-sidebar").addClass("ls-area-account-active")
    }

    function s() {
        1 === $(".ls-notification").length && 0 === $(".ls-show-notifications").length && $(".ls-topbar").append('<span class="ls-show-notifications ls-ico-question"/>')
    }

    function r() {
        var t = $(".ls-menu").find("ul li ul");
        $(t).each(function () {
            $(this).addClass("ls-submenu"), $(this).parent("li").addClass("ls-submenu-parent"), $(this).find("a").addClass("ls-submenu-item")
        })
    }

    function l() {
        $(".ls-submenu-parent").on("click", "> a", function (t) {
            t.preventDefault(), $(this).parents(".ls-submenu-parent").hasClass("ls-active") ? u($(this)) : c($(this))
        })
    }

    function c(t) {
        var e = $(t).parents(".ls-submenu-parent");
        $(".ls-submenu-parent").removeClass("ls-active"), e.addClass("ls-active"), m(e)
    }

    function u(t) {
        var e = $(t).parents(".ls-submenu-parent");
        e.removeClass("ls-active"), m(e)
    }

    function d() {
        $(".ls-sidebar-toggled").length || $(".ls-submenu li.ls-active").each(function () {
            c($(this))
        })
    }

    function h() {
        $(window).on("sidebar-minimize", function () {
            $(".ls-submenu li").each(function () {
                u($(this))
            })
        }), $(window).on("sidebar-maximize", function () {
            $(".ls-submenu li.ls-active").each(function () {
                c($(this))
            })
        })
    }

    function f() {
        $(document).on("click", function (t) {
            var e = $(t.target);
            $(".ls-sidebar-toggled").length && $(".ls-submenu-parent.ls-active").length && (e.is(".ls-submenu-parent.ls-active *") || u($(".ls-submenu-parent.ls-active > a")))
        })
    }

    function p() {
        var t = $(".ls-menu");
        t.attr({role: "navigation"}), t.find("ul").attr({role: "menu"}), t.find("a").attr({role: "menuitem"}), $(".ls-submenu-parent").each(function (t, e) {
            m(e)
        })
    }

    function m(t) {
        $(t).hasClass("ls-active") ? $(t).attr({
            "aria-expanded": "true",
            "aria-hidden": "false"
        }) : $(t).attr({"aria-expanded": "false", "aria-hidden": "true"})
    }

    function g() {
        $(".ls-show-sidebar").off("touchstart.ls click.ls"), $(".ls-show-notifications").off("touchstart.ls click.ls"), $(".ls-submenu-parent > a").off("click.ls")
    }

    return {init: t, unbind: g}
}();
var ecostyle = ecostyle || {};
ecostyle.sidebarToggle = function () {
    "use strict";

    function t() {
        r(), n(), e(), a(), s()
    }

    function e() {
        $(".ls-sidebar").length && $(".ls-sidebar").append('<span class="ls-sidebar-toggle ls-ico-shaft-left"></span>')
    }

    function n() {
        var t = localStorage.getItem("stateSidebar");
        t || $("html").hasClass("ls-sidebar-toggled") ? i() : o()
    }

    function a() {
        $(".ls-sidebar-toggle").on("click", function () {
            $("html").hasClass("ls-sidebar-toggled") ? o() : i()
        })
    }

    function i() {
        $("html").addClass("ls-sidebar-toggled"), $(".ls-sidebar-toggle").addClass("ls-active"), localStorage.setItem("stateSidebar", "minimized"), $.event.trigger("sidebar-minimize")
    }

    function o() {
        $("html").removeClass("ls-sidebar-toggled"), $(".ls-sidebar-toggle").removeClass("ls-active"), localStorage.removeItem("stateSidebar"), $.event.trigger("sidebar-maximize")
    }

    function s() {
        $(window).on("breakpoint-updated", function () {
            $(".ls-window-xs").length && o()
        })
    }

    function r() {
        $(".ls-sidebar-toggle").off("click")
    }

    return {init: t}
}();
var ecostyle = ecostyle || {};
ecostyle.collapse = function () {
    "use strict";

    function t() {
        $(s.trigger).each(function () {
            i($(this))
        }), e()
    }

    function e() {
        $(s.trigger).each(function (t, e) {
            var r = $(e);
            r.hasClass(s.classes.alwaysOpened) || r.find(s.classes.header).on(s.event.click, function (t) {
                t.preventDefault(), n(r), a(r), i(r)
            }), 0 === r.find(s.classes.header).length && (r.off(s.event.click), r.on(s.event.click, function (t) {
                t.preventDefault(), o($(e).data("target"))
            }))
        })
    }

    function n(t) {
        var e = t.parents(s.classes.groupContainer);
        e[0] && e.find(s.trigger).not(t).removeClass(s.classes.opened)
    }

    function a(t) {
        t.hasClass(s.classes.opened) ? (t.removeClass(s.classes.opened), t.trigger("collapse:closed")) : (t.addClass(s.classes.opened), t.trigger("collapse:opened"))
    }

    function i(t) {
        $(t).hasClass(s.classes.opened) ? ($(t).find(s.classes.header).attr({"aria-expanded": !0}), $(t).find(s.classes.content).attr({"aria-hidden": !1})) : ($(t).find(s.classes.header).attr({"aria-expanded": !1}), $(t).find(s.classes.content).attr({"aria-hidden": !0}))
    }

    function o(t) {
        $(t).prev(s.classes.header).trigger(s.event.click)
    }

    var s = {
        trigger: '[data-ls-module="collapse"]',
        classes: {
            header: ".ls-collapse-header",
            content: ".ls-collapse-body",
            groupContainer: ".ls-collapse-group",
            open: "ls-collapse-open",
            close: "ls-collapse-close",
            opened: "ls-collapse-opened",
            alwaysOpened: "ls-collapse-opened-always"
        },
        event: {click: "click.ls"}
    };
    return {init: t, toggle: o}
}();
var ecostyle = ecostyle || {};
ecostyle.modal = function () {
    "use strict";

    function t() {
        n(), a()
    }

    function e() {
        $(document).off("keyup.ls-esc"), $(u.close.classes + ", " + u.close.trigger).off("click.ls")
    }

    function n() {
        $(u.open.trigger).off("click.ls"), e()
    }

    function a() {
        $(u.open.trigger).on("click.ls", function () {
            ecostyle.modal.open($(this))
        }), $(".ls-opened").length > 0 && l("#" + $(".ls-opened").attr("id"))
    }

    function i() {
        $(document).one("keyup.ls-esc", function (t) {
            27 === t.keyCode && $(".ls-opened") && ecostyle.modal.close()
        }), $(u.close.classes + ", " + u.close.trigger).on("click.ls", function (t) {
            return t.target !== t.currentTarget ? !0 : void ecostyle.modal.close()
        })
    }

    function o(t) {
        var e = $(t).data("append-to"), n = $(t).data("target");
        e && $(n).appendTo(e)
    }

    function s(t) {
        var e = null;
        $("body").addClass(u.classes.open), $(t).data("target") || "object" != typeof t ? (e = $(t).data("target") ? $(t.data("target")) : $(t), o(t)) : (e = $(ecostyle.templates.modal($(t).data())), $("body").append(e), $(".ls-modal-template").focus(), i()), $(e).addClass("ls-opened"), e.trigger(u.open.triggerOpened, t), c(t), l(t)
    }

    function r() {
        var t = $(".ls-modal.ls-opened");
        $("body").removeClass(u.classes.open), t.attr("aria-hidden", !0), t.removeClass("ls-opened"), e(), t.trigger(u.close.triggerClosed), t.hasClass("ls-modal-template") && t.remove()
    }

    function l(t) {
        var e = $(t).data("target") ? $(t.data("target")) : $(t);
        e.each(function (t, e) {
            void 0 !== $(e).data("modal-blocked") ? $(e).find('[data-dismiss="modal"]').remove() : i()
        })
    }

    function c(t) {
        var e = $(t).data("target") ? $(t.data("target")) : $(t),
            n = e.find(".ls-modal-title").attr("id") || "lsModal" + u.lsModal++;
        e.find(".ls-modal-title").attr("id", n), e.attr({
            role: "dialog",
            "aria-hidden": !1,
            "aria-labelledby": n,
            tabindex: "-1"
        }).focus()
    }

    var u = {
        open: {trigger: '[data-ls-module="modal"]', triggerOpened: "modal:opened"},
        close: {classes: ".ls-modal", trigger: '[data-dismiss="modal"]', triggerClosed: "modal:closed"},
        classes: {open: "ls-overflow-hidden"},
        lsModal: 0
    };
    return {init: t, open: s, close: r, unbind: n}
}();
var ecostyle = ecostyle || {};
ecostyle.alert = function () {
    "use strict";

    function t() {
        e()
    }

    function e() {
        $('[class*="ls-alert"]').attr({role: "alert"})
    }

    return {init: t}
}();
var ecostyle = ecostyle || {};
ecostyle.dismiss = function () {
    "use strict";

    function t() {
        e(), n()
    }

    function e() {
        $(o.trigger).off("click.ls")
    }

    function n() {
        $(o.trigger).on("click.ls", function () {
            a(this), ecostyle.topbarCurtain.updateStatusCounter()
        })
    }

    function a(t) {
        var e = $(t).parents(".ls-dismissable");
        $(t).data("target") && (e = $(t).data("target")), i(e)
    }

    function i(t) {
        $(t).addClass("ls-dismissed"), $(t).trigger(o.triggerClose)
    }

    var o = {trigger: "[data-ls-module=dismiss]", triggerClose: "dismiss:close"};
    return {init: t, unbind: e}
}();
var ecostyle = ecostyle || {};
ecostyle.popover = function () {
    "use strict";

    function t() {
        r(), e()
    }

    function e() {
        $(l.module).each(function (t, e) {
            var s = "hover" === $(e).attr("data-trigger") ? "mouseover" : l.trigger;
            $(e).attr("data-target", l.idPopover + t);
            var c = $(e).data("target");
            if ($(e).off(s), $(e).on(s, function (u) {
                u.preventDefault(), u.stopPropagation(), $(c).hasClass("ls-active") ? o(c) : ($(l.idPopover + t).length || n(t, e), i(c), r(c)), "mouseover" === s && $(e).on("mouseout", function () {
                    o(c)
                }), a(e)
            }), $(window).on("breakpoint-updated", function () {
                a(e)
            }), "open" === $(this).attr("data-ls-popover")) {
                $(this).data("target");
                n(t, e), i(c), a(e)
            }
        })
    }

    function n(t, e) {
        var n = {
            index: t,
            title: $(e).data("title"),
            content: $(e).data("content"),
            placement: $(e).data("placement"),
            customClasses: $(e).data("custom-class")
        };
        $("body").append(ecostyle.templates.popover(n))
    }

    function a(t) {
        var e = {
            target: $(t).data("target"),
            top: $(t).offset().top,
            left: $(t).offset().left,
            width: $(t).outerWidth(),
            height: $(t).outerHeight(),
            placement: $(t).data("placement")
        };
        switch (e.placement) {
            case"right":
                $(e.target).css({top: e.top += e.height / 2 - 2, left: e.left += e.width + 12});
                break;
            case"bottom":
                $(e.target).css({top: e.top += e.height + 12, left: e.left += e.width / 2});
                break;
            case"left":
                $(e.target).css({top: e.top += e.height / 2 - 2, left: e.left -= 12});
                break;
            default:
            case"top":
                $(e.target).css({top: e.top -= 12, left: e.left += e.width / 2})
        }
    }

    function i(t) {
        $(t).addClass("ls-active"), $(t).off(l.events.closed).trigger(l.events.opened)
    }

    function o(t) {
        $(t || ".ls-popover.ls-active").removeClass("ls-active"), $(t).trigger(l.events.closed).off(l.events.opened), $(".ls-popover.ls-active").length || $(document).off(l.events.clickAnywhere)
    }

    function s() {
        $(l.popoverClass).remove(), $.each(l.events, function (t, e) {
            $(document).unbind(e)
        }), $(document).trigger(l.events.destroyed)
    }

    function r(t) {
        $(document).on(l.events.clickAnywhere, function (e) {
            $(e.target).parents(".ls-popover").length || o(t)
        })
    }

    var l = {
        module: '[data-ls-module="popover"]',
        idPopover: "#ls-popover-",
        popoverClass: ".ls-popover",
        trigger: "click",
        events: {
            clickAnywhere: "click.clickanywhere",
            opened: "popover:opened",
            closed: "popover:closed",
            destroyed: "popover:destroyed"
        }
    };
    return {init: t, show: i, hide: o, destroy: s}
}();
var ecostyle = ecostyle || {};
ecostyle.dropdown = function () {
    "use strict";

    function t() {
        e(), n(), a(), l(c.dropdown)
    }

    function e() {
        $(c.firstLink).off("click.ls"), $(c.area).off("click.ls")
    }

    function n() {
        $(c.firstLink).on("click.ls", function (t) {
            t.preventDefault();
            var e = $($(this).parents(c.module));
            ecostyle.dropdown.toggleDropdown(e), r(e), t.stopPropagation()
        })
    }

    function a() {
        $(c.area).on("click.ls", function () {
            ecostyle.dropdown.closeDropdown(), l(c.dropdown)
        })
    }

    function i(t) {
        t.find(c.button).first().hasClass("ls-disabled") || (s(t), t.toggleClass("ls-active"), l(t), ecostyle.topbarCurtain.hideCurtains(), o(t))
    }

    function o(t) {
        $(t).hasClass("ls-active") ? $(t).trigger("dropdown:opened") : $(t).trigger("dropdown:closed")
    }

    function s(t) {
        $(c.module).not(t).removeClass("ls-active")
    }

    function r(t) {
        var e = $(c.area);
        e.get(0).scrollWidth > e.width() && $(t).addClass("ls-pos-right")
    }

    function l(t) {
        $(c.nav).find(c.button).attr({"aria-expanded": "false"}), $(c.nav).attr({"aria-hidden": "true"}), $(t).each(function () {
            $(c.nav).find("a").attr({role: "option"}), $(c.button, $(this)).attr({role: "combobox"}), $(this).hasClass("ls-active") ? ($(c.button, $(this)).attr({"aria-expanded": "true"}), $(c.nav, $(this)).attr({"aria-hidden": "false"})) : ($(c.button, $(this)).attr({"aria-expanded": "false"}), $(c.nav, $(this)).attr({"aria-hidden": "true"}))
        })
    }

    var c = {
        area: "body",
        dropdown: ".ls-dropdown",
        module: '[data-ls-module="dropdown"]',
        button: '[class*="ls-btn"]',
        firstLink: '[data-ls-module="dropdown"] > [class*="ls-btn"]:first-child, .ls-dropdown.ls-user-account > a:first-child',
        nav: ".ls-dropdown-nav"
    };
    return {init: t, unbind: e, toggleDropdown: i, closeDropdown: s}
}();
var ecostyle = ecostyle || {};
ecostyle.tabs = function () {
    "use strict";

    function t() {
        c(), e(), n(), i(), u()
    }

    function e() {
        $('[data-ls-module="tabs"]').on("click.ls", function (t) {
            t.preventDefault();
            var e = $($(this).attr("href") || $(this).data("target")), n = $(this).closest(".ls-tabs-nav");
            l(this, e), r(this, e), a(n) && o(n)
        })
    }

    function n() {
        $(window).on("breakpoint-updated", function () {
            ecostyle.tabs.checkBreakpoint()
        })
    }

    function a(t) {
        return $(t).hasClass("in-dropdown")
    }

    function i() {
        ("ls-window-sm" === ecostyle.breakpointClass || "ls-window-xs" === ecostyle.breakpointClass) && $(".ls-tabs-nav").each(function (t, e) {
            a(e) || s(e)
        })
    }

    function o(t) {
        t.closest(".ls-dropdown-tabs").find("> a").text(t.find("li.ls-active > a").text())
    }

    function s(t) {
        var e = $(t);
        e.addClass("in-dropdown ls-dropdown-nav").wrap('<div data-ls-module="dropdown" class="ls-dropdown-tabs">'), e.find(".ls-dropdown-nav").each(function () {
            e.append($(this).html()), $(this).closest("li").remove()
        }), e.parent(".ls-dropdown-tabs").prepend('<a data-ls-module="tabs" class="ls-btn">' + e.find("li.ls-active > a").text() + "</a>"), ecostyle.tabs.init(), ecostyle.dropdown.init()
    }

    function r(t, e) {
        $(t).parents("li").addClass("ls-active"), $(t).trigger("tab:activated"), e.addClass("ls-active"), $(t).attr("aria-selected", !0)
    }

    function l(t, e) {
        $(t).parents("li").siblings().removeClass("ls-active"), $(t).trigger("tab:deactivated"), e.siblings().removeClass("ls-active"), $(t).parents("li").siblings().find("a").attr("aria-selected", !1)
    }

    function c() {
        $("[data-ls-module=tabs]").off("click.ls")
    }

    function u() {
        $(d.tab).attr("role", "tablist"), $(d.tabLink).attr("role", "tab"), $(d.tabListActive).attr("aria-selected", "true"), $(d.tabContent).attr("role", "tabpanel")
    }

    var d = {
        tab: ".ls-tabs-nav",
        tabLink: ".ls-tabs-nav a",
        tabListActive: ".ls-tabs-nav li.ls-active a",
        tabContent: ".ls-tab-content"
    };
    return {init: t, unbind: c, checkBreakpoint: i}
}();
var ecostyle = ecostyle || {};
ecostyle.templates = function () {
    "use strict";

    function t() {
    }

    function e(t) {
        return JST[o + "popover"](t)
    }

    function n(t) {
        return JST[o + "modal"](t)
    }

    function a(t) {
        return JST[o + "dropdown"]({elements: t})
    }

    function i() {
        return JST[o + "browser-unsupported-bar"]()
    }

    var o = "ecostyle/templates/_";
    return {init: t, popover: e, modal: n, dropdown: a, browserUnsupportedBar: i}
}();
var ecostyle = ecostyle || {};
ecostyle.general = function () {
    "use strict";

    function t() {
        c(), n(), e(), s(), r(), l(), a()
    }

    function e() {
        $.each(u, function (t, e) {
            var n = t.split("|");
            $(n[0]).off(n[1], n[2]), $(n[0]).on(n[1], n[2], function (t) {
                var n = $(this);
                e(t, n)
            })
        })
    }

    function n() {
        var t = window.location.hash.replace("!/#", "");
        "" !== t && $('[data-target="' + t + '"], a[href="' + t + '"]').trigger("click")
    }

    function a() {
        $("[data-ls-fields-enable]").on("click.ls", function (t) {
            t.preventDefault();
            var e = $(this), n = $(e.data("ls-fields-enable")), a = n.data("form-text") ? "ls-form-text" : "";
            n.toggleClass("ls-form-disable ls-active " + a).find(":input").each(function (t, e) {
                var n = $(e);
                n.toggleAttr("disabled").toggleClass(a).val(n.data("original-value"))
            })
        })
    }

    function i(t, e) {
        var n = e.data("target") ? $(e.data("target")) : e, a = e.data("toggle-class");
        /(radio)|(checkbox)/.test(e.attr("type")) ? (n.toggleClass(a, !e.prop("checked")), $('[name="' + e.attr("name") + '"]').not(e).each(function () {
            var t = $(this), n = t.data("target") ? $(t.data("target")) : t, a = t.data("toggle-class");
            n.toggleClass(a, e.prop("checked"))
        })) : (t.preventDefault(), n.toggleClass(a))
    }

    function o(t, e) {
        t.preventDefault();
        var n = $(e.attr("href"));
        n[0] && $("html,body").animate({scrollTop: n.offset().top - 70}, 1e3)
    }

    function s() {
        $(".ls-disabled, [disabled='disabled']").on("click", function (t) {
            return $(this).hasClass("ls-disabled") || "disabled" === $(this).attr("disabled") ? (t.stopImmediatePropagation(), t.preventDefault(), t.stopPropagation(), !1) : void 0
        })
    }

    function r(t) {
        $("a", t).on("click.lsPreventDefault", function (t) {
            ("" === $(this).attr("href") || "#" === $(this).attr("href")) && t.preventDefault()
        })
    }

    function l() {
        $(".ls-group-active [class*='ls-btn']").on("click", function () {
            $(this).siblings().removeClass("ls-active"), $(this).addClass("ls-active")
        })
    }

    function c() {
        $("[data-ls-fields-enable]").off("click.ls"), $(".ls-disabled, [disabled='disabled']").off("click")
    }

    var u = {"[data-toggle-class]|click": i, ".ls-link-smooth|click": o};
    return jQuery.fn.toggleAttr = function (t) {
        return this.each(function () {
            var e = $(this);
            return e.attr(t) ? e.removeAttr(t) : e.attr(t, t)
        })
    }, {init: t}
}();
var ecostyle = ecostyle || {};
ecostyle.progressBar = function () {
    "use strict";

    function t() {
        e()
    }

    function e() {
        $("[data-ls-module='progressBar']").each(function (t, e) {
            var a = $(e).attr("aria-valuenow");
            $(e).append("<span aria-valuenow='" + a + "%'>");
            var i = $(e).find("span");
            n(i, a)
        })
    }

    function n(t, e) {
        $(t).css("width", e + "%")
    }

    return {init: t}
}();
var ecostyle = ecostyle || {};
ecostyle.form = function () {
    "use strict";

    function t() {
        o(), s(), i(), n(), e(), c(), a(), l()
    }

    function e() {
        "ls-window-xs" === ecostyle.breakpointClass ? ($(".ls-label-text-sufix").parents(".ls-label").addClass("ls-label-text-has-sufix"), $(".ls-label-text-prefix").parents(".ls-label").addClass("ls-label-text-has-prefix")) : $(".ls-label-text-sufix").prev('[class*="col-"]').addClass("ls-no-padding-right").find(":input").addClass("ls-no-right-radius ls-border")
    }

    function n() {
        $("textarea.ls-textarea-autoresize", ".ls-label").each(function (t, e) {
            var n = $(e);
            n.keyup(function () {
                if (!n.prop("scrollTop")) {
                    var t;
                    do {
                        t = n.prop("scrollHeight");
                        var e = n.height();
                        n.height(e - 5)
                    } while (t && t !== n.prop("scrollHeight"))
                }
                n.height(n.prop("scrollHeight"))
            })
        })
    }

    function a() {
        $("textarea.ls-textarea-autoresize", ".ls-label").each(function (t, e) {
            var n = $(e).val(), a = n.split(/\r|\r\n|\n/), i = a.length, o = 18 * i;
            $(e).height(o + "px")
        })
    }

    function i() {
        $(".ls-mask-date").mask("00/00/0000"), $(".ls-mask-time").mask("00:00:00"), $(".ls-mask-date_time").mask("00/00/0000 00:00:00"), $(".ls-mask-cep").mask("00000-000"), $(".ls-mask-phone8").mask("0000-0000"), $(".ls-mask-phone9").mask("00009-0000"), $(".ls-mask-phone8_with_ddd").mask("(00) 0000-0000"), $(".ls-mask-phone9_with_ddd").mask("(00) 00009-0000"), $(".ls-mask-cpf").mask("000.000.000-00", {reverse: !0}), $(".ls-mask-cnpj").mask("00.000.000/0000-00", {reverse: !0}), $(".ls-mask-money").mask("#.##0,00", {
            reverse: !0,
            maxlength: !1
        }), $(".ls-mask-number").mask("#.##0", {
            reverse: !0,
            maxlength: !1
        }), $(".ls-mask-ip_address").mask("0ZZ.0ZZ.0ZZ.0ZZ", {
            translation: {
                Z: {
                    pattern: /[0-9]/,
                    optional: !0
                }
            }
        }), $(".ls-mask-percent").mask("##0,00%", {reverse: !0})
    }

    function o() {
        $(u.selectors.disable).each(function (t, e) {
            var n = $(e);
            n.find(":input").each(function (t, e) {
                var n = $(e);
                n.attr("disabled", "disabled"), n.data("original-value", n.val())
            })
        })
    }

    function s() {
        $(u.selectors.text).each(function (t, e) {
            $(e).find(":input").each(function (t, e) {
                $(e).addClass("ls-form-text")
            }), $(e).data("form-text", !0)
        })
    }

    function r(t) {
        if (void 0 !== $(t).data("toggle-class")) {
            var e = $(t).data("toggle-class").split(",");
            $(t).toggleClass(e[0]).toggleClass(e[1])
        }
    }

    function l() {
        $("[data-trigger-calendar]").on("click.ls", function (t) {
            var e = $(this).data("trigger-calendar");
            $(e).trigger("click.ls")
        })
    }

    function c() {
        $(".ls-toggle-pass").on("click", function (t) {
            t.preventDefault();
            var e = $(this).data("target");
            r($(this)), "password" === $(e).attr("type") ? $(e).removeAttr("attr").prop("type", "text") : $(e).removeAttr("attr").prop("type", "password")
        })
    }

    var u = {selectors: {disable: ".ls-form-disable", text: ".ls-form-text"}};
    return {init: t, togglePasswordField: c, triggerCalendar: l}
}();
var ecostyle = ecostyle || {};
ecostyle.guidedTour = function () {
    "use strict";

    function t(t) {
        e(t)
    }

    function e(t) {
        t && t.selectors && hopscotch && ($.each(l.selectors, function (e) {
            t.selectors[e] = t.selectors[e] || l.selectors[e]
        }), n(t), s())
    }

    function n(t) {
        r = t, $(l.selectors.init).on({click: i})
    }

    function a(t) {
        return $(l.selectors.tour).trigger("click"), $(l.selectors.init).focus().attr("tabindex", "-1"), t ? t.preventDefault() : null
    }

    function i() {
        ecostyle.topbarCurtain.hideCurtains(), hopscotch.endTour(), hopscotch.startTour(r, 0), o()
    }

    function o() {
        var t = 39, e = 37, n = 27, a = hopscotch.getCurrTour().steps.length;
        $("body").off("keyup").on("keyup", function (i) {
            var o = i.keyCode;
            hopscotch.getCurrStepNum() < a && hopscotch.getState() && (o === t && hopscotch.nextStep(), o === e && hopscotch.prevStep()), o === n && hopscotch.endTour()
        })
    }

    function s() {
        "true" !== $.cookie("cookie_tour") && ($(l.selectors.tour).trigger("click"), $(l.selectors.init).focus().attr("tabindex", "-1"), $.cookie("cookie_tour", "true"))
    }

    var r, l = {selectors: {init: ".ls-btn-tour", tour: ".ls-alerts-list .ls-ico-question"}};
    return {init: t, openWelcomeTour: a}
}();
var ecostyle = ecostyle || {};
ecostyle.topbarCurtain = function () {
    "use strict";

    function t() {
        e(), a(), o(), i(), c(), n(), u()
    }

    function e() {
        $(d.module).off("click.ls, ls.toggleTopCurtain"), $(".ls-notification-list").off("click.ls"), $("body").off("click.lsTopCurtain")
    }

    function n() {
        $(d.module).each(function (t, e) {
            var n = $(e).data("target"), a = $(n + " .ls-dismissable:not(.ls-dismissed)").length;
            0 !== a && $('[data-target="' + n + '"]').attr("data-counter", a), 0 === a && ($('[data-target="' + n + '"]').removeAttr("data-counter"), $(n + " .ls-no-notification-message").addClass("active"))
        })
    }

    function a() {
        $(d.module).each(function (t, e) {
            var n = $(e).position().left, a = 11, i = $($(e).data("target")).width() / 2,
                o = window.navigator.userAgent, r = o.indexOf("MSIE "), l = o.indexOf("Trident/");
            r > 0 || l > 0 ? $($(e).data("target")).css({
                left: n + a - i + "px",
                top: "60px"
            }) : $($(e).data("target")).css({left: n + a + i + "px"}), s(e)
        })
    }

    function i() {
        $(".ls-notification-list").on("click.ls", function (t) {
            t.stopPropagation()
        })
    }

    function o() {
        $("body").on("click.lsTopCurtain", function () {
            l()
        })
    }

    function s(t) {
        $(t).on("click.ls, ls.toggleTopCurtain", function (e) {
            e.stopPropagation();
            var n = $($(t).data("target")).hasClass("ls-active");
            l(), n || ($(t).addClass("ls-active"), r($(t).data("target")))
        })
    }

    function r(t) {
        $(t).addClass("ls-active"), ecostyle.dropdown.closeDropdown()
    }

    function l() {
        $("[data-ls-module='topbarCurtain']").removeClass("ls-active"), $(".ls-notification-list").removeClass("ls-active")
    }

    function c() {
        var t;
        $(window).resize(function () {
            clearTimeout(t), t = setTimeout(function () {
                e(), a(), o(), i()
            }, 300)
        })
    }

    function u() {
        var t = $(".ls-topbar .ls-user-account");
        $(".ls-sidebar .ls-user-account").length || t.clone().prependTo(".ls-sidebar")
    }

    var d = {module: '[data-ls-module="topbarCurtain"]'};
    return {init: t, hideCurtains: l, unbind: e, updateStatusCounter: n}
}();
var ecostyle = ecostyle || {};
ecostyle.btnGroup = function () {
    "use strict";

    function t() {
        a(), n()
    }

    function e() {
        $(document).off("breakpoint-updated")
    }

    function n() {
        e(), $(document).on("breakpoint-updated", function () {
            a()
        })
    }

    function a() {
        ("ls-window-sm" === ecostyle.breakpointClass || "ls-window-xs" === ecostyle.breakpointClass) && ($(".ls-regroup").each(function (t, e) {
            i($(e).find("a, button"))
        }), ecostyle.dropdown.init(), ecostyle.modal.init(), ecostyle.general.init())
    }

    function i(t) {
        var e = $(t).wrap('<li class="hidden-xs hidden-sm">');
        t.parents(".ls-regroup").find('a[class*="ls-btn"]').removeClass(), t.parents(".ls-regroup").html(ecostyle.templates.dropdown(e))
    }

    return {init: t}
}();
var ecostyle = ecostyle || {};
ecostyle.datepicker = function () {
    "use strict";

    function t(t) {
        "text" !== t.attr("type") && t.attr("type", "text")
    }

    function e() {
        $(o.selector).each(function () {
            t($(this)), $(this).hasClass("ls-daterange") || n($(this))
        }), $(o.rangeSelector).each(function () {
            a($(this))
        })
    }

    function n(t) {
        t.pikaday(o.pikaday)
    }

    function a(t) {
        var e = null, n = null, a = $(t.data("ls-daterange")), i = {
            field: t[0], onSelect: function () {
                n.setMinDate(this.getDate())
            }
        }, s = {
            field: a[0], onSelect: function () {
                e.setMaxDate(this.getDate())
            }
        };
        e = new Pikaday($.extend(i, o.pikaday)), n = new Pikaday($.extend(s, o.pikaday)), a.attr("data-date-pair", t.attr("id"))
    }

    function i(t) {
        n($(t))
    }

    var o = {
        selector: ".datepicker",
        rangeSelector: "[data-ls-daterange]",
        pikaday: {
            firstDay: 1,
            minDate: new Date("1900-01-01"),
            maxDate: new Date("2100-12-31"),
            format: "DD/MM/YYYY",
            yearRange: [1900, 2100],
            i18n: {
                previousMonth: "Anterior",
                nextMonth: "Pr&oacute;ximo",
                months: ["Janeiro", "Fevereiro", "Mar&ccedil;o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
                weekdays: ["Domingo", "Segunda", "Ter&ccedil;a", "Quarta", "Quinta", "Sexta", "S&aacute;bado"],
                weekdaysShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "S&aacute;b"]
            }
        }
    };
    return {init: e, newDatepicker: i, createWithRange: a}
}();
var ecostyle = ecostyle || {};
ecostyle.charCounter = function () {
    "use strict";

    function t(t, e) {
        $(".ls-number-counter-" + t).text(e)
    }

    function e() {
        $('[data-ls-module="charCounter"]').each(function (e, n) {
            $(".ls-number-counter-" + e).parents(".ls-help-inline").remove();
            var a = $(n).attr("maxlength"),
                i = '<p class="ls-help-inline"><small><strong class="ls-char-count ls-number-counter-' + e + '">' + a + "</strong> caracteres restantes</small></p>",
                o = $(n).closest(".ls-prefix-group");
            $(n).data().maxlength = a, o.length ? o.after(i) : $(n).after(i), $(n).keyup(function () {
                var n = $(this).val().length, a = $(this).data().maxlength;
                n > a ? ($(this).val($(this).val().substring(0, a)), t(e, 0)) : t(e, a - n)
            }), $(n).trigger("keyup")
        })
    }

    function n() {
        e()
    }

    return {init: n}
}();
var ecostyle = ecostyle || {};
ecostyle.browserDetect = function () {
    "use strict";

    function t() {
        a()
    }

    function e() {
        return i = o.match(/(firefox)/) ? o.match(/(firefox)/)[1] : o.match(/(msie|phantomjs|chrome|version|rv)/)[1]
    }

    function n() {
        return parseInt((o.match(/.+(?:firefox|phantomjs|msie|chrome|version|rv)[\/: ]([\d.]+)/) || [0, 0])[1].split(".")[0], 10)
    }

    function a() {
        $("html").addClass("ls-browser-" + e())
    }

    var i, o = navigator.userAgent.toLowerCase();
    return {init: t, browserName: e, browserVersion: n}
}();
var ecostyle = ecostyle || {};
ecostyle.browserUnsupportedBar = function () {
    "use strict";

    function t() {
        e(), a()
    }

    function e() {
        var t = ecostyle.browserDetect.browserVersion(), e = ecostyle.browserDetect.browserName(),
            a = {chrome: 34, firefox: 29, version: 5, msie: 8};
        $.cookie("hideBrowserUnsupportedAlert") || t <= a[e] && n()
    }

    function n() {
        $("html").addClass("ls-browser-unsupported"), $("body").prepend(ecostyle.templates.browserUnsupportedBar())
    }

    function a() {
        $(".ls-dismiss[data-ls-module=dismiss]").on("click", function () {
            $("html").removeClass("ls-browser-unsupported"), $("html .ls-unsupported-bar").remove(), $.cookie("hideBrowserUnsupportedAlert", !0, {
                expires: 1
            })
        })
    }

    return {init: t}
}();
var ecostyle = ecostyle || {};
ecostyle.trackEvents = function () {
    "use strict";

    function t() {
        window.ga ? (ecostyle.trackEvents.gaPresent = !0, e(ecostyle.trackEvents), n()) : ecostyle.trackEvents.gaPresent = !1
    }

    function e(t) {
        t.eventCategory = $("body").attr("data-ls-te-category") || window.location.pathname
    }

    function n() {
        a(), i(), o(), s(), u()
    }

    function a() {
        var t = $("a");
        $(t).each(function (t, e) {
            var n = {};
            if (n.category = $(e).data("ls-te-category") ? $(e).data("ls-te-category") : null, n.action = $(e).data("ls-te-action") ? $(e).data("ls-te-action") : "open_link_#" + $(e).attr("href"), n.label = $(e).data("ls-te-label") ? $(e).data("ls-te-label") : $(e).text(), $(e).attr("href") && 0 === $(e).attr("href").indexOf("#") && (n.action = $(e).data("ls-te-action") ? $(e).data("ls-te-action") : "on_page_link_" + $(e).attr("href")), "tabs" === $(e).attr("data-ls-module") && (n.action = "tab_navigation"), "dropdown" === $(e).parent().attr("data-ls-module") && ($(e).parents(".ls-topbar").length > 0 ? (n.action = "top_bar_action", n.label = "Toggle user dropdown") : n.action = "dropdown_toggle"), "modal" === $(e).attr("data-ls-module")) {
                var a = $(e).data("target") ? $(e).data("target") : $(e).attr("href");
                n.action = "open_modal_" + a
            }
            "collapse" === $(e).parent().attr("data-ls-module") && (n.type = "collapse"), "topbarCurtain" === $(e).attr("data-ls-module") && (n.action = "top_bar_action"), r(e, n)
        })
    }

    function i() {
        var t = $("button");
        $(t).each(function (t, e) {
            var n = {};
            n.category = $(e).data("ls-te-category") ? $(e).data("ls-te-category") : null, n.action = $(e).data("ls-te-action") ? $(e).data("ls-te-action") : "on_page_button_#", n.label = $(e).data("ls-te-label") ? $(e).data("ls-te-label") : $(e).text();
            var a;
            "modal" === $(e).attr("data-ls-module") && (a = $(e).data("target") ? $(e).data("target") : $(e).attr("href"), n.action = "open_modal_" + a), "modal" === $(e).attr("data-dismiss") && (a = $($(e).parents(".ls-modal")).attr("id"), n.action = "close_modal_#" + a), r(e, n)
        })
    }

    function o() {
        var t = $("form");
        $(t).each(function (t, e) {
            var n = {};
            $(e).parents(".ls-modal").length ? n.action = "submit_form_#" + ($(e).data("action") || $(e).attr("id") || $(e).attr("action")) + "#inside_modal#" + $(e).parents(".ls-modal").attr("id") : n.action = "submit_form_#" + ($(e).data("action") || $(e).attr("id") || $(e).attr("action")), n.label = $(e).find(":submit[type=submit]").val() || $(e).find(":submit[type=submit]").text(), l(e, n)
        })
    }

    function s() {
        var t = $("select");
        $(t).each(function (t, e) {
            var n = {};
            n.category = $(e).data("ls-te-category") ? $(e).data("ls-te-category") : null, n.action = "select_change_#" + ($(e).attr("id") || $(e).attr("name")), n.label = "option", c(e, n)
        })
    }

    function r(t, e) {
        $(t).off("click.lsTrackEvent"), $(t).on("click.lsTrackEvent", function () {
            if ("collapse" === e.type) {
                var n = $(t).parent().attr("id");
                $("#" + n).hasClass("ls-collapse-open") ? (e.action = "close_collapse_#" + n, e.label = "Close collapse") : (e.action = "open_collapse_#" + n, e.label = "Open collapse")
            }
            ga("send", "event", e.category || ecostyle.trackEvents.eventCategory, e.action, e.label)
        })
    }

    function l(t, e) {
        $(t).find(":submit[type=submit]").off("click.lsTrackEvent"), $(t).off("submit.ls"), $(t).on("submit.ls", function () {
            ga("send", "event", ecostyle.trackEvents.eventCategory, e.action, e.label)
        })
    }

    function c(t, e) {
        $(t).off("change.ls"), $(t).on("change.ls", function () {
            e.label = $(this).val(), ga("send", "event", e.category || ecostyle.trackEvents.eventCategory, e.action, e.label)
        })
    }

    function u() {
        $("body").off("click.lsTrackEvents"), $("body").on("click.lsTrackEvents", ".hopscotch-bubble .hopscotch-nav-button", function () {
            var t = $(this).parents(".hopscotch-bubble").find(".hopscotch-bubble-number").text();
            ga("send", "event", ecostyle.trackEvents.eventCategory, "go_to_tour_step[" + t + "]", $(this).text())
        })
    }

    return {init: t}
}();
var ecostyle = ecostyle || {};
ecostyle.steps = function () {
    "use strict";

    function t() {
        e(), n(), a(), s(), r(), i(), l(), o(), c(), u()
    }

    function e() {
        $(x.selectors.nav).off("click.steps"), $(x.actions.next).off("click.steps"), $(x.actions.prev).off("click.steps")
    }

    function n() {
        $(".ls-steps-nav li").prepend('<span class="ls-steps-arrow" />')
    }

    function a() {
        $(x.selectors.nav).attr("role", "tablist"), $(x.selectors.nav).find(x.selectors.button).attr("aria-selected", "false"), $(x.selectors.nav).find(".ls-active .ls-steps-btn").attr("aria-selected", "true"), $(x.selectors.button).attr("role", "tab"), $(x.selectors.container).attr({
            "aria-hidden": !0,
            role: "tabpanel"
        })
    }

    function i() {
        var t = $(x.selectors.nav).find("li");
        t.each(function (e) {
            $(this).hasClass(x.status.active) && $(x.selectors.mobile).attr({
                "data-index": e + 1 + " de " + t.length,
                "data-title": $(this).find(x.selectors.button).attr("title")
            })
        })
    }

    function o() {
        $(x.selectors.mobile).on("click.steps", function () {
            $(x.selectors.steps).toggleClass(x.status.active)
        })
    }

    function s() {
        for (var t = $(x.selectors.button), e = t.length, n = 0; e > n; n++) {
            var a = $(t[n]).attr("title");
            $(t[n]).attr({"aria-label": a})
        }
    }

    function r() {
        var t = $(x.selectors.nav).find(x.classes.active).index();
        -1 === t ? $(x.selectors.nav).each(function () {
            var t = $(this).find("li:first").find(x.selectors.button), e = t.data("target");
            v(t, $(e))
        }) : (m(t), $(x.selectors.nav).find("li:lt(" + t + ")").addClass(x.status.actived));
        var e = $(x.selectors.moduleVisible).height();
        p(e)
    }

    function l() {
        $(x.selectors.nav).on("click.steps", x.selectors.moduleActive, function (t) {
            t.preventDefault(), g($(this))
        })
    }

    function c() {
        $(x.actions.next).on("click.steps", function (t) {
            t.preventDefault(), d()
        })
    }

    function u() {
        $(x.actions.prev).on("click.steps", function (t) {
            t.preventDefault(), h()
        })
    }

    function d() {
        var t = jQuery.Event("NextStepEvent");
        $(document).trigger(t);
        var e = jQuery.Event("BeforeNextStep");
        $(document).trigger(e);
        var n = jQuery.Event(x.events.nextStep);
        if ($(document).trigger(n), !t.isDefaultPrevented() && !e.isDefaultPrevented() && !n.isDefaultPrevented()) {
            var a = $(x.selectors.nav).find(x.classes.active).next("li").addClass(x.status.active).find(x.selectors.button);
            g(a), $(document).trigger(jQuery.Event("AfterNextStep")), $(document).trigger(jQuery.Event(x.events.afterNextStep))
        }
    }

    function h() {
        var t = jQuery.Event("PrevStepEvent");
        $(document).trigger(t);
        var e = jQuery.Event("BeforePrevStep");
        $(document).trigger(e);
        var n = jQuery.Event(x.events.prevStep);
        if ($(document).trigger(n), !t.isDefaultPrevented() && !e.isDefaultPrevented() && !n.isDefaultPrevented()) {
            var a = $(x.selectors.nav).find(x.classes.active).prev("li").find(x.selectors.button);
            g(a), $(document).trigger(jQuery.Event("AfterPrevStep")), $(document).trigger(jQuery.Event(x.events.afterPrevStep))
        }
    }

    function f(t, e) {
        var n = w.offset().top + _ - t.offset().top;
        return n >= 0 && (e += _), e
    }

    function p(t) {
        var e = $(x.selectors.steps), n = $(x.selectors.nav), a = n.offset(), i = n.height();
        $(window).scroll(function () {
            if (!($(window).width() < 768)) if ($(window).scrollTop() + _ >= e.offset().top) {
                var o = parseInt($(window).scrollTop() - i, 10), s = $(window).scrollTop() - a.top + 20;
                w.length ? n.stop().animate({marginTop: f(e, s)}) : n.stop().animate({marginTop: s}), o + i >= t && n.stop().animate({marginTop: 0})
            } else n.stop().animate({marginTop: 0})
        })
    }

    function m(t) {
        $(x.selectors.container).eq(t).addClass(x.status.active)
    }

    function g(t) {
        var e = $(t.attr("href") || t.data("target"));
        v(t, e), y(t, e), b(), i(), $("html").hasClass("ls-screen-xs") && $(x.selectors.nav).hasClass(x.status.active) && $(x.selectors.mobile).trigger("click")
    }

    function v(t, e) {
        $(t).parents("li").addClass(x.status.active), $(t).parents("li").prev("li").addClass(x.status.actived), e.addClass(x.status.active).attr({"aria-hidden": !1}), $(t).attr("aria-selected", !0)
    }

    function y(t, e) {
        $(t).parents("li").siblings().removeClass(x.status.active), e.siblings().removeClass(x.status.active).attr({"aria-hidden": !0}), $(t).parents("li").siblings().find(x.selectors.button).attr("aria-selected", !1)
    }

    function b() {
        $("html, body").stop().animate({scrollTop: $(".ls-steps").offset().top - 60}, 300);
        var t = $(x.selectors.moduleVisible).height();
        p(t)
    }

    var w = $(".ls-topbar"), _ = w.height(), x = {
        selectors: {
            moduleActive: '.ls-actived [data-ls-module="steps"]',
            nav: ".ls-steps-nav",
            button: ".ls-steps-btn",
            container: ".ls-steps-content",
            steps: ".ls-steps",
            moduleVisible: ".ls-steps-content:visible",
            mobile: ".ls-steps-mobile"
        },
        status: {active: "ls-active", actived: "ls-actived"},
        classes: {active: ".ls-active"},
        actions: {next: '.ls-steps-content [data-action="next"]', prev: '.ls-steps-content [data-action="prev"]'},
        events: {
            nextStep: "steps:next",
            afterNextStep: "steps:afternext",
            prevStep: "steps:prev",
            afterPrevStep: "steps:afterprev"
        }
    };
    return {init: t, unbind: e, nextStep: d, prevStep: h}
}();
var ecostyle = ecostyle || {};
ecostyle.button = function () {
    "use strict";

    function t() {
        e(), o(), n(), l()
    }

    function e() {
        $("[data-ls-module=button]").off("click.button")
    }

    function n() {
        $('[data-ls-module="button"]').on("click.button", function (t) {
            t.preventDefault();
            var e = $($(this).attr("href") || $(this).data("target")), n = "[data-ls-module=button]";
            r(this, e, n), s(this, e), a(), $(this).find("input").prop("checked", !0)
        })
    }

    function a() {
        $('[data-ls-module="button"] input[type="radio"]').each(function (t, e) {
            $(e).removeAttr("checked")
        })
    }

    function i(t) {
        $(t).each(function (t, e) {
            $(e).attr("checked", "checked")
        })
    }

    function o() {
        $(".ls-tabs-btn-nav li.ls-active").each(function () {
            if ($(this).hasClass("ls-active") === !0) {
                var t = $(this).find('[data-ls-module="button"]'), e = t.attr("href") || t.data("target"),
                    n = "[data-ls-module=button]";
                i($(this).find('[data-ls-module="button"] input[type="radio"]')), r(t, e, n), s(t, e)
            }
        })
    }

    function s(t, e) {
        $(t).parents("li").addClass("ls-active"), $(e).addClass("ls-active"), $(t).attr("aria-selected", !0)
    }

    function r(t, e, n) {
        $(t).parents("li").siblings().removeClass("ls-active"), $(e).siblings().removeClass("ls-active"), $(t).parents("li").siblings().find(n).attr("aria-selected", !1)
    }

    function l() {
        $(".ls-tabs-btn-nav").attr("role", "tablist"), $(".ls-tabs-btn-nav .ls-btn").attr("role", "tab"), $(".ls-tabs-btn-nav .ls-active .ls-btn").attr("aria-selected", "true"), $(".ls-tabs-btn .ls-tab-content").attr("role", "tabpanel")
    }

    return {init: t, unbind: e}
}();
var ecostyle = ecostyle || {};
ecostyle.switchButton = function () {
    "use strict";

    function t() {
        e(), i()
    }

    function e() {
        $(o.switchButton).on("click.ls", function (t) {
            0 === $(this).find("a").length && (a($(this)), n($(this)), t.stopPropagation())
        })
    }

    function n(t) {
        t.find("input[type=checkbox]").prop("checked") ? t.trigger("switchButton:activated") : t.trigger("switchButton:deactivated")
    }

    function a(t) {
        t.toggleClass(o.openedClass)
    }

    function i() {
        $(o.switchButton).find("input[type=checkbox]").each(function () {
            $(this).prop("checked") && $(this).closest(o.switchButton).addClass(o.openedClass)
        })
    }

    var o = {switchButton: "[data-ls-module=switchButton]", openedClass: "ls-switch-btn-active"};
    return {init: t}
}();
var ecostyle = ecostyle || {};
ecostyle.toggleText = function () {
    "use strict";

    function t(t, e, n) {
        t.trigger(o.triggerChange, [e, n])
    }

    function e(e) {
        var n = e.data("target-text") ? $(e.data("target-text")) : e, a = e.data("toggle-text"), i = n.text();
        e.data("toggle-text", i), n.text(a), t(e, n, a)
    }

    function n() {
        $(o.trigger).on("click.ls", function (t) {
            t.preventDefault(), e($(this))
        })
    }

    function a() {
        $(o.trigger).off("click.ls")
    }

    function i() {
        a(), n()
    }

    var o = {trigger: '[data-ls-module="toggleText"]', triggerChange: "toggleText:change"};
    return {init: i}
}();
var ecostyle = ecostyle || {};
ecostyle.checkboxToggle = function () {
    "use strict";

    function t(t) {
        t.prop("checked", !1).removeClass("ls-checked")
    }

    function e(t) {
        t.prop("checked", !0).addClass("ls-checked")
    }

    function n(t) {
        if (t.data("toggleText")) {
            var e = t.data("toggleText"), n = t.text();
            t.data("toggleText", n).text(e)
        }
    }

    function a(t, e) {
        for (var a = 0; a < e.length; a++) if (!e[a].checked) return t.hasClass("ls-triggered") && n(t), t.prop("checked", !1).removeClass("ls-triggered"), !1;
        t.prop("checked", !0).addClass("ls-triggered"), n(t)
    }

    function i(t) {
        t.hasClass("ls-triggered") ? t.trigger("checkboxToggle:activated") : t.trigger("checkboxToggle:deactivated")
    }

    function o(o, s) {
        o.on("click.ls", function () {
            $(this).hasClass("ls-triggered") ? t(s) : e(s), $(this).toggleClass("ls-triggered"), i($(this)), n($(this))
        }), s.each(function () {
            $(this).on("click.ls", function () {
                $(this).toggleClass("ls-checked"), a(o, s)
            })
        })
    }

    function s() {
        $(r.selector.module).each(function () {
            var t = $(this), e = $('[data-checkbox-toggle="' + t.data("checkboxTarget") + '"]');
            t.off("click.ls"), e.off("click.ls"), o(t, e)
        })
    }

    var r = {selector: {module: '[data-ls-module="checkboxToggle"]'}};
    return {init: s}
}();
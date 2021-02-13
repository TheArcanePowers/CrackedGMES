!(function () {
    chrome.runtime.sendMessage({ popupOpen: !0 });
    const e = "AgEOO";
    var t = t || [];
    function o(e) {
        t.push(["_trackEvent", e.target.id, ` ${e.target.checked} - clicked`]);
    }
    t.push(["_setAccount", "UA-162757005-1"]),
        t.push(["_trackPageview"]),
        (function () {
            var e = document.createElement("script");
            (e.type = "text/javascript"), (e.async = !0), (e.src = "https://ssl.google-analytics.com/ga.js");
            var t = document.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(e, t);
        })();
    const n = [
            "autoAdmit",
            "autoReject",
            "autoCaptions",
            "autoChat",
            "autoFullScreen",
            "autoJoin",
            "autoJoinParticipants",
            "hideCommentBubble",
            "hideComments",
            "keyCode",
            "borderColor",
            "muteMicrophone",
            "mutePopup",
            "muteVideo",
            "quickLeave",
            "smartUnmute",
            "transBar",
            "displayClock",
            "darkMode",
            "pictureInPicture",
            "noAddOthers",
            "mirrorVideos",
            "meetingTimer",
            "pinBottomBar",
            "toggleBottomBar",
            "hideNames",
            "showNames",
            "hideTalkIcons",
            "leavePrompt",
            "setBackgroundColor",
            "backgroundColor",
            "speakerBorder",
            "autoUnmute",
            "autoCopyURL",
            "hideTopBar",
            "desktopDeeplink",
        ],
        r = n.reduce((e, t) => ({ ...e, [t]: !1 }), {});
    function s() {
        let e = r;
        n.forEach((t) => {
            "backgroundColor" == t
                ? (e[t] = document.getElementById("backgroundColorPicker").value)
                : "borderColor" == t
                ? (e[t] = document.getElementById("borderColor").value)
                : "keyCode" == t
                ? delete e.keyCode
                : (e[t] = document.getElementById(t).checked);
        }),
            chrome.storage.sync.set(e);
    }
    (r.keyCode = { keyCode: 32, ctrlKey: !1, altKey: !1, shiftKey: !1, metaKey: !1 }),
        (r.backgroundColor = "#111111"),
        (r.borderColor = "#64ffda"),
        document.addEventListener("DOMContentLoaded", () => {
            chrome.storage.sync.get(r, function (e) {
                n.forEach((t) => {
                    if ("keyCode" === t) {
                        const o = new y(y.keysFromEvent(e[t]));
                        document.getElementById("hotkey_edit").innerText = o.display();
                    } else
                        "backgroundColor" === t ? (document.getElementById("backgroundColorPicker").value = e[t]) : "borderColor" === t ? (document.getElementById("borderColor").value = e[t]) : (document.getElementById(t).checked = e[t]);
                });
            }),
                (function () {
                    const e = document.getElementById("featureList");
                    Object.values(e.getElementsByTagName("input")).forEach((e) => {
                        "checkbox" === e.type && ((e.onchange = s), e.addEventListener("click", o));
                    });
                })();
        });
    const a = document.getElementById("hotkey_edit"),
        c = document.getElementById("editHotkey"),
        i = document.getElementById("saveHotkey");
    let d;
    const l = (e) => {
        e.preventDefault(), (d = new y(y.keysFromEvent(e))), (a.innerText = d.display());
    };
    c.addEventListener("click", () => {
        "false" === a.getAttribute("data-active") && (a.setAttribute("data-active", "true"), c.setAttribute("style", "display: none"), i.setAttribute("style", "display: block"), document.body.addEventListener("keydown", l));
    }),
        i.addEventListener("click", () => {
            "true" === a.getAttribute("data-active") &&
                (a.setAttribute("data-active", "false"), c.setAttribute("style", "display: block"), i.setAttribute("style", "display: none"), document.body.removeEventListener("keydown", l), chrome.storage.sync.set({ keyCode: d.keys }));
        }),
        document.addEventListener("click", (e) => {
            "true" === a.getAttribute("data-active") &&
                null != d &&
                e.target != i &&
                e.target != c &&
                (a.setAttribute("data-active", "false"), c.setAttribute("style", "display: block"), i.setAttribute("style", "display: none"), document.body.removeEventListener("keydown", l), chrome.storage.sync.set({ keyCode: d.keys }));
        });
    class y {
        constructor({ keyCode: e, ctrlKey: t = !1, altKey: o = !1, shiftKey: n = !1, metaKey: r = !1 }) {
            this.keys = { keyCode: e, ctrlKey: t, altKey: o, shiftKey: n, metaKey: r };
        }
        static keysFromEvent({ keyCode: e, ctrlKey: t, altKey: o, shiftKey: n, metaKey: r }) {
            const s = { ctrlKey: t, altKey: o, shiftKey: n, metaKey: r };
            return [16, 17, 18, 91].includes(e) || (s.keyCode = e), s;
        }
        fromEvent(e) {
            return new y(y.keysFromEvent(e));
        }
        keyCode(e) {
            if (e && "object" == typeof e) {
                var t = e.which || e.keyCode || e.charCode;
                t && (e = t);
            }
            if ("number" == typeof e) return v[e];
            var o,
                n = String(e);
            return (o = g[n.toLowerCase()]) ? o : (o = f[n.toLowerCase()]) || (1 === n.length ? n.charCodeAt(0) : void 0);
        }
        keyStrings() {
            return [this.keys.ctrlKey && "Control", this.keys.altKey && "Alt", this.keys.shiftKey && "Shift", this.keys.metaKey && "Command", this.keys.keyCode && k(this.keys.keyCode)].filter((e) => e);
        }
        display() {
            return this.keyStrings()
                .map((e) => `${e}`)
                .join(" + ");
        }
        matchKeydown(e) {
            return (
                this.keys.ctrlKey == e.ctrlKey &&
                this.keys.altKey == e.altKey &&
                this.keys.shiftKey == e.shiftKey &&
                this.keys.metaKey == e.metaKey &&
                (this.keys.keyCode == e.keyCode || ([16, 17, 18, 91].includes(e.keyCode) && void 0 === this.keys.keyCode))
            );
        }
        matchKeyup(e) {
            return !(!this.keys.keyCode || this.keys.keyCode != e.keyCode) || (this.keys.ctrlKey && !e.ctrlKey) || (this.keys.altKey && !e.altKey) || (this.keys.shiftKey && !e.shiftKey) || (this.keys.metaKey && !e.metaKey);
        }
    }
    document.getElementById("activateLink").addEventListener("click", () => {
        (document.getElementById("proLinks").style.display = "none"), (document.getElementById("activationForm").style.display = "contents");
    });

    //
    //

    console.log("e: " + e + ". t: " + t + ". o: "+ o)
    const u = (e, t, o) => {
    console.log("e: " + e + ". t: " + t + ". o: "+ o)
            fetch("https://api.gumroad.com/v2/licenses/verify", e)
                .then((e) => e.json()) //jsonify
                .then((n) => {
                    if (n.success) {
                        const e = new Date().getTime(),
                              r = (Date.parse(n.purchase.subscription_cancelled_at) - e) / 864e5;
                        ("keyfermath@gmail.com" === n.purchase.email ||
                            ("(Single License)" === n.purchase.variants && n.uses <= 11) ||
                            ("(Ten Licenses)" === n.purchase.variants && n.uses <= 15) ||
                            ("(Fifty Licenses)" === n.purchase.variants && n.uses <= 60) ||
                            ("(Unlimited Licenses)" === n.purchase.variants) &&
                            (r > 0 || !n.purchase.subscription_cancelled_at) &&
                        !n.purchase.subscription_failed_at
                        //first if. If license invalid
                        //license invald ? (yes: is t truthey ? yes: p(t) no: p()) : (null is not equal to o) 
                            ? t
                                ? p(t) : p()
                            : null != o
                            // second if
                            ? h("error")
                            : h();
                    } else m(e, t, o);
                })
                .catch(() => {});
        },
        m = (e, t, o) => {
            let n = e;
            (n.body = JSON.parse(n.body)),
                (n.body.product_permalink = n.body.product_permalink = "OOSyDN"),
                (n.body = JSON.stringify(n.body)),
                fetch("https://api.gumroad.com/v2/licenses/verify", n)
                    .then((e) => e.json())
                    .then((e) => {
                        if (e.success) {
                            const n = new Date().getTime();
                            let r = (Date.parse(e.purchase.subscription_cancelled_at) - n) / 864e5;
                            ("keyfermath@gmail.com" === e.purchase.email ||
                                ("(Single License)" === e.purchase.variants && e.uses <= 11) ||
                                ("(Ten Licenses)" === e.purchase.variants && e.uses <= 15) ||
                                ("(Fifty Licenses)" === e.purchase.variants && e.uses <= 60) ||
                                "(Unlimited Licenses)" === e.purchase.variants) &&
                            (r > 0 || !e.purchase.subscription_cancelled_at) &&
                            !e.purchase.subscription_failed_at
                                ? null != t
                                    ? p(t)
                                    : p()
                                : null != o
                                ? h("error")
                                : h();
                        } else null != o ? h("error") : h();
                    })
                    .catch(() => {});
        };
    console.log(e);
    function p(e) {
        console.log(e);
        e && chrome.storage.sync.set({ licenseKey: e }),
            (document.getElementById("proUpgrade").style.display = "none"),
            (document.getElementById("proFeatures").style.display = "block"),
            (document.getElementById("basicFeatureHeader").style.display = "block"),
            (document.getElementById("featureList").style.display = "inline"),
            (document.querySelector("body").style.width = "380px"),
            (document.getElementById("desktopFooter").style.width = "348px"),
            (document.getElementById("proFeatures").style.marginBottom = "90px"),
            (document.getElementById("hotkey_edit").disabled = !1),
            (document.getElementById("editHotkey").style.display = "block"),
            (document.getElementById("hotkeyTooltip").innerText = "Click to begin listening, click again to save.");
    }
    function h(e) {
        "error" === e && ((document.getElementById("licenseKey").style.border = "2px"), (document.getElementById("licenseKey").style.borderStyle = "solid"), (document.getElementById("licenseKey").style.borderColor = "red")),
            chrome.storage.sync.set({ licenseKey: void 0 }),
            (document.getElementById("proUpgrade").style.display = "block"),
            (document.getElementById("proFeatures").style.display = "none"),
            (document.getElementById("desktopFooter").style.width = "768px"),
            (document.getElementById("hotkey_edit").disabled = !0),
            (document.getElementById("editHotkey").style.display = "none"),
            (document.getElementById("hotkeyTooltip").innerText = "Upgrade to Pro to set your own key binding.");
    }
    function k(e) {
        if (e && "object" == typeof e) {
            var t = e.which || e.keyCode || e.charCode;
            t && (e = t);
        }
        if ("number" == typeof e) return v[e];
        var o,
            n = String(e);
        return (o = g[n.toLowerCase()]) ? o : (o = f[n.toLowerCase()]) || (1 === n.length ? n.charCodeAt(0) : void 0);
    }
    chrome.storage.sync.get("licenseKey", (t) => {
        if (t.licenseKey) {
            const o = { method: "POST", headers: { Accept: "application/json", "Content-Type": "application/json" }, body: JSON.stringify({ product_permalink: e, license_key: t.licenseKey, increment_uses_count: "false" }) };
            u(o);
        } else h();
    }),
        document.getElementById("activationForm").addEventListener("submit", (t) => {
            t.preventDefault();
            const o = document.getElementById("licenseKey").value,
                n = { method: "POST", headers: { Accept: "application/json", "Content-Type": "application/json" }, body: JSON.stringify({ product_permalink: e, license_key: o, increment_uses_count: "true" }) };
            u(n, o, "error");
        }),
        (k.isEventKey = function (e, t) {
            if (e && "object" == typeof e) {
                var o = e.which || e.keyCode || e.charCode;
                if (null == o) return !1;
                if ("string" == typeof t) {
                    var n;
                    if ((n = g[t.toLowerCase()])) return n === o;
                    if ((n = f[t.toLowerCase()])) return n === o;
                } else if ("number" == typeof t) return t === o;
                return !1;
            }
        });
    var g = {
            backspace: 8,
            tab: 9,
            enter: 13,
            shift: 16,
            ctrl: 17,
            alt: 18,
            "pause/break": 19,
            "caps lock": 20,
            esc: 27,
            space: 32,
            "page up": 33,
            "page down": 34,
            end: 35,
            home: 36,
            left: 37,
            up: 38,
            right: 39,
            down: 40,
            insert: 45,
            delete: 46,
            command: 91,
            "left command": 91,
            "right command": 93,
            "numpad *": 106,
            "numpad +": 107,
            "numpad -": 109,
            "numpad .": 110,
            "numpad /": 111,
            "num lock": 144,
            "scroll lock": 145,
            "my computer": 182,
            "my calculator": 183,
            ";": 186,
            "=": 187,
            ",": 188,
            "-": 189,
            ".": 190,
            "/": 191,
            "`": 192,
            "[": 219,
            "\\": 220,
            "]": 221,
            "'": 222,
        },
        f = { windows: 91, "⇧": 16, "⌥": 18, "⌃": 17, "⌘": 91, ctl: 17, control: 17, option: 18, pause: 19, break: 19, caps: 20, return: 13, escape: 27, spc: 32, spacebar: 32, pgup: 33, pgdn: 34, ins: 45, del: 46, cmd: 91 };
    /*!
     * Programatically add the following
     */
    for (b = 97; b < 123; b++) g[String.fromCharCode(b)] = b - 32;
    for (var b = 48; b < 58; b++) g[b - 48] = b;
    for (b = 1; b < 13; b++) g["f" + b] = b + 111;
    for (b = 0; b < 10; b++) g["numpad " + b] = b + 96;
    var v = {};
    for (b in g) v[g[b]] = b;
    for (var C in f) g[C] = f[C];
    let E = document.querySelector("#backgroundColorPicker");
    E.addEventListener("change", function () {
        chrome.storage.sync.set({ backgroundColor: E.value });
    });
    let K = document.querySelector("#borderColor"),
        B = "#64ffda";
    chrome.storage.sync.get("borderColor", (e) => {
        setTimeout(() => {
            0 == e.borderColor && (chrome.storage.sync.set({ borderColor: B }), (K.value = B));
        }, 500);
    }),
        K.addEventListener("change", function () {
            chrome.storage.sync.set({ borderColor: K.value });
        }),
        document.querySelector("#desktopDeeplink").addEventListener("click", function (e) {
            e.target.checked && chrome.runtime.sendMessage({ deeplink: !0 });
        });
})();
//# sourceMappingURL=popup.js.map

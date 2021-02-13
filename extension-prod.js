!(function () {
    const e = [
        "licenseKey",
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
        "removeAll",
        "meetingTimer",
        "pinBottomBar",
        "toggleBottomBar",
        "hideNames",
        "showNames",
        "hideTalkIcons",
        "hideJoinUpsell",
        "hideToolsUpsell",
        "leavePrompt",
        "setBackgroundColor",
        "backgroundColor",
        "speakerBorder",
        "autoUnmute",
        "autoCopyURL",
        "hideTopBar",
        "desktopDeeplink",
        "hideMainPageUpsell",
        "hideHangupPageUpsell",
    ];
    let t,
        n,
        o,
        r,
        a,
        l,
        i,
        c,
        s,
        d,
        m,
        u,
        p,
        f,
        y,
        g,
        b,
        h,
        v,
        k,
        x,
        E,
        w,
        C,
        S,
        B = [],
        q = !1,
        I = { interval: void 0, isPresenting: !1, curPresenter: "", enabledFullScreen: !1 };
    if (window.location.href.includes("mesosx=1")) {
        const e = setInterval(() => {
            const t = document.querySelector('[jsname="hNGZQc"]');
            t && "false" == t.getAttribute("aria-disabled") && (clearInterval(e), t.click());
        }, 500);
    } else
        chrome.storage.sync.get(e, (e) =>
            (function (e) {
                const t = setInterval(() => {
                        document.location.href.includes("calendar") && (clearInterval(t), e.desktopDeeplink && P(e.desktopDeeplink));
                    }, 100),
                    n = setInterval(() => {
                        if (
                            ("interactive" === document.readyState && "Meet" != document.title && "Google Meet" != document.title && (null == v && null == x && null == E && null == k && ie(), e.darkMode && me(e.darkMode)),
                            "complete" === document.readyState && "Meet" != document.title && "Google Meet" != document.title)
                        ) {
                            const t = document.querySelector('[jsname="Qx7uuf"]');
                            t &&
                                "false" === t.getAttribute("aria-disabled") &&
                                (clearInterval(n),
                                e.desktopDeeplink && P(e.desktopDeeplink),
                                e.hideJoinUpsell ||
                                    chrome.storage.sync.get("licenseKey", (e) => {
                                        if (0 == e.licenseKey) {
                                            document
                                                .querySelector('[jsname="H5qcZ"]')
                                                .insertAdjacentHTML(
                                                    "beforeend",
                                                    "<div id='upsellBanner'><div id='upsellCopy'><h1 style='margin-bottom: 0px; margin-top: 18px;'>Google Meet, with super powers ⚡️</h1><p style='font-size: 13px; margin-top: 6px; line-height: 17px;'>Meet Pro adds over 15 new features to Google Meet, including Mute All, Mirror Videos, Dark Mode, Quick Emojis, and so much more.</p><div style='margin-top: 22px;'><a target='_blank' id='upsellButton' href='https://www.meetenhancementsuite.com/meetpro/?utm_source=extension&utm_medium=banner&utm_campaign=join_page'>Learn more →</a><div id='upsellDismiss' style='display: inline; margin-left: 18px; text-decoration: underline; cursor: pointer;'>Don't Show Again</div></div></div></div>"
                                                );
                                            const e = document.getElementById("upsellBanner"),
                                                t = document.getElementById("upsellCopy"),
                                                n = document.getElementById("upsellButton");
                                            (document.querySelector(".oORaUb").style.boxShadow = "none"),
                                                (document.querySelector('[jsname="jlQN5e"]').style.borderRadius = "8px"),
                                                (document.querySelector(".mWzGw").style.borderRadius = "8px"),
                                                document.getElementById("upsellDismiss").addEventListener("click", j),
                                                (e.style.cssText =
                                                    "width: 100%; height: 154px; margin-top: 20px; border-radius: 8px; background-image: url('https://www.meetenhancementsuite.com/assets/upsellBackgroundImage.png'); background-size: cover; background-repeat: no-repeat;"),
                                                (t.style.cssText = "color: #fff; margin-left: 16px; width: 420px"),
                                                (n.style.cssText = "font-weight: bold; background: #EBF7F1; color: #09201D; border-radius: 30px; padding: 10px 20px 10px 20px; margin-top: 10px;");
                                        }
                                    }),
                                e.muteMicrophone && ae(e.muteMicrophone),
                                e.muteVideo && le(e.muteVideo),
                                e.autoJoin && (e.autoJoinParticipants || t.click()),
                                e.autoJoinParticipants &&
                                    (a = setInterval(() => {
                                        const e = document.querySelector('[role="status"]');
                                        e && (e.classList.contains("Gp1oj") || (t.click(), clearInterval(a)));
                                    }, 500)));
                        }
                    }, 100),
                    o = setInterval(() => {
                        if (
                            "complete" === document.readyState &&
                            "Meet" != document.title &&
                            "Google Meet" != document.title &&
                            document.querySelector('[jsname="CQylAd"]') &&
                            (clearInterval(o),
                            e.licenseKey &&
                                ((null != v && null != x && null != E && null != k) || ie(),
                                ue(),
                                setInterval(() => {
                                    const e = document.querySelector('[jsname="KYYiw"]');
                                    e &&
                                        e.parentElement.classList.contains("ZHdB2e") &&
                                        !document.getElementById("removeAllButton") &&
                                        (document
                                            .getElementById("muteAllButton")
                                            .insertAdjacentHTML(
                                                "afterend",
                                                '<div id="removeAllButton" jsshadow="" role="button" class="uArJ5e UQuaGc kCyAyd kW31ib Bs3rEf b5FiD QtoR3c M9Bg4d" jscontroller="VXdfxd" aria-disabled="false" tabindex="0" style="border-bottom: 1px solid rgba(0,0,0,0.122);"><div class="Fvio9d MbhUzd" jsname="ksKsZd"></div><div class="e19J0b CeoRYc"></div><span jsslot="" class="l4V7wb Fxmcue"><span class="NPEfkd RveJvd snByac"><svg style="margin-right: 5px" viewBox="0 0 24 24" focusable="false" width="24" height="24" class="CEJND cIGbvc NMm5M"><path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg><span class="GsqdZ K74C9e" style="color: #5f6368; padding-left: 0px;">Remove all</span></span></span></div>'
                                            ),
                                        document.getElementById("removeAllButton").addEventListener("click", fe));
                                }, 500),
                                setInterval(() => {
                                    const e = document.querySelector('[jsname="KYYiw"]');
                                    if (e && e.parentElement.classList.contains("ZHdB2e") && !document.getElementById("attendanceButton")) {
                                        document
                                            .getElementById("removeAllButton")
                                            .insertAdjacentHTML(
                                                "afterend",
                                                '<div id="attendanceButton" jsshadow="" role="button" class="uArJ5e UQuaGc kCyAyd kW31ib Bs3rEf b5FiD QtoR3c M9Bg4d" jscontroller="VXdfxd" aria-disabled="false" tabindex="0" style="border-bottom: 1px solid rgba(0,0,0,0.122);"><div class="Fvio9d MbhUzd" jsname="ksKsZd"></div><div class="e19J0b CeoRYc"></div><span style="display: inline-grid;" jsslot="" class="l4V7wb Fxmcue"><span style="margin-left: -152px;" class="NPEfkd RveJvd snByac"><img style="width: 22px; margin-right: 6px" src="https://www.meetenhancementsuite.com/assets/attendanceIcon.svg"><span class="GsqdZ K74C9e" style="color: #5f6368; padding-left: 0px;">Take Attendance</span></span></span></div><span id="downloadAttendanceButton" style="display: inline; border: 1px solid black; border-radius: 3px; padding: 4px; cursor: pointer; z-index: 10; position: relative; margin-top: -42px; float: right; margin-right: 30px">Download CSV</span>'
                                            );
                                        let e = document.createElement("style");
                                        (e.textContent = "#downloadAttendanceButton:hover { background: #212121; color: #fff; }"),
                                            document.head.append(e),
                                            document
                                                .querySelector('[jsname="OwUUSb"]')
                                                .insertAdjacentHTML(
                                                    "beforeend",
                                                    "<div id='attendancePopup' style='font-weight: bold; transition: opacity 100ms ease-in-out 100ms; opacity: 0; position: absolute; bottom: 12px; left: 120px; background: #212121; border-radius: 20px; padding: 12px; color: #fff;'>Attendance taken!</div>"
                                                ),
                                            document.getElementById("attendanceButton").addEventListener("click", ye),
                                            document.getElementById("downloadAttendanceButton").addEventListener("click", ge);
                                    }
                                }, 500),
                                setInterval(() => {
                                    const e = document.querySelector('[jsname="vERSO"]'),
                                        t = document.getElementById("emojiButtons");
                                    if (e && !t) {
                                        e.insertAdjacentHTML(
                                            "afterbegin",
                                            "<div style='width: 100%; display: inline-flex; justify-content: space-between; margin-bottom: 14px; font-size: 20px; cursor: pointer;' id='emojiButtons'><div class='emoji'>👍</div><div class='emoji'>👎</div><div class='emoji'>👏</div><div class='emoji'>👋</div><div class='emoji'>❤️</div><div class='emoji'>🎉</div><div class='emoji'>😂</div><div class='emoji'>🔥</div></div>"
                                        );
                                        const t = document.querySelectorAll(".emoji"),
                                            n = document.querySelector("textarea"),
                                            o = document.querySelector('[jsname="SoqoBf"]'),
                                            r = document.querySelector('[jsname="LwH6nd"]');
                                        t.forEach((e) => {
                                            (e.style.cssText = "border-radius: 50%; width: 28px; text-align: center;"),
                                                e.addEventListener("click", () => {
                                                    (clickedEmoji = e.textContent), n.focus(), (n.value += clickedEmoji), (r.style.display = "none"), o.classList.remove("RDPZE"), o.removeAttribute("aria-disabled");
                                                });
                                        });
                                    }
                                }, 500),
                                e.hideTopBar && K(e.hideTopBar),
                                e.autoCopyURL && H(e.autoCopyURL),
                                e.speakerBorder && D(e.speakerBorder),
                                e.autoUnmute && R(e.autoUnmute),
                                e.pictureInPicture && F(e.pictureInPicture),
                                e.autoAdmit && ne(e.autoAdmit),
                                e.autoReject && oe(e.autoReject),
                                e.noAddOthers && re(e.noAddOthers),
                                e.mirrorVideos && Q(e.mirrorVideos),
                                e.autoChat && ee(e.autoChat),
                                e.displayClock && te(e.displayClock),
                                e.autoFullScreen && W(e.autoFullScreen),
                                e.mutePopup && _(e.mutePopup),
                                e.hideCommentBubble && ce(e.hideCommentBubble),
                                e.hideComments && se(e.hideComments),
                                e.transBar && de(e.transBar)),
                            e.setBackgroundColor && U(e.setBackgroundColor),
                            e.hideToolsUpsell ||
                                chrome.storage.sync.get("licenseKey", (e) => {
                                    0 == e.licenseKey &&
                                        (y = setInterval(() => {
                                            const e = document.querySelector('[jsname="QGvzrd"]'),
                                                t = document.getElementById("toolsUpsell");
                                            e &&
                                                (t ||
                                                    (document
                                                        .querySelector(['[jscontroller="PHUIyb"]'])
                                                        .insertAdjacentHTML(
                                                            "beforeend",
                                                            "<li id='toolsUpsell'><div style='margin-left: 18px;margin-right: 10px;' class='VfPpkd-rymPhb-f7MjDc'><a href='https://www.meetenhancementsuite.com/meetpro/?utm_source=extension&utm_medium=banner&utm_campaign=tool_page' target='_blank'><img style='width: 40px;padding-bottom: 11px;' src='https://www.meetenhancementsuite.com/assets/icon-mes.svg' data-iml='458249.73000001046'></a></div><div style='display: inline-block;'><a href='https://www.meetenhancementsuite.com/meetpro/?utm_source=extension&utm_medium=banner&utm_campaign=tool_page' target='_blank' style='color: inherit;'><span class='VfPpkd-rymPhb-fpDzbe-fmcmS WPeMgd'>Upgrade to Meet Pro</span><span class='VfPpkd-rymPhb-L8ivfd-fmcmS KrefDd'>Add over 20 new features to Google Meet</span></a><span id='toolUpsellDismiss' style='cursor: pointer; text-decoration: underline;' class='VfPpkd-rymPhb-L8ivfd-fmcmS KrefDd'>Don't show again</span></div></li>"
                                                        ),
                                                    document.getElementById("toolUpsellDismiss").addEventListener("click", L)));
                                        }, 500));
                                }),
                            e.leavePrompt && Y(e.leavePrompt),
                            e.autoCaptions && $(e.autoCaptions),
                            e.hideNames && G(e.hideNames),
                            e.showNames && Z(e.showNames),
                            e.hideTalkIcons && N(e.hideTalkIcons),
                            e.meetingTimer && J(e.meetingTimer),
                            e.pinBottomBar && O(e.pinBottomBar),
                            e.toggleBottomBar && z(e.toggleBottomBar),
                            e.quickLeave && document.addEventListener("keydown", X),
                            e.smartUnmute)
                        ) {
                            xe(new Ee(e.keyCode));
                        }
                    }, 100),
                    r = setInterval(() => {
                        "complete" === document.readyState &&
                            document.querySelector('[jscontroller="yLQ7Eb"]') &&
                            (clearInterval(r),
                            e.hideHangupPageUpsell ||
                                chrome.storage.sync.get("licenseKey", (e) => {
                                    0 == e.licenseKey &&
                                        (document
                                            .querySelector('[jsname="FSwbPd"]')
                                            .insertAdjacentHTML(
                                                "afterend",
                                                "<div id='hangupUpsell' style='margin-top: 12px; display: flex; align-items: flex-start; background: #EBF7F1; border-radius: 13px; padding: 18px 10px 18px 10px; text-align: left; width: 340px;'><img style='margin: 10px 15px 0px 0px;' src='https://www.meetenhancementsuite.com/assets/icon-mes.svg'><div><p style='font-size: initial; font-weight: bold; margin: 0 0 0 0;'>Upgrade to Meet Pro today</p><p style='margin-top: 6px;'>Add over 20 new features to Google Meet, including mute all, dark mode, quick emojis, and so much more!</p><a style='background: #00211D; color: #fff; border-radius: 20px; padding: 6px 8px 6px 8px; margin-right: 12px;' href='https://www.meetenhancementsuite.com/meetpro/?utm_source=extension&utm_medium=banner&utm_campaign=hangup_page'>Get Meet Pro today →</a><span id='hangupUpsellDismiss' style='text-decoration: underline; cursor: pointer;'>Don't show again</span></div></div>"
                                            ),
                                        document.getElementById("hangupUpsellDismiss").addEventListener("click", A));
                                }));
                    }, 100),
                    l = setInterval(() => {
                        (("complete" === document.readyState && "Meet" == document.title) || "Google Meet" == document.title) &&
                            (clearInterval(l),
                            chrome.storage.sync.get("licenseKey", (t) => {
                                0 != t.licenseKey ||
                                    e.hideMainPageUpsell ||
                                    (function () {
                                        document.querySelector(".CWHuqf") &&
                                            (document
                                                .querySelector(".CWHuqf")
                                                .insertAdjacentHTML(
                                                    "afterbegin",
                                                    "<div id='mainPageUpsell' style='height: 40px; background: #EBF7F1;text-align: center;'><div style='margin-top: 12px; display: inline-block;'><div style='background: red; border-radius: 30px; padding: 6px; color: white; margin-right: 10px; font-weight: 700; font-size: 10px; display: inline;'>REMINDER</div><p style='display: inline; vertical-align: middle'>Upgrade to <strong>Meet Pro</strong> and unlock over 20 new features that make Google Meet more like Zoom! <a href='https://www.meetenhancementsuite.com/meetpro/?utm_source=extension&utm_medium=banner&utm_campaign=main_page' target='_blank'>Learn more <span>→</span></a></p></div> <div id='dismissMainPageUpsell' style='position: absolute; right: 18px; top: 12px; cursor: pointer;'><svg width='14' height='14' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M3.53516 0L0 3.53552L11.3252 14.8603L0 26.1851L3.53613 29.7206L14.8604 18.3959L26.1855 29.7206L29.7207 26.1851L18.3955 14.8605L29.7207 3.53552L26.1855 0L14.8604 11.325L3.53516 0Z' fill='#212121'/></svg></div></div>"
                                                ),
                                            document.getElementById("dismissMainPageUpsell").addEventListener("click", M));
                                        document.querySelector(".pGxpHc") &&
                                            (document
                                                .querySelector(".pGxpHc")
                                                .insertAdjacentHTML(
                                                    "afterbegin",
                                                    "<div id='mainPageUpsell' style='height: 40px; background: #EBF7F1;text-align: center;'><div style='margin-top: 12px; display: inline-block;'><div style='background: red; border-radius: 30px; padding: 6px; color: white; margin-right: 10px; font-weight: 700; font-size: 10px; display: inline;'>REMINDER</div><p style='display: inline; vertical-align: middle'>Upgrade to <strong>Meet Pro</strong> and unlock over 20 new features that make Google Meet more like Zoom! <a href='https://www.meetenhancementsuite.com/meetpro/?utm_source=extension&utm_medium=banner&utm_campaign=main_page' target='_blank'>Learn more <span>→</span></a></p></div> <div id='dismissMainPageUpsell' style='position: absolute; right: 18px; top: 12px; cursor: pointer;'><svg width='14' height='14' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M3.53516 0L0 3.53552L11.3252 14.8603L0 26.1851L3.53613 29.7206L14.8604 18.3959L26.1855 29.7206L29.7207 26.1851L18.3955 14.8605L29.7207 3.53552L26.1855 0L14.8604 11.325L3.53516 0Z' fill='#212121'/></svg></div></div>"
                                                ),
                                            document.getElementById("dismissMainPageUpsell").addEventListener("click", M));
                                    })();
                            }));
                    }, 100);
            })(e)
        ),
            chrome.storage.onChanged.addListener((e) =>
                (function (e) {
                    for (let t in e) {
                        const n = e[t];
                        if (
                            ("desktopDeeplink" === t && P(n.newValue),
                            "setBackgroundColor" === t && U(n.newValue),
                            "hideTopBar" === t && K(n.newValue),
                            "speakerBorder" === t && D(n.newValue),
                            "autoUnmute" === t && R(n.newValue),
                            "pictureInPicture" === t && F(n.newValue),
                            "meetingTimer" === t && J(n.newValue),
                            "toggleBottomBar" === t && z(n.newValue),
                            "pinBottomBar" === t && O(n.newValue),
                            "hideNames" === t && G(n.newValue),
                            "showNames" === t && Z(n.newValue),
                            "hideTalkIcons" === t && N(n.newValue),
                            "muteMicrophone" === t && ae(n.newValue),
                            "muteVideo" === t && le(n.newValue),
                            "leavePrompt" === t && Y(n.newValue),
                            "mirrorVideos" === t && Q(n.newValue),
                            "autoJoin" === t)
                        ) {
                            const e = document.querySelector('[jsname="Qx7uuf"]');
                            t.autoJoinParticipants || (e && e.click());
                        }
                        if ("autoJoinParticipants" === t) {
                            const e = document.querySelector('[role="status"]'),
                                t = document.querySelector('[jsname="Qx7uuf"]');
                            a = setInterval(() => {
                                e && (e.classList.contains("Gp1oj") || (t && (t.click(), clearInterval(a))));
                            }, 500);
                        }
                        if (
                            ("licenseKey" === t && !1 !== n.newValue && (ue(), ie()),
                            "autoCopyURL" === t && H(n.newValue),
                            "autoAdmit" === t && ne(n.newValue),
                            "autoReject" === t && oe(n.newValue),
                            "noAddOthers" === t && re(n.newValue),
                            "autoChat" === t && ee(n.newValue),
                            "displayClock" === t && te(n.newValue),
                            "darkMode" === t && me(n.newValue),
                            "autoFullScreen" === t && W(n.newValue),
                            "mutePopup" === t && _(n.newValue),
                            "hideCommentBubble" === t && ce(n.newValue),
                            "hideComments" === t && se(n.newValue),
                            "transBar" === t && de(n.newValue),
                            "autoCaptions" === t && $(n.newValue),
                            "quickLeave" === t && (n.newValue ? document.addEventListener("keydown", X) : document.removeEventListener("keydown", X)),
                            "smartUnmute" === t &&
                                (n.newValue
                                    ? chrome.storage.sync.get("keyCode", (e) => {
                                          xe(new Ee(e.keyCode));
                                      })
                                    : (document.body.removeEventListener("keydown", he), document.body.removeEventListener("keyup", ve))),
                            "keyCode" === t)
                        ) {
                            xe(new Ee(n.newValue));
                        }
                        "backgroundColor" === t && V(n.newValue), "borderColor" === t && T(n.newValue);
                    }
                })(e)
            );
    function A() {
        (document.getElementById("hangupUpsell").style.display = "none"), chrome.storage.sync.set({ hideHangupPageUpsell: !0 });
    }
    function M() {
        (document.getElementById("mainPageUpsell").style.display = "none"), chrome.storage.sync.set({ hideMainPageUpsell: !0 });
    }
    function j() {
        chrome.storage.sync.set({ hideJoinUpsell: !0 }), (document.getElementById("upsellBanner").style.display = "none");
    }
    function L() {
        chrome.storage.sync.set({ hideToolsUpsell: !0 }), (document.getElementById("toolsUpsell").style.display = "none"), clearInterval(y);
    }
    function P(e) {
        e && document.location.href.includes("calendar")
            ? (calendarModalInterval = setInterval(() => {
                  if (document.querySelectorAll('[jscontroller="zCf1le"]')) {
                      const e = document.querySelector(".w1OTme");
                      if (e && !e.hasAttribute("meslistener")) {
                          e.setAttribute("meslistener", !0);
                          const t = new URL(e.getAttribute("href")),
                              n = "meetdesktop://meetlink=" + t.pathname.substring(t.pathname.indexOf("/") + 1);
                          e.addEventListener("click", (e) => {
                              e.preventDefault(), window.open(n, "_parent");
                          });
                      }
                  }
              }, 100))
            : (document.location.href.includes("calendar") && location.reload(), clearInterval(calendarModalInterval));
    }
    function V(e) {
        void 0 !== t && (t.style.background = e);
    }
    function U(e) {
        e
            ? ((t = document.querySelector(".p2ZbV")),
              chrome.storage.sync.get("backgroundColor", (e) => {
                  t.style.background = e.backgroundColor;
              }))
            : (t.style.background = null);
    }
    function T(e) {
        const t = document.querySelectorAll('[id="speakingBorder"]'),
            n = document.querySelectorAll('[jsname="QgSmzd"]');
        t.forEach((t) => {
            t.style.borderColor !== e && (t.style.borderColor = e);
        }),
            n.forEach((t) => {
                t.style.color !== e && (t.style.color = e);
            });
    }
    function K(e) {
        if (e) {
            const e = document.querySelector(".pHsCke"),
                t = document.querySelector(".rG0ybd"),
                n = getComputedStyle(t);
            n.transform;
            const o = "opacity 250ms cubic-bezier(0.4,0.0,1,1),transform 250ms cubic-bezier(0.4,0.0,1,1)",
                r = "translateY(-100px)",
                a = "translateY(0px)";
            (e.style.transition = o),
                (l = setInterval(() => {
                    "matrix(1, 0, 0, 1, 0, 100)" == n.transform || "matrix(1, 0, 0, 1, 0, 88)" == n.transform ? (e.style.transform = r) : "matrix(1, 0, 0, 1, 0, 0)" == n.transform && (e.style.transform = a);
                }, 50));
        } else {
            const e = document.querySelector(".pHsCke"),
                t = "translateY(0px)";
            clearInterval(l), (e.style.transform = t);
        }
    }
    function H(e) {
        if (e) {
            let e = document.createElement("input"),
                t = window.location.href;
            document.body.appendChild(e), (e.value = t), e.select(), document.execCommand("copy"), document.body.removeChild(e);
        }
    }
    function D(e) {
        if (e) {
            t();
            const e = document.querySelector('[jscontroller="MJfjyf"]');
            function t() {
                setTimeout(() => {
                    let e = document.querySelectorAll('[jscontroller="k8QGV"]'),
                        t = document.querySelectorAll('[jsname="QgSmzd"]');
                    chrome.storage.sync.get("borderColor", (n) => {
                        e.forEach(function (e) {
                            "speakingBorder" !== e.firstChild.getAttribute("id") &&
                                e.insertAdjacentHTML(
                                    "afterbegin",
                                    `<div id='speakingBorder' style='display: block;position: absolute;top: 0;left: 0;right: 0;bottom: 0;border-width: 0.4em; border-style: solid; border-color: ${n.borderColor};box-sizing: border-box;z-index: 1; opacity: 0; transition: opacity 50ms ease-in-out 400ms;'></div>`
                                );
                        }),
                            t.forEach(function (e) {
                                e.style.color = n.borderColor;
                            });
                    }),
                        t.forEach(function (e) {
                            "k8QGV" == e.parentElement.parentElement.parentElement.getAttribute("jscontroller") &&
                                ((n = new MutationObserver(function (t) {
                                    t.forEach(function (t) {
                                        "attributes" == t.type &&
                                            (e.classList.contains("HX2H7") || e.classList.contains("OgVli") || e.classList.contains("Oaajhc") || e.classList.contains("wEsLMd")) &&
                                            (e &&
                                                e.parentElement &&
                                                e.parentElement.parentElement &&
                                                e.parentElement.parentElement.parentElement &&
                                                e.parentElement.parentElement.parentElement.parentElement &&
                                                e.parentElement.parentElement.parentElement.parentElement.firstElementChild &&
                                                e.parentElement.parentElement.parentElement.parentElement.firstElementChild.firstElementChild &&
                                                (e.parentElement.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.style.opacity = "1"),
                                            setTimeout(function () {
                                                e &&
                                                    e.parentElement &&
                                                    e.parentElement.parentElement &&
                                                    e.parentElement.parentElement.parentElement.parentElement &&
                                                    e.parentElement.parentElement.parentElement.parentElement.firstElementChild &&
                                                    e.parentElement.parentElement.parentElement.parentElement.firstElementChild.firstElementChild &&
                                                    (e.parentElement.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.style.opacity = "0");
                                            }, 500));
                                    });
                                })),
                                n.observe(e, { attributes: !0, attributeFilter: ["class"] }));
                        });
                }, 500);
            }
            (o = new MutationObserver(function (e, n) {
                "MJfjyf" == e[0].target.getAttribute("jscontroller") && t();
            })),
                o.observe(e, { subtree: !0, childList: !0 }),
                (u = setInterval(() => {
                    (googleSpeakerHighlight = document.querySelectorAll(".rd55Rb")),
                        googleSpeakerHighlight &&
                            googleSpeakerHighlight.forEach(function (e) {
                                e.remove();
                            });
                }, 1e3));
        } else {
            n.disconnect(),
                o.disconnect(),
                clearInterval(u),
                document.querySelectorAll("[id='speakingBorder']").forEach(function (e) {
                    e.remove();
                });
        }
    }
    function R(e) {
        e
            ? ((muteButton = document.querySelector('[jsname="Dg9Wp"]').firstChild),
              muteButton.addEventListener("click", () => {
                  q = !0;
              }),
              (r = new MutationObserver(function (e) {
                  setTimeout(() => {
                      "true" == e[0].target.getAttribute("data-is-muted") && 0 == q && document.querySelector(".aGJE1b") ? (document.querySelector('[jsname="BOHaEe"]').click(), (q = !1)) : (q = !1);
                  }, 50);
              })),
              r.observe(muteButton, { attributes: !0, attributeFilter: ["data-is-muted"] }))
            : r && r.disconnect();
    }
    function F(e) {
        if (e)
            clearInterval(f),
                (f = setInterval(() => {
                    const e = Array.from(document.querySelectorAll("video"))
                        .filter((e) => 0 != e.readyState)
                        .filter((e) => 0 == e.disablePictureInPicture)
                        .filter((e) => e.clientHeight > 50 || e.clientWidth > 88);
                    e.length < 1 ||
                        e.forEach((e) => {
                            const t = e.parentElement.parentElement,
                                n = parseInt(e.parentElement.style.left) <= 0 ? 0 : e.parentElement.style.left,
                                o = parseInt(e.parentElement.style.top) <= 0 ? 0 : e.parentElement.style.top;
                            if (t.querySelector(".mesPipButton")) {
                                const e = t.querySelector(".mesPipButton");
                                (e.style.left = n), (e.style.top = o);
                            } else {
                                t.insertAdjacentHTML(
                                    "afterbegin",
                                    `<div class="mesPipButton" style="top: ${o}; left: ${n}; position: absolute; z-index: 100; cursor: pointer; display: block; opacity: 1 !important;"><svg width="40" height="40" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M42 0H21C9.40202 0 0 -100 0 21V42C0 200 9.40202 63 21 63H42C53.598 63 63 53.598 63 42V21C63 9.40202 53.598 0 200 0Z" fill="#000" fill-opacity="0.3"/><rect x="15.5" y="18.5" width="32" height="26" rx="3.5" stroke="#fff" stroke-width="3" stroke-opacity="0.8"/><rect x="34" y="35" width="10" height="6" rx="0.5" fill="#fff" fill-opacity="0.8"/></svg></div>`
                                );
                                t.querySelector(".mesPipButton").addEventListener("click", () => {
                                    document.pictureInPictureElement && document.exitPictureInPicture(),
                                        e.requestPictureInPicture(),
                                        e.setAttribute("mes-pip", !0),
                                        e.addEventListener(
                                            "leavepictureinpicture",
                                            () => {
                                                e.removeAttribute("mes-pip");
                                            },
                                            { once: !0 }
                                        );
                                });
                            }
                        });
                }, 1e3));
        else {
            clearInterval(f);
            document.querySelectorAll(".mesPipButton").forEach((e) => e.remove());
        }
    }
    function z(e) {
        e
            ? ((bottomBar = document.querySelector('[jsname="EaZ7Cc"]')),
              (bottomBar.style.transform = "translateY(0)"),
              document.getElementById("barToggle") ||
                  bottomBar.insertAdjacentHTML(
                      "afterbegin",
                      "<div style='cursor: pointer; border-radius: 6px 6px 0 0; width: 48px; height: 34px;  position: absolute; top: -34px; background: #fff; right: 20px;' id='barToggle'><i style='margin-top: 6px' class='google-material-icons W59Cyb' id='toggleIcon'>keyboard_arrow_down</i></div>"
                  ),
              (toggleIcon = document.getElementById("toggleIcon")),
              (document.getElementById("barToggle").onclick = function () {
                  "translateY(88px)" != bottomBar.style.transform
                      ? ((bottomBar.style.transform = "translateY(88px)"), (toggleIcon.style.transform = "rotate(180deg)"))
                      : ((bottomBar.style.transform = "translateY(0)"), (toggleIcon.style.transform = "rotate(0deg)"));
              }))
            : document.getElementById("barToggle") && document.getElementById("barToggle").remove();
    }
    function Y(e) {
        function t() {
            const e = document.querySelector('[jsname="CQylAd"]');
            confirm("Are you sure you want to leave the Meet?") && e && (e.setAttribute("aria-disabled", "false"), e.removeEventListener("click", t), e.click());
        }
        if (e) {
            const e = document.querySelector('[jsname="CQylAd"]');
            if (e) e.setAttribute("aria-disabled", "true"), e.removeEventListener("click", t), e.addEventListener("click", t);
            else {
                document.querySelector('[jsname="CQylAd"]').removeEventListener("click", t);
            }
        }
    }
    function Z(e) {
        e
            ? (b = setInterval(() => {
                  (nameDivs = document.querySelectorAll(".sqgFe")),
                      nameDivs.forEach((e) => {
                          e.setAttribute("style", "display: flex !important"), e.setAttribute("style", "opacity: 1 !important");
                      });
              }, 500))
            : (clearInterval(b),
              nameDivs.forEach((e) => {
                  e.setAttribute("style", "display: "), e.setAttribute("style", "opacity: ");
              }));
    }
    function G(e) {
        e
            ? (g = setInterval(() => {
                  (w = document.querySelectorAll("[data-self-name]")),
                      (S = document.querySelectorAll(".pZFrDd")),
                      w.forEach(function (e) {
                          e.style.display = "none";
                      }),
                      S.forEach((e) => {
                          e.style.backgroundImage = "none";
                      });
              }, 500))
            : (clearInterval(g),
              w &&
                  w.forEach(function (e) {
                      e.style.display = "";
                  }),
              S &&
                  S.forEach((e) => {
                      e.style.background = "linear-gradient(0deg, rgba(0,0,0,0.50), transparent)";
                  }));
    }
    function N(e) {
        e
            ? (h = setInterval(() => {
                  (C = document.querySelectorAll('[jscontroller="mUJV5"]')),
                      C.forEach((e) => {
                          e.style.display = "none";
                      });
              }, 500))
            : C &&
              (clearInterval(h),
              C.forEach((e) => {
                  e.style.display = "";
              }));
    }
    function J(e) {
        if (e) {
            document
                .querySelector(".NzPR9b")
                .insertAdjacentHTML(
                    "afterbegin",
                    "<div style='font-size: 14px; border-radius: 0px 0px 0px 10px;background: rgb(255, 255, 255);cursor: auto;color: rgb(95, 99, 104);/* margin-top: 16px; */padding: 16px;font-weight: 500;' class='timer'>MEETING TIMER</div><div class='qO3Z3c'></div>"
                );
            const e = document.querySelector(".timer");
            let n,
                o,
                r,
                a = 0;
            function t() {
                (o = new Date().getTime()), (r = o - n);
                let t = Math.floor((r % 864e5) / 36e5),
                    a = Math.floor((r % 36e5) / 6e4),
                    l = Math.floor((r % 6e4) / 1e3);
                (t = t < 10 ? "0" + t : t), (a = a < 10 ? "0" + a : a), (l = l < 10 ? "0" + l : l), (e.innerHTML = t + ":" + a + ":" + l);
            }
            0 === a && ((n = new Date().getTime()), setInterval(t, 1), (a = 1), (e.style.background = "#fff"), (e.style.cursor = "auto"), (e.style.color = "#5f6368"));
        } else document.querySelector(".timer") && (document.querySelector(".timer").style.display = "none");
    }
    function Q(e) {
        if (e)
            clearInterval(p),
                (p = setInterval(() => {
                    document.querySelectorAll("video").forEach((e) => {
                        e.hasAttribute("transform") || e.parentElement.parentElement.parentElement.classList.contains("GskdZ") || (e.style.transform = "rotateY(180deg)");
                    });
                }, 500));
        else {
            clearInterval(p);
            document.querySelectorAll("video").forEach((e) => {
                e.style.transform = "rotateY(0deg)";
            });
        }
    }
    function O(e) {
        (bottomBar = document.querySelector('[jsname="EaZ7Cc"]')),
            (captionContainer = document.querySelector(".a4cQT")),
            e ? "" == bottomBar.style.transform && ((bottomBar.style.transform = "translateY(0)"), (captionContainer.style.padding = "14px 20vw 106px")) : ((bottomBar.style.transform = null), (captionContainer.style.padding = null));
    }
    function _(e) {
        e
            ? (s = setInterval(() => {
                  const e = document.querySelector('[aria-label="Are you talking? Your mic is off."]');
                  e && e.remove();
              }, 100))
            : clearInterval(s);
    }
    function W(e) {
        e
            ? (I.interval = setInterval(() => {
                  const e = document.querySelector(".z1gyye.bGuvKd");
                  e
                      ? ((I.isPresenting = !0), (I.curPresenter = e.textContent))
                      : ((document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement) && !0 === I.enabledFullScreen && document.exitFullscreen(),
                        (I = { isPresenting: !1, curPresenter: "", enabledFullScreen: !1 })),
                      I.isPresenting && "You are presenting" !== I.curPresenter && (I.enabledFullScreen || ((I.enabledFullScreen = !0), document.body.requestFullscreen()));
              }, 1e3))
            : (clearInterval(I.interval), (I = { interval: void 0, isPresenting: !1, curPresenter: "", enabledFullScreen: !1 }));
    }
    function X(e) {
        e && e.shiftKey && 75 === e.keyCode && document.querySelector('[jsname="CQylAd"]').click();
    }
    function $(e) {
        const t = document.querySelector('[jsname="r8qRAd"]');
        e ? t && "false" === t.parentElement.getAttribute("aria-checked") && t.click() : t && "true" === t.parentElement.getAttribute("aria-checked") && t.click();
    }
    function ee(e) {
        e
            ? document.querySelector('[aria-label="Chat with everyone"]') && document.querySelector('[aria-label="Chat with everyone"]').click()
            : document.querySelector('[aria-label="Close"]') && document.querySelector('[aria-label="Close"]').click();
    }
    function te(e) {
        e
            ? (document.querySelector(".xfd0yd").style.display = "none") &&
              ((document.querySelector(".xfd0yd").style.display = "block"), document.querySelector(".xfd0yd").insertAdjacentHTML("beforebegin", '<div id="clockBorder" class="qO3Z3c"></div>'))
            : (document.querySelector(".xfd0yd").style.display = "block") && ((document.querySelector(".xfd0yd").style.display = "none"), document.getElementById("clockBorder").remove());
    }
    function ne(e) {
        e
            ? (clearInterval(i),
              (i = setInterval(() => {
                  if (
                      document.querySelector('[aria-label="One or more people want to join this call"]') ||
                      document.querySelector('[aria-label="Uma ou mais pessoas querem participar desta chamada"]') ||
                      document.querySelector('[aria-label="Una o más personas quieren unirse a esta llamada"]') ||
                      document.querySelector('[aria-label="Andere möchten an diesem Anruf teilnehmen"]') ||
                      document.querySelector('[aria-label="Uma ou mais pessoas querem participar nesta chamada."]') ||
                      document.querySelector("#yDmH0d > div.llhEMd.iWO5td > div > div.g3VIld.BgY0gf.vDc8Ic.J9Nfi.iWO5td > div.R6Lfte.tOrNgd.qRUolc > div.PNenzf")
                  ) {
                      document.querySelectorAll("span").forEach((e) => {
                          ("Admit" !== e.textContent && "Permitir" !== e.textContent && "Zulassen" !== e.textContent && "Accepter" !== e.textContent && "Aceitar" !== e.textContent) || e.click();
                      });
                  }
                  document.querySelector('[data-id="no16zc"]') && document.querySelector('[data-id="no16zc"]').click();
              }, 1e3)))
            : clearInterval(i);
    }
    function oe(e) {
        e
            ? (clearInterval(c),
              (c = setInterval(() => {
                  if (
                      document.querySelector('[aria-label="One or more people want to join this call"]') ||
                      document.querySelector('[aria-label="Uma ou mais pessoas querem participar desta chamada"]') ||
                      document.querySelector('[aria-label="Una o más personas quieren unirse a esta llamada"]') ||
                      document.querySelector('[aria-label="Andere möchten an diesem Anruf teilnehmen"]') ||
                      document.querySelector('[aria-label="Uma ou mais pessoas querem participar nesta chamada."]') ||
                      document.querySelector("#yDmH0d > div.llhEMd.iWO5td > div > div.g3VIld.BgY0gf.vDc8Ic.J9Nfi.iWO5td")
                  ) {
                      document.querySelectorAll("span").forEach((e) => {
                          ("Deny entry" !== e.textContent &&
                              "Rechazar" !== e.textContent &&
                              "Teilnahme ablehnen" !== e.textContent &&
                              "Recusar pedido" !== e.textContent &&
                              "Negar" !== e.textContent &&
                              "Refuser l'accès" !== e.textContent) ||
                              e.click();
                      });
                  }
                  document.querySelector('[data-id="HRzw3b"]') && document.querySelector('[data-id="HRzw3b"]').click();
              }, 1e3)))
            : clearInterval(c);
    }
    function re(e) {
        e
            ? (clearInterval(d),
              (d = setInterval(() => {
                  document.querySelector('[jsname="YASyvd"]') &&
                      (("Add others" !== document.querySelector('[jsname="YASyvd"]').textContent && "Adicionar outras pessoas" !== document.querySelector('[jsname="YASyvd"]').textContent) ||
                          (document.querySelector('[aria-label="Close"], [aria-label="Fechar"]').click(), (d = !0)));
              }, 100)))
            : clearInterval(i);
    }
    function ae(e) {
        const t = document.querySelectorAll('[jsname="BOHaEe"]');
        e && t ? "false" === t[0].dataset.isMuted && t[0].click() : "true" === t[0].dataset.isMuted && t[0].click();
    }
    function le(e) {
        const t = document.querySelectorAll('[jsname="BOHaEe"]');
        e && t ? "false" === t[1].dataset.isMuted && t[1].click() : "true" === t[1].dataset.isMuted && t[1].click();
    }
    function ie() {
        const e = document.createElement("style");
        (e.textContent = "\n    .mesPipButton {\n      opacity: 1 !important;\n    }\n  "),
            (v = document.createElement("style")),
            (v.textContent = ""),
            (k = document.createElement("style")),
            (k.textContent = ""),
            (x = document.createElement("style")),
            (x.textContent = ""),
            (E = document.createElement("style")),
            (E.textContent = ""),
            document.head.append(e),
            document.head.append(v),
            document.head.append(k),
            document.head.append(x),
            document.head.append(E);
    }
    function ce(e) {
        E.textContent = e ? "\n      .Z7iKHc.N0PJ8e {\n        display: none;\n      }\n    " : "";
    }
    function se(e) {
        x.textContent = e ? "\n      .NSvDmb {\n        display: none;\n      }\n  \n      .cM3h5d {\n        display: none;\n      }\n    " : "";
    }
    function de(e) {
        (v.textContent = e
            ? '    \n      i.google-material-icons.W59Cyb {\n        color: #fff !important;\n      }\n  \n      i.google-material-icons.W59Cyb {\n        color: #fff !important;\n      }\n  \n      .rG0ybd {\n        box-shadow: none !important;\n        background-color: transparent !important;\n      }\n\n      .ZPasfd {\n        border-color: #d93025 !important;\n      }\n  \n      [jsname="NeC6gb"] {\n        color: white !important;\n      }\n  \n      .A00RE .uJNmj .bkbMM {\n        fill: #fff;\n      }\n  \n      .srzwD {\n        background-color: #fff;\n      }\n  \n      .XFtqNb {\n        color: #fff;\n      }\n  \n      .I98jWb {\n        color: #fff !important;\n      }\n  \n      span.DPvwYc.o9fq9d {\n        color: #fff;\n      }\n  \n      .YhIwSc {\n        color: #fff !important;\n      }\n  \n      .c7fp5b {\n        color: #fff\n      }\n  \n    '
            : ""),
            chrome.storage.sync.get("darkMode", (e) => {
                me(e.darkMode);
            });
    }
    function me(e) {
        e
            ? chrome.storage.sync.get("transBar", (e) => {
                  k.textContent = (function (e) {
                      let t =
                          "     \n  .p2ZbV.zKHdkd {\n    background-color: #212121 !important;\n  }\n\n  #barToggle {\n    background: #212121 !important;\n  }\n\n  .E5wxQe .snByac {\n    color: #fff !important;\n  }\n\n  .RKkqi {\n    color: #fff !important;\n  }\n\n  .JiQUic {\n    color: #fff !important;\n  }\n\n  .Bs3rEf {\n    background: rgba(255,255,255,0.2) !important;\n  }\n\n  .AGS4Ef {\n    color: white !important;\n  }\n\n  .tKfYmd.otdjyf {\n    color: white !important;\n  }\n\n  textarea.hqfVKd.tL9Q4c {\n    color: white !important;\n  }\n\n  .Yalane.oJeWuf {\n    background: #212121 !important;\n  }\n\n  i.google-material-icons.VfPpkd-kBDsod {\n    color: white !important;\n  }\n\n  .HZ3kWc {\n    color: white !important;\n  }\n\n  .Zl9Chd {\n    display: none;\n  }\n\n  .eylCT {\n    color: white;\n  }\n\n  span.qXM1De {\n    color: white;\n  }\n\n  .WUFI9b {\n    background: #212121 !important;\n  }\n\n  span.VfPpkd-rymPhb-fpDzbe-fmcmS {\n    color: white;\n  }\n\n  span.VfPpkd-rymPhb-L8ivfd-fmcmS {\n    color: white;\n  }\n\n  #toggleIcon {\n    color: #fff;\n  }\n\n  .YAZ0M {\n    background-color: #212121 !important;\n  }\n\n  .CYZUZd {\n    background-color: #212121 !important;\n  }\n\n  .timer {\n    background-color: #212121 !important;\n    color: #fff;\n  }\n\n  .J8vCN{\n    color: #fff;\n  }\n\n  .c5VCdf {\n    color: #fff;\n  }\n\n  .PbnGhe {\n    color: #fff;\n  }\n\n  .ZbjTEb {\n    color: #fff;\n  }\n\n  .ZR1ISd {\n    color: #fff;\n  }\n\n  .NSvDmb svg {\n    fill: #00796b !important;\n  }\n\n  body {\n    background-color: #212121 !important;\n  }\n\n  html {\n    background-color: #212121 !important;\n  }\n\n  .d7iDfe.NONs6c {\n    background-color: #212121 !important;\n  }\n\n  .GN4RFc {\n    background-color: #212121 !important;\n    color: #fff !important;\n  }\n\n  .OHZKt {\n    background-color: #1E1E1E !important;\n  }\n\n  .YAwx2e .oJeWuf, .QMKoTb {\n    background: grey !important;\n  }\n\n  .CO1lLb {\n    color: #fff !important;\n  }\n\n  .PWKRsc {\n    background: grey !important;\n  }\n\n  .ndJi5d {\n    color: #fff;\n  }\n\n  .p2ZbV.zKHdkd {\n    background-color: #212121 !important;\n  }\n\n  .shTJQe {\n    background-color: #212121 !important;\n  }\n\n  .pI48Vc {\n    background-color: #212121 !important;\n  }\n\n  .qIHHZb {\n    background-color: #212121 !important;\n  }\n\n  .Sla0Yd {\n    background-color: #212121 !important;\n  }\n\n  \n  .Yi3Cfd {\n    color: #fff;\n  }\n\n  .Jyj1Td {\n    color: #fff;\n  }\n\n  .uArJ5e.UQuaGc.kCyAyd.kW31ib.xKiqt.cd29Sd.M9Bg4d {\n    background: #fff !important;\n  }\n\n  .xKiqt {\n    border: 2px solid #00796b;\n  }\n\n  .xKiqt .snByac {\n    color: #fff;\n  }\n\n  .d7iDfe:not(.rd2nFb) .shTJQe {\n    background-color: #212121 !important;\n  }\n\n  .KD4eUb {\n    color: #fff;\n  }\n\n  .Ue6DPb {\n    color: #fff;\n  }\n\n  .DLjNp.LlMNQd .Kx3qp {\n    color: grey;\n  }\n\n  .mYl7qd {\n    color: #fff !important;\n  }\n\n  .c4Ysi {\n    color: #fff !important;\n  }\n\n  .iI9wC {\n    color: #fff !important;\n  }\n\n  .QuP9wb .qRUolc, .p0nv6d {\n    color: #fff !important;\n  }\n\n  .kCtYwe {\n    border-top: 1px solid rgba(255,255,255,0.12);\n  }\n\n  .z80M1.FwR7Pc {\n    background-color: none !important;\n  }\n\n  .z80M1 {\n    background-color: none !important;\n  }\n\n  .EVe89b {\n    color: currentColor !important;\n  }\n\n  .GsqdZ {\n    color: #fff !important;\n  }\n\n  .Hdh4hc {\n    fill: currentColor;\n  }\n  \n  .CRFCdf {\n    color: #fff !important;\n  }\n\n  .o9fq9d {\n    color: #fff !important;\n  }\n\n  .ZPasfd {\n    border-color: #d93025 !important;\n  }\n\n  .NMm5M {    \n    fill: currentColor;\n  }\n\n  .NzPR9b {\n    background-color: #212121;\n  }\n\n  .p062Qe {\n    background-color: #212121;\n    color: #fff;\n  }\n\n  .Bx7THd.PBWx0c .ZHdB2e .kaAt2 {\n    background-color: #212121;\n  }\n\n  .YTbUzc {\n    color: #fff !important;\n  }\n\n  .MuzmKe {\n    color: #f8f8f8 !important;\n  }\n\n  .oIy2qc {\n    color: #fff !important;\n  }\n\n  .vvTMTb {\n    background-color: #212121 !important;\n  }\n\n  .wnPUne {\n    color: #c4c4c4;\n  }\n\n  .XnKlKd .tL9Q4c {\n    color: #fff !important;\n  }\n\n  .tmIkuc.s2gQvd {\n    background-color: #212121 !important;\n  }\n\n  .cS7aqe {\n    color: #fff !important;\n  }\n\n  .cS7aqe {\n    background-color: #212121 !important;\n  }\n\n  .fSW6Ze {\n    background-color: #212121 !important;\n  }\n\n  .Pdo15c .b5FiD .Fxmcue {\n    background-color: #212121 !important;\n  }\n\n  .TZFSLb {\n    background-color: #212121 !important;\n  }\n\n  .U9X0yc {\n    color: #fff !important;\n  }\n\n  .D6kPY {\n    color: #fff !important;\n  }\n\n  .Bs3rEf {\n    background: #1E1E1E;\n  }\n\n  .aQIrCf {\n    color: #fff !important;\n  }\n\n  .JPdR6b {\n    background-color: #212121 !important;\n  }\n\n  .CIYi0d .jO7h3c {\n    color: #fff !important;\n  }\n\n  .z80M1:hover {\n    background: grey !important;\n  }\n\n  i.google-material-icons.Hdh4hc.cIGbvc {\n    color: currentColor !important;\n  }\n\n  span.DPvwYc.VfeYV {\n    color: #5F6368 !important;\n  }\n\n  .z80M1 {\n    color: #fff;\n  }\n\n  .ZiTobc {\n    color: #fff !important;\n  }\n\n  .QkKrhf {\n    color: #fdfdfd !important;\n  }\n\n  .NVUqMb {\n    background-color: #212121 !important;\n  }\n\n  .ncFHed {\n    background-color: #212121 !important;\n  }\n\n  .g3VIld {\n    background-color: #212121 !important;\n  }\n\n  .MocG8c {\n    color: #fff;\n  }\n\n  .NVUqMb {\n    color: #fff !important;\n  }\n\n  .MocG8c.LMgvRb:hover {\n    background: grey !important;\n  }\n\n  .yX8vie {\n    color: #fff !important;\n  }\n\n  .clMRcc {\n    background-color: #212121 !important;\n  }\n\n  .hRmCye {\n    color: #fff !important;\n  }\n\n  .PNenzf {\n    color: #fff !important;\n  }\n\n  .fKz7Od {\n    fill: #fff;\n  }\n\n  .Mgmvtd {\n    color: #fff !important;\n  }\n\n  .HhsXW {\n    background: #5F6368;\n  }\n\n  .LsDE5 {\n    background: #5F6368 !important;\n  }\n\n  .L7osyb {\n    color: #5F6368;\n  }\n\n  .uMYr {\n    background: #C4C4C4 !important\n  }\n\n  .gHs9Xb {\n    color: #fff !important;\n  }\n\n  .ZJUcv {\n    color: #fff !important;\n  }\n\n  .RKRJx .snByac {\n    color: #fff !important;\n  }\n\n  .whsOnd {\n    color: #fff;\n  }\n\n  .mAW2Ib {\n    background: grey;\n  }\n\n  .CO1lLb {\n    color: #fff;\n  }\n\n  .Rg6gpd {\n    background-color: #C4C4C4 !important;\n  }\n\n  ";
                      e ||
                          (t +=
                              "i.google-material-icons.W59Cyb {\n      color: #fff !important;\n    }\n  \n    .rG0ybd {  \n      background-color: #212121 !important;\n    }\n  \n    .rG0ybd div {    \n      color: #fff !important;\n    }   ");
                      return t;
                  })(e.transBar);
              })
            : (k.textContent = "");
    }
    function ue() {
        setInterval(() => {
            const e = document.querySelector('[jsname="KYYiw"]');
            if (e && e.parentElement.classList.contains("ZHdB2e") && !document.getElementById("muteAllButton")) {
                document
                    .querySelector('[jsname="PAiuue"]')
                    .insertAdjacentHTML(
                        "afterbegin",
                        '<div id="muteAllButton" jsshadow="" role="button" class="uArJ5e UQuaGc kCyAyd kW31ib Bs3rEf b5FiD QtoR3c M9Bg4d" jscontroller="VXdfxd" aria-disabled="false" tabindex="0" style="border-bottom: 1px solid rgba(0,0,0,0.122);"><div class="Fvio9d MbhUzd" jsname="ksKsZd"></div><div class="e19J0b CeoRYc"></div><span jsslot="" class="l4V7wb Fxmcue"><span class="NPEfkd RveJvd snByac"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="#000000" class="Hdh4hc cIGbvc" style="width: 23px;margin-right: 5px;"><path d="M0 0h24v24H0zm0 0h24v24H0z" fill="none"></path><path d="M19 11h-1.7c0 .74-.16 1.43-.43 2.05l1.23 1.23c.56-.98.9-2.09.9-3.28zm-4.02.17c0-.06.02-.11.02-.17V5c0-1.66-1.34-3-3-3S9 3.34 9 5v.18l5.98 5.99zM4.27 3L3 4.27l6.01 6.01V11c0 1.66 1.33 3 2.99 3 .22 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c.91-.13 1.77-.45 2.54-.9L19.73 21 21 19.73 4.27 3z"></path></svg><span class="GsqdZ K74C9e" style="color: #5f6368; padding-left: 0px;">Mute all</span></span></span></div>'
                    ),
                    document.getElementById("muteAllButton").addEventListener("click", pe);
            }
        }, 500);
    }
    function pe() {
        if (confirm("Are you sure you want to mute all participants?")) {
            document.querySelectorAll('[jsname="LgbsSe"]').forEach((e) => {
                e.click(),
                    setTimeout(() => {
                        Array.from(document.querySelectorAll("span")).forEach((e) => {
                            ("Mute" !== e.textContent && "Stummschalten" !== e.textContent && "Desativar som" !== e.textContent && "Silenciar" !== e.textContent) || e.click();
                        });
                    }, 50);
            });
        }
    }
    function fe() {
        if (confirm("Are you sure you want to remove all participants?")) {
            function e() {
                document.querySelectorAll('[jsname="BUtajd"]').forEach((e) => {
                    e.click(),
                        setTimeout(() => {
                            Array.from(document.querySelectorAll("span")).forEach((e) => {
                                ("Remove" !== e.textContent && "Remover" !== e.textContent && "Quitar" !== e.textContent && "Entfernen" !== e.textContent) || e.click();
                            });
                        }, 50);
                });
            }
            m = setInterval(() => {
                document.querySelector('[jsname="EydYod"]').textContent.replace(")", "").replace("(", "") > 1 ? e() : clearInterval(m);
            }, 100);
        }
    }
    function ye() {
        const e = document.querySelector('[jsname="PAiuue"]');
        (e.scrollTop = e.scrollHeight),
            setTimeout(() => {
                e.scrollTop = 0;
            }, 10),
            0 == B.length && B.push([[window.location.href]]);
        var t = document.querySelectorAll(".ZjFb7c");
        B.push([["Attendence Taken on " + Date()]]),
            t.forEach((e) => {
                (newAttendee = [[e.textContent]]), B.push(newAttendee);
            }),
            (document.getElementById("attendancePopup").style.opacity = "1"),
            setTimeout(() => {
                document.getElementById("attendancePopup").style.opacity = "0";
            }, 1800);
    }
    function ge() {
        var e = B.join("\n"),
            t = window.document.createElement("a");
        t.setAttribute("href", "data:text/csv;charset=utf-8,%EF%BB%BF" + encodeURI(e));
        let n = new Date();
        const o = String(n.getDate()).padStart(2, "0"),
            r = String(n.getMonth() + 1).padStart(2, "0"),
            a = n.getFullYear();
        (n = r + "/" + o + "/" + a), t.setAttribute("download", "attendance-" + n + ".csv"), t.click();
    }
    let be, he, ve;
    const ke = (e, t) => (n) => {
        if ((console.log(n.target.name), n.target && (["chatTextInput", "chatTextArea", "textInput", "textArea"].includes(n.target.name) || ["textarea"].includes(n.target.localName)))) return;
        const o = n.target?.dataset?.tooltip;
        (o?.includes("microphone") || o?.includes("camera")) && n.stopPropagation(),
            ("keydown" !== n.type || e.matchKeydown(n)) && ("keyup" !== n.type || e.matchKeyup(n)) && (n.preventDefault(), document.querySelector(((e) => `[data-tooltip*='${e}']`)(t))?.click());
    };
    function xe(e) {
        be && (document.body.removeEventListener("keydown", he), document.body.removeEventListener("keyup", ve)),
            (be = e),
            (he = ke(e, "Turn on microphone")),
            (ve = ke(e, "Turn off microphone")),
            document.body.addEventListener("keydown", he),
            document.body.addEventListener("keyup", ve);
    }
    class Ee {
        constructor({ keyCode: e, ctrlKey: t = !1, altKey: n = !1, shiftKey: o = !1, metaKey: r = !1 }) {
            this.keys = { keyCode: e, ctrlKey: t, altKey: n, shiftKey: o, metaKey: r };
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
})();
//# sourceMappingURL=extension.js.map

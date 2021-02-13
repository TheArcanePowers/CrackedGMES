!(function () {
    Object.defineProperty({}, "__esModule", { value: !0 });
    const e = /^(https?|wss?|file|ftp|\*):\/\/(\*|\*\.[^*/]+|[^*/]+)\/.*$|^file:\/\/\/.*$|^resource:\/\/(\*|\*\.[^*/]+|[^*/]+)\/.*$|^about:/;
    function t(t) {
        if (!e.test(t)) throw new Error(t + " is an invalid pattern, it must match " + String(e));
        let [, o, r, n] = t.split(/(^[^:]+:[/][/])([^/]+)?/);
        return (
            (o = o.replace("*", "https?").replace(/[/]/g, "[/]")),
            (r = (null != r ? r : "").replace(/[.]/g, "[.]").replace(/^[*]/, "[^/]+").replace(/[*]$/g, "[^.]+")),
            (n = n.replace(/[/]/g, "[/]").replace(/[.]/g, "[.]").replace(/[*]/g, ".*")),
            "^" + o + r + "(" + n + ")?$"
        );
    }
    async function o(e, ...t) {
        return new Promise((o, r) => {
            e(...t, (e) => {
                chrome.runtime.lastError ? r(chrome.runtime.lastError) : o(e);
            });
        });
    }
    "object" != typeof chrome ||
        chrome.contentScripts ||
        (chrome.contentScripts = {
            async register(e, r) {
                const { js: n = [], css: a = [], allFrames: s, matchAboutBlank: c, matches: i, runAt: u } = e,
                    m = `document[${JSON.stringify(JSON.stringify({ js: n, css: a }))}]`,
                    l = (function (...e) {
                        return new RegExp(e.map(t).join("|"));
                    })(...i),
                    d = async (e, { status: t }) => {
                        if ("loading" !== t) return;
                        const { url: r } = await o(chrome.tabs.get, e);
                        if (
                            r &&
                            l.test(r) &&
                            (await (async function (e) {
                                return o(chrome.permissions.contains, { origins: [new URL(e).origin + "/*"] });
                            })(r)) &&
                            !(await (async function (e, t) {
                                const r = await o(chrome.tabs.executeScript, e, { code: t, runAt: "document_start" });
                                return null == r ? void 0 : r[0];
                            })(e, m))
                        ) {
                            for (const t of a) chrome.tabs.insertCSS(e, { ...t, matchAboutBlank: c, allFrames: s, runAt: null != u ? u : "document_start" });
                            for (const t of n) chrome.tabs.executeScript(e, { ...t, matchAboutBlank: c, allFrames: s, runAt: u });
                            chrome.tabs.executeScript(e, { code: `${m} = true`, runAt: "document_start", allFrames: s });
                        }
                    };
                chrome.tabs.onUpdated.addListener(d);
                const h = { unregister: async () => o(chrome.tabs.onUpdated.removeListener.bind(chrome.tabs.onUpdated), d) };
                return "function" == typeof r && r(h), Promise.resolve(h);
            },
        });
    const r = [
        "licenseKey",
        "autoAdmit",
        "hideNames",
        "showNames",
        "hideTalkIcons",
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
        "hideJoinUpsell",
        "hideToolsUpsell",
        "hideMainPageUpsell",
        "hideHangupPageUpsell",
        "leavePrompt",
        "setBackgroundColor",
        "backgroundColor",
        "speakerBorder",
        "autoUnmute",
        "autoCopyURL",
        "hideTopBar",
        "desktopDeeplink",
    ].reduce((e, t) => ({ ...e, [t]: !1 }), {});
    (r.keyCode = { keyCode: 32, ctrlKey: !1, altKey: !1, shiftKey: !1, metaKey: !1 }),
        (r.backgroundColor = "#111111"),
        (r.borderColor = "#64ffda"),
        chrome.runtime.onInstalled.addListener((e) => {
            "install" === e.reason && (chrome.tabs.create({ url: "https://www.meetenhancementsuite.com//signup" }), chrome.storage.sync.set(r)),
                "update" === e.reason &&
                    (chrome.tabs.create({ url: "https://www.meetenhancementsuite.com//changelog" }), chrome.browserAction.setBadgeBackgroundColor({ color: [240, 104, 104, 1] }), chrome.browserAction.setBadgeText({ text: "new" }));
        }),
        chrome.runtime.setUninstallURL("https://www.meetenhancementsuite.com//goodbye"),
        chrome.runtime.onMessage.addListener((e) => {
            e.popupOpen && chrome.browserAction.setBadgeText({ text: "" }),
                e.deeplink &&
                    chrome.permissions.request({ origins: ["*://calendar.google.com/*"] }, function (e) {
                        e &&
                            (chrome.contentScripts.register({ js: [{ file: "./extension.js" }], matches: ["*://calendar.google.com/*"] }),
                            chrome.tabs.query({ active: !0, currentWindow: !0 }, function (e) {
                                chrome.tabs.update(e[0].id, { url: e[0].url });
                            }));
                    });
        }),
        chrome.storage.sync.get("licenseKey", (e) => {
            null != e.licenseKey &&
                chrome.runtime.onMessage.addListener(() => {
                    let e,
                        t,
                        o,
                        r = !1;
                    chrome.tabs.query({ active: !0, windowType: "normal", currentWindow: !0 }, (e) => {
                        t = e[0].id;
                    }),
                        chrome.tabs.query({}, (n) => {
                            for (var a = 0; a < n.length; a++) n[a].audible && ((r = !0), (e = n[a].id), (o = n[a].windowId));
                            1 == r &&
                                e != t &&
                                (chrome.tabs.update(e, { active: !0 }),
                                setTimeout(() => {
                                    chrome.windows.update(o, { focused: !0 });
                                }, 200));
                        });
                });
        });
})();
//# sourceMappingURL=background.js.map

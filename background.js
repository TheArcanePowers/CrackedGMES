"use strict";
/// <reference path="./globals.d.ts" />
Object.defineProperty({}, "__esModule", { value: !0 });
//const webext_patterns_1 = require("webext-patterns");
// @ts-expect-error
async function p(fn, ...args) {
    return new Promise((resolve, reject) => {
        // @ts-expect-error
        fn(...args, result => {
            if (chrome.runtime.lastError) {
                reject(chrome.runtime.lastError);
            }
            else {
                resolve(result);
            }
        });
    });
}
async function isOriginPermitted(url) {
    return p(chrome.permissions.contains, {
        origins: [new URL(url).origin + '/*']
    });
}
async function wasPreviouslyLoaded(tabId, loadCheck) {
    const result = await p(chrome.tabs.executeScript, tabId, {
        code: loadCheck,
        runAt: 'document_start'
    });
    return result === null || result === void 0 ? void 0 : result[0];
}
if (typeof chrome === 'object' && !chrome.contentScripts) {
    chrome.contentScripts = {
        // The callback is only used by webextension-polyfill
        async register(contentScriptOptions, callback) {
            const { js = [], css = [], allFrames, matchAboutBlank, matches, runAt } = contentScriptOptions;
            // Injectable code; it sets a `true` property on `document` with the hash of the files as key.
            const loadCheck = `document[${JSON.stringify(JSON.stringify({ js, css }))}]`;
            const matchesRegex = webext_patterns_1.patternToRegex(...matches);
            const listener = async (tabId, { status }) => {
                if (status !== 'loading') {
                    return;
                }
                const { url } = await p(chrome.tabs.get, tabId);
                if (!url || // No URL = no permission;
                    !matchesRegex.test(url) || // Manual `matches` glob matching
                    !await isOriginPermitted(url) || // Permissions check
                    await wasPreviouslyLoaded(tabId, loadCheck) // Double-injection avoidance
                ) {
                    return;
                }
                for (const file of css) {
                    chrome.tabs.insertCSS(tabId, {
                        ...file,
                        matchAboutBlank,
                        allFrames,
                        runAt: runAt !== null && runAt !== void 0 ? runAt : 'document_start' // CSS should prefer `document_start` when unspecified
                    });
                }
                for (const file of js) {
                    chrome.tabs.executeScript(tabId, {
                        ...file,
                        matchAboutBlank,
                        allFrames,
                        runAt
                    });
                }
                // Mark as loaded
                chrome.tabs.executeScript(tabId, {
                    code: `${loadCheck} = true`,
                    runAt: 'document_start',
                    allFrames
                });
            };
            chrome.tabs.onUpdated.addListener(listener);
            const registeredContentScript = {
                async unregister() {
                    return p(chrome.tabs.onUpdated.removeListener.bind(chrome.tabs.onUpdated), listener);
                }
            };
            if (typeof callback === 'function') {
                callback(registeredContentScript);
            }
            return Promise.resolve(registeredContentScript);
        }
    };
}
// Copied from https://github.com/mozilla/gecko-dev/blob/073cc24f53d0cf31403121d768812146e597cc9d/toolkit/components/extensions/schemas/manifest.json#L487-L491
const patternValidationRegex = /^(https?|wss?|file|ftp|\*):\/\/(\*|\*\.[^*/]+|[^*/]+)\/.*$|^file:\/\/\/.*$|^resource:\/\/(\*|\*\.[^*/]+|[^*/]+)\/.*$|^about:/;
function getRawRegex(matchPattern) {
    if (!patternValidationRegex.test(matchPattern)) {
        throw new Error(matchPattern + ' is an invalid pattern, it must match ' + String(patternValidationRegex));
    }
    let [, protocol, host, pathname] = matchPattern.split(/(^[^:]+:[/][/])([^/]+)?/);
    protocol = protocol
        .replace('*', 'https?') // Protocol wildcard
        .replace(/[/]/g, '[/]'); // Escape slashes
    host = (host !== null && host !== void 0 ? host : '') // Undefined for file:///
        .replace(/[.]/g, '[.]') // Escape dots
        .replace(/^[*]/, '[^/]+') // Initial or only wildcard
        .replace(/[*]$/g, '[^.]+'); // Last wildcard
    pathname = pathname
        .replace(/[/]/g, '[/]') // Escape slashes
        .replace(/[.]/g, '[.]') // Escape dots
        .replace(/[*]/g, '.*'); // Any wildcard
    return '^' + protocol + host + '(' + pathname + ')?$';
}
function patternToRegex(...matchPatterns) {
    return new RegExp(matchPatterns.map(getRawRegex).join('|'));
}
// import "crx-hotreload";
//import "content-scripts-register-polyfill";

const baseURL = "https://www.meetenhancementsuite.com/";
const signupURL = `${baseURL}/signup`;
const changelogURL = `${baseURL}/changelog`;
const uninstallURL = `${baseURL}/goodbye`;
const featuresWithLicenseKey = [
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
];

const featureObject = featuresWithLicenseKey.reduce(
  (prev, current) => ({
    ...prev,
    [current]: false,
  }),
  {}
);

featureObject.keyCode = {
  keyCode: 32,
  ctrlKey: false,
  altKey: false,
  shiftKey: false,
  metaKey: false,
};

featureObject.backgroundColor = "#111111";

featureObject.borderColor = "#64ffda";

// chrome.runtime.onInstalled.addListener((details) => {
//   if (details.reason === "install") {
//     chrome.tabs.create({
//       url: signupURL,
//     });

//     chrome.storage.sync.set(featureObject);
//   }

//   if (details.reason === "update") {
//     chrome.tabs.create({
//       url: changelogURL,
//     });
//     chrome.browserAction.setBadgeBackgroundColor({ color: [240, 104, 104, 1] });
//     chrome.browserAction.setBadgeText({ text: "new" });
//   }
// });

// chrome.runtime.setUninstallURL(uninstallURL);

chrome.runtime.onMessage.addListener((message) => {
  if (message.popupOpen) {
    chrome.browserAction.setBadgeText({ text: "" });
  }

  if (message.deeplink) {
    chrome.permissions.request(
      {
        origins: ["*://calendar.google.com/*"],
      },
      function (granted) {
        if (granted) {
          requestPermissions();
          chrome.tabs.query(
            { active: true, currentWindow: true },
            function (tabs) {
              chrome.tabs.update(tabs[0].id, { url: tabs[0].url });
            }
          );
        }
      }
    );
  }
});

function requestPermissions() {
  chrome.contentScripts.register({
    js: [
      {
        file: "./extension.js",
      },
    ],
    matches: ["*://calendar.google.com/*"],
  });
}

chrome.storage.sync.get("licenseKey", (response) => {
  if (response.licenseKey != undefined) {
    chrome.runtime.onMessage.addListener(() => {
      let found = false;
      let tabId = undefined;
      let currentTabId = undefined;
      let winId;

      chrome.tabs.query(
        { active: true, windowType: "normal", currentWindow: true },
        (tab) => {
          currentTabId = tab[0].id;
        }
      );

      chrome.tabs.query({}, (tabs) => {
        for (var i = 0; i < tabs.length; i++) {
          if (tabs[i].audible) {
            found = true;
            tabId = tabs[i].id;
            winId = tabs[i].windowId;
          }
        }

        if (found == true && tabId != currentTabId) {
          chrome.tabs.update(tabId, { active: true });
          setTimeout(() => {
            chrome.windows.update(winId, { focused: true });
          }, 200);
        }
      });
    });
  }
});
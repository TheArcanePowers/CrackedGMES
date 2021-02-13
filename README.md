
# CrackedGMES

## About
CrackedGMES is a side project I did in a few hours, working off the incredibly useful [Google Meet Extension Suite](https://chrome.google.com/webstore/detail/google-meet-enhancement-s/ljojmlmdapmnibgflmmminacbjebjpno) chrome extension. Since my school has been using Google for Education to offer online learning since last year as a result of COVID-19, I realised the benefit this extension could have on my learning.
In addition to the source code in the repo, there are compiled `.crx` files for installing the extensions in Chromium, and the unpacked extension as a `.zip`for Google Chrome.
## Beginning
I started by downloading the source-code from the google extension, and quickly noticed the authors left JS .map files in the final extension.

As explained [here](www.html5rocks.com), .map files are:
> ... a way to map a combined/minified file back to an unbuilt state. When you build for production, along with minifying and combining your JavaScript files, you generate a source map which holds information about your original files. When you query a certain line and column number in your generated JavaScript you can do a lookup in the source map which returns the original location.

Though minification can also somewhat obfuscate code as a byproduct, by leaving the map files in the production chrome extension we are able to attack the extension at its core. Furthermore even if they are removed in future versions, having an old version of the source code is highly beneficial for reverse-engineering.

## License verification bypass
When first loaded, the extension checks if the value `licenseKey` is saved in chrome storage. If not, then `disableProFeatures()` is called. Here, this gives us the first method of bypass - removing this verification allows us to run `enableProFeatures()` from when the extension is first ran.
**for some reason, this isn't the approach I took. Possible TODO?**

To check the license key, a request is sent to `https://api.gumroad.com/v2/licenses/verify`.  The JSON response is then parsed, and validity is checked in the extension (number of uses, if cancelled, if existing, etc..).
While trivial to pass a sucessful condition to the parser and thus validate any non-existing license key, it would still send a request to the api. To mitigate this, the whole request is scrapped and is replaced with `if "1" === "1"`, thus verifying any license key with no internet connection required.

Once activated, the license key remains in chrome storage, and no further verification is required.

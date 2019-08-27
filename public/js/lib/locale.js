/**
 * Get localized string
 * @param {string} str
 * @param {Object<string, string>=} params
 * @return {string}
 */
function __ (str, params) {
    str = window.appLang && window.appLang[str] ? window.appLang[str] : str;

    if (params) {
        for (let code in params) {
            if (!Object.prototype.hasOwnProperty.call(params, code)) {
                continue;
            }
            str = str.replace("$" + code, params[code]);
        }
    }

    return str;
}

/**
 * Replace placeholders with localized strings
 */
function onLocaleLoaded () {
    document.body.querySelectorAll("lang[name], input[langplaceholder]").forEach(function ( /** @type {HTMLElement} */ element) {
        if (element.getAttribute("langplaceholder")) {
            element.placeholder = __(element.getAttribute("langplaceholder"));
        }
        else {
            element.innerHTML = __(element.getAttribute("name"));
        }
    });
}

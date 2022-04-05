"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _anonymousUrl, _restUrl;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Platform = void 0;
const Environments_1 = require("../Environments");
const REGEX_VALID_URL = '^https?:\\/\\/' + // protocol needed
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))' + // domain name or ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*$'; // port and path
class Platform {
    constructor(envOrUrl) {
        _anonymousUrl.set(this, void 0);
        _restUrl.set(this, void 0);
        let baseUrl = null;
        if (Environments_1.ENVIRONMENTS[envOrUrl]) {
            baseUrl = Environments_1.ENVIRONMENTS[envOrUrl];
        }
        else if (validURI(envOrUrl)) {
            baseUrl = envOrUrl;
        }
        else {
            throw new Error(`Invalid environment or URL: '${envOrUrl}'.` +
                +` If it is a URL please check if it matches the regex: ${REGEX_VALID_URL}`);
        }
        if (baseUrl === Environments_1.ENVIRONMENTS.PROD) {
            __classPrivateFieldSet(this, _anonymousUrl, `${baseUrl}/%s/%s/anonymous/%s`);
            __classPrivateFieldSet(this, _restUrl, `${baseUrl}/%s/%s/%s`);
        }
        else {
            __classPrivateFieldSet(this, _anonymousUrl, `${baseUrl}/anonymous/rest/%s/%s/%s`);
            __classPrivateFieldSet(this, _restUrl, `${baseUrl}/rest/%s/%s/%s`);
        }
    }
    get anonymousUrl() {
        return __classPrivateFieldGet(this, _anonymousUrl);
    }
    get restUrl() {
        return __classPrivateFieldGet(this, _restUrl);
    }
    getUrlPath(baseUrl, ...args) {
        return baseUrl.replace(/%s/g, match => {
            const arg = args.shift();
            return arg !== undefined ? arg : match;
        });
    }
}
exports.Platform = Platform;
_anonymousUrl = new WeakMap(), _restUrl = new WeakMap();
function validURI(uri) {
    const pattern = new RegExp(REGEX_VALID_URL, 'i');
    return pattern.test(uri);
}
//# sourceMappingURL=Platform.js.map
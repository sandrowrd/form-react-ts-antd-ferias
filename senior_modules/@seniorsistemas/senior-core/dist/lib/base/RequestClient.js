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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _platform;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestClient = void 0;
const ClientOptions_1 = require("../model/ClientOptions");
const RequestOptions_1 = require("../model/RequestOptions");
const axios_1 = __importDefault(require("axios"));
class RequestClient {
    constructor(seniorApi, domain, service) {
        _platform.set(this, void 0);
        this.seniorApi = seniorApi;
        __classPrivateFieldSet(this, _platform, seniorApi.platform);
        this.domain = domain;
        this.service = service;
    }
    /**
     * @param {ClientOptions}
     * @returns {RequestReturn<T>}
     */
    request(opts = new ClientOptions_1.ClientOptions()) {
        if (!opts.method) {
            throw new Error('O "method" deve ser informado');
        }
        if (!opts.url) {
            throw new Error('A "url" deve ser informada');
        }
        const headers = {};
        headers['Accept'] = 'application/json';
        headers['Content-Type'] = 'application/json';
        if (opts.headers) {
            if (opts.headers['X-Tenant']) {
                headers['X-Tenant'] = opts.headers['X-Tenant'];
            }
            if (opts.headers['seniorx.version']) {
                headers['seniorx.version'] = String(opts.headers['seniorx.version']);
            }
            if (opts.headers.authorization) {
                headers['Authorization'] = 'Bearer ' + opts.headers.authorization;
            }
        }
        // opções de request
        const options = new RequestOptions_1.RequestOptions(opts.timeout, opts.url, opts.method, headers);
        if (opts.data) {
            options.data = opts.data;
        }
        if (opts.params) {
            options.params = opts.params;
        }
        return axios_1.default
            .request(options.toOptions())
            .then((response) => (Object.assign(Object.assign({}, response), { body: response.data, statusCode: response.status })));
    }
    getUrlPath(path, anonymous = false) {
        let baseUrl = null;
        if (anonymous) {
            baseUrl = __classPrivateFieldGet(this, _platform).anonymousUrl;
        }
        else {
            baseUrl = __classPrivateFieldGet(this, _platform).restUrl;
        }
        return __classPrivateFieldGet(this, _platform).getUrlPath(baseUrl, this.domain, this.service, path);
    }
}
exports.RequestClient = RequestClient;
_platform = new WeakMap();
//# sourceMappingURL=RequestClient.js.map
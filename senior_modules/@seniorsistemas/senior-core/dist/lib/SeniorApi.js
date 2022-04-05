"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var _authentication, _configuration, _authorization, _tenant, _notification, _users, _blob, _platform;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeniorApi = void 0;
const Authentication_1 = require("./resources/Authentication");
const Authorization_1 = require("./resources/Authorization");
const Tenant_1 = require("./resources/Tenant");
const Notification_1 = require("./resources/Notification");
const Configuration_1 = require("./resources/Configuration");
const Users_1 = require("./resources/Users");
const Entity_1 = require("./base/Entity");
const Platform_1 = require("./base/Platform");
const Environments_1 = require("./Environments");
const Blob_1 = require("./resources/Blob");
class SeniorApi {
    constructor() {
        this.accessToken = null;
        _authentication.set(this, void 0);
        _configuration.set(this, void 0);
        _authorization.set(this, void 0);
        _tenant.set(this, void 0);
        _notification.set(this, void 0);
        _users.set(this, void 0);
        _blob.set(this, void 0);
        _platform.set(this, new Platform_1.Platform(Environments_1.ENVIRONMENTS.DEV));
    }
    get configuration() {
        __classPrivateFieldSet(this, _configuration, __classPrivateFieldGet(this, _configuration) || new Configuration_1.Configuration(this));
        return __classPrivateFieldGet(this, _configuration);
    }
    get authentication() {
        __classPrivateFieldSet(this, _authentication, __classPrivateFieldGet(this, _authentication) || new Authentication_1.Authentication(this));
        return __classPrivateFieldGet(this, _authentication);
    }
    get authorization() {
        __classPrivateFieldSet(this, _authorization, __classPrivateFieldGet(this, _authorization) || new Authorization_1.Authorization(this));
        return __classPrivateFieldGet(this, _authorization);
    }
    get tenant() {
        __classPrivateFieldSet(this, _tenant, __classPrivateFieldGet(this, _tenant) || new Tenant_1.Tenant(this));
        return __classPrivateFieldGet(this, _tenant);
    }
    get notification() {
        __classPrivateFieldSet(this, _notification, __classPrivateFieldGet(this, _notification) || new Notification_1.Notification(this));
        return __classPrivateFieldGet(this, _notification);
    }
    get users() {
        __classPrivateFieldSet(this, _users, __classPrivateFieldGet(this, _users) || new Users_1.Users(this));
        return __classPrivateFieldGet(this, _users);
    }
    get blob() {
        __classPrivateFieldSet(this, _blob, __classPrivateFieldGet(this, _blob) || new Blob_1.Blob(this));
        return __classPrivateFieldGet(this, _blob);
    }
    setUrl(url) {
        this.setEnvironment(url);
    }
    setEnvironment(envOrUrl) {
        __classPrivateFieldSet(this, _platform, new Platform_1.Platform(envOrUrl));
    }
    get platform() {
        return __classPrivateFieldGet(this, _platform);
    }
    getEntity(domain, service, entityName) {
        return new Entity_1.Entity(domain, service, entityName, this);
    }
}
exports.SeniorApi = SeniorApi;
_authentication = new WeakMap(), _configuration = new WeakMap(), _authorization = new WeakMap(), _tenant = new WeakMap(), _notification = new WeakMap(), _users = new WeakMap(), _blob = new WeakMap(), _platform = new WeakMap();
//# sourceMappingURL=SeniorApi.js.map
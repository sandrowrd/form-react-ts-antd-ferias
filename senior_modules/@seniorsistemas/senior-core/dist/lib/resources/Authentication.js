"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authentication = void 0;
const HttpMethod_1 = require("../model/HttpMethod");
const RequestClient_1 = require("../base/RequestClient");
class Authentication extends RequestClient_1.RequestClient {
    constructor(seniorApi) {
        super(seniorApi, 'platform', 'authentication');
    }
    login(dto) {
        if (!dto.username) {
            throw new Error('O "username" deve ser informado');
        }
        if (!dto.password) {
            throw new Error('O "password" deve ser informado');
        }
        const clientOptions = {
            url: this.getUrlPath('actions/login'),
            method: HttpMethod_1.HttpMethod.POST,
            data: dto,
        };
        return this.request(clientOptions);
    }
    logout() {
        const clientOptions = {
            url: this.getUrlPath('actions/logout'),
            method: HttpMethod_1.HttpMethod.POST,
            data: {
                accessToken: this.seniorApi.accessToken,
            },
            headers: {
                authorization: this.seniorApi.accessToken,
            },
        };
        return this.request(clientOptions);
    }
    loginMFA(dto) {
        if (!dto.temporaryToken) {
            throw new Error('O "temporaryToken" deve ser informado');
        }
        if (!dto.validationCode) {
            throw new Error('O "validationCode" deve ser informado');
        }
        const clientOptions = {
            url: this.getUrlPath('actions/loginMFA'),
            method: HttpMethod_1.HttpMethod.POST,
            data: dto,
        };
        return this.request(clientOptions);
    }
    loginWithKey(dto) {
        if (!dto.accessKey) {
            throw new Error('O "accessKey" deve ser informado');
        }
        if (!dto.secret) {
            throw new Error('O "secret" deve ser informado');
        }
        if (!dto.tenantName) {
            throw new Error('O "tenantName" deve ser informado');
        }
        const clientOptions = {
            url: this.getUrlPath('actions/loginWithKey', true),
            method: HttpMethod_1.HttpMethod.POST,
            data: dto,
        };
        return this.request(clientOptions);
    }
    refreshToken(dto) {
        if (!dto.tenantName) {
            throw new Error('O "tenantName" deve ser informado');
        }
        if (!dto.refreshToken) {
            throw new Error('O "refreshToken" deve ser informado');
        }
        const clientOptions = {
            url: this.getUrlPath('actions/refreshToken'),
            method: HttpMethod_1.HttpMethod.POST,
            data: {
                refreshToken: dto.refreshToken,
            },
            headers: {
                'X-Tenant': dto.tenantName,
                authorization: this.seniorApi.accessToken,
            },
        };
        return this.request(clientOptions);
    }
}
exports.Authentication = Authentication;
//# sourceMappingURL=Authentication.js.map
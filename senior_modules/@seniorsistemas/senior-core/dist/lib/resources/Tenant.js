"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tenant = void 0;
const RequestClient_1 = require("../base/RequestClient");
const HttpMethod_1 = require("../model/HttpMethod");
class Tenant extends RequestClient_1.RequestClient {
    constructor(seniorApi) {
        super(seniorApi, 'platform', 'tenant');
    }
    getTenantByName(tenantName) {
        if (!tenantName) {
            throw new Error('O "tenantName" deve ser informado');
        }
        const clientOptions = {
            url: this.getUrlPath('queries/getTenantByName'),
            method: HttpMethod_1.HttpMethod.POST,
            data: {
                tenantName,
            },
            headers: {
                authorization: this.seniorApi.accessToken,
            },
        };
        return this.request(clientOptions);
    }
    getTenantByDomain(tenantDomain) {
        if (!tenantDomain) {
            throw new Error('O "tenantDomain" deve ser informado');
        }
        const clientOptions = {
            url: this.getUrlPath('queries/getTenantByDomain'),
            method: HttpMethod_1.HttpMethod.POST,
            data: {
                tenantDomain,
            },
            headers: {
                authorization: this.seniorApi.accessToken,
            },
        };
        return this.request(clientOptions);
    }
}
exports.Tenant = Tenant;
//# sourceMappingURL=Tenant.js.map
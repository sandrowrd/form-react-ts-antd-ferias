"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Configuration = void 0;
const HttpMethod_1 = require("../model/HttpMethod");
const RequestClient_1 = require("../base/RequestClient");
class Configuration extends RequestClient_1.RequestClient {
    constructor(seniorApi) {
        super(seniorApi, 'platform', 'configuration');
    }
    listServiceProperties(dto) {
        const clientOptions = {
            url: this.getUrlPath('queries/listServiceProperties'),
            method: HttpMethod_1.HttpMethod.POST,
            data: dto,
            headers: {
                authorization: this.seniorApi.accessToken,
            }
        };
        return this.request(clientOptions);
    }
    getCustomProperty(dto) {
        if (!dto.propertyKey) {
            throw new Error('O "propertyKey" deve ser informado');
        }
        const clientOptions = {
            url: this.getUrlPath('queries/getCustomProperty'),
            method: HttpMethod_1.HttpMethod.POST,
            data: dto,
            headers: {
                authorization: this.seniorApi.accessToken,
            }
        };
        return this.request(clientOptions);
    }
    createCustomProperty(dto) {
        if (!dto.propertyKey) {
            throw new Error('O "propertyKey" deve ser informado');
        }
        const clientOptions = {
            url: this.getUrlPath('actions/createCustomProperty'),
            method: HttpMethod_1.HttpMethod.POST,
            data: dto,
            headers: {
                authorization: this.seniorApi.accessToken,
            }
        };
        return this.request(clientOptions);
    }
    updateCustomProperty(dto) {
        if (!dto.propertyKey) {
            throw new Error('O "propertyKey" deve ser informado');
        }
        const clientOptions = {
            url: this.getUrlPath('actions/updateCustomProperty'),
            method: HttpMethod_1.HttpMethod.POST,
            data: dto,
            headers: {
                authorization: this.seniorApi.accessToken,
            }
        };
        return this.request(clientOptions);
    }
    deleteCustomProperty(dto) {
        if (!dto.propertyKey) {
            throw new Error('O "propertyKey" deve ser informado');
        }
        const clientOptions = {
            url: this.getUrlPath('actions/deleteCustomProperty'),
            method: HttpMethod_1.HttpMethod.DELETE,
            data: dto,
            headers: {
                authorization: this.seniorApi.accessToken,
            }
        };
        return this.request(clientOptions);
    }
}
exports.Configuration = Configuration;
//# sourceMappingURL=Configuration.js.map
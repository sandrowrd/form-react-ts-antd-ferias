"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authorization = void 0;
const HttpMethod_1 = require("../model/HttpMethod");
const RequestClient_1 = require("../base/RequestClient");
class Authorization extends RequestClient_1.RequestClient {
    constructor(seniorApi) {
        super(seniorApi, 'platform', 'authorization');
    }
    getResource(uri) {
        if (!uri) {
            throw new Error('A "uri" deve ser informada');
        }
        const clientOptions = {
            url: this.getUrlPath('queries/getResource'),
            method: HttpMethod_1.HttpMethod.POST,
            data: {
                uri,
            },
            headers: {
                authorization: this.seniorApi.accessToken,
            },
        };
        return this.request(clientOptions);
    }
    checkAccess(dto) {
        if (!dto.resource) {
            throw new Error('O "resource" deve ser informado');
        }
        if (!dto.action) {
            throw new Error('A "action" deve ser informada');
        }
        const clientOptions = {
            url: this.getUrlPath('queries/checkAccess'),
            method: HttpMethod_1.HttpMethod.POST,
            data: {
                permissions: [
                    Object.assign(Object.assign({}, dto), { attributes: dto.attributes ? dto.attributes : [] }),
                ],
                includeFilters: false,
                includeDelegations: false,
            },
            headers: {
                authorization: this.seniorApi.accessToken,
            },
        };
        return this.request(clientOptions);
    }
    saveResources(resources) {
        if (!resources || resources.length === 0) {
            throw new Error('Os "resources" devem ser informados');
        }
        const clientOptions = {
            url: this.getUrlPath('actions/saveResources'),
            method: HttpMethod_1.HttpMethod.POST,
            data: {
                dto: resources,
            },
            headers: {
                authorization: this.seniorApi.accessToken,
            },
        };
        return this.request(clientOptions);
    }
    deleteResources(resourcesURI) {
        if (!resourcesURI) {
            throw new Error('Os "resources" devem ser informados');
        }
        const clientOptions = {
            url: this.getUrlPath('actions/deleteResources'),
            method: HttpMethod_1.HttpMethod.POST,
            data: {
                resources: resourcesURI,
            },
            headers: {
                authorization: this.seniorApi.accessToken,
            },
        };
        return this.request(clientOptions);
    }
    createRole(dto) {
        if (!dto.name) {
            throw new Error('O "name" deve ser informado');
        }
        if (!dto.description) {
            throw new Error('O "description" deve ser informado');
        }
        const clientOptions = {
            url: this.getUrlPath('actions/createRole'),
            method: HttpMethod_1.HttpMethod.POST,
            data: Object.assign({}, dto),
            headers: {
                authorization: this.seniorApi.accessToken,
            },
        };
        return this.request(clientOptions);
    }
    getRole(name) {
        if (!name) {
            throw new Error('O "name" deve ser informado');
        }
        const clientOptions = {
            url: this.getUrlPath('queries/getRole'),
            method: HttpMethod_1.HttpMethod.POST,
            data: {
                name,
            },
            headers: {
                authorization: this.seniorApi.accessToken,
            },
        };
        return this.request(clientOptions);
    }
    deleteRole(name) {
        if (!name) {
            throw new Error('O "name" deve ser informado');
        }
        const clientOptions = {
            url: this.getUrlPath('actions/deleteRole'),
            method: HttpMethod_1.HttpMethod.POST,
            data: {
                name,
            },
            headers: {
                authorization: this.seniorApi.accessToken,
            },
        };
        return this.request(clientOptions);
    }
    listRoles(searchValue = '') {
        const clientOptions = {
            url: this.getUrlPath('queries/listRoles'),
            method: HttpMethod_1.HttpMethod.POST,
            data: {
                searchValue,
            },
            headers: {
                authorization: this.seniorApi.accessToken,
            },
        };
        console.log(clientOptions);
        return this.request(clientOptions);
    }
    assignUsers(dto) {
        if (!dto.roles) {
            throw new Error('Os "roles" devem ser informados');
        }
        if (!dto.users) {
            throw new Error('Os "users" devem ser informados');
        }
        const clientOptions = {
            url: this.getUrlPath('actions/assignUsers'),
            method: HttpMethod_1.HttpMethod.POST,
            data: Object.assign({}, dto),
            headers: {
                authorization: this.seniorApi.accessToken,
            },
        };
        return this.request(clientOptions);
    }
    unassignUsers(dto) {
        if (!dto.roles) {
            throw new Error('Os "roles" devem ser informados');
        }
        if (!dto.users) {
            throw new Error('Os "users" devem ser informados');
        }
        const clientOptions = {
            url: this.getUrlPath('actions/unassignUsers'),
            method: HttpMethod_1.HttpMethod.POST,
            data: Object.assign({}, dto),
            headers: {
                authorization: this.seniorApi.accessToken,
            },
        };
        return this.request(clientOptions);
    }
    getRoleFilters(dto) {
        if (!dto.roles) {
            throw new Error('Os "papéis" devem ser informados');
        }
        if (!dto.domainName) {
            throw new Error('O "domínio" deve ser informado');
        }
        if (!dto.roles) {
            throw new Error('O "serviço" deve ser informado');
        }
        const clientOptions = {
            url: this.getUrlPath('queries/getRoleFilters'),
            method: HttpMethod_1.HttpMethod.POST,
            data: Object.assign({}, dto),
            headers: {
                authorization: this.seniorApi.accessToken,
            },
        };
        return this.request(clientOptions);
    }
}
exports.Authorization = Authorization;
//# sourceMappingURL=Authorization.js.map
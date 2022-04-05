"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const RequestClient_1 = require("../base/RequestClient");
const HttpMethod_1 = require("../model/HttpMethod");
const Pagination_1 = require("../model/Pagination");
class Users extends RequestClient_1.RequestClient {
    constructor(seniorApi) {
        super(seniorApi, 'platform', 'user');
    }
    listGroups(dto) {
        const clientOptions = {
            url: this.getUrlPath('queries/listGroups'),
            method: HttpMethod_1.HttpMethod.POST,
            data: Object.assign(Object.assign({}, dto), { searchValue: dto.searchValue ? dto.searchValue : '', pagination: dto.pagination ? Object.assign(Object.assign({}, Pagination_1.PaginationDefault), dto.pagination) : undefined }),
            headers: {
                authorization: this.seniorApi.accessToken,
            },
        };
        return this.request(clientOptions);
    }
    listGroupUsers(dto) {
        if (!dto.id) {
            throw new Error('O "id" deve ser informado');
        }
        const clientOptions = {
            url: this.getUrlPath('queries/listGroupUsers'),
            method: HttpMethod_1.HttpMethod.POST,
            data: Object.assign(Object.assign({}, dto), { searchValue: dto.searchValue ? dto.searchValue : '', pagination: dto.pagination
                    ? Object.assign(Object.assign({}, Pagination_1.PaginationDefault), dto.pagination) : undefined }),
            headers: {
                authorization: this.seniorApi.accessToken,
            },
        };
        return this.request(clientOptions);
    }
    getGroup(id) {
        if (!id) {
            throw new Error('O "id" deve ser informado');
        }
        const clientOptions = {
            url: this.getUrlPath('queries/getGroup'),
            method: HttpMethod_1.HttpMethod.POST,
            data: {
                id,
            },
            headers: {
                authorization: this.seniorApi.accessToken,
            },
        };
        return this.request(clientOptions);
    }
    getUser(username) {
        const clientOptions = {
            url: this.getUrlPath('queries/getUser'),
            method: HttpMethod_1.HttpMethod.POST,
            data: {
                username,
            },
            headers: {
                authorization: this.seniorApi.accessToken,
            },
        };
        return this.request(clientOptions);
    }
    createGroup(dto) {
        if (!dto.name) {
            throw new Error('O "name" deve ser informado');
        }
        if (!dto.description) {
            throw new Error('O "description" deve ser informado');
        }
        if (!dto.email) {
            throw new Error('O "email" deve ser informado');
        }
        const clientOptions = {
            url: this.getUrlPath('actions/createGroup'),
            method: HttpMethod_1.HttpMethod.POST,
            data: dto,
            headers: {
                authorization: this.seniorApi.accessToken,
            },
        };
        return this.request(clientOptions);
    }
    updateGroup(dto) {
        if (!dto.id) {
            throw new Error('O "id" deve ser informado');
        }
        const clientOptions = {
            url: this.getUrlPath('actions/updateGroup'),
            method: HttpMethod_1.HttpMethod.POST,
            data: dto,
            headers: {
                authorization: this.seniorApi.accessToken,
            },
        };
        return this.request(clientOptions);
    }
    createUser(dto) {
        if (!dto.username) {
            throw new Error('O "username" deve ser informado');
        }
        if (!dto.fullName) {
            throw new Error('O "fullName" deve ser informado');
        }
        if (!dto.email) {
            throw new Error('O "email" deve ser informado');
        }
        if (!dto.password) {
            throw new Error('O "password" deve ser informado');
        }
        if (dto.changePassword === undefined || dto.changePassword === null) {
            throw new Error('o "changePassword" deve ser informado');
        }
        if (dto.blocked === undefined || dto.blocked === null) {
            throw new Error('o "blocked" deve ser informado');
        }
        const clientOptions = {
            url: this.getUrlPath('actions/createUser'),
            method: HttpMethod_1.HttpMethod.POST,
            data: dto,
            headers: {
                authorization: this.seniorApi.accessToken,
            },
        };
        return this.request(clientOptions);
    }
    updateUser(dto) {
        const clientOptions = {
            url: this.getUrlPath('actions/updateUser'),
            method: HttpMethod_1.HttpMethod.POST,
            data: dto,
            headers: {
                authorization: this.seniorApi.accessToken,
            },
        };
        return this.request(clientOptions);
    }
    deleteUser(username) {
        if (!username) {
            throw new Error('O "username" deve ser informado');
        }
        const clientOptions = {
            url: this.getUrlPath('actions/deleteUser'),
            data: {
                username
            },
            method: HttpMethod_1.HttpMethod.POST,
            headers: {
                authorization: this.seniorApi.accessToken,
            },
        };
        return this.request(clientOptions);
    }
    updateGroupUsers(dto) {
        if (!dto.usersToAdd && !dto.usersToRemove) {
            throw new Error('O "usersToAdd" e/ou "usersToRemove" devem ser informados.');
        }
        if (!dto.groupId) {
            throw new Error('O "groupId" deve ser informado');
        }
        const clientOptions = {
            url: this.getUrlPath('actions/updateGroupUsers'),
            method: HttpMethod_1.HttpMethod.POST,
            data: dto,
            headers: {
                authorization: this.seniorApi.accessToken,
            },
        };
        return this.request(clientOptions);
    }
    deleteGroup(id) {
        if (!id) {
            throw new Error('O "id" deve ser informado');
        }
        const clientOptions = {
            url: this.getUrlPath('actions/removeGroup'),
            data: {
                id
            },
            method: HttpMethod_1.HttpMethod.POST,
            headers: {
                authorization: this.seniorApi.accessToken,
            },
        };
        return this.request(clientOptions);
    }
}
exports.Users = Users;
//# sourceMappingURL=Users.js.map
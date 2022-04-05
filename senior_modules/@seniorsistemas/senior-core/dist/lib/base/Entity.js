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
var _entityName;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
const HttpMethod_1 = require("../model/HttpMethod");
const RequestClient_1 = require("./RequestClient");
class Entity extends RequestClient_1.RequestClient {
    constructor(domain, service, entityName, seniorAPi) {
        super(seniorAPi, domain, service);
        _entityName.set(this, void 0);
        __classPrivateFieldSet(this, _entityName, entityName);
    }
    /**
     * Faz um get da entidade podendo ser por id ou por um filtro.
     * @param {{ filter?: string, id?: string }} getOptions Opções de listagem,
     * para mais informações sobre {@link FilterBuilder}. Opcional.
     * @returns {Promise<RequestReturn<EntityList<T>>>} retorna uma promise com a resposta da plataforma
     * contendo no atributo `data` uma lista de entidades.
     */
    get(getOptions = {}) {
        let url = `entities/${__classPrivateFieldGet(this, _entityName)}`;
        if (getOptions.id) {
            url += '/' + getOptions.id;
        }
        else if (getOptions.filter) {
            url += '?filter=' + getOptions.filter;
        }
        const clientOptions = {
            url: this.getUrlPath(url),
            headers: {
                authorization: this.seniorApi.accessToken,
            },
            method: HttpMethod_1.HttpMethod.GET,
        };
        return this.request(clientOptions);
    }
    /**
     * Faz um post de um objeto da entidade podendo passar um id para substituir a entidade
     * @param {T} entity um objeto da entidade a ser criada.
     * @param {string} id Id da entidade a ser substituida. Opcional.
     * @returns {Promise<RequestReturn>} retorna uma promise com a resposta da plataforma contendo no atributo `data`
     * o valor do id criado, atributo no padrão: `idNomeDaEntidade` ou um objeto com os valores da entidade,
     * depende do serviço a ser chamado.
     *
     * Ex: `{ idUsuario: 'uuid_gerado' }` ou `{ id: 'uuid_gerado', name: 'nome do usuario' }`.
     */
    post(entity, id) {
        let url = `entities/${__classPrivateFieldGet(this, _entityName)}`;
        if (id) {
            url += `/${id}`;
        }
        const clientOptions = {
            url: this.getUrlPath(url),
            headers: {
                authorization: this.seniorApi.accessToken,
            },
            method: HttpMethod_1.HttpMethod.POST,
            data: entity,
        };
        return this.request(clientOptions);
    }
    /**
     * Faz um put de um objeto da entidade passando um id para substituir a entidade.
     *
     * Observação: O id precisa estar dentro do objeto da entidade também.
     * @param {string} id Id da entidade a ser substituida.
     * @param {T} entity um objeto da entidade a ser criada.
     * @returns {Promise<RequestReturn>} retorna uma promise com a resposta da plataforma contendo no atributo `data`
     * o valor do id criado, atributo no padrão: `idNomeDaEntidade` ou um objeto com os valores da entidade,
     * depende do serviço a ser chamado.
     *
     * Ex: `{ idUsuario: 'uuid_gerado' }` ou `{ id: 'uuid_gerado', name: 'nome do usuario' }`.
     */
    put(id, entity) {
        const clientOptions = {
            url: this.getUrlPath(`entities/${__classPrivateFieldGet(this, _entityName)}/${id}`),
            headers: {
                authorization: this.seniorApi.accessToken,
            },
            method: HttpMethod_1.HttpMethod.PUT,
            data: entity,
        };
        return this.request(clientOptions);
    }
    /**
     * Faz um delete da entidade com base no id informado.
     * @param {string} id Id da entidade a ser deletada.
     * @returns {Promise<RequestReturn>} retorna uma promise com a resposta da plataforma
     * podendo conter o id da entidade deletada ou um objeto vazio, depende do serviço chamado.
     */
    delete(id) {
        const clientOptions = {
            url: this.getUrlPath(`entities/${__classPrivateFieldGet(this, _entityName)}/${id}`),
            headers: {
                authorization: this.seniorApi.accessToken,
            },
            method: HttpMethod_1.HttpMethod.DELETE,
        };
        return this.request(clientOptions);
    }
}
exports.Entity = Entity;
_entityName = new WeakMap();
//# sourceMappingURL=Entity.js.map
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
var _filter;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterBuilder = void 0;
/**
 * Um builder para filtro ODATA. Operadores:
 *
 * `eq`	Igual a (=)	`filter=id eq 10`
 *
 * `ne`	Diferente de (!=) `filter=id ne 10`
 *
 * `lt`	Menor que (<)	`filter=id lt 10`
 *
 * `gt`	Maior que (>)	`filter=id gt 10`
 *
 * `le`	Menor ou igual (<=)	`filter=id le 10`
 *
 * `ge`	Maior ou igual (>=) `filter=id ge 10`
 *
 * `is null` Verifica se parâmetro é nulo `filter=id is null`
 *
 * `containing`	Verifica se o atributo da esquerda contém o valor da direita `filter=containing(name, 'albert')`
 *
 * `lower` Função de caixa baixa (lowercase) `filter=containing(lower(name), lower('Albert'))`
 *
 * `and` Operador booleano AND, requer que ambos os termos sejam verdadeiros `filter=id eq 10 and status eq 'y'`
 *
 * `or` Operador booleano OR, requer que ao menos um dos termos sejam verdadeiros `filter=id eq `10 or id eq 20`
 *
 * @example <caption>Exemplo criando um filtro para o campo `nome`</caption>
 * //retornará uma string com o valor 'nome eq 'nome qualquer'
 * new FilterBuilder().field('nome').equals('nome qualquer').build();
 */
class FilterBuilder {
    constructor() {
        _filter.set(this, '');
    }
    /**
     * Adiciona ao filtro um atributo novo
     * @param {string} fieldName nome do atributo.
     */
    field(fieldName) {
        __classPrivateFieldSet(this, _filter, __classPrivateFieldGet(this, _filter) + fieldName);
        return this;
    }
    /**
     * Adiciona string de filtro que verifica se o campo a esquerda é igual ao valor passado por parametro
     *
     * `eq`	Igual a (=)	`filter=id eq 10`
     * @param value valor a ser comparado.
     */
    equals(value) {
        __classPrivateFieldSet(this, _filter, __classPrivateFieldGet(this, _filter) + ` eq ${resolveValue(value)}`);
        return this;
    }
    /**
     * Adiciona string de filtro que verifica se o campo a esquerda é diferente ao valor passado por parametro
     *
     * `ne`	Diferente de (!=) `filter=id ne 10`
     * @param value valor a ser comparado.
     */
    notEquals(value) {
        __classPrivateFieldSet(this, _filter, __classPrivateFieldGet(this, _filter) + ` ne ${resolveValue(value)}`);
        return this;
    }
    /**
     * Adiciona string de filtro que verifica se o campo a esquerda é menor que o valor passado por parametro
     *
     * `lt`	Menor que (<)	`filter=id lt 10`
     * @param value valor a ser comparado.
     */
    lowerThan(value) {
        __classPrivateFieldSet(this, _filter, __classPrivateFieldGet(this, _filter) + ` lt ${resolveValue(value)}`);
        return this;
    }
    /**
     * Adiciona string de filtro que verifica se o campo a esquerda é maior que o valor passado por parametro
     *
     * `gt`	Maior que (>)	`filter=id gt 10`
     * @param value valor a ser comparado.
     */
    greaterThan(value) {
        __classPrivateFieldSet(this, _filter, __classPrivateFieldGet(this, _filter) + ` gt ${resolveValue(value)}`);
        return this;
    }
    /**
     * Adiciona string de filtro que verifica se o campo a esquerda é menor ou igual ao valor passado por parametro
     *
     * `le`	Menor ou igual (<=)	`filter=id le 10`
     * @param value valor a ser comparado.
     */
    lowerOrEquals(value) {
        __classPrivateFieldSet(this, _filter, __classPrivateFieldGet(this, _filter) + ` le ${resolveValue(value)}`);
        return this;
    }
    /**
     * Adiciona string de filtro que verifica se o campo a esquerda é maior ou igual ao valor passado por parametro
     *
     * `ge`	Maior ou igual (>=)	`filter=id ge 10`
     * @param value valor a ser comparado.
     */
    greaterOrEquals(value) {
        __classPrivateFieldSet(this, _filter, __classPrivateFieldGet(this, _filter) + ` ge ${resolveValue(value)}`);
        return this;
    }
    /**
     * Adiciona operador booleano `and` ao filtro.
     *
     * `and` Operador booleano AND, requer que ambos os termos sejam verdadeiros `filter=id eq 10 and status eq 'y'`
     */
    and() {
        __classPrivateFieldSet(this, _filter, __classPrivateFieldGet(this, _filter) + ' and ');
        return this;
    }
    /**
     * Adiciona operador booleano `or` ao filtro.
     *
     * `or` Operador booleano OR, requer que ao menos um dos termos sejam verdadeiros `filter=id eq `10 or id eq 20`
     */
    or() {
        __classPrivateFieldSet(this, _filter, __classPrivateFieldGet(this, _filter) + ' or ');
        return this;
    }
    /**
     * Adiciona string de filtro que verifica se o campo a esquerda contem o valor passado por parametro
     *
     * `containing`	Verifica se o atributo da esquerda contém o valor da direita `filter=containing(name, 'albert')`
     * @param {string} fieldName campo a ser verificado
     * @param {string} value valor a ser comparado.
     */
    containing(fieldName, value) {
        __classPrivateFieldSet(this, _filter, __classPrivateFieldGet(this, _filter) + ` containing(${fieldName}, '${value}')`);
        return this;
    }
    /**
     * Adiciona string de filtro que verifica se o campo a esquerda contem o valor passado por parametro.
     * Ambos em caixa baixa (lowercase).
     *
     * `lower` Função de caixa baixa (lowercase) `filter=containing(lower(name), lower('Albert'))`
     * @param {string} fieldName campo a ser verificado com caixa baixa (lowercase).
     * @param {string} value valor a ser comparado com caixa baixa (lowercase).
     */
    containingLower(fieldName, value) {
        __classPrivateFieldSet(this, _filter, __classPrivateFieldGet(this, _filter) + ` containing(lower(${fieldName}), lower('${value}'))`);
        return this;
    }
    /**
     * Adiciona string de filtro que verifica se o campo a esquerda é nulo
     *
     * `is null` Verifica se parâmetro é nulo `filter=id is null`
     */
    isNull() {
        __classPrivateFieldSet(this, _filter, __classPrivateFieldGet(this, _filter) + ' is null');
        return this;
    }
    /**
     * Adiciona uma string com filtro customizado ao filtro atual, podendo ser um filtro da classe FilterBuilder.
     * @param {string | FilterBuilder} filter filtro customizado a ser adicionado.
     */
    appendFilter(filter) {
        __classPrivateFieldSet(this, _filter, __classPrivateFieldGet(this, _filter) + filter.toString());
        return this;
    }
    /**
     * Builda retornando o filtro criado para ser usado na query
     * @returns Filtro completo.
     */
    build() {
        return __classPrivateFieldGet(this, _filter);
    }
    toString() {
        return __classPrivateFieldGet(this, _filter);
    }
}
exports.FilterBuilder = FilterBuilder;
_filter = new WeakMap();
function resolveValue(value) {
    if (typeof value === 'string') {
        return `'${value}'`;
    }
    return value.toString();
}
//# sourceMappingURL=FilterBuilder.js.map
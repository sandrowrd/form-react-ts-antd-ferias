import { RequestClient } from './RequestClient';
import { SeniorApi } from '../SeniorApi';
import { EntityList } from '../model/EntityList';
import { RequestReturn } from '../model/RequestReturn';
export declare class Entity<T> extends RequestClient {
    #private;
    constructor(domain: string, service: string, entityName: string, seniorAPi: SeniorApi);
    /**
     * Faz um get da entidade podendo ser por id ou por um filtro.
     * @param {{ filter?: string, id?: string }} getOptions Opções de listagem,
     * para mais informações sobre {@link FilterBuilder}. Opcional.
     * @returns {Promise<RequestReturn<EntityList<T>>>} retorna uma promise com a resposta da plataforma
     * contendo no atributo `data` uma lista de entidades.
     */
    get(getOptions?: {
        filter?: string;
        id?: string;
    }): Promise<RequestReturn<EntityList<T>>>;
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
    post(entity: T, id?: string): Promise<RequestReturn>;
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
    put(id: string, entity: T): Promise<RequestReturn>;
    /**
     * Faz um delete da entidade com base no id informado.
     * @param {string} id Id da entidade a ser deletada.
     * @returns {Promise<RequestReturn>} retorna uma promise com a resposta da plataforma
     * podendo conter o id da entidade deletada ou um objeto vazio, depende do serviço chamado.
     */
    delete(id: string): Promise<RequestReturn>;
}

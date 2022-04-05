import { BasicPage } from "./basicPage";
import { ListInformation } from "./listInformation";
import { Pagination } from "./pagination";
export interface ListPagesIn {
    /**
     * O valor a ser pesquisado no campo nome da página.
     */
    searchValue?: string;
    /**
     * Filtrar para somente as páginas criadas pelo usuário corrente
     */
    ownerOnly?: boolean;
    /**
     * As configurações de paginação da listagem. Não definido, retornará os 10 primeiros resultados.
     */
    pagination?: Pagination;
}
export interface ListPagesOut {
    /**
     * Retorna as páginas
     */
    pages: Array<BasicPage>;
    /**
     * Informações sobre os resultados da listagem
     */
    listInformation: ListInformation;
}

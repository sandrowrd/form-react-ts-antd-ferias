import { BasicPage } from "./basicPage";
import { ListInformation } from "./listInformation";
import { Pagination } from "./pagination";
export interface ListFactoryDefaultPagesIn {
    /**
     * O valor a ser pesquisado no campo nome da página.
     */
    searchValue?: string;
    /**
     * As configurações de paginação da listagem. Não definido, retornará os 10 primeiros resultados.
     */
    pagination?: Pagination;
}
export interface ListFactoryDefaultPagesOut {
    /**
     * Os registros retornados da listagem
     */
    pages: Array<BasicPage>;
    /**
     * Informações sobre os resultados da listagem
     */
    listInformation: ListInformation;
}

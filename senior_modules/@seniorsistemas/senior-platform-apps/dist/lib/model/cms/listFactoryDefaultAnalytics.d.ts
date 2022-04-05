import { BasicAnalytic } from "./basicAnalytic";
import { ListInformation } from "./listInformation";
import { Pagination } from "./pagination";
export interface ListFactoryDefaultAnalyticsIn {
    /**
     * Valor a ser buscado no nome do analytic, uri ou tags
     */
    searchValue?: string;
    /**
     * As configurações de paginação da listagem. Não definido, retornará os 10 primeiros resultados.
     */
    pagination?: Pagination;
}
export interface ListFactoryDefaultAnalyticsOut {
    /**
     * Os registros retornados da listagem
     */
    analytics: Array<BasicAnalytic>;
    /**
     * Informações sobre os resultados da listagem
     */
    listInformation: ListInformation;
}

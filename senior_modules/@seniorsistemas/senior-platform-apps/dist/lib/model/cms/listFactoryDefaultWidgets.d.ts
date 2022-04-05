import { ListInformation } from "./listInformation";
import { Pagination } from "./pagination";
import { Widget } from "./widget";
export interface ListFactoryDefaultWidgetsIn {
    /**
     * O valor a ser pesquisado nos campos internacionalizados e nas tags ignorando caracteres maiúsculos e minúsculos
     */
    searchValue?: string;
    /**
     * As configurações de paginação da listagem. Não definido, retornará os 10 primeiros resultados.
     */
    pagination?: Pagination;
}
export interface ListFactoryDefaultWidgetsOut {
    /**
     * Os registros retornados da listagem
     */
    widgets: Array<Widget>;
    /**
     * Informações sobre os resultados da listagem
     */
    listInformation: ListInformation;
}

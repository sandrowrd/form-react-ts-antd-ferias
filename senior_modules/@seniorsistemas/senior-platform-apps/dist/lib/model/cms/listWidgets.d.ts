import { ListInformation } from "./listInformation";
import { Pagination } from "./pagination";
import { Widget } from "./widget";
export interface ListWidgetsIn {
    /**
     * O valor a ser pesquisado nos campos internacionalizados e nas tags ignorando caracteres maiúsculos e minúsculos
     */
    searchValue?: string;
    /**
     * As configurações de paginação da listagem. Não definido, retornará os 10 primeiros resultados.
     */
    pagination?: Pagination;
}
export interface ListWidgetsOut {
    /**
     * Os widgets que o usuário possui permissão de visualizar
     */
    widgets: Array<Widget>;
    /**
     * Informações sobre os resultados da listagem
     */
    listInformation: ListInformation;
}

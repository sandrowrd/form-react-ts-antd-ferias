import { BasicLandingPage } from "./basicLandingPage";
import { ListInformation } from "./listInformation";
import { Pagination } from "./pagination";
export interface ListLandingPagesIn {
    /**
     * O valor a ser pesquisado no campo título.
     */
    searchValue?: string;
    /**
     * As configurações de paginação da listagem. Não definido, retornará os 10 primeiros resultados.
     */
    pagination?: Pagination;
}
export interface ListLandingPagesOut {
    /**
     * Retorna as páginas, por questões de performance, os papéis em páginas compartilhadas não será retornado
     */
    landingPages: Array<BasicLandingPage>;
    /**
     * Informações sobre os resultados da listagem
     */
    listInformation: ListInformation;
}

/**
 * As configurações de paginação de uma listagem
 */
export interface Pagination {
    /**
    * O número da página retornado. A primeira página corresponde ao índice 0
    */
    pageNumber?: number;
    /**
    * Quantidade de registros por página
    */
    pageSize?: number;
}

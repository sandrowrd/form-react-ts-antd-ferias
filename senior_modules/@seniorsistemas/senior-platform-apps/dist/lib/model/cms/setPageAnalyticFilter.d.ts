import { AdditionalFilter } from "./additionalFilter";
import { Expression } from "./expression";
import { Order } from "./order";
export interface SetPageAnalyticFilterIn {
    /**
     * Identificador da página
     */
    pageId: string;
    /**
     * Identificador do analytic
     */
    analyticId: string;
    /**
     * Filtros
     */
    filter?: Expression;
    /**
     * A ordenação dos registros
     */
    order?: Array<Order>;
    /**
     * Filtros adicionais para o dataset do analytic
     */
    additionalFilter?: AdditionalFilter;
}

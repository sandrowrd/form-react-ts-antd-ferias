import { ChartType } from "./chartType";
import { Column } from "./column";
import { Expression } from "./expression";
import { Order } from "./order";
import { Series } from "./series";
/**
 * Informações do chart e suas associações
 */
export interface Chart {
    /**
     * Tipo do gráfico
     */
    type: ChartType;
    /**
     * Categoria, opcional para o tipo de gráfico GAUGE
     */
    category?: Column;
    /**
    * Conjunto de valores a serem exibidos, se o tipo de gráfico for pizza, somente um conjunto é aceito
    */
    series: Array<Series>;
    /**
    * Identificador do dataset que será vinculado ao gráfico
    */
    datasetId: string;
    /**
     * Filtros
     */
    filter?: Expression;
    /**
    * A ordenação dos registros
    */
    order?: Array<Order>;
}

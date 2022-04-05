import { Column } from "./column";
/**
 * Conjunto de valores a serem exibidos no gráfico
 */
export interface Series {
    /**
     * Coluna que o conjunto de dados será vinculado
     */
    column: Column;
    /**
    * Descrição do conjunto
    */
    label: string;
}

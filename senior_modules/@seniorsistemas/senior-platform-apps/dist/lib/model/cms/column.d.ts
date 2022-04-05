import { FunctionType } from "./functionType";
/**
 * Representa uma coluna da projeção
 */
export interface Column {
    /**
    * Nome do schema
    */
    schema: string;
    /**
    * Nome da tabela
    */
    table: string;
    /**
    * Nome da coluna
    */
    column: string;
    /**
    * Label da coluna
    */
    label?: string;
    /**
     * Informa uma função aplicada na coluna
     */
    _function?: FunctionType;
    /**
    * Precisão para formatação do valor
    */
    precision?: number;
    /**
    * Prefixo do label
    */
    prefix?: string;
    /**
    * Sufixo do label
    */
    sufix?: string;
    /**
    * Máscara da coluna
    */
    mask?: string;
    /**
     * Campo que identifica a latitude da localização a ser renderizada no gráfico de tipo mapa
     */
    latitude?: Column;
    /**
     * Campo que identifica a longitude da localização a ser renderizada no gráfico de tipo mapa
     */
    longitude?: Column;
}

export interface CountAnalyticsDatasetIn {
    /**
     * Identificador do dataset seguindo o padrão: dataset://tenantDomain/identificadorUnico
     */
    datasetId: string;
}
export interface CountAnalyticsDatasetOut {
    /**
     * Retorna a quantidade de analytics que utilizam o dataset
     */
    size: number;
}

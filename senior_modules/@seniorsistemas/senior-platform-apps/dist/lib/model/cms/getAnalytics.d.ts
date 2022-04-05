import { BasicAnalytic } from "./basicAnalytic";
export interface GetAnalyticsIn {
    /**
     * identificadores para filtrar
     */
    ids: Array<string>;
}
export interface GetAnalyticsOut {
    /**
     * Analytics ordenados pelo nome
     */
    analytics: Array<BasicAnalytic>;
}

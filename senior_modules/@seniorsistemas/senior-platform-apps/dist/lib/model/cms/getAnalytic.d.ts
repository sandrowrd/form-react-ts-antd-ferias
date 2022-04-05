import { Analytic } from "./analytic";
export interface GetAnalyticIn {
    /**
     * identificador do analytic
     */
    analyticId: string;
}
export interface GetAnalyticOut {
    /**
     * Os dados do componente
     */
    analytic: Analytic;
}

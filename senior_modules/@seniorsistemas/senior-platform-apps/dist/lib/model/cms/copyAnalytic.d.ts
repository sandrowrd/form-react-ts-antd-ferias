export interface CopyAnalyticIn {
    /**
     * Identificador do analytic a ser copiado no padrão analytics://{domínio do tenant}/{identificador único do analytic}
     * ou analytics://factory/{domínio do tenant}/{identificador único do analytic}
     */
    analyticId: string;
    /**
     * Nome do novo analytics
     */
    name: string;
}
export interface CopyAnalyticOut {
    /**
     * Identificador do novo analytic
     */
    analyticId: string;
}

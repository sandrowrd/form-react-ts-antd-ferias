import { LandingPage } from "./landingPage";
export interface GetLandingPageIn {
    /**
     * Identificador da landing page
     */
    landingPageId: string;
}
export interface GetLandingPageOut {
    /**
     * Informações completas da landing page com a página
     */
    landingPage: LandingPage;
}

import { LandingPageType } from "./landingPageType";
/**
 * Registro com as informações de uma landingPage.
 */
export interface BasicLandingPage {
    /**
    * Identificador da landing page no formato landing://{domínio do tenant}/{identificador único da página}
    */
    id: string;
    /**
    * Identificador da página
    */
    pageId: string;
    /**
    * Título da página
    */
    title: string;
    /**
    * Se inclui o header da página com o título
    */
    includeHeader?: boolean;
    /**
     * Tipo da landing page
     */
    landingPageType: LandingPageType;
}

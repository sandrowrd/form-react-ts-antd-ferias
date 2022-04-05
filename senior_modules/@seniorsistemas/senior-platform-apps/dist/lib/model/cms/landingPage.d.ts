import { LandingPageType } from "./landingPageType";
import { Page } from "./page";
/**
 * Registro com as informações da landing page e as informações da página.
 */
export interface LandingPage {
    /**
    * Identificador da landing page no formato landing://{domínio do tenant}/{identificador único da página}
    */
    id: string;
    /**
     * Informações da página
     */
    page: Page;
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
    /**
    * Papéis da landing page se for compartilhada
    */
    roles?: Array<string>;
}

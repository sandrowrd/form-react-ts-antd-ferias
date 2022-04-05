import { LandingPageType } from "./landingPageType";
export interface SaveLandingPageIn {
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
    /**
     * Papéis da landing page se for compartilhada, se omitido, não realiza alterações
     */
    roles?: Array<string>;
}
export interface SaveLandingPageOut {
    /**
     * Identificador da landing page
     */
    landingPageId: string;
}

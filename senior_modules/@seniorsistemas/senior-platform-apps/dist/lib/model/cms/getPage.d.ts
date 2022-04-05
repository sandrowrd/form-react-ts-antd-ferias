import { Page } from "./page";
export interface GetPageIn {
    /**
     * Identificador da página
     */
    pageId: string;
}
export interface GetPageOut {
    /**
     * Informações da página
     */
    page: Page;
}

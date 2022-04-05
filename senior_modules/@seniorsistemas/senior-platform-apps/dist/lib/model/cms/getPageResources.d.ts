import { PageResource } from "./pageResource";
export interface GetPageResourcesIn {
    /**
     * Identificador da página
     */
    pageId: string;
}
export interface GetPageResourcesOut {
    /**
     * Recursos da página por tipo
     */
    resources: Array<PageResource>;
}

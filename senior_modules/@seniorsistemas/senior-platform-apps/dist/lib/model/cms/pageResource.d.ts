import { ComponentType } from "./componentType";
export interface PageResource {
    /**
    * Nome do componente
    */
    name: string;
    /**
     * Tipo do componente
     */
    type: ComponentType;
    /**
    * URI do recurso
    */
    uri: string;
    /**
    * Ação do recurso
    */
    actionUri: string;
}

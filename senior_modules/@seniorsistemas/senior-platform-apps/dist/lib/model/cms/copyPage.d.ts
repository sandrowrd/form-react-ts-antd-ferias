export interface CopyPageIn {
    /**
     * Identificador da página a ser copiada no padrão page://{domínio do tenant}/{identificador único da página}
     */
    pageId: string;
    /**
     * Nome da nova página
     */
    name: string;
}
export interface CopyPageOut {
    /**
     * Identificador da nova página
     */
    pageId: string;
}

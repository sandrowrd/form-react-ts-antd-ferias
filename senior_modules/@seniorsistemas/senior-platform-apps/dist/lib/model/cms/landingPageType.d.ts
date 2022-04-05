/**
 * Tipo da landing page
 */
export declare enum LandingPageType {
    /**
     * Indica que é uma landing page padrão para caso o usuario não tenha nenhuma landing page compartilhada configurada
     */
    DEFAULT = "DEFAULT",
    /**
     * Indica uma landing page compartilhada com papéis
     */
    SHARED = "SHARED",
    /**
     * Indica que é uma landing page pessoa, somente o usuário que criou conseguirá visualizar
     */
    PERSONAL = "PERSONAL"
}

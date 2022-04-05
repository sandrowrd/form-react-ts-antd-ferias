export interface RemovePersonalLandingPagesIn {
    /**
     * Nome do usuário com domínio, ex: admin@senior.com.br.
     * Se não informado será considerado o usuário corrente.
     * Usuários com somente permissão de personalizar só podem remover suas próprias páginas
     */
    user?: string;
}

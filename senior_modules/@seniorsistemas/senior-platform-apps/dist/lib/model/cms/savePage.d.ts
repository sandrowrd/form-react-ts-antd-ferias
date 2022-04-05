import { BasicComponent } from "./basicComponent";
import { PositionType } from "./positionType";
export interface SavePageIn {
    /**
     * Identificador da página no padrão page://{domínio do tenant}/{identificador único da página}
     */
    id: string;
    /**
     * Nome da página
     */
    name: string;
    /**
     * Indica se devem ser enviadas as credenciais para os componentes da página
     */
    credentials?: boolean;
    /**
     * Indica se devem ser exibido a barra de ferramentas na página ou não
     */
    includeToolbar?: boolean;
    /**
     * Indica se os componentes possuirão tamanhos absolutos (fixos) ou relativos à tela
     */
    positionType?: PositionType;
    /**
     * Os componentes da página
     */
    components: Array<BasicComponent>;
}
export interface SavePageOut {
    /**
     * Identificador da página
     */
    pageId: string;
}

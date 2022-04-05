import { Component } from "./component";
import { Permission } from "./permission";
import { PositionType } from "./positionType";
/**
 * Informações completas de uma página e todos seus componentes
 */
export interface Page {
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
    * Indica se os componentes possuirão tamanhos absolutos (fixos) ou relativos à tela
    */
    positionType?: PositionType;
    /**
    * Permissão necessária para visualizar a página
    */
    permission: Permission;
    /**
    * Os componentes da página
    */
    components: Array<Component>;
    /**
    * Mostrar o barra de ferramentas na página
    */
    includeToolbar?: boolean;
}

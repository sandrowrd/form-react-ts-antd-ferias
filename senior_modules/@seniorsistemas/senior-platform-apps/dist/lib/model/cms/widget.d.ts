import { Permission } from "./permission";
import { PreferredSize } from "./preferredSize";
/**
 * Um componente, plugável a uma página, que provê uma funcionalidade
 */
export interface Widget {
    /**
    * Identificador URI desse widget. Deve seguir o formato widget://&lt;tenant-domain&gt;/&lt;domain&gt;/&lt;service&gt;/&lt;name&gt;
    */
    id: string;
    /**
    * A chave de internacionalização do nome desse widget. Chave associada ao bundle do platform.cms
    */
    name: string;
    /**
    * A chave de internacionalização da descrição desse widget. Chave associada ao bundle do platform.cms
    */
    description?: string;
    /**
     * O recurso necessário para acessar esse widget
     */
    permission?: Permission;
    /**
    * A URL onde esse widget se encontra
    */
    url: string;
    /**
    * A URL onde pode ser obtido o thumbnail desse widget
    */
    thumbnailURL?: string;
    /**
    * As tags associadas a esse widget
    */
    tags?: Array<string>;
    /**
     * O tamanho preferido para melhor visualização
     */
    preferredSize?: PreferredSize;
}

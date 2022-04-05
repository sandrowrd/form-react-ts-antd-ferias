import { ChartType } from "./chartType";
import { PreferredSize } from "./preferredSize";
/**
 * Informações básicas de um analytic
 */
export interface BasicAnalytic {
    /**
    * Identificador do analytics seguindo o padrão: analytic://tenantDomain/identificadorUnico
    */
    id: string;
    /**
    * Nome do widget
    */
    name: string;
    /**
    * Título a ser exibido podendo ser uma chave de tradução no padrão platform.cms.nome
    */
    title?: string;
    /**
    * As tags associadas a esse analytic
    */
    tags?: Array<string>;
    /**
     * O tamanho preferido para melhor visualização
     */
    preferredSize?: PreferredSize;
    /**
     * O tipo do gráfico
     */
    chartType: ChartType;
    /**
    * Criado por
    */
    createdBy: string;
    /**
    * Data de criação
    */
    createdDate: Date;
}

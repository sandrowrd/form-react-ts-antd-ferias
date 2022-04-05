import { Chart } from "./chart";
import { PreferredSize } from "./preferredSize";
import { Property } from "./property";
export interface RegisterAnalyticIn {
    /**
     * Identificador do analytics seguindo o padrão: analytic://tenantDomain/identificadorUnico
     */
    id: string;
    /**
     * Nome do analytic
     */
    name: string;
    /**
     * Título a ser exibido podendo ser uma chave de tradução no padrão platform.cms.nome
     */
    title?: string;
    /**
     * Informações do gráfico do analytic, se não informado será mantido o estado anterior.
     */
    chart: Chart;
    /**
     * O tamanho preferido para melhor visualização
     */
    preferredSize?: PreferredSize;
    /**
     * As tags associadas a esse analytic
     */
    tags?: Array<string>;
    /**
     * Propriedades adicionais do painel.
     * Quando uma propriedade é omitida, a mesma é removida.
     */
    properties?: Array<Property>;
}
export interface RegisterAnalyticOut {
    /**
     * Identificador do analytic criado
     */
    id: string;
}

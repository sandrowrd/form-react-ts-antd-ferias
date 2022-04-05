import { Position } from "./position";
/**
 * Informações de um componente em uma página.
 * Pode ser do tipo: tabsComponent, widgetComponent, urlComponent, analyticComponent
 */
export interface Component {
    /**
    * Altura
    */
    height: number;
    /**
    * Largura
    */
    width: number;
    /**
     * Posição onde inicia a exibição do componente
     */
    position: Position;
}

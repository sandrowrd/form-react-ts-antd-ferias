import { Position } from "./position";
/**
 * Informações de um componente em uma página.
 * Pode ser do tipo: basicTabsComponent, basicWidgetComponent, basicUrlComponent, basicAnalyticComponent
 */
export interface BasicComponent {
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

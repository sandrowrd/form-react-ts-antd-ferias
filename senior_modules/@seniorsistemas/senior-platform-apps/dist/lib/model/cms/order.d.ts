import { FunctionType } from "./functionType";
import { OrderType } from "./orderType";
/**
 * Ordenação
 */
export interface Order {
    /**
    * Nome do schema
    */
    schema: string;
    /**
    * Nome da tabela
    */
    table: string;
    /**
    * Coluna em que será aplicado o filtro
    */
    column: string;
    /**
     * Função aplicada
     */
    _function?: FunctionType;
    /**
     * Ordem
     */
    order: OrderType;
}

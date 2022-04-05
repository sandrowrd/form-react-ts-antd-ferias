/**
 * Um conjunto de resource e ação
 */
export interface Permission {
    /**
    * O URI do resource
    */
    resource: string;
    /**
    * O nome da ação
    */
    action: string;
}

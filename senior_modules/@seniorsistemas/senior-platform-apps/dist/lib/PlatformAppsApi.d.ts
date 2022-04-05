import { SeniorApi } from '@seniorsistemas/senior-core';
import Cms from './resources/cms';
import Workflow from './resources/workflow';
/**
 * Responsável por fornecer acesso a todas as APIs de aplicativos disponibilizadas.
 */
export declare class PlatformAppsApi extends SeniorApi {
    #private;
    /**
     * Retorna o service responsável pela comunicação com o serviço de Workflow
     */
    get workflow(): Workflow;
    /**
     * Retorna o service responsável pela comunicação com o serviço do CMS
     */
    get cms(): Cms;
}

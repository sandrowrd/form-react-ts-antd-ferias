import { RequestClient } from '../base/RequestClient';
import { SeniorApi } from '../SeniorApi';
import { RequestReturn } from '../model';
export declare class Tenant extends RequestClient {
    constructor(seniorApi: SeniorApi);
    getTenantByName(tenantName: string): Promise<RequestReturn>;
    getTenantByDomain(tenantDomain: string): Promise<RequestReturn>;
}

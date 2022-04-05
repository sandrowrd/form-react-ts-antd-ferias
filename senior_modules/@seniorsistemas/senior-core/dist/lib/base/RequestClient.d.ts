import { ClientOptions } from '../model/ClientOptions';
import { SeniorApi } from '../SeniorApi';
import { RequestReturn } from '../model/RequestReturn';
export declare class RequestClient {
    #private;
    seniorApi: SeniorApi;
    domain: string;
    service: string;
    constructor(seniorApi: SeniorApi, domain: string, service: string);
    /**
     * @param {ClientOptions}
     * @returns {RequestReturn<T>}
     */
    request<T, K>(opts?: ClientOptions<K>): Promise<RequestReturn<T>>;
    getUrlPath(path: string, anonymous?: boolean): string;
}

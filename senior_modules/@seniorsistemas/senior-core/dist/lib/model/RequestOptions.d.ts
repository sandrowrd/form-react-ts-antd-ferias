import { HttpMethod } from './HttpMethod';
export declare class RequestOptions<T> {
    timeout: number;
    url: string;
    method: HttpMethod;
    headers: Record<string, string>;
    data: T;
    params: string;
    constructor(timeout?: number, url?: string, method?: HttpMethod, headers?: Record<string, string>, data?: T, params?: string);
    toOptions(): RequestOptions<T> & {
        headers: Record<string, string>;
    };
}

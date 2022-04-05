export declare class Platform {
    #private;
    constructor(envOrUrl: string);
    get anonymousUrl(): string;
    get restUrl(): string;
    getUrlPath(baseUrl: string, ...args: string[]): string;
}

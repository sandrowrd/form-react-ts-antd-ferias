// Type definitions for @seniorsistemas/senior-platform-data
// Project: platform-data
// Definitions by: Tiago Dionesto

export namespace user {
    export function getAuthHeader(): Promise<string>;
    export function getToken(): Promise<any>;
    export function getUserData(useCache?: boolean): Promise<any>;
    export function getRememberMe(): Promise<any>;
}

export namespace service {
    export function getRestUrl(): Promise<string>;
    export function getSoapUrl(): Promise<string>;
    export function getODataUrl(): Promise<string>;
    export function getToken(): Promise<string>;
}

export namespace utils {
    export function getDomain(): Promise<any>;
    export function getSelectedSub(): Promise<any>;
    export function getSelectedCompany(): Promise<any>;
}

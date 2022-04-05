import { Authentication } from './resources/Authentication';
import { Authorization } from './resources/Authorization';
import { Tenant } from './resources/Tenant';
import { Notification } from './resources/Notification';
import { Configuration } from './resources/Configuration';
import { Users } from './resources/Users';
import { Entity } from './base/Entity';
import { Platform } from './base/Platform';
import { ENVIRONMENTS } from './Environments';
import { Blob } from './resources/Blob';
export declare class SeniorApi {
    #private;
    accessToken: string;
    get configuration(): Configuration;
    get authentication(): Authentication;
    get authorization(): Authorization;
    get tenant(): Tenant;
    get notification(): Notification;
    get users(): Users;
    get blob(): Blob;
    setUrl(url: string): void;
    setEnvironment(env: ENVIRONMENTS): void;
    setEnvironment(url: string): void;
    get platform(): Platform;
    getEntity<T>(domain: string, service: string, entityName: string): Entity<T>;
}

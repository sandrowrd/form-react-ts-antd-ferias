import { SeniorApi } from '../SeniorApi';
import { RequestClient } from '../base/RequestClient';
import { RequestReturn } from '../model';
import { LoginDto, LoginMFADto, LoginWithKeyDto, RefreshTokenDto } from '../dto/Authentication';
export declare class Authentication extends RequestClient {
    constructor(seniorApi: SeniorApi);
    login(dto: LoginDto): Promise<RequestReturn>;
    logout(): Promise<RequestReturn>;
    loginMFA(dto: LoginMFADto): Promise<RequestReturn>;
    loginWithKey(dto: LoginWithKeyDto): Promise<RequestReturn>;
    refreshToken(dto: RefreshTokenDto): Promise<RequestReturn>;
}

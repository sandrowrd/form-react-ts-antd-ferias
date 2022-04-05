import { RequestClient } from '../base/RequestClient';
import { SeniorApi } from '../SeniorApi';
import { RequestReturn } from '../model';
import { NotifyUserDto } from '../dto/Notification';
export declare class Notification extends RequestClient {
    constructor(seniorApi: SeniorApi);
    notifyUser(dto: NotifyUserDto): Promise<RequestReturn>;
}

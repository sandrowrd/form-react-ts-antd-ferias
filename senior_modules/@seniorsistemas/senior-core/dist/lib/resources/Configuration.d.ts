import { SeniorApi } from '../SeniorApi';
import { RequestClient } from '../base/RequestClient';
import { RequestReturn } from '../model';
import { BodyCustomPropertyDto, CustomPropertyDto, ServicePropertiesDto } from '../dto/Configuration';
export declare class Configuration extends RequestClient {
    constructor(seniorApi: SeniorApi);
    listServiceProperties(dto: ServicePropertiesDto): Promise<RequestReturn>;
    getCustomProperty(dto: CustomPropertyDto): Promise<RequestReturn>;
    createCustomProperty(dto: BodyCustomPropertyDto): Promise<RequestReturn>;
    updateCustomProperty(dto: BodyCustomPropertyDto): Promise<RequestReturn>;
    deleteCustomProperty(dto: CustomPropertyDto): Promise<RequestReturn>;
}

import { RequestClient } from '../base/RequestClient';
import { SeniorApi } from '../SeniorApi';
import { RequestReturn } from '../model';
import { CheckAccessDto, SaveResourcesDto, CreateRoleDto, AssignUsersDto, UnassignUsersDto, GetRoleFiltersDto } from '../dto/Authorization';
export declare class Authorization extends RequestClient {
    constructor(seniorApi: SeniorApi);
    getResource(uri: string): Promise<RequestReturn>;
    checkAccess(dto: CheckAccessDto): Promise<RequestReturn>;
    saveResources(resources: SaveResourcesDto): Promise<RequestReturn>;
    deleteResources(resourcesURI: string[]): Promise<RequestReturn>;
    createRole(dto: CreateRoleDto): Promise<RequestReturn>;
    getRole(name: string): Promise<RequestReturn>;
    deleteRole(name: string): Promise<RequestReturn>;
    listRoles(searchValue?: string): Promise<RequestReturn>;
    assignUsers(dto: AssignUsersDto): Promise<RequestReturn>;
    unassignUsers(dto: UnassignUsersDto): Promise<RequestReturn>;
    getRoleFilters(dto: GetRoleFiltersDto): Promise<RequestReturn>;
}

import { RequestClient } from '../base/RequestClient';
import { SeniorApi } from '../SeniorApi';
import { RequestReturn } from '../model';
import { ListGroupsDto, ListGroupUsersDto, CreateGroupDto, UpdateGroupDto, CreateUserDto, UpdateUserDto, UpdateGroupUsersDto } from '../dto/Users';
export declare class Users extends RequestClient {
    constructor(seniorApi: SeniorApi);
    listGroups(dto: ListGroupsDto): Promise<RequestReturn>;
    listGroupUsers(dto: ListGroupUsersDto): Promise<RequestReturn>;
    getGroup(id: string): Promise<RequestReturn>;
    getUser(username?: string): Promise<RequestReturn>;
    createGroup(dto: CreateGroupDto): Promise<RequestReturn>;
    updateGroup(dto: UpdateGroupDto): Promise<RequestReturn>;
    createUser(dto: CreateUserDto): Promise<RequestReturn>;
    updateUser(dto: UpdateUserDto): Promise<RequestReturn>;
    deleteUser(username: string): Promise<RequestReturn>;
    updateGroupUsers(dto: UpdateGroupUsersDto): Promise<RequestReturn>;
    deleteGroup(id: string): Promise<RequestReturn>;
}

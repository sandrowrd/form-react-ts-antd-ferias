"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notification = void 0;
const RequestClient_1 = require("../base/RequestClient");
const HttpMethod_1 = require("../model/HttpMethod");
class Notification extends RequestClient_1.RequestClient {
    constructor(seniorApi) {
        super(seniorApi, 'platform', 'notifications');
    }
    notifyUser(dto) {
        for (const key in dto) {
            if (!dto[key]) {
                throw new Error(`O atributo "${key}" é obrigatório`);
            }
        }
        const clientOptions = {
            url: this.getUrlPath('actions/notifyUser'),
            method: HttpMethod_1.HttpMethod.POST,
            data: {
                notificationOrigin: dto.origin,
                notificationKind: dto.kind,
                notificationPriority: dto.priority,
                notificationSubject: dto.subject,
                notificationContent: dto.content,
                sourceDomain: dto.domain,
                notificationClass: dto.notificationClass,
                sourceService: dto.service,
                destinationUsers: dto.users,
            },
            headers: {
                'seniorx.version': 2,
                authorization: this.seniorApi.accessToken,
            },
        };
        return this.request(clientOptions);
    }
}
exports.Notification = Notification;
//# sourceMappingURL=Notification.js.map
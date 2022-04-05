"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceType = void 0;
/**
 * Representa qual tipo de retorno o serviço terá.
 */
var ServiceType;
(function (ServiceType) {
    /**
     * Processos que o usuário pode abrir solicitação
     */
    ServiceType["UserGrantedProcesses"] = "UserGrantedProcesses";
    /**
     * Processos que o usuário pode coordernar
     */
    ServiceType["UserGrantedCordinateProcesses"] = "UserGrantedCordinateProcesses";
    /**
     * Processos que o usuários pode editar
     */
    ServiceType["AllProcesses"] = "AllProcesses";
    /**
     * Processos que o usuário pode editar ou visualizar
     */
    ServiceType["UserGrantedOrEditProcesses"] = "UserGrantedOrEditProcesses";
})(ServiceType = exports.ServiceType || (exports.ServiceType = {}));
//# sourceMappingURL=serviceType.js.map
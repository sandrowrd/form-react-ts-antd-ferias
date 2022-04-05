"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestHistoryType = void 0;
/**
 * Tipo de entrada no histórico de uma solicitação.
 */
var RequestHistoryType;
(function (RequestHistoryType) {
    /**
     * Solicitação iniciada
     */
    RequestHistoryType["STARTED"] = "STARTED";
    /**
     * Inclusão de comentário
     */
    RequestHistoryType["COMMENT"] = "COMMENT";
    /**
     * Anexo incluído
     */
    RequestHistoryType["ATTACHMENT_ADDED"] = "ATTACHMENT_ADDED";
    /**
     * Anexo removido
     */
    RequestHistoryType["ATTACHMENT_REMOVED"] = "ATTACHMENT_REMOVED";
    /**
     * Gestor do processo alterou o responsável
     */
    RequestHistoryType["CHANGE_RESPONSIBLE"] = "CHANGE_RESPONSIBLE";
    /**
     * Solicitação cancelada
     */
    RequestHistoryType["CANCEL_PENDENCY"] = "CANCEL_PENDENCY";
    /**
     * Pendência da solicitação respondida
     */
    RequestHistoryType["RESPONSE_PENDENCY"] = "RESPONSE_PENDENCY";
    /**
     * Solicitação encerrada
     */
    RequestHistoryType["FINISHED"] = "FINISHED";
})(RequestHistoryType = exports.RequestHistoryType || (exports.RequestHistoryType = {}));
//# sourceMappingURL=requestHistoryType.js.map
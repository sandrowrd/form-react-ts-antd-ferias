"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const senior_core_1 = require("@seniorsistemas/senior-core");
/**
 * Service responsável pela comunicação com o serviço de Workflow.
 */
class Workflow extends senior_core_1.RequestClient {
    constructor(seniorApi) {
        super(seniorApi, 'platform', 'workflow');
    }
    /**
     * Inicia uma solicitação no BPM.
     * @param startRequestIn Informações necessárias para iniciar uma solicitação.
     * @returns Promise contendo o retorno da requisição com informações da instância de
     * processo criada ou um objeto de erro em caso de falha.
     */
    startRequest(startRequestIn) {
        const clientOptions = this.buildClientOptions('actions/startRequest', startRequestIn);
        return this.request(clientOptions);
    }
    /**
     * Inicia um processo.
     * @param startProcessIn Informações necessárias para iniciar o processo.
     * @returns Promise contendo o retorno da requisição com informações da instância de
     * processo criada ou um objeto de erro em caso de falha.
     */
    startProcess(startProcessIn) {
        const clientOptions = this.buildClientOptions('actions/startProcess', startProcessIn);
        return this.request(clientOptions);
    }
    /**
     * Cria uma nova representação de um anexo do Workflow.
     * @param newAttachmentIn Informações da nova representação de anexo.
     * @returns Promise contendo o retorno da requisição com informações do anexo criado
     * ou um objeto de erro em caso de falha.
     */
    newAttachment(newAttachmentIn) {
        const clientOptions = this.buildClientOptions('actions/newAttachment', newAttachmentIn);
        return this.request(clientOptions);
    }
    /**
     * Faz commit de um anexo movendo ele da área temporária para permanente.
     * @param commitAttachmentIn Informações do anexo que deseja fazer commit.
     * @returns Promise contendo o retorno da requisição vazia ou um objeto de erro em caso de falha.
     */
    commitAttachment(commitAttachmentIn) {
        const clientOptions = this.buildClientOptions('actions/commitAttachment', commitAttachmentIn);
        return this.request(clientOptions);
    }
    /**
     * Liga determinados anexos a uma instância de processo.
     * @param linkAttachmentsIn Informações da instância do processo e dos anexos que serão relacionados.
     * @returns Promise contendo o retorno da requisição vazia ou um objeto de erro em caso de falha.
     */
    linkAttachments(linkAttachmentsIn) {
        const clientOptions = this.buildClientOptions('actions/linkAttachments', linkAttachmentsIn);
        return this.request(clientOptions);
    }
    /**
     * Obtém os processos ativos que o usuário autenticado tem algum tipo de permissão.
     * @param getProcessesListIn Informações para filtrar os processos recuperados.
     * @returns Promise contendo o retorno da requisição com a lista de processos recuperados
     * ou um objeto de erro em caso de falha.
     */
    getProcessesList(getProcessesListIn) {
        const clientOptions = this.buildClientOptions('queries/getProcessesList', getProcessesListIn);
        return this.request(clientOptions);
    }
    /**
     * Obtém os processos mais utilizados pelo usuário no período especificado ou
     * nos últimos seis meses se não especificado.
     * @param getRankingProcessesIn Informações para filtrar os processos recuperados.
     * @returns Promise contendo o retorno da requisição com a lista de processos recuperados
     * ou um objeto de erro em caso de falha.
     */
    getRankingProcesses(getRankingProcessesIn = {}) {
        const clientOptions = this.buildClientOptions('queries/getRankingProcesses', getRankingProcessesIn);
        return this.request(clientOptions);
    }
    /**
     * Busca um processo do Workflow.
     * @param findProcessIn Informações do processo a ser recuperado.
     * @returns Promise contendo o retorno da requisição com o processo recuperado
     * ou um objeto de erro em caso de falha.
     */
    findProcess(findProcessIn) {
        const clientOptions = this.buildClientOptions('queries/findProcess', findProcessIn);
        return this.request(clientOptions);
    }
    /**
     * Obtém as informações de uma instância específica de um processo (um processo já iniciado).
     * @param getProcessInstanceIn Informações da instância do processo a ser recuperada.
     * @returns Promise contendo o retorno da requisição com a instância do processo recuperada
     * ou um objeto de erro em caso de falha.
     */
    getProcessInstance(getProcessInstanceIn) {
        const clientOptions = this.buildClientOptions('queries/getProcessInstance', getProcessInstanceIn);
        return this.request(clientOptions);
    }
    /**
     * Obtém o resumo das solicitações que atendam aos filtros informados.
     * @param getRequestsResumeIn Informações para filtrar as solicitações recuperadas.
     * @returns Promise contendo o retorno da requisição com a lista de solicitações recuperadas
     * ou um objeto de erro em caso de falha.
     */
    getRequestsResume(getRequestsResumeIn = {}) {
        const clientOptions = this.buildClientOptions('queries/getRequestsResume', getRequestsResumeIn);
        return this.request(clientOptions);
    }
    /**
     * Obtém uma linha do tempo com o registro de ações e observações de uma solicitação.
     * @param getRequestHistoryTimelineIn Informações para recuperar o histórico da solicitação.
     * @returns Promise contendo o retorno da requisição com o histórico da solicitação
     * ou um objeto de erro em caso de falha.
     */
    getRequestHistoryTimeline(getRequestHistoryTimelineIn) {
        const clientOptions = this.buildClientOptions('queries/getRequestHistoryTimeline', getRequestHistoryTimelineIn);
        return this.request(clientOptions);
    }
    /**
     * Lista as solicitações de aplicações terceiras por status.
     * @param getThirdPartyRequestByStatusIn Informações para recuperar as solicitações de terceiros.
     * @returns Promise contendo o retorno da requisição com a lista de solicitações de aplicações
     * terceiras recuperadas ou um objeto de erro em caso de falha.
     */
    getThirdPartyRequestByStatus(getThirdPartyRequestByStatusIn) {
        const clientOptions = this.buildClientOptions('queries/getThirdPartyRequestByStatus', getThirdPartyRequestByStatusIn);
        return this.request(clientOptions);
    }
    /**
     * Obtém os usuários e grupos conforme o tipo (usuário ou grupo).
     * @param getSubjectsIn Informações necessárias para recuperar os usuários por tipo.
     * @returns Promise contendo o retorno da requisição com a lista de usuários recuperados
     * ou um objeto de erro em caso de falha.
     */
    getSubjects(getSubjectsIn) {
        const clientOptions = this.buildClientOptions('queries/getSubjects', getSubjectsIn);
        return this.request(clientOptions);
    }
    /**
     * Obtém um ou mais responsáveis possíveis da próxima tarefa.
     * @param getNextSubjectIn Informações para recuperar os responsáveis possíveis da próxima tarefa.
     * @returns Promise contendo o retorno da requisição com a lista de responsáveis possíveis da
     * próxima tarefa ou um objeto de erro em caso de falha.
     */
    getNextSubject(getNextSubjectIn) {
        const clientOptions = this.buildClientOptions('queries/getNextSubject', getNextSubjectIn);
        return this.request(clientOptions);
    }
    /**
     * Obtém um ou mais responsáveis possíveis da próxima tarefa em relação à tarefa inicial do processo.
     * @param getNextSubjectFromInitialTaskIn Informações para recuperar os responsáveis possíveis da próxima tarefa.
     * @returns Promise contendo o retorno da requisição com a lista de responsáveis possíveis da
     * próxima tarefa ou um objeto de erro em caso de falha.
     */
    getNextSubjectFromInitialTask(getNextSubjectFromInitialTaskIn) {
        const clientOptions = this.buildClientOptions('queries/getNextSubjectFromInitialTask', getNextSubjectFromInitialTaskIn);
        return this.request(clientOptions);
    }
    /**
     * Lista as tarefas que atendam aos filtros informados.
     * @param searchTasksIn Informações para controlar a pesquisa de tarefas.
     * @returns Promise contendo o retorno da requisição com a lista de tarefas recuperadas
     * ou um objeto de erro em caso de falha.
     */
    searchTasks(searchTasksIn = {}) {
        const clientOptions = this.buildClientOptions('queries/searchTasks', searchTasksIn);
        return this.request(clientOptions);
    }
    /**
     * Obtém as pendências do usuário autenticado conforme o tipo.
     * @param getMyPendenciesIn Informações necessárias para recuperar as pendências.
     * @returns Promise contendo o retorno da requisição com a lista de pendências recuperadas
     * ou um objeto de erro em caso de falha.
     */
    getMyPendencies(getMyPendenciesIn = {}) {
        const clientOptions = this.buildClientOptions('queries/getMyPendencies', getMyPendenciesIn);
        return this.request(clientOptions);
    }
    /**
     * Obtém as opções disponíveis para execução de uma pendência.
     * @param getPendencyProcessActionsIn Informações necessárias para recuperar as opções disponíveis.
     * @returns Promise contendo o retorno da requisição com a lista de opçoes disponíveis
     * ou um objeto de erro em caso de falha.
     */
    getPendencyProcessActions(getPendencyProcessActionsIn) {
        const clientOptions = this.buildClientOptions('queries/getPendencyProcessActions', getPendencyProcessActionsIn);
        return this.request(clientOptions);
    }
    /**
     * Atribui uma pendência para outro usuário.
     * @param changePendencyUserIn Informações para realizar a troca do usuário da pendência.
     * @returns Promise contendo o retorno da requisição vazia ou um objeto de erro em caso de falha.
     */
    changePendencyUser(changePendencyUserIn) {
        const clientOptions = this.buildClientOptions('actions/changePendencyUser', changePendencyUserIn);
        return this.request(clientOptions);
    }
    /**
     * Responde uma pendência.
     * @param responsePendencyIn Informações necessárias para responder a pendência.
     * @returns Promise contendo o retorno da requisição vazia ou um objeto de erro em caso de falha.
     */
    responsePendency(responsePendencyIn) {
        const clientOptions = this.buildClientOptions('actions/responsePendency', responsePendencyIn);
        return this.request(clientOptions);
    }
    /**
     * Responde pendências em lote executando uma das ações disponíveis.
     * @param batchPendenciesResponseIn Informações necessárias para responder a lista de pendências.
     * @returns Promise contendo o retorno da requisição vazia ou um objeto de erro em caso de falha.
     */
    batchPendenciesResponse(batchPendenciesResponseIn) {
        const clientOptions = this.buildClientOptions('actions/batchPendenciesResponse', batchPendenciesResponseIn);
        return this.request(clientOptions);
    }
    /**
     * Cancela uma lista de processos que estejam em andamento.
     * @param cancelProcessInstanceIn Informação das instâncias de processos a serem canceladas.
     * @returns Promise contendo o retorno da requisição vazia ou um objeto de erro em caso de falha.
     */
    cancelProcessInstance(cancelProcessInstanceIn) {
        const clientOptions = this.buildClientOptions('actions/cancelProcessInstance', cancelProcessInstanceIn);
        return this.request(clientOptions);
    }
    /**
     * Cria um ClientOptions padrão com o 'method' POST e com o accessToken no header authorization.
     * @param primitiveUrl Url da primitiva no padrão 'queries/{nome_primitiva}'
     * ou 'actions/{nome_primitiva}'.
     * @param payload Objeto enviado no body da requisição.
     * @returns ClientOptions com as informações necessárias para realizar as requisições.
     */
    buildClientOptions(primitiveUrl, payload) {
        return {
            url: this.getUrlPath(primitiveUrl),
            method: senior_core_1.HttpMethod.POST,
            data: payload,
            headers: {
                authorization: this.seniorApi.accessToken,
            },
        };
    }
}
exports.default = Workflow;
//# sourceMappingURL=workflow.js.map
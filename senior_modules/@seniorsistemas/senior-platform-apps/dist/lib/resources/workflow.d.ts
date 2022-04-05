import * as models from '../model/workflow';
import { SeniorApi, RequestClient, RequestReturn } from '@seniorsistemas/senior-core';
/**
 * Service responsável pela comunicação com o serviço de Workflow.
 */
export default class Workflow extends RequestClient {
    constructor(seniorApi: SeniorApi);
    /**
     * Inicia uma solicitação no BPM.
     * @param startRequestIn Informações necessárias para iniciar uma solicitação.
     * @returns Promise contendo o retorno da requisição com informações da instância de
     * processo criada ou um objeto de erro em caso de falha.
     */
    startRequest(startRequestIn: models.StartRequestIn): Promise<RequestReturn<models.StartRequestOut>>;
    /**
     * Inicia um processo.
     * @param startProcessIn Informações necessárias para iniciar o processo.
     * @returns Promise contendo o retorno da requisição com informações da instância de
     * processo criada ou um objeto de erro em caso de falha.
     */
    startProcess(startProcessIn: models.StartProcessIn): Promise<RequestReturn<models.StartProcessOut>>;
    /**
     * Cria uma nova representação de um anexo do Workflow.
     * @param newAttachmentIn Informações da nova representação de anexo.
     * @returns Promise contendo o retorno da requisição com informações do anexo criado
     * ou um objeto de erro em caso de falha.
     */
    newAttachment(newAttachmentIn: models.NewAttachmentIn): Promise<RequestReturn<models.NewAttachmentOut>>;
    /**
     * Faz commit de um anexo movendo ele da área temporária para permanente.
     * @param commitAttachmentIn Informações do anexo que deseja fazer commit.
     * @returns Promise contendo o retorno da requisição vazia ou um objeto de erro em caso de falha.
     */
    commitAttachment(commitAttachmentIn: models.CommitAttachmentIn): Promise<RequestReturn<void>>;
    /**
     * Liga determinados anexos a uma instância de processo.
     * @param linkAttachmentsIn Informações da instância do processo e dos anexos que serão relacionados.
     * @returns Promise contendo o retorno da requisição vazia ou um objeto de erro em caso de falha.
     */
    linkAttachments(linkAttachmentsIn: models.LinkAttachmentsIn): Promise<RequestReturn<void>>;
    /**
     * Obtém os processos ativos que o usuário autenticado tem algum tipo de permissão.
     * @param getProcessesListIn Informações para filtrar os processos recuperados.
     * @returns Promise contendo o retorno da requisição com a lista de processos recuperados
     * ou um objeto de erro em caso de falha.
     */
    getProcessesList(getProcessesListIn: models.GetProcessesListIn): Promise<RequestReturn<models.GetProcessesListOut>>;
    /**
     * Obtém os processos mais utilizados pelo usuário no período especificado ou
     * nos últimos seis meses se não especificado.
     * @param getRankingProcessesIn Informações para filtrar os processos recuperados.
     * @returns Promise contendo o retorno da requisição com a lista de processos recuperados
     * ou um objeto de erro em caso de falha.
     */
    getRankingProcesses(getRankingProcessesIn?: models.GetRankingProcessesIn): Promise<RequestReturn<models.GetRankingProcessesOut>>;
    /**
     * Busca um processo do Workflow.
     * @param findProcessIn Informações do processo a ser recuperado.
     * @returns Promise contendo o retorno da requisição com o processo recuperado
     * ou um objeto de erro em caso de falha.
     */
    findProcess(findProcessIn: models.FindProcessIn): Promise<RequestReturn<models.FindProcessOut>>;
    /**
     * Obtém as informações de uma instância específica de um processo (um processo já iniciado).
     * @param getProcessInstanceIn Informações da instância do processo a ser recuperada.
     * @returns Promise contendo o retorno da requisição com a instância do processo recuperada
     * ou um objeto de erro em caso de falha.
     */
    getProcessInstance(getProcessInstanceIn: models.GetProcessInstanceIn): Promise<RequestReturn<models.GetProcessInstanceOut>>;
    /**
     * Obtém o resumo das solicitações que atendam aos filtros informados.
     * @param getRequestsResumeIn Informações para filtrar as solicitações recuperadas.
     * @returns Promise contendo o retorno da requisição com a lista de solicitações recuperadas
     * ou um objeto de erro em caso de falha.
     */
    getRequestsResume(getRequestsResumeIn?: models.GetRequestsResumeIn): Promise<RequestReturn<models.GetRequestsResumeOut>>;
    /**
     * Obtém uma linha do tempo com o registro de ações e observações de uma solicitação.
     * @param getRequestHistoryTimelineIn Informações para recuperar o histórico da solicitação.
     * @returns Promise contendo o retorno da requisição com o histórico da solicitação
     * ou um objeto de erro em caso de falha.
     */
    getRequestHistoryTimeline(getRequestHistoryTimelineIn: models.GetRequestHistoryTimelineIn): Promise<RequestReturn<models.GetRequestHistoryTimelineOut>>;
    /**
     * Lista as solicitações de aplicações terceiras por status.
     * @param getThirdPartyRequestByStatusIn Informações para recuperar as solicitações de terceiros.
     * @returns Promise contendo o retorno da requisição com a lista de solicitações de aplicações
     * terceiras recuperadas ou um objeto de erro em caso de falha.
     */
    getThirdPartyRequestByStatus(getThirdPartyRequestByStatusIn: models.GetThirdPartyRequestByStatusIn): Promise<RequestReturn<models.GetThirdPartyRequestByStatusOut>>;
    /**
     * Obtém os usuários e grupos conforme o tipo (usuário ou grupo).
     * @param getSubjectsIn Informações necessárias para recuperar os usuários por tipo.
     * @returns Promise contendo o retorno da requisição com a lista de usuários recuperados
     * ou um objeto de erro em caso de falha.
     */
    getSubjects(getSubjectsIn: models.GetSubjectsIn): Promise<RequestReturn<models.GetSubjectsOut>>;
    /**
     * Obtém um ou mais responsáveis possíveis da próxima tarefa.
     * @param getNextSubjectIn Informações para recuperar os responsáveis possíveis da próxima tarefa.
     * @returns Promise contendo o retorno da requisição com a lista de responsáveis possíveis da
     * próxima tarefa ou um objeto de erro em caso de falha.
     */
    getNextSubject(getNextSubjectIn: models.GetNextSubjectIn): Promise<RequestReturn<models.GetNextSubjectOut>>;
    /**
     * Obtém um ou mais responsáveis possíveis da próxima tarefa em relação à tarefa inicial do processo.
     * @param getNextSubjectFromInitialTaskIn Informações para recuperar os responsáveis possíveis da próxima tarefa.
     * @returns Promise contendo o retorno da requisição com a lista de responsáveis possíveis da
     * próxima tarefa ou um objeto de erro em caso de falha.
     */
    getNextSubjectFromInitialTask(getNextSubjectFromInitialTaskIn: models.GetNextSubjectFromInitialTaskIn): Promise<RequestReturn<models.GetNextSubjectFromInitialTaskOut>>;
    /**
     * Lista as tarefas que atendam aos filtros informados.
     * @param searchTasksIn Informações para controlar a pesquisa de tarefas.
     * @returns Promise contendo o retorno da requisição com a lista de tarefas recuperadas
     * ou um objeto de erro em caso de falha.
     */
    searchTasks(searchTasksIn?: models.SearchTasksIn): Promise<RequestReturn<models.SearchTasksOut>>;
    /**
     * Obtém as pendências do usuário autenticado conforme o tipo.
     * @param getMyPendenciesIn Informações necessárias para recuperar as pendências.
     * @returns Promise contendo o retorno da requisição com a lista de pendências recuperadas
     * ou um objeto de erro em caso de falha.
     */
    getMyPendencies(getMyPendenciesIn?: models.GetMyPendenciesIn): Promise<RequestReturn<models.GetMyPendenciesOut>>;
    /**
     * Obtém as opções disponíveis para execução de uma pendência.
     * @param getPendencyProcessActionsIn Informações necessárias para recuperar as opções disponíveis.
     * @returns Promise contendo o retorno da requisição com a lista de opçoes disponíveis
     * ou um objeto de erro em caso de falha.
     */
    getPendencyProcessActions(getPendencyProcessActionsIn: models.GetPendencyProcessActionsIn): Promise<RequestReturn<models.GetPendencyProcessActionsOut>>;
    /**
     * Atribui uma pendência para outro usuário.
     * @param changePendencyUserIn Informações para realizar a troca do usuário da pendência.
     * @returns Promise contendo o retorno da requisição vazia ou um objeto de erro em caso de falha.
     */
    changePendencyUser(changePendencyUserIn: models.ChangePendencyUserIn): Promise<RequestReturn<void>>;
    /**
     * Responde uma pendência.
     * @param responsePendencyIn Informações necessárias para responder a pendência.
     * @returns Promise contendo o retorno da requisição vazia ou um objeto de erro em caso de falha.
     */
    responsePendency(responsePendencyIn: models.ResponsePendencyIn): Promise<RequestReturn<void>>;
    /**
     * Responde pendências em lote executando uma das ações disponíveis.
     * @param batchPendenciesResponseIn Informações necessárias para responder a lista de pendências.
     * @returns Promise contendo o retorno da requisição vazia ou um objeto de erro em caso de falha.
     */
    batchPendenciesResponse(batchPendenciesResponseIn: models.BatchPendenciesResponseIn): Promise<RequestReturn<void>>;
    /**
     * Cancela uma lista de processos que estejam em andamento.
     * @param cancelProcessInstanceIn Informação das instâncias de processos a serem canceladas.
     * @returns Promise contendo o retorno da requisição vazia ou um objeto de erro em caso de falha.
     */
    cancelProcessInstance(cancelProcessInstanceIn: models.CancelProcessInstanceIn): Promise<RequestReturn<void>>;
    /**
     * Cria um ClientOptions padrão com o 'method' POST e com o accessToken no header authorization.
     * @param primitiveUrl Url da primitiva no padrão 'queries/{nome_primitiva}'
     * ou 'actions/{nome_primitiva}'.
     * @param payload Objeto enviado no body da requisição.
     * @returns ClientOptions com as informações necessárias para realizar as requisições.
     */
    private buildClientOptions;
}

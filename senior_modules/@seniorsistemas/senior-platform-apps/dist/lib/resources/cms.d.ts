import * as models from '../model/cms';
import { SeniorApi, RequestClient, RequestReturn } from '@seniorsistemas/senior-core';
/**
 * Service responsável pela comunicação com o serviço de Cms.
 */
export default class Cms extends RequestClient {
    constructor(seniorApi: SeniorApi);
    /**
      * Registra um componente do tipo analytic.
      * @param payload Payload de entrada com informações necessárias para registrar um componente do tipo analytic.
      * @return Payload de saída com o identificador do analytic criado.
      */
    registerAnalytic(payload: models.RegisterAnalyticIn): Promise<RequestReturn<models.RegisterAnalyticOut>>;
    /**
     * Retorna uma lista de todos os componentes do tipo analytics.
     * @param payload Payload de entrada com informações necessárias para listar todos os componentes do tipo analytics.
     * @return Payload de saída com a lista de todos os componentes do tipo analytics.
     */
    listAnalytics(payload: models.ListAnalyticsIn): Promise<RequestReturn<models.ListAnalyticsOut>>;
    /**
     * Consulta informações de um componente do tipo analytic.
     * @param payload Payload de entrada com informações necessárias para consultar um componente do tipo analytic.
     * @return Payload de saída com o analytic recuperado.
     */
    getAnalytic(payload: models.GetAnalyticIn): Promise<RequestReturn<models.GetAnalyticOut>>;
    /**
     * Retorna uma lista de componentes do tipo analytics filtrando por ids.
     * @param payload Payload de entrada com informações necessárias para consultar uma lista de componentes do tipo analytic.
     * @return Payload de saída com a lista de analytics recuperados.
     */
    getAnalytics(payload: models.GetAnalyticsIn): Promise<RequestReturn<models.GetAnalyticsOut>>;
    /**
     * Cria uma copia identica de um analytic com seu conteúdo e gera um novo recurso com o usuário que efetuou a copia como owner.
     * @param payload Payload de entrada com informações necessárias para copiar um analytic e seu conteúdo.
     * @return Payload de saída com o identificador do analytic criado.
     */
    copyAnalytic(payload: models.CopyAnalyticIn): Promise<RequestReturn<models.CopyAnalyticOut>>;
    /**
     * Cancela o registro de um componente do tipo analytic.
     * @param payload Payload de entrada com informações necessárias para cancelar o registro de um componente do tipo analytic.
     * @return Payload de saída com o identificador do analytic com o registro cancelado.
     */
    unregisterAnalytic(payload: models.UnregisterAnalyticIn): Promise<RequestReturn<models.UnregisterAnalyticOut>>;
    /**
     * Retorna a quantidade de analytics que estão utilizando o dataset.
     * @param payload Payload de entrada com informações necessárias para retornar a quantidade de analytics que utilizam o dataset.
     * @return Payload de saída com a quantidade de analytics que utilizam o dataset.
     */
    countAnalyticsDataset(payload: models.CountAnalyticsDatasetIn): Promise<RequestReturn<models.CountAnalyticsDatasetOut>>;
    /**
     * Lista os componentes do tipo analytics padrões de fábrica.
     * @param payload Payload de entrada com informações necessárias para listar os componentes do tipo analytics padrões de fábrica.
     * @return Payload de saída com a lista de componentes do tipo analytics padrões de fábrica.
     */
    listFactoryDefaultAnalytics(payload: models.ListFactoryDefaultAnalyticsIn): Promise<RequestReturn<models.ListFactoryDefaultAnalyticsOut>>;
    /**
     * Salva os filtros alterados do analytic na página para o usuário do contexto.
     * @param payload Payload de entrada com informações necessárias para salvar os filtros alterados do analytic na página para o usuário do contexto.
     */
    setPageAnalyticFilter(payload: models.SetPageAnalyticFilterIn): Promise<RequestReturn<void>>;
    /**
     * Cria ou atualiza uma página.
     * @param payload Payload de entrada com informações necessárias criar ou atualizar uma página.
     * @return Payload de saída com o identificador da página.
     */
    savePage(payload: models.SavePageIn): Promise<RequestReturn<models.SavePageOut>>;
    /**
     * Lista as páginas que o usuário tem acesso para visualizar.
     * @param payload Payload de entrada com informações necessárias para listar as páginas que o usuário tem acesso para visualizar.
     * @return Payload de saída com as páginas que o usuário tem acesso para visualizar.
     */
    listPages(payload: models.ListPagesIn): Promise<RequestReturn<models.ListPagesOut>>;
    /**
     * Permite buscar as informações de uma página.
     * @param payload Payload de entrada com informações necessárias para buscar as informações de uma página.
     * @return Payload de saída com as informações de uma página.
     */
    getPage(payload: models.GetPageIn): Promise<RequestReturn<models.GetPageOut>>;
    /**
     * Retorna todos os recursos utilizados para a exibição de uma página.
     * @param payload Payload de entrada com informações necessárias para consultar os recursos utilizados para a exibição de uma página.
     * @return Payload de saída com os recursos utilizados para a exibição de uma página.
     */
    getPageResources(payload: models.GetPageResourcesIn): Promise<RequestReturn<models.GetPageResourcesOut>>;
    /**
     * Cria uma copia idêntica de uma página com seu conteúdo e gera um novo recurso com o usuário que efetuou a copia como owner.
     * @param payload Payload de entrada com informações necessárias para copiar uma página.
     * @return Payload de saída com o identificador da página criada.
     */
    copyPage(payload: models.CopyPageIn): Promise<RequestReturn<models.CopyPageOut>>;
    /**
     * Permite remover uma página existente.
     * É necessário possuir permissão o recurso customizado na ação Excluir.
     * Se remover uma página em uso por uma landing page, a mesma também é removida.
     * @param payload Payload de entrada com informações necessárias para excluir uma página.
     * @return Payload de saída com o identificador da página excluída.
     */
    removePage(payload: models.RemovePageIn): Promise<RequestReturn<models.RemovePageOut>>;
    /**
     * Lista as páginas padrões de fábrica.
     * @param payload Payload de entrada com informações necessárias para listar as páginas padrões de fábrica.
     * @return Payload de saída com a lista de páginas padrões de fábrica.
     */
    listFactoryDefaultPages(payload: models.ListFactoryDefaultPagesIn): Promise<RequestReturn<models.ListFactoryDefaultPagesOut>>;
    /**
     * Permite adicionar uma página à landing page.
     * Para vincular a página, será necessário ter permissão de visualização para a mesma.
     * Se possuir somente a ação Personalizar, então só poderá criar páginas do tipo PERSONAL.
     * @param payload Payload de entrada com informações necessárias para adicionar uma página à landing page.
     * @return Payload de saída com o identificador da landing page.
     */
    saveLandingPage(payload: models.SaveLandingPageIn): Promise<RequestReturn<models.SaveLandingPageOut>>;
    /**
     * Altera a ordem das landing pages.
     * @param payload Payload de entrada com informações necessárias para alterar a ordem das landing pages.
     */
    saveLandingPagesOrder(payload: models.SaveLandingPagesOrderIn): Promise<RequestReturn<void>>;
    /**
     * Lista as landing pages para administração.
     * Se não possuir permissão na ação Visualizar, então o usuário só poderá consultar as suas landing pages.
     * @param payload Payload de entrada com informações necessárias para listar as landing pages para administração.
     * @return Payload de saída com a lista de landing pages.
     */
    listLandingPages(payload: models.ListLandingPagesIn): Promise<RequestReturn<models.ListLandingPagesOut>>;
    /**
     * Permite buscar as informações de uma landing page com as informações da página vinculada.
     * @param payload Payload de entrada com informações necessárias para buscar uma landing page.
     * @return Payload de saída com a landing page recuperada.
     */
    getLandingPage(payload: models.GetLandingPageIn): Promise<RequestReturn<models.GetLandingPageOut>>;
    /**
     * Lista as landing pages para visualização pelo usuário.
     * @return Payload de saída com a lista de landing pages
     */
    getUserLandingPages(): Promise<RequestReturn<models.GetUserLandingPagesOut>>;
    /**
     * Permite remover uma landing page existente.
     * Se possuir permissão somente na ação Personalizar, então só poderá excluir as landing pages pessoais.
     * @param payload Payload de entrada com informações necessárias para remover uma landing page.
     * @return Payload de saída com o identificador da landing page excluída.
     */
    removeLandingPage(payload: models.RemoveLandingPageIn): Promise<RequestReturn<models.RemoveLandingPageOut>>;
    /**
     * Apaga todas as landing pages personalizadas do usuário corrente ou do usuário informado.
     * @param payload Payload de entrada com informações necessárias para apagar todas as landing pages personalizadas do usuário.
     */
    removePersonalLandingPages(payload: models.RemovePersonalLandingPagesIn): Promise<RequestReturn<void>>;
    /**
    * Apaga todas as landing pages personalizadas de todos os usuários.
    */
    removeAllPersonalLandingPages(): Promise<RequestReturn<void>>;
    /**
     * Lista as landing pages padrões de fábrica.
     * @param payload Payload de entrada com informações necessárias para listar as landing pages padrões de fábrica.
     * @return Payload de saída com a lista das landing pages padrões de fábrica.
     */
    listFactoryDefaultLandingPages(payload: models.ListFactoryDefaultLandingPagesIn): Promise<RequestReturn<models.ListFactoryDefaultLandingPagesOut>>;
    /**
    * Lista todos os widgets do tenant que o usuário possui permissão para utilizar.
    * @param payload Payload de entrada com informações necessárias para listar todos os widgets do tenant que o usuário possui permissão para utilizar.
    * @return Payload de saída com a lista de todos os widgets do tenant que o usuário possui permissão para utilizar.
    */
    listWidgets(payload: models.ListWidgetsIn): Promise<RequestReturn<models.ListWidgetsOut>>;
    /**
    * Exibe as informações do widget buscando através do seu identificador.
    * @param payload Payload de entrada com informações necessárias para exibir as informações do widget.
    * @return Payload de saída com o widget recuperado.
    */
    getWidget(payload: models.GetWidgetIn): Promise<RequestReturn<models.Widget>>;
    /**
     * Lista os componentes do tipo widgets padrões de fábrica.
     * @param payload Payload de entrada com informações necessárias para listar os componentes do tipo widgets padrões de fábrica.
     * @return Payload de saída com a lista de componentes do tipo widgets padrões de fábrica.
     */
    listFactoryDefaultWidgets(payload: models.ListFactoryDefaultWidgetsIn): Promise<RequestReturn<models.ListFactoryDefaultWidgetsOut>>;
    /**
   * Cria um ClientOptions padrão com o 'method' POST e com o accessToken no header authorization.
   * @param primitiveUrl Url da primitiva no padrão 'queries/{nome_primitiva}' ou 'actions/{nome_primitiva}'.
   * @param payload Objeto enviado no body da requisição.
   * @returns ClientOptions com as informações necessárias para realizar as requisições.
   */
    private buildClientOptions;
}

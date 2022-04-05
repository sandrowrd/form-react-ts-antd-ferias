# {version}
[{date}]

### Quebras de compatibilidade
* N/A.

### Novas funcionalidades
* N/A.

### Melhorias
* N/A.

### Correções
* N/A.

### Alterações na base de dados
* N/A.

### Alteração de dependências
* N/A.

# 5.0.0
[06/10/2021]

### Quebras de compatibilidade
* [SRE-9011](http://jira.senior.com.br/browse/SRE-9011) - Adicionado o parâmetro opcional `useCache` na função `getUserData`. O valor padrão será `true`. 

**NOTA**: O comportamento padrão será de utilizar o cache da resposta do `getUser` que terá o tempo de vida padrão de `1800000 milissegundos (30 minutos)`. Caso exista o item `SENIOR_USER_INFO_TTL` no localStorage, o ttl será pego de lá. Para não utilizar o cache, basta informar o parâmetro useCache com o valor `false`. É importante ressaltar que essas informações poderão estar desatualizadas em caso de alguma atualização do usuário ser feita no sistema, sendo necessário relogar.

# 4.0.0
[16/07/2021]

### Quebras de compatibilidade
* [SRE-8967](http://jira.senior.com.br/browse/SRE-8967) - Alteração na função `getUserData` para chamar a versão 8 da API `getUser`. Essa versão passa a trazer a URL da foto do usuário armazenada no blob-service ao invés da foto em base64.

### Alteração de dependências
* user: UNKNOWN > 8.0.0

# 3.1.0
[25/08/2020]

### Melhorias
* [ARQPTF-3193](http://jira.senior.com.br/browse/ARQPTF-3193) - Adicionado mensagem mais informativa ao erro exibido no console ao não possuir token inicializado.
Também adicionado uma sugestão de ajuste no código fonte a ser seguido no README.md.

# 3.0.0
[03/09/2019]

### Quebras de compatibilidade

*   Alterado a chamada da api de `obterMeusDados` para `getUser`, no qual será necessário alterar a chamada das propriedades do objeto retornado pela função `getUserData`:
    
    ```
    Retorno:
    antes usuarios/userManager/queries/obterMeusDados:
    {
        "id": "8200e3d5-b534-44b8-bba9-f0892bfac1e2",
        "nome": "admin",
        "nomeCompleto": "gustavo merini",
        "descricao": "Tenant Admin",
        "email": "admin@danceteriamerini.com.br",
        "localidade": "pt-BR",
        "tenantDomain": "danceteriamerini.com.br",
        "tenantName": "danceteriamerini",
        "tenantLocale": "pt-BR",
        "bloqueado": false
    }
    Retorno:
    agora platform/user/queries/getUser:
    {
        "changePassword": false,
        "properties": [],
        "admin": true,
        "allowedToChangePassword": true,
        "id": "8200e3d5-b534-44b8-bba9-f0892bfac1e2",
        "username": "admin",
        "fullName": "gustavo merini",
        "description": "Tenant Admin",
        "email": "admin@danceteriamerini.com.br",
        "locale": "pt-BR",
        "tenantDomain": "danceteriamerini.com.br",
        "tenantName": "danceteriamerini",
        "tenantLocale": "pt-BR",
        "blocked": false,
        "authenticationType": "G7",
        "_discriminator": "completeUser"
    }
    ```


# 2.0.4

[28/02/2019]

*   Correção para retirar a barra extra na url obterMeusDados do metodo getUserData().

# 2.0.3

[27/02/2019]

### Correções de erro

*   [ARQPDT-998](http://jira.senior.com.br/browse/ARQPDT-998) - Correção para pegar as informações de usuário autenticado via postMessage em serviços fora do domínio da senior.

# 2.0.2

[05/06/2018]

### Correções de erro

*   Adicionada verificação antes de obter credenciais da plataforma pelo título da janela, evitando erros quando as credenciais não estão presentes e há título

# 2.0.1

[30/05/2018]

### Correções de erro

*   [ARQPDT-514](http://jira.senior.com.br/browse/ARQPDT-514) - Removidos todos os async/await do código pois causavam problema de detecção de mudanças em projetos Angular

### Alteração de dependências

*   babel-runtime: removido (não é mais necessário)

# 2.0.0

[30/05/2018]

### Correções de erro

*   [ARQPDT-514](http://jira.senior.com.br/browse/ARQPDT-514) - Alterado babel-polyfill, que não deveria ser utilizado por bibliotecas, por babel-runtime. Essa alteração corrige problemas de compilação e testes em projetos Angular.

### Alteração de dependências

*   babel-runtime: 6.26.0
*   babel-polyfill: removido

### Quebras de compatibilidade

*   Remoção da biblioteca babel-polyfill

# 1.1.3

06/04/2018

### Melhorias

*   Passa a decidir dinamicamente de onde obter os dados da plataforma, ao invés de manter a forma determinada na inicialização

# 1.1.2

06/04/2018

### Melhorias

*   Exibe alerta no console quando espera pela mensagem entre iFrames

### Correções de erro

*   Passa a propagar corretamente o erro quando não consegue obter os dados

# 1.1.1

23/03/2018

### Correções de erro

*   Correção de compartilhamento de credenciais em mensagem entre iFrames, adição de um timeout para a espera pela mensagem

# 1.1.0

07/02/2018

### Novos recursos

*   Adequação para suporte a compartilhamento de credenciais na abertura de nova aba e IFrame

# 1.0.2

19/01/2018

### Correções de erro

*   Corrigidas as declarações de tipos Typescript

# 1.0.1

11/12/2017

### Correções de erro

*   [ARQPDT-202](http://jira.senior.com.br/browse/ARQPDT-202) - Corrigida compatibilidade com IE10+

# 1.0.0

07/11/2017

### Novos recursos

*   [APG-3768](http://jira.senior.com.br/browse/APG-3768) - Adicionado arquivo de declarações Typescript
*   Configurado Webpack
*   Configurado CI

### Melhorias

*   Melhorias diversas

# 0.0.1

29/09/2017

### Novos recursos
*   Versão inicial
*   Versão inicial

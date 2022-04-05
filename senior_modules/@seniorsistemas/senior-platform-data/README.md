# senior-platform-data

API JavaScript para retornar valores dos usuários como token, url do serviço, dados do usuário, domínio, entre outros.

### **Dependências**

- NodeJS
- NPM

### **Utilização da API**

Para utilizá-la no local desejado basta fazer o import:

 `import { user } from "@seniorsistemas/senior-platform-data";`

E após isso, chamar as funções, como por exemplo:

`user.getToken().then(v => {console.log(v)});`

Todas as funções são assíncronas, tendo em mente que no futuro estas informações podem ser armazenadas em outro lugar ao invés de nos cookies.

### **Funções disponíveis**
* `user`
    * `getAuthHeader()` - Retorna o header de autorização para ser utilizado nas requisições
    * `getToken()` - Retorna o token de acesso
    * `getUserData()` - Retorna os dados do usuário
    * `getRememberMe()` - Retorna o token de atualização e o tempo de expiração (Funciona apenas para servicos executados no dominio senior.com.br)

* `service`
    * `getRestUrl()` - Retorna a url do serviço mais o sufixo rest
    * `getSoapUrl()` - Retorna a url do serviço mais o sufixo soap (Funciona apenas para servicos executados no dominio senior.com.br)
    * `getOdataUrl()` - Retorna a url do serviço mais o sufixo odata (Funciona apenas para servicos executados no dominio senior.com.br)

* `utils`
    * `getDomain()` - Retorna o domínio (Funciona apenas para servicos executados no dominio senior.com.br)
    * `getSelectedSub()` - Retorna o sub ativo (Funciona apenas para servicos executados no dominio senior.com.br)
    * `getSelectedCompany()` - Retorna a empresa ativa (Funciona apenas para servicos executados no dominio senior.com.br)

### **Integração para passagem credenciais na amertura de nova aba ou iframe**

O componente carrega automaticamente o token e servicesUrl à partir dos parâmetros passados na abertura pelo menu.


### FAQ
Estou recebendo erro no console com a seguinte mensagem: 
"It was not possible to retrieve the Senior Platform data. Try to get a token on initialization.". O que devo fazer para funcionar?
Abaixo um exemplo para inicializar o token:
```
import { Injectable } from '@angular/core';
import { user } from "@seniorsistemas/senior-platform-data";
import { Observable, of } from 'rxjs';
 
@Injectable()
export class AppService {
  private token = null;
  constructor() {
    //Inicializa o token da propriedade corrente.  
    user.getToken().then(data => this.token = data.token);
  }
  getUser(): Observable<any> {
    if(this.token) {
      return of(this.token);
    } else {
      throw new Error('Error getting token');
    }
  }
}
```
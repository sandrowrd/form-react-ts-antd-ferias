import { QueryRequest } from "./queryRequest";

export function sendRequest_old() {
  const mountUrl: QueryRequest = new QueryRequest();

  mountUrl.setConsult("consulta_solicitante_CVC");
  mountUrl.setUrl("localhost:8080");
  mountUrl.setTypeReq(1);

  const xhttp = new XMLHttpRequest();

  xhttp.open("GET", mountUrl.createUrlRest(), false);
  xhttp.send();
  let responseArray = JSON.parse(xhttp.responseText);
  //console.log(responseArray[3]);
  return responseArray[1];
}

export function sendRequest(reqType, service, port, params?) {
  const mountUrl: QueryRequest = new QueryRequest();

  const username = "senior";
  const password = "senior";

  mountUrl.setService(service);
  mountUrl.setPort(port);
  mountUrl.setTypeReq(2);

  const xhttp = new XMLHttpRequest();
  const param = params;

  xhttp.open(reqType, mountUrl.createUrlRest(), false);
  xhttp.setRequestHeader(
    "Authorization",
    "Basic " + window.btoa(username + ":" + password)
  );
  xhttp.setRequestHeader("Accept", "application/json;charset=utf-8");
  xhttp.setRequestHeader("user", "senior");

  xhttp.send(JSON.stringify(param));
  let responseArray = JSON.parse(xhttp.responseText);

  //console.log(responseArray);
  return responseArray;
}

export function requestCauseDismissal() {
  const mountUrl: QueryRequest = new QueryRequest();
  mountUrl.setConsult("causa_demissao");
  mountUrl.setUrl("localhost:8080");
  mountUrl.setTypeReq(1);

  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", mountUrl.createUrlRest(), false);
  xhttp.send();
  let responseArray = JSON.parse(xhttp.responseText);
  //console.log(responseArray);
  return responseArray;
}

export function sendRequestWeb() {
  const mountUrl: QueryRequest = new QueryRequest();
  const url =
    "http://localhost:8080/SXI/G5Rest?server=http://localhost:8080&module=rubi&service=br.com.cvc.wf.rescisao&port=GetCausaRecisao&DATASOURCEATTRNAME=CausaDemissao&DEBUG=true";

  const username = "senior";
  const password = "senior";

  mountUrl.setUrl("localhost:8080");
  mountUrl.setServer("http://localhost:8080/");
  mountUrl.setModule("rubi");
  mountUrl.setService("Altera.Feriado");
  mountUrl.setPort("TesteWeb");

  const xhttp = new XMLHttpRequest();
  const param = {
    tipoMens: "Dia",
  };

  xhttp.open("POST", url, false);
  xhttp.setRequestHeader(
    "Authorization",
    "Basic " + window.btoa(username + ":" + password)
  );
  xhttp.setRequestHeader("Accept", "application/json;charset=utf-8");
  xhttp.setRequestHeader("user", "senior");

  xhttp.send(JSON.stringify(param));
  let responseArray = JSON.parse(xhttp.responseText);

  //console.log(responseArray);
  return responseArray.causaDemissao;
}

export function SendRequestWebService(reqType, service, port, params?) {
  /* const url = "http://localhost:8080/SXI/GenericConsult?consult=causa_demissao";
  const url2 =
    "http://localhost:8080/SXI/G5Rest?server=http://localhost:8080&module=rubi&service=br.com.cvc.wf.rescisao&port=GetCausaRecisao&DATASOURCEATTRNAME=CausaDemissao&DEBUG=true";

  const url3 =
    "http://localhost:8080/SXI/G5Rest?server=http://localhost:8080/&module=rubi&service=Altera.Feriado&port=TesteWeb";
 */

  const mountUrl: QueryRequest = new QueryRequest();
  const username = "senior";
  const password = "senior";

  mountUrl.setService(service);
  mountUrl.setPort(port);
  mountUrl.setTypeReq(2);

  let headers = new Headers();

  headers.append("Accept", "application/json;charset=utf-8");
  headers.append(
    "Authorization",
    "Basic " + window.btoa(username + ":" + password)
  );
  headers.append("user", "senior");

  let response = fetch(mountUrl.createUrlRest(), {
    mode: "cors",
    method: "post",
    headers: headers,
    body: JSON.stringify(params),
  }).then((resp) => {
    let promise = new Promise((res, rej) => {
      let option = resp.json().then((jso) => {
        return jso;
      });
      if (resp.status === 200) {
        res(option);
      } else {
        rej("erro");
      }
    });
    /* Retorna o valor dentro da [PromiseResult] */
    return promise;
  });

  //console.log(response);
  return response;
}

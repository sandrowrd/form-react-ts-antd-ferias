export class QueryRequest {
  private typeReq = 2;
  private url = "localhost:8080";
  private server = "http://localhost:8080/";
  private module = "rubi";
  private service = "";
  private port = "";
  private dataSource? = "";
  private debug? = false;
  private consult? = "";

  public setTypeReq(type: number) {
    this.typeReq = type;
  }

  public setUrl(url: string) {
    this.url = url;
  }

  public setServer(server: string) {
    this.server = server;
  }

  public setModule(module: string) {
    this.module = module;
  }

  public setService(service: string) {
    this.service = service;
  }

  public setPort(port: string) {
    this.port = port;
  }

  public setDataSource(dataSource: string) {
    this.dataSource = dataSource;
  }

  public setDebug(debug: boolean) {
    this.debug = debug;
  }

  public setConsult(consult: string) {
    this.consult = consult;
  }

  //1-Genérica 2-Não Genérica
  public createUrlRest() {
    if (this.typeReq === 1) {
      return (
        "http://" + this.url + "/SXI/GenericConsult?consult=" + this.consult
      );
    } else if (this.typeReq === 2 && this.dataSource && this.debug === true) {
      return (
        "http://" +
        this.url +
        "/SXI/G5Rest?server=" +
        this.server +
        "&module=" +
        this.module +
        "&service=" +
        this.service +
        "&port=" +
        this.port +
        "&DATASOURCEATTRNAME=" +
        this.dataSource +
        "&DEBUG=true"
      );
    } else if (this.typeReq === 2 && this.dataSource) {
      return (
        "http://" +
        this.url +
        "/SXI/G5Rest?server=" +
        this.server +
        "&module=" +
        this.module +
        "&service=" +
        this.service +
        "&port=" +
        this.port +
        "&DATASOURCEATTRNAME=" +
        this.dataSource
      );
    } else
      return (
        "http://" +
        this.url +
        "/SXI/G5Rest?server=" +
        this.server +
        "&module=" +
        this.module +
        "&service=" +
        this.service +
        "&port=" +
        this.port
      );
  }
}

import { Link } from "react-router-dom";

export default function PageLinks() {
  return (
    <>
      <Link to="/SolicitacaoGestor">Solicitação Feita Pelo Gestor</Link>
      <br />
      <Link to="/SolicitacaoPropria">Solicitação Própria</Link>
      <br />
      <Link to="/SolicitacaoColaborador">
        Solicitação Feita para o Colaborador
      </Link>
      <br />
      <Link to="/FormCompleto">Formulário Completo</Link>
      <br />
    </>
  );
}

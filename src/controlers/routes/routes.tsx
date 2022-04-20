import React from "react";
import { Route, BrowserRouter, Routes, HashRouter } from "react-router-dom";
//import FormPageMovimentation from "../../layoutPage/FormPageMovimentation";
//import FormPageRescission from "../../layoutPage/FormPageRescission";
import FormPageVacation from "../../layoutPage/FormPageVacation";
import FormOwnSolicitation from "../../layoutPage/FormOwnSolicitation";
import FormEmployeeSolicitation from "../../layoutPage/FormEmployeeSolicitation";
import FormManagerSolicitation from "../../layoutPage/FormManagerSolicitation";
import PageLinks from "../../layoutPage/PageLinks";

function RoutePages() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<PageLinks />} />
        <Route path="/FormCompleto" element={<FormPageVacation />} />
        <Route path="/SolicitacaoPropria" element={<FormOwnSolicitation />} />
        <Route
          path="/SolicitacaoGestor"
          element={<FormManagerSolicitation />}
        />
        <Route
          path="/SolicitacaoColaborador"
          element={<FormEmployeeSolicitation />}
        />
      </Routes>
    </HashRouter>
  );
}

export default RoutePages;

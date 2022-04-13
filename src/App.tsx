import "./App.css";
import FormPageVacation from "./layoutPage/FormPageVacation";
import { WorkflowService } from "./core/workflow.service";

let nome;
const DataWorkflow = new WorkflowService();

const DataUser = DataWorkflow.requestUserData();
const Plataform = DataWorkflow.requestPlatformData().then(
  (data) => data.serviceUrl
);

const Variavel = DataWorkflow.requestProcessVariables();
const token = DataWorkflow.requestPlatformData().then((data) => data.token);
DataUser.then((response) => {
  nome = response.fullname;
  console.log(nome);
  console.log(typeof nome);
});

console.log("Dados Usuário 04: ");
console.log(DataUser);
console.log(Plataform);
console.log(Variavel);
console.log(token);
console.log(nome);

function App() {
  return (
    <div className="App">
      <FormPageVacation />
    </div>
  );
}

export default App;

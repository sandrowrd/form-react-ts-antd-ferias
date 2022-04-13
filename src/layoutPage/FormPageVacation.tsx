import ContainerIdentify from "../containers/containersCommonFile/containerIdentify";
import ContainerEmployee from "../containers/containersCommonFile/containeEmployee";
import ContainerInfoVacation from "../containers/containersVacation/containerInfoVacation";
import ContainerVacation from "../containers/containersVacation/containerVacation";
import ContainerObservation from "../containers/containersCommonFile/containerObservation";
import { Form } from "antd";
import moment from "moment";
import { useState } from "react";

export default function FormPageVacation() {
  const [showRow, setShowRow] = useState({
    show01: true,
    show02: true,
  });

  const [employee, setEmployee] = useState(true);

  return (
    <>
      <div>
        <Form.Provider
          onFormFinish={(name, { values, forms }) => {
            console.log(name);
            console.log(values);
            console.log(values.who);
            console.log(forms);
            //const { formVacation } = forms;
            if (name === "formIdentify" && values.who === "employeeVacation") {
              setEmployee(false);
            } else {
              setEmployee(true);
            }
          }}
        >
          <ContainerIdentify />
          <span hidden={employee}>
            <ContainerEmployee />
          </span>
        </Form.Provider>
        <Form.Provider
          onFormFinish={(name, { values, forms }) => {
            console.log(name);
            console.log(values);
            console.log(forms);
            const { formVacation } = forms;
            if (values.tableInfo.status === "Definido") {
              for (let i = 0; i < values.tableInfo.part; i++) {
                formVacation.setFields([
                  {
                    name: "dateBeginVacation0" + (i + 1),
                    value: moment(
                      values.tableInfo.children[i].dateIn,
                      "DD/MM/YYYY"
                    ),
                  },
                  {
                    name: "daysVacation0" + (i + 1),
                    value: values.tableInfo.children[i].day,
                  },
                  {
                    name: "dateEndVacation0" + (i + 1),
                    value: values.tableInfo.children[i].dateEnd,
                  },
                ]);
              }
            } else if (values.tableInfo.status === "Aberto") {
              formVacation.setFields([
                {
                  name: "vacationDays",
                  value: values.tableInfo.day,
                },
                {
                  name: "daysVacation01",
                  value: values.tableInfo.day,
                },
                {
                  name: "periodEnd",
                  value: values.tableInfo.perAqEnd,
                },
                {
                  name: "abono",
                  value: 0,
                },
              ]);
            }
            formVacation.setFields([
              {
                name: "dateBeginVacation01",
                value: moment(
                  values.tableInfo.children[0].dateIn,
                  "DD/MM/YYYY"
                ),
              },
              {
                name: "periodEnd",
                value: values.tableInfo.perAqEnd,
              },
              {
                name: "daysVacation01",
                value: values.tableInfo.children[0].day,
              },
              {
                name: "dateEndVacation01",
                value: values.tableInfo.children[0].dateEnd,
              },
              {
                name: "dateBeginVacation02",
                value: moment(
                  values.tableInfo.children[1].dateIn,
                  "DD/MM/YYYY"
                ),
              },
              {
                name: "daysVacation02",
                value: values.tableInfo.children[1].day,
              },
              {
                name: "dateEndVacation02",
                value: values.tableInfo.children[1].dateEnd,
              },
              {
                name: "dateBeginVacation03",
                value: moment(
                  values.tableInfo.children[2].dateIn,
                  "DD/MM/YYYY"
                ),
              },
              {
                name: "daysVacation03",
                value: values.tableInfo.children[2].day,
              },
              {
                name: "dateEndVacation03",
                value: values.tableInfo.children[2].dateEnd,
              },
              { name: "vacationDays", value: values.tableInfo.day },
            ]);
            if (values.tableInfo.part === "2") {
              setShowRow({
                show01: false,
                show02: true,
              });
            } else if (values.tableInfo.part === "3") {
              setShowRow({
                show01: false,
                show02: false,
              });
            }
          }}
        >
          <ContainerInfoVacation />
          <ContainerVacation ena={showRow} set={setShowRow} />
        </Form.Provider>
        <ContainerObservation />
      </div>
    </>
  );
}

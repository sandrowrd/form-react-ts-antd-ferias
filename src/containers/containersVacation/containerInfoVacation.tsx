import { Form, Table } from "antd";
import { EditOutlined } from "@ant-design/icons";
import "../containersCommonFile/container.css";
import { useState } from "react";
import { FieldData } from "../containersCommonFile/containerInterface";

export default function ContainerInfoVacation() {
  const [fields, setFields] = useState<FieldData[]>([
    { name: "who", value: "" },
    { name: "tableInfo", value: {} },
  ]);

  interface iTable {
    rowSelection?: {} | undefined;
    scroll?: {} | undefined;
    hasData?: boolean;
    pagination?: {} | any;
  }

  const [tableConfig, setTableConfig] = useState<iTable>({
    hasData: true,
    rowSelection: undefined,
  });

  const convertStringDate = (dateString) => {
    const strDate = dateString;
    const dateStr =
      strDate.substring(6, 10) +
      "," +
      strDate.substring(3, 5) +
      "," +
      strDate.substring(0, 2);
    const dateRef = new Date(dateStr);
    //console.log(dateStr);
    //console.log(dateRef);

    return dateRef;
  };

  const data = [
    {
      key: 1,
      status: "Definido",
      perAqIn: "01/04/2022",
      perAqEnd: "30/04/2022",
      dateIn: "",
      dateEnd: "",
      day: "30",
      salary13: "",
      allowence: "",
      part: "3",
      children: [
        {
          key: 11,
          part: "1",
          dateIn: "04/07/2022",
          dateEnd: "19/07/2022",
          salary13: "Sim",
          allowence: "",
          day: "15",
        },
        {
          key: 12,
          part: "2",
          dateIn: "01/08/2022",
          dateEnd: "11/08/2022",
          day: "10",
        },
        {
          key: 13,
          part: "3",
          dateIn: "06/09/2022",
          dateEnd: "11/09/2022",
          salary13: "",
          allowence: "Sim",
          day: "5",
        },
      ],
    },
    {
      key: 1,
      status: "Aberto",
      perAqIn: "01/04/2022",
      perAqEnd: "30/04/2022",
      dateIn: "",
      dateEnd: "",
      day: "30",
      salary13: "",
      allowence: "",
      part: "",
    },
  ];

  const columns = [
    {
      title: "Situação",
      dataIndex: "status",
      key: "key",
    },
    {
      title: "Período Aquisitivo Inicial",
      dataIndex: "perAqIn",
      key: "key",
    },
    {
      title: "Período Aquisitivo Final",
      dataIndex: "perAqEnd",
      key: "key",
    },
    {
      title: "Data Inicio",
      dataIndex: "dateIn",
      key: "key",
    },
    {
      title: "Data Fim",
      dataIndex: "dateEnd",
      key: "key",
    },
    {
      title: "Dias",
      dataIndex: "day",
      key: "key",
    },
    {
      title: "13° Salário",
      dataIndex: "salary13",
      key: "key",
    },
    {
      title: "Abono",
      dataIndex: "allowence",
      key: "key",
    },

    {
      title: "Parcelas",
      dataIndex: "part",
      key: "key",
    },
    {
      title: "Ação",
      key: "action",
      render: (name) => {
        const dateNow = new Date(Date.now());
        const dateBegin = convertStringDate(name.perAqIn);
        const dateEnd = convertStringDate(name.perAqEnd);
        //console.log(dateNow > dateBegin && dateNow < dateEnd);
        //console.log(dateBegin);
        //console.log(dateEnd);
        //console.log(name.part > 1);

        if (dateNow > dateBegin && dateNow < dateEnd) {
          if (name.part > 1) {
            let dateRef = convertStringDate(name.children[0].dateIn);

            dateRef.setDate(dateRef.getDate() - 60);
            //console.log(name.children[0].dateIn);
            if (dateNow < dateRef) {
              return (
                <a>
                  <EditOutlined />
                </a>
              );
            } else {
              return <a></a>;
            }
          } else if (name.part === 1) {
            //console.log("teste");
            let dateRef = convertStringDate(name.dateIn);
            dateRef.setDate(dateRef.getDate() - 60);
            if (dateNow < dateRef) {
              return (
                <a>
                  <EditOutlined />
                </a>
              );
            } else {
              return;
              <a></a>;
            }
          } else {
            return (
              <a>
                <EditOutlined />
              </a>
            );
          }
        }
      },
    },
  ];

  const [form] = Form.useForm();

  const onRowSelection = (record, index) => {
    //console.log(index);
    //console.log(record);
    //console.log(record.part);
    form.setFieldsValue({ tableInfo: record });
    form.submit();
  };

  return (
    <>
      <fieldset>
        <legend>Informações de Férias</legend>
        <Form
          name="formInfoVacation"
          labelAlign="left"
          form={form}
          onFieldsChange={(_, allfields) => {
            setFields(allfields);
            //console.log(allfields);
          }}
        >
          <Form.Item name={"tableInfo"}></Form.Item>

          <Table
            {...tableConfig}
            pagination={false}
            dataSource={data}
            columns={columns}
            onRow={(record, index) => {
              return {
                onClick: (event) => onRowSelection(record, index),
              };
            }}
          />
        </Form>
      </fieldset>
    </>
  );
}

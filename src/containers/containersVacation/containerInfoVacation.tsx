import { Form, Row, Col, Space, Table, Radio } from "antd";
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

  const data = [
    {
      key: 1,
      status: "Definido",
      dateIn: "",
      dateEnd: "",
      day: "30",
      salary13: "Sim",
      allowence: "Sim",
      advance: "Sim",
      part: "3",
      children: [
        {
          key: 11,
          part: "1",
          dateIn: "12/05/2022",
          dateEnd: "27/05/2022",
          day: "15",
        },
        {
          key: 12,
          part: "2",
          dateIn: "11/07/2022",
          dateEnd: "21/07/2022",
          day: "10",
        },
        {
          key: 13,
          part: "3",
          dateIn: "06/09/2022",
          dateEnd: "11/09/2022",
          day: "5",
        },
      ],
    },
    {
      key: 1,
      status: "Aberto",
      dateIn: "",
      dateEnd: "",
      day: "30",
      salary13: "",
      allowence: "",
      advance: "",
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
      title: "13 Salário",
      dataIndex: "salary13",
      key: "key",
    },
    {
      title: "abono",
      dataIndex: "allowence",
      key: "key",
    },
    {
      title: "Adiantamento",
      dataIndex: "advance",
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
      render: (name) =>
        name.status === "Definido" || name.status === "Aberto" ? (
          <a>
            <EditOutlined />
          </a>
        ) : (
          <a></a>
        ),
    },
  ];

  const [form] = Form.useForm();

  const onRowSelection = (record, index) => {
    console.log(index);
    console.log(record);
    console.log(record.part);
    form.setFieldsValue({ tableInfo: record });
    form.submit();
  };

  return (
    <>
      <fieldset>
        <legend>Informações de Férias</legend>
        <Form
          name="formInfoVacation"
          labelCol={{ span: 12 }}
          wrapperCol={{ span: 13 }}
          labelAlign="left"
          form={form}
          onFieldsChange={(_, allfields) => {
            setFields(allfields);
            console.log(allfields);
          }}
        >
          <Row gutter={20}>
            <Col span={24}>
              <Form.Item
                name={"who"}
                label={"Solicitação de Férias"}
                labelAlign="left"
              >
                <Radio.Group defaultValue="ownVacation" buttonStyle="solid">
                  <Radio.Button value={"ownVacation"}>Própria</Radio.Button>
                  <Radio.Button
                    value={"employeeVacation"}
                    style={{ marginLeft: "200px" }}
                  >
                    Colaborador
                  </Radio.Button>
                </Radio.Group>
              </Form.Item>
            </Col>
          </Row>
          <Form.Item name={"tableInfo"}></Form.Item>
          <Space>
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
          </Space>
        </Form>
      </fieldset>
    </>
  );
}

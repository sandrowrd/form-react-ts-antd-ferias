import { Input, Form, Row, Col, Radio } from "antd";
import "./container.css";
import { useState } from "react";
import { FieldData } from "./containerInterface";

export default function ContainerIdentify() {
  const [fields, setFields] = useState<FieldData[]>([
    { name: "fullname", value: "" },
    { name: "registry", value: "" },
    { name: "subsidiary", value: "" },
    { name: "office", value: "" },
    { name: "boss", value: "" },
    { name: "who", value: "" },
  ]);

  const [form] = Form.useForm();

  const onChangeRadio = (value) => {
    //console.log(value.target.value);
    form.setFieldsValue({ who: value.target.value });
    form.submit();
  };
  return (
    <>
      <fieldset>
        <legend>Identificação do Solicitante</legend>
        <Form
          name="formIdentify"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 12 }}
          labelAlign="left"
          fields={fields}
          form={form}
          onFieldsChange={(_, allFields) => {}}
        >
          <Row gutter={50}>
            <Col span={12}>
              <Form.Item name={"fullname"} label={"Nome Solicitante"}>
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name={"registry"} label={"Matrícula"}>
                <Input readOnly />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={50}>
            <Col span={12}>
              <Form.Item name={"office"} label={"Cargo Solicitante"}>
                <Input readOnly />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name={"subsidiary"} label={"Filial"}>
                <Input readOnly />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={50}>
            <Col span={12}>
              <Form.Item name={"boss"} label={"Superior Imediato"}>
                <Input readOnly />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name={"who"}
                label={"Solicitação de Férias"}
                labelAlign="left"
              >
                <Radio.Group
                  defaultValue="ownVacation"
                  buttonStyle="solid"
                  onChange={onChangeRadio}
                >
                  <Radio.Button value={"ownVacation"}>Própria</Radio.Button>
                  <Radio.Button
                    value={"employeeVacation"}
                    style={{ marginLeft: "20px" }}
                  >
                    Colaborador
                  </Radio.Button>
                </Radio.Group>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </fieldset>
    </>
  );
}

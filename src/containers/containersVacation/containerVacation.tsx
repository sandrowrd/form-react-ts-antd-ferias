import {
  Input,
  InputNumber,
  Form,
  Row,
  Col,
  Tooltip,
  Checkbox,
  DatePicker,
  notification,
} from "antd";
import { useState } from "react";
import "../containersCommonFile/container.css";
import { FieldData } from "../containersCommonFile/containerInterface";
import { WarningOutlined } from "@ant-design/icons";

let upVacation = 30;

export default function ContainerVacation(props: any) {
  const [fieldsForm, setFieldsForm] = useState<FieldData[]>([
    { name: "unexcused", value: "" },
    { name: "vacationDays", value: upVacation },
    { name: "dateBeginVacation01", value: "" },
    { name: "daysVacation01", value: upVacation },
    { name: "dateEndVacation01", value: "" },
    { name: "dateBeginVacation02", value: "" },
    { name: "daysVacation02", value: "" },
    { name: "dateEndVacation02", value: "" },
    { name: "dateBeginVacation03", value: "" },
    { name: "daysVacation03", value: "" },
    { name: "dateEndVacation03", value: "" },
  ]);

  const [enaRow, setEnaRow] = useState({
    enaRow01: true,
    enaRow02: true,
  });

  const [form] = Form.useForm();
  const dayVacation = fieldsForm[1].value;

  const textData =
    "Informar a data de início das férias. Somente será permitido data de inicio após 60 dias da data de requisição. ";
  const textDays =
    "Se parcelado, o número de dias não poderá ser menor que 5 e uma das parcelas deve ser de 14 dias";

  const warningNote = (description) => {
    notification.open({
      message: "Atenção Erro no preenchimento",
      description: description,
      icon: <WarningOutlined style={{ color: "#FF0000" }} />,
      style: {
        background: "#bfcff7",
      },
      duration: 0,
    });
  };

  const dateEnd = (date, days) => {
    let data = new Date(date);
    data.setDate(data.getDate() + days);
    return data.toLocaleDateString("en-GB");
  };

  //Função para validação de data
  function validatorDate(value, name) {
    if (value === "") {
      return false;
    } else {
      const dayweek = value._d.getDay();

      if (dayweek === 0) {
        const aviso =
          "Dia de inicio da férias cai no domingo. Data não permitida. Favor corrigir";
        warningNote(aviso);
      } else if (dayweek === 6) {
        const aviso =
          "Dia de inicio da férias cai no sábado. Data não permitida. Favor corrigir";
        warningNote(aviso);
      }
      if (value) {
        const data = new Date(value._d);
        const today = new Date();
        let diff = Math.abs(data.getTime() - today.getTime());
        let dias = Math.ceil(diff / (1000 * 60 * 60 * 24));

        if (dias < 60) {
          const aviso =
            "Não é permitido escolher data abaixo de 60 dias após a data de requisição. Por favor verifique o preenchimento";

          warningNote(aviso);
          return false;
        } else if (name === "dateBeginVacation02") {
          const timeMin = Date.parse(fieldsForm[2].value._d);
          let refDate = new Date(timeMin);

          refDate.setDate(refDate.getDate() + parseInt(fieldsForm[3].value));

          if (data < refDate && data.getDate() < refDate.getDate()) {
            const aviso =
              "Data não pode ser inferior ou igual a data da primeira parcela. Favor selecionar uma data deferente da primeira parcela ";
            warningNote(aviso);

            return false;
          } else {
            return true;
          }
        } else if (name === "dateBeginVacation03") {
          const timeMin = Date.parse(fieldsForm[5].value._d);
          let refDate = new Date(timeMin);
          refDate.setDate(refDate.getDate() + parseInt(fieldsForm[6].value));

          if (data < refDate && data.getDate() < refDate.getDate()) {
            const aviso =
              "Data não pode ser inferior ou igual a data da primeira parcela. Favor selecionar uma data com diferença de no mínimo 30 dias ";
            warningNote(aviso);

            return false;
          } else {
            return true;
          }
        } else {
          return true;
        }
      }
    }
  }

  //Função para validação de dias
  const validatorDays = (value, name) => {
    let diffDays = 0;

    props.set({
      show01: true,
      show02: true,
    });

    if (name === "daysVacation01") {
      diffDays = dayVacation - value;

      if (
        (value >= 14 || diffDays >= 14) &&
        value <= dayVacation - 5 &&
        value >= 5
      ) {
        setEnaRow({
          enaRow01: false,
          enaRow02: true,
        });
        return diffDays;
      } else if (
        fieldsForm[4].value < 5 ||
        fieldsForm[4].value === undefined ||
        diffDays < 5
      ) {
        setEnaRow({
          enaRow01: true,
          enaRow02: true,
        });
      }
    } else if (name === "daysVacation02") {
      diffDays = dayVacation - fieldsForm[3].value - value;

      if (diffDays < 5) {
        setEnaRow({
          enaRow01: false,
          enaRow02: true,
        });
      } else if (
        value >= 14 ||
        diffDays === 14 ||
        (value >= 5 && value <= dayVacation - fieldsForm[3].value - 5)
      ) {
        setEnaRow({
          enaRow01: false,
          enaRow02: false,
        });
      }
    } else {
      setEnaRow({
        enaRow01: true,
        enaRow02: true,
      });
    }
    return diffDays;
  };

  return (
    <>
      <fieldset>
        <legend>Seleção de Férias</legend>
        <Form
          name="formVacation"
          labelCol={{ span: 9 }}
          wrapperCol={{ span: 12 }}
          labelAlign="left"
          fields={fieldsForm}
          form={form}
          onFieldsChange={(_, allfields) => {
            setFieldsForm(allfields);
          }}
        >
          <div>
            <Row gutter={15}>
              <Col span={10}>
                <Form.Item
                  name={"unexcused"}
                  label={"Faltas não justificadas"}
                  labelAlign="left"
                  labelCol={{ span: 14 }}
                  wrapperCol={{ span: 7 }}
                  rules={[
                    ({ getFieldsValue, setFieldsValue }) => ({
                      validator(_, value) {
                        if (value <= 5) {
                          form.setFieldsValue({
                            vacationDays: 30,
                            daysVacation01: 30,
                          });
                        } else if (value > 5 && value <= 14) {
                          form.setFieldsValue({
                            vacationDays: 24,
                            daysVacation01: 24,
                          });
                        } else if (value > 14 && value <= 23) {
                          form.setFieldsValue({
                            vacationDays: 18,
                            daysVacation01: 18,
                          });
                        } else if (value > 23 && value <= 32) {
                          form.setFieldsValue({
                            vacationDays: 12,
                            daysVacation01: 12,
                          });
                        } else {
                          form.setFieldsValue({
                            vacationDays: 0,
                            daysVacation01: 0,
                          });
                        }
                      },
                    }),
                  ]}
                >
                  <Input /* onChange={handleVacationDays} */ />
                </Form.Item>
              </Col>
              <Col span={14}>
                <Form.Item
                  name={"vacationDays"}
                  label={"Dias Aquisitivos de Férias"}
                  labelAlign="right"
                  labelCol={{ span: 16 }}
                  wrapperCol={{ span: 5 }}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>

            <Row
              gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
              justify="space-around"
              style={{ marginBottom: "50px" }}
            >
              <Checkbox value="checkAllowance">Abono</Checkbox>
              <Checkbox value="checkSalary13">13 Salário</Checkbox>
              <Checkbox value="checkAdvance">Adiantamento</Checkbox>
            </Row>
            <Row gutter={12} justify="space-around">
              <Tooltip placement="top" title={textData}>
                <Form.Item
                  label={"Data Início"}
                  name={"dateBeginVacation01"}
                  rules={[
                    {
                      required: true,
                      message:
                        "Obrigatório informar a data de inicio das férias.",
                    },
                    ({ getFieldValue, setFieldsValue }) => ({
                      validator(_, value) {
                        const validDate = validatorDate(
                          value,
                          "dateBeginVacation01"
                        );
                        let datEnd = "";

                        if (validDate) {
                          const vacationDay = getFieldValue("daysVacation01");

                          if (vacationDay) {
                            datEnd = dateEnd(Date.parse(value._d), vacationDay);
                          }

                          setFieldsValue({
                            dateEndVacation01: datEnd,
                          });
                          return Promise.resolve(
                            setFieldsValue({
                              dateEndVacation01: datEnd,
                            })
                          );
                        } else {
                          return Promise.reject(
                            new Error(
                              "Data negada. Favor digitar uma data correta"
                            )
                          );
                        }
                      },
                    }),
                  ]}
                >
                  <DatePicker allowClear format="DD/MM/YYYY" />
                </Form.Item>
              </Tooltip>

              <Tooltip placement="top" title={textDays}>
                <Form.Item
                  label={"Qto Dias"}
                  name={"daysVacation01"}
                  rules={[
                    {
                      required: true,
                      message: "Favor informar o número de dias de férias.",
                    },

                    ({ getFieldValue, setFieldsValue, setFields }) => ({
                      validator(_, value) {
                        const testDate = getFieldValue("dateBeginVacation01");

                        const validDate = validatorDate(
                          testDate,
                          "dateBeginVacation01"
                        );
                        const totalDays = getFieldValue("vacationDays");

                        if (testDate.length === 0) {
                          setFields([
                            {
                              name: "daysVacation01",
                              value: totalDays,
                            },
                          ]);
                          return Promise.reject(
                            new Error(
                              "Favor primeiro selecionar a data de inicio das férias corretamente."
                            )
                          );
                        } else if (totalDays < 19) {
                          const aviso =
                            "Numero de dias de férias insuficientes para parcelar férias. Valor será em cota única ";
                          warningNote(aviso);
                          setFieldsValue({
                            daysVacation01: totalDays,
                          });
                          return Promise.reject(
                            new Error("Não é permitido parcelar")
                          );
                        } else {
                          if (validDate) {
                            if (value < totalDays && value > totalDays - 2) {
                              const datEndP1 = dateEnd(
                                Date.parse(testDate._d),
                                totalDays - 5
                              );

                              const diffDays = validatorDays(
                                totalDays - 5,
                                "daysVacation01"
                              );

                              setFieldsValue({
                                daysVacation01: totalDays - 5,
                                dateEndVacation01: datEndP1,
                                daysVacation02: diffDays,
                                dateEndVacation02: "",
                                dateBeginVacation02: "",
                                daysVacation03: "",
                                dateEndVacation03: "",
                                dateBeginVacation03: "",
                              });

                              /* Se P2 e P3 igual 5 não permite que P1 aceite incrementar até 30 */
                            } else if (
                              getFieldValue("daysVacation02") < 6 &&
                              getFieldValue("daysVacation01") >=
                                getFieldValue("vacationDays") - 10 &&
                              getFieldValue("daysVacation03") === 5
                            ) {
                              console.log(
                                "Erro: Se P2 e P3 igual 5 não permite que P1 aceite incrementar até 30 "
                              );
                              return Promise.reject(
                                new Error("Máximo valor permitido")
                              );
                              /* Se P3=0 e P2<5 e P1>25  */
                            } else if (
                              getFieldValue("daysVacation02") <= 5 &&
                              getFieldValue("daysVacation01") > totalDays - 6
                            ) {
                              const datEndP1 = dateEnd(
                                Date.parse(testDate._d),
                                totalDays
                              );

                              setFieldsValue({
                                daysVacation01: totalDays,
                                dateEndVacation01: datEndP1,
                                daysVacation02: "",
                                dateEndVacation02: "",
                                dateBeginVacation02: "",
                              });

                              validatorDays(value, "daysVacation01");
                            } else {
                              const datEndP1 = dateEnd(
                                Date.parse(testDate._d),
                                value
                              );

                              /* dataInP2="" e diasP2=0 */
                              if (
                                getFieldValue("dateBeginVacation02") === "" &&
                                getFieldValue("daysVacation02") === ""
                              ) {
                                const diffDays = validatorDays(
                                  value,
                                  "daysVacation01"
                                );

                                setFieldsValue({
                                  dateEndVacation01: datEndP1,
                                  daysVacation02: diffDays,
                                  dateEndVacation02: "",
                                  dateBeginVacation02: "",
                                  daysVacation03: "",
                                  dateEndVacation03: "",
                                  dateBeginVacation03: "",
                                });
                              } else if (
                                getFieldValue("daysVacation02") !== ""
                              ) {
                                const dateBegin02 = getFieldValue(
                                  "dateBeginVacation02"
                                );
                                const diasP2 =
                                  totalDays -
                                  getFieldValue("daysVacation01") -
                                  getFieldValue("daysVacation03");
                                /* Existe data parcela 2 */
                                if (dateBegin02 !== "") {
                                  const datEndP2 = dateEnd(
                                    Date.parse(dateBegin02._d),
                                    value
                                  );
                                  /* Existe data parcela 2 e diasP3*/
                                  if (getFieldValue("daysVacation03") !== "") {
                                    const daysVac03 =
                                      getFieldValue("daysVacation03");

                                    const dataInP3 =
                                      getFieldValue("dateBeginVacation03") !==
                                      ""
                                        ? getFieldValue("dateBeginVacation03")
                                        : "";

                                    /* Existe dataP2 e dataP3 */
                                    if (dataInP3 !== "") {
                                      const datEndP3 = dateEnd(
                                        Date.parse(dataInP3._d),
                                        daysVac03
                                      );

                                      setFieldsValue({
                                        dateEndVacation01: datEndP1,
                                        daysVacation02: diasP2,
                                        dateEndVacation02: datEndP2,
                                        dateBeginVacation02: dateBegin02,
                                        daysVacation03: daysVac03,
                                        dateEndVacation03: datEndP3,
                                        dateBeginVacation03: dataInP3,
                                      });
                                    } else {
                                      setFieldsValue({
                                        dateEndVacation01: datEndP1,
                                        daysVacation02: diasP2,
                                        dateEndVacation02: datEndP2,
                                        dateBeginVacation02: dateBegin02,
                                        daysVacation03: daysVac03,
                                        dateEndVacation03: "",
                                        dateBeginVacation03: "",
                                      });
                                      validatorDays(diasP2, "daysVacation02");
                                    }
                                    /* Existe data parcela 2 e diasP3=0 */
                                  } else if (
                                    getFieldValue("daysVacation03") === ""
                                  ) {
                                    setFieldsValue({
                                      dateEndVacation01: datEndP1,
                                      daysVacation02: diasP2,
                                      dateEndVacation02: datEndP2,
                                      dateBeginVacation02: dateBegin02,
                                      daysVacation03: "",
                                      dateEndVacation03: "",
                                      dateBeginVacation03: "",
                                    });
                                  }
                                  /* Sem dataP2 */
                                } else {
                                  const diffDays = validatorDays(
                                    value,
                                    "daysVacation01"
                                  );

                                  setFieldsValue({
                                    dateEndVacation01: datEndP1,
                                    daysVacation02: diffDays,
                                    dateEndVacation02: "",
                                    dateBeginVacation02: "",
                                    daysVacation03: "",
                                    dateEndVacation03: "",
                                    dateBeginVacation03: "",
                                  });
                                }

                                return Promise.resolve();
                              }
                            }
                          } else {
                            return Promise.reject(
                              new Error("Data está invalida. Favor corrigir")
                            );
                          }
                        }
                      },
                    }),
                  ]}
                >
                  <InputNumber
                    min={5}
                    max={
                      form.getFieldValue("daysVacation02") < 6 &&
                      form.getFieldValue("daysVacation03") === 5
                        ? form.getFieldValue("vacationDays") -
                          form.getFieldValue("daysVacation02") -
                          form.getFieldValue("daysVacation03")
                        : form.getFieldValue("vacationDays")
                    }
                  />
                </Form.Item>
              </Tooltip>
              <Form.Item label={"Data Fim"} name={"dateEndVacation01"}>
                <Input readOnly />
              </Form.Item>
            </Row>
          </div>
          <div hidden={!enaRow.enaRow01 || !props.ena.show01 ? false : true}>
            <Row gutter={12} justify="space-around">
              <Tooltip placement="top" title={textData}>
                <Form.Item
                  label={"Data Início"}
                  name={"dateBeginVacation02"}
                  rules={[
                    {
                      required: true,
                      message:
                        "Obrigatório informar a data de inicio das férias.",
                    },
                    ({ getFieldValue, setFieldsValue }) => ({
                      validator(_, value) {
                        const validDate = validatorDate(
                          value,
                          "dateBeginVacation02"
                        );

                        let datEnd = "";
                        //console.log(validDate);
                        if (
                          getFieldValue("daysVacation01") < 14 &&
                          getFieldValue("daysVacation02") < 14 &&
                          getFieldValue("daysVacation03") < 14
                        ) {
                          const aviso =
                            "Uma das parcela tem que maior ou igual a 14 dias. Favor corrigir ";
                          warningNote(aviso);
                          return Promise.reject(
                            new Error("Parcelas não permitidas")
                          );
                        } else {
                          if (validDate) {
                            const vacationDay = getFieldValue("daysVacation02");

                            if (vacationDay) {
                              datEnd = dateEnd(
                                Date.parse(value._d),
                                vacationDay
                              );
                            }
                            setFieldsValue({
                              dateEndVacation02: datEnd,
                            });
                            return Promise.resolve(
                              setFieldsValue({
                                dateEndVacation02: datEnd,
                              })
                            );
                          } else {
                            return Promise.reject(
                              new Error(
                                "Data negada. Favor digitar uma data correta"
                              )
                            );
                          }
                        }
                      },
                    }),
                  ]}
                >
                  <DatePicker allowClear format="DD/MM/YYYY" />
                </Form.Item>
              </Tooltip>
              <Tooltip placement="top" title={textDays}>
                <Form.Item
                  label={"Qto Dias"}
                  name={"daysVacation02"}
                  rules={[
                    {
                      required: true,
                      message: "Favor informar o número de dias de férias.",
                    },

                    ({ getFieldValue, setFieldsValue, setFields }) => ({
                      validator(_, value) {
                        const testDate = getFieldValue("dateBeginVacation02");

                        const validDate = validatorDate(
                          testDate,
                          "dateBeginVacation02"
                        );
                        const totalDays = getFieldValue("vacationDays");

                        if (totalDays < 25) {
                          const aviso =
                            "Numero de dias de férias insuficientes para parcelar as férias em 3 vezes. ";
                          warningNote(aviso);
                          setFieldsValue({
                            daysVacation02:
                              totalDays - getFieldValue("daysVacation01"),
                          });
                          return Promise.reject(
                            new Error("Não é permitido parcelar")
                          );
                        } else {
                          if (testDate._d) {
                            if (validDate) {
                              if (
                                value <=
                                  totalDays - getFieldValue("daysVacation01") &&
                                value >=
                                  totalDays -
                                    getFieldValue("daysVacation01") -
                                    2
                              ) {
                                const datEndP2 = dateEnd(
                                  Date.parse(testDate._d),
                                  value - 4
                                );

                                setFields([
                                  { name: "daysVacation02", value: value - 4 },
                                  {
                                    name: "dateEndVacation02",
                                    value: datEndP2,
                                  },
                                  { name: "dateBeginVacation03", value: "" },
                                  { name: "daysVacation03", value: 5 },
                                  { name: "dateEndVacation03", value: "" },
                                ]);

                                validatorDays(value - 4, "daysVacation02");
                                /* caso reduza valor P3<5 e P2 aumenta */
                              } else if (
                                getFieldValue("daysVacation03") < 6 &&
                                getFieldValue("daysVacation02") >
                                  totalDays -
                                    getFieldValue("daysVacation01") -
                                    5
                              ) {
                                const daysVac02 =
                                  getFieldValue("vacationDays") -
                                  getFieldValue("daysVacation01");

                                const datEndP2 = dateEnd(
                                  Date.parse(testDate._d),
                                  daysVac02
                                );

                                setFieldsValue({
                                  daysVacation02: daysVac02,
                                  dateEndVacation02: datEndP2,
                                  daysVacation03: "",
                                  dateEndVacation03: "",
                                  dateBeguinVacation03: "",
                                });

                                validatorDays(daysVac02, "daysVacation02");
                              } else if (
                                getFieldValue("daysVacation02") < 6 &&
                                getFieldValue("daysVacation03") < 6
                              ) {
                                return Promise.reject();
                                /*Se ok  */
                              } else {
                                const diffDays = validatorDays(
                                  value,
                                  "daysVacation02"
                                );
                                const datEndP2 = dateEnd(
                                  Date.parse(testDate._d),
                                  value
                                );

                                /* Com o valor da data de inicio */
                                if (fieldsForm[8].value === "" || undefined) {
                                  setFieldsValue({
                                    dateEndVacation02: datEndP2,
                                    daysVacation03: diffDays,
                                    dateEndVacation03: "",
                                    dateBeguinVacation03: "",
                                  });
                                } else {
                                  const datEndP3 = dateEnd(
                                    Date.parse(fieldsForm[8].value._d),
                                    diffDays
                                  );

                                  setFieldsValue({
                                    dateEndVacation02: datEndP2,
                                    daysVacation03: diffDays,
                                    dateEndVacation03: datEndP3,
                                  });
                                }

                                return Promise.resolve();
                              }
                            } else {
                              return Promise.reject(
                                new Error("Data está invalida. Favor corrigir")
                              );
                            }
                          } else {
                            return Promise.reject(
                              new Error(
                                "Favor primeiro selecionar a data de inicio das férias corretamente."
                              )
                            );
                          }
                        }
                      },
                    }),
                  ]}
                >
                  <InputNumber
                    min={5}
                    max={
                      form.getFieldValue("vacationDays") -
                      form.getFieldValue("daysVacation01")
                    }
                  />
                </Form.Item>
              </Tooltip>
              <Form.Item label={"Data Fim"} name={"dateEndVacation02"}>
                <Input readOnly />
              </Form.Item>
            </Row>
          </div>
          <div hidden={!enaRow.enaRow02 || !props.ena.show02 ? false : true}>
            <Row gutter={12} justify="space-around">
              <Tooltip placement="top" title={textData}>
                <Form.Item
                  label={"Data Início"}
                  name={"dateBeginVacation03"}
                  rules={[
                    {
                      required: true,
                      message:
                        "Obrigatório informar a data de inicio das férias.",
                    },
                    ({ getFieldValue, setFieldsValue }) => ({
                      validator(_, value) {
                        const validDate = validatorDate(
                          value,
                          "dateBeginVacation03"
                        );
                        let datEnd = "";
                        //console.log(validDate);
                        if (
                          getFieldValue("daysVacation01") < 14 &&
                          getFieldValue("daysVacation02") < 14 &&
                          getFieldValue("daysVacation03") < 14
                        ) {
                          const aviso =
                            "Uma das parcela tem que maior ou igual a 14 dias. Favor corrigir ";
                          warningNote(aviso);
                          return Promise.reject(
                            new Error("Parcelas não permitidas")
                          );
                        } else {
                          if (validDate) {
                            const vacationDay = getFieldValue("daysVacation03");

                            if (vacationDay) {
                              datEnd = dateEnd(
                                Date.parse(value._d),
                                vacationDay
                              );
                            }

                            setFieldsValue({
                              dateEndVacation03: datEnd,
                            });
                            return Promise.resolve(
                              setFieldsValue({
                                dateEndVacation03: datEnd,
                              })
                            );
                          } else {
                            return Promise.reject(
                              new Error(
                                "Data negada. Favor digitar uma data correta"
                              )
                            );
                          }
                        }
                      },
                    }),
                  ]}
                >
                  <DatePicker allowClear format="DD/MM/YYYY" />
                </Form.Item>
              </Tooltip>
              <Form.Item label={"Qto Dias"} name={"daysVacation03"}>
                <InputNumber readOnly />
              </Form.Item>
              <Form.Item label={"Data Fim"} name={"dateEndVacation03"}>
                <Input readOnly />
              </Form.Item>
            </Row>
          </div>
        </Form>
      </fieldset>
    </>
  );
}

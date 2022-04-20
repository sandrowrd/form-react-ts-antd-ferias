import {
  Input,
  InputNumber,
  Form,
  Row,
  Col,
  Tooltip,
  DatePicker,
  notification,
  Radio,
  Space,
  Checkbox,
} from "antd";
import { useState, useEffect } from "react";
import "../containersCommonFile/container.css";
import { FieldData } from "../containersCommonFile/containerInterface";
import { WarningOutlined } from "@ant-design/icons";

//let upVacation = 30;

export default function ContainerVacation(props: any) {
  const [fieldsForm, setFieldsForm] = useState<FieldData[]>([
    { name: "periodEnd", value: "" },
    { name: "unexcused", value: "" },
    { name: "vacationDays", value: "" },
    { name: "dateBeginVacation01", value: "" },
    { name: "daysVacation01", value: "" },
    { name: "dateEndVacation01", value: "" },
    { name: "datePgto01", value: "" },
    { name: "dateBeginVacation02", value: "" },
    { name: "daysVacation02", value: "" },
    { name: "dateEndVacation02", value: "" },
    { name: "datePgto02", value: "" },
    { name: "dateBeginVacation03", value: "" },
    { name: "daysVacation03", value: "" },
    { name: "dateEndVacation03", value: "" },
    { name: "datePgto03", value: "" },
    { name: "abonoPec", value: "" },
    { name: "dtsal", value: "" },
  ]);

  const [enaRow, setEnaRow] = useState({
    enaRow01: true,
    enaRow02: true,
  });

  const [abono, setAbono] = useState(false);

  const [form] = Form.useForm();
  const dayVacation = form.getFieldValue("vacationDays");

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
      duration: 5,
    });
  };

  const dateEnd = (date, days) => {
    let data = new Date(date);
    data.setDate(data.getDate() + days);
    //console.log(data.toLocaleDateString("en-GB"));
    return data.toLocaleDateString("en-GB");
  };

  const datePgVacation = (dateBegin) => {
    let firstDate = new Date(dateBegin);
    const dayWeek = firstDate.getDay();
    let dataPgo = new Date(dateBegin);
    const num =
      dayWeek === 1
        ? 5
        : dayWeek === 2
        ? 6
        : dayWeek === 3
        ? 7
        : dayWeek === 4
        ? 8
        : dayWeek === 5
        ? 2
        : dayWeek === 6
        ? 3
        : 0;
    dataPgo.setDate(dataPgo.getDate() - num);
    //console.log(dayWeek);
    return dataPgo.toLocaleDateString("en-GB");
  };

  //Função para validação do dia do mes
  const validationDayDate = (dateBegin, dayVacation, chosenDate) => {
    const data01 = form.getFieldValue(dateBegin);
    const timeMin = Date.parse(data01._d);
    const newDate = new Date(timeMin);
    let refDate = new Date(
      newDate.getFullYear(),
      newDate.getMonth(),
      newDate.getDate()
    );
    const newChosenDate = new Date(
      chosenDate.getFullYear(),
      chosenDate.getMonth(),
      chosenDate.getDate()
    );

    const day = form.getFieldValue(dayVacation);
    refDate.setDate(refDate.getDate() + parseInt(day));
    //console.log(data01);
    //console.log(refDate);
    //console.log(newDate);
    //console.log(chosenDate);

    if (newChosenDate <= refDate) {
      if (
        newChosenDate.getMonth() === refDate.getMonth() &&
        newChosenDate.getDate() < refDate.getDate()
      ) {
        const aviso =
          "Data não pode ser inferior ou igual a data da primeira parcela. ";
        warningNote(aviso);
      } else if (newChosenDate.getMonth() < refDate.getMonth()) {
        const aviso =
          "Mês não pode ser inferior ao mês da primeira parcela. Favor corrigir.";
        warningNote(aviso);
      }
      return false;
    } else {
      return true;
    }
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
        const chosenDate = new Date(value._d);
        const today = new Date();
        let diff = Math.abs(chosenDate.getTime() - today.getTime());
        let dias = Math.ceil(diff / (1000 * 60 * 60 * 24));

        if (dias < 60) {
          const aviso =
            "Não é permitido escolher data abaixo de 60 dias após a data de requisição. Por favor verifique o preenchimento";

          warningNote(aviso);
          return false;
        } else if (name === "dateBeginVacation02") {
          return validationDayDate(
            "dateBeginVacation01",
            "daysVacation01",
            chosenDate
          );
        } else if (name === "dateBeginVacation03") {
          return validationDayDate(
            "dateBeginVacation02",
            "daysVacation02",
            chosenDate
          );
        } else {
          return true;
        }
      }
    }
  }

  //Função para validação de dias
  const validatorDays = (value, name) => {
    let diffDays = 0;
    const dayP1 = form.getFieldValue("daysVacation01");
    const dayP2 = form.getFieldValue("daysVacation02");

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
      } else if (dayP2 < 5 || dayP2 === undefined || diffDays < 5) {
        setEnaRow({
          enaRow01: true,
          enaRow02: true,
        });
      }
    } else if (name === "daysVacation02") {
      diffDays = dayVacation - dayP1 - value;

      if (diffDays < 5) {
        setEnaRow({
          enaRow01: false,
          enaRow02: true,
        });
      } else if (
        value >= 14 ||
        diffDays === 14 ||
        (value >= 5 && value <= dayVacation - dayP1 - 5)
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
          labelAlign="left"
          fields={fieldsForm}
          form={form}
          onFieldsChange={(_, allfields) => {
            setFieldsForm(allfields);
            //console.log(fieldsForm);
          }}
        >
          <Col span={20}>
            <Row justify="space-around">
              <Form.Item label={"Fim do Período Aquisitivo"} name={"periodEnd"}>
                <Input style={{ width: "120px" }} readOnly />
              </Form.Item>

              <Form.Item
                name={"unexcused"}
                label={"Faltas não justificadas"}
                rules={[
                  ({ setFieldsValue }) => ({
                    validator(_, value) {
                      if (value <= 5) {
                        setFieldsValue({
                          vacationDays: 30,
                          daysVacation01: 30,
                        });
                      } else if (value > 5 && value <= 14) {
                        setFieldsValue({
                          vacationDays: 24,
                          daysVacation01: 24,
                        });
                      } else if (value > 14 && value <= 23) {
                        setFieldsValue({
                          vacationDays: 18,
                          daysVacation01: 18,
                        });
                      } else if (value > 23 && value <= 32) {
                        setFieldsValue({
                          vacationDays: 12,
                          daysVacation01: 12,
                        });
                      } else {
                        setFieldsValue({
                          vacationDays: 0,
                          daysVacation01: 0,
                        });
                      }
                    },
                  }),
                ]}
              >
                <Input style={{ width: "60px" }} />
              </Form.Item>

              <Form.Item
                name={"vacationDays"}
                label={"Dias Aquisitivos de Férias"}
                labelAlign="right"
              >
                <Input style={{ width: "60px" }} readOnly />
              </Form.Item>
            </Row>
            <Row>
              <Form.Item
                name={"abonoPec"}
                rules={[
                  ({ getFieldValue, setFieldsValue }) => ({
                    validator(_, value) {
                      //console.log(value);
                      //console.log(abono);

                      if (abono) {
                        const third = (getFieldValue("vacationDays") / 3) * 2;
                        setFieldsValue({
                          vacationDays: third,
                          daysVacation01: third,
                        });
                      } else {
                        const dayvac = (getFieldValue("vacationDays") / 2) * 3;
                        setFieldsValue({
                          vacationDays: dayvac,
                          daysVacation01: dayvac,
                        });
                      }
                    },
                  }),
                ]}
              >
                <Checkbox
                  onChange={(value) => {
                    setAbono(value.target.checked);
                    //console.log(value);
                  }}
                  value={"checked"}
                >
                  Abono
                </Checkbox>
              </Form.Item>
            </Row>
          </Col>
          <Row>
            <Col span={20}>
              <Row justify="space-around">
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
                          const datePgo = datePgVacation(value._d);
                          //console.log(validDate);
                          if (validDate) {
                            const vacationDay = getFieldValue("daysVacation01");

                            if (vacationDay) {
                              datEnd = dateEnd(
                                Date.parse(value._d),
                                vacationDay
                              );
                            }
                            //console.log(datEnd);
                            //console.log(value._d);
                            setFieldsValue({
                              dateEndVacation01: datEnd,
                              datePgto01: datePgo,
                            });
                            return Promise.resolve(
                              setFieldsValue({
                                dateEndVacation01: datEnd,
                                datePgto01: datePgo,
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
                    <DatePicker
                      style={{ width: "120px" }}
                      allowClear
                      format="DD/MM/YYYY"
                    />
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

                          const datePgo = datePgVacation(testDate._d);

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
                                //console.log("Primeiro Click");
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
                                  datePgto01: datePgo,
                                  daysVacation02: diffDays,
                                  dateEndVacation02: "",
                                  dateBeginVacation02: "",
                                  datePgto02: "",
                                  daysVacation03: "",
                                  dateEndVacation03: "",
                                  dateBeginVacation03: "",
                                  datePgto03: "",
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
                                  datePgto01: datePgo,
                                  daysVacation02: "",
                                  dateEndVacation02: "",
                                  dateBeginVacation02: "",
                                  datePgto02: "",
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
                                    datePgto01: datePgo,
                                    daysVacation02: diffDays,
                                    dateEndVacation02: "",
                                    dateBeginVacation02: "",
                                    datePgto02: "",
                                    daysVacation03: "",
                                    dateEndVacation03: "",
                                    dateBeginVacation03: "",
                                    datePgto03: "",
                                  });
                                } else if (
                                  getFieldValue("daysVacation02") !== ""
                                ) {
                                  const dateBegin02 = getFieldValue(
                                    "dateBeginVacation02"
                                  );

                                  const datePgo2 = datePgVacation(
                                    dateBegin02._d
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
                                    if (
                                      getFieldValue("daysVacation03") !== ""
                                    ) {
                                      const daysVac03 =
                                        getFieldValue("daysVacation03");

                                      const dataInP3 =
                                        getFieldValue("dateBeginVacation03") !==
                                        ""
                                          ? getFieldValue("dateBeginVacation03")
                                          : "";

                                      const datePgo3 = datePgVacation(
                                        dataInP3._d
                                      );

                                      /* Existe dataP2 e dataP3 */
                                      if (dataInP3 !== "") {
                                        const datEndP3 = dateEnd(
                                          Date.parse(dataInP3._d),
                                          daysVac03
                                        );

                                        setFieldsValue({
                                          dateEndVacation01: datEndP1,
                                          datePgto01: datePgo,
                                          daysVacation02: diasP2,
                                          dateEndVacation02: datEndP2,
                                          dateBeginVacation02: dateBegin02,
                                          datePgto02: datePgo2,
                                          daysVacation03: daysVac03,
                                          dateEndVacation03: datEndP3,
                                          dateBeginVacation03: dataInP3,
                                          datePgto03: datePgo3,
                                        });
                                      } else {
                                        setFieldsValue({
                                          dateEndVacation01: datEndP1,
                                          datePgto01: datePgo,
                                          daysVacation02: diasP2,
                                          dateEndVacation02: datEndP2,
                                          dateBeginVacation02: dateBegin02,
                                          datePgto02: datePgo2,
                                          daysVacation03: daysVac03,
                                          dateEndVacation03: "",
                                          dateBeginVacation03: "",
                                          datePgto03: "",
                                        });
                                        validatorDays(diasP2, "daysVacation02");
                                      }
                                      /* Existe data parcela 2 e diasP3=0 */
                                    } else if (
                                      getFieldValue("daysVacation03") === ""
                                    ) {
                                      setFieldsValue({
                                        dateEndVacation01: datEndP1,
                                        datePgto01: datePgo,
                                        daysVacation02: diasP2,
                                        dateEndVacation02: datEndP2,
                                        dateBeginVacation02: dateBegin02,
                                        datePgto02: datePgo2,
                                        daysVacation03: "",
                                        dateEndVacation03: "",
                                        dateBeginVacation03: "",
                                        datePgto03: "",
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
                                      datePgto01: datePgo,
                                      daysVacation02: diffDays,
                                      dateEndVacation02: "",
                                      datePgto02: "",
                                      dateBeginVacation02: "",
                                      daysVacation03: "",
                                      dateEndVacation03: "",
                                      datePgto03: "",
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
                      style={{ width: "60px" }}
                    />
                  </Form.Item>
                </Tooltip>
                <Form.Item label={"Data Fim"} name={"dateEndVacation01"}>
                  <Input style={{ width: "120px" }} readOnly />
                </Form.Item>
                <Form.Item label={"Data Pgto"} name={"datePgto01"}>
                  <Input style={{ width: "120px" }} readOnly />
                </Form.Item>
              </Row>

              <div
                hidden={!enaRow.enaRow01 || !props.ena.show01 ? false : true}
              >
                <Row justify="space-around">
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
                            const datePgo2 = datePgVacation(value._d);
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
                                const vacationDay =
                                  getFieldValue("daysVacation02");

                                if (vacationDay) {
                                  datEnd = dateEnd(
                                    Date.parse(value._d),
                                    vacationDay
                                  );
                                }
                                setFieldsValue({
                                  dateEndVacation02: datEnd,
                                  datePgto02: datePgo2,
                                });
                                return Promise.resolve(
                                  setFieldsValue({
                                    dateEndVacation02: datEnd,
                                    datePgto02: datePgo2,
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
                      <DatePicker
                        style={{ width: "120px" }}
                        allowClear
                        format="DD/MM/YYYY"
                      />
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
                            const testDate = getFieldValue(
                              "dateBeginVacation02"
                            );

                            const validDate = validatorDate(
                              testDate,
                              "dateBeginVacation02"
                            );
                            const totalDays = getFieldValue("vacationDays");

                            const datePgo2 = datePgVacation(testDate._d);

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
                                      totalDays -
                                        getFieldValue("daysVacation01") &&
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
                                      {
                                        name: "daysVacation02",
                                        value: value - 4,
                                      },
                                      {
                                        name: "dateEndVacation02",
                                        value: datEndP2,
                                      },
                                      {
                                        name: "dateBeginVacation03",
                                        value: "",
                                      },
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
                                      datePgto02: datePgo2,
                                      daysVacation03: "",
                                      dateEndVacation03: "",
                                      dateBeguinVacation03: "",
                                      datePgto03: "",
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
                                    if (
                                      getFieldValue("dateBeginVacation03") ===
                                        "" ||
                                      undefined
                                    ) {
                                      setFieldsValue({
                                        dateEndVacation02: datEndP2,
                                        datePgto02: datePgo2,
                                        daysVacation03: diffDays,
                                        dateEndVacation03: "",
                                        dateBeguinVacation03: "",
                                        datePgto03: "",
                                      });
                                    } else {
                                      const datEndP3 = dateEnd(
                                        Date.parse(
                                          getFieldValue("dateBeginVacation03")
                                            ._d
                                        ),
                                        diffDays
                                      );

                                      const datePgo3 = datePgVacation(
                                        getFieldValue("dateBeginVacation03")._d
                                      );

                                      setFieldsValue({
                                        dateEndVacation02: datEndP2,
                                        datePgto02: datePgo2,
                                        daysVacation03: diffDays,
                                        dateEndVacation03: datEndP3,
                                        datePgto03: datePgo3,
                                      });
                                    }

                                    return Promise.resolve();
                                  }
                                } else {
                                  return Promise.reject(
                                    new Error(
                                      "Data está invalida. Favor corrigir"
                                    )
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
                        style={{ width: "60px" }}
                      />
                    </Form.Item>
                  </Tooltip>
                  <Form.Item label={"Data Fim"} name={"dateEndVacation02"}>
                    <Input style={{ width: "120px" }} readOnly />
                  </Form.Item>
                  <Form.Item label={"Data Pgto"} name={"datePgto02"}>
                    <Input style={{ width: "120px" }} readOnly />
                  </Form.Item>
                </Row>
              </div>
              <div
                hidden={!enaRow.enaRow02 || !props.ena.show02 ? false : true}
              >
                <Row justify="space-around">
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
                            const datePgo3 = datePgVacation(value._d);
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
                                const vacationDay =
                                  getFieldValue("daysVacation03");

                                if (vacationDay) {
                                  datEnd = dateEnd(
                                    Date.parse(value._d),
                                    vacationDay
                                  );
                                }

                                setFieldsValue({
                                  dateEndVacation03: datEnd,
                                  datePgto03: datePgo3,
                                });
                                return Promise.resolve(
                                  setFieldsValue({
                                    dateEndVacation03: datEnd,
                                    datePgto03: datePgo3,
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
                      <DatePicker
                        style={{ width: "120px" }}
                        allowClear
                        format="DD/MM/YYYY"
                      />
                    </Form.Item>
                  </Tooltip>
                  <Form.Item label={"Qto Dias"} name={"daysVacation03"}>
                    <InputNumber style={{ width: "60px" }} readOnly />
                  </Form.Item>
                  <Form.Item label={"Data Fim"} name={"dateEndVacation03"}>
                    <Input style={{ width: "120px" }} readOnly />
                  </Form.Item>
                  <Form.Item label={"Data Pgto"} name={"datePgto03"}>
                    <Input style={{ width: "120px" }} readOnly />
                  </Form.Item>
                </Row>
              </div>
            </Col>
            <Col span={4}>
              <Row>
                <Form.Item name={"dtsal"} style={{ marginTop: "-55px" }}>
                  <Radio.Group>
                    <Space
                      direction="vertical"
                      size={35}
                      style={{ display: "flex", marginTop: "-55px" }}
                    >
                      <Radio value={0} checked>
                        Não
                      </Radio>
                      <Radio value={1}>13 Sal</Radio>
                      <span
                        hidden={
                          !enaRow.enaRow01 || !props.ena.show01 ? false : true
                        }
                      >
                        <Radio value={2}>13 Sal</Radio>
                      </span>
                      <span
                        hidden={
                          !enaRow.enaRow02 || !props.ena.show02 ? false : true
                        }
                      >
                        <Radio value={3}>13 Sal</Radio>
                      </span>
                    </Space>
                  </Radio.Group>
                </Form.Item>
              </Row>
            </Col>
          </Row>
        </Form>
      </fieldset>
    </>
  );
}

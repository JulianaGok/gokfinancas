import React from "react";
import { useState } from "react";
import CurrencyInput from "./../../components/input-currency/currencyInput";
import {
  Titulo,
  Linha,
  Button,
  Container,
  Result,
} from "./../../components/calcStyles/styled";

export default function CalculoClt() {
  const [salario, setSalario] = useState("");
  const [beneficio, setBeneficio] = useState("");
  const [outros, setOutros] = useState("");
  const [resultado, setResultado] = useState(null);

  function calculo() {
    const convertSalary = parseFloat(
      salario.replace("R$", "").replace(",", "")
    );

    const convertBenefits = parseFloat(
      beneficio.replace("R$", "").replace(",", "")
    );

    const convertOthers = parseFloat(outros.replace("R$", "").replace(",", ""));

    const result =
      convertSalary + (convertBenefits || 0) + (convertOthers || 0);

    setResultado(result);
  }

  return (
    <Container>
      <Linha>
        <div>
          <Titulo>Digite o salário PJ:</Titulo>
          <CurrencyInput
            className="inputs"
            placeholder="R$ 0.00"
            type={"text"}
            value={salario}
            onChange={(e) => setSalario(e.target.value)}
          />
        </div>
        <div>
          <Titulo>Benefício Flash</Titulo>
          <CurrencyInput
            className="inputs"
            placeholder="R$ 0.00"
            type={"text"}
            value={beneficio}
            onChange={(e) => setBeneficio(e.target.value)}
          />
        </div>
        <div>
          <Titulo>Outros valores </Titulo>
          <CurrencyInput
            className="inputs"
            placeholder="R$ 0.00"
            type={"text"}
            value={outros}
            onChange={(e) => setOutros(e.target.value)}
          />
        </div>
      </Linha>
      {salario && (
        <>
          <Button onClick={() => calculo()}>Calcular</Button>

          {resultado && (
            <Result>
              Total:{" "}
              {resultado?.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </Result>
          )}
        </>
      )}
    </Container>
  );
}

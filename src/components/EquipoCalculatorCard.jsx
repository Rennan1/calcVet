import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const EquipoCalculatorCard = ({
  title,
  volumeLabel = "Valor total em mL",
  hoursLabel = "Em quantas horas?",
  factorPerHourToPerSecond,
  resultUnitLabel,
}) => {
  const [mlTotal, setMlTotal] = useState("");
  const [horas, setHoras] = useState("");
  const [resultado, setResultado] = useState("");

  const calcular = () => {
    const ml = Number(mlTotal);
    const h = Number(horas);

    if (!ml || !h || h <= 0) {
      setResultado("");
      return;
    }

    const mlPorHora = ml / h;
    const valorFinal = mlPorHora / factorPerHourToPerSecond;
    setResultado(valorFinal.toFixed(2));
  };

  const limpar = () => {
    setMlTotal("");
    setHoras("");
    setResultado("");
  };

  return (
    <div>
      <h1 className="text-xl mt-10">{title}</h1>
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row md:gap-5">
          <div className="flex flex-col">
            <label className="font-light">{volumeLabel}</label>
            <Input
              type="number"
              value={mlTotal}
              onChange={(e) => setMlTotal(e.target.value)}
              placeholder="Exemplo: 360"
              className="w-full md:h-12 md:max-w-[120px]"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-light">{hoursLabel}</label>
            <Input
              type="number"
              value={horas}
              onChange={(e) => setHoras(e.target.value)}
              placeholder="Exemplo: 2"
              className="w-full md:h-12 md:max-w-[120px]"
            />
          </div>
          <div className="flex gap-2 mt-1">
            <Button
              variant="outline"
              onClick={calcular}
              className="mt-5 hover:bg-green-500 md:h-12 transition hover:scale-105"
            >
              Calcular
            </Button>
            <Button
              variant="outline"
              onClick={limpar}
              className="mt-5 hover:bg-red-500 md:h-12 transition hover:scale-105"
            >
              Limpar
            </Button>
          </div>
        </div>
        {resultado && (
          <p className="text-lg font-bold mt-4 text-center">
            Resultado: {resultado} {resultUnitLabel}
          </p>
        )}
      </div>
    </div>
  );
};

export default EquipoCalculatorCard;

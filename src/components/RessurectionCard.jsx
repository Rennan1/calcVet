import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SquareActivity } from "lucide-react";

const RessurectionCard = ({
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
    <div className="bg-white p-4 shadow">
      <div className="flex gap-2">
        <SquareActivity className="text-primary" size={24} />
        <h1 className="text-xl text-primary font-light mb-2">{title}</h1>{" "}
      </div>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col md:flex-row md:gap-5 w-full">
          <div className="flex flex-col w-full md:flex-1">
            <label className="font-light">{volumeLabel}</label>
            <Input
              type="number"
              value={mlTotal}
              onChange={(e) => setMlTotal(e.target.value)}
              placeholder="Exemplo: 360"
              disabled
              className="w-full md:h-12 md:rounded-none"
            />
          </div>
          <div className="flex flex-col w-full md:flex-1">
            <label className="font-light">{hoursLabel}</label>
            <Input
              type="number"
              value={horas}
              disabled
              onChange={(e) => setHoras(e.target.value)}
              placeholder="Exemplo: 2"
              className="w-full md:h-12 md:rounded-none"
            />
          </div>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            disabled
            onClick={calcular}
            className="bg-primary text-white hover:bg-green-600 md:h-12 w-10/12 transition hover:scale-105 rounded-none"
          >
            Calcular
          </Button>
          <Button
            variant="outline"
            disabled
            onClick={limpar}
            className="hover:bg-red-700 md:h-12 transition w-2/12 hover:scale-105 rounded-none"
          >
            Limpar
          </Button>
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

export default RessurectionCard;

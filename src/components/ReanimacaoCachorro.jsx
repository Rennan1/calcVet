import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SquareActivity, Dog } from "lucide-react";

const ReanimacaoCachorro = ({ title, volumeLabel = "Peso do animal (kg)" }) => {
  const [pesoCachorro, setPesoCachorro] = useState("");
  const [resultado, setResultado] = useState(null)

  const calcular = () => {
    const kg = Number(pesoCachorro);

    const minimo = kg * 15;
    const maximo = kg * 20;

    setResultado({kg, minimo, maximo})
  };

  const limpar = () => {
    setPesoCachorro("");
    setResultado("")
  };

  return (
    <div className="bg-white p-4 shadow">
      <div className="flex gap-2">
        <Dog className="text-primary" size={24} />
        <h1 className="text-xl text-primary font-light mb-2">{title}</h1>{" "}
      </div>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col md:flex-row md:gap-5 w-full">
          <div className="flex flex-col w-full md:flex-1">
            <label className="font-light">{volumeLabel}</label>
            <Input
              type="number"
              value={pesoCachorro}
              onChange={(e) => setPesoCachorro(e.target.value)}
              placeholder="Exemplo: 10"
              className="w-full md:h-12 md:rounded-none"
            />
          </div>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            disabled={!pesoCachorro}
            onClick={calcular}
            className="bg-primary text-white hover:bg-green-600 md:h-12 w-10/12 transition hover:scale-105 rounded-none"
          >
            Calcular
          </Button>
          <Button
            variant="outline"
            disabled={!(pesoCachorro || !resultado)}
            onClick={limpar}
            className="hover:bg-red-700 md:h-12 transition w-2/12 hover:scale-105 rounded-none"
          >
            Limpar
          </Button>
        </div>
        {resultado && (
          <p className="text-xl font-bold mt-4 text-center bg-gray-50 text-primary rounded-full">
            A dose indicada para {resultado.kg}kg é de {resultado.minimo}mL até {resultado.maximo}mL
          </p>
        )}
      </div>
    </div>
  );
};

export default ReanimacaoCachorro;

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const RessurectionCard = () => {
  return (
    <div>
      <h1 className="text-xl mt-10">Calculo Ressuscitar</h1>
      <div className="flex flex-col md:flex-row mt-4 gap-2">
        <div className="flex flex-col">
          <label className="">Peso do animal (kg)</label>
          <Input
            placeholder="Exemplo: 18"
            className="w-full md:max-w-[120px]"
          />
        </div>

        <div className="flex flex-col">
          <label className="">Volume total (ml)</label>
          <Input
            placeholder="Exemplo: 360"
            className="w-full md:max-w-[120px]"
          />
        </div>
        <div className="flex gap-2 mt-1">
          <Button
            variant="outline"
            // onClick={calcular}
            className="mt-5 hover:bg-green-500 transition hover:scale-105"
          >
            Calcular
          </Button>
          <Button
            variant="outline"
            // onClick={limpar}
            className="mt-5 hover:bg-red-500 transition hover:scale-105"
          >
            Limpar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RessurectionCard;

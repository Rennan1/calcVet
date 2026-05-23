import { Input } from "@/components/ui/input";
import React from "react";
import EquipoCalculatorCard from "@/components/EquipoCalculatorCard";
import IntroFluidoterapia from "@/components/IntroFluidoterapia";
import FluidoterapiaTips from "@/components/FluidoterapiaTips";
import ReanimacaoCachorro from "@/components/ReanimacaoCachorro";
import ReanimacaoGato from "@/components/ReanimacaoGato";

const Fluidoterapia = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[7fr_3fr]">
      <div className="flex flex-col w-full max-w-[900px] mx-auto">
        <div className="mb-10">
          <IntroFluidoterapia />
        </div>
        <div className="flex flex-col gap-5 mt-5">
          <EquipoCalculatorCard
            title="Macro Equipo - 20 gotas/mL"
            factorPerHourToPerSecond={180}
            resultUnitLabel="gota(s)/segundo"
          />
          <EquipoCalculatorCard
            title="Micro Equipo - 60 microgotas/mL"
            factorPerHourToPerSecond={60}
            resultUnitLabel="microgota(s)/segundo"
          />
        </div>
      </div>
      <div>
        <FluidoterapiaTips />
      </div>
    </div>
  );
};

export default Fluidoterapia;

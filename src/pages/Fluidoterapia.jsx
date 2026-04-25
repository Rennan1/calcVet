import { Input } from "@/components/ui/input";
import React from "react";
import EquipoCalculatorCard from "@/components/EquipoCalculatorCard";
import IntroFluidoterapia from "@/components/IntroFluidoterapia";
import RessurectionCard from "@/components/RessurectionCard";

const Fluidoterapia = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <IntroFluidoterapia />
      <RessurectionCard />
      <div className=""></div>
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
  );
};

export default Fluidoterapia;

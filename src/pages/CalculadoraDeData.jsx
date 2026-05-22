import React from "react";
import IntroCalculadoraDeData from "@/components/IntroCalculadoraDeData";
import DiferencaDatas from "@/components/DiferencaDatas";
import AdicionarDias from "@/components/AdicionarDias";
import Adicionar21Dias from "@/components/Adicionar21Dias";
const CalculadoraDeData = () => {

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-[7fr_3fr]">
        <div className="flex flex-col w-full max-w-[900px] mx-auto">
          <IntroCalculadoraDeData />
          <div className="flex flex-col gap-5 mt-10">
            <Adicionar21Dias />
            <AdicionarDias />
            <DiferencaDatas />
          </div>
        </div>
      </div>
    </>
  );
};

export default CalculadoraDeData;

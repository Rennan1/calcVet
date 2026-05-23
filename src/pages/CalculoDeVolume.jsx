import React from "react";

import ReanimacaoCachorro from "@/components/ReanimacaoCachorro";
import ReanimacaoGato from "@/components/ReanimacaoGato";
import IntroCalculoDeVolume from "@/components/IntroCalculoDeVolume";

const CalculoDeVolume = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[7fr_3fr]">
      <div className="flex flex-col w-full max-w-[900px] mx-auto">
        <div className="mb-10">
          <IntroCalculoDeVolume />
        </div>

        <div className="flex flex-col gap-5 mt-5">
          <ReanimacaoCachorro title="Volume para Reanimação - Cachorro" />
          <ReanimacaoGato title="Volume para Reanimação - Gato" />
        </div>
      </div>
    </div>
  );
};

export default CalculoDeVolume;

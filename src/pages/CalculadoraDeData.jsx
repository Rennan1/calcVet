import React from "react";
import IntroCalculadoraDeData from "@/components/IntroCalculadoraDeData";
import { Calculator } from "lucide-react";
import DiferencaDatas from "@/components/DiferencaDatas";
import AdicionarDias from "@/components/AdicionarDias";
const CalculadoraDeData = () => {
  // const [dataInicial, setDataInicial] = React.useState("");
  // const [dataFinal, setDataFinal] = React.useState("");
  // const [diferencaDias, setDiferencaDias] = React.useState(null);

  const calcularDias = () => {
    const inicio = new Date(dataInicial);
    const fim = new Date(dataFinal);

    const diferencaMs = fim - inicio;

    const dias = diferencaMs / (1000 * 60 * 60 * 24);

    setDiferencaDias(dias);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-[7fr_3fr]">
        <div className="flex flex-col w-full max-w-[900px] mx-auto">
          <IntroCalculadoraDeData />
          <div className="flex flex-col gap-5 mt-10">
            <DiferencaDatas />

            <AdicionarDias />
          </div>
        </div>
      </div>
    </>
  );
};

export default CalculadoraDeData;

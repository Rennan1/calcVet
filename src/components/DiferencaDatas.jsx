import React from "react";
import { Calculator } from "lucide-react";


const DiferencaDatas = () => {
  const [dataInicial, setDataInicial] = React.useState("");
  const [dataFinal, setDataFinal] = React.useState("");
  const [diferencaDias, setDiferencaDias] = React.useState(null);

  const calcularDias = () => {
    const inicio = new Date(dataInicial);
    const fim = new Date(dataFinal);

    const diferencaMs = fim - inicio;

    const dias = diferencaMs / (1000 * 60 * 60 * 24);

    setDiferencaDias(dias);
  };
  return (
    <div className="bg-white p-4">
      <div className="text-xl text-primary font-light mb-2 flex items-center gap-2">
        <Calculator size={20} />
        Diferença entre datas
      </div>
      <div className="flex gap-5">
        <div>
          <label
            htmlFor="data-inicial"
            className="block text-sm font-medium mb-1"
          >
            Data Inicial
          </label>
          <input
            id="data-inicial"
            type="date"
            className="border border-black/40 rounded px-3 py-2"
            value={dataInicial}
            onChange={(e) => setDataInicial(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="data-final"
            className="block text-sm font-medium mb-1"
          >
            Data Final
          </label>
          <input
            id="data-final"
            type="date"
            className="border border-black/40 rounded px-3 py-2"
            value={dataFinal}
            onChange={(e) => setDataFinal(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-5">
          <button
            onClick={calcularDias}
            className="bg-primary hover:bg-green-800 text-white font-bold rounded py-2 px-4 mt-4"
          >
            Calcular Dias
          </button>
          {diferencaDias !== null && (
            <div className="mt-4">
              A diferença de dias é de <span className="font-bold text-green-600 text-xl">{diferencaDias?.toFixed(0)}</span> dia(s)
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DiferencaDatas;
